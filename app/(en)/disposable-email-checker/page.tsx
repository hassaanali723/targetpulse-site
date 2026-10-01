import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd } from '@/lib/schema'
import { ShieldAlert, MailX, XCircle, ArrowRight, Users } from 'lucide-react'

const DESC =
  'Free disposable email checker to detect fake and temporary inboxes. Matched against 100,000+ disposable domains, updated every six hours. Five free checks an hour, no signup.'

export const metadata: Metadata = {
  title: { absolute: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/disposable-email-checker' },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai disposable email checker' }],
    title: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes',
    description: DESC,
    url: 'https://giggal.ai/disposable-email-checker',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes',
    description: DESC,
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is a disposable email address?',
    a: 'A disposable email address is a temporary inbox from a service such as Mailinator, Temp-Mail or 10MinuteMail. Anyone can create one in seconds without a password. People use them to get past a signup form or a gated download without giving a real address. The inbox is deleted after a set time, or the person never opens it again.',
  },
  {
    q: 'How does this disposable email checker work?',
    a: 'It sends the address to the Giggal verification service. The service holds a list of 100,000+ disposable and temporary mail domains. The list is rebuilt from public sources every six hours, and our team adds manual corrections. If the domain, or a parent domain, is on the list, the tool reports it as disposable. If not, the tool reports it as not disposable.',
  },
  {
    q: 'Does "not disposable" mean the address is valid?',
    a: 'No. It means the domain is not a known disposable mail service. The mailbox may still not exist. To check that, run the address through the free email checker. It does a live mailbox check and tells you whether the address can receive mail.',
  },
  {
    q: 'Will sending to a disposable email bounce?',
    a: 'Sometimes. Some services accept every message and delete it after a set time. Others close the inbox after a few minutes and reject mail after that. In both cases the person will not read your email later. Treat the address as unusable either way.',
  },
  {
    q: 'Is this disposable email checker free?',
    a: 'Yes. You get 5 free checks an hour with no signup. To check a whole list, sign up for a free account. It comes with 1,000 verification credits.',
  },
  {
    q: 'How do I block disposable emails on signup forms?',
    a: 'Connect Giggal to your form or app through the API or the Zapier integration. Each address is checked when it is submitted. If it is disposable, you can ask the person for a different address before the account is created.',
  },
  {
    q: 'What is the difference between a disposable email and a free email provider?',
    a: 'A free provider such as Gmail, Yahoo or Outlook gives people a permanent mailbox with a password. A disposable service gives people a temporary mailbox that is meant to be thrown away. Giggal flags disposable addresses and leaves normal free mailboxes alone.',
  },
  {
    q: 'Can I check disposable emails in bulk?',
    a: 'Yes. Upload a CSV or TXT file in the Giggal dashboard. Every address is checked for disposable domains, role accounts, catch-all domains and whether the mailbox exists.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

const COMMON_DISPOSABLE_SERVICES = [
  { name: 'Temp-Mail', desc: 'Temporary inbox that is deleted after a set time.' },
  { name: 'Mailinator', desc: 'Public inboxes. Anyone can read the mail without a password.' },
  { name: '10MinuteMail', desc: 'Inbox that expires ten minutes after it is created.' },
  { name: 'Guerrilla Mail', desc: 'Inbox that expires one hour after it is created.' },
  { name: 'ThrowawayMail', desc: 'Temporary inbox for one-time signups.' },
  { name: 'Yopmail', desc: 'Public inboxes with no password. Messages are kept for a few days.' },
  { name: 'SharkLasers', desc: 'One of the domains used by Guerrilla Mail.' },
  { name: 'TrashMail', desc: 'Temporary forwarding addresses that stop working after a set time.' },
]

const HOW_IT_WORKS = [
  {
    n: 1,
    color: 'bg-indigo-50 text-indigo-600',
    title: 'Syntax check',
    text: 'The tool checks that the address has a valid format: a local part, one @ sign and a domain. This runs before anything is sent to the server.',
  },
  {
    n: 2,
    color: 'bg-rose-50 text-rose-600',
    title: 'Domain check against 100,000+ disposable domains',
    text: 'The domain is matched against the disposable list held by the Giggal verification service. Subdomains of a listed domain count as disposable. The list is rebuilt every six hours and our team adds manual corrections.',
  },
  {
    n: 3,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Result',
    text: 'The tool reports "disposable" or "not disposable". Not disposable means the domain is not a known temporary mail service. It does not mean the mailbox exists.',
  },
  {
    n: 4,
    color: 'bg-violet-50 text-violet-600',
    title: 'Deliverability is a separate check',
    text: 'To find out whether the mailbox exists and accepts mail, use the free email checker. It connects to the mail server and asks. This page only answers the disposable question.',
  },
]

export default function DisposableEmailCheckerPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Disposable Email Checker', '/disposable-email-checker')} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Free disposable email checker to{' '}
          <span className="bg-gradient-to-r from-rose-600 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
            detect fake &amp; temporary inboxes
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Enter an email address to see whether it uses a disposable or temporary mail service. The domain is
          matched against 100,000+ disposable domains, updated every six hours.
        </p>
      </section>

      {/* TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="disposable"
          endpoint="/api/tools/disposable-check"
          defaultEmail=""
          emailFromQuery
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Five free checks an hour, no signup. This tool tells you whether the domain is disposable. To find out
          whether the mailbox exists, use the{' '}
          <Link href="/email-checker" className="text-indigo-600 font-bold hover:underline">
            free email checker
          </Link>
          .
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>How the disposable email check works</h2>
          <p className={proseP}>
            Disposable services register new domains all the time. A list that is not updated misses them. This
            is why the check runs on the Giggal verification service and not on a file inside this website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOW_IT_WORKS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-colors space-y-3"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${s.color}`}>{s.n}</div>
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMON PROVIDERS */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Common disposable email services</h2>
          <p className={proseP}>
            These are some of the services on the list. The list also covers the many smaller domains these
            services register and switch between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {COMMON_DISPOSABLE_SERVICES.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-1.5 text-rose-600 font-bold text-sm mb-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{s.name}</span>
              </div>
              <p className="text-xs text-slate-500 leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BLOCK */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <div className="space-y-3">
          <h2 className={sectionTitle}>Why block disposable email addresses</h2>
          <p className={proseP}>
            A disposable address is not a contact. The person will not see anything you send after the first
            few minutes. Three problems follow from that:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100/70 text-rose-600 flex items-center justify-center">
              <MailX className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Emails nobody reads</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Welcome emails, receipts and onboarding sequences go to an inbox that is gone or never opened.
              Some services reject the mail after the inbox expires, which shows up as a bounce in your reports.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Free trial abuse</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              One person can create many trial accounts with a new disposable address each time. Blocking these
              addresses at signup stops most of it. You can automate this on registration forms with our{' '}
              <Link href="/email-validation-api" className="text-indigo-600 font-bold hover:underline">
                email validation API
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Wrong numbers in your CRM</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Disposable signups count as leads but never reply, open or buy. They make your signup numbers
              look better and your conversion rate look worse than they are.
            </p>
          </div>
        </div>
      </section>

      {/* SINGLE VS BULK */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Single check or bulk check</h2>
        <p className={proseP}>
          The tool above checks one address at a time. It is useful for a suspicious signup or a single lead.
          For a whole list, one address at a time is too slow.
        </p>
        <p className={proseP}>
          In the Giggal dashboard you can upload a CSV or TXT file to our{' '}
          <Link href="/email-list-cleaning" className="text-indigo-600 font-bold hover:underline">
            email list cleaning service
          </Link>{' '}
          and check the whole list at once. Every
          address is checked for disposable domains, role accounts such as info@ or sales@, and whether the
          mailbox exists. On{' '}
          <Link href="/catch-all-verification" className="text-indigo-600 font-bold hover:underline">
            catch-all domains
          </Link>
          , where a standard check cannot confirm a mailbox, Giggal runs a deeper check. A free account comes
          with 1,000 credits.
        </p>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Questions about disposable email checking</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand headline="Block disposable emails and clean your list" />

      {/* RELATED LINKS */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/email-validation-api', label: 'email validation API: block disposable signups in real time' },
            { href: '/email-checker', label: 'free email checker: does this mailbox exist?' },
            { href: '/catch-all-verification', label: 'verify catch-all and risky emails' },
            { href: '/seg-email-verification', label: 'verify emails behind secure email gateways' },
            { href: '/pricing', label: 'pricing, credits and plans' },
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
