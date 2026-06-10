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
    degree: 'BSc (Hons) in Information Technology Specializing in Software Engineering',
    startDate: 'Oct 2022',
    endDate: 'Jun 2026',
    location: 'Sri Lanka',
    logo: '/images/education/sliit.jpeg'
  },
  {
    institution: 'H/ Debarawewa Central College',
    degree: 'GCE Advanced Level - Science Stream',
    startDate: 'Jun 2017',
    endDate: 'Aug 2019',
    location: 'Sri Lanka',
    logo: '/images/education/dcc.jpg'
  },
  {
    institution: 'H/ Debarawewa Central College',
    degree: 'GCE Ordinary Level',
    startDate: 'Jan 2011',
    endDate: 'Dec 2016',
    location: 'Sri Lanka',
    logo: '/images/education/dcc.jpg'
  },
  {
    institution: 'H/ Yatalatissa Primary School',
    degree: 'Primary Education',
    startDate: 'Jan 2005',
    endDate: 'Dec 2010',
    location: 'Sri Lanka',
    logo: '/images/education/yatalatissa.jpg'
  }
];
