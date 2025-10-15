import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import ContactFormEmail from '@/emails/contact-form-email';
import ThankYouEmail from '@/emails/thank-you-email';
import { EMAIL_CONFIG } from '@/constants/configs';

const resend = new Resend(EMAIL_CONFIG.resend.apiKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message
      }));

      return NextResponse.json(
        {
          error: 'Validation failed',
          details: errors
        },
        { status: 400 }
      );
    }

    const { fullName, email, mobile, message } = validationResult.data;

    // Validate environment variables
    if (!EMAIL_CONFIG.resend.fromEmail || !EMAIL_CONFIG.resend.toEmail) {
      console.error('Missing email configuration');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Send notification email to yourself
    const notificationEmail = resend.emails.send({
      from: EMAIL_CONFIG.resend.fromEmail,
      to: [EMAIL_CONFIG.resend.toEmail],
      subject: `Portfolio Contact: Message from ${fullName}`,
      replyTo: email,
      react: ContactFormEmail({
        fullName,
        email,
        mobile,
        message
      })
    });

    // Send thank you email to the sender
    const thankYouEmailPromise = resend.emails.send({
      from: EMAIL_CONFIG.resend.fromEmail,
      to: [email],
      subject: 'Thanks for reaching out! 🚀',
      react: ThankYouEmail({
        fullName
      })
    });

    // Send both emails in parallel
    const [notificationResult, thankYouResult] = await Promise.allSettled([
      notificationEmail,
      thankYouEmailPromise
    ]);

    // Check if notification email (the important one) succeeded
    if (notificationResult.status === 'rejected') {
      console.error('Failed to send notification email:', notificationResult.reason);
      return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 });
    }

    if (notificationResult.value.error) {
      console.error('Resend error (notification):', notificationResult.value.error);
      return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 });
    }

    // Log if thank you email failed, but don't fail the request
    if (thankYouResult.status === 'rejected') {
      console.warn('Failed to send thank you email:', thankYouResult.reason);
    } else if (thankYouResult.value.error) {
      console.warn('Resend error (thank you):', thankYouResult.value.error);
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
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
