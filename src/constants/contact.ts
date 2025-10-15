import Data from '@/constants/data/data.json';

// Social Media Links Array
const socialMedia = [
  {
    name: 'GitHub',
    url: Data.links.github,
    icon: 'FaGithub'
  },
  {
    name: 'LinkedIn',
    url: Data.links.social_media.linkedin,
    icon: 'FaLinkedin'
  },
  {
    name: 'Facebook',
    url: Data.links.social_media.facebook,
    icon: 'FaFacebook'
  },
  {
    name: 'Whatsapp',
    url: Data.links.social_media.whatsapp,
    icon: 'FaWhatsapp'
  },
  {
    name: 'Telegram',
    url: Data.links.social_media.telegram,
    icon: 'FaTelegram'
  }
];

const contactFormData = {
  resendApiKey: process.env.RESEND_API_KEY,
  fromMail: process.env.FROM_EMAIL,
  toMail: process.env.TO_EMAIL
};

const directContactData = {
  email: Data.contact.email,
  phone: Data.contact.phone,
  scheduleCall: Data.links.calendly
};

export { contactFormData, directContactData, socialMedia };
