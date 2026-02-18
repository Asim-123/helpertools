import { FAQItem } from '@/types';

/**
 * Generate FAQ JSON-LD schema for SEO
 */
export function generateFAQSchema(faqs: FAQItem[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  
  return JSON.stringify(schema);
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  
  return JSON.stringify(schema);
}

/**
 * Generate WebApplication JSON-LD schema for tools
 */
export function generateWebApplicationSchema(
  name: string,
  description: string,
  url: string
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
  
  return JSON.stringify(schema);
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema(
  name: string,
  url: string,
  logo?: string,
  socialLinks?: string[]
): string {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
  };
  
  if (logo) {
    schema.logo = logo;
  }
  
  if (socialLinks && socialLinks.length > 0) {
    schema.sameAs = socialLinks;
  }
  
  return JSON.stringify(schema);
}
