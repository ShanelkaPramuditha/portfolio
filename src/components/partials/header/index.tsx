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
import { useEffect, useState } from 'react';

export function Header() {
  const [nav, setNav] = useState('');

  const navItems = [
    { name: 'About', url: '/#about' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Education', url: '/#education' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' }
  ];

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
    <div className='sticky top-0 z-50 w-full px-2 pt-2 pb-2'>
      <motion.div
        className={cn(
          'bg-background/30 rounded-2xl mx-auto max-w-7xl shadow-sm saturate-100 backdrop-blur-[10px] transition-all duration-300 border border-border/40',
          isScrolled && 'bg-background/80 shadow-md'
        )}
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.3
        }}
      >
        <div className='w-full py-4 px-6 flex items-center justify-between gap-4'>
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
                      onClick={() => setNav(item.name)}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground',
                        isActive && 'bg-accent text-accent-foreground'
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
                  <Button variant='outline' size='icon' className='h-9 w-9'>
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
                        onClick={() => setNav(item.name)}
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
