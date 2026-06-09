import Link from 'next/link';
import { directContactData } from '@/constants/contact';
import { Mail, Phone, CalendarDays } from 'lucide-react';
import ContactForm from './contact-form';

const contactLinks = [
  {
    label: 'Email Me',
    value: directContactData.email,
    href: `mailto:${directContactData.email}`,
    icon: Mail
  },
  {
    label: 'Call Me',
    value: directContactData.phone,
    href: `tel:${directContactData.phone}`,
    icon: Phone
  },
  {
    label: 'Schedule a Call',
    value: 'Book a meeting time',
    href: directContactData.scheduleCall,
    icon: CalendarDays
  }
];

export function Contact() {
  return (
    <section id='contact' className='w-full space-y-6'>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-light tracking-tight sm:text-3xl'>Contact</p>
        <span className='flex items-center gap-1.5 text-xs text-muted-foreground'>
          <span className='relative flex h-2 w-2 shrink-0'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
          </span>
          Available for opportunities
        </span>
      </div>

      <div className='grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8'>
        {/* Left — intro + contact links */}
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-muted-foreground'>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            Choose your preferred way to reach out.
          </p>

          <div className='flex flex-col gap-2'>
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 rounded-xl border border-dashed border-border/80 bg-card px-4 py-3 transition-colors hover:border-border hover:bg-accent'
              >
                <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background'>
                  <Icon className='h-3.5 w-3.5 text-muted-foreground' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm font-medium'>{label}</span>
                  <span className='text-xs text-muted-foreground'>{value}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — contact form */}
        <div className='rounded-xl border border-dashed border-border/80 bg-card p-5'>
          <div className='mb-4 flex flex-col gap-0.5'>
            <p className='text-sm font-medium'>Send a Message</p>
            <p className='text-xs text-muted-foreground'>
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
