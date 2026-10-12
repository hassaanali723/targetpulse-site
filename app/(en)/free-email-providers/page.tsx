import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd, itemListLd } from '@/lib/schema'
import FreeEmailProvidersTool from '@/components/tools/FreeEmailProviders/FreeEmailProvidersTool'
import { FREE_DOMAIN_COUNT, FREE_EMAIL_PROVIDERS } from '@/lib/tools/freeEmailProviders'

const CANONICAL = '/free-email-providers'
const TITLE = 'List of Free Email Providers and Their Domains | Giggal.ai'
const DESC = `A list of free email providers, from Gmail and Outlook to Proton and GMX, with ${FREE_DOMAIN_COUNT} free email domains you can check or download as CSV.`

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/free-email-providers-og-v2.webp', width: 1200, height: 630, alt: 'List of free email providers' }],
    title: 'List of Free Email Providers and Their Domains',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List of Free Email Providers and Their Domains',
    description: DESC,
    images: ['/tools/free-email-providers-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is an email service provider?',
    a: 'It’s the company that runs your mailbox. It gives you an address, stores your mail and lets you send and receive. Gmail, Outlook.com and Proton Mail are email service providers. The same term is also used for bulk email services such as Mailchimp, which send newsletters rather than host inboxes.',
  },
  {
    q: 'Which free email service has the most storage?',
    a: 'Of the services compared on this page, GMX (on gmx.com and gmx.co.uk) and mail.com give the most, with 65 GB each. Yahoo gives 20 GB in the US, and Gmail and Outlook.com give 15 GB.',
  },
  {
    q: 'Which free email provider is the most private?',
    a: 'Proton Mail and Tuta encrypt your mail end to end, even on their free plans. Gmail, Outlook.com and iCloud Mail don’t offer end-to-end encryption on free accounts.',
  },
  {
    q: 'Can I get a free email address with my own domain?',
    a: 'Zoho Mail’s Forever Free plan works with one domain of your own, for up to five users, on the web and in Zoho’s apps. Gmail and Proton Mail need a paid plan for that, and iCloud Mail needs iCloud+.',
  },
  {
    q: 'Is a free email address the same as a disposable one?',
    a: 'No. A free address like name@gmail.com is a permanent mailbox. A disposable address stops working after minutes or hours, and people use it to get past sign-up forms. This list only covers permanent providers.',
  },
  {
    q: 'How do I block free email domains on a form?',
    a: 'In HubSpot, turn on Block free email providers in the form’s settings. In your own code, download the CSV or JSON above, then reject or flag any address whose domain is on it.',
  },
  {
    q: 'Do free email accounts expire?',
    a: 'Yes, if nobody uses them. Google can delete a Gmail account after two years without use. Yahoo deletes the mailbox after 12 months, and Outlook.com closes the inbox if you don’t sign in once a year.',
  },
  {
    q: 'Why isn’t a domain I know on the list?',
    a: 'It may no longer receive mail, it may now belong to another company, or it may be a smaller provider we haven’t added. Any domain without working MX records was left out when we checked the list.',
  },
]

// Free plans as stated on each provider's own pages on 2026-10-12 (sources in
// targetpulse-seo/plans/19-free-email-providers-plan.md). Figures we couldn't
// confirm on an official page (AOL storage, Yandex and Mail.ru quotas) are left out.
const COMPARE: { name: string; storage: string; notes: string }[] = [
  {
    name: 'Gmail',
    storage: '15 GB, shared with Google Drive and Photos',
    notes: 'Shows ads, but Google says it doesn’t use your email to choose them. Since March 2026, some new accounts start with 5 GB and get the other 10 GB after you verify a phone number.',
  },
  {
    name: 'Outlook.com',
    storage: '15 GB for email',
    notes: 'Attachments count against a separate 5 GB of cloud storage. Shows ads unless you pay for Microsoft 365.',
  },
  {
    name: 'Yahoo Mail',
    storage: '20 GB in the US',
    notes: 'Some countries get less. UK users were told about a cut to 15 GB in 2026. Yahoo Mail Plus removes the ads.',
  },
  {
    name: 'iCloud Mail',
    storage: '5 GB, shared with the rest of iCloud',
    notes: 'Comes with every Apple Account. Using your own domain needs a paid iCloud+ plan.',
  },
  {
    name: 'Proton Mail',
    storage: '500 MB, rising to 1 GB after the setup steps',
    notes: 'End-to-end encrypted. The free plan allows one address and 150 messages a day.',
  },
  {
    name: 'Tuta',
    storage: '1 GB',
    notes: 'End-to-end encrypted. No extra addresses or custom domain on the free plan.',
  },
  {
    name: 'Zoho Mail',
    storage: '5 GB per user, for up to 5 users',
    notes: 'Unusually for a free plan, it works with your own domain. Web and app only, with no IMAP or POP, and not offered in every region. No ads.',
  },
  {
    name: 'GMX',
    storage: '65 GB on gmx.com and gmx.co.uk',
    notes: 'Up to 10 extra addresses. The German service on gmx.de and gmx.net has a smaller free plan with 1 GB.',
  },
  {
    name: 'mail.com',
    storage: '65 GB, plus 2 GB of cloud storage',
    notes: 'You pick your address from over 100 domains, such as email.com, usa.com and consultant.com. Premium removes the ads.',
  },
]

