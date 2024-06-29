import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { data, socialMedia } from '@/constants/data';

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {new Date().getFullYear()} Developed by{' '}
          <Link href={data.developerSite} className="hover:underline">
            {data.firstName} {data.lastName}
          </Link>
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-3">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                className="flex items-center justify-center w-8 h-8 mx-1 text-gray-500 transition-colors rounded-full dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon === 'FaGithub' && <FaGithub size={24} />}
                {social.icon === 'FaLinkedin' && <FaLinkedin size={24} />}
                {social.icon === 'FaFacebook' && <FaFacebook size={24} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
