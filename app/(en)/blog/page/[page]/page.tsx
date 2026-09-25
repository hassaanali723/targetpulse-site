import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd } from '@/lib/schema'
import { getAllPosts } from '@/lib/blog'
import PostGrid, { pageSlice, totalBlogPages } from '@/components/blog/PostGrid'
import { blogCardData, EN_BLOG_LABELS } from '@/lib/blogCards'

// Pages 2..n of the blog index. Page 1 stays at /blog, which keeps the hub's
// canonical URL and its hreflang cluster untouched. These pages are
// self-canonical and stay out of the sitemap: they are crawlable through the
// pagination links, and the posts themselves are what we want indexed.
export const dynamicParams = false

export function generateStaticParams() {
  const total = totalBlogPages(getAllPosts().length)
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ page: String(i + 2) }))
}

export function generateMetadata({ params }: { params: { page: string } }): Metadata {
  const page = Number(params.page)
  return {
    title: { absolute: `Email Verification & Deliverability Blog, page ${page} | Giggal.ai` },
    description:
      'Guides on catch-all addresses, secure email gateways, bounce rates and email verification.',
    alternates: { canonical: `/blog/page/${page}` },
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  }
}

export default function BlogIndexPagedPage({ params }: { params: { page: string } }) {
  const page = Number(params.page)
  const posts = getAllPosts()
  const totalPages = totalBlogPages(posts.length)
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound()

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Blog', '/blog')} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
            Email verification and deliverability guides
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Page {page} of {totalPages}.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <PostGrid
          posts={pageSlice(posts, page).map((p) => blogCardData(p, '/blog'))}
          page={page}
          totalPages={totalPages}
          basePath="/blog"
          labels={EN_BLOG_LABELS}
        />
      </section>

      <Footer />
    </main>
  )
}
