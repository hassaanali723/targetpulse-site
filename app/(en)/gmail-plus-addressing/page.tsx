import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import PlusAddressingTool from '@/components/tools/PlusAddressing/PlusAddressingTool'

const CANONICAL = '/gmail-plus-addressing'
const TITLE = 'Gmail Plus Addressing: Free Plus Address Generator | Giggal.ai'
const DESC =
  'Create Gmail plus addresses like you+shopping@gmail.com, see which providers support plus addressing, and find plus and dot duplicates in an email list.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/gmail-plus-addressing-og-v2.webp', width: 1200, height: 630, alt: 'Gmail Plus Addressing Tool' }],
    title: 'Gmail Plus Addressing: Free Plus Address Generator',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gmail Plus Addressing: Free Plus Address Generator',
    description: DESC,
    images: ['/tools/gmail-plus-addressing-og-v2.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'What is Gmail plus addressing?',
    a: 'It’s a way to make extra versions of your Gmail address. You add a plus sign and a word before the @, such as jane+shopping@gmail.com. Mail sent to any of them arrives in your normal inbox, and you can filter on the word.',
  },
  {
    q: 'Does plus addressing work in Outlook?',
    a: 'Yes. Outlook.com addresses accept plus addresses, and Microsoft turns plus addressing on by default for Microsoft 365 business accounts. In Microsoft 365 you can receive at a plus address, but you can’t send from one.',
  },
  {
    q: 'Do dots matter in a Gmail address?',
    a: 'Not for gmail.com addresses. Google says mail sent to any dotted version of your address goes to you, so jane.doe@gmail.com and janedoe@gmail.com are one inbox. In Google Workspace accounts on a company domain, dots do change the address.',
  },
  {
    q: 'Can I send email from a plus address in Gmail?',
    a: 'Google doesn’t document it. Some guides add the plus address in Gmail’s settings under Send mail as, which lets you choose it as the From address. Microsoft 365 doesn’t allow sending from plus addresses at all, while Proton Mail replies from the plus address by default.',
  },
  {
    q: 'Why does a website reject my plus address?',
    a: 'Because its sign-up form checks addresses too strictly. The plus sign is a valid character in an email address, and RFC 3696 says programs should accept it. Fastmail notes that some websites wrongly treat it as invalid. Use your normal address on those sites.',
  },
  {
    q: 'Is a plus address the same as an email alias?',
    a: 'Not quite. A plus address is your real address with a tag, so anyone can remove the tag and see your inbox address. An alias from Apple’s Hide My Email or DuckDuckGo Email Protection is different. It’s a random address that forwards to you and hides your real one.',
  },
  {
    q: 'Does plus addressing work with Google Workspace?',
    a: 'Yes. Google’s own example uses a company domain: cassy+news@solarmora.com. The difference from gmail.com is that dots are part of the address in Workspace, so only the plus part is a tag.',
  },
  {
    q: 'How many plus addresses can I make?',
    a: 'Google doesn’t state a number. The practical limit is length. The part before the @ can be at most 64 characters, counting your name, the plus sign and the tag.',
  },
]

