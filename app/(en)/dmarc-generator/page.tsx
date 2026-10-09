import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import DmarcGeneratorTool from '@/components/tools/DmarcGenerator/DmarcGeneratorTool'
import { ShieldCheck } from 'lucide-react'

const CANONICAL = '/dmarc-generator'
const TITLE = 'Free DMARC Generator: Build a DMARC Record (2026) | Giggal.ai'
const DESC =
  'Build a valid DMARC record for the 2026 standard (RFC 9989): policy, subdomains, reports and test mode. Paste an old record to remove retired tags. Free.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/dmarc-generator-og.webp', width: 1200, height: 630, alt: 'Free DMARC Record Generator' }],
    title: 'Free DMARC Generator: Build a DMARC Record (2026)',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free DMARC Generator: Build a DMARC Record (2026)',
    description: DESC,
    images: ['/tools/dmarc-generator-og.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What should my first DMARC record be?',
    a: 'v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com. It doesn’t change how your mail is handled, and it starts the reports. The Monitor preset builds it for you.',
  },
  {
    q: 'Is pct still supported?',
    a: 'Not in the current standard. RFC 9989 retired pct along with rf and ri. A leftover pct=100 is harmless, but if you want a softer rollout, use t=y instead of a percentage.',
  },
  {
    q: 'What does t=y do?',
    a: 'It asks receivers to apply one level below your published policy, so reject is treated as quarantine and quarantine as none. It doesn’t change the reports, and it does nothing on p=none.',
  },
  {
    q: 'Do I need rua and ruf?',
    a: 'You need rua if you want to see what’s happening; without it you get no aggregate reports. ruf is optional, and many receivers don’t send failure reports at all.',
  },
  {
    q: 'What is np?',
    a: 'The policy for subdomains that don’t exist in DNS, such as a made-up invoices-2026.yourdomain.com. If you leave it out, sp applies, and if sp is missing too, p does.',
  },
  {
    q: 'Where do I publish the record?',
    a: 'As a TXT record at _dmarc.yourdomain.com. Most DNS panels only need _dmarc in the host field and add the domain themselves.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function DmarcGeneratorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('DMARC Record Generator', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free DMARC Record Generator',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Build valid DMARC records for RFC 9989 (2026 standard)',
            'Clean old records by removing retired tags (pct, rf, ri)',
            'Configure policy, subdomains, reporting and test mode (t=y)',
            'Generate external destination consent authorization records',
            'Runs 100% in-browser with zero telemetry',
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
          <span>Free · updated for RFC 9989</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          DMARC Record Generator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Build a valid DMARC record for the current standard, or paste your old one to clean it up.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <DmarcGeneratorTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to publish your DMARC record</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Build the record above, or paste your current one into Import to clean it up.</li>
            <li>At your DNS host, create a TXT record with the host name _dmarc. Some providers want the full name, _dmarc.yourdomain.com.</li>
            <li>Paste the value and save. Make sure it&apos;s the only DMARC record on the domain; receivers that find two ignore both.</li>
            <li>Wait for DNS to update, then watch your rua mailbox. Providers that send aggregate reports should send them at least once every 24 hours.</li>
          </ol>
        </div>

        {/* Visual setup illustration */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-900">
          <Image
            src="/tools/dmarc-generator.webp"
            alt="DMARC record generation and RFC 9989 policy flowchart"
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What changed for DMARC records in 2026</h2>
          <p className={proseP}>
            In May 2026, RFC 9989 replaced RFC 7489 and put DMARC on the Standards Track. Records still start with v=DMARC1, so existing records keep working. Three tags are retired: pct, rf and ri. Two are new: t, a test mode, and np, a policy for subdomains that don&apos;t exist. This DMARC record generator never writes the retired tags, and the import option strips them from older records. The full tag list is in{' '}
            <Link href="/blog/what-is-a-dmarc-record" className="text-indigo-600 font-bold hover:underline">
              what is a DMARC record
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Which DMARC policy to choose</h2>
          <p className={proseP}>
            Start with p=none and a rua address. Nothing changes for your mail, and the reports show you which services send as your domain. The standard says getting every legitimate source authenticated can take many months. For domains whose users post to mailing lists, it suggests p=none for at least a month, then quarantine for an equally long period, comparing results before you move to reject.
          </p>
          <p className={proseP}>
            The t=y option helps with the last step. Publish p=reject with t=y and receivers apply quarantine instead, so you can see what would have been rejected without losing mail. Remove t=y when you&apos;re ready.
          </p>
          <p className={proseP}>
            Before you publish reject, make sure all your mail is DKIM-signed. The standard says a domain at p=reject must not rely on SPF alone, because forwarding breaks SPF. If you run your own mail server, the{' '}
            <Link href="/dkim-generator" className="text-indigo-600 font-bold hover:underline">
              DKIM generator
            </Link>{' '}
            can create a key.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Reporting addresses</h2>
          <p className={proseP}>
            rua is where aggregate reports go: XML files, usually covering one day each, listing which IP addresses sent mail as your domain and whether they passed. ruf is for per-message failure reports, which many receivers redact heavily or don&apos;t send at all for privacy reasons, so don&apos;t rely on them.
          </p>
          <p className={proseP}>
            If a report address is on a different domain than the one you&apos;re protecting, for example a reporting service, that domain has to publish a consent record before receivers will send anything there. The helper above writes the record for you; send it to whoever runs the reporting domain. The rule is in section 4 of RFC 9990.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Mistakes this DMARC generator prevents</h2>
          <p className={proseP}>
            The generator always puts v=DMARC1 first, because receivers ignore a record that starts with anything else. It adds the mailto: prefix that rua and ruf addresses need, and flags addresses that look wrong. It never writes pct, and when you import an old record with pct below 100 it suggests t=y instead. It warns you when you choose reject, since that&apos;s only safe once all your mail is DKIM-signed, and when strict alignment would make mail from your subdomains fail.
          </p>
          <p className={proseP}>
            The one thing it can&apos;t check is your DNS. Publish the result as the only DMARC record on the domain. For how DMARC works with SPF and DKIM, see{' '}
            <Link href="/blog/spf-dkim-dmarc-explained" className="text-indigo-600 font-bold hover:underline">
              SPF, DKIM and DMARC explained
            </Link>
            .
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
        headline="DMARC done? Check your list next."
        supporting="Authentication proves the mail is yours. Verifying your list stops bounces from addresses that no longer exist. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
