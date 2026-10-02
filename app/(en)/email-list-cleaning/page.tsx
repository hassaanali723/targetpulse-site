import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import { breadcrumbLd, faqPageLd, emailListCleaningServiceLd } from '@/lib/schema'

const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const TITLE = 'Email List Cleaning Service That Resolves Catch-All Leads | Giggal.ai'
const DESC =
  'Email list cleaning service that removes invalid, disposable and duplicate emails and resolves catch-alls instead of deleting them. 1,000 free credits.'

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESC,
  alternates: {
    canonical: '/email-list-cleaning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Email List Cleaning Service That Keeps Catch-All Leads',
    description: DESC,
    url: 'https://giggal.ai/email-list-cleaning',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email list cleaning service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email List Cleaning Service That Keeps Catch-All Leads',
    description: DESC,
    images: ['/og-card.png'],
  },
}

function StatusBadge({ tone, children }: { tone: 'good' | 'bad' | 'warn'; children: React.ReactNode }) {
  const text = { good: 'text-emerald-700', bad: 'text-rose-700', warn: 'text-amber-700' }[tone]
  return (
    <span className={`shrink-0 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ring-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ${text}`}>
      {children}
    </span>
  )
}

interface BeforeAfterData {
  total: number | string
  valid: number | string
  invalid: number | string
  disposable: number | string
  role: number | string
  duplicates: number | string
  catchAllValid: number | string
  catchAllInvalid: number | string
  unknown: number | string
  removedPct: number | string
}

// TODO: add real anonymized before/after numbers
const beforeAfter: BeforeAfterData | null = null

function BeforeAfterSection({ data }: { data: BeforeAfterData | null }) {
  if (!data) return null
  return (
    <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Before and after: a real cleaned list
      </h2>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
        Here&apos;s what cleaning did to one real B2B list, anonymized.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75">
              <th className="py-3.5 px-4 font-bold text-slate-900">Result</th>
              <th className="py-3.5 px-4 font-bold text-slate-900 text-right">Addresses</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800">Uploaded</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.total}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Valid, kept</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.valid}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Invalid, removed</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.invalid}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Disposable, removed</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.disposable}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Role-based, flagged</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.role}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Duplicates, removed</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.duplicates}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Catch-all resolved to valid, kept</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.catchAllValid}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Catch-all resolved to invalid, removed</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.catchAllInvalid}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-slate-700">Unknown, refunded</td>
              <td className="py-3 px-4 text-slate-700 text-right">{data.unknown}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
        {data.removedPct}% of the list was removed. {data.catchAllValid} catch-all contacts were kept that a standard cleaner would have marked risky.
      </p>
    </section>
  )
}

const faqs: FaqItem[] = [
  {
    q: 'What does an email list cleaning service do?',
    a: 'It checks every address on your list and removes the ones that would bounce or hurt deliverability: invalid, disposable, duplicate and role-based addresses. Giggal also resolves catch-all addresses to valid or invalid instead of marking them risky.',
  },
  {
    q: 'How much does it cost to clean an email list?',
    a: 'One credit per address, catch-all checks included. 10,000 addresses cost $9.90, and your first 1,000 credits are free. Credits never expire.',
  },
  {
    q: 'Can I clean my email list for free?',
    a: 'Yes, up to 1,000 addresses. Every new account gets 1,000 free credits, no card needed, and they never expire. After that, 10,000 addresses cost $9.90.',
  },
  {
    q: 'How long does email list cleaning take?',
    a: 'Most lists come back in minutes.',
  },
  {
    q: 'Will my contacts receive an email?',
    a: 'No. The checks talk to the receiving mail server and stop before any message is sent. Your contacts never see anything.',
  },
  {
    q: 'What happens to catch-all addresses?',
    a: 'Each one is checked and returned as valid or invalid, for the same 1 credit. You keep the real contacts and drop the dead ones.',
  },
  {
    q: 'What files can I upload?',
    a: 'CSV or Excel, up to 50,000 addresses per file. You download the clean list as a CSV.',
  },
  {
    q: 'Is email scrubbing the same as email list cleaning?',
    a: 'Yes. Email scrubbing, list cleaning and email hygiene all describe the same job: removing addresses that won\u2019t receive your mail.',
  },
  {
    q: 'What does "unknown" mean, and do I pay for it?',
    a: 'Unknown means the mail server didn\u2019t give a clear answer, often because of greylisting. Try again later. Credits for unknown results are refunded.',
  },
]

