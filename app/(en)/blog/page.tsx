import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd, itemListLd } from '@/lib/schema'
import { getAllPosts } from '@/lib/blog'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import PostGrid, { pageSlice, totalBlogPages } from '@/components/blog/PostGrid'
import { blogCardData, EN_BLOG_LABELS } from '@/lib/blogCards'

const DESC =
  'Guides on catch-all addresses, secure email gateways, bounce rates and email verification. Plain explanations for people cleaning real lists.'

export const metadata: Metadata = {
  title: { absolute: 'Email Verification & Deliverability Blog | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/blog', languages: hreflangAlternates('blog') },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Email Verification & Deliverability Blog',
    description: DESC,
    url: 'https://giggal.ai/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Verification & Deliverability Blog',
    description: DESC,
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  const totalPages = totalBlogPages(posts.length)

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Blog', '/blog')} />
      {/* The index as an ordered list. Without this a model reading /blog sees
          a grid of cards and has to guess what the site actually covers. */}
      <JsonLd
        data={itemListLd({
          id: 'https://giggal.ai/blog#posts',
          name: 'Giggal.ai guides to catch-all verification and deliverability',
          items: posts.map((p) => ({
            name: p.title,
            url: `https://giggal.ai/blog/${p.slug}`,
            description: p.description,
          })),
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
            Email verification and deliverability guides
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Plain explanations of catch-all addresses, secure email gateways, bounce rates and what
            your verification results actually mean.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <PostGrid
          posts={pageSlice(posts, 1).map((p) => blogCardData(p, '/blog'))}
          page={1}
          totalPages={totalPages}
          basePath="/blog"
          labels={EN_BLOG_LABELS}
        />
      </section>

      <Footer />
    </main>
  )
}
