# 🚀 Quick Start Guide

Get your TargetPulse website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and more.

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your site!

## Step 3: Customize Your Content

### Update Basic Info

1. **Company Name & Logo**
   - Edit `components/Navbar.tsx` (line 30-35)
   - Edit `components/Footer.tsx` (line 13-18)

2. **Hero Section**
   - Edit `components/Hero.tsx`
   - Change headline, subheadline, and CTA buttons

3. **Contact Information**
   - Edit `components/Contact.tsx` (email, phone, address)
   - Edit `components/Footer.tsx` (social media links)

### Replace Images

1. Add your images to `/public/images/`
2. Update portfolio images in `components/Portfolio.tsx`
3. Replace placeholder images with your own

### Update SEO

1. Edit meta tags in `app/layout.tsx`
2. Update company info in `lib/structuredData.ts`
3. Change base URL in `app/sitemap.ts`

## Step 4: Test Your Changes

1. Check all sections scroll correctly
2. Test on mobile (resize browser)
3. Test contact form
4. Verify all links work

## Step 5: Build for Production

```bash
npm run build
npm run start
```

This creates an optimized production build.

## Step 6: Deploy

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import to Vercel via their dashboard.

## 📋 Customization Checklist

- [ ] Update company name and logo
- [ ] Change colors in `tailwind.config.ts`
- [ ] Update hero headline and description
- [ ] Add your services in Services section
- [ ] Add your portfolio case studies
- [ ] Update process steps
- [ ] Change statistics/metrics
- [ ] Update contact information
- [ ] Add social media links
- [ ] Replace all images
- [ ] Update SEO meta tags
- [ ] Test on mobile devices
- [ ] Deploy to production

## 🎨 Quick Color Change

Want to change the brand colors? Edit `tailwind.config.ts`:

```typescript
primary: {
  500: '#YOUR_COLOR',  // Main brand color
},
accent: {
  500: '#YOUR_COLOR',  // Accent color
}
```

## 📖 More Resources

- **Full Documentation**: See `README.md`
- **Customization Guide**: See `CUSTOMIZATION.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Contributing**: See `CONTRIBUTING.md`

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
rm -rf .next
npm run build
```

## 💡 Pro Tips

1. Use `npm run dev` during development for hot reload
2. Keep `node_modules` and `.next` in `.gitignore`
3. Test on actual mobile devices before deploying
4. Use Lighthouse in Chrome DevTools to check performance
5. Add Google Analytics after deployment

## 🎉 You're Ready!

Your TargetPulse website is now ready to customize and deploy. If you need help, check the documentation or create an issue on GitHub.

---

**Need more help?** Email: hello@targetpulse.com

Happy building! 🚀

