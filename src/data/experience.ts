export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  logo?: string;
  url?: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: 'Purepitch',
    role: 'Associate Software Engineer',
    type: 'Full-time',
    location: 'Remote, Netherlands',
    startDate: 'Jul 2025',
    endDate: 'Present',
    logo: '/images/companies/purepitch.jpg',
    bullets: [
      'Developed and maintained scalable full-stack applications using modern technologies and best practices.',
      'Worked with AWS cloud services for application deployment, monitoring, and performance optimization.',
      'Built and enhanced web applications using React, Next.js, Node.js, NestJS, Python, and related technologies.'
    ]
  },
  {
    company: 'Purepitch',
    role: 'Intern Software Engineer',
    type: 'Full-time',
    location: 'Remote, Netherlands',
    startDate: 'Dec 2024',
    endDate: 'Jun 2025',
    logo: '/images/companies/purepitch.jpg',
    bullets: [
      'Contributed to front-end and back-end development while gaining hands-on experience with modern web technologies.'
    ]
  },
  {
    company: 'Paranagama Associates (PVT) Ltd',
    role: 'Computer Operator',
    type: 'Full-time',
    location: 'Tissamaharama, Sri Lanka',
    startDate: 'Jan 2022',
    endDate: 'Oct 2022',
    logo: '/images/companies/paranagama.jpg',
    bullets: [
      'Managed inventory, returns, sales, invoicing, and billing processes for Hemas Pharmaceuticals operations.'
    ]
  },
  {
    company: 'OREL IT',
    role: 'Associate Image Processor',
    type: 'Full-time',
    location: 'Maharagama, Sri Lanka',
    startDate: 'Jan 2021',
    endDate: 'May 2021',
    logo: '/images/companies/orelit.jpg',
    bullets: [
      'Worked collaboratively in a team environment with a shared focus on the same tasks to maximize speed and efficiency.'
    ]
  }
];
