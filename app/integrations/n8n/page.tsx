import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, RefreshCw, MailCheck, ListChecks, Activity, FileDown } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd, faqPageLd } from '@/lib/schema'
import { SIGNUP_URL } from '@/lib/integrations'
import type { FaqItem } from '@/components/landing/FaqAccordion'

const NPM_URL = 'https://www.npmjs.com/package/n8n-nodes-giggal'

export const metadata: Metadata = {
  title: 'n8n Email Verification Integration',
  description:
    'Verify emails inside n8n with the official Giggal.ai community node. Single checks, bulk jobs and catch-all email verification, straight from your workflows. Install n8n-nodes-giggal from npm.',
  alternates: { canonical: '/integrations/n8n' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'n8n Email Verification Integration | Giggal.ai',
    description:
      'Verify emails inside n8n with the official Giggal.ai community node. Single checks, bulk jobs and catch-all verification in your workflows.',
    url: 'https://giggal.ai/integrations/n8n',
    type: 'website',
  },
}

const OPERATIONS = [
  {
    icon: MailCheck,
    name: 'Verify',
    detail: 'Check one email address in real time, catch-all resolution included. 1 credit per check.',
  },
  {
    icon: ListChecks,
    name: 'Verify Batch',
    detail: 'Send a whole list in one go. Returns a job ID your workflow can poll.',
  },
  {
    icon: Activity,
    name: 'Get Status',
    detail: 'Check how far along a batch job is: processed count, percentage, completion time.',
  },
  {
    icon: FileDown,
    name: 'Get Results',
    detail: 'Pull the finished results, paginated, with an optional filter like deliverable or catch_all.',
  },
]

// Install + first verification, written from the actual screenshots.
const INSTALL_STEPS = [
  {
    title: 'Open Community nodes in your n8n settings',
    text: 'In your n8n instance, click your account menu in the bottom left and open Settings, then pick Community nodes from the list.',
    image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
    imageAlt: 'The Community nodes entry inside the n8n settings menu',
  },
  {
    title: 'Install n8n-nodes-giggal',
    text: 'Click Install a community node, type n8n-nodes-giggal into the npm Package Name field, tick the checkbox and hit Install. n8n pulls the package straight from npm and the Giggal.ai node shows up in your node picker.',
    image: '/integrations/n8n/giggal-n8n-step2.png',
    imageAlt: 'Installing the n8n-nodes-giggal package in the Install community nodes dialog',
  },
  {
    title: 'Add the node and create a credential',
    text: 'Drop the Giggal.ai node into a workflow. In the Credential dropdown, pick Create new credential.',
    image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
    imageAlt: 'Creating a new Giggal.ai credential on the node in n8n',
  },
  {
    title: 'Paste your API key',
    text: 'In your Giggal.ai dashboard, open the Developer API tab in the sidebar and click Create API Key. Paste the key into the API Key field and save. The credential is now ready for every Giggal.ai node in your instance. New accounts come with 1,000 free credits, no card needed.',
    image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
    imageAlt: 'Adding the Giggal.ai API key to the n8n credential',
  },
  {
    title: 'Verify your first email',
    text: 'Set Resource to Email and Operation to Verify. Map the Email Address field to your incoming data with an expression like {{ $json.email }}, then hit Execute step. The output lands in seconds: status, risk level, deliverability score, and the full catch-all breakdown.',
    image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
    imageAlt: 'Running a single email verification in n8n and reading the result output',
  },
]

const BATCH_STEPS = [
  {
    title: 'Kick off a batch with Verify Batch',
    text: 'Set Operation to Verify Batch and point Email Field at the property holding the addresses. Give the batch a name if you want to find it in the dashboard later, and leave Enable Catch-All Rescue on so catch-all addresses get resolved instead of skipped. The node returns a job ID immediately while verification runs in the background.',
    image: '/integrations/n8n/giggal-n8n-verify-batch.png',
    imageAlt: 'Submitting a batch of emails for verification with the Giggal.ai n8n node',
  },
  {
    title: 'Poll the job with Get Status',
    text: 'Switch Resource to Job and Operation to Get Status, and feed it the job ID from the previous step. Small lists usually finish in well under a minute; a Wait node between checks keeps the loop polite.',
    image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
    imageAlt: 'Checking batch job progress with the Get Status operation in n8n',
  },
  {
    title: 'Fetch everything with Get Results',
    text: 'Once status shows completed, run Get Results with the same job ID. You get one item per email with status, risk level and score, ready for whatever comes next in the workflow. The Status Filter field lets you pull only deliverable, undeliverable or catch_all rows.',
    image: '/integrations/n8n/giggal-n8n-get-job-result.png',
    imageAlt: 'Fetching finished batch verification results in n8n',
  },
]

