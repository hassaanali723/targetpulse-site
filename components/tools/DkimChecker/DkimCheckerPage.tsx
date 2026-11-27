import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import DkimCheckerTool from './DkimCheckerTool'

const SITE = 'https://giggal.ai'
const PATH = '/dkim-checker'
const CANONICAL = `${SITE}${PATH}`

export const dkimCheckerMetadata: Metadata = {
  title: { absolute: 'DKIM Checker: Free DKIM Record Lookup & DKIM Analyzer | Giggal.ai' },
  description:
    'Free DKIM checker and DKIM analyzer. Run a DKIM record lookup by selector, verify 2048-bit RSA and Ed25519 key length, trace CNAME delegation, and audit RFC 6376 compliance.',
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'DKIM Checker: Free DKIM Record Lookup & Key Strength Inspector',
    description:
      'Run a free DKIM record lookup to inspect selectors, verify 2048-bit RSA modulus strength, chase CNAME delegation, and audit RFC 6376 tags.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Free DKIM Checker Tool' }],
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'How does a DKIM checker verify a domain key?',
    a: 'Our DKIM checker queries DNS for TXT or CNAME records at <selector>._domainkey.<domain>. It follows CNAME delegation chains, parses RFC 6376 tags, decodes the base64 SubjectPublicKeyInfo ASN.1 DER structure, and calculates the exact RSA modulus bit length or Ed25519 byte length.',
  },
  {
    q: 'How do I find my DKIM selector before running a DKIM record lookup?',
    a: 'DNS cannot list unknown selector names blindly. Send a test email to Gmail or Outlook, copy the raw headers, and paste them into our Email Header Analyzer. Look inside the DKIM-Signature header for the s= value (for example, s=20230601 or s=selector1).',
  },
  {
    q: 'Why do Google and Yahoo require 2048-bit DKIM keys instead of 1024-bit?',
    a: 'Security researchers and NIST standards consider 1024-bit RSA keys weak against modern factoring compute. Google, Yahoo, and Microsoft require at least 1024-bit keys and strongly advise upgrading to 2048-bit RSA keys (or 256-bit Ed25519) so signatures cannot be forged.',
  },
  {
    q: 'What does an empty p= tag mean inside a DKIM record?',
    a: 'RFC 6376 Section 3.6.1 states that an empty p= value (such as v=DKIM1; p=;) explicitly revokes that selector public key. Receiving mail servers treat messages signed by a revoked selector as unauthenticated.',
  },
  {
    q: 'How does CNAME delegation work when inspecting DKIM selectors?',
    a: 'Sending platforms such as SendGrid, Microsoft 365, Mailgun, and Amazon SES host keys on their own domain and ask you to publish a CNAME pointing selector._domainkey.yourdomain.com to them. Our DKIM analyzer chases CNAME hops automatically up to 5 levels deep and alerts if a CNAME is dangling.',
  },
  {
    q: 'What does t=y testing mode do in DKIM?',
    a: 'Publishing t=y informs receivers that your domain is testing DKIM. Receiving gateways compute the signature status but will not reject emails or apply strict DMARC failures based solely on DKIM errors while t=y stays present. Remove t=y once setup finishes.',
  },
  {
    q: 'Are 512-bit or 768-bit DKIM keys still accepted?',
    a: 'No. RFC 8301 explicitly prohibits signing or validating keys shorter than 1024 bits and deprecates SHA-1 hashing (h=sha1). Receiving servers fail authentication immediately when encountering keys under 1024 bits.',
  },
  {
    q: 'Can I check an unpublished DKIM key before adding it to DNS?',
    a: 'Yes. Switch to the Validate Draft Key tab inside our DKIM checker, paste any raw v=DKIM1 TXT string, and verify modulus bit-length, exponent values, and tag syntax locally in your browser.',
  },
]

const COMMON_SELECTORS = [
  { provider: 'Google Workspace', selectors: 'google, 20230601 (or custom date suffix)', type: 'Direct TXT (2048-bit RSA)' },
  { provider: 'Microsoft 365', selectors: 'selector1, selector2', type: 'CNAME Delegation (onmicrosoft.com)' },
  { provider: 'SendGrid', selectors: 's1, s2', type: 'CNAME Delegation (sendgrid.net)' },
  { provider: 'Mailchimp / Mandrill', selectors: 'k1, k2, k3, mandrill', type: 'CNAME Delegation (dkim.mcsv.net)' },
  { provider: 'HubSpot', selectors: 'hs1-<id>, hs2-<id>', type: 'CNAME Delegation (hubspotemail.net)' },
  { provider: 'Mailgun', selectors: 'k1, mailo, smtp', type: 'Direct TXT (1024 or 2048-bit)' },
  { provider: 'Amazon SES', selectors: '<32-char token> (three rotating CNAMEs)', type: 'CNAME Delegation (dkim.amazonses.com)' },
  { provider: 'Postmark', selectors: '<timestamp>pm', type: 'Direct TXT or CNAME' },
]

