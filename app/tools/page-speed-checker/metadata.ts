import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Page Speed Checker 2024 - Test Website Speed & Performance | VoidToolbox',
  description: 'Free page speed checker to test your website performance. Analyze Core Web Vitals, get speed scores, and receive recommendations to improve your site speed.',
  keywords: [
    'page speed checker',
    'website speed test',
    'page speed test',
    'website performance test',
    'speed checker',
    'page speed analyzer',
    'website speed checker',
    'free page speed test',
    'Core Web Vitals checker',
    'website speed analyzer',
    'page speed tool',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/page-speed-checker`,
  },
  openGraph: {
    title: 'Free Page Speed Checker - Test Website Speed',
    description: 'Test your website speed and get recommendations to improve performance.',
    url: `${SITE_URL}/tools/page-speed-checker`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Page Speed Checker',
    description: 'Test your website speed and performance.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