const RELATED_LINKS = [
  {
    title: 'Free email checker',
    href: '/email-checker',
    desc: 'Verify a single email address: syntax, MX records and a live SMTP mailbox check.',
  },
  {
    title: 'Disposable email checker',
    href: '/disposable-email-checker',
    desc: 'Detect temporary, fake and throwaway inboxes across 100,000+ domains.',
  },
  {
    title: 'Catch-all email verification',
    href: '/catch-all-verification',
    desc: 'How Giggal resolves accept-all business domains to deliverable or undeliverable.',
  },
  {
    title: 'How accurate email verification is',
    href: '/blog/how-accurate-are-email-verification-tools',
    desc: 'What the 97–99% accuracy claims measure, and how to test a verifier on your own list.',
  },
  {
    title: 'Why cold emails bounce',
    href: '/blog/why-cold-emails-bounce',
    desc: 'The common causes of hard vs soft bounces and how to read SMTP response codes.',
  },
  {
    title: 'How to reduce email bounce rate',
    href: '/blog/how-to-reduce-email-bounce-rate',
    desc: 'What causes a high bounce rate and how to bring it down.',
  },
  {
    title: 'Good bounce rate for cold email',
    href: '/blog/good-bounce-rate-for-cold-email',
    desc: 'Under 2% is healthy. What to do at 2–5% and above 5%.',
  },
  {
    title: 'Email verification API',
    href: '/email-verification-api',
    desc: 'Check addresses at sign-up or clean files from your own code.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailListCleaningPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={emailListCleaningServiceLd()} />
      <JsonLd data={breadcrumbLd('Email list cleaning', '/email-list-cleaning')} />
      <JsonLd data={faqPageLd(faqs)} />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── 1. HERO ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Email list cleaning service that also{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            resolves catch-all leads
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          Upload your list and get it back clean in minutes. Our email list cleaning service removes invalid, disposable, role-based and duplicate addresses before they bounce and hurt your sender reputation. Many list cleaners mark every catch-all address as &quot;risky&quot; and leave the choice to you. We check each one and tell you which one is safe to send.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl text-base transition-all shadow-md hover:scale-[1.02] active:scale-95 duration-200"
          >
            Clean my list free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-800 font-extrabold rounded-2xl text-base border border-slate-200 transition-all shadow-sm"
          >
            See pricing
          </a>
        </div>

        <p className="text-xs md:text-sm text-slate-500 font-medium">
          1,000 free credits, no card needed. CSV or Excel, up to 50,000 addresses per file. Credits never expire.
        </p>

        {/* Bulk-results illustration */}
        <div className="max-w-md mx-auto mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl text-left">
          <div className="flex items-center justify-between text-sm pb-3 border-b border-slate-100">
            <span className="font-semibold text-slate-800 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-indigo-600" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              leads.csv
            </span>
            <StatusBadge tone="good">Done</StatusBadge>
          </div>
          <ul className="mt-3 divide-y divide-slate-100">
            {[
              { email: 'anna@acme.com', ok: true },
              { email: 'j.doe@globex.io', ok: false },
              { email: 'sara@northwind.co', ok: true },
              { email: 'mark@initech.com', ok: true },
            ].map((r) => (
              <li key={r.email} className="flex items-center justify-between gap-3 py-2.5">
                <span className="text-sm text-slate-700 truncate">{r.email}</span>
                <StatusBadge tone={r.ok ? 'good' : 'bad'}>{r.ok ? 'Deliverable' : 'Undeliverable'}</StatusBadge>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2. THREE STEPS ───────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Clean your email list in three steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center text-lg">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Upload your list</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Add a CSV or Excel file with up to 50,000 addresses. Bigger list? Split it into a few files.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center text-lg">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">We check every address</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Syntax, the domain&apos;s mail servers (MX) and the mailbox itself over SMTP, plus disposable, role-based, duplicate and catch-all checks. No email is sent to your contacts.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center text-lg">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Download the clean list</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You get a CSV with a result on every row, so you can keep, remove or review each address.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT IT REMOVES ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>What email list cleaning removes</h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75">
                <th className="py-4 px-5 font-bold text-slate-900 min-w-[140px]">Result</th>
                <th className="py-4 px-5 font-bold text-slate-900 min-w-[260px]">What it means</th>
                <th className="py-4 px-5 font-bold text-slate-900 min-w-[180px]">What to do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-5 font-semibold text-slate-900">Invalid</td>
                <td className="py-3.5 px-5 text-slate-600">The mailbox or domain doesn&apos;t exist. Sending to it causes a hard bounce.</td>
                <td className="py-3.5 px-5 text-rose-700 font-semibold">Remove</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-slate-900">Disposable</td>
                <td className="py-3.5 px-5 text-slate-600">A temporary inbox from a service like Mailinator or 10MinuteMail. It will be gone soon.</td>
                <td className="py-3.5 px-5 text-rose-700 font-semibold">Remove</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-slate-900">Role-based</td>
                <td className="py-3.5 px-5 text-slate-600">A shared inbox like info@, sales@ or support@. Rarely a real decision-maker.</td>
                <td className="py-3.5 px-5 text-slate-700 font-medium">Remove for outreach, keep for support lists</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-slate-900">Duplicate</td>
                <td className="py-3.5 px-5 text-slate-600">The same address appears more than once.</td>
                <td className="py-3.5 px-5 text-slate-700 font-medium">Keep one copy</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-slate-900">Catch-all, resolved</td>
                <td className="py-3.5 px-5 text-slate-600">The domain accepts every address. Giggal checks the mailbox behind it.</td>
                <td className="py-3.5 px-5 text-emerald-700 font-semibold">Keep if valid, remove if invalid</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-semibold text-slate-900">Unknown</td>
                <td className="py-3.5 px-5 text-slate-600">The server didn&apos;t answer in time or asked us to retry later (greylisting).</td>
                <td className="py-3.5 px-5 text-amber-700 font-semibold">Retry later. Unknown results are refunded.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={proseP}>
          Removing these addresses keeps your bounce rate low. That protects your sender reputation, so more of your emails reach the inbox. New to bounces? Read{' '}
          <Link href="/glossary/hard-bounce" className="text-indigo-600 font-bold hover:underline">
            what a hard bounce is
          </Link>{' '}
          and{' '}
          <Link href="/blog/hard-bounce-vs-soft-bounce" className="text-indigo-600 font-bold hover:underline">
            hard bounce vs soft bounce
          </Link>
          .
        </p>
      </section>

      {/* ── 4. WHY MANY CLEANERS FLAG GOOD LEADS AS RISKY ──────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Why many email list cleaners flag good leads as risky</h2>
        <p className={proseP}>
          Many company mail servers accept every address, real or made up. That&apos;s a{' '}
          <Link href="/blog/what-is-a-catch-all-email-address" className="text-indigo-600 font-bold hover:underline">
            catch-all domain
          </Link>
          . On these domains a standard check gets the same &quot;yes&quot; for a real mailbox and a typo. Many email list cleaning services stop there, label the address &quot;risky&quot; and leave the decision to you.
        </p>
        <p className={proseP}>
          On B2B lists these domains are common. Larger companies often sit behind security gateways that hide the mailbox. Delete these addresses and you throw away real buyers. Send to them and the dead ones bounce.
        </p>
        <p className={proseP}>
          Giggal resolves each catch-all address to valid or invalid for the same 1 credit as any other check. It also works on domains behind{' '}
          <Link href="/seg-email-verification" className="text-indigo-600 font-bold hover:underline">
            security gateways like Proofpoint and Mimecast
          </Link>
          , where other tools return &quot;unknown&quot;. See how{' '}
          <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
            catch-all verification
          </Link>{' '}
          works.
        </p>
      </section>

      {/* ── 5. BEFORE AND AFTER (DATA DRIVEN) ──────────────────── */}
      <BeforeAfterSection data={beforeAfter} />

      {/* ── 6. PRICING ─────────────────────────────────────────── */}
      <section id="pricing" className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Email list cleaning pricing</h2>
          <p className={proseP}>
            Pay for the emails you clean, with no monthly commitment. One credit cleans one address, catch-all checks included. Credits never expire, and your first 1,000 are free.
          </p>
        </div>

        <PricingTable />

        <p className="text-center text-sm md:text-base text-slate-600 font-medium pt-2">
          Cleaning a 10,000-contact list costs $9.90. Monthly plans save 10%.{' '}
          <Link href="/pricing" className="text-indigo-600 font-bold hover:underline">
            See all prices
          </Link>
        </p>
      </section>

      {/* ── 7. HOW OFTEN TO CLEAN ──────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How often should you clean your email list?</h2>
        <p className={proseP}>
          Addresses go stale on their own. People change jobs, companies change domains, and old inboxes get shut down. B2B lists go stale fastest. Clean your list:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base font-medium leading-relaxed marker:text-indigo-500">
          <li>Before a campaign to any list you haven&apos;t cleaned in the last few months.</li>
          <li>Right after you import a purchased, scraped or enriched list.</li>
          <li>
            When your bounce rate starts climbing. For cold email,{' '}
            <Link href="/blog/good-bounce-rate-for-cold-email" className="text-indigo-600 font-bold hover:underline">
              stay under 2%
            </Link>
            .
          </li>
          <li>On a regular schedule for any list you send to often.</li>
        </ul>
        <p className={proseP}>
          Regular cleaning is what people mean by email hygiene: keeping only addresses that exist and can receive your mail. It&apos;s the simplest way to{' '}
          <Link href="/blog/how-to-reduce-email-bounce-rate" className="text-indigo-600 font-bold hover:underline">
            reduce your bounce rate
          </Link>
          . To keep bad addresses out in the first place, verify new sign-ups in real time with the{' '}
          <Link href="/public/docs" className="text-indigo-600 font-bold hover:underline">
            API
          </Link>
          .
        </p>
      </section>

      {/* ── 8. WHERE IT ALREADY LIVES ──────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Clean up your email list where it already lives</h2>
        <p className={proseP}>
          You don&apos;t have to export and re-import by hand.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed marker:text-indigo-500">
          <li>
            <strong className="text-slate-900">Email and CRM tools:</strong> send clean contacts to{' '}
            <Link href="/integrations/zapier/hubspot" className="text-indigo-600 font-bold hover:underline">
              HubSpot
            </Link>
            , Mailchimp, ActiveCampaign, SendGrid and{' '}
            <Link href="/integrations" className="text-indigo-600 font-bold hover:underline">
              80+ other apps
            </Link>
            .
          </li>
          <li>
            <strong className="text-slate-900">Automation:</strong> connect any tool through{' '}
            <Link href="/integrations/zapier" className="text-indigo-600 font-bold hover:underline">
              Zapier
            </Link>{' '}
            or{' '}
            <Link href="/integrations/n8n" className="text-indigo-600 font-bold hover:underline">
              n8n
            </Link>
            .
          </li>
          <li>
            <strong className="text-slate-900">API:</strong> clean lists from your own code with the{' '}
            <Link href="/public/docs" className="text-indigo-600 font-bold hover:underline">
              REST API
            </Link>
            .
          </li>
          <li>
            <strong className="text-slate-900">AI assistants:</strong> check addresses inside Claude, ChatGPT or Cursor over{' '}
            <Link href="/mcp" className="text-indigo-600 font-bold hover:underline">
              MCP
            </Link>
            .
          </li>
        </ul>
      </section>

      {/* ── 9. CLEANING VS VERIFICATION ────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Email list cleaning vs email verification</h2>
        <p className={proseP}>
          They use the same checks. Email verification answers the question for one address. Email list cleaning runs those checks on a whole file and gives you back a list you can send to. You&apos;ll also see it called email scrubbing or using an email list cleaner. It&apos;s the same job.
        </p>
        <p className={proseP}>
          To check a single address, use the{' '}
          <Link href="/email-checker" className="text-indigo-600 font-bold hover:underline">
            free email checker
          </Link>
          . To see if an address is a throwaway inbox, use the{' '}
          <Link href="/disposable-email-checker" className="text-indigo-600 font-bold hover:underline">
            disposable email checker
          </Link>
          .
        </p>
      </section>

      {/* ── 10. FAQ ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Email list cleaning FAQ</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* ── 11. CTA BLOCK ──────────────────────────────────────── */}
      <AltCtaBand
        headline="Clean your email list in minutes"
        supporting="1,000 free credits, no card needed. Up to 50,000 addresses per file."
        buttonText="Clean my list free"
      />

      {/* ── 12. RELATED TOOLS & GUIDES ─────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-12 space-y-8">
          <h2 className={sectionTitle}>Related tools and guides</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RELATED_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-300 hover:shadow-md transition-all card-vivid-shadow"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    {item.title}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
