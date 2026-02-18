import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service - VoidToolbox | Terms and Conditions',
  description: 'Read VoidToolbox terms of service to understand the terms and conditions for using our free online tools and services.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'user agreement',
    'terms',
  ],
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms of Service - VoidToolbox',
    description: 'Read our terms of service to understand the terms and conditions for using our services.',
    url: `${SITE_URL}/terms`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Terms of Service', href: '/terms' },
  ];

  const lastUpdated = 'January 1, 2024';

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Terms of Service
        </h1>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Please read these Terms of Service ("Terms") carefully before using {SITE_URL} 
              (the "Service") operated by {SITE_NAME} ("us", "we", or "our").
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Your access to and use of the Service is conditioned on your acceptance of and 
              compliance with these Terms. These Terms apply to all visitors, users, and others 
              who access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              By accessing or using our Service, you agree to be bound by these Terms. If you 
              disagree with any part of these terms, then you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Use of Service
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Permitted Use
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You may use our Service for lawful purposes only. You agree to use the Service in 
              accordance with these Terms and all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Prohibited Use
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Use any automated system, including robots, spiders, or scrapers, to access the Service</li>
              <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Service without our express written permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED.</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Our calculators and tools are provided for informational purposes only and should not 
              be considered as professional financial, legal, or tax advice. Always consult with a 
              qualified professional for advice specific to your situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE_NAME} SHALL NOT BE LIABLE FOR ANY 
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
              PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, 
              USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Your use or inability to use the Service</li>
              <li>Any errors or omissions in the Service</li>
              <li>Any decisions made based on information provided by the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The Service and its original content, features, and functionality are owned by 
              {SITE_NAME} and are protected by international copyright, trademark, patent, trade 
              secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              You may not modify, reproduce, distribute, create derivative works, publicly display, 
              or publicly perform any content from the Service without our prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. User Content
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Service processes calculations locally in your browser. We do not store, save, 
              or transmit any data you enter into our calculators.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              If you submit any content to us (such as feedback, comments, or suggestions), you 
              grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, 
              and distribute such content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our Service may contain links to third-party websites or services that are not owned 
              or controlled by {SITE_NAME}. We have no control over, and assume no responsibility 
              for, the content, privacy policies, or practices of any third-party websites or services. 
              You acknowledge and agree that {SITE_NAME} shall not be responsible or liable for any 
              damage or loss caused by or in connection with the use of any such content or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may terminate or suspend your access to the Service immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation if you 
              breach the Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any 
              time. If a revision is material, we will try to provide at least 30 days notice prior 
              to any new terms taking effect. What constitutes a material change will be determined 
              at our sole discretion.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              By continuing to access or use our Service after those revisions become effective, 
              you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              These Terms shall be interpreted and governed by the laws of the United States, without 
              regard to its conflict of law provisions. Our failure to enforce any right or provision 
              of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              11. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@voidtoolbox.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                  legal@voidtoolbox.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <strong>Website:</strong>{' '}
                <a href={SITE_URL} className="text-primary-600 dark:text-primary-400 hover:underline">
                  {SITE_URL}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
