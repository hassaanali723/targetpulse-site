import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, ORG_ID } from '@/lib/schema'
import {
  ArrowRight, ArrowUpRight, Check,
  ShieldCheck, CheckCircle2, AlertTriangle, XCircle,
  Database, Code2, Terminal, Cpu,
  Lock, Ban, Zap, Layers,
} from 'lucide-react'

const CANONICAL = '/use-cases/prevent-fake-signups'
const APP_URL = 'https://emailverifier.giggal.ai/sign-up'

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `https://giggal.ai${CANONICAL}#software`,
  name: 'Giggal.ai Real-Time SaaS Signup & Disposable Email Prevention API',
  url: `https://giggal.ai${CANONICAL}`,
  applicationCategory: 'SecurityApplication',
  applicationSubCategory: 'SaaS Fraud Prevention and Disposable Email Detection',
  operatingSystem: 'Web',
  description:
    'Block temporary 10-minute mailboxes, disposable domains, and automated bot registrations. Protect free trial credits and customer databases with low-latency API verification.',
  publisher: { '@id': ORG_ID },
  featureList: [
    'Sub-200ms real-time API response latency for auth endpoints',
    'Catalog of 85,000+ active disposable and temporary burner domains',
    'Pre-signup webhook integration for Supabase, Clerk, and NextAuth',
    'Mailbox presence verification without sending actual messages',
    'Domain DNS and MX relay analysis to detect routing anomalies',
    '1,000 free API credits with zero credit card required',
  ],
}

const threatVectors = [
  {
    title: 'Disposable & 10-Minute Burner Inboxes',
    desc: 'Attackers create temporary inboxes via services like Temp-Mail, Mailinator, and GuerrillaMail solely to pass email confirmation links without intent to become paying customers.',
    badge: 'Burner Mailboxes',
    icon: Ban,
  },
  {
    title: 'Free Trial Credit & Token Farming',
    desc: 'Abusers cycle multiple temporary accounts to repeatedly exploit complimentary AI tokens, cloud compute hours, or free tier quotas, driving up infrastructure expenses.',
    badge: 'Sybil Attacks',
    icon: Cpu,
  },
  {
    title: 'Automated Bot & Scraper Registrations',
    desc: 'Headless browser scripts generate automated user profiles to crawl proprietary dashboards, scrape internal directories, and flood customer databases with dead records.',
    badge: 'Database Pollution',
    icon: BotIcon,
  },
]

function BotIcon({ className }: { className?: string }) {
  return <Terminal className={className} />
}

const defenseSteps = [
  {
    num: '01',
    title: 'Domain & MX Routing Inspection',
    desc: 'Checks DNS records in real time to verify whether mail routing points to disposable relay clusters or inactive servers.',
  },
  {
    num: '02',
    title: 'Dynamic Burner Registry Match',
    desc: 'Queries our database of 85,000+ known disposable domains, updated continuously with newly registered throwaway hosts.',
  },
  {
    num: '03',
    title: 'Mailbox Handshake Probe',
    desc: 'Executes a direct server handshake to confirm recipient existence without delivering actual emails or notifying the user.',
  },
  {
    num: '04',
    title: 'Instant Auth Decision',
    desc: 'Returns a structured JSON payload in under 200ms, enabling your signup controller to allow or deny registration immediately.',
  },
]

const authPlatforms = [
  { name: 'NextAuth / Auth.js', type: 'Full-Stack Framework' },
  { name: 'Supabase Auth', type: 'Backend-as-a-Service' },
  { name: 'Clerk', type: 'User Management' },
  { name: 'Firebase Auth', type: 'Identity Platform' },
  { name: 'Node.js / Express', type: 'Backend Runtime' },
  { name: 'Python FastAPI', type: 'Modern API Framework' },
  { name: 'Go', type: 'High-Concurrency Backend' },
  { name: 'PHP / Laravel', type: 'Web Application Framework' },
]

const fakeSignupFaqs: FaqItem[] = [
  {
    q: 'Will real-time verification introduce noticeable latency during signup?',
    a: 'No. The Giggal API responds in under 200 milliseconds globally, ensuring your user onboarding and registration forms remain fast and responsive.',
  },
  {
    q: 'How frequently is the disposable domain database updated?',
    a: 'Our systems continuously discover and catalog new throwaway and burner domains daily, tracking over 85,000 active disposable domains globally.',
  },
  {
    q: 'What happens if a legitimate business prospect signs up?',
    a: 'Legitimate business and personal email domains (such as Google Workspace, Microsoft 365, iCloud, or custom corporate domains) are verified and approved immediately.',
  },
  {
    q: 'Can we integrate this directly into Supabase or Clerk auth webhooks?',
    a: 'Yes. You can invoke our endpoint inside Supabase database webhooks, Clerk before-user-creation hooks, or Next.js server actions before an account record is provisioned.',
  },
  {
    q: 'How does billing work for high-volume SaaS registration endpoints?',
    a: 'Each verification check consumes 1 credit. We provide 1,000 free credits on registration, followed by transparent volume-based pay-as-you-go pricing.',
  },
]

