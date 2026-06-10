'use client';

import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';

import { skillRows } from '@/data/tech';

import SkillRow from './helpers/SkillRow';
import TechIcon from './helpers/TechIcon';

export function Skills() {
  const [isInline, setIsInline] = useState(false);

  return (
    <section id='skills' className='w-full space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-light tracking-tight sm:text-3xl'>Skills</h2>
        <button
          onClick={() => setIsInline(!isInline)}
          className='flex h-8 w-8 items-center justify-center rounded-md border border-dashed border-border/70 bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
          title={isInline ? 'Show animated rows' : 'Show inline'}
          aria-label='Toggle inline view'
        >
          {isInline ? <List size={16} /> : <LayoutGrid size={16} />}
        </button>
      </div>

      {isInline ? (
        <div className='flex flex-col gap-3'>
          {skillRows.map((row) => (
            <div
              key={row.category}
              className='flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4'
            >
              <span className='text-xs font-medium text-muted-foreground sm:w-28 sm:shrink-0 sm:text-right'>
                {row.category}
              </span>
              <div className='flex flex-wrap gap-2 sm:gap-3'>
                {row.items.map((skill) => (
                  <span
                    key={skill.name}
                    className='inline-flex items-center gap-1.5 rounded-md border border-dashed bg-card px-2.5 py-1.5 text-sm whitespace-nowrap text-foreground transition-colors hover:bg-accent'
                  >
                    <TechIcon item={skill} className='h-4 w-4 shrink-0' />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='relative flex flex-col gap-3'>
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent' />
          {skillRows.map((row) => (
            <SkillRow
              key={row.category}
              category={row.category}
              skills={row.items}
              direction={row.direction}
            />
          ))}
        </div>
      )}
    </section>
  );
}
