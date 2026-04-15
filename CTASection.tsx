import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Luminic Labs — Blockchain Development Company',
    template: '%s | Luminic Labs',
  },
  description:
    'Luminic Labs is a premier blockchain development company based in India. We build tokens, smart contracts, DApps, and full-scale decentralized ecosystems for startups and enterprises.',
  keywords: [
    'blockchain development',
    'smart contract',
    'token development',
    'DApp development',
    'Web3',
    'Luminic Labs',
    'India',
    'crypto',
  ],
  authors: [{ name: 'Luminic Labs Pvt Ltd' }],
  openGraph: {
    title: 'Luminic Labs — Building the Future of Web3',
    description:
      'Premier blockchain development company. Tokens, smart contracts, DApps, exchange listings, and consulting.',
    url: 'https://luminiclabs.com',
    siteName: 'Luminic Labs',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luminic Labs — Blockchain Development',
    description:
      'Building the decentralized future, block by block. Based in India.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#080C14] text-gray-100 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
