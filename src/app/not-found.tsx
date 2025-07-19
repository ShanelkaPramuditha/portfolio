'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconArrowLeft, IconHome, IconAlertTriangle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='h-full flex items-center justify-center px-4 py-8'>
      <div className='max-w-2xl mx-auto text-center w-full'>
        {/* Animated 404 */}
        <div
          className={`relative mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='text-8xl md:text-9xl font-bold text-primary/20 select-none'>404</div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <IconAlertTriangle className='w-16 h-16 md:w-20 md:h-20 text-primary animate-pulse' />
          </div>
        </div>

        {/* Error message */}
        <div
          className={`space-y-4 mb-8 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className='text-3xl md:text-4xl font-bold text-foreground'>Oops! Page Not Found</h1>
          <p className='text-lg text-muted-foreground max-w-md mx-auto'>
            The page you&apos;re looking for seems to have wandered off into the digital void.
            Don&apos;t worry, it happens to the best of us!
          </p>
        </div>

        {/* Action buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button asChild size='lg' className='group'>
            <Link href='/'>
              <IconHome className='w-4 h-4 mr-2 group-hover:scale-110 transition-transform' />
              Back to Home
            </Link>
          </Button>

          <Button
            variant='outline'
            size='lg'
            onClick={() => window.history.back()}
            className='group'
          >
            <IconArrowLeft className='w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform' />
            Go Back
          </Button>
        </div>

        {/* Fun animation */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='flex justify-center space-x-2'>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
