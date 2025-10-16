# Deployment Guide for TargetPulse

This guide will help you deploy your TargetPulse website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest and recommended way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (Optional)
   - Go to Project Settings > Environment Variables
   - Add any needed variables from `.env.example`

4. **Custom Domain** (Optional)
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS settings as instructed

### Automatic Deployments
- Every push to `main` branch will trigger a new deployment
- Pull requests get preview deployments automatically

---

## 📦 Deploy to Netlify

### Steps:

1. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x or higher

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Configure build settings
   - Deploy

### netlify.toml Configuration
Create a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## ☁️ Deploy to AWS Amplify

### Steps:

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Deploy**
   ```bash
   amplify add hosting
   amplify publish
   ```

4. **Via AWS Console**
   - Go to AWS Amplify Console
   - Connect your repository
   - Configure build settings
   - Deploy

### Build Settings
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## 🐳 Deploy with Docker

### Dockerfile
```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run
```bash
docker build -t targetpulse .
docker run -p 3000:3000 targetpulse
```

### Docker Compose
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

---

## 🌐 Deploy to DigitalOcean App Platform

### Steps:

1. **Create App**
   - Go to DigitalOcean Dashboard
   - Click "Create" > "Apps"
   - Connect GitHub repository

2. **Configure Build**
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

3. **Deploy**
   - Click "Next" and review settings
   - Click "Create Resources"

---

## 📋 Pre-Deployment Checklist

Before deploying to production, make sure you've:

- [ ] Updated all placeholder content
- [ ] Replaced Unsplash images with your own
- [ ] Configured environment variables
- [ ] Added your custom domain
- [ ] Set up Google Analytics (optional)
- [ ] Tested contact form functionality
- [ ] Verified all links work
- [ ] Optimized images for production
- [ ] Tested on mobile devices
- [ ] Checked SEO meta tags
- [ ] Verified sitemap.xml is accessible
- [ ] Set up SSL certificate (usually automatic)
- [ ] Configure error monitoring (optional)

---

## 🔧 Environment Variables

Make sure to set these in your hosting platform:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
CONTACT_EMAIL=hello@yourdomain.com
```

---

## 📊 Post-Deployment

After deployment:

1. **Test the site thoroughly**
   - Check all pages and sections
   - Test forms and interactions
   - Verify responsive design

2. **Set up monitoring**
   - Google Analytics
   - Google Search Console
   - Error tracking (Sentry, etc.)

3. **Submit to search engines**
   - Submit sitemap to Google Search Console
   - Submit to Bing Webmaster Tools

4. **Performance optimization**
   - Test with Google PageSpeed Insights
   - Test with Lighthouse
   - Optimize based on recommendations

---

## 🆘 Troubleshooting

### Build Errors
- Check Node.js version (18.x or higher)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`

### Environment Variables
- Make sure all required variables are set
- Check variable names (NEXT_PUBLIC_ prefix for client-side)

### Image Loading Issues
- Verify image URLs are accessible
- Check Next.js image domains configuration

### 404 Errors
- Ensure all routes are properly defined
- Check file naming conventions

---

## 📞 Support

If you need help with deployment, contact:
- Email: hello@targetpulse.com
- GitHub Issues: [Create an issue](https://github.com/hassaanali723/targetpulse-site/issues)

---

Happy Deploying! 🚀

