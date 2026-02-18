import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Robots.txt Generator 2024 - Generate Robots.txt File | VoidToolbox',
  description: 'Free robots.txt generator to generate a robots.txt file to control search engine crawler access to your website. Create robots.txt file instantly.',
  keywords: [
    'robots.txt generator',
    'robots.txt creator',
    'robots.txt maker',
    'generate robots.txt',
    'robots.txt tool',
    'create robots.txt',
    'robots.txt generator free',
    'robots.txt builder',
    'robots.txt online',
    'robots.txt generator tool',
    'SEO robots.txt',
    'robots.txt file generator',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/robots-txt-generator`,
  },
  openGraph: {
    title: 'Free Robots.txt Generator - Generate Robots.txt File',
    description: 'Generate a robots.txt file to control search engine crawler access to your website.',
    url: `${SITE_URL}/tools/robots-txt-generator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Robots.txt Generator',
    description: 'Generate a robots.txt file to control search engine crawler access.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
