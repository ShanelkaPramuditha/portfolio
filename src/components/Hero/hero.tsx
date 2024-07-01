import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/constants/data';

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="bg-white dark:bg-gray-900 content-center min-h-[calc(100vh-48px)]"
      >
        <div className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="hidden lg:flex justify-center items-center lg:col-span-5 lg:mt-0">
              {/* Desktop View */}
              <Image
                className="object-cover object-center rounded-full shadow-lg border-2 border-dark"
                src={data.profileImg}
                alt="Avatar"
                width={350}
                height={350}
                priority
              />
            </div>
            {/* Mobile View */}
            <div className="flex justify-center lg:hidden mb-20">
              <Image
                className="object-cover object-center rounded-full shadow-lg"
                src={data.profileImg}
                alt="Avatar"
                width={250}
                height={250}
                priority
              />
            </div>
            <div className="mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
                {data.firstName} {data.lastName}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
                {data.description}
              </p>
              <div className="flex justify-center gap-10">
                <Link
                  href={data.developerSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Get in Touch
                </Link>
                <Link
                  href={data.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Check Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
