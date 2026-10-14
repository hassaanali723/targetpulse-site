import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Wordmark from '@/components/Wordmark'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import VerifierConsole from '@/components/landing/VerifierConsole'
import RatingChips from '@/components/landing/RatingChips'
import AwardRow from '@/components/landing/AwardRow'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import CatchAllToggleCard from '@/components/catchall/CatchAllToggleCard'
import { RAW_OFFERS } from '@/components/landing/pricingOffers'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  Globe, Mail, CheckCircle2, AlertCircle, AlertTriangle, ArrowRight, Check,
  Users, Building2, Megaphone, MailCheck, ShieldCheck, Server, HelpCircle, ScanSearch,
} from 'lucide-react'

// Rebuilt 2026-10-14 from SEO-Plan/29-catch-all-competitor-analysis.md (16 ranking
// pages crawled, Ahrefs US/UK/IN data). Keyword groups, monthly across US+UK+IN:
//   catch all email verifier / catchall email verifier / catch all verifier: ~350
//   catch-all email verification (+ "tool"): ~110
//   catch all email checker / verify catch all email: ~60
// Informational terms (what is a catch-all email, catch all email address) belong
// to /blog/what-is-a-catch-all-email-address; this page answers them briefly.
// Every number here was already on the site before the rebuild: 98.5% accuracy,
// 1 credit per email, 1,000 free credits, unknown refunded, the 30% / 80% split
// from the in-app toggle, the 48,028-email example.

const CANONICAL = '/catch-all-verification'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const prices = RAW_OFFERS.map((o) => o.price)
const tenK = RAW_OFFERS.find((o) => o.credits === 10000)

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Catch-All Email Verifier',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Email Verification',
  operatingSystem: 'Web',
  description:
    'Catch-all email verifier that returns valid or invalid for addresses on catch-all and accept-all domains, including mailboxes behind Mimecast, Proofpoint and Barracuda.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Catch-all and accept-all addresses resolved to valid or invalid',
    'Free single-address catch-all email checker, no signup',
    'Catch-all verification inside bulk list uploads',
    'Standalone Catch-All Detection task for addresses another tool marked risky, accept-all or unknown',
    'Addresses behind Secure Email Gateways such as Mimecast, Proofpoint and Barracuda',
    '1 credit per email, with unknown results refunded',
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

const signals = [
  {
    Icon: Mail,
    wrap: 'bg-indigo-600 shadow-indigo-600/10',
    title: 'Mailbox check',
    body: 'We check whether the mailbox itself exists, not only whether the domain accepts mail. A standard check gets a general yes from the server and stops. We keep checking until we have a result.',
  },
  {
    Icon: Globe,
    wrap: 'bg-violet-600 shadow-violet-600/10',
    title: 'Domain trust signals',
    body: 'We look at how the domain is set up: its SPF, DKIM and DMARC records, its SSL certificate and its hosting. A domain that is set up properly is more likely to have real mailboxes.',
  },
  {
    Icon: ShieldCheck,
    wrap: 'bg-emerald-500 shadow-emerald-500/10',
    title: 'Email gateway handling',
    body: 'Some addresses sit behind a Secure Email Gateway such as Mimecast, Proofpoint or Barracuda. Other tools cannot see past the gateway, so they mark these addresses as unknown. We verify them directly.',
  },
]

const detectSteps = [
  {
    Icon: Server,
    title: 'Find the mail server',
    body: (
      <>
        The verifier looks up the domain&apos;s{' '}
        <Link href="/glossary/mx-record" className="text-indigo-600 font-bold hover:underline">MX record</Link>. This is
        the DNS entry that names the server that receives the domain&apos;s email.
      </>
    ),
  },
  {
    Icon: HelpCircle,
    title: 'Ask about a made-up address',
    body: (
      <>
        It asks that server about a random address that cannot exist, such as qx7z41@company.example. No email is
        sent.
      </>
    ),
  },
  {
    Icon: ScanSearch,
    title: 'Read the answer',
    body: (
      <>
        If the server rejects the made-up address, the domain is not catch-all, and a normal mailbox check works. If
        the server accepts it, the domain is catch-all.
      </>
    ),
  },
]

