// Polish Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). Scrubby's product names "Quick Verification" and "Deep
// Verification" stay in English. Competitor words live in
// lib/i18n/altBrands/pl/facts.ts. 10 000 uses a no-break space (K).
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '

const cfg: AltL10nConfig = {
  locale: 'pl',
  slug: 'scrubby',
  path: '/pl/alternatywa-dla-scrubby',
  cluster: 'altScrubby',
  metaTitle: 'Alternatywa dla Scrubby: porównanie cen Scrubby.io | Giggal.ai',
  ogTitle: 'Alternatywa dla Scrubby do adresów catch-all i za bramkami SEG',
  desc: `Scrubby bierze 0,008 USD za kredyt, a Deep Verification trwa do 72 godzin. Giggal.ai sprawdza adresy catch-all i za bramkami SEG w cenie 9,90 USD za 10${K}000.`,
  h1: ['', 'Alternatywa dla Scrubby', ` w cenie 9,90 USD za 10${K}000 adresów e-mail`],
  heroP: `Scrubby weryfikuje adresy catch-all i adresy chronione przez bramki bezpieczeństwa poczty. To te same trudne adresy, na których skupia się Giggal.ai. Różnice dotyczą ceny i sposobu działania sprawdzenia. Scrubby bierze 0,008 USD za kredyt. Giggal.ai bierze 9,90 USD za 10${K}000.`,
  bluf: [
    { k: 'Cena', v: `10${K}000 kredytów kosztuje 80 USD w Scrubby i 9,90 USD w Giggal.ai.` },
    { k: 'Dokładne sprawdzenie', v: 'Deep Verification w Scrubby kosztuje 3 kredyty i wysyła prawdziwe e-maile. Na ostateczne wyniki czekasz do 72 godzin.' },
    { k: 'Darmowe kredyty', v: 'Scrubby daje 200 darmowych kredytów. Giggal.ai daje 1000. Żadne z narzędzi nie wymaga karty.' },
    { k: 'Zwroty', v: 'Według Scrubby wszystkie zakupy są ostateczne. Przy wyniku nieznanym Giggal.ai zwraca kredyt.' },
  ],
  about: {
    heading: 'Czym jest Scrubby?',
    paragraphs: [
      'Scrubby to narzędzie do weryfikacji e-mail dostępne pod adresem scrubby.io. Skupia się na adresach catch-all i ryzykownych, których inne weryfikatory nie potrafią potwierdzić.',
      'Ma dwa rodzaje sprawdzenia. Quick Verification kosztuje 1 kredyt i obejmuje domeny standardowe, domeny catch-all i domeny chronione przez SEG. Deep Verification kosztuje 3 kredyty. Scrubby wysyła wtedy prawdziwe e-maile na każdy adres i podaje ostateczne wyniki w ciągu 72 godzin.',
      'Scrubby łączy się z narzędziami takimi jak Clay, Instantly, Smartlead, Apollo i HubSpot.',
    ],
  },
  reasons: {
    heading: 'Dlaczego zespoły szukają alternatywy dla Scrubby',
    items: [
      { k: 'Cena', v: `Przy płatności za użycie kredyt kosztuje 0,008 USD. 10${K}000 sprawdzeń kosztuje 80 USD, a 100${K}000 kosztuje 800 USD.` },
      { k: 'Czas oczekiwania', v: 'Na wyniki Deep Verification czekasz do 72 godzin.' },
      { k: 'Prawdziwe e-maile', v: 'Deep Verification wysyła prawdziwe e-maile na każdy adres z twojej listy.' },
      { k: 'Brak zwrotów', v: 'Według Scrubby wszystkie zakupy są ostateczne.' },
    ],
  },
  catchAllHeading: 'Scrubby vs Giggal.ai: adresy catch-all i adresy za bramkami',
  catchAllProse:
    'Scrubby i Giggal.ai zwracają wynik dla adresów catch-all i adresów chronionych przez bramki. Giggal.ai bierze 1 kredyt za każdy adres, bez głębszego poziomu sprawdzenia. Wymienia z nazwy 15 bramek, za którymi sprawdza adresy, w tym Proofpoint, Mimecast i Barracuda. Gdy nie uda się uzyskać odpowiedzi, kredyt wraca na konto.',
  pricingHeading: 'Cennik Scrubby w porównaniu z Giggal.ai',
  pricingProse: `Przy płatności za użycie Scrubby bierze 0,008 USD za kredyt, więc 10${K}000 kredytów kosztuje 80 USD. Plany miesięczne to Starter za 47 USD z 6000 kredytów, Growth za 97 USD z 15${K}000 i Pro za 497 USD ze 100${K}000. Kredyty z płatności za użycie nigdy nie wygasają, a kredyty z planu przechodzą na kolejny okres.`,
  pricingExtra: [
    `Deep Verification zużywa 3 kredyty, więc 10${K}000 dokładnych sprawdzeń zużywa 30${K}000 kredytów. Giggal.ai sprzedaje 10${K}000 kredytów za 9,90 USD i 100${K}000 za 76 USD.`,
  ],
  strengths: {
    heading: 'Kiedy Scrubby jest dobrym wyborem',
    intro: 'Scrubby ma mocne strony, które warto znać:',
  },
  others: {
    heading: 'Inne alternatywy dla Scrubby',
    intro: 'Te narzędzia też zwracają wynik dla adresów catch-all. Ceny pochodzą ze stron dostawców, stan na 27 listopada 2026.',
    items: [
      { name: 'no2bounce', text: `Wysyła wiadomości testowe, aby potwierdzić skrzynki catch-all. 10${K}000 kredytów kosztuje 20 USD. Kredyty nigdy nie wygasają.` },
      { name: 'Listmint', text: `Sprawdza adresy catch-all ręcznie. Plan Starter kosztuje 99 USD miesięcznie za 20${K}000 kredytów standardowych i 5000 kredytów catch-all.` },
      { name: 'Allegrow', text: 'Zwraca wynik prawidłowy albo nieprawidłowy dla kontaktów catch-all i wymienia z nazwy Proofpoint oraz Mimecast. Plan Starter kosztuje 99 USD miesięcznie.' },
    ],
  },
  testHeading: 'Przetestuj Giggal.ai na swoich adresach catch-all',
  testSteps: [
    'Wyeksportuj listę sprawdzoną już w Scrubby.',
    'Sprawdź ją tutaj za pomocą 1000 darmowych kredytów. Bez karty.',
    'Porównaj wyniki z wynikami Scrubby dla tych samych adresów catch-all.',
  ],
  ctaHeadline: `Sprawdź te same trudne adresy w cenie 9,90 USD za 10${K}000`,
  faqs: [
    {
      q: 'Ile kosztuje Scrubby?',
      a: `Przy płatności za użycie Scrubby bierze 0,008 USD za kredyt, czyli 80 USD za 10${K}000. Plany miesięczne zaczynają się od 47 USD za 6000 kredytów. Deep Verification zużywa 3 kredyty na jeden e-mail.`,
    },
    {
      q: 'Czym jest Deep Verification w Scrubby?',
      a: 'To wolniejsze sprawdzenie Scrubby dla trudnych adresów. Kosztuje 3 kredyty, wysyła prawdziwe e-maile na każdy adres i podaje ostateczne wyniki w ciągu 72 godzin.',
    },
    {
      q: 'Czy Scrubby ma darmowy okres próbny?',
      a: 'Tak. Scrubby daje 200 darmowych kredytów bez karty. Giggal.ai daje 1000 darmowych kredytów bez karty.',
    },
    {
      q: 'Czy Giggal.ai to dobra alternatywa dla Scrubby?',
      a: `Tak. Oba narzędzia zwracają wynik dla adresów catch-all i adresów za bramkami. Giggal.ai kosztuje 9,90 USD za 10${K}000 kredytów i zwraca kredyt za wyniki nieznane.`,
    },
  ],
  breadcrumb: 'Alternatywa dla Scrubby',
}

export default cfg
