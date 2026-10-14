import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import MxLookupTool from '@/components/tools/MxLookup/MxLookupTool'

const CANONICAL = '/mx-lookup'
const TITLE = 'MX Record Lookup: Free MX Lookup for Any Domain | Giggal.ai'
const DESC =
  'Free MX lookup for any domain. See which mail servers receive its email, in the order senders try them, and spot missing or broken MX records.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/mx-lookup-og-v2.webp', width: 1200, height: 630, alt: 'Free MX Record Lookup' }],
    title: 'MX Record Lookup: Free MX Lookup for Any Domain',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MX Record Lookup: Free MX Lookup for Any Domain',
    description: DESC,
    images: ['/tools/mx-lookup-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is an MX record?',
    a: 'It’s the DNS record that names the mail servers for a domain. When someone emails an address at that domain, their mail server looks up the MX records. That tells it where to deliver the message.',
  },
  {
    q: 'How do I check my MX records?',
    a: 'Type your domain into the MX lookup at the top of this page. From a terminal, nslookup -type=mx example.com works on Windows, and dig mx example.com works on macOS and Linux.',
  },
  {
    q: 'Can a domain have more than one MX record?',
    a: 'Yes, and most do. Senders try the record with the lowest priority number first and keep the others as backups. Records with the same number share the load.',
  },
  {
    q: 'What happens if a domain has no MX record?',
    a: 'Senders fall back to the domain’s own A or AAAA record and try to deliver there. That only works if a mail server runs on that address, so a domain that should receive email needs MX records.',
  },
  {
    q: 'Can an MX record point to an IP address or a CNAME?',
    a: 'No. It has to name a host that has its own A or AAAA record. An IP address in the record breaks the standard, and RFC 2181 says the name must not be an alias. Some senders cope with an alias, but you can’t count on it.',
  },
  {
    q: 'Who controls my MX records?',
    a: 'Whoever runs your domain’s DNS. That’s usually the registrar you bought the domain from, or a service like Cloudflare if you moved your name servers there. The records themselves are public, because every sender needs to read them.',
  },
  {
    q: 'How long do MX record changes take?',
    a: 'Up to the TTL of the old record. Resolvers that cached it keep the old answer until the TTL runs out, so a TTL of 3600 means up to an hour. Your DNS host may also take a few minutes to publish the change.',
  },
  {
    q: 'Do I need an MX record to send email?',
    a: 'No. MX records are for receiving mail. Sending depends on SPF, DKIM and DMARC. Some receiving servers do reject mail from a domain with no MX or A record at all. A domain like that can’t receive the reply.',
  },
]

// Results the tool can show, in the order it checks for them.
const RESULTS: { result: string; meaning: string; action: string }[] = [
  {
    result: 'Can receive email',
    meaning: 'The domain has MX records and every mail server has an IP address.',
    action: 'Nothing. If mail still doesn’t arrive, look at the mail server itself or at spam filtering.',
  },
  {
    result: 'Has MX records, but something needs fixing',
    meaning: 'At least one record has a problem. The tool lists it under the server.',
    action: 'Fix the record at your DNS host. The common problems are explained below this table.',
  },
  {
    result: 'Has no MX records',
    meaning: 'Senders fall back to the domain’s own address (its A or AAAA record).',
    action: 'Add MX records if the domain should receive email. Your email provider gives you the values.',
  },
  {
    result: 'Can’t receive email',
    meaning: 'No MX records and no address to fall back to.',
    action: 'Add MX records, or leave it if the domain isn’t used for email.',
  },
  {
    result: 'Accepts no email',
    meaning: 'The domain publishes a null MX record (0 .). It tells senders not to try (RFC 7505).',
    action: 'Nothing, if the domain isn’t used for email. Don’t keep one on a domain you send from, because replies and bounces can’t come back.',
  },
  {
    result: 'Doesn’t exist',
    meaning: 'DNS has no record of the domain at all.',
    action: 'Check the spelling, and check that the domain is registered.',
  },
]

