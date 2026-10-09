import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import EmailPermutatorTool from '@/components/tools/EmailPermutator/EmailPermutatorTool'

const CANONICAL = '/email-permutator'
const TITLE = 'Free Email Permutator: Generate Every Email Format | Giggal.ai'
const DESC =
  'Enter a name and company domain to get every likely work email format, from first.last@ to flast@. Bulk CSV, accents handled, runs in your browser. Free.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/email-permutator-og-v2.webp', width: 1200, height: 630, alt: 'Free Email Permutator' }],
    title: 'Free Email Permutator: Generate Every Email Format',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Email Permutator: Generate Every Email Format',
    description: DESC,
    images: ['/tools/email-permutator-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is this email permutator free?',
    a: 'Yes, with no signup and no limit. It runs in your browser, so nothing you type is sent to us.',
  },
  {
    q: 'How many email formats does it generate?',
    a: '18 for a first and last name, and more when you add a middle name, a nickname or a second domain. Duplicates are removed.',
  },
  {
    q: 'Which email format is most common?',
    a: 'first.last@ is the one to try first at most companies, followed by flast@ and first@. Smaller companies often use the first name alone. Every company sets its own rule, so verify instead of assuming.',
  },
  {
    q: 'Can I generate emails for a whole list of people?',
    a: 'Yes. Use Bulk mode and upload a CSV with first name, last name and domain columns. The download has one row per generated address, with the pattern name next to it.',
  },
  {
    q: 'Does it tell me which address is correct?',
    a: 'No. It only generates the likely formats. Verify them to find the one that exists, and use a verifier that handles catch-all domains, or every format will look valid.',
  },
  {
    q: 'What if I only know a first name?',
    a: 'Leave the last name empty and you get the first-name formats only, like jane@. Those are much less likely to be right.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailPermutatorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Email Permutator', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free Email Permutator',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Generate likely email address formats from name and domain',
            'Handle international accents, umlauts, hyphens, and multi-part names',
            'Bulk CSV generation for up to 5,000 contacts',
            'Export results to CSV or TXT',
            'Runs 100% in-browser with zero telemetry',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Email Permutator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Enter a name and a company domain to get every likely email address format, most common first.
        </p>
        <p className="text-xs text-slate-500 font-medium">
          Runs in your browser. Nothing you type is sent anywhere.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <EmailPermutatorTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the email permutator</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Enter the person&apos;s first and last name, exactly as they write it. Add a middle name or nickname if you know one.</li>
            <li>Enter the company&apos;s email domain, such as example.com. You can add more than one domain if the company uses several.</li>
            <li>Click Generate. The formats appear below, with the most common ones first.</li>
            <li>Copy the list or download it, then verify the addresses to find out which one exists.</li>
          </ol>
          <p className={proseP}>
            For a list of people, switch to Bulk and upload a CSV with first name, last name and domain columns. You get every format for every row in one file.
          </p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/email-permutator-v2.webp"
            alt="Illustration of one name branching into several email address formats with check mark."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>The email formats it generates</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Pattern</th>
                  <th className="py-3 px-4">Example for Jane Doe at example.com</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">first.last</td>
                  <td className="py-2.5 px-4 font-mono">jane.doe@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">flast</td>
                  <td className="py-2.5 px-4 font-mono">jdoe@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">first</td>
                  <td className="py-2.5 px-4 font-mono">jane@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">firstlast</td>
                  <td className="py-2.5 px-4 font-mono">janedoe@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">first_last</td>
                  <td className="py-2.5 px-4 font-mono">jane_doe@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">f.last</td>
                  <td className="py-2.5 px-4 font-mono">j.doe@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">firstl</td>
                  <td className="py-2.5 px-4 font-mono">janed@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">last.first</td>
                  <td className="py-2.5 px-4 font-mono">doe.jane@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">lastf</td>
                  <td className="py-2.5 px-4 font-mono">doej@example.com</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">last</td>
                  <td className="py-2.5 px-4 font-mono">doe@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={proseP}>
            The full list also covers hyphens, reversed orders and middle initials. first.last is the usual starting point for company addresses, with flast and first close behind, but every company picks its own convention, so treat the order as a guide rather than a rule.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Names with accents, apostrophes and two surnames</h2>
          <p className={proseP}>
            Email addresses rarely contain accents, so the permutator writes José as jose and Zoë as zoe. German names get both spellings, because companies handle them differently: Müller becomes muller and mueller, and ß becomes ss. Apostrophes and full stops are dropped, so O&apos;Brien becomes obrien. Two-part surnames like de la Cruz produce versions with the parts joined (delacruz) and with only the last part (cruz), and hyphenated names keep the hyphen in some formats and drop it in others.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Why you still need to verify the list</h2>
          <p className={proseP}>
            A permutator only writes out guesses. At most one of these addresses belongs to the person, and sometimes none do. Sending to all of them means bouncing on the rest, which hurts your sender reputation.
          </p>
          <p className={proseP}>
            Verification tells you which mailbox exists, but it has a weak spot: catch-all domains. A catch-all server accepts mail for any address, so a basic checker reports every format on the list as valid. Giggal resolves catch-all addresses to valid or invalid, which is what makes a permutator list usable on those domains. Read more about{' '}
            <Link href="/blog/what-is-a-catch-all-email-address" className="text-indigo-600 font-bold hover:underline">
              catch-all email addresses
            </Link>
            , or test one address with the{' '}
            <Link href="/email-checker" className="text-indigo-600 font-bold hover:underline">
              email checker
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Using these addresses responsibly</h2>
          <p className={proseP}>
            Guessing an address is common in B2B outreach, but how you use it still matters. Write to people who have a clear reason to hear from you, keep the message relevant to their job, and make it easy to opt out. Privacy and anti-spam rules such as GDPR and CAN-SPAM apply to the emails you send, however you found the address.
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
        headline="Found the formats? Find the real one."
        supporting="Verify the list and see which address exists, including on catch-all domains. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
