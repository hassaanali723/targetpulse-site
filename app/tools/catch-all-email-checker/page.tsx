import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd } from '@/lib/schema'
import { ArrowRight } from 'lucide-react'

const DESC =
  'Check whether an email on a catch-all domain is real. Most checkers stop at "catch-all" and leave you guessing. We return valid or invalid. Free, no signup.'

export const metadata: Metadata = {
  title: { absolute: 'Free Catch-All Email Checker | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/tools/catch-all-email-checker' },
  openGraph: {
    title: 'Free Catch-All Email Checker',
    description: DESC,
    url: 'https://giggal.ai/tools/catch-all-email-checker',
    type: 'website',
  },
  // Set explicitly so this route never inherits the homepage's Twitter strings.
  twitter: {
    card: 'summary_large_image',
    title: 'Free Catch-All Email Checker',
    description: DESC,
  },
}

// Single source of truth for the FAQ: rendered visibly AND emitted as JSON-LD.
const faqs: FaqItem[] = [
  {
    q: 'Does catch-all mean the address is fake?',
    a: 'No. A catch-all domain accepts mail for every address, real or not. The mailbox behind it might be perfectly active. Catch-all describes how the domain is configured, not whether a person is there.',
  },
  {
    q: 'How many checks do I get?',
    a: 'Five per day, no signup and no card. Each check runs a full verification, which is why the number is small. For a whole list, sign up and use your 1,000 free credits.',
  },
  {
    q: 'Is catch-all the same as accept-all?',
    a: 'Yes. Different tools use different words for the same setup. A domain configured to accept mail for any address is catch-all to some providers and accept-all to others.',
  },
  {
    q: 'Why do other checkers just say "catch-all" and stop?',
    a: 'Detecting that a domain is catch-all takes one lookup. Working out whether a specific mailbox exists behind it takes considerably more, so most free tools do the cheap part and leave the rest to you.',
  },
  {
    q: 'Can I check a whole list here?',
    a: 'Not on this page. Sign up for 1,000 free credits, no card required, and upload the list.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function CatchAllEmailCheckerPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Free Catch-All Email Checker', '/tools/catch-all-email-checker')} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Free{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            catch-all email checker
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Enter an email address on a catch-all domain and find out whether the mailbox actually
          exists. Most free checkers tell you the domain is catch-all and stop there.
        </p>
      </section>

      {/* ── THE TOOL ─────────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Five free checks a day. No signup, no card. Enter one address to run a live check.
        </p>
      </section>

      {/* ── WHAT CATCH-ALL DOES TO A CHECK ───────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What a catch-all domain does to a check</h2>
        <p className={proseP}>
          A checker verifies a mailbox by opening an SMTP conversation with the receiving server and
          naming the recipient. On most domains the server answers honestly: it accepts addresses
          that exist and rejects the ones that do not. A catch-all domain is set up to accept every
          recipient it is offered. Ask it about a real employee and it says yes. Ask it about a name
          you invented on the spot and it says yes to that too. The reply is identical either way, so
          the yes carries no information about the person behind the address. Administrators configure
          domains this way on purpose, often to avoid losing mail sent to a mistyped address or to
          route everything through a single gateway. The side effect is that the usual mailbox test
          goes quiet, and a checker that leans on it alone has nothing left to report but the label.
        </p>
      </section>

      {/* ── WHY FREE CHECKERS STOP ───────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Why most free checkers stop at &quot;catch-all&quot;</h2>
        <p className={proseP}>
          Detecting a catch-all domain is cheap. A tool looks up the domain&apos;s mail servers, opens
          one connection, and offers a random address that almost certainly does not exist. If the
          server accepts it, the domain accepts everything, and the tool has its answer in a single
          round trip. That is why nearly every free checker will readily tell you a domain is
          catch-all. Working out which mailboxes are real behind that domain is a different job. It
          takes more probes, more signals, and infrastructure that holds a clean sending reputation
          while it works, so most free tools stop at the label and hand the rest back to you. This
          checker runs the full verification instead, and that is why it is capped at a few checks a
          day.
        </p>
      </section>

      {/* ── WHAT TO DO WITH CATCH-ALL ADDRESSES ──────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What to do with catch-all addresses on a list</h2>
        <p className={proseP}>
          On a B2B list, catch-all addresses are rarely a rounding error. They often make up a large
          share of your contacts, because so many companies route mail through gateways that accept
          everything. They are not invalid. A good portion of them are real people you want to reach,
          which is why deleting the whole segment quietly throws away pipeline. The better move is to
          treat them as their own group. Pull the catch-all addresses out, verify them properly so
          each one gets a real result, and send only to the confirmed mailboxes. For a full list
          rather than one address at a time, you can{' '}
          <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
            verify catch-all &amp; risky emails
          </Link>{' '}
          in the app and keep the real contacts hiding inside.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand headline="Check your whole list" />

      {/* ── RELATED LINKS ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/catch-all-verification', label: 'verify catch-all & risky emails' },
            { href: '/seg-email-verification', label: 'emails protected by SEG gateways' },
            { href: '/pricing', label: 'pricing and credits' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all card-vivid-shadow"
            >
              <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
