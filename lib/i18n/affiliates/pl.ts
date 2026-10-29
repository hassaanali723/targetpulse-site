import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Polish copy for /pl/program-partnerski. Source: app/(en)/affiliates/page.tsx.
// Second person singular, "e-mail" in running text, money as "50 USD",
// numbers 1000 and 10 000 (no-break space from five digits up).

export const AFFILIATES_PL: AffiliatesContent = {
  meta: {
    title: 'Program partnerski: 20% prowizji cyklicznej | Giggal.ai',
    description:
      'Program partnerski Giggal.ai: 20% prowizji od każdej płatności poleconych klientów, 3 miesiące atrybucji, wypłaty co miesiąc i brak limitu zarobków.',
    ogTitle: 'Program partnerski: 20% prowizji cyklicznej za weryfikację e-mail',
    ogDescription:
      'Zarabiaj 20% prowizji cyklicznej od każdego klienta, którego polecisz do Giggal.ai. Bez limitu czasu i bez limitu zarobków.',
  },
  crumb: 'Program partnerski',
  h1Lead: 'Zarabiaj 20% prowizji',
  h1Accent: 'co miesiąc, bez limitu czasu',
  intro: {
    before: 'Polecaj',
    after:
      'swoim odbiorcom i zarabiaj 20% prowizji od każdej płatności poleconych klientów, dopóki pozostają naszymi klientami. Bez limitów i bez daty wygaśnięcia.',
  },
  joinCta: 'Dołącz do programu partnerskiego',
  howCta: 'Zobacz, jak to działa',
  stats: [
    { value: '20%', label: 'Prowizja cykliczna' },
    { value: '3 miesiące', label: 'Okres atrybucji' },
    { value: 'Co miesiąc', label: 'Wypłaty' },
    { value: '50 USD', label: 'Minimalna wypłata' },
  ],
  why: {
    eyebrow: 'Dlaczego warto',
    h2: 'Jeden z najkorzystniejszych programów partnerskich wśród narzędzi e-mail',
    sub: 'Stały, powtarzalny przychód, a nie jednorazowa premia.',
    cards: [
      {
        title: '20% prowizji cyklicznej',
        body: 'Zarabiasz na każdej płatności poleconych klientów, miesiąc po miesiącu, rok po roku.',
      },
      {
        title: 'Bez limitu zarobków',
        body: 'Poleć 10 klientów albo 10 000. Twoje zarobki nie mają górnej granicy.',
      },
      {
        title: '3-miesięczny okres atrybucji',
        body: 'Polecenie zostaje przypisane tobie, jeśli dana osoba zarejestruje się w ciągu 3 miesięcy od kliknięcia twojego linku.',
      },
      {
        title: 'Wypłaty co miesiąc',
        body: 'Otrzymujesz wypłatę co miesiąc przez PayPal lub Wise, gdy osiągniesz minimum 50 USD.',
      },
    ],
  },
  how: {
    eyebrow: 'Jak to działa',
    h2: 'Od rejestracji do pierwszej wypłaty w kilka dni, a nie miesięcy',
    steps: [
      {
        title: 'Dołącz w 30 sekund',
        body: 'Zarejestruj się w programie i od razu otrzymaj swój unikalny link polecający. Bez rozmowy kwalifikacyjnej i bez okresu oczekiwania.',
      },
      {
        title: 'Udostępnij swój link',
        body: 'Promuj Giggal.ai na blogu, w newsletterze, w mediach społecznościowych, na YouTube albo bezpośrednio wśród klientów, którzy potrzebują czystszych list mailingowych.',
      },
      {
        title: 'Otrzymuj wypłaty co miesiąc',
        body: 'Zarabiasz 20% od każdej płatności poleconych klientów. Płatności śledzimy automatycznie, a prowizję wypłacamy co miesiąc.',
      },
    ],
  },
  earn: {
    eyebrow: 'Twoje zarobki',
    h2: 'Tyle możesz zarobić',
    sub: 'Przykład dla klientów w najczęściej wybieranym planie 100K (76 USD/mies.). Inne plany też dają 20% prowizji.',
    colCustomers: 'Poleceni klienci',
    colPlan: 'Plan',
    colEarnings: 'Twoje miesięczne zarobki',
    perMonth: '/mies.',
    note: 'To przykładowe liczby. Rzeczywiste zarobki zależą od planów, które wybiorą poleceni klienci.',
  },
  who: {
    eyebrow: 'Dla kogo',
    h2: 'Dla osób, którym zależy na dostarczalności e-maili',
    sub: 'Jeśli twoi odbiorcy wysyłają e-maile, Giggal.ai jest dla nich.',
    cards: [
      {
        title: 'Specjaliści od e-mail marketingu',
        body: 'Polecaj narzędzie, któremu już ufasz i którym czyścisz listy przed kampaniami.',
      },
      {
        title: 'Agencje',
        body: 'Uzyskuj cykliczny przychód z każdego klienta, którego przyprowadzisz.',
      },
      {
        title: 'Twórcy kursów',
        body: 'Dodaj Giggal.ai do programu swojego kursu o cold mailingu lub pozyskiwaniu leadów.',
      },
      {
        title: 'Społeczności SaaS',
        body: 'Poleć narzędzie marketerom, założycielom firm i specjalistom od growth marketingu w swojej społeczności.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Najczęstsze pytania',
    items: [
      {
        q: 'Kiedy i jak otrzymam wypłatę?',
        a: 'Wypłacamy prowizję co miesiąc przez PayPal lub Wise (do wyboru), gdy niewypłacone saldo osiągnie 50 USD. Nie stosujemy okresu wstrzymania prowizji. Gdy polecony klient zapłaci, prowizja należy do ciebie.',
      },
      {
        q: 'Jak długo naliczana jest prowizja?',
        a: 'Tak długo, jak polecony klient płaci. Jeśli pozostanie klientem przez 3 lata, przez 3 lata otrzymujesz 20% od każdej jego płatności. To stały, powtarzalny przychód.',
      },
      {
        q: 'Co się stanie, jeśli polecony klient zrezygnuje?',
        a: 'Prowizja od tego klienta przestaje być naliczana w chwili rezygnacji. Jeśli później wznowi abonament na tym samym koncie, prowizja znów jest naliczana.',
      },
      {
        q: 'Jak długi jest okres atrybucji?',
        a: 'Śledzenie trwa 3 miesiące od chwili, gdy ktoś kliknie twój link. Jeśli w tym czasie się zarejestruje, polecenie zostaje przypisane tobie.',
      },
      {
        q: 'Czy mogę promować program na YouTube, na blogach i w płatnych reklamach?',
        a: 'Tak, możesz promować na YouTube, blogach, w newsletterach, w mediach społecznościowych i na Reddicie. Płatne reklamy na słowa kluczowe z nazwą naszej marki (np. „Giggal.ai”) są zabronione. Wszystkie inne kanały są dozwolone.',
      },
      {
        q: 'Czy muszę być klientem, żeby dołączyć?',
        a: 'Nie, ale zdecydowanie zalecamy najpierw wypróbować produkt (dostajesz 1000 darmowych kredytów). Dzięki temu polecisz go na podstawie własnego doświadczenia.',
      },
      {
        q: 'Czy jest minimalny próg wypłaty?',
        a: 'Tak, 50 USD. Niewypłacona prowizja przechodzi na kolejne miesiące, aż osiągniesz próg. Wtedy wypłacamy ją automatycznie.',
      },
    ],
    more: 'Masz jeszcze pytania?',
    talk: 'Skontaktuj się z nami',
  },
  final: {
    h2: 'Chcesz, żeby polecenia dawały ci stały dochód?',
    text: 'Zarejestruj się w 30 sekund i zacznij zarabiać 20% prowizji od każdej płatności poleconych klientów.',
    checks: ['Dołączenie bez opłat', 'Bez zatwierdzania zgłoszenia', 'Prowizje bez limitu czasu'],
  },
}
