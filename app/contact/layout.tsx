import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us - VoidToolbox | Get in Touch',
  description: 'Contact VoidToolbox for questions, feedback, or support. We\'re here to help with all your finance calculator and SEO tool needs.',
  keywords: [
    'contact voidtoolbox',
    'contact us',
    'support',
    'customer service',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us - VoidToolbox',
    description: 'Get in touch with VoidToolbox for questions, feedback, or support.',
    url: `${SITE_URL}/contact`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
