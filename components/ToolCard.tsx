import Link from 'next/link';
import { Tool } from '@/types';
import { ArrowRight, Calculator, Search } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.category === 'finance' ? Calculator : Search;

  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {tool.name}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {tool.description}
            </p>
            <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
              <span>Use Tool</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
