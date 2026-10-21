// Polish alternative pages: translations of the English pages, same sections
// and FAQ. Keyword "alternatywa dla <marka>" leads the title and H1. Only
// zerobounce, neverbounce and snovio exist in Polish (no hunter, no apollo:
// those clusters are not registered for pl). Numbers follow Intl pl-PL:
// 1000 without grouping, 10 000 with a no-break space; prices stay in USD.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '

const zerobounce: AltL10nConfig = {
  locale: 'pl',
  slug: 'zerobounce',
  path: '/pl/alternatywa-dla-zerobounce',
  cluster: 'altZerobounce',
  metaTitle: 'Alternatywa dla ZeroBounce: ceny i catch-all | Giggal.ai',
  ogTitle: 'Alternatywa dla ZeroBounce stworzona dla list z adresami catch-all',
  desc: `ZeroBounce kosztuje 129 USD za 10${K}000 i ocenia catch-all od 1 do 10, bez wyniku. Giggal.ai kosztuje 9,90 USD i potwierdza takie adresy. 1000 kredytów gratis.`,
  h1: ['', 'Alternatywa dla ZeroBounce', ', która rozstrzyga adresy catch-all'],
  heroP: `Ta sama praca za jedną dziesiątą ceny. Zamiast oceny od 1 do 10, którą zwraca ZeroBounce, dostajesz jasną odpowiedź: prawidłowy albo nieprawidłowy. 9,90 USD za 10${K}000 kredytów zamiast 129 USD.`,
  bluf: [
    { k: 'Cena', v: `9,90 USD zamiast 129 USD za 10${K}000 kredytów. Różnica utrzymuje się na każdym progu.` },
    { k: 'Catch-all', v: 'Odpowiadamy: prawidłowy albo nieprawidłowy. ZeroBounce zwraca ocenę od 1 do 10, a nie odpowiedź.' },
    { k: 'Minimum', v: 'U nas go nie ma, zaczynasz z 1000 darmowych kredytów. ZeroBounce wymaga zakupu co najmniej 2000 kredytów za 39 USD.' },
    { k: 'Test', v: '1000 darmowych kredytów na całą listę, bez karty.' },
  ],
  pricingFirst: true,
  pricingHeading: 'Ceny ZeroBounce i Giggal.ai',
  pricingProse: 'ZeroBounce dodaje minimalny zakup 2000 kredytów i subskrypcję za 99 USD miesięcznie. Giggal.ai nie ma ani jednego, ani drugiego. Kupujesz kredyty, zachowujesz je na później i zaczynasz z 1000 darmowych.',
  pricingProseAfterLadder: true,
  catchAllHeading: 'Jak Giggal.ai weryfikuje adresy catch-all',
  catchAllProse: 'Na domenie catch-all serwer przyjmuje każdy adres. ZeroBounce przyznaje takim adresom ocenę od 1 do 10 za pomocą AI Scoring, zamiast je potwierdzić. My kierujemy te adresy do osobnego procesu i zwracamy jeden z czterech wyników.',
  catchAllProse2: 'W teście LeadMagic ZeroBounce rozstrzygnął 12% adresów catch-all.',
  benchmark: true,
  featureNote: 'Dokładność 99,6% podawana przez ZeroBounce to deklaracja producenta, a nie zmierzona wartość.',
  testSteps: [
    'Wyeksportuj listę, którą chcesz sprawdzić w ZeroBounce.',
    'Zaimportuj ją tutaj i sprawdź za pomocą 1000 darmowych kredytów. Bez karty.',
    'Porównaj wiersze Catch-All. Policz, ile z nich wraca z prawdziwym wynikiem.',
  ],
  faqs: [
    { q: 'Jak wypadają ceny obu narzędzi?', a: `9,90 USD zamiast 129 USD przy 10${K}000 kredytów, 76 USD zamiast 649 USD przy 100${K}000 i 680 USD zamiast 3199 USD przy milionie. Obok tabeli podajemy datę sprawdzenia obu cen.` },
    { q: 'Czy ZeroBounce ma minimalny zakup?', a: 'Tak, 2000 kredytów za 39 USD. Giggal.ai nie ma minimum, a na start dostajesz 1000 darmowych kredytów bez karty. W żadnym z tych narzędzi kredyty nie wygasają.' },
    { q: 'Co Giggal.ai robi z adresem catch-all, który ZeroBounce tylko ocenia?', a: 'Mówi, czy skrzynka jest prawdziwa, czyli dostarczalna albo niedostarczalna. Nie zostawia samej etykiety Catch-All. Każde sprawdzenie w Giggal.ai kosztuje stały 1 kredyt.' },
    { q: 'Jak dokładny jest Giggal.ai na adresach catch-all?', a: 'Giggal.ai weryfikuje z dokładnością 98,5%. Zwraca prawdziwy wynik, dostarczalny albo niedostarczalny, dla adresów catch-all i adresów chronionych przez SEG. Większość narzędzi tylko je oznacza, bez potwierdzenia.' },
    { q: 'Czy mogę przetestować Giggal.ai przed zakupem?', a: 'Tak. Dostajesz 1000 darmowych kredytów, bez karty, także do masowego importu. Sprawdź listę wyczyszczoną już w ZeroBounce i porównaj wiersze Catch-All.' },
  ],
  ctaHeadline: 'Zobacz, co ZeroBounce oznacza jako Catch-All, a Giggal potwierdza',
  breadcrumb: 'Alternatywa dla ZeroBounce',
}

