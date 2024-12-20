const siteData = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Shanelka',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Shanelka Pramuditha's personal website",
};

const data = {
  firstName: process.env.NEXT_PUBLIC_FIRST_NAME || 'Shanelka',
  lastName: process.env.NEXT_PUBLIC_LAST_NAME || 'Pramuditha',
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'Full Stack Developer',
  profileImg:
    process.env.NEXT_PUBLIC_PROFILE_IMG ||
    'https://github.com/ShanelkaPramuditha.png',
  developerSite:
    process.env.NEXT_PUBLIC_DEVELOPER_SITE || 'https://shanelka.com',
  cvLink:
    process.env.NEXT_PUBLIC_CV_LINK || 'https://cv.shanelka.com/Shanelka.pdf',
  repositoryLink:
    process.env.NEXT_PUBLIC_REPOSITORY_LINK ||
    'https://github.com/ShanelkaPramuditha/portfolio',
  githubUsername:
    process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'ShanelkaPramuditha',
};

export { siteData, data };
