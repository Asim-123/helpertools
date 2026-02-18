import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Sitemap Generator 2024 - Generate XML Sitemap | VoidToolbox',
  description: 'Free XML sitemap generator to create sitemaps for your website. Generate sitemap.xml files to help search engines crawl and index your pages efficiently.',
  keywords: [
    'sitemap generator',
    'XML sitemap generator',
    'sitemap.xml generator',
    'generate sitemap',
    'create sitemap',
    'free sitemap generator',
    'sitemap maker',
    'SEO sitemap',
    'XML sitemap',
    'sitemap creator',
    'sitemap builder',
    'sitemap generator free',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/sitemap-generator`,
  },
  openGraph: {
    title: 'Free Sitemap Generator - Generate XML Sitemap',
    description: 'Generate XML sitemap for your website to help search engines crawl and index your pages.',
    url: `${SITE_URL}/tools/sitemap-generator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Sitemap Generator',
    description: 'Generate XML sitemap for your website to help search engines.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
