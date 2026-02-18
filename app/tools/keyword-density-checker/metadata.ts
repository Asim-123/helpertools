import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Keyword Density Checker 2024 - Analyze Keyword Frequency | VoidToolbox',
  description: 'Free keyword density checker to analyze keyword density in your content and optimize for better SEO performance. Check keyword frequency and density percentage.',
  keywords: [
    'keyword density checker',
    'keyword density analyzer',
    'keyword frequency checker',
    'keyword density tool',
    'check keyword density',
    'keyword density calculator',
    'SEO keyword density',
    'keyword analysis tool',
    'keyword density checker free',
    'keyword density tool online',
    'keyword density analyzer free',
    'SEO keyword checker',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/keyword-density-checker`,
  },
  openGraph: {
    title: 'Free Keyword Density Checker - Analyze Keyword Frequency',
    description: 'Analyze keyword density in your content and optimize for better SEO performance.',
    url: `${SITE_URL}/tools/keyword-density-checker`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Keyword Density Checker',
    description: 'Analyze keyword density in your content and optimize for SEO.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
