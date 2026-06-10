import type { Metadata } from 'next';
import Link from 'next/link';
import { IconAlertTriangle, IconArrowLeft, IconHome } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <div className='flex h-full items-center justify-center px-4 py-8'>
      <div className='mx-auto w-full max-w-2xl text-center'>
        <div className='relative mb-8 animate-in duration-500 fade-in slide-in-from-bottom-4'>
          <div className='text-8xl font-bold text-primary/20 select-none md:text-9xl'>404</div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <IconAlertTriangle className='h-16 w-16 animate-pulse text-primary md:h-20 md:w-20' />
          </div>
        </div>

        <div className='mb-8 animate-in space-y-4 delay-150 duration-500 fill-mode-both fade-in slide-in-from-bottom-4'>
          <h1 className='text-3xl font-bold text-foreground md:text-4xl'>Oops! Page Not Found</h1>
          <p className='mx-auto max-w-md text-lg text-muted-foreground'>
            The page you&apos;re looking for seems to have wandered off into the digital void.
            Don&apos;t worry, it happens to the best of us!
          </p>
        </div>

        <div className='flex animate-in flex-col justify-center gap-4 delay-300 duration-500 fill-mode-both fade-in slide-in-from-bottom-4 sm:flex-row'>
          <Button asChild size='lg' className='group'>
            <Link href='/'>
              <IconHome className='mr-2 h-4 w-4 transition-transform group-hover:scale-110' />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant='outline' size='lg' className='group'>
            <Link href='/projects'>
              <IconArrowLeft className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              View Projects
            </Link>
          </Button>
        </div>

        <div className='mt-12 flex animate-in justify-center space-x-2 delay-500 duration-500 fill-mode-both fade-in'>
          <div className='h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]' />
          <div className='h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]' />
          <div className='h-2 w-2 animate-bounce rounded-full bg-primary' />
        </div>
      </div>
    </div>
  );
}
