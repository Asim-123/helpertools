import { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About Us - VoidToolbox | Free Online Finance & SEO Tools',
  description: 'Learn about VoidToolbox - your trusted source for free online finance calculators and SEO tools. We provide accurate, easy-to-use tools to help you make better financial decisions and optimize your website.',
  keywords: [
    'about voidtoolbox',
    'about us',
    'free tools',
    'finance calculators',
    'SEO tools',
    'online tools',
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us - VoidToolbox',
    description: 'Learn about VoidToolbox - your trusted source for free online finance calculators and SEO tools.',
    url: `${SITE_URL}/about`,
    siteName: 'VoidToolbox',
    type: 'website',
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'About Us', href: '/about' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About VoidToolbox
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {SITE_DESCRIPTION}
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At VoidToolbox, our mission is to provide free, accurate, and easy-to-use online tools 
              that help people make better financial decisions and optimize their online presence. 
              We believe that powerful tools should be accessible to everyone, regardless of their 
              technical expertise or financial situation.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Whether you&apos;re calculating mortgage payments, planning for retirement, or optimizing 
              your website for search engines, we&apos;re here to help you succeed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Finance Calculators
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive financial calculators including mortgage calculators, loan calculators, 
                  retirement planners, and more. All calculations are accurate and based on industry-standard formulas.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  SEO Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Powerful SEO tools to help you optimize your website, analyze keywords, check 
                  meta tags, and improve your search engine rankings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose VoidToolbox?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
              <li><strong>100% Free:</strong> All our tools are completely free to use with no hidden fees or subscriptions</li>
              <li><strong>Accurate Calculations:</strong> Our calculators use industry-standard formulas to ensure accurate results</li>
              <li><strong>Easy to Use:</strong> Simple, intuitive interfaces that anyone can use, regardless of technical expertise</li>
              <li><strong>No Registration Required:</strong> Use our tools instantly without creating an account</li>
              <li><strong>Privacy Focused:</strong> We don&apos;t store your personal information or calculation data</li>
              <li><strong>Regular Updates:</strong> We continuously improve our tools and add new features based on user feedback</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are committed to providing you with the best possible tools and user experience. 
              Our team works tirelessly to ensure that all our calculators and tools are accurate, 
              up-to-date, and easy to use.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions, suggestions, or feedback, please don&apos;t hesitate to 
              <a href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline"> contact us</a>. 
              We value your input and are always looking for ways to improve.
            </p>
          </section>

          <section className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ready to use our tools? Browse our collection of free finance calculators and SEO tools 
              to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/finance-tools"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                View Finance Tools
              </a>
              <a
                href="/seo-tools"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
              >
                View SEO Tools
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
