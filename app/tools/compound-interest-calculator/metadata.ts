import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Compound Interest Calculator 2024 - Calculate Investment Growth | VoidToolbox',
  description: 'Free compound interest calculator to calculate compound interest with regular contributions. See your investment grow over time with our compound interest calculator tool.',
  keywords: [
    'compound interest calculator',
    'compound interest',
    'investment calculator',
    'compound interest formula',
    'compound interest calculator with contributions',
    'savings calculator',
    'investment growth calculator',
    'compound interest rate calculator',
    'free compound interest calculator',
    'calculate compound interest',
    'compound interest calculator monthly',
    'compound interest calculator USA',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/compound-interest-calculator`,
  },
  openGraph: {
    title: 'Free Compound Interest Calculator - Calculate Investment Growth',
    description: 'Calculate compound interest with regular contributions and see your investment grow over time.',
    url: `${SITE_URL}/tools/compound-interest-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Compound Interest Calculator',
    description: 'Calculate compound interest with regular contributions and see your investment grow.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
