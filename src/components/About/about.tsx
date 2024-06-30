import Image from 'next/image';
import { aboutData } from '@/constants/about';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-gray-900 content-center min-h-[calc(100vh-48px)]"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center">
            <h1 className="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              Who am I?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              {aboutData.description1}
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              {aboutData.description2}
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center lg:col-span-5 lg:mt-0">
            {/* Desktop View */}
            <Image
              className="object-cover object-center"
              src={'https://i.postimg.cc/Pr42qzbF/about.png'}
              alt="Avatar"
              width={350}
              height={350}
              priority
            />
          </div>
          {/* Mobile View */}
          <div className="flex justify-center lg:hidden mb-20">
            <Image
              className="object-cover object-center"
              src={'https://i.postimg.cc/Pr42qzbF/about.png'}
              alt="Avatar"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center bg-white dark:bg-gray-900">
        <hr className="h-1 bg-gray-200 border-0 dark:bg-gray-700 w-4/5 rounded-full"></hr>
      </div>
    </>
  );
};

export default About;
