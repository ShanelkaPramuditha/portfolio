'use client';

import {
  useTheme,
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps
} from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR issues

  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme={theme || 'dark'}
      // forcedTheme='dark'
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
