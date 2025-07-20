'use client';

import { Project, useProjects } from '@/hooks/use-projects';
import { useState, useRef, useEffect } from 'react';

export default function Page() {
  const [limit] = useState(10);
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

  if (isPending && page === 1) return <div>Loading</div>;

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <div key={project.id} className='p-4 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold'>{project.name}</h2>
            <p className='text-gray-700'>{project.language}</p>
          </div>
        ))}
      </div>
      {hasMore && (
        <div ref={loaderRef} className='py-4 text-center'>
          {isFetching ? <p>Loading more projects...</p> : <span>Scroll to load more</span>}
        </div>
      )}
      {!hasMore && <p className='py-4 text-center'>No more projects to load.</p>}
    </div>
  );
}
