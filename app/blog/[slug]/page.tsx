import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { articleLd, breadcrumbTrailLd } from '@/lib/schema'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { ArrowLeft } from 'lucide-react'

export const dynamicParams = false

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}

// Slightly varied CTA headline per article; the offer line is fixed in AltCtaBand.
const CTA_HEADLINE: Record<string, string> = {
  'what-is-a-catch-all-email-address': 'See what your catch-all addresses really are',
  'why-cold-emails-bounce': 'Cut your bounce rate before the next send',
  'good-bounce-rate-for-cold-email': 'Get your bounce rate under control',
  'what-is-a-secure-email-gateway': 'Verify addresses behind email gateways',
  'what-does-risky-mean-in-email-verification': 'Turn Risky rows into real answers',
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const url = `https://giggal.ai/blog/${post.slug}`
  const ogImage = post.image ? `https://giggal.ai${post.image}` : undefined
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      siteName: 'Giggal.ai',
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          datePublished: post.date,
          image: post.image,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All articles
        </Link>

        {post.image && (
          <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 card-vivid-shadow">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-slate-900">
          {post.title}
        </h1>

        <div className="mt-4 text-sm text-slate-500 font-medium">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <div
          className="blog-prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <AltCtaBand headline={CTA_HEADLINE[post.slug] || 'Verify your list with Giggal.ai'} />

      <Footer />
    </main>
  )
}
