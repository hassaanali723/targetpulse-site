import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd } from '@/lib/schema'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'
import { CheckCircle2, AlertCircle, AlertTriangle, HelpCircle, ArrowRight, Check } from 'lucide-react'

const APP_URL = 'https://emailverifier.giggal.ai/sign-up'
const DESC =
  'Proofpoint, Mimecast, Barracuda and other gateways block the SMTP checks most verifiers rely on. Giggal.ai returns real valid or invalid results behind 15 secure email gateways.'

export const metadata: Metadata = {
  title: { absolute: 'Verify Emails Behind Secure Email Gateways | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/seg-email-verification' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Verify Emails Behind Secure Email Gateways',
    description: DESC,
    url: 'https://giggal.ai/seg-email-verification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Emails Behind Secure Email Gateways',
    description: DESC,
  },
}

const GATEWAYS = [
  'Mimecast', 'Proofpoint', 'Barracuda', 'Cisco IronPort', 'Sophos',
  'Trend Micro', 'Symantec', 'Fortinet', 'Forcepoint', 'Cloudmark',
  'MailRoute', 'AppRiver', 'Zix', 'SonicWall', 'CRAM Cloud',
]

const VERDICTS = [
  { Icon: CheckCircle2, tint: 'text-emerald-600', label: 'Deliverable', meaning: 'The mailbox exists and will accept mail' },
  { Icon: AlertCircle, tint: 'text-rose-600', label: 'Undeliverable', meaning: 'The mailbox does not exist' },
  { Icon: AlertTriangle, tint: 'text-amber-600', label: 'Risky', meaning: 'The address exists but carries deliverability risk' },
  { Icon: HelpCircle, tint: 'text-slate-500', label: 'Unknown', meaning: 'We could not verify the address' },
]

