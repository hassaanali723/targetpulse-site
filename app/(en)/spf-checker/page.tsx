import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import SpfCheckerTool from '@/components/tools/SpfChecker/SpfCheckerTool'
import { SPF_SENDERS, SPF_NOT_NEEDED } from '@/lib/tools/spfSenders'

const CANONICAL = '/spf-checker'
const TITLE = 'SPF Checker: Free SPF Record Check and Generator | Giggal.ai'
const DESC =
  'Check any domain’s SPF record for free. See what each part means, count DNS lookups against the limit of 10, find errors, or create a new SPF record.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/spf-checker-og-v2.webp', width: 1200, height: 630, alt: 'Free SPF Record Checker and Generator' }],
    title: 'SPF Checker: Free SPF Record Check and Generator',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPF Checker: Free SPF Record Check and Generator',
    description: DESC,
    images: ['/tools/spf-checker-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is an SPF record?',
    a: 'It’s a TXT record in your domain’s DNS that lists the servers allowed to send email for the domain. Receiving servers read it to decide whether a message really came from one of your servers. SPF stands for Sender Policy Framework and is defined in RFC 7208.',
  },
  {
    q: 'How do I check my SPF record?',
    a: 'Type your domain into the SPF checker at the top of this page. From a terminal, nslookup -type=txt example.com works on Windows, and dig txt example.com works on macOS and Linux. Look for the TXT record that starts with v=spf1.',
  },
  {
    q: 'Can a domain have two SPF records?',
    a: 'No. RFC 7208 allows one SPF record per domain name. With two, receivers return a permanent error and SPF fails for all your mail. Merge both into one record. Other TXT records, such as site verification codes, can stay.',
  },
  {
    q: 'What does SPF permerror mean?',
    a: 'It means the receiver couldn’t read your SPF record, so the check fails. The usual causes are two SPF records, more than 10 DNS lookups, or an include of a domain with no SPF record. A typing mistake can also cause it. The checker above names the cause.',
  },
  {
    q: 'What is the difference between ~all and -all?',
    a: 'With ~all, mail from servers you didn’t list gets a soft fail, and receivers usually accept it with more suspicion. With -all, it gets a fail, and some receivers reject it. Google recommends ~all. Microsoft recommends -all once DKIM and DMARC are set up.',
  },
  {
    q: 'Do subdomains need their own SPF record?',
    a: 'Yes, if they send email. A subdomain doesn’t use the SPF record of its parent domain. If news.example.com sends mail, it needs its own record. If it never sends mail, give it v=spf1 -all.',
  },
  {
    q: 'How long does an SPF record change take?',
    a: 'Up to the TTL of the old record. Resolvers that cached it keep the old answer until the TTL runs out, so a TTL of 3600 means up to an hour. Google says changes can take up to 48 hours, but most show up much sooner.',
  },
  {
    q: 'Do I need SPF if I already have DKIM?',
    a: 'It’s safer to have both. Gmail and Yahoo accept SPF or DKIM from small senders, but they require both from bulk senders. DMARC passes when either one passes and matches your From domain, so having both gives you a backup.',
  },
  {
    q: 'Does SPF stop email spoofing?',
    a: 'Not on its own. SPF checks the bounce address (the Return-Path), not the From address people see. A spammer can pass SPF with their own domain and still show your name in From. DMARC closes that gap by requiring the two domains to match.',
  },
]

