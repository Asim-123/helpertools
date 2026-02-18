'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { checkSSL } from '@/utils/seoCalculations';
import { SSLCheckerResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { Shield } from 'lucide-react';

export default function SSLCheckerPage() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<SSLCheckerResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (domain.trim().length > 0) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const calculatedResult = checkSSL({ domain });
        setResult(calculatedResult);
        setLoading(false);
      }, 1500);
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'SSL Checker', href: '/tools/ssl-checker' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'ssl-checker');

  const faqs = [
    {
      question: 'What is SSL?',
      answer: 'SSL (Secure Sockets Layer) is a security protocol that encrypts data between a web server and browser. SSL certificates enable HTTPS connections.',
    },
    {
      question: 'Why is SSL important for SEO?',
      answer: 'Google uses HTTPS as a ranking signal. SSL certificates are required for secure connections, and Google Chrome marks non-HTTPS sites as &quot;Not Secure&quot;.',
    },
    {
      question: 'How do I get an SSL certificate?',
      answer: 'You can get free SSL certificates from Let\'s Encrypt, or purchase one from certificate authorities. Many hosting providers offer free SSL certificates.',
    },
    {
      question: 'How often do SSL certificates expire?',
      answer: 'Most SSL certificates are valid for 90 days to 1 year. Let\'s Encrypt certificates expire every 90 days but can be auto-renewed.',
    },
    {
      question: 'What happens if my SSL certificate expires?',
      answer: 'When an SSL certificate expires, browsers will show security warnings, and your site may be marked as insecure, which can hurt SEO and user trust.',
    },
  ];

  return (
    <ToolLayout 
      breadcrumbs={breadcrumbs} 
      relatedTools={relatedTools} 
      currentToolId="ssl-checker"
      seoTitle="Free SSL Checker 2024 - Check SSL Certificate Status | VoidToolbox"
      seoDescription="Free SSL checker to verify SSL certificate status, expiration date, and security grade for any domain. Check if your website has a valid SSL certificate."
      seoKeywords={[
        'SSL checker',
        'SSL certificate checker',
        'check SSL certificate',
        'SSL validator',
        'HTTPS checker',
        'SSL status checker',
        'certificate checker',
        'free SSL checker',
        'SSL expiry checker',
      ]}
      faqs={faqs}
      toolName="SSL Checker"
      toolDescription="Check SSL certificate status, expiration date, and security grade for any domain"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              SSL Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Check SSL certificate status for any domain
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Domain Name
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="example.com"
              />
              <button
                onClick={handleCheck}
                disabled={loading || domain.trim().length === 0}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Checking...' : 'Check SSL'}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enter domain name with or without http:// or https://
            </p>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Status */}
            <div className={`${result.isValid ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'} rounded-lg p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">SSL Certificate Status</p>
                  <p className={`text-2xl font-bold ${result.isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {result.isValid ? 'Valid ✓' : 'Invalid ✗'}
                  </p>
                </div>
                {result.grade && (
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Security Grade</p>
                    <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      {result.grade}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Certificate Details */}
            {result.isValid && (
              <div className="grid md:grid-cols-2 gap-4">
                {result.issuer && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Issuer</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.issuer}
                    </p>
                  </div>
                )}
                {result.validFrom && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Valid From</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.validFrom}
                    </p>
                  </div>
                )}
                {result.validTo && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Valid Until</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.validTo}
                    </p>
                  </div>
                )}
                {result.daysRemaining !== undefined && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Days Remaining</p>
                    <p className={`text-2xl font-bold ${result.daysRemaining < 30 ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                      {result.daysRemaining}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Recommendations */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-4">
                💡 Recommendations
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                {result.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          SSL Certificates and SEO
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          SSL certificates are essential for website security and SEO. Google uses HTTPS as a 
          ranking signal, and secure sites build user trust.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Benefits of SSL
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>SEO Boost:</strong> HTTPS is a ranking factor in Google search</li>
          <li><strong>Security:</strong> Encrypts data between server and browser</li>
          <li><strong>Trust:</strong> Shows security padlock in browser address bar</li>
          <li><strong>Compliance:</strong> Required for handling sensitive data</li>
          <li><strong>Performance:</strong> HTTP/2 requires HTTPS for many features</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