const FAQ: FaqItem[] = [
  {
    q: 'Does the Giggal.ai node work on n8n Cloud?',
    a: 'Yes. Install it through Settings and Community nodes, connect your API key, and it works the same on n8n Cloud and self-hosted instances.',
  },
  {
    q: 'Is the community node safe to install?',
    a: 'The package is published by the Giggal.ai team as n8n-nodes-giggal on npm, and the source is open for anyone to inspect. It talks only to the Giggal.ai API with the credential you configure, nothing else.',
  },
  {
    q: 'Can it verify catch-all emails inside n8n?',
    a: 'Yes, that is the reason to pick Giggal.ai over a generic checker. Giggal.ai is a catch-all email verification tool: single verifications resolve catch-all domains automatically, and batches do the same when Enable Catch-All Rescue is on. You get a clear result with a score instead of a risky label.',
  },
  {
    q: 'What does verification cost through n8n?',
    a: 'Same pricing as everywhere else: 1 credit per verification, with catch-all deep verification running in-line when a domain needs it. New accounts start with 1,000 free credits and no credit card.',
  },
  {
    q: 'What comes back in the output?',
    a: 'Each verified email returns status (deliverable or undeliverable), risk level, a deliverability score, attribute flags like free email, role account and disposable, mail server details, and the catch-all result with its score. Everything is normal n8n JSON you can route, filter and map.',
  },
]

function howToLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to verify emails in n8n with the Giggal.ai community node',
    description:
      'Install n8n-nodes-giggal, connect your API key, and verify single emails or whole lists inside n8n workflows.',
    step: [...INSTALL_STEPS, ...BATCH_STEPS].map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
      image: `https://giggal.ai${s.image}`,
    })),
  }
}

function StepList({ steps }: { steps: typeof INSTALL_STEPS }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={s.title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
          <div className="flex gap-5">
            <span className="w-9 h-9 rounded-full bg-indigo-600 text-white font-black text-[15px] flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-[16px] font-black text-slate-900 mb-1.5">{s.title}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{s.text}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.imageAlt}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="mt-4 w-full h-auto rounded-xl border border-slate-200"
              />
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function N8nIntegrationPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Integrations', path: '/integrations' },
          { name: 'n8n', path: '/integrations/n8n' },
        ])}
      />
      <JsonLd data={faqPageLd(FAQ)} />
      <JsonLd data={howToLd()} />
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-14 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-[13px] font-bold mb-8">
          <Link href="/integrations" className="text-indigo-600 hover:text-indigo-700">
            Integrations
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600">n8n</span>
        </nav>

        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/giggal-catch-all-email-verifier-icon.png"
              alt="Giggal.ai"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="w-11 h-11 object-contain"
            />
          </div>
          <RefreshCw className="w-6 h-6 text-slate-400" aria-hidden="true" />
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-200 card-vivid-shadow flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/integrations/giggal-catch-all-email-verification-n8n.png"
              alt="n8n email verification with Giggal.ai catch-all email verifier"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="w-11 h-11 rounded-lg object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          n8n Email Verification <span className="gradient-text">Integration</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          Run Giggal.ai inside your n8n workflows with the official community node. Verify a
          single address, push through a whole list, and resolve the catch-all emails other
          nodes give up on. Install once from npm, then it behaves like any other n8n node.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-black text-[15px] hover:bg-indigo-700 transition-colors glow-recommendation"
          >
            Start free with 1,000 credits
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-300 bg-white text-slate-800 font-bold text-[15px] hover:border-indigo-400 transition-colors"
          >
            View on npm
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Operations */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            What the Node Can Do
          </h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto">
            Two resources, four operations. Email for real-time checks, Job for bulk work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OPERATIONS.map((op) => {
            const Icon = op.icon
            return (
              <div key={op.name} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 mb-1.5">{op.name}</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">{op.detail}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Install + first verification */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Install the Node and Verify Your First Email
        </h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
          Five minutes from a fresh n8n instance to a verified email. You will need a
          self-hosted n8n instance and a free Giggal.ai account.
        </p>
        <StepList steps={INSTALL_STEPS} />
      </section>

      {/* Bulk flow */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Verifying Whole Lists
        </h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
          For anything bigger than a handful of addresses, use the Job resource. The pattern
          is submit, poll, fetch: three nodes and your whole list comes back verified.
        </p>
        <StepList steps={BATCH_STEPS} />

        {/* Catch-all positioning callout */}
        <div className="mt-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6">
          <h3 className="text-[15px] font-black text-slate-900 mb-2">
            Powered by a catch-all email verifier, not a standard checker
          </h3>
          <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
            Most verifiers stop at a basic SMTP ping. SEG-protected addresses come back as
            unknown, and catch-all domains come back as risky. Giggal.ai verifies both. It{' '}
            <Link href="/seg-email-verification" className="font-black text-indigo-600 hover:text-indigo-700">
              bypasses secure email gateways
            </Link>{' '}
            like Proofpoint and Mimecast, runs deep verification on catch-all domains, and
            confirms the mailbox behind every address in your n8n workflow actually exists.
            Either way you get a clear valid or invalid result, and around 30% more of your
            list stays usable. That is what makes it a catch-all email verification tool
            rather than another checker.{' '}
            <Link href="/catch-all-verification" className="font-black text-indigo-600 hover:text-indigo-700">
              See how catch-all verification works
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-10">
          n8n Integration FAQ
        </h2>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <details key={f.q} className="group bg-white border-2 border-slate-200 rounded-2xl px-6 py-5 card-vivid-shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[15px] font-black text-slate-900">
                {f.q}
                <span className="text-indigo-600 text-xl leading-none group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] text-slate-600 leading-relaxed font-medium">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 pt-6">
        <div className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Add Email Verification to Your n8n Workflows
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-[15px] leading-relaxed font-medium">
            Install n8n-nodes-giggal, paste your API key, and your workflows stop passing
            around dead email addresses. 1,000 free credits to start, no card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-black text-[15px] hover:bg-indigo-50 transition-colors"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/integrations"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              Explore all integrations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
