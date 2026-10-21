import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Polish copy for /pl/masowa-weryfikacja-email, translated from the English
// /bulk-email-verifier page (app/(en)/bulk-email-verifier/page.tsx) via the
// French copy. Keyword plan (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md):
// title "Masowa weryfikacja email: czyszczenie listy mailingowej", H1
// "Masowa weryfikacja email". The searched form "email" is kept in those
// phrases; running text writes "e-mail". The English "bulk email verifier"
// appears once, in the definition. Terms follow
// SEO-Plan/i18n-batch1-nl-pl-terminology.md. Numbers: 1000 and 50 000 (no-break
// space from five digits up), as Intl pl-PL prints them.

const K = ' '

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Masowa weryfikacja email: czyszczenie listy mailingowej',
    description:
      `Masowa weryfikacja email dla plików CSV i Excel do 50${K}000 adresów. Wynik prawidłowy lub nieprawidłowy w każdym wierszu, także catch-all. 1000 kredytów gratis.`,
    breadcrumb: 'Masowa weryfikacja email',
    appName: 'Giggal.ai Masowa weryfikacja email',
  },
  hero: {
    h1Lead: 'Masowa weryfikacja email:',
    h1Rest: 'sprawdź całą listę za jednym razem',
    intro:
      'Wgraj plik CSV lub Excel, a narzędzie do masowej weryfikacji e-mail sprawdzi każdy adres. Każdy wiersz dostaje wynik prawidłowy albo nieprawidłowy, także adresy catch-all.',
    ctaPrimary: 'Sprawdź listę za darmo',
    ctaPricing: 'Zobacz cennik',
    checks: ['1000 darmowych kredytów', 'Bez karty płatniczej', 'Kredyty nigdy nie wygasają'],
  },
  facts: [
    { v: `50${K}000`, l: 'adresów w jednym pliku' },
    { v: '98,5%', l: 'dokładności na listach firmowych' },
    { v: '1 kredyt', l: 'za adres, także catch-all' },
    { v: '<3%', l: 'typowy współczynnik odbić po weryfikacji' },
  ],
  definition: {
    title: 'Czym jest masowa weryfikacja email?',
    text: 'Masowa weryfikacja e-mail sprawdza całą listę adresów za jednym razem. Pokazuje, które adresy mogą odbierać pocztę. Narzędzie do masowej weryfikacji łączy się z serwerami pocztowymi każdej domeny i pyta, czy dana skrzynka pocztowa istnieje. Nie wysyła przy tym żadnej wiadomości. Adresy, które dałyby odbicie, usuwasz przed wysyłką. To chroni twoją reputację nadawcy i dostarczalność. Po angielsku takie narzędzie nazywa się bulk email verifier.',
  },
  steps: {
    title: 'Jak działa masowa weryfikacja email',
    intro:
      'Trzy kroki, a do kontaktów z twojej listy nie trafia żaden e-mail. Większość list jest gotowa w kilka minut.',
    items: [
      {
        title: 'Wgraj swoją listę',
        text: `Dodaj plik CSV lub Excel z maksymalnie 50${K}000 adresów e-mail. Większą listę podziel na kilka plików.`,
      },
      {
        title: 'Każdy adres zostaje sprawdzony',
        text: 'Weryfikator łączy się z serwerami pocztowymi każdej domeny i pyta, czy skrzynka istnieje. Oznacza też adresy jednorazowe, funkcyjne, zduplikowane i catch-all.',
      },
      {
        title: 'Pobierz wyniki',
        text: 'Dostajesz plik CSV z wynikiem w każdym wierszu. Zachowaj adresy prawidłowe, usuń nieprawidłowe, a nieznane sprawdź ponownie później.',
      },
    ],
  },
  results: {
    title: 'Co narzędzie do masowej weryfikacji zwraca dla każdego adresu',
    intro: 'Każdy wiersz kończy się jednym z trzech wyników.',
    valid: {
      title: 'Prawidłowy',
      text: 'Skrzynka pocztowa istnieje, więc e-mail wysłany na ten adres powinien dotrzeć. Zachowaj te adresy.',
    },
    invalid: {
      title: 'Nieprawidłowy',
      text: 'Format jest błędny, domena nie ma serwera pocztowego albo skrzynka nie istnieje. E-mail wysłany na ten adres wróci jako odbicie. Usuń te adresy.',
    },
    unknown: {
      title: 'Nieznany',
      text: 'Serwer pocztowy nie dał jasnej odpowiedzi, często z powodu greylistingu. Sprawdź te adresy ponownie później. Kredyty za wyniki nieznane są zwracane.',
    },
    flagsIntro: 'Każdy wiersz pokazuje też te oznaczenia, które pomagają wybrać adresy do zachowania:',
    flags: [
      { lead: 'Catch-all', rest: ', z wynikiem prawidłowy albo nieprawidłowy zamiast „ryzykowny”' },
      { lead: 'Jednorazowy', rest: ', tymczasowa skrzynka, która wkrótce przestanie działać' },
      { lead: 'Funkcyjny', rest: ', na przykład biuro@ lub sprzedaz@, czyli wspólna skrzynka, a nie konkretna osoba' },
      { lead: 'Duplikat', rest: ', ten sam adres kilka razy w twoim pliku' },
    ],
  },
  catchAll: {
    title: 'Adresy catch-all dostają wynik prawidłowy albo nieprawidłowy',
    paragraphs: [
      <>
        Niektóre firmowe serwery pocztowe przyjmują każdy adres, prawdziwy lub wymyślony. To{' '}
        <InlineLink locale="pl" href="/catch-all-verification">domena catch-all</InlineLink>. Zwykły test dostaje
        odpowiedź „tak” dla każdego adresu w tej domenie. Nie odróżni więc prawdziwej skrzynki od literówki.
      </>,
      <>
        Wiele walidatorów do masowej weryfikacji zatrzymuje się w tym miejscu i oznacza każdy adres catch-all jako
        „ryzykowny”. Na listach B2B może to być duża część kontaktów, a wiele z nich to prawdziwe osoby. Musisz
        wtedy zgadywać, do kogo wysłać wiadomość.
      </>,
      <>
        Giggal.ai sprawdza każdy adres catch-all i zwraca wynik prawidłowy albo nieprawidłowy za 1 kredyt, tak samo
        jak dla każdego innego adresu. Działa też na domenach chronionych przez{' '}
        <InlineLink locale="pl" href="/seg-email-verification">bramki bezpieczeństwa, takie jak Proofpoint i Mimecast</InlineLink>{' '}
        (po angielsku), gdzie inne narzędzia często zwracają wynik nieznany.
      </>,
    ],
  },
  pricing: {
    title: 'Darmowa masowa weryfikacja email: zacznij od 1000 kredytów',
    intro:
      'Każde nowe konto dostaje 1000 darmowych kredytów, bez karty. Za darmo sprawdzisz więc listę do 1000 adresów. Potem płacisz za użycie. Kredyty kupujesz jednorazowo, bez subskrypcji miesięcznej, a kredyty nigdy nie wygasają.',
    colCredits: 'Kredyty (adresy)',
    colPrice: 'Cena',
    colPer1k: 'Za 1000 adresów',
    freeLabel: 'Za darmo',
    freeNote: 'Nowe konta, bez karty',
    footnote: (
      <>
        Jeden kredyt sprawdza jeden adres, łącznie z testem catch-all. Zobacz pełny{' '}
        <InlineLink locale="pl" href="/pricing">cennik</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Kiedy używać masowej weryfikacji email',
    intro:
      'Sprawdź listę zawsze wtedy, gdy masz napisać do wielu adresów naraz. Najpierw usuń adresy, które już nie istnieją. To chroni twoją dostarczalność.',
    items: [
      'Przed kampanią cold mailingową, aby odbicia nie zaszkodziły twojej dostarczalności.',
      'Po zebraniu kontaktów z formularza, wydarzenia lub bazy potencjalnych klientów.',
      'Przed wysyłką do starej listy newslettera, nieużywanej od miesięcy.',
      'Przed importem kontaktów do CRM albo narzędzia do e-mail marketingu.',
    ],
  },
  software: {
    title: 'Oprogramowanie do masowej weryfikacji e-mail w twoich narzędziach',
    intro:
      'Wgranie pliku to pierwsza możliwość. Adresy e-mail możesz też weryfikować masowo z własnej aplikacji lub automatyzacji.',
    items: [
      {
        title: 'API do weryfikacji e-mail (po angielsku)',
        text: 'Wysyłaj adresy z aplikacji lub formularza rejestracji i odbieraj wynik w formacie JSON.',
      },
      {
        title: 'Integracje',
        text: 'Automatycznie sprawdzaj nowe kontakty przez Zapier lub n8n.',
      },
      {
        title: 'Serwer MCP',
        text: 'Weryfikuj adresy e-mail z poziomu Claude, ChatGPT, Cursor i VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'Weryfikacja listy czy czyszczenie listy mailingowej?',
    listText: (
      <>
        Weryfikacja listy daje wynik dla każdego adresu. Czyszczenie listy mailingowej to to, co robisz z tymi
        wynikami. Usuwasz adresy nieprawidłowe, jednorazowe i zduplikowane, a zostaje lista prawidłowych adresów
        e-mail. Obie czynności zaczynają się od tego samego importu. Więcej o tym, jak działa{' '}
        <InlineLink locale="pl" href="/email-list-cleaning">czyszczenie listy mailingowej</InlineLink> (po angielsku).
      </>
    ),
    oneTitle: 'Chcesz sprawdzić tylko jeden adres?',
    oneText: (
      <>
        Użyj darmowego{' '}
        <InlineLink locale="pl" href="/email-checker">weryfikatora email</InlineLink>. Sprawdza jeden adres naraz
        tymi samymi testami, bez rejestracji.
      </>
    ),
  },
  faqTitle: 'Masowa weryfikacja email: najczęstsze pytania',
  faqs: [
    {
      q: 'Czym jest narzędzie do masowej weryfikacji e-mail?',
      a: 'To narzędzie sprawdza całą listę adresów e-mail za jednym razem, a nie jeden adres naraz. Wgrywasz plik, a każdy adres dostaje wynik: prawidłowy, nieprawidłowy albo nieznany. Nazywa się je też masowym walidatorem e-mail.',
    },
    {
      q: 'Ile adresów e-mail mogę sprawdzić za jednym razem?',
      a: `Do 50${K}000 adresów w jednym pliku. Jeśli twoja lista jest większa, podziel ją na kilka plików i wgraj je po kolei.`,
    },
    {
      q: 'Czy jest darmowe narzędzie do masowej weryfikacji e-mail?',
      a: 'Tak. Każde nowe konto dostaje 1000 darmowych kredytów, bez karty. Jeden kredyt sprawdza jeden adres. Za darmo sprawdzisz więc listę do 1000 adresów.',
    },
    {
      q: 'Czy darmowa masowa walidacja e-mail jest naprawdę darmowa?',
      a: 'Tak. Pierwsze 1000 adresów sprawdzasz za darmo, bez karty. Darmowe kredyty nigdy nie wygasają, więc możesz ich użyć w dowolnym momencie. Płacisz dopiero wtedy, gdy chcesz sprawdzić więcej niż 1000 adresów.',
    },
    {
      q: 'Ile trwa masowa weryfikacja email?',
      a: 'Większość list jest gotowa w kilka minut.',
    },
    {
      q: 'Jakie formaty plików mogę wgrać?',
      a: 'CSV lub Excel. Wyniki pobierasz w pliku CSV, z wynikiem w każdym wierszu.',
    },
    {
      q: 'Czy narzędzie wysyła e-maile do mojej listy?',
      a: 'Nie. Pyta każdy serwer pocztowy, czy skrzynka istnieje, i kończy przed wysłaniem jakiejkolwiek wiadomości. Żaden kontakt z twojej listy nic nie dostaje.',
    },
    {
      q: 'Ile kosztuje masowa weryfikacja email?',
      a: `Jeden kredyt za adres, łącznie z testem catch-all. 10${K}000 adresów kosztuje 9,90 USD, a 100${K}000 adresów kosztuje 76 USD. Płacisz jednorazowo, bez subskrypcji miesięcznej, a kredyty nigdy nie wygasają.`,
    },
    {
      q: 'Co się dzieje z adresami catch-all?',
      a: 'Każdy z nich jest sprawdzany i dostaje wynik prawidłowy albo nieprawidłowy za 1 kredyt, tak jak każdy inny adres. Wiele walidatorów oznacza je wszystkie jako „ryzykowne”.',
    },
    {
      q: 'Co oznacza wynik „nieznany” i czy za niego płacę?',
      a: 'Nieznany oznacza, że serwer pocztowy nie dał jasnej odpowiedzi. Często celowo opóźnia nowych nadawców (greylisting). Sprawdź te adresy ponownie później. Kredyty za wyniki nieznane są zwracane.',
    },
    {
      q: 'Czy masowa walidacja e-mail to to samo co masowa weryfikacja e-mail?',
      a: 'Tak. Walidacja, weryfikacja i sprawdzanie to trzy słowa na tę samą pracę: ustalenie, które adresy z listy mogą odbierać pocztę.',
    },
    {
      q: 'Jak dokładna jest masowa weryfikacja email w Giggal.ai?',
      a: 'Zmierzona dokładność Giggal.ai na listach firmowych wynosi 98,5%. Listy sprawdzone tym narzędziem mają zwykle współczynnik odbić poniżej 3%.',
    },
    {
      q: 'Czy moja lista pozostaje prywatna?',
      a: 'Operatorem Giggal.ai jest TargetPulse Ltd, która przetwarza dane osobowe zgodnie z RODO. Polityka prywatności na giggal.ai/pl/polityka-prywatnosci wyjaśnia, jakie dane zbieramy, jak ich używamy i jak długo je przechowujemy.',
    },
  ],
  ctaHeadline: 'Sprawdź swoją listę e-mail w kilka minut',
}
