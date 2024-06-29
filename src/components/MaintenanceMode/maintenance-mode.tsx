'use client';

import React from 'react';

const MaintenanceMode = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      {' '}
      {/* Full screen with flexbox center */}
      <div className="maintenance-content max-w-sm text-center">
        {' '}
        {/* Centered content with max-width */}
        <h1 className="text-3xl font-bold text-white dark:text-gray-200">
          Under Maintenance
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Sorry for the inconvenience, my website is currently undergoing
          maintenance. Please check back later.
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Thank you for your patience.
        </p>
        <a
          href="https://fallback.shanelka.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Check me with old one
        </a>
      </div>
    </div>
  );
};

export default MaintenanceMode;
