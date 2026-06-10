'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { IconHome, IconRefresh } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service in production
    if (process.env.NODE_ENV === 'production') return;
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full min-h-[60vh] items-center justify-center px-4'>
      <div className='w-full max-w-md space-y-6 text-center'>
        <div className='space-y-2'>
          <p className='text-6xl font-bold text-muted-foreground/30 select-none'>500</p>
          <h1 className='text-2xl font-semibold tracking-tight'>Something went wrong</h1>
          <p className='text-sm text-muted-foreground'>
            An unexpected error occurred. Please try again or return home.
          </p>
        </div>

        <div className='flex flex-col justify-center gap-3 sm:flex-row'>
          <Button onClick={reset} variant='default' size='lg'>
            <IconRefresh className='mr-2 h-4 w-4' />
            Try again
          </Button>
          <Button asChild variant='outline' size='lg'>
            <Link href='/'>
              <IconHome className='mr-2 h-4 w-4' />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
