# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
6. Add environment variables (if needed)
7. Click "Deploy"

Your site will be live in minutes!

## Alternative Deployment Options

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

### DigitalOcean App Platform

1. Push code to GitHub
2. Go to DigitalOcean
3. Create new App
4. Connect GitHub repository
5. Configure build settings
6. Deploy

### Self-Hosted with PM2

```bash
# Install PM2
npm install -g pm2

# Build the project
npm run build

# Start with PM2
pm2 start npm --name "helpertools" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Post-Deployment Checklist

### 1. Update Site URL
- Update `SITE_URL` in `lib/constants.ts`
- Update environment variables

### 2. Configure DNS
- Point your domain to deployment platform
- Set up SSL certificate (usually automatic)

### 3. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 4. Set Up Analytics
- Add Google Analytics
- Configure Google Search Console
- Set up AdSense (if monetizing)

### 5. Test Everything
- All tools work correctly
- Mobile responsive
- Dark mode functions
- All links work
- Forms submit properly
- Meta tags correct

### 6. Monitor Performance
- Check Core Web Vitals
- Monitor page load times
- Review error logs
- Track user behavior

## Environment Variables

Set these in your deployment platform:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Custom Domain Setup

### Vercel
1. Go to Project Settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed

### Netlify
1. Go to Site Settings
2. Click "Domain Management"
3. Add custom domain
4. Configure DNS

## SSL Certificate

Most platforms provide automatic SSL:
- Vercel: Automatic
- Netlify: Automatic
- DigitalOcean: Automatic

For self-hosted, use Let's Encrypt:
```bash
sudo certbot --nginx -d yourdomain.com
```

## Performance Optimization

### Enable Caching
Configure your CDN for optimal caching:
- HTML: 1 hour
- CSS/JS: 1 year
- Images: 1 year

### Enable Compression
Most platforms enable this automatically, but verify:
- Gzip compression
- Brotli compression (if available)

### CDN Configuration
- Enable CDN on your platform
- Configure edge caching
- Set up image optimization

## Monitoring

### Set Up Monitoring Tools
- Vercel Analytics
- Google Analytics
- Sentry (for error tracking)
- Uptime monitoring (UptimeRobot, Pingdom)

### Key Metrics to Track
- Page load time
- Core Web Vitals
- Error rates
- User engagement
- Conversion rates

## Backup Strategy

### Automated Backups
- Git repository (version control)
- Database backups (if applicable)
- Configuration backups

### Manual Backups
- Export analytics data
- Save important configurations
- Document custom changes

## Rollback Plan

If deployment fails:

1. **Vercel/Netlify**: Rollback to previous deployment in dashboard
2. **Self-hosted**: 
   ```bash
   git revert HEAD
   npm run build
   pm2 restart helpertools
   ```

## Scaling Considerations

### Traffic Growth
- Monitor server resources
- Upgrade plan if needed
- Enable CDN
- Optimize images

### Adding More Tools
- Follow modular structure
- Test thoroughly before deploying
- Update sitemap
- Monitor performance impact

## Security Best Practices

1. Keep dependencies updated
2. Use environment variables for secrets
3. Enable HTTPS only
4. Set security headers
5. Monitor for vulnerabilities

## Support & Troubleshooting

### Common Issues

**Build fails:**
- Check Node.js version (18+)
- Verify all dependencies installed
- Review build logs

**Site not loading:**
- Check DNS configuration
- Verify deployment status
- Review error logs

**Slow performance:**
- Enable CDN
- Optimize images
- Check server resources
- Review Core Web Vitals

## Continuous Deployment

Set up automatic deployments:
1. Push to main branch
2. Automatic build triggered
3. Tests run (if configured)
4. Deploy to production

This ensures your site is always up-to-date!