// Each part of a record. Lookups per RFC 7208 section 4.6.4.
const PARTS: { part: string; does: string; lookup: string }[] = [
  { part: 'v=spf1', does: 'Marks the TXT record as SPF. It must come first, written exactly like this.', lookup: 'No' },
  { part: 'ip4:192.0.2.10', does: 'Allows one IPv4 address, or a range like 192.0.2.0/24.', lookup: 'No' },
  { part: 'ip6:2001:db8::/32', does: 'Allows one IPv6 address or range.', lookup: 'No' },
  { part: 'a', does: 'Allows the IP addresses of the domain itself, or of a domain you name after a colon.', lookup: 'Yes' },
  { part: 'mx', does: 'Allows the servers in the domain’s MX records, the ones that receive its mail.', lookup: 'Yes' },
  { part: 'include:_spf.google.com', does: 'Allows every server that another domain’s SPF record allows. This is how you add a service.', lookup: 'Yes, plus its own' },
  { part: 'exists:%{i}.example.com', does: 'Matches when a DNS lookup finds an address. Large senders use it with macros.', lookup: 'Yes' },
  { part: 'ptr', does: 'Matches by reverse DNS. RFC 7208 says not to use it, because it is slow and unreliable.', lookup: 'Yes' },
  { part: '~all or -all', does: 'Decides what happens to every server you didn’t list. It goes at the end.', lookup: 'No' },
  { part: 'redirect=example.net', does: 'Uses another domain’s SPF record instead of this one. Ignored when the record has all.', lookup: 'Yes' },
]

// Results a receiver can reach (RFC 7208 section 2.6).
const SPF_RESULTS: { result: string; meaning: string }[] = [
  { result: 'pass', meaning: 'The sending server is allowed.' },
  { result: 'fail', meaning: 'The server is not allowed (-all). Receivers may reject the message.' },
  { result: 'softfail', meaning: 'The server is probably not allowed (~all). RFC 7208 says receivers shouldn’t reject on this alone.' },
  { result: 'neutral', meaning: 'The record says nothing about this server (?all). It counts the same as having no record.' },
  { result: 'none', meaning: 'The domain has no SPF record.' },
  { result: 'temperror', meaning: 'A DNS lookup failed for a moment. The sender may retry later.' },
  { result: 'permerror', meaning: 'The record is broken and can’t be read. Only a fix in DNS helps.' },
]

