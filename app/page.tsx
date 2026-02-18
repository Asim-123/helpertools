import Link from 'next/link';
import { ToolCard } from '@/components/ToolCard';
import { AdComponent } from '@/components/AdComponent';
import { FEATURED_TOOLS, FINANCE_TOOLS, SEO_TOOLS, AD_SLOTS } from '@/lib/constants';
import { Calculator, Search, TrendingUp, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Free Online Tools for{' '}
              <span className="text-primary-600 dark:text-primary-400">Finance</span> &{' '}
              <span className="text-primary-600 dark:text-primary-400">SEO</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Calculate mortgages, plan retirement, analyze keywords, and optimize your website.
              All tools are free, fast, and easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/finance-tools"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Finance Tools
              </Link>
              <Link
                href="/seo-tools"
                className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
              >
                <Search className="h-5 w-5 mr-2" />
                SEO Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Fast & Accurate
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get instant results with our optimized calculation engines
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                100% Free
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All tools are completely free with no hidden charges
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                SEO Optimized
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tools designed to help you rank better in search engines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our most popular calculators and tools used by thousands daily
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURED_TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <AdComponent slot={AD_SLOTS.inContent} />

      {/* Finance Tools Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Finance Calculators
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Plan your finances with our comprehensive calculators
              </p>
            </div>
            <Link
              href="/finance-tools"
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINANCE_TOOLS.slice(0, 6).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                SEO Tools
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Optimize your website for better search rankings
              </p>
            </div>
            <Link
              href="/seo-tools"
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Choose from our collection of free tools and start calculating today
            </p>
            <Link
              href="/finance-tools"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
