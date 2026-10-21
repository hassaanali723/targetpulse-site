import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Polish home. Title carries "weryfikacja email" (90 / KD 0), the home row of
// the keyword plan (section 3). The tool demand sits on /pl/weryfikator-email.
// The hero sends the visitor to the free checker first and to sign-up second,
// as on the other locales. Polish number format: 1000, 10 000, 98,5%.
// The switcher lists only the alternative pages registered for pl
// (no Hunter, no Apollo).

const DESC =
  'Weryfikacja email, która sprawdza skrzynkę także na domenach catch-all. Mniej niż 3% odbić, masowa weryfikacja, API i 1000 darmowych kredytów bez karty.'

export const metadata: Metadata = {
  title: { absolute: 'Weryfikacja email i weryfikator adresów: Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/pl', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Weryfikacja email i weryfikator adresów',
    description: DESC,
    url: 'https://giggal.ai/pl',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
  twitter: { card: 'summary_large_image', title: 'Weryfikacja email i weryfikator adresów', description: DESC },
}

/** 1 opinia, 2-4 opinie (not 12-14), 5+ opinii. */
function opinieWord(n: number): string {
  if (n === 1) return 'opinia'
  const last = n % 10
  const lastTwo = n % 100
  return last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? 'opinie' : 'opinii'
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Weryfikacja email',
  h1Accent: 'dla mniejszej liczby odbić',
  heroSub: (
    <>
      Weryfikacja e-mail pojedynczych adresów i całych list. Sprawdź, które adresy są prawdziwe, także na{' '}
      <Link href="/pl/weryfikacja-catch-all" className={heroLink}>domenach catch-all</Link>.
    </>
  ),
  rating: { on: 'na', reviews: (n) => `(${n} ${opinieWord(n)})` },
  email: { label: 'Adres e-mail do sprawdzenia', placeholder: 'imie@firma.pl', button: 'Sprawdź za darmo' },
  listQuestion: 'Masz całą listę do wyczyszczenia?',
  listCta: 'Odbierz 1000 darmowych weryfikacji e-mail',
  noCard: 'Bez karty płatniczej.',
  stats: [
    { n: '500 mln', suf: '+', l: 'Sprawdzonych adresów e-mail' },
    { n: '98,5', suf: '%', l: 'Dokładność na listach B2B' },
    { pre: '< ', n: '3', suf: '%', l: 'Współczynnik odbić po czyszczeniu' },
    { n: '1000', l: 'Darmowych kredytów, bez karty' },
  ],
  bulk: {
    id: 'masowa',
    title: 'Masowa weryfikacja e-mail dla całej listy',
    sub: 'Przesyłasz listę raz, a my sprawdzamy każdy adres, który zawiera.',
    points: [
      'Status prawidłowy lub nieprawidłowy dla każdego adresu',
      'Jasna odpowiedź także dla adresów catch-all',
      'CSV lub Excel, do 50 000 adresów w pliku',
      'Pobierz wyczyszczoną listę, gdy tylko będzie gotowa',
    ],
  },
  catchAll: {
    title: 'Dlaczego adresy catch-all wymagają uwagi',
    intro: (
      <>
        Niektóre firmowe serwery pocztowe przyjmują każdy adres, prawdziwy lub wymyślony. Taką konfigurację
        nazywamy{' '}
        <Link href="/pl/weryfikacja-catch-all" className={link}>domeną catch-all</Link>. Większość
        weryfikatorów nie widzi różnicy. Oznacza takie adresy jako „ryzykowne” i zostawia decyzję tobie.
      </>
    ),
    others: 'Większość weryfikatorów',
    othersDetail: 'Catch-all, brak jasnej odpowiedzi',
    ourDetail: 'Catch-all, skrzynka znaleziona',
    risky: 'Ryzykowny',
    deliverable: 'Dostarczalny',
    othersText: 'Musisz wybrać: wysłać i ryzykować odbicie albo usunąć kontakt, który może istnieć.',
    ourText: 'Wiesz, że adres jest prawdziwy, więc wysyłasz bez obaw.',
  },
  features: {
    title: 'Weryfikator email: masowe czyszczenie list, API i integracje z jednym saldem kredytów',
    intro: 'Przesyłasz listę, wywołujesz API albo łączysz CRM. Każda z tych dróg uruchamia tę samą weryfikację adresu e-mail.',
    items: [
      { title: 'Masowe czyszczenie list', body: 'Prześlij plik CSV lub Excel i otrzymaj wyniki w kilka minut.', points: ['Do 50 000 adresów w pliku', 'Wyczyszczona lista do pobrania w CSV'], link: 'Wyczyść listę za darmo' },
      { title: 'Weryfikacja catch-all', body: 'Jasna odpowiedź na domenach catch-all zamiast etykiety „ryzykowny”.', points: ['Jeden kredyt, jak każda inna weryfikacja', 'Działa za bramkami, takimi jak Mimecast i Proofpoint'], link: 'Jak działa weryfikacja catch-all' },
      { title: 'API dla programistów', body: 'Sprawdzaj adresy w formularzach rejestracji i w swoich aplikacjach.', points: ['Jeden adres lub cała lista w jednym wywołaniu', 'Klucze API w twoim panelu'], link: 'Dokumentacja API' },
      { title: 'Integracje z CRM i aplikacjami', body: 'Wysyłaj wyczyszczone kontakty do HubSpot, Mailchimp i wielu innych narzędzi.', points: ['Działa z narzędziami, których już używasz', 'Zapier i n8n do wszystkiego innego'], link: 'Zobacz wszystkie integracje' },
      { title: 'Płatność za użycie', body: 'Wszystkie ceny są publiczne. Kredyty nie wygasają.', points: ['Bez miesięcznego zobowiązania', 'Doładowujesz tylko wtedy, gdy potrzebujesz'], link: 'Zobacz cały cennik' },
      { title: 'Priorytetowe wsparcie', body: 'Potrzebujesz pomocy? Nasi inżynierowie pomagają bezpośrednio.', points: ['Prawdziwi ludzie, a nie bot', 'Przez e-mail lub formularz kontaktowy'], link: 'Skontaktuj się ze wsparciem' },
    ],
    preview: {
      done: 'Gotowe',
      deliverable: 'Dostarczalny',
      undeliverable: 'Niedostarczalny',
      otherTools: 'Inne narzędzia',
      risky: 'Ryzykowny',
      credit: '1 kredyt',
      email: '1 e-mail',
      creditNote: 'Weryfikacja catch-all w cenie',
      reply: '24 godziny',
      replyNote: 'Nasz zwykły czas odpowiedzi.',
    },
  },
  pricing: {
    id: 'cennik',
    claimTop: 'Niska cena.',
    claimBottom: 'Dobry stosunek jakości do ceny.',
    fallbackTitle: 'Prosty cennik w dolarach',
    priceLine: (p) => `${p} za 10 000 adresów e-mail, weryfikacja catch-all w cenie.`,
    claim: { before: '', link: 'Porównaj z innymi weryfikatorami', after: '.' },
    text: 'Płacisz tylko za to, czego używasz. Kredyty nie wygasają.',
  },
  switcher: {
    id: 'alternatywy',
    title: 'Zmieniasz weryfikator?',
    intro: 'Porównaj Giggal.ai z innymi narzędziami do weryfikacji e-mail: catch-all, ceny i dokładność.',
    items: [
      { name: 'ZeroBounce', href: '/pl/alternatywa-dla-zerobounce', blurb: 'Jasny wynik dla adresów catch-all, które ZeroBounce oznacza jako ryzykowne.' },
      { name: 'NeverBounce', href: '/pl/alternatywa-dla-neverbounce', blurb: 'Płatność za użycie i kredyty, które nigdy nie wygasają.' },
      { name: 'Snov.io', href: '/pl/alternatywa-dla-snovio', blurb: 'Osobny weryfikator, a nie tylko moduł platformy do prospectingu.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/pl/porownanie/zerobounce-vs-neverbounce', blurb: 'Oba narzędzia porównane pod kątem catch-all, cen i kredytów.' },
    ],
    all: 'Porównaj 28 weryfikatorów (po angielsku)',
  },
  integrations: {
    title: 'Połącz swoje narzędzia marketingowe',
    sub: 'Giggal.ai łączy się z popularnymi systemami CRM i usługami e-mail marketingu. Wyczyszczone kontakty synchronizują się automatycznie.',
    more: 'Ponad 80 innych',
    alt: (n) => `Integracja ${n} do weryfikacji e-mail w Giggal.ai`,
  },
  reviewBadges: REVIEW_BADGES.pl,
  reviewWall: REVIEW_WALL.pl,
  mcp: MCP.pl,
  faq: {
    title: 'Najczęstsze pytania',
    sub: 'Krótkie odpowiedzi o catch-all, dokładności, cenach i konfiguracji.',
    more: 'Masz inne pytania?',
    moreLink: 'Napisz do nas',
    items: [
      {
        q: 'Czym Giggal.ai różni się od innych weryfikatorów?',
        a: 'Giggal.ai daje jasny wynik, prawidłowy lub nieprawidłowy, dla adresów catch-all i adresów za bramkami bezpieczeństwa (Mimecast, Proofpoint, Barracuda). Inne narzędzia zatrzymują się na etykiecie „ryzykowny”. Na liście B2B takie adresy to około jednej trzeciej wszystkich.',
      },
      {
        q: 'Jak dokładna jest weryfikacja?',
        a: '98,5% na listach firmowych. Współczynnik odbić po czyszczeniu pozostaje poniżej 3%. Za wyniki „nieznany” zwracamy kredyty.',
      },
      {
        q: 'Jak działają kredyty?',
        a: 'Jedna weryfikacja zużywa jeden kredyt, niezależnie od typu adresu, także catch-all i za bramką. Kredyty nie wygasają. Pierwsze 1000 dostajesz za darmo, bez karty.',
      },
      {
        q: 'Czy mogę przesłać plik?',
        a: 'Tak. CSV lub Excel, do 50 000 adresów w pliku. Wyniki są gotowe w kilka minut nawet dla dużych list, a wyczyszczoną listę pobierasz w CSV.',
      },
      {
        q: 'Czy jest API?',
        a: 'Tak. REST API do weryfikacji pojedynczej i masowej oraz serwer MCP do weryfikacji z poziomu Claude, ChatGPT i Cursor.',
      },
      {
        q: 'Czy mogę sprawdzić jeden adres bez rejestracji?',
        a: 'Tak, w darmowym weryfikatorze email. Bez rejestracji, bez karty i bez wysyłania jakiejkolwiek wiadomości do odbiorcy.',
      },
    ],
  },
  ctaHeadline: 'Zacznij z 1000 darmowych weryfikacji',
}

export default function HomePl() {
  return <HomeL10n locale="pl" content={content} />
}
