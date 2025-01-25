import Link from 'next/link';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa';
import { data } from '@constants/data';
import { socialMedia } from '@constants/contact';

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block ">
          &copy; {new Date().getFullYear()}{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={data.repositoryLink}
            className="hover:underline"
          >
            Developed
          </Link>{' '}
          by{' '}
          <Link
            href={data.developerSite}
            className="hover:underline"
          >
            {data.firstName} {data.lastName}
          </Link>
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-3 justify-center">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                className="flex items-center justify-center w-8 h-8 mx-1 text-gray-500 transition-colors rounded-full dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 "
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon === 'FaGithub' && <FaGithub size={24} />}
                {social.icon === 'FaLinkedin' && <FaLinkedin size={24} />}
                {social.icon === 'FaFacebook' && <FaFacebook size={24} />}
                {social.icon === 'FaWhatsapp' && <FaWhatsapp size={24} />}
                {social.icon === 'FaTelegram' && <FaTelegram size={24} />}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile View - sm */}
        <span className="text-sm text-center text-gray-500 dark:text-gray-400 sm:justify-center block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden mt-3">
          &copy; {new Date().getFullYear()}{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={data.repositoryLink}
            className="hover:underline"
          >
            Developed
          </Link>{' '}
          by{' '}
          <Link
            href={data.developerSite}
            className="hover:underline"
          >
            {data.firstName} {data.lastName}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
