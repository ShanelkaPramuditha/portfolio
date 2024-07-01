import { EmailTemplate } from '@/components/Email/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { contactFormData } from '@/constants/contact';

const resend = new Resend(contactFormData.resendApiKey);

type ResponseData = {
  fullName: string;
  email: string;
  mobile: string;
  message: string;
};

export async function POST(request: any) {
  const requestData = await request.json();
  const { fullName, email, mobile, message } = requestData as ResponseData;
  try {
    const { data, error } = await resend.emails.send({
      from: `${fullName} <${contactFormData.fromMail}>`,
      to: [contactFormData.toMail],
      subject: 'Hello world',
      react: EmailTemplate({
        fullName: fullName,
        email: email,
        mobile: mobile,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
