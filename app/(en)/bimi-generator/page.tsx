import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import BimiGeneratorTool from '@/components/tools/BimiGenerator/BimiGeneratorTool'

const CANONICAL = '/bimi-generator'
const TITLE = 'Free BIMI Record Generator and SVG Logo Checker | Giggal.ai'
const DESC =
  'Build your BIMI record and check your SVG logo against the Tiny PS rules in your browser. See what Gmail, Apple Mail and others need before your logo shows. Free.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/bimi-generator-og.webp', width: 1200, height: 630, alt: 'An inbox message with a brand logo next to it and a DNS record below' }],
    title: 'Free BIMI Record Generator and SVG Logo Checker',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free BIMI Record Generator and SVG Logo Checker',
    description: DESC,
    images: ['/tools/bimi-generator-og.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Does BIMI work with DMARC at p=none?',
    a: 'No. Google states that BIMI doesn’t support a DMARC policy of none. Your policy needs to be quarantine or reject.',
  },
  {
    q: 'Do I need a VMC for Gmail?',
    a: 'You need either a VMC or a CMC. A VMC needs a registered trademark and gets the blue checkmark; a CMC doesn’t need a trademark and shows the logo without it.',
  },
  {
    q: 'Why isn’t my BIMI logo showing?',
    a: 'The usual causes are DMARC still at p=none, mail that doesn’t pass DMARC, an SVG that isn’t valid Tiny PS, a missing or expired certificate, or an inbox that doesn’t support BIMI. Providers can also take a while to pick up a new record.',
  },
  {
    q: 'Does BIMI improve deliverability?',
    a: 'Not directly. BIMI only shows a logo on mail that already passes DMARC at enforcement. The work it takes to get there, getting SPF, DKIM and DMARC right, is what helps your mail arrive. See [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).',
  },
  {
    q: 'What is default._bimi?',
    a: 'The DNS name where providers look for your BIMI record. default is the selector. You only need a different selector, plus a BIMI-Selector header in your mail, if you want different logos for different kinds of mail.',
  },
  {
    q: 'Is my logo uploaded anywhere?',
    a: 'No. The checker reads the file in your browser.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function BimiGeneratorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('BIMI Record Generator', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free BIMI Record Generator and SVG Logo Checker',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Build BIMI TXT records with custom selector, logo, and certificate URLs',
            'Validate SVG logos against 11 strict SVG Tiny PS specifications',
            'Interactive BIMI readiness checklist for Gmail and Apple Mail support',
            'Zone-file line generation and copy helpers',
            'Runs 100% in-browser with zero upload or telemetry',
          ],
        })}
      />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          BIMI Record Generator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Build the BIMI record for your domain and check that your logo file meets the rules, before you buy a certificate or publish anything.
        </p>
        <p className="text-xs text-slate-500 font-medium">
          Runs in your browser. Your logo file isn&apos;t uploaded anywhere.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <BimiGeneratorTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-4xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to set up BIMI</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>
              Get DMARC to enforcement. BIMI doesn&apos;t work at p=none; your policy has to be quarantine or reject. The{' '}
              <Link href="/dmarc-generator" className="text-indigo-600 font-bold hover:underline">
                DMARC generator
              </Link>{' '}
              can build that record.
            </li>
            <li>Prepare your logo as an SVG Tiny PS file and test it with the logo checker above.</li>
            <li>Decide on a certificate. Gmail shows BIMI logos only with a VMC or a CMC, and Apple Mail only with a VMC.</li>
            <li>Host the SVG and, if you have one, the certificate&apos;s PEM file at HTTPS addresses.</li>
            <li>Publish the record from this generator as a TXT record at default._bimi.yourdomain.</li>
          </ol>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-900">
          <Image
            src="/tools/bimi-generator.webp"
            alt="An inbox message with a brand logo next to it and a DNS record below"
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What a BIMI record contains</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Tag</th>
                  <th className="py-3 px-4">What it does</th>
                  <th className="py-3 px-4">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">v</td>
                  <td className="py-2.5 px-4">Version, always BIMI1</td>
                  <td className="py-2.5 px-4 font-mono">v=BIMI1</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">l</td>
                  <td className="py-2.5 px-4">HTTPS address of your SVG logo</td>
                  <td className="py-2.5 px-4 font-mono">l=https://example.com/bimi/logo.svg</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-mono font-bold text-slate-900">a</td>
                  <td className="py-2.5 px-4">HTTPS address of your VMC or CMC certificate (a PEM file)</td>
                  <td className="py-2.5 px-4 font-mono">a=https://example.com/bimi/cert.pem</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={proseP}>
            Google&apos;s own examples show two forms: a record with only l=, and one with l= left empty and a= pointing to the certificate, because the logo is embedded in the PEM file. If you have a certificate, follow what your certificate provider recommends; the generator can produce either form. A newer optional avp= tag tells providers whether the logo is a brand or a personal avatar, and most senders leave it out.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>The logo rules the checker tests</h2>
          <p className={proseP}>
            BIMI logos use SVG Tiny PS, a cut-down version of SVG built for safe display in inboxes. The root element needs baseProfile set to tiny-ps and version set to 1.2, the image has to be square, and it needs a title element with your brand name. Scripts, embedded raster images, animation and links to outside files aren&apos;t allowed, and the file should stay under 32 KB. A regular SVG exported from a design tool usually breaks at least one of these rules, which is why it&apos;s worth checking before you apply for a certificate.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>VMC or CMC: which certificate you need</h2>
          <p className={proseP}>
            Gmail shows BIMI logos only when the record points to a certificate. A VMC (Verified Mark Certificate) needs a registered trademark and adds Gmail&apos;s blue checkmark. A CMC (Common Mark Certificate) is for logos that aren&apos;t trademarked; Gmail shows the logo, but without the checkmark. Apple Mail accepts only a VMC. Some other providers, Yahoo and Fastmail among them, can show a logo from a record with no certificate at all. Certificates come from a short list of certificate authorities, and Google publishes the ones it accepts.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-4xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      {/* CTA */}
      <AltCtaBand
        headline="Logo ready? Check your list too."
        supporting="BIMI only helps mail that reaches the inbox. Verify your list so it doesn't bounce. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
