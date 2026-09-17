import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/de/registrieren'
const DESC =
  'Giggal.ai-Konto kostenlos in Sekunden erstellen. 1.000 Gratis-Credits für die E-Mail-Prüfung, keine Karte. Catch-all-Domains mit 98,5 % Genauigkeit prüfen.'

export const metadata: Metadata = {
  title: { absolute: 'Kostenlos registrieren: 1.000 Prüfungen gratis | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'Kostenlos registrieren: 1.000 E-Mail-Prüfungen inklusive',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Registrieren',
  h1Lead: 'Kostenlos registrieren',
  h1Accent: 'und mit 1.000 Credits starten',
  intro: 'Erstellen Sie Ihr Giggal.ai-Konto in unter 30 Sekunden. Die ersten 1.000 Prüfungen gehen auf uns, inklusive der Catch-all- und Accept-all-Domains, die andere Tools als "unbekannt" markieren. Der Kundenbereich ist derzeit auf Englisch.',
  ctaPrimary: 'Kostenloses Konto erstellen',
  pricingLabel: 'Preise ansehen',
  pricingHref: '/de/preise',
  trustPoints: ['Keine Kreditkarte nötig', 'Credits verfallen nicht', 'Jederzeit kündbar'],
  perksKicker: 'Was enthalten ist',
  perksTitle: 'Alles, was Sie zum Bereinigen Ihrer Liste brauchen',
  perksText: 'Voller Zugang zu jeder Funktion in der kostenlosen Testphase. Keine gesperrten Tools, keine Sternchen.',
  perks: [
    { title: '1.000 Gratis-Credits', body: 'Die ersten 1.000 Prüfungen schenken wir Ihnen. Keine Karte, kein Verfall.' },
    { title: 'Ergebnisse in Echtzeit', body: 'Liste hochladen und zusehen, wie die Prüfungen Zeile für Zeile eintreffen.' },
    { title: 'Catch-all-Verifizierung', body: 'Klare Ergebnisse, gültig oder ungültig, auf den Catch-all-Domains, die andere Tools überspringen.' },
    { title: 'Preise nach Verbrauch', body: 'Ab 5 $ für 3.000 Credits. Credits verfallen nicht, jederzeit kündbar.' },
  ],
  ctaTitle: 'Bereit, Ihre Liste zu bereinigen?',
  ctaText: 'Registrierung in 30 Sekunden. Die ersten 1.000 Prüfungen sind gratis.',
  ctaButton: 'Kostenlos registrieren',
}

export default function RegistrierenPage() {
  return <SignupPageL10n locale="de" content={content} />
}
