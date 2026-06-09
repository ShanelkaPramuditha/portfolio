import { MapPin, Calendar } from 'lucide-react';
import { educations } from '@/data/education';
import { LogoImage } from '@/components/home-page/shared/LogoImage';

export function Education() {
  return (
    <section id='education' className='w-full space-y-6'>
      <p className='text-2xl font-light tracking-tight sm:text-3xl'>Education</p>

      <div className='flex flex-col'>
        {educations.map((edu, index) => {
          const isLast = index === educations.length - 1;
          return (
            <div key={index} className='flex gap-4'>
              {/* Tree column */}
              <div className='flex flex-col items-center'>
                <div className='mt-3.5 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-background' />
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
                    <LogoImage src={edu.logo} alt={edu.institution} />
                  </div>

                  {/* Institution + degree */}
                  <div className='flex min-w-0 flex-1 flex-col gap-0.5'>
                    <p className='text-sm font-medium leading-tight'>{edu.institution}</p>
                    <p className='text-sm text-muted-foreground'>{edu.degree}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className='flex flex-wrap gap-4 border-t border-dashed border-border/60 px-4 py-2.5 text-xs text-muted-foreground'>
                  <span className='flex items-center gap-1.5'>
                    <Calendar className='h-3 w-3 shrink-0' />
                    {edu.startDate} – {edu.endDate}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <MapPin className='h-3 w-3 shrink-0' />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
