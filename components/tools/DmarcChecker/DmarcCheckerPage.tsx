import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import DmarcCheckerTool from './DmarcCheckerTool'

const SITE = 'https://giggal.ai'
const PATH = '/dmarc-checker'
const CANONICAL = `${SITE}${PATH}`

export const dmarcCheckerMetadata: Metadata = {
  title: { absolute: 'DMARC Checker: Free DMARC Record Lookup & DMARCbis Audit | Giggal.ai' },
  description:
    'Free DMARC checker and DMARC record lookup tool. Check DMARC record syntax, verify p=reject enforcement, audit SPF/DKIM alignment, and validate DMARCbis RFC 9989 compliance.',
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'DMARC Checker: Free DMARC Record Lookup & Policy Validator',
    description:
      'Run a free DMARC record lookup. Inspect DMARC policy enforcement, SPF and DKIM alignment, external rua report authorization, and DMARCbis rules.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Free DMARC Checker Tool' }],
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'How does a DMARC checker inspect my domain?',
    a: 'Our DMARC checker queries public DNS-over-HTTPS servers for TXT records published at _dmarc.yourdomain.com. If none exists on a subdomain, the DMARC record lookup walks up to the organizational domain, parses every tag, verifies v=DMARC1 syntax, and scores Google and Yahoo bulk sender compliance.',
  },
  {
    q: 'What is the difference between p=none, p=quarantine, and p=reject in DMARC?',
    a: 'p=none is monitoring mode: spoofed mail is still delivered, while mailbox providers email you aggregate XML reports. p=quarantine instructs receivers to move failed messages to spam or junk folders. p=reject instructs mail gateways to block unauthenticated mail completely.',
  },
  {
    q: 'What are the Google, Yahoo, and Microsoft DMARC rules?',
    a: 'Since February 2024, Google and Yahoo require bulk senders (over 5,000 messages per day) to publish a DMARC record with working SPF and DKIM authentication. Microsoft Outlook introduced matching requirements for high-volume senders in 2025.',
  },
  {
    q: 'How do I check DMARC record alignment with SPF and DKIM?',
    a: 'DMARC passes only when SPF or DKIM both passes authentication and aligns with the domain shown in the RFC 5322 From header. Under relaxed mode (adkim=r, aspf=r), subdomains match the parent organizational domain. Under strict mode (adkim=s, aspf=s), the signing domain must match the From domain exactly.',
  },
  {
    q: 'What happens if a domain publishes two DMARC TXT records?',
    a: 'RFC 7489 Section 6.6.3 prohibits publishing more than one DMARC record at _dmarc. If two records start with v=DMARC1, receiving mail servers throw out both records and act as if DMARC does not exist. Always merge rules into a single TXT entry.',
  },
  {
    q: 'What does external rua report authorization mean?',
    a: 'When your DMARC rua=mailto: address uses a domain different from your sending domain, RFC 7489 Section 7.1 requires the destination domain to publish a consent record at senderdomain._report._dmarc.reportdomain containing v=DMARC1. Without consent, receivers skip sending XML reports.',
  },
  {
    q: 'What changed in DMARCbis (RFC 9989, RFC 9990, RFC 9991)?',
    a: 'DMARCbis modernizes RFC 7489 by clarifying organizational domain tree walks, flagging partial enforcement via pct < 100 as retired/discouraged, simplifying failure reporting rules, and introducing np= for explicit non-existent subdomain policy handling.',
  },
  {
    q: 'Can I generate a fixed DMARC record after checking errors here?',
    a: 'Yes. Once this DMARC checker flags missing tags or weak p=none settings, use our free DMARC Generator to build clean RFC 9989 syntax ready to paste into your DNS provider.',
  },
]

