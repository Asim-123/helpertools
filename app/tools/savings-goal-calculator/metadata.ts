import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Savings Goal Calculator 2024 - Calculate Monthly Savings Needed | VoidToolbox',
  description: 'Free savings goal calculator to calculate how much you need to save monthly to reach your savings goal by a target date. Plan your savings strategy.',
  keywords: [
    'savings goal calculator',
    'savings calculator',
    'savings goal planner',
    'how much to save calculator',
    'monthly savings calculator',
    'savings target calculator',
    'savings plan calculator',
    'calculate savings goal',
    'savings goal planner',
    'free savings calculator',
    'savings calculator with interest',
    'savings goal calculator USA',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/savings-goal-calculator`,
  },
  openGraph: {
    title: 'Free Savings Goal Calculator - Calculate Monthly Savings Needed',
    description: 'Calculate how much you need to save monthly to reach your savings goal by a target date.',
    url: `${SITE_URL}/tools/savings-goal-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Savings Goal Calculator',
    description: 'Calculate how much you need to save monthly to reach your savings goal.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
