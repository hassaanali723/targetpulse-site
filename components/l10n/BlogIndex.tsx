import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import JsonLd from '@/components/JsonLd'
import { itemListLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { hreflangAlternates, CLUSTERS } from '@/lib/i18n/clusters'
import { getAllPosts } from '@/lib/blog'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'
import { BLOG_STRINGS } from '@/lib/i18n/blog'

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

export default function BlogIndexL10n({ locale }: { locale: L10nLocale }) {
  const b = BLOG_STRINGS[locale]
  const s = getStrings(locale)
  const path = CLUSTERS.blog[locale]
  const posts = getAllPosts(locale)
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

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">{b.h1}</h1>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">{b.intro}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <ul className="divide-y divide-slate-200 border-t border-slate-200">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`${path}/${post.slug}`} className="group block py-7 hover:bg-white/60 -mx-4 px-4 rounded-xl transition-colors">
                <div className="flex items-center gap-2 text-[13px] text-slate-500 font-semibold">
                  <time dateTime={post.date}>{s.formatDate(post.date)}</time>
                </div>
                <h2 className="mt-1.5 text-xl md:text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">{post.title}</h2>
                <p className="mt-2 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">{post.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600">
                  {b.readMore}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FooterL10n locale={locale} />
    </main>
  )
}
