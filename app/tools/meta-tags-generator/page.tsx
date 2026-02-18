'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { generateMetaTags } from '@/utils/seoCalculations';
import { MetaTagsResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { Code } from 'lucide-react';

export default function MetaTagsGeneratorPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [robots, setRobots] = useState('index, follow');
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [ogUrl, setOgUrl] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [result, setResult] = useState<MetaTagsResult | null>(null);

  const handleGenerate = () => {
    if (title.trim().length > 0 && description.trim().length > 0) {
      const calculatedResult = generateMetaTags({
        title,
        description,
        keywords: keywords || undefined,
        author: author || undefined,
        robots,
        ogTitle: ogTitle || undefined,
        ogDescription: ogDescription || undefined,
        ogImage: ogImage || undefined,
        ogUrl: ogUrl || undefined,
        canonicalUrl: canonicalUrl || undefined,
      });
      setResult(calculatedResult);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.html);
      alert('Meta tags HTML copied to clipboard!');
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Meta Tags Generator', href: '/tools/meta-tags-generator' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'meta-tags-generator');

  const faqs = [
    {
      question: 'What are meta tags?',
      answer: 'Meta tags are HTML elements that provide information about your webpage to search engines and social media platforms. They include title, description, OpenGraph tags, and more.',
    },
    {
      question: 'What is OpenGraph?',
      answer: 'OpenGraph is a protocol that allows you to control how your content appears when shared on social media platforms like Facebook, LinkedIn, and Twitter.',
    },
    {
      question: 'Do I need all meta tags?',
      answer: 'The most important are title and description. OpenGraph and Twitter Card tags improve social sharing appearance. Canonical URLs prevent duplicate content issues.',
    },
    {
      question: 'Where do I put meta tags?',
      answer: 'Meta tags go in the <head> section of your HTML document, typically between the <head> and </head> tags.',
    },
    {
      question: 'What is a canonical URL?',
      answer: 'A canonical URL tells search engines which version of a page is the preferred version, helping prevent duplicate content issues when you have multiple URLs for the same content.',
    },
  ];

  return (
    <ToolLayout 
      breadcrumbs={breadcrumbs} 
      relatedTools={relatedTools} 
      currentToolId="meta-tags-generator"
      seoTitle="Free Meta Tags Generator 2024 - Generate HTML Meta Tags | VoidToolbox"
      seoDescription="Free meta tags generator to create complete HTML meta tags including OpenGraph and Twitter Card tags. Generate SEO-optimized meta tags for your website."
      seoKeywords={[
        'meta tags generator',
        'generate meta tags',
        'HTML meta tags generator',
        'OpenGraph generator',
        'meta tags HTML',
        'free meta tags generator',
        'SEO meta tags generator',
        'social media meta tags',
      ]}
      faqs={faqs}
      toolName="Meta Tags Generator"
      toolDescription="Generate complete meta tags HTML code including OpenGraph and Twitter Card tags"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Meta Tags Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Generate complete HTML meta tags for your website
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Page Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Your Page Title"
                maxLength={70}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Meta Description *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Your meta description"
                maxLength={160}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Keywords (optional)
              </label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Author (optional)
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Author Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Robots Meta
            </label>
            <select
              value={robots}
              onChange={(e) => setRobots(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="index, follow">Index, Follow</option>
              <option value="index, nofollow">Index, NoFollow</option>
              <option value="noindex, follow">NoIndex, Follow</option>
              <option value="noindex, nofollow">NoIndex, NoFollow</option>
            </select>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">OpenGraph Tags (Social Media)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  OG Title (optional)
                </label>
                <input
                  type="text"
                  value={ogTitle}
                  onChange={(e) => setOgTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="OpenGraph title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  OG Image URL (optional)
                </label>
                <input
                  type="url"
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  OG Description (optional)
                </label>
                <textarea
                  value={ogDescription}
                  onChange={(e) => setOgDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="OpenGraph description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  OG URL (optional)
                </label>
                <input
                  type="url"
                  value={ogUrl}
                  onChange={(e) => setOgUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="https://example.com/page"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Canonical URL (optional)
            </label>
            <input
              type="url"
              value={canonicalUrl}
              onChange={(e) => setCanonicalUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/page"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={title.trim().length === 0 || description.trim().length === 0}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Generate Meta Tags
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Generated HTML */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Generated Meta Tags HTML
                </h3>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  Copy HTML
                </button>
              </div>

              <div className="bg-gray-900 dark:bg-black rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm whitespace-pre">
                  {result.html}
                </pre>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">HTML Preview</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <code className="text-sm font-mono text-gray-900 dark:text-white whitespace-pre">
                  {`<head>\n${result.html}\n</head>`}
                </code>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Complete Meta Tags Guide
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Meta tags are crucial for SEO and social media sharing. This generator creates all the 
          essential meta tags including OpenGraph for Facebook/LinkedIn and Twitter Card tags.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Essential Meta Tags
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Title Tag:</strong> Appears in search results and browser tabs (50-60 characters)</li>
          <li><strong>Meta Description:</strong> Appears in search results (150-160 characters)</li>
          <li><strong>OpenGraph Tags:</strong> Control how content appears on social media</li>
          <li><strong>Canonical URL:</strong> Prevents duplicate content issues</li>
          <li><strong>Robots Meta:</strong> Controls search engine crawling and indexing</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
