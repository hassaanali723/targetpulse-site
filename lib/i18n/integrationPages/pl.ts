import type { IntegrationPagesContent } from './types'

// Polish copy for the integration pages, translated from the French and
// English pages. Keyword targets (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md):
// weryfikacja email, weryfikator email, sprawdzanie adresu email. The checker
// links go to /pl/weryfikator-email. Product UI labels (Zapier, n8n, HubSpot,
// Giggal.ai dashboard), property names, status values, scopes, tool names and
// code stay in English, as the apps show them. Register: "ty" (sprawdź).
// Numbers follow Intl pl-PL: 1000 and 8000 without grouping.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Automatyzacja marketingu',
  'Email Marketing': 'E-mail marketing',
  CRM: 'CRM',
  Ecommerce: 'E-commerce',
  'Sales & Outreach': 'Sprzedaż i outreach',
  'Forms & Surveys': 'Formularze i ankiety',
  'Website & Popups': 'Strony WWW i pop-upy',
  'Spreadsheets & Data': 'Arkusze i dane',
  Support: 'Obsługa klienta',
  Payments: 'Płatności',
  Automation: 'Automatyzacja',
  Spreadsheets: 'Arkusze kalkulacyjne',
  Forms: 'Formularze',
  'AI & Agents': 'AI i agenci',
  Developer: 'Dla programistów',
}

