/**
 * Contact Queries Hook
 * TanStack Query hooks for contact form operations
 */

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { sendContactEmail, ContactEmailResponse } from '@/services/contact.service';
import { ContactFormValues } from '@/lib/validations/contact';

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
