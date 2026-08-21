import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd } from '@/lib/schema'
import IntegrationsGrid from '@/components/integrations/IntegrationsGrid'
import { SIGNUP_URL } from '@/lib/integrations'

export const metadata: Metadata = {
  title: 'Email Verification Integrations',
  description:
    'Connect Giggal.ai to Zapier, Mailchimp, SendGrid, Clay, Google Sheets and more. Verify emails and resolve catch-all addresses inside the tools you already use, no code required.',
  alternates: { canonical: '/integrations' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Email Verification Integrations | Giggal.ai',
    description:
      'Connect the Giggal.ai catch-all email verifier to Zapier, Mailchimp, SendGrid, Clay, Google Sheets and more.',
    url: 'https://giggal.ai/integrations',
    type: 'website',
  },
}

export default function IntegrationsPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Integrations', '/integrations')} />
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          Verify Emails Inside the{' '}
          <span className="gradient-text">Tools You Already Use</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Connect Giggal.ai&apos;s catch-all email verifier to your email marketing platform,
          CRM, spreadsheets and outreach stack. Verify new leads in real time, keep lists
          clean automatically, and stop bounces before they happen.
        </p>
      </section>

      {/* Grid with search + filters */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <IntegrationsGrid />
      </section>

      {/* API fallback band */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-slate-950 text-white p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
              Don&apos;t see your tool?
            </h2>
            <p className="text-slate-300 text-[15px] leading-relaxed max-w-xl font-medium">
              Anything that can send an HTTP request can verify emails with Giggal.ai. Use the
              REST API for single, bulk and catch-all verification, or connect through Zapier&apos;s
              8,000+ app ecosystem.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/public/docs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-black text-[14px] hover:bg-slate-100 transition-colors"
            >
              API Reference
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-bold text-[14px] hover:bg-white/10 transition-colors"
            >
              Start free with 1,000 credits
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
