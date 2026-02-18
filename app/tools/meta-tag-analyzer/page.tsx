'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { analyzeMetaTags } from '@/utils/seoCalculations';
import { MetaTagResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { FileText } from 'lucide-react';

export default function MetaTagAnalyzerPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<MetaTagResult | null>(null);

  const handleAnalyze = () => {
    if (title.trim().length > 0 || description.trim().length > 0) {
      const calculatedResult = analyzeMetaTags({ title, description, url });
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Meta Tag Analyzer', href: '/tools/meta-tag-analyzer' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'meta-tag-analyzer');

  const faqs = [
    {
      question: 'What are meta tags?',
      answer: 'Meta tags are HTML elements that provide information about your webpage to search engines and visitors. The most important are the title tag and meta description.',
    },
    {
      question: 'What is the ideal meta title length?',
      answer: 'Google typically displays 50-60 characters of a title tag. Keep your titles under 60 characters to ensure they display fully in search results.',
    },
    {
      question: 'What is the ideal meta description length?',
      answer: 'Meta descriptions should be 150-160 characters. Google may truncate longer descriptions, so keep your most important information at the beginning.',
    },
    {
      question: 'Do meta tags affect SEO rankings?',
      answer: 'Meta descriptions don\'t directly affect rankings, but they influence click-through rates. Title tags are a ranking factor and should include your target keywords.',
    },
    {
      question: 'Should every page have unique meta tags?',
      answer: 'Yes! Each page should have unique, descriptive meta tags that accurately reflect the page content. Duplicate meta tags can confuse search engines.',
    },
  ];

  const getStatusColor = (isOptimal: boolean) => {
    return isOptimal 
      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
      : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200';
  };

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="meta-tag-analyzer">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meta Tag Analyzer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Optimize your meta title and description for search engines
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Page URL (optional)
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/page"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Meta Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your page title..."
            />
            <div className="flex justify-between mt-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {title.length} characters
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Recommended: 50-60 characters
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Meta Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your meta description..."
            />
            <div className="flex justify-between mt-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description.length} characters
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Recommended: 150-160 characters
              </p>
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={title.trim().length === 0 && description.trim().length === 0}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Analyze Meta Tags
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Title Analysis */}
            <div className={`border rounded-lg p-6 ${getStatusColor(result.title.isOptimal)}`}>
              <h3 className="font-semibold text-lg mb-2">Title Tag Analysis</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Length:</span>
                  <span>{result.title.length} characters</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Status:</span>
                  <span className="font-semibold">
                    {result.title.isOptimal ? '✓ Optimal' : '⚠ Needs Improvement'}
                  </span>
                </div>
                <p className="mt-3 text-sm">{result.title.message}</p>
              </div>
            </div>

            {/* Description Analysis */}
            <div className={`border rounded-lg p-6 ${getStatusColor(result.description.isOptimal)}`}>
              <h3 className="font-semibold text-lg mb-2">Meta Description Analysis</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Length:</span>
                  <span>{result.description.length} characters</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Status:</span>
                  <span className="font-semibold">
                    {result.description.isOptimal ? '✓ Optimal' : '⚠ Needs Improvement'}
                  </span>
                </div>
                <p className="mt-3 text-sm">{result.description.message}</p>
              </div>
            </div>

            {/* SERP Preview */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Google Search Preview
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                {/* URL */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs">
                    🌐
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {result.preview.url}
                  </span>
                </div>
                {/* Title */}
                <h4 className="text-xl text-blue-600 dark:text-blue-400 hover:underline cursor-pointer mb-2">
                  {result.preview.title}
                </h4>
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {result.preview.description}
                </p>
              </div>
            </div>

            {/* Optimization Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                💡 Optimization Tips
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Include your target keyword near the beginning of the title</li>
                <li>• Make your title compelling to encourage clicks</li>
                <li>• Write unique descriptions for each page</li>
                <li>• Include a call-to-action in your description</li>
                <li>• Accurately describe the page content</li>
                <li>• Use active voice and be specific</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Writing Effective Meta Tags
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Meta tags are your first impression in search results. A well-crafted title and description 
          can significantly improve your click-through rate, bringing more visitors to your site.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Best Practices
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Be Specific:</strong> Clearly describe what the page is about</li>
          <li><strong>Include Keywords:</strong> Use relevant keywords naturally</li>
          <li><strong>Be Unique:</strong> Every page should have unique meta tags</li>
          <li><strong>Match Content:</strong> Ensure tags accurately reflect page content</li>
          <li><strong>Use Action Words:</strong> Encourage users to click through</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
