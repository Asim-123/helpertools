'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateRetirement, formatCurrency } from '@/utils/financeCalculations';
import { RetirementResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { PiggyBank } from 'lucide-react';

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState('30');
  const [retirementAge, setRetirementAge] = useState('65');
  const [currentSavings, setCurrentSavings] = useState('50000');
  const [monthlyContribution, setMonthlyContribution] = useState('500');
  const [expectedReturn, setExpectedReturn] = useState('7');
  const [inflationRate, setInflationRate] = useState('3');
  const [result, setResult] = useState<RetirementResult | null>(null);
  const [showProjection, setShowProjection] = useState(false);

  const handleCalculate = () => {
    const input = {
      currentAge: parseInt(currentAge),
      retirementAge: parseInt(retirementAge),
      currentSavings: parseFloat(currentSavings),
      monthlyContribution: parseFloat(monthlyContribution),
      expectedReturn: parseFloat(expectedReturn),
      inflationRate: parseFloat(inflationRate),
    };

    if (input.currentAge > 0 && input.retirementAge > input.currentAge && input.expectedReturn >= 0) {
      const calculatedResult = calculateRetirement(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Retirement Calculator', href: '/tools/retirement-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'retirement-calculator');

  const faqs = [
    {
      question: 'How much should I save for retirement?',
      answer: 'Financial experts often recommend saving 10-15% of your income for retirement. The exact amount depends on your retirement goals, current age, and expected retirement lifestyle.',
    },
    {
      question: 'What is a realistic rate of return?',
      answer: 'Historically, the stock market has returned about 10% annually, but a conservative estimate of 6-8% accounts for a diversified portfolio with bonds and other assets.',
    },
    {
      question: 'How does inflation affect retirement savings?',
      answer: 'Inflation reduces purchasing power over time. A 3% inflation rate means you\'ll need about twice as much money in 24 years to maintain the same lifestyle.',
    },
    {
      question: 'When should I start saving for retirement?',
      answer: 'The earlier, the better! Starting in your 20s gives compound interest decades to work. Even small contributions early on can grow substantially over time.',
    },
    {
      question: 'What retirement accounts should I use?',
      answer: 'Consider 401(k)s (especially with employer match), IRAs (Traditional or Roth), and taxable investment accounts. Each has different tax advantages and contribution limits.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="retirement-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <PiggyBank className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Retirement Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Plan your retirement savings and see if you're on track
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Age
              </label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Retirement Age
              </label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="65"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Retirement Savings ($)
            </label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Contribution ($)
            </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="7"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Inflation Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="3"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Retirement Savings
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Savings at Retirement</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatCurrency(result.totalSavings)}
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Inflation-Adjusted Value</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(result.inflationAdjustedValue)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Contributions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalContributions)}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Interest Earned</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
            </div>

            {/* Retirement Summary */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Retirement Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Years to Retirement:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {parseInt(retirementAge) - parseInt(currentAge)} years
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Contributions:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(result.totalContributions)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Investment Growth:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-900 dark:text-white font-semibold">Projected Savings:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(result.totalSavings)}</span>
                </div>
              </div>
            </div>

            {/* Yearly Projection */}
            <div>
              <button
                onClick={() => setShowProjection(!showProjection)}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline mb-4"
              >
                {showProjection ? 'Hide' : 'Show'} Yearly Projection
              </button>

              {showProjection && (
                <div className="overflow-x-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th>Age</th>
                        <th>Balance</th>
                        <th>Contributions</th>
                        <th>Interest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearlyProjection.filter((_, i) => i % 5 === 0 || i === result.yearlyProjection.length - 1).map((entry) => (
                        <tr key={entry.age}>
                          <td>{entry.age}</td>
                          <td>{formatCurrency(entry.balance)}</td>
                          <td>{formatCurrency(entry.contributions)}</td>
                          <td>{formatCurrency(entry.interest)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Showing every 5 years for clarity
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Planning for a Secure Retirement
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Retirement planning is crucial for financial security in your later years. This calculator helps you 
          understand if your current savings rate will meet your retirement goals and shows the power of 
          consistent, long-term investing.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Retirement Planning Tips
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Start Early:</strong> Time is your greatest advantage in retirement savings</li>
          <li><strong>Maximize Employer Match:</strong> Take full advantage of 401(k) matching</li>
          <li><strong>Increase Contributions:</strong> Raise your savings rate with salary increases</li>
          <li><strong>Diversify Investments:</strong> Balance risk and return based on your age</li>
          <li><strong>Plan for Healthcare:</strong> Medical costs are a major retirement expense</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
