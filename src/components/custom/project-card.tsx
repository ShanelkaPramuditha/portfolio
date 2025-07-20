import { Skeleton } from '@/components/ui/skeleton';

export function ProjectCardSkeleton() {
  return (
    <Card className='group relative mx-auto w-full overflow-hidden p-0.5'>
      <div className='relative z-10 flex flex-col items-start overflow-hidden h-full'>
        <div className='relative w-full h-40 flex-shrink-0'>
          <Skeleton className='absolute top-0 left-0 w-full h-full rounded-t-lg' />
        </div>
        <CardContent className='p-4 w-full'>
          <Skeleton className='mb-2 w-3/4 h-5' />
        </CardContent>
        <CardFooter className='p-4 w-full relative'>
          <Skeleton className='absolute bottom-4 right-4 w-16 h-6 rounded-full' />
        </CardFooter>
      </div>
    </Card>
  );
}
import { motion } from 'motion/react';
import Image from 'next/image';
import { data } from '@/constants/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

export function ProjectCard({
  title,
  language,
  url
}: {
  title?: string;
  language?: string;
  url?: string;
}) {
  return (
    <Link href={url || '#'} passHref target='_blank' rel='noopener noreferrer'>
      <Card className='group relative mx-auto w-full overflow-hidden p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50 hover:cursor-pointer'>
        <div className='relative z-10 flex flex-col items-start overflow-hidden transition-colors duration-500 group-hover:bg-slate-800 h-full'>
          <div className='relative w-full h-40 flex-shrink-0'>
            <Image
              priority
              fill
              placeholder='blur'
              blurDataURL='https://via.placeholder.com/500'
              src={`https://socialify.git.ci/${data.githubUsername}/${title}/png?font=KoHo&language=1&name=1&pattern=Circuit%20Board&theme=Auto`}
              alt={title || 'Project Image'}
              style={{ objectFit: 'cover' }}
              className='rounded-t-lg'
              onError={(e) => {
                // fallback to opengraph if socialify fails
                const target = e.target as HTMLImageElement;
                target.src = `https://opengraph.githubassets.com/${data.githubUsername}/${title}`;
              }}
            />
          </div>
          <CardContent className='p-4 w-full'>
            <div
              className='mb-2 w-full text-md font-bold text-slate-50 truncate cursor-pointer'
              title={title}
              style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {title
                ? title
                    .split('-')
                    .map((word) => word.trim())
                    .filter(Boolean)
                    .map((word) =>
                      word
                        .split(' ')
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(' ')
                    )
                    .join(' ')
                : ''}
            </div>
          </CardContent>
          <CardFooter className='p-4 w-full relative'>
            <span className='absolute bottom-4 right-4 inline-block px-3 py-1 rounded-full bg-slate-700 text-xs font-semibold text-slate-200 shadow'>
              {language || '</>'}
            </span>
          </CardFooter>
        </div>

        <motion.div
          initial={{ rotate: '0deg' }}
          animate={{ rotate: '360deg' }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: 'linear'
          }}
          className='absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        />
      </Card>
    </Link>
  );
}
