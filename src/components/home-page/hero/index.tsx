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
    <>
      <section id='home' className='content-center min-h-[calc(100vh-110px)]'>
        <div>
          <div className='grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            {/* Desktop View */}
            <div className='hidden lg:flex justify-center items-center lg:col-span-5 lg:mt-0'>
              <motion.div
                className='rounded-full shadow-lg border-2 border-dark'
                initial={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }} // Initial glow
                animate={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }} // Stronger glow
                transition={{
                  duration: 1.5, // Animation duration
                  repeat: Infinity, // Loop infinitely
                  repeatType: 'reverse', // Reverse the animation
                  ease: 'easeInOut' // Smooth easing
                }}
              >
                <Image
                  className='object-cover object-center rounded-full'
                  src={data.profileImg}
                  alt='Avatar'
                  width={350}
                  height={350}
                  priority
                />
              </motion.div>
            </div>

            {/* Mobile View */}
            <div className='flex justify-center lg:hidden mb-20'>
              <motion.div
                className='rounded-full shadow-lg border-2 border-dark'
                initial={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }} // Initial glow
                animate={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }} // Stronger glow
                transition={{
                  duration: 1.5, // Animation duration
                  repeat: Infinity, // Loop infinitely
                  repeatType: 'reverse', // Reverse the animation
                  ease: 'easeInOut' // Smooth easing
                }}
              >
                <Image
                  className='object-cover object-center rounded-full'
                  src={data.profileImg}
                  alt='Avatar'
                  width={250}
                  height={250}
                  priority
                />
              </motion.div>
            </div>
            <div className='mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center'>
              <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center'>
                {data.firstName} {data.lastName}
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0, duration: 2 }}
              >
                <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center'>
                  {data.description}
                </p>
              </motion.div>
              <div className='grid md:grid-cols-2 gap-5'>
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant='default'
                >
                  Get in Touch
                </Button>
                <Button
                  onClick={() => {
                    window.open(data.cvLink, '_blank', 'noopener,noreferrer');
                  }}
                  variant='outline'
                >
                  Check Resume
                </Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center my-8'>
            <ul className='flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-5 justify-center'>
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    className='flex items-center justify-center w-8 h-8 mx-1 text-gray-500 transition-colors rounded-full dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 '
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.icon === 'FaGithub' && <IconBrandGithub size={40} />}
                    {social.icon === 'FaLinkedin' && <IconBrandLinkedin size={40} />}
                    {social.icon === 'FaFacebook' && <IconBrandFacebook size={40} />}
                    {social.icon === 'FaWhatsapp' && <IconBrandWhatsapp size={40} />}
                    {social.icon === 'FaTelegram' && <IconBrandTelegram size={40} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
