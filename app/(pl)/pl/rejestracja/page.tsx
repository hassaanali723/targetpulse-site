import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/pl/rejestracja'
const DESC =
  'Załóż konto Giggal.ai w kilka sekund. Dostajesz 1000 darmowych kredytów na weryfikację bez karty. Sprawdzaj domeny catch-all z dokładnością 98,5%.'

export const metadata: Metadata = {
  title: { absolute: 'Rejestracja: 1000 darmowych weryfikacji email | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Załóż konto: 1000 darmowych weryfikacji',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Rejestracja',
  h1Lead: 'Załóż konto',
  h1Accent: 'i zacznij z 1000 kredytów',
  intro: 'Załóż konto Giggal.ai w mniej niż 30 sekund. Pierwsze 1000 weryfikacji jest na nasz koszt, także na domenach catch-all i accept-all, które inne narzędzia oznaczają jako „nieznany”. Panel jest na razie po angielsku.',
  ctaPrimary: 'Załóż darmowe konto',
  pricingLabel: 'Zobacz cennik',
  pricingHref: '/pl/cennik',
  trustPoints: ['Bez karty', 'Kredyty nie wygasają', 'Rezygnujesz w dowolnej chwili'],
  perksKicker: 'Co dostajesz',
  perksTitle: 'Wszystko, czego potrzebujesz do czyszczenia listy',
  perksText: 'Darmowy okres próbny daje pełny dostęp do wszystkich funkcji. Żadne narzędzie nie jest zablokowane.',
  perks: [
    { title: '1000 darmowych kredytów', body: 'Pierwsze 1000 weryfikacji dostajesz za darmo. Bez karty i bez terminu ważności.' },
    { title: 'Wyniki w czasie rzeczywistym', body: 'Prześlij listę i obserwuj, jak wyniki pojawiają się wiersz po wierszu.' },
    { title: 'Weryfikacja catch-all', body: 'Jasny wynik, prawidłowy lub nieprawidłowy, na domenach catch-all, które inne narzędzia pomijają.' },
    { title: 'Płatność za użycie', body: 'Od 5 USD za 3000 kredytów. Kredyty nie wygasają, a zrezygnować możesz w dowolnej chwili.' },
  ],
  ctaTitle: 'Chcesz wyczyścić swoją listę?',
  ctaText: 'Rejestracja trwa 30 sekund. Pierwsze 1000 weryfikacji jest za darmo.',
  ctaButton: 'Zarejestruj się za darmo',
}

export default function RejestracjaPage() {
  return <SignupPageL10n locale="pl" content={content} />
}
