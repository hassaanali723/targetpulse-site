import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Home, ChevronRight } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import JsonLd from '@/components/JsonLd'
import TableOfContents from '@/components/blog/TableOfContents'
import { ORG_ID } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { CLUSTERS, HREFLANG_CODE, hreflangAlternates, type Cluster, type ClusterId } from '@/lib/i18n/clusters'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { BLOG_STRINGS } from '@/lib/i18n/blog'

// Localized blog article, shared by every language route.

function clusterFor(locale: L10nLocale, slug: string): ClusterId | undefined {
  const path = `${CLUSTERS.blog[locale]}/${slug}`
  for (const [id, c] of Object.entries(CLUSTERS)) {
    if ((c as Cluster)[locale] === path) return id as ClusterId
  }
  return undefined
}

export function blogArticleParams(locale: L10nLocale) {
  return getPostSlugs(locale).map((slug) => ({ slug }))
}

export function blogArticleMetadata(locale: L10nLocale, slug: string): Metadata {
  const post = getPostBySlug(slug, locale)
  if (!post) return {}
  const path = `${CLUSTERS.blog[locale]}/${post.slug}`
  const ogImage = post.image ? `https://giggal.ai${post.image}` : 'https://giggal.ai/og-card.png'
  const cluster = clusterFor(locale, post.slug)
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path, ...(cluster ? { languages: hreflangAlternates(cluster) } : {}) },
    openGraph: {
      siteName: 'Giggal.ai',
      locale: getStrings(locale).ogLocale,
      title: post.title,
      description: post.description,
      url: `https://giggal.ai${path}`,
      type: 'article',
      images: [{ url: ogImage }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [ogImage] },
  }
}

export default function BlogArticleL10n({ locale, slug }: { locale: L10nLocale; slug: string }) {
  const post = getPostBySlug(slug, locale)
  if (!post) notFound()
  const b = BLOG_STRINGS[locale]
  const s = getStrings(locale)
  const hub = CLUSTERS.blog[locale]
  const path = `${hub}/${post.slug}`
  const wide = post.toc.length >= 4

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: 'Blog', path: hub }, { name: post.title, path }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `https://giggal.ai${path}#article`,
          headline: post.title,
          description: post.description,
          inLanguage: HREFLANG_CODE[locale],
          ...(post.image ? { image: [`https://giggal.ai${post.image}`] } : {}),
          datePublished: post.date,
          dateModified: post.updated || post.date,
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://giggal.ai${path}` },
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <article className={`mx-auto px-6 pt-28 md:pt-32 pb-16 ${wide ? 'max-w-6xl' : 'max-w-3xl'}`}>
        <nav aria-label={b.breadcrumbAria} className="blog-breadcrumb">
          <Link href={s.home}>
            <Home aria-hidden="true" />
            {b.home}
          </Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <Link href={hub}>Blog</Link>
          <ChevronRight aria-hidden="true" className="sep" />
          <span className="current" aria-current="page">{post.title}</span>
        </nav>

        <div className={wide ? 'mt-6 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16' : 'mt-6'}>
          {wide && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-auto pr-2">
                <TableOfContents items={post.toc} variant="side" title={b.tocTitle} ariaLabel={b.tocAria} />
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
              <time dateTime={post.date}>{s.formatDate(post.date)}</time>
            </div>

            {wide && (
              <div className="lg:hidden mt-8">
                <TableOfContents items={post.toc} variant="box" title={b.tocTitle} ariaLabel={b.tocAria} />
              </div>
            )}

            <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </div>
      </article>

      <CtaBandL10n locale={locale} headline={post.cta || b.defaultCta} />
      <FooterL10n locale={locale} />
    </main>
  )
}