const handling = [
  {
    method: 'Detects the catch-all domain and stops',
    shows: '"Risky" or "accept-all"',
    use: 'You have to guess. Send and risk bounces, or delete contacts who may be real.',
  },
  {
    method: 'Cannot get past a Secure Email Gateway (SEG)',
    shows: '"Unknown"',
    use: 'The tool cannot even tell whether the domain is catch-all. You learn nothing about the address.',
  },
  {
    method: 'Gives a risk score',
    shows: 'A number, for example 60 out of 100',
    use: 'You pick a cut-off yourself. A score is not proof that the mailbox exists.',
  },
  {
    method: 'Verifies the mailbox (Giggal.ai)',
    shows: '"Valid" or "invalid"',
    use: 'Works for catch-all domains and for addresses behind a gateway. Send to the valid ones. Remove the invalid ones.',
    ours: true,
  },
]

const resultsTable = [
  {
    Icon: CheckCircle2,
    tone: 'text-emerald-700',
    result: 'Valid',
    means: 'The mailbox exists, so mail sent to it should arrive.',
    todo: 'Keep it and send.',
  },
  {
    Icon: AlertCircle,
    tone: 'text-rose-700',
    result: 'Invalid',
    means: 'No real mailbox sits behind the address, even though the server said yes.',
    todo: 'Remove it. Mail sent there can bounce later or go unread.',
  },
  {
    Icon: HelpCircle,
    tone: 'text-slate-600',
    result: 'Unknown',
    means: 'Rare. We could not get a clear answer, for example because the server did not respond.',
    todo: 'Try again later. The credit is refunded.',
  },
  {
    Icon: AlertTriangle,
    tone: 'text-amber-700',
    result: 'Risky or accept-all (from another tool)',
    means: 'The other tool found a catch-all domain but did not check the mailbox.',
    todo: 'Verify those addresses here to get valid or invalid.',
  },
  {
    Icon: HelpCircle,
    tone: 'text-slate-600',
    result: 'Unknown (from another tool)',
    means: 'Usually an address behind a Secure Email Gateway. The other tool could not even tell whether the domain is catch-all.',
    todo: 'Verify those addresses here to get valid or invalid.',
  },
]

