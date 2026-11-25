import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MotionRuntime from '@/components/landing/MotionRuntime'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import DirectoryScrapeInspector from '@/components/agency-leads/DirectoryScrapeInspector'
import CatchAllRecoveryCalculator from '@/components/agency-leads/CatchAllRecoveryCalculator'
import { GoodFirmsGreylistTimeline } from '@/components/agency-leads/PlatformExplorers'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Globe2,
  Activity,
} from 'lucide-react'

const CANONICAL = '/agency-leads/goodfirms'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai GoodFirms Email Verification and IT Agency Lead Cleaning',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'IT Service Agency Lead Verification and Offshore Directory Cleaning',
  operatingSystem: 'Web',
  description:
    'Verify IT agency leads scraped from GoodFirms.co. Resolve catch-all mailboxes at 98.5% accuracy on business lists, flag role accounts, refund Unknown greylist credits automatically, and protect cold email deliverability.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Deep mailbox existence check without dispatching test emails',
    'Catch-all verification with 98.5% accuracy on business lists',
    'Honest Unknown labeling on greylisted hosts with automatic credit refunds',
    'Role-based, disposable, and duplicate flags alongside valid/invalid verdicts',
    '1,000 free credits on signup (no card needed) and up to 50,000 rows per file',
  ],
}

