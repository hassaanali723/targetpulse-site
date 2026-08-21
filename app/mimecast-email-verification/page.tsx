import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbTrailLd } from '@/lib/schema'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'
import { CheckCircle2, AlertCircle, AlertTriangle, HelpCircle, ArrowRight, Check } from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'
const DESC =
  'Mimecast hides whether a mailbox exists, so most verifiers return Unknown. Giggal.ai skips SMTP against Mimecast and returns a real result instead.'

export const metadata: Metadata = {
  title: { absolute: 'Mimecast Email Verification | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/mimecast-email-verification' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Mimecast Email Verification',
    description: DESC,
    url: 'https://giggal.ai/mimecast-email-verification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mimecast Email Verification',
    description: DESC,
  },
}

const VERDICTS = [
  { Icon: CheckCircle2, tint: 'text-emerald-600', label: 'Deliverable', meaning: 'The mailbox exists and will accept mail' },
  { Icon: AlertCircle, tint: 'text-rose-600', label: 'Undeliverable', meaning: 'The mailbox does not exist' },
  { Icon: AlertTriangle, tint: 'text-amber-600', label: 'Risky', meaning: 'The address exists but carries deliverability risk' },
  { Icon: HelpCircle, tint: 'text-slate-500', label: 'Unknown', meaning: 'We could not verify the address' },
]

const faqs: FaqItem[] = [
  {
    q: 'Does a Mimecast bounce mean the email address is wrong?',
    a: 'Usually not. Mimecast messages of that kind reflect a gateway policy decision, not a statement about whether the mailbox exists. The address is often perfectly valid.',
  },
  {
    q: 'Why do most verifiers return Unknown on Mimecast domains?',
    a: 'They ask the mail server over SMTP whether a mailbox exists. Mimecast intercepts that and answers with something deliberately vague, so the verifier has nothing to work with.',
  },
  {
    q: 'Does Giggal.ai probe Mimecast over SMTP?',
    a: 'No. We skip SMTP entirely on Mimecast domains. It gets refused, and repeated attempts damage sender IP reputation, which would degrade results on every other domain in the list.',
  },
  {
    q: 'Do I need to separate Mimecast addresses before uploading?',
    a: 'No. Mimecast domains are identified automatically from MX records during the run.',
  },
  {
    q: 'Does verifying a Mimecast address cost extra?',
    a: 'No. Standard verification is 1 credit regardless of what gateway sits in front of the domain.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'

export default function MimecastEmailVerificationPage() {
  if (!MIMECAST_PAGE_LIVE) notFound()

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'SEG Email Verification', path: '/seg-email-verification' },
          { name: 'Mimecast Email Verification', path: '/mimecast-email-verification' },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-20 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Verify emails behind{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            Mimecast
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Mimecast is built to stop anyone working out which mailboxes exist on a domain, which is
          why most verifiers hand back Unknown. Giggal.ai takes a different route and returns a real
          email verification result.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            Start free with 1,000 credits
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/pricing"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            See pricing
          </Link>
        </div>
        <p className="text-[12px] text-slate-400 font-medium">No card required. Credits never expire.</p>
      </section>

      {/* ── WHAT MIMECAST DOES ───────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What Mimecast does to email verification</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Mimecast sits in front of the real mail server and answers on its behalf. Mail headed for
            the domain reaches Mimecast first, and so does anything trying to check whether a mailbox
            exists. The verifier never actually talks to the system that knows the answer.
          </p>
          <p>
            Blocking that kind of mailbox lookup is a deliberate feature, not a side effect. Mimecast
            is supposed to prevent exactly the kind of probing a verifier does, because the same
            technique is how an attacker would map out a company&apos;s users. Stopping it is the point.
          </p>
          <p>
            When probed, Mimecast returns a deliberately vague response rather than confirming
            or denying the mailbox. A verifier that takes that response at face value has two options,
            and both are bad. It can guess, which puts wrong results into your list, or it can give
            up and mark the address Unknown, which leaves a real contact unresolved.
          </p>
        </div>
      </section>

      {/* ── THE RESPONSE MIMECAST SENDS ──────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>The response Mimecast sends back</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            People who hit this usually see one of two things: a verification result stuck on Unknown,
            or a bounce message from their own sending tool. The wording varies, but it commonly
            mentions an internal resource being temporarily unavailable, or a recipient not being
            allowed. These are messages Mimecast sends when something asks about a mailbox it is set
            up to protect.
          </p>
          <p>
            The one behaviour our engine relies on here is specific: it recognises the
            &quot;internal resource temporarily unavailable&quot; anti-enumeration response and does
            not treat it as a result. Everything else in this space is real-world context for what
            you might see, not a claim that we pattern-match every possible string a gateway can
            return.
          </p>
        </div>
        <div className="pt-2 space-y-4">
          <h3 className="text-lg font-black text-slate-900">
            Why &quot;recipient is not allowed&quot; does not mean the address is invalid
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
            That message reflects a gateway policy decision about how mail is accepted, not a
            statement about whether the mailbox exists. The address behind it is often perfectly
            valid. You are reading the gateway&apos;s rules, not the mail server&apos;s answer.
          </p>
        </div>
      </section>

      {/* ── HOW GIGGAL HANDLES MIMECAST ──────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai handles Mimecast</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            The domain&apos;s MX records identify Mimecast before any probing happens, so the address
            is on the Mimecast path from the start rather than after a failed attempt.
          </p>
          <p>
            SMTP probing is skipped entirely. Not retried, not throttled, skipped. There are two
            reasons. Mimecast refuses the check, so there is nothing to gain. And repeated attempts
            flag the sending IP, which would degrade results across every other domain being verified
            in the same run.
          </p>
          <p>
            The email verification result comes from a different signal instead, one that does not
            rely on Mimecast answering a probe. When that vague response does show up, it is recognised
            and never recorded as a real answer. The address comes back as a real deliverable or
            undeliverable result, or as Unknown with the credit refunded, but not as a guess dressed
            up as an answer.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU GET BACK ────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What you get back</h2>
        <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">Result</th>
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {VERDICTS.map(({ Icon, tint, label, meaning }) => (
                <tr key={label}>
                  <td className="px-5 py-4 align-top">
                    <span className="inline-flex items-center gap-2 text-sm font-black text-slate-900">
                      <Icon className={`w-4 h-4 ${tint}`} />
                      {label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[13px] sm:text-sm text-slate-600 font-medium">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 text-sm md:text-base font-medium">
          When we cannot verify an address, the credit is refunded automatically. You only pay for
          verifications we complete.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* ── RELATED ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Related</h2>
        <ul className="space-y-2.5 text-sm md:text-base font-medium">
          <li>
            <Link href="/seg-email-verification" className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors">
              how SEG verification works
            </Link>
          </li>
          <li>
            <Link href="/catch-all-verification" className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors">
              verify catch-all &amp; risky emails
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors">
              pricing and credits
            </Link>
          </li>
        </ul>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Stop losing Mimecast contacts to Unknown
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            1,000 free credits, no card required.
          </p>
          <div className="pt-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 duration-200"
            >
              Start verifying for free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-5 text-[12px] text-indigo-100 font-medium flex-wrap pt-2">
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Free trial</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Credits never expire</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Refunds on Unknown</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
