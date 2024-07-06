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

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
