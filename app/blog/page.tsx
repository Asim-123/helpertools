import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog - Financial Tips & SEO Guides',
  description: 'Learn about personal finance, SEO optimization, and how to make the most of our free online tools.',
};

export default function BlogPage() {
  const breadcrumbs = [
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Financial tips, SEO guides, and tool tutorials coming soon.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Blog posts will be added here. Stay tuned for helpful content about finance and SEO!
          </p>
        </div>
      </div>
    </div>
  );
}
