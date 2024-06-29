const siteData = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Shanelka',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Shanelka Pramuditha's personal website",
};

const data = {
  firstName: process.env.NEXT_PUBLIC_FIRST_NAME || 'Shanelka',
  lastName: process.env.NEXT_PUBLIC_LAST_NAME || 'Pramuditha',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'Software Engineer',
  profileImg:
    process.env.NEXT_PUBLIC_PROFILE_IMG ||
    'https://github.com/ShanelkaPramuditha.png',
  developerSite:
    process.env.NEXT_PUBLIC_DEVELOPER_SITE || 'https://shanelka.com',
  cvLink:
    process.env.NEXT_PUBLIC_CV_LINK || 'https://cv.shanelka.com/Shanelka.pdf',
};

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

export { siteData, data, socialMedia };