const DMARC_TAGS = [
  { tag: 'v', req: 'Required (1st)', def: 'None', values: 'DMARC1', desc: 'Identifies the TXT string as DMARC. Must appear first in the record.' },
  { tag: 'p', req: 'Required (2nd)', def: 'None', values: 'none, quarantine, reject', desc: 'Sets policy action for the domain when authentication alignment fails.' },
  { tag: 'sp', req: 'Optional', def: 'Inherits p', values: 'none, quarantine, reject', desc: 'Overrides policy specifically for subdomains (such as *.example.com).' },
  { tag: 'rua', req: 'Recommended', def: 'None', values: 'mailto:URI[!size]', desc: 'Email destination receiving daily aggregate XML reports from inbox hosts.' },
  { tag: 'ruf', req: 'Optional (Legacy)', def: 'None', values: 'mailto:URI[!size]', desc: 'Failure report URI (rarely supported by consumer webmail providers today).' },
  { tag: 'adkim', req: 'Optional', def: 'r (relaxed)', values: 'r, s', desc: 'Controls DKIM alignment: relaxed allows subdomains, strict demands exact match.' },
  { tag: 'aspf', req: 'Optional', def: 'r (relaxed)', values: 'r, s', desc: 'Controls SPF Return-Path alignment: relaxed allows subdomains, strict demands exact match.' },
  { tag: 'fo', req: 'Optional', def: '0', values: '0, 1, d, s', desc: 'Sets failure report triggers (1 triggers on either SPF or DKIM fail).' },
  { tag: 'pct', req: 'Legacy', def: '100', values: '0 to 100', desc: 'Percentage of unaligned mail filtered; retired under DMARCbis RFC 9989.' },
  { tag: 'ri', req: 'Legacy', def: '86400', values: 'Seconds', desc: 'Requested reporting interval in seconds (24 hours default).' },
]

