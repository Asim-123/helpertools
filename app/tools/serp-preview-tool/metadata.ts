import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free SERP Preview Tool 2024 - Preview Google Search Results | VoidToolbox',
  description: 'Free SERP preview tool to preview how your page will appear in Google search results. See how your title and description look in search engine results pages.',
  keywords: [
    'SERP preview tool',
    'SERP preview',
    'Google search preview',
    'search result preview',
    'SERP snippet preview',
    'Google snippet preview',
    'search engine preview',
    'SERP preview generator',
    'free SERP preview',
    'SERP preview tool online',
    'search result preview tool',
    'SEO preview tool',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/serp-preview-tool`,
  },
  openGraph: {
    title: 'Free SERP Preview Tool - Preview Google Search Results',
    description: 'Preview how your page will appear in Google search results.',
    url: `${SITE_URL}/tools/serp-preview-tool`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SERP Preview Tool',
    description: 'Preview how your page will appear in Google search results.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
