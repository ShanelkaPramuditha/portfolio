'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-16 right-10 z-50 bg-primary-700 hover:bg-primary-800 text-white px-3 py-2 rounded-full opacity-0 transition-all duration-300 ease-in-out ${
          showButton ? 'opacity-100' : ''
        }`}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 11l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTop;
