import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import ContactFormEmail from '@/emails/contact-form-email';
import ThankYouEmail from '@/emails/thank-you-email';
import { EMAIL_CONFIG } from '@/constants/configs';

const resend = new Resend(EMAIL_CONFIG.resend.apiKey);

const isDev = process.env.NODE_ENV === 'development';
const log = (...args: unknown[]) => isDev && console.error(...args);
const warn = (...args: unknown[]) => isDev && console.warn(...args);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message
      }));

      return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 });
    }

    const { fullName, email, mobile, message } = validationResult.data;

    if (!EMAIL_CONFIG.resend.fromEmail || !EMAIL_CONFIG.resend.toEmail) {
      log('Missing email configuration');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const notificationEmail = resend.emails.send({
      from: EMAIL_CONFIG.resend.fromEmail,
      to: [EMAIL_CONFIG.resend.toEmail],
      subject: `Portfolio Contact: Message from ${fullName}`,
      replyTo: email,
      react: ContactFormEmail({ fullName, email, mobile, message })
    });

    const thankYouEmailPromise = resend.emails.send({
      from: EMAIL_CONFIG.resend.fromEmail,
      to: [email],
      subject: 'Thanks for reaching out! 🚀',
      react: ThankYouEmail({ fullName })
    });

    const [notificationResult, thankYouResult] = await Promise.allSettled([
      notificationEmail,
      thankYouEmailPromise
    ]);

    if (notificationResult.status === 'rejected') {
      log('Failed to send notification email:', notificationResult.reason);
      return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 });
    }

    if (notificationResult.value.error) {
      log('Resend error (notification):', notificationResult.value.error);
      return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 });
    }

    if (thankYouResult.status === 'rejected') {
      warn('Failed to send thank you email:', thankYouResult.reason);
    } else if (thankYouResult.value.error) {
      warn('Resend error (thank you):', thankYouResult.value.error);
    }

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        data: notificationResult.value.data,
        thankYouSent: thankYouResult.status === 'fulfilled' && !thankYouResult.value.error
      },
      { status: 200 }
    );
  } catch (error) {
    log('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