const audience = [
  { Icon: Megaphone, wrap: 'bg-indigo-600 shadow-indigo-600/10', title: 'Cold outreach teams', body: 'Send only to verified contacts. Fewer bounces keep your sending domain in good standing.' },
  { Icon: Building2, wrap: 'bg-violet-600 shadow-violet-600/10', title: 'Marketing agencies', body: 'Verify every client list with the same catch-all email verifier, so results and reports stay consistent.' },
  { Icon: Users, wrap: 'bg-blue-600 shadow-blue-600/10', title: 'Sales operations', body: 'Keep your CRM full of contacts that really receive your sequences and product updates.' },
  { Icon: MailCheck, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Newsletter publishers', body: 'Remove addresses that look real but never receive mail, so your open and click rates stay accurate.' },
]

const faqs: FaqItem[] = [
  {
    q: 'What is a catch-all email domain?',
    a: 'A catch-all domain accepts email for every address, even addresses that do not exist. Its mail server says yes to any address, so a normal check cannot tell whether a real mailbox is behind it.',
  },
  {
    q: 'What does catch-all mean in email verification?',
    a: 'It means the domain accepts every address, so the check could not confirm the mailbox. Most tools then mark the address as "risky" or "accept-all". A catch-all email verifier checks further and returns valid or invalid.',
  },
  {
    q: 'Can you verify a catch-all email address?',
    a: 'Yes. A standard check cannot, because the server says yes to every address. Giggal.ai uses mailbox, domain and gateway signals to return valid or invalid. You can verify catch-all emails one at a time, free, with the catch-all email checker on this page.',
  },
  {
    q: 'Is catch-all the same as accept-all?',
    a: 'Yes. Catch-all, catchall and accept-all are three names for the same setup. The mail server accepts mail for any address at the domain. Different email verifiers just use different labels.',
  },
  {
    q: 'Is it safe to send to a catch-all email address?',
    a: 'Not before you verify it. Some of these addresses are real and some are not. Mail to a fake one can bounce or go unread, and a high bounce rate hurts your sender reputation. Verify first, then send to the valid ones.',
  },
  {
    q: 'Why does my email verifier mark catch-all emails as risky or accept-all?',
    a: 'Because the mail server said yes to every address, including made-up ones. The tool cannot tell a real mailbox from a fake one, so it marks the address risky or accept-all and stops. Upload those addresses to a catch-all verifier to get a valid or invalid result for each one.',
  },
  {
    q: 'Why does my email verifier show some addresses as unknown?',
    a: 'Usually because the address sits behind a Secure Email Gateway such as Mimecast, Proofpoint or Barracuda. The gateway hides the mailbox, so the tool cannot even tell whether the domain is catch-all. Giggal.ai verifies these addresses and returns valid or invalid.',
  },
  {
    q: 'Does catch-all email verification cost extra credits?',
    a: 'No. Catch-all verification costs a flat 1 credit per email, the same as a standard verification.',
  },
  {
    q: 'How accurate is catch-all verification?',
    a: 'Around 98.5% on standard business lists. The result is based on whether the mailbox exists, not only on the server’s first answer, so it is the result that holds up when you send.',
  },
  {
    q: 'Can I verify only the catch-all emails from a list I cleaned somewhere else?',
    a: 'Yes. Open Catch-All Detection in your dashboard, paste or upload only the addresses you want to check, and verify just those. Standalone checks cost the same flat 1 credit per email.',
  },
  {
    q: 'What happens if a Giggal.ai catch-all check comes back as unknown?',
    a: 'That is rare. If we cannot reach a result, the credit is refunded automatically. You only pay for verifications we can complete.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const eyebrow = 'text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600'
const inlineLink = 'text-indigo-600 font-bold hover:underline'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export default function CatchAllVerificationPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Catch-All Email Verifier', CANONICAL)} />
      <JsonLd data={softwareLd} />
      <JsonLd data={faqPageLd(faqs)} />
      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* Same layout as /email-checker: centered heading, then the tool right under it. */}
      <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Catch-all email verifier:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            find out if a catch-all address is valid
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
          A catch-all domain says yes to every address, so most email verifiers mark these emails
          &quot;risky&quot; or &quot;accept-all&quot;. Paste an address into this free catch-all email checker.
          It runs catch-all email verification on the mailbox and returns valid or invalid, with 98.5% accuracy. It
          also verifies mailboxes behind SEGs like Mimecast and Proofpoint, which other tools mark as unknown.
        </p>
      </section>

      {/* ── THE TOOL ─────────────────────────────────────────── */}
      <section id="checker" className="cv-section max-w-5xl mx-auto px-6 pb-16 scroll-mt-24">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          emailFromQuery
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          No signup, no card. One address per check.
        </p>
        <p className="mt-3 text-center">
          <a
            href={APP_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[13px] font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            Need to check a whole list? Create an account and get 1,000 free credits. No card needed.
            <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </a>
        </p>
        {/* Review-site ratings, the same chips as /bulk-email-verifier. */}
        <RatingChips className="mt-6" />
      </section>

      {/* Award badges from SourceForge, Slashdot and Top Business Software. */}
      <AwardRow />

      {/* ── WHOLE LISTS: THE IN-APP TOGGLE ─────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="min-w-0 space-y-6">
            <p className={eyebrow}>Whole Lists</p>
            <h2 className={sectionTitle}>Verify catch-all emails in a whole list</h2>
            <p className={proseP}>
              When you upload a list, turn on Include Catch-All Verification. The catch-all addresses in the Risky
              column are then checked one by one. Each one moves to deliverable or undeliverable.
            </p>
            <p className={proseP}>
              Try the toggle on the example list to see the change. Running a list full of gateways? See how we
              verify{' '}
              <Link href="/seg-email-verification" className={inlineLink}>
                emails protected by SEG gateways
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
              >
                Start verifying catch-all emails
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/pricing"
                className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                See pricing
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-500">
              {['1,000 free credits', 'No card needed', 'Credits never expire'].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* The toggle from the app's upload screen. */}
          <div className="min-w-0">
            <CatchAllToggleCard />
          </div>
        </div>
      </section>

      {/* ── WHAT IS A CATCH-ALL DOMAIN ─────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className={eyebrow}>The Background</p>
          <h2 className={sectionTitle}>What is a catch-all email domain?</h2>
        </div>
        <div className={`space-y-5 ${proseP}`}>
          <p>
            A catch-all domain accepts email for every address, even addresses that do not exist. The domain is
            the part after the @. Take the domain company.example. If it is catch-all, its mail server accepts
            ann@company.example, sales@company.example and qx7z41@company.example. It says yes to all three,
            even if only Ann is a real person.
          </p>
          <p>
            Companies set this up so they never miss an email, for example when a sender misspells a name. On a
            typical sales or marketing list, around 30 percent of contacts sit on catch-all domains.
          </p>
          <p>
            Most verification tools see this setup and stop. They label every address on it as risky or
            accept-all. That leaves two options. You can send and risk bounces, spam traps and a
            damaged sender reputation. Or you can delete the contacts and lose real customers.
          </p>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight pt-2">
            Catch-all and accept-all mean the same thing
          </h3>
          <p>
            Some verifiers mark these emails &quot;accept-all&quot;, others &quot;risky&quot;. The setup itself is
            called catch-all, catchall or accept-all. All three names describe a mail server that returns 250 OK for
            any recipient. 250 OK is the
            server&apos;s code for &quot;I accept this email&quot;. Whatever label your last tool used, catch-all
            verification checks the same thing.
          </p>
          <p>
            If you are new to the term, our blog covers{' '}
            <Link href="/blog/what-is-a-catch-all-email-address" className={inlineLink}>
              what a catch-all email address is
            </Link>{' '}
            in plain language. To check any address, catch-all or not, use the{' '}
            <Link href="/email-checker" className={inlineLink}>
              free email checker
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── WHY A NORMAL CHECK FAILS ───────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className={eyebrow}>The Problem</p>
          <h2 className={sectionTitle}>Why a normal email verifier cannot check a catch-all address</h2>
        </div>
        <div className={`space-y-5 ${proseP}`}>
          <p>
            An email verifier checks a mailbox by talking to the mail server. It does not send an email. It asks
            the server one question: &quot;Do you accept mail for this address?&quot; Here is what happens with company.example.
          </p>
          <ol className="space-y-3">
            {[
              <>The verifier asks about <b className="text-slate-800">ann@company.example</b>. The server answers 250 OK.</>,
              <>The verifier asks about <b className="text-slate-800">qx7z41@company.example</b>, an address nobody uses. The server also answers 250 OK.</>,
              <>Both answers are the same. So the yes for Ann does not prove that her mailbox exists.</>,
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[12px] font-black text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p>
            This is why a standard check marks these addresses as risky or accept-all. The server
            never says no, so the check has nothing to go on. Real catch-all email verification needs more
            signals than the server&apos;s yes.
          </p>
        </div>
      </section>

      {/* ── HOW A CATCH-ALL DOMAIN IS DETECTED ─────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>Detection</p>
          <h2 className={sectionTitle}>How a catch-all domain is detected</h2>
          <p className={proseP}>
            Detection is the first step. It tells you that the domain is catch-all. It does not tell you whether
            the address is real.
          </p>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {detectSteps.map((s, i) => (
            <li key={s.title} className={`${card} relative p-6`}>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <s.Icon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-black text-white ring-2 ring-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── DETECTED VS VERIFIED + TABLE ───────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>Detected vs Verified</p>
          <h2 className={sectionTitle}>Catch-all detected vs catch-all verified</h2>
          <p className={proseP}>
            Many tools do the detection step and stop. Their result says &quot;risky&quot; or &quot;accept-all&quot;
            and leaves the choice to you. A catch-all verifier goes one step further. It checks whether the mailbox itself is
            real and returns valid or invalid.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-slate-900 mb-4">How email verifiers handle catch-all and gateway addresses</h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-5 font-bold">What the tool does</th>
                  <th className="py-3 px-5 font-bold">What you see</th>
                  <th className="py-3 px-5 font-bold">What you can do with it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {handling.map((r) => (
                  <tr key={r.method} className={r.ours ? 'bg-emerald-50/50' : undefined}>
                    <td className={`py-3 px-5 font-bold ${r.ours ? 'text-emerald-800' : 'text-slate-900'}`}>{r.method}</td>
                    <td className="py-3 px-5 text-slate-700">{r.shows}</td>
                    <td className="py-3 px-5 text-slate-600">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW GIGGAL.AI VERIFIES: 3 SIGNALS ─────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>How It Works</p>
          <h2 className={sectionTitle}>How Giggal.ai verifies catch-all emails</h2>
          <p className={proseP}>
            Every catch-all address goes through three checks. They combine into one result: valid or invalid.
            You do not get a technical report to read.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signals.map(({ Icon, wrap, title, body }) => (
            <div
              key={title}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON: TYPICAL VERIFIER vs GIGGAL.AI ─────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>Example</p>
          <h2 className={sectionTitle}>Catch-all results: a typical verifier vs Giggal.ai</h2>
          <p className={proseP}>
            The same example list of 48,028 emails, checked two ways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Typical verifier card */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-5">
            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">A typical verifier</span>
            <div className="text-[15px] font-bold text-slate-700">48,028 emails verified</div>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Deliverable</span>
                </div>
                <span className="text-lg font-black text-emerald-700">31,566</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 text-rose-700">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Undeliverable</span>
                </div>
                <span className="text-lg font-black text-rose-700">5,982</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Risky / accept-all</span>
                </div>
                <span className="text-lg font-black text-amber-700">10,480</span>
              </div>
            </div>

            <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
              10,480 contacts you cannot safely send to. They are all on catch-all domains. In this example, around
              80 percent of them are real, but the result does not say which ones.
            </p>
          </div>

          {/* Giggal.ai card */}
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 relative overflow-hidden space-y-5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="flex items-center bg-indigo-50/60 border border-indigo-100/60 px-3 py-1.5 rounded-xl">
                <Wordmark className="text-sm sm:text-base" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700">With catch-all verification</span>
            </div>

            <div className="text-[15px] font-bold text-slate-700">48,028 emails verified</div>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Valid</span>
                </div>
                <span className="text-lg font-black text-emerald-700">39,950</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2 text-rose-700">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-[13px] font-bold">Invalid</span>
                </div>
                <span className="text-lg font-black text-rose-700">8,078</span>
              </div>
            </div>

            <p className="text-[12px] text-indigo-800 font-semibold leading-relaxed">
              In this example, 8,384 more contacts move from risky to valid. Every address gets a valid or
              invalid result.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESULTS TABLE ──────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>Results</p>
          <h2 className={sectionTitle}>What each catch-all verification result means</h2>
          <p className={proseP}>Each address on a catch-all domain ends in one of these results.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="py-3 px-5 font-bold">Result</th>
                <th className="py-3 px-5 font-bold">What it means</th>
                <th className="py-3 px-5 font-bold">What to do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {resultsTable.map((r) => (
                <tr key={r.result}>
                  <td className={`py-3 px-5 font-bold whitespace-nowrap ${r.tone}`}>
                    <span className="inline-flex items-center gap-2">
                      <r.Icon className="w-4 h-4 shrink-0" />
                      {r.result}
                    </span>
                  </td>
                  <td className="py-3 px-5 text-slate-700">{r.means}</td>
                  <td className="py-3 px-5 text-slate-600">{r.todo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── TWO WAYS TO RUN IT ─────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>In the App</p>
          <h2 className={sectionTitle}>Two ways to run catch-all verification</h2>
          <p className={proseP}>
            Inside the app, the catch-all email verification tool works in two ways. Both cost 1 credit per email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-indigo-600 shadow-indigo-600/10">
              <span className="text-lg font-black">1</span>
            </div>
            <h3 className="text-base font-black text-slate-900 leading-tight">During bulk verification</h3>
            <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-relaxed">
              When you upload a list to the{' '}
              <Link href="/bulk-email-verifier" className={inlineLink}>bulk email verifier</Link>, turn on the
              Include Catch-All Verification toggle. Every regular and catch-all address is checked in one run, at
              a flat 1 credit per email. The catch-all checks run alongside the regular ones, so your list
              finishes in the same time.
            </p>
            <div className="text-[12px] text-slate-400 font-bold">Best for fresh lists you have not verified yet.</div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 bg-emerald-500 shadow-emerald-500/10">
              <span className="text-lg font-black">2</span>
            </div>
            <h3 className="text-base font-black text-slate-900 leading-tight">As a standalone Catch-All Detection task</h3>
            <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-relaxed">
              Already ran a list without catch-all verification? Open Catch-All Detection in your dashboard. Paste
              or upload only the catch-all addresses, and verify just those at the same 1 credit per email.
            </p>
            <div className="text-[12px] text-slate-400 font-bold">Best for lists you cleaned somewhere else.</div>
          </div>
        </div>
      </section>

      {/* ── CATCH-ALL EMAILS YOU ALREADY HAVE ──────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className={eyebrow}>Existing Lists</p>
          <h2 className={sectionTitle}>What to do with catch-all emails you already have</h2>
        </div>
        <div className={`space-y-5 ${proseP}`}>
          <p>
            Maybe another tool cleaned your list. It marked the catch-all addresses as risky or accept-all, and
            the addresses behind email gateways as unknown. You do not need to verify the whole list again.
            Verify catch-all emails only, in three steps.
          </p>
          <ol className="space-y-3">
            {[
              'Export only the rows marked risky, accept-all or unknown.',
              'Open Catch-All Detection in your Giggal.ai dashboard. Upload that file or paste the addresses.',
              'Download the results. Keep the valid addresses and remove the invalid ones.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[12px] font-black text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p>
            Until you verify them, do not send to these addresses in one large batch. Many bounces from one
            send can hurt your{' '}
            <Link href="/glossary/domain-reputation" className={inlineLink}>domain reputation</Link>. You can
            check your numbers with the{' '}
            <Link href="/bounce-rate-calculator" className={inlineLink}>bounce rate calculator</Link>.
          </p>
        </div>
      </section>

      {/* ── SEG GATEWAYS ───────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className={eyebrow}>Email Gateways</p>
          <h2 className={sectionTitle}>Catch-all verification behind Mimecast, Proofpoint and Barracuda</h2>
        </div>
        <div className={`space-y-5 ${proseP}`}>
          <p>
            A Secure Email Gateway (SEG) is a filter in front of a company&apos;s mailboxes. Mimecast, Proofpoint
            and Barracuda are common examples. The gateway receives the mail first and checks it for spam and
            threats.
          </p>
          <p>
            A normal email verifier cannot see past the gateway. It cannot even tell whether the domain is
            catch-all or not, so it marks these addresses as unknown. A catch-all email verifier like Giggal.ai
            checks these addresses too and returns valid or invalid, for the same 1 credit per email.
          </p>
          <p>
            Read more about{' '}
            <Link href="/seg-email-verification" className={inlineLink}>SEG email verification</Link> and{' '}
            <Link href="/mimecast-email-verification" className={inlineLink}>Mimecast email verification</Link>.
          </p>
        </div>
      </section>

      {/* ── WHO IT IS FOR ──────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>Who Uses It</p>
          <h2 className={sectionTitle}>Who uses a catch-all email verifier</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map(({ Icon, wrap, title, body }) => (
            <div
              key={title}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={eyebrow}>Pricing</p>
          <h2 className={sectionTitle}>Catch-all verification pricing: 1 credit per email</h2>
          <p className={proseP}>
            Every email verification costs exactly 1 credit, including catch-all, accept-all and SEG-protected
            addresses. There are no monthly minimums, and credits never expire.
            {tenK && <> For example, {tenK.credits.toLocaleString('en-US')} credits cost ${tenK.price.toFixed(2)}.</>}
          </p>
        </div>

        {/* One card, not two. A Standard card and a Catch-All card both
            reading "1 credit" invites the reader to hunt for the difference,
            which is the opposite of what flat pricing is meant to communicate.
            The address types belong under the single price, as a list of what
            it covers. */}
        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-8 card-vivid-shadow ring-2 ring-indigo-600/5 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Every address
            </div>
            <div>
              <div className="text-5xl font-black text-indigo-700 leading-none">1 credit</div>
              <div className="text-[13px] text-slate-500 font-semibold mt-2">per email verification</div>
            </div>
            <ul className="pt-4 border-t border-slate-100 space-y-2 text-left">
              {['Standard addresses', 'Catch-all and accept-all domains', 'SEG-protected mailboxes', 'Unknown results refunded'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-[13px] font-semibold text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-800 font-extrabold text-sm transition-colors"
          >
            See full pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-center text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto">
          Weighing this against another tool? See{' '}
          <Link
            href="/alternatives"
            className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors"
          >
            how Giggal.ai compares to other verifiers
          </Link>
          .
        </p>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-16 pb-24 border-t border-slate-200 space-y-16">
        <div className="text-center space-y-3">
          <p className={eyebrow}>FAQ</p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Catch-all email verification FAQ
          </h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand
        headline="Verify catch-all emails free"
        supporting="1,000 free credits, no card needed. A catch-all check costs the same 1 credit as any other address."
        buttonText="Start verifying for free"
      />

      <Footer />
    </main>
  )
}
