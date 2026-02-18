import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free URL Slug Generator 2024 - Generate SEO-Friendly URL Slugs | VoidToolbox',
  description: 'Free URL slug generator to generate SEO-friendly URL slugs from any text with customizable separators and options. Create clean, readable URLs for better SEO.',
  keywords: [
    'URL slug generator',
    'slug generator',
    'URL slug maker',
    'SEO slug generator',
    'generate URL slug',
    'slug creator',
    'URL slug tool',
    'slug generator free',
    'URL slug builder',
    'SEO friendly slug',
    'URL slug converter',
    'slug generator online',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/url-slug-generator`,
  },
  openGraph: {
    title: 'Free URL Slug Generator - Generate SEO-Friendly URL Slugs',
    description: 'Generate SEO-friendly URL slugs from any text with customizable separators and options.',
    url: `${SITE_URL}/tools/url-slug-generator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free URL Slug Generator',
    description: 'Generate SEO-friendly URL slugs from any text with customizable options.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
