import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd } from '@/lib/schema'
import { getAllPosts } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'

const DESC =
  'Guides on catch-all addresses, secure email gateways, bounce rates and email verification. Plain explanations for people cleaning real lists.'

export const metadata: Metadata = {
  title: { absolute: 'Blog | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Giggal.ai Blog',
    description: DESC,
    url: 'https://giggal.ai/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giggal.ai Blog',
    description: DESC,
  },
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Blog', '/blog')} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Blog
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Plain explanations of catch-all addresses, secure email gateways, bounce rates and what
          your verification results actually mean.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <ul className="divide-y divide-slate-200 border-t border-slate-200">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-7 hover:bg-white/60 -mx-4 px-4 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-2 text-[13px] text-slate-500 font-semibold">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2 className="mt-1.5 text-xl md:text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
                  {post.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600">
                  Read the article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  )
}
