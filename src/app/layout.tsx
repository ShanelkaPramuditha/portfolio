import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteData } from '@/constants/data';
import Theme from '@/theme/ThemeProvider/theme-provider';
import { ReactQueryProvider } from '@/contexts/QueryProvider/query-provider';
import NavBar from '@/components/NavBar/nav-bar';
import Footer from '@/components/Footer/footer';
import Spinner from '@/components/Spinner/spinner';
import ScrollIndicator from '@/components/ScrollIndicator/scroll-indicator';
import { GA_CONFIG } from '@/constants/configs';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

// Google analytics tracking ID
const GA_TRACKING_ID = GA_CONFIG.id;

export default function RootLayout({
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
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>
      <body className={inter.className}>
        <ReactQueryProvider>
          <Theme>
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
          </Theme>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
