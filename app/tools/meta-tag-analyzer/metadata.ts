import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Meta Tag Analyzer 2024 - Optimize Title & Description Tags | VoidToolbox',
  description: 'Free meta tag analyzer to analyze and optimize your meta title and description for search engines. Check title and description length, get SEO recommendations.',
  keywords: [
    'meta tag analyzer',
    'meta tag checker',
    'meta description analyzer',
    'title tag analyzer',
    'meta tag optimizer',
    'SEO meta tag checker',
    'meta tag analysis',
    'title tag checker',
    'meta description checker',
    'free meta tag analyzer',
    'meta tag analyzer tool',
    'SEO meta tags',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/meta-tag-analyzer`,
  },
  openGraph: {
    title: 'Free Meta Tag Analyzer - Optimize Title & Description Tags',
    description: 'Analyze and optimize your meta title and description for search engines.',
    url: `${SITE_URL}/tools/meta-tag-analyzer`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Meta Tag Analyzer',
    description: 'Analyze and optimize your meta title and description for SEO.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
