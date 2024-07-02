// Social Media Links Array
const socialMedia = [
  {
    name: 'GitHub',
    url: process.env.NEXT_PUBLIC_GITHUB || 'https://github.com',
    icon: 'FaGithub',
  },
  {
    name: 'LinkedIn',
    url: process.env.NEXT_PUBLIC_LINKEDIN || 'https://linkedin.com',
    icon: 'FaLinkedin',
  },
  {
    name: 'Facebook',
    url: process.env.NEXT_PUBLIC_FACEBOOK || 'https://facebook.com',
    icon: 'FaFacebook',
  },
];

const contactFormData = {
  resendApiKey: process.env.NEXT_PUBLIC_RESEND_API_KEY || '',
  fromMail: process.env.NEXT_PUBLIC_FROM_EMAIL || '',
  toMail: process.env.NEXT_PUBLIC_TO_EMAIL || '',
};

const directContactData = {
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@shanelka.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+94771230577',
  scheduleCall:
    process.env.NEXT_PUBLIC_CALL_SCHEDULE ||
    'https://calendly.com/shanelka/30min',
};

export { socialMedia, contactFormData, directContactData };
