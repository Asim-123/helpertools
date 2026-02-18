'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { generateUrlSlug } from '@/utils/seoCalculations';
import { UrlSlugResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { Link } from 'lucide-react';

export default function UrlSlugGeneratorPage() {
  const [text, setText] = useState('');
  const [separator, setSeparator] = useState('-');
  const [lowercase, setLowercase] = useState(true);
  const [maxLength, setMaxLength] = useState('100');
  const [result, setResult] = useState<UrlSlugResult | null>(null);

  const handleGenerate = () => {
    if (text.trim().length > 0) {
      const calculatedResult = generateUrlSlug({
        text,
        separator,
        lowercase,
        maxLength: parseInt(maxLength) || undefined,
      });
      setResult(calculatedResult);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.slug);
      alert('Slug copied to clipboard!');
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'URL Slug Generator', href: '/tools/url-slug-generator' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'url-slug-generator');

  const faqs = [
    {
      question: 'What is a URL slug?',
      answer: 'A URL slug is the part of a URL that identifies a specific page. For example, in "example.com/blog/my-article", "my-article" is the slug. It should be descriptive, readable, and SEO-friendly.',
    },
    {
      question: 'What makes a good URL slug?',
      answer: 'Good slugs are short (3-5 words), descriptive, use hyphens as separators, are lowercase, include keywords, and avoid special characters. They should clearly indicate what the page is about.',
    },
    {
      question: 'How long should a URL slug be?',
      answer: 'Keep slugs between 3-5 words (about 30-60 characters). Shorter is generally better, but it should still be descriptive. Avoid extremely long slugs as they can hurt readability and SEO.',
    },
    {
      question: 'Should I use hyphens or underscores?',
      answer: 'Use hyphens (-). Search engines treat hyphens as word separators, while underscores are often treated as part of the word. Hyphens are also more readable in URLs.',
    },
    {
      question: 'Can I change a URL slug after publishing?',
      answer: 'You can, but you should set up a 301 redirect from the old URL to the new one to preserve SEO value and avoid broken links. Changing URLs can temporarily affect rankings.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="url-slug-generator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Link className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              URL Slug Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Generate SEO-friendly URL slugs from any text
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Text to Convert
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your page title or text..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Separator
              </label>
              <select
                value={separator}
                onChange={(e) => setSeparator(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="-">Hyphen (-)</option>
                <option value="_">Underscore (_)</option>
                <option value=" ">Space (encoded)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Max Length (optional)
              </label>
              <input
                type="number"
                value={maxLength}
                onChange={(e) => setMaxLength(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="100"
                min="10"
                max="200"
              />
            </div>

            <div className="flex items-end">
              <div className="flex items-center w-full">
                <input
                  type="checkbox"
                  id="lowercase"
                  checked={lowercase}
                  onChange={(e) => setLowercase(e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="lowercase" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Convert to lowercase
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={text.trim().length === 0}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Generate Slug
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Generated Slug */}
            <div className={`border rounded-lg p-6 ${result.isValid ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Generated Slug
                </h3>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  Copy
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <code className="text-lg font-mono text-gray-900 dark:text-white break-all">
                  {result.slug}
                </code>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                {result.isValid ? (
                  <span className="text-green-600 dark:text-green-400 font-medium">✓ Valid slug</span>
                ) : (
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">⚠ May need adjustment</span>
                )}
              </div>
            </div>

            {/* Slug Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Character Count</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.characterCount}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Word Count</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.wordCount}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Status</p>
                <p className={`text-lg font-bold ${result.isValid ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                  {result.isValid ? 'Valid' : 'Review'}
                </p>
              </div>
            </div>

            {/* Suggestions */}
            {result.suggestions && result.suggestions.length > 0 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  💡 Alternative Suggestions
                </h3>
                <div className="space-y-2">
                  {result.suggestions.map((suggestion, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-200 dark:border-blue-700">
                      <code className="text-sm font-mono text-gray-900 dark:text-white">
                        {suggestion}
                      </code>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(suggestion);
                          alert('Slug copied!');
                        }}
                        className="ml-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* URL Preview */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">URL Preview</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xs">
                    🌐
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">example.com/</span>
                </div>
                <code className="text-lg font-mono text-primary-600 dark:text-primary-400">
                  {result.slug}
                </code>
              </div>
            </div>

            {/* SEO Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                💡 SEO Best Practices
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Keep slugs short and descriptive (3-5 words)</li>
                <li>• Include your target keyword in the slug</li>
                <li>• Use hyphens (-) as word separators</li>
                <li>• Keep slugs lowercase for consistency</li>
                <li>• Avoid special characters and numbers when possible</li>
                <li>• Make slugs readable and meaningful</li>
                <li>• Don&apos;t change slugs after publishing (use redirects if needed)</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Creating SEO-Friendly URL Slugs
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          URL slugs are an important SEO factor. Well-crafted slugs help search engines understand 
          your content and can improve click-through rates from search results. They should be 
          descriptive, readable, and include relevant keywords.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Slug Best Practices
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Be Descriptive:</strong> The slug should clearly indicate what the page is about</li>
          <li><strong>Include Keywords:</strong> Use your target keyword naturally in the slug</li>
          <li><strong>Keep It Short:</strong> Aim for 3-5 words (30-60 characters)</li>
          <li><strong>Use Hyphens:</strong> Separate words with hyphens, not underscores</li>
          <li><strong>Stay Consistent:</strong> Use lowercase throughout your site</li>
          <li><strong>Avoid Stop Words:</strong> Remove unnecessary words like &quot;the&quot;, &quot;a&quot;, &quot;an&quot;</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
