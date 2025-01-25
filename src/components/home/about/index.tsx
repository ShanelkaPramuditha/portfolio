import Image from 'next/image';
import { aboutData } from '@constants/about';
import about from '@/assets/images/about.png';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen content-center"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 my-10">
          <div className="mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center">
            <h1 className="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              Who am I?
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              {aboutData.description1}
            </p>
            <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              {aboutData.description2}
            </p>
          </div>
          {/* Desktop View */}
          <div className="hidden lg:flex justify-center items-center lg:col-span-5 lg:mt-0">
            <Image
              className="object-cover object-center"
              src={about}
              alt="Avatar"
              width={350}
              height={350}
              priority
            />
          </div>
          {/* Mobile View */}
          <div className="flex justify-center lg:hidden">
            <Image
              className="object-cover object-center"
              src={about}
              alt="Avatar"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
