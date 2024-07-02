'use client';

import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { FiUser } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { ErrorMessage, Formik, FormikHelpers, Form, Field } from 'formik';

interface ContactFormValues {
  fullName: string;
  email: string;
  mobile: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(10);

  const initialValues: ContactFormValues = {
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  };

  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      setIsSubmitting(true);
      const res = await axios.post('/api/email', values);
      if (res.status === 200) {
        setIsSubmitted(true);
        setIsSubmitting(false);

        // Start countdown
        let count = 20;
        setCounter(count);
        const interval = setInterval(() => {
          count -= 1;
          setCounter(count);
          if (count <= 0) {
            clearInterval(interval);
            setIsSubmitted(false);
            actions.resetForm();
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.number().typeError('Contact Number must be a number'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <>
      <div className="text-gray-900 dark:text-white w-full">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Get in Touch
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="max-w-sm mx-auto mt-10">
            <div className="mb-2">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FiUser size={20} />
                </span>
                <Field
                  disabled={isSubmitted || isSubmitting}
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <p className="mt-1 text-xs text-red-600 dark:text-red-500 flex justify-end">
                <span>
                  <ErrorMessage name="fullName" />
                </span>
              </p>
            </div>

            <div className="mb-2">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <MdOutlineMail size={20} />
                </span>
                <Field
                  disabled={isSubmitted || isSubmitting}
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <p className="mt-1 text-xs text-red-600 dark:text-red-500 flex justify-end">
                <span>
                  <ErrorMessage name="email" />
                </span>
              </p>
            </div>

            <div className="mb-2">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <FaMobileAlt size={20} />
                </span>
                <Field
                  disabled={isSubmitted || isSubmitting}
                  id="mobile"
                  name="mobile"
                  placeholder="Contact Number (Optional)"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <p className="mt-1 text-xs text-red-600 dark:text-red-500 flex justify-end">
                <span>
                  <ErrorMessage name="mobile" />
                </span>
              </p>
            </div>

            <div className="mb-0">
              <div className="flex">
                <Field
                  disabled={isSubmitted || isSubmitting}
                  id="message"
                  name="message"
                  as="textarea"
                  placeholder="Message..."
                  style={{ resize: 'none' }}
                  className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <p className="mt-1 text-xs text-red-600 dark:text-red-500 flex justify-end">
                <span>
                  <ErrorMessage name="message" />
                </span>
              </p>
            </div>

            <br />
            <button
              type="submit"
              disabled={isSubmitted || isSubmitting}
              className={`w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
                isSubmitted || isSubmitting ? 'cursor-not-allowed' : ''
              }`}
            >
              {!isSubmitting && !isSubmitted && 'Send Message'}
              {isSubmitting && (
                <div>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Sending...</span>
                </div>
              )}
              {/* Thanks and counter 10 to 0 */}
              {isSubmitted && `Thanks! Resetting in ${counter} seconds...`}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
