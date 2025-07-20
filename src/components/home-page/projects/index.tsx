'use client';

import { ProjectCard, ProjectCardSkeleton } from '@/components/custom/project-card';
import { Button } from '@/components/ui/button';
import { useProjects } from '@/hooks/use-projects';
import Link from 'next/link';

export function Projects() {
  const { data: projects, isPending } = useProjects(8, 1);

  return (
    <section id='projects' className='min-h-screen flex flex-col items-center justify-center py-12'>
      <div className='max-w-3xl w-full text-center mb-8'>
        <h2 className='text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-2'>
          Featured Projects
        </h2>
        <p className='text-slate-600 dark:text-slate-300 mb-4'>
          A selection of my latest work. Explore more by clicking below.
        </p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {isPending ||
          !projects ||
          (projects?.length !== undefined &&
            Array.from({ length: 4 }).map((_, i) => <ProjectCardSkeleton key={i} />))}

        {projects?.length !== undefined &&
          projects?.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              language={project.language || ''}
              url={project.svn_url}
            />
          ))}
      </div>
      <div className='w-full flex justify-end'>
        <Link href='/projects'>
          <Button variant={'default'}>View More</Button>
        </Link>
      </div>
    </section>
  );
}
