import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { Footer } from '@/components/partials/footer';
import { Header } from '@/components/partials/header';
import { QueryProvider } from '@/components/providers/query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

import './styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

const baseUrl = 'https://shanelka.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Shanelka Pramuditha — Software Engineer',
    template: '%s | Shanelka Pramuditha'
  },
  description:
    'Software Engineering undergraduate at SLIIT, full-stack developer specializing in React, Next.js, NestJS, and TypeScript. Currently working as Associate Software Engineer at PurePitch.',
  keywords: [
    'Shanelka Pramuditha',
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Sri Lanka',
    'SLIIT',
    'Portfolio'
  ],
  authors: [{ name: 'Shanelka Pramuditha', url: baseUrl }],
  creator: 'Shanelka Pramuditha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Shanelka Pramuditha',
    title: 'Shanelka Pramuditha — Software Engineer',
    description:
      'Software Engineering undergraduate at SLIIT, full-stack developer specializing in React, Next.js, NestJS, and TypeScript.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shanelka Pramuditha — Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shanelka Pramuditha — Software Engineer',
    description:
      'Software Engineering undergraduate at SLIIT, full-stack developer specializing in React, Next.js, NestJS, and TypeScript.',
    images: ['/og-image.png'],
    creator: '@ShanelkaPramuditha'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: baseUrl
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Shanelka Pramuditha',
      url: baseUrl,
      image: `${baseUrl}/images/profile.jpg`,
      sameAs: [
        'https://github.com/ShanelkaPramuditha',
        'https://www.linkedin.com/in/shanelkapramuditha',
        'https://www.facebook.com/ShanelkaPramuditha'
      ],
      jobTitle: 'Associate Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'PurePitch',
        url: 'https://purepitch.com'
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Sri Lanka Institute of Information Technology',
        alternateName: 'SLIIT'
      },
      knowsAbout: ['React', 'Next.js', 'NestJS', 'TypeScript', 'Node.js', 'Python', 'AWS'],
      email: 'contact@shanelka.com'
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Shanelka Pramuditha',
      description:
        'Personal portfolio of Shanelka Pramuditha — full-stack software engineer specializing in React, Next.js, NestJS, and TypeScript.',
      author: { '@id': `${baseUrl}/#person` }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <ThemeProvider>
            <div className='relative flex min-h-screen flex-col'>
              <Header />
              <main className='mx-auto w-full max-w-4xl flex-1 px-4 py-4 sm:px-6 lg:px-8'>
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
