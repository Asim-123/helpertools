import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Meta Tags Generator 2024 - Generate HTML Meta Tags | VoidToolbox',
  description: 'Free meta tags generator to create complete HTML meta tags including OpenGraph and Twitter Card tags. Generate SEO-optimized meta tags for your website.',
  keywords: [
    'meta tags generator',
    'generate meta tags',
    'HTML meta tags generator',
    'OpenGraph generator',
    'meta tags HTML',
    'free meta tags generator',
    'SEO meta tags generator',
    'social media meta tags',
    'Twitter Card generator',
    'meta tags code generator',
    'OG tags generator',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/meta-tags-generator`,
  },
  openGraph: {
    title: 'Free Meta Tags Generator - Generate HTML Meta Tags',
    description: 'Generate complete HTML meta tags including OpenGraph and Twitter Card tags.',
    url: `${SITE_URL}/tools/meta-tags-generator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Meta Tags Generator',
    description: 'Generate complete HTML meta tags for your website.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
