import {
  KeywordDensityInput,
  KeywordDensityResult,
  MetaTagInput,
  MetaTagResult,
  KeywordEntry,
  ContentLengthInput,
  ContentLengthResult,
  UrlSlugInput,
  UrlSlugResult,
  SitemapInput,
  SitemapResult,
  MetaTagsInput,
  MetaTagsResult,
  SchemaInput,
  SchemaResult,
  PageSpeedInput,
  PageSpeedResult,
  SSLCheckerInput,
  SSLCheckerResult,
  DomainAgeInput,
  DomainAgeResult,
} from '@/types';

// Common English stop words
const STOP_WORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 
  'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 
  'by', 'can', 'did', 'do', 'does', 'doing', 'down', 'during', 'each', 'few', 'for', 'from', 
  'further', 'had', 'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 
  'himself', 'his', 'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself', 'just', 
  'me', 'might', 'more', 'most', 'must', 'my', 'myself', 'no', 'nor', 'not', 'now', 'of', 
  'off', 'on', 'once', 'only', 'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over', 
  'own', 'same', 'she', 'should', 'so', 'some', 'such', 'than', 'that', 'the', 'their', 
  'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 
  'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we', 'were', 'what', 'when', 'where', 
  'which', 'while', 'who', 'whom', 'why', 'will', 'with', 'would', 'you', 'your', 'yours', 
  'yourself', 'yourselves'
]);

/**
 * Calculate keyword density from text
 */
export function calculateKeywordDensity(input: KeywordDensityInput): KeywordDensityResult {
  const { text, removeStopWords = false } = input;
  
  // Clean and tokenize text
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 0);
  
  const totalWords = words.length;
  
  // Count word frequencies
  const wordCount = new Map<string, number>();
  
  words.forEach(word => {
    // Skip stop words if option is enabled
    if (removeStopWords && STOP_WORDS.has(word)) {
      return;
    }
    
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });
  
  // Calculate density for each word
  const keywords: KeywordEntry[] = [];
  
  wordCount.forEach((count, word) => {
    const density = (count / totalWords) * 100;
    keywords.push({ word, count, density });
  });
  
  // Sort by count (descending)
  keywords.sort((a, b) => b.count - a.count);
  
  // Get top 20 keywords
  const topKeywords = keywords.slice(0, 20);
  
  return {
    totalWords,
    uniqueWords: wordCount.size,
    keywords,
    topKeywords,
  };
}

/**
 * Analyze meta tags for SEO optimization
 */
