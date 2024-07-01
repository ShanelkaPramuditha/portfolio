import ContactForm from '@/components/Contact/ContactForm/contact-form';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div id="contact" className="min-h-screen content-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* <div className="mx-auto place-self-center lg:col-span-7 flex flex-col justify-center items-center">
            <h1 className="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              Contact
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              <span className="font-bold">Email:</span>
              <Link
                href="mailto:contact@shanelka.com"
                className=" hover:underline"
              >
                contact@shanelka.com
              </Link>
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              Mobile
            </p>
          </div> */}
          {/* Desktop View */}
          <div className="hidden lg:flex justify-center items-center lg:col-span-12 lg:mt-0">
            <ContactForm />
          </div>
          {/* Mobile View */}
          <div className="flex justify-center lg:hidden mb-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
