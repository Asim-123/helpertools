import { Metadata } from 'next';
import { ToolCard } from '@/components/ToolCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FINANCE_TOOLS, SITE_NAME } from '@/lib/constants';
import { Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Finance Calculators - Mortgage, Loan, Retirement & More',
  description: 'Free online finance calculators including mortgage calculator, loan EMI calculator, compound interest calculator, retirement planner, profit margin calculator, and break-even calculator.',
  keywords: [
    'finance calculators',
    'mortgage calculator',
    'loan calculator',
    'EMI calculator',
    'retirement calculator',
    'compound interest calculator',
    'profit margin calculator',
    'break even calculator',
    'free financial tools',
  ],
};

export default function FinanceToolsPage() {
  const breadcrumbs = [
    { label: 'Finance Tools', href: '/finance-tools' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            <Calculator className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Finance Calculators
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Plan your financial future with our comprehensive suite of free calculators. 
          Calculate mortgages, loans, retirement savings, profit margins, and more.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FINANCE_TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* SEO Content */}
      <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Why Use Our Finance Calculators?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-400">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Accurate & Reliable
            </h3>
            <p>
              Our calculators use industry-standard formulas to provide accurate results 
              for all your financial planning needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Easy to Use
            </h3>
            <p>
              Simple, intuitive interfaces make complex financial calculations accessible 
              to everyone, regardless of financial expertise.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Detailed Results
            </h3>
            <p>
              Get comprehensive breakdowns including amortization schedules, yearly 
              projections, and detailed payment information.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              100% Free
            </h3>
            <p>
              All our financial calculators are completely free to use with no 
              registration required and no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
