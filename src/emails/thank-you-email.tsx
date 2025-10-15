import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { data } from '@/constants/data';

interface ThankYouEmailProps {
    fullName: string;
}

export default function ThankYouEmail({ fullName }: ThankYouEmailProps) {
    const firstName = fullName.split(' ')[0];

    return (
        <Html>
            <Head />
            <Preview>Thank you for reaching out! I&apos;ll get back to you soon.</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with gradient */}
                    <Section style={header}>
                        <Heading style={h1}>Thanks for Reaching Out!</Heading>
                    </Section>

                    {/* Main Content */}
                    <Section style={content}>
                        <Text style={greeting}>Hi {firstName},</Text>

                        <Text style={paragraph}>
                            Thank you for taking the time to contact me! I really appreciate your interest.
                        </Text>

                        <Text style={paragraph}>
                            I&apos;ve received your message and will review it carefully. I typically respond within
                            24-48 hours during business days.
                        </Text>

                        {/* Feature box */}
                        <Section style={featureBox}>
                            <Text style={featureTitle}>⚡ What&apos;s Next?</Text>
                            <Text style={featureText}>
                                • I&apos;ll review your message thoroughly
                                <br />
                                • You&apos;ll hear back from me within 1-2 business days
                                <br />
                                • Feel free to check out my portfolio in the meantime
                            </Text>
                        </Section>

                        <Text style={paragraph}>
                            In the meantime, feel free to explore my portfolio to see more of my work and projects.
                        </Text>

                        {/* CTA Button */}
                        <Section style={buttonContainer}>
                            <Button style={button} href={data.developerSite}>
                                View My Portfolio
                            </Button>
                        </Section>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Looking forward to connecting with you soon!
                            <br />
                            <br />
                            Best regards,
                            <br />
                            <strong>{data.fullName}</strong>
                        </Text>

                        {/* Social Links */}
                        <Section style={socialSection}>
                            <Text style={socialText}>Connect with me:</Text>
                            <Section style={socialLinks}>
                                <Link href={data.githubLink} style={socialLink}>
                                    GitHub
                                </Link>
                                {' • '}
                                <Link href={data.linkedinLink} style={socialLink}>
                                    LinkedIn
                                </Link>
                                {' • '}
                                <Link href={data.developerSite} style={socialLink}>
                                    Portfolio
                                </Link>
                            </Section>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footerSection}>
                        <Text style={footerText}>
                            This is an automated response to confirm we received your message.
                            <br />
                            Please do not reply to this email.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    marginBottom: '64px',
    borderRadius: '8px',
    overflow: 'hidden' as const,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    padding: '40px 20px',
    textAlign: 'center' as const,
};

const h1 = {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
    textAlign: 'center' as const,
};

const content = {
    padding: '40px 30px',
};

const greeting = {
    fontSize: '18px',
    color: '#1f2937',
    fontWeight: '600',
    margin: '0 0 20px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0 0 16px',
};

const featureBox = {
    backgroundColor: '#f0f9ff',
    border: '2px solid #0ea5e9',
    borderRadius: '8px',
    padding: '20px',
    margin: '24px 0',
};

const featureTitle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0284c7',
    margin: '0 0 12px',
};

const featureText = {
    fontSize: '15px',
    lineHeight: '1.8',
    color: '#1e3a8a',
    margin: '0',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '32px 0',
};

const button = {
    backgroundColor: '#0ea5e9',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '14px 32px',
    cursor: 'pointer',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '32px 0',
};

const footer = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0',
};

const socialSection = {
    marginTop: '32px',
    textAlign: 'center' as const,
};

const socialText = {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0 0 8px',
};

const socialLinks = {
    textAlign: 'center' as const,
};

const socialLink = {
    color: '#0ea5e9',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
};

const footerSection = {
    backgroundColor: '#f9fafb',
    padding: '20px 30px',
    borderTop: '1px solid #e5e7eb',
};

const footerText = {
    fontSize: '12px',
    lineHeight: '1.5',
    color: '#6b7280',
    textAlign: 'center' as const,
    margin: '0',
};
