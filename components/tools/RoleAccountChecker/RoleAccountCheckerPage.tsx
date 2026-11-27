import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import RoleAccountCheckerTool from './RoleAccountCheckerTool'

const SITE = 'https://giggal.ai'
const PATH = '/role-account-checker'
const CANONICAL = `${SITE}${PATH}`

export const roleAccountCheckerMetadata: Metadata = {
  title: { absolute: 'Role-Based Email Checker: Free Role Account Filter | Giggal.ai' },
  description:
    'Free role-based email checker and role account email checker. Detect and filter RFC 2142 role accounts, support@, info@, sales@, and no-reply@ addresses before sending outreach.',
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Role-Based Email Checker: Free RFC 2142 List Cleaner',
    description:
      'Filter out role-based email addresses, shared department queues, spam traps, and automated inboxes in your browser. Export clean B2B CSV lists.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Free Role-Based Email Checker' }],
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'What is a role-based email address?',
    a: 'A role-based email address maps to a company department, team function, or automated queue rather than one named individual. Common examples defined in RFC 2142 include info@, support@, sales@, billing@, admin@, and postmaster@.',
  },
  {
    q: 'Why does a role-based email checker help cold outreach deliverability?',
    a: 'Sending cold outreach to role-based email addresses carries high spam complaint risk because shared mailboxes route to multiple staff members. Any single team member hitting Mark as Spam hurts your domain reputation. Old role accounts also turn into recycled spam traps over time.',
  },
  {
    q: 'Does this role account email checker strip dots like admin.smith@company.com?',
    a: 'No. Unlike crude filters that remove dots before checking prefixes, our role-based email checker strips +tag subaddressing (such as sales+crm@company.com) while preserving dots intact. Named addresses like admin.smith@company.com remain classified safely as Personal.',
  },
  {
    q: 'Which role-based email addresses must always be removed?',
    a: 'Automated system senders (noreply@, no-reply@, bounce@, mailer-daemon@) and RFC 2142 compliance or security addresses (abuse@, postmaster@, security@, noc@) must always be suppressed. Writing unsolicited outreach to abuse@ or postmaster@ can trigger fast blocklist entries.',
  },
  {
    q: 'Should I delete sales@ and info@ addresses from B2B prospect lists?',
    a: 'Not always. In very small businesses and local agencies, info@ and sales@ are often answered directly by the founder. That is why our generic email filter lets you export "Personal Only" for strict enterprise sequences or "Personal + Sales/SMB" for targeted small-business testing.',
  },
  {
    q: 'What file formats does the role account email checker accept?',
    a: 'You can paste plain lists, comma-separated addresses, Display Name <email> strings, or upload multi-column .csv, .tsv, and .txt spreadsheets. The tool detects the email column automatically, removes duplicates, and keeps all original CSV columns on export.',
  },
  {
    q: 'Does checking role accounts replace SMTP email verification?',
    a: 'No. A role-based email checker flags shared mailbox patterns locally from address names. It cannot see whether an individual mailbox exists, rejects mail, or sits behind an accept-all server. Pair role filtering with Giggal SMTP verification for 98.5% accuracy.',
  },
  {
    q: 'Are uploaded email lists sent to Giggal servers?',
    a: 'Never. This role account email checker runs 100% locally in browser memory. Your contacts, customer columns, and exported CSVs never leave your computer.',
  },
]

const ROLE_TIERS = [
  {
    tier: 'Tier 1: Automated System & No-Reply',
    prefixes: 'noreply@, no-reply@, do-not-reply@, bounce@, mailer-daemon@, daemon@, alerts@, notifications@',
    action: 'Remove Always',
    reason: 'Automated software queues that reject replies or belong to outbound notification systems.',
  },
  {
    tier: 'Tier 2: RFC 2142 Compliance & Security',
    prefixes: 'abuse@, postmaster@, hostmaster@, webmaster@, security@, privacy@, compliance@, dpo@, noc@, gdpr@',
    action: 'Suppress Always',
    reason: 'Monitored by network admins and anti-spam teams; high risk of immediate DNSBL complaints.',
  },
  {
    tier: 'Tier 3: Support, Billing & Operations',
    prefixes: 'support@, help@, helpdesk@, billing@, invoices@, accounts@, finance@, orders@, tickets@, legal@',
    action: 'Suppress Cold Outreach',
    reason: 'Routes directly into Zendesk, Jira, or accounting ticket pipelines where outreach fails.',
  },
  {
    tier: 'Tier 4: General Business & Sales',
    prefixes: 'sales@, info@, contact@, hello@, office@, team@, marketing@, press@, media@, hr@, jobs@',
    action: 'Segment for SMB',
    reason: 'Shared inboxes in mid-market firms, though sometimes read by founders in micro-SMBs.',
  },
  {
    tier: 'Tier 5: Named Personal Inboxes',
    prefixes: 'john.doe@, sarah@, alex.kumar@, david.k@, admin.smith@',
    action: 'Keep (Outreach Ready)',
    reason: 'Assigned to an individual prospect and safe for direct one-to-one outbound campaigns.',
  },
]

