import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import IpReputationCheckerTool from './IpReputationCheckerTool'

const SITE = 'https://giggal.ai'
const PATH = '/ip-reputation-checker'
const CANONICAL = `${SITE}${PATH}`

export const ipReputationCheckerMetadata: Metadata = {
  title: { absolute: 'IP Reputation Checker: Free IP Blacklist Check & DNSBL | Giggal.ai' },
  description:
    'Free IP reputation checker and mail IP blacklist check. Scan sending IPs across Spamhaus ZEN, Barracuda, SpamCop, and Mailspike DNSBLs, and verify FCrDNS compliance.',
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'IP Reputation Checker: Free Mail IP Blacklist Check & FCrDNS Audit',
    description:
      'Run a free IP reputation check across authoritative DNSBL blacklists and verify Forward Confirmed Reverse DNS (FCrDNS) in seconds.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Free Mail IP Reputation Checker' }],
  },
}

const FAQS: FaqItem[] = [
  {
    q: 'How does an IP reputation checker test an email server?',
    a: 'An IP reputation checker reverses your IPv4 octets (or IPv6 nibbles), appends real-time DNSBL blacklist zones such as zen.spamhaus.org and b.barracudacentral.org, and queries authoritative DNS from our Node server. It also runs Forward Confirmed Reverse DNS (FCrDNS) to ensure PTR hostnames resolve back to your sending IP.',
  },
  {
    q: 'What is a DNSBL IP blacklist check?',
    a: 'A DNSBL (DNS-based Blackhole List) publishes IP addresses reported for spam, open relays, malware botnets, or policy restrictions. Receiving mail servers run an IP blacklist check over DNS during the port 25 SMTP handshake before accepting your message.',
  },
  {
    q: 'Why does Spamhaus sometimes return 127.255.255.254 on online tools?',
    a: 'Spamhaus blocks queries coming through open public resolvers such as Google 8.8.8.8 or Cloudflare 1.1.1.1 by returning RFC error codes in the 127.255.255.x range. Our IP reputation checker runs queries via server-side Node DNS and labels any resolver policy response transparently as Unverified instead of faking a Clean result.',
  },
  {
    q: 'What is Forward Confirmed Reverse DNS (FCrDNS) and why do Gmail and Yahoo require it?',
    a: 'FCrDNS verifies that your IP resolves to a PTR hostname and that hostname points back to the same IP via an A or AAAA record. Google and Yahoo require valid FCrDNS (RFC 1912) for bulk senders to block unverified residential or spoofed relay servers.',
  },
  {
    q: 'What is the difference between Spamhaus SBL, XBL, and PBL?',
    a: 'SBL (127.0.0.2) flags direct spam sources. XBL (127.0.0.4) flags infected hosts or open proxies. PBL (127.0.0.10 or 127.0.0.11) marks dynamic consumer IP ranges that should route outbound mail through an authenticated SMTP relay rather than sending direct to MX.',
  },
  {
    q: 'Does this IP reputation check show private Google or Microsoft sender scores?',
    a: 'No public IP blacklist check can read private mailbox provider reputation scores. Google Postmaster Tools and Microsoft SNDS score sending IPs internally based on user spam complaints and authentication. Public DNSBL checks and Postmaster dashboards must both stay healthy.',
  },
  {
    q: 'Why are private and documentation IPs blocked in the IP reputation checker?',
    a: 'Private RFC 1918 networks (10.0.0.0/8, 192.168.0.0/16), loopback addresses (127.0.0.1), CGNAT (100.64.0.0/10), and RFC 5737 test ranges (198.51.100.0/24) are bogons that cannot route mail across the public internet. Always enter the public gateway IP of your SMTP server.',
  },
  {
    q: 'How long does delisting take after an IP blacklist check shows a hit?',
    a: 'Once you fix the root problem (such as compromised credentials or unverified spam-trap lists), automated lists like SpamCop expire listings within 24 to 48 hours of zero reports. Manual lists like Spamhaus SBL and Barracuda usually process verified delisting requests in a few hours to two business days.',
  },
]

