import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section id='experience' className='w-full space-y-6'>
      <p className='text-2xl font-light tracking-tight sm:text-3xl'>Experience</p>

      <div className='relative'>
        {/* Vertical tree line */}
        <div className='absolute left-[7px] top-2 bottom-2 w-px bg-border' />

        <div className='flex flex-col gap-8'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative flex gap-5 pl-0'>
              {/* Dot on the tree line */}
              <div className='relative mt-1.5 shrink-0'>
                <div className='h-[15px] w-[15px] rounded-full border-2 border-border bg-background' />
              </div>

              {/* Card */}
              <div className='flex min-w-0 flex-1 flex-col gap-3 rounded-xl border border-dashed border-border/80 bg-card p-4'>
                {/* Header */}
                <div className='flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between'>
                  <div>
                    <p className='text-base font-medium tracking-tight'>{exp.role}</p>
                    <p className='text-sm text-muted-foreground'>{exp.company}</p>
                  </div>
                  <span className='w-fit rounded-md border border-dashed border-border/70 bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground'>
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className='flex flex-wrap gap-3 text-xs text-muted-foreground'>
                  <span className='flex items-center gap-1'>
                    <Calendar className='h-3 w-3 shrink-0' />
                    {exp.startDate} – {exp.endDate}
                  </span>
                  <span className='flex items-center gap-1'>
                    <MapPin className='h-3 w-3 shrink-0' />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className='flex flex-col gap-1.5 border-t border-dashed border-border/60 pt-3'>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className='flex gap-2 text-sm text-muted-foreground'>
                        <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50' />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
