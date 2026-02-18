import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Schema Markup Generator 2024 - Generate JSON-LD Structured Data | VoidToolbox',
  description: 'Free schema markup generator to create JSON-LD structured data for your website. Generate schema.org markup to enable rich snippets in search results.',
  keywords: [
    'schema markup generator',
    'structured data generator',
    'JSON-LD generator',
    'schema.org generator',
    'rich snippets generator',
    'schema generator',
    'free schema markup',
    'SEO schema generator',
    'structured data markup',
    'schema.org markup',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/schema-markup-generator`,
  },
  openGraph: {
    title: 'Free Schema Markup Generator - Generate JSON-LD Structured Data',
    description: 'Generate JSON-LD structured data for your website to enable rich snippets.',
    url: `${SITE_URL}/tools/schema-markup-generator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Schema Markup Generator',
    description: 'Generate JSON-LD structured data for your website.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
