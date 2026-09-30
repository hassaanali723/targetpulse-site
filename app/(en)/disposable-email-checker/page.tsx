import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd } from '@/lib/schema'
import {
  ShieldAlert,
  Flame,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Check,
  Users,
} from 'lucide-react'

const DESC =
  'Free disposable email checker to verify temporary, burner, and fake email addresses in seconds. Detect throwaway domains, test mailbox existence, and stop form spam.'

export const metadata: Metadata = {
  title: { absolute: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/disposable-email-checker' },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai disposable email checker' }],
    title: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes',
    description: DESC,
    url: 'https://giggal.ai/disposable-email-checker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is a disposable email address?',
    a: 'A disposable email address is a temporary inbox created through services like Mailinator, Temp-Mail, or 10MinuteMail. People often use them to access gated downloads or bypass signups without sharing their real email. Most disposable addresses expire within minutes or hours.',
  },
  {
    q: 'How does this disposable email checker work?',
    a: 'It checks the email domain against a registry of over 75,000 known disposable providers, inspects the receiving mail servers for shared burner infrastructure, and runs a live mailbox test to confirm whether the address can actually receive mail.',
  },
  {
    q: 'Will sending to a disposable email bounce?',
    a: 'Yes. Once a temporary inbox reaches its expiration window, the receiving server immediately rejects incoming messages with an SMTP 550 error code. Too many hard bounces damage your sender reputation and cause email providers to route your future campaigns to spam.',
  },
  {
    q: 'Is this disposable email checker free?',
    a: 'Yes. You get 5 free checks every 24 hours with no signup and no credit card required. If you need to verify an entire list at once, you can sign up for a free account with 1,000 included verification credits.',
  },
  {
    q: 'How do I block disposable emails on signup forms?',
    a: 'You can connect Giggal to your forms or app via our API or Zapier integration. When someone submits a burner address, the check flags it right away so you can ask for a business email before creating the account.',
  },
  {
    q: 'What is the difference between a disposable email and a free email provider?',
    a: 'A free email provider (like Gmail, Yahoo, or Outlook) gives users permanent, password-protected mailboxes for everyday use. A disposable provider creates temporary inboxes designed to be abandoned. Giggal distinguishes between the two, flagging burner addresses while keeping standard free mailboxes.',
  },
  {
    q: 'Can I check disposable emails in bulk?',
    a: 'Yes. You can upload a complete CSV or TXT file to the Giggal dashboard. In addition to flagging disposable domains, the bulk verifier checks deliverability, resolves catch-all domains, and filters role accounts across your entire list.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

const COMMON_DISPOSABLE_SERVICES = [
  { name: 'Temp-Mail', desc: 'Generates short-lived inboxes that expire within a few hours.' },
  { name: 'Mailinator', desc: 'Public inboxes where anyone can receive and read mail without a password.' },
  { name: '10MinuteMail', desc: 'Self-destructing addresses that automatically expire after ten minutes.' },
  { name: 'Guerrilla Mail', desc: 'Disposable inboxes that expire after an hour, commonly used to bypass signup forms.' },
  { name: 'ThrowawayMail', desc: 'Instant mailboxes that disappear as soon as the browser tab is closed.' },
  { name: 'Yopmail', desc: 'Public throwaway service that holds messages for 8 days before deleting them.' },
  { name: 'SharkLasers', desc: 'Alternate domain that routes directly to Guerrilla Mail.' },
  { name: 'TrashMail', desc: 'Temporary forwarding service used to shield personal inboxes from unwanted email.' },
]

export default function DisposableEmailCheckerPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Disposable Email Checker', '/disposable-email-checker')} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Free disposable email checker to{' '}
          <span className="bg-gradient-to-r from-rose-600 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
            detect fake &amp; temporary inboxes
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Check any email address to see if it belongs to a disposable or burner mail service. Catch
          10-minute mailboxes, temporary addresses, and fake signups before they bounce and hurt your deliverability.
        </p>
      </section>

      {/* ── THE TOOL CONSOLE ─────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="disposable"
          endpoint="/api/tools/disposable-check"
          defaultEmail=""
          emailFromQuery
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Free fake email checker with no signup required. One address per check with live domain and mailbox verification.
        </p>
      </section>

      {/* ── HOW DISPOSABLE CHECKING WORKS ────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>How to verify if an email address is disposable</h2>
          <p className={proseP}>
            A good temporary email checker does more than search a static text file. Disposable services register
            new domains constantly and route them through shared mail servers. Here is how a proper check works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Syntax and domain format</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Checks whether the address follows standard formatting—a valid local part, a single @, and an
              active top-level domain—before making network requests.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-black">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">75,000+ disposable domain check</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Matches the domain against our database of confirmed throwaway, temporary, and burner email
              providers, including subdomains and wildcard forwarders.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-black">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Mail server lookup</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Even when a burner service registers a brand-new domain name, its MX records usually point to
              known disposable mail servers. We check the mail exchange host directly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
              4
            </div>
            <h3 className="text-lg font-bold text-slate-900">Live mailbox check</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Opens a brief SMTP connection with the receiving server to confirm whether the specific mailbox
              exists, whether it accepts mail, and whether sending to it will bounce.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMON DISPOSABLE PROVIDERS ───────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Common disposable email providers we detect</h2>
          <p className={proseP}>
            Temporary email services allow people to create instant inboxes to bypass signups without sharing
            their real email. Here are some of the most common providers our disposable email providers list tracks:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {COMMON_DISPOSABLE_SERVICES.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-1.5 text-rose-600 font-bold text-sm mb-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{s.name}</span>
              </div>
              <p className="text-xs text-slate-500 leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY BLOCK DISPOSABLE EMAILS ───────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Why you need to block disposable and fake emails</h2>
          <p className={proseP}>
            Letting burner emails into your mailing list or app signup flow damages your domain reputation,
            wastes sales time, and distorts user metrics:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100/70 text-rose-600 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Prevent hard bounces</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Temporary mailboxes expire quickly. Sending campaigns or onboarding sequences to an expired address
              causes an immediate hard bounce. Crossing a 2% bounce rate signals spam filters at Google and Outlook
              to send your future emails to junk.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Stop free trial abuse</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              People use burner addresses to create multiple trial accounts, download gated guides, or test
              features repeatedly without ever intending to become paying customers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Keep your CRM clean</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Sales reps waste hours following up with leads that will never open an email or reply. Filtering
              fake email addresses ensures your team only works with genuine contacts.
            </p>
          </div>
        </div>
      </section>

      {/* ── BULK VERIFICATION VS SINGLE CHECK ─────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Single check vs. bulk disposable email verification</h2>
        <p className={proseP}>
          The checker above is built for quick checks on single addresses—like checking a suspicious inbound
          lead or diagnosing a bounced email. If you need to clean an entire spreadsheet or marketing list,
          checking addresses one by one is too slow.
        </p>
        <p className={proseP}>
          With Giggal, you can upload a CSV or TXT file to verify your whole list in bulk. Every address is
          checked for disposable domains, spam traps, role accounts (like info@ or sales@), and invalid
          mailboxes. On{' '}
          <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
            catch-all domains
          </Link>
          , where most checkers give up and mark the address risky, Giggal runs deeper checks to confirm whether
          the mailbox is truly active—with 1,000 free credits when you sign up.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions about disposable email checking</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand headline="Stop disposable emails and clean your list" />

      {/* ── RELATED LINKS ────────────────────────────────────── */}
      <section className="cv-section max-w-4xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/email-checker', label: 'free catch-all email checker' },
            { href: '/catch-all-verification', label: 'verify catch-all & risky emails' },
            { href: '/seg-email-verification', label: 'verify emails protected by secure gateways' },
            { href: '/pricing', label: 'pricing, credits & plans' },
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
