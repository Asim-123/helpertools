'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { analyzePageSpeed } from '@/utils/seoCalculations';
import { PageSpeedResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { Gauge } from 'lucide-react';

export default function PageSpeedCheckerPage() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<PageSpeedResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (url.trim().length > 0) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const calculatedResult = analyzePageSpeed({ url });
        setResult(calculatedResult);
        setLoading(false);
      }, 1500);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/20';
    if (score >= 70) return 'bg-yellow-100 dark:bg-yellow-900/20';
    return 'bg-red-100 dark:bg-red-900/20';
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Page Speed Checker', href: '/tools/page-speed-checker' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'page-speed-checker');

  const faqs = [
    {
      question: 'What is page speed?',
      answer: 'Page speed refers to how quickly your website loads and becomes interactive. It\'s measured by metrics like First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Time to First Byte (TTFB).',
    },
    {
      question: 'Why is page speed important for SEO?',
      answer: 'Page speed is a ranking factor in Google search results. Faster pages provide better user experience, reduce bounce rates, and can improve your search rankings.',
    },
    {
      question: 'What are Core Web Vitals?',
      answer: 'Core Web Vitals are three metrics that Google uses to measure user experience: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).',
    },
    {
      question: 'How can I improve my page speed?',
      answer: 'Optimize images, use a CDN, enable browser caching, minify CSS/JS, reduce server response time, and use lazy loading for images and videos.',
    },
    {
      question: 'What is a good page speed score?',
      answer: 'A score of 90-100 is considered excellent, 70-89 is good, and below 70 needs improvement. Aim for scores above 90 for optimal performance.',
    },
  ];

  return (
    <ToolLayout 
      breadcrumbs={breadcrumbs} 
      relatedTools={relatedTools} 
      currentToolId="page-speed-checker"
      seoTitle="Free Page Speed Checker 2024 - Test Website Speed & Performance | VoidToolbox"
      seoDescription="Free page speed checker to test your website performance. Analyze Core Web Vitals, get speed scores, and receive recommendations to improve your site speed."
      seoKeywords={[
        'page speed checker',
        'website speed test',
        'page speed test',
        'website performance test',
        'speed checker',
        'page speed analyzer',
        'website speed checker',
        'free page speed test',
        'Core Web Vitals checker',
      ]}
      faqs={faqs}
      toolName="Page Speed Checker"
      toolDescription="Check your website page speed and get recommendations to improve Core Web Vitals and performance"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Gauge className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Page Speed Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Test your website speed and performance
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website URL
            </label>
            <div className="flex space-x-2">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="https://example.com"
              />
              <button
                onClick={handleCheck}
                disabled={loading || url.trim().length === 0}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Checking...' : 'Check Speed'}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enter the full URL including http:// or https://
            </p>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Score */}
            <div className={`${getScoreBgColor(result.score)} rounded-lg p-6 text-center`}>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Page Speed Score</p>
              <p className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {result.score >= 90 ? 'Excellent' : result.score >= 70 ? 'Good' : 'Needs Improvement'}
              </p>
            </div>

            {/* Core Web Vitals */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Core Web Vitals
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {result.metrics.fcp && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">First Contentful Paint</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {result.metrics.fcp}ms
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.metrics.fcp < 1800 ? '✓ Good' : '⚠ Needs improvement'}
                    </p>
                  </div>
                )}
                {result.metrics.lcp && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Largest Contentful Paint</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {result.metrics.lcp}ms
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.metrics.lcp < 2500 ? '✓ Good' : '⚠ Needs improvement'}
                    </p>
                  </div>
                )}
                {result.metrics.cls !== undefined && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cumulative Layout Shift</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {result.metrics.cls.toFixed(3)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.metrics.cls < 0.1 ? '✓ Good' : '⚠ Needs improvement'}
                    </p>
                  </div>
                )}
                {result.metrics.ttfb && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time to First Byte</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {result.metrics.ttfb}ms
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.metrics.ttfb < 400 ? '✓ Good' : '⚠ Needs improvement'}
                    </p>
                  </div>
                )}
              </div>
            </div>

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
          Why Page Speed Matters
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Page speed is a critical ranking factor and user experience metric. Faster websites 
          rank higher, have lower bounce rates, and convert better.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Speed Optimization Tips
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Optimize Images:</strong> Compress images and use modern formats like WebP</li>
          <li><strong>Use a CDN:</strong> Content Delivery Networks serve content from locations closer to users</li>
          <li><strong>Enable Caching:</strong> Browser and server caching reduce load times</li>
          <li><strong>Minify Code:</strong> Remove whitespace and comments from CSS and JavaScript</li>
          <li><strong>Lazy Loading:</strong> Load images and videos only when needed</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
