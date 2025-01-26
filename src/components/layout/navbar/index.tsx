'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { data } from '@/constants/data';
import ThemeChanger from '../theme-toggle';
import localFont from 'next/font/local';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const BestermindRegularFont = localFont({
  src: '../../../assets/fonts/BestermindRegular/BestermindRegular.ttf',
});

const NavBar = () => {
  const [nav, setNav] = useState('');

  const navItems = [
    { name: 'About', url: '/#about' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Education', url: '/#education' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
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
    <motion.div
      className={cn(
        'bg-background/30 inset-x-0 top-2 sticky z-50 rounded-2xl mx-auto shadow-sm saturate-100 backdrop-blur-[10px] transition-colors',
        isScrolled && 'bg-background/80',
      )}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Card className="container py-3 px-4 border-0 flex items-center justify-between gap-6 bg-transparent">
        <Link
          className={`text-xl font-bold text-center cursor-pointer ${BestermindRegularFont.className}`}
          href="/"
        >
          {data.firstName}
        </Link>

        <ul className="hidden md:flex items-center text-card-foreground">
          {navItems.map((item, index) => {
            const isActive = nav === item.name;

            return (
              <li
                key={index}
                onClick={() => setNav(item.name)}
                className="hover:underline cursor-pointer"
              >
                <Link
                  href={item.url}
                  className={`px-4 py-2 ${isActive ? '' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center">
          <div className="flex md:hidden mr-2 items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                >
                  <Menu className="h-5 w-5 rotate-0 scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navItems.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.url}>{item.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeChanger />
        </div>
      </Card>
    </motion.div>
  );
};

export default NavBar;
