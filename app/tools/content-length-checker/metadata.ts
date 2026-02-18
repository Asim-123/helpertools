import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Content Length Checker 2024 - Analyze Content Length & Readability | VoidToolbox',
  description: 'Free content length checker to analyze content length, readability, and get reading time estimates for your articles. Check word count, character count, and reading level.',
  keywords: [
    'content length checker',
    'content length analyzer',
    'word count checker',
    'content analyzer',
    'readability checker',
    'reading time calculator',
    'content length tool',
    'word count tool',
    'content analysis tool',
    'free content checker',
    'content length SEO',
    'article length checker',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/content-length-checker`,
  },
  openGraph: {
    title: 'Free Content Length Checker - Analyze Content Length & Readability',
    description: 'Analyze content length, readability, and get reading time estimates for your articles.',
    url: `${SITE_URL}/tools/content-length-checker`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Content Length Checker',
    description: 'Analyze content length, readability, and get reading time estimates.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