const DEPARTMENT_PREFIXES = [
  { dept: 'Technical & Network (RFC 2142)', examples: 'postmaster, hostmaster, webmaster, usenet, news, uucp, ftp, noc, security, abuse' },
  { dept: 'Customer Service & Helpdesk', examples: 'support, help, helpdesk, care, customercare, service, feedback, tickets, claims' },
  { dept: 'Billing, Accounting & Legal', examples: 'billing, accounts, accounting, finance, invoices, payments, legal, compliance, privacy' },
  { dept: 'Sales, Leads & Marketing', examples: 'sales, info, enquiries, inquiry, hello, contact, team, office, marketing, press, pr' },
  { dept: 'HR, Hiring & Recruiting', examples: 'jobs, careers, hr, recruiting, recruitment, talent, hiring, resume, payroll' },
  { dept: 'Automated & System Queues', examples: 'noreply, no-reply, donotreply, mailer-daemon, daemon, bounce, bounces, autoresponder' },
]

export default function RoleAccountCheckerPage() {
  const jsonLds = [
    breadcrumbLd('Role-Based Email Checker', PATH),
    faqPageLd(FAQS),
    toolWebApplicationLd({
      name: 'Free Role-Based Email Checker and Role Account Filter',
      url: CANONICAL,
      description:
        'Free role-based email checker. Detect and filter RFC 2142 role accounts, shared department mailboxes, spam trap risks, and no-reply queues in your browser.',
      featureList: [
        'Checks over 180 RFC 2142 role account and generic inbox prefixes across 4 risk tiers',
        'CSV, TSV, and TXT file parsing with UTF-8 BOM stripping and original column preservation',
        'Safe +tag subaddress normalization without dot false positives on named accounts',
        'Automatic deduplication of repeated email addresses across uploaded files',
        'Three segmented CSV downloads: Personal Only, Personal + Sales/SMB, and Full Audit',
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
          Free List Cleaner · RFC 2142 Role Prefix Audit
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Role-Based Email Checker
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Use this free role-based email checker and role account email checker to scrub generic mailboxes before launching campaigns. Filter out RFC 2142 role-based email addresses, protect domain reputation, and export clean B2B lists.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <RoleAccountCheckerTool />
      </section>

      {/* READING GUIDE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        {/* Step-by-step usage */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the role-based email checker</h2>
          <p className={proseP}>
            Cleaning shared department inboxes out of a prospect sheet takes seconds inside this browser-based generic email filter:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Paste raw email addresses, comma-separated contacts, or upload a multi-column <span className={code}>.csv</span>, <span className={code}>.tsv</span>, or <span className={code}>.txt</span> file.</li>
            <li>The role account email checker automatically detects your email column, strips any UTF-8 byte order mark, and deduplicates exact matches.</li>
            <li>Review the top metrics showing how many addresses are safe <strong>Personal</strong> inboxes versus role-based or critical trap hazards.</li>
            <li>Filter the interactive table by risk category (Personal, General Business, Support/Ops, Compliance/Abuse, or No-Reply).</li>
            <li>Download your cleaned spreadsheet using one of three CSV export buttons tailored for enterprise or SMB sequences.</li>
          </ol>
        </div>

        {/* RFC 2142 Explanation */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>What is a role-based email address in RFC 2142?</h2>
          <p className={proseP}>
            Published by the Internet Engineering Task Force, <a href="https://www.rfc-editor.org/rfc/rfc2142" target="_blank" rel="noopener noreferrer" className={linkCls}>RFC 2142</a> defines standard mailbox names assigned to business functions rather than named individuals. Examples include <span className={code}>info@</span>, <span className={code}>support@</span>, <span className={code}>sales@</span>, <span className={code}>postmaster@</span>, and <span className={code}>abuse@</span>.
          </p>
          <p className={proseP}>
            While role-based email addresses help customers contact teams, they behave very differently from personal inboxes during B2B outreach and automated email marketing. Running a role account email checker before uploading leads protects your sender score across Google Workspace and Microsoft 365.
          </p>
        </div>

        {/* Why Role Accounts Hurt Deliverability */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Why role-based email addresses harm outreach deliverability</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>1. Multi-recipient spam complaint risk</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Group aliases such as <span className={code}>team@</span>, <span className={code}>office@</span>, or <span className={code}>marketing@</span> often forward every incoming message to five or twenty employees. If a single teammate flags your cold email as spam, inbox providers log a direct spam complaint against your sending domain and push complaints over the 0.3% bulk sender threshold.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>2. Pristine and recycled spam traps</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Security teams and blocklist operators watch old generic aliases left behind when websites shut down or migrate. Sending unverified outreach into an inactive <span className={code}>info@</span> or <span className={code}>abuse@</span> address can hit a <Link href="/glossary/spam-trap" className={linkCls}>spam trap</Link> and list your server on major blacklists.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>3. Automated helpdesk loops and auto-responders</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Messages addressed to <span className={code}>support@</span>, <span className={code}>helpdesk@</span>, or <span className={code}>billing@</span> usually land inside Zendesk, Freshdesk, or Jira queues. Instead of generating sales calls, these addresses bounce back ticket-creation auto-replies and drive engagement down.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>4. High unsubscribe and hard block risk on compliance queues</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Mailboxes like <span className={code}>postmaster@</span>, <span className={code}>dpo@</span>, and <span className={code}>security@</span> exist strictly for RFC compliance and incident reports. Mailing cold pitches to network operators risks manual domain blocks and abuse submissions.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Tier Table */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How our role account email checker classifies prefixes</h2>
          <p className={proseP}>
            Not every generic prefix carries identical risk. Our role-based email checker groups over 180 prefixes into actionable deliverability tiers so you keep control over your data:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Risk Tier</th>
                    <th className="py-2.5 px-4">Representative Prefixes</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Outreach Action</th>
                    <th className="py-2.5 px-4">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {ROLE_TIERS.map((r) => (
                    <tr key={r.tier} className="align-top">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">{r.tier}</td>
                      <td className="py-3 px-4 font-mono text-indigo-700 text-xs">{r.prefixes}</td>
                      <td className="py-3 px-4 text-slate-800 font-semibold whitespace-nowrap">{r.action}</td>
                      <td className="py-3 px-4 text-slate-600">{r.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SMB Segmentation */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>When to segment sales@ or info@ vs drop them</h2>
          <p className={proseP}>
            Most generic email filters delete <span className={code}>info@</span>, <span className={code}>sales@</span>, and <span className={code}>hello@</span> indiscriminately. For enterprise SaaS targeting Fortune 500 buyers, dropping those addresses is the right move because those queues sit behind support desks.
          </p>
          <p className={proseP}>
            However, if you prospect local contractors, dental clinics, law offices, or boutique agencies scraped from directories, a sole proprietor often checks <span className={code}>info@</span> directly. Our role-based email checker provides a separate <strong>Personal + Sales/SMB</strong> export button so you can run those addresses in isolated low-volume test campaigns without polluting primary executive sequences.
          </p>
        </div>

        {/* Department Reference Table */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Common role-based prefixes audited across industries</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4 whitespace-nowrap">Department Group</th>
                    <th className="py-2.5 px-4">Checked Prefixes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {DEPARTMENT_PREFIXES.map((d) => (
                    <tr key={d.dept} className="align-top">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">{d.dept}</td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-600">{d.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Role filtering vs SMTP verification */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Role account checks vs full SMTP email verification</h2>
          <p className={proseP}>
            A syntax-based role account email checker catches shared departmental names and <span className={code}>noreply@</span> queues instantly before spending verification credits. However, personal addresses like <span className={code}>john.doe@company.com</span> can still bounce if the employee left the job, the domain is a <Link href="/blog/what-is-a-catch-all-email-address" className={linkCls}>catch-all domain</Link>, or the domain uses a <Link href="/disposable-email-checker" className={linkCls}>disposable inbox</Link>.
          </p>
          <p className={proseP}>
            After cleaning out role accounts here, upload your remaining personal list to <Link href="/email-checker" className={linkCls}>Giggal</Link>. Giggal verifies live mailbox existence and resolves catch-all and Secure Email Gateway domains with 98.5% accuracy (and gives every new account 1,000 free credits).
          </p>
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
        headline="Verify your cleaned personal emails before sending"
        supporting="Clean your lists with 98.5% accuracy, deep catch-all resolution, and 1,000 free credits."
        buttonText="Start Verifying for Free"
      />

      <Footer />
    </main>
  )
}
