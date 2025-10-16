# Customization Guide

This guide will help you customize the TargetPulse website to match your brand and content.

## 🎨 Branding

### 1. Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',    // Lightest shade
    100: '#e0f2fe',
    200: '#b9e6fe',
    300: '#7cd4fd',
    400: '#36bffa',
    500: '#0ba5ec',   // Main brand color
    600: '#0086c9',
    700: '#026aa2',
    800: '#065986',
    900: '#0b4a6f',   // Darkest shade
  },
  accent: {
    // Same structure for accent color
  },
}
```

**Quick tip**: Use a color palette generator like [Tailwind Color Shades](https://javisperez.github.io/tailwindcolorshades/)

### 2. Logo

Replace the logo in `components/Navbar.tsx` and `components/Footer.tsx`:

```typescript
// Current placeholder
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
  <span className="text-white font-bold text-xl">TP</span>
</div>

// Replace with your logo image
<Image src="/logo.png" alt="Your Brand" width={40} height={40} />
```

### 3. Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
```

## 📝 Content Customization

### Hero Section (`components/Hero.tsx`)

```typescript
// Update headline
<h1>Your Custom Headline</h1>

// Update subheadline
<p>Your custom value proposition</p>

// Update badge text
<span>Your badge text</span>
```

### Services Section (`components/Services.tsx`)

Add/edit services in the `services` array:

```typescript
const services = [
  {
    icon: <YourIcon className="w-8 h-8" />,
    title: 'Your Service Name',
    description: 'Your service description',
    gradient: 'from-blue-500 to-cyan-500',
  },
  // Add more services...
]
```

### Portfolio Section (`components/Portfolio.tsx`)

Replace with your own case studies:

```typescript
const portfolioItems = [
  {
    title: 'Your Project Name',
    industry: 'Your Industry',
    image: '/your-image.jpg',  // Use your own images
    results: {
      openRate: 'XX%',
      responseRate: 'XX%',
      meetings: 'XXX',
      revenue: '$XXX',
    },
    description: 'Your project description',
    testimonial: 'Client testimonial',
    author: 'Client Name, Title',
  },
]
```

### Process Section (`components/Process.tsx`)

Customize your workflow steps:

```typescript
const steps = [
  {
    number: '01',
    title: 'Your Step Name',
    description: 'Step description',
    points: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4',
    ],
  },
]
```

### Statistics (`components/Stats.tsx`)

Update your metrics:

```typescript
const stats = [
  { value: 98, label: 'Your Metric', suffix: '%' },
  { value: 500, label: 'Another Metric', suffix: '+' },
]
```

## 🖼️ Images

### Replace Portfolio Images

1. Add your images to `/public/images/`
2. Update image paths in `components/Portfolio.tsx`:

```typescript
image: '/images/your-project-1.jpg'
```

### Optimize Images

Use Next.js Image component for optimization:

```typescript
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={90}
  priority={false}
/>
```

### Favicon and App Icons

Replace these files in `/public/`:
- `favicon.ico`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## 📞 Contact Information

### Update Contact Details

In `components/Contact.tsx`:

```typescript
// Email
<p>your-email@domain.com</p>

// Phone
<p>+1 (XXX) XXX-XXXX</p>

// Address
<p>Your Street Address</p>
<p>Your City, State ZIP</p>
```

### Update Footer

In `components/Footer.tsx`:

```typescript
// Company description
<p>Your company description</p>

// Social media links
<a href="https://linkedin.com/company/yourcompany">
<a href="https://twitter.com/yourcompany">
// etc.
```

## 🔍 SEO Customization

### Meta Tags

Update in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Company - Your Tagline',
  description: 'Your company description',
  keywords: 'your, keywords, here',
  // ... other metadata
}
```

### Structured Data

Update in `lib/structuredData.ts`:

```typescript
export const organizationSchema = {
  '@type': 'Organization',
  name: 'Your Company Name',
  url: 'https://yourwebsite.com',
  // ... update all fields
}
```

### Sitemap

Update URLs in `app/sitemap.ts`:

```typescript
const baseUrl = 'https://yourwebsite.com'
```

## 🎭 Animations

### Modify Animation Speed

In `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 1s ease-out',  // Change 1s to your preferred duration
  'slide-up': 'slideUp 0.8s ease-out',
}
```

### Disable Animations

To disable specific animations, remove or comment out animation classes:

```typescript
// Before
<div className="animate-slide-up">

// After (no animation)
<div>
```

## 🎨 Custom Components

### Add New Section

1. Create new component file:

```typescript
// components/YourSection.tsx
export default function YourSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. Import in `app/page.tsx`:

```typescript
import YourSection from '@/components/YourSection'

export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <YourSection />
    </main>
  )
}
```

## 📱 Responsive Design

### Breakpoints

Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Usage:
```typescript
<div className="text-sm md:text-base lg:text-lg">
```

## 🔧 Advanced Customization

### Add Custom Utility Classes

In `app/globals.css`:

```css
@layer utilities {
  .your-custom-class {
    /* Your styles */
  }
}
```

### Extend Tailwind Theme

In `tailwind.config.ts`:

```typescript
extend: {
  spacing: {
    '128': '32rem',
  },
  borderRadius: {
    'extra-large': '2rem',
  },
}
```

## 🌐 Multi-language Support

To add multi-language support:

1. Install next-intl:
```bash
npm install next-intl
```

2. Create translation files in `/messages/`
3. Follow Next.js internationalization docs

## 📊 Analytics Integration

### Google Analytics

Add to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🎯 Tips

1. **Test after every change**: Run `npm run dev` and check in browser
2. **Use version control**: Commit changes regularly
3. **Backup first**: Keep original files before major changes
4. **Mobile first**: Always test responsive design
5. **Performance**: Keep images optimized and bundle size small

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

## 🆘 Need Help?

- Check documentation first
- Search existing GitHub issues
- Create new issue with detailed description
- Email: hello@targetpulse.com

---

Happy Customizing! 🎨

