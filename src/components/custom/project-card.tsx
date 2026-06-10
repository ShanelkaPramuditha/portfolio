'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Link as LinkIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Skeleton } from '@/components/ui/skeleton';
import { data } from '@/constants/data';

export function ProjectCard({
  title,
  description,
  tags,
  url,
  githubUrl
}: {
  title: string;
  description: string;
  tags: string[];
  stars: number;
  url: string;
  githubUrl: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Before mount, default to dark (matches defaultTheme) to avoid layout shift
  const isDark = !mounted ? true : resolvedTheme === 'dark';

  const displayTitle = title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const blurDataURL = `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="${isDark ? '#1e293b' : '#e2e8f0'}"/></svg>`
  )}`;

  return (
    <div className='group flex w-full flex-col gap-2 overflow-hidden rounded-xl border border-dashed border-border/80 bg-card p-2 transition-colors duration-300 hover:border-border'>
      {/* Image */}
      <div className='overflow-hidden rounded-lg'>
        <Image
          width={600}
          height={300}
          placeholder='blur'
          blurDataURL={blurDataURL}
          src={`https://socialify.git.ci/${data.githubUsername}/${title}/png?font=KoHo&language=1&name=1&pattern=Circuit%20Board&theme=${isDark ? 'Dark' : 'Light'}`}
          alt={displayTitle}
          className='w-full rounded-lg border border-border/80 object-cover'
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://opengraph.githubassets.com/1/${data.githubUsername}/${title}`;
          }}
        />
      </div>

      {/* Title + description */}
      <div className='mt-2 px-2'>
        <p className='text-base font-light tracking-tight'>{displayTitle}</p>
        <p className='mt-1 line-clamp-2 text-sm text-muted-foreground'>{description}</p>
      </div>

      {/* Tags */}
      <div className='mt-2 flex flex-wrap items-center gap-3 px-2'>
        {tags.map((tag) => (
          <span key={tag} className='text-xs text-muted-foreground'>
            {tag}
          </span>
        ))}
      </div>

      <div className='mx-2 h-px bg-border' />

      {/* Footer */}
      <div className='flex items-center justify-between px-2 pb-1'>
        <div className='flex items-center gap-3'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${displayTitle} website`}
          >
            <LinkIcon className='h-4 w-4 text-muted-foreground transition-colors hover:text-foreground' />
          </a>
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`View ${displayTitle} on GitHub`}
          >
            <Github className='h-4 w-4 text-muted-foreground transition-colors hover:text-foreground' />
          </a>
        </div>
        <Link
          href={`/projects/${title.toLowerCase()}`}
          className='font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground'
        >
          Details →
        </Link>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className='flex w-full flex-col gap-2 overflow-hidden rounded-xl border border-dashed border-border/80 bg-card p-2'>
      {/* Image placeholder - same aspect ratio as the card image (600×300 = 2:1) */}
      <Skeleton className='aspect-[2/1] w-full rounded-lg' />
      <div className='mt-2 space-y-2 px-2'>
        <Skeleton className='h-5 w-3/4' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-5/6' />
      </div>
      <div className='mt-2 flex gap-3 px-2'>
        <Skeleton className='h-3 w-12' />
      </div>
      <div className='mx-2 h-px bg-border' />
      <div className='flex items-center justify-between px-2 pb-1'>
        <div className='flex gap-3'>
          <Skeleton className='h-4 w-4 rounded' />
          <Skeleton className='h-4 w-4 rounded' />
        </div>
        <Skeleton className='h-3 w-14' />
      </div>
    </div>
  );
}
