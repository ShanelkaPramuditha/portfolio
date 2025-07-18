import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useProjects from '@/hooks/use-projects';
import { data } from '@/constants/data';
import Spinner from '@/components/layout/spinner';

interface ProjectCardProps {
  count: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ count }) => {
  const { sortedProjects, isLoadingProjects, isErrorProjects } =
    useProjects(count);

  return (
    <>
      {isLoadingProjects ? (
        <div>
          <Spinner />
        </div>
      ) : isErrorProjects ? (
        <div>
          <h1 className='text-2xl text-red-500'>Error fetching projects</h1>
        </div>
      ) : (
        sortedProjects?.map((project: any) => (
          <div
            key={project.id}
            className='w-64 relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 h-full'
          >
            <Link
              href={project.html_url}
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <Image
                  src={`https://socialify.git.ci/${data.githubUsername}/${project.name}/png?font=KoHo&language=1&name=1&pattern=Circuit%20Board&theme=Auto`}
                  alt='Project Icon'
                  width={500}
                  height={500}
                  className='rounded-t-lg'
                />
              </div>

              <div className='p-5 h-48'>
                <div>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1'>
                    {project.name}
                  </h5>
                </div>
                <p className='mb-4 text-gray-700 dark:text-gray-300 line-clamp-3'>
                  {project.description
                    ? `${project.description}`
                    : `${project.name} project`}
                </p>
                <div className='absolute bottom-2 right-0'>
                  {project.language && (
                    <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                      {project.language}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default ProjectCard;
