'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCookie('theme', newTheme); // Save the theme preference in a cookie
  };

  if (!mounted) {
    return null; // Avoid rendering until the component is mounted
  }

  return (
    <div className="flex">
      <button
        className="light-switch"
        onClick={handleThemeToggle}
        aria-label="Toggle theme"
      >
        <div className="cursor-pointer p-2">
          {theme === 'light' ? (
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: 'currentColor' }}
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                style={{ fill: 'currentColor' }}
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
          ) : (
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: 'currentColor' }}
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                style={{ fill: 'currentColor' }}
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
