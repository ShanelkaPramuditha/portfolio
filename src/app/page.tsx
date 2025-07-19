import { Skills } from '@/components/home-page/skills';
import { Hero } from '@/components/home-page/hero';
import { Experience } from '@/components/home-page/experience';
import { Projects } from '@/components/home-page/projects';
import { Education } from '@/components/home-page/education';
import { Contact } from '@/components/home-page/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
