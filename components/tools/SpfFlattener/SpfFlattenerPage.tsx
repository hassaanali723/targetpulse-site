import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import SpfFlattenerTool from './SpfFlattenerTool'

const SITE = 'https://giggal.ai'
const PATH = '/spf-flattener'
const CANONICAL = `${SITE}${PATH}`

export const spfFlattenerMetadata: Metadata = {
  title: { absolute: 'SPF Flattener: Free SPF Flattening Tool to Fix 10 Lookups | Giggal.ai' },
  description:
    'Free SPF flattener and SPF flattening tool. Reduce SPF DNS lookups under the limit of 10, fix SPF permerror, merge overlapping subnets, and check UDP packet size.',
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'SPF Flattener: Free SPF Flattening Tool to Fix 10 DNS Lookup Limit',
    description:
      'Flatten complex SPF include chains into deduplicated ip4 and ip6 ranges. Fix SPF permerror, inspect 255-character chunks, and reduce DNS lookups.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Free SPF Flattener Tool' }],
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'What does an SPF flattener do?',
    a: 'An SPF flattener queries every nested include, a, and mx mechanism inside your domain SPF record, resolves the authorized IPv4 and IPv6 addresses, removes overlapping subnets, and writes clean ip4 and ip6 entries. Because direct IP entries cost zero DNS lookups, flattening keeps your record safely under the limit of 10.',
  },
  {
    q: 'Why does RFC 7208 enforce a 10 DNS lookup limit for SPF?',
    a: 'RFC 7208 Section 4.6.4 limits receiving mail servers to 10 DNS-querying mechanisms per SPF check to stop DNS denial-of-service amplification attacks. If your record triggers 11 or more lookups, receiving mail servers stop evaluating and return SPF permerror.',
  },
  {
    q: 'How do I reduce SPF DNS lookups without breaking Microsoft 365 or Google?',
    a: 'Use selective SPF flattening. Keep high-churn providers like Microsoft 365 and Google Workspace as dynamic includes so IP rotations never fail, while using this SPF flattening tool to expand smaller static tools or legacy relays into direct ip4 entries.',
  },
  {
    q: 'What happens when an SPF record hits permerror?',
    a: 'When an SPF check triggers permerror, SPF authentication fails for every message sent from that domain unless DKIM passes and aligns under DMARC. Many corporate security gateways drop or quarantine messages immediately when an SPF permerror occurs.',
  },
  {
    q: 'Why does our SPF flattener measure 450 bytes and 255-character chunks?',
    a: 'DNS responses sent over standard UDP packets cannot exceed 512 bytes total. RFC 7208 Section 3.4 recommends keeping your flattened SPF record around 450 bytes or smaller so older resolvers do not drop fragmented packets. RFC 1035 also limits each quoted TXT string inside DNS to 255 characters.',
  },
  {
    q: 'Does static SPF flattening update automatically when a vendor changes IPs?',
    a: 'No. Flattening freezes current IP ranges into text. When an email vendor adds new outbound mail servers, a static flattened SPF record will not match them until you run the SPF flattener again or automate DNS updates.',
  },
  {
    q: 'What is a void lookup limit in SPF evaluation?',
    a: 'A void lookup occurs when an include, a, or mx query returns NXDOMAIN or zero address answers. RFC 7208 Section 4.6.4 enforces a strict limit of 2 void lookups per check before triggering an SPF permerror.',
  },
  {
    q: 'Can I flatten a raw draft record before updating live DNS?',
    a: 'Yes. Switch the SPF flattener tab above to "Paste Raw Draft" to test any v=spf1 string, toggle individual includes on or off, and check the lookup count and byte size before publishing changes in your DNS zone.',
  },
]

const MECHANISM_TABLE = [
  { term: 'include:_spf.google.com', counts: 'Yes (1+ nested)', action: 'Expands nested tree into direct IP blocks when flattened.' },
  { term: 'a / a:mail.example.com', counts: 'Yes (1 lookup)', action: 'Resolves host A and AAAA addresses into ip4 / ip6 entries.' },
  { term: 'mx / mx:example.com', counts: 'Yes (1 + up to 10 MX hosts)', action: 'Resolves MX hostnames then resolves each host IP.' },
  { term: 'redirect=otherdomain.com', counts: 'Yes (1+ target tree)', action: 'Transfers evaluation to target SPF record when no root all exists.' },
  { term: 'exists:%{i}.spf.domain.com', counts: 'Yes (1 lookup)', action: 'Uses runtime per-IP macros; kept intact as dynamic lookup.' },
  { term: 'ptr', counts: 'Yes (1+ reverse lookup)', action: 'Deprecated by RFC 7208; replace with explicit ip4 or ip6 entries.' },
  { term: 'ip4:192.0.2.0/24', counts: 'No (0 lookups)', action: 'Deduplicated and merged cleanly across overlapping CIDR ranges.' },
  { term: 'ip6:2001:db8::/32', counts: 'No (0 lookups)', action: 'Deduplicated via 128-bit CIDR range containment.' },
  { term: '~all / -all', counts: 'No (0 lookups)', action: 'Preserved at the end of the flattened record without modification.' },
]

