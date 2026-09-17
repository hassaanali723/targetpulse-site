import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/de/preise'
const DESC =
  'Preise für die E-Mail-Verifizierung: ab 9,90 $ für 10.000 Credits, bis 0,0007 $ pro E-Mail. Einmalig oder im Abo mit 10 % Rabatt. Credits verfallen nicht.'

export const metadata: Metadata = {
  title: { absolute: 'Preise E-Mail-Verifizierung: 10.000 Credits, 9,90 $ | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'Preise für die E-Mail-Verifizierung',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Preise',
  h1Lead: 'Preise für die',
  h1Accent: 'E-Mail-Verifizierung',
  intro: (
    <>
      Sie zahlen nur, was Sie nutzen. Keine Grundgebühr, keine versteckten Kosten, und Credits verfallen nicht.
      Sie starten mit <strong className="text-indigo-600 font-extrabold">1.000 kostenlosen Test-Credits</strong>, ohne Karte.
    </>
  ),
  contactHref: '/de/kontakt',
  includedTitle: 'In jedem Paket enthalten',
  includedText: 'Alle Funktionen, in allen Paketen. Keine Stufen, keine Sperren.',
  features: [
    'Syntaxprüfung',
    'Domain- und MX-Prüfung',
    'SMTP-Prüfung des Postfachs',
    'Erkennung von Wegwerfadressen',
    'Erkennung von Rollen-Adressen',
    'Catch-all-Verifizierung',
    'Upload und Massenprüfung',
    'Export als CSV, Excel und JSON',
    'Entfernen von Duplikaten',
    'Ausführliche Prüfberichte',
    'Credits ohne Verfall',
  ],
  rulesTitle: 'Preise, die man versteht',
  rulesText: 'Vier Regeln, die die Preise klar und planbar halten.',
  rules: [
    { title: '1 Credit = 1 E-Mail', body: 'Jede Prüfung verbraucht genau einen Credit Ihres Guthabens, auch bei Catch-all-Adressen und hinter Sicherheits-Gateways.' },
    { title: 'Mengenrabatt', body: 'Je mehr Credits Sie kaufen, desto weniger zahlen Sie pro Credit: von 0,0017 $ bis 0,0007 $.' },
    { title: '10 % Rabatt im Abo', body: 'Mit dem Monatsabo sparen Sie automatisch 10 % auf jedes Paket.' },
    { title: 'Credits verfallen nicht', body: 'Nutzen Sie sie, wann Sie wollen. Sie bleiben auf Ihrem Konto, solange Sie sie brauchen.' },
  ],
  faqTitle: 'Häufige Fragen',
  faqText: 'Credits, Zahlung und Erstattung.',
  faq: [
    { q: 'Welche Zahlungsarten akzeptieren Sie?', a: 'Alle gängigen Kredit- und Debitkarten über Stripe. Die Preise sind in US-Dollar; Ihre Bank rechnet um.' },
    { q: 'Kann ich das Abo jederzeit kündigen?', a: 'Ja, jederzeit. Alle Credits auf Ihrem Konto bleiben erhalten, und es wird nichts weiter abgebucht.' },
    { q: 'Was passiert, wenn die Credits aufgebraucht sind?', a: 'Sie kaufen nach, wann Sie wollen. Das Guthaben ist sofort aktualisiert.' },
    { q: 'Gibt es Rückerstattungen?', a: 'Credits sind in der Regel nicht erstattbar. Ausnahmefälle prüfen wir einzeln; "unbekannt"-Ergebnisse werden in Credits erstattet. Details stehen in der Rückerstattungsrichtlinie.' },
    { q: 'Gibt es einen Mindestkauf?', a: 'Das kleinste Paket sind 3.000 Credits (5,00 $). Vor dem Kauf haben Sie 1.000 kostenlose Test-Credits.' },
    { q: 'Verfallen Credits?', a: 'Nie. Sie bleiben auf Ihrem Konto, bis Sie sie nutzen.' },
  ],
  ctaTitle: 'Starten Sie mit 1.000 Gratis-Credits',
  ctaText: 'Keine Karte nötig. Prüfen Sie die ersten E-Mails kostenlos und sehen Sie die Ergebnisse in Sekunden.',
  ctaButton: 'Gratis-Credits sichern',
  ctaHref: '/de/registrieren',
}

export default function PreisePage() {
  return <PricingPageL10n locale="de" content={content} />
}
