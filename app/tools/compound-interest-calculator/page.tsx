'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateCompoundInterest, formatCurrency } from '@/utils/financeCalculations';
import { CompoundInterestResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { TrendingUp } from 'lucide-react';

export default function CompoundInterestCalculatorPage() {
  const [principal, setPrincipal] = useState('10000');
  const [rate, setRate] = useState('7');
  const [time, setTime] = useState('10');
  const [frequency, setFrequency] = useState('12');
  const [additionalContribution, setAdditionalContribution] = useState('100');
  const [contributionFrequency, setContributionFrequency] = useState<'monthly' | 'yearly'>('monthly');
  const [result, setResult] = useState<CompoundInterestResult | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleCalculate = () => {
    const input = {
      principal: parseFloat(principal),
      rate: parseFloat(rate),
      time: parseInt(time),
      frequency: parseInt(frequency),
      additionalContribution: parseFloat(additionalContribution) || 0,
      contributionFrequency,
    };

    if (input.principal > 0 && input.rate >= 0 && input.time > 0) {
      const calculatedResult = calculateCompoundInterest(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Compound Interest Calculator', href: '/tools/compound-interest-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'compound-interest-calculator');

  const faqs = [
    {
      question: 'What is compound interest?',
      answer: 'Compound interest is interest calculated on the initial principal and accumulated interest from previous periods. It\'s "interest on interest" and makes your money grow faster than simple interest.',
    },
    {
      question: 'How does compounding frequency affect returns?',
      answer: 'More frequent compounding (daily vs. yearly) results in slightly higher returns because interest is calculated and added to the principal more often, allowing it to earn interest sooner.',
    },
    {
      question: 'What is the Rule of 72?',
      answer: 'The Rule of 72 is a quick way to estimate how long it takes to double your money. Divide 72 by your annual interest rate. For example, at 7% interest, it takes about 72/7 = 10.3 years to double.',
    },
    {
      question: 'Should I make regular contributions?',
      answer: 'Yes! Regular contributions significantly boost your returns through dollar-cost averaging and the power of compound interest working on each contribution.',
    },
    {
      question: 'What investments offer compound interest?',
      answer: 'Savings accounts, CDs, bonds, dividend-reinvesting stocks, mutual funds, and retirement accounts all benefit from compound interest when earnings are reinvested.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="compound-interest-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <TrendingUp className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Compound Interest Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate compound interest with regular contributions
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="10000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="7"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Period (years)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Compound Frequency
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="1">Annually</option>
              <option value="2">Semi-annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Contribution ($)
            </label>
            <input
              type="number"
              value={additionalContribution}
              onChange={(e) => setAdditionalContribution(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Contribution Frequency
            </label>
            <select
              value={contributionFrequency}
              onChange={(e) => setContributionFrequency(e.target.value as 'monthly' | 'yearly')}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Returns
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Future Value</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatCurrency(result.futureValue)}
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

            {/* Growth Breakdown */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Investment Growth</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Initial Investment:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(principal))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Additional Contributions:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatCurrency(result.totalContributions - parseFloat(principal))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Earned:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-900 dark:text-white font-semibold">Final Value:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(result.futureValue)}</span>
                </div>
              </div>
            </div>

            {/* Yearly Breakdown */}
            <div>
              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline mb-4"
              >
                {showBreakdown ? 'Hide' : 'Show'} Yearly Breakdown
              </button>

              {showBreakdown && (
                <div className="overflow-x-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Balance</th>
                        <th>Interest Earned</th>
                        <th>Total Contributions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearlyBreakdown.map((entry) => (
                        <tr key={entry.year}>
                          <td>{entry.year}</td>
                          <td>{formatCurrency(entry.balance)}</td>
                          <td>{formatCurrency(entry.interestEarned)}</td>
                          <td>{formatCurrency(entry.totalContributions)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          The Power of Compound Interest
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Albert Einstein reportedly called compound interest &quot;the eighth wonder of the world.&quot; 
          Unlike simple interest, compound interest allows your money to grow exponentially over time 
          as you earn interest on both your principal and previously earned interest.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Maximizing Compound Interest
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Start Early:</strong> Time is your greatest asset with compound interest</li>
          <li><strong>Contribute Regularly:</strong> Consistent contributions accelerate growth</li>
          <li><strong>Reinvest Earnings:</strong> Let your returns compound for maximum effect</li>
          <li><strong>Be Patient:</strong> Compound interest works best over long periods</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