const faqs: FaqItem[] = [
  {
    q: 'Does a secure email gateway mean the address is invalid?',
    a: 'No. A gateway is a filtering layer, not a signal about the mailbox behind it. Plenty of valid, active addresses sit behind Proofpoint or Mimecast. The gateway just makes them harder to check.',
  },
  {
    q: 'Why do other verifiers return Unknown on these addresses?',
    a: 'Most verifiers ask the mail server directly over SMTP. Behind a gateway, that question gets intercepted and answered by the gateway instead, which is built to not tell you anything useful. Without an answer, the verifier has nothing to report.',
  },
  {
    q: 'Which gateways does Giggal.ai handle?',
    a: "Fifteen, including Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet and Forcepoint. Detection is automatic from the domain's MX records.",
  },
  {
    q: 'Do I need to separate SEG-protected addresses before uploading?',
    a: 'No. Upload the list as it is. Domains behind a gateway are identified and routed automatically during the run.',
  },
  {
    q: 'Does verifying behind a gateway cost extra?',
    a: 'No. Every email verification is a flat 1 credit, regardless of whether the domain sits behind a Secure Email Gateway, is a catch-all, or is a standard mailbox.',
  },
  {
    q: 'What happens if you still cannot verify an address?',
    a: 'The address comes back as Unknown and the credit is refunded automatically.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'

export default function SegEmailVerificationPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('SEG Email Verification', '/seg-email-verification')} />
      <JsonLd data={faqPageLd(faqs)} />
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-20 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Verify emails protected by{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            SEG gateways
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Secure email gateways sit in front of a company&apos;s real mail server and refuse the
          checks most verifiers depend on. Giggal.ai routes around them and returns a real email
          verification result, valid or invalid, instead of an Unknown.
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

      {/* ── WHAT IS A SEG ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What is a secure email gateway?</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            A secure email gateway is a filtering layer that sits in front of a company&apos;s real
            mail server. Every message headed for the domain passes through the gateway first.
            Companies run one to block spam and malware, to stop phishing, and to enforce data loss
            prevention rules before anything reaches a mailbox. Vendors in this space include
            Proofpoint, Mimecast, Barracuda, and Cisco IronPort.
          </p>
          <p>
            Because the gateway stands in front of the mail server, it also answers on the mail
            server&apos;s behalf. Anything that tries to ask the mail server a question, including an
            email verifier, ends up talking to the gateway instead of the system that actually knows
            which mailboxes exist.
          </p>
        </div>
      </section>

      {/* ── WHY GATEWAYS BREAK VERIFICATION ──────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Why gateways break email verification</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Standard email verification works by opening an SMTP conversation with the mail server
            and asking, in effect, whether a given mailbox exists. On a normal domain the server
            answers, and the verifier records a valid or invalid result.
          </p>
          <p>
            Behind a gateway that conversation never reaches the mail server. The gateway intercepts
            it and answers on the server&apos;s behalf. Gateways are built to prevent exactly this
            kind of probing, since the same technique is used by attackers mapping a
            company&apos;s users. So the gateway gives a deliberately vague answer, accepts
            every address whether it exists or not, or refuses the connection outright.
          </p>
          <p>
            The verifier is left with nothing it can turn into an email verification result. It
            reports the address as Unknown or Risky, and the contact stays unresolved. On a business list where a large
            share of domains sit behind a gateway, that is a real part of your list you cannot
            confidently use.
          </p>
        </div>
        <div className="pt-2 space-y-4">
          <h3 className="text-lg font-black text-slate-900">The IP reputation problem</h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
            Retrying makes it worse. Probing an SMTP endpoint that refuses the check, over and over,
            gets the sending IP flagged. Once that happens, results degrade across every domain that
            verifier touches, not just the gateway domains. This is why Giggal.ai skips SMTP entirely
            on gateways that behave this way rather than retrying into a block.
          </p>
        </div>
      </section>

      {/* ── HOW GIGGAL VERIFIES BEHIND A GATEWAY ─────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How Giggal.ai verifies behind a gateway</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Giggal.ai reads the domain&apos;s MX records first, before any probing, to work out what
            is actually in front of the mailbox. That tells us whether the domain answers directly or
            sits behind a gateway.
          </p>
          <p>
            Domains behind a gateway are routed down a different verification path than domains that
            answer directly. Where a gateway refuses SMTP probing, the email verification result does
            not depend on that SMTP answer at all. We verify the address through a different signal, so
            it still comes back valid or invalid when a plain SMTP check would return nothing.
          </p>
          <p>
            Gateways also return responses designed to hide whether a mailbox exists, deliberately
            vague answers meant to throw off a verifier. Giggal.ai recognises these and does not
            mistake one for a real result. When the only thing coming back is noise, we treat it as
            no answer rather than guessing. So the address comes back valid or invalid, where most
            verifiers hand back an Unknown.
          </p>
        </div>
      </section>

      {/* ── GATEWAYS WE DETECT ───────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-8">
        <h2 className={`${sectionTitle} text-center`}>Gateways we detect</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {GATEWAYS.map((g) => (
            <span
              key={g}
              className="inline-flex items-center bg-white border-2 border-slate-200 rounded-xl px-4 py-2.5 text-[13px] font-bold text-slate-700 card-vivid-shadow"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-center text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto">
          Detection happens automatically from the domain&apos;s MX records. You do not need to tell
          us anything about a list before you run it.
        </p>
      </section>

      {/* ── PROOFPOINT ───────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Proofpoint</h2>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          Proofpoint is one of the most widely deployed secure email gateways on enterprise domains.
          If you sell into large companies, a meaningful part of your list sits behind it. Proofpoint
          fronts the real mail server and filters inbound mail for threats, which is also why a plain
          SMTP check against a Proofpoint domain tends to come back without a usable answer.
          Giggal.ai identifies Proofpoint from the domain&apos;s MX records and routes the address
          down the gateway path, so instead of an Unknown you get a real deliverable or undeliverable
          result on the mailbox behind it.
        </p>
      </section>

      {/* ── MIMECAST ─────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Mimecast</h2>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          Mimecast is built to stop anyone working out which mailboxes exist on a domain, and it
          answers probes with a deliberately vague response rather than confirming or denying
          the address. Giggal.ai recognises that behaviour and skips SMTP against Mimecast entirely,
          rather than triggering the response and taking a reputation hit. It verifies the address
          another way, so it comes back with a real email verification result instead of an Unknown.
        </p>
        {MIMECAST_PAGE_LIVE && (
          <p className="text-sm font-medium">
            <Link href="/mimecast-email-verification" className="inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors">
              how Mimecast verification works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        )}
      </section>

      {/* ── BARRACUDA ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Barracuda</h2>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          Barracuda is common on mid-market domains and, like other gateways, sits in front of the
          real mail server and filters inbound mail. A standard verifier probing a Barracuda domain
          over SMTP usually cannot get a clear answer about the mailbox, because the gateway is the
          thing responding. Giggal.ai detects Barracuda from the domain&apos;s MX records and sends
          the address down the gateway verification path. You get a deliverable or undeliverable
          result on the mailbox itself, not a Risky or Unknown label that leaves you guessing about
          whether the contact is real.
        </p>
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
                    <span className={`inline-flex items-center gap-2 text-sm font-black text-slate-900`}>
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
        <p className="text-slate-600 text-sm md:text-base font-medium">
          A catch-all domain is a related but different problem. If your list has those too, we also{' '}
          <Link href="/catch-all-verification" className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors">
            verify catch-all &amp; risky emails
          </Link>
          .
        </p>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Pay only for what you verify</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Standard &amp; SEG
            </div>
            <div className="text-3xl font-black text-slate-900">1 credit</div>
            <div className="text-[13px] text-slate-500 font-semibold">per email verification</div>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Catch-All
            </div>
            <div className="text-3xl font-black text-indigo-700">1 credit</div>
            <div className="text-[13px] text-slate-500 font-semibold">per catch-all email</div>
          </div>
        </div>
        <p className="text-center text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto">
          No monthly fees, no minimums, and credits never expire. Start with 1,000 free credits, no
          card required. See full{' '}
          <Link href="/pricing" className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors">
            pricing and credits
          </Link>
          .
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Run a list and see the difference
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
