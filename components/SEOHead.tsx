import { Metadata } from 'next';
import { generateFAQSchema, generateWebApplicationSchema, generateBreadcrumbSchema } from '@/utils/seoHelpers';
import { FAQItem, BreadcrumbItem } from '@/types';
import { SITE_URL } from '@/lib/constants';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  faqs: FAQItem[];
  breadcrumbs: BreadcrumbItem[];
  toolName: string;
  toolDescription: string;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  faqs,
  breadcrumbs,
  toolName,
  toolDescription,
}: SEOHeadProps) {
  const faqSchema = generateFAQSchema(faqs);
  const webAppSchema = generateWebApplicationSchema(toolName, toolDescription, canonicalUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    ...breadcrumbs.map(b => ({ name: b.label, url: `${SITE_URL}${b.href}` })),
  ]);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      
      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webAppSchema }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
    </>
  );
}