// Which domains each provider offers to new accounts, from the providers' help pages.
const SIGNUP: { name: string; open: string; other: string }[] = [
  { name: 'Gmail', open: 'gmail.com', other: 'googlemail.com, which reaches the same mailbox' },
  { name: 'Outlook.com', open: 'outlook.com, hotmail.com', other: 'live.com, msn.com and country versions such as hotmail.co.uk' },
  { name: 'Yahoo Mail', open: 'yahoo.com, myyahoo.com', other: 'ymail.com, rocketmail.com and country versions such as yahoo.co.uk' },
  { name: 'iCloud Mail', open: 'icloud.com', other: 'me.com, mac.com' },
  { name: 'Proton Mail', open: 'proton.me, protonmail.com', other: 'protonmail.ch. pm.me comes with paid plans.' },
  { name: 'Tuta', open: 'tutamail.com, tutanota.com, tutanota.de, tuta.io, keemail.me', other: 'tuta.com comes with paid plans.' },
  { name: 'GMX', open: 'gmx.com, gmx.co.uk, gmx.de, gmx.net', other: 'Other country versions' },
  { name: 'mail.com', open: 'mail.com, email.com, usa.com, post.com', other: 'About 140 more, and every one is open to new accounts.' },
]

const tableHead = 'bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold'

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'