export const metadata = {
  // absolute: the root layout's '%s | Giggal.ai' template would add the brand a second time.
  title: { absolute: 'Prevent Fake SaaS Signups & Disposable Email Abuse | Giggal.ai' },
  description:
    'Block temporary 10-minute mailboxes, disposable domains, and automated bot registrations. Protect free trial credits and customer databases with low-latency API verification.',
  alternates: {
    canonical: `https://giggal.ai${CANONICAL}`,
  },
  openGraph: {
    title: 'Prevent Fake SaaS Signups & Disposable Email Abuse | Giggal.ai',
    description:
      'Block temporary 10-minute mailboxes, disposable domains, and automated bot registrations. Protect free trial credits and customer databases with low-latency API verification.',
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
}

export default function PreventFakeSignupsPage() {
  const breadcrumbData = breadcrumbLd('Prevent Fake Signups', CANONICAL)
  const faqData = faqPageLd(fakeSignupFaqs)

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
      <JsonLd data={softwareLd} />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={faqData} />

      <Navbar tone="light" />

      <main className="pt-24 sm:pt-28 pb-20 overflow-hidden">
        {/* HERO SECTION (No AI badges) */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-6 sm:pt-10 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Stop Fake Signups, Burner Emails, and Free Trial Abuse in Real Time
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Bots and repeat abusers use 10-minute temporary mailboxes to drain free API credits and pollute user databases. Giggal verifies email legitimacy at registration in under 200 milliseconds.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
              >
                <span>Get API Key Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/public/docs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all"
              >
                <span>Read API Documentation</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* 3 Core Factual Metrics */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="text-2xl font-black text-indigo-600">&lt; 200ms</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  P99 API verification latency for real-time auth blocking
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="text-2xl font-black text-slate-900">85,000+</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Active disposable and burner email domains cataloged
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="text-2xl font-black text-slate-900">0%</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  False positive disruption to genuine business signups
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THREE THREAT VECTORS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Three Vectors of SaaS Registration Abuse
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Unprotected registration forms leave SaaS products vulnerable to credit draining, trial looping, and synthetic account creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threatVectors.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                    <item.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: 4-STAGE DEFENSE PIPELINE */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Real-Time Verification Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              How our verification engine evaluates signup requests in milliseconds before accounts are provisioned.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {defenseSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col"
              >
                <div className="text-xs font-mono font-bold text-indigo-600 mb-2">
                  STAGE {step.num}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: DEVELOPER CODE INTEGRATION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Simple Pre-Signup Controller Integration
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Integrate with a single API request inside your registration route, server action, or auth webhook.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Code Snippet Box */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-950 text-slate-200 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>app/api/auth/register/route.ts</span>
                </span>
                <span className="text-[11px] text-emerald-400">Next.js App Router</span>
              </div>
              <pre className="text-slate-300 leading-relaxed">
{`// 1. Verify before provisioning user in database
const check = await fetch('https://api.giggal.ai/v1/verify', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.GIGGAL_API_KEY}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: userEmail }),
})

const result = await check.json()

// 2. Reject disposable or dead mailboxes
if (result.is_disposable || result.status === 'undeliverable') {
  return Response.json(
    { error: 'Temporary burner emails are not allowed.' },
    { status: 400 }
  )
}

// 3. Proceed to create account and grant trial
await db.user.create({ data: { email: userEmail } })`}
              </pre>
            </div>

            {/* Live Response Payload Box */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs font-semibold text-slate-700">
                  <span>API JSON Response</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-mono text-xs">
                    <Zap className="w-3.5 h-3.5" />
                    <span>184ms</span>
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 font-mono text-xs text-slate-800 leading-relaxed border border-slate-200">
                  <div>&#123;</div>
                  <div className="pl-4">&quot;email&quot;: &quot;bot@mailinator.com&quot;,</div>
                  <div className="pl-4 text-rose-600 font-bold">&quot;status&quot;: &quot;undeliverable&quot;,</div>
                  <div className="pl-4 text-rose-600 font-bold">&quot;is_disposable&quot;: true,</div>
                  <div className="pl-4">&quot;domain&quot;: &quot;mailinator.com&quot;,</div>
                  <div className="pl-4">&quot;mx_records_found&quot;: true,</div>
                  <div className="pl-4 text-indigo-600">&quot;action&quot;: &quot;block_registration&quot;</div>
                  <div>&#123;</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                Instant block decision prevents burner accounts from entering PostgreSQL tables.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SUPPORTED AUTH STACKS */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Supported Auth & Framework Ecosystems
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Integrate with any modern authentication provider or backend framework in minutes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {authPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-center hover:bg-slate-50 transition-colors"
              >
                <div className="font-bold text-sm text-slate-900">{platform.name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{platform.type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: CENTERED BRANDED FAQ ACCORDION */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-14 border-t border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Everything developers and founders need to know about disposable email blocking, API latency, and fraud protection.
            </p>
          </div>

          <FaqAccordion items={fakeSignupFaqs} />
        </section>

        {/* SECTION 8: MINIMALIST BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Block burner emails before they enter your database.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Stop free trial abuse and preserve your cloud resources with sub-200ms real-time verification. Get started with 1,000 free API credits.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Start with 1,000 Free Credits</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
                >
                  <span>View Pricing Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
