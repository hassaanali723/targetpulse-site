import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import JsonLd from '@/components/JsonLd'
import { itemListLd } from '@/lib/schema'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { getAllPosts } from '@/lib/blog'
import { formatDateIt } from '@/lib/i18n/it'

const PATH = '/it/blog'
const DESC =
  'Guide in italiano su indirizzi catch-all, gateway di sicurezza, tassi di rimbalzo e verifica email. Spiegazioni chiare per chi pulisce liste vere.'

export const metadata: Metadata = {
  title: { absolute: 'Blog su Verifica Email e Deliverability | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('blog') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Blog su verifica email e deliverability',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
}

export default function BlogItPage() {
  const posts = getAllPosts('it')
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbIt([{ name: 'Blog', path: PATH }])} />
      <JsonLd
        data={itemListLd({
          id: `https://giggal.ai${PATH}#posts`,
          name: 'Guide Giggal.ai su verifica catch-all e deliverability',
          items: posts.map((p) => ({ name: p.title, url: `https://giggal.ai/it/blog/${p.slug}`, description: p.description })),
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">Guide su verifica email e deliverability</h1>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Spiegazioni chiare su indirizzi catch-all, gateway di sicurezza, tassi di rimbalzo e cosa
          significano davvero i risultati di una verifica. Le altre guide sono disponibili{' '}
          <Link href="/blog" hrefLang="en" className="text-indigo-600 font-bold hover:underline">in inglese</Link>.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <ul className="divide-y divide-slate-200 border-t border-slate-200">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/it/blog/${post.slug}`} className="group block py-7 hover:bg-white/60 -mx-4 px-4 rounded-xl transition-colors">
                <div className="flex items-center gap-2 text-[13px] text-slate-500 font-semibold">
                  <time dateTime={post.date}>{formatDateIt(post.date)}</time>
                </div>
                <h2 className="mt-1.5 text-xl md:text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors">{post.title}</h2>
                <p className="mt-2 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">{post.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600">
                  Leggi l&apos;articolo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FooterIt />
    </main>
  )
}
