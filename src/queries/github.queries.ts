/**
 * GitHub Queries Hook
 * TanStack Query hooks for GitHub operations
 */

import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { data as github } from '@/constants/data';
import { fetchProjects } from '@/services/github.service';
import { type Project } from '@/types/project.types';

/**
 * Query key factory for projects
 */
export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
  list: (limit: number, page: number) => [...projectKeys.lists(), { limit, page }] as const
};

/**
 * Hook for fetching GitHub projects
 * @param limit - Number of projects per page
 * @param page - Page number
 * @param options - Optional query options
 */
export const useProjects = (
  limit = 10,
  page = 1,
  options?: Omit<
    UseQueryOptions<Array<Project>, Error, Array<Project>, ReturnType<typeof projectKeys.list>>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery({
    queryKey: projectKeys.list(limit, page),
    queryFn: () =>
      fetchProjects({
        username: github.githubUsername,
        limit,
        page
      }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options
  });
};
