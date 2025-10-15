/**
 * GitHub Service
 * Handles all GitHub-related API calls
 */

import { data as github } from '@/constants/data';
import { Project, FetchProjectsParams } from '@/types/project.types';

const GITHUB_API_URL = 'https://api.github.com';
const X_GITHUB_API_VERSION = '2022-11-28';

/**
 * Fetch user's GitHub repositories
 * @param params - Fetch parameters
 * @returns Promise with array of projects
 */
export const fetchProjects = async ({
  username = github.githubUsername,
  limit = 10,
  page = 1
}: FetchProjectsParams): Promise<Array<Project>> => {
  const params = new URLSearchParams({
    per_page: limit.toString(),
    page: page.toString(),
    type: 'owner',
    sort: 'created',
    direction: 'desc'
  });

  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?${params.toString()}`, {
    headers: {
      accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': X_GITHUB_API_VERSION
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();
  return data;
};
