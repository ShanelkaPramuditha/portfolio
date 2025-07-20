'use client';

import { ProjectCard, ProjectCardSkeleton } from '@/components/custom/project-card';
import { Project, useProjects } from '@/hooks/use-projects';
import { IconLoader, IconStack } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';

export default function Page() {
  const [limit] = useState(8);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [projects, setProjects] = useState<Project[]>([]);
  const { data, isPending, isFetching } = useProjects(limit, page);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (data.length < limit) {
        setHasMore(false);
      }
      setProjects((prev) => {
        // Avoid duplicates if page is reset
        const ids = new Set(prev.map((p) => p.id));
        const newProjects = data.filter((p) => !ids.has(p.id));
        return [...prev, ...newProjects];
      });
    }
  }, [data, limit]);

  useEffect(() => {
    if (!hasMore || isPending) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }
    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isFetching, isPending]);

  if (isPending && page === 1) {
    return (
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {Array.from({ length: limit }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='mb-8 mt-4 flex flex-col items-center justify-center'>
        <div className='flex items-center gap-3 mb-2'>
          <IconStack className='h-8 w-8 text-blue-500' />
          <span className='text-3xl font-extrabold text-slate-900 dark:text-slate-50'>
            Featured Projects
          </span>
        </div>
        <p className='text-slate-600 dark:text-slate-300 text-center max-w-xl'>
          A selection of my latest work. Scroll down to explore more projects.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            language={project.language || ''}
            url={project.svn_url}
          />
        ))}
      </div>
      {hasMore && (
        <div ref={loaderRef} className='py-4 flex flex-col items-center justify-center'>
          {isFetching ? (
            <>
              <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2'>
                {Array.from({ length: 2 }).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
              <span className='inline-flex items-center gap-2 text-slate-400 text-sm'>
                <IconLoader className='animate-spin h-5 w-5 text-slate-400' />
                Loading more projects...
              </span>
            </>
          ) : (
            <span className='text-slate-400 text-sm'>Scroll to load more</span>
          )}
        </div>
      )}
      {!hasMore && <p className='py-4 text-center text-slate-400'>No more projects to load.</p>}
    </div>
  );
}
