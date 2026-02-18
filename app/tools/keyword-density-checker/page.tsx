'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateKeywordDensity } from '@/utils/seoCalculations';
import { KeywordDensityResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { Search } from 'lucide-react';

export default function KeywordDensityCheckerPage() {
  const [text, setText] = useState('');
  const [removeStopWords, setRemoveStopWords] = useState(false);
  const [result, setResult] = useState<KeywordDensityResult | null>(null);

  const handleAnalyze = () => {
    if (text.trim().length > 0) {
      const calculatedResult = calculateKeywordDensity({ text, removeStopWords });
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Keyword Density Checker', href: '/tools/keyword-density-checker' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'keyword-density-checker');

  const faqs = [
    {
      question: 'What is keyword density?',
      answer: 'Keyword density is the percentage of times a keyword or phrase appears in your content compared to the total word count. It helps ensure you\'re using keywords naturally without over-optimization.',
    },
    {
      question: 'What is the ideal keyword density?',
      answer: 'There\'s no perfect number, but 1-2% is generally considered natural. Focus on writing for users first, and use keywords naturally. Modern SEO prioritizes semantic relevance over exact density.',
    },
    {
      question: 'What are stop words?',
      answer: 'Stop words are common words like "the," "is," "at," "which," and "on" that search engines typically ignore. Removing them from analysis can help identify more meaningful keywords.',
    },
    {
      question: 'Can high keyword density hurt SEO?',
      answer: 'Yes! Keyword stuffing (excessive keyword use) can result in penalties from search engines. Focus on natural language and user experience rather than hitting a specific density target.',
    },
    {
      question: 'Should I optimize for single words or phrases?',
      answer: 'Focus on phrases (long-tail keywords) as they better match user intent and face less competition. Single words are often too broad and competitive.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="keyword-density-checker">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Search className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Keyword Density Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Analyze keyword density and frequency in your content
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Content to Analyze
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Paste your content here to analyze keyword density..."
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {text.split(/\s+/).filter(w => w.length > 0).length} words
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="removeStopWords"
              checked={removeStopWords}
              onChange={(e) => setRemoveStopWords(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="removeStopWords" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Remove common stop words (the, is, at, etc.)
            </label>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={text.trim().length === 0}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Analyze Keyword Density
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Words</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {result.totalWords}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Unique Words</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.uniqueWords}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Top Keywords</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.topKeywords.length}
                </p>
              </div>
            </div>

            {/* Top Keywords Table */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <h3 className="font-semibold text-gray-900 dark:text-white">Top 20 Keywords</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        Keyword
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        Count
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        Density
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        Visual
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {result.topKeywords.map((keyword, index) => (
                      <tr key={keyword.word}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {keyword.word}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {keyword.count}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {keyword.density.toFixed(2)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full" 
                              style={{ width: `${Math.min(keyword.density * 10, 100)}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Density Analysis */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                💡 Keyword Density Tips
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Aim for 1-2% density for your main keywords</li>
                <li>• Use variations and synonyms naturally throughout your content</li>
                <li>• Focus on user experience rather than exact density numbers</li>
                <li>• Avoid keyword stuffing - it can hurt your SEO rankings</li>
                <li>• Consider semantic keywords and related terms</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          How to Use Keyword Density Effectively
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Keyword density is one factor in SEO, but it's not the most important. Modern search engines 
          use sophisticated algorithms that understand context and semantic meaning. Focus on creating 
          valuable content for users while naturally incorporating relevant keywords.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Best Practices
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Write for Humans First:</strong> Create valuable, readable content</li>
          <li><strong>Use Natural Language:</strong> Keywords should fit naturally in sentences</li>
          <li><strong>Include Variations:</strong> Use synonyms and related terms</li>
          <li><strong>Focus on Topics:</strong> Cover topics comprehensively, not just keywords</li>
          <li><strong>Monitor Competition:</strong> See how top-ranking pages use keywords</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
