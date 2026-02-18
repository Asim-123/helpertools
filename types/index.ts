// Core types for the tools website

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'finance' | 'seo';
  slug: string;
  icon?: string;
  featured?: boolean;
}

export interface ToolMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Finance Calculator Types
export interface MortgageInput {
  loanAmount: number;
  interestRate: number;
  loanTermYears: number;
  startDate?: Date;
}

export interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: AmortizationEntry[];
}

export interface AmortizationEntry {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
  date?: string;
}

export interface LoanInput {
  principal: number;
  interestRate: number;
  loanTermMonths: number;
}

export interface LoanResult {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  schedule: LoanScheduleEntry[];
}

export interface LoanScheduleEntry {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface CompoundInterestInput {
  principal: number;
  rate: number;
  time: number;
  frequency: number; // times per year
  additionalContribution?: number;
  contributionFrequency?: 'monthly' | 'yearly';
}

export interface CompoundInterestResult {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
  yearlyBreakdown: YearlyBreakdown[];
}

export interface YearlyBreakdown {
  year: number;
  balance: number;
  interestEarned: number;
  totalContributions: number;
}

export interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  expectedReturn: number;
  inflationRate: number;
}

export interface RetirementResult {
  totalSavings: number;
  totalContributions: number;
  totalInterest: number;
  inflationAdjustedValue: number;
  yearlyProjection: RetirementYearProjection[];
}

export interface RetirementYearProjection {
  age: number;
  balance: number;
  contributions: number;
  interest: number;
}

export interface ProfitMarginInput {
  revenue: number;
  costOfGoodsSold: number;
  operatingExpenses?: number;
  otherExpenses?: number;
}

export interface ProfitMarginResult {
  grossProfit: number;
  grossProfitMargin: number;
  netProfit: number;
  netProfitMargin: number;
  operatingProfit?: number;
  operatingProfitMargin?: number;
}

export interface BreakEvenInput {
  fixedCosts: number;
  variableCostPerUnit: number;
  pricePerUnit: number;
}

export interface BreakEvenResult {
  breakEvenUnits: number;
  breakEvenRevenue: number;
  contributionMargin: number;
  contributionMarginRatio: number;
}

export interface CreditCardPayoffInput {
  balance: number;
  interestRate: number;
  monthlyPayment: number;
  minimumPayment?: number;
}

export interface CreditCardPayoffResult {
  monthsToPayoff: number;
  totalInterest: number;
  totalPayment: number;
  payoffDate?: string;
  schedule: CreditCardPayoffEntry[];
}

export interface CreditCardPayoffEntry {
  month: number;
  balance: number;
  payment: number;
  interest: number;
  principal: number;
}

export interface SavingsGoalInput {
  goalAmount: number;
  currentSavings: number;
  monthlyContribution: number;
  interestRate: number;
  compoundingFrequency: number;
}

export interface SavingsGoalResult {
  monthsToGoal: number;
  yearsToGoal: number;
  totalContributions: number;
  totalInterest: number;
  finalAmount: number;
  monthlyBreakdown: SavingsGoalEntry[];
}

export interface SavingsGoalEntry {
  month: number;
  balance: number;
  contribution: number;
  interest: number;
}

// SEO Tool Types
export interface KeywordDensityInput {
  text: string;
  removeStopWords?: boolean;
}

export interface KeywordDensityResult {
  totalWords: number;
  uniqueWords: number;
  keywords: KeywordEntry[];
  topKeywords: KeywordEntry[];
}

export interface KeywordEntry {
  word: string;
  count: number;
  density: number;
}

export interface MetaTagInput {
  title: string;
  description: string;
  url?: string;
}

export interface MetaTagResult {
  title: {
    length: number;
    isOptimal: boolean;
    message: string;
  };
  description: {
    length: number;
    isOptimal: boolean;
    message: string;
  };
  preview: {
    title: string;
    description: string;
    url: string;
  };
}

export interface SerpPreviewInput {
  title: string;
  description: string;
  url: string;
}

export interface RobotsTxtInput {
  userAgents: RobotUserAgent[];
  sitemap?: string;
  crawlDelay?: number;
}

export interface RobotUserAgent {
  agent: string;
  allow: string[];
  disallow: string[];
}

export interface ContentLengthInput {
  text: string;
  includeHtml?: boolean;
}

export interface ContentLengthResult {
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  paragraphCount: number;
  readingTime: number; // in minutes
  readingLevel?: string;
  averageWordsPerSentence: number;
  averageCharactersPerWord: number;
}

export interface UrlSlugInput {
  text: string;
  separator?: string;
  lowercase?: boolean;
  maxLength?: number;
}

export interface UrlSlugResult {
  slug: string;
  originalText: string;
  characterCount: number;
  wordCount: number;
  isValid: boolean;
  suggestions?: string[];
}

export interface SitemapInput {
  urls: string[];
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  lastmod?: string;
}

export interface SitemapResult {
  xml: string;
  urlCount: number;
  isValid: boolean;
}

export interface MetaTagsInput {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonicalUrl?: string;
}

export interface MetaTagsResult {
  html: string;
  preview: string;
  isValid: boolean;
}

export interface SchemaInput {
  type: 'Article' | 'Product' | 'Organization' | 'WebSite' | 'FAQPage' | 'BreadcrumbList';
  data: Record<string, any>;
}

export interface SchemaResult {
  jsonLd: string;
  isValid: boolean;
  preview: string;
}

export interface PageSpeedInput {
  url: string;
}

export interface PageSpeedResult {
  score: number;
  metrics: {
    fcp?: number; // First Contentful Paint
    lcp?: number; // Largest Contentful Paint
    fid?: number; // First Input Delay
    cls?: number; // Cumulative Layout Shift
    ttfb?: number; // Time to First Byte
  };
  recommendations: string[];
  isValid: boolean;
}

export interface SSLCheckerInput {
  domain: string;
}

export interface SSLCheckerResult {
  isValid: boolean;
  issuer?: string;
  validFrom?: string;
  validTo?: string;
  daysRemaining?: number;
  grade?: string;
  recommendations: string[];
}

export interface DomainAgeInput {
  domain: string;
}

export interface DomainAgeResult {
  domain: string;
  registrationDate?: string;
  ageInDays?: number;
  ageInYears?: number;
  isValid: boolean;
  whoisData?: string;
}

// FAQ Schema Types
export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