const neverbounce: AltL10nConfig = {
  locale: 'pl',
  slug: 'neverbounce',
  path: '/pl/alternatywa-dla-neverbounce',
  cluster: 'altNeverbounce',
  metaTitle: 'Alternatywa dla NeverBounce: ceny i dokładność | Giggal.ai',
  ogTitle: 'Alternatywa dla NeverBounce, która rozstrzyga adresy catch-all',
  desc: `NeverBounce kosztuje 50 USD za 10${K}000 i rozstrzyga mało adresów catch-all, 8% w teście. Giggal.ai kosztuje 9,90 USD i je potwierdza. 1000 kredytów gratis.`,
  h1: ['', 'Alternatywa dla NeverBounce', ', która rozstrzyga adresy catch-all'],
  heroP: `NeverBounce rozstrzyga niewiele adresów catch-all, 8% w teście LeadMagic, i kosztuje 50 USD za 10${K}000. Giggal.ai potwierdza te adresy jako prawidłowe albo nieprawidłowe za 9,90 USD.`,
  bluf: [
    { k: 'Cena', v: `50 USD za 10${K}000 wobec naszych 9,90 USD oraz 2500 USD wobec 680 USD za milion.` },
    { k: 'Catch-all', v: 'Odpowiadamy: prawidłowy albo nieprawidłowy. NeverBounce rozstrzyga niewiele (8%, LeadMagic).' },
    { k: 'Kredyty', v: 'Nie wygasają. Kredyty NeverBounce wygasają 12 miesięcy po zakupie.' },
    { k: 'Test', v: '1000 darmowych kredytów na całą listę, bez karty.' },
  ],
  catchAllHeading: 'Jak Giggal.ai weryfikuje adresy catch-all',
  catchAllProse: 'NeverBounce oznacza adresy catch-all jako Accept-All i rozstrzyga niewiele z nich, 8% w teście LeadMagic. My kierujemy te adresy do osobnego procesu i zwracamy jeden z czterech wyników.',
  benchmark: true,
  pricingHeading: 'Ceny NeverBounce i Giggal.ai',
  pricingProse: `NeverBounce bierze 50 USD za 10${K}000, 400 USD za 100${K}000 i 2500 USD za milion. Giggal.ai kosztuje 9,90 USD, 76 USD i 680 USD przy tych samych wolumenach, bez minimum i bez subskrypcji miesięcznej.`,
  featureNote: 'Kreska oznacza wartość, której dostawca nie publikuje, na przykład wielkość darmowego pakietu NeverBounce. Nie zastępujemy jej szacunkiem.',
  testSteps: [
    'Wyeksportuj listę wyczyszczoną już w NeverBounce.',
    'Sprawdź ją tutaj za pomocą 1000 darmowych kredytów. Bez karty.',
    'Spójrz na wiersze, które NeverBounce oznaczył jako Catch-All. Policz, ile z nich to prawdziwe adresy.',
  ],
  faqs: [
    { q: 'Jak wypadają ceny obu narzędzi?', a: `NeverBounce bierze 50 USD za 10${K}000, a Giggal.ai 9,90 USD. Przy milionie to 2500 USD wobec 680 USD. Oba narzędzia publikują wszystkie progi cenowe, więc łatwo sprawdzić te liczby.` },
    { q: 'Co Giggal.ai robi z adresami catch-all, które NeverBounce tylko oznacza?', a: 'Mówi, czy skrzynka jest prawdziwa, czyli dostarczalna albo niedostarczalna, zamiast etykiety Accept-All. W teście LeadMagic NeverBounce rozstrzygnął 8% adresów catch-all. Każde sprawdzenie w Giggal.ai kosztuje stały 1 kredyt.' },
    { q: 'Jak wygasają kredyty Giggal.ai w porównaniu z NeverBounce?', a: 'Kredyty Giggal.ai nigdy nie wygasają. Kredyty NeverBounce wygasają 12 miesięcy po zakupie, co podaje jego własny cennik.' },
    { q: 'Czy Giggal.ai ma API?', a: 'Tak. Giggal.ai ma publiczną dokumentację API i serwer MCP. Możesz więc weryfikować adresy z własnych narzędzi i automatyzacji.' },
    { q: 'Czy mogę przetestować Giggal.ai przed zmianą narzędzia?', a: 'Tak. Dostajesz 1000 darmowych kredytów, bez karty, także do masowego importu. Sprawdź listę wyczyszczoną w NeverBounce i spójrz na wiersze Catch-All.' },
  ],
  ctaHeadline: 'Zamień wiersze Catch-All z NeverBounce na prawdziwe wyniki',
  breadcrumb: 'Alternatywa dla NeverBounce',
}

