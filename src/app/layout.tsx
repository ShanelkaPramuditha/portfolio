import { Footer } from '@/components/partials/footer';
import { Header } from '@/components/partials/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Shanelka',
  description: 'Portfolio of Shanelka'
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <ThemeProvider>
            <div className='relative min-h-screen flex flex-col'>
              <div className='max-w-7xl w-full flex-1 mx-auto flex flex-col px-4'>
                {/* Header with proper spacing */}
                <Header />

                {/* Main content area - automatically handles header spacing */}
                <main className='flex-1 overflow-clip'>{children}</main>
              </div>
              {/* Footer */}
              <Footer />
            </div>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
