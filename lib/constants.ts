import { Tool } from '@/types';

export const SITE_NAME = 'VoidToolbox';
export const SITE_DESCRIPTION = 'Free online tools for finance calculations, SEO analysis, and productivity. Calculate mortgages, loans, retirement savings, and optimize your website for search engines.';
export const SITE_URL = 'https://voidtoolbox.com';
export const SITE_AUTHOR = 'VoidToolbox Team';

// All available tools
export const TOOLS: Tool[] = [
  // Finance Tools
  {
    id: 'mortgage-calculator',
    name: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments, total interest, and view detailed amortization schedule.',
    category: 'finance',
    slug: 'mortgage-calculator',
    featured: true,
  },
  {
    id: 'loan-calculator',
    name: 'Loan EMI Calculator',
    description: 'Calculate EMI for personal loans, car loans, and other loans with detailed payment schedule.',
    category: 'finance',
    slug: 'loan-calculator',
    featured: true,
  },
  {
    id: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    description: 'Calculate compound interest with regular contributions and see your investment grow over time.',
    category: 'finance',
    slug: 'compound-interest-calculator',
    featured: true,
  },
  {
    id: 'retirement-calculator',
    name: 'Retirement Calculator',
    description: 'Plan your retirement savings and see if you\'re on track to meet your retirement goals.',
    category: 'finance',
    slug: 'retirement-calculator',
    featured: true,
  },
  {
    id: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    description: 'Calculate gross profit margin, net profit margin, and operating profit margin for your business.',
    category: 'finance',
    slug: 'profit-margin-calculator',
  },
  {
    id: 'break-even-calculator',
    name: 'Break Even Calculator',
    description: 'Calculate break-even point in units and revenue for your business or product.',
    category: 'finance',
    slug: 'break-even-calculator',
  },
  {
    id: 'credit-card-payoff-calculator',
    name: 'Credit Card Payoff Calculator',
    description: 'Calculate how long it will take to pay off your credit card debt and see total interest paid.',
    category: 'finance',
    slug: 'credit-card-payoff-calculator',
  },
  {
    id: 'savings-goal-calculator',
    name: 'Savings Goal Calculator',
    description: 'Calculate how much you need to save monthly to reach your savings goal by a target date.',
    category: 'finance',
    slug: 'savings-goal-calculator',
  },
  // SEO Tools
  {
    id: 'keyword-density-checker',
    name: 'Keyword Density Checker',
    description: 'Analyze keyword density in your content and optimize for better SEO performance.',
    category: 'seo',
    slug: 'keyword-density-checker',
    featured: true,
  },
  {
    id: 'meta-tag-analyzer',
    name: 'Meta Tag Analyzer',
    description: 'Analyze and optimize your meta title and description for search engines.',
    category: 'seo',
    slug: 'meta-tag-analyzer',
    featured: true,
  },
  {
    id: 'serp-preview-tool',
    name: 'SERP Preview Tool',
    description: 'Preview how your page will appear in Google search results.',
    category: 'seo',
    slug: 'serp-preview-tool',
  },
  {
    id: 'robots-txt-generator',
    name: 'Robots.txt Generator',
    description: 'Generate a robots.txt file to control search engine crawler access to your website.',
    category: 'seo',
    slug: 'robots-txt-generator',
  },
  {
    id: 'content-length-checker',
    name: 'Content Length Checker',
    description: 'Analyze content length, readability, and get reading time estimates for your articles.',
    category: 'seo',
    slug: 'content-length-checker',
  },
  {
    id: 'url-slug-generator',
    name: 'URL Slug Generator',
    description: 'Generate SEO-friendly URL slugs from any text with customizable separators and options.',
    category: 'seo',
    slug: 'url-slug-generator',
  },
];

// Get tools by category
export const FINANCE_TOOLS = TOOLS.filter(tool => tool.category === 'finance');
export const SEO_TOOLS = TOOLS.filter(tool => tool.category === 'seo');
export const FEATURED_TOOLS = TOOLS.filter(tool => tool.featured);

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Finance Tools', href: '/finance-tools' },
  { label: 'SEO Tools', href: '/seo-tools' },
  { label: 'Blog', href: '/blog' },
];

// Social links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/voidtoolbox',
  facebook: 'https://facebook.com/voidtoolbox',
  linkedin: 'https://linkedin.com/company/voidtoolbox',
};

// Ad placement IDs (replace with your actual AdSense IDs)
export const AD_SLOTS = {
  header: 'ca-pub-XXXXXXXXXXXXXXXX',
  sidebar: 'ca-pub-XXXXXXXXXXXXXXXX',
  inContent: 'ca-pub-XXXXXXXXXXXXXXXX',
  footer: 'ca-pub-XXXXXXXXXXXXXXXX',
};

// SEO Keywords
export const SEO_KEYWORDS = {
  finance: [
    'mortgage calculator',
    'loan calculator',
    'EMI calculator',
    'compound interest calculator',
    'retirement calculator',
    'profit margin calculator',
    'break even calculator',
    'credit card payoff calculator',
    'savings goal calculator',
    'financial calculator',
    'free calculator',
  ],
  seo: [
    'keyword density checker',
    'meta tag analyzer',
    'SERP preview',
    'robots.txt generator',
    'content length checker',
    'URL slug generator',
    'SEO tools',
    'free SEO tools',
    'website optimization',
  ],
};
