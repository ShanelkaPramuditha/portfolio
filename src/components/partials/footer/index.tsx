import { socialMedia } from '@/constants/contact';
import { data } from '@/constants/data';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp
} from '@tabler/icons-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='w-full border-t border-border/40 mt-10'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between'>
        <span className='text-xs text-muted-foreground'>
          &copy; {new Date().getFullYear()}{' '}
          <Link href={data.developerSite} className='hover:underline'>
            {data.firstName} {data.lastName}
          </Link>
        </span>
        <ul className='flex items-center gap-1'>
          {socialMedia.map((social, index) => (
            <li key={index}>
              <Link
                href={social.url}
                className='flex items-center justify-center h-8 w-8 text-muted-foreground transition-colors hover:text-foreground'
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${social.name} profile`}
              >
                {social.icon === 'FaGithub' && <IconBrandGithub size={18} />}
                {social.icon === 'FaLinkedin' && <IconBrandLinkedin size={18} />}
                {social.icon === 'FaFacebook' && <IconBrandFacebook size={18} />}
                {social.icon === 'FaWhatsapp' && <IconBrandWhatsapp size={18} />}
                {social.icon === 'FaTelegram' && <IconBrandTelegram size={18} />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
