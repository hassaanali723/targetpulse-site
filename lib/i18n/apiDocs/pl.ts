import type { ApiDocsStrings } from './types'

// Polish API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Register: second person singular, as in lib/i18n/pl.ts. The keyword plan
// puts the English loan term "email validator API" (50 searches a month in
// Poland) on this page, so it leads the H1 and the TechArticle headline.
// Numbers follow Intl pl-PL: 50 000 with a no-break space.

const K = ' '

export const API_DOCS_PL: ApiDocsStrings = {
  breadcrumbName: 'Dokumentacja API',
  schema: {
    headline: 'Email validator API: dokumentacja API Giggal.ai',
    description:
      'API REST do weryfikacji adresu e-mail, masowej weryfikacji oraz szczegółowego sprawdzania adresów catch-all i adresów chronionych przez SEG. Endpointy JSON, uwierzytelnianie kluczem API, opłata za każdą udaną weryfikację.',
  },
  contactPath: '/pl/kontakt',

  overviewBanner:
    'Szukasz ogólnego opisu? Zobacz stronę o [API do weryfikacji e-mail](/email-verification-api) albo o [API do walidacji e-mail w formularzach rejestracji](/email-validation-api) (po angielsku).',
  hero: {
    h1: 'Email validator API: dokumentacja API do weryfikacji e-mail',
    lead: 'Weryfikuj adres e-mail, uruchamiaj masową weryfikację i szczegółowo sprawdzaj adresy catch-all oraz adresy chronione przez SEG. Wszystkie endpointy używają formatu JSON i uwierzytelniania kluczem API. Płacisz tylko za udane weryfikacje.',
  },

  sidebar: {
    searchPlaceholder: 'Szukaj…',
    collapse: 'Zwiń',
    expand: 'Rozwiń',
  },

  intro: {
    h2: 'Wprowadzenie',
    body: `API Giggal.ai pozwala zweryfikować adres e-mail, uruchomić masową weryfikację do 50${K}000 adresów w jednym zadaniu oraz szczegółowo sprawdzić adresy catch-all i adresy chronione przez SEG. To proste API REST w formacie JSON. Każda udana weryfikacja zużywa kredyty z twojego konta.`,
    baseUrlLabel: 'Bazowy URL',
    apiKeyLabel: 'Jak uzyskać klucz API',
    apiKeyBody:
      'Utwórz klucz API w panelu Giggal.ai: otwórz zakładkę Developer API na pasku bocznym i kliknij Create API Key. Każdy klucz jest powiązany z twoim kontem i ma własne statystyki użycia. Możesz go unieważnić w każdej chwili.',
    apiKeyLink: 'Otwórz zakładkę Developer API',
    envelopeLabel: 'Format odpowiedzi',
    envelopeBody: 'Każda odpowiedź ma tę samą strukturę JSON:',
    quickStartLabel: 'Szybki start: weryfikacja adresu w cURL',
  },

  auth: {
    h2: 'Uwierzytelnianie',
    body: 'Wysyłaj klucz API z każdym żądaniem, w jednym z dwóch nagłówków. Oba działają.',
    bearerLabel: 'Opcja 1: token Bearer',
    xApiKeyLabel: 'Opcja 2: nagłówek X-API-Key',
    note: 'Brak klucza albo klucz nieprawidłowy lub unieważniony zwraca błąd HTTP 401. Nigdy nie umieszczaj kluczy API w kodzie po stronie klienta. Wywołuj API przez swój backend.',
    idempotencyLabel: 'Idempotencja (weryfikacja masowa i catch-all)',
    idempotencyBody:
      'Do `POST /v1/verify-batch` i `POST /v1/catchall` dołącz nagłówek `Idempotency-Key`. Ponowna próba z tym samym kluczem zwraca pierwotną odpowiedź. Nie powstaje duplikat zadania, a kredyty nie są pobierane dwa razy.',
  },

  groups: {
    'single-verification': 'Pojedyncza weryfikacja',
    'bulk-verification': 'Masowa weryfikacja',
    'catchall-verification': 'Weryfikacja catch-all',
    account: 'Konto',
  },
  groupCount: {
    // Polish has three plural forms (endpoint, endpointy, endpointów), so the
    // "other" line names the count after a colon and needs no plural.
    one: '{n} endpoint w tej grupie.',
    other: 'Liczba endpointów w tej grupie: {n}.',
  },

  endpoint: {
    authorizations: 'Autoryzacja',
    pathParams: 'Parametry ścieżki i zapytania',
    requestBody: 'Treść żądania',
    required: 'Wymagany',
    responseSamples: 'Przykładowe odpowiedzi',
  },

  endpoints: {
    'verify-single': {
      title: 'Weryfikacja adresu e-mail',
      description:
        'Weryfikuje jeden adres e-mail synchronicznie. Kosztuje 1 kredyt. Jeśli domena jest typu catch-all, szczegółowe sprawdzenie odbywa się w tym samym żądaniu, a odpowiedź zawiera pola catch_all_score i catch_all_verdict.',
      bodyParams: {
        email: 'Adres e-mail do weryfikacji.',
      },
    },
    'submit-batch': {
      title: 'Wysłanie zadania wsadowego do masowej weryfikacji',
      description:
        `Wyślij do 50${K}000 adresów w jednym zadaniu. Przetwarzanie jest asynchroniczne: odpytuj GET /v1/jobs/:jobId, aby śledzić postęp. Dołącz nagłówek Idempotency-Key, aby ponowić utworzenie zadania bez podwójnej opłaty.`,
      bodyParams: {
        emails:
          `Lista adresów e-mail do weryfikacji. Maksymalnie 50${K}000 w jednym zadaniu. Duplikaty i błędnie zapisane adresy są usuwane po stronie serwera.`,
        name: 'Opcjonalna nazwa zadania, czytelna dla człowieka. Widoczna w twoim panelu.',
      },
    },
    'get-job': {
      title: 'Status zadania wsadowego',
      description:
        'Odpytuj ten endpoint, aby śledzić postęp. Zmiana statusu: processing → completed (albo failed). Zalecany odstęp między zapytaniami: od 10 do 15 sekund. Małe listy (poniżej 50 adresów) kończą się zwykle w mniej niż 30 sekund.',
      params: {
        jobId: 'Identyfikator zadania zwrócony przez POST /v1/verify-batch.',
      },
    },
    'get-job-results': {
      title: 'Wyniki zadania wsadowego',
      description:
        'Gdy status ma wartość "completed", pobierz wyniki dla każdego adresu. Wyniki są stronicowane: użyj parametrów zapytania page i limit. Wyniki są przechowywane przez 48 godzin (zobacz pole resultsExpiresAt w zadaniu).',
      params: {
        jobId: 'Identyfikator zadania.',
        page: 'Numer strony, domyślnie 1.',
        limit: 'Liczba wyników na stronę, domyślnie 25, maksymalnie 500.',
      },
    },
    'start-catchall': {
      title: 'Uruchomienie zadania weryfikacji catch-all',
      description:
        'Uruchamia szczegółową weryfikację catch-all dla zakończonego zadania wsadowego. Ponownie sprawdzane są tylko adresy oznaczone jako catch-all w pierwotnym zadaniu. Opłata wynosi 1 kredyt za adres (zobacz pole creditsRequired w odpowiedzi).',
      bodyParams: {
        jobId:
          'Identyfikator zakończonego zadania wsadowego do masowej weryfikacji. Szczegółowo sprawdzane są tylko adresy catch-all z tego zadania.',
        name: 'Opcjonalna nazwa zadania, czytelna dla człowieka.',
      },
    },
    'get-catchall': {
      title: 'Status zadania catch-all',
      description:
        'Odpytuj ten endpoint, aby śledzić postęp i aktualne liczniki verdictCounts. Zadanie catch-all trwa zwykle od kilku sekund do kilku minut, zależnie od wolumenu.',
      params: {
        taskId: 'Identyfikator zadania zwrócony przez POST /v1/catchall.',
      },
    },
    'catchall-results': {
      title: 'Wyniki zadania catch-all',
      description:
        'Pobiera stronicowane wyniki dla każdego adresu ze szczegółami oceny (sygnały sortowania domeny i wiek domeny).',
      params: {
        taskId: 'Identyfikator zadania.',
        page: 'Numer strony, domyślnie 1.',
        limit: 'Liczba wyników na stronę, domyślnie 25, maksymalnie 500.',
        verdict: 'Filtr według wyniku: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Pobranie wyników catch-all w pliku CSV',
      description:
        'Pobiera wszystkie wyniki zakończonego zadania catch-all w pliku CSV z kolumnami Email, Score i Verdict. Content-Type to text/csv.',
      params: {
        taskId: 'Identyfikator zadania.',
        verdict: 'Filtr według wyniku: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Saldo kredytów',
      description:
        'Zwraca saldo konta: dostępne kredyty, kredyty zarezerwowane (zablokowane dla trwających zadań) i sumy od założenia konta. Kredyty za weryfikacje z wynikiem "unknown" wracają automatycznie i widać je tutaj.',
    },
  },

  errors: {
    h2: 'Błędy i limity zapytań',
    statusHeader: 'Status',
    meaningHeader: 'Znaczenie',
    statusRows: [
      { status: '200 OK', meaning: 'Żądanie się powiodło (weryfikacja synchroniczna albo odczyt statusu lub wyników).' },
      { status: '202 Accepted', meaning: 'Zadanie asynchroniczne zostało utworzone i dodane do kolejki.' },
      { status: '400 Bad Request', meaning: 'Brak parametrów lub nieprawidłowe parametry (zły format adresu, pusta lista emails, brak jobId).' },
      { status: '401 Unauthorized', meaning: 'Brak klucza API albo klucz nieprawidłowy lub unieważniony.' },
      { status: '402 Payment Required', meaning: 'Za mało kredytów na tę operację.' },
      { status: '404 Not Found', meaning: 'Identyfikator zadania nie istnieje na twoim koncie.' },
      { status: '409 Conflict', meaning: 'Zadanie nie jest w wymaganym stanie (na przykład wyniki pobrano przed jego zakończeniem).' },
      { status: '410 Gone', meaning: 'Wyniki zadania przekroczyły okres przechowywania wynoszący 48 godzin.' },
      { status: '429 Too Many Requests', meaning: 'Przekroczono limit zapytań. Odczekaj chwilę i spróbuj ponownie.' },
      { status: '500 / 502 / 503', meaning: 'Serwer lub zewnętrzna usługa weryfikacji jest chwilowo niedostępna.' },
    ],
    rateLimitsH3: 'Limity zapytań',
    rateLimitsBody:
      'Każda odpowiedź zawiera nagłówki `RateLimit-Limit`, `RateLimit-Remaining` i `RateLimit-Reset` (pisownia według RFC). Pomagają one rozłożyć zapytania w czasie. `RateLimit-Reset` podaje liczbę sekund do wyzerowania bieżącego okna.',
    categoryHeader: 'Kategoria',
    limitHeader: 'Limit',
    rateLimitRows: [
      { category: 'Wszystkie endpointy (domyślnie)', limit: '300 zapytań / 15 minut' },
      { category: 'Tworzenie zadań (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 zapytań / 15 minut' },
      { category: 'Śledzenie zadań (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 zapytań / 15 minut' },
      { category: 'Maksymalna liczba adresów w zadaniu wsadowym', limit: `50${K}000` },
      { category: 'Przechowywanie wyników', limit: '48 godzin' },
    ],
    tierNote:
      'Są trzy poziomy limitów, bo zadanie sprawdza się częściej, niż się je tworzy. Podczas trwania zadania możesz odpytywać API co kilka sekund. Limit `600 / 15 min` (około 40 na minutę) daje więc zapas i nie przeciąża serwera.',
    higherLimitsTitle: 'Potrzebujesz wyższych limitów?',
    higherLimitsBody: 'Regularnie podnosimy limity dla zweryfikowanych partnerów integracyjnych.',
    higherLimitsCta: 'Skontaktuj się z nami',
    h429: 'Format odpowiedzi 429',
    body429: 'Po przekroczeniu limitu API zwraca błąd HTTP 429 z taką treścią:',
    backoff:
      'Przed ponowną próbą odczekaj liczbę sekund podaną w nagłówku `RateLimit-Reset` (czas do wyzerowania okna).',
  },

  cta: {
    h3: 'Chcesz zintegrować API?',
    body: 'Utwórz klucz API w kilka sekund. Na start dostajesz darmowe kredyty testowe, więc sprawdzisz całą integrację przed zakupem.',
    primary: 'Uzyskaj klucz API',
    secondary: 'Porozmawiaj z naszym zespołem',
  },
}
