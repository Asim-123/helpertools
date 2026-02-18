'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateProfitMargin, formatCurrency, formatPercentage } from '@/utils/financeCalculations';
import { ProfitMarginResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { TrendingUp } from 'lucide-react';

export default function ProfitMarginCalculatorPage() {
  const [revenue, setRevenue] = useState('100000');
  const [costOfGoodsSold, setCostOfGoodsSold] = useState('60000');
  const [operatingExpenses, setOperatingExpenses] = useState('20000');
  const [otherExpenses, setOtherExpenses] = useState('5000');
  const [result, setResult] = useState<ProfitMarginResult | null>(null);

  const handleCalculate = () => {
    const input = {
      revenue: parseFloat(revenue),
      costOfGoodsSold: parseFloat(costOfGoodsSold),
      operatingExpenses: parseFloat(operatingExpenses) || 0,
      otherExpenses: parseFloat(otherExpenses) || 0,
    };

    if (input.revenue > 0 && input.costOfGoodsSold >= 0) {
      const calculatedResult = calculateProfitMargin(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Profit Margin Calculator', href: '/tools/profit-margin-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'profit-margin-calculator');

  const faqs = [
    {
      question: 'What is profit margin?',
      answer: 'Profit margin is a profitability ratio that measures what percentage of revenue is actual profit. It shows how much profit a company makes for every dollar of sales.',
    },
    {
      question: 'What is the difference between gross and net profit margin?',
      answer: 'Gross profit margin only considers cost of goods sold, while net profit margin accounts for all expenses including operating costs, taxes, and interest.',
    },
    {
      question: 'What is a good profit margin?',
      answer: 'It varies by industry. Generally, a 10% net profit margin is average, 20% is high, and 5% is low. Compare your margins to industry benchmarks.',
    },
    {
      question: 'How can I improve my profit margin?',
      answer: 'Increase prices, reduce costs, improve efficiency, eliminate waste, negotiate better supplier rates, or focus on higher-margin products.',
    },
    {
      question: 'What is operating profit margin?',
      answer: 'Operating profit margin measures profitability from core business operations, excluding interest and taxes. It shows how efficiently a company runs its business.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="profit-margin-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <TrendingUp className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Profit Margin Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate gross, operating, and net profit margins
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Total Revenue ($)
            </label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="100000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cost of Goods Sold (COGS) ($)
            </label>
            <input
              type="number"
              value={costOfGoodsSold}
              onChange={(e) => setCostOfGoodsSold(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="60000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Operating Expenses ($)
            </label>
            <input
              type="number"
              value={operatingExpenses}
              onChange={(e) => setOperatingExpenses(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="20000"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Salaries, rent, utilities, marketing, etc.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Other Expenses ($)
            </label>
            <input
              type="number"
              value={otherExpenses}
              onChange={(e) => setOtherExpenses(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="5000"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Interest, taxes, depreciation, etc.
            </p>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Profit Margins
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Profit Margins */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Gross Profit Margin</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatPercentage(result.grossProfitMargin)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formatCurrency(result.grossProfit)}
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Operating Profit Margin</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatPercentage(result.operatingProfitMargin || 0)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formatCurrency(result.operatingProfit || 0)}
                </p>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Net Profit Margin</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatPercentage(result.netProfitMargin)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {formatCurrency(result.netProfit)}
                </p>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Profit Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Revenue:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(revenue))}</span>
                </div>
                <div className="flex justify-between items-center text-red-600 dark:text-red-400">
                  <span>- Cost of Goods Sold:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(costOfGoodsSold))}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="font-semibold text-gray-900 dark:text-white">= Gross Profit:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{formatCurrency(result.grossProfit)}</span>
                </div>
                <div className="flex justify-between items-center text-red-600 dark:text-red-400">
                  <span>- Operating Expenses:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(operatingExpenses) || 0)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="font-semibold text-gray-900 dark:text-white">= Operating Profit:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{formatCurrency(result.operatingProfit || 0)}</span>
                </div>
                <div className="flex justify-between items-center text-red-600 dark:text-red-400">
                  <span>- Other Expenses:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(otherExpenses) || 0)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-2 border-gray-300 dark:border-gray-500">
                  <span className="font-bold text-gray-900 dark:text-white">= Net Profit:</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400 text-xl">{formatCurrency(result.netProfit)}</span>
                </div>
              </div>
            </div>

            {/* Margin Analysis */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Margin Analysis</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Gross Margin</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{formatPercentage(result.grossProfitMargin)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${Math.min(result.grossProfitMargin, 100)}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Operating Margin</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{formatPercentage(result.operatingProfitMargin || 0)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${Math.min(result.operatingProfitMargin || 0, 100)}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Net Margin</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{formatPercentage(result.netProfitMargin)}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${Math.min(result.netProfitMargin, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Understanding Profit Margins
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Profit margins are key indicators of business health and efficiency. They show what percentage 
          of your revenue becomes profit after accounting for various costs.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Types of Profit Margins
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Gross Profit Margin:</strong> Revenue minus COGS, shows production efficiency</li>
          <li><strong>Operating Profit Margin:</strong> Includes operating expenses, shows operational efficiency</li>
          <li><strong>Net Profit Margin:</strong> Bottom line after all expenses, shows overall profitability</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
