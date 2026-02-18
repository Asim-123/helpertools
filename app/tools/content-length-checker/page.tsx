'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { analyzeContentLength } from '@/utils/seoCalculations';
import { ContentLengthResult } from '@/types';
import { SEO_TOOLS } from '@/lib/constants';
import { FileText } from 'lucide-react';

export default function ContentLengthCheckerPage() {
  const [text, setText] = useState('');
  const [includeHtml, setIncludeHtml] = useState(false);
  const [result, setResult] = useState<ContentLengthResult | null>(null);

  const handleAnalyze = () => {
    if (text.trim().length > 0) {
      const calculatedResult = analyzeContentLength({ text, includeHtml });
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'SEO Tools', href: '/seo-tools' },
    { label: 'Content Length Checker', href: '/tools/content-length-checker' },
  ];

  const relatedTools = SEO_TOOLS.filter(t => t.id !== 'content-length-checker');

  const faqs = [
    {
      question: 'What is the ideal content length for SEO?',
      answer: 'Long-form content (1,500+ words) typically ranks better, but quality matters more than length. Aim for comprehensive coverage of your topic rather than hitting a specific word count.',
    },
    {
      question: 'Does content length affect rankings?',
      answer: 'Yes, longer content often ranks better because it provides more value, covers topics comprehensively, and earns more backlinks. However, quality and relevance are more important.',
    },
    {
      question: 'What is a good reading time?',
      answer: 'Most blog posts should be readable in 3-7 minutes (600-1,400 words). Longer articles (10+ minutes) work well for comprehensive guides and pillar content.',
    },
    {
      question: 'How do I improve readability?',
      answer: 'Use short sentences (15-20 words), short paragraphs (2-3 sentences), simple words, bullet points, subheadings, and active voice. Aim for 8th-9th grade reading level.',
    },
    {
      question: 'Should I count HTML tags in content length?',
      answer: 'No, search engines ignore HTML tags when analyzing content. Use the "Exclude HTML" option to get accurate word and character counts for SEO purposes.',
    },
  ];

  const getReadingLevelColor = (level: string) => {
    switch (level) {
      case 'Easy':
        return 'text-green-600 dark:text-green-400';
      case 'Medium':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Difficult':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="content-length-checker">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Content Length Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Analyze content length, readability, and reading time
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
              placeholder="Paste your content here to analyze..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeHtml"
              checked={includeHtml}
              onChange={(e) => setIncludeHtml(e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="includeHtml" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Include HTML tags in count
            </label>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={text.trim().length === 0}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Analyze Content
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Word Count</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {result.wordCount.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  words
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Character Count</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {result.characterCount.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  characters
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Reading Time</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {result.readingTime}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  minutes
                </p>
              </div>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Sentences</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.sentenceCount}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Paragraphs</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.paragraphCount}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg Words/Sentence</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.averageWordsPerSentence.toFixed(1)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg Chars/Word</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.averageCharactersPerWord.toFixed(1)}
                </p>
              </div>
            </div>

            {/* Reading Level */}
            <div className={`border rounded-lg p-6 ${getReadingLevelColor(result.readingLevel || 'Unknown').replace('text-', 'bg-').replace('-600', '-50').replace('-400', '-900/20')} border-${result.readingLevel === 'Easy' ? 'green' : result.readingLevel === 'Medium' ? 'yellow' : 'red'}-200 dark:border-${result.readingLevel === 'Easy' ? 'green' : result.readingLevel === 'Medium' ? 'yellow' : 'red'}-800`}>
              <h3 className="font-semibold text-lg mb-2">Reading Level</h3>
              <p className={`text-2xl font-bold ${getReadingLevelColor(result.readingLevel || 'Unknown')}`}>
                {result.readingLevel}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {result.readingLevel === 'Easy' && 'Great! Your content is easy to read and accessible to a wide audience.'}
                {result.readingLevel === 'Medium' && 'Good readability. Consider simplifying some sentences for broader appeal.'}
                {result.readingLevel === 'Difficult' && 'Your content may be too complex. Try shorter sentences and simpler words.'}
              </p>
            </div>

            {/* SEO Recommendations */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                💡 SEO Recommendations
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                {result.wordCount < 300 && (
                  <li>• ⚠️ Content is too short. Aim for at least 300 words for basic SEO value.</li>
                )}
                {result.wordCount >= 300 && result.wordCount < 1000 && (
                  <li>• ✓ Good length for short-form content. Consider expanding to 1,000+ words for better rankings.</li>
                )}
                {result.wordCount >= 1000 && result.wordCount < 2000 && (
                  <li>• ✓ Excellent length! This is ideal for most blog posts and articles.</li>
                )}
                {result.wordCount >= 2000 && (
                  <li>• ✓ Outstanding! Long-form content (2,000+ words) typically ranks very well.</li>
                )}
                {result.averageWordsPerSentence > 20 && (
                  <li>• Consider shorter sentences (15-20 words) for better readability.</li>
                )}
                {result.paragraphCount < 3 && (
                  <li>• Break up long paragraphs into shorter ones (2-3 sentences each).</li>
                )}
                <li>• Use subheadings every 200-300 words to improve structure.</li>
                <li>• Include images, lists, and visual breaks for better engagement.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Content Length and SEO
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Content length is an important SEO factor, but quality always trumps quantity. Search engines 
          favor comprehensive, well-written content that thoroughly covers a topic. This tool helps you 
          analyze your content&apos;s length and readability.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Content Length Guidelines
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Short Content (300-500 words):</strong> Good for news, updates, quick tips</li>
          <li><strong>Medium Content (500-1,500 words):</strong> Ideal for most blog posts and articles</li>
          <li><strong>Long Content (1,500-3,000 words):</strong> Best for comprehensive guides and pillar content</li>
          <li><strong>Very Long Content (3,000+ words):</strong> Excellent for in-depth research and ultimate guides</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
