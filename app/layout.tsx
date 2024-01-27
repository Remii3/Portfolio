import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Remi's Hero",
  description: 'This is a portfolio page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Remi&apos;s Portfolio</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
