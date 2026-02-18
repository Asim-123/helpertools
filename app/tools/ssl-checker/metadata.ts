import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free SSL Checker 2024 - Check SSL Certificate Status | VoidToolbox',
  description: 'Free SSL checker to verify SSL certificate status, expiration date, and security grade for any domain. Check if your website has a valid SSL certificate.',
  keywords: [
    'SSL checker',
    'SSL certificate checker',
    'check SSL certificate',
    'SSL validator',
    'HTTPS checker',
    'SSL status checker',
    'certificate checker',
    'free SSL checker',
    'SSL expiry checker',
    'SSL certificate validator',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/ssl-checker`,
  },
  openGraph: {
    title: 'Free SSL Checker - Check SSL Certificate Status',
    description: 'Check SSL certificate status, expiration date, and security grade for any domain.',
    url: `${SITE_URL}/tools/ssl-checker`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SSL Checker',
    description: 'Check SSL certificate status for any domain.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
