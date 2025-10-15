/**
 * Contact Service
 * Handles all contact-related API calls
 */

import { ContactFormValues } from '@/lib/validations/contact';

export type ContactEmailResponse = {
  message: string;
  data?: {
    id?: string;
    [key: string]: unknown;
  };
  thankYouSent?: boolean;
};

/**
 * Send contact form email
 * @param values - Contact form data
 * @returns Promise with response data
 */
export const sendContactEmail = async (
  values: ContactFormValues
): Promise<ContactEmailResponse> => {
  const response = await fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message');
  }

  return data;
};
