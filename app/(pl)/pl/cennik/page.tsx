import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Title and H1 carry "cennik weryfikacji email" (keyword plan section 3).
// Polish number format: 1000, 10 000 (no-break space from 5 digits), 9,90 USD.

const PATH = '/pl/cennik'
const DESC =
  'Cennik weryfikacji email: od 9,90 USD za 10 000 kredytów, do 0,0007 USD za adres. Płatność za użycie lub abonament z rabatem 10%. Kredyty nie wygasają.'

export const metadata: Metadata = {
  title: { absolute: 'Cennik weryfikacji email: 10 000 adresów za 9,90 USD | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Cennik weryfikacji email',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Cennik',
  h1Lead: 'Cennik weryfikacji',
  h1Accent: 'email',
  intro: (
    <>
      Płacisz tylko za to, czego używasz. Nie ma obowiązkowego abonamentu ani ukrytych opłat, a kredyty nie wygasają.
      Na start dostajesz <strong className="text-indigo-600 font-extrabold">1000 darmowych kredytów próbnych</strong>, bez karty.
    </>
  ),
  contactHref: '/pl/kontakt',
  includedTitle: 'Każdy pakiet zawiera wszystko',
  includedText: 'Wszystkie funkcje w każdym pakiecie. Bez poziomów i bez blokad.',
  features: [
    'Weryfikacja skrzynki pocztowej',
    'Weryfikacja domeny i rekordów MX',
    'Wykrywanie bramek SEG',
    'Wykrywanie adresów jednorazowych',
    'Wykrywanie adresów funkcyjnych',
    'Weryfikacja catch-all',
    'Import i masowa weryfikacja',
    'Eksport do CSV, Excel i JSON',
    'Usuwanie duplikatów',
    'Szczegółowe raporty weryfikacji',
    'Kredyty bez terminu ważności',
  ],
  rulesTitle: 'Prosty cennik',
  rulesText: 'Cztery zasady, dzięki którym ceny są jasne i przewidywalne.',
  rules: [
    { title: '1 kredyt = 1 adres', body: 'Każda weryfikacja zużywa dokładnie jeden kredyt z twojego salda. Dotyczy to także adresów catch-all i adresów za bramkami bezpieczeństwa.' },
    { title: 'Rabat za wolumen', body: 'Im więcej kredytów kupujesz, tym mniej płacisz za kredyt: od 0,0017 USD do 0,0007 USD.' },
    { title: '10% rabatu w abonamencie', body: 'W abonamencie miesięcznym automatycznie oszczędzasz 10% na każdym pakiecie.' },
    { title: 'Kredyty nie wygasają', body: 'Używasz ich, kiedy chcesz. Zostają na koncie tak długo, jak ich potrzebujesz.' },
  ],
  faqTitle: 'Najczęstsze pytania',
  faqText: 'Kredyty, płatności i zwroty.',
  faq: [
    { q: 'Jakie metody płatności akceptujecie?', a: 'Wszystkie popularne karty kredytowe i debetowe, przez Stripe. Ceny są w dolarach amerykańskich. Kurs wymiany stosuje twój bank.' },
    { q: 'Czy mogę zrezygnować z abonamentu w dowolnej chwili?', a: 'Tak, w dowolnej chwili. Zachowujesz wszystkie kredyty na koncie i nie płacisz nic więcej.' },
    { q: 'Co się stanie, gdy skończą mi się kredyty?', a: 'Dokupujesz je, kiedy chcesz. Saldo aktualizuje się od razu.' },
    { q: 'Czy zwracacie pieniądze?', a: 'Co do zasady kredyty nie podlegają zwrotowi. Wyjątkowe przypadki rozpatrujemy indywidualnie. Za wyniki „nieznany” zwracamy kredyty. Szczegóły są w polityce zwrotów.' },
    { q: 'Czy jest minimalny zakup?', a: 'Najmniejszy pakiet to 3000 kredytów (5,00 USD). Przed zakupem masz do dyspozycji 1000 darmowych kredytów próbnych.' },
    { q: 'Czy kredyty wygasają?', a: 'Nigdy. Zostają na koncie, dopóki ich nie wykorzystasz.' },
  ],
  ctaTitle: 'Zacznij z 1000 darmowych kredytów',
  ctaText: 'Bez karty. Sprawdź pierwsze adresy za darmo i zobacz wyniki w kilka sekund.',
  ctaButton: 'Odbierz darmowe kredyty',
  ctaHref: '/pl/rejestracja',
}

export default function CennikPage() {
  return <PricingPageL10n locale="pl" content={content} />
}
