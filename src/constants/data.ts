import Data from '@/constants/data.json';

const siteData = {
  title: Data.site_title,
  description: Data.site_description,
};

const data = {
  firstName: Data.user.name.first,
  lastName: Data.user.name.last,
  description: Data.user.bio,
  profileImg: Data.links.profile_image,
  developerSite: Data.links.web_site,
  cvLink: Data.links.cv_link,
  repositoryLink: Data.links.repository,
  githubUsername: Data.usernames.github,
};

export { siteData, data };
