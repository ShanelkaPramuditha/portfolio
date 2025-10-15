'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconDeviceMobile, IconMail, IconUser, IconSend } from '@tabler/icons-react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';
import { useSendContactEmail } from '@/queries/contact.queries';

const ContactForm: React.FC = () => {
  const [counter, setCounter] = useState(20);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      message: '',
    },
  });

  // Use the contact query hook
  const mutation = useSendContactEmail({
    onSuccess: () => {
      toast.success('Message sent successfully! Check your email for a confirmation. 📧');

      // Start countdown and reset form
      let count = 20;
      setCounter(count);
      const interval = setInterval(() => {
        count -= 1;
        setCounter(count);
        if (count <= 0) {
          clearInterval(interval);
          form.reset();
        }
      }, 1000);
    },
    onError: (error: Error) => {
      console.error('Error sending email:', error);
      toast.error(error.message || 'Failed to send message. Please try again.');
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    mutation.mutate(values);
  };

  const isSubmitted = mutation.isSuccess && counter > 0;

  return (
    <div className='w-full mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name
                </FormLabel>
                <FormControl>
                  <div className='relative'>
                    <IconUser
                      size={20}
                      className='absolute left-3 top-1/2 -translate-y-1/2'
                    />
                    <Input
                      placeholder='John Doe'
                      disabled={isSubmitted || mutation.isPending}
                      className='pl-10'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <IconMail
                      size={20}
                      className='absolute left-3 top-1/2 -translate-y-1/2'
                    />
                    <Input
                      type='email'
                      placeholder='john@example.com'
                      disabled={isSubmitted || mutation.isPending}
                      className='pl-10'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mobile Field */}
          <FormField
            control={form.control}
            name='mobile'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Contact Number <span className='text-slate-500'>(Optional)</span>
                </FormLabel>
                <FormControl>
                  <div className='relative'>
                    <IconDeviceMobile
                      size={20}
                      className='absolute left-3 top-1/2 -translate-y-1/2'
                    />
                    <Input
                      type='tel'
                      placeholder='+1 (555) 123-4567'
                      disabled={isSubmitted || mutation.isPending}
                      className='pl-10'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Tell me about your project or inquiry...'
                    disabled={isSubmitted || mutation.isPending}
                    className='min-h-[120px] resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isSubmitted || mutation.isPending}
            className='w-full'
            size='lg'
          >
            {mutation.isPending ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Sending...
              </>
            ) : isSubmitted && mutation.isSuccess ? (
              `Thanks for reaching out! (${counter}s)`
            ) : (
              <>
                <IconSend className='mr-2 h-4 w-4' />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
