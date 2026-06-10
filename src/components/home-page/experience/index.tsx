import { Calendar, MapPin } from 'lucide-react';

import { LogoImage } from '@/components/home-page/shared/LogoImage';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section id='experience' className='w-full space-y-6'>
      <h2 className='text-2xl font-light tracking-tight sm:text-3xl'>Experience</h2>

      <div className='flex flex-col'>
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;
          return (
            <div key={index} className='flex gap-4'>
              {/* Tree column */}
              <div className='flex flex-col items-center'>
                {/* Dot */}
                <div className='mt-3.5 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-background' />
                {/* Line segment — hidden for last item */}
                {!isLast && <div className='mt-1 w-px flex-1 bg-border' />}
              </div>

              {/* Card */}
              <div
                className={`flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-dashed border-border/80 bg-card ${isLast ? '' : 'mb-4'}`}
              >
                {/* Header */}
                <div className='flex items-start gap-3 p-4 pb-3'>
                  {/* Logo */}
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-background'>
                    <LogoImage src={exp.logo} alt={exp.company} />
                  </div>

                  {/* Role + company + type badge */}
                  <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                      <p className='text-sm leading-tight font-medium'>{exp.role}</p>
                      <span className='shrink-0 rounded-md border border-dashed border-border/70 bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground'>
                        {exp.type}
                      </span>
                    </div>
                    <p className='text-sm text-muted-foreground'>{exp.company}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className='flex flex-wrap gap-4 border-t border-dashed border-border/60 px-4 py-2.5 text-xs text-muted-foreground'>
                  <span className='flex items-center gap-1.5'>
                    <Calendar className='h-3 w-3 shrink-0' />
                    {exp.startDate} – {exp.endDate}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <MapPin className='h-3 w-3 shrink-0' />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className='flex flex-col gap-2 border-t border-dashed border-border/60 px-4 py-3'>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className='flex gap-2.5 text-sm text-muted-foreground'>
                        <span className='mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40' />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