export default function FreeEmailProvidersPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Free Email Providers', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={itemListLd({
          id: `https://giggal.ai${CANONICAL}#providers`,
          name: 'Free email providers compared',
          description: 'The main free email services and what their free plans include.',
          items: COMPARE.map((p) => ({ name: p.name, url: `https://giggal.ai${CANONICAL}`, description: `${p.storage}. ${p.notes}` })),
        })}
      />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free Email Domain Checker and List',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            `${FREE_DOMAIN_COUNT} free email domains from ${FREE_EMAIL_PROVIDERS.length} providers`,
            'Every domain checked for working MX records',
            'Check whether a domain or email address is a free provider',
            'Download as TXT, CSV or JSON',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          List of Free Email Providers
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          The free email services people actually use, and the {FREE_DOMAIN_COUNT} domains their addresses end in. Check a domain, or download the whole list.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <FreeEmailProvidersTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use this list</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>To check one address, paste it into the box at the top. The tool tells you whether the domain belongs to a free provider, and which one.</li>
            <li>To find a provider&apos;s domains, type its name in the filter, for example hotmail or gmx. Outlook.com alone has dozens of country versions.</li>
            <li>To use the list in a spreadsheet, a CRM or your own code, download it. The CSV has the domain, the provider, the company behind it, its country and its type.</li>
          </ol>
          <p className={proseP}>
            Downloads follow the filter you set. Choose Internet providers, for example, and you get only those domains.
          </p>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/free-email-providers-v2.webp"
            alt="Illustration of email addresses from different free providers sorted into a domain list."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What&apos;s on the list, and what isn&apos;t</h2>
          <p className={proseP}>
            This list of free email providers covers three kinds of services. Free webmail services such as Gmail, Outlook.com, Yahoo Mail, GMX and mail.com. Private, encrypted services such as Proton Mail and Tuta. And the consumer mailboxes of large internet providers, such as Comcast, AT&amp;T, BT and Orange. Those come with a home internet plan rather than for free, but they are personal addresses all the same.
          </p>
          <p className={proseP}>
            We checked every domain&apos;s{' '}
            <Link href="/mx-lookup" className={link}>
              MX records
            </Link>{' '}
            before adding it. Where a provider runs its own mail servers, the records had to point there. Old domains that no longer accept mail, and domains that now belong to someone else, were left out. That&apos;s why a few old country versions, such as yahoo.ch and aol.ca, aren&apos;t here.
          </p>
          <p className={proseP}>
            Disposable services are not on this list. Those give out throwaway inboxes that expire after minutes or hours, and they have their own{' '}
            <Link href="/disposable-email-providers" className={link}>
              list of disposable email providers
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Free email providers compared</h2>
          <p className={proseP}>
            Here is what each main email service provider gives you on its free plan. Every figure comes from the provider&apos;s own pages, checked on 12 October 2026. Free plans change often, so check the provider&apos;s site before you decide.
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className={`hidden sm:table-header-group ${tableHead}`}>
                  <tr>
                    <th className="py-2.5 px-4 w-32">Provider</th>
                    <th className="py-2.5 px-4 w-48">Free storage</th>
                    <th className="py-2.5 px-4">Notes</th>
                  </tr>
                </thead>
                {/* Rows stack on phones so the notes stay readable. */}
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {COMPARE.map((p) => (
                    <tr key={p.name} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 sm:pb-3 px-4 font-bold text-slate-900">{p.name}</td>
                      <td className="block sm:table-cell py-1 sm:py-3 px-4 text-slate-900">{p.storage}</td>
                      <td className="block sm:table-cell pb-3 sm:pt-3 px-4 text-slate-600 leading-relaxed">{p.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What is the best email service for you?</h2>
          <p className={proseP}>There is no single best email service. The best email account for you depends on what you&apos;ll use it for.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>For the most free storage, GMX and mail.com give 65 GB each.</li>
            <li>For privacy, Proton Mail and Tuta encrypt your mail end to end, even on the free plan.</li>
            <li>For your own domain at no cost, Zoho Mail&apos;s Forever Free plan covers up to five people.</li>
            <li>If you already use Apple, Google or Microsoft apps, iCloud Mail, Gmail or Outlook.com work with them.</li>
          </ul>
          <p className={proseP}>
            For work, a free address is fine to start with. Some business forms block free addresses, though, and the section on B2B forms below explains why.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Which domains you can still sign up for</h2>
          <p className={proseP}>
            The big providers collected extra domains over the years, and only some are offered to new accounts. The others keep working for the people who already have them.
          </p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className={`hidden sm:table-header-group ${tableHead}`}>
                  <tr>
                    <th className="py-2.5 px-4 w-32">Provider</th>
                    <th className="py-2.5 px-4">New accounts</th>
                    <th className="py-2.5 px-4">Other domains in use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {SIGNUP.map((p) => (
                    <tr key={p.name} className="block sm:table-row align-top">
                      <td className="block sm:table-cell pt-3 sm:pb-3 px-4 font-bold text-slate-900">{p.name}</td>
                      <td className="block sm:table-cell py-1 sm:py-3 px-4 font-mono text-indigo-600 font-semibold break-words">
                        <span className="sm:hidden font-sans text-slate-500 font-medium">New accounts: </span>
                        {p.open}
                      </td>
                      <td className="block sm:table-cell pb-3 sm:pt-3 px-4 text-slate-600">
                        <span className="sm:hidden text-slate-500">Also in use: </span>
                        {p.other}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={proseP}>
            For a B2B filter, the difference doesn&apos;t matter. An address on me.com or ymail.com is just as personal as one on gmail.com, so the list includes both kinds.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Free accounts close when nobody uses them</h2>
          <p className={proseP}>
            Free providers delete accounts that sit unused. That&apos;s one reason an old list full of free addresses bounces more over time.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Gmail: Google can delete an account that hasn&apos;t been used for two years.</li>
            <li>Outlook.com: you need to sign in at least once a year to keep the inbox. The account closes after two years without a sign-in.</li>
            <li>Yahoo Mail: the mailbox is deleted after 12 months without use, and the account after 18 months.</li>
            <li>Proton Mail: free accounts are deleted after 12 months of inactivity.</li>
            <li>Tuta: free accounts are deleted after 6 months without a login.</li>
          </ul>
          <p className={proseP}>
            Before you email an old list, check it. The{' '}
            <Link href="/bulk-email-verifier" className={link}>
              bulk email verifier
            </Link>{' '}
            finds the addresses that no longer exist, and the{' '}
            <Link href="/email-checker" className={link}>
              email checker
            </Link>{' '}
            does the same for one address.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Free email domains on B2B forms</h2>
          <p className={proseP}>
            Many B2B companies only want sign-ups from work addresses. HubSpot, for example, has a form setting called Block free email providers that turns away free domains. You can do the same in your own form code with the CSV above.
          </p>
          <p className={proseP}>
            Blocking has a cost, though. Some sole traders and small businesses run everything from a Gmail or Outlook.com address, and a hard block turns them away. A softer option is to accept the address, mark it as personal in your CRM, and let your sales team decide.
          </p>
          <p className={proseP}>
            A free address isn&apos;t a fake one. Gmail and Outlook.com mailboxes are permanent and receive mail. Disposable addresses are the ones that stop working after a few minutes or hours, and the{' '}
            <Link href="/disposable-email-checker" className={link}>
              disposable email checker
            </Link>{' '}
            catches those.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Spotting duplicate free addresses</h2>
          <p className={proseP}>Some providers deliver several spellings of an address to the same inbox. That matters when you remove duplicates from a list.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Gmail ignores dots in the name, so john.smith@gmail.com and johnsmith@gmail.com are the same inbox. That&apos;s true for personal Gmail, not for Google Workspace accounts.</li>
            <li>gmail.com and googlemail.com reach the same mailbox.</li>
            <li>Plus addresses, such as john+news@gmail.com, land in the main inbox too.</li>
            <li>Yandex treats dots and hyphens in the name as the same address.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className={sectionTitle}>Frequently asked questions</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <AltCtaBand
        headline="Check that each address exists, not just its provider"
        supporting="A Gmail address can still bounce if the mailbox was closed. Giggal checks each address before you send. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
