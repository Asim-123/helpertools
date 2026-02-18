'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { SEO_TOOLS } from '@/lib/constants';
import { Eye } from 'lucide-react';

export default function SerpPreviewToolPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('https://example.com/page');

  const truncateTitle = (text: string) => {
    return text.length > 60 ? text.substring(0, 60) + '...' : text;
  };

  const truncateDescription = (text: string) => {
    return text.length > 160 ? text.substring(0, 160) + '...' : text;
  };

  const extractDomain = (urlString: string) => {
    try {
      const urlObj = new URL(urlString);
      return urlObj.hostname;
    } catch {
      return 'example.com';
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'SERP Preview Tool', href: '/tools/serp-preview-tool' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'serp-preview-tool');

  const faqs = [
    {
      question: 'What is SERP?',
      answer: 'SERP stands for Search Engine Results Page. It\'s the page displayed by search engines in response to a user\'s query, showing a list of relevant results.',
    },
    {
      question: 'Why is SERP preview important?',
      answer: 'SERP preview helps you see how your page will appear in search results before publishing. This allows you to optimize your title and description for maximum click-through rate.',
    },
    {
      question: 'What affects SERP appearance?',
      answer: 'Your title tag, meta description, URL structure, and sometimes rich snippets like ratings, dates, or breadcrumbs affect how your page appears in search results.',
    },
    {
      question: 'Can I control exactly how my page appears?',
      answer: 'You can control the title tag and meta description, but Google may sometimes rewrite them if it thinks different text would better match the user\'s query.',
    },
    {
      question: 'What makes a good SERP snippet?',
      answer: 'A compelling title with keywords, a clear description that includes a call-to-action, and a clean URL structure all contribute to an effective SERP snippet.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="serp-preview-tool">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              SERP Preview Tool
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Preview how your page will appear in Google search results
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Page URL
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
              Page Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your page title..."
              maxLength={70}
            />
            <div className="flex justify-between mt-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {title.length} / 60 characters
              </p>
              {title.length > 60 && (
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  ⚠ Title may be truncated
                </p>
              )}
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
              maxLength={170}
            />
            <div className="flex justify-between mt-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description.length} / 160 characters
              </p>
              {description.length > 160 && (
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  ⚠ Description may be truncated
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Preview */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">🖥️</span> Desktop Preview
            </h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700">
              <div className="max-w-2xl">
                {/* Breadcrumb/URL */}
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs">
                    🌐
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {extractDomain(url)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {url}
                    </span>
                  </div>
                </div>
                {/* Title */}
                <h4 className="text-xl text-blue-600 dark:text-blue-400 hover:underline cursor-pointer mb-2 mt-2">
                  {truncateTitle(title) || 'Your Page Title Will Appear Here'}
                </h4>
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {truncateDescription(description) || 'Your meta description will appear here. Make it compelling to encourage users to click through to your website.'}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Preview */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="mr-2">📱</span> Mobile Preview
            </h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700 max-w-sm">
              {/* URL */}
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs">
                  🌐
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {extractDomain(url)}
                </span>
              </div>
              {/* Title */}
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2 leading-tight">
                {truncateTitle(title) || 'Your Page Title'}
              </h4>
              {/* Description */}
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {truncateDescription(description) || 'Your meta description will appear here...'}
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
            💡 SERP Optimization Tips
          </h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li>• Keep titles under 60 characters to avoid truncation</li>
            <li>• Include your primary keyword in the title</li>
            <li>• Write compelling descriptions that encourage clicks</li>
            <li>• Use action words and include benefits</li>
            <li>• Make your URL structure clean and descriptive</li>
            <li>• Test different variations to improve CTR</li>
          </ul>
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Optimizing for Search Results
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Your appearance in search results is crucial for attracting clicks. Even if you rank well, 
          a poorly written title or description can result in low click-through rates. Use this tool 
          to craft compelling SERP snippets that stand out.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Elements of a Great SERP Snippet
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Compelling Title:</strong> Include keywords and benefits</li>
          <li><strong>Clear Description:</strong> Explain what users will find</li>
          <li><strong>Call-to-Action:</strong> Encourage users to click</li>
          <li><strong>Accurate Information:</strong> Match user intent and page content</li>
          <li><strong>Unique Value:</strong> Differentiate from competitors</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
