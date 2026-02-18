import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Credit Card Payoff Calculator 2024 - Calculate Debt Payoff Time | VoidToolbox',
  description: 'Free credit card payoff calculator to calculate how long it will take to pay off your credit card debt and see total interest paid. Plan your debt payoff strategy.',
  keywords: [
    'credit card payoff calculator',
    'credit card debt calculator',
    'debt payoff calculator',
    'credit card interest calculator',
    'pay off credit card calculator',
    'credit card payment calculator',
    'debt calculator',
    'credit card payoff plan',
    'calculate credit card payoff',
    'free credit card calculator',
    'credit card debt payoff',
    'credit card calculator USA',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/credit-card-payoff-calculator`,
  },
  openGraph: {
    title: 'Free Credit Card Payoff Calculator - Calculate Debt Payoff Time',
    description: 'Calculate how long it will take to pay off your credit card debt and see total interest paid.',
    url: `${SITE_URL}/tools/credit-card-payoff-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Credit Card Payoff Calculator',
    description: 'Calculate how long it will take to pay off your credit card debt.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
