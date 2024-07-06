// import Education from '@/components/Education/education';
import React, { lazy, Suspense } from 'react';

const Hero = lazy(() => import('@/components/Hero/hero'));
const Divider = lazy(() => import('@/components/Divider/divider'));
const About = lazy(() => import('@/components/About/about'));
const Contact = lazy(() => import('@/components/Contact/contact'));

const ScrollToTop = lazy(
  () => import('@/components/ScrollToTop/scroll-to-top'),
);
// const Skills = lazy(() => import('@/components/Skills/skills'));

const MaintenanceMode = lazy(
  () => import('@/components/MaintenanceMode/maintenance-mode'),
);

const Projects = lazy(() => import('@/components/Projects/projects'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Divider />
      {/* <Skills /> */}
      <Projects />
      <Divider />
      {/* <Education /> */}
      <Contact />
      <Divider />
      <MaintenanceMode />
      <ScrollToTop />
    </main>
  );
}
