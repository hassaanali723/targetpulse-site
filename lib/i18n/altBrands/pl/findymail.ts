// Polish Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/pl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '

const cfg: AltL10nConfig = {
  locale: 'pl',
  slug: 'findymail',
  path: '/pl/alternatywa-dla-findymail',
  cluster: 'altFindymail',
  metaTitle: 'Alternatywy dla Findymail i cennik Findymail | Giggal.ai',
  ogTitle: 'Alternatywy dla Findymail i porównanie cen',
  desc: `Cennik Findymail: od 99 USD miesięcznie. Porównaj alternatywy i konkurentów Findymail, w tym Giggal.ai: weryfikator e-mail, 9,90 USD za 10${K}000 kredytów.`,
  h1: ['', 'Alternatywa dla Findymail', ' do weryfikacji adresów e-mail, które już masz'],
  heroP: `Findymail wyszukuje firmowe adresy e-mail B2B i je weryfikuje. Plany zaczynają się od 99 USD miesięcznie. Jeśli masz już listę i chcesz ją tylko zweryfikować, Giggal.ai zrobi to za 9,90 USD za 10${K}000 adresów e-mail. Kredyty kupujesz raz, a one nigdy nie wygasają.`,
  bluf: [
    { k: 'Główne zadanie', v: 'Findymail wyszukuje adresy e-mail, a potem je weryfikuje. Giggal.ai tylko weryfikuje.' },
    { k: 'Cena', v: `Findymail kosztuje od 99 USD miesięcznie. Giggal.ai kosztuje 9,90 USD za 10${K}000 kredytów, z jednorazową płatnością.` },
    { k: 'Darmowe kredyty', v: 'Findymail daje 10 darmowych kredytów. Giggal.ai daje 1000, bez karty.' },
    { k: 'Gwarancja', v: 'Findymail obiecuje współczynnik odbić poniżej 5%, a powyżej tego progu zwraca kredyty.' },
  ],
  about: {
    heading: 'Czym jest Findymail?',
    paragraphs: [
      'Findymail to wyszukiwarka adresów e-mail B2B. Znajduje firmowe adresy e-mail na podstawie imienia i nazwiska oraz firmy, adresu URL profilu LinkedIn albo wyszukiwania w Sales Navigator. Każdy znaleziony adres jest weryfikowany, zanim go dostaniesz.',
      'Ma rozszerzenie do Chrome, dodatek do Arkuszy Google, masowy import, API i wyszukiwarkę numerów telefonów. Łączy się między innymi z Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead i Lemlist.',
      'Findymail sprzedaje też kredyty do weryfikacji list z innych źródeł. Podaje, że weryfikuje adresy catch-all, które inne narzędzia oznaczają jako ryzykowne.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Cennik Findymail w 2026 roku',
  pricingProse:
    'Findymail ma dwa rodzaje planów. Plany rozliczane według użycia to Individual za 99 USD miesięcznie, Pro za 249 USD, Team za 399 USD i Scale za 999 USD. Podają liczbę użytkowników i rozmiar plików, a nie liczbę kredytów.',
  pricingExtra: [
    'Plan Starter, oparty na kredytach, kosztuje 99 USD miesięcznie. Obejmuje 5000 kredytów do wyszukiwania i 5000 kredytów do weryfikacji. Większe wolumeny to plan Enterprise, z ceną na zapytanie. Niewykorzystane kredyty przechodzą na kolejny okres, maksymalnie do dwukrotności miesięcznego limitu.',
    `Giggal.ai nie ma planu miesięcznego. 10${K}000 kredytów kosztuje 9,90 USD, 100${K}000 kosztuje 76 USD, a milion kosztuje 680 USD.`,
  ],
  reasons: {
    heading: 'Dlaczego zespoły szukają alternatywy dla Findymail',
    items: [
      { k: 'Tylko weryfikacja', v: 'Wiele zespołów ma już listę. Nie potrzebują wyszukiwarki, tylko weryfikatora.' },
      { k: 'Wolumen', v: 'Plan Starter obejmuje 5000 kredytów do weryfikacji miesięcznie. Większe wolumeny wymagają wyceny Enterprise.' },
      { k: 'Miesięczny rachunek', v: 'Findymail pobiera opłatę co miesiąc. Kredyty Giggal.ai kupujesz raz, a one nigdy nie wygasają.' },
      { k: 'Mały pakiet próbny', v: 'Findymail daje 10 darmowych kredytów. To za mało, żeby przetestować prawdziwą listę.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai: adresy catch-all',
  catchAllProse:
    'Findymail weryfikuje adresy catch-all, które inne narzędzia oznaczają jako ryzykowne. Giggal.ai też zwraca wynik dla adresów catch-all, po 1 kredycie za adres. Dodatkowo sprawdza adresy za 15 wymienionymi z nazwy bramkami bezpieczeństwa poczty, takimi jak Proofpoint, Mimecast i Barracuda. Findymail nie podaje, że obsługuje takie bramki.',
  strengths: {
    heading: 'Co Findymail robi dobrze',
    intro: 'Findymail to lepszy wybór w tych przypadkach:',
  },
  others: {
    heading: 'Inne alternatywy dla Findymail i jego konkurenci',
    intro: 'Te narzędzia też wyszukują lub weryfikują adresy e-mail B2B. Ceny pochodzą ze stron dostawców, stan na 27 listopada 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Wyszukiwarka adresów e-mail z planami od 29 USD miesięcznie za 400 kredytów. Obiecuje, że co najmniej 97% znalezionych adresów nie spowoduje twardego odbicia (hard bounce).' },
      { name: 'LeadMagic', text: 'Platforma danych B2B z wyszukiwaniem adresów e-mail, numerami komórkowymi i danymi firm. Plany zaczynają się od 99 USD miesięcznie za 5000 wspólnych kredytów.' },
      { name: 'Allegrow', text: 'Weryfikator dla zespołów sprzedaży, który śledzi też umieszczenie w skrzynce odbiorczej i kondycję domeny. Plan Starter kosztuje 99 USD miesięcznie za 5000 kontaktów.' },
    ],
  },
  testHeading: 'Zweryfikuj eksport z Findymail w Giggal.ai',
  testSteps: [
    'Wyeksportuj listę sprawdzoną już w Findymail.',
    'Sprawdź ją tutaj za pomocą 1000 darmowych kredytów. Bez karty.',
    'Porównaj wiersze catch-all z wynikami z Findymail dla tych samych kontaktów.',
  ],
  ctaHeadline: 'Zweryfikuj swoją listę bez subskrypcji',
  faqs: [
    {
      q: 'Ile kosztuje Findymail?',
      a: 'Plany Findymail zaczynają się od 99 USD miesięcznie. Plan Starter, oparty na kredytach, obejmuje 5000 kredytów do wyszukiwania i 5000 kredytów do weryfikacji. Plany rozliczane według użycia kosztują od 99 USD do 999 USD miesięcznie. Większe wolumeny są wyceniane na zapytanie.',
    },
    {
      q: 'Czy Findymail ma darmowy plan?',
      a: 'Findymail daje 10 darmowych kredytów na test, bez karty. Nie ma stałego darmowego planu. Giggal.ai daje 1000 darmowych kredytów bez karty.',
    },
    {
      q: 'Jakie są najlepsze alternatywy dla Findymail?',
      a: `Do wyszukiwania adresów e-mail popularne opcje to Anymail Finder i LeadMagic. Do weryfikacji listy, którą już masz, Giggal.ai kosztuje 9,90 USD za 10${K}000 kredytów, bez subskrypcji.`,
    },
    {
      q: 'Czy Findymail nadaje się do weryfikacji e-mail?',
      a: 'Tak. Findymail weryfikuje każdy znaleziony adres i obiecuje współczynnik odbić poniżej 5%. Plan Starter ma 5000 kredytów do weryfikacji miesięcznie, więc duże listy wymagają planu Enterprise albo innego weryfikatora.',
    },
    {
      q: 'Czy Giggal.ai wyszukuje adresy e-mail jak Findymail?',
      a: 'Nie. Giggal.ai tylko weryfikuje. Najpierw znajdź adresy e-mail, a potem przed wysyłką sprawdź listę w Giggal.ai.',
    },
    {
      q: 'Czy kredyty Findymail wygasają?',
      a: 'Niewykorzystane kredyty przechodzą na kolejny miesiąc, maksymalnie do dwukrotności miesięcznego limitu. Kredyty Giggal.ai nigdy nie wygasają.',
    },
  ],
  breadcrumb: 'Alternatywa dla Findymail',
}

export default cfg