export const PL: IntegrationPagesContent = {
  common: {
    locale: 'pl',
    hubPath: '/pl/integracje',
    hubCrumb: 'Integracje',
    checkerPath: '/pl/weryfikator-email',
    signupLabel: 'Zacznij z 1000 darmowych kredytów',
    getStarted: 'Zacznij za darmo',
    allIntegrations: 'Zobacz wszystkie integracje',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Integracje do weryfikacji adresów e-mail | Giggal.ai',
      description:
        'Integracje do weryfikacji e-mail z HubSpot, Zapier, n8n, Mailchimp, Claude i ChatGPT. Sprawdzaj adresy w swoich narzędziach, także adresy catch-all.',
      ogTitle: 'Integracje do weryfikacji adresów e-mail: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Połącz weryfikator email Giggal.ai z HubSpot, Zapier, n8n, Mailchimp, Arkuszami Google, Claude i ChatGPT.',
    },
    h1Lead: 'Integracje do weryfikacji adresów e-mail dla',
    h1Accent: 'narzędzi, których już używasz',
    intro:
      'Giggal.ai pozwala [sprawdzić adres e-mail](/pl/weryfikator-email) z poziomu CRM, platformy do e-mail marketingu, arkuszy kalkulacyjnych i asystenta AI. Każde sprawdzenie pokazuje, czy skrzynka pocztowa istnieje. Adresy catch-all też dostają wynik prawidłowy albo nieprawidłowy.',
    waysTitle: 'Cztery sposoby na dodanie weryfikacji e-mail do twoich narzędzi',
    waysIntro:
      'Wybierz sposób, który pasuje do twojej pracy. Każdy z nich zużywa te same kredyty i zwraca ten sam wynik.',
    ways: [
      {
        label: 'Bezpośrednio',
        title: 'Integracje bezpośrednie',
        text: 'Połącz [HubSpot](/pl/integracje/hubspot), Mailchimp, SendGrid i inne platformy z poziomu panelu Giggal.ai. Zaimportuj listę, sprawdź ją i odeślij wyczyszczoną listę z powrotem.',
      },
      {
        label: 'Automatyzacja',
        title: 'Zapier i n8n',
        text: 'Sprawdzaj każdy nowy kontakt, każdą odpowiedź z formularza albo każdy wiersz arkusza od razu po dodaniu. Użyj aplikacji Giggal.ai w [Zapier](/pl/integracje/zapier) albo oficjalnego węzła dla [n8n](/pl/integracje/n8n).',
      },
      {
        label: 'MCP',
        title: 'Asystenci AI',
        text: 'Dodaj [serwer MCP Giggal.ai](/pl/mcp) do Claude, ChatGPT, Cursor lub VS Code. Potem poproś asystenta o sprawdzenie adresów na czacie.',
      },
      {
        label: 'API',
        title: 'API REST',
        text: 'Wysyłaj żądania pojedynczej lub masowej weryfikacji z własnego kodu. Wyniki przychodzą w formacie JSON. [Dokumentacja API](/pl/dokumentacja-api) opisuje każdy endpoint.',
      },
    ],
    grid: {
      searchPlaceholder: 'Szukaj integracji…',
      searchAria: 'Szukaj integracji',
      connectionAria: 'Filtruj według typu połączenia',
      connection: { all: 'Wszystkie', direct: 'Bezpośrednie', zapier: 'Przez Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filtruj według kategorii',
      allCategories: 'Wszystkie kategorie',
      categories: CATEGORIES,
      prevPage: 'Poprzednia strona',
      nextPage: 'Następna strona',
      pagination: 'Stronicowanie',
      showing: 'Integracje od {from} do {to} z {total}',
      noMatchTitle: 'Żadna integracja nie pasuje do wyszukiwania.',
      noMatchText:
        'Każde narzędzie, które potrafi wysłać żądanie HTTP, może korzystać z [API REST](/pl/dokumentacja-api).',
      descriptions: {
        zapier:
          'Sprawdzaj każdy nowy adres e-mail w czasie rzeczywistym w ponad 8000 aplikacji, także adresy catch-all. Bez kodu.',
        n8n:
          'Sprawdzaj pojedynczy adres albo całą listę w workflowach n8n za pomocą oficjalnego węzła społecznościowego Giggal.ai.',
        claude:
          'Dodaj serwer MCP Giggal.ai do Claude i sprawdzaj adresy e-mail na czacie.',
        chatgpt:
          'Dodaj serwer MCP Giggal.ai do ChatGPT i sprawdzaj adresy e-mail na czacie.',
        clay:
          'Sprawdzaj adresy e-mail potencjalnych klientów w tabelach Clay przez API Giggal.ai, także adresy catch-all.',
        'rest-api':
          'API REST do pojedynczej, masowej i catch-all weryfikacji e-mail. Zbuduj integrację, której potrzebujesz.',
        mailchimp:
          'Zaimportuj odbiorców z Mailchimp, sprawdź ich i zachowaj tylko adresy dostarczalne.',
        mailgun:
          'Połącz Mailgun i sprawdzaj listy wysyłkowe przed każdą kampanią.',
        mailjet:
          'Zaimportuj listy kontaktów z Mailjet do Giggal.ai i sprawdź je, także adresy catch-all.',
        sendgrid:
          'Sprawdzaj kontakty z SendGrid masowo, aby chronić reputację nadawcy.',
        activecampaign:
          'Zaimportuj kontakty z ActiveCampaign, sprawdź je i usuń złe adresy przed wysyłką.',
        'campaign-monitor':
          'Połącz Campaign Monitor i sprawdzaj każdą listę subskrybentów w Giggal.ai.',
        getresponse:
          'Sprawdzaj listy w GetResponse, aby zmniejszyć liczbę odbić, także na domenach catch-all.',
        aweber:
          'Zaimportuj subskrybentów z AWeber, sprawdź ich i odeślij czystą listę.',
        mailerlite:
          'Połącz MailerLite i sprawdzaj listy subskrybentów przed kolejną kampanią.',
        drip:
          'Sprawdzaj kontakty z Drip masowo, aby automatyczne e-maile trafiały do prawdziwych skrzynek.',
        'elastic-email':
          'Zaimportuj listy z Elastic Email i sprawdź je, także adresy catch-all i adresy za bramką bezpieczeństwa.',
        'reply-io':
          'Sprawdzaj adresy potencjalnych klientów, zanim ruszą sekwencje w Reply.io, aby pisać do prawdziwych skrzynek.',
        'zoho-crm':
          'Zaimportuj kontakty i leady z Zoho CRM, sprawdź je i utrzymuj czyste dane w CRM.',
        'google-sheets':
          'Sprawdzaj każdy nowy wiersz od razu po dodaniu i zapisuj wynik w arkuszu.',
        hubspot:
          'Sprawdzaj kontakty i listy w HubSpot CRM, a potem filtruj według wyniku w HubSpot.',
        salesforce:
          'Sprawdzaj adres e-mail każdego nowego leada w Salesforce od razu po jego utworzeniu.',
        typeform:
          'Sprawdzaj adresy e-mail z odpowiedzi w Typeform, zanim trafią do innych narzędzi.',
        slack:
          'Publikuj wyniki weryfikacji i alerty dotyczące list na kanale Slack.',
      },
      zapierAppDescription:
        'Sprawdzaj w czasie rzeczywistym, przez Zapier, adresy e-mail, które trafiają do {name}.',
      logoAlt: 'Integracja weryfikacji e-mail {name} z Giggal.ai',
    },
    appListTitle: 'Wszystkie obsługiwane aplikacje Zapier',
    appListIntro: 'Liczba aplikacji, które łączą się z Giggal.ai przez Zapier: {count}. Każda ma własny przewodnik konfiguracji (po angielsku).',
    apiTitle: 'Nie ma tu twojego narzędzia?',
    apiText:
      'Każde narzędzie, które potrafi wysłać żądanie HTTP, może sprawdzać adresy e-mail w Giggal.ai. Użyj [API do weryfikacji e-mail](/email-verification-api) (po angielsku) do pojedynczych i masowych sprawdzeń albo połącz się przez Zapier.',
    apiCta: 'Dokumentacja API',
    apiHref: '/pl/dokumentacja-api',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier: weryfikacja adresów e-mail w 8000+ aplikacji | Giggal.ai',
      description:
        'Sprawdzaj każdy adres e-mail w Zapier z Giggal.ai, w czasie rzeczywistym. Adresy catch-all dostają wynik prawidłowy albo nieprawidłowy. Bez kodu.',
      ogTitle: 'Zapier: weryfikacja adresów e-mail w ponad 8000 aplikacji',
      ogDescription:
        'Sprawdzaj każdy nowy adres e-mail w Zapier z Giggal.ai. Działa z HubSpot, Arkuszami Google, Salesforce, Mailchimp i ponad 8000 innych aplikacji.',
    },
    crumb: 'Zapier',
    h1Lead: 'Weryfikacja adresów e-mail w Zapier w',
    h1Accent: 'ponad 8000 aplikacji',
    intro:
      'Dodaj Giggal.ai do dowolnego Zapa, aby [sprawdzić adres e-mail](/pl/weryfikator-email) od razu po jego pojawieniu się. Działa to z formularzami, systemami CRM, arkuszami i platformami do e-mail marketingu. Adresy catch-all dostają wynik prawidłowy albo nieprawidłowy. Nie musisz pisać kodu.',
    viewOnZapier: 'Zobacz w Zapier',
    tabsTitle: 'Workflowy Zapier i przewodnik konfiguracji',
    tabsIntro:
      'Zacznij od gotowego workflowu albo zbuduj własnego Zapa według przewodnika. Zajmie to około pięciu minut.',
    tabs: {
      cardSubtitle: 'Połącz Giggal.ai z ponad 8000 aplikacji',
      tryFree: 'Wypróbuj za darmo',
      actionsTitle: '4 akcje w Zapier',
      actions: [
        { name: 'Verify Email', description: 'Sprawdza adres e-mail w czasie rzeczywistym, także adres catch-all.' },
        { name: 'Start Bulk Verification', description: 'Wysyła listę adresów. Zwraca identyfikator zadania, którego mogą użyć kolejne kroki.' },
        { name: 'Get Bulk Verification Results', description: 'Pobiera wyniki zadania wsadowego, gdy ma ono status zakończonego.' },
        { name: 'Get Credit Balance', description: 'Pokazuje, ile kredytów Giggal.ai ci zostało.' },
      ],
      workflowsTab: 'Workflowy',
      guideTab: 'Przewodnik integracji',
      workflows: [
        {
          title: 'Sprawdzaj nowe kontakty w HubSpot',
          description:
            'Gdy w HubSpot powstaje kontakt, Giggal.ai sprawdza jego adres e-mail i zapisuje wynik we właściwości kontaktu.',
        },
        {
          title: 'Sprawdzaj nowe wiersze w Arkuszach Google',
          description:
            'Każdy nowy wiersz jest sprawdzany od razu po dodaniu. Status, poziom ryzyka i wynik catch-all trafiają do tego wiersza.',
        },
        {
          title: 'Sprawdzaj nowe leady w Salesforce',
          description:
            'Każdy nowy lead jest sprawdzany, zanim zajmie się nim handlowiec. Nikt nie pisze do skrzynki, która nie istnieje.',
        },
        {
          title: 'Sprawdzaj zapisy w Mailchimp',
          description:
            'Sprawdzaj każdego nowego subskrybenta przy zapisie i dodawaj do odbiorców w Mailchimp tylko adresy dostarczalne.',
        },
        {
          title: 'Sprawdzaj odpowiedzi z Typeform',
          description:
            'Wyłapuj błędnie wpisane i jednorazowe adresy e-mail w odpowiedziach z formularzy, zanim trafią do innych narzędzi.',
        },
        {
          title: 'Wysyłaj wyniki do Slacka',
          description:
            'Publikuj wiadomość na Slacku, gdy sprawdzanie się zakończy albo gdy lead z domeny catch-all zostanie potwierdzony jako prawidłowy.',
        },
      ],
      workflowCta: 'Skonfiguruj w Zapier',
      guideTitle: 'Połącz Giggal.ai z Zapier',
      guideIntro:
        'Konfiguracja zajmuje około pięciu minut. Przykład poniżej sprawdza każdy nowy wiersz w arkuszu Google Sheets.',
      steps: [
        {
          title: 'Wybierz aplikację wyzwalającą',
          text: 'Utwórz Zapa i wybierz aplikację, która go uruchamia. Działa każda aplikacja w Zapier, czyli ponad 8000. W tym przykładzie wybierz Google Sheets i zdarzenie New or Updated Spreadsheet Row. Połącz swoje konto i kliknij Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Konfiguracja wyzwalacza w Zapier z Google Sheets i zdarzeniem New or Updated Spreadsheet Row',
        },
        {
          title: 'Dodaj Giggal.ai jako krok akcji',
          text: 'W kroku akcji wyszukaj Giggal.ai w wyborze aplikacji i zaznacz go.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Wyszukiwanie Giggal.ai w wyborze aplikacji w Zapier',
        },
        {
          title: 'Wybierz zdarzenie akcji',
          text: 'Giggal.ai ma cztery akcje: Verify Email, Start Bulk Verification, Get Bulk Verification Results i Get Credit Balance. W tym przykładzie wybierz Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Cztery zdarzenia akcji Giggal.ai w wyborze zdarzeń w Zapier',
        },
        {
          title: 'Połącz swoje konto Giggal.ai',
          text: 'Za pierwszym razem Zapier poprosi o klucz API. W panelu Giggal.ai otwórz zakładkę Developer API i kliknij Create API Key. Wklej klucz w Zapier i kliknij Connect. Nowe konta dostają 1000 darmowych kredytów, bez karty płatniczej.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Łączenie konta Giggal.ai z Zapier za pomocą klucza API',
        },
        {
          title: 'Przypisz pole e-mail i użyj wyniku',
          text: 'Połącz pole Email z kolumną, w której jest adres, i uruchom test. Giggal.ai zwraca status, poziom ryzyka, ocenę i wynik catch-all. Po tym kroku dodaj filtry lub ścieżki Zapier (Filter, Paths). Na przykład zapisuj adresy dostarczalne w arkuszu, a nieprawidłowe przenoś do innej zakładki.',
        },
      ],
      help: 'Masz problem z którymś krokiem? [Skontaktuj się z naszym zespołem](/pl/kontakt) albo przeczytaj [dokumentację API](/pl/dokumentacja-api), aby poznać pełny format odpowiedzi.',
    },
    why: [
      {
        title: 'Weryfikator adresów catch-all w Zapier',
        text: 'Wiele weryfikatorów oznacza adresy catch-all jako „ryzykowne” i na tym kończy. Na liście B2B może to być około 30% adresów. Giggal.ai sprawdza je dokładniej i zwraca w twoim Zapie wynik prawidłowy albo nieprawidłowy.',
      },
      {
        title: 'Weryfikacja w chwili wpisania adresu',
        text: 'Leady są sprawdzane od razu, gdy przychodzą z formularza, CRM albo arkusza. Złe adresy nigdy nie trafiają na twoje listy, a później masz mniej do czyszczenia.',
      },
      {
        title: 'Wyniki, których użyjesz w filtrach Zapier',
        text: 'Każde sprawdzenie zwraca status, poziom ryzyka, ocenę dostarczalności i wynik catch-all. Użyj ich w filtrach i ścieżkach Zapier, aby kierować każdego leada we właściwe miejsce.',
      },
    ],
    appsTitle: 'Sprawdzaj adresy e-mail ze wszystkich tych aplikacji',
    appsIntro: 'Każda aplikacja poniżej ma własny przewodnik weryfikacji e-mail przez Zapier (po angielsku).',
    categories: CATEGORIES,
    faqTitle: 'Weryfikacja adresów e-mail w Zapier: najczęstsze pytania',
    faq: [
      {
        q: 'Jak działa integracja Giggal.ai z Zapier?',
        a: 'Dodajesz krok Giggal.ai do Zapa. Gdy wyzwalacz się uruchomi, na przykład dla nowego kontaktu w CRM albo odpowiedzi z formularza, Zapier wysyła adres e-mail do Giggal.ai. Giggal.ai sprawdza, czy skrzynka istnieje, i przekazuje wynik do następnego kroku. Nie potrzebujesz kodu.',
      },
      {
        q: 'Czy Zapier może sprawdzać adresy catch-all?',
        a: 'Tak, gdy krokiem weryfikacji jest Giggal.ai. Większość weryfikatorów zwraca dla domen catch-all wynik „ryzykowny” albo „nieznany”. Giggal.ai wykonuje dodatkowe testy na tych adresach i zwraca wynik prawidłowy albo nieprawidłowy, razem z oceną.',
      },
      {
        q: 'Jakie aplikacje mogę połączyć?',
        a: 'Każdą aplikację w Zapier, w tym HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform i Slack. Jeśli aplikacja jest w Zapier, może wysyłać adresy do Giggal.ai.',
      },
      {
        q: 'Ile kredytów kosztuje sprawdzenie przez Zapier?',
        a: 'Jeden kredyt za adres e-mail, tak samo jak w panelu i w API. Weryfikacja catch-all kosztuje ten sam kredyt. Nowe konta dostają 1000 darmowych kredytów, bez karty płatniczej.',
      },
      {
        q: 'Lepiej sprawdzać w czasie rzeczywistym czy masowo?',
        a: 'Większość zespołów robi jedno i drugie. Weryfikacja w czasie rzeczywistym w Zapier blokuje złe adresy na wejściu. Masowa weryfikacja czyści listy, które już masz, w panelu albo za pomocą akcji Start Bulk Verification.',
      },
    ],
    howToName: 'Jak sprawdzić adres e-mail w Zapier za pomocą Giggal.ai',
    howToDescription:
      'Skonfiguruj weryfikację adresów e-mail, także adresów catch-all, w dowolnym workflowie Zapier.',
    cta: {
      title: 'Sprawdzaj każdy nowy adres e-mail w Zapier',
      text: 'Zbuduj pierwszego Zapa do weryfikacji w około pięć minut. Dostajesz 1000 darmowych kredytów, bez karty płatniczej, a weryfikacja catch-all jest w cenie.',
      primary: 'Zacznij za darmo',
      secondary: 'Zobacz wszystkie integracje',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'Weryfikacja adresów e-mail w n8n: oficjalny węzeł | Giggal.ai',
      description:
        'Sprawdzaj adresy e-mail w n8n za pomocą oficjalnego węzła społecznościowego Giggal.ai. Jeden adres lub cała lista, także catch-all. Pakiet npm n8n-nodes-giggal.',
      ogTitle: 'Weryfikacja adresów e-mail w n8n: oficjalny węzeł społecznościowy',
      ogDescription:
        'Sprawdzaj pojedynczy adres albo całą listę w workflowach n8n za pomocą węzła społecznościowego Giggal.ai. Także adresy catch-all.',
    },
    crumb: 'n8n',
    h1Lead: 'Weryfikacja adresów e-mail w n8n z',
    h1Accent: 'oficjalnym węzłem Giggal.ai',
    intro:
      'Dodaj Giggal.ai do workflowów n8n, aby [sprawdzić adres e-mail](/pl/weryfikator-email) w czasie rzeczywistym albo wysłać całą listę jako zadanie wsadowe. Adresy catch-all dostają wynik prawidłowy albo nieprawidłowy. Węzeł instalujesz z npm tylko raz.',
    viewOnNpm: 'Zobacz w npm',
    opsTitle: 'Co robi węzeł n8n',
    opsIntro:
      'Węzeł ma dwa zasoby i cztery operacje. Zasobu Email używasz dla jednego adresu, a zasobu Job dla listy.',
    ops: [
      { name: 'Verify', detail: 'Sprawdza adres e-mail w czasie rzeczywistym, także adres catch-all. 1 kredyt za sprawdzenie.' },
      { name: 'Verify Batch', detail: 'Wysyła całą listę w jednym żądaniu. Zwraca identyfikator zadania, który workflow może sprawdzić później.' },
      { name: 'Get Status', detail: 'Pokazuje postęp zadania wsadowego: liczbę sprawdzonych adresów, procent i czas zakończenia.' },
      { name: 'Get Results', detail: 'Pobiera gotowe wyniki strona po stronie, z opcjonalnym filtrem, na przykład deliverable albo catch_all.' },
    ],
    installTitle: 'Zainstaluj węzeł i sprawdź pierwszy adres',
    installIntro:
      'Potrzebujesz instancji n8n, w chmurze albo na własnym serwerze, i darmowego konta Giggal.ai. Konfiguracja zajmuje około pięciu minut.',
    installSteps: [
      {
        title: 'Otwórz Community nodes w ustawieniach n8n',
        text: 'W n8n kliknij menu konta w lewym dolnym rogu i otwórz Settings. Następnie wybierz Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'Pozycja Community nodes w menu ustawień n8n',
      },
      {
        title: 'Zainstaluj n8n-nodes-giggal',
        text: 'Kliknij Install a community node. Wpisz `n8n-nodes-giggal` w polu npm Package Name, zaznacz pole wyboru i kliknij Install. Węzeł Giggal.ai pojawi się na liście węzłów.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Instalacja pakietu n8n-nodes-giggal w oknie Install community nodes',
      },
      {
        title: 'Dodaj węzeł i utwórz dane uwierzytelniające',
        text: 'Dodaj węzeł Giggal.ai do workflowu. Na liście Credential wybierz Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Tworzenie nowych danych uwierzytelniających Giggal.ai w węźle n8n',
      },
      {
        title: 'Wklej klucz API',
        text: 'W panelu Giggal.ai otwórz zakładkę Developer API i kliknij Create API Key. Wklej klucz w pole API Key i zapisz. Wszystkie węzły Giggal.ai w twojej instancji mogą teraz z niego korzystać. Nowe konta dostają 1000 darmowych kredytów, bez karty płatniczej.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Dodawanie klucza API Giggal.ai do danych uwierzytelniających w n8n',
      },
      {
        title: 'Sprawdź pierwszy adres',
        text: 'Ustaw Resource na Email, a Operation na Verify. Połącz pole Email Address ze swoimi danymi za pomocą wyrażenia, na przykład `{{ $json.email }}`, i kliknij Execute step. Wynik pokazuje status, poziom ryzyka, ocenę dostarczalności i szczegóły catch-all.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Sprawdzanie adresu e-mail w n8n i odczyt wyniku',
      },
    ],
    batchTitle: 'Sprawdź całą listę w n8n',
    batchIntro:
      'Przy więcej niż kilku adresach użyj zasobu Job. Kolejność jest taka: wyślij listę, sprawdzaj status, a potem pobierz wyniki.',
    batchSteps: [
      {
        title: 'Wyślij listę operacją Verify Batch',
        text: 'Ustaw Operation na Verify Batch i w polu Email Field wskaż właściwość, w której są adresy. Możesz nadać zadaniu nazwę, aby łatwo znaleźć je w panelu. Zostaw włączoną opcję Enable Catch-All Rescue, aby adresy catch-all zostały sprawdzone dokładniej. Węzeł od razu zwraca identyfikator zadania, a weryfikacja działa w tle.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Wysyłanie listy adresów e-mail do weryfikacji węzłem Giggal.ai w n8n',
      },
      {
        title: 'Śledź postęp operacją Get Status',
        text: 'Ustaw Resource na Job, a Operation na Get Status, i przekaż identyfikator zadania z poprzedniego kroku. Między kolejnymi sprawdzeniami wstaw węzeł Wait, aby pętla nie odpytywała API zbyt często.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Śledzenie postępu zadania wsadowego operacją Get Status w n8n',
      },
      {
        title: 'Pobierz wyniki operacją Get Results',
        text: 'Gdy status pokazuje completed, uruchom Get Results z tym samym identyfikatorem zadania. Dostajesz jeden element na każdy adres, z jego statusem, poziomem ryzyka i oceną. W polu Status Filter możesz pobrać tylko wiersze deliverable, undeliverable albo catch_all.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Pobieranie wyników zakończonego zadania wsadowego w n8n',
      },
    ],
    calloutTitle: 'Adresy catch-all i adresy za bramką bezpieczeństwa dostają wynik prawidłowy albo nieprawidłowy',
    calloutText:
      'Wiele weryfikatorów zwraca „nieznany” dla adresów za bramką bezpieczeństwa poczty (secure email gateway) i „ryzykowny” dla domen catch-all. Giggal.ai [sprawdza adresy za takimi bramkami](/seg-email-verification) (po angielsku), na przykład Proofpoint i Mimecast. Wykonuje też dodatkowe testy na domenach catch-all. [Zobacz, jak działa weryfikacja catch-all](/pl/weryfikacja-catch-all).',
    faqTitle: 'Weryfikacja adresów e-mail w n8n: najczęstsze pytania',
    faq: [
      {
        q: 'Czy węzeł Giggal.ai działa w n8n Cloud?',
        a: 'Tak. Zainstaluj go w Settings, potem w Community nodes, i dodaj swój klucz API. Działa tak samo w n8n Cloud i na instancjach na własnym serwerze.',
      },
      {
        q: 'Czy instalacja węzła społecznościowego jest bezpieczna?',
        a: 'Zespół Giggal.ai publikuje pakiet pod nazwą n8n-nodes-giggal w npm, a kod źródłowy może przeczytać każdy. Węzeł komunikuje się tylko z API Giggal.ai, z użyciem skonfigurowanych przez ciebie danych uwierzytelniających.',
      },
      {
        q: 'Czy n8n może sprawdzać adresy catch-all?',
        a: 'Tak, z węzłem Giggal.ai. Pojedyncze sprawdzenia obsługują domeny catch-all automatycznie. Zadania wsadowe robią to samo, gdy opcja Enable Catch-All Rescue jest włączona. Dostajesz wynik prawidłowy albo nieprawidłowy z oceną, a nie etykietę „ryzykowny”.',
      },
      {
        q: 'Ile kosztuje weryfikacja w n8n?',
        a: 'Jeden kredyt za adres e-mail, tak jak wszędzie w Giggal.ai. Weryfikacja catch-all kosztuje ten sam kredyt. Nowe konta zaczynają z 1000 darmowych kredytów, bez karty płatniczej.',
      },
      {
        q: 'Co zwraca węzeł?',
        a: 'Dla każdego adresu węzeł zwraca status, poziom ryzyka i ocenę dostarczalności. Zwraca też oznaczenia adresów darmowych, funkcyjnych i jednorazowych, szczegóły serwera pocztowego oraz wynik catch-all. Wynik to standardowy JSON n8n, który możesz filtrować i mapować.',
      },
    ],
    howToName: 'Jak sprawdzić adres e-mail w n8n za pomocą węzła społecznościowego Giggal.ai',
    howToDescription:
      'Zainstaluj n8n-nodes-giggal, dodaj klucz API i sprawdzaj pojedynczy adres albo całą listę w workflowach n8n.',
    cta: {
      title: 'Dodaj weryfikację adresów e-mail do workflowów n8n',
      text: 'Zainstaluj n8n-nodes-giggal, wklej klucz API i przestań przepuszczać martwe adresy przez swoje workflowy. Dostajesz 1000 darmowych kredytów, bez karty płatniczej.',
      primary: 'Zacznij za darmo',
      secondary: 'Zobacz wszystkie integracje',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot: weryfikacja i walidacja adresów e-mail | Giggal.ai',
      description:
        'Sprawdzaj adresy e-mail w HubSpot z Giggal.ai. Weryfikuj kontakty i listy w CRM, dostawaj wynik dla adresów catch-all i filtruj według niego.',
      ogTitle: 'HubSpot: weryfikacja i walidacja adresów e-mail',
      ogDescription:
        'Połącz Giggal.ai z HubSpot, sprawdź kontakty i listy, a potem filtruj według wyniku w swoim CRM.',
    },
    crumb: 'HubSpot',
    h1Lead: 'Weryfikacja adresów e-mail w HubSpot',
    h1Accent: 'i walidacja kontaktów',
    intro:
      'Sprawdzaj kontakty, które już masz w HubSpot CRM. Połącz konto raz, wybierz listę, a każdy kontakt dostanie wynik zapisany w swojej karcie. Adresy catch-all dostają wynik dostarczalny albo niedostarczalny, a nie „ryzykowny”. Niczego nie eksportujesz ani nie importujesz ponownie.',
    openDashboard: 'Otwórz panel',
    capsTitle: 'Co robi integracja z HubSpot',
    capsIntro: 'Cztery kroki, wszystkie w HubSpot i Giggal.ai.',
    caps: [
      {
        name: 'Import kontaktów lub listy',
        detail: 'Wybierz All contacts albo dowolną listę z HubSpot. Najpierw widzisz liczbę adresów e-mail, więc znasz koszt w kredytach przed startem.',
      },
      {
        name: 'Sprawdzenie każdego adresu',
        detail: 'Każda skrzynka jest sprawdzana pod kątem tego, czy istnieje. Domeny catch-all dostają jasny wynik, a nie „ryzykowny”. 1 kredyt za adres.',
      },
      {
        name: 'Zapis wyników w HubSpot',
        detail: 'Pięć właściwości Giggal zostaje wypełnionych w każdym kontakcie. Wynik zostaje w karcie kontaktu.',
      },
      {
        name: 'Filtrowanie i tworzenie list',
        detail: 'Użyj Giggal email status w filtrach i listach aktywnych HubSpot. Usuń złe adresy przed kolejną wysyłką.',
      },
    ],
    stepsTitle: 'Połącz HubSpot i sprawdź pierwszą listę',
    stepsIntro:
      'To cztery kroki i zajmują około dwóch minut. Potrzebujesz konta Giggal.ai i uprawnień w HubSpot do instalowania aplikacji oraz edytowania właściwości kontaktów.',
    steps: [
      {
        title: 'Otwórz zakładkę Integration w Giggal.ai',
        text: 'Zaloguj się do Giggal.ai, przejdź do Email Validation i otwórz zakładkę Integration. Znajdź kartę HubSpot i kliknij Connect. Jeśli nie masz jeszcze konta, rejestracja zajmuje minutę i obejmuje 1000 darmowych kredytów.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'Karta HubSpot i przycisk Connect w zakładce Integration w Giggal.ai',
      },
      {
        title: 'Zatwierdź uprawnienia w HubSpot',
        text: 'HubSpot pokazuje własny ekran zatwierdzenia z listą wszystkiego, do czego Giggal.ai ma dostęp: podgląd właściwości kontaktów, edycja kontaktów, edycja ustawień właściwości kontaktów, podgląd list kontaktów i odczyt konta, które instaluje aplikację. Przejrzyj listę i kliknij Connect app. Wracasz do Giggal.ai, a karta HubSpot pokazuje teraz Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Ekran HubSpot do zatwierdzenia uprawnień aplikacji Giggal Email Verifier',
      },
      {
        title: 'Zaimportuj listę kontaktów',
        text: 'Kliknij Verify na karcie HubSpot, aby otworzyć okno Import from HubSpot. Wybierz All contacts albo dowolną listę ze swojego portalu. Każdy wiersz pokazuje, ile zawiera adresów e-mail, więc znasz koszt przed startem. Kliknij Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Okno Import from HubSpot z listami kontaktów i liczbą adresów e-mail',
      },
      {
        title: 'Sprawdź listę i zsynchronizuj wyniki',
        text: 'Giggal.ai sprawdza każdy adres i zapisuje wynik w każdym kontakcie HubSpot, gdy tylko jest gotowy. Karta zadania pokazuje podział wyników i licznik Synced to HubSpot. Kliknij Sync to HubSpot, aby w dowolnej chwili ponownie zapisać wyniki.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Zakończone zadanie weryfikacji HubSpot w Giggal.ai z wynikami zsynchronizowanymi z HubSpot',
      },
    ],
    calloutTitle: 'Dlaczego warto używać weryfikatora catch-all z HubSpot',
    calloutText:
      'Około 30% listy B2B znajduje się na domenach catch-all. Wiele weryfikatorów zwraca te kontakty jako „ryzykowne”, a z takim wynikiem nic nie zrobisz. Z Giggal.ai możesz [sprawdzić adres e-mail](/pl/weryfikator-email) także na domenie catch-all, dzięki dodatkowym testom. Giggal.ai [sprawdza też adresy za bramką bezpieczeństwa poczty](/seg-email-verification) (po angielsku), na przykład Proofpoint i Mimecast. Większość takich kontaktów wraca jako dostarczalne albo niedostarczalne. [Zobacz, jak działa weryfikacja catch-all](/pl/weryfikacja-catch-all).',
    propsTitle: 'Właściwości HubSpot, które Giggal.ai zapisuje w każdym kontakcie',
    propsIntro:
      'Pięć właściwości powstaje przy pierwszej weryfikacji. Znajdują się w grupie właściwości o nazwie Giggal Email Verifier. Twoje dotychczasowe właściwości HubSpot pozostają bez zmian.',
    propsHead: ['Właściwość', 'Typ', 'Co pokazuje'],
    props: [
      ['Giggal email is valid', 'Pole wyboru', 'Tak, gdy potwierdzono, że skrzynka istnieje.'],
      ['Giggal email status', 'Lista rozwijana', 'Deliverable, Undeliverable, Risky albo Unknown.'],
      ['Giggal deliverability score', 'Liczba', 'Poziom pewności od 0 do 100.'],
      ['Giggal email detail', 'Tekst', 'Krótki powód wyniku.'],
      ['Giggal verified at', 'Data', 'Data ostatniego sprawdzenia adresu.'],
    ],
    scopesTitle: 'Uprawnienia HubSpot i dane',
    scopesIntro: 'Giggal.ai prosi o cztery uprawnienia (scopes) HubSpot. Każde ma jedno zastosowanie.',
    scopes: [
      ['crm.objects.contacts.read', 'Odczyt adresu e-mail kontaktów, które wybierzesz do sprawdzenia.'],
      ['crm.objects.contacts.write', 'Zapis wyniku weryfikacji w tych kontaktach.'],
      ['crm.schemas.contacts.write', 'Utworzenie pięciu właściwości Giggal przy pierwszym użyciu.'],
      ['crm.lists.read', 'Wyświetlenie twoich list kontaktów, aby można było wybrać jedną z nich do sprawdzenia.'],
    ],
    scopesNote:
      'Giggal.ai odczytuje tylko adres e-mail kontaktów, które wybierzesz. Nie tworzy ani nie usuwa żadnych kontaktów. Nie zmienia żadnych właściwości poza pięcioma wymienionymi powyżej. Nigdy nie wysyła e-maili na adresy, które sprawdza.',
    faqTitle: 'Weryfikacja adresów e-mail w HubSpot: najczęstsze pytania',
    faq: [
      {
        q: 'Czy Giggal.ai wysyła e-maile do moich kontaktów?',
        a: 'Nie. Weryfikacja komunikuje się z docelowym serwerem pocztowym i kończy przed wysłaniem jakiejkolwiek wiadomości. Twoje kontakty niczego nie dostają, ani do skrzynki odbiorczej, ani do spamu.',
      },
      {
        q: 'Co integracja zmienia na moim koncie HubSpot?',
        a: 'Przy pierwszym użyciu tworzy grupę właściwości o nazwie Giggal Email Verifier z pięcioma niestandardowymi właściwościami kontaktu. Potem zapisuje wyniki tylko w tych właściwościach. Dotychczasowe właściwości HubSpot pozostają bez zmian, a żaden kontakt nie jest tworzony ani usuwany.',
      },
      {
        q: 'Czy integracja sprawdza domeny catch-all?',
        a: 'Tak. To główny powód, aby używać Giggal.ai z HubSpot. Wiele weryfikatorów zwraca dla domen catch-all wynik „ryzykowny” albo „nieznany”. Giggal.ai wykonuje dodatkowe testy i dla większości z nich zwraca wynik dostarczalny albo niedostarczalny.',
      },
      {
        q: 'Czy walidacja e-mail to to samo co weryfikacja e-mail?',
        a: 'W praktyce tak. Oba terminy oznaczają test, który mówi, czy adres może odbierać e-maile. Giggal.ai sprawdza format, serwery pocztowe domeny i skrzynkę, a potem zapisuje jeden wynik w kontakcie HubSpot.',
      },
      {
        q: 'Ile to kosztuje?',
        a: 'Jeden kredyt za adres, a weryfikacja catch-all jest w cenie. Nowe konta zaczynają z 1000 darmowych kredytów, a cena za adres spada wraz ze wzrostem wolumenu.',
      },
      {
        q: 'Jak korzystać z wyników w HubSpot?',
        a: 'Filtruj kontakty albo utwórz listę aktywną według Giggal email status. Częsta konfiguracja to lista aktywna kontaktów Deliverable jako grupa odbiorców wysyłki i lista wykluczeń z kontaktami Undeliverable.',
      },
      {
        q: 'Jak odłączyć integrację?',
        a: 'Otwórz zakładkę Integration w Giggal.ai, kliknij ikonę ustawień na karcie HubSpot i wybierz Disconnect. Możesz też usunąć aplikację w HubSpot, w Settings, Integrations, Connected Apps. Wyniki już zapisane zostają w twoich kontaktach.',
      },
    ],
    howToName: 'Jak sprawdzić kontakty HubSpot za pomocą Giggal.ai',
    howToDescription:
      'Połącz Giggal.ai z HubSpot, sprawdź listę kontaktów i odczytaj wynik w pięciu właściwościach każdego kontaktu.',
    cta: {
      title: 'Wyczyść kontakty w HubSpot',
      text: 'Połącz konto raz, a każdy kontakt w twoim CRM dostanie wynik weryfikacji, według którego możesz filtrować. Zaczynasz z 1000 darmowych kredytów, bez karty płatniczej.',
      primary: 'Zacznij za darmo',
      secondary: 'Zobacz wszystkie integracje',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Serwer MCP do weryfikacji e-mail: Claude, ChatGPT | Giggal.ai',
      description:
        'Połącz Giggal.ai z Claude, ChatGPT, Cursor i VS Code przez MCP i sprawdzaj adresy e-mail na czacie. Adresy catch-all dostają wynik prawidłowy lub nieprawidłowy.',
      ogTitle: 'Serwer MCP do weryfikacji e-mail dla Claude i ChatGPT',
      ogDescription:
        'Giggal.ai udostępnia zdalny serwer MCP. Dzięki niemu Claude, ChatGPT, Cursor i VS Code mogą sprawdzać adresy e-mail. Weryfikacja catch-all w cenie.',
    },
    crumb: 'MCP',
    h1Lead: 'Serwer MCP do weryfikacji e-mail dla',
    h1Accent: 'Claude i ChatGPT',
    intro:
      'Giggal.ai udostępnia zdalny serwer MCP. Połącz go z Claude, ChatGPT, Cursor lub VS Code, a twój asystent AI będzie mógł [sprawdzić adres e-mail](/pl/weryfikator-email) za ciebie. Poproś go o sprawdzenie adresu lub listy, a odpowie na czacie.',
    urlLabel: 'URL MCP',
    directoryLabel: 'Dodaj Giggal.ai do Claude',
    points: [
      'Claude i ChatGPT łączą się przez OAuth',
      'Edytory kodu używają twojego klucza API',
      'Weryfikacja catch-all w cenie',
    ],
    setupTitle: 'Skonfiguruj serwer MCP w swoim narzędziu AI',
    setupSubtitle:
      'Wybierz narzędzie, aby zobaczyć kroki. Claude i ChatGPT łączą się przez logowanie. Edytory kodu czytają plik konfiguracyjny.',
    toolsTitle: 'Co może zrobić asystent AI',
    toolsIntro:
      'Serwer daje twojemu asystentowi trzy narzędzia. Zadajesz pytanie zwykłym językiem, a asystent wybiera właściwe narzędzie.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Sprawdzanie adresów',
        body: 'Sprawdź jeden adres e-mail albo listę. Każdy adres dostaje wynik prawidłowy albo nieprawidłowy, także na domenach catch-all.',
      },
      {
        tool: 'get_verification_details',
        title: 'Pełne wyniki',
        body: 'Pobierz szczegóły wcześniejszego sprawdzenia: status, kody powodów i ocenę dostarczalności dla każdego adresu.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Stan kredytów',
        body: 'Zapytaj, ile kredytów ci zostało, zanim uruchomisz duże sprawdzenie.',
      },
    ],
    whyTitle: 'Dlaczego wynik dla adresów catch-all ma znaczenie na czacie',
    why: [
      'Około 30% listy B2B znajduje się na domenach catch-all. Takie domeny przyjmują e-maile na każdy adres, bez względu na to, czy skrzynka istnieje. Wiele weryfikatorów oznacza te adresy jako „ryzykowne”, co znaczy, że nie udało się ustalić wyniku.',
      'Na czacie taka etykieta nie pomaga. Asystent powtarza to, co dostanie, więc jedna trzecia twojej listy wraca z niepewnym wynikiem. Giggal.ai sprawdza te adresy dokładniej i zwraca wynik prawidłowy albo nieprawidłowy. Tak samo działa dla skrzynek za jedną z 15 bramek bezpieczeństwa poczty (secure email gateway), w tym Proofpoint, Mimecast i Barracuda.',
      'Przykłady zapytań znajdziesz w artykule [weryfikacja e-mail w Claude i ChatGPT](/pl/blog/weryfikacja-email-w-claude-i-chatgpt). Serwer MCP korzysta z tego samego silnika co [API do weryfikacji e-mail](/email-verification-api) (po angielsku).',
    ],
    faqTitle: 'Serwer MCP do weryfikacji e-mail: najczęstsze pytania',
    faq: [
      {
        q: 'Czy Claude potrafi sprawdzać adresy e-mail?',
        a: `Tak, gdy połączysz z nim narzędzie do weryfikacji e-mail przez MCP. Dodaj serwer Giggal.ai pod adresem ${MCP_URL} jako niestandardowy konektor w Claude albo poleceniem claude mcp add w Claude Code. Potem poproś na przykład: „sprawdź tych jedenaście adresów i powiedz, które dadzą odbicie”. Claude wywoła narzędzie verify_emails i pokaże wynik na czacie.`,
      },
      {
        q: 'Czy ChatGPT potrafi sprawdzać adresy e-mail?',
        a: 'Tak, w planach ChatGPT, które pozwalają na niestandardowe konektory. Dodaj Giggal.ai jako niestandardową wtyczkę z adresem URL serwera MCP i zaloguj się przez OAuth. Z tego samego serwera może korzystać każdy klient obsługujący zdalne MCP, w tym Cursor, VS Code, Windsurf, Cline i Zed.',
      },
      {
        q: 'Co może zrobić asystent AI?',
        a: 'Trzy rzeczy. verify_emails sprawdza adres lub listę. get_verification_details zwraca pełny wynik każdego adresu, ze statusem i kodami powodów. get_credit_balance pokazuje, ile kredytów ci zostało.',
      },
      {
        q: 'Jak są obsługiwane adresy catch-all?',
        a: 'Tak samo jak w całym Giggal.ai. Wiele weryfikatorów oznacza adresy catch-all jako „ryzykowne”. Giggal.ai zwraca dla nich wynik prawidłowy albo nieprawidłowy. Tak samo działa dla skrzynek za jedną z 15 bramek bezpieczeństwa poczty (secure email gateway), na przykład Proofpoint, Mimecast i Barracuda.',
      },
      {
        q: 'Czy potrzebuję klucza API?',
        a: 'Nie w przypadku Claude i ChatGPT. Oba łączą się przez OAuth, więc logujesz się swoim kontem Giggal.ai. Edytory kodu, takie jak Claude Code, Cursor i VS Code, używają klucza API. Znajdziesz go w zakładce Developer API w aplikacji Giggal.ai.',
      },
      {
        q: 'Czy weryfikacja przez MCP kosztuje więcej?',
        a: 'Nie. Zużywa te same kredyty co panel i API REST: 1 kredyt za adres, także catch-all. Nowe konta dostają 1000 darmowych kredytów, bez karty płatniczej, a kredyty nigdy nie wygasają.',
      },
      {
        q: 'Czy w ten sposób czyścić dużą listę?',
        a: 'Nie. MCP jest najbardziej przydatne, gdy weryfikacja to jeden krok większego zadania. Na przykład gdy sprawdzasz kilkanaście kontaktów przed napisaniem wiadomości sprzedażowej. Przy dziesiątkach tysięcy adresów użyj masowego importu w aplikacji albo API REST.',
      },
    ],
    howToName: 'Jak połączyć weryfikację e-mail Giggal.ai z Claude lub ChatGPT przez MCP',
    howToDescription:
      'Cztery kroki, aby sprawdzać adresy e-mail, także catch-all, w Claude, ChatGPT, Cursor lub VS Code za pomocą serwera MCP Giggal.ai.',
    setupSteps: [
      {
        name: 'Załóż konto Giggal.ai',
        text: 'Zarejestruj się w Giggal.ai. Nowe konta dostają 1000 darmowych kredytów na weryfikację, bez karty płatniczej.',
      },
      {
        name: 'Dodaj serwer MCP do swojego klienta',
        text: `Użyj adresu URL serwera ${MCP_URL}. W Claude dodaj go w Settings, potem Connectors. W ChatGPT dodaj go jako niestandardową wtyczkę. Edytory kodu czytają plik konfiguracyjny JSON, pokazany na tej stronie dla każdego edytora.`,
      },
      {
        name: 'Zaloguj się albo dodaj klucz API',
        text: 'Claude i ChatGPT poproszą cię o zalogowanie się do Giggal.ai i kliknięcie Allow. Edytory kodu potrzebują klucza API z zakładki Developer API w aplikacji.',
      },
      {
        name: 'Poproś asystenta o sprawdzenie adresu',
        text: 'Zadaj pytanie zwykłym językiem, na przykład: „sprawdź hello@example.com i powiedz, czy to prawdziwa skrzynka”. Asystent wywoła verify_emails i pokaże wynik.',
      },
    ],
    ctaTitle: 'Połącz Giggal.ai ze swoim asystentem AI',
    ctaText:
      'Zacznij z 1000 darmowych kredytów na weryfikację, bez karty płatniczej. Dodaj URL MCP do Claude, ChatGPT albo swojego edytora kodu.',
    ctaButton: 'Zacznij za darmo',
  },
}
