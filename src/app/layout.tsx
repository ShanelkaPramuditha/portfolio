import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteData } from '@constants/data';
import { ThemeProvider } from '@/theme/ThemeProvider/theme-provider';
import { ReactQueryProvider } from '@/contexts/QueryProvider/query-provider';
import NavBar from '@components/layout/navbar';
import Footer from '@components/layout/footer';
import Spinner from '@components/layout/spinner';
import ScrollIndicator from '@components/layout/scroll-indicator';
import { GA_CONFIG } from '@constants/configs';
import Script from 'next/script';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

// Google analytics tracking ID
const GA_TRACKING_ID = GA_CONFIG.id;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get theme from cookies on the server
  const themeCookie = (await cookies()).get('theme');
  const theme = themeCookie ? themeCookie.value : 'light';

  return (
    <html
      lang="en"
      className={theme === 'dark' ? 'dark' : 'light'}
      style={{ colorScheme: theme === 'dark' ? 'dark' : 'light' }}
    >
      {/* Add Google Analytics Scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider>
            <NavBar />
            <ScrollIndicator />
            <Suspense
              fallback={
                <div className="content-center min-h-[calc(100vh-100px)]">
                  <Spinner />
                </div>
              }
            >
              {children}
            </Suspense>
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
