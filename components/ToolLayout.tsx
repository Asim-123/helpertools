import { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Sidebar } from './Sidebar';
import { AdComponent } from './AdComponent';
import { SEOHead } from './SEOHead';
import { BreadcrumbItem, Tool, FAQItem } from '@/types';
import { AD_SLOTS, SITE_URL } from '@/lib/constants';

interface ToolLayoutProps {
  children: ReactNode;
  breadcrumbs: BreadcrumbItem[];
  relatedTools?: Tool[];
  currentToolId?: string;
  showAds?: boolean;
  // SEO Props
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  faqs?: FAQItem[];
  toolName?: string;
  toolDescription?: string;
}

export function ToolLayout({
  children,
  breadcrumbs,
  relatedTools = [],
  currentToolId,
  showAds = true,
  seoTitle,
  seoDescription,
  seoKeywords = [],
  faqs = [],
  toolName,
  toolDescription,
}: ToolLayoutProps) {
  const canonicalUrl = `${SITE_URL}${breadcrumbs[breadcrumbs.length - 1]?.href || ''}`;
  
  return (
    <>
      {/* Structured Data */}
      {seoTitle && faqs.length > 0 && (
        <SEOHead
          title={seoTitle}
          description={seoDescription || ''}
          keywords={seoKeywords}
          canonicalUrl={canonicalUrl}
          faqs={faqs}
          breadcrumbs={breadcrumbs}
          toolName={toolName || seoTitle}
          toolDescription={toolDescription || seoDescription || ''}
        />
      )}
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {children}
          
          {/* In-content Ad */}
          {showAds && (
            <AdComponent slot={AD_SLOTS.inContent} className="my-8" />
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <Sidebar relatedTools={relatedTools} currentToolId={currentToolId} />
            
            {/* Sidebar Ad */}
            {showAds && (
              <AdComponent slot={AD_SLOTS.sidebar} format="vertical" />
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
