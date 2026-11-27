import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import EmailHeaderAnalyzerTool from './EmailHeaderAnalyzerTool'

const SITE = 'https://giggal.ai'
const PATH = '/email-header-analyzer'
const CANONICAL = `${SITE}${PATH}`

export const emailHeaderAnalyzerMetadata: Metadata = {
  title: { absolute: 'Email Header Analyzer: Free Message Header Analyzer & Trace | Giggal.ai' },
  description:
    'Free email header analyzer and message header analyzer. Inspect raw email headers, trace Received hops bottom to top, check SPF, DKIM, DMARC, ARC, and authserv-id.',
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'Email Header Analyzer: Free Message Header Analyzer & Auth Inspector',
    description:
      'Analyze raw email headers in your browser. Trace server relay hops, verify SPF, DKIM, DMARC, and ARC results, and detect spoofing signals.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Free Email Header Analyzer' }],
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'How does an email header analyzer work?',
    a: 'An email header analyzer reads the raw RFC 5322 text block above the email body. It separates folded header lines, extracts every Received hop in chronological order, reads Authentication-Results and ARC records, and checks whether Return-Path, From, and Reply-To domains match.',
  },
  {
    q: 'How do I get raw email headers from Gmail?',
    a: 'Open the message in Gmail on desktop. Click the three vertical dots next to Reply in the upper right corner. Click "Show original" to open the full raw email header view, then click "Copy to clipboard" and paste it into the message header analyzer.',
  },
  {
    q: 'How do I copy raw email headers in Outlook and Microsoft 365?',
    a: 'In Outlook on the web, open the email, click the three dots on the right side of the reading pane, select "View", and click "View message source". In Outlook desktop, open the email in its own window, open File > Properties, and copy all text inside the "Internet headers" box.',
  },
  {
    q: 'Why does the email header analyzer read hops from bottom to top?',
    a: 'RFC 5321 Section 4.4 requires every Mail Transfer Agent that accepts an email to add a new Received header at the very top of the message. As a result, the originating sending server appears at the bottom of raw email headers, while the final destination inbox appears at the top.',
  },
  {
    q: 'What is an authserv-id inside Authentication-Results?',
    a: 'RFC 8601 defines authserv-id as the hostname of the mail server that ran SPF, DKIM, and DMARC checks. Only the top Authentication-Results header written by your own email host is trustworthy. Lower headers can be injected by external senders before transit.',
  },
  {
    q: 'Why did my email pass SPF and DKIM in the header analyzer but still fail DMARC?',
    a: 'DMARC requires identifier alignment, not just passing checks. The domain verified by SPF (Return-Path) or DKIM (d= tag) must match the visible From header domain. If both use a third-party provider domain, SPF and DKIM pass on paper, but DMARC fails due to misalignment.',
  },
  {
    q: 'What does clock skew mean in the relay hop timeline?',
    a: 'The message header analyzer calculates transit delay by subtracting each hop timestamp from the next server timestamp. If an intermediate relay server has an unsynchronized clock or incorrect timezone offset, the difference looks negative. We label this clock skew instead of showing negative seconds.',
  },
  {
    q: 'Are my raw email headers stored on Giggal servers?',
    a: 'No. This free email header analyzer runs 100% locally inside your browser using JavaScript. Your raw email headers, IP addresses, subjects, and recipients never leave your device.',
  },
]

const HEADER_FIELDS = [
  { field: 'Received', purpose: 'Logs every SMTP relay hop, server IP, TLS protocol, and timestamp from sender to receiver.', rfc: 'RFC 5321' },
  { field: 'Authentication-Results', purpose: 'Records SPF, DKIM, DMARC, and ARC outcomes computed by the receiving border server.', rfc: 'RFC 8601' },
  { field: 'Return-Path', purpose: 'Stores the envelope bounce address checked during SPF verification.', rfc: 'RFC 5321' },
  { field: 'From', purpose: 'Displays the sender name and email address shown inside the recipient mailbox client.', rfc: 'RFC 5322' },
  { field: 'Reply-To', purpose: 'Overrides where replies are routed when a user hits Reply. Mismatches flag potential spoofing.', rfc: 'RFC 5322' },
  { field: 'DKIM-Signature', purpose: 'Holds the cryptographic hash, selector (s=), and signing domain (d=) verifying message integrity.', rfc: 'RFC 6376' },
  { field: 'ARC-Seal', purpose: 'Preserves original authentication status when forwarding servers or mailing lists modify messages.', rfc: 'RFC 8617' },
  { field: 'ARC-Message-Signature', purpose: 'Signs the message headers and body snapshot along an Authenticated Received Chain hop.', rfc: 'RFC 8617' },
  { field: 'Message-ID', purpose: 'Provides a globally unique tracking ID generated by the originating mail server or client.', rfc: 'RFC 5322' },
  { field: 'List-Unsubscribe', purpose: 'Publishes an HTTPS one-click opt-out URL required by Google and Yahoo for bulk senders.', rfc: 'RFC 8058' },
]

