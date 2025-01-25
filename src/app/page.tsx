import { Separator } from '@/components/ui/separator';
import React, { lazy, Suspense } from 'react';

// Lazy load each component individually
const Hero = lazy(() => import('@/components/home/hero'));
const About = lazy(() => import('@/components/home/about'));
const Contact = lazy(() => import('@/components/home/contact'));
const ScrollToTop = lazy(() => import('@/components/layout/scroll-to-top'));
// const Skills = lazy(() => import('@/components/home/skills'));
const MaintenanceMode = lazy(() => import('@/components/maintenance-mode'));
const Projects = lazy(() => import('@/components/home/projects'));

export default function Home() {
  return (
    <main>
      {/* Wrap lazy-loaded components in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Separator orientation="horizontal" />
        <About />
        <Separator orientation="horizontal" />
        {/* <Skills /> */}
        <Projects />
        <Separator orientation="horizontal" />
        {/* <Education /> */}
        <Contact />
        <Separator orientation="horizontal" />
        <MaintenanceMode />
        <ScrollToTop />
      </Suspense>
    </main>
  );
}
