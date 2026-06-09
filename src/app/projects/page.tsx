'use client';

import { ProjectCard, ProjectCardSkeleton } from '@/components/custom/project-card';
import { useProjects } from '@/queries/github.queries';
import { Project } from '@/types/project.types';
import { Loader2 } from 'lucide-react';
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
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {Array.from({ length: limit }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4'>
      <div className='mb-8 mt-4'>
        <p className='text-2xl font-light tracking-tight sm:text-3xl'>Projects</p>
        <p className='mt-1 text-sm text-muted-foreground'>
          All public repositories. Scroll down to load more.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
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
      </div>
      {hasMore && (
        <div ref={loaderRef} className='py-4 flex flex-col items-center justify-center'>
          {isFetching ? (
            <>
              <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2'>
                {Array.from({ length: 4 }).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
              <span className='inline-flex items-center gap-2 text-muted-foreground text-sm'>
                <Loader2 className='animate-spin h-4 w-4' />
                Loading more projects...
              </span>
            </>
          ) : (
            <span className='text-muted-foreground text-sm'>Scroll to load more</span>
          )}
        </div>
      )}
      {!hasMore && (
        <p className='py-4 text-center text-muted-foreground text-sm'>
          No more public projects to load.
        </p>
      )}
    </div>
  );
}
