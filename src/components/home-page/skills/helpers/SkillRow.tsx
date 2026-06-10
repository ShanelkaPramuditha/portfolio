'use client';

import { memo, useEffect, useRef, useState } from 'react';

import type { TechItem } from '@/data/tech';

import TechIcon from './TechIcon';

const SkillRow = memo(
  ({
    category,
    skills,
    direction
  }: {
    category: string;
    skills: TechItem[];
    direction: 'left' | 'right';
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const [copies, setCopies] = useState(4);

    useEffect(() => {
      const calculate = () => {
        if (!containerRef.current || !measureRef.current) return;
        const containerWidth = containerRef.current.offsetWidth;
        const singleWidth = measureRef.current.scrollWidth;
        if (singleWidth === 0) return;
        // Need at least enough copies to fill 2x the container for a seamless loop:
        // total strip = copies * singleWidth, loop point = after first copy
        // We animate by -(singleWidth) so we need total > containerWidth + singleWidth
        const needed = Math.ceil((containerWidth * 2) / singleWidth) + 1;
        setCopies(Math.max(needed, 4));
      };

      calculate();
      const ro = new ResizeObserver(calculate);
      if (containerRef.current) ro.observe(containerRef.current);
      return () => ro.disconnect();
    }, [skills]);

    return (
      <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4'>
        <span className='text-xs font-medium text-muted-foreground sm:w-28 sm:shrink-0 sm:text-right'>
          {category}
        </span>
        <div ref={containerRef} className='relative min-w-0 flex-1 overflow-hidden'>
          {/* invisible single set used only for measuring */}
          <div ref={measureRef} aria-hidden className='invisible absolute flex gap-2 sm:gap-3'>
            {skills.map((skill, i) => (
              <span
                key={i}
                className='inline-flex items-center gap-1.5 rounded-md border border-dashed bg-card px-2.5 py-1.5 text-sm whitespace-nowrap'
              >
                <TechIcon item={skill} className='h-4 w-4 shrink-0' />
                {skill.name}
              </span>
            ))}
          </div>

          {/* animated strip: `copies` repetitions; CSS animates by -(100% / copies) = one set */}
          <div
            className={`flex w-max gap-2 will-change-transform sm:gap-3 ${
              direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
            }`}
            style={
              {
                '--marquee-copies': copies
              } as React.CSSProperties
            }
          >
            {Array.from({ length: copies }, (_, r) =>
              skills.map((skill, i) => (
                <span
                  key={`${r}-${i}`}
                  className='inline-flex items-center gap-1.5 rounded-md border border-dashed bg-card px-2.5 py-1.5 text-sm whitespace-nowrap text-foreground transition-colors hover:bg-accent'
                >
                  <TechIcon item={skill} className='h-4 w-4 shrink-0' />
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
);
SkillRow.displayName = 'SkillRow';

export default SkillRow;
