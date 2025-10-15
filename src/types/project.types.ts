/**
 * Project Types
 * TypeScript types for GitHub projects
 */

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
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
};

export type FetchProjectsParams = {
  username: string;
  limit?: number;
  page?: number;
};