const DKIM_TAGS = [
  { tag: 'v', req: 'Optional', def: 'DKIM1', desc: 'DKIM version identifier. Must equal DKIM1 when specified.' },
  { tag: 'k', req: 'Optional', def: 'rsa', desc: 'Key algorithm: rsa (traditional) or ed25519 (RFC 8463 modern curve).' },
  { tag: 'p', req: 'Required', def: 'None', desc: 'Base64 encoded public key data. Empty string signals key revocation.' },
  { tag: 't', req: 'Optional', def: 'None', desc: 'Flags: y marks testing mode; s enforces exact domain matching in i=.' },
  { tag: 's', req: 'Optional', def: '*', desc: 'Service types authorized to use the key (email or *).' },
  { tag: 'h', req: 'Optional', def: 'sha256', desc: 'Permitted hash algorithms (use sha256; avoid deprecated sha1).' },
  { tag: 'n', req: 'Optional', def: 'None', desc: 'Human-readable administrator note ignored during crypto checks.' },
]

export default function DkimCheckerPage() {
  const jsonLds = [
    breadcrumbLd('DKIM Checker', PATH),
    faqPageLd(FAQS),
    toolWebApplicationLd({
      name: 'Free DKIM Checker and DKIM Analyzer',
      url: CANONICAL,
      description:
        'Free DKIM checker and DKIM analyzer. Lookup DKIM records by selector, measure RSA 1024 vs 2048-bit modulus length, check Ed25519 keys, and trace CNAME delegation.',
      featureList: [
        'Live <selector>._domainkey DNS-over-HTTPS record lookup with 5-hop CNAME tracing',
        'ASN.1 DER SubjectPublicKeyInfo parsing to extract exact RSA bit-length and exponent',
        'Supports modern 32-byte Ed25519 DKIM keys per RFC 8463',
        'Detects revoked keys (p=), testing mode (t=y), and weak SHA-1 hash tags (RFC 8301)',
        'Draft public key inspection mode for testing new keys before DNS rollout',
      ],
    }),
  ]

  const sectionTitle = 'text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'
  const subTitle = 'text-lg md:text-xl font-bold text-slate-900 tracking-tight'
  const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
  const code = 'font-mono text-[0.9em] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded'
  const linkCls = 'text-indigo-600 font-bold hover:underline'

  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      {jsonLds.map((ld, i) => (
        <JsonLd key={i} data={ld} />
      ))}

      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
          Free DNS Diagnostic · RFC 6376 & RFC 8463 Key Audit
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          DKIM Record Checker
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Run a free DKIM checker and DKIM record lookup on any sending selector. Inspect 2048-bit RSA and Ed25519 key length, trace ESP CNAME delegation hops, and spot revoked keys or testing flags instantly.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <DkimCheckerTool />
      </section>

      {/* READING GUIDE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        {/* How to use */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to run a DKIM record lookup</h2>
          <p className={proseP}>
            Unlike DMARC (which lives at one predictable <span className={code}>_dmarc</span> record), every domain can host multiple DKIM keys under separate selector names. Follow these steps inside the DKIM analyzer above:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Enter the <strong>Selector Name</strong> (such as <span className={code}>google</span>, <span className={code}>20230601</span>, <span className={code}>selector1</span>, or <span className={code}>s1</span>) and your <strong>Domain Name</strong>.</li>
            <li>Not sure which selector your app sends with? Paste raw message headers into our <Link href="/email-header-analyzer" className={linkCls}>Email Header Analyzer</Link> and read the <span className={code}>s=</span> tag inside <span className={code}>DKIM-Signature</span>.</li>
            <li>Click <strong>Check DKIM</strong> to query <span className={code}>&lt;selector&gt;._domainkey.&lt;domain&gt;</span> and chase CNAME delegation automatically.</li>
            <li>Review the <strong>Key Length &amp; Type</strong> scorecard to confirm a strong 2048-bit RSA or 256-bit Ed25519 public key.</li>
            <li>Verify that <strong>Status</strong> reads Active &amp; Valid with no <span className={code}>t=y</span> testing mode flag left enabled in production.</li>
          </ol>
          <p className={proseP}>
            Need to rotate weak 1024-bit keys or generate fresh key pairs? Create clean 2048-bit keys using our <Link href="/dkim-generator" className={linkCls}>DKIM Key Generator</Link>.
          </p>
        </div>

        {/* How DKIM works */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>What is DKIM and how cryptographic email signing works</h2>
          <p className={proseP}>
            <Link href="/glossary/dkim" className={linkCls}>DKIM</Link> (DomainKeys Identified Mail, <a href="https://www.rfc-editor.org/rfc/rfc6376" target="_blank" rel="noopener noreferrer" className={linkCls}>RFC 6376</a>) attaches an asymmetric cryptographic signature to every outbound email. Read our explainer in <Link href="/blog/what-is-dkim" className={linkCls}>What is DKIM</Link>.
          </p>
          <p className={proseP}>
            Your sending mail server signs chosen headers and a body hash with a secret private key kept on the server, adding a <span className={code}>DKIM-Signature</span> header. When the recipient mailbox arrives, the receiving gateway fetches your public key via a DKIM record lookup and verifies that nobody altered the content or forged the domain during transit.
          </p>
        </div>

        {/* Key bit length */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>DKIM key length: 1024-bit vs 2048-bit RSA vs Ed25519</h2>
          <p className={proseP}>
            Running a DKIM analyzer reveals the true mathematical key size inside your ASN.1 DER <span className={code}>SubjectPublicKeyInfo</span> payload (after stripping signed modulus zero-bytes cleanly):
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>512-bit and 768-bit RSA (Broken / Rejected)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Legacy keys shorter than 1024 bits can be cracked quickly using rented cloud compute. <a href="https://www.rfc-editor.org/rfc/rfc8301" target="_blank" rel="noopener noreferrer" className={linkCls}>RFC 8301</a> banned keys under 1024 bits and deprecated <span className={code}>sha1</span> hashing. Replace these immediately.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>1024-bit RSA (Legacy Minimum)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Still accepted on older DNS hosts constrained to single 255-character TXT strings, 1024-bit RSA sits near retirement. Google Workspace and Microsoft 365 advise upgrading to 2048-bit RSA wherever your DNS zone allows multi-string records.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>2048-bit RSA and Ed25519 (Modern Standard)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                <strong>2048-bit RSA</strong> meets every enterprise security audit and bulk sender guideline across Google, Yahoo, and Outlook. Domains sending on platforms supporting <a href="https://www.rfc-editor.org/rfc/rfc8463" target="_blank" rel="noopener noreferrer" className={linkCls}>RFC 8463</a> can also publish 32-byte <strong>Ed25519</strong> keys, achieving equivalent security inside tiny single-packet DNS answers.
              </p>
            </div>
          </div>
        </div>

        {/* Common Selectors Table */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Common DKIM selectors used by major email platforms</h2>
          <p className={proseP}>
            Use this reference list when guessing or auditing selectors across your outbound tools before checking your <Link href="/dmarc-checker" className={linkCls}>DMARC alignment</Link>:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Email Service</th>
                    <th className="py-2.5 px-4">Default Selector Name(s)</th>
                    <th className="py-2.5 px-4">DNS Setup Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {COMMON_SELECTORS.map((row) => (
                    <tr key={row.provider} className="align-top">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">{row.provider}</td>
                      <td className="py-3 px-4 font-mono text-xs text-indigo-700">{row.selectors}</td>
                      <td className="py-3 px-4 text-slate-600">{row.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RFC 6376 Tag Breakdown */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Every tag in a DKIM record explained</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Tag</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Requirement</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Default</th>
                    <th className="py-2.5 px-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {DKIM_TAGS.map((t) => (
                    <tr key={t.tag} className="align-top">
                      <td className="py-3 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">{t.tag}=</td>
                      <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{t.req}</td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-500 whitespace-nowrap">{t.def}</td>
                      <td className="py-3 px-4 text-slate-600">{t.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CNAME delegation & testing */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>CNAME delegation, testing flags, and key rotation</h2>
          <p className={proseP}>
            Enterprise platforms such as Microsoft 365 and SendGrid publish keys via <span className={code}>CNAME</span> records so the provider can rotate private keys automatically across selectors (for example switching from <span className={code}>selector1</span> to <span className={code}>selector2</span>) without asking you to edit DNS twice a year. If an account gets cancelled and leaves a broken CNAME behind, our DKIM checker traces the hop chain and exposes the failure.
          </p>
          <p className={proseP}>
            Always remember to keep outbound recipient bounce rates below 2% alongside cryptographic signing. Even a verified 2048-bit DKIM signature cannot keep messages out of spam if your campaign hits invalid addresses; clean contact lists first using <Link href="/email-checker" className={linkCls}>Giggal Email Verification</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>Frequently Asked Questions</h2>
        </div>
        <FaqAccordion items={FAQS} />
      </section>

      {/* CTA Band */}
      <AltCtaBand
        headline="Protect your domain reputation with clean outreach lists"
        supporting="Clean your lists with 98.5% accuracy, catch-all resolution, and 1,000 free credits."
        buttonText="Start Verifying for Free"
      />

      <Footer />
    </main>
  )
}
