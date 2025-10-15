import { motion } from 'motion/react';
import Image from 'next/image';
import { Github, Star, Link as LinkIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/ui/skeleton';

import { data } from '@/constants/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// The props remain the same
export function ProjectCard({
  title,
  description,
  tags,
  stars,
  url,
  githubUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  stars: number;
  url: string;
  githubUrl: string;
}) {
  // Get the current theme to dynamically update images
  const { theme } = useTheme();

  // Dynamically create the blurDataURL based on the theme
  const blurDataURL = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="${theme === 'dark' ? '#1e293b' : '#e2e8f0'
    }"/></svg>`
  )}`;

  return (
    <Card className='group relative mx-auto flex w-full flex-col overflow-hidden p-0.5 transition-all duration-500'>
      {/* Animated gradient border */}
      <motion.div
        initial={{ rotate: '0deg' }}
        animate={{ rotate: '360deg' }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: 'linear',
        }}
        className='absolute inset-0 z-0 bg-gradient-to-br from-sky-500 via-sky-500/0 to-sky-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
      />

      <div className='relative z-10 flex flex-col items-start overflow-hidden rounded-lg bg-white transition-colors duration-500 dark:bg-slate-900'>
        {/* Project Image */}
        <div className='relative h-40 w-full flex-shrink-0'>
          <Image
            priority
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            placeholder='blur'
            blurDataURL={blurDataURL}
            // THEME: Dynamically set the image theme
            src={`https://socialify.git.ci/${data.githubUsername
              }/${title}/png?font=KoHo&language=1&name=1&pattern=Circuit%20Board&theme=${theme === 'dark' ? 'Dark' : 'Light'
              }`}
            alt={title}
            style={{ objectFit: 'cover' }}
            className='rounded-t-lg'
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://opengraph.githubassets.com/1/${data.githubUsername}/${title}`;
            }}
          />
        </div>

        {/* Card Content */}
        <div className='flex w-full flex-col p-4'>
          <CardHeader className='p-0'>
            <CardTitle className='mb-1 line-clamp-1 text-lg font-bold text-slate-900 dark:text-slate-50'>
              {title
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </CardTitle>
            <CardDescription className='line-clamp-2 min-h-[2.5rem] text-slate-600 dark:text-slate-400'>
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className='mt-4 p-0'>
            <div className='flex min-h-[2rem] flex-wrap gap-2'>
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={'outline'}
                  className='rounded-full text-xs font-semibold h-6'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className='mt-4 flex items-center justify-between p-0'>
            <div className='flex items-center gap-2 text-slate-700 dark:text-slate-300'>
              <Star className='h-4 w-4 text-yellow-500 dark:text-yellow-400' />
              <span className='text-sm font-medium'>{stars}</span>
            </div>
            <div className='flex items-center gap-4'>
              <a
                href={githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400'
                title='View on GitHub'
              >
                <Github className='h-5 w-5' />
              </a>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400'
                title='View Live Project'
              >
                <LinkIcon className='h-5 w-5' />
              </a>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card className='group relative mx-auto flex w-full flex-col overflow-hidden p-0.5'>
      <div className='relative z-10 flex flex-col items-start overflow-hidden rounded-lg bg-white dark:bg-slate-900'>
        {/* Image Skeleton */}
        <div className='relative h-40 w-full flex-shrink-0'>
          <Skeleton className='h-full w-full rounded-t-lg bg-slate-200 dark:bg-slate-800' />
        </div>

        {/* Content Skeleton */}
        <div className='flex flex-col p-4'>
          {/* Header Skeleton */}
          <div className='w-full'>
            <Skeleton className='mb-2 h-6 w-3/4 bg-slate-200 dark:bg-slate-800' />
            <Skeleton className='h-4 w-full bg-slate-200 dark:bg-slate-800' />
            <Skeleton className='mt-1 h-4 w-5/6 bg-slate-200 dark:bg-slate-800' />
          </div>

          {/* Tags Skeleton */}
          <div className='mt-4 flex min-h-[2rem] flex-wrap gap-2'>
            <Skeleton className='h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-800' />
            <Skeleton className='h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-800' />
            <Skeleton className='h-6 w-14 rounded-full bg-slate-200 dark:bg-slate-800' />
          </div>

          {/* Footer Skeleton */}
          <div className='mt-4 flex items-center justify-between'>
            <Skeleton className='h-5 w-12 bg-slate-200 dark:bg-slate-800' />
            <div className='flex items-center gap-4'>
              <Skeleton className='h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800' />
              <Skeleton className='h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800' />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}