const snovio: AltL10nConfig = {
  locale: 'pl',
  slug: 'snovio',
  path: '/pl/alternatywa-dla-snovio',
  cluster: 'altSnovio',
  metaTitle: 'Alternatywa dla Snov.io do weryfikacji e-mail | Giggal.ai',
  ogTitle: 'Alternatywa dla Snov.io stworzona do weryfikacji e-mail',
  desc: `Snov.io wlicza weryfikację w kredyty do wyszukiwania i prospectingu. Giggal.ai rozstrzyga adresy catch-all za 9,90 USD za 10${K}000. 1000 darmowych kredytów.`,
  h1: ['', 'Alternatywa dla Snov.io', ' stworzona do weryfikacji'],
  heroP: `Snov.io łączy wyszukiwanie, weryfikację i wysyłkę w jednej platformie opartej na kredytach. Jeśli potrzebujesz weryfikacji, Giggal.ai to dedykowany weryfikator, który rozstrzyga adresy catch-all. Publiczna cena to 9,90 USD za 10${K}000.`,
  bluf: [
    { k: 'Rola', v: 'Snov.io to pakiet do wyszukiwania adresów i prospectingu. My weryfikujemy i rozstrzygamy adresy catch-all.' },
    { k: 'Catch-all', v: 'Zwracamy: prawidłowy albo nieprawidłowy. Snov.io tylko oznacza taki adres.' },
    { k: 'Rozliczenie', v: `Snov.io pobiera weryfikację z kredytów planu. U nas płacisz za użycie, od 9,90 USD za 10${K}000.` },
    { k: 'Test', v: '1000 darmowych kredytów na całą listę, bez karty.' },
  ],
  catchAllHeading: 'Jak Giggal.ai weryfikuje adresy catch-all',
  catchAllProse: 'Snov.io weryfikuje w ramach szerszego procesu prospectingu, za 1 kredyt na sprawdzenie. Na domenach catch-all oznacza adres, zamiast potwierdzić skrzynkę. Giggal.ai jest zbudowany do weryfikacji. Kieruje te adresy do osobnego procesu i zwraca jeden z czterech wyników. Weryfikuje też adresy za bramkami bezpieczeństwa poczty (secure email gateway).',
  pricingHeading: 'Ceny Snov.io i Giggal.ai',
  pricingProse: `Snov.io sprzedaje subskrypcję miesięczną ze wspólną pulą kredytów, 1 kredyt na weryfikację. Najmniejszy plan, który obejmuje 10${K}000 weryfikacji miesięcznie, to Pro M za 189 USD miesięcznie. Dla 100${K}000 jest plan Ultra za 738 USD miesięcznie (około 25% taniej przy płatności rocznej). Milion miesięcznie wymaga planu indywidualnego. Niewykorzystane kredyty przechodzą na kolejny okres, dopóki subskrypcja jest aktywna. Giggal.ai to płatność za użycie: 9,90 USD za 10${K}000, 76 USD za 100${K}000 i 680 USD za milion, bez zobowiązania miesięcznego.`,
  featureNote: 'Snov.io rozlicza się miesięcznie, więc jego wartość to najmniejszy plan, który obejmuje ten wolumen, a nie cena jednorazowa. Milion miesięcznie wymaga planu indywidualnego.',
  testSteps: [
    'Wyeksportuj listę sprawdzoną już w Snov.io.',
    'Sprawdź ją tutaj za pomocą 1000 darmowych kredytów. Bez karty.',
    'Spójrz na wiersze, które Snov.io oznaczył jako catch-all. Policz, ile z nich to prawdziwe adresy.',
  ],
  faqs: [
    { q: 'Czy Giggal.ai to dobra alternatywa dla Snov.io do weryfikacji?', a: `Jeśli potrzebujesz weryfikacji, tak. Giggal.ai to dedykowany weryfikator, który rozstrzyga adresy catch-all i weryfikuje adresy za bramkami bezpieczeństwa poczty. Płacisz za użycie, od 9,90 USD za 10${K}000. Snov.io wyszukuje też adresy e-mail i obsługuje prospecting, czego Giggal.ai nie robi.` },
    { q: 'Czy Giggal.ai wyszukuje adresy albo wysyła kampanie jak Snov.io?', a: 'Nie. Giggal.ai jest tylko weryfikatorem. Jeśli chcesz mieć wyszukiwanie, weryfikację i wysyłkę w jednej platformie, Snov.io się sprawdzi. Jeśli chcesz dokładnej weryfikacji z wynikiem dla adresów catch-all, Giggal.ai jest zbudowany właśnie do tego.' },
    { q: 'Jak Giggal.ai obsługuje catch-all, który Snov.io tylko oznacza?', a: 'Snov.io oznacza catch-all bez potwierdzenia skrzynki. Giggal.ai zwraca prawdziwy wynik, dostarczalny albo niedostarczalny, za stały 1 kredyt za adres.' },
    { q: 'Jak wypadają ceny?', a: `Snov.io pobiera kredyty planu przy każdej weryfikacji, od 39 USD miesięcznie za 1000 kredytów (29,25 USD przy płatności rocznej). Giggal.ai to płatność za użycie, 9,90 USD za 10${K}000, bez zobowiązania miesięcznego i z kredytami, które nigdy nie wygasają.` },
    { q: 'Czy mogę przetestować Giggal.ai przed zmianą narzędzia?', a: 'Tak. Dostajesz 1000 darmowych kredytów, bez karty, także do masowego importu. Sprawdź listę, którą Snov.io oznaczył jako catch-all, i zobacz, ile adresów dostaje prawdziwy wynik.' },
  ],
  ctaHeadline: 'Sama weryfikacja, bez całej platformy',
  breadcrumb: 'Alternatywa dla Snov.io',
}

export const ALT_PL = { zerobounce, neverbounce, snovio }
