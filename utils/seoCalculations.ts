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