export function analyzeMetaTags(input: MetaTagInput): MetaTagResult {
  const { title, description, url = '' } = input;
  
  const titleLength = title.length;
  const descriptionLength = description.length;
  
  // Title analysis (optimal: 50-60 characters)
  let titleIsOptimal = false;
  let titleMessage = '';
  
  if (titleLength === 0) {
    titleMessage = 'Title is empty. Add a title for better SEO.';
  } else if (titleLength < 30) {
    titleMessage = 'Title is too short. Aim for 50-60 characters.';
  } else if (titleLength >= 30 && titleLength <= 60) {
    titleIsOptimal = true;
    titleMessage = 'Title length is optimal!';
  } else if (titleLength > 60 && titleLength <= 70) {
    titleMessage = 'Title is slightly long. May be truncated in search results.';
  } else {
    titleMessage = 'Title is too long. It will be truncated in search results.';
  }
  
  // Description analysis (optimal: 150-160 characters)
  let descriptionIsOptimal = false;
  let descriptionMessage = '';
  
  if (descriptionLength === 0) {
    descriptionMessage = 'Description is empty. Add a description for better SEO.';
  } else if (descriptionLength < 120) {
    descriptionMessage = 'Description is too short. Aim for 150-160 characters.';
  } else if (descriptionLength >= 120 && descriptionLength <= 160) {
    descriptionIsOptimal = true;
    descriptionMessage = 'Description length is optimal!';
  } else if (descriptionLength > 160 && descriptionLength <= 170) {
    descriptionMessage = 'Description is slightly long. May be truncated in search results.';
  } else {
    descriptionMessage = 'Description is too long. It will be truncated in search results.';
  }
  
  // Truncate for preview (Google's limits)
  const previewTitle = title.length > 60 ? title.substring(0, 60) + '...' : title;
  const previewDescription = description.length > 160 ? description.substring(0, 160) + '...' : description;
  
  return {
    title: {
      length: titleLength,
      isOptimal: titleIsOptimal,
      message: titleMessage,
    },
    description: {
      length: descriptionLength,
      isOptimal: descriptionIsOptimal,
      message: descriptionMessage,
    },
    preview: {
      title: previewTitle,
      description: previewDescription,
      url: url || 'https://example.com',
    },
  };
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(
  userAgents: Array<{ agent: string; allow: string[]; disallow: string[] }>,
  sitemap?: string,
  crawlDelay?: number
): string {
  let robotsTxt = '';
  
  userAgents.forEach(({ agent, allow, disallow }) => {
    robotsTxt += `User-agent: ${agent}\n`;
    
    if (disallow.length > 0) {
      disallow.forEach(path => {
        robotsTxt += `Disallow: ${path}\n`;
      });
    }
    
    if (allow.length > 0) {
      allow.forEach(path => {
        robotsTxt += `Allow: ${path}\n`;
      });
    }
    
    if (crawlDelay !== undefined && crawlDelay > 0) {
      robotsTxt += `Crawl-delay: ${crawlDelay}\n`;
    }
    
    robotsTxt += '\n';
  });
  
  if (sitemap) {
    robotsTxt += `Sitemap: ${sitemap}\n`;
  }
  
  return robotsTxt.trim();
}

/**
 * Extract domain from URL
 */
export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Count characters excluding HTML tags
 */
export function countTextCharacters(html: string): number {
  return html.replace(/<[^>]*>/g, '').length;
}

/**
 * Generate SEO-friendly slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Analyze content length and readability
 */
export function analyzeContentLength(input: ContentLengthInput): ContentLengthResult {
  const { text, includeHtml = false } = input;
  
  // Remove HTML if needed
  const cleanText = includeHtml ? text : text.replace(/<[^>]*>/g, '');
  
  const characterCount = cleanText.length;
  const words = cleanText.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentenceCount = sentences.length;
  const paragraphs = cleanText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length;
  
  const readingTime = calculateReadingTime(cleanText);
  const averageWordsPerSentence = sentenceCount > 0 ? wordCount / sentenceCount : 0;
  const averageCharactersPerWord = wordCount > 0 ? characterCount / wordCount : 0;
  
  // Simple reading level estimation (Flesch-like)
  let readingLevel = 'Unknown';
  if (averageWordsPerSentence > 0) {
    if (averageWordsPerSentence < 10 && averageCharactersPerWord < 4.5) {
      readingLevel = 'Easy';
    } else if (averageWordsPerSentence < 15 && averageCharactersPerWord < 5.5) {
      readingLevel = 'Medium';
    } else {
      readingLevel = 'Difficult';
    }
  }
  
  return {
    characterCount,
    wordCount,
    sentenceCount,
    paragraphCount,
    readingTime,
    readingLevel,
    averageWordsPerSentence,
    averageCharactersPerWord,
  };
}

/**
 * Generate URL slug from text
 */
export function generateUrlSlug(input: UrlSlugInput): UrlSlugResult {
  const { 
    text, 
    separator = '-', 
    lowercase = true, 
    maxLength = 100 
  } = input;
  
  let slug = text;
  
  // Convert to lowercase if requested
  if (lowercase) {
    slug = slug.toLowerCase();
  }
  
  // Remove special characters, keep alphanumeric and spaces
  slug = slug.replace(/[^\w\s-]/g, '');
  
  // Replace spaces and multiple separators with single separator
  slug = slug.replace(/[\s_-]+/g, separator);
  
  // Remove leading/trailing separators
  slug = slug.replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '');
  
  // Truncate if needed
  const originalSlug = slug;
  if (maxLength && slug.length > maxLength) {
    slug = slug.substring(0, maxLength);
    // Remove trailing separator if truncated
    slug = slug.replace(new RegExp(`${separator}+$`), '');
  }
  
  // Validate slug
  const isValid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(slug) && slug.length > 0;
  
  // Generate suggestions if invalid
  const suggestions: string[] = [];
  if (!isValid) {
    // Try with different separators
    if (separator !== '-') {
      suggestions.push(generateUrlSlug({ ...input, separator: '-' }).slug);
    }
    if (separator !== '_') {
      suggestions.push(generateUrlSlug({ ...input, separator: '_' }).slug);
    }
  }
  
  const words = slug.split(separator).filter(w => w.length > 0);
  
  return {
    slug,
    originalText: text,
    characterCount: slug.length,
    wordCount: words.length,
    isValid,
    suggestions: suggestions.length > 0 ? suggestions : undefined,
  };
}

