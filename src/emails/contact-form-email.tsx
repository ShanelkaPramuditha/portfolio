import {
    Body,
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

interface ContactFormEmailProps {
    fullName: string;
    email: string;
    mobile?: string;
    message: string;
}

export default function ContactFormEmail({
    fullName,
    email,
    mobile,
    message,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>📧 New contact from {fullName} - Portfolio</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with Gradient */}
                    <Section style={header}>
                        <Heading style={headerTitle}>📬 New Contact Message</Heading>
                        <Text style={headerSubtitle}>
                            Someone just reached out through your portfolio
                        </Text>
                    </Section>

                    {/* Main Content */}
                    <Section style={content}>
                        {/* Alert Box */}
                        <Section style={alertBox}>
                            <Text style={alertText}>
                                ⚡ <strong>Action Required:</strong> A potential client or collaborator
                                is waiting for your response!
                            </Text>
                        </Section>

                        {/* Contact Information Card */}
                        <Section style={infoCard}>
                            <Heading style={cardTitle}>Contact Information</Heading>

                            <Section style={infoRow}>
                                <Text style={iconLabel}>
                                    <span style={icon}>👤</span>
                                    <span style={labelText}>Full Name</span>
                                </Text>
                                <Text style={valueText}>{fullName}</Text>
                            </Section>

                            <Section style={infoRow}>
                                <Text style={iconLabel}>
                                    <span style={icon}>✉️</span>
                                    <span style={labelText}>Email Address</span>
                                </Text>
                                <Link href={`mailto:${email}`} style={emailLink}>
                                    {email}
                                </Link>
                            </Section>

                            {mobile && (
                                <Section style={infoRow}>
                                    <Text style={iconLabel}>
                                        <span style={icon}>📱</span>
                                        <span style={labelText}>Phone Number</span>
                                    </Text>
                                    <Link href={`tel:${mobile}`} style={phoneLink}>
                                        {mobile}
                                    </Link>
                                </Section>
                            )}
                        </Section>

                        {/* Message Card */}
                        <Section style={messageCard}>
                            <Heading style={cardTitle}>Message</Heading>
                            <Section style={messageBox}>
                                <Text style={messageText}>{message}</Text>
                            </Section>
                        </Section>

                        {/* Quick Actions */}
                        <Section style={actionsSection}>
                            <Text style={actionsTitle}>Quick Actions</Text>
                            <Section style={buttonGroup}>
                                <Link href={`mailto:${email}`} style={primaryButton}>
                                    Reply via Email
                                </Link>
                                {mobile && (
                                    <Link href={`tel:${mobile}`} style={secondaryButton}>
                                        Call Now
                                    </Link>
                                )}
                            </Section>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Hr style={footerHr} />
                        <Text style={footerText}>
                            This email was sent from your portfolio contact form
                        </Text>
                        <Text style={footerSubtext}>
                            Received on {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Styles
const main = {
    backgroundColor: '#f4f4f5',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    padding: '40px 20px',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    borderRadius: '12px',
    overflow: 'hidden',
    maxWidth: '600px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
};

// Header Section
const header = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 32px',
    textAlign: 'center' as const,
};

const headerTitle = {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    lineHeight: '1.2',
};

const headerSubtitle = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '16px',
    margin: '0',
    fontWeight: '400',
};

// Content Section
const content = {
    padding: '32px',
};

// Alert Box
const alertBox = {
    backgroundColor: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
};

const alertText = {
    color: '#92400e',
    fontSize: '14px',
    margin: '0',
    lineHeight: '1.5',
};

// Info Card
const infoCard = {
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    border: '1px solid #e5e7eb',
};

const cardTitle = {
    color: '#111827',
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 20px 0',
};

const infoRow = {
    marginBottom: '16px',
};

const iconLabel = {
    color: '#6b7280',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    margin: '0 0 6px 0',
    display: 'flex',
    alignItems: 'center',
};

const icon = {
    marginRight: '8px',
    fontSize: '16px',
};

const labelText = {
    display: 'inline-block',
};

const valueText = {
    color: '#1f2937',
    fontSize: '16px',
    fontWeight: '500',
    margin: '0',
};

const emailLink = {
    color: '#667eea',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'block',
};

const phoneLink = {
    color: '#667eea',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'block',
};

// Message Card
const messageCard = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    border: '2px solid #e5e7eb',
};

const messageBox = {
    backgroundColor: '#f9fafb',
    borderLeft: '4px solid #667eea',
    borderRadius: '4px',
    padding: '16px',
};

const messageText = {
    color: '#374151',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
};

// Actions Section
const actionsSection = {
    marginTop: '32px',
};

const actionsTitle = {
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    margin: '0 0 16px 0',
};

const buttonGroup = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
};

const primaryButton = {
    backgroundColor: '#667eea',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    display: 'inline-block',
    textAlign: 'center' as const,
    boxShadow: '0 2px 4px rgba(102, 126, 234, 0.3)',
};

const secondaryButton = {
    backgroundColor: '#ffffff',
    color: '#667eea',
    fontSize: '15px',
    fontWeight: '600',
    textDecoration: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    display: 'inline-block',
    textAlign: 'center' as const,
    border: '2px solid #667eea',
};

// Footer
const footer = {
    padding: '0 32px 32px 32px',
};

const footerHr = {
    borderColor: '#e5e7eb',
    margin: '0 0 20px 0',
};

const footerText = {
    color: '#6b7280',
    fontSize: '14px',
    margin: '0 0 8px 0',
    textAlign: 'center' as const,
};

const footerSubtext = {
    color: '#9ca3af',
    fontSize: '12px',
    margin: '0',
    textAlign: 'center' as const,
};
