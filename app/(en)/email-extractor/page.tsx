import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import EmailExtractorTool from '@/components/tools/EmailExtractor/EmailExtractorTool'
import { ShieldCheck } from 'lucide-react'

const CANONICAL = '/email-extractor'
const TITLE = 'Free Email Extractor: Extract Emails From Text and Files | Giggal.ai'
const DESC =
  'Extract email addresses from text, CSV, Excel or HTML in your browser. Remove duplicates, group by domain and export a clean list. Free, no signup.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/email-extractor-og-v2.webp', width: 1200, height: 630, alt: 'Free Email Extractor' }],
    title: 'Free Email Extractor: Extract Emails From Text and Files',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Email Extractor: Extract Emails From Text and Files',
    description: DESC,
    images: ['/tools/email-extractor-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is this email extractor free?',
    a: 'Yes. There’s no signup and no limit on how many times you run it. Verifying the list afterwards is a separate step, and new Giggal accounts get 1,000 free verification credits.',
  },
  {
    q: 'Is my text uploaded anywhere?',
    a: 'No. The extraction runs in your browser tab, and nothing you paste or upload is sent to our servers. If you add an Excel file, the page loads the code it needs to read spreadsheets, but your file stays on your device.',
  },
  {
    q: 'Can it extract emails from a website URL?',
    a: 'Not yet. Open the page, select everything, copy it and paste it into the box. For addresses that only appear in the page code, paste the page source instead.',
  },
  {
    q: 'Does it check whether the emails are valid?',
    a: 'No. It only finds addresses that appear in your text. To find out whether each mailbox exists, verify the list with [email list cleaning](/email-list-cleaning) or test one address with the [email checker](/email-checker).',
  },
  {
    q: 'How much text can I paste?',
    a: 'Large inputs are fine, including exports of 20 MB or more, because the work runs in a background thread on your device. Very large files take a few seconds, and the page stays usable while they’re processed.',
  },
  {
    q: 'Can I extract emails from Excel or CSV files?',
    a: 'Yes. Drop .xlsx, .xls or .csv files onto the box. Every cell is scanned, so it doesn’t matter which column the addresses are in.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailExtractorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Free Email Extractor', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free Email Extractor',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Extract email addresses from text, CSV, Excel or HTML',
            'Remove duplicates and filter by domain',
            'Convert written-out obfuscated addresses',
            'Export to TXT or CSV with domain column',
            'Runs 100% in-browser with Web Worker',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
          <span>Free · runs in your browser</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Free Email Extractor
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Paste text or drop in files and get a clean, deduplicated list of email addresses. Everything runs in your browser.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <EmailExtractorTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to extract emails from text</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Paste text into the box, or drop in one or more files.</li>
            <li>Choose your options: remove duplicates, sort, filter by domain or hide role addresses like info@.</li>
            <li>Click Extract. The list, the counts and the top domains appear below the box.</li>
            <li>Copy the list, or download it as TXT or as a CSV with a domain column.</li>
          </ol>
          <p className={proseP}>
            Nothing you paste or upload leaves your browser, so you can run it on customer exports and internal documents.
          </p>
        </div>

        {/* Visual setup illustration */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/email-extractor-v2.webp"
            alt="Illustration of email addresses extracted from documents and deduplicated into a tidy list."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What this email extractor finds, and what it skips</h2>
          <p className={proseP}>
            The extractor looks for anything shaped like name@domain.tld and then cleans each match. A link like mailto:anna@example.com comes out as anna@example.com, and a comma or bracket stuck to the end of an address is dropped. Retina image names such as logo@2x.png look like emails to a simple pattern, so the tool throws them away, along with other file names like icon@3x.svg.
          </p>
          <p className={proseP}>
            Pages that hide addresses from bots sometimes write them out as anna [at] example [dot] com. Turn on the written-out option and the tool converts the bracketed forms ([at], (at), &#123;at&#125; and the matching dot versions) back into normal addresses. It&apos;s off by default, because looser matching would pull in false positives.
          </p>
          <p className={proseP}>
            Addresses that differ only in capitals, like Anna@Example.com and anna@example.com, count as one, because the big mail providers treat them as the same mailbox. The reasoning is in{' '}
            <Link href="/blog/are-email-addresses-case-sensitive" className="text-indigo-600 font-bold hover:underline">
              are email addresses case sensitive
            </Link>
            .
          </p>
          <p className={proseP}>
            The tool only finds addresses that appear in your text. It doesn&apos;t search the web, guess missing addresses or fetch pages from a URL.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Files you can use</h2>
          <p className={proseP}>
            Plain text formats work as they are: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml and .vcf. Excel files (.xlsx and .xls) are read cell by cell. You can drop several files at once and the results are combined into one list. PDF and Word files aren&apos;t supported yet; open them, copy the text and paste it into the box.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Before you email anyone on the list</h2>
          <p className={proseP}>
            Finding an address only proves it was written down somewhere. It doesn&apos;t tell you the mailbox still exists, and lists pulled from old documents are full of people who&apos;ve moved on. Sending to those addresses produces{' '}
            <Link href="/blog/hard-bounce-vs-soft-bounce" className="text-indigo-600 font-bold hover:underline">
              hard bounces
            </Link>
            , which hurt your sender reputation. Run the list through{' '}
            <Link href="/email-list-cleaning" className="text-indigo-600 font-bold hover:underline">
              email list cleaning
            </Link>{' '}
            before the first send, or test a single address with the{' '}
            <Link href="/email-checker" className="text-indigo-600 font-bold hover:underline">
              free email checker
            </Link>
            .
          </p>
          <p className={proseP}>
            Then think about who you&apos;re writing to. Email people who&apos;ve agreed to hear from you, or where you have another lawful reason to contact them. Privacy and anti-spam rules such as GDPR and CAN-SPAM apply to how you use the list, whatever tool you used to build it.
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
        headline="Ready to verify your extracted contacts?"
        supporting="Check whether mailboxes exist before sending. 1,000 free credits, no card required."
        buttonText="Verify contacts for free"
      />

      <Footer />
    </main>
  )
}
