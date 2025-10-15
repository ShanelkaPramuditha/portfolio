import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  mobile: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?[\d\s\-()]+$/.test(val), 'Please enter a valid phone number'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
