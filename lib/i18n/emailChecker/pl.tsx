import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Polish copy for /pl/weryfikator-email, translated from the English
// /email-checker page (app/(en)/email-checker/page.tsx) via the French copy.
// Keyword plan (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md, sections 2 to 4):
// head term "weryfikator email" (80/mo, KD 0), title "Weryfikator email:
// sprawdzanie adresu email za darmo", H1 "Sprawdź, czy mail istnieje".
// Must appear: weryfikator email, sprawdzanie adresu email, weryfikacja
// adresu email, sprawdź, czy mail istnieje, za darmo, darmowy, email checker.
// The question family "jak sprawdzić, czy mail istnieje" belongs to the child
// page /pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje, linked first in
// `related` (as the French copy links its child), so this page does not use
// that exact phrase as a heading. Searched forms ("email", "mail") stay in the
// keyword phrases; running text writes "e-mail". Register: "ty" (sprawdź).

/** 1 opinia, 2-4 opinie (not 12-14), 5+ opinii. */
function opinie(n: number): string {
  if (n === 1) return '1 opinia'
  const last = n % 10
  const lastTwo = n % 100
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return `${n} opinie`
  return `${n} opinii`
}

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Sprawdź, czy mail istnieje',
    h1Rest: 'za darmo',
    intro:
      'Darmowy weryfikator email online. Wklej dowolny adres, a sprawdzimy jego format, serwer pocztowy i samą skrzynkę. Na domenach catch-all weryfikator prowadzi dalsze testy i zwraca wynik prawidłowy albo nieprawidłowy.',
  },
  tool: {
    caption: 'Bez rejestracji i bez karty. Jeden adres na jedno sprawdzenie.',
    freeCredits: 'Potrzebujesz więcej sprawdzeń? Załóż konto i odbierz 1000 darmowych kredytów. Karta nie jest potrzebna.',
  },
  ratings: {
    reviews: (count) => opinie(count),
    ratedAria: (rating, platform) => `Ocena Giggal.ai w serwisie ${platform}: ${rating.replace('.', ',')} na 5`,
  },
  awards: {
    headingLead: 'Giggal.ai ma wyróżnienie',
    headingRest: 'Leader w serwisach SourceForge i Slashdot',
    showLabel: 'Pokaż {badge}',
  },
  steps: {
    title: 'Sprawdzanie adresu email w czterech krokach',
    intro:
      'Pełna weryfikacja adresu email składa się z czterech kroków. Wiele weryfikatorów kończy na pierwszym z nich. Dlatego tyle „sprawdzonych” list wciąż ma odbicia.',
    items: [
      {
        title: 'Format',
        text: 'Czy adres jest poprawnie zapisany: jeden znak @, poprawna nazwa przed nim i domena z końcówką, na przykład .pl. Ten krok wyłapuje literówki i nic więcej.',
      },
      {
        title: 'Serwer pocztowy',
        text: 'Czy domena ma rekordy serwera pocztowego (MX)? Bez rekordu MX w tej domenie nie może istnieć żadna skrzynka. Taki adres jest martwy jeszcze przed wysyłką.',
      },
      {
        title: 'Skrzynka pocztowa',
        text: 'Weryfikator pyta serwer pocztowy, czy ta skrzynka istnieje, i nie wysyła przy tym wiadomości. Odpowiedź „tak” oznacza, że skrzynka istnieje. Odpowiedź „nie” oznacza, że jej nie ma.',
      },
      {
        title: 'Catch-all',
        text: 'Jeśli serwer odpowiada „tak” także dla wymyślonego adresu, krok trzeci niczego nie dowiódł. W tym miejscu większość weryfikatorów pokazuje „catch-all” i kończy pracę. Giggal.ai analizuje dodatkowe sygnały, które odróżniają prawdziwą skrzynkę od odpowiedzi accept-all, i zwraca wynik prawidłowy albo nieprawidłowy.',
      },
    ],
    footnote:
      'Panel wyników powyżej pokazuje każdy krok w trakcie jego wykonania. Aby sprawdzić, czy adres e-mail jest prawidłowy, wklej go i kliknij przycisk. Jeden adres zajmuje kilka sekund.',
  },
  results: {
    title: 'Co weryfikator email pokazuje dla każdego adresu',
    intro: 'Każde sprawdzenie kończy się jednym z trzech wyników.',
    valid: {
      title: 'Prawidłowy',
      text: 'Skrzynka pocztowa istnieje i przeszła dodatkowe testy. E-mail wysłany na ten adres powinien więc dotrzeć.',
    },
    invalid: {
      title: 'Nieprawidłowy',
      text: 'Adres ma błędny format, domena nie ma serwera pocztowego albo serwer odrzucił skrzynkę. E-mail wysłany na ten adres wróci jako odbicie.',
    },
    unknown: {
      title: 'Nieznany',
      text: 'Zdarza się rzadko. Serwer nie odpowiedział na czas albo celowo opóźnia nowych nadawców. Spróbuj ponownie później, zamiast uznawać adres za martwy.',
    },
    detailsIntro: 'Pod wynikiem weryfikator email pokazuje szczegóły, które pomagają ocenić dostarczalność:',
    details: [
      { lead: 'Dostawca poczty', rest: ' (Google Workspace, Microsoft 365 albo bramka bezpieczeństwa, na przykład Proofpoint)' },
      { lead: 'Serwer pocztowy, który odpowiedział', rest: '' },
      { lead: 'Czy adres jest jednorazowy', rest: ' (tymczasowa skrzynka, która wkrótce zniknie)', href: '/pl/sprawdz-jednorazowy-email' },
      { lead: 'Czy adres jest funkcyjny', rest: ' (biuro@, sprzedaz@, pomoc@, czyli wspólna skrzynka, a nie konkretna osoba)' },
      { lead: 'Czy adres jest u darmowego dostawcy', rest: ', na przykład w Gmailu lub Yahoo. To przydatna informacja przy ocenie kontaktów B2B' },
    ],
  },
  exists: {
    title: 'Czy mail istnieje? Co sprawdza weryfikator email',
    p1: 'Adres e-mail istnieje, gdy jego skrzynka jest założona na serwerze pocztowym odbiorcy i przyjmuje pocztę. Aby sprawdzić, czy mail istnieje, weryfikator pyta bezpośrednio ten serwer i nie wysyła żadnej wiadomości. Potwierdza, że skrzynka jest na miejscu. Nie potwierdza, kto jest jej właścicielem ani jak często ją czyta.',
    p2: 'Jeśli nie wiesz, czy adres z twoich kontaktów istnieje, sprawdź go w weryfikatorze email powyżej.',
    signsIntro: 'Adresy, które nie istnieją, zwykle mają jedną z tych cech:',
    signs: [
      { lead: 'Literówka w domenie', rest: ', na przykład gmial.com albo yaho.com. Taka domena nie ma serwera pocztowego albo odrzuca każdą wiadomość.' },
      { lead: 'Brak rekordów serwera pocztowego', rest: ' w domenie, więc poczta nie ma dokąd trafić.' },
      { lead: 'Odrzucona skrzynka:', rest: ' domena jest prawdziwa, ale serwer informuje, że tej osoby tam nie ma. Często dlatego, że odeszła z firmy.' },
      { lead: 'Przypadkowe znaki', rest: ' przed znakiem @, wpisane przez boty albo przez osoby, które nie chciały wypełniać formularza.' },
    ],
  },
  whySend: {
    title: 'Dlaczego warto sprawdzić adres e-mail przed wysyłką',
    p1: 'E-mail wysłany na adres, który nie istnieje, wraca jako twarde odbicie (hard bounce). Gmail, Outlook i inni dostawcy poczty liczą twoje odbicia. Gdy odbić jest zbyt wiele, mniej ufają twojej domenie nadawczej. Wtedy więcej twoich wiadomości trafia do spamu albo zostaje zablokowanych, nawet tych wysłanych do prawdziwych osób. Weryfikacja adresu email wyłapuje takie adresy przed wysyłką.',
    readMore: (
      <>
        Z artykułu{' '}
        <InlineLink href="/pl/blog/twarde-i-miekkie-odbicie-email">twarde i miękkie odbicie e-maila</InlineLink>{' '}
        dowiesz się, co oznacza każdy kod odbicia i co zrobić w każdym przypadku.
      </>
    ),
    bounceTitle: 'Niższy współczynnik odbić.',
    bounceText: 'Listy wyczyszczone w Giggal.ai mają zwykle współczynnik odbić poniżej 3%.',
    benefits: [
      {
        title: 'Dobra reputacja nadawcy.',
        text: 'Przy mniejszej liczbie odbić twoja domena zachowuje zaufanie dostawców poczty.',
      },
      {
        title: 'Lepsza dostarczalność.',
        text: 'Przy dobrej reputacji więcej twoich wiadomości trafia do skrzynki odbiorczej zamiast do spamu.',
      },
      {
        title: 'Czystsze dane.',
        text: 'Martwe adresy znikają z CRM, zanim zabiorą ci czas albo kredyty na wysyłkę.',
      },
    ],
  },
  whenToUse: {
    title: 'Kiedy używać weryfikatora email',
    intro: 'Używaj tego weryfikatora email zawsze, gdy od jednego adresu zależy dalsze działanie:',
    items: [
      'Zanim odpowiesz na zapytanie, w którym adres wygląda na wpisany ręcznie.',
      'Gdy rejestracja wraca jako odbicie i chcesz wiedzieć, czy adres w ogóle istniał.',
      'Zanim napiszesz na adres znaleziony na stronie internetowej albo w CRM.',
      'Aby sprawdzić adres z kupionej listy, zanim zapłacisz za czyszczenie całego pliku.',
      'Aby potwierdzić kontakt w domenie catch-all, który inne narzędzie oznaczyło jako „ryzykowny”.',
    ],
  },
  catchAll: {
    title: 'Dlaczego inne weryfikatory email zatrzymują się na catch-all',
    paragraphs: [
      <>
        Niektóre firmowe serwery pocztowe przyjmują każdy adres, prawdziwy lub wymyślony. To{' '}
        <InlineLink href="/pl/weryfikacja-catch-all">domena catch-all</InlineLink>. Zapytaj ją o prawdziwego
        pracownika, a odpowie „tak”. Zapytaj o wymyśloną osobę, a też odpowie „tak”. Zwykły test skrzynki
        niczego więc w tej domenie nie dowodzi.
      </>,
      <>
        Wykrycie domeny catch-all jest proste. Wystarczy sprawdzić wymyślony adres i zobaczyć, czy serwer go
        przyjmie. Dlatego prawie każdy weryfikator email powie ci, że domena jest typu catch-all. Ustalenie, które
        skrzynki w tej domenie są prawdziwe, wymaga dużo więcej pracy. Większość weryfikatorów kończy więc na
        etykiecie i zostawia decyzję tobie. Na listach B2B adresy catch-all to często duża część kontaktów, a wiele
        z nich to prawdziwe osoby.
      </>,
      <>
        Giggal.ai analizuje dodatkowe sygnały dla każdego adresu catch-all i zwraca wynik prawidłowy albo
        nieprawidłowy. Dlatego ta strona pozwala tylko na kilka sprawdzeń na jedną osobę. Przeczytaj,{' '}
        <InlineLink href="/pl/blog/co-to-jest-adres-email-catch-all">co to jest adres email catch-all</InlineLink>,
        aby poznać pełny kontekst.
      </>,
    ],
  },
  wholeList: {
    title: 'Sprawdź całą listę zamiast jednego adresu',
    list: (
      <>
        Weryfikator adresu email na tej stronie sprawdza jeden adres naraz. Aby sprawdzić całą listę, załóż konto i wgraj
        plik CSV lub Excel z maksymalnie 50{' '}000 adresów. Potem{' '}
        <InlineLink href="/pl">wyczyść listę mailingową</InlineLink> tymi samymi testami w każdym wierszu. Zaczynasz
        z 1000 darmowych kredytów, bez karty.
      </>
    ),
    api: (
      <>
        Aby weryfikować adresy we własnej aplikacji lub formularzu rejestracji, użyj{' '}
        <InlineLink href="/email-verification-api">API do weryfikacji e-mail</InlineLink> (po angielsku). Wykonuje
        ono te same testy i zwraca wynik w formacie JSON.
      </>
    ),
  },
  faqTitle: 'Weryfikator email: najczęstsze pytania',
  faqs: [
    {
      q: 'Co to jest weryfikator email (email checker)?',
      a: 'Weryfikator email, inaczej weryfikator maili, a po angielsku email checker, mówi, czy adres e-mail jest prawidłowy. Sprawdza jego format, serwer pocztowy i samą skrzynkę. Działa bez wysyłania wiadomości na ten adres.',
    },
    {
      q: 'Weryfikator, walidator i email checker: czy to to samo?',
      a: 'Tak. To trzy nazwy tego samego rodzaju narzędzia. Każde z nich weryfikuje adres e-mail, sprawdzając format, serwer pocztowy i skrzynkę. Różnią się na domenach catch-all. Wiele z nich kończy tam na wyniku „ryzykowny”. Ten weryfikator zwraca wynik prawidłowy albo nieprawidłowy.',
    },
    {
      q: 'Jak działa weryfikator email?',
      a: 'Wykonuje cztery testy po kolei. Najpierw sprawdza format adresu. Potem rekordy serwera pocztowego domeny. Następnie pyta serwer pocztowy, czy skrzynka istnieje. Na domenach catch-all serwer odpowiada „tak” na każdy adres. Tam Giggal.ai analizuje dodatkowe sygnały, aby odróżnić prawdziwą skrzynkę od fałszywej.',
    },
    {
      q: 'Jak sprawdzić, czy adres e-mail jest prawidłowy?',
      a: 'Wklej adres do weryfikatora na górze tej strony i uruchom sprawdzanie. Wynik dostajesz w kilka sekund: prawidłowy, nieprawidłowy albo nieznany. Pod nim widzisz powód i szczegóły serwera pocztowego.',
    },
    {
      q: 'Czy można sprawdzić, czy mail istnieje, bez wysyłania wiadomości?',
      a: 'Tak. Weryfikator pyta serwer pocztowy odbiorcy, czy skrzynka istnieje, i kończy przed wysłaniem jakiejkolwiek wiadomości. Do skrzynki tej osoby nic nie trafia.',
    },
    {
      q: 'Czy weryfikator wysyła e-mail na sprawdzany adres?',
      a: 'Nie. Weryfikacja komunikuje się tylko z serwerem pocztowym. Właściciel adresu niczego nie dostaje i nie wie, że jego adres został sprawdzony.',
    },
    {
      q: 'Czy weryfikator email jest dokładny?',
      a: 'To zależy od weryfikatora. Większość działa dokładnie na zwykłych domenach i poddaje się na domenach catch-all, gdzie zwraca wynik „ryzykowny” albo „nieznany”. Giggal.ai sprawdza dalej na domenach catch-all i zwraca wynik prawidłowy albo nieprawidłowy. Na listach firmowych jego zmierzona dokładność wynosi 98,5%.',
    },
    {
      q: 'Co oznacza wynik „prawidłowy” na domenie catch-all?',
      a: 'Oznacza, że skrzynka pocztowa została potwierdzona, a nie tylko to, że domena przyjęła odbiorcę. Sama etykieta catch-all mówi tylko, że serwer odpowiada „tak” na wszystko. Tutaj wynik prawidłowy oznacza, że adres przeszedł dodatkowe testy. Te testy oddzielają prawdziwą skrzynkę od takiej, która da odbicie.',
    },
    {
      q: 'Co oznacza wynik „nieznany” przy weryfikacji adresu email?',
      a: 'Serwer pocztowy nie dał jasnej odpowiedzi na czas. Często celowo opóźnia nowych nadawców (greylisting). Nic nie dowodzi, że adres jest martwy. Sprawdź go ponownie później.',
    },
    {
      q: 'Ile adresów mogę tutaj sprawdzić za darmo?',
      a: 'Kilka na godzinę, za darmo, bez rejestracji i bez karty. Każde sprawdzenie wykonuje wszystkie testy, dlatego limit jest niski. Aby sprawdzić więcej adresów, załóż konto.',
    },
    {
      q: 'Czy prawidłowy adres e-mail może mimo to dać odbicie?',
      a: 'Tak, ale rzadko. Wynik prawidłowy oznacza, że skrzynka istniała w chwili sprawdzenia. E-mail może jednak wrócić, jeśli skrzynka jest pełna albo serwer pocztowy na chwilę przestał działać. Może też wrócić, jeśli osoba odejdzie z firmy po sprawdzeniu albo serwer zablokuje twoją domenę nadawczą. Sprawdzaj adresy krótko przed wysyłką.',
    },
    {
      q: 'Czy moje dane pozostają prywatne?',
      a: 'Operatorem Giggal.ai jest TargetPulse Ltd, która przetwarza dane osobowe zgodnie z RODO. Polityka prywatności na giggal.ai/pl/polityka-prywatnosci wyjaśnia, jakie dane zbieramy, jak ich używamy i jak długo je przechowujemy.',
    },
    {
      q: 'Czy mogę tutaj sprawdzić całą listę?',
      a: 'Nie na tej stronie. Załóż konto i wgraj listę w pliku CSV lub Excel. Każdy adres przejdzie te same testy. Zaczynasz z 1000 darmowych kredytów, bez karty.',
    },
  ],
  ctaHeadline: 'Sprawdź całą swoją listę',
  related: [
    { href: '/pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje', label: 'Jak sprawdzić, czy mail istnieje? 4 sposoby' },
    { href: '/pl/weryfikacja-catch-all', label: 'Weryfikacja catch-all i adresy ryzykowne' },
    { href: '/pl/cennik', label: 'Cennik i kredyty' },
    { href: '/pl/sprawdz-jednorazowy-email', label: 'Sprawdź jednorazowy email' },
    { href: '/pl/blog/co-to-jest-adres-email-catch-all', label: 'Co to jest adres email catch-all?' },
  ],
}
