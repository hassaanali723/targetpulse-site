import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/nl/registreren'
const DESC =
  'Maak je Giggal.ai-account in een paar seconden aan. Je krijgt 1.000 gratis credits, zonder creditcard. Controleer catch-all-domeinen met 98,5% nauwkeurigheid.'

export const metadata: Metadata = {
  title: { absolute: 'Registreren: 1.000 gratis e-mailverificaties | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: 'Account aanmaken: 1.000 gratis verificaties',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Registreren',
  h1Lead: 'Maak je account aan',
  h1Accent: 'en start met 1.000 credits',
  intro: 'Maak je Giggal.ai-account aan in minder dan 30 seconden. De eerste 1.000 controles zijn gratis. Dat geldt ook voor catch-all- en accept-all-domeinen die andere tools als "onbekend" markeren. Het dashboard is voorlopig in het Engels.',
  ctaPrimary: 'Gratis account aanmaken',
  pricingLabel: 'Bekijk de prijzen',
  pricingHref: '/nl/prijzen',
  trustPoints: ['Geen creditcard nodig', 'Credits verlopen niet', 'Op elk moment opzegbaar'],
  perksKicker: 'Wat je krijgt',
  perksTitle: 'Alles wat je nodig hebt om je lijst op te schonen',
  perksText: 'Volledige toegang tot alle functies tijdens de gratis proef. Geen afgeschermde tools en geen kleine lettertjes.',
  perks: [
    { title: '1.000 gratis credits', body: 'De eerste 1.000 controles zijn gratis. Geen creditcard nodig, en ze verlopen niet.' },
    { title: 'Resultaten in realtime', body: 'Upload een lijst en zie de resultaten regel voor regel binnenkomen.' },
    { title: 'Catch-all-verificatie', body: 'Duidelijke resultaten, geldig of ongeldig, op catch-all-domeinen waar andere tools stoppen.' },
    { title: 'Betalen per gebruik', body: 'Vanaf US$ 5 voor 3.000 credits. Credits verlopen niet en je zegt op wanneer je wilt.' },
  ],
  ctaTitle: 'Klaar om je lijst op te schonen?',
  ctaText: 'Registreren duurt 30 seconden. De eerste 1.000 controles zijn gratis.',
  ctaButton: 'Gratis registreren',
}

export default function RegistrerenPage() {
  return <SignupPageL10n locale="nl" content={content} />
}
