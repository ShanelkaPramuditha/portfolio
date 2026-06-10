'use client';

import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { flushSync } from 'react-dom';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';

    // Fall back to an instant swap when the View Transitions API is missing
    // or the user prefers reduced motion
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }

    // Reveal the new theme as a circle growing out of the toggle button
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  };

  return (
    <Button
      ref={buttonRef}
      variant='ghost'
      size='icon'
      className='relative h-9 w-9 overflow-hidden rounded-full'
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        className='absolute inline-flex'
        initial={false}
        animate={{
          rotate: isDark ? 0 : 90,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <Sun className='h-5 w-5' />
      </motion.span>
      <motion.span
        className='absolute inline-flex'
        initial={false}
        animate={{
          rotate: isDark ? -90 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <Moon className='h-5 w-5' />
      </motion.span>
    </Button>
  );
}
