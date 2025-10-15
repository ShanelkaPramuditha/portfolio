'use client';

import { ThemeToggle } from '@/components/partials/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { data } from '@/constants/data';
import { bestermindRegular } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const OFFSET = 86;

export function Header() {
  const [nav, setNav] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const navItems = useMemo(
    () => [
      { name: 'Home', url: '/#home' },
      // { name: 'About', url: '/#about' },
      { name: 'Skills', url: '/#skills' },
      // { name: 'Experience', url: '/#experience' },
      { name: 'Projects', url: '/#projects' },
      // { name: 'Education', url: '/#education' },
      { name: 'Contact', url: '/#contact' }
    ],
    []
  );

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = OFFSET;
      let currentSection = '';
      for (const item of navItems) {
        const id = item.url.split('#')[1];
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top - offset <= 0) {
            currentSection = item.name;
          }
        }
      }
      setNav(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  // Check if scrolled down to show shadow
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', changeBackground);

    return () => {
      document.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <div className='sticky top-0 z-50 w-full py-2'>
      <motion.div
        className={cn(
          'bg-background/30 rounded-lg mx-auto max-w-7xl shadow-sm saturate-100 backdrop-blur-[10px] transition-all duration-300 border border-border/40',
          isScrolled && 'bg-background/80 shadow-md'
        )}
        initial={{
          x: 0,
          y: -70,
          opacity: 0
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.1,
          ease: 'easeOut',
          delay: 0,
        }}
      >
        <div className='w-full py-2 px-6 flex items-center justify-between gap-4'>
          {/* Logo/Brand */}
          <Link
            className={`text-xl sm:text-2xl font-bold cursor-pointer ${bestermindRegular.className} flex-shrink-0 hover:opacity-80 transition-opacity`}
            href='/'
          >
            {data.firstName}
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center flex-1 justify-center'>
            <ul className='flex items-center space-x-1'>
              {navItems.map((item, index) => {
                const isActive = nav === item.name;

                return (
                  <li key={index}>
                    <Link
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        setNav(item.name);

                        // If not on home page, navigate to home first
                        if (pathname !== '/') {
                          router.push(item.url);
                        } else {
                          // Already on home page, just scroll
                          const id = item.url.split('#')[1];
                          const el = document.getElementById(id);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }
                      }}
                      className={cn(
                        'px-0 py-2 mx-2 text-sm font-semibold transition-all duration-200 hover:text-accent-foreground hover:border-b-1 hover:border-primary',
                        isActive && 'text-accent-foreground border-primary border-b-1'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right side controls */}
          <div className='flex items-center gap-2 flex-shrink-0'>
            {/* Mobile Navigation */}
            <div className='md:hidden'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className='h-9 w-9'>
                    <Menu className='h-4 w-4' />
                    <span className='sr-only'>Toggle navigation menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-48'>
                  {navItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={item.url}
                        className='w-full cursor-pointer'
                        onClick={(e) => {
                          e.preventDefault();
                          setNav(item.name);

                          // If not on home page, navigate to home first
                          if (pathname !== '/') {
                            router.push(item.url);
                          } else {
                            // Already on home page, just scroll
                            const id = item.url.split('#')[1];
                            const el = document.getElementById(id);
                            if (el) {
                              const y = el.getBoundingClientRect().top + window.scrollY - 112;
                              window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
