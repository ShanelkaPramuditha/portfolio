'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gif from '../../assets/gif/working.gif';
import { differenceInSeconds } from 'date-fns';

const MaintenanceMode = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date('2024-07-31T00:00:00Z').getTime();
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const secondsLeft = differenceInSeconds(targetDate, currentTime);
      setTimeLeft(secondsLeft);
    };
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTimeLeft = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-[calc(100vh-112px)]">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 py-5">
        <div className="mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center">
          <Image
            src={gif}
            alt="Maintenance"
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto place-self-center lg:col-span-5 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-black dark:text-gray-200">
            Under Maintenance
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-center">
            Sorry for the inconvenience, my website is currently undergoing
            maintenance. Please check back later.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Thank you for your patience.
          </p>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-gray-200">
              Time left until maintenance is over:
            </h2>
            <p className="text-red-500 dark:text-red-400 mt-2 border border-gray-300 dark:border-red-700 rounded-lg px-3 py-2">
              {formatTimeLeft(timeLeft)}
            </p>
          </div>
          <Link
            href="https://fallback.shanelka.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 mt-4"
          >
            Check me with old one
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceMode;
