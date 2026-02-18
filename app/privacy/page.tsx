import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy - VoidToolbox | Your Privacy Matters',
  description: 'Read VoidToolbox privacy policy to understand how we collect, use, and protect your personal information. We are committed to protecting your privacy.',
  keywords: [
    'privacy policy',
    'data protection',
    'privacy',
    'user privacy',
  ],
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy - VoidToolbox',
    description: 'Read our privacy policy to understand how we protect your personal information.',
    url: `${SITE_URL}/privacy`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  const lastUpdated = 'January 1, 2024';

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At {SITE_NAME}, we take your privacy seriously. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website 
              and use our tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Information You Provide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
              <li>Use our online tools and calculators</li>
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter (if applicable)</li>
              <li>Provide feedback or report issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages you visit and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Data Storage and Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Important:</strong> All calculations and data entered into our tools are processed 
              locally in your browser. We do not store, save, or transmit any calculation data or personal 
              information entered into our calculators.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We implement appropriate technical and organizational security measures to protect your 
              information. However, no method of transmission over the Internet or electronic storage 
              is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Remember your preferences (such as dark mode)</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              You can control cookies through your browser settings. However, disabling cookies may 
              affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may use third-party services that collect information used to identify you, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Google AdSense:</strong> To display advertisements on our website</li>
              <li><strong>Social Media Platforms:</strong> For social sharing features</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              These third-party services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@voidtoolbox.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                privacy@voidtoolbox.com
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our services are not intended for children under the age of 13. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@voidtoolbox.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                  privacy@voidtoolbox.com
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
