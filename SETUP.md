# Quick Setup Guide

Get your HelperTools website running in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git (optional)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

### 2. Configure Your Site

Edit `lib/constants.ts`:

```typescript
export const SITE_NAME = 'YourSiteName';
export const SITE_DESCRIPTION = 'Your description here';
export const SITE_URL = 'https://yourdomain.com';
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Customize (Optional)

#### Update Colors
Edit `tailwind.config.ts` to change the color scheme.

#### Add Your Logo
Replace the Calculator icon in `components/Header.tsx` with your logo.

#### Update Social Links
Edit `SOCIAL_LINKS` in `lib/constants.ts`.

### 5. Build for Production

```bash
npm run build
npm start
```

## What's Included

✅ **6 Finance Calculators**
- Mortgage Calculator
- Loan EMI Calculator
- Compound Interest Calculator
- Retirement Calculator
- Profit Margin Calculator
- Break Even Calculator

✅ **4 SEO Tools**
- Keyword Density Checker
- Meta Tag Analyzer
- SERP Preview Tool
- Robots.txt Generator

✅ **Features**
- Dark mode
- Fully responsive
- SEO optimized
- AdSense ready
- Fast performance

## Next Steps

1. **Customize branding** - Update site name, colors, and logo
2. **Deploy** - See DEPLOYMENT.md for deployment instructions
3. **Add AdSense** - Update AD_SLOTS in lib/constants.ts
4. **Create content** - Add blog posts for SEO
5. **Monitor** - Set up Google Analytics and Search Console

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Useful for development
npm run build && npm start  # Test production build locally
```

## Folder Structure

```
helpertools/
├── app/              # Next.js pages and routes
├── components/       # Reusable React components
├── lib/             # Configuration and constants
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── public/          # Static assets
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript errors
Make sure you're using Node.js 18+ and all dependencies are installed.

## Need Help?

- Check README.md for detailed documentation
- Review DEPLOYMENT.md for deployment instructions
- See CONTRIBUTING.md for contribution guidelines

## Ready to Launch? 🚀

1. Customize your branding
2. Build the project: `npm run build`
3. Deploy to Vercel (recommended) or your preferred platform
4. Submit sitemap to search engines
5. Start promoting your tools!

---

**Your production-ready tools website is ready to go!**
