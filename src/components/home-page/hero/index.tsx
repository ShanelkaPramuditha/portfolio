'use client';

import { Button } from '@/components/ui/button';
import { socialMedia } from '@/constants/contact';
import { data } from '@/constants/data';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp
} from '@tabler/icons-react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section id='home' className='flex items-center min-h-[calc(100svh-126px)]'>
      <div className='w-full py-10 sm:py-16'>
        <div className='flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16'>
          {/* Profile image — CSS animation, no JS dependency */}
          <div className='shrink-0 animate-in fade-in zoom-in-95 duration-500'>
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
                className='rounded-full object-cover object-center h-48 w-48 sm:h-60 sm:w-60 lg:h-[280px] lg:w-[280px]'
              />
            </motion.div>
          </div>

          {/* Text content — CSS animations with staggered delays */}
          <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
            <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl animate-in fade-in slide-in-from-bottom-2 duration-500 delay-75 fill-mode-both'>
              {data.firstName} {data.lastName}
            </h1>

            <p className='max-w-xl font-light text-muted-foreground md:text-lg animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150 fill-mode-both'>
              {data.description}
            </p>

            <div className='flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200 fill-mode-both'>
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

            <ul className='flex items-center gap-1 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300 fill-mode-both'>
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    className='flex items-center justify-center h-8 w-8 text-muted-foreground transition-colors hover:text-foreground'
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
