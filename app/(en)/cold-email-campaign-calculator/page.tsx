import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import CampaignCalculatorTool from '@/components/tools/CampaignCalculator/CampaignCalculatorTool'

// Starts from the lead list (leads x follow-ups over a deadline), so it does
// not target the same searches as puremail.ai/cold-email-calculator, which
// starts from a daily sending goal. Added 2026-11-26.
const PATH = '/cold-email-campaign-calculator'
const URL = `https://giggal.ai${PATH}`
const TITLE = 'Cold Email Campaign Calculator: Inboxes and Domains for Your Lead List'
const DESC =
  'Enter your leads, follow-ups and deadline. See the emails per day, inboxes and domains your cold email campaign needs, and what verifying the list first saves.'
const PUREMAIL_URL = 'https://puremail.ai/?utm_source=giggal&utm_medium=campaign-calculator&utm_campaign=copy'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { siteName: 'Giggal.ai', title: TITLE, description: DESC, url: URL, type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const faqs: FaqItem[] = [
  {
    q: 'How long does it take to email 10,000 leads?',
    a: 'It depends on your inboxes and your sequence. With a 3-step sequence, 10,000 leads means 30,000 emails. At 30 emails per inbox per day, 50 inboxes send 1,500 a day and finish in 20 sending days. Use the calculator to change any of these numbers.',
  },
  {
    q: 'How many inboxes do I need for 5,000 leads?',
    a: 'With a 3-step sequence, 5,000 leads means 15,000 emails. To finish in 20 sending days you need 750 emails a day, which is 25 inboxes at 30 emails per inbox per day.',
  },
  {
    q: 'Do follow-ups count toward the daily limit of an inbox?',
    a: 'Yes. Every email an inbox sends counts, the first email and each follow-up. That is why the number of steps in your sequence changes how many inboxes you need.',
  },
  {
    q: 'Should I verify my lead list before I plan the campaign?',
    a: 'Yes. Invalid addresses bounce, and bounces count against your sending domains. Removing them first also lowers the number of emails you send, so you may need fewer inboxes.',
  },
  {
    q: 'How many domains do I need for a cold email campaign?',
    a: 'Divide your inboxes by the number of inboxes you put on each domain. Many senders keep 2 or 3 inboxes per domain, so 30 inboxes means 10 to 15 domains.',
  },
  {
    q: 'What if my campaign needs more inboxes than I have?',
    a: 'You have three options: give the campaign more sending days, use fewer follow-ups, or add inboxes. Adding inboxes means new domains need a warm-up period before they send at full volume.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ColdEmailCampaignCalculatorPage() {
  // overflow-x-clip (not hidden) so the calculator's sticky summary bar works.
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-clip text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Cold Email Campaign Calculator', PATH)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Cold Email Campaign Calculator',
          url: URL,
          description: DESC,
          featureList: [
            'Emails per day from leads, follow-ups and deadline',
            'Inboxes and domains needed',
            'Bounces and inboxes saved by verifying the list first',
          ],
        })}
      />
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Cold email campaign calculator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Plan a campaign from your lead list. Enter how many leads you have, how many follow-ups you send and how
          many days you have. The calculator shows the emails per day, inboxes and domains you need.
        </p>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <CampaignCalculatorTool />
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to plan a cold email campaign from your lead list</h2>
          <p className={proseP}>Work it out in four steps. The calculator does the same math.</p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>
              <strong className="text-slate-900">Total emails</strong> = valid leads × emails per lead. 8,000 leads in a
              3-step sequence is 24,000 emails.
            </li>
            <li>
              <strong className="text-slate-900">Emails per day</strong> = total emails ÷ sending days. 24,000 emails in
              20 days is 1,200 a day.
            </li>
            <li>
              <strong className="text-slate-900">Inboxes</strong> = emails per day ÷ emails per inbox per day. 1,200 a
              day at 30 per inbox is 40 inboxes.
            </li>
            <li>
              <strong className="text-slate-900">Domains</strong> = inboxes ÷ inboxes per domain. 40 inboxes at 2 per
              domain is 20 domains.
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Follow-ups multiply your sending volume</h2>
          <p className={proseP}>
            Most of the volume in a cold email campaign comes from follow-ups, not first emails. A list of 10,000 leads
            is 10,000 emails with no follow-ups, but 30,000 with a 3-step sequence and 50,000 with 5 steps. Each step
            needs inbox capacity, so plan for the full sequence, not only the first email.
          </p>
          <p className={proseP}>
            Leads who reply or bounce usually leave the sequence early, so the real number is often a bit lower. Planning
            for the full sequence keeps you on the safe side.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Remove invalid addresses before you plan</h2>
          <p className={proseP}>
            Invalid addresses bounce on the first email. Mailbox providers track your bounce rate, and too many bounces
            push your mail toward spam on every inbox that shares the domain. Invalid leads also take up sending
            capacity you pay for.
          </p>
          <p className={proseP}>
            Run the list through a{' '}
            <Link href="/bulk-email-verifier" className="text-indigo-600 font-bold hover:underline">
              bulk email verifier
            </Link>{' '}
            before you plan. Then use the number of valid leads in the calculator. On business lists, check how the
            verifier handles catch-all addresses, because many of them belong to real people.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How many emails each inbox should send</h2>
          <p className={proseP}>
            Google Workspace and Microsoft 365 allow far more emails per day than a cold email inbox should send. For
            cold email, senders usually keep each inbox at 20 to 40 emails a day, and lower on new domains. Low, steady
            volume per inbox is what keeps mail in the inbox.
          </p>
          <p className={proseP}>
            New inboxes also need a warm-up period of a few weeks before they send at full volume. If your deadline is
            close, start with inboxes that are already warmed up, or give the campaign more days.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Where to get the inboxes</h2>
          <p className={proseP}>
            You can create inboxes yourself in Google Workspace or Microsoft 365 and set up the DNS records for each
            domain. For many inboxes, a setup service saves time.{' '}
            <a href={PUREMAIL_URL} rel="noopener" className="text-indigo-600 font-bold hover:underline">
              PureMail
            </a>{' '}
            sets up Google Workspace and Outlook inboxes on your own domains, with SPF, DKIM and DMARC configured, from
            $2.90 per inbox a month.
          </p>
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200 space-y-10">
        <div className="text-center">
          <h2 className={sectionTitle}>Cold email campaign questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand headline="Verify your lead list before you send" />
      <Footer />
    </main>
  )
}
