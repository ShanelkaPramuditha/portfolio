'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { data } from '@constants/data';
import ThemeChanger from '../theme-changer';
import { socialMedia } from '@constants/contact';
import localFont from 'next/font/local';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';

const BestermindRegularFont = localFont({
  src: '../../../assets/fonts/BestermindRegular/BestermindRegular.ttf',
});

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    { name: 'About', url: '/#about' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Education', url: '/#education' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ];

  // Remove scrollbar when nav is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  // Check if scrolled down to show shadow
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 content-center h-12 ${
          scrolled && 'drop-shadow'
        }`}
      >
        <div className="max-w-screen-xl px-4 mx-auto lg:gap-8 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12 sm:grid sm:grid-cols-12">
          <div className="flex items-center justify-between lg:col-span-2 md:col-span-2 sm:col-span-2">
            <Link
              className={`text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer ${BestermindRegularFont.className}`}
              href="/"
            >
              {data.firstName}
            </Link>
            <div className="flex">
              <div className="sm:hidden me-4">
                <ThemeChanger />
              </div>
              <button
                onClick={() => setNav(!nav)}
                className="sm:hidden focus:outline-none"
              >
                {nav ? (
                  <FaTimes
                    size={24}
                    className="text-black dark:text-white"
                  />
                ) : (
                  <FaBars
                    size={24}
                    className="text-black dark:text-white"
                  />
                )}
              </button>
            </div>
          </div>
          <div
            className={`lg:col-span-9 lg:flex lg:items-center lg:justify-end md:col-span-9 md:flex md:items-center md:justify-end sm:col-span-9 sm:flex sm:justify-end sm:items-center ${
              nav ? 'block' : 'hidden'
            }`}
          >
            <ul className="hidden sm:flex">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:underline cursor-pointer"
                >
                  <Link
                    href={item.url}
                    className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-200 "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden gap-8 md:grid lg:grid sm:grid grid-cols-1 justify-items-end self-center">
            <ThemeChanger />
          </div>
        </div>

        <div
          onClick={() => setNav(false)}
          className={`${
            nav ? 'block' : 'hidden'
          } sm:hidden bg-white dark:bg-gray-900 absolute top-full left-0 w-full pb-5 h-screen border-t border-gray-200 dark:border-gray-700 dark:text-gray-100 text-gray-900 z-50`}
        >
          <div>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="block px-4 py-3 my-5 text-gray-900 text-center dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-200 border rounded-full dark:border-gray-700 mx-auto w-1/2"
                // onClick={() => setNav(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
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
      </nav>
    </>
  );
};

export default NavBar;
