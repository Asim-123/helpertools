import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Free Domain Age Checker 2024 - Check Domain Registration Date | VoidToolbox',
  description: 'Free domain age checker to find out when a domain was registered and calculate its age. Check domain registration date and understand your website\'s history.',
  keywords: [
    'domain age checker',
    'check domain age',
    'domain registration date',
    'domain age tool',
    'how old is domain',
    'domain age calculator',
    'domain age finder',
    'free domain age checker',
    'domain history checker',
    'domain age lookup',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/domain-age-checker`,
  },
  openGraph: {
    title: 'Free Domain Age Checker - Check Domain Registration Date',
    description: 'Check domain age and registration date to understand your website\'s history.',
    url: `${SITE_URL}/tools/domain-age-checker`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Domain Age Checker',
    description: 'Check domain registration date and age.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
