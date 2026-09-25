import type { Metadata } from 'next'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import JsonLd from '@/components/JsonLd'
import { itemListLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { hreflangAlternates, CLUSTERS } from '@/lib/i18n/clusters'
import { getAllPosts } from '@/lib/blog'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { BLOG_STRINGS } from '@/lib/i18n/blog'
import PostGrid, { pageSlice, totalBlogPages } from '@/components/blog/PostGrid'
import { blogCardData } from '@/lib/blogCards'

// Localized blog hub, one per language (the Italian layout of plan 08).
export function blogIndexMetadata(locale: L10nLocale): Metadata {
  const b = BLOG_STRINGS[locale]
  const path = CLUSTERS.blog[locale]
  return {
    title: { absolute: b.hubTitle },
    description: b.hubDesc,
    alternates: { canonical: path, languages: hreflangAlternates('blog') },
    openGraph: {
      siteName: 'Giggal.ai',
      locale: getStrings(locale).ogLocale,
      title: b.hubOgTitle,
      description: b.hubDesc,
      url: `https://giggal.ai${path}`,
      type: 'website',
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
    },
  }
}

export default function BlogIndexL10n({ locale, page = 1 }: { locale: L10nLocale; page?: number }) {
  const b = BLOG_STRINGS[locale]
  const s = getStrings(locale)
  const path = CLUSTERS.blog[locale]
  const posts = getAllPosts(locale)
  const totalPages = totalBlogPages(posts.length)
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n(locale, [{ name: 'Blog', path }])} />
      <JsonLd
        data={itemListLd({
          id: `https://giggal.ai${path}#posts`,
          name: b.listName,
          items: posts.map((p) => ({ name: p.title, url: `https://giggal.ai${path}/${p.slug}`, description: p.description })),
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale={locale} />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">{b.h1}</h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">{b.intro}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <PostGrid
          posts={pageSlice(posts, page).map((p) => blogCardData(p, path, s.formatDate))}
          page={page}
          totalPages={totalPages}
          basePath={path}
          labels={{
            readMore: b.readMore,
            prev: b.prevPage,
            next: b.nextPage,
            nav: b.paginationAria,
          }}
        />
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}

// Metadata for pages 2..n of a localized hub. Page 1 keeps the hub URL and its
// hreflang cluster; later pages are self-canonical and noindex, reachable
// through the pagination links.
export function blogIndexPagedMetadata(locale: L10nLocale, page: number): Metadata {
  const b = BLOG_STRINGS[locale]
  const path = CLUSTERS.blog[locale]
  return {
    title: { absolute: `${b.hubOgTitle} (${page}) | Giggal.ai` },
    description: b.hubDesc,
    alternates: { canonical: `${path}/page/${page}` },
    robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  }
}

/** The page numbers 2..n that a locale's hub needs, for generateStaticParams. */
export function blogPagedParams(locale: L10nLocale): { page: string }[] {
  const total = totalBlogPages(getAllPosts(locale).length)
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ page: String(i + 2) }))
}
