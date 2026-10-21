import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Title and H1 carry "weryfikacja catch-all" (keyword plan section 3).
// "Catch-all" and "accept-all" stay in English, as the terminology sheet says.

const PATH = '/pl/weryfikacja-catch-all'
const DESC =
  'Weryfikacja catch-all: wynik prawidłowy lub nieprawidłowy na domenach accept-all, także za Mimecast i Proofpoint. Dokładność 98,5%, 1 kredyt za adres.'

export const metadata: Metadata = {
  title: { absolute: 'Weryfikacja catch-all: adresy na domenach catch-all | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Weryfikacja catch-all: adresy na domenach catch-all',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Weryfikacja catch-all',
  h1Accent: 'Weryfikacja catch-all',
  h1Tail: 'z jasnym wynikiem dla każdego adresu',
  intro:
    'Większość weryfikatorów zatrzymuje się na domenach catch-all i accept-all. Giggal.ai sprawdza, czy każda skrzynka naprawdę istnieje, także za bramkami bezpieczeństwa, takimi jak Mimecast i Proofpoint. Dokładność wynosi 98,5%.',
  toolLine: (
    <>
      Aby sprawdzić jeden adres, użyj{' '}
      <Link href="/pl/weryfikator-email" className="text-indigo-600 font-bold hover:underline">darmowego weryfikatora email</Link>.
    </>
  ),
  ctaPrimary: 'Zacznij weryfikować adresy catch-all',
  ctaSecondary: { label: 'Zobacz cennik', href: '/pl/cennik' },
  ctaNote: 'Na start 1000 darmowych kredytów. Bez karty.',
  card: {
    kicker: 'Pogłębiona weryfikacja włączona', title: 'Wyniki listy', file: 'kontakty_2026.csv',
    valid: '39 113', invalid: '10 508', risky: '0',
    note: 'W typowej liście około 30% adresów jest na domenach catch-all. Sprawdzamy je po kolei. Większość z nich jest prawidłowa.',
    labels: { valid: 'Prawidłowe', invalid: 'Nieprawidłowe', risky: 'Ryzykowne' },
  },
  whatKicker: 'Kontekst',
  whatTitle: 'Co to jest domena catch-all',
  whatParas: [
    'Domena catch-all przyjmuje każdą wiadomość, także na adresy, które nie istnieją. Serwer odpowiada ogólną akceptacją na każdy adres. Dlatego zwykła kontrola nie może ustalić, czy za adresem jest prawdziwa skrzynka.',
    'W typowej liście sprzedażowej około 30% kontaktów jest na domenach catch-all. Większość narzędzi rozpoznaje ten schemat, przerywa sprawdzanie i oznacza wszystko jako ryzykowne lub nieznane. Zostaje ci długa lista kontaktów, których nie możesz bezpiecznie użyć.',
    'Masz wtedy dwie złe opcje. Możesz wysłać wiadomości i ryzykować odbicia, pułapki spamowe i gorszą reputację. Możesz też usunąć te adresy i stracić prawdziwych klientów. Weryfikacja catch-all rozwiązuje ten problem. Sprawdza, czy skrzynka naprawdę istnieje, zamiast zgadywać.',
  ],
  sameH3: 'Catch-all i accept-all to to samo',
  sameParas: [
    'Jedne weryfikatory piszą „accept all”, inne „catch-all” albo „catchall”. Wszystkie te nazwy opisują jedną konfigurację: domenę, której serwer pocztowy odpowiada 250 OK na każdego odbiorcę. Niezależnie od etykiety w twoim poprzednim narzędziu rozwiązanie jest to samo i opisuje je ta strona.',
  ],
  howKicker: 'Jak to działa',
  howTitle: 'Jak Giggal.ai weryfikuje adresy catch-all',
  howText: 'Każdy adres catch-all przechodzi kilka poziomów weryfikacji. Razem dają jeden jasny wynik. Widzisz „prawidłowy” lub „nieprawidłowy”, a nie raport techniczny.',
  signals: [
    { title: 'Pogłębiona weryfikacja skrzynki', body: 'Sprawdzamy, czy każda skrzynka naprawdę istnieje, a nie tylko to, że domena przyjmuje wszystko. Zwykła kontrola widzi ogólną akceptację i na tym kończy. My sprawdzamy dalej, aż do jasnej odpowiedzi.' },
    { title: 'Sygnały zaufania domeny', body: 'Analizujemy konfigurację każdej domeny: rekordy SPF, DKIM i DMARC, certyfikaty SSL i reputację hostingu. Na dobrze skonfigurowanych domenach prawdziwe skrzynki są znacznie częstsze.' },
    { title: 'Bramki bezpieczeństwa', body: 'Adresy chronione przez bramki, takie jak Mimecast, Proofpoint i Barracuda, sprawdzamy bezpośrednio. Bramka nie ukrywa już, czy za adresem jest prawdziwa skrzynka.' },
  ],
  compareKicker: 'Jasne wyniki',
  compareTitle: 'Wyniki zamiast zgadywania',
  compareText: 'Różnica między zwykłym weryfikatorem a Giggal.ai na tej samej liście 48 000 adresów.',
  compare: {
    typicalLabel: 'Zwykły weryfikator', giggalLabel: 'Giggal.ai', count: 'Sprawdzono 48 028 adresów', catchAllLabel: 'Catch-all',
    typical: ['31 566', '5982', '10 480'], giggal: ['39 950', '8078', '0'],
    typicalNote: 'Ponad 10 000 kontaktów catch-all, do których nie możesz bezpiecznie pisać. Około 80% z nich to prawdziwe adresy, ale nie wiesz, które.',
    giggalNote: 'Około 8400 dodatkowych kontaktów, na które można dostarczyć pocztę, odzyskanych z grupy catch-all. Każdy adres ma jasny wynik.',
  },
  whoKicker: 'Dla kogo',
  whoTitle: 'Kto korzysta z weryfikacji catch-all',
  audience: [
    { title: 'Zespoły cold mailingu', body: 'Wysyłasz tylko do sprawdzonych kontaktów. Masz mniej odbić, więcej odpowiedzi i zdrowsze domeny wysyłkowe.' },
    { title: 'Agencje', body: 'Czyścisz listy każdego klienta tym samym weryfikatorem. Raporty i dostarczalność pozostają przewidywalne.' },
    { title: 'Sales operations', body: 'W CRM zostają tylko kontakty, które naprawdę dostają twoje sekwencje i aktualizacje.' },
    { title: 'Newslettery', body: 'Chronisz otwarcia i kliknięcia. Usuwasz adresy, które wyglądają na prawdziwe, ale nigdy nie odbierają poczty.' },
  ],
  faqTitle: 'Najczęstsze pytania',
  faq: [
    { q: 'Co to jest domena catch-all?', a: 'To domena, która przyjmuje każdą wysłaną wiadomość, także na adresy, które nie istnieją. Serwer odpowiada „tak, istnieje” na każdy adres. Dlatego tradycyjne kontrole nie mogą ustalić, czy konkretna skrzynka jest prawdziwa.' },
    { q: 'Czy weryfikacja catch-all kosztuje dodatkowe kredyty?', a: 'Nie. Kosztuje 1 kredyt za adres, tak samo jak zwykła weryfikacja.' },
    { q: 'Jak dokładna jest weryfikacja catch-all?', a: 'Około 98,5% na listach firmowych. Nie zgadujemy na podstawie powierzchownych odpowiedzi. Sprawdzamy, czy skrzynka naprawdę istnieje, więc wynik jest aktualny także w chwili wysyłki.' },
    { q: 'Czy spowalnia weryfikację reszty listy?', a: 'Nie. Kontrole catch-all działają równolegle ze zwykłą weryfikacją, a nie po niej. Cała lista kończy się w tym samym czasie.' },
    { q: 'Czy mogę sprawdzić tylko adresy catch-all z listy wyczyszczonej w innym narzędziu?', a: 'Tak. W panelu otwórz Catch-All Detection, wklej lub prześlij tylko adresy do sprawdzenia i uruchom weryfikację. Koszt jest ten sam: 1 kredyt za adres.' },
    { q: 'Co się stanie, jeśli kontrola catch-all zwróci „nieznany”?', a: 'To rzadkie. Jeśli nie uda nam się ustalić wyniku, kredyt wraca na konto automatycznie. Płacisz tylko za zakończone weryfikacje.' },
  ],
  ctaHeadline: 'Sprawdź listę i porównaj wyniki',
}

export default function WeryfikacjaCatchAllPage() {
  return <CatchAllPageL10n locale="pl" content={content} />
}
