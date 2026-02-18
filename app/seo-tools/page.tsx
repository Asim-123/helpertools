import { Metadata } from 'next';
import { ToolCard } from '@/components/ToolCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SEO_TOOLS, SITE_NAME } from '@/lib/constants';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free SEO Tools - Keyword Density, Meta Tag Analyzer & More',
  description: 'Free online SEO tools including keyword density checker, meta tag analyzer, SERP preview tool, and robots.txt generator. Optimize your website for better search rankings.',
  keywords: [
    'SEO tools',
    'keyword density checker',
    'meta tag analyzer',
    'SERP preview',
    'robots.txt generator',
    'free SEO tools',
    'website optimization',
    'search engine optimization',
  ],
};

export default function SEOToolsPage() {
  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Search className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            SEO Tools
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Optimize your website for search engines with our free SEO tools. 
          Analyze keywords, preview search results, and generate robots.txt files.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SEO_TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* SEO Content */}
      <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Improve Your Search Rankings
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-400">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Keyword Analysis
            </h3>
            <p>
              Analyze keyword density in your content to ensure optimal keyword usage 
              without over-optimization.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Meta Tag Optimization
            </h3>
            <p>
              Check your meta titles and descriptions to ensure they meet search engine 
              best practices and character limits.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              SERP Preview
            </h3>
            <p>
              See exactly how your page will appear in Google search results before 
              publishing your content.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Robots.txt Generator
            </h3>
            <p>
              Create properly formatted robots.txt files to control how search engines 
              crawl your website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
