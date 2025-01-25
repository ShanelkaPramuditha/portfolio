'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import React, { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [initialTheme, setInitialTheme] = useState<string>('system');

  // Read the theme from cookies on the client side
  useEffect(() => {
    const theme = getCookie('theme');
    if (theme === 'dark' || theme === 'light') {
      setInitialTheme(theme);
    }
  }, []);

  // Ensure the theme is mounted before rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={initialTheme}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
