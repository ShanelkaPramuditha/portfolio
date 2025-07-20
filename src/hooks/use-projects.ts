import { useQuery } from '@tanstack/react-query';
import { data as github } from '@/constants/data';

export type Project = {
  id: string;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
  };
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  svn_url: string;
  language: string | null;
};

const GITHUB_API_URL = 'https://api.github.com';
const X_GITHUB_API_VERSION = '2022-11-28';

const fetchProjects = async (limit = 10, page = 1): Promise<Array<Project>> => {
  const params = new URLSearchParams({
    per_page: limit.toString(),
    page: page.toString(),
    type: 'owner',
    sort: 'created',
    direction: 'desc'
  });

  const response = await fetch(
    `${GITHUB_API_URL}/users/${github.githubUsername}/repos?${params.toString()}`,
    {
      headers: {
        accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': X_GITHUB_API_VERSION
      }
    }
  );
  const data = await response.json();

  return data;
};

const useProjects = (limit: number, page: number) => {
  return useQuery({
    queryKey: ['projects', limit, page],
    queryFn: () => fetchProjects(limit, page)
  });
};

export { useProjects, fetchProjects };
