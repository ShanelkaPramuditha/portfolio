import '@/styles/globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteData } from '@/constants/data';
import { ThemeProvider } from '@/theme/ThemeProvider/theme-provider';
import { ReactQueryProvider } from '@/contexts/QueryProvider/query-provider';
import NavBar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Spinner from '@/components/layout/spinner';
import ScrollIndicator from '@/components/layout/scroll-indicator';
import { GA_CONFIG } from '@/constants/configs';
import Script from 'next/script';

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
  return (
    <html lang="en">
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
      <body className={`${inter.className}`}>
        <ReactQueryProvider>
          <ThemeProvider>
            <div className="max-w-screen-xl mx-auto">
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
            </div>
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
