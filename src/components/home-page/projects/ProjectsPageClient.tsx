'use client';

import { useEffect, useRef, useState } from 'react';

import { ProjectCard, ProjectCardSkeleton } from '@/components/custom/project-card';
import { useProjects } from '@/queries/github.queries';
import { type Project } from '@/types/project.types';

export function ProjectsPageClient() {
  const [limit] = useState(8);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const { data, isPending, isFetching } = useProjects(limit, page);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (data.length < limit) setHasMore(false);
      setProjects((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        return [...prev, ...data.filter((p) => !ids.has(p.id))];
      });
    }
  }, [data, limit]);

  useEffect(() => {
    if (!hasMore || isPending) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) setPage((prev) => prev + 1);
      },
      { threshold: 1 }
    );
    const el = loaderRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasMore, isFetching, isPending]);

  const skeletonCount = isFetching
    ? limit - (projects.length % limit === 0 ? 0 : projects.length % limit)
    : isPending && page === 1
      ? limit
      : 0;

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-light tracking-tight sm:text-3xl'>Projects</h1>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
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
        {skeletonCount > 0 &&
          Array.from({ length: skeletonCount }).map((_, i) => (
            <ProjectCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>

      {hasMore && <div ref={loaderRef} className='h-4' />}

      {!hasMore && projects.length > 0 && (
        <p className='py-2 text-center text-sm text-muted-foreground'>All projects loaded.</p>
      )}
    </div>
  );
}
