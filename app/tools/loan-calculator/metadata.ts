import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Loan EMI Calculator 2024 - Calculate EMI, Interest & Payment Schedule | VoidToolbox',
  description: 'Free loan EMI calculator to calculate EMI for personal loans, car loans, home loans, and other loans with detailed payment schedule. Calculate your loan EMI instantly.',
  keywords: [
    'loan calculator',
    'EMI calculator',
    'personal loan calculator',
    'car loan calculator',
    'home loan calculator',
    'loan EMI calculator',
    'loan payment calculator',
    'calculate EMI',
    'loan interest calculator',
    'free loan calculator',
    'auto loan calculator',
    'loan calculator USA',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/loan-calculator`,
  },
  openGraph: {
    title: 'Free Loan EMI Calculator - Calculate EMI & Payment Schedule',
    description: 'Calculate EMI for personal loans, car loans, and other loans with detailed payment schedule. Free loan calculator tool.',
    url: `${SITE_URL}/tools/loan-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Loan EMI Calculator - Calculate Loan Payments',
    description: 'Calculate EMI for personal loans, car loans, and other loans with detailed payment schedule.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
