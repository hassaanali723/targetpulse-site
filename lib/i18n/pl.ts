// Polish strings for the shared chrome and the two interactive components.
// One page set for Poland (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md).
// Register: second person singular ("sprawdź", "twoja lista"), never
// "Pan/Pani". Running text writes "e-mail"; the searched forms "email" and
// "mail" appear where the keyword plan assigns them. Polish diacritics always.
// Numbers follow Intl pl-PL: 1000 (four digits, no grouping), 10 000 (no-break
// space from five digits up), 9,90 USD. Technical terms stay: catch-all, SMTP,
// MX, DNS. Terms follow SEO-Plan/i18n-batch1-nl-pl-terminology.md.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'Sprawdź adres e-mail', href: '/pl/weryfikator-email' },
  links: [
    { name: 'Catch-all', href: '/pl/weryfikacja-catch-all' },
    { name: 'Integracje', href: '/pl/integracje' },
    { name: 'Cennik', href: '/pl/cennik' },
    { name: 'Kontakt', href: '/pl/kontakt' },
  ],
  login: 'Zaloguj się',
  signup: 'Załóż darmowe konto',
  menu: 'Otwórz menu',
  homeAria: 'Giggal.ai, strona główna',
}

export const footer = {
  blurb:
    'Weryfikacja e-mail, która sprawdza, czy każda skrzynka pocztowa istnieje. Twoje kampanie trafiają do prawdziwych skrzynek, także na domenach catch-all i accept-all, które inne narzędzia pomijają.',
  solutions: {
    heading: 'Rozwiązania',
    links: [
      { name: 'Weryfikacja catch-all', href: '/pl/weryfikacja-catch-all' },
      { name: 'Serwer MCP', href: '/pl/mcp' },
    ],
  },
  resources: {
    heading: 'Zasoby',
    links: [
      { name: 'Blog', href: '/pl/blog' },
      { name: 'Jak sprawdzić, czy mail istnieje?', href: '/pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje' },
      { name: 'Słownik', href: '/pl/slownik' },
      { name: 'Porównanie weryfikatorów (po angielsku)', href: '/alternatives' },
      { name: 'Alternatywa dla ZeroBounce', href: '/pl/alternatywa-dla-zerobounce' },
      { name: 'Alternatywa dla NeverBounce', href: '/pl/alternatywa-dla-neverbounce' },
      { name: 'Alternatywa dla Snov.io', href: '/pl/alternatywa-dla-snovio' },
      { name: 'Dokumentacja API', href: '/pl/dokumentacja-api' },
    ],
  },
  freeTools: {
    heading: 'Darmowe narzędzia',
    links: [
      { name: 'Weryfikator email', href: '/pl/weryfikator-email' },
      { name: 'Sprawdź jednorazowy email', href: '/pl/sprawdz-jednorazowy-email' },
      { name: 'Tymczasowy adres email', href: '/pl/tymczasowy-adres-email' },
      { name: 'Darmowi dostawcy poczty (po angielsku)', href: '/free-email-providers' },
      { name: 'Ekstraktor adresów e-mail (po angielsku)', href: '/email-extractor' },
      { name: 'Generator DKIM (po angielsku)', href: '/dkim-generator' },
      { name: 'Generator DMARC (po angielsku)', href: '/dmarc-generator' },
      { name: 'Wyszukiwanie rekordów MX (po angielsku)', href: '/mx-lookup' },
      { name: 'Sprawdzanie rekordu SPF (po angielsku)', href: '/spf-checker' },
      { name: 'Adresy Gmail z plusem (po angielsku)', href: '/gmail-plus-addressing' },
      { name: 'Kalkulator współczynnika odbić (po angielsku)', href: '/bounce-rate-calculator' },
      { name: 'Generator wariantów adresu e-mail (po angielsku)', href: '/email-permutator' },
      { name: 'Generator BIMI (po angielsku)', href: '/bimi-generator' },
      { name: 'Wykrywanie słów spamowych (po angielsku)', href: '/spam-word-checker' },
      { name: 'Generator stopki e-mail (po angielsku)', href: '/email-signature-generator' },
    ],
  },
  product: {
    heading: 'Produkt',
    // Same order as the English footer: the paid product only.
    links: [
      { name: 'Usługa weryfikacji e-mail', href: '/pl' },
      { name: 'Masowa weryfikacja e-mail', href: '/pl/masowa-weryfikacja-email' },
      { name: 'Czyszczenie listy mailingowej (po angielsku)', href: '/email-list-cleaning' },
      { name: 'Integracje', href: '/pl/integracje' },
      { name: 'API do weryfikacji e-mail (po angielsku)', href: '/email-verification-api' },
      { name: 'Cennik', href: '/pl/cennik' },
    ],
  },
  company: {
    heading: 'Firma',
    links: [
      { name: 'Kontakt', href: '/pl/kontakt' },
      { name: 'Program partnerski (po angielsku)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'Regulamin', href: '/pl/regulamin' },
    { name: 'Polityka prywatności', href: '/pl/polityka-prywatnosci' },
    { name: 'Zwroty', href: '/pl/zwroty' },
  ],
  legalHeading: 'Informacje prawne',
  rights: 'Wszelkie prawa zastrzeżone.',
  operatedBy: 'Operatorem Giggal.ai jest TargetPulse Ltd, Londyn, Wielka Brytania.',
  abuseReports: 'Zgłoszenia nadużyć:',
  language: 'Język',
}

export const announcement = {
  text: 'Dedykowane skrzynki Google i Outlook z',
  brand: 'PureMail',
  tail: ', 2,90 USD za skrzynkę miesięcznie.',
  dismiss: 'Zamknij komunikat',
}

export const cta = {
  headline: 'Sprawdź całą listę i porównaj wyniki',
  offer: '1000 darmowych kredytów, bez karty płatniczej.',
  button: 'Zacznij za darmo',
  trust: ['Darmowy test', 'Kredyty nie wygasają', 'Zwrot kredytów za wyniki nieznane'],
}

export const consoleStrings = {
  header: 'Tester w czasie rzeczywistym',
  live: 'Test na żywo',
  actionLabel: 'Akcja',
  actionTitle: 'Sprawdzanie skrzynki',
  placeholder: 'Wpisz adres e-mail do sprawdzenia...',
  ariaInput: 'Adres e-mail do sprawdzenia',
  button: 'Sprawdź',
  buttonRunning: 'Sprawdzanie',
  diagnostics: 'Stan testów',
  checks: {
    basic: 'Testy podstawowe',
    dns: 'Wyszukiwanie serwerów pocztowych',
    catchall: 'Test catch-all',
    mailbox: 'Test skrzynki pocztowej',
  },
  idleTitle: 'Gotowe do sprawdzenia',
  idleText: 'Wpisz adres firmowy lub prywatny, aby sprawdzić, czy skrzynka istnieje.',
  spawning: 'URUCHAMIANIE TESTÓW...',
  initLog: '[INIT] Otwieranie bezpiecznego połączenia weryfikacji...',
  limitTitle: 'Limit dla gości wyczerpany',
  limitText: 'Wykorzystano 5 darmowych sprawdzeń w tej godzinie. Zarejestruj się, aby dostać 1000 darmowych kredytów bez karty i sprawdzić całą listę.',
  limitButton: 'Odbierz 1000 darmowych kredytów',
  errorTitle: 'Błąd weryfikacji',
  errorFailed: 'Weryfikacja się nie udała. Spróbuj ponownie za kilka sekund.',
  errorUnreachable: 'Usługa weryfikacji nie odpowiada.',
  invalidSyntax: 'To nie jest prawidłowy adres e-mail.',
  isCatchAll: 'to domena catch-all',
  notCatchAll: 'to nie jest domena catch-all',
  catchAllText: 'Domena przyjmuje pocztę na każdy adres, więc podstawowy test nie powie, czy ta skrzynka istnieje.',
  notCatchAllText: 'Tutaj standardowy test daje pewny wynik.',
  resultLabel: 'Wynik',
  verdictTitle: {
    deliverable: 'Prawidłowy',
    undeliverable: 'Nieprawidłowy',
    risky: 'Ryzykowny',
    unknown: 'Nieznany',
    catchall: 'Catch-all',
    error: 'Błąd',
  },
  verdictLine: {
    deliverable: 'Ta skrzynka istnieje.',
    undeliverable: 'Ta skrzynka nie istnieje.',
    risky: 'Serwer przyjmuje pocztę, ale nie możemy w pełni potwierdzić tej skrzynki.',
    unknown: 'Nie udało się potwierdzić tej skrzynki.',
    catchall: 'Nie udało się potwierdzić tej skrzynki.',
    error: '',
  },
}

export const pricing = {
  payg: 'Płatność za użycie (jednorazowo)',
  subscription: 'Subskrypcja miesięczna',
  save: 'Oszczędzasz 10%',
  colVolume: 'Kredyty',
  colRate: 'Cena za kredyt',
  colSave: 'Oszczędność',
  colTotal: 'Cena łączna',
  credits: 'kredytów',
  popular: 'Najczęściej wybierany',
  perCredit: '/ kredyt',
  oneTime: 'jednorazowo',
  perMonth: '/mies.',
  saveBadge: 'Oszczędzasz {pct}%',
  buy: 'Kup',
  subscribe: 'Subskrybuj',
  noDiscount: 'Bez rabatu',
  mobVolume: 'Kredyty',
  mobRate: 'Cena',
  mobSave: 'Oszczędność',
  mobPrice: 'Razem',
  numberLocale: 'pl-PL',
  // Polish writes the currency code after the number: "9,90 USD".
  currencySuffix: true,
  currencySuffixText: ' USD',
  formula: '1 weryfikacja adresu e-mail',
  formulaNote: '(w tym weryfikacja catch-all/accept-all)',
  formulaCredit: '1 kredyt',
  customTitle: 'Potrzebujesz większego wolumenu?',
  customText: 'Przygotowujemy indywidualne oferty i dedykowane pule adresów IP dla dużych wolumenów.',
  customButton: 'Skontaktuj się z nami',
}

export const notFound = {
  kicker: '404',
  title: 'Ta strona nie istnieje',
  text: 'Adres może zawierać literówkę albo strona została przeniesiona. Darmowy weryfikator email i cennik są o jedno kliknięcie stąd.',
  primary: 'Sprawdź adres e-mail',
  secondary: 'Wróć na stronę główną',
}

export const legal = {
  updated: 'Ostatnia aktualizacja',
  notice: 'To tłumaczenie ma charakter wyłącznie informacyjny. W razie rozbieżności obowiązuje',
  noticeLink: 'wersja angielska',
  noticeTail: ', która jako jedyna jest prawnie wiążąca.',
  breadcrumbHome: 'Strona główna',
}

/** Polish number formatting: 1000 and 10 000 (no-break space from five digits up, as Intl pl-PL does). */
export function plNumber(n: number, decimals = 0): string {
  return n.toLocaleString('pl-PL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
/** 9.9 -> "9,90 USD" (prices stay in US dollars). */
export function plUsd(n: number, decimals = 2): string {
  return `${plNumber(n, decimals)} USD`
}

/** 2026-10-21 -> "21 października 2026" (month in the genitive). */
export function formatDatePl(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}
