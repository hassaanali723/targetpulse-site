import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import BounceRateCalculatorTool from '@/components/tools/BounceRateCalculator/BounceRateCalculatorTool'
import { PROVIDER_LIMITS } from '@/lib/tools/bounceRateCore'

const CANONICAL = '/bounce-rate-calculator'
const TITLE = 'Bounce Rate Calculator for Email and Websites | Giggal.ai'
const DESC =
  'Free bounce rate calculator for email and websites. Get the bounce rate formula, hard and soft bounce rates, provider limits and the GA4 calculation.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/bounce-rate-calculator-og-v2.webp', width: 1200, height: 630, alt: 'Free Bounce Rate Calculator' }],
    title: 'Bounce Rate Calculator for Email and Websites',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bounce Rate Calculator for Email and Websites',
    description: DESC,
    images: ['/tools/bounce-rate-calculator-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is the formula for bounce rate?',
    a: 'For email, bounce rate = bounced emails ÷ emails sent × 100. For a website in Google Analytics 4, bounce rate = (sessions − engaged sessions) ÷ sessions × 100. That’s the same as 100% minus the engagement rate.',
  },
  {
    q: 'How do you calculate email bounce rate?',
    a: 'Add the hard and soft bounces from your campaign report, divide by the number of emails sent, and multiply by 100. 250 bounces on 10,000 emails sent is a 2.5% bounce rate.',
  },
  {
    q: 'Is email bounce rate based on sent or delivered emails?',
    a: 'Most tools divide by emails sent. Mailchimp, Klaviyo and Mailgun all document it that way. A few tools word it as a share of recipients, so check your tool’s help page before you compare two numbers.',
  },
  {
    q: 'What is a good email bounce rate?',
    a: 'Below 2% is a safe target. Amazon SES asks senders to stay under 2%, and Brevo can suspend accounts with a hard bounce rate above 2%. In Twilio SendGrid’s 2023 report, the median bounce rate was 0.21%.',
  },
  {
    q: 'Is a 5% email bounce rate bad?',
    a: 'Yes. At a 5% hard bounce rate, Amazon SES puts the account under review and HubSpot can suspend it. Clean the list before you send again.',
  },
  {
    q: 'Does Gmail have a bounce rate limit?',
    a: 'No. Gmail’s sender rules set a spam rate limit of 0.3%, not a bounce limit. They do ask senders to unsubscribe people whose addresses bounce repeatedly. Yahoo and Microsoft also publish no bounce number.',
  },
  {
    q: 'How do you calculate bounce rate in GA4?',
    a: 'Take sessions minus engaged sessions, then divide by sessions. GA4 counts a session as engaged if it lasts longer than 10 seconds or has a key event. Sessions with 2 or more page or screen views count too. Everything else is a bounce.',
  },
  {
    q: 'Why is my GA4 bounce rate different from the old Universal Analytics one?',
    a: 'Universal Analytics counted any single-page session as a bounce. GA4 counts sessions that were not engaged. A 30-second visit to one page was a bounce in Universal Analytics, but it is not a bounce in GA4.',
  },
]

