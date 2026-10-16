import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  RefreshCw,
  MailCheck,
  ListChecks,
  ShieldCheck,
  Filter,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { breadcrumbTrailLd, faqPageLd } from '@/lib/schema'
import { SIGNUP_URL } from '@/lib/integrations'
import type { FaqItem } from '@/components/landing/FaqAccordion'

const APP_URL = 'https://emailverifier.giggal.ai'

export const metadata: Metadata = {
  title: 'HubSpot Email Verification Integration',
  description:
    'Verify the contacts already in your HubSpot CRM with Giggal.ai. Import a list, resolve catch-all addresses, and read the result from five properties on every contact.',
  alternates: { canonical: '/integrations/hubspot' },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'HubSpot Email Verification Integration | Giggal.ai',
    description:
      'Connect Giggal.ai to HubSpot, verify your contacts and lists, and filter on the result without leaving your CRM.',
    url: 'https://giggal.ai/integrations/hubspot',
    type: 'website',
  },
}

const CAPABILITIES = [
  {
    icon: ListChecks,
    name: 'Import contacts or a list',
    detail:
      'Pick All contacts or any HubSpot list. Contact counts are shown so you know what a run costs before it starts.',
  },
  {
    icon: MailCheck,
    name: 'Verify every address',
    detail:
      'Each mailbox is checked for real existence, with catch-all domains resolved rather than left as risky. 1 credit per address.',
  },
  {
    icon: RefreshCw,
    name: 'Results written back',
    detail:
      'Five Giggal properties are set on each contact automatically, so the answer lives with the record.',
  },
  {
    icon: Filter,
    name: 'Filter and build lists',
    detail:
      'Use Giggal email status in HubSpot filters and active lists to suppress bad addresses before your next send.',
  },
]

// Install + first verification. Images live in /public/integrations/hubspot/.
const INSTALL_STEPS = [
  {
    title: 'Open the Integration tab in Giggal.ai',
    text: 'Sign in to Giggal.ai and go to Email Validation, then select the Integration tab. Find the HubSpot card and click Connect. If you do not have an account yet, signing up takes a minute and comes with 1,000 free credits.',
    image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
    imageAlt:
      'The HubSpot card and Connect button in the Giggal.ai Integration tab for email verification',
  },
  {
    title: 'Approve the permissions in HubSpot',
    text: 'HubSpot opens its own authorisation screen listing exactly what Giggal.ai can access: view contact properties, change contacts, change contact property settings, view contact lists, and read the installing account. Review them and click Connect app. You land back in Giggal.ai and the HubSpot card now shows Verify.',
    image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
    imageAlt:
      'HubSpot permission review panel listing the five scopes the Giggal Email Verifier app requests before connecting',
  },
  {
    title: 'Import a contact list',
    text: 'Click Verify on the HubSpot card and the Import from HubSpot window opens. Choose All contacts or any list in your portal. Each row shows how many emails it holds, so you know what a run costs before you start. Click Import.',
    image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
    imageAlt:
      'Import from HubSpot window listing contact lists and email counts to select for verification',
  },
  {
    title: 'Verify, and the results sync straight back',
    text: 'Giggal.ai checks every address, resolving catch-all domains rather than leaving them risky, and writes the outcome back onto each HubSpot contact as it finishes. The task card shows the breakdown and a Synced to HubSpot count so you can see the write-back completed. Sync to HubSpot again re-runs the write at any time.',
    image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
    imageAlt:
      'Completed HubSpot verification task in Giggal.ai showing deliverable, undeliverable and unknown counts synced back to HubSpot',
  },
]

const PROPERTIES: [string, string, string][] = [
  ['Giggal email is valid', 'Checkbox', 'Yes when the mailbox was confirmed to exist.'],
  ['Giggal email status', 'Dropdown', 'Deliverable, Undeliverable, Risky or Unknown.'],
  ['Giggal deliverability score', 'Number', 'Confidence from 0 to 100.'],
  ['Giggal email detail', 'Text', 'Short reason behind the result.'],
  ['Giggal verified at', 'Date', 'When the address was last checked.'],
]

const SCOPES: [string, string][] = [
  ['crm.objects.contacts.read', 'Read the email address on the contacts you choose to verify.'],
  ['crm.objects.contacts.write', 'Write the verification result back onto those contacts.'],
  ['crm.schemas.contacts.write', 'Create the five Giggal properties on first use.'],
  ['crm.lists.read', 'Show your contact lists so you can pick one to verify.'],
]

const FAQ: FaqItem[] = [
  {
    q: 'Does Giggal.ai send email to my contacts?',
    a: 'No. Verification opens an SMTP conversation with the receiving mail server and stops before any message would be sent. Your contacts never receive anything, and nothing appears in their inbox or spam folder.',
  },
  {
    q: 'What does it change in my HubSpot account?',
    a: 'On first use it creates a property group called Giggal Email Verifier containing five custom contact properties, then writes verification results into those properties only. Existing HubSpot properties are never modified, and no contacts are created or deleted.',
  },
  {
    q: 'Can it verify catch-all domains?',
    a: 'Yes, and that is the main reason to use Giggal.ai here. Most verifiers return risky or unknown on catch-all domains, which leaves you guessing on a large part of your list. Giggal.ai probes further and returns a clear deliverable or undeliverable answer on the majority of them.',
  },
  {
    q: 'How much does it cost?',
    a: 'One credit per address, with catch-all verification included. New accounts start with 1,000 free credits, and credits get cheaper per address as volume goes up.',
  },
  {
    q: 'How do I use the results once they are in HubSpot?',
    a: 'Filter contacts or build an active list on Giggal email status. A common setup is an active list of everyone whose status is Deliverable, used as the send audience, and a suppression list of Undeliverable contacts.',
  },
  {
    q: 'How do I disconnect?',
    a: 'Open the Integration tab in Giggal.ai, click the settings icon on the HubSpot card and choose Disconnect. You can also remove the app in HubSpot under Settings, Integrations, Connected Apps. Results already written stay on your contacts.',
  },
]

function howToLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to verify HubSpot contacts with Giggal.ai',
    description:
      'Connect Giggal.ai to HubSpot, verify a contact list, and read the verification result from five properties on every contact.',
    step: INSTALL_STEPS.map((s, i) => ({
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

export default function HubSpotIntegrationPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbTrailLd([
          { name: 'Integrations', path: '/integrations' },
          { name: 'HubSpot', path: '/integrations/hubspot' },
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
          <span className="text-slate-600">HubSpot</span>
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
              src="/integrations/giggal-catch-all-email-verification-hubspot.png"
              alt="HubSpot email verification with Giggal.ai catch-all email verifier"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="w-11 h-11 rounded-lg object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-5 text-balance">
          HubSpot Email Verification <span className="gradient-text">Integration</span>
        </h1>
        <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium mb-8">
          Verify the contacts already sitting in your CRM. Connect once, pick a list, and every
          contact comes back with a clear answer written onto the record, including the catch-all
          addresses most verifiers leave as risky. No exports, no CSVs, no re-importing.
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
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-300 bg-white text-slate-800 font-bold text-[15px] hover:border-indigo-400 transition-colors"
          >
            Open the dashboard
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* What it does */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            What the Integration Does
          </h2>
          <p className="text-[15px] text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Four things, start to finish, without leaving the two tools you already use.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((c) => (
            <div
              key={c.name}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow"
            >
              <c.icon className="w-6 h-6 text-indigo-600 mb-4" aria-hidden="true" />
              <h3 className="text-[15px] font-black text-slate-900 mb-2">{c.name}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setup */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Connecting HubSpot and Running Your First Verification
        </h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
          Four steps, about two minutes. You need a Giggal.ai account and permission in HubSpot to
          install apps and edit contact properties.
        </p>
        <StepList steps={INSTALL_STEPS} />

        {/* Catch-all positioning callout */}
        <div className="mt-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6">
          <h3 className="text-[15px] font-black text-slate-900 mb-2">
            Powered by a catch-all email verifier, not a standard checker
          </h3>
          <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
            A typical CRM list is 30% or more catch-all domains. Most verifiers hand those back as
            risky and leave you to guess, which means a third of your contacts carry no useful
            answer. Giggal.ai{' '}
            <Link href="/seg-email-verification" className="font-black text-indigo-600 hover:text-indigo-700">
              gets past secure email gateways
            </Link>{' '}
            like Proofpoint and Mimecast and runs deep verification on catch-all domains, so those
            contacts come back with a real deliverable or undeliverable result instead of a shrug.{' '}
            <Link href="/catch-all-verification" className="font-black text-indigo-600 hover:text-indigo-700">
              See how catch-all verification works
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Properties */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          What Gets Written to Your Contacts
        </h2>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
          These five properties are created once, the first time you run a verification, inside a
          property group named Giggal Email Verifier. Your existing HubSpot properties are never
          touched.
        </p>
        <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 bg-white card-vivid-shadow">
          <table className="w-full text-left text-[14px]">
            <thead className="border-b-2 border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-3.5 font-black text-slate-900">Property</th>
                <th className="px-5 py-3.5 font-black text-slate-900">Type</th>
                <th className="px-5 py-3.5 font-black text-slate-900">What it tells you</th>
              </tr>
            </thead>
            <tbody>
              {PROPERTIES.map(([name, type, meaning]) => (
                <tr key={name} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-3.5 font-bold text-slate-900 whitespace-nowrap">{name}</td>
                  <td className="px-5 py-3.5 text-slate-500 font-medium">{type}</td>
                  <td className="px-5 py-3.5 text-slate-600 font-medium">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Permissions */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheck className="w-7 h-7 text-indigo-600" aria-hidden="true" />
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Permissions and Data
          </h2>
        </div>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
          Giggal.ai asks for four HubSpot scopes and uses each one for exactly one job.
        </p>
        <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 bg-white card-vivid-shadow">
          <table className="w-full text-left text-[14px]">
            <tbody>
              {SCOPES.map(([scope, why]) => (
                <tr key={scope} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-3.5 font-mono text-[12px] text-slate-900 whitespace-nowrap align-top">
                    {scope}
                  </td>
                  <td className="px-5 py-3.5 text-slate-600 font-medium">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[14px] text-slate-600 font-medium leading-relaxed mt-6">
          Only the email address is read from the contacts you select. No contacts are created or
          deleted, no properties other than the five above are modified, and no email is ever sent to
          the addresses being checked.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-10">
          Questions
        </h2>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <div
              key={f.q}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow"
            >
              <h3 className="text-[15px] font-black text-slate-900 mb-2">{f.q}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 pt-6">
        <div className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Clean Up Your HubSpot Contacts
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-[15px] leading-relaxed font-medium">
            Connect once and every contact in your CRM carries a verification result you can filter
            on. 1,000 free credits to start, no card required.
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
