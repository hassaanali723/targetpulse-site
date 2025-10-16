# TargetPulse - Professional Cold Email Marketing Website 🚀

A stunning, modern, and SEO-optimized website built with Next.js 14 for a cold email marketing agency. Features beautiful animations, portfolio sliders, process flow diagrams, and a comprehensive contact system.

![TargetPulse](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Beautiful UI/UX
- **Modern Design**: Gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive**: Fully responsive design that looks great on all devices
- **Animated Components**: Framer Motion animations and custom CSS animations
- **Interactive Elements**: Hover effects, smooth transitions, and engaging user interactions

### 📊 Key Sections
1. **Hero Section**: Eye-catching landing area with animated background and clear CTAs
2. **Live Statistics**: Animated counters showing key performance metrics
3. **Services**: Comprehensive showcase of all services with icon cards
4. **Process Flow**: Step-by-step visualization of the cold email marketing process
5. **Portfolio Slider**: Auto-rotating carousel showcasing successful campaigns and testimonials
6. **Benefits**: Detailed benefits section with statistics and features
7. **Call-to-Action**: Compelling CTA section with value propositions
8. **Contact Form**: Fully functional contact form with validation
9. **Footer**: Complete footer with links, newsletter signup, and social media

### 🔍 SEO Optimization
- **Meta Tags**: Comprehensive meta tags for search engines and social media
- **Open Graph**: Full Open Graph support for social sharing
- **Twitter Cards**: Twitter card metadata for better link previews
- **Structured Data**: JSON-LD schema markup for better search visibility
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Properly configured robots file
- **Semantic HTML**: Clean, semantic HTML structure
- **Performance**: Optimized for Core Web Vitals

### 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, CSS animations
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **SEO**: Next.js Metadata API

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hassaanali723/targetpulse-site.git
cd targetpulse-site
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
targetpulse-site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section with animations
│   ├── Stats.tsx         # Animated statistics
│   ├── Services.tsx      # Services showcase
│   ├── Process.tsx       # Process flow diagram
│   ├── Portfolio.tsx     # Portfolio slider
│   ├── Benefits.tsx      # Benefits section
│   ├── CTA.tsx           # Call-to-action
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── lib/                   # Utility functions
│   └── structuredData.ts # SEO structured data
├── public/               # Static assets
│   └── manifest.json     # PWA manifest
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  },
}
```

### Content
Update content in component files:
- **Services**: Edit `components/Services.tsx`
- **Portfolio**: Edit `components/Portfolio.tsx`
- **Process**: Edit `components/Process.tsx`
- **Contact Info**: Edit `components/Contact.tsx` and `components/Footer.tsx`

### SEO
Update SEO settings in:
- `app/layout.tsx` - Meta tags and Open Graph
- `lib/structuredData.ts` - Structured data schemas
- `app/sitemap.ts` - Sitemap configuration

### Images
Replace placeholder images with your own:
- Update Unsplash URLs in `components/Portfolio.tsx`
- Add your logo and favicons to `/public` directory
- Update image references in components

## 📱 Features Breakdown

### Navigation
- Sticky navbar with scroll detection
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Gradient logo and CTA button

### Animations
- Canvas-based particle animation in hero
- Floating gradient orbs
- Slide-up and fade-in animations
- Animated statistics counters
- Auto-rotating portfolio carousel

### Forms
- Contact form with validation
- Success/error messaging
- Form state management
- Placeholder API integration ready

### Performance
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size
- Fast page loads

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://targetpulse.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📊 Analytics

To add Google Analytics:
1. Get your GA4 measurement ID
2. Add to `app/layout.tsx`
3. Import and configure analytics script

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use Next.js configuration
- **Docker**: Create Dockerfile with Node.js image

## 📈 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt tags for images
- ✅ Fast loading speed
- ✅ Mobile-friendly
- ✅ HTTPS ready

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Hassaan Ali**
- GitHub: [@hassaanali723](https://github.com/hassaanali723)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- Unsplash for placeholder images

## 📞 Support

For support, email hello@targetpulse.com or open an issue on GitHub.

---

Made with ❤️ using Next.js and Tailwind CSS

