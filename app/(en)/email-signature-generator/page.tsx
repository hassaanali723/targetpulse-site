import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import AltCtaBand from '@/components/alternatives/AltCtaBand'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, breadcrumbLd, toolWebApplicationLd } from '@/lib/schema'
import EmailSignatureTool from '@/components/tools/EmailSignature/EmailSignatureTool'

const CANONICAL = '/email-signature-generator'
const TITLE = 'Free Email Signature Generator for Gmail and Outlook | Giggal.ai'
const DESC =
  'Create a clean email signature for Gmail, Outlook or Apple Mail. Pick a template, add your details and copy it in one click. Free, no signup, no watermark.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: CANONICAL },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/tools/email-signature-generator-og.webp', width: 1200, height: 630, alt: 'An email signature card with a name, job title and contact details' }],
    title: 'Free Email Signature Generator for Gmail and Outlook',
    description: DESC,
    url: `https://giggal.ai${CANONICAL}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Email Signature Generator for Gmail and Outlook',
    description: DESC,
    images: ['/tools/email-signature-generator-og.webp'],
  },
}

const faqs: FaqItem[] = [
  {
    q: 'Is this email signature generator free?',
    a: 'Yes. No signup, no watermark and no limit on how many signatures you make.',
  },
  {
    q: 'Does the signature include a link to Giggal?',
    a: 'Only if you tick that option. It’s off by default.',
  },
  {
    q: 'Why isn’t my logo showing?',
    a: 'The image link has to be public and start with https. Links to files on internal servers, in private cloud folders or behind a login don’t load for recipients. Some apps, Outlook in particular, also hide images until the reader allows them.',
  },
  {
    q: 'Can I upload my logo here?',
    a: 'Not yet. Paste a link to an image that’s already online. In Gmail you can also insert an image from Google Drive or your computer in the signature editor itself.',
  },
  {
    q: 'What should an email signature include?',
    a: 'Your name, job title, company and one or two ways to reach you are enough for most people. Add a logo, a photo or one link if they’re useful to the reader, and leave out quotes, long disclaimers and every social network you’re on.',
  },
  {
    q: 'Why does my signature look different on my phone?',
    a: 'Many phone email apps show signatures as plain text, and the Gmail app only supports plain text. Use the plain-text copy for mobile.',
  },
  {
    q: 'Is my information stored anywhere?',
    a: 'No. The generator runs in your browser, and your details aren’t saved on our servers.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailSignatureGeneratorPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('Email Signature Generator', CANONICAL)} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={toolWebApplicationLd({
          name: 'Free Email Signature Generator',
          url: `https://giggal.ai${CANONICAL}`,
          description: DESC,
          featureList: [
            'Create table-based HTML signatures for Gmail, Outlook, and Apple Mail',
            'Pick from 4 responsive templates with custom accent colors and fonts',
            'Rich HTML clipboard copying and plain-text export for mobile apps',
            'Live character counter to stay within Gmail 10,000 character limit',
            'Runs 100% in-browser with zero tracking or stored data',
          ],
        })}
      />

      {/* Soft light behind the hero: a gradient, not a blur filter (blur is slow in iOS Safari). */}
      <div className="absolute top-0 left-1/4 w-[840px] h-[840px] -translate-x-[120px] -translate-y-[120px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_60%)] -z-10 pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-8 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
          Free Email Signature Generator
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Fill in your details, pick a layout and copy a signature that works in Gmail, Outlook and Apple Mail.
        </p>
        <p className="text-xs text-slate-500 font-medium">
          Runs in your browser. Your details aren&apos;t saved on our servers.
        </p>
      </section>

      {/* THE TOOL */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <EmailSignatureTool />
      </section>

      {/* COPY BELOW THE TOOL */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-12">
        <div className="space-y-4">
          <h2 className={sectionTitle}>How to make your email signature</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base font-medium">
            <li>Fill in the details you want to show. Leave anything optional empty and it disappears from the layout.</li>
            <li>Pick a template and an accent color, and check the preview.</li>
            <li>Add your logo or photo by pasting a link to the image. It has to be hosted at a public HTTPS address, such as your company website.</li>
            <li>Click Copy signature and paste it into your email app&apos;s signature settings. Steps for each app are below.</li>
          </ol>
        </div>

        {/* Visual illustration in first content section */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden shadow-lg bg-slate-900">
          <Image
            src="/tools/email-signature-generator.webp"
            alt="An email signature card with a name, job title and contact details"
            width={1600}
            height={900}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>How to add it in Gmail, Outlook and Apple Mail</h2>
          <p className={proseP}>
            Gmail on the web: open Settings, then See all settings. On the General tab, find Signature, click Create new, give it a name and paste. Scroll to the bottom and click Save changes.
          </p>
          <p className={proseP}>
            Outlook: in Outlook on the web or the new Outlook, open Settings, then Account, then Signatures. Paste the signature, name it and save. In classic Outlook for Windows, go to File, Options, Mail, Signatures.
          </p>
          <p className={proseP}>
            Apple Mail: open Mail, then Settings (Preferences on older versions), then Signatures. Select the account, click the plus button and paste. If the formatting changes, untick Always match my default message font.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className={sectionTitle}>What makes a signature work everywhere</h2>
          <p className={proseP}>
            Keep the important details as text. Outlook often blocks images until the reader allows them, so a signature that&apos;s one big image can show up blank. Your name, phone number and website in text always appear.
          </p>
          <p className={proseP}>
            Keep it short. Gmail limits a signature to 10,000 characters, and images count toward that limit. The counter above shows how close you are.
          </p>
          <p className={proseP}>
            Keep images small and hosted. Google suggests signature images around 300 to 400 pixels wide and 70 to 100 pixels high. Images must load from a public link; files on an internal server or behind a login won&apos;t show for people outside your company.
          </p>
          <p className={proseP}>
            Expect plain text on phones. The Gmail mobile app only supports plain-text signatures, so use the plain-text copy there.
          </p>
        </div>
      </section>

      {/* EXAMPLES: a card grid, so it uses the navbar width (CLAUDE.md). */}
      <section className="cv-section max-w-6xl mx-auto px-6 pb-16">
        <div className="space-y-6">
          <h2 className={sectionTitle}>Professional email signature examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Example Card 1 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">1. Simple</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 space-y-0.5">
                  <p className="font-bold text-slate-900">Jane Doe</p>
                  <p className="text-slate-600">Account Manager, Example Ltd</p>
                  <p className="text-slate-500">+44 20 7946 0000 · example.com</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">When to use it:</span> everyday email, where less is better.
              </p>
            </div>

            {/* Example Card 2 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">2. With a call to action</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 space-y-1">
                  <p className="font-bold text-slate-900">Jane Doe</p>
                  <p className="text-slate-600">Account Manager, Example Ltd</p>
                  <p className="text-slate-500">+44 20 7946 0000</p>
                  <span className="inline-block px-2.5 py-1 rounded bg-indigo-600 text-white font-semibold text-[11px]">
                    Book a 15-minute call
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">When to use it:</span> sales and account work, when you want replies to turn into meetings.
              </p>
            </div>

            {/* Example Card 3 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">3. With a logo</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 flex items-start gap-3">
                  <div className="w-10 h-10 rounded bg-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-500 shrink-0">
                    LOGO
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-bold text-slate-900">Sam Lee</p>
                    <p className="text-slate-600">Head of Partnerships / Example Inc.</p>
                    <p className="text-slate-500">(555) 010-4477 · example.com</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">When to use it:</span> when your brand helps people recognize you.
              </p>
            </div>

            {/* Example Card 4 */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <div className="space-y-1">
                <p className="font-bold text-slate-900 text-sm">4. Shared inbox</p>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs text-slate-800 space-y-0.5">
                  <p className="font-bold text-slate-900">Example Support Team</p>
                  <p className="text-indigo-600 font-semibold">help.example.com</p>
                  <p className="text-slate-500">Monday to Friday, 9am to 5pm GMT</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">When to use it:</span> team addresses like support@, where no single person signs off.
              </p>
            </div>
          </div>
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
        headline="Signature done? Check who you're writing to."
        supporting="Verify your contact list before your next campaign so your emails reach real inboxes. 1,000 free credits."
        buttonText="Get 1,000 free credits"
      />

      <Footer />
    </main>
  )
}
