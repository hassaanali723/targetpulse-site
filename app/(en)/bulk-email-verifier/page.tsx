import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Upload,
  ScanSearch,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Timer,
  Users,
  Copy,
  Send,
  UserPlus,
  Archive,
  Database,
  Code2,
  Workflow,
  Bot,
  Sparkles,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import BulkScanDemo from '@/components/landing/BulkScanDemo'
import MotionRuntime from '@/components/landing/MotionRuntime'
import RatingChips from '@/components/landing/RatingChips'
import AwardRow from '@/components/landing/AwardRow'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import { RAW_OFFERS } from '@/components/landing/pricingOffers'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// The bulk page. Built 2026-10-12 from the Ahrefs country exports
// (SEO-Plan/ahrefs-exported-files/countries, Oct 7 pulls for US, UK, CH, MX).
// Primary: "bulk email verifier" (US 700, UK 200, IN 400, KD 45, TP 14,000).
// Secondary in H2s and FAQ: bulk email verification (US 300, UK 100, KD 57),
// bulk email checker (US 350, KD 65), free bulk email verifier (US 250, UK 100,
// KD 50), bulk email validator / validation (US 150 each), email list
// verification (US 250, KD 76), bulk email verifier software (KD 44) and
// service (KD 36), mass email verification (KD 46).
// Left to /email-list-cleaning on purpose: "email list cleaning", "clean email
// list", "email list scrubbing". The home page keeps its own title.
// Every fact here is already stated elsewhere on the site: 50,000 per file,
// CSV or Excel, 1 credit per address, 1,000 free credits, credits never
// expire, unknown refunded, 98.5% on business lists, under 3% bounce.

