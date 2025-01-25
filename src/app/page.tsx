import React, { lazy, Suspense } from 'react';

// Lazy load each component individually
const Hero = lazy(() => import('@components/home/hero'));
const Divider = lazy(() => import('@components/layout/divider'));
const About = lazy(() => import('@components/home/about'));
const Contact = lazy(() => import('@components/home/contact'));
const ScrollToTop = lazy(() => import('@components/layout/scroll-to-top'));
const Skills = lazy(() => import('@components/home/skills'));
const MaintenanceMode = lazy(
  () => import('@components/maintenance-mode/maintenance-mode'),
);
const Projects = lazy(() => import('@components/home/projects'));

export default function Home() {
  return (
    <main>
      {/* Wrap lazy-loaded components in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Projects />
        <Divider />
        {/* <Education /> */}
        <Contact />
        <Divider />
        <MaintenanceMode />
        <ScrollToTop />
      </Suspense>
    </main>
  );
}