/**
 * Generate XML sitemap
 */
export function generateSitemap(input: SitemapInput): SitemapResult {
  const { urls, changefreq = 'weekly', priority = 0.8, lastmod } = input;
  
  const currentDate = lastmod || new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach((url) => {
    if (isValidUrl(url)) {
      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    }
  });
  
  xml += '</urlset>';
  
  return {
    xml,
    urlCount: urls.filter(url => isValidUrl(url)).length,
    isValid: urls.length > 0,
  };
}

/**
 * Generate meta tags HTML
 */
export function generateMetaTags(input: MetaTagsInput): MetaTagsResult {
  const {
    title,
    description,
    keywords,
    author,
    robots = 'index, follow',
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard = 'summary_large_image',
    canonicalUrl,
  } = input;
  
  let html = '';
  
  // Basic meta tags
  html += `<meta charset="UTF-8">\n`;
  html += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
  html += `<title>${title}</title>\n`;
  html += `<meta name="description" content="${description}">\n`;
  
  if (keywords) {
    html += `<meta name="keywords" content="${keywords}">\n`;
  }
  
  if (author) {
    html += `<meta name="author" content="${author}">\n`;
  }
  
  html += `<meta name="robots" content="${robots}">\n`;
  
  // Open Graph tags
  html += `<meta property="og:title" content="${ogTitle || title}">\n`;
  html += `<meta property="og:description" content="${ogDescription || description}">\n`;
  html += `<meta property="og:type" content="website">\n`;
  
  if (ogImage) {
    html += `<meta property="og:image" content="${ogImage}">\n`;
  }
  
  if (ogUrl) {
    html += `<meta property="og:url" content="${ogUrl}">\n`;
  }
  
  // Twitter Card tags
  html += `<meta name="twitter:card" content="${twitterCard}">\n`;
  html += `<meta name="twitter:title" content="${ogTitle || title}">\n`;
  html += `<meta name="twitter:description" content="${ogDescription || description}">\n`;
  
  if (ogImage) {
    html += `<meta name="twitter:image" content="${ogImage}">\n`;
  }
  
  // Canonical URL
  if (canonicalUrl) {
    html += `<link rel="canonical" href="${canonicalUrl}">\n`;
  }
  
  const preview = `<head>\n${html}</head>`;
  
  return {
    html: html.trim(),
    preview,
    isValid: title.length > 0 && description.length > 0,
  };
}

/**
 * Generate Schema.org JSON-LD markup
 */