// What the tool shows, in the order it checks.
const RESULTS: { result: string; meaning: string; action: string }[] = [
  {
    result: 'Valid SPF record',
    meaning: 'One record, readable, within 10 lookups, ending in ~all or -all.',
    action: 'Nothing. Check again after you add a new service that sends mail for you.',
  },
  {
    result: 'Working SPF record with warnings',
    meaning: 'Receivers can use it, but something weakens it, such as 9 or 10 lookups, no all at the end, or ptr.',
    action: 'Fix the warnings listed under the record. They often turn into errors when you add one more service.',
  },
  {
    result: 'SPF record is broken',
    meaning: 'Receivers get a permerror, so SPF fails for all mail from the domain.',
    action: 'Fix the errors listed. The most common are two records and more than 10 lookups.',
  },
  {
    result: 'SPF record doesn’t protect the domain',
    meaning: 'The record ends in +all, or includes a record that does, so every server on the internet passes.',
    action: 'Change +all to ~all or -all.',
  },
  {
    result: 'No SPF record',
    meaning: 'The domain publishes no TXT record that starts with v=spf1.',
    action: 'Create one with the Create tab. A domain that never sends mail should get v=spf1 -all.',
  },
  {
    result: 'Domain doesn’t exist',
    meaning: 'DNS has no record of the domain at all.',
    action: 'Check the spelling, and check that the domain is registered.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const subTitle = 'text-xl md:text-2xl font-bold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'
const code = 'font-mono text-[0.9em] font-semibold text-slate-900 bg-slate-100 px-1 py-0.5 rounded break-words'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

export default function SpfCheckerPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('SPF Record Checker', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free SPF Record Checker and Generator',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Check the SPF record of any domain',
            'Explains each part of the record in plain English',
            'Counts DNS lookups against the limit of 10, including nested includes',
            'Flags multiple records, void lookups, +all, ptr and syntax errors',
            'Creates a new SPF record from a list of common email services',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          SPF Record Checker and Generator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Check the SPF record of any domain, or create a new one. The SPF checker explains every part of the record and counts its DNS lookups against the limit of 10.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <SpfCheckerTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to check an SPF record</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Type a domain into the box above. A full email address works too. The tool keeps only the domain.</li>
            <li>Click Check SPF record. The SPF record check reads the live record from public DNS, the same record a receiving server reads.</li>
            <li>Read the summary first. It tells you whether the record is valid, has warnings, or is broken.</li>
            <li>Then read the list of problems, if there are any. Each one says what to change.</li>
            <li>Below that, each part of the record is explained, with the DNS lookups it costs. Open an include to see what the service behind it allows.</li>
          </ol>
          <p className={proseP}>
            The link in your address bar runs the same SPF check again, so you can send it to a colleague or your DNS host. One limit: a receiver checks SPF against the IP address of the server that sent a message. This SPF analyzer has no message to look at, so it checks the record itself. It can’t evaluate parts built from SPF macros, which change for every sending server.
          </p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/spf-checker-v2.webp"
            alt="Illustration of an SPF record split into its parts, with a counter showing DNS lookups used out of 10."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What is an SPF record?</h2>
          <p className={proseP}>
            An SPF record is a TXT record in a domain’s DNS. It lists the servers that may send email for that domain. SPF stands for Sender Policy Framework, and the rules are in{' '}
            <a href="https://www.rfc-editor.org/rfc/rfc7208" className={link} {...ext}>
              RFC 7208
            </a>
            . A domain that uses Google Workspace often has a record like this one:
          </p>
          <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto">v=spf1 include:_spf.google.com ~all</pre>
          <p className={proseP}>
            <span className={code}>v=spf1</span> marks it as an SPF record. <span className={code}>include:_spf.google.com</span> allows every server in Google’s own list. <span className={code}>~all</span> tells receivers to treat mail from any other server with suspicion.
          </p>
          <p className={proseP}>
            When a message arrives, the receiving server takes the domain from the bounce address, called the Return-Path. It reads that domain’s SPF record and checks whether the sending server’s IP address is on the list. SPF does not look at the From address you see in your inbox. That is why it works together with DKIM and DMARC. For how the three fit, see{' '}
            <Link href="/blog/spf-dkim-dmarc-explained" className={link}>
              SPF, DKIM and DMARC explained
            </Link>
            .
          </p>
          <p className={proseP}>
            Since February 2024,{' '}
            <a href="https://support.google.com/a/answer/81126" className={link} {...ext}>
              Gmail requires SPF or DKIM
            </a>{' '}
            from every sender, and both from bulk senders. Yahoo has the same rules.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What each part of an SPF record means</h2>
          <p className={proseP}>
            An SPF record is a list of terms separated by spaces. Receivers read them from left to right and stop at the first one that matches the sending server.
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Part</th>
                    <th className="py-2.5 px-4">What it does</th>
                    <th className="py-2.5 px-4 whitespace-nowrap">DNS lookup</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so the description gets the full width. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {PARTS.map((p) => (
                    <tr key={p.part} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 pb-1 sm:pb-3 px-4 font-mono font-semibold text-slate-900 sm:whitespace-nowrap">{p.part}</td>
                      <td className="block sm:table-cell py-1 sm:py-3 px-4 text-slate-600">{p.does}</td>
                      <td className="block sm:table-cell pt-1 pb-3 sm:pt-3 px-4 text-slate-600 sm:whitespace-nowrap">
                        <span className="sm:hidden font-bold text-slate-700">DNS lookup: </span>
                        {p.lookup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            Any part can start with a qualifier that sets the result when it matches. <span className={code}>+</span> means pass and is the default, so nobody writes it. <span className={code}>-</span> means fail, <span className={code}>~</span> means soft fail, and <span className={code}>?</span> means neutral. That is why the same word, all, can end a record as <span className={code}>-all</span>, <span className={code}>~all</span> or <span className={code}>?all</span>.
          </p>
          <p className={proseP}>
            Names are not case-sensitive, so <span className={code}>Include:</span> works as well as <span className={code}>include:</span>. RFC 7208 recommends ending every record with all or a redirect. Without either, servers you didn’t list get a neutral result.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>The 10 DNS lookup limit</h2>
          <p className={proseP}>
            Every include, a, mx, ptr, exists and redirect makes the receiver run a DNS lookup. RFC 7208 allows 10 in total. Lookups inside an include count too, so one include can cost several. ip4, ip6 and all cost nothing. When a record needs more than 10, receivers stop and return a permerror, and SPF fails.
          </p>
          <p className={proseP}>
            The limit is easy to reach. We measured what common includes cost against live DNS: Google Workspace 1, Microsoft 365 1, Salesforce 2, Mailgun 5 and Freshdesk 7. A company on Google Workspace that adds Mailgun and Freshdesk already needs 13 lookups. A{' '}
            <a href="https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq" className={link} {...ext}>
              2024 study of SPF records
            </a>{' '}
            in .com, .net, .org and .se found that 6.5% needed more than 10 lookups. Includes of just two hosting providers’ records caused 83.7% of those cases.
          </p>
          <p className={proseP}>
            Costs also change. Google’s include cost 4 lookups until December 2025, when{' '}
            <a href="https://www.uriports.com/blog/google-simplifies-its-spf-record/" className={link} {...ext}>
              Google replaced its nested includes with a flat list
            </a>
            . Some SPF guides and generators still say 4. The checker above counts the real number every time you run it.
          </p>
          <p className={proseP}>
            Going over the limit doesn’t always break every message.{' '}
            <a href="https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure" className={link} {...ext}>
              Microsoft points out
            </a>{' '}
            that receivers stop at the first match. Mail from a server listed early can still pass, while mail from a server listed late fails. That makes the problem look random, so count the full record.
          </p>
          <p className={proseP}>
            There is a second limit. A lookup that finds nothing is a void lookup, for example an include of a domain that no longer exists. RFC 7208 says receivers should stop after 2 of these.
          </p>

          <h3 className={subTitle}>How to get under 10 lookups</h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Remove includes for services you no longer use.</li>
            <li>Remove includes a service no longer asks for. Mailchimp, Postmark, Brevo and Klaviyo don’t need one on your main domain, and SendGrid and Amazon SES put theirs on a subdomain. The list is further down.</li>
            <li>List your own servers with ip4 and ip6 instead of a or mx. RFC 7208 recommends this order, and IP addresses cost no lookups.</li>
            <li>Send some mail from a subdomain, such as news.example.com. Each subdomain has its own record and its own 10 lookups.</li>
          </ol>
          <p className={proseP}>
            Some services offer SPF flattening, which replaces includes with the IP addresses behind them. It saves lookups, but providers change their addresses, and a flattened record doesn’t follow. Microsoft advises flattening only services with stable, documented IP ranges, never Microsoft 365 itself, and checking the result at least every quarter.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>SPF includes for Google Workspace, Microsoft 365 and other services</h2>
          <p className={proseP}>
            These are the include values from each service’s setup guide, with the DNS lookups each one costs. We measured the costs against live DNS on 12 October 2026. When you set up a service, copy the value from its own guide, because some depend on your region or account.
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Service</th>
                    <th className="py-2.5 px-4">Include</th>
                    <th className="py-2.5 px-4 text-right">Lookups</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so long include values get the full width. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {SPF_SENDERS.map((x) => (
                    <tr key={x.include} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold text-slate-900">
                        {x.name}
                        <span className="sm:hidden font-medium text-slate-500">
                          {' '}
                          · {x.lookups} lookup{x.lookups === 1 ? '' : 's'}
                        </span>
                      </td>
                      <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 font-mono text-indigo-600 font-semibold break-all sm:break-normal">
                        include:{x.include}
                      </td>
                      <td className="hidden sm:table-cell py-3 px-4 text-slate-600 text-right">{x.lookups}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            HubSpot gives every account its own include, ending in hubspotemail.net. Copy it from your HubSpot email settings. It costs 1 lookup.
          </p>

          <h3 className={subTitle}>Services that usually don’t need an include</h3>
          <p className={proseP}>
            SPF is checked against the bounce address, not the From address. Many sending services now use a bounce address of their own, or a subdomain of yours. An include for them on your main domain does nothing except use up lookups.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            {SPF_NOT_NEEDED.map((u) => (
              <li key={u.name}>
                <span className="font-bold text-slate-900">{u.name}.</span> {u.reason}
              </li>
            ))}
          </ul>
          <p className={proseP}>
            The checker flags these includes when it finds them in your record.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How to create an SPF record</h2>
          <p className={proseP}>
            Use the Create tab above to generate an SPF record. Tick the services that send your mail, and the SPF record maker writes the record and counts its lookups. If your domain already has a record, load it first, so you add to it instead of replacing it. These are the steps behind it:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>List every service that sends email as your domain. Think beyond your mailbox provider: newsletters, your CRM, the help desk, billing, website forms. DMARC reports show senders you forgot.</li>
            <li>Find the include for each one in its setup guide, or tick it in the tool. For your own mail servers, use their IP addresses.</li>
            <li>Choose the ending: ~all or -all. The next section explains the difference.</li>
            <li>Publish it as one TXT record on the domain itself. Most DNS hosts call that name @. If a record starting with v=spf1 already exists, edit it instead of adding a second one.</li>
            <li>Wait a few minutes and check the domain again with the SPF checker.</li>
          </ol>
          <p className={proseP}>
            Each name that sends mail needs its own record, because subdomains don’t use the parent’s record. A domain or subdomain that never sends mail should still get one: <span className={code}>v=spf1 -all</span>. RFC 7208 calls this a well-established best practice. It stops others from sending mail that passes as that name. The{' '}
            <a href="https://www.ncsc.gov.uk/blog-post/protecting-parked-domains" className={link} {...ext}>
              UK NCSC
            </a>{' '}
            suggests adding a DMARC record with p=reject and a null MX record to such domains too.
          </p>
          <p className={proseP}>
            A record longer than 255 characters has to be split into several strings within the same TXT record. Receivers join the strings without spaces, so put the space inside a string, not between them. Check how your DNS host handles long values.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>~all or -all: which ending to use</h2>
          <p className={proseP}>The big providers don’t agree, and each has a reason.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>
              <a href="https://knowledge.workspace.google.com/admin/security/set-up-spf" className={link} {...ext}>
                Google
              </a>{' '}
              recommends ~all.
            </li>
            <li>
              <a href="https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf" className={link} {...ext}>
                M3AAWG
              </a>
              , an industry group whose members include large mailbox providers and senders, says records should end in ~all. It also asks receivers not to reject on an SPF fail until DMARC has run.
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure" className={link} {...ext}>
                Microsoft
              </a>{' '}
              recommends -all, as long as DKIM and DMARC are set up too.
            </li>
          </ul>
          <p className={proseP}>
            The risk with -all is that some receivers reject the message during delivery, before DMARC is checked.{' '}
            <a href="https://www.rfc-editor.org/rfc/rfc9989" className={link} {...ext}>
              RFC 9989
            </a>
            , the 2026 DMARC standard, notes that such mail never appears in your DMARC reports. That makes problems harder to find.
          </p>
          <p className={proseP}>
            In practice, ~all is the safer choice for a domain that sends mail, especially while you are still finding all your senders. If you have DMARC at quarantine or reject, DMARC decides what happens to failing mail anyway. Use -all on domains that send no mail at all. Never use +all, which lets every server pass, and avoid ?all, which counts the same as having no record.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What your SPF check result means</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                  <tr>
                    <th className="py-2.5 px-4">Result</th>
                    <th className="py-2.5 px-4">What it means</th>
                    <th className="py-2.5 px-4">What to do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {RESULTS.map((r) => (
                    <tr key={r.result} className="align-top">
                      <td className="py-3 px-4 font-bold text-slate-900">{r.result}</td>
                      <td className="py-3 px-4 text-slate-600">{r.meaning}</td>
                      <td className="py-3 px-4 text-slate-600">{r.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            Receiving servers use their own words for the outcome of an SPF check. You see them in message headers, as in spf=pass or spf=softfail, and in DMARC reports:
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {SPF_RESULTS.map((r) => (
                  <tr key={r.result} className="align-top">
                    <td className="py-2.5 px-4 font-mono font-bold text-slate-900 w-28">{r.result}</td>
                    <td className="py-2.5 px-4 text-slate-600">{r.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Common SPF record errors and how to fix them</h2>
          <p className={proseP}>
            A{' '}
            <a href="https://arxiv.org/abs/2502.08240" className={link} {...ext}>
              2023 scan of 12 million popular domains
            </a>{' '}
            found SPF on 56.5% of them, and errors in 2.9% of the SPF records. The most common error was an include or redirect pointing to a name with no SPF record. Too many lookups came second.
          </p>

          <h3 className={subTitle}>Two SPF records on one domain</h3>
          <p className={proseP}>
            This often happens when a new service’s setup guide says “add this TXT record” and someone adds it next to the old one. Two records cause a permerror. Merge them into one. Start with one v=spf1, list every include and IP address, and end with one all.
          </p>

          <h3 className={subTitle}>An include that points nowhere</h3>
          <p className={proseP}>
            If an include points to a domain with no SPF record, the whole record fails with a permerror. It can be a typo, or a service that shut down or changed its include. Remove it or replace it with the current value from the service.
          </p>

          <h3 className={subTitle}>+all, ?all or no all at the end</h3>
          <p className={proseP}>
            <span className={code}>+all</span> allows every server on the internet, so the record protects nothing. <span className={code}>?all</span>, or no all at all, gives a neutral result, which receivers treat like no record. End the record with ~all or -all.
          </p>

          <h3 className={subTitle}>ptr in the record</h3>
          <p className={proseP}>
            RFC 7208 says ptr should not be used. It is slow, it costs a lookup, and it is less reliable than other mechanisms when DNS has problems. Replace it with ip4 and ip6 entries for the servers it was meant to cover.
          </p>

          <h3 className={subTitle}>Typing mistakes</h3>
          <p className={proseP}>
            A space after a colon, an IPv4 address with a missing part, or a word SPF doesn’t know all cause a permerror. One mistake is quieter: <span className={code}>include=example.com</span> with an equals sign is read as an unknown setting and skipped, so that service is never allowed. The checker flags all of these.
          </p>

          <h3 className={subTitle}>Three details SPF guides often get wrong</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>“An SPF record can’t contain capital letters.” RFC 7208 says names are not case-sensitive.</li>
            <li>“An SPF record can be at most 255 characters.” The 255 limit applies to each string. A longer record is split into strings. RFC 7208 only asks that the whole DNS answer stay small, under about 450 bytes.</li>
            <li>“You can have up to 10 includes.” The limit counts DNS lookups, and lookups inside includes count too.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>SPF is one part of email authentication</h2>
          <p className={proseP}>
            An SPF pass has limits. In the same 2023 scan, 34.7% of the domains allowed mail from more than 100,000 IP addresses. SPF also breaks when someone forwards your message, because the forwarding server isn’t in your record.
          </p>
          <p className={proseP}>
            DKIM signs the message itself, so it usually survives forwarding. DMARC checks that SPF or DKIM passed for the same domain as the From address, and tells receivers what to do when neither did. Many sending services pass SPF with their own bounce domain, which doesn’t match your From address. A custom Return-Path at the service fixes that. Set up the other two records with the{' '}
            <Link href="/dkim-generator" className={link}>
              DKIM generator
            </Link>{' '}
            and the{' '}
            <Link href="/dmarc-generator" className={link}>
              DMARC generator
            </Link>
            , and use the{' '}
            <Link href="/mx-lookup" className={link}>
              MX lookup
            </Link>{' '}
            to check where your domain receives mail.
          </p>
          <p className={proseP}>
            Authentication also doesn’t help with addresses that don’t exist. Mail to them bounces, and a high bounce rate hurts delivery. Check single addresses with the{' '}
            <Link href="/email-checker" className={link}>
              email checker
            </Link>
            , or a whole list with the{' '}
            <Link href="/bulk-email-verifier" className={link}>
              bulk email verifier
            </Link>
            . For a short definition to share with your team, see the{' '}
            <Link href="/glossary/spf" className={link}>
              SPF record glossary entry
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
        headline="Check the addresses before you send"
        supporting="SPF tells receivers your mail is really from you. Giggal checks that each address exists, catch-all domains included, so fewer messages bounce. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
