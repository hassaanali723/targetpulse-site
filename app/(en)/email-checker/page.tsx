import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight,
  Star,
  AtSign,
  Server,
  Inbox,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Building2,
  Router,
  Timer,
  Users,
  Mail,
  SpellCheck,
  ServerOff,
  UserX,
  Shuffle,
  TrendingDown,
  BadgeCheck,
  Send,
  Database,
  UserPlus,
  MailX,
  Globe,
  ShoppingCart,
  HelpCircle,
  FileSpreadsheet,
  Code2,
} from 'lucide-react'
import AwardRow from '@/components/landing/AwardRow'
import BulkScanDemo from '@/components/landing/BulkScanDemo'
import MotionRuntime from '@/components/landing/MotionRuntime'
import { getSourceForgeStats, PRODUCT_HUNT_RATING, CAPTERRA_RATING, G2_RATING } from '@/lib/reviewStats'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'Free Email Checker: Check if an Email Address Is Valid'
const DESC =
  'Email checker that tells you if an email address is valid. Check the mail server and the mailbox in seconds, including catch-all domains. No signup needed.'

export const metadata: Metadata = {
  // The English tool page, built for "email checker" (23,000/mo US, KD 69) and
  // the "check" wording around it: check email address (1,500, KD 0), email
  // address checker (1,500), check if email is valid (1,500), check email
  // validity (900). "Free" is in the title only (2026-10-07): 7 of the US top
  // 10 for "email checker" put it in the title, almost none in the URL, so the
  // "free" searches are served here, not on a second page. Keyword data and the
  // reasoning: SEO-Plan/26-tool-pages-keyword-plan.md. Was
  // /tools/catch-all-email-checker until 2026-09-18 (301 in next.config.js).
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/email-checker', languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email checker' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/email-checker',
    type: 'website',
  },
  // Set explicitly so this route never inherits the homepage's Twitter strings.
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

// The checker as a web application, the same markup the five localized checker
// pages carry (lib/i18n/schema.ts). No AggregateRating (site rule C10).
const webAppLd = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'WebApplication'],
  '@id': 'https://giggal.ai/email-checker#app',
  name: 'Giggal.ai Email Checker',
  url: 'https://giggal.ai/email-checker',
  inLanguage: 'en',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  isAccessibleForFree: true,
  description: DESC,
  publisher: { '@id': ORG_ID },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