// How each tool documents the email bounce rate (sources in plan 26).
const DEFINITIONS: { tool: string; formula: string; href: string }[] = [
  { tool: 'Mailchimp', formula: 'Hard plus soft bounces ÷ total emails sent', href: 'https://mailchimp.com/help/custom-report-metrics/' },
  { tool: 'Klaviyo', formula: 'Bounced emails ÷ total emails sent', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
  { tool: 'Mailgun', formula: 'Undelivered ÷ total sent. Its reports also show a separate hard bounce rate', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
  { tool: 'Campaign Monitor', formula: 'Bounced emails ÷ “the total number of recipients the campaign was delivered to”, in its own words', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
  { tool: 'Brevo', formula: 'Bounces ÷ recipients, with separate hard and soft rates in transactional reports', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
  { tool: 'Amazon SES', formula: 'Hard bounces only, measured over a representative volume of your mail', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
]

// When repeated soft bounces turn into a hard bounce.
const SOFT_RULES: { tool: string; rule: string; href: string }[] = [
  { tool: 'Mailchimp', rule: 'After 7 soft bounces for an address with no activity, or 15 if the address has past activity', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
  { tool: 'Klaviyo', rule: 'After more than 7 soft bounces in a row, counted over the past 2 years', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
  { tool: 'Brevo', rule: 'Retries for 36 hours, then blocks the address after 5 soft bounces in a row from campaigns', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
  { tool: 'HubSpot', rule: 'Retries a pending bounce for 72 hours before it counts as a soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const subTitle = 'text-xl md:text-2xl font-bold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'
const formula = 'p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

function SourceTable({ head, rows }: { head: [string, string]; rows: { a: string; b: string; href: string }[] }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
          <tr>
            <th className="py-2.5 px-4 w-1/4">{head[0]}</th>
            <th className="py-2.5 px-4">{head[1]}</th>
          </tr>
        </thead>
        {/* Rows stack on phones. */}
        <tbody className="divide-y divide-slate-100 bg-white font-medium">
          {rows.map((r) => (
            <tr key={r.a} className="block sm:table-row align-top">
              <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold">
                <a href={r.href} className="text-slate-900 hover:text-indigo-600 hover:underline" {...ext}>
                  {r.a}
                </a>
              </td>
              <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 text-slate-600">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function BounceRateCalculatorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Bounce Rate Calculator', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free Bounce Rate Calculator',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Email bounce rate from emails sent and bounces',
            'Separate hard bounce, soft bounce and delivered rates',
            'Compares your numbers with sending provider limits',
            'Website bounce rate from Google Analytics 4 sessions',
            'Shows the bounce rate formula with your numbers',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">Bounce Rate Calculator</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Work out the bounce rate of an email campaign or a website. Enter the numbers from your email tool or from Google Analytics 4 to see the rate and what it means.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <BounceRateCalculatorTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the bounce rate calculator</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>For an email campaign, stay on the Email tab. Enter the emails sent and the hard and soft bounces from your campaign report.</li>
            <li>If your tool shows only one bounce number, put it in Hard bounces and leave Soft bounces empty.</li>
            <li>Read the result. You get the overall bounce rate, the hard and soft rates, and the delivered rate.</li>
            <li>Check the provider list below the result. It shows how close you are to the limits of Amazon SES, HubSpot, Postmark and others.</li>
            <li>For a website, switch to the Website tab and enter sessions and engaged sessions from Google Analytics 4.</li>
          </ol>
          <p className={proseP}>
            The results update as you type. The formula with your own numbers appears under each result, so you can check the maths or copy it into a report.
          </p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/bounce-rate-calculator-v2.webp"
            alt="Illustration of an email bounce rate calculation: bounced emails divided by emails sent, compared with provider limits."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>The bounce rate formula</h2>
          <p className={proseP}>
            “Bounce rate” means two different things. In email, it’s the share of messages that couldn’t be delivered. On a website, it’s the share of visits where the person didn’t engage. So the answer to “how is bounce rate calculated?” depends on which one you mean.
          </p>
          <h3 className={subTitle}>Email bounce rate formula</h3>
          <pre className={formula}>Bounce rate = bounced emails ÷ emails sent × 100</pre>
          <p className={proseP}>
            Send 10,000 emails and get 250 back, and the bounce rate is 250 ÷ 10,000 × 100 = 2.5%. Bounced emails include both hard bounces (the address doesn’t exist) and soft bounces (a temporary problem, such as a full mailbox).
          </p>
          <h3 className={subTitle}>Website bounce rate formula in GA4</h3>
          <pre className={formula}>Bounce rate = (sessions − engaged sessions) ÷ sessions × 100</pre>
          <p className={proseP}>
            This is the definition in{' '}
            <a href="https://support.google.com/analytics/answer/12195621" className={link} {...ext}>
              Google Analytics 4
            </a>
            : the percentage of sessions that were not engaged. It always equals 100% minus the engagement rate. With 2,000 sessions and 1,250 engaged sessions, the bounce rate is 37.5%.
          </p>
          <p className={proseP}>
            Older guides give a different bounce rate calculation: single-page sessions ÷ all sessions. That was the{' '}
            <a href="https://support.google.com/analytics/answer/1009409" className={link} {...ext}>
              Universal Analytics definition
            </a>
            . Standard Universal Analytics stopped processing data on July 1, 2023, so use the GA4 formula for current reports.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How to calculate email bounce rate</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Open the report for one campaign or one period in your email tool.</li>
            <li>Note the number of emails sent, then the hard bounces and soft bounces.</li>
            <li>Add the two bounce numbers together.</li>
            <li>Divide by the emails sent and multiply by 100.</li>
          </ol>
          <p className={proseP}>
            Most tools divide by emails sent, but not all of them say it the same way. Before you compare your number with someone else’s, check what each tool counts:
          </p>
          <SourceTable head={['Tool', 'How it calculates bounce rate']} rows={DEFINITIONS.map((d) => ({ a: d.tool, b: d.formula, href: d.href }))} />
          <p className={proseP}>
            The difference matters at higher rates. 500 bounces on 10,000 emails is 5% of emails sent, but 5.26% of the 9,500 that were delivered. The calculator shows both.
          </p>
          <p className={proseP}>
            Also work out the hard bounce rate on its own. Most provider limits count only hard bounces, because soft bounces often clear up on the next try.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Email bounce rate limits at sending providers</h2>
          <p className={proseP}>
            Sending providers publish bounce rate limits and review or suspend accounts that go over them. These are the numbers they publish:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-2.5 px-4 w-1/4">Provider</th>
                  <th className="py-2.5 px-4 w-20">Limit</th>
                  <th className="py-2.5 px-4">What it says</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {PROVIDER_LIMITS.map((p) => (
                  <tr key={p.name} className="block sm:table-row align-top">
                    <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold">
                      <a href={p.source} className="text-slate-900 hover:text-indigo-600 hover:underline" {...ext}>
                        {p.name}
                      </a>
                      <span className="sm:hidden font-semibold text-indigo-600"> · {p.limit}%</span>
                    </td>
                    <td className="hidden sm:table-cell py-3 px-4 font-bold text-indigo-600">{p.limit}%</td>
                    <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 text-slate-600">{p.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={proseP}>
            <a href="https://mailchimp.com/help/about-bounce-warnings/" className={link} {...ext}>
              Mailchimp
            </a>{' '}
            doesn’t publish a number. It says limits vary and that it warns you before it suspends an account.
          </p>
          <p className={proseP}>
            Mailbox providers set no bounce limit at all.{' '}
            <a href="https://support.google.com/a/answer/81126" className={link} {...ext}>
              Gmail’s sender rules
            </a>{' '}
            and{' '}
            <a href="https://senders.yahooinc.com/best-practices/" className={link} {...ext}>
              Yahoo’s
            </a>{' '}
            include a 0.3% limit, but it applies to spam complaints. On bounces, Gmail asks senders to unsubscribe people whose mail bounces repeatedly, and Yahoo asks senders to remove invalid recipients promptly.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Email bounce rate benchmarks</h2>
          <p className={proseP}>
            Published averages vary a lot, mostly because each report counts bounces differently.{' '}
            <a href="https://www.twilio.com/en-us/resource-center/2023-email-marketing-benchmark-report" className={link} {...ext}>
              Twilio SendGrid’s 2023 report
            </a>
            , based on 2022 data, put the average bounce rate at 1.06% and the median at 0.21%. It counts temporary blocks separately.{' '}
            <a href="https://www.getresponse.com/resources/reports/email-marketing-benchmarks" className={link} {...ext}>
              GetResponse’s 2024 report
            </a>{' '}
            gave an overall rate of 2.33%, with a range from 1.19% to 4.86% by industry. It doesn’t split hard and soft bounces.
          </p>
          <p className={proseP}>
            A benchmark is less useful than your own trend and your provider’s limit. For what counts as good in cold outreach, see{' '}
            <Link href="/blog/good-bounce-rate-for-cold-email" className={link}>
              what a good bounce rate for cold email is
            </Link>
            . For a fuller look at the averages, see{' '}
            <Link href="/blog/how-to-reduce-email-bounce-rate" className={link}>
              email bounce rate benchmarks and how to reduce them
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Hard bounces and soft bounces</h2>
          <p className={proseP}>
            A hard bounce is a permanent failure. The receiving server answers with a code starting with 5, such as 5.1.1 for an address that doesn’t exist.{' '}
            <a href="https://www.rfc-editor.org/rfc/rfc5321" className={link} {...ext}>
              RFC 5321
            </a>{' '}
            says the sender should not repeat the exact request. A soft bounce is temporary and starts with 4. The sender can try again later.
          </p>
          <p className={proseP}>
            Tools don’t always agree on the border.{' '}
            <a href="https://datatracker.ietf.org/doc/html/rfc3463" className={link} {...ext}>
              RFC 3463
            </a>{' '}
            treats a full mailbox as temporary, but some tools file it under hard bounces. Most tools also turn repeated soft bounces into a hard bounce:
          </p>
          <SourceTable head={['Tool', 'When soft bounces become a hard bounce']} rows={SOFT_RULES.map((r) => ({ a: r.tool, b: r.rule, href: r.href }))} />
          <p className={proseP}>
            For the codes behind each kind, see{' '}
            <Link href="/blog/hard-bounce-vs-soft-bounce" className={link}>
              hard bounce vs soft bounce
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How to calculate bounce rate in Google Analytics 4</h2>
          <p className={proseP}>
            GA4 calls a session engaged when it lasts longer than 10 seconds or includes a key event. A session with 2 or more page or screen views counts too. Every other session counts toward the bounce rate. The site owner can change the 10-second timer in the data stream’s tag settings.
          </p>
          <p className={proseP}>
            Most GA4 reports don’t show bounce rate by default. To add it, open a detail report, choose Customize report, go to Metrics and add Bounce rate. You need the Editor or Administrator role. If you’d rather not edit the report, take sessions and engaged sessions from it and use the Website tab above.
          </p>
          <p className={proseP}>
            The change from Universal Analytics moved many numbers. A visitor who reads one page for 30 seconds and leaves counted as a bounce before. In GA4 it doesn’t, because the visit lasted longer than 10 seconds.
          </p>
          <p className={proseP}>
            Be careful with website bounce rate bands you find online, such as “26% to 40% is excellent”. They come from the Universal Analytics era and rarely name a source. GA4 has its own{' '}
            <a href="https://support.google.com/analytics/answer/16388466" className={link} {...ext}>
              benchmarking
            </a>
            , which compares your property with a peer group when the setting is turned on.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How to lower your email bounce rate</h2>
          <p className={proseP}>
            Hard bounces come from addresses that don’t exist, so the fix is to remove those addresses before you send. Check new sign-ups as they arrive, and check older lists before a campaign, because people change jobs and close accounts.
          </p>
          <p className={proseP}>
            Remove every address that hard bounces. Yahoo asks senders to remove invalid recipients promptly, Gmail asks them to unsubscribe people whose mail bounces repeatedly, and{' '}
            <a
              href="https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%e2%80%99s-new-requirements-for-high%e2%80%90volume-senders/4399730"
              className={link}
              {...ext}
            >
              Microsoft
            </a>{' '}
            advises removing invalid addresses monthly or quarterly.
          </p>
          <p className={proseP}>
            Use the{' '}
            <Link href="/email-checker" className={link}>
              email checker
            </Link>{' '}
            for a single address, or the{' '}
            <Link href="/bulk-email-verifier" className={link}>
              bulk email verifier
            </Link>{' '}
            for a whole list. Both tell you which addresses would bounce, catch-all domains included.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* CTA */}
      <AltCtaBand
        headline="Bring the bounce rate down before you send"
        supporting="Giggal checks each address before your campaign goes out, catch-all domains included, so bad addresses never reach your sending tool. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
