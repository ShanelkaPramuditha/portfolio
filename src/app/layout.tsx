import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteData } from '@/constants/data';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
