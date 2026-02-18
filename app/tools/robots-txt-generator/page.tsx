'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { generateRobotsTxt } from '@/utils/seoCalculations';
import { SEO_TOOLS } from '@/lib/constants';
import { FileCode } from 'lucide-react';

export default function RobotsTxtGeneratorPage() {
  const [userAgent, setUserAgent] = useState('*');
  const [disallowPaths, setDisallowPaths] = useState('/admin/\n/private/');
  const [allowPaths, setAllowPaths] = useState('');
  const [sitemap, setSitemap] = useState('https://example.com/sitemap.xml');
  const [crawlDelay, setCrawlDelay] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = () => {
    const disallowArray = disallowPaths.split('\n').filter(p => p.trim().length > 0);
    const allowArray = allowPaths.split('\n').filter(p => p.trim().length > 0);
    
    const userAgents = [{
      agent: userAgent,
      disallow: disallowArray,
      allow: allowArray,
    }];

    const content = generateRobotsTxt(
      userAgents,
      sitemap.trim() || undefined,
      crawlDelay ? parseInt(crawlDelay) : undefined
    );

    setGeneratedContent(content);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    alert('Robots.txt content copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Robots.txt Generator', href: '/tools/robots-txt-generator' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'robots-txt-generator');

  const faqs = [
    {
      question: 'What is robots.txt?',
      answer: 'Robots.txt is a text file that tells search engine crawlers which pages or sections of your site they can or cannot access. It\'s placed in the root directory of your website.',
    },
    {
      question: 'Where should I place robots.txt?',
      answer: 'The robots.txt file must be placed in the root directory of your website (e.g., https://example.com/robots.txt). It won\'t work in subdirectories.',
    },
    {
      question: 'What does User-agent: * mean?',
      answer: 'The asterisk (*) is a wildcard that applies the rules to all web crawlers. You can also specify rules for specific bots like Googlebot or Bingbot.',
    },
    {
      question: 'Should I block pages from being indexed?',
      answer: 'Use robots.txt to prevent crawling of admin areas, duplicate content, or resource-heavy pages. However, for truly private content, use password protection or noindex tags instead.',
    },
    {
      question: 'Can robots.txt guarantee privacy?',
      answer: 'No! Robots.txt is a request, not a security measure. Malicious bots can ignore it. Use proper authentication and security measures for sensitive content.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="robots-txt-generator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <FileCode className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Robots.txt Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Generate a robots.txt file to control search engine crawlers
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              User-agent
            </label>
            <input
              type="text"
              value={userAgent}
              onChange={(e) => setUserAgent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="*"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Use * for all bots, or specify: Googlebot, Bingbot, etc.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Disallow Paths (one per line)
            </label>
            <textarea
              value={disallowPaths}
              onChange={(e) => setDisallowPaths(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-sm"
              placeholder="/admin/&#10;/private/&#10;/tmp/"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Paths that crawlers should not access
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Allow Paths (one per line, optional)
            </label>
            <textarea
              value={allowPaths}
              onChange={(e) => setAllowPaths(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-sm"
              placeholder="/public/&#10;/blog/"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Paths that crawlers can access (overrides disallow)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sitemap URL (optional)
            </label>
            <input
              type="url"
              value={sitemap}
              onChange={(e) => setSitemap(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/sitemap.xml"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Crawl Delay (seconds, optional)
            </label>
            <input
              type="number"
              value={crawlDelay}
              onChange={(e) => setCrawlDelay(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="10"
              min="0"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Delay between requests (not supported by all crawlers)
            </p>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Generate Robots.txt
          </button>
        </div>

        {/* Generated Content */}
        {generatedContent && (
          <div className="animate-slide-in space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Generated Robots.txt
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
                {generatedContent}
              </pre>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                📋 How to Use
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>Copy or download the generated robots.txt file</li>
                <li>Upload it to the root directory of your website</li>
                <li>Access it at: https://yourdomain.com/robots.txt</li>
                <li>Test it using Google Search Console's robots.txt Tester</li>
                <li>Monitor your crawl stats to ensure it's working correctly</li>
              </ol>
            </div>
          </div>
        )}

        {/* Common Examples */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Common Robots.txt Examples
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Allow all bots to crawl everything:
              </h4>
              <code className="block bg-gray-900 dark:bg-black text-green-400 p-3 rounded text-sm">
                User-agent: *<br/>
                Disallow:
              </code>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Block all bots from entire site:
              </h4>
              <code className="block bg-gray-900 dark:bg-black text-green-400 p-3 rounded text-sm">
                User-agent: *<br/>
                Disallow: /
              </code>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Block specific directories:
              </h4>
              <code className="block bg-gray-900 dark:bg-black text-green-400 p-3 rounded text-sm">
                User-agent: *<br/>
                Disallow: /admin/<br/>
                Disallow: /private/<br/>
                Sitemap: https://example.com/sitemap.xml
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Understanding Robots.txt
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The robots.txt file is a simple but powerful tool for managing how search engines crawl 
          your website. It's part of the Robots Exclusion Protocol, a standard used by websites to 
          communicate with web crawlers and other automated agents.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Best Practices
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Test Before Deploy:</strong> Use Google Search Console to test your file</li>
          <li><strong>Include Sitemap:</strong> Help crawlers find all your important pages</li>
          <li><strong>Don't Block CSS/JS:</strong> Google needs these to render pages properly</li>
          <li><strong>Use for Efficiency:</strong> Block low-value pages to save crawl budget</li>
          <li><strong>Monitor Results:</strong> Check crawl stats to ensure proper behavior</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
