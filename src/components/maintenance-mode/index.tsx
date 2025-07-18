'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import gif from '@/assets/gif/working.gif';
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
    <div className='flex items-center justify-center'>
      <div className='grid px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 py-5'>
        <div className='mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center'>
          <Image
            src={gif}
            alt='Maintenance'
            className='max-w-72 max-h-72'
            width={500}
            height={500}
            unoptimized
          />
        </div>
        <div className='mx-auto place-self-center lg:col-span-5 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-black dark:text-gray-200'>
            Under Maintenance
          </h1>
          <p className='text-gray-500 dark:text-gray-400 mt-4 text-center'>
            Sorry for the inconvenience, my website is currently undergoing
            maintenance. Please check back later.
          </p>
          <p className='text-gray-500 dark:text-gray-400 mt-2 text-center'>
            Thank you for your patience.
          </p>
          {/* <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-gray-200">
              Time left until maintenance is over:
            </h2>
            <p className="text-red-500 dark:text-red-400 mt-2 border border-gray-300 dark:border-red-700 rounded-lg px-3 py-2">
              {formatTimeLeft(timeLeft)}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceMode;