export function generateSchemaMarkup(input: SchemaInput): SchemaResult {
  const { type, data } = input;
  
  let schema: any = {
    '@context': 'https://schema.org',
    '@type': type,
  };
  
  // Add data fields
  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined && data[key] !== '') {
      schema[key] = data[key];
    }
  });
  
  const jsonLd = JSON.stringify(schema, null, 2);
  const preview = `<script type="application/ld+json">\n${jsonLd}\n</script>`;
  
  return {
    jsonLd,
    isValid: Object.keys(data).length > 0,
    preview,
  };
}

/**
 * Analyze page speed (simulated - in production, use real API)
 */
export function analyzePageSpeed(input: PageSpeedInput): PageSpeedResult {
  const { url } = input;
  
  if (!isValidUrl(url)) {
    return {
      score: 0,
      metrics: {},
      recommendations: ['Please enter a valid URL'],
      isValid: false,
    };
  }
  
  // Simulated metrics (in production, use Google PageSpeed Insights API)
  const score = Math.floor(Math.random() * 30) + 70; // 70-100
  const fcp = Math.floor(Math.random() * 1000) + 800; // 800-1800ms
  const lcp = Math.floor(Math.random() * 1500) + 1200; // 1200-2700ms
  const cls = Math.random() * 0.1; // 0-0.1
  const ttfb = Math.floor(Math.random() * 300) + 200; // 200-500ms
  
  const recommendations: string[] = [];
  
  if (fcp > 1800) {
    recommendations.push('Optimize First Contentful Paint - reduce server response time');
  }
  if (lcp > 2500) {
    recommendations.push('Improve Largest Contentful Paint - optimize images and fonts');
  }
  if (cls > 0.1) {
    recommendations.push('Reduce Cumulative Layout Shift - set image dimensions');
  }
  if (ttfb > 400) {
    recommendations.push('Improve Time to First Byte - optimize server response');
  }
  
  if (recommendations.length === 0) {
    recommendations.push('Your page speed looks good! Keep optimizing.');
  }
  
  return {
    score,
    metrics: {
      fcp,
      lcp,
      fid: 50, // Simulated
      cls,
      ttfb,
    },
    recommendations,
    isValid: true,
  };
}

/**
 * Check SSL certificate (simulated - in production, use real API)
 */
export function checkSSL(input: SSLCheckerInput): SSLCheckerResult {
  const { domain } = input;
  
  // Remove protocol if present
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  
  if (!cleanDomain || cleanDomain.length < 3) {
    return {
      isValid: false,
      recommendations: ['Please enter a valid domain name'],
    };
  }
  
  // Simulated SSL check (in production, use real SSL checking API)
  const isValid = true;
  const validFrom = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const validTo = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const daysRemaining = 60;
  const issuer = 'Let\'s Encrypt';
  const grade = 'A';
  
  const recommendations: string[] = [];
  
  if (daysRemaining < 30) {
    recommendations.push('SSL certificate expires soon - renew immediately');
  } else if (daysRemaining < 60) {
    recommendations.push('SSL certificate expires in less than 60 days - plan renewal');
  } else {
    recommendations.push('SSL certificate is valid and secure');
  }
  
  return {
    isValid,
    issuer,
    validFrom,
    validTo,
    daysRemaining,
    grade,
    recommendations,
  };
}

/**
 * Check domain age (simulated - in production, use WHOIS API)
 */
export function checkDomainAge(input: DomainAgeInput): DomainAgeResult {
  const { domain } = input;
  
  // Remove protocol if present
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '').split('/')[0];
  
  if (!cleanDomain || cleanDomain.length < 3) {
    return {
      domain: cleanDomain,
      isValid: false,
    };
  }
  
  // Simulated domain age (in production, use WHOIS API)
  const registrationDate = new Date(Date.now() - Math.random() * 3650 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const ageInDays = Math.floor((Date.now() - new Date(registrationDate).getTime()) / (1000 * 60 * 60 * 24));
  const ageInYears = Math.floor(ageInDays / 365);
  
  return {
    domain: cleanDomain,
    registrationDate,
    ageInDays,
    ageInYears,
    isValid: true,
  };
}
