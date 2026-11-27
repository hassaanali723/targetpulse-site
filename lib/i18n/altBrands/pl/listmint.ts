// Polish Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/pl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '

const cfg: AltL10nConfig = {
  locale: 'pl',
  slug: 'listmint',
  path: '/pl/alternatywa-dla-listmint',
  cluster: 'altListmint',
  metaTitle: 'Alternatywa dla Listmint: weryfikacja catch-all | Giggal.ai',
  ogTitle: 'Alternatywa dla Listmint do weryfikacji adresów catch-all',
  desc: `Listmint kosztuje 99 USD miesięcznie i daje 5000 kredytów catch-all. Giggal.ai sprawdza adresy catch-all za 1 kredyt, 9,90 USD za 10${K}000. Kredyty nie wygasają.`,
  h1: ['', 'Alternatywa dla Listmint', ' z jedną pulą kredytów'],
  heroP:
    'Listmint to weryfikator e-mail, który skupia się na adresach catch-all. Dzieli każdy plan na kredyty standardowe i mniejszą pulę kredytów catch-all. Giggal.ai ma jedną pulę. Sprawdzenie adresu catch-all kosztuje 1 kredyt, tak samo jak sprawdzenie każdego innego adresu e-mail.',
  bluf: [
    { k: 'Kredyty', v: 'Listmint ma dwie pule kredytów. Giggal.ai ma jedną: 1 kredyt za adres e-mail.' },
    { k: 'Cena', v: `Listmint Starter kosztuje 99 USD miesięcznie. Giggal.ai kosztuje 9,90 USD za 10${K}000 kredytów, z jednorazową płatnością.` },
    { k: 'Catch-all', v: 'Listmint Starter daje 5000 kredytów catch-all miesięcznie. Giggal.ai nie ma osobnego limitu.' },
    { k: 'Bramki', v: 'Giggal.ai sprawdza adresy za 15 wymienionymi z nazwy bramkami bezpieczeństwa poczty. Listmint nie wymienia żadnej.' },
  ],
  about: {
    heading: 'Czym jest Listmint?',
    paragraphs: [
      'Listmint to usługa weryfikacji e-mail z serwisu listmint.io. Wykonuje standardowe sprawdzenia SMTP i osobne sprawdzenie adresów catch-all. Listmint podaje, że adresy catch-all weryfikuje ręcznie.',
      'Kredyty catch-all kosztują w Listmint więcej niż kredyty standardowe. Dlatego każdy plan obejmuje dużą pulę kredytów standardowych i mniejszą pulę kredytów catch-all.',
      'Listmint podaje też, że potrafi weryfikować adresy catch-all w czasie rzeczywistym.',
    ],
  },
  reasons: {
    heading: 'Dlaczego użytkownicy szukają alternatywy dla Listmint',
    items: [
      { k: 'Limit catch-all', v: 'Plan Starter obejmuje 5000 kredytów catch-all miesięcznie. Jedna duża lista B2B może zużyć je wszystkie.' },
      { k: 'Plan miesięczny', v: 'Listmint pobiera opłatę co miesiąc. Kredyty Giggal.ai kupujesz raz, a one nigdy nie wygasają.' },
      { k: 'Wolumen', v: `Największy opublikowany plan to Agency, który daje 50${K}000 kredytów standardowych. Więcej wymaga wyceny Enterprise.` },
      { k: 'Bramki', v: 'Listmint nie wymienia bramek bezpieczeństwa poczty (secure email gateway), za którymi potrafi sprawdzać adresy.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai: adresy catch-all',
  catchAllProse:
    'Listmint rozlicza sprawdzenia adresów catch-all z osobnej puli kredytów. W planie Starter za 99 USD ta pula to 5000 kredytów miesięcznie. Giggal.ai nie ma osobnej puli. Każdy adres kosztuje 1 kredyt, bez względu na to, czy jest to adres catch-all. Gdy Giggal.ai nie może uzyskać odpowiedzi, wynik jest nieznany, a kredyt wraca na konto.',
  pricingHeading: 'Cennik Listmint w porównaniu z Giggal.ai',
  pricingProse: `Listmint Starter kosztuje 99 USD miesięcznie za 20${K}000 kredytów standardowych i 5000 kredytów catch-all. Agency kosztuje 187 USD miesięcznie za 50${K}000 kredytów standardowych i 10${K}000 kredytów catch-all. Cena planu Enterprise jest podawana na zapytanie.`,
  pricingExtra: [
    `Giggal.ai nie dzieli oferty na plany. 10${K}000 kredytów kosztuje 9,90 USD, a 100${K}000 kosztuje 76 USD. Każdy kredyt możesz wykorzystać na adres catch-all.`,
  ],
  strengths: {
    heading: 'Kiedy Listmint jest dobrym wyborem',
    intro: 'Listmint ma sens w tych przypadkach:',
  },
  others: {
    heading: 'Inne alternatywy dla Listmint',
    intro: 'Te weryfikatory też zwracają wynik dla adresów catch-all. Ceny pochodzą ze stron dostawców, stan na 27 listopada 2026.',
    items: [
      { name: 'Scrubby', text: 'Sprawdza domeny catch-all i domeny chronione przez bramki za 1 kredyt. Deep Verification kosztuje 3 kredyty i wysyła prawdziwe e-maile. Przy płatności za użycie kredyt kosztuje 0,008 USD.' },
      { name: 'no2bounce', text: `Wysyła wiadomości testowe, żeby potwierdzić skrzynki na domenach catch-all. 10${K}000 kredytów z płatności za użycie kosztuje 20 USD, a kredyty nigdy nie wygasają.` },
      { name: 'Allegrow', text: 'Weryfikator dla zespołów sprzedaży. Dla kontaktów catch-all zwraca wynik prawidłowy albo nieprawidłowy. Plan Starter kosztuje 99 USD miesięcznie za 5000 kontaktów.' },
    ],
  },
  testHeading: 'Sprawdź listę z Listmint w Giggal.ai',
  testSteps: [
    'Wyeksportuj listę sprawdzoną już w Listmint.',
    'Sprawdź ją tutaj za pomocą 1000 darmowych kredytów. Bez karty.',
    'Porównaj wiersze catch-all z wynikami z Listmint.',
  ],
  ctaHeadline: 'Sprawdzaj adresy catch-all bez osobnego limitu kredytów',
  faqs: [
    {
      q: 'Ile kosztuje Listmint?',
      a: `Listmint Starter kosztuje 99 USD miesięcznie i daje 20${K}000 kredytów standardowych oraz 5000 kredytów catch-all. Agency kosztuje 187 USD miesięcznie i daje 50${K}000 kredytów standardowych oraz 10${K}000 kredytów catch-all. Cena planu Enterprise jest podawana na zapytanie.`,
    },
    {
      q: 'Dlaczego Listmint ma osobne kredyty catch-all?',
      a: 'Listmint podaje, że kredyty catch-all kosztują więcej niż zwykłe kredyty SMTP, bo sprawdzenie adresu catch-all wymaga więcej pracy. Giggal.ai pobiera 1 kredyt za każdy adres, także za adres catch-all.',
    },
    {
      q: 'Czy Giggal.ai to dobra alternatywa dla Listmint?',
      a: `Tak, jeśli weryfikujesz listy z wieloma adresami catch-all. Giggal.ai nie ma osobnego limitu catch-all ani planu miesięcznego. Kosztuje 9,90 USD za 10${K}000 kredytów.`,
    },
    {
      q: 'Czy Listmint ma darmowy okres próbny?',
      a: 'Listmint oferuje darmowy start, ale nie podaje, ile kredytów obejmuje. Giggal.ai daje 1000 darmowych kredytów bez karty.',
    },
  ],
  breadcrumb: 'Alternatywa dla Listmint',
}

export default cfg
