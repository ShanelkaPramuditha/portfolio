'use client';

import { ThemeToggle } from '@/components/partials/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { data } from '@/constants/data';
import { useIsMobile } from '@/hooks/use-mobile';
import { bestermindRegular } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const OFFSET = 86;

const navItems = [
  { name: 'Home', url: '/#home' },
  { name: 'Experience', url: '/#experience' },
  { name: 'Education', url: '/#education' },
  { name: 'Skills', url: '/#skills' },
  { name: 'Projects', url: '/#projects' },
  { name: 'Contact', url: '/#contact' }
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname !== '/') {
      router.push(url);
      return;
    }
    const id = url.split('#')[1];
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    window.history.pushState(null, '', url);
  };

  // Scroll to the hash section on initial load with header offset
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace('#', '');
    // Use requestAnimationFrame to wait for the DOM to be fully painted
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top: y, behavior: 'instant' });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Close the mobile menu if the viewport grows past the breakpoint
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

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
          'bg-background/30 mx-auto max-w-4xl rounded-lg shadow-sm saturate-100 backdrop-blur-[10px] transition-all duration-300 border border-border/40',
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
          delay: 0
        }}
      >
        <div className='w-full py-2 px-6 flex items-center justify-between gap-4'>
          {/* Logo/Brand */}
          <Link
            className={`text-xl sm:text-2xl font-bold cursor-pointer leading-none translate-y-1.5 ${bestermindRegular.className} flex-shrink-0 hover:opacity-80 transition-opacity`}
            href='/'
          >
            {data.firstName}
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center flex-1 justify-center'>
            <ul className='flex items-center space-x-1'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    onClick={(e) => handleNavClick(e, item.url)}
                    className='px-0 py-2 mx-2 text-sm font-semibold transition-all duration-200 hover:text-accent-foreground'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side controls */}
          <div className='flex items-center gap-2 flex-shrink-0'>
            {/* Mobile Navigation — slide-in sheet with full-size touch targets */}
            <div className='md:hidden'>
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon' className='h-9 w-9'>
                    <Menu className='h-4 w-4' />
                    <span className='sr-only'>Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-64'>
                  <SheetHeader>
                    <SheetTitle className={`text-2xl font-bold ${bestermindRegular.className}`}>
                      {data.firstName}
                    </SheetTitle>
                  </SheetHeader>
                  <nav aria-label='Mobile navigation'>
                    <ul className='flex flex-col px-2'>
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.url}
                            onClick={(e) => handleNavClick(e, item.url)}
                            className='flex items-center rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
