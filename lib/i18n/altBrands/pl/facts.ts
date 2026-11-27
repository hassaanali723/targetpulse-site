// pl words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
// Polish number format: 1000 without grouping, 10 000 with a no-break space (K),
// 9,90 USD, 98,5% with no space before %.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

const K = ' '

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Brak darmowych kredytów',
    creditsExpire: 'Niewykorzystane kredyty miesięczne przechodzą na kolejny miesiąc, maksymalnie do dwukrotności miesięcznego limitu',
    catchAllCreditCost: '0,25 kredytu za jednoznaczny wynik; wynik nieznany jest bezpłatny',
    claimedAccuracy: 'Deklaruje 99,5% dla walidacji',
    pricingBasisNote: `LeadMagic jest sprzedawany jako subskrypcja miesięczna z jedną pulą kredytów: Essential 99 USD (5000 kredytów), Growth 249 USD (20${K}000), Professional 499 USD (50${K}000), Ultimate 849 USD (100${K}000). Jednoznaczna walidacja kosztuje 0,25 kredytu, a wynik nieznany jest bezpłatny. Wartości powyżej to najmniejszy plan miesięczny, który obejmuje tyle walidacji. Przy płatności rocznej dwa miesiące są gratis. Wartości Giggal.ai to ceny jednorazowe, płatne za użycie.`,
    betterFitFor: [
      'Szeroki zakres danych poza weryfikacją: numery komórkowe, dane firm, zmiany miejsca pracy i dane o reklamach',
      'Publikowanie własnych danych z testu adresów catch-all, czego większość dostawców nie robi',
      'Wyszukiwanie, wzbogacanie danych i weryfikacja w jednej subskrypcji',
      'API dla programistów z ceną w kredytach dla każdego endpointu',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: '7-dniowy okres próbny ze 100 kredytami; karta jest sprawdzana, ale nie jest obciążana',
    creditsExpire: 'Kredyty przechodzą na kolejny okres bez limitu, dopóki subskrypcja jest aktywna. Po anulowaniu wygasają z końcem okresu rozliczeniowego',
    catchAllCreditCost: '0,2 kredytu za sprawdzenie, tak samo jak każda inna weryfikacja',
    claimedAccuracy: 'Deklaruje dokładność 98,9% przy pokryciu 86,4%',
    pricingBasisNote: `Anymail Finder jest sprzedawany jako subskrypcja miesięczna, z progami od 400 kredytów za 29 USD miesięcznie do 100${K}000 kredytów za 799 USD. Sprawdzenie adresu e-mail znalezionego w innym miejscu kosztuje 0,2 kredytu. Wartości powyżej to najmniejsze plany miesięczne, które obejmują tyle sprawdzeń. Płatność roczna daje 33% oszczędności. Milion sprawdzeń miesięcznie przekracza najwyższy próg miesięczny. Wartości Giggal.ai to ceny jednorazowe, płatne za użycie.`,
    betterFitFor: [
      'Wyszukiwanie adresów e-mail na podstawie imienia, nazwiska i domeny, czego Giggal.ai nie robi',
      'Deklarowana gwarancja dostarczalności na poziomie co najmniej 97%',
      'Kredyty, które przechodzą na kolejny okres bez limitu, dopóki subskrypcja jest aktywna',
      'Marka obecna na rynku od dawna, z dużą biblioteką opublikowanych treści',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '10 kredytów przy rejestracji, bez karty',
    creditsExpire: 'Niewykorzystane kredyty przechodzą na kolejny okres, maksymalnie do dwukrotności miesięcznego limitu',
    catchAllCreditCost: '1 kredyt, tak samo jak każda inna weryfikacja',
    claimedAccuracy: 'Gwarantuje współczynnik odbić poniżej 5%, a powyżej tego progu zwraca kredyty',
    pricingBasisNote: `Findymail sprzedaje plany rozliczane według użycia, od 99 USD do 999 USD miesięcznie, bez podanej liczby kredytów. Ma też jeden plan z kredytami: Starter za 99 USD miesięcznie, który daje 5000 kredytów do wyszukiwania i 5000 kredytów do weryfikacji. Wszystko powyżej to Enterprise, z ceną na zapytanie. Dlatego nie ma opublikowanej ceny za 10${K}000, 100${K}000 ani milion weryfikacji miesięcznie. Wartości Giggal.ai to ceny jednorazowe, płatne za użycie.`,
    betterFitFor: [
      'Wyszukiwanie adresów e-mail, którego Giggal.ai w ogóle nie oferuje',
      'Gwarancja współczynnika odbić ze zwrotem kredytów',
      'Rozszerzenie do Chrome, które wyszukuje i weryfikuje adresy e-mail na LinkedIn i w Sales Navigator',
      'SOC 2 Type 2 i hosting w UE',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Darmowy start, liczba kredytów nie jest podana',
    creditsExpire: 'Nie opublikowano',
    catchAllCreditCost: 'Osobne kredyty catch-all: 5000 miesięcznie w planie za 99 USD',
    pricingBasisNote: `Listmint jest sprzedawany jako subskrypcja miesięczna z dwiema pulami kredytów. Starter kosztuje 99 USD miesięcznie za 20${K}000 kredytów standardowych i 5000 kredytów catch-all. Agency kosztuje 187 USD miesięcznie za 50${K}000 kredytów standardowych i 10${K}000 kredytów catch-all. Większe wolumeny to plan Enterprise, z ceną na zapytanie. Wartości Giggal.ai to ceny jednorazowe, płatne za użycie.`,
    betterFitFor: [
      'Sprawdzanie adresów catch-all, które według Listmint odbywa się ręcznie',
      'Weryfikacja adresów catch-all w czasie rzeczywistym',
      'Duży miesięczny limit kredytów standardowych w najtańszym planie',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: '14-dniowy okres próbny dla maksymalnie 1000 adresów',
    creditsExpire: 'Limit planu jest miesięczny. Okres próbny kończy się po 14 dniach',
    catchAllCreditCost: '1 kontakt z limitu planu',
    claimedAccuracy: 'Deklaruje 99%',
    pricingBasisNote: `Allegrow jest sprzedawany jako subskrypcja miesięczna. Starter kosztuje 99 USD miesięcznie za 5000 kontaktów, a dodatkowe kredyty kosztują 8 USD za 1000. 10${K}000 miesięcznie kosztuje więc 139 USD. To nasze wyliczenie na podstawie opublikowanych stawek. Allegrow nie oferuje takiego planu. Wiersze dla 100${K}000 i 1${K}000${K}000 to plan Scale Plus Unlimited za 1340 USD miesięcznie przy płatności rocznej, czyli weryfikacja bez limitu. Wartości Giggal.ai to ceny jednorazowe, płatne za użycie.`,
    betterFitFor: [
      'Plan z weryfikacją bez limitu, którego Giggal.ai nie ma',
      'Ocena reputacji nadawcy i monitorowanie umieszczenia w skrzynce odbiorczej obok weryfikacji',
      'Natywne integracje z HubSpot, Outreach i Salesloft, z SSO i raportami SOC 2',
      'Opublikowane badanie wyników fałszywie pozytywnych na fikcyjnych adresach',
    ],
    estimateNote: 'Nasze wyliczenie na podstawie opublikowanych stawek Allegrow. Allegrow nie oferuje takiego planu.',
    notes: { unlimited: 'bez limitu' },
  },
  no2bounce: {
    freeTier: '100 kredytów, bez karty, kredyty nigdy nie wygasają',
    creditsExpire: 'Kredyty nigdy nie wygasają, bez miesięcznego limitu użycia',
    catchAllCreditCost: '1 kredyt za adres e-mail, tak samo jak przy standardowym sprawdzeniu',
    claimedAccuracy: 'Deklaruje 99,6%',
    betterFitFor: [
      `Wiele progów cenowych, od 10${K}000 kredytów do 50 milionów`,
      'Kredyty, które nigdy nie wygasają, tak jak w Giggal.ai',
      'Plany miesięczne i roczne o 15% i 20% tańsze niż płatność za użycie',
      'Wyszukiwarka adresów e-mail i wyszukiwanie po domenie na tych samych kredytach',
    ],
  },
  quickemailverification: {
    freeTier: '100 kredytów dziennie, za darmo',
    creditsExpire: 'Stałe kredyty z płatności za użycie nigdy nie wygasają',
    catchAllCreditCost: 'Zwraca status catch-all, bez potwierdzenia',
    claimedAccuracy: 'Deklaruje 99%',
    betterFitFor: [
      '100 darmowych kredytów każdego dnia oraz darmowy limit miesięczny',
      'Stałe kredyty z płatności za użycie, które nigdy nie wygasają',
      'Niska cena na start, od 4 USD za 500 kredytów',
      'API w czasie rzeczywistym, dostępne od dawna',
    ],
  },
  myemailverifier: {
    freeTier: '100 kredytów dziennie, za darmo',
    creditsExpire: 'Kredyty nigdy nie wygasają',
    catchAllCreditCost: 'Zwraca status catch-all, bez potwierdzenia',
    betterFitFor: [
      'Bardzo niska stawka bazowa, 0,0025 USD za weryfikację',
      '100 darmowych kredytów dziennie, które się odnawiają, zamiast kończyć się po okresie próbnym',
      'Kredyty, które nigdy nie wygasają, z promocjami na dodatkowe kredyty przy dużych wolumenach',
      'Wiele publicznych opinii na G2, Capterra i Trustpilot',
    ],
  },
  scrubby: {
    freeTier: '200 kredytów',
    creditsExpire: 'Kredyty z płatności za użycie nigdy nie wygasają; kredyty z planu przechodzą na kolejny okres',
    catchAllCreditCost: '1 kredyt w Quick Verification; Deep Verification kosztuje 3 kredyty i trwa do 72 godzin',
    claimedAccuracy: 'Nie podano w cenniku',
    betterFitFor: [
      'Opcja Deep Verification, która wysyła prawdziwe e-maile na adresy trudne do sprawdzenia',
      'Darmowy pakiet 200 kredytów bez karty',
      'Płatność za użycie i plany miesięczne, a kredyty z planu przechodzą na kolejny okres',
      'Jedno, jasno określone zadanie zamiast szerokiego pakietu narzędzi',
    ],
    notes: { 'Quote only': 'Tylko na zapytanie' },
  },
  mailfloss: {
    freeTier: '500 weryfikacji miesięcznie oraz 7-dniowy okres próbny w subskrypcjach',
    creditsExpire: 'Kredyty przedpłacone nigdy nie wygasają; kredyty z subskrypcji zerują się co miesiąc',
    catchAllCreditCost: 'Tylko oznacza, nie rozstrzyga',
    betterFitFor: [
      'Automatyczne codzienne czyszczenie bezpośrednio w twojej platformie e-mailowej',
      '41 natywnych integracji, w tym Mailchimp, Klaviyo i HubSpot',
      'Subskrypcja, która po konfiguracji działa sama, bez ręcznego importu list',
      'Do wyboru subskrypcja albo kredyty przedpłacone',
    ],
  },
  bounceless: {
    freeTier: '1000 kredytów miesięcznie z firmowym adresem e-mail, bez karty',
    creditsExpire: 'Kredyty z pakietów i subskrypcji nigdy nie wygasają',
    catchAllCreditCost: 'Dane o adresach catch-all są wliczone w sprawdzenie za 1 kredyt',
    betterFitFor: [
      'Darmowy limit 1000 kredytów co miesiąc z firmowym adresem e-mail',
      'Jednorazowe pakiety i subskrypcje miesięczne, z kredytami, które nigdy nie wygasają',
      'Dodatkowe narzędzia w jednym koncie: kondycja nadawcy, umieszczenie w skrzynce odbiorczej i sprawdzanie formularzy zapisu',
      'Niska cena przy bardzo dużych wolumenach, 579 USD za milion',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: najważniejsze fakty`,
  factRows: { price10k: `10${K}000 sprawdzeń`, free: 'Darmowe kredyty', expiry: 'Ważność kredytów', catchAll: 'Catch-all' },
  perMonth: ' miesięcznie',
  notPublished: 'Nie opublikowano',
}
