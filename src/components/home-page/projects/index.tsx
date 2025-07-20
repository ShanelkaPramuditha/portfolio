'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Projects() {
  return (
    <>
      <section id='projects' className='min-h-screen content-center'>
        Projects
        <Link href='/projects'>
          <Button className='bg-blue-500 text-white hover:bg-blue-600'>View All Projects</Button>
        </Link>
      </section>
    </>
  );
}
