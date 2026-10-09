import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import DkimGeneratorTool from '@/components/tools/DkimGenerator/DkimGeneratorTool'
import { ShieldCheck } from 'lucide-react'

const CANONICAL = '/dkim-generator'
const TITLE = 'Free DKIM Generator: Create a DKIM Key and Record | Giggal.ai'
const DESC =
  'Generate a 2048-bit DKIM key pair and the DNS TXT record to publish, right in your browser. Your private key is never sent anywhere. Free, no signup.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/dkim-generator-og-v2.webp', width: 1200, height: 630, alt: 'Free DKIM Generator' }],
    title: 'Free DKIM Generator: Create a DKIM Key and Record',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free DKIM Generator: Create a DKIM Key and Record',
    description: DESC,
    images: ['/tools/dkim-generator-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is this DKIM generator safe to use?',
    a: 'The key pair is created by your browser’s built-in Web Crypto API, and the private key is never sent to our servers or anywhere else. That also means we can’t recover it, so download it before you leave the page.',
  },
  {
    q: 'Where does the private key go?',
    a: 'On your mail server, in its DKIM signing settings, and nowhere else. Never put it in DNS or send it by email. Only the public key, inside the TXT value, gets published.',
  },
  {
    q: 'Should I use 1024 or 2048 bits?',
    a: 'Use 2048 unless your DNS host can’t store the longer record. Gmail accepts 1024 as a minimum but recommends 2048, and RFC 8301 says signers should use at least 2048.',
  },
  {
    q: 'Why is my DKIM record split into several strings?',
    a: 'Each string in a TXT record can hold at most 255 characters, and a 2048-bit key is longer than that. Receivers join the strings back into one value, so splitting doesn’t change the record.',
  },
  {
    q: 'Which private key format should I use?',
    a: 'Many signing tools accept the standard PKCS#8 file (BEGIN PRIVATE KEY). If yours asks for BEGIN RSA PRIVATE KEY, download the PKCS#1 version instead; it’s the same key in an older format.',
  },
  {
    q: 'How do I check that DKIM is working?',
    a: 'Send a message from your server to a personal Gmail account, open it and choose Show original. Gmail lists the DKIM result near the top; you want PASS for your domain.',
  },
  {
    q: 'Can I use this key with Google Workspace or Microsoft 365?',
    a: 'No. Both create their own DKIM keys, so use the setup in their admin consoles. This tool is for servers where you control the signing key.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function DkimGeneratorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('DKIM Generator', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free DKIM Generator',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Generate 2048-bit DKIM key pair in browser',
            'Formatted DNS TXT record for publication',
            'PKCS#1 and PKCS#8 private keys',
            '255-character string split for DNS compatibility',
            'Zero server transmission of private keys',
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
          <span>Free · key generated in your browser</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          DKIM Generator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Create a DKIM key pair and the exact TXT record to publish. The key is generated in your browser and never sent anywhere.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <DkimGeneratorTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to set up DKIM with a generated key</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Enter your domain and a selector, pick a key size and click Generate.</li>
            <li>At your DNS host, create a TXT record. Use the record name shown above (selector._domainkey, or the full name if your provider asks for it) and paste the TXT value.</li>
            <li>Install the private key in your mail server&apos;s DKIM signing settings, using the same selector and domain.</li>
            <li>Send a test message to a personal Gmail account and open Show original. Next to DKIM it should say PASS.</li>
          </ol>
          <p className={proseP}>
            If it doesn&apos;t pass, check that the DNS record has finished publishing and that the selector on the server matches the one in DNS exactly. For how DKIM fits with SPF and DMARC, see{' '}
            <Link href="/blog/spf-dkim-dmarc-explained" className="text-indigo-600 font-bold hover:underline">
              SPF, DKIM and DMARC explained
            </Link>
            .
          </p>
        </div>

        {/* Visual setup illustration */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/dkim-generator-v2.webp"
            alt="Illustration of public and private keys securing an email message with cryptographic signature."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Choosing a selector and key size</h2>
          <p className={proseP}>
            The selector is just a label, so pick one you&apos;ll recognize later. A date-based name like s2026a makes it obvious which key is current when you rotate. It can contain letters, digits, hyphens and dots.
          </p>
          <p className={proseP}>
            For key size, 2048 bits is the safe default. Gmail requires DKIM keys of at least 1024 bits and recommends 2048, and RFC 8301 says signers must use at least 1024 bits and should use 2048. The same RFC requires receivers to handle keys up to 4096 bits, but a 4096-bit record is long enough that some DNS panels struggle with it, so only choose it if you have a reason to.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What&apos;s in a DKIM record</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4 w-16">Tag</th>
                    <th className="py-2.5 px-4">What it means</th>
                    <th className="py-2.5 px-4 font-mono">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">v</td>
                    <td className="py-3 px-4 text-slate-600">Version. Optional, but if it&apos;s there it must come first</td>
                    <td className="py-3 px-4 font-mono text-indigo-600 font-semibold">v=DKIM1</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">k</td>
                    <td className="py-3 px-4 text-slate-600">Key type. rsa is the default</td>
                    <td className="py-3 px-4 font-mono text-indigo-600 font-semibold">k=rsa</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">p</td>
                    <td className="py-3 px-4 text-slate-600">The public key, base64 encoded. An empty p= means the key has been revoked</td>
                    <td className="py-3 px-4 font-mono text-indigo-600 font-semibold">p=MIIBIjAN...</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">t</td>
                    <td className="py-3 px-4 text-slate-600">Flags. y means testing, s means the key can&apos;t be used for subdomains</td>
                    <td className="py-3 px-4 font-mono text-indigo-600 font-semibold">t=y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            Three more tags exist (h for hash algorithms, n for notes and s for service type), but you rarely need them.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Why long DKIM records get split</h2>
          <p className={proseP}>
            A 2048-bit public key is about 390 characters long once it&apos;s base64 encoded. DNS stores TXT data as strings of up to 255 characters each (RFC 1035), so a key that long has to be published as two or more strings, and receivers join them back together before checking the signature. Most DNS panels split the value for you when you paste the single-string version. The zone-file version above is for people editing a BIND zone file directly, where the strings sit inside parentheses so the record can span several lines.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Rotating DKIM keys</h2>
          <p className={proseP}>
            To change keys without breaking anything, generate a new pair under a new selector and publish its record alongside the old one. Switch your server to sign with the new selector, then remove the old record once the mail signed with it has been delivered.
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
        headline="DKIM sorted? Check your list next."
        supporting="Signed mail still bounces if the address doesn't exist. Verify your list before the next send. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
