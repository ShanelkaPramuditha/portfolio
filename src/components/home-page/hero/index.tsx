'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp
} from '@tabler/icons-react';
import * as motion from 'motion/react-client';

import { Button } from '@/components/ui/button';
import { socialMedia } from '@/constants/contact';
import { data } from '@/constants/data';

export function Hero() {
  return (
    <section id='home' className='flex min-h-[calc(100svh-126px)] items-center'>
      <div className='w-full py-10 sm:py-16'>
        <div className='flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16'>
          {/* Profile image — CSS animation, no JS dependency */}
          <div className='shrink-0 animate-in duration-500 zoom-in-95 fade-in'>
            <motion.div
              className='rounded-full'
              initial={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)' }}
              animate={{ boxShadow: '0 0 28px rgba(59, 130, 246, 0.75)' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              <Image
                src={data.profileImg}
                alt='Avatar'
                width={280}
                height={280}
                priority
                sizes='(max-width: 640px) 192px, (max-width: 1024px) 240px, 280px'
                className='h-48 w-48 rounded-full object-cover object-center sm:h-60 sm:w-60 lg:h-[280px] lg:w-[280px]'
              />
            </motion.div>
          </div>

          {/* Text content — CSS animations with staggered delays */}
          <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
            <h1 className='animate-in text-3xl leading-tight font-extrabold tracking-tight delay-75 duration-500 fill-mode-both fade-in slide-in-from-bottom-2 sm:text-4xl md:text-5xl xl:text-6xl'>
              {data.firstName} {data.lastName}
            </h1>

            <p className='max-w-xl animate-in font-light text-muted-foreground delay-150 duration-500 fill-mode-both fade-in slide-in-from-bottom-2 md:text-lg'>
              {data.description}
            </p>

            <div className='flex animate-in flex-wrap gap-3 delay-200 duration-500 fill-mode-both fade-in slide-in-from-bottom-2'>
              <Button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 86;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    window.history.pushState(null, '', '/#contact');
                  }
                }}
                variant='default'
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => window.open(data.cvLink, '_blank', 'noopener,noreferrer')}
                variant='outline'
                aria-label='Check resume (opens in new tab)'
              >
                Check Resume
              </Button>
            </div>

            <ul className='flex animate-in items-center gap-1 delay-300 duration-500 fill-mode-both fade-in slide-in-from-bottom-2'>
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    className='flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${social.name} profile`}
                  >
                    {social.icon === 'FaGithub' && <IconBrandGithub size={20} />}
                    {social.icon === 'FaLinkedin' && <IconBrandLinkedin size={20} />}
                    {social.icon === 'FaFacebook' && <IconBrandFacebook size={20} />}
                    {social.icon === 'FaWhatsapp' && <IconBrandWhatsapp size={20} />}
                    {social.icon === 'FaTelegram' && <IconBrandTelegram size={20} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
