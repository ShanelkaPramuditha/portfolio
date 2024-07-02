import ContactForm from '@/components/Contact/ContactForm/contact-form';
import Link from 'next/link';
// Import email and call icon
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import { directContactData } from '@/constants/contact';

const Contact = () => {
  return (
    <>
      <div id="contact" className="min-h-screen content-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 my-10">
          <div className="mx-auto place-self-center lg:col-span-8 flex flex-col justify-center items-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              Get in Touch
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              I am always open to discussing product design work or partnership
              opportunities.
            </p>
            <div className="grid xs:grid-cols-2 gap-5">
              <Link
                href={`mailto:${directContactData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <HiOutlineMail className="mr-2" />
                Email
              </Link>
              <Link
                href={directContactData.scheduleCall}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <HiOutlinePhone className="mr-2" />
                Schedule a Call
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">or</p>
            <Link
              href={`tel:${directContactData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 mt-5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <HiOutlinePhone className="mr-2" />
              Call Now
            </Link>
          </div>

          {/* Desktop View */}
          <div className="lg:flex justify-center items-center lg:col-span-4 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
