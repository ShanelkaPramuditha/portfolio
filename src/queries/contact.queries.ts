/**
 * Contact Queries Hook
 * TanStack Query hooks for contact form operations
 */

import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import { type ContactFormValues } from '@/lib/validations/contact';
import { sendContactEmail, type ContactEmailResponse } from '@/services/contact.service';

/**
 * Hook for sending contact form email
 * @param options - Optional mutation options
 */
export const useSendContactEmail = (
  options?: UseMutationOptions<ContactEmailResponse, Error, ContactFormValues>
) => {
  return useMutation<ContactEmailResponse, Error, ContactFormValues>({
    mutationFn: sendContactEmail,
    ...options
  });
};
