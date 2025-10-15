import Link from 'next/link';
import { directContactData } from '@/constants/contact';
import { IconMail, IconPhone } from '@tabler/icons-react';
import ContactForm from './contact-form';

export function Contact() {
  return (
    <>
      <section id='contact' className='content-center'>
        <div className='py-8 mx-auto lg:py-16 my-10'>
          {/* Two Column Layout */}
          <div className='grid lg:grid-cols-2 gap-12 items-start mx-auto'>
            {/* Left Column - Contact Options */}
            <div className='flex flex-col justify-center space-y-6'>
              <div>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                  Get in Touch
                </h2>
                <p className='text-gray-600 dark:text-gray-400'>
                  I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Choose your preferred way to reach out!
                </p>
              </div>

              <div className='space-y-4'>
                <Link
                  href={`mailto:${directContactData.email}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 p-4 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors dark:text-white dark:border-gray-700 dark:hover:bg-gray-700'
                >
                  <IconMail className='h-6 w-6 flex-shrink-0' />
                  <div className='flex flex-col'>
                    <span className='font-medium'>Email Me</span>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {directContactData.email}
                    </span>
                  </div>
                </Link>

                <Link
                  href={directContactData.scheduleCall}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 p-4 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors dark:text-white dark:border-gray-700 dark:hover:bg-gray-700'
                >
                  <IconPhone className='h-6 w-6 flex-shrink-0' />
                  <div className='flex flex-col'>
                    <span className='font-medium'>Schedule a Call</span>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      Book a meeting time
                    </span>
                  </div>
                </Link>

                <div className='text-center text-gray-500 dark:text-gray-400'>
                  OR
                </div>

                <Link
                  href={`tel:${directContactData.phone}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 p-4 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors dark:text-white dark:border-gray-700 dark:hover:bg-gray-700'
                >
                  <IconPhone className='h-6 w-6 flex-shrink-0' />
                  <div className='flex flex-col'>
                    <span className='font-medium'>Call Now</span>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {directContactData.phone}
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className='lg:border-l lg:pl-12 lg:border-gray-200 lg:dark:border-gray-700'>
              <div className='mb-6'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                  Send a Message
                </h2>
                <p className='text-gray-600 dark:text-gray-400'>
                  Fill out the form below and I&apos;ll get back to you as soon as possible
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