const goodfirmsFaqs: FaqItem[] = [
  {
    q: 'Why do scraped GoodFirms agency leads carry high bounce risks?',
    a: 'GoodFirms indexes IT service providers, offshore dev shops, and software consultancies worldwide across many country-code and tech domains. Smaller IT firms regularly rebrand, change hosting, or let secondary domains expire, while developers and contractors change roles. Sending cold emails without verifying leads first creates unnecessary bounce exposure.',
  },
  {
    q: 'How does Giggal.ai verify catch-all domains on GoodFirms IT agency leads?',
    a: 'On typical B2B lists, around 30% of addresses sit on catch-all domains (frequently Google Workspace or Microsoft 365). Ordinary single-ping verifiers mark them Risky. Giggal.ai checks whether the underlying mailbox exists behind the catch-all setup, delivering 98.5% accuracy on business lists.',
  },
  {
    q: 'How does Giggal.ai handle greylisting on international IT agency mail servers?',
    a: 'Many offshore IT agencies run shared cPanel or Plesk Linux mail hosts that return temporary 451 deferrals (greylisting) to unfamiliar connections. Rather than mislabeling active agencies as Invalid, Giggal.ai marks greylisted addresses Unknown and refunds those credits automatically so you can retry them later at zero extra cost.',
  },
  {
    q: 'Can Giggal.ai separate IT agency founders from recruitment and HR aliases?',
    a: 'Yes. Spiders crawling IT agency websites regularly pick up recruitment addresses like hr@, careers@, jobs@, or resumes@. Giggal.ai marks shared addresses with a role_account flag so outreach teams can separate HR desks from Managing Directors, Founders, and CTOs.',
  },
  {
    q: 'Can we upload CSV or Excel spreadsheets with GoodFirms columns intact?',
    a: 'Yes. Upload CSV or Excel files containing up to 50,000 email addresses per batch and download clean results as a CSV with Deliverable, Undeliverable, or Unknown statuses plus catch-all, role-based, disposable, and duplicate flags for a clean email list.',
  },
  {
    q: 'What cold email bounce rate should SDRs target when prospecting IT agency leads?',
    a: 'Cleaned lists verified with Giggal.ai usually bounce under 3%. Removing Undeliverable, Disposable, and unwanted Role-based contacts keeps cold campaign bounce rates low, helping sales teams stay under 2% to safeguard Google Workspace and Microsoft 365 sender reputation.',
  },
  {
    q: 'Can we automate GoodFirms email verification using Zapier, n8n, or the Giggal.ai API?',
    a: 'Yes. Giggal.ai supports a documented REST API, direct Zapier and n8n integrations, Clay API workflows, and an MCP server so you can clean GoodFirms leads automatically as records are gathered.',
  },
  {
    q: 'How many free verification credits does Giggal.ai provide for GoodFirms leads?',
    a: 'Every new account receives 1,000 free credits on sign-up with no card needed, and credits never expire. Unknown credits are refunded automatically.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const card = 'rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'

export const metadata = {
  title: {
    absolute: 'GoodFirms Email Verification | Clean Scraped IT Leads | Giggal.ai',
  },
  description:
    'Verify IT agency leads scraped from GoodFirms.co. Resolve catch-all domains at 98.5% accuracy on business lists, handle greylisting with automatic refunds, and protect cold email deliverability.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai GoodFirms email verification' }],
    title: 'GoodFirms Email Verification | Clean Scraped IT Leads | Giggal.ai',
    description:
      'Verify IT agency leads scraped from GoodFirms.co. Resolve catch-all domains at 98.5% accuracy, handle greylisting with refunds, and protect cold email deliverability.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function GoodFirmsLeadVerificationPage() {
  const breadcrumbData = breadcrumbLd('GoodFirms IT Agency Leads', CANONICAL)
  const faqData = faqPageLd(goodfirmsFaqs)

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <MotionRuntime />
      <Navbar />

      {/* ── CENTERED GLOBAL IT HERO + REAL TLD EXPOSURE STRIP ── */}
      <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-slate-900">
          GoodFirms email verification for{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            global IT agency prospecting
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
          Scraped GoodFirms agency leads span country-code domains, shared Linux greylisting servers, and shifting contractor teams. Verify catch-all domains at 98.5% accuracy on business lists and keep cold email deliverability protected.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-lg shadow-indigo-600/25 transition-colors text-sm"
          >
            <span>Verify GoodFirms leads free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/public/docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-bold hover:border-indigo-200 transition-colors text-sm"
          >
            <span>API documentation</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-slate-500">
          {['1,000 free credits', 'No card needed', 'Unknown greylist credits refunded'].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        {/* Calm Verified Global IT Profile Strip */}
        <dl className="pt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {[
            { v: '98.5%', l: 'Accuracy on business & IT consultancy lists' },
            { v: 'Refunded', l: 'Credits returned automatically on Unknown greylist rows' },
            { v: 'ccTLDs', l: 'Live DNS & MX checks across .in, .co.uk, .io & .agency' },
            { v: 'Role Flag', l: 'Separates hr@, jobs@ & careers@ from executive buyers' },
          ].map((m) => (
            <div key={m.l} className={`${card} p-5`}>
              <dt className="sr-only">{m.v}</dt>
              <dd>
                <span className="block text-2xl font-black tracking-tight text-slate-900 tabular-nums">{m.v}</span>
                <span className="mt-1 block text-xs text-slate-500 font-medium leading-normal">{m.l}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── INTERACTIVE GREYLISTING & REFUND TIMELINE (EXCLUSIVE TO GOODFIRMS) ── */}
      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-slate-200 space-y-6">
        <div className="max-w-3xl space-y-2">
          <h2 className={sectionTitle}>How shared Linux greylisting works and why Unknown refunds matter</h2>
          <p className={proseP}>
            Click through each protocol stage below to see why shared cPanel and Plesk mail servers issue 451 deferrals, and how Giggal.ai protects both your data and your credits.
          </p>
        </div>
        <GoodFirmsGreylistTimeline />
      </section>

      {/* ── SPLIT INSPECTOR + INTERNATIONAL ccTLD & CONTRACTOR CHURN ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-5">
            <h2 className={sectionTitle}>Expired ccTLDs and offshore contractor turnover</h2>
            <p className={proseP}>
              GoodFirms features software engineering houses across South Asia, Eastern Europe, Latin America, and the UK. Many operate on country-code TLDs (.in, .co.uk, .ua) alongside tech extensions (.agency, .io, .dev) where lapsed renewals or hosting changes can sever MX routing silently.
            </p>
            <p className={proseP}>
              Meanwhile, contract developers and project leads rotate across client engagements frequently. Crawlers harvesting names from team pages pull former contractor addresses that bounce hard unless verified beforehand.
            </p>
            <p className={proseP}>
              Giggal.ai verifies DNS authority, MX routing, and catch-all mailboxes at 98.5% accuracy on business lists so your clean email list filters dead domains while retaining active IT agency leads.
            </p>
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center">
              {[
                { ext: '.in / .co.uk', note: 'DNS & MX checked' },
                { ext: '.agency / .io', note: 'Catch-all verified' },
                { ext: 'cPanel / Plesk', note: 'Unknown refunded' },
              ].map((t) => (
                <div key={t.ext} className={`${card} p-3`}>
                  <div className="text-xs font-black font-mono text-indigo-600">{t.ext}</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{t.note}</div>
                </div>
              ))}
            </div>
          </div>

          <DirectoryScrapeInspector platform="goodfirms" />
        </div>
      </section>

      {/* ── FOCUSED READING SECTION: GLOBAL IT & GREYLISTING RESILIENCE ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Why GoodFirms email verification protects international outreach</h2>
        <p className={proseP}>
          Prospecting IT agency leads scraped from GoodFirms.co exposes outbound campaigns to global mail setups rarely encountered in domestic US sales databases. Consultancies frequently run country-code domains, custom regional hosting stacks, or shared Linux mail servers configured with defensive greylisting policies.
        </p>
        <p className={proseP}>
          At the same time, many engineering houses configure Google Workspace or Microsoft 365 catch-all routing. Dedicated GoodFirms email verification confirms mailbox existence behind catch-all rules at 98.5% accuracy on business lists while labeling deferred greylist servers honestly as Unknown with automatic credit refunds.
        </p>
        <p className={proseP}>
          By filtering expired domains, deactivated developer accounts, and HR recruitment aliases before launch, sales teams produce a clean email list designed to safeguard cold email deliverability and keep cleaned lists bouncing under 3%.
        </p>
        <p className={proseP}>
          Upload CSV or Excel files of up to 50,000 rows per batch or stream single addresses through the Giggal.ai REST API, Zapier, n8n, or Clay pipelines so your outbound CRM stays accurate globally.
        </p>
        <p className={proseP}>
          Before emailing any list of international IT consultancies, verify whether catch-all corporate servers actually contain the target partner or founder mailbox. Testing IT agency leads at 98.5% accuracy on business lists keeps legitimate engineering studios in your campaign while removing dead contractor accounts and lapsed domains.
        </p>
        <p className={proseP}>
          Every row in your CSV result marks catch-all verdicts, disposable domains, duplicate entries, and role-based flags clearly, giving sales operations teams a clean email list ready for Google Workspace and Microsoft 365 outreach. Unknown greylist outcomes refund automatically to your credit balance so retrying deferred agencies later costs nothing extra, helping global teams scale clean email list outreach safely.
        </p>
        <p className={proseP}>
          Cleaned business lists usually bounce under 3%, and removing shared HR or support role addresses keeps cold campaigns even cleaner across international inbox providers.
        </p>
      </section>

      {/* ── RECRUITMENT ALIAS ISOLATION + PIPELINE RECOVERY ESTIMATOR ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Filtering hiring queues from IT agency buyers
            </h2>
            <p className={proseP}>
              Because software development agencies hire year-round, website spiders routinely pull hr@, careers@, resumes@, and developer@ mailboxes. Pitching B2B software or agency partnerships into hiring applicant queues generates zero sales replies.
            </p>
            <p className={proseP}>
              Giggal.ai flags role-based addresses cleanly alongside valid/invalid results, helping outreach teams target Managing Directors, Founders, CTOs, and Heads of Delivery directly.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'Personal Leadership', emails: 'director@, cto@, name@', tag: 'Deliverable', cls: 'border-emerald-200 bg-emerald-50/60 text-emerald-800' },
              { title: 'Commercial Desks', emails: 'sales@, newbiz@, contact@', tag: 'Role-Based (Optional)', cls: 'border-indigo-200 bg-indigo-50/60 text-indigo-800' },
              { title: 'HR & Hiring Queues', emails: 'hr@, careers@, jobs@, resumes@', tag: 'Filter Out', cls: 'border-rose-200 bg-rose-50/60 text-rose-800' },
            ].map((b) => (
              <div key={b.title} className={`rounded-2xl border p-4 space-y-1.5 ${b.cls}`}>
                <div className="text-[11px] font-extrabold uppercase tracking-wider">{b.tag}</div>
                <h3 className="text-sm font-black text-slate-900">{b.title}</h3>
                <p className="text-[11px] font-mono text-slate-600">{b.emails}</p>
              </div>
            ))}
          </div>
        </div>

        <CatchAllRecoveryCalculator platformLabel="GoodFirms Agency" defaultCatchAllRate={30} />
      </section>

      {/* ── COMPARISON MATRIX + GLOBAL OUTBOUND PROTOCOLS ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>GoodFirms email verification: comparing your options</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Capability</th>
                  <th className="py-3.5 px-5 font-bold">Raw GoodFirms Scrape</th>
                  <th className="py-3.5 px-5 font-bold">Generic Verifiers</th>
                  <th className="py-3.5 px-5 font-bold bg-indigo-50/60 text-indigo-900">Giggal.ai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Catch-All Resolution</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Unchecked catch-all risk</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Marked Risky (left to you)</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Deliverable or Undeliverable (98.5%)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Greylisting Policy (451 Deferral)</td>
                  <td className="py-3.5 px-5 text-slate-500">Unchecked</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Often keeps credit or mislabels</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Marked Unknown, Credit Refunded</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Post-Verification Bounce Rate</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">High bounce exposure</td>
                  <td className="py-3.5 px-5 text-amber-600 font-semibold">Varies if Risky sent</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Usually under 3% (aim &lt; 2%)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Expired Domains &amp; Role Flags</td>
                  <td className="py-3.5 px-5 text-rose-600 font-semibold">Mixed with valid leads</td>
                  <td className="py-3.5 px-5 text-slate-600">Varies by tool</td>
                  <td className="py-3.5 px-5 text-emerald-700 font-extrabold bg-indigo-50/20">Live DNS + Role-Based Flags</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Credit Policy</td>
                  <td className="py-3.5 px-5 text-slate-400">N/A</td>
                  <td className="py-3.5 px-5 text-slate-600">Charges extra for catch-all</td>
                  <td className="py-3.5 px-5 text-indigo-700 font-extrabold bg-indigo-50/20">1 credit flat, 1,000 free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { Icon: ShieldCheck, title: 'SPF, DKIM, DMARC Setup', body: 'Authenticate secondary domains with SPF TXT entries, DKIM signing, and DMARC policies before global outreach.' },
            { Icon: Activity, title: 'Measured Daily Volume', body: 'Pace cold outreach conservatively across warmed sender accounts rather than blasting from one inbox.' },
            { Icon: Globe2, title: 'Periodic Re-Verification', body: 'Re-check international agency exports prior to follow-up waves so lapsed domains and staff changes never bounce.' },
          ].map(({ Icon, title, body }) => (
            <div key={title} className={`${card} p-5 space-y-2`}>
              <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900">
                <Icon className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{title}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-12 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions: GoodFirms email verification</h2>
          <p className={proseP}>
            Clear answers on GoodFirms agency leads, greylisting handling, and global IT outreach hygiene.
          </p>
        </div>
        <FaqAccordion items={goodfirmsFaqs} />
      </section>

      <AltCtaBand
        headline="Clean your GoodFirms IT agency export today"
        supporting="98.5% accuracy on business lists including catch-all verification. Unknown credits refunded. 1,000 free credits."
        buttonText="Verify GoodFirms leads free"
      />

      <Footer />
    </main>
  )
}
