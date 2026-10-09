import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import SpamWordCheckerTool from '@/components/tools/SpamWordChecker/SpamWordCheckerTool'

const CANONICAL = '/spam-word-checker'
const TITLE = 'Free Spam Word Checker: Find Risky Words in Your Email | Giggal.ai'
const DESC =
  'Paste your subject line and email to highlight spam trigger words, all caps, link shorteners and broken merge tags. Runs in your browser. Free, no signup.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/spam-word-checker-og.webp', width: 1200, height: 630, alt: 'An email draft with a few risky words highlighted' }],
    title: 'Free Spam Word Checker: Find Risky Words in Your Email',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Spam Word Checker: Find Risky Words in Your Email',
    description: DESC,
    images: ['/tools/spam-word-checker-og.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Can I use the word free in my emails?',
    a: 'Yes, in normal context. Free trial or free shipping is ordinary marketing language. It becomes a problem when it’s stacked with other pushy phrases, written in capitals or used to promise something that sounds too good to be true.',
  },
  {
    q: 'Is my email copy sent anywhere?',
    a: 'No. The check runs in your browser, so you can paste unpublished campaigns safely.',
  },
  {
    q: 'Why does it flag Re: in my subject line?',
    a: 'A Re: or Fwd: on a first message is an old trick to fake a conversation. Readers notice, and it can earn spam reports. Keep it for real replies.',
  },
  {
    q: 'Will removing these words get me into the inbox?',
    a: 'Not on its own. It removes one set of warning signs. Inbox placement depends more on your sender reputation, your authentication and the quality of your list.',
  },
  {
    q: 'How many links should a cold email have?',
    a: 'There’s no official number. One link, or none in the first email, is common practice for cold outreach, because a message full of links looks like marketing.',
  },
  {
    q: 'Why doesn’t it give me a score out of 100?',
    a: 'Because no checker knows how a specific inbox will treat your mail, and a precise-looking score would suggest otherwise. You get a plain summary and a list of things worth fixing instead.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function SpamWordCheckerPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Spam Word Checker', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free Spam Word Checker',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Scan email subject line and body for 180+ spam trigger words across 5 categories',
            'Detect link shorteners, broken merge tags, and excessive punctuation',
            'Highlight risky words in-place with plainer phrasing suggestions',
            'Provide plain actionable summary without deceptive numeric scores',
            'Runs 100% in-browser with zero upload or telemetry',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Spam Word Checker
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Paste your subject line and email copy to see the words and habits that make filters and readers suspicious.
        </p>
        <p className="text-xs text-slate-500 font-medium">
          Runs in your browser. Your email copy isn&apos;t sent anywhere.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <SpamWordCheckerTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the spam word checker</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Paste your subject line, and the preview text if you use one.</li>
            <li>Paste the email body. Plain text and copied HTML both work.</li>
            <li>Click Check. Risky words are highlighted in place, and the list below explains each one and suggests a plainer alternative.</li>
            <li>Fix what makes sense, then check again.</li>
          </ol>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-900">
          <Image
            src="/tools/spam-word-checker.webp"
            alt="An email draft with a few risky words highlighted"
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Do spam words still matter?</h2>
          <p className={proseP}>
            Less than most lists suggest. Gmail and Microsoft decide mostly on who&apos;s sending and how people react: whether your domain passes SPF, DKIM and DMARC, how many recipients mark you as spam, and whether your mail bounces. Google&apos;s sender guidelines, for example, cover authentication, spam complaint rates and easy unsubscribing, not banned words.
          </p>
          <p className={proseP}>
            Words still matter in two ways. Some filters score phrases, especially for senders without much history. And pushy wording makes people hit Report spam, which is the signal that really hurts. So treat a highlighted word as a question to ask yourself, not a rule: free shipping on orders over $50 is fine, while FREE MONEY, ACT NOW isn&apos;t.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What the checker looks for</h2>
          <p className={proseP}>
            Words and phrases in five groups: urgency (act now, last chance), money (100% free, lowest price), overpromising (guaranteed, risk-free), shady wording that scams use (no credit check, this isn&apos;t spam) and clickbait (you won&apos;t believe).
          </p>
          <p className={proseP}>
            Formatting that looks careless or pushy: subject lines in capitals, strings of exclamation marks, and rows of dollar signs.
          </p>
          <p className={proseP}>
            Links: shortened links like bit.ly hide where they lead, and both filters and readers distrust them. Lots of links in a short cold email also stand out.
          </p>
          <p className={proseP}>
            Slips that give away a bulk send: merge tags that didn&apos;t fill in, like &#123;&#123;first_name&#125;&#125; or *|FNAME|*, and a Re: or Fwd: on a message that isn&apos;t a reply.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What a clean result doesn&apos;t tell you</h2>
          <p className={proseP}>
            A clean check means the copy itself isn&apos;t raising flags. It says nothing about your sending domain or your list, which matter more. Mail from a domain without SPF, DKIM and DMARC, or sent to a list full of dead addresses, can land in spam however carefully it&apos;s written.{' '}
            <Link href="/blog/spf-dkim-dmarc-explained" className="text-indigo-600 font-bold hover:underline">
              SPF, DKIM and DMARC explained
            </Link>{' '}
            covers the first, and{' '}
            <Link href="/email-list-cleaning" className="text-indigo-600 font-bold hover:underline">
              email list cleaning
            </Link>{' '}
            covers the second.
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
        headline="Copy clean? Check the list."
        supporting="Bounces from dead addresses hurt your reputation more than any word. Verify your list before you send. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
