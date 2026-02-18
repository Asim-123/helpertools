import Link from 'next/link';
import { Tool } from '@/types';
import { ArrowRight } from 'lucide-react';

interface SidebarProps {
  relatedTools?: Tool[];
  currentToolId?: string;
}

export function Sidebar({ relatedTools = [], currentToolId }: SidebarProps) {
  const filteredTools = relatedTools.filter(tool => tool.id !== currentToolId);

  return (
    <aside className="space-y-6">
      {/* Related Tools */}
      {filteredTools.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
            Related Tools
          </h3>
          <ul className="space-y-3">
            {filteredTools.map((tool) => (
              <li key={tool.id}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="flex items-center justify-between group text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  <span>{tool.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-sm p-6 text-white">
        <h3 className="font-semibold text-lg mb-2">
          Get Updates
        </h3>
        <p className="text-sm text-primary-50 mb-4">
          Subscribe to our newsletter for new tools and tips.
        </p>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-primary-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-50 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Affiliate CTA */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
          Need Expert Help?
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Get professional financial advice from certified experts.
        </p>
        <a
          href="#"
          className="block w-full bg-primary-600 text-white text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
        >
          Find an Advisor
        </a>
      </div>
    </aside>
  );
}
