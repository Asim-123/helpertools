'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateMortgage, formatCurrency, formatNumber } from '@/utils/financeCalculations';
import { MortgageResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { Calculator } from 'lucide-react';

export default function MortgageCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState('300000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTermYears, setLoanTermYears] = useState('30');
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCalculate = () => {
    const input = {
      loanAmount: parseFloat(loanAmount),
      interestRate: parseFloat(interestRate),
      loanTermYears: parseInt(loanTermYears),
    };

    if (input.loanAmount > 0 && input.interestRate >= 0 && input.loanTermYears > 0) {
      const calculatedResult = calculateMortgage(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'mortgage-calculator');

  const faqs = [
    {
      question: 'How is monthly mortgage payment calculated?',
      answer: 'Monthly mortgage payment is calculated using the formula: M = P[r(1+r)^n]/[(1+r)^n-1], where M is monthly payment, P is principal loan amount, r is monthly interest rate, and n is number of payments.',
    },
    {
      question: 'What is included in a mortgage payment?',
      answer: 'A typical mortgage payment includes principal (the loan amount), interest, property taxes, homeowners insurance, and possibly PMI (Private Mortgage Insurance) if your down payment is less than 20%.',
    },
    {
      question: 'How does interest rate affect my mortgage?',
      answer: 'The interest rate significantly impacts your monthly payment and total interest paid. Even a 0.5% difference in rate can result in thousands of dollars over the life of the loan.',
    },
    {
      question: 'What is an amortization schedule?',
      answer: 'An amortization schedule shows how each payment is split between principal and interest over the life of the loan. Early payments go mostly toward interest, while later payments pay down more principal.',
    },
    {
      question: 'Should I choose a 15-year or 30-year mortgage?',
      answer: 'A 15-year mortgage has higher monthly payments but lower total interest. A 30-year mortgage has lower monthly payments but higher total interest. Choose based on your budget and financial goals.',
    },
  ];

  return (
    <ToolLayout 
      breadcrumbs={breadcrumbs} 
      relatedTools={relatedTools} 
      currentToolId="mortgage-calculator"
      seoTitle="Free Mortgage Calculator 2024 - Calculate Monthly Payments & Amortization"
      seoDescription="Free mortgage calculator to calculate monthly mortgage payments, total interest, and view detailed amortization schedule. Calculate your home loan payment with our easy-to-use mortgage calculator tool."
      seoKeywords={[
        'mortgage calculator',
        'mortgage payment calculator',
        'home loan calculator',
        'mortgage amortization calculator',
        'monthly mortgage payment',
        'mortgage interest calculator',
        'free mortgage calculator',
      ]}
      faqs={faqs}
      toolName="Mortgage Calculator"
      toolDescription="Calculate monthly mortgage payments, total interest, and view detailed amortization schedule"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mortgage Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate your monthly mortgage payment and view amortization schedule
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
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="300000"
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
              placeholder="6.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Loan Term (years)
            </label>
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Mortgage
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Payment</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatCurrency(result.monthlyPayment)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Payment</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalPayment)}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
            </div>

            {/* Amortization Schedule */}
            <div>
              <button
                onClick={() => setShowSchedule(!showSchedule)}
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline mb-4"
              >
                {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
              </button>

              {showSchedule && (
                <div className="overflow-x-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Payment</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.amortizationSchedule.slice(0, 12).map((entry) => (
                        <tr key={entry.month}>
                          <td>{entry.month}</td>
                          <td>{formatCurrency(entry.payment)}</td>
                          <td>{formatCurrency(entry.principal)}</td>
                          <td>{formatCurrency(entry.interest)}</td>
                          <td>{formatCurrency(entry.balance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {result.amortizationSchedule.length > 12 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                      Showing first 12 months of {result.amortizationSchedule.length} total payments
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
          Understanding Mortgage Calculations
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A mortgage calculator helps you estimate your monthly payment and understand the total cost of your home loan. 
          This tool uses the standard mortgage payment formula to calculate your principal and interest payment.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Key Factors in Mortgage Calculations
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Loan Amount:</strong> The total amount you're borrowing</li>
          <li><strong>Interest Rate:</strong> The annual percentage rate charged by the lender</li>
          <li><strong>Loan Term:</strong> The number of years to repay the loan</li>
          <li><strong>Down Payment:</strong> Affects your loan amount and may eliminate PMI</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