const CANONICAL = '/bulk-email-verifier'
const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const TITLE = 'Bulk Email Verifier: Free Bulk Email Checker for Lists'
const DESC =
  'Bulk email verifier for CSV and Excel lists of up to 50,000 addresses. Every row gets a valid or invalid result, catch-all included. Start with 1,000 free credits.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: CANONICAL, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai bulk email verifier' }],
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const prices = RAW_OFFERS.map((o) => o.price)
const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Bulk Email Verifier',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Email Verification',
  operatingSystem: 'Web',
  description: DESC,
  publisher: { '@id': ORG_ID },
  featureList: [
    'Bulk email verification from CSV or Excel, up to 50,000 addresses per file',
    'A valid, invalid or unknown result on every row',
    'Catch-all addresses resolved to valid or invalid',
    'Disposable, role-based and duplicate address detection',
    'Results downloaded as a CSV',
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    price: Math.min(...prices).toFixed(2),
    lowPrice: Math.min(...prices).toFixed(2),
    highPrice: Math.max(...prices).toFixed(2),
    offerCount: String(RAW_OFFERS.length),
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is a bulk email verifier?',
    a: 'A bulk email verifier checks a whole list of email addresses in one go, instead of one address at a time. You upload a file, and every address gets a result: valid, invalid or unknown. It is also called a bulk email checker or bulk email validator.',
  },
  {
    q: 'How many emails can I verify at once?',
    a: 'Up to 50,000 addresses per file. If your list is bigger, split it into several files and upload each one.',
  },
  {
    q: 'Is there a free bulk email verifier?',
    a: 'Yes. Every new account gets 1,000 free credits with no card needed. One credit verifies one address, so you can verify a list of up to 1,000 addresses for free.',
  },
  {
    q: 'Is free bulk email validation really free?',
    a: 'Yes. Your first 1,000 addresses are free, with no card needed. The free credits never expire, so you can use them whenever you want. You only pay if you need to verify more than 1,000 addresses.',
  },
  {
    q: 'How long does bulk email verification take?',
    a: 'Most lists come back in minutes.',
  },
  {
    q: 'Which file formats can I upload?',
    a: 'CSV or Excel. You download the results as a CSV, with a result on every row.',
  },
  {
    q: 'Does the bulk email checker send emails to my list?',
    a: 'No. It asks each mail server whether the mailbox exists and stops before any message is sent. Nobody on your list receives anything.',
  },
  {
    q: 'How much does bulk email verification cost?',
    a: 'One credit per address, with catch-all checks included. 10,000 addresses cost $9.90 and 100,000 cost $76. You pay once, with no monthly plan, and credits never expire.',
  },
  {
    q: 'What happens to catch-all addresses?',
    a: 'Each one is checked and returned as valid or invalid, for the same 1 credit as any other address. Many bulk email validators mark them all as "risky" instead.',
  },
  {
    q: 'What does "unknown" mean, and do I pay for it?',
    a: 'Unknown means the mail server did not give a clear answer, often because it delays new senders on purpose (greylisting). Try those addresses again later. Credits for unknown results are refunded.',
  },
  {
    q: 'Is bulk email validation the same as bulk email verification?',
    a: 'Yes. Validation, verification and checking are three words for the same job: finding out which addresses on a list can receive mail.',
  },
  {
    q: 'How accurate is the bulk email verifier?',
    a: 'Giggal.ai measures 98.5% accuracy on business lists. Lists verified with it usually bounce under 3%.',
  },
  {
    q: 'Is my list kept private?',
    a: 'Giggal.ai is run by TargetPulse Ltd and handles personal data under the GDPR. The privacy policy at giggal.ai/privacy-policy explains what is collected, how it is used and how long it is kept.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
const inlineLink = 'text-indigo-600 font-bold hover:underline'

const fmtCredits = (n: number) => n.toLocaleString('en-US')
const fmtPrice = (n: number) => `$${n.toFixed(2).replace(/\.00$/, '')}`
const per1k = (o: { credits: number; price: number }) => `$${((o.price / o.credits) * 1000).toFixed(2)}`

export default function BulkEmailVerifierPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Bulk Email Verifier', CANONICAL)} />
      <JsonLd data={softwareLd} />
      <JsonLd data={faqPageLd(faqs)} />
      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
              Bulk email verifier:{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
                check your whole email list at once
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Upload a CSV or Excel file and this bulk email verifier checks every address on it.
              Each row gets a valid or invalid result, including catch-all addresses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={SIGNUP_URL}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-lg shadow-indigo-600/25 transition-colors"
              >
                Verify a list free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold hover:border-indigo-200 transition-colors"
              >
                See pricing
              </Link>
            </div>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-500">
              {['1,000 free credits', 'No card needed', 'Credits never expire'].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <BulkScanDemo
            summary={[
              { tone: 'valid', label: 'Valid', value: '4,145' },
              { tone: 'invalid', label: 'Invalid', value: '579' },
              { tone: 'unknown', label: 'Unknown', value: '96' },
            ]}
          />
        </div>

        {/* Facts row */}
        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: '50,000', l: 'addresses per file' },
            { v: '98.5%', l: 'accuracy on business lists' },
            { v: '1 credit', l: 'per address, catch-all included' },
            { v: '<3%', l: 'bounce rate after verification, usually' },
          ].map((s) => (
            <div key={s.l} className={`${card} p-5 text-center`}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className="block text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">{s.v}</span>
                <span className="mt-1 block text-[13px] font-semibold text-slate-500">{s.l}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Review-site ratings, the same chips as /email-checker. */}
        <RatingChips className="mt-10" />
      </section>

      {/* Award badges from SourceForge, Slashdot and Top Business Software. */}
      <AwardRow />

      {/* ── DEFINITION ───────────────────────────────────────── */}
      {/* A short, quotable definition near the top of the page. */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>What is bulk email verification?</h2>
        <p className={proseP}>
          Bulk email verification checks a whole list of email addresses at once and tells you which ones can
          receive mail. A bulk email verifier looks up each domain&apos;s mail servers and asks whether each mailbox
          exists, without sending an email. You remove the addresses that would bounce before you send, which
          protects your sender reputation and your deliverability.
        </p>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>How bulk email verification works</h2>
          <p className={`${proseP} mt-4`}>
            Three steps, and no email is sent to anyone on your list. Most lists come back in minutes.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { Icon: Upload, title: 'Upload your list', text: 'Add a CSV or Excel file with up to 50,000 email addresses. For a bigger list, split it into a few files.' },
            { Icon: ScanSearch, title: 'Every address is checked', text: 'The bulk email checker looks up each domain’s mail servers and asks whether the mailbox exists. It also flags disposable, role-based, duplicate and catch-all addresses.' },
            { Icon: Download, title: 'Download the results', text: 'You get a CSV with a result on every row. Keep the valid addresses, remove the invalid ones and retry the unknown ones later.' },
          ].map((s, i) => (
            <li key={s.title} className={`${card} relative p-6`}>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <s.Icon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-black text-white ring-2 ring-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>What the bulk email checker returns for each address</h2>
          <p className={`${proseP} mt-4`}>Every row ends in one of three results.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { Icon: CheckCircle2, title: 'Valid', text: 'The mailbox exists, so mail sent to it should arrive. Keep these addresses.', tone: 'border-emerald-200 bg-emerald-50/60', icon: 'bg-emerald-500 text-white', label: 'text-emerald-700' },
            { Icon: XCircle, title: 'Invalid', text: 'The format is broken, the domain has no mail server, or the mailbox does not exist. Mail sent here will bounce. Remove these.', tone: 'border-rose-200 bg-rose-50/60', icon: 'bg-rose-500 text-white', label: 'text-rose-700' },
            { Icon: Clock, title: 'Unknown', text: 'The mail server did not give a clear answer, often because of greylisting. Retry these later. Credits for unknown results are refunded.', tone: 'border-slate-200 bg-slate-50', icon: 'bg-slate-400 text-white', label: 'text-slate-600' },
          ].map((r) => (
            <div key={r.title} className={`rounded-2xl border p-6 ${r.tone}`}>
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${r.icon}`}>
                  <r.Icon className="h-5 w-5" />
                </span>
                <h3 className={`text-xl font-extrabold ${r.label}`}>{r.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium">{r.text}</p>
            </div>
          ))}
        </div>
        <div className={`mt-8 ${card} rounded-3xl p-6 md:p-8`}>
          <p className="text-sm md:text-base font-semibold text-slate-800">Each row also shows these flags, so you can decide what to keep:</p>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: ShieldCheck, lead: 'Catch-all', rest: ', resolved to valid or invalid instead of left as risky' },
              { Icon: Timer, lead: 'Disposable', rest: ', a temporary inbox that will stop working', href: '/disposable-email-checker' },
              { Icon: Users, lead: 'Role-based', rest: ', such as info@ or sales@, a shared inbox and not a person' },
              { Icon: Copy, lead: 'Duplicate', rest: ', the same address more than once in your file' },
            ].map((f) => (
              <li key={f.lead} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <f.Icon className="h-[18px] w-[18px]" />
                </span>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  <span className="font-bold text-slate-900">
                    {f.href ? <Link href={f.href} className="hover:text-indigo-700 hover:underline">{f.lead}</Link> : f.lead}
                  </span>
                  {f.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Catch-all addresses get a real result</h2>
        <p className={proseP}>
          Some company mail servers accept every address, real or made up. That is a{' '}
          <Link href="/catch-all-verification" className={inlineLink}>catch-all domain</Link>. A normal check gets
          a yes for every address on it, so it cannot tell a real mailbox from a typo.
        </p>
        <p className={proseP}>
          Many bulk email validators stop there and mark every catch-all address as &quot;risky&quot;. On B2B
          lists, that can be a large share of your contacts, and many of them are real people. You are left to
          guess which ones to send to.
        </p>
        <p className={proseP}>
          Giggal.ai checks each catch-all address and returns valid or invalid, for the same 1 credit as any
          other address. It also works on domains behind{' '}
          <Link href="/seg-email-verification" className={inlineLink}>security gateways like Proofpoint and Mimecast</Link>
          , where other tools often return unknown.
        </p>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>Free bulk email verifier: start with 1,000 credits</h2>
          <p className={`${proseP} mt-4`}>
            Every new account gets 1,000 free credits, with no card needed. That verifies a list of up to 1,000
            addresses for free. After that, this bulk email verification service is pay as you go. You buy
            credits once, there is no monthly plan, and credits never expire.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3 px-5 font-bold">Credits (addresses)</th>
                <th className="py-3 px-5 font-bold">Price</th>
                <th className="py-3 px-5 font-bold">Per 1,000 addresses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-emerald-50/50">
                <td className="py-3 px-5 font-bold text-slate-900">1,000</td>
                <td className="py-3 px-5 font-bold text-emerald-700">Free</td>
                <td className="py-3 px-5 text-slate-500">New accounts, no card</td>
              </tr>
              {RAW_OFFERS.map((o) => (
                <tr key={o.credits}>
                  <td className="py-3 px-5 font-semibold text-slate-900 tabular-nums">{fmtCredits(o.credits)}</td>
                  <td className="py-3 px-5 text-slate-700 tabular-nums">{fmtPrice(o.price)}</td>
                  <td className="py-3 px-5 text-slate-500 tabular-nums">{per1k(o)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500 font-medium">
          One credit verifies one address, catch-all checks included. See the full{' '}
          <Link href="/pricing" className={inlineLink}>pricing</Link>.
        </p>
      </section>

      {/* ── WHEN TO USE IT ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>When to use a bulk email verifier</h2>
          <p className={`${proseP} mt-4`}>
            Verify a list whenever you are about to send to many addresses at once. Removing dead addresses
            first keeps your deliverability high.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Send, text: 'Before a cold email campaign, so bounces do not hurt your deliverability.' },
            { Icon: UserPlus, text: 'After you collect leads from a form, an event or a lead database.' },
            { Icon: Archive, text: 'Before you email an old newsletter list that has not been used in months.' },
            { Icon: Database, text: 'Before you import contacts into your CRM or email tool.' },
          ].map((u) => (
            <li key={u.text} className={`${card} flex gap-4 p-5`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-emerald-50 text-indigo-600 ring-1 ring-indigo-100">
                <u.Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">{u.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── SOFTWARE / AUTOMATION ────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>Bulk email verifier software for your own tools</h2>
          <p className={`${proseP} mt-4`}>
            Uploading a file is one way. You can also run mass email verification from your own app or workflow.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { Icon: Code2, title: 'Email verification API', text: 'Send addresses from your app or signup form and get the result back as JSON.', href: '/email-verification-api' },
            { Icon: Workflow, title: 'Integrations', text: 'Verify new contacts automatically with Zapier or n8n.', href: '/integrations' },
            { Icon: Bot, title: 'MCP server', text: 'Verify emails from Claude, ChatGPT, Cursor and VS Code.', href: '/mcp' },
          ].map((t) => (
            <Link key={t.title} href={t.href} className={`${card} group p-6 hover:border-indigo-200 transition-colors`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <t.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 flex items-center gap-1.5 text-lg font-extrabold text-slate-900 group-hover:text-indigo-700">
                {t.title}
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{t.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── VERIFICATION VS CLEANING / ONE ADDRESS ───────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-5 md:grid-cols-2">
          <div className={`${card} rounded-3xl p-7`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              Email list verification or email list cleaning?
            </h2>
            <p className={`${proseP} mt-3`}>
              Email list verification gives every address a result. Cleaning is what you do with those results:
              you remove the invalid, disposable and duplicate addresses and keep a clean file. Both start with the
              same upload. Read more about{' '}
              <Link href="/email-list-cleaning" className={inlineLink}>email list cleaning</Link>.
            </p>
          </div>
          <div className={`${card} rounded-3xl p-7`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <ScanSearch className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              Need to check only one address?
            </h2>
            <p className={`${proseP} mt-3`}>
              Use the free{' '}
              <Link href="/email-checker" className={inlineLink}>email checker</Link>. It verifies one address at a
              time with the same checks, with no signup needed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center">
          <h2 className={sectionTitle}>Bulk email verifier FAQ</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand
        headline="Verify your email list in minutes"
        supporting="1,000 free credits, no card needed. CSV or Excel, up to 50,000 addresses per file."
        buttonText="Verify a list free"
      />

      <Footer />
    </main>
  )
}
