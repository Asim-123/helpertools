'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/ToolLayout';
import { FAQSection } from '@/components/FAQSection';
import { calculateBreakEven, formatCurrency, formatNumber, formatPercentage } from '@/utils/financeCalculations';
import { BreakEvenResult } from '@/types';
import { FINANCE_TOOLS } from '@/lib/constants';
import { Target } from 'lucide-react';

export default function BreakEvenCalculatorPage() {
  const [fixedCosts, setFixedCosts] = useState('50000');
  const [variableCostPerUnit, setVariableCostPerUnit] = useState('15');
  const [pricePerUnit, setPricePerUnit] = useState('35');
  const [result, setResult] = useState<BreakEvenResult | null>(null);

  const handleCalculate = () => {
    const input = {
      fixedCosts: parseFloat(fixedCosts),
      variableCostPerUnit: parseFloat(variableCostPerUnit),
      pricePerUnit: parseFloat(pricePerUnit),
    };

    if (input.fixedCosts >= 0 && input.variableCostPerUnit >= 0 && input.pricePerUnit > input.variableCostPerUnit) {
      const calculatedResult = calculateBreakEven(input);
      setResult(calculatedResult);
    }
  };

  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
    { label: 'Break Even Calculator', href: '/tools/break-even-calculator' },
  ];

  const relatedTools = FINANCE_TOOLS.filter(t => t.id !== 'break-even-calculator');

  const faqs = [
    {
      question: 'What is break-even point?',
      answer: 'The break-even point is the level of sales at which total revenue equals total costs, resulting in neither profit nor loss. It\'s a critical metric for business planning.',
    },
    {
      question: 'What are fixed costs?',
      answer: 'Fixed costs are expenses that don\'t change with production volume, such as rent, salaries, insurance, and equipment leases. They must be paid regardless of sales.',
    },
    {
      question: 'What are variable costs?',
      answer: 'Variable costs change directly with production volume, such as raw materials, packaging, and direct labor. They increase as you produce more units.',
    },
    {
      question: 'What is contribution margin?',
      answer: 'Contribution margin is the selling price minus variable cost per unit. It represents how much each sale contributes to covering fixed costs and generating profit.',
    },
    {
      question: 'How can I lower my break-even point?',
      answer: 'Reduce fixed costs, lower variable costs, increase prices, or improve your product mix to favor higher-margin items. Each strategy lowers the sales volume needed to break even.',
    },
  ];

  return (
    <ToolLayout breadcrumbs={breadcrumbs} relatedTools={relatedTools} currentToolId="break-even-calculator">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Break Even Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Calculate break-even point in units and revenue
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Fixed Costs ($)
            </label>
            <input
              type="number"
              value={fixedCosts}
              onChange={(e) => setFixedCosts(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="50000"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Rent, salaries, insurance, etc.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Variable Cost per Unit ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={variableCostPerUnit}
              onChange={(e) => setVariableCostPerUnit(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="15"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Materials, labor, packaging per unit
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price per Unit ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={pricePerUnit}
              onChange={(e) => setPricePerUnit(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="35"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Selling price per unit
            </p>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Calculate Break-Even Point
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Break-Even Units</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {formatNumber(result.breakEvenUnits, 0)} units
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Units needed to break even
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Break-Even Revenue</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(result.breakEvenRevenue)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Revenue needed to break even
                </p>
              </div>
            </div>

            {/* Contribution Margin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contribution Margin</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(result.contributionMargin)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Per unit contribution
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contribution Margin Ratio</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatPercentage(result.contributionMarginRatio)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Percentage of revenue
                </p>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Cost Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Price per Unit:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(pricePerUnit))}</span>
                </div>
                <div className="flex justify-between items-center text-red-600 dark:text-red-400">
                  <span>- Variable Cost per Unit:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(variableCostPerUnit))}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="font-semibold text-gray-900 dark:text-white">= Contribution Margin:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{formatCurrency(result.contributionMargin)}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-gray-600 dark:text-gray-400">Fixed Costs:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(parseFloat(fixedCosts))}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">÷ Contribution Margin:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(result.contributionMargin)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-2 border-gray-300 dark:border-gray-500">
                  <span className="font-bold text-gray-900 dark:text-white">= Break-Even Units:</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400 text-xl">{formatNumber(result.breakEvenUnits, 0)}</span>
                </div>
              </div>
            </div>

            {/* Profit Scenarios */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Profit Scenarios</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-2 text-left">Units Sold</th>
                      <th className="px-4 py-2 text-left">Revenue</th>
                      <th className="px-4 py-2 text-left">Total Costs</th>
                      <th className="px-4 py-2 text-left">Profit/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((multiplier) => {
                      const units = Math.round(result.breakEvenUnits * multiplier);
                      const revenue = units * parseFloat(pricePerUnit);
                      const totalCosts = parseFloat(fixedCosts) + (units * parseFloat(variableCostPerUnit));
                      const profit = revenue - totalCosts;
                      const isBreakEven = multiplier === 1;
                      
                      return (
                        <tr key={multiplier} className={`border-b dark:border-gray-700 ${isBreakEven ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}>
                          <td className="px-4 py-2">{formatNumber(units, 0)}</td>
                          <td className="px-4 py-2">{formatCurrency(revenue)}</td>
                          <td className="px-4 py-2">{formatCurrency(totalCosts)}</td>
                          <td className={`px-4 py-2 font-medium ${profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {formatCurrency(profit)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Educational Content */}
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Understanding Break-Even Analysis
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Break-even analysis helps you determine how many units you need to sell to cover all your costs. 
          It's essential for pricing decisions, business planning, and understanding your business's financial health.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Key Concepts
        </h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong>Fixed Costs:</strong> Expenses that stay constant regardless of production</li>
          <li><strong>Variable Costs:</strong> Expenses that change with production volume</li>
          <li><strong>Contribution Margin:</strong> Amount each sale contributes to fixed costs</li>
          <li><strong>Break-Even Point:</strong> Where total revenue equals total costs</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </ToolLayout>
  );
}