// From each provider's own setup documentation, checked against live DNS on
// 2026-10-12 (sources in targetpulse-seo/plans/18-mx-lookup-plan.md). Providers
// whose values we couldn't confirm in their own docs are left out.
const PROVIDERS: { name: string; records: string[]; note?: string }[] = [
  {
    name: 'Google Workspace',
    records: ['1 smtp.google.com'],
    note: 'Older setups use ASPMX.L.GOOGLE.COM plus four ALT servers. Google still supports them.',
  },
  {
    name: 'Microsoft 365',
    records: ['yourdomain-com.mail.protection.outlook.com'],
    note: 'The first part is unique to your domain. Domains with DNSSEC get a name ending in mx.microsoft. Copy the exact value from the admin center.',
  },
  {
    name: 'Zoho Mail',
    records: ['10 mx.zoho.com', '20 mx2.zoho.com', '50 mx3.zoho.com'],
    note: 'The ending follows your data center, for example mx.zoho.eu for the EU.',
  },
  { name: 'Proton Mail', records: ['10 mail.protonmail.ch', '20 mailsec.protonmail.ch'] },
  { name: 'Fastmail', records: ['10 in1-smtp.messagingengine.com', '20 in2-smtp.messagingengine.com'] },
  { name: 'iCloud Mail', records: ['10 mx01.mail.icloud.com', '10 mx02.mail.icloud.com'], note: 'For custom domains on iCloud+.' },
  { name: 'Namecheap Private Email', records: ['10 mx1.privateemail.com', '10 mx2.privateemail.com'] },
  {
    name: 'Cloudflare Email Routing',
    records: ['route1.mx.cloudflare.net', 'route2.mx.cloudflare.net', 'route3.mx.cloudflare.net'],
    note: 'Forwards mail to another inbox. Cloudflare sets the priorities for you.',
  },
  { name: 'Amazon SES', records: ['10 inbound-smtp.us-east-1.amazonaws.com'], note: 'For receiving mail. The middle part is your AWS region.' },
  { name: 'Hostinger', records: ['5 mx1.hostinger.com', '10 mx2.hostinger.com'] },
  { name: 'IONOS', records: ['mx00.ionos.com', 'mx01.ionos.com'], note: 'Some countries use their own ending, such as mx00.ionos.de.' },
  {
    name: 'OVHcloud',
    records: ['1 mx0.mail.ovh.net', '5 mx1.mail.ovh.net', '50 mx2.mail.ovh.net', '100 mx3.mail.ovh.net', '200 mx4.mail.ovh.net'],
  },
  { name: 'Yandex 360', records: ['10 mx.yandex.net'] },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'

export default function MxLookupPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('MX Record Lookup', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free MX Record Lookup',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Look up the MX records of any domain',
            'Mail servers sorted by priority',
            'IPv4 and IPv6 addresses for each mail server',
            'Flags missing, null and broken MX records',
            'Recognizes common email providers',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          MX Record Lookup
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Run an MX lookup on any domain to see the mail servers that receive its email, in the order senders try them.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <MxLookupTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to check MX records for a domain</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>To find MX records for a domain, type it into the box above. A full email address or a website link works too. The tool keeps only the domain.</li>
            <li>Click Look up MX records. The MX lookup reads the records from public DNS, so you see what a sender sees right now.</li>
            <li>Read the summary first. It tells you whether the domain can receive email.</li>
            <li>Then read the table. Each row is one mail server, with its priority number, its IP addresses and its TTL.</li>
          </ol>
          <p className={proseP}>
            If you changed your records recently and still see the old ones, wait for the TTL shown in the table to run out. TTL is the number of seconds resolvers may keep the previous answer. The link in your address bar runs the same MX record check again. You can send it to a colleague or to your DNS host.
          </p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/mx-lookup-v2.webp"
            alt="Illustration of an email following a domain's MX records to its mail servers in priority order."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What an MX record is</h2>
          <p className={proseP}>
            An MX record (mail exchanger record) is the DNS entry that tells other mail servers where to deliver email for a domain. When someone writes to anna@example.com, their mail server looks up the MX records for example.com and connects to the server named there. Reading those records is what an MX lookup, or mail server lookup, does. For a plain explanation with a step-by-step example, see the{' '}
            <Link href="/glossary/mx-record" className="text-indigo-600 font-bold hover:underline">
              MX record
            </Link>{' '}
            entry in our glossary.
          </p>
          <p className={proseP}>
            Each record has two parts: a priority number and the name of a mail server. Google Workspace&apos;s setup guide asks for a single record like this one:
          </p>
          <pre className="p-4 bg-slate-900 text-emerald-300 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto">example.com.  3600  IN  MX  1  smtp.google.com.</pre>
          <p className={proseP}>
            Older Workspace domains often still have five records instead, starting with ASPMX.L.GOOGLE.COM. Google still supports those, so there&apos;s no need to change them.
          </p>
          <p className={proseP}>
            MX records only handle incoming mail. Outgoing mail is covered by other records, mainly SPF, DKIM and DMARC. For how those three work, see{' '}
            <Link href="/blog/spf-dkim-dmarc-explained" className={link}>
              SPF, DKIM and DMARC explained
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What the priority number means</h2>
          <p className={proseP}>
            Senders try the server with the lowest number first. If it doesn&apos;t answer, they move on to the next lowest. When two servers have the same number, senders pick between them at random, which spreads the load (RFC 5321, section 5.1).
          </p>
          <p className={proseP}>
            Only the order matters, not the size of the numbers. Priorities of 10 and 20 behave the same as 1 and 2. Gmail&apos;s own domain, for example, lists five servers at 5, 10, 20, 30 and 40.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What your MX lookup result means</h2>
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
            The tool also flags four problems with individual records. A record can point to an IP address instead of a host name. The server name can be an alias (a CNAME), which RFC 2181 doesn&apos;t allow. The server name can have no IP address, so mail sent to it can&apos;t be delivered. Or the domain can publish a null MX next to normal MX records, which contradicts itself.
          </p>
        </div>

        {PROVIDERS.length > 0 && (
          <div className="space-y-4">
            <h2 className={sectionTitle}>MX records for Google Workspace, Microsoft 365 and other providers</h2>
            <p className={proseP}>
              If an MX records lookup shows one of these server names, you know who handles the domain&apos;s email. The number before each name is its priority. When you set up a provider, copy the values from its own setup page. Some of them depend on your domain or your region.
            </p>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                    <tr>
                      <th className="py-2.5 px-4 w-2/5">Provider</th>
                      <th className="py-2.5 px-4">MX records</th>
                    </tr>
                  </thead>
                  {/* Rows stack on phones so long host names get the full width. */}
                  <tbody className="divide-y divide-slate-100 bg-white font-medium">
                    {PROVIDERS.map((p) => (
                      <tr key={p.name} className="block sm:table-row align-top">
                        <td className="block sm:table-cell pt-3 pb-1 sm:pb-3 px-4">
                          <div className="font-bold text-slate-900">{p.name}</div>
                          {p.note && <div className="text-slate-500 text-xs mt-1 leading-relaxed">{p.note}</div>}
                        </td>
                        <td className="block sm:table-cell pt-1 pb-3 sm:pt-3 px-4 font-mono text-xs sm:text-sm text-indigo-600 font-semibold">
                          {p.records.map((r) => (
                            <div key={r} className="break-all sm:break-normal sm:whitespace-nowrap">
                              {r}
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className={proseP}>
              Sometimes the MX records point to Proofpoint, Mimecast or Barracuda instead. Those are security gateways. Mail goes through them first, gets filtered, and then moves on to the real mailbox provider, which the lookup can&apos;t see. Gateways also make email verification harder, because they answer for every address. Here is{' '}
              <Link href="/blog/how-to-verify-emails-behind-secure-email-gateways" className={link}>
                how to verify emails behind a security gateway
              </Link>
              .
            </p>
          </div>
        )}

        <div className="space-y-4">
          <h2 className={sectionTitle}>Changing your MX records</h2>
          <p className={proseP}>
            To move your email to a new provider, add the new provider&apos;s MX records at your DNS host and remove the old ones. Senders follow whatever DNS returns, so mail starts arriving at the new server as cached answers expire.
          </p>
          <p className={proseP}>
            How long that takes depends on the TTL of the old records. If you plan a move, lower the TTL to a few minutes beforehand. Do it at least one full TTL period ahead, so the old, longer TTL has run out by the day you switch. Raise it again once everything works. Keep the old mailbox open for a few days anyway, in case some mail still lands there.
          </p>
          <p className={proseP}>
            Providers often quote up to 48 or 72 hours for changes to show up. That&apos;s a safe outer limit, not the usual wait. Adding MX records to a domain that had none can take a little longer, because resolvers may also have cached the empty answer. How long they keep it is set by the domain&apos;s SOA record.
          </p>
          <p className={proseP}>
            After the switch,{' '}
            <Link href="/spf-checker" className={link}>
              update your SPF record
            </Link>{' '}
            so the new provider may send for you, and turn on its DKIM signing. If you send from your own server, the{' '}
            <Link href="/dkim-generator" className={link}>
              DKIM generator
            </Link>{' '}
            creates a key, and the{' '}
            <Link href="/dmarc-generator" className={link}>
              DMARC generator
            </Link>{' '}
            builds the DMARC record that ties both together.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>An MX lookup doesn&apos;t check the mailbox</h2>
          <p className={proseP}>
            MX records tell you the domain accepts mail. They don&apos;t tell you that a particular address exists. jane@example.com can still bounce when example.com has perfect MX records, because Jane left the company or the address never existed.
          </p>
          <p className={proseP}>
            Checking the mailbox means asking the mail server, which is what an email verifier does. Use the{' '}
            <Link href="/email-checker" className={link}>
              email checker
            </Link>{' '}
            for one address, or the{' '}
            <Link href="/bulk-email-verifier" className={link}>
              bulk email verifier
            </Link>{' '}
            for a whole list before a campaign.
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
        headline="Check the mailbox, not just the domain"
        supporting="MX records show that a domain can receive mail. Giggal checks whether the address itself exists, catch-all domains included. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