// Single source of truth for the FAQ: rendered visibly AND emitted as JSON-LD.
// Every question is about checking an address. The first answer defines the
// term in one sentence, the form AI Overviews quote.
const faqs: FaqItem[] = [
  {
    q: 'What is an email checker?',
    a: 'An email checker tells you whether an email address is valid by checking its format, its mail server and the mailbox itself. It is also called an email verifier or email validator. It works without sending an email to the address.',
  },
  {
    q: 'Is an email checker the same as an email verifier?',
    a: 'Yes. Email checker, email verifier and email validator are three names for the same kind of tool. All of them verify an email address by checking its format, its mail server and the mailbox. They differ on catch-all domains. Many stop there with "risky". This one returns valid or invalid.',
  },
  {
    q: 'How does an email checker work?',
    a: 'It runs four checks in order. First the format of the address. Then the domain\'s mail server records. Then it asks the mail server whether the mailbox exists. On catch-all domains, where the server says yes to every address, Giggal.ai runs extra signals to tell a real mailbox from a fake one.',
  },
  {
    q: 'How do I check if an email address is valid?',
    a: 'Paste the address into the email checker at the top of this page and run the check. You get a result in seconds: valid, invalid or unknown, with the reason and the mail server details underneath.',
  },
  {
    q: 'Can I check if an email address exists without sending an email?',
    a: "Yes. The email checker asks the receiving mail server whether the mailbox exists and stops before any message is sent. Nothing lands in the person's inbox.",
  },
  {
    q: 'Does the email checker send an email to the address?',
    a: 'No. The check talks to the mail server only. The owner of the address never receives anything and is not told that the address was checked.',
  },
  {
    q: 'Is an email checker accurate?',
    a: 'It depends on the checker. Most are accurate on normal domains and give up on catch-all domains, where they return "risky" or "unknown". Giggal.ai keeps going on catch-all domains and returns valid or invalid, and measures 98.5% accuracy on business lists.',
  },
  {
    q: 'What does "valid" mean on a catch-all domain?',
    a: 'That the mailbox was confirmed, not just that the domain accepted the recipient. A plain catch-all label only tells you the server says yes to everything. Valid here means the address passed the extra checks that separate a real mailbox from one that will bounce.',
  },
  {
    q: 'What does "unknown" mean in an email check?',
    a: 'The mail server did not give a clear answer in time, often because it delays new senders on purpose (greylisting). The address is not proven dead. Check it again later.',
  },
  {
    q: 'How many addresses can I check here?',
    a: 'A few each hour, with no signup and no card. Each check runs the full set of checks, which is why the number is small. To check more, create an account.',
  },
  {
    q: 'Can a valid email address still bounce?',
    a: 'Yes, but rarely. A valid result means the mailbox existed at the moment of the check. Mail can still bounce if the mailbox is full, if the mail server is down for a while, if the person leaves the company after the check, or if the server blocks your sending domain. Check addresses close to the time you send.',
  },
  {
    q: 'Is my data private?',
    a: 'Giggal.ai is run by TargetPulse Ltd and handles personal data under the GDPR. The privacy policy at giggal.ai/privacy-policy explains what is collected, how it is used and how long it is kept.',
  },
  {
    q: 'Can I check a whole list here?',
    a: 'Not on this page. Create an account, upload the list as a CSV or Excel file, and every address gets the same checks. You start with 1,000 free credits and no card.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default async function EmailCheckerPage() {
  const sourceforge = await getSourceForgeStats()
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Email Checker', '/email-checker')} />
      <JsonLd data={webAppLd} />
      <JsonLd data={faqPageLd(faqs)} />
      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Email checker:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            find out if an email address is valid
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Check or verify any email address online for free. Paste it in to test the format, the mail server and the
          mailbox itself. On catch-all domains, this email checker keeps going and returns valid
          or invalid.
        </p>
      </section>

      {/* ── THE TOOL ─────────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
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
            href="https://emailverifier.giggal.ai/sign-up"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[13px] font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            Need more checks? Create an account and get 1,000 free credits. No card needed.
            <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </a>
        </p>
        {/* Ratings: SourceForge read live, Product Hunt and Capterra from
            lib/reviewStats.ts, G2 typed in there too. Logos are the ones the home review section uses.
            Visual only, no rating markup (site rule C10). */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {[
            {
              name: 'SourceForge',
              logo: '/reviews/sourceforge-logo.svg',
              href: 'https://sourceforge.net/software/product/Giggal.ai/',
              rating: sourceforge.rating,
              note: `${sourceforge.count} reviews`,
            },
            {
              name: 'Product Hunt',
              logo: '/reviews/producthunt-logo.svg',
              href: 'https://www.producthunt.com/products/giggal-ai/reviews',
              rating: PRODUCT_HUNT_RATING,
              note: 'Product Hunt',
            },
            {
              name: 'Capterra',
              logo: '/reviews/capterra-logo.svg',
              href: 'https://www.capterra.com/p/10053924/Giggal-ai/',
              rating: CAPTERRA_RATING,
              note: 'Capterra',
            },
            {
              name: 'G2',
              logo: '/reviews/G2_logo.svg',
              href: 'https://www.g2.com/products/giggal/reviews',
              rating: G2_RATING,
              note: 'G2',
            },
          ].map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Giggal.ai rated ${r.rating.toFixed(1)} out of 5 on ${r.name}`}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white pl-2 pr-3.5 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:border-indigo-200 hover:shadow-[0_6px_16px_-8px_rgba(79,70,229,0.35)] transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.logo} alt="" aria-hidden="true" width={20} height={20} loading="lazy" decoding="async" className="w-5 h-5 object-contain" />
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="text-[13px] font-extrabold text-slate-900 tabular-nums">{r.rating.toFixed(1)}</span>
              <span className="text-[12.5px] font-medium text-slate-500 group-hover:text-slate-700">
                {r.name === 'SourceForge' ? `SourceForge · ${r.note}` : r.note}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Award badges from SourceForge, Slashdot and Top Business Software. */}
      <AwardRow />

      {/* ── HOW TO CHECK ─────────────────────────────────────── */}
      {/* Four stage cards on a connecting line; the catch-all stage is the
          one Giggal.ai adds, so it carries the brand gradient border. */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>How to check if an email address is valid</h2>
          <p className={`${proseP} mt-4`}>
            A full email check, also called email verification, has four stages. Checkers that only
            do the first one are the reason
            so many &quot;checked&quot; lists still bounce.
          </p>
        </div>
        <div className="relative mt-12">
          <div aria-hidden="true" className="hidden lg:block absolute left-[12%] right-[12%] top-7 h-px bg-gradient-to-r from-indigo-200 via-indigo-300 to-emerald-300" />
          <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: AtSign, title: 'Format', text: 'Is the address well formed: one @, a valid name before it, a domain with an ending such as .com. This catches typos and nothing else.' },
              { Icon: Server, title: 'Mail server', text: 'Does the domain publish mail server (MX) records. No MX records means no mailbox can exist there, so the address is dead before any message is sent.' },
              { Icon: Inbox, title: 'Mailbox', text: 'The checker asks the mail server whether this mailbox exists, without sending an email. A yes means the mailbox exists. A no means it is not there.' },
              { Icon: ShieldCheck, title: 'Catch-all', text: 'If the server also says yes to a made-up address, step three proved nothing. This is where most email checkers print "catch-all" and stop. Giggal.ai runs extra signals that separate a real mailbox from an accept-all reply and returns valid or invalid.', highlight: true },
            ].map((st, i) => (
              <li
                key={st.title}
                className={`relative rounded-2xl p-6 ${
                  st.highlight
                    ? 'border-2 border-transparent [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(135deg,#6366f1,#34d399)_border-box] shadow-[0_18px_40px_-22px_rgba(79,70,229,0.5)]'
                    : 'border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${st.highlight ? 'bg-gradient-to-br from-indigo-600 to-emerald-500 text-white' : 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100'}`}>
                    <st.Icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-black text-white ring-2 ring-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">{st.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">{st.text}</p>
                {st.highlight && (
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold text-indigo-700 ring-1 ring-inset ring-indigo-100">
                    <ShieldCheck className="h-3.5 w-3.5" /> Giggal.ai
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500 font-medium max-w-2xl mx-auto">
          The result panel above shows each stage as it runs. To check email address validity,
          paste the address in and press the button. One address takes a few seconds.
        </p>
      </section>

      {/* ── WHAT THE CHECKER SHOWS ───────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>What the email checker shows for each address</h2>
          <p className={`${proseP} mt-4`}>Each check ends in one of three results.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { Icon: CheckCircle2, title: 'Valid', text: 'The mailbox exists and passed the extra signals, so mail sent to it should arrive.', tone: 'border-emerald-200 bg-emerald-50/60', icon: 'bg-emerald-500 text-white', label: 'text-emerald-700' },
            { Icon: XCircle, title: 'Invalid', text: 'The address has a broken format, no mail server, or the server rejected the mailbox. Mail sent to it will bounce.', tone: 'border-rose-200 bg-rose-50/60', icon: 'bg-rose-500 text-white', label: 'text-rose-700' },
            { Icon: Clock, title: 'Unknown', text: 'Rare here. The server did not answer in time or delays new senders on purpose. Check it again later rather than treating it as dead.', tone: 'border-slate-200 bg-slate-50', icon: 'bg-slate-400 text-white', label: 'text-slate-600' },
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

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <p className="text-sm md:text-base font-semibold text-slate-800">
            Under the result, the email address checker lists the details a deliverability decision
            depends on:
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Building2, lead: 'The mail provider', rest: ' (Google Workspace, Microsoft 365, or a gateway such as Proofpoint)' },
              { Icon: Router, lead: 'The mail server that answered', rest: '' },
              { Icon: Timer, lead: 'Whether the address is disposable', rest: ' (a temporary inbox that will vanish)', href: '/disposable-email-checker' },
              { Icon: Users, lead: 'Whether it is role-based', rest: ' (info@, sales@, support@, which reach a shared inbox, not a person)' },
              { Icon: Mail, lead: 'Whether it sits on a personal mailbox provider', rest: ' like Gmail or Yahoo, which matters when you qualify B2B leads' },
            ].map((d) => (
              <li key={d.lead} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <d.Icon className="h-[18px] w-[18px]" />
                </span>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  <span className="font-bold text-slate-900">
                    {d.href ? (
                      <Link href={d.href} className="hover:text-indigo-700 hover:underline">{d.lead}</Link>
                    ) : (
                      d.lead
                    )}
                  </span>
                  {d.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DOES THE ADDRESS EXIST ───────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="space-y-5">
            <h2 className={sectionTitle}>How to check if an email address exists</h2>
            <p className={proseP}>
              An email address exists when its mailbox is set up on the receiving mail server and
              accepts mail. To verify the email address, the email checker asks that server directly,
              without sending a message. It proves the mailbox is there. It does not prove who owns it or how
              often they read it.
            </p>
            <p className={proseP}>
              If you are not sure whether an address in your contacts exists, check it in the email
              checker above.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">Addresses that do not exist usually show one of these signs:</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { Icon: SpellCheck, lead: 'Typo domains', rest: ' such as gmial.com or yaho.com, which have no mail server or reject everything.' },
                { Icon: ServerOff, lead: 'No mail server records', rest: ' on the domain, so there is nowhere for mail to go.' },
                { Icon: UserX, lead: 'A rejected mailbox:', rest: ' the domain is real, but the server says this person is not there, often because they left the company.' },
                { Icon: Shuffle, lead: 'Random strings', rest: ' before the @, typed by bots or by people filling in a form they did not want to complete.' },
              ].map((x) => (
                <li key={x.lead} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-500 ring-1 ring-rose-100">
                    <x.Icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
                    <span className="font-extrabold text-slate-900">{x.lead}</span>
                    {x.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY CHECK BEFORE YOU SEND ────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="space-y-5 lg:sticky lg:top-32">
            <h2 className={sectionTitle}>Why verify an email address before you send</h2>
            <p className={proseP}>
              Mail sent to an address that does not exist comes back as a hard bounce. Gmail, Outlook
              and other mailbox providers count your bounces. When too many of your emails bounce,
              they trust your sending domain less, and more of your mail goes to spam or is blocked,
              even mail sent to real people. Email verification finds those addresses before you send.
            </p>
            <p className={proseP}>
              Read{' '}
              <Link href="/blog/hard-bounce-vs-soft-bounce" className="text-indigo-600 font-bold hover:underline">
                hard bounce vs soft bounce
              </Link>{' '}
              for what each bounce code means and what to do with it.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="sm:col-span-2 rounded-2xl bg-slate-900 p-6 text-white shadow-[0_24px_50px_-28px_rgba(15,23,42,0.7)]">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black tracking-tight bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">&lt;3%</span>
                <div>
                  <p className="flex items-center gap-2 font-extrabold">
                    <TrendingDown className="h-[18px] w-[18px] text-emerald-300" /> Lower bounce rate.
                  </p>
                  <p className="mt-1 text-sm text-slate-300 font-medium">Lists cleaned with Giggal.ai usually bounce under 3%.</p>
                </div>
              </div>
            </li>
            {[
              { Icon: BadgeCheck, title: 'A healthy sender reputation.', text: 'Fewer bounces keep your domain in good standing with mailbox providers.' },
              { Icon: Send, title: 'Better deliverability.', text: 'A good reputation means more of your emails reach the inbox instead of the spam folder.' },
              { Icon: Database, title: 'Cleaner data.', text: 'Dead addresses come out of your CRM before they cost you time or sending credits.', wide: true },
            ].map((b) => (
              <li key={b.title} className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${b.wide ? 'sm:col-span-2' : ''}`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                  <b.Icon className="h-[18px] w-[18px]" />
                </span>
                <p className="mt-3 text-sm font-extrabold text-slate-900">{b.title}</p>
                <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHEN TO USE IT ───────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>When to use an email checker</h2>
          <p className={`${proseP} mt-4`}>
            Use this email checker tool whenever one address decides what you do next:
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { Icon: UserPlus, text: 'Before you reply to an inbound lead whose address looks typed by hand.' },
            { Icon: MailX, text: 'When a signup bounces and you want to know if the address ever existed.' },
            { Icon: Globe, text: 'Before you send to an address you found on a website or in a CRM.' },
            { Icon: ShoppingCart, text: 'To test one address from a purchased list before you pay to clean the whole file.' },
            { Icon: HelpCircle, text: 'To confirm a contact on a catch-all domain that another tool marked "risky".' },
          ].map((u) => (
            <li key={u.text} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-indigo-200 transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-emerald-50 text-indigo-600 ring-1 ring-indigo-100">
                <u.Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">{u.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── WHY OTHER CHECKERS STOP AT CATCH-ALL ─────────────── */}
      {/* Text left, the home page scan demo right: catch-all rows resolving
          to a result. */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14 items-center">
        <div className="space-y-5">
          <h2 className={sectionTitle}>Why other email checkers stop at catch-all</h2>
          <p className={proseP}>
            Some company mail servers accept every address, real or made up. That is a{' '}
            <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
              catch-all domain
            </Link>
            . Ask it about a real employee and it says yes. Ask it about a name you invented and it
            says yes to that too. So the normal mailbox check proves nothing there.
          </p>
          <p className={proseP}>
            Spotting a catch-all domain is easy: test one made-up address and see if it is accepted.
            That is why almost every email checker can tell you a domain is catch-all. Finding out
            which mailboxes behind it are real takes far more work, so most email verifiers stop at
            the label and leave the decision to you. On B2B lists, catch-all addresses are often a large
            share of the contacts, and many of them are real people.
          </p>
          <p className={proseP}>
            Giggal.ai runs the extra signals on every catch-all address and returns valid or invalid,
            which is also why this page allows only a few checks per visitor. Read{' '}
            <Link href="/blog/what-is-a-catch-all-email-address" className="text-indigo-600 font-bold hover:underline">
              what a catch-all email address is
            </Link>{' '}
            for the full background.
          </p>
        </div>
        <BulkScanDemo />
        </div>
      </section>

      {/* ── WHOLE LIST ───────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-16 pb-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={sectionTitle}>Check a whole list instead of one address</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
              <FileSpreadsheet className="h-5 w-5" />
            </span>
            <p className={`${proseP} mt-4`}>
              The email checker on this page handles one address at a time. For bulk email
              verification of a list, create an account, upload a CSV or Excel file of up to 50,000 addresses, and{' '}
              <Link href="/email-list-cleaning" className="text-indigo-600 font-bold hover:underline">
                clean your email list
              </Link>{' '}
              with the same checks on every row. You start with 1,000 free credits and no card.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
              <Code2 className="h-5 w-5" />
            </span>
            <p className={`${proseP} mt-4`}>
              To check addresses inside your own app or signup form, use the{' '}
              <Link href="/email-verification-api" className="text-indigo-600 font-bold hover:underline">
                email verification API
              </Link>
              . It runs the same checks and returns the result as JSON.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Email checker FAQ</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand headline="Check your whole list" />

      {/* ── RELATED LINKS ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/disposable-email-checker', label: 'detect disposable & temporary emails' },
            { href: '/catch-all-verification', label: 'verify catch-all & risky emails' },
            { href: '/blog/what-is-a-catch-all-email-address', label: 'what a catch-all email address is' },
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
