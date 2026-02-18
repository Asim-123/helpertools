'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateSavingsGoal, formatCurrency, formatNumber } from '@/utils/financeCalculations';
import { SavingsGoalResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { Target } from 'lucide-react';

export default function SavingsGoalCalculatorPage() {
  const [goalAmount, setGoalAmount] = useState('10000');
  const [currentSavings, setCurrentSavings] = useState('1000');
  const [monthlyContribution, setMonthlyContribution] = useState('200');
  const [interestRate, setInterestRate] = useState('4');
  const [compoundingFrequency, setCompoundingFrequency] = useState('12');
  const [result, setResult] = useState<SavingsGoalResult | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleCalculate = () => {
    const input = {
      goalAmount: parseFloat(goalAmount),
      currentSavings: parseFloat(currentSavings),
      monthlyContribution: parseFloat(monthlyContribution),
      interestRate: parseFloat(interestRate),
      compoundingFrequency: parseInt(compoundingFrequency),
    };

    if (input.goalAmount > 0 && input.monthlyContribution > 0 && input.interestRate >= 0) {
      const calculatedResult = calculateSavingsGoal(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Savings Goal Calculator', href: '/tools/savings-goal-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'savings-goal-calculator');

  const faqs = [
    {
      question: 'How much should I save each month?',
      answer: 'Aim to save 20% of your income, but any amount helps. Use this calculator to see how your monthly savings rate affects your timeline to reach specific goals.',
    },
    {
      question: 'What interest rate should I use?',
      answer: 'Use the interest rate of your savings account. High-yield savings accounts offer 4-5% APY, while regular savings accounts may offer 0.5-1%.',
    },
    {
      question: 'Should I save or invest?',
      answer: 'Save for short-term goals (under 5 years) and emergencies. Invest for long-term goals (5+ years) to potentially earn higher returns, though with more risk.',
    },
    {
      question: 'How can I reach my savings goal faster?',
      answer: 'Increase monthly contributions, find a higher interest rate account, reduce expenses, or earn additional income. Even small increases compound over time.',
    },
    {
      question: 'What is compound interest?',
      answer: 'Compound interest is earning interest on both your principal and previously earned interest. It helps your savings grow faster over time.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="savings-goal-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Savings Goal Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate how much to save monthly to reach your savings goal
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Savings Goal ($)
            </label>
            <input
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="10000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Savings ($)
            </label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="1000"
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
              placeholder="200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="4"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Typical savings account: 0.5-5% APY
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Compounding Frequency
            </label>
            <select
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="12">Monthly</option>
              <option value="4">Quarterly</option>
              <option value="2">Semi-annually</option>
              <option value="1">Annually</option>
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Savings Plan
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time to Reach Goal</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatNumber(result.yearsToGoal, 1)} years
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {result.monthsToGoal} months
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Final Amount</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(result.finalAmount)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Goal: {formatCurrency(parseFloat(goalAmount))}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Contributions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalContributions)}
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Interest Earned</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
            </div>

            {/* Savings Summary */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Savings Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Starting Balance:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(currentSavings))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monthly Contributions:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(result.totalContributions - parseFloat(currentSavings))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Interest Earned:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-900 dark:text-white font-semibold">Final Balance:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(result.finalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div>
              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline mb-4"
              >
                {showBreakdown ? 'Hide' : 'Show'} Monthly Breakdown
              </button>

              {showBreakdown && (
                <div className="overflow-x-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Balance</th>
                        <th>Contribution</th>
                        <th>Interest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.monthlyBreakdown.filter((_, i) => i % 6 === 0 || i === result.monthlyBreakdown.length - 1).map((entry) => (
                        <tr key={entry.month}>
                          <td>{entry.month}</td>
                          <td>{formatCurrency(entry.balance)}</td>
                          <td>{formatCurrency(entry.contribution)}</td>
                          <td>{formatCurrency(entry.interest)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Showing every 6 months for clarity
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
          Reaching Your Savings Goals
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Setting specific savings goals helps you stay focused and motivated. This calculator shows 
          you exactly how long it will take to reach your goal based on your monthly savings rate 
          and the interest you'll earn.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Tips for Successful Saving
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Pay Yourself First:</strong> Set up automatic transfers to savings</li>
          <li><strong>Start Small:</strong> Even $50/month adds up over time</li>
          <li><strong>Increase Gradually:</strong> Raise your savings rate with salary increases</li>
          <li><strong>Use High-Yield Accounts:</strong> Earn more interest on your savings</li>
          <li><strong>Set Multiple Goals:</strong> Emergency fund, vacation, down payment, etc.</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
