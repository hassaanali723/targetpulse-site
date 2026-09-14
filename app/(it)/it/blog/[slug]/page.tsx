import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Home, ChevronRight } from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import JsonLd from '@/components/JsonLd'
import TableOfContents from '@/components/blog/TableOfContents'
import { ORG_ID } from '@/lib/schema'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'
import { CLUSTERS, hreflangAlternates, type ClusterId } from '@/lib/i18n/clusters'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { formatDateIt } from '@/lib/i18n/it'

export const dynamicParams = false

export function generateStaticParams() {
  return getPostSlugs('it').map((slug) => ({ slug }))
}

// The hreflang cluster this post belongs to, if it has an English original.
function clusterFor(slug: string): ClusterId | undefined {
  const path = `/it/blog/${slug}`
  for (const [id, c] of Object.entries(CLUSTERS)) {
    if ((c as { it?: string }).it === path) return id as ClusterId
  }
  return undefined
}

const CTA_HEADLINE: Record<string, string> = {
  'cos-e-un-indirizzo-email-catch-all': 'Scopri cosa sono davvero i tuoi indirizzi catch-all',
  'perche-le-email-rimbalzano': 'Abbassa il tasso di rimbalzo prima del prossimo invio',
  'quanto-sono-precisi-gli-strumenti-di-verifica-email': 'Fai il test sulla tua lista, gratis',
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug, 'it')
  if (!post) return {}
  const url = `https://giggal.ai/it/blog/${post.slug}`
  const ogImage = post.image ? `https://giggal.ai${post.image}` : 'https://giggal.ai/og-card.png'
  const cluster = clusterFor(post.slug)
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/it/blog/${post.slug}`,
      ...(cluster ? { languages: hreflangAlternates(cluster) } : {}),
    },
    openGraph: {
      siteName: 'Giggal.ai',
      locale: 'it_IT',
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      images: [{ url: ogImage }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [ogImage] },
  }
}

export default function BlogArticleItPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, 'it')
  if (!post) notFound()

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbIt([
          { name: 'Blog', path: '/it/blog' },
          { name: post.title, path: `/it/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `https://giggal.ai/it/blog/${post.slug}#article`,
          headline: post.title,
          description: post.description,
          inLanguage: 'it',
          ...(post.image ? { image: [`https://giggal.ai${post.image}`] } : {}),
          datePublished: post.date,
          dateModified: post.updated || post.date,
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://giggal.ai/it/blog/${post.slug}` },
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      <article className={`mx-auto px-6 pt-28 md:pt-32 pb-16 ${post.toc.length >= 4 ? 'max-w-6xl' : 'max-w-3xl'}`}>
        <nav aria-label="Percorso" className="blog-breadcrumb">
          <Link href="/it">
            <Home aria-hidden="true" />
            Pagina iniziale
          </Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <Link href="/it/blog">Blog</Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <span className="current" aria-current="page">{post.title}</span>
        </nav>

        <div className={post.toc.length >= 4 ? 'mt-6 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16' : 'mt-6'}>
          {post.toc.length >= 4 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-auto pr-2">
                <TableOfContents items={post.toc} variant="side" title="In questa pagina" ariaLabel="Indice" />
              </div>
            </aside>
          )}

          <div className="min-w-0">
            {post.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 card-vivid-shadow">
                <Image src={post.image} alt={post.imageAlt || post.title} fill priority sizes="(max-width: 1024px) 100vw, 720px" className="object-cover" />
              </div>
            )}

            <h1 className="mt-8 text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-slate-900">{post.title}</h1>

            <div className="mt-4 text-sm text-slate-500 font-medium">
              <time dateTime={post.date}>{formatDateIt(post.date)}</time>
            </div>

            {post.toc.length >= 4 && (
              <div className="lg:hidden mt-8">
                <TableOfContents items={post.toc} variant="box" title="In questa pagina" ariaLabel="Indice" />
              </div>
            )}

            <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </div>
      </article>

      <CtaBandIt headline={CTA_HEADLINE[post.slug] || 'Verifica la tua lista con Giggal.ai'} />
      <FooterIt />
    </main>
  )
}
