import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconArrowLeft, IconHome, IconAlertTriangle } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <div className='h-full flex items-center justify-center px-4 py-8'>
      <div className='max-w-2xl mx-auto text-center w-full'>
        <div className='relative mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500'>
          <div className='text-8xl md:text-9xl font-bold text-primary/20 select-none'>404</div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <IconAlertTriangle className='w-16 h-16 md:w-20 md:h-20 text-primary animate-pulse' />
          </div>
        </div>

        <div className='space-y-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both'>
          <h1 className='text-3xl md:text-4xl font-bold text-foreground'>Oops! Page Not Found</h1>
          <p className='text-lg text-muted-foreground max-w-md mx-auto'>
            The page you&apos;re looking for seems to have wandered off into the digital void.
            Don&apos;t worry, it happens to the best of us!
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both'>
          <Button asChild size='lg' className='group'>
            <Link href='/'>
              <IconHome className='w-4 h-4 mr-2 group-hover:scale-110 transition-transform' />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant='outline' size='lg' className='group'>
            <Link href='/projects'>
              <IconArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
              View Projects
            </Link>
          </Button>
        </div>

        <div className='mt-12 flex justify-center space-x-2 animate-in fade-in duration-500 delay-500 fill-mode-both'>
          <div className='w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]' />
          <div className='w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]' />
          <div className='w-2 h-2 bg-primary rounded-full animate-bounce' />
        </div>
      </div>
    </div>
  );
}
