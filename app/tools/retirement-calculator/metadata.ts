import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Retirement Calculator 2024 - Plan Your Retirement Savings | VoidToolbox',
  description: 'Free retirement calculator to plan your retirement savings and see if you\'re on track to meet your retirement goals. Calculate retirement savings with inflation adjustment.',
  keywords: [
    'retirement calculator',
    'retirement planning calculator',
    'retirement savings calculator',
    '401k calculator',
    'retirement planning',
    'retirement savings',
    'retirement calculator with inflation',
    'how much to save for retirement',
    'retirement goal calculator',
    'free retirement calculator',
    'retirement calculator USA',
    'calculate retirement savings',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/retirement-calculator`,
  },
  openGraph: {
    title: 'Free Retirement Calculator - Plan Your Retirement Savings',
    description: 'Plan your retirement savings and see if you\'re on track to meet your retirement goals.',
    url: `${SITE_URL}/tools/retirement-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Retirement Calculator - Plan Retirement Savings',
    description: 'Plan your retirement savings and see if you\'re on track to meet your goals.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