export default function DmarcCheckerPage() {
  const jsonLds = [
    breadcrumbLd('DMARC Checker', PATH),
    faqPageLd(FAQS),
    toolWebApplicationLd({
      name: 'Free DMARC Checker and DMARC Record Lookup',
      url: CANONICAL,
      description:
        'Free DMARC checker and DMARC record lookup tool. Check DMARC record syntax, test p=reject policies, inspect SPF/DKIM alignment, and validate DMARCbis RFC 9989 compliance.',
      featureList: [
        'Live _dmarc DNS-over-HTTPS record lookup with subdomain organizational fallback',
        'Full RFC 7489 and DMARCbis (RFC 9989 / 9990) tag breakdown and syntax check',
        'Detects duplicate DMARC TXT records, wrong tag order, and pct < 100 gaps',
        'Inspects adkim and aspf relaxed vs strict identifier alignment rules',
        'Flags third-party rua reporting destinations needing _report._dmarc authorization',
      ],
    }),
  ]

  const sectionTitle = 'text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'
  const subTitle = 'text-lg md:text-xl font-bold text-slate-900 tracking-tight'
  const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
  const code = 'font-mono text-[0.9em] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded'
  const linkCls = 'text-indigo-600 font-bold hover:underline'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      {jsonLds.map((ld, i) => (
        <JsonLd key={i} data={ld} />
      ))}

      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
          Free DNS Diagnostic · DMARCbis RFC 9989 Ready
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          DMARC Record Checker
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Run a free DMARC checker and DMARC record lookup on any domain. Check DMARC record syntax, verify p=reject protection, test SPF and DKIM alignment, and confirm compliance with Google and Yahoo sender requirements.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <DmarcCheckerTool />
      </section>

      {/* READING GUIDE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        {/* Step-by-step usage */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to check a DMARC record</h2>
          <p className={proseP}>
            Auditing your email authentication policy with this DMARC checker takes seconds:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Type your sending domain into the input box above (or click <strong>Validate Draft Record</strong> to test raw <span className={code}>v=DMARC1</span> text before saving DNS changes).</li>
            <li>Click <strong>Inspect DMARC</strong> to perform a live DMARC record lookup at <span className={code}>_dmarc.yourdomain.com</span>.</li>
            <li>Check the top <strong>Compliance Score</strong> card and confirm whether your policy sits at <span className={code}>p=none</span>, <span className={code}>p=quarantine</span>, or <span className={code}>p=reject</span>.</li>
            <li>Inspect the <strong>Tag Breakdown Table</strong> to verify <span className={code}>adkim</span> and <span className={code}>aspf</span> alignment modes plus subdomain <span className={code}>sp=</span> coverage.</li>
            <li>Review <strong>Aggregate Reporting Destinations (rua)</strong> to confirm external reporting consent records exist if you send XML reports to a monitoring vendor.</li>
          </ol>
          <p className={proseP}>
            Need to fix syntax errors or build your initial record? Open our <Link href="/dmarc-generator" className={linkCls}>DMARC Record Generator</Link>, or inspect upstream <Link href="/spf-checker" className={linkCls}>SPF</Link> and <Link href="/dkim-checker" className={linkCls}>DKIM</Link> keys first.
          </p>
        </div>

        {/* What DMARC is */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>What is DMARC and how does it block domain spoofing?</h2>
          <p className={proseP}>
            <Link href="/glossary/dmarc" className={linkCls}>DMARC</Link> (Domain-based Message Authentication, Reporting, and Conformance) connects SPF and DKIM together through a single DNS TXT record published at <span className={code}>_dmarc.example.com</span>. Read our full overview in <Link href="/blog/what-is-a-dmarc-record" className={linkCls}>What is a DMARC record</Link>.
          </p>
          <p className={proseP}>
            Without DMARC, attackers can send phishing emails that display your brand domain in the visible <span className={code}>From:</span> header while passing their own SPF check on a hidden bounce address. Checking a DMARC record enforces <strong>identifier alignment</strong>: either SPF or DKIM must match the visible From domain, and receiving servers enforce your chosen policy when both fail.
          </p>
          <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto">
            {`v=DMARC1; p=reject; sp=reject; rua=mailto:dmarc@example.com; adkim=r; aspf=r;`}
          </pre>
        </div>

        {/* Tag Breakdown Reference */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Every DMARC tag explained (RFC 7489 and DMARCbis)</h2>
          <p className={proseP}>
            Our DMARC record lookup evaluates every standard tag defined across RFC 7489 and the modern <a href="https://www.rfc-editor.org/rfc/rfc9989" target="_blank" rel="noopener noreferrer" className={linkCls}>DMARCbis RFC 9989</a> specification:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Tag</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Requirement</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Default</th>
                    <th className="py-2.5 px-4">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {DMARC_TAGS.map((row) => (
                    <tr key={row.tag} className="align-top">
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">{row.tag}=</td>
                      <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.req}</td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-500 whitespace-nowrap">{row.def}</td>
                      <td className="py-3 px-4 text-slate-600">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Policy Enforcement Roadmap */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>DMARC rollout roadmap: p=none to p=reject</h2>
          <p className={proseP}>
            Jumping straight to strict rejection without auditing existing senders can block legitimate CRM alerts or billing invoices. Follow this safe three-stage progression:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Stage 1: Monitoring Mode (p=none)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Start at <span className={code}>v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com;</span>. Mailboxes continue delivering all mail while mailing you daily XML reports showing every IP and SaaS service sending email on your domain. This stage already satisfies minimum 2024 Google and Yahoo bulk sender guidelines while you fix SPF and DKIM keys.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Stage 2: Spam Filtering (p=quarantine)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Once XML reports confirm all legitimate senders align under SPF or DKIM, switch to <span className={code}>p=quarantine</span>. Receivers move unauthenticated spoofed mail into spam folders instead of inboxes. Domains at <span className={code}>p=quarantine</span> (with 100% coverage) also qualify for BIMI brand logos inside supported mail clients.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Stage 3: Full Brand Enforcement (p=reject)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Update to <span className={code}>p=reject; sp=reject;</span> so receiving servers drop unauthenticated spoofing attempts at SMTP arrival. Checking a DMARC record with <span className={code}>p=reject</span> proves maximum domain protection and builds trust across recipient mail gateways.
              </p>
            </div>
          </div>
        </div>

        {/* Strict vs Relaxed Alignment */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Strict vs relaxed identifier alignment (adkim and aspf)</h2>
          <p className={proseP}>
            Every DMARC record lookup checks how strictly the sender domain must align across authentication headers. DMARC offers two modes for both DKIM (<span className={code}>adkim</span>) and SPF (<span className={code}>aspf</span>):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li><strong>Relaxed Alignment (adkim=r, aspf=r, default):</strong> Allows organizational domain matches. Email sent with visible From <span className={code}>hello@company.com</span> passes DMARC alignment when DKIM signs as <span className={code}>d=mail.company.com</span> or SPF passes on <span className={code}>bounces.company.com</span>.</li>
            <li><strong>Strict Alignment (adkim=s, aspf=s):</strong> Requires an exact domain string match. When <span className={code}>aspf=s</span> is active, Return-Path must match the visible From domain character-for-character with zero subdomains permitted.</li>
          </ul>
          <p className={proseP}>
            Because many CRM and newsletter apps send bounces from a subdomain such as <span className={code}>em1.company.com</span>, relaxed alignment (<span className={code}>adkim=r; aspf=r;</span>) avoids accidental false fails while protecting the core organizational brand.
          </p>
        </div>

        {/* Bulk Sender Guidelines */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Google, Yahoo, and Microsoft bulk sender DMARC mandates</h2>
          <p className={proseP}>
            In February 2024, Google and Yahoo enforced strict authentication rules for every domain sending 5,000 or more daily messages. Microsoft Outlook applied parallel rules for high-volume senders in 2025. Passing a regular DMARC checker audit is no longer optional for B2B outreach teams:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Publish a valid DMARC record starting with <span className={code}>v=DMARC1; p=none;</span> at minimum, paired with aligned SPF or DKIM records.</li>
            <li>Keep user-reported spam complaint rates under 0.1% (and never exceed 0.3%) inside Google Postmaster Tools.</li>
            <li>Include one-click RFC 8058 unsubscribe headers inside bulk campaigns and honor opt-outs within two days.</li>
            <li>Monitor <span className={code}>_dmarc</span> compliance using this free DMARC record lookup tool whenever you onboard a new marketing sender or SMTP server.</li>
          </ul>
        </div>

        {/* Organizational Fallback & External RUA */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Subdomain fallback and external rua consent checks</h2>
          <p className={proseP}>
            When you check a DMARC record for a sending subdomain such as <span className={code}>news.example.com</span> that has no dedicated TXT entry, our DMARC record lookup performs the RFC organizational domain fallback to inspect <span className={code}>_dmarc.example.com</span> and applies its <span className={code}>sp=</span> (or <span className={code}>p=</span>) policy.
          </p>
          <p className={proseP}>
            If your <span className={code}>rua=</span> aggregate email address points outside your organizational domain (such as a dedicated analytics mailbox on another domain), remember that the receiver requires explicit cross-domain consent at <span className={code}>yourdomain._report._dmarc.analyticsdomain</span> before delivering reports.
          </p>
        </div>

        {/* Common DMARC mistakes */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Common DMARC record mistakes to fix</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li><strong>Multiple DMARC TXT records at _dmarc:</strong> Adding a new record without deleting the old one invalidates DMARC completely. Keep exactly one TXT record.</li>
            <li><strong>Putting p= before v=DMARC1:</strong> RFC 7489 requires <span className={code}>v=DMARC1</span> as the very first tag with exact uppercase capitalization.</li>
            <li><strong>Missing rua reporting tag:</strong> Without a <span className={code}>rua=mailto:</span> destination, you fly blind when third-party vendors break DKIM alignment.</li>
            <li><strong>Neglecting cold outreach list hygiene:</strong> Even with <span className={code}>p=reject</span> active, bouncing on dead or catch-all addresses ruins domain sender reputation. Validate prospect lists with <Link href="/email-checker" className={linkCls}>Giggal Email Verification</Link>.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>Frequently Asked Questions</h2>
        </div>
        <FaqAccordion items={FAQS} />
      </section>

      {/* CTA Band */}
      <AltCtaBand
        headline="Pair enforced DMARC authentication with clean contact lists"
        supporting="Verify B2B and catch-all lists with 98.5% accuracy and 1,000 free credits."
        buttonText="Start Verifying for Free"
      />

      <Footer />
    </main>
  )
}
