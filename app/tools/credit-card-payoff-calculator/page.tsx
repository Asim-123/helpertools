'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateCreditCardPayoff, formatCurrency } from '@/utils/financeCalculations';
import { CreditCardPayoffResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { CreditCard } from 'lucide-react';

export default function CreditCardPayoffCalculatorPage() {
  const [balance, setBalance] = useState('5000');
  const [interestRate, setInterestRate] = useState('18');
  const [monthlyPayment, setMonthlyPayment] = useState('200');
  const [result, setResult] = useState<CreditCardPayoffResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCalculate = () => {
    const input = {
      balance: parseFloat(balance),
      interestRate: parseFloat(interestRate),
      monthlyPayment: parseFloat(monthlyPayment),
    };

    if (input.balance > 0 && input.interestRate >= 0 && input.monthlyPayment > 0) {
      const calculatedResult = calculateCreditCardPayoff(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Credit Card Payoff Calculator', href: '/tools/credit-card-payoff-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'credit-card-payoff-calculator');

  const faqs = [
    {
      question: 'How does credit card interest work?',
      answer: 'Credit card interest is calculated daily based on your average daily balance and annual percentage rate (APR). The interest is then added to your balance monthly, making it compound interest.',
    },
    {
      question: 'What is the minimum payment?',
      answer: 'The minimum payment is usually 1-3% of your balance plus any interest and fees. Paying only the minimum will take many years and cost thousands in interest.',
    },
    {
      question: 'How can I pay off my credit card faster?',
      answer: 'Pay more than the minimum payment, make multiple payments per month, transfer to a lower interest rate card, or use the debt avalanche method (pay highest interest first).',
    },
    {
      question: 'Should I pay off credit cards or save money?',
      answer: 'Generally, pay off high-interest credit card debt first (APR > 10%) since the interest cost exceeds typical investment returns. Then build an emergency fund.',
    },
    {
      question: 'What is a good credit card interest rate?',
      answer: 'Good rates are typically under 15% APR. Excellent credit can get rates under 12%. Rates above 20% are considered high and should be paid off aggressively.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="credit-card-payoff-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <CreditCard className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Credit Card Payoff Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate how long it will take to pay off your credit card debt
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Balance ($)
            </label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="5000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Interest Rate (APR %)
            </label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="18"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly Payment ($)
            </label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="200"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Minimum payment is typically 1-3% of balance
            </p>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Payoff Plan
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Months to Payoff</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {result.monthsToPayoff}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {Math.floor(result.monthsToPayoff / 12)} years, {result.monthsToPayoff % 12} months
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Payment</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalPayment)}
                </p>
              </div>
            </div>

            {/* Payoff Date */}
            {result.payoffDate && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Estimated Payoff Date</p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                  {new Date(result.payoffDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            )}

            {/* Payment Breakdown */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Original Balance:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(balance))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Interest:</span>
                  <span className="font-medium text-red-600 dark:text-red-400">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-900 dark:text-white font-semibold">Total Amount Paid:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(result.totalPayment)}</span>
                </div>
              </div>
            </div>

            {/* Payment Schedule */}
            <div>
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline mb-4"
              >
                {showSchedule ? 'Hide' : 'Show'} Payment Schedule
              </button>

              {showSchedule && (
                <div className="overflow-x-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Balance</th>
                        <th>Payment</th>
                        <th>Interest</th>
                        <th>Principal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.schedule.slice(0, 12).map((entry) => (
                        <tr key={entry.month}>
                          <td>{entry.month}</td>
                          <td>{formatCurrency(entry.balance)}</td>
                          <td>{formatCurrency(entry.payment)}</td>
                          <td>{formatCurrency(entry.interest)}</td>
                          <td>{formatCurrency(entry.principal)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {result.schedule.length > 12 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                      Showing first 12 months of {result.schedule.length} total payments
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Understanding Credit Card Debt
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Credit card debt can quickly spiral out of control due to high interest rates. This calculator 
          shows you exactly how long it will take to pay off your debt and how much interest you&apos;ll pay 
          based on your monthly payment amount.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Strategies to Pay Off Debt Faster
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Pay More Than Minimum:</strong> Even small increases can save years and thousands in interest</li>
          <li><strong>Debt Avalanche:</strong> Pay off highest interest rate cards first</li>
          <li><strong>Debt Snowball:</strong> Pay off smallest balances first for motivation</li>
          <li><strong>Balance Transfer:</strong> Move debt to a 0% APR card (watch for fees)</li>
          <li><strong>Stop Using Cards:</strong> Don&apos;t add new debt while paying off old debt</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
