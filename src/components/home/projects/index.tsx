'use client';

import React from 'react';
import ProjectCard from './ProjectCard/project-card';
import Link from 'next/link';

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen content-center'
    >
      <div className='px-4 mx-auto justify-center py-8 lg:py-16 my-10'>
        <h1 className='mb-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center'>
          Projects
        </h1>
        <div className='flex flex-wrap gap-10 w-full justify-center mx-auto'>
          <ProjectCard count={8} />
        </div>
        {/* View More */}
        <div className='flex justify-center'>
          <Link
            href='/projects'
            className='px-6 py-3 mt-10 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700'
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
