'use client';

import React from 'react';
import Link from 'next/link';

const MaintenanceMode = () => {
  return (
    <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-[calc(100vh-112px)]">
      <div className="maintenance-content max-w-sm text-center object-none object-center">
        <h1 className="text-3xl font-bold text-black dark:text-gray-200">
          Under Maintenance
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Sorry for the inconvenience, my website is currently undergoing
          maintenance. Please check back later.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Thank you for your patience.
        </p>
        <Link
          href="https://fallback.shanelka.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Check me with old one
        </Link>
      </div>
    </section>
  );
};

export default MaintenanceMode;
