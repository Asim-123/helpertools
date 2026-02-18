import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Break Even Calculator 2024 - Calculate Break-Even Point | VoidToolbox',
  description: 'Free break even calculator to calculate break-even point in units and revenue for your business or product. Calculate when your business will break even.',
  keywords: [
    'break even calculator',
    'break even point calculator',
    'break even analysis',
    'break even point',
    'calculate break even',
    'business break even calculator',
    'break even units calculator',
    'break even revenue calculator',
    'break even analysis calculator',
    'free break even calculator',
    'break even formula',
    'break even point formula',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/break-even-calculator`,
  },
  openGraph: {
    title: 'Free Break Even Calculator - Calculate Break-Even Point',
    description: 'Calculate break-even point in units and revenue for your business or product.',
    url: `${SITE_URL}/tools/break-even-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Break Even Calculator',
    description: 'Calculate break-even point in units and revenue for your business.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
