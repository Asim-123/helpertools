import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Mortgage Calculator 2024 - Calculate Monthly Payments & Amortization | VoidToolbox',
  description: 'Free mortgage calculator to calculate monthly mortgage payments, total interest, and view detailed amortization schedule. Calculate your home loan payment with our easy-to-use mortgage calculator tool.',
  keywords: [
    'mortgage calculator',
    'mortgage payment calculator',
    'home loan calculator',
    'mortgage amortization calculator',
    'monthly mortgage payment',
    'mortgage interest calculator',
    'free mortgage calculator',
    'mortgage calculator with taxes',
    '30 year mortgage calculator',
    '15 year mortgage calculator',
    'mortgage calculator USA',
    'calculate mortgage payment',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/mortgage-calculator`,
  },
  openGraph: {
    title: 'Free Mortgage Calculator - Calculate Monthly Payments & Amortization',
    description: 'Calculate your monthly mortgage payment, total interest, and view detailed amortization schedule with our free mortgage calculator.',
    url: `${SITE_URL}/tools/mortgage-calculator`,
    siteName: 'VoidToolbox',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-mortgage-calculator.jpg`,
        width: 1200,
        height: 630,
        alt: 'Mortgage Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Mortgage Calculator - Calculate Monthly Payments',
    description: 'Calculate your monthly mortgage payment, total interest, and view detailed amortization schedule.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
