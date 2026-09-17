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
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC =
  'Free email checker with no signup. Verify any address, including catch-all domains most tools mark risky, and get a valid or invalid answer in seconds.'

export const metadata: Metadata = {
  // The English tool page. Head term is "email checker" (21k/mo US, 12k GB);
  // targets: email address checker (GB), email checker free (GB), email
  // verifier (IN). Catch-all stays in the H1 as the differentiator, not the
  // title. Was /tools/catch-all-email-checker until 2026-09-18 (301 in
  // next.config.js).
  title: { absolute: 'Free Email Checker: Verify Any Email Address | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/email-checker', languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Free Email Checker: Verify Any Email Address',
    description: DESC,
    url: 'https://giggal.ai/email-checker',
    type: 'website',
  },
  // Set explicitly so this route never inherits the homepage's Twitter strings.
  twitter: {
    card: 'summary_large_image',
    title: 'Free Email Checker: Verify Any Email Address',
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
    q: 'Is this a free email verifier or just a syntax check?',
    a: 'A full verifier. Syntax is the first step, then the MX lookup, then an SMTP conversation with the mail server to confirm the mailbox. On catch-all domains it goes one step further and resolves the address to valid or invalid.',
  },
  {
    q: 'What does "valid" mean on a catch-all domain?',
    a: 'That the mailbox was confirmed, not just that the domain accepted the recipient. A plain catch-all label only tells you the server says yes to everything. Valid here means the address passed the extra checks that separate a real mailbox from one that will bounce or vanish.',
  },
  {
    q: 'How many checks do I get?',
    a: 'A handful of free checks, with no signup and no card. Each check runs the full verification, which is why the number is small. For a whole list, sign up and use your 1,000 free credits.',
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
      <JsonLd data={breadcrumbLd('Free Email Checker', '/email-checker')} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Free email checker that{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            resolves catch-all addresses
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Verify an email address in seconds: syntax, MX records and a live SMTP check on the
          mailbox itself. On catch-all domains, where most free checkers stop at a label, this one
          keeps going and returns valid or invalid.
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
          Free, no signup, no card. One address per check, full SMTP-level verification.
        </p>
      </section>

      {/* ── HOW A CHECK WORKS ────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>How to check if an email address is valid</h2>
        <p className={proseP}>
          A proper check has four stages, and the free tools that only do the first one are the
          reason so many &quot;verified&quot; lists still bounce.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>
            <strong className="text-slate-900">Syntax.</strong> Is the address well formed: one @,
            a valid local part, a domain with a TLD. This catches typos and nothing else.
          </li>
          <li>
            <strong className="text-slate-900">MX lookup.</strong> Does the domain publish mail
            exchanger records. No MX means no mailbox can exist there, so the address is dead
            before any message is sent.
          </li>
          <li>
            <strong className="text-slate-900">SMTP mailbox probe.</strong> Open a conversation
            with the receiving server, name the recipient, and read the reply. A 250 means the
            mailbox is accepted; a 550 means it is not there.
          </li>
          <li>
            <strong className="text-slate-900">Catch-all resolution.</strong> If the server said
            yes to a random address too, step three proved nothing. This is where most checkers
            print &quot;catch-all&quot; and stop. Giggal runs the extra signals that separate a real
            mailbox from an accept-all reply and returns valid or invalid.
          </li>
        </ol>
        <p className={proseP}>
          The result panel above shows each stage as it completes, plus the mail provider, the
          MX host, and whether the address is disposable, role-based or on a free provider.
        </p>
      </section>

      {/* ── WHAT THE CHECKER REPORTS ─────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What this email checker tells you</h2>
        <p className={proseP}>
          Each check ends in one of three verdicts. <strong className="text-slate-900">Valid</strong>{' '}
          means the mailbox accepted the recipient and passed the extra signals, so mail sent to it
          should land. <strong className="text-slate-900">Invalid</strong> means the address failed
          syntax, has no mail server, or the server rejected the mailbox outright, so it will hard
          bounce. <strong className="text-slate-900">Unknown</strong> is rare here and means the
          server did not answer in time or is greylisting new senders; retry later rather than
          treating it as dead.
        </p>
        <p className={proseP}>
          Under the verdict, the panel lists the details a deliverability check depends on: the
          mail provider (Google Workspace, Microsoft 365, a gateway such as Proofpoint), the MX
          host that answered, whether the address is <strong className="text-slate-900">disposable</strong>{' '}
          (a temporary inbox that will vanish), <strong className="text-slate-900">role-based</strong>{' '}
          (info@, sales@, support@, which are shared inboxes and poor outreach targets) and whether
          it sits on a <strong className="text-slate-900">free provider</strong> like Gmail or
          Yahoo, which matters when you are qualifying B2B leads.
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight pt-2">
          When to use a single-email check
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>Before replying to an inbound lead whose address looks typed by hand.</li>
          <li>When a form signup bounces and you want to know if the address ever existed.</li>
          <li>To test one address from a purchased list before paying to clean the whole file.</li>
          <li>To confirm a contact on a catch-all domain that another tool marked &quot;risky&quot;.</li>
        </ul>
        <p className={proseP}>
          For a whole list, the single checker is the wrong tool: sign up, upload the file, and{' '}
          <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
            bulk email verification
          </Link>{' '}
          runs the same checks on every row, 1,000 credits free and no card.
        </p>
      </section>

      {/* ── WHAT CATCH-ALL DOES TO A CHECK ───────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>What a catch-all domain does to an email check</h2>
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
        <h2 className={sectionTitle}>Why most free email checkers stop at &quot;catch-all&quot;</h2>
        <p className={proseP}>
          Detecting a catch-all domain is cheap. A tool looks up the domain&apos;s mail servers, opens
          one connection, and offers a random address that almost certainly does not exist. If the
          server accepts it, the domain accepts everything, and the tool has its answer in a single
          round trip. That is why nearly every free checker will readily tell you a domain is
          catch-all. Working out which mailboxes are real behind that domain is a different job. It
          takes more probes, more signals, and infrastructure that holds a clean sending reputation
          while it works, so most free tools stop at the label and hand the rest back to you. This
          checker runs the full verification instead, which is why it is limited to a handful of
          checks per visitor.
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
