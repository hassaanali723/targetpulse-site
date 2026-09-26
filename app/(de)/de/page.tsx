import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// German home. No head term of its own in the data (the demand sits on
// /de/email-adresse-pruefen), so the page is the product pitch in German:
// what Giggal does with catch-all addresses, how bulk works, prices, FAQ.
// The hero sends the visitor to the free checker first and to sign-up second.

const DESC =
  'E-Mail-Verifizierung, die auf Catch-all-Domains gültig oder ungültig liefert statt "riskant". 98,5 % Genauigkeit, Massenprüfung, API, 1.000 Credits gratis.'

export const metadata: Metadata = {
  title: { absolute: 'E-Mail-Verifizierung für Catch-All-Domains | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/de', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'E-Mail-Verifizierung für Catch-All-Domains',
    description: DESC,
    url: 'https://giggal.ai/de',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
  },
  twitter: { card: 'summary_large_image', title: 'E-Mail-Verifizierung für Catch-All-Domains', description: DESC },
}

const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'E-Mail-Verifizierung,',
  h1Accent: 'die Catch-all auflöst',
  para1: (
    <>
      Ein E-Mail-Verifizierungsdienst, der das Postfach selbst prüft, nicht nur die Syntax. Bounce-Rate{' '}
      <strong className="text-indigo-600 font-extrabold">unter 3 %</strong>, und die{' '}
      <strong className="text-slate-900 font-extrabold">30 % jeder B2B-Liste</strong>, die andere Tools als
      &quot;riskant&quot; markieren, werden wieder zustellbar.
    </>
  ),
  para2: (
    <>
      <a href="#massenpruefung" className={link}>Massenprüfung</a> bis 50.000 Adressen pro Datei, dazu eine API.
      Funktioniert auf{' '}
      <Link href="/de/catch-all-verifizierung" className={link}>Catch-all-Domains</Link>.
    </>
  ),
  freeTitle: '1.000 kostenlose Prüfungen',
  freeText: 'Sofort mit der Listenbereinigung starten. Keine Kreditkarte nötig.',
  ctaPrimary: { label: 'E-Mail-Adresse kostenlos prüfen', href: '/de/email-adresse-pruefen' },
  ctaSecondary: { label: 'Preise ansehen', href: '/de/preise' },
  proof: '4,8 auf G2 · über 500 Millionen geprüfte E-Mails',
  stats: [
    { n: '500M+', l: 'Geprüfte E-Mails' },
    { n: '98,5 %', l: 'Genauigkeit auf Firmenlisten' },
    { n: '< 3 %', l: 'Bounce-Rate nach der Bereinigung' },
    { n: '1.000', l: 'Gratis-Credits, ohne Karte' },
  ],
  consoleTitle: 'Eine Adresse in Echtzeit prüfen',
  consoleText: 'Derselbe Motor wie bei der Massenprüfung, eine Adresse nach der anderen. Kostenlos und ohne Anmeldung.',
  catchAll: {
    title: 'Warum Catch-all-Adressen ein echtes Ergebnis brauchen',
    intro: (
      <>
        Eine{' '}
        <Link href="/de/catch-all-verifizierung" className={link}>Catch-all-Domain</Link> nimmt Post an jede
        Adresse an, ob es sie gibt oder nicht. Die SMTP-Antwort, auf die Standard-Tools bauen, sagt dort
        nichts. Sie schreiben &quot;riskant&quot; und lassen Sie bei einem Drittel der Liste raten:
      </>
    ),
    standardLabel: 'Standard-Verifizierer',
    standardStat: '35 %',
    standardCaption: 'Durchschnittliches Bounce-Risiko',
    standardText: 'Sie zwingen Sie, gültige Kontakte wegzuwerfen oder die Sperre Ihrer Versanddomains zu riskieren.',
    verifiedBadge: 'Geprüft',
    verifiedStat: '< 3 %',
    verifiedCaption: 'Bounces beim Versand',
    verifiedText: 'Erkennt aktive Firmenpostfächer, damit Ihr Outreach mit der Gewissheit startet, gelesen zu werden.',
  },
  featuresId: 'massenpruefung',
  featuresTitle: 'Listen in Masse bereinigen, API und Integrationen mit einem Credit-Guthaben',
  featuresText: 'Liste hochladen, API aufrufen oder das CRM verbinden: Jeder Weg führt dieselbe Prüfung aus.',
  features: [
    { title: 'Listenbereinigung in Masse', body: 'CSV- oder TXT-Datei hochladen und Tausende Kontakte in Minuten prüfen, Duplikate entfernt.' },
    { title: 'Catch-all-Verifizierung', body: 'Bestätigt die Zustellbarkeit auf Catch-all-Firmendomains, die Standard-Checks als unbekannt markieren.' },
    { title: 'Sicherheits-Gateways', body: 'Prüft Postfächer hinter Proofpoint, Mimecast und Barracuda, wo die meisten Verifizierer aufhören.' },
    { title: 'API für Entwickler', body: 'Echtzeit-Prüfung in Registrierungsformulare oder eigene Anwendungen einbauen.' },
    { title: 'Integrationen', body: 'Geprüfte Kontakte mit HubSpot, Mailchimp, Zapier, n8n und den gängigen Outreach-Tools synchronisieren.' },
    { title: 'Öffentliche Preise', body: 'Jede Volumenstufe ist veröffentlicht, einmalig oder im Abo mit 10 % Rabatt.' },
  ],
  pricingId: 'preise',
  pricingTitle: 'Einfache Preise, in US-Dollar',
  pricingText: 'Sie zahlen nur, was Sie nutzen. Credits verfallen nicht.',
  contactHref: '/de/kontakt',
  faqTitle: 'Häufige Fragen',
  faqMore: 'Weitere Fragen?',
  faqMoreLink: 'Schreiben Sie uns',
  faq: [
    {
      q: 'Was macht Giggal.ai anders als andere Verifizierer?',
      a: 'Es löst Catch-all-Adressen und Adressen hinter Sicherheits-Gateways (Mimecast, Proofpoint, Barracuda) mit einem klaren Ergebnis auf, gültig oder ungültig, statt mit dem Etikett "riskant", bei dem andere Tools aufgeben. In einer B2B-Liste ist das etwa ein Drittel der Adressen.',
    },
    {
      q: 'Wie genau ist die Prüfung?',
      a: '98,5 % auf Firmenlisten, mit einer Bounce-Rate unter 3 % nach der Bereinigung. Für "unbekannt"-Ergebnisse werden die Credits erstattet.',
    },
    {
      q: 'Wie funktionieren die Credits?',
      a: 'Eine Prüfung verbraucht einen Credit, egal welcher Adresstyp: Catch-all und Gateway inklusive. Credits verfallen nicht. Die ersten 1.000 sind gratis, ohne Karte.',
    },
    {
      q: 'Kann ich eine Datei hochladen?',
      a: 'Ja: CSV, TXT oder Excel. Die Ergebnisse kommen auch bei großen Listen in Minuten, mit Export als CSV, Excel oder JSON und entfernten Duplikaten.',
    },
    {
      q: 'Gibt es eine API?',
      a: 'Ja, eine REST-API für Einzel- und Massenprüfung, dazu ein MCP-Server, um die Prüfung aus Claude, ChatGPT und Cursor zu nutzen. Die Dokumentation ist auf Englisch.',
    },
    {
      q: 'Kann ich eine einzelne Adresse ohne Registrierung prüfen?',
      a: 'Ja, mit dem kostenlosen E-Mail-Prüfer: keine Anmeldung, keine Karte, keine E-Mail an den Empfänger.',
    },
  ],
  ctaHeadline: 'Starten Sie mit 1.000 kostenlosen Prüfungen',
}

export default function HomeDe() {
  return <HomeL10n locale="de" content={content} />
}
