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
    <section id='home' className='flex items-center min-h-[calc(100vh-126px)]'>
      <div className='w-full py-16'>
        {/* Two-column layout: image left, text right */}
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16'>
          {/* Profile image */}
          <div className='shrink-0'>
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
                className='rounded-full object-cover object-center'
              />
            </motion.div>
          </div>

          {/* Text content */}
          <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
            <h1 className='text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl'>
              {data.firstName} {data.lastName}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='max-w-xl font-light text-muted-foreground md:text-lg'
            >
              {data.description}
            </motion.p>

            <div className='flex flex-wrap gap-3'>
              <Button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant='default'
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => window.open(data.cvLink, '_blank', 'noopener,noreferrer')}
                variant='outline'
              >
                Check Resume
              </Button>
            </div>

            <ul className='flex items-center gap-1'>
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    className='flex items-center justify-center h-8 w-8 text-muted-foreground transition-colors hover:text-foreground'
                    target='_blank'
                    rel='noopener noreferrer'
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
