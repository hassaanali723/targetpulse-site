import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import JsonLd from '@/components/JsonLd'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { ZAPIER_APPS } from '@/lib/zapierApps'

// One-screen Italian hub. The 73 per-app Zapier pages and the n8n page are
// English only (no Italian demand for them); this page explains the three
// routes in and links to them.

const PATH = '/it/integrazioni'
const DESC =
  'Integrazioni per la verifica email: Zapier, n8n, HubSpot, Mailchimp e Google Sheets. Verifica gli indirizzi dentro gli strumenti che già usi, senza codice.'

export const metadata: Metadata = {
  title: { absolute: 'Integrazioni Verifica Email: Zapier, n8n, CRM | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('integrations') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Integrazioni per la verifica email',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
}

const routes = [
  {
    title: 'Zapier',
    body: `Collega Giggal.ai a più di 8.000 app senza scrivere codice: HubSpot, Mailchimp, Google Sheets, Pipedrive, Typeform e le altre. Ogni nuovo contatto viene verificato appena entra. Le guide per le ${ZAPIER_APPS.length} app sono in inglese.`,
    href: '/integrations/zapier',
    cta: 'Guida Zapier (in inglese)',
  },
  {
    title: 'n8n',
    body: 'Per chi automatizza con n8n: un nodo HTTP verso la nostra API verifica gli indirizzi dentro il flusso e instrada i risultati dove servono.',
    href: '/integrations/n8n',
    cta: 'Guida n8n (in inglese)',
  },
  {
    title: 'REST API',
    body: 'Verifica singola e in blocco, risoluzione catch-all, crediti e risultati in JSON, con autenticazione tramite chiave API. Tutto quello che può fare una richiesta HTTP può verificare email con Giggal.',
    href: '/public/docs',
    cta: 'Documentazione API (in inglese)',
  },
]

export default function IntegrazioniPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd data={breadcrumbIt([{ name: 'Integrazioni', path: PATH }])} />
      <NavbarIt />

      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          Integrazioni per la verifica email negli{' '}
          <span className="gradient-text">strumenti che già usi</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Collega il verificatore catch-all di Giggal.ai alla tua piattaforma di email marketing, al
          CRM, ai fogli di calcolo e agli strumenti di outreach. Verifica i nuovi contatti in tempo
          reale, tieni le liste pulite in automatico e ferma i rimbalzi prima che avvengano.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {routes.map((r) => (
            <div key={r.title} className="bg-white border-2 border-slate-200 rounded-3xl p-7 flex flex-col gap-4 card-vivid-shadow">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">{r.title}</h2>
              <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed flex-1">{r.body}</p>
              <Link href={r.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700">
                {r.cta} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Non trovi il tuo strumento?</h2>
            <p className="text-slate-300 text-[15px] leading-relaxed max-w-xl font-medium">
              Qualsiasi sistema che invia richieste HTTP può verificare email con Giggal.ai. Scrivici
              e ti indichiamo la strada più corta.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/it/contatti" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-black text-[14px] hover:bg-slate-100 transition-colors">
              Contattaci <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBandIt />
      <FooterIt />
    </main>
  )
}
