'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateLoan, formatCurrency } from '@/utils/financeCalculations';
import { LoanResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { Calculator } from 'lucide-react';

export default function LoanCalculatorPage() {
  const [principal, setPrincipal] = useState('50000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [loanTermMonths, setLoanTermMonths] = useState('60');
  const [result, setResult] = useState<LoanResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCalculate = () => {
    const input = {
      principal: parseFloat(principal),
      interestRate: parseFloat(interestRate),
      loanTermMonths: parseInt(loanTermMonths),
    };

    if (input.principal > 0 && input.interestRate >= 0 && input.loanTermMonths > 0) {
      const calculatedResult = calculateLoan(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Loan Calculator', href: '/tools/loan-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'loan-calculator');

  const faqs = [
    {
      question: 'What is EMI?',
      answer: 'EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.',
    },
    {
      question: 'How is EMI calculated?',
      answer: 'EMI is calculated using the formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is principal, R is monthly interest rate, and N is loan tenure in months.',
    },
    {
      question: 'Can I prepay my loan?',
      answer: 'Most loans allow prepayment, but some lenders charge prepayment penalties. Check your loan agreement for specific terms and conditions.',
    },
    {
      question: 'What affects my loan interest rate?',
      answer: 'Factors include your credit score, loan amount, loan term, type of loan, and current market rates. Better credit scores typically qualify for lower rates.',
    },
    {
      question: 'Should I choose a shorter or longer loan term?',
      answer: 'Shorter terms have higher monthly payments but lower total interest. Longer terms have lower monthly payments but higher total interest. Choose based on your budget and goals.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="loan-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Loan EMI Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate your loan EMI and view detailed payment schedule
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Loan Amount ($)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Interest Rate (% per year)
            </label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="8.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Loan Term (months)
            </label>
            <select
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="12">12 months (1 year)</option>
              <option value="24">24 months (2 years)</option>
              <option value="36">36 months (3 years)</option>
              <option value="48">48 months (4 years)</option>
              <option value="60">60 months (5 years)</option>
              <option value="84">84 months (7 years)</option>
              <option value="120">120 months (10 years)</option>
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate EMI
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly EMI</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatCurrency(result.emi)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalAmount)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Payment Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Principal Amount:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(principal))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Interest:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-900 dark:text-white font-semibold">Total Payable:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(result.totalAmount)}</span>
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
                        <th>EMI</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.schedule.slice(0, 12).map((entry) => (
                        <tr key={entry.month}>
                          <td>{entry.month}</td>
                          <td>{formatCurrency(entry.emi)}</td>
                          <td>{formatCurrency(entry.principal)}</td>
                          <td>{formatCurrency(entry.interest)}</td>
                          <td>{formatCurrency(entry.balance)}</td>
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
          Understanding Loan EMI
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          EMI (Equated Monthly Installment) is the fixed amount you pay to your lender every month. 
          It consists of both principal and interest components, with the interest portion being higher 
          in the initial months and gradually decreasing over time.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Types of Loans
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Personal Loans:</strong> Unsecured loans for various personal needs</li>
          <li><strong>Car Loans:</strong> Secured loans for vehicle purchases</li>
          <li><strong>Home Loans:</strong> Long-term loans for property purchases</li>
          <li><strong>Education Loans:</strong> Loans for higher education expenses</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
