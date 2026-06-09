import Link from 'next/link';
import { directContactData } from '@/constants/contact';
import { Mail, Phone, CalendarDays } from 'lucide-react';
import ContactForm from './contact-form';

export function Contact() {
  return (
    <section id='contact' className='w-full space-y-6'>
      <p className='text-2xl font-light tracking-tight sm:text-3xl'>Contact</p>

      <div className='grid gap-6 lg:grid-cols-2 lg:gap-10'>
        {/* Left — intro + contact options */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-1'>
            <p className='text-base font-medium'>Get in Touch</p>
            <p className='text-sm text-muted-foreground'>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
              Choose your preferred way to reach out.
            </p>
          </div>

          <div className='flex flex-col gap-3'>
            <Link
              href={`mailto:${directContactData.email}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 rounded-xl border border-dashed border-border/80 bg-card px-4 py-3 transition-colors hover:border-border hover:bg-accent'
            >
              <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background'>
                <Mail className='h-4 w-4 text-muted-foreground' />
              </div>
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>Email Me</span>
                <span className='text-xs text-muted-foreground'>{directContactData.email}</span>
              </div>
            </Link>

            <Link
              href={`tel:${directContactData.phone}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 rounded-xl border border-dashed border-border/80 bg-card px-4 py-3 transition-colors hover:border-border hover:bg-accent'
            >
              <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background'>
                <Phone className='h-4 w-4 text-muted-foreground' />
              </div>
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>Call Me</span>
                <span className='text-xs text-muted-foreground'>{directContactData.phone}</span>
              </div>
            </Link>

            <Link
              href={directContactData.scheduleCall}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 rounded-xl border border-dashed border-border/80 bg-card px-4 py-3 transition-colors hover:border-border hover:bg-accent'
            >
              <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background'>
                <CalendarDays className='h-4 w-4 text-muted-foreground' />
              </div>
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>Schedule a Call</span>
                <span className='text-xs text-muted-foreground'>Book a meeting time</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right — contact form */}
        <div className='rounded-xl border border-dashed border-border/80 bg-card p-5'>
          <div className='mb-5 flex flex-col gap-1'>
            <p className='text-base font-medium'>Send a Message</p>
            <p className='text-sm text-muted-foreground'>
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