const DNSBL_MATRIX = [
  { zone: 'zen.spamhaus.org', name: 'Spamhaus ZEN', focus: 'SBL (Spam), XBL (Exploits), PBL (Policy)', codes: '127.0.0.2, 127.0.0.3, 127.0.0.4-7, 127.0.0.10-11' },
  { zone: 'b.barracudacentral.org', name: 'Barracuda BRBL', focus: 'Enterprise mail appliance spam rejections', codes: '127.0.0.2 (Listed)' },
  { zone: 'bl.spamcop.net', name: 'SpamCop', focus: 'Recent spam trap hits and user abuse reports', codes: '127.0.0.2 (48h sliding list)' },
  { zone: 'dnsbl-1.uceprotect.net', name: 'UCEPROTECT L1', focus: 'Direct single-IP spam activity within 7 days', codes: '127.0.0.2 (Single IP only)' },
  { zone: 'bl.mailspike.net', name: 'Mailspike BL', focus: 'Botnet attacks and persistent bulk spam', codes: '127.0.0.2, 127.0.0.10-12 (Bad)' },
  { zone: 'rep.mailspike.net', name: 'Mailspike Rep', focus: 'Sender reputation tier scoring', codes: '127.0.0.17-20 (Good H2-H5)' },
  { zone: 'psbl.surriel.com', name: 'PSBL', focus: 'Passive low-false-positive spam traps', codes: '127.0.0.2 (Self-removal available)' },
  { zone: 'truncate.gbudb.net', name: 'GBUdb Truncate', focus: 'Collaborative high-risk SMTP abuse feeds', codes: '127.0.0.2 (Bad footprint)' },
]

