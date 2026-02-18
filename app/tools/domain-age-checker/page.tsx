'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { checkDomainAge } from '@/utils/seoCalculations';
import { DomainAgeResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { Calendar } from 'lucide-react';

export default function DomainAgeCheckerPage() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState<DomainAgeResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (domain.trim().length > 0) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const calculatedResult = checkDomainAge({ domain });
        setResult(calculatedResult);
        setLoading(false);
      }, 1500);
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Domain Age Checker', href: '/tools/domain-age-checker' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'domain-age-checker');

  const faqs = [
    {
      question: 'What is domain age?',
      answer: 'Domain age is the length of time a domain has been registered. It\'s calculated from the domain registration date to the current date.',
    },
    {
      question: 'Does domain age affect SEO?',
      answer: 'Older domains generally have more trust and authority in search engines. However, domain age alone is not a major ranking factor - content quality and backlinks matter more.',
    },
    {
      question: 'How do I check domain age?',
      answer: 'You can check domain age using WHOIS lookup tools or domain age checkers. The registration date is publicly available information.',
    },
    {
      question: 'Is an older domain better for SEO?',
      answer: 'Older domains often have more backlinks, trust signals, and history, which can help with SEO. However, a new domain with great content can still rank well.',
    },
    {
      question: 'Can I check the age of any domain?',
      answer: 'Yes, domain registration information is publicly available through WHOIS databases. You can check the age of any registered domain.',
    },
  ];

  return (
    <ToolLayout 
      breadcrumbs={breadcrumbs} 
      relatedTools={relatedTools} 
      currentToolId="domain-age-checker"
      seoTitle="Free Domain Age Checker 2024 - Check Domain Registration Date | VoidToolbox"
      seoDescription="Free domain age checker to find out when a domain was registered and calculate its age. Check domain registration date and understand your website's history."
      seoKeywords={[
        'domain age checker',
        'check domain age',
        'domain registration date',
        'domain age tool',
        'how old is domain',
        'domain age calculator',
        'domain age finder',
        'free domain age checker',
        'domain history checker',
      ]}
      faqs={faqs}
      toolName="Domain Age Checker"
      toolDescription="Check domain age and registration date to understand your website's history and SEO value"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Domain Age Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Check domain registration date and age
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
                {loading ? 'Checking...' : 'Check Age'}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enter domain name with or without http:// or https://
            </p>
          </div>
        </div>

        {/* Results */}
        {result && result.isValid && (
          <div className="animate-slide-in space-y-6">
            {/* Domain Info */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Domain</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {result.domain}
              </p>
            </div>

            {/* Age Details */}
            <div className="grid md:grid-cols-3 gap-4">
              {result.registrationDate && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Registration Date</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {result.registrationDate}
                  </p>
                </div>
              )}
              {result.ageInDays !== undefined && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Age in Days</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result.ageInDays.toLocaleString()}
                  </p>
                </div>
              )}
              {result.ageInYears !== undefined && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Age in Years</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result.ageInYears}
                  </p>
                </div>
              )}
            </div>

            {/* SEO Insights */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-4">
                📊 SEO Insights
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                {result.ageInYears !== undefined && result.ageInYears >= 5 && (
                  <li>This domain is well-established and likely has good trust signals</li>
                )}
                {result.ageInYears !== undefined && result.ageInYears >= 2 && result.ageInYears < 5 && (
                  <li>This domain has some history and trust, but continue building authority</li>
                )}
                {result.ageInYears !== undefined && result.ageInYears < 2 && (
                  <li>This is a relatively new domain - focus on building quality content and backlinks</li>
                )}
                <li>Domain age is one factor, but content quality and backlinks matter more for SEO</li>
                <li>Older domains often have more backlinks and trust, but new domains can still rank well</li>
              </ul>
            </div>
          </div>
        )}

        {result && !result.isValid && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <p className="text-red-600 dark:text-red-400">
              Unable to check domain age. Please enter a valid domain name.
            </p>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Domain Age and SEO
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Domain age can be a factor in SEO, but it&apos;s not the most important one. Older domains 
          often have more trust, backlinks, and history, but quality content and SEO best practices matter more.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Understanding Domain Age
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Trust Signals:</strong> Older domains often have more trust from search engines</li>
          <li><strong>Backlink History:</strong> Established domains typically have more backlinks</li>
          <li><strong>Content Quality:</strong> Focus on creating valuable content regardless of domain age</li>
          <li><strong>Consistency:</strong> Regular updates and quality content matter more than age</li>
          <li><strong>New Domains:</strong> Can still rank well with proper SEO and quality content</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
