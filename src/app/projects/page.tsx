'use client';

import React from 'react';
import ProjectCard from '@/components/home/projects/ProjectCard/project-card';

const Projects = () => {
  return (
    <section
      id='projects'
      className='content-center min-h-[calc(100vh-112px)]'
    >
      <div className='px-4 mx-auto justify-center py-8 lg:py-16 my-10'>
        <h1 className='mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center'>
          Projects
        </h1>
        <div className='flex flex-wrap gap-10 w-full justify-center mx-auto'>
          <ProjectCard count={-1} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
