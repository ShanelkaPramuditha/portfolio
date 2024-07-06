import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/constants/data';
import { socialMedia } from '@/constants/contact';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-white dark:bg-gray-900 content-center min-h-[calc(100vh-48px)]"
      >
        <div className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="hidden lg:flex justify-center items-center lg:col-span-5 lg:mt-0">
              {/* Desktop View */}
              <Image
                className="object-cover object-center rounded-full shadow-lg border-2 border-dark"
                src={data.profileImg}
                alt="Avatar"
                width={350}
                height={350}
                priority
              />
            </div>
            {/* Mobile View */}
            <div className="flex justify-center lg:hidden mb-20">
              <Image
                className="object-cover object-center rounded-full shadow-lg"
                src={data.profileImg}
                alt="Avatar"
                width={250}
                height={250}
                priority
              />
            </div>
            <div className="mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
                {data.firstName} {data.lastName}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
                {data.description}
              </p>
              <div className="grid xs:grid-cols-2 gap-5">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Get in Touch
                </Link>
                <Link
                  href={data.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Check Resume
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-5 justify-center">
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.url}
                    className="flex items-center justify-center w-8 h-8 mx-1 text-gray-500 transition-colors rounded-full dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon === 'FaGithub' && <FaGithub size={40} />}
                    {social.icon === 'FaLinkedin' && <FaLinkedin size={40} />}
                    {social.icon === 'FaFacebook' && <FaFacebook size={40} />}
                    {social.icon === 'FaWhatsapp' && <FaWhatsapp size={40} />}
                    {social.icon === 'FaTelegram' && <FaTelegram size={40} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
