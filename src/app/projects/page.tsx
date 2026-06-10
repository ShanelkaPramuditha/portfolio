import type { Metadata } from 'next';

import { ProjectsPageClient } from '@/components/home-page/projects/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Browse Shanelka Pramuditha's open-source projects and software engineering work on GitHub - full-stack apps built with React, Next.js, NestJS, TypeScript, and more.",
  alternates: {
    canonical: 'https://shanelka.com/projects'
  },
  openGraph: {
    title: 'Projects | Shanelka Pramuditha',
    description:
      "Browse Shanelka Pramuditha's open-source projects and software engineering work on GitHub.",
    url: 'https://shanelka.com/projects'
  }
};

export default function Page() {
  return <ProjectsPageClient />;
}