export default function IpReputationCheckerPage() {
  const jsonLds = [
    breadcrumbLd('IP Reputation Checker', PATH),
    faqPageLd(FAQS),
    toolWebApplicationLd({
      name: 'Free Mail IP Reputation Checker and IP Blacklist Check',
      url: CANONICAL,
      description:
        'Free IP reputation checker and DNSBL IP blacklist check. Verify FCrDNS compliance, decode Spamhaus ZEN, Barracuda, SpamCop, and Mailspike codes, and get delisting steps.',
      featureList: [
        'Server-side real-time DNSBL queries across 8 active blacklist and reputation zones',
        'Forward Confirmed Reverse DNS (FCrDNS) verification matching PTR to A/AAAA records',
        'Accurate Spamhaus SBL, CSS, XBL, PBL, and resolver-policy (127.255.255.x) decoding',
        'Automatic rejection of private, CGNAT, loopback, and documentation bogon IP ranges',
        'Direct delisting links and step-by-step remediation checklists',
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
          Free Deliverability Tool · Live DNSBL & FCrDNS Check
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Mail IP Reputation Checker
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Run an instant IP reputation check and IP blacklist check on any sending mail server. Scan major DNSBL blocklists, verify Forward Confirmed Reverse DNS (FCrDNS), and find direct delisting forms when an IP is flagged.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <IpReputationCheckerTool />
      </section>

      {/* READING GUIDE */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        {/* How to run IP check */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to run an IP reputation check</h2>
          <p className={proseP}>
            Checking whether your outbound SMTP relay sits on a mail blocklist takes seconds with this free IP reputation checker:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Find your mail gateway public IPv4 or IPv6 address (you can extract relay server IPs from any message using our <Link href="/email-header-analyzer" className={linkCls}>Email Header Analyzer</Link>).</li>
            <li>Paste the public IP into the box above and click <strong>Inspect IP</strong>.</li>
            <li>Check the top <strong>Reputation Score</strong> card and <strong>DNSBL Blacklists</strong> summary count.</li>
            <li>Verify that <strong>FCrDNS Compliance</strong> reads green, confirming your reverse PTR record resolves back to the exact IP address.</li>
            <li>If any blocklist marks <strong>Listed</strong>, click its <strong>Delist Form</strong> link directly inside the matrix table after fixing the sending issue.</li>
          </ol>
        </div>

        {/* Why IP Reputation & DNSBLs matter */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>What is IP reputation and why DNSBL blacklists block mail</h2>
          <p className={proseP}>
            <Link href="/glossary/ip-reputation" className={linkCls}>IP reputation</Link> measures how trustworthy an outbound mail server looks to receiving email gateways. Before a receiving Mail Transfer Agent accepts an SMTP connection on port 25, it queries real-time DNS-based Blackhole Lists (DNSBLs) and checks reverse DNS ownership.
          </p>
          <p className={proseP}>
            If your IP appears on a Tier-1 <Link href="/glossary/email-blacklist" className={linkCls}>email blacklist</Link> such as Spamhaus SBL or Barracuda Central, receiving gateways drop your message with an SMTP <span className={code}>550 5.7.1</span> permanent bounce before spam filters even inspect your subject line. See our guide on <Link href="/blog/how-to-check-if-email-domain-is-blacklisted" className={linkCls}>how to check if your domain or IP is blacklisted</Link> for more background.
          </p>
        </div>

        {/* DNSBL Matrix */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>DNSBL blacklists verified by this IP blacklist check</h2>
          <p className={proseP}>
            Our IP reputation checker queries active, maintained DNSBL zones over direct server DNS and strips retired zones like SORBS so you get trustworthy answers:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Blacklist Name</th>
                    <th className="py-2.5 px-4">Zone Host</th>
                    <th className="py-2.5 px-4">What It Tracks</th>
                    <th className="py-2.5 px-4">Return Codes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {DNSBL_MATRIX.map((row) => (
                    <tr key={row.zone} className="align-top">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">{row.name}</td>
                      <td className="py-3 px-4 font-mono text-xs text-indigo-700 whitespace-nowrap">{row.zone}</td>
                      <td className="py-3 px-4 text-slate-600">{row.focus}</td>
                      <td className="py-3 px-4 font-mono text-xs text-slate-500">{row.codes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Spamhaus codes & Mailspike */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to decode Spamhaus and Mailspike return codes</h2>
          <p className={proseP}>
            A DNSBL returns an <span className={code}>A</span> record inside the <span className={code}>127.0.0.0/8</span> loopback range to communicate the exact reason an IP was returned. Two traps fool inexperienced IP blacklist check tools:
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Spamhaus SBL vs PBL vs Resolver Errors (127.255.255.x)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                A hit at <span className={code}>127.0.0.2</span> (SBL) or <span className={code}>127.0.0.4</span> (XBL) is a real abuse or malware listing. By contrast, <span className={code}>127.0.0.10</span> or <span className={code}>127.0.0.11</span> (PBL) only flags residential ISP IP blocks that are not meant to send direct SMTP mail. Codes starting with <span className={code}>127.255.255.x</span> mean the DNS query resolver was blocked; our tool flags those transparently as <strong>Unverified</strong>.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className={subTitle}>Mailspike Reputation Tier Accuracy</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                When querying <span className={code}>rep.mailspike.net</span>, responses between <span className={code}>127.0.0.17</span> and <span className={code}>127.0.0.20</span> confirm <strong>Good Reputation</strong> senders, whereas <span className={code}>127.0.0.10</span> through <span className={code}>127.0.0.12</span> identify poor reputation spam sources.
              </p>
            </div>
          </div>
        </div>

        {/* FCrDNS */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>Forward Confirmed Reverse DNS (FCrDNS) for 2024 compliance</h2>
          <p className={proseP}>
            Google and Yahoo require all bulk senders to publish valid forward and reverse DNS records matching <a href="https://www.rfc-editor.org/rfc/rfc1912" target="_blank" rel="noopener noreferrer" className={linkCls}>RFC 1912</a>. A valid <Link href="/glossary/ptr-record" className={linkCls}>PTR record</Link> points your sending IP to a branded mail hostname (such as <span className={code}>mail.example.com</span>), and an <span className={code}>A</span> record on that hostname points straight back to the same IP.
          </p>
          <p className={proseP}>
            If FCrDNS fails or points to a generic cloud hostname (like <span className={code}>ec2-203-0-113-5.compute.amazonaws.com</span>), major mailbox providers treat your outbound IP as unconfigured and throttle inbox placement.
          </p>
        </div>

        {/* Delisting steps */}
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to delist an IP address and prevent future listings</h2>
          <p className={proseP}>
            Submitting a delist ticket before fixing what caused the block fails automated checks and risks longer penalties. Follow these steps first:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li><strong>Stop outbound abuse immediately:</strong> Check Postfix/Exim logs or SMTP queues for compromised accounts, weak app passwords, or exploited website contact forms.</li>
            <li><strong>Audit DNS authentication:</strong> Confirm your domain passes <Link href="/spf-checker" className={linkCls}>SPF</Link>, <Link href="/dkim-checker" className={linkCls}>DKIM</Link>, and <Link href="/dmarc-checker" className={linkCls}>DMARC</Link> with aligned identifiers.</li>
            <li><strong>Scrub invalid and risky emails before resuming outreach:</strong> Hard bounces and pristine spam traps drive most cold-email DNSBL hits. Clean lists with <Link href="/role-account-checker" className={linkCls}>Role Account Checker</Link> and <Link href="/email-checker" className={linkCls}>Giggal Email Verification</Link> before sending again.</li>
            <li><strong>Request removal:</strong> Click the official delist link inside our matrix table, explain the fix clearly, and monitor your IP reputation check weekly.</li>
          </ol>
          <p className={proseP}>
            Also keep tabs on <strong>Google Postmaster Tools</strong> and <strong>Microsoft SNDS</strong>: those private dashboards track Gmail and Outlook complaints inside user inboxes that public DNSBL blacklists do not expose.
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
        headline="Keep your sending IPs off blacklists with clean prospect lists"
        supporting="Clean your lists with 98.5% accuracy, catch-all resolution, and 1,000 free credits."
        buttonText="Start Verifying for Free"
      />

      <Footer />
    </main>
  )
}