const VENDOR_COSTS = [
  { vendor: 'Google Workspace', include: 'include:_spf.google.com', lookups: '1 lookup' },
  { vendor: 'Microsoft 365', include: 'include:spf.protection.outlook.com', lookups: '1 lookup' },
  { vendor: 'Salesforce Marketing / CRM', include: 'include:_spf.salesforce.com', lookups: '2 lookups' },
  { vendor: 'Zendesk Support', include: 'include:mail.zendesk.com', lookups: '1 to 3 lookups' },
  { vendor: 'Mailgun', include: 'include:mailgun.org', lookups: '5 lookups' },
  { vendor: 'Freshdesk', include: 'include:email.freshdesk.com', lookups: '7 lookups' },
  { vendor: 'HubSpot (Dedicated)', include: 'include:<hubid>.spf.hubspotemail.net', lookups: '1 lookup' },
]

export default function SpfFlattenerPage() {
  const jsonLds = [
    breadcrumbLd('SPF Flattener', PATH),
    faqPageLd(FAQS),
    toolWebApplicationLd({
      name: 'Free SPF Flattener Tool',
      url: CANONICAL,
      description:
        'Free SPF flattener and SPF flattening tool. Flatten nested SPF include chains into deduplicated ip4 and ip6 ranges, stay under 10 DNS lookups, and prevent SPF permerrors.',
      featureList: [
        'Recursive include, a, and mx resolution and DNS lookup counting (RFC 7208)',
        'Bitwise IPv4 and IPv6 CIDR deduplication and subnet containment merging',
        'Selective SPF flattening checkboxes to keep high-rotation ESP includes dynamic',
        '255-character multi-string DNS TXT formatting and 450-byte UDP packet meter',
        'Preserves negative (-), softfail (~), neutral (?) qualifiers and runtime macros',
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
          Free Technical Tool · RFC 7208 Optimizer
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Free SPF Flattener Tool
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Use our free SPF flattener and SPF flattening tool to expand nested includes into direct IP ranges. Reduce SPF DNS lookups below 10, fix SPF permerror failures, and check UDP size limits before publishing.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <SpfFlattenerTool />
      </section>

      {/* READING GUIDE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        {/* Step-by-step usage */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the free SPF flattener tool</h2>
          <p className={proseP}>
            Fixing an SPF record with too many DNS lookups takes less than one minute. Follow these steps inside the SPF flattening tool above:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Enter your domain name (or switch to <strong>Paste Raw Draft</strong> to test an unpublished record) and click <strong>Analyze &amp; Flatten</strong>.</li>
            <li>Wait two seconds as the SPF flattener walks every <span className={code}>include:</span>, <span className={code}>a</span>, and <span className={code}>mx</span> mechanism via live DNS-over-HTTPS queries.</li>
            <li>Review the selective flattening checklist. Check the boxes next to static services or high-lookup includes you want to convert into IP addresses. Uncheck Google Workspace or Microsoft 365 if you want them left dynamic.</li>
            <li>Watch the live counters drop your lookup total from over 10 down under the ceiling while checking the 450-byte UDP packet meter.</li>
            <li>Copy the single-line record or the 255-character multi-string chunks and update your <span className={code}>TXT</span> record in DNS.</li>
          </ol>
          <p className={proseP}>
            After saving the DNS update, verify the live published syntax with our <Link href="/spf-checker" className={linkCls}>SPF Record Checker</Link> and check downstream authentication alignment using our <Link href="/dmarc-checker" className={linkCls}>DMARC Checker</Link>.
          </p>
        </div>

        {/* Why the 10 lookup limit happens */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Why the 10 DNS lookup limit triggers SPF permerror</h2>
          <p className={proseP}>
            The Sender Policy Framework rules in <a href="https://www.rfc-editor.org/rfc/rfc7208" target="_blank" rel="noopener noreferrer" className={linkCls}>RFC 7208 Section 4.6.4</a> state that an SPF evaluation must never require more than 10 DNS-querying mechanisms or modifiers. That limit includes nested lookups triggered inside third-party <span className={code}>include:</span> chains.
          </p>
          <p className={proseP}>
            Once lookup 11 runs, receiving mail servers immediately stop checking your record and return <span className={code}>permerror</span>. Under DMARC, an SPF permerror counts as a broken authentication failure, sending valid customer invoices, CRM notifications, and cold outreach into junk folders or triggering 550 bounces.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">SPF Mechanism</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">Counts Toward 10 Limit?</th>
                    <th className="py-2.5 px-4">How SPF Flattening Handles It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {MECHANISM_TABLE.map((row) => (
                    <tr key={row.term} className="align-top">
                      <td className="py-3 px-4 font-mono font-semibold text-slate-900 whitespace-nowrap">{row.term}</td>
                      <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.counts}</td>
                      <td className="py-3 px-4 text-slate-600">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Common include costs */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How nested includes reduce your lookup budget fast</h2>
          <p className={proseP}>
            Adding just three SaaS marketing and helpdesk platforms often exceeds 10 lookups because each vendor include can call nested sub-domains behind the scenes. Here is how many lookups common business senders cost:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Email Platform</th>
                    <th className="py-2.5 px-4">Published Include</th>
                    <th className="py-2.5 px-4 text-right whitespace-nowrap">DNS Lookups Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {VENDOR_COSTS.map((v) => (
                    <tr key={v.vendor}>
                      <td className="py-3 px-4 font-bold text-slate-900">{v.vendor}</td>
                      <td className="py-3 px-4 font-mono text-indigo-700 break-all">{v.include}</td>
                      <td className="py-3 px-4 text-right text-slate-700 whitespace-nowrap">{v.lookups}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            Also check whether an app actually needs to be listed on your root domain. Services like Mailchimp, Klaviyo, and Postmark use their own Return-Path domains by default, meaning an include on your main domain wastes lookups for nothing.
          </p>
        </div>

        {/* UDP size & 255-char chunks */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Managing the 450-byte UDP limit and 255-character DNS chunks</h2>
          <p className={proseP}>
            SPF flattening trades DNS lookups for character length. Replacing many third-party services with raw <span className={code}>ip4:</span> and <span className={code}>ip6:</span> CIDR blocks can make the TXT string large. Two strict DNS rules apply:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>450-Byte UDP Packet Target (RFC 7208 Section 3.4)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Standard unextended DNS answers over UDP top out at 512 bytes. RFC 7208 advises keeping SPF TXT strings near or below 450 bytes so the full DNS packet (including headers) fits in a single UDP response. When the byte meter turns amber or red, use selective flattening or move marketing mail onto a subdomain like <span className={code}>mail.yourdomain.com</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>255-Character String Chunking (RFC 1035)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                DNS TXT records are made of one or more character strings, each capped at 255 octets. When an SPF flattened record exceeds 255 bytes, our tool splits it cleanly between terms into adjacent quoted strings like:
              </p>
              <pre className="p-3 bg-slate-900 text-emerald-300 rounded-lg font-mono text-xs overflow-x-auto mt-2">
                {`"v=spf1 ip4:198.51.100.0/24 ip4:203.0.113.0/24 " "include:_spf.google.com ~all"`}
              </pre>
            </div>
          </div>
        </div>

        {/* Selective Flattening vs Static */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Selective SPF flattening vs full static SPF flattening</h2>
          <p className={proseP}>
            Full static flattening removes every single <span className={code}>include:</span> and writes out dozens of hardcoded IP ranges. While that gets you to zero lookups, major cloud email hosts like Google Workspace and Microsoft 365 periodically add or swap sending server ranges across global data centers.
          </p>
          <p className={proseP}>
            <strong>Selective SPF flattening</strong> gives you the safest balance. Leave high-churn cloud suites as dynamic includes (costing only 1 or 2 lookups out of your 10 budget), and flatten high-lookup third-party tools like Freshdesk (7 lookups) or fixed-IP transactional gateways. Our tool deduplicates overlapping subnets via bitwise containment so your final flattened string is as compact as possible.
          </p>
        </div>

        {/* Common mistakes */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Common SPF flattening mistakes to avoid</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li><strong>Turning negative terms into passing IPs:</strong> Only default <span className={code}>+</span> pass terms should be expanded into allowed IPs. Our SPF flattening tool preserves <span className={code}>-</span>, <span className={code}>~</span>, and <span className={code}>?</span> terms intact so blocked IPs never accidentally pass.</li>
            <li><strong>Dropping the terminal policy on redirect records:</strong> If your original record used <span className={code}>redirect=</span> instead of <span className={code}>~all</span> or <span className={code}>-all</span>, our flattener promotes the resolved target terminal qualifier cleanly.</li>
            <li><strong>Using subnets or dedicated servers without checking blacklists:</strong> After flattening custom mail server ranges, verify those public IPs have clean DNSBL scores using our <Link href="/ip-reputation-checker" className={linkCls}>IP Reputation Checker</Link>.</li>
            <li><strong>Sending outreach on unverified email addresses:</strong> Fixing SPF keeps authentication intact, but bouncing on bad mailboxes still wrecks sender score. Clean prospect lists with <Link href="/email-checker" className={linkCls}>Giggal Email Verification</Link>.</li>
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
        headline="Protect your sender reputation before sending outreach"
        supporting="Clean your lists with 98.5% accuracy, catch-all resolution, and 1,000 free credits."
        buttonText="Start Verifying for Free"
      />

      <Footer />
    </main>
  )
}
