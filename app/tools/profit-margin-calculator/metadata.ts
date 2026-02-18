import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Profit Margin Calculator 2024 - Calculate Gross, Net & Operating Margin | VoidToolbox',
  description: 'Free profit margin calculator to calculate gross profit margin, net profit margin, and operating profit margin for your business. Calculate profit margins instantly.',
  keywords: [
    'profit margin calculator',
    'gross profit margin calculator',
    'net profit margin calculator',
    'operating profit margin calculator',
    'profit margin',
    'calculate profit margin',
    'gross margin calculator',
    'net margin calculator',
    'business profit calculator',
    'free profit margin calculator',
    'profit margin formula',
    'profit calculator',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/profit-margin-calculator`,
  },
  openGraph: {
    title: 'Free Profit Margin Calculator - Calculate Gross, Net & Operating Margin',
    description: 'Calculate gross profit margin, net profit margin, and operating profit margin for your business.',
    url: `${SITE_URL}/tools/profit-margin-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Profit Margin Calculator',
    description: 'Calculate gross, net, and operating profit margins for your business.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