// Plus addressing by provider. Official documentation where it exists; third-party tests are labelled.
const PROVIDERS: { name: string; supports: string; notes: string; href: string; tested?: boolean }[] = [
  { name: 'Gmail', supports: 'Yes', notes: 'Dots in the username are ignored. gmail.com and googlemail.com are the same inbox.', href: 'https://support.google.com/mail/answer/12096' },
  { name: 'Google Workspace', supports: 'Yes', notes: 'Works on company domains. Dots are part of the address.', href: 'https://support.google.com/a/users/answer/9308648' },
  { name: 'Microsoft 365', supports: 'Yes, on by default', notes: 'Receive only. An admin can turn it off for the organization.', href: 'https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online' },
  { name: 'Outlook.com', supports: 'Yes', notes: 'Also for hotmail.com and live.com addresses. Dots are part of the address.', href: 'https://office-watch.com/2020/how-to-get-plus-email-addresses-the-new-feature-in-microsoft-365-and-outlook-com/', tested: true },
  { name: 'Proton Mail', supports: 'Yes', notes: 'Free plan included. Replies go out from the plus address.', href: 'https://proton.me/support/creating-aliases' },
  { name: 'Fastmail', supports: 'Yes', notes: 'A tag that matches a folder name files the mail there. Subdomain addresses work too.', href: 'https://www.fastmail.help/hc/en-us/articles/360060591053' },
  { name: 'iCloud Mail', supports: 'Yes, in tests', notes: 'Works for icloud.com and me.com in independent tests. Apple doesn’t document it.', href: 'https://macmost.com/?p=30405', tested: true },
  { name: 'Yandex Mail', supports: 'Yes', notes: 'Addresses like login+word@yandex.ru.', href: 'https://yandex.ru/blog/mail/1223' },
  { name: 'Yahoo Mail', supports: 'Not confirmed', notes: 'Yahoo documents disposable addresses with a dash instead: nickname-keyword@yahoo.com.', href: 'https://help.yahoo.com/kb/SLN28815.html' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const subTitle = 'text-xl md:text-2xl font-bold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'
const code = 'font-mono text-[0.9em] font-semibold text-slate-900 bg-slate-100 px-1 py-0.5 rounded break-words'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

export default function GmailPlusAddressingPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Gmail Plus Addressing', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Gmail Plus Addressing Tool',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Create plus addresses for any email address',
            'Shows whether your email provider supports plus addressing',
            'Finds plus and dot versions of the same Gmail address in a list',
            'Keeps the first address of each group exactly as written',
            'Copy or download the list without duplicates',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">Gmail Plus Addressing</h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Create plus addresses like jane+shopping@gmail.com that all arrive in your inbox. Or clean a list of the plus and dot versions that belong to the same person.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <PlusAddressingTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to use the plus address generator</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>On the Create tab, type your email address. A Gmail address works, and so do most others.</li>
            <li>Add a tag for each place you’ll use the address, such as newsletters or shopping. Separate tags with commas.</li>
            <li>Copy the plus addresses. The tool also tells you whether your provider delivers them.</li>
            <li>To clean a list, switch to the Clean tab and paste the addresses. The tool groups the ones that reach the same inbox and gives you the list without duplicates.</li>
          </ol>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-50">
          <Image
            src="/tools/gmail-plus-addressing-v2.webp"
            alt="Illustration of several Gmail plus addresses with different tags arriving in one inbox."
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What is plus addressing?</h2>
          <p className={proseP}>
            Plus addressing means adding a plus sign and a tag to the part of an email address before the @. Mail to <span className={code}>jane+travel@gmail.com</span> arrives in the same inbox as mail to <span className={code}>jane@gmail.com</span>. The tag stays visible, so you can sort or filter on it.
          </p>
          <p className={proseP}>
            The standards call it sub-addressing.{' '}
            <a href="https://www.rfc-editor.org/rfc/rfc5233" className={link} {...ext}>
              RFC 5233
            </a>{' '}
            uses the plus sign as its example but leaves the separator to each mail system. That fits a broader rule in{' '}
            <a href="https://www.rfc-editor.org/rfc/rfc5321" className={link} {...ext}>
              RFC 5321
            </a>
            : only the receiving server decides what the part before the @ means. So whether a plus address works depends entirely on the provider that hosts the inbox.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How Gmail plus addressing works</h2>
          <p className={proseP}>
            <a href="https://support.google.com/mail/answer/12096" className={link} {...ext}>
              Google’s help page
            </a>{' '}
            describes it in one line: add a plus sign and any word before the @. Every version arrives in your inbox. You don’t need to set anything up, and Google doesn’t mention a limit on how many you use.
          </p>
          <p className={proseP}>
            Gmail also ignores dots. For a gmail.com address,{' '}
            <a href="https://support.google.com/mail/answer/7436150" className={link} {...ext}>
              mail sent to any dotted version
            </a>{' '}
            goes to the same person, so <span className={code}>j.a.n.e@gmail.com</span> is <span className={code}>jane@gmail.com</span>. And{' '}
            <a href="https://support.google.com/mail/answer/10313" className={link} {...ext}>
              gmail.com and googlemail.com
            </a>{' '}
            are the same inbox.
          </p>
          <p className={proseP}>
            Google Workspace accounts on a company domain support plus addresses too. Dots work differently there:{' '}
            <a href="https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups" className={link} {...ext}>
              Google says
            </a>{' '}
            periods aren’t ignored in Workspace usernames, so <span className={code}>jane.doe@company.com</span> and <span className={code}>janedoe@company.com</span> can be two different people.
          </p>
          <h3 className={subTitle}>Filtering mail sent to a plus address</h3>
          <p className={proseP}>
            Create a Gmail filter and put the full plus address in the To field. You can also search for it with the{' '}
            <a href="https://support.google.com/mail/answer/7190" className={link} {...ext}>
              deliveredto: operator
            </a>
            , for example <span className={code}>deliveredto:jane+travel@gmail.com</span>. Look in To or Delivered-To, not From. The tag is on the address the mail was sent to.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Which email providers support plus addressing</h2>
          <p className={proseP}>Most large providers deliver plus addresses, but not all of them document it. Rows marked “tested” rely on independent tests rather than the provider’s own pages.</p>
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="hidden sm:table-header-group bg-slate-100 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="py-2.5 px-4 w-1/4">Provider</th>
                  <th className="py-2.5 px-4 w-1/5">Plus addresses</th>
                  <th className="py-2.5 px-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {PROVIDERS.map((p) => (
                  <tr key={p.name} className="block sm:table-row align-top">
                    <td className="block sm:table-cell pt-3 pb-0.5 sm:pb-3 px-4 font-bold">
                      <a href={p.href} className="text-slate-900 hover:text-indigo-600 hover:underline" {...ext}>
                        {p.name}
                      </a>
                      {p.tested && <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">tested</span>}
                      <span className="sm:hidden font-semibold text-indigo-600"> · {p.supports}</span>
                    </td>
                    <td className="hidden sm:table-cell py-3 px-4 font-semibold text-indigo-600">{p.supports}</td>
                    <td className="block sm:table-cell pt-0.5 pb-3 sm:pt-3 px-4 text-slate-600">{p.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={proseP}>
            For AOL, Zoho Mail, GMX and mail.com we couldn’t find documentation either way. Send yourself a test email before you rely on a plus address there.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Can you send from a plus address?</h2>
          <p className={proseP}>It depends on the provider, and this is where many guides go wrong:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>
              <span className="font-bold text-slate-900">Microsoft 365:</span> no.{' '}
              <a href="https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online" className={link} {...ext}>
                Microsoft’s documentation
              </a>{' '}
              says users can’t send email from plus addresses.
            </li>
            <li>
              <span className="font-bold text-slate-900">Proton Mail:</span> yes. Replies to a plus address go out from that address by default.
            </li>
            <li>
              <span className="font-bold text-slate-900">Fastmail:</span> yes, after you add the address in your settings.
            </li>
            <li>
              <span className="font-bold text-slate-900">Gmail:</span> Google doesn’t document it. Some guides add the plus address under{' '}
              <a href="https://support.google.com/mail/answer/22370" className={link} {...ext}>
                Send mail as
              </a>
              , which allows up to 99 addresses. Google has announced that Send mail as will stop working for third-party addresses from January 2027. Addresses you own in Gmail aren’t affected.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What plus addresses are good for, and their limits</h2>
          <p className={proseP}>
            People use them to sort mail into folders and to spot who shared their address. Developers also use them to test sign-up forms with several accounts that land in one inbox. If spam arrives at <span className={code}>jane+shoestore@gmail.com</span>, you know where it came from.
          </p>
          <p className={proseP}>There are limits worth knowing before you rely on it:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>
              Some websites reject the plus sign. It’s a valid character, and{' '}
              <a href="https://www.rfc-editor.org/rfc/rfc3696" className={link} {...ext}>
                RFC 3696
              </a>{' '}
              tells programs to accept it, but Fastmail notes that some sites wrongly treat it as invalid.
            </li>
            <li>
              A plus address doesn’t hide your real address. Anyone can delete the tag, and Google itself says these addresses aren’t private.
            </li>
            <li>
              If you want privacy, use a forwarding alias instead.{' '}
              <a href="https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud" className={link} {...ext}>
                Apple’s Hide My Email
              </a>{' '}
              (with iCloud+) and{' '}
              <a href="https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection" className={link} {...ext}>
                DuckDuckGo Email Protection
              </a>{' '}
              create random addresses that forward to you.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>Plus addresses and dots in an email list</h2>
          <p className={proseP}>
            For anyone who runs a sign-up form, plus addressing has a flip side. One person can sign up as <span className={code}>jane@gmail.com</span>, <span className={code}>j.ane@gmail.com</span> and <span className={code}>jane+2@gmail.com</span>, and your list counts three people. It also enables abuse. In one case{' '}
            <a href="https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html" className={link} {...ext}>
              reported by security researchers
            </a>
            , a group used dotted versions of Gmail addresses for 48 credit card applications and got at least $65,000 in fraudulent credit.
          </p>
          <p className={proseP}>The Clean tab finds these groups. It follows rules that are safe for each provider:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>For gmail.com and googlemail.com, it removes dots and the plus tag.</li>
            <li>For Outlook.com, iCloud, Proton, Fastmail and Yandex, it removes only the plus tag. Dots stay, because they change the address there.</li>
            <li>It leaves Yahoo addresses alone. A Yahoo disposable address uses a nickname that isn’t the account name, so it can’t be traced back.</li>
            <li>It leaves company domains alone unless you tick the option. Each mail server decides what a plus sign means, and on some servers it’s part of a real mailbox name.</li>
          </ul>
          <p className={proseP}>
            Use the result to spot duplicates, not to rewrite addresses. Keep sending to the address exactly as the person entered it, so their filters keep working. The tool keeps the first address of each group unchanged for that reason.
          </p>
          <p className={proseP}>
            Merging duplicates doesn’t tell you whether an address still works. Run the cleaned list through the{' '}
            <Link href="/bulk-email-verifier" className={link}>
              bulk email verifier
            </Link>{' '}
            before you send, or check one address with the{' '}
            <Link href="/email-checker" className={link}>
              email checker
            </Link>
            . To flag addresses from free providers, see the{' '}
            <Link href="/free-email-providers" className={link}>
              list of free email providers
            </Link>
            , and for throwaway inboxes, the{' '}
            <Link href="/disposable-email-checker" className={link}>
              disposable email checker
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
        headline="Know which addresses on your list still work"
        supporting="Giggal checks every address before you send, catch-all domains included, so merged duplicates and dead addresses don’t become bounces. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
