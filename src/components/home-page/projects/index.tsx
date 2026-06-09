'use client';

import { ProjectCard, ProjectCardSkeleton } from '@/components/custom/project-card';
import { useProjects } from '@/queries/github.queries';
import Link from 'next/link';

export function Projects() {
  const { data: projects, isPending } = useProjects(6, 1);

  return (
    <section id='projects' className='w-full space-y-6'>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-light tracking-tight sm:text-3xl'>Projects</p>
        <Link
          href='/projects'
          className='font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground'
        >
          View all →
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {(isPending || !projects) &&
          Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)}

        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description || 'No description provided.'}
              stars={project.fork ? 0 : project.stargazers_count}
              tags={project.language ? [project.language] : ['Code']}
              url={project.svn_url}
              githubUrl={project.html_url}
            />
          ))}
      </div>
    </section>
  );
}
