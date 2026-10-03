import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// German home. No head term of its own in the data (the demand sits on
// /de/email-adresse-pruefen), so the page is the product pitch in German:
// what Giggal does with catch-all addresses, how bulk works, prices, FAQ.
// The hero sends the visitor to the free checker first and to sign-up second.

const DESC =
  'E-Mail-Verifizierung, die auf Catch-all-Domains gültig oder ungültig liefert statt "riskant". 98,5 % Genauigkeit, Massenprüfung, API, 1.000 Credits gratis.'

export const metadata: Metadata = {
  title: { absolute: 'E-Mail-Verifizierungsdienst und Massenprüfung | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/de', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'E-Mail-Verifizierungsdienst und Massenprüfung',
    description: DESC,
    url: 'https://giggal.ai/de',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
  },
  twitter: { card: 'summary_large_image', title: 'E-Mail-Verifizierungsdienst und Massenprüfung', description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'E-Mail-Verifizierungsdienst',
  h1Accent: 'für weniger Bounces',
  heroSub: (
    <>
      E-Mail-Verifizierungsdienst mit Massenprüfung: Sie sehen, welche Adressen echt sind, auch auf{' '}
      <Link href="/de/catch-all-verifizierung" className={heroLink}>Catch-all-Domains</Link>.
    </>
  ),
  rating: { on: 'auf', reviews: (n) => `(${n} Bewertungen)` },
  email: { label: 'Zu prüfende E-Mail-Adresse', placeholder: 'name@firma.de', button: 'Gratis prüfen' },
  listQuestion: 'Eine ganze Liste bereinigen?',
  listCta: '1.000 kostenlose E-Mail-Prüfungen sichern',
  noCard: 'Keine Kreditkarte nötig.',
  stats: [
    { pre: '>\u00a0', n: '500\u00a0Mio.', l: 'Geprüfte E-Mails' },
    { n: '98,5', suf: '\u00a0%', l: 'Genauigkeit bei Firmenlisten' },
    { pre: '<\u00a0', n: '3', suf: '\u00a0%', l: 'Bounce-Rate nach der Bereinigung' },
    { n: '1.000', l: 'Gratis-Credits, ohne Karte' },
  ],
  bulk: {
    id: 'massenpruefung',
    title: 'Massenprüfung für Ihre ganze Liste',
    sub: 'Laden Sie Ihre Liste einmal hoch, wir prüfen jede einzelne Adresse.',
    points: [
      'Gültig oder ungültig für jede Adresse',
      'Auch Catch-all-Adressen erhalten ein klares Ergebnis',
      'CSV oder Excel, bis zu 50.000 Adressen pro Datei',
      'Bereinigte Liste herunterladen, sobald sie fertig ist',
    ],
  },
  catchAll: {
    title: 'Warum Catch-all-Adressen Aufmerksamkeit brauchen',
    intro: (
      <>
        Manche Firmen-Mailserver nehmen jede Adresse an, echt oder erfunden. Man spricht dann von einer{' '}
        <Link href="/de/catch-all-verifizierung" className={link}>Catch-all-Domain</Link>. Die meisten
        Prüftools erkennen den Unterschied nicht, markieren diese Adressen als „riskant“ und überlassen Ihnen die
        Entscheidung.
      </>
    ),
    others: 'Die meisten E-Mail-Prüfer',
    othersDetail: 'Catch-all, keine klare Antwort',
    ourDetail: 'Catch-all, Postfach gefunden',
    risky: 'Riskant',
    deliverable: 'Zustellbar',
    othersText: 'Jetzt liegt es bei Ihnen: senden und einen Bounce riskieren oder einen Kontakt löschen, der vielleicht echt ist.',
    ourText: 'Sie wissen, dass die Adresse echt ist, und senden. Ohne Rätselraten.',
  },
  features: {
    title: 'Listen in Masse bereinigen, API und Integrationen mit einem Credit-Guthaben',
    intro: 'Liste hochladen, API aufrufen oder das CRM verbinden: Jeder Weg führt dieselbe Prüfung aus.',
    items: [
      { title: 'Listenbereinigung im großen Stil', body: 'CSV- oder Excel-Datei hochladen, Ergebnisse in Minuten.', points: ['Bis zu 50.000 Adressen pro Datei', 'Bereinigte Liste als CSV herunterladen'], link: 'Liste kostenlos bereinigen' },
      { title: 'Catch-all-Verifizierung', body: 'Ein klares Ergebnis für Catch-all-Domains statt „riskant“.', points: ['Ein Credit, wie jede andere Prüfung', 'Funktioniert hinter Gateways wie Mimecast und Proofpoint'], link: 'So funktioniert die Catch-all-Verifizierung' },
      { title: 'API für Entwickler', body: 'Prüfen Sie Adressen in Anmeldeformularen und in Ihren Apps.', points: ['Eine Adresse oder eine ganze Liste pro Aufruf', 'API-Schlüssel aus Ihrem Dashboard'], link: 'API-Dokumentation (auf Englisch)' },
      { title: 'CRM- und App-Integrationen', body: 'Senden Sie bereinigte Kontakte an HubSpot, Mailchimp und weitere Tools.', points: ['Funktioniert mit den Tools, die Sie schon nutzen', 'Zapier und n8n für alles andere'], link: 'Alle Integrationen ansehen' },
      { title: 'Bezahlung nach Verbrauch', body: 'Alle Preise sind öffentlich einsehbar. Credits verfallen nicht.', points: ['Kein Abo nötig', 'Nachkaufen nach Bedarf'], link: 'Alle Preise ansehen' },
      { title: 'Priorisierter Support', body: 'Hängen Sie fest? Unsere Techniker helfen Ihnen direkt.', points: ['Echte Menschen, kein Bot', 'Per E-Mail oder über das Kontaktformular'], link: 'Support kontaktieren' },
    ],
    preview: {
      done: 'Fertig',
      deliverable: 'Zustellbar',
      undeliverable: 'Unzustellbar',
      otherTools: 'Andere Tools',
      risky: 'Riskant',
      credit: '1 Credit',
      email: '1 E-Mail',
      creditNote: 'Catch-all-Verifizierung inklusive',
      reply: '24 Stunden',
      replyNote: 'Unsere übliche Antwortzeit.',
    },
  },
  pricing: {
    id: 'preise',
    claimTop: 'Niedriger Preis.',
    claimBottom: 'Starker Gegenwert.',
    fallbackTitle: 'Einfache Preise, in US-Dollar',
    priceLine: (p) => `${p} für 10.000 E-Mails, Catch-all-Prüfung inklusive.`,
    claim: { before: '', link: 'Mit anderen Verifizierern vergleichen', after: '.' },
    text: 'Sie zahlen nur, was Sie nutzen. Credits verfallen nicht.',
  },
  switcher: {
    id: 'alternativen',
    title: 'Sie wechseln von einem anderen Verifizierer?',
    intro: 'So schneidet Giggal.ai im Vergleich zu anderen E-Mail-Verifizierungstools bei Catch-all, Preisen und Genauigkeit ab.',
    items: [
      { name: 'ZeroBounce', href: '/de/zerobounce-alternative', blurb: 'Löst die Catch-all-Adressen auf, die ZeroBounce als „riskant“ einstuft.' },
      { name: 'NeverBounce', href: '/de/neverbounce-alternative', blurb: 'Bezahlung nach Verbrauch, mit Credits, die nie verfallen.' },
      { name: 'Hunter', href: '/de/hunter-alternative', blurb: 'Ein reiner Verifizierer statt eines E-Mail-Finders mit eingebauter Prüfung.' },
      { name: 'Snov.io', href: '/de/snovio-alternative', blurb: 'Ein reiner Verifizierer statt eines Moduls in einer Outreach-Plattform.' },
      { name: 'Instantly', href: '/de/instantly-alternative', blurb: 'Listen samt Catch-all prüfen, bevor Sie sie in Ihr Versandtool importieren.' },
      { name: 'ZeroBounce vs. NeverBounce', href: '/de/vergleich/zerobounce-vs-neverbounce', blurb: 'Wie die beiden bei Catch-all, Preisen und Credits abschneiden.' },
    ],
    all: 'Alle 28 Verifizierer vergleichen (auf Englisch)',
  },
  integrations: {
    title: 'Verbinden Sie Ihren Marketing-Stack',
    sub: 'Giggal.ai lässt sich direkt mit führenden CRMs und E-Mail-Diensten verbinden und synchronisiert bereinigte Kontakte automatisch.',
    more: '80+ weitere',
    alt: (n) => `${n}-Integration für E-Mail-Verifizierung mit Giggal.ai`,
  },
  reviewBadges: REVIEW_BADGES.de,
  reviewWall: REVIEW_WALL.de,
  mcp: MCP.de,
  faq: {
    title: 'Häufige Fragen',
    sub: 'Kurze Antworten zu Catch-all, Genauigkeit, Preisen und Einrichtung.',
    more: 'Weitere Fragen?',
    moreLink: 'Schreiben Sie uns',
    items: [
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
        a: 'Ja: CSV oder Excel, bis zu 50.000 Adressen pro Datei. Die Ergebnisse kommen auch bei großen Listen in Minuten, und die bereinigte Liste laden Sie als CSV herunter.',
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
  },
  ctaHeadline: 'Starten Sie mit 1.000 kostenlosen Prüfungen',
}

export default function HomeDe() {
  return <HomeL10n locale="de" content={content} />
}
