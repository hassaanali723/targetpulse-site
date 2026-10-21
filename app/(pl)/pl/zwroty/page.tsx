import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Polish translation of the English /refund-policy, clause by clause
// (English "Last Updated: October 22, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so. Numbers as in English, Polish
// format (10 000 with a no-break space).

const K = ' '

export const metadata: Metadata = {
  title: 'Polityka zwrotów: kiedy zwracamy kredyty',
  description: 'Kiedy Giggal.ai zwraca kredyty: kredyty próbne, jednorazowe zakupy, abonamenty, wyjątkowe sytuacje i terminy. Tłumaczenie, wiążąca jest wersja angielska.',
  alternates: { canonical: '/pl/zwroty', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pl_PL', title: 'Polityka zwrotów', url: 'https://giggal.ai/pl/zwroty', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Podsumowanie', paragraphs: [
    'W Giggal.ai dbamy o wysoką jakość usług weryfikacji e-mail. Niniejsza Polityka zwrotów opisuje, w jakich sytuacjach możemy przyznać zwrot w naszej usłudze opartej na kredytach.',
    'Świadczymy wyłącznie cyfrowe usługi weryfikacji e-mail. Nie sprzedajemy ani nie wysyłamy towarów fizycznych.',
  ]},
  { heading: '2. Jak działa nasz system kredytów', paragraphs: ['Giggal.ai działa w oparciu o system kredytów na weryfikację e-mail:'], list: [
    '1 kredyt = 1 walidacja adresu e-mail: każda weryfikacja adresu zużywa 1 kredyt z twojego konta',
    `Płatność za użycie: kredyty kupujesz hurtowo w dowolnej chwili (pakiety od 3000 do 1${K}000${K}000 kredytów)`,
    'Kredyty cykliczne: miesięczne pakiety kredytów w abonamencie, z rabatem 10%',
    'Bez terminu ważności: kredyty nigdy nie wygasają i zostają na koncie do czasu ich wykorzystania',
  ]},
  { heading: '3. Darmowe kredyty próbne', paragraphs: ['Nowi użytkownicy otrzymują 1000 darmowych kredytów próbnych do przetestowania naszej usługi weryfikacji e-mail. Pamiętaj, że:'], list: [
    'Kredyty próbne są bezpłatne i nie wymagają płatności',
    'Kredyty próbne nie podlegają zwrotowi, ponieważ są prezentem',
    'Kredyty próbne podlegają tym samym zasadom walidacji co kredyty płatne',
    'Kredyty próbne pozwalają zweryfikować 1000 adresów e-mail',
  ]},
  { heading: '4. Zasady zwrotu za zakup kredytów' },
  { heading: '4.1 Kredyty w modelu płatności za użycie (zakup jednorazowy)', level: 3, paragraphs: ['Kredyty kupione w pakietach płatnych za użycie co do zasady nie podlegają zwrotowi po zakończeniu zakupu, ponieważ:'], list: [
    'Są od razu dodawane do konta i dostępne do natychmiastowego użycia',
    'Nie wygasają i bezterminowo zachowują swoją wartość',
    'Możesz z nich skorzystać w dowolnej chwili',
  ]},
  { heading: '4.2 Abonamenty z kredytami cyklicznymi', level: 3, paragraphs: ['W przypadku miesięcznych abonamentów kredytowych:'], list: [
    'Kredyty są rozliczane i dodawane do konta co miesiąc',
    'Możesz zrezygnować z abonamentu w dowolnej chwili przed kolejnym okresem rozliczeniowym',
    'Kredyty już dodane do konta nie podlegają zwrotowi',
    'Rezygnacja zaczyna obowiązywać na koniec bieżącego okresu rozliczeniowego',
    'Niewykorzystane kredyty z poprzednich miesięcy zostają na koncie po rezygnacji',
  ]},
  { heading: '5. Wyjątkowe okoliczności i wsparcie', paragraphs: ['Zgodnie z naszymi standardowymi zasadami kredyty nie podlegają zwrotowi. Wiemy jednak, że mogą zdarzyć się nietypowe sytuacje. W przypadku:'], list: [
    'Błędów technicznych, które powodują nieprawidłowe pobranie kredytów',
    'Awarii usługi, które uniemożliwiają walidację adresów e-mail',
    'Podwójnych obciążeń lub błędów rozliczeniowych',
    'Nietypowej aktywności na koncie lub podejrzenia oszustwa',
    'Innych wyjątkowych okoliczności',
  ], after: ['Niezwłocznie skontaktuj się z naszym zespołem wsparcia pod adresem info@giggal.ai. Dokładnie rozpatrzymy twoją sprawę i możemy przyznać zwrot lub korektę kredytów, indywidualnie i według własnego uznania.']},
  { heading: '6. Problemy z jakością usługi', paragraphs: ['Jeśli problemy techniczne lub zakłócenia działania usługi uniemożliwiają weryfikację e-mail:'], list: [
    'Kredyty nie są pobierane za walidacje nieudane z powodu błędów naszego systemu',
    'Każdy problem z walidacją niezwłocznie zgłaszaj naszemu zespołowi wsparcia',
    'Za zakłócenia działania usługi możemy dodać do konta kredyty rekompensujące',
    'Dłuższe awarie mogą uprawniać do częściowego zwrotu, według naszego uznania',
  ]},
  { heading: '7. Zamknięcie konta i naruszenia', paragraphs: ['Jeśli konto zostanie zamknięte z powodu naruszenia Regulaminu lub zasad dopuszczalnego użycia:'], list: [
    'Za niewykorzystane kredyty nie przysługuje zwrot',
    'Dostęp do konta i pozostałych kredytów zostaje trwale cofnięty',
    'Abonamenty cykliczne zostają natychmiast anulowane',
  ]},
  { heading: '8. Jak poprosić o zwrot lub zgłosić problem', paragraphs: [
    'Aby poprosić o zwrot lub zgłosić nietypową aktywność, skontaktuj się z naszym zespołem wsparcia: e-mail info@giggal.ai, temat „Refund Request / Issue Report”.',
    'W prośbie podaj następujące informacje:',
  ], list: [
    'Adres e-mail swojego konta',
    'Identyfikator transakcji lub numer zamówienia',
    'Szczegółowy opis problemu lub nietypowej aktywności',
    'Datę i godzinę zdarzenia (jeśli dotyczy)',
    'Zrzuty ekranu lub inne dowody na poparcie zgłoszenia (jeśli dotyczy)',
    'Liczbę kredytów, których dotyczy sprawa',
  ]},
  { heading: '9. Terminy obsługi zwrotu', paragraphs: ['Jeśli prośba o zwrot zostanie zaakceptowana:'], list: [
    'Rozpatrzymy sprawę w ciągu 2 do 3 dni roboczych',
    'Decyzję otrzymasz e-mailem',
    'Zaakceptowane zwroty zrealizujemy w ciągu 5 do 10 dni roboczych',
    'Zwrot trafi na pierwotną metodę płatności za pośrednictwem naszego operatora płatności',
    'Zależnie od dostawcy płatności może minąć kolejne 5 do 7 dni roboczych, zanim zwrot pojawi się na twoim koncie',
  ]},
  { heading: '10. Spory dotyczące płatności (chargeback)', paragraphs: ['Jeśli złożysz w banku lub u dostawcy płatności reklamację obciążenia (chargeback) albo inny spór dotyczący płatności, nie kontaktując się wcześniej z nami w celu rozwiązania problemu:'], list: [
    'Zastrzegamy sobie prawo do trwałego zamknięcia twojego konta',
    'Otrzymasz zakaz dalszego korzystania z naszych usług',
    'Wszystkie pozostałe kredyty przepadają',
    'Przekażemy operatorowi płatności dowody na poparcie obciążenia',
  ], after: ['Gorąco zachęcamy, aby najpierw skontaktować się z naszym zespołem wsparcia. Zależy nam na uczciwym i szybkim rozwiązywaniu problemów.']},
  { heading: '11. Przenoszenie kredytów i współdzielenie kont', paragraphs: ['Kredytów nie można przenosić między kontami. Zwrot nie przysługuje w przypadku:'], list: [
    'Kredytów kupionych na niewłaściwe konto',
    'Próśb o przeniesienie kredytów na inne konto',
    'Naruszeń związanych ze współdzieleniem konta',
  ]},
  { heading: '12. Zmiany niniejszej polityki', paragraphs: ['Zastrzegamy sobie prawo do zmiany niniejszej Polityki zwrotów w dowolnym momencie. Zmiany obowiązują od chwili ich opublikowania na naszej stronie. Dalsze korzystanie z naszych usług po wprowadzeniu zmian oznacza akceptację nowej polityki.']},
  { heading: '13. Dane kontaktowe', paragraphs: ['Jeśli masz pytania dotyczące niniejszej Polityki zwrotów lub potrzebujesz pomocy, skontaktuj się z nami:'], list: [
    'E-mail: info@giggal.ai', 'Strona: https://giggal.ai',
  ], after: [
    'Nasz zespół wsparcia rozpatruje każde zgłoszenie i szuka uczciwych rozwiązań. Zwykle odpowiadamy na wszystkie zapytania w ciągu 24 do 48 godzin.',
    'Niniejsza Polityka zwrotów jest częścią naszego Regulaminu. Korzystając z usług Giggal.ai, potwierdzasz, że znasz i rozumiesz treść tej polityki.',
  ]},
]

export default function ZwrotyPage() {
  return (
    <LegalPageL10n
      locale="pl"
      path="/pl/zwroty"
      title="Polityka"
      accent="zwrotów"
      updated="22 października 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
