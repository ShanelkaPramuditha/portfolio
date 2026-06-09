export type EducationItem = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  logo?: string;
};

export const educations: EducationItem[] = [
  {
    institution: 'Sri Lanka Institute of Information Technology',
    degree: 'BSc (Hons) in Information Technology Specialising in Software Engineering',
    startDate: 'Oct 2022',
    endDate: 'Present',
    location: 'Sri Lanka',
    logo: '/images/education/sliit.jpeg'
  },
  {
    institution: 'H/ Debarawewa Central College',
    degree: 'GCE Advanced Level — Science Stream',
    startDate: 'Jun 2017',
    endDate: 'Aug 2019',
    location: 'Sri Lanka',
    logo: '/images/education/dcc.jpg'
  }
];