export default function EmailHeaderAnalyzerPage() {
  const jsonLds = [
    breadcrumbLd('Email Header Analyzer', PATH),
    faqPageLd(FAQS),
    toolWebApplicationLd({
      name: 'Free Email Header Analyzer and Message Header Analyzer',
      url: CANONICAL,
      description:
        'Free email header analyzer. Inspect raw email headers, trace server relay hops bottom to top, verify SPF, DKIM, DMARC, ARC, and spot spoofing.',
      featureList: [
        'Hop-by-hop relay timeline sorted bottom to top per RFC 5321',
        'SPF, DKIM, DMARC, and ARC result parsing with authserv-id verification (RFC 8601)',
        'Sender domain comparison between From, Reply-To, and Return-Path',
        'Direct IP links into the mail IP reputation checker',
        '100% private client-side email header analysis in your browser',
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
          Free Technical Tool · RFC 5322 & RFC 8601
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Email Header Analyzer
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Use this free email header analyzer and message header analyzer to trace raw email headers. Check SPF, DKIM, DMARC, and ARC results, audit delivery hops bottom to top, and detect sender spoofing in your browser.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <EmailHeaderAnalyzerTool />
      </section>

      {/* READING GUIDE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        {/* How to use */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the email header analyzer</h2>
          <p className={proseP}>
            Every message carries hidden metadata above its visible body. Our message header analyzer parses those raw email headers locally in seconds:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Copy the full raw email header text from Gmail, Outlook, Apple Mail, or your SMTP log, or drop a saved <span className={code}>.eml</span> file directly into the box above.</li>
            <li>Click <strong>Analyze Headers</strong> (or test one of the three built-in presets to see a clean pass, ARC forwarding chain, or spoofing example).</li>
            <li>Inspect the top authentication cards to check <strong>SPF</strong>, <strong>DKIM</strong>, <strong>DMARC</strong>, and <strong>ARC</strong> status plus the trusted <span className={code}>authserv-id</span> server name.</li>
            <li>Read the delivery hop timeline sorted chronologically from Hop 1 (originating server) at the top of the table down to the final receiving inbox.</li>
            <li>Click any public relay IP inside the hop list to verify blacklist status in our <Link href="/ip-reputation-checker" className={linkCls}>IP reputation checker</Link>.</li>
          </ol>
          <p className={proseP}>
            Running an email header analysis stops cleanly at the first blank line in your message so quoted forwarded replies inside the body never pollute the header tree.
          </p>
        </div>

        {/* How to copy headers */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to find and copy raw email headers</h2>
          <p className={proseP}>
            Mail apps hide raw email headers by default to keep inboxes clean. Follow these exact steps in major email clients before running the email header analyzer:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className={subTitle}>Gmail and Google Workspace</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Open the message on desktop. Click the three vertical dots next to Reply and choose <strong>Show original</strong>. A summary page displays SPF, DKIM, and DMARC status along with the full source. Click <strong>Copy to clipboard</strong> and paste into the email header analyzer.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className={subTitle}>Microsoft Outlook Web and Outlook 365</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Open the message inside Outlook on the web. Click the three dots in the upper right of the message pane, hover over <strong>View</strong>, and click <strong>View message source</strong>. Copy the entire block above the HTML body for complete message header analysis.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className={subTitle}>Outlook Desktop (Windows and Mac)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Double-click an email to open it in a separate window. Open <strong>File &gt; Properties</strong> on Windows (or drag the message to your desktop as an <span className={code}>.eml</span> file on Mac). Copy the contents inside the <strong>Internet headers</strong> box.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
              <h3 className={subTitle}>Apple Mail (macOS) and Mozilla Thunderbird</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                In Apple Mail, select the email and press <strong>Option+Command+U</strong> (or View &gt; Message &gt; All Headers). In Thunderbird, open the email and press <strong>Ctrl+U</strong> (Windows) or <strong>Command+U</strong> (Mac) to open raw message source.
              </p>
            </div>
          </div>
        </div>

        {/* Received hop order */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How email header analysis traces hops bottom to top</h2>
          <p className={proseP}>
            Every server that handles an outbound message prepends its own <span className={code}>Received:</span> line onto the top of the raw email headers stack. Because each hop pushes the previous lines downward, reading headers top-to-bottom reads transit backwards in time.
          </p>
          <p className={proseP}>
            A typical single <span className={code}>Received:</span> header looks like this:
          </p>
          <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
            {`Received: from mail-sor-f41.google.com (mail-sor-f41.google.com [209.85.220.41])\n  by mx.example.com with ESMTPS id k19-20020a17...\n  for <sarah@example.com>; Fri, 27 Nov 2026 14:12:04 +0000 (UTC)`}
          </pre>
          <p className={proseP}>
            Our email header analyzer parses folded multi-line headers, isolates the semicolon timestamp safely outside nested parentheses, and reverses the stack so Hop 1 is the true sending server:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li><strong>Hop 1 (Originating MTA):</strong> The web app, CRM, Google Workspace server, or SMTP relay that first accepted the email.</li>
            <li><strong>Intermediate Relays:</strong> Spam filtering gateways (such as Proofpoint or Mimecast), antivirus scanners, or forwarding hubs.</li>
            <li><strong>Final Hop (Destination Inbox):</strong> Your recipient mail server, where final TLS encryption, SPF, DKIM, and DMARC checks run.</li>
          </ul>
        </div>

        {/* Table of Header Fields */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Key fields decoded by the message header analyzer</h2>
          <p className={proseP}>
            Knowing what each field verifies turns raw email headers into actionable deliverability diagnostics. Here are the main header lines checked during an email header analysis:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Header Field</th>
                    <th className="py-2.5 px-4">What it records</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {HEADER_FIELDS.map((row) => (
                    <tr key={row.field} className="align-top">
                      <td className="py-3 px-4 font-mono font-semibold text-slate-900 whitespace-nowrap">{row.field}</td>
                      <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{row.rfc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Boundary */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>The authserv-id security trust boundary (RFC 8601)</h2>
          <p className={proseP}>
            Any sender can write a fake <span className={code}>Authentication-Results: spf=pass dkim=pass dmarc=pass</span> line inside a message before sending it across SMTP. If you read raw email headers blindly, forged headers can trick an analyst into trusting a phishing message.
          </p>
          <p className={proseP}>
            RFC 8601 solves this by placing an authentication service identifier (<span className={code}>authserv-id</span>) immediately after the header colon. Your own receiving mail server stamps the top result block with its trusted border hostname (such as <span className={code}>mx.google.com</span> or <span className={code}>spf.protection.outlook.com</span>). Our email header analyzer highlights this server name so you never confuse forged sender-injected lines with real receiver results.
          </p>
        </div>

        {/* Alignment & ARC */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>SPF, DKIM, DMARC alignment, and ARC forwarding chains</h2>
          <p className={proseP}>
            Authentication alone does not equal DMARC compliance. Under DMARC, at least one method must both pass and <strong>align</strong> with the domain shown in the visible <span className={code}>From:</span> address. See our <Link href="/blog/spf-dkim-dmarc-explained" className={linkCls}>SPF, DKIM, and DMARC guide</Link> or verify each record directly using our <Link href="/spf-checker" className={linkCls}>SPF checker</Link>, <Link href="/dkim-checker" className={linkCls}>DKIM checker</Link>, and <Link href="/dmarc-checker" className={linkCls}>DMARC checker</Link>.
          </p>
          <p className={proseP}>
            When an automated forwarding rule or mailing list passes an email along to another mailbox, the forwarder changes the sending IP (breaking SPF) and often modifies the footer or subject (breaking DKIM). Authenticated Received Chain (<strong>ARC</strong>, RFC 8617) preserves the pre-forwarding results inside <span className={code}>ARC-Authentication-Results</span>, <span className={code}>ARC-Message-Signature</span>, and <span className={code}>ARC-Seal</span> headers. Our message header analyzer extracts the full ARC chain (<span className={code}>cv=pass</span> / <span className={code}>cv=fail</span>) while checking whether your final border MTA accepted the chain.
          </p>
        </div>

        {/* Common Header Warnings */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Common email header warnings and how to fix them</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>From domain differs from Reply-To or Return-Path</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                If <span className={code}>From:</span> displays a trusted company while <span className={code}>Reply-To:</span> points to a free webmail address, treat the message as potential impersonation. For legitimate marketing tools using a custom <Link href="/glossary/return-path" className={linkCls}>Return-Path</Link> bounce domain, verify that DKIM aligns with the visible From domain.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Clock skew across Received timestamps</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                When an intermediate mail relay runs behind Network Time Protocol drift or uses a mismatched UTC offset, a subsequent hop looks earlier than the previous server. Our email header analyzer flags clock skew safely instead of showing negative travel times.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Missing RFC 8058 One-Click Unsubscribe headers</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Google and Yahoo require bulk senders (5,000+ daily emails) to publish both <span className={code}>List-Unsubscribe</span> and <span className={code}>List-Unsubscribe-Post: List-Unsubscribe=One-Click</span> inside outbound headers. Missing headers hurt bulk deliverability and increase spam complaints.
              </p>
            </div>
          </div>
        </div>

        {/* Myths */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Three facts about raw email headers people often miss</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li><strong>Header size matters for DKIM.</strong> Broken UTF-8 folding in <span className={code}>Subject:</span> or <span className={code}>From:</span> headers can invalidate body hashes when relays rewrite whitespace.</li>
            <li><strong>Encryption applies per hop, not end-to-end.</strong> Seeing <span className={code}>ESMTPS</span> or TLS 1.3 in one hop only guarantees encryption on that specific network link; inspect all hops in the relay trace.</li>
            <li><strong>Clean headers cannot save bad recipient lists.</strong> Even with perfect SPF, DKIM, and DMARC headers, sending cold outreach to invalid addresses or catch-all traps destroys domain reputation. Verify your contacts first with <Link href="/email-checker" className={linkCls}>Giggal Email Checker</Link>.</li>
          </ul>
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
        headline="Verify your recipient lists before sending outreach"
        supporting="Clean your lists with 98.5% accuracy, catch-all resolution, and 1,000 free credits."
        buttonText="Start Verifying for Free"
      />

      <Footer />
    </main>
  )
}
