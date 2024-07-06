import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteData } from '@/constants/data';
import Theme from '@/theme/ThemeProvider/theme-provider';
import { ReactQueryProvider } from '@/contexts/QueryProvider/query-provider';
import NavBar from '@/components/NavBar/nav-bar';
import Footer from '@/components/Footer/footer';

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
            {children}
            <Footer />
          </Theme>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
