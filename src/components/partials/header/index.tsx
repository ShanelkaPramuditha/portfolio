'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';

import { ThemeToggle } from '@/components/partials/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { data } from '@/constants/data';
import { useIsMobile } from '@/hooks/use-mobile';
import { bestermindRegular } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const OFFSET = 108; // Header height (64) + some extra spacing (44) to account for the elevated state and comfortable padding

const navItems = [
  { name: 'Home', url: '/#home' },
  { name: 'Experience', url: '/#experience' },
  { name: 'Education', url: '/#education' },
  { name: 'Skills', url: '/#skills' },
  { name: 'Projects', url: '/#projects' },
  { name: 'Contact', url: '/#contact' }
];

const sectionIds = navItems.map((item) => item.url.split('#')[1]);

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // While a click-triggered smooth scroll is in flight, the spy is locked so the
  // active pill doesn't hop through every intermediate section
  const spyLockedRef = useRef(false);
  const unlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lockSpyOn = (id: string) => {
    setActiveSection(id);
    spyLockedRef.current = true;
    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      spyLockedRef.current = false;
    }, 200);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname !== '/') {
      router.push(url);
      return;
    }
    const id = url.split('#')[1];
    lockSpyOn(id);
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

  // Track scroll position for the elevated style and the active section
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setIsScrolled(window.scrollY > 60);
      if (pathname !== '/' || spyLockedRef.current) return;
      // At the bottom of the page the last section is active even if its top
      // never reaches the header offset
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET + 48) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (spyLockedRef.current) {
        // Keep the lock alive until the smooth scroll settles
        if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
        unlockTimerRef.current = setTimeout(() => {
          spyLockedRef.current = false;
        }, 150);
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    };
  }, [pathname]);

  const isActive = (url: string) => pathname === '/' && url.split('#')[1] === activeSection;

  return (
    <header className='sticky top-0 z-50 w-full px-3 pt-3 sm:px-4'>
      <motion.div
        className={cn(
          'mx-auto flex h-14 max-w-4xl items-center justify-between gap-2 rounded-2xl border border-border/40 bg-background/40 px-3 shadow-sm backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 sm:px-4',
          isScrolled && 'border-border/60 bg-background/80 shadow-md'
        )}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Logo/Brand */}
        <Link
          className={`translate-y-1 cursor-pointer text-xl leading-none font-bold sm:text-2xl ${bestermindRegular.className} flex-shrink-0 px-1 transition-opacity hover:opacity-80`}
          href='/'
        >
          {data.firstName}
        </Link>

        {/* Desktop Navigation */}
        <nav
          className='hidden flex-1 items-center justify-center md:flex'
          aria-label='Main navigation'
        >
          <ul className='flex items-center gap-1'>
            {navItems.map((item) => {
              const active = isActive(item.url);
              return (
                <li key={item.name} className='relative'>
                  <Link
                    href={item.url}
                    onClick={(e) => handleNavClick(e, item.url)}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200',
                      active
                        ? 'text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.name}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId='nav-active-pill'
                      className='absolute inset-0 rounded-full bg-accent'
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side controls */}
        <div className='flex flex-shrink-0 items-center gap-1.5'>
          <ThemeToggle />

          {/* Mobile Navigation - slide-in sheet with full-size touch targets */}
          <div className='md:hidden'>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='h-9 w-9 rounded-full'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-72 max-w-[85vw]'>
                <SheetHeader className='border-b border-border/40'>
                  <SheetTitle className={`text-2xl font-bold ${bestermindRegular.className}`}>
                    {data.firstName}
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label='Mobile navigation' className='flex-1 overflow-y-auto'>
                  <ul className='flex flex-col gap-1 px-3'>
                    {navItems.map((item) => {
                      const active = isActive(item.url);
                      return (
                        <li key={item.name}>
                          <Link
                            href={item.url}
                            onClick={(e) => handleNavClick(e, item.url)}
                            aria-current={active ? 'true' : undefined}
                            className={cn(
                              'flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors',
                              active
                                ? 'bg-accent text-accent-foreground'
                                : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                            )}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <SheetFooter className='border-t border-border/40'>
                  <p className='text-center text-xs text-muted-foreground'>
                    &copy; {new Date().getFullYear()} {data.firstName}
                  </p>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
