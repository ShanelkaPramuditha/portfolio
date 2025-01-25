import { useQuery } from '@tanstack/react-query';
import { fetchGithub } from '@/services/github-fetch';

const useProjects = (count: number) => {
  const fetchGithubData = (): Promise<any> => fetchGithub(count);

  const {
    data: projects,
    isLoading: isLoadingProjects,
    isError: isErrorProjects,
  } = useQuery({
    queryKey: ['projects', count],
    queryFn: fetchGithubData,
  });

  // Sort projects by creation date (latest first)
  const sortedProjects = projects?.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return { sortedProjects, isLoadingProjects, isErrorProjects };
};

export default useProjects;
