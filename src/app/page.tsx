import { Skills } from '@/components/home-page/skills';
import { Hero } from '@/components/home-page/hero';
import { Experience } from '@/components/home-page/experience';
import { Education } from '@/components/home-page/education';
import { Projects } from '@/components/home-page/projects';
import { Contact } from '@/components/home-page/contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Hero />
      <Separator className='my-10' />

      <Experience />
      <Separator className='my-10' />

      <Education />
      <Separator className='my-10' />

      <Skills />
      <Separator className='my-10' />

      <Projects />
      <Separator className='my-10' />

      <Contact />
    </>
  );
}
