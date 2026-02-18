'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { generateSitemap, isValidUrl } from '@/utils/seoCalculations';
import { SitemapResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { FileCode } from 'lucide-react';

export default function SitemapGeneratorPage() {
  const [urls, setUrls] = useState('https://example.com\nhttps://example.com/about\nhttps://example.com/contact');
  const [changefreq, setChangefreq] = useState<'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'>('weekly');
  const [priority, setPriority] = useState('0.8');
  const [result, setResult] = useState<SitemapResult | null>(null);

  const handleGenerate = () => {
    const urlArray = urls.split('\n').filter(url => url.trim().length > 0);
    const calculatedResult = generateSitemap({
      urls: urlArray,
      changefreq,
      priority: parseFloat(priority) || 0.8,
    });
    setResult(calculatedResult);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.xml);
      alert('Sitemap XML copied to clipboard!');
    }
  };

  const handleDownload = () => {
    if (result) {
      const blob = new Blob([result.xml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sitemap.xml';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Sitemap Generator', href: '/tools/sitemap-generator' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'sitemap-generator');

  const faqs = [
    {
      question: 'What is an XML sitemap?',
      answer: 'An XML sitemap is a file that lists all the important pages of your website. It helps search engines discover, crawl, and index your pages more efficiently.',
    },
    {
      question: 'Where should I place my sitemap?',
      answer: 'Upload your sitemap.xml file to the root directory of your website (e.g., https://yourdomain.com/sitemap.xml). Then submit it to Google Search Console.',
    },
    {
      question: 'How often should I update my sitemap?',
      answer: 'Update your sitemap whenever you add, remove, or significantly modify pages. Most sites update weekly or monthly, depending on how frequently content changes.',
    },
    {
      question: 'What is the priority value?',
      answer: 'Priority is a value between 0.0 and 1.0 indicating the relative importance of a URL. Higher priority pages are crawled more frequently, but this is just a hint to search engines.',
    },
    {
      question: 'Do I need a sitemap?',
      answer: 'While not required, sitemaps are highly recommended, especially for large sites, new sites, or sites with complex navigation. They help ensure all pages are discovered.',
    },
  ];

  return (
    <ToolLayout 
      breadcrumbs={breadcrumbs} 
      relatedTools={relatedTools} 
      currentToolId="sitemap-generator"
      seoTitle="Free Sitemap Generator 2024 - Generate XML Sitemap | VoidToolbox"
      seoDescription="Free XML sitemap generator to create sitemaps for your website. Generate sitemap.xml files to help search engines crawl and index your pages efficiently."
      seoKeywords={[
        'sitemap generator',
        'XML sitemap generator',
        'sitemap.xml generator',
        'generate sitemap',
        'create sitemap',
        'free sitemap generator',
        'sitemap maker',
        'SEO sitemap',
      ]}
      faqs={faqs}
      toolName="Sitemap Generator"
      toolDescription="Generate XML sitemap for your website to help search engines crawl and index your pages"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <FileCode className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sitemap Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Generate XML sitemap for your website
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URLs (one per line)
            </label>
            <textarea
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
              rows={10}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-sm"
              placeholder="https://example.com&#10;https://example.com/about&#10;https://example.com/contact"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enter one URL per line. All URLs must include http:// or https://
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Change Frequency
              </label>
              <select
                value={changefreq}
                onChange={(e) => setChangefreq(e.target.value as any)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="always">Always</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="never">Never</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority (0.0 - 1.0)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="0.8"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Generate Sitemap
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">URLs in Sitemap</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {result.urlCount}
              </p>
            </div>

            {/* Generated XML */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Generated Sitemap XML
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Copy
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-black rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 font-mono text-sm whitespace-pre">
                  {result.xml}
                </pre>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                📋 How to Use Your Sitemap
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>Download or copy the generated sitemap.xml</li>
                <li>Upload it to the root directory of your website</li>
                <li>Access it at: https://yourdomain.com/sitemap.xml</li>
                <li>Submit it to Google Search Console</li>
                <li>Add it to your robots.txt file: Sitemap: https://yourdomain.com/sitemap.xml</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Understanding XML Sitemaps
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          XML sitemaps are essential for SEO. They help search engines discover all your important pages, 
          understand your site structure, and crawl your content more efficiently.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Best Practices
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Include Important Pages:</strong> Only include pages you want indexed</li>
          <li><strong>Keep It Updated:</strong> Update your sitemap when you add or remove pages</li>
          <li><strong>Submit to Search Engines:</strong> Submit to Google Search Console and Bing Webmaster Tools</li>
          <li><strong>Use Multiple Sitemaps:</strong> For large sites (50,000+ URLs), create multiple sitemaps</li>
          <li><strong>Validate Your Sitemap:</strong> Use Google Search Console to check for errors</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
