import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Polish translation of the English /terms-of-service, clause by clause
// (English "Last Updated: October 22, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so. Numbers as in English, Polish
// format (10 000 with a no-break space).

const K = ' '

export const metadata: Metadata = {
  title: 'Regulamin usługi weryfikacji adresów email',
  description: 'Regulamin korzystania z usługi weryfikacji e-mail Giggal.ai. To tłumaczenie informacyjne. W razie rozbieżności wiążąca jest wersja angielska regulaminu.',
  alternates: { canonical: '/pl/regulamin', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pl_PL', title: 'Regulamin', url: 'https://giggal.ai/pl/regulamin', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Akceptacja warunków', paragraphs: [
    'Usługę prowadzi TargetPulse Ltd („my”), spółka zarejestrowana w Anglii i Walii pod numerem 17079825, z siedzibą pod adresem Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd jest administratorem danych osobowych przetwarzanych w ramach Giggal.ai. Kontakt: info@giggal.ai. Zgłoszenia nadużyć: abuse@giggal.ai.',
    'Uzyskując dostęp do usług Giggal.ai i korzystając z nich, akceptujesz warunki i postanowienia niniejszej umowy oraz zgadzasz się, że są one dla ciebie wiążące. Jeśli nie zgadzasz się ich przestrzegać, nie korzystaj z tej usługi.',
    'Niniejszy Regulamin określa zasady korzystania z usługi Giggal.ai Email Verifier, którą prowadzi TargetPulse Ltd pod nazwą handlową Giggal.ai.',
  ]},
  { heading: '2. Opis usługi', paragraphs: [
    'Giggal.ai Email Verifier to narzędzie w chmurze, które pomaga zespołom czyścić i walidować listy adresów e-mail. Użytkownicy przesyłają pliki CSV lub pojedyncze adresy, a my sprawdzamy dostarczalność, rekordy domeny oraz to, czy każda skrzynka istnieje, aby ograniczyć liczbę nieprawidłowych adresów i poprawić jakość listy. Produkt jest sprzedawany jako system kredytów płatnych za użycie, więc klienci płacą tylko za adresy, które faktycznie zweryfikują.',
    'Usługa jest świadczona na warunkach niniejszego Regulaminu oraz wszelkich dodatkowych warunków, które mogą mieć zastosowanie.',
  ]},
  { heading: '2.1 Usługa weryfikacji e-mail', level: 3, paragraphs: ['Naszą główną usługą jest weryfikacja i walidacja adresów e-mail, która obejmuje:'], list: [
    'Wykrywanie bramek: rozpoznawanie bramek bezpieczeństwa poczty (Secure Email Gateway) i ochronnych filtrów na brzegu sieci',
    'Walidację domeny: sprawdzenie, czy domena adresu istnieje i ma prawidłowe rekordy MX',
    'Weryfikację skrzynki: sprawdzenie, czy konkretny adres e-mail istnieje i może odbierać wiadomości',
    'Wykrywanie adresów jednorazowych: rozpoznawanie tymczasowych lub jednorazowych adresów e-mail',
    'Wykrywanie adresów funkcyjnych: rozpoznawanie ogólnych adresów e-mail (np. info@, support@)',
    'Wykrywanie catch-all: rozpoznawanie domen, które przyjmują pocztę na każdy adres',
    'Weryfikację w czasie rzeczywistym: sprawdzenie, czy skrzynka odbiorcy istnieje',
    'Masową weryfikację: przetwarzanie tysięcy adresów e-mail jednocześnie',
  ]},
  { heading: '2.2 System kredytów', level: 3, paragraphs: ['Usługa działa w modelu opartym na kredytach, w którym:'], list: [
    '1 kredyt = 1 weryfikacja adresu e-mail: każda weryfikacja adresu zużywa dokładnie 1 kredyt z salda konta',
    `Płatność za użycie: pakiety od 3000 do 1${K}000${K}000 kredytów można kupić w dowolnej chwili`,
    'Abonamenty cykliczne: miesięczne pakiety kredytów z rabatem 10% od ceny standardowej',
    'Bez terminu ważności: kredyty nigdy nie wygasają i pozostają na koncie do czasu ich wykorzystania',
    'Okres próbny: nowe konta otrzymują 1000 darmowych kredytów do przetestowania usługi',
  ]},
  { heading: '2.3 Funkcje usługi', level: 3, paragraphs: ['Nasza usługa weryfikacji e-mail obejmuje:'], list: [
    'Dostęp do API w czasie rzeczywistym do natychmiastowej weryfikacji',
    'Masowy import i przetwarzanie',
    'Szczegółowe raporty i analizy weryfikacji',
    'Eksport wyników do CSV, Excel i JSON',
    'Wykrywanie i usuwanie zduplikowanych adresów',
    'Narzędzia do czyszczenia i segmentacji list',
    'Obsługę integracji przez API i zgodne systemy zewnętrzne',
  ]},
  { heading: '3. Konto użytkownika', paragraphs: ['Aby korzystać z niektórych funkcji Usługi, musisz założyć konto. Zobowiązujesz się do:'], list: [
    'Podania dokładnych, aktualnych i pełnych informacji przy rejestracji',
    'Utrzymywania i niezwłocznego aktualizowania informacji na koncie',
    'Dbania o bezpieczeństwo hasła i ponoszenia wszelkiego ryzyka nieuprawnionego dostępu',
    'Niezwłocznego zgłaszania nam każdego nieuprawnionego użycia konta',
    'Ponoszenia odpowiedzialności za wszystkie działania wykonane na twoim koncie',
  ]},
  { heading: '4. Warunki płatności', paragraphs: ['Płatności są obsługiwane w bezpieczny sposób przez naszego autoryzowanego operatora płatności. Kupując kredyty lub usługi, zobowiązujesz się:'], list: [
    'Podawać aktualne, pełne i dokładne dane dotyczące zakupu i konta',
    'Niezwłocznie aktualizować dane konta i dane płatnicze, gdy jest to potrzebne',
    'Płacić wszystkie kwoty według cen obowiązujących w chwili zakupu',
    'Płacić należne podatki, VAT i inne opłaty związane z zakupami',
  ]},
  { heading: '4.1 Sposoby zakupu kredytów', level: 3, paragraphs: ['Kredyty możesz kupić w następujący sposób:'], list: [
    'Zakup jednorazowy (płatność za użycie): pakiety kredytów kupowane w razie potrzeby i dodawane do konta od razu',
    'Abonament miesięczny: kredyty dodawane automatycznie co miesiąc, z rabatem 10%',
  ]},
  { heading: '4.2 Ceny i rozliczenia', level: 3, paragraphs: [
    'Wszystkie ceny są podane w USD i zawierają mające zastosowanie opłaty. Kredyty są dodawane do konta od razu po potwierdzeniu płatności. Żaden zakup kredytów nie podlega zwrotowi, chyba że wymaga tego prawo lub wyraźnie przewiduje to nasza Polityka zwrotów.',
  ]},
  { heading: '4.3 Darmowe kredyty próbne', level: 3, paragraphs: ['Nowi użytkownicy otrzymują przy rejestracji konta 1000 darmowych kredytów próbnych. Kredyty próbne:'], list: [
    'Są bezpłatne i nie wymagają danych płatniczych',
    'Działają przy weryfikacji e-mail tak samo jak kredyty płatne',
    'Nie podlegają zwrotowi, ponieważ są prezentem',
    'Pozwalają zweryfikować do 1000 adresów e-mail',
    'Pomagają ocenić jakość usługi przed zakupem',
  ]},
  { heading: '5. Abonamenty cykliczne', paragraphs: ['Miesięczne abonamenty kredytowe są rozliczane automatycznie co miesiąc. Opłata jest pobierana z góry w cyklu miesięcznym, a kredyty są dodawane do konta po udanej płatności. Najważniejsze warunki:'], list: [
    'Abonament odnawia się automatycznie na koniec każdego okresu rozliczeniowego, chyba że zostanie anulowany',
    'Możesz zrezygnować z abonamentu w dowolnej chwili przed kolejną datą rozliczenia',
    'Rezygnacja zaczyna obowiązywać na koniec bieżącego okresu rozliczeniowego',
    'Kredyty już dodane do konta pozostają dostępne po rezygnacji',
    'Abonenci otrzymują rabat 10% w porównaniu z ceną przy płatności za użycie',
  ]},
  { heading: '6. Wykorzystanie kredytów i zarządzanie nimi' },
  { heading: '6.1 Zużycie kredytów', level: 3, paragraphs: ['Kredyty są zużywane w następujący sposób:'], list: [
    'Każda udana weryfikacja adresu e-mail zużywa dokładnie 1 kredyt',
    'Kredyty są pobierane tylko za zakończone weryfikacje',
    'Weryfikacje nieudane z powodu błędów systemu nie zużywają kredytów',
    'Zduplikowane adresy w tej samej partii weryfikacji są przetwarzane tylko raz',
  ]},
  { heading: '6.2 Ważność i przenoszenie kredytów', level: 3, paragraphs: ['Ważne zasady dotyczące kredytów:'], list: [
    'Bez terminu ważności: kredyty nigdy nie wygasają i pozostają na koncie bezterminowo',
    'Bez możliwości przeniesienia: kredytów nie można przenosić między kontami',
    'Bez zwrotu: po zakupie kredyty nie podlegają zwrotowi (wyjątki opisuje Polityka zwrotów)',
    'Przypisanie do konta: kredyty są powiązane z twoim kontem i nie można ich udostępniać',
  ]},
  { id: 'cancellation-policy', heading: '7. Rezygnacja i zwroty', paragraphs: ['Możesz zrezygnować z abonamentu cyklicznego w dowolnej chwili w ustawieniach konta lub kontaktując się z naszym zespołem wsparcia pod adresem info@giggal.ai. Po rezygnacji:'], list: [
    'Abonament nie odnowi się w kolejnym okresie rozliczeniowym',
    'Zachowujesz wszystkie kredyty na koncie',
    'Możesz dalej korzystać z posiadanych kredytów bez ograniczeń',
    'Możesz nadal kupować pakiety kredytów w modelu płatności za użycie',
  ], after: ['Zwroty z powodu nietypowej aktywności lub wyjątkowych okoliczności są rozpatrywane zgodnie z naszą Polityką zwrotów. Jeśli wystąpi problem lub podejrzewasz oszustwo, niezwłocznie skontaktuj się z naszym zespołem wsparcia, aby sprawa została rozpatrzona.']},
  { heading: '8. Zasady dopuszczalnego użycia', paragraphs: ['Zobowiązujesz się korzystać z Usługi wyłącznie w celach zgodnych z prawem i zgodnie ze wszystkimi obowiązującymi przepisami. Zobowiązujesz się nie używać Usługi:'], list: [
    'Do weryfikowania adresów e-mail uzyskanych bez odpowiedniej zgody lub upoważnienia',
    'Do wysyłania spamu lub niezamówionych wiadomości e-mail po weryfikacji',
    'Do naruszania obowiązujących przepisów, w tym CAN-SPAM Act, RODO i CASL',
    'Do naruszania praw innych osób',
    'Do rozpowszechniania złośliwego oprogramowania lub innego szkodliwego kodu',
    'Do podszywania się pod jakąkolwiek osobę lub podmiot',
    'Do jakichkolwiek oszustw lub nadużywania naszej usługi',
    'Do odsprzedaży lub dalszej dystrybucji naszych usług weryfikacji bez upoważnienia',
    'Do prób inżynierii wstecznej lub naruszenia naszych systemów weryfikacji',
    'Do udostępniania danych logowania do konta lub kredytów nieuprawnionym użytkownikom',
  ]},
  { heading: '9. Dokładność i ograniczenia usługi', paragraphs: ['Dążymy do jak największej dokładności weryfikacji e-mail, ale przyjmujesz do wiadomości i akceptujesz, że:'], list: [
    'Weryfikacja e-mail nie może zagwarantować 100% dokładności z powodu ograniczeń technicznych',
    'Niektóre serwery pocztowe mogą dawać fałszywie pozytywne lub fałszywie negatywne odpowiedzi',
    'Wyniki weryfikacji opierają się na kontrolach w czasie rzeczywistym i mogą się z czasem zmienić',
    'Wyniki weryfikacji dostarczamy „w stanie, w jakim są” i nie dajemy żadnych gwarancji dostarczalności',
    'Odpowiadasz za zgodne z prawem wykorzystanie zweryfikowanych danych i za dalszą komunikację',
  ]},
  { heading: '10. Zgodne z prawem użycie i komunikacja', paragraphs: ['Jeśli używasz zweryfikowanych adresów e-mail do jakichkolwiek wiadomości prospectingowych, transakcyjnych lub wiadomości wsparcia, wyłącznie ty odpowiadasz za przestrzeganie wszystkich obowiązujących przepisów, w tym między innymi:'], list: [
    'CAN-SPAM Act (Stany Zjednoczone)', 'RODO (Unia Europejska)', 'CASL (Kanada)', 'Innych obowiązujących przepisów antyspamowych i o ochronie danych',
  ], after: ['Musisz uzyskać wymagane zgody i, tam gdzie ma to zastosowanie, dodać wymagane prawem mechanizmy rezygnacji z subskrypcji lub zarządzania preferencjami. Giggal.ai nie odpowiada za sposób, w jaki wykorzystujesz zweryfikowane adresy e-mail.']},
  { heading: '11. Własność intelektualna', paragraphs: ['Usługa oraz jej oryginalne treści, funkcje i funkcjonalności należą do Giggal.ai i są chronione międzynarodowymi przepisami o prawie autorskim, znakach towarowych, patentach, tajemnicy przedsiębiorstwa i innych prawach własności intelektualnej. Nie możesz kopiować, modyfikować, rozpowszechniać, sprzedawać ani oddawać w najem żadnej części naszych usług bez uprzedniej pisemnej zgody.']},
  { heading: '12. Dane i prywatność', paragraphs: [
    'Korzystanie z Usługi podlega także naszej Polityce prywatności. Zbieramy, przechowujemy i przetwarzamy twoje dane w sposób opisany w Polityce prywatności. Zachowujesz wszystkie prawa do danych swoich klientów i do list adresów e-mail. Nie będziemy ich używać, chyba że jest to potrzebne do świadczenia Usługi lub wymaga tego prawo.',
    'Adresy e-mail przesłane do weryfikacji są przetwarzane w bezpieczny sposób i nie są przechowywane na stałe. Nie sprzedajemy, nie udostępniamy i nie wykorzystujemy twoich list adresów e-mail w żadnym innym celu niż świadczenie usług weryfikacji.',
  ]},
  { heading: '13. Zmiany i dostępność usługi', paragraphs: [
    'Zastrzegamy sobie prawo do zmiany lub wstrzymania Usługi (lub jej części), czasowo lub na stałe, z uprzedzeniem lub bez niego. Nie ponosimy odpowiedzialności wobec ciebie ani osób trzecich za zmianę, zawieszenie lub wstrzymanie Usługi.',
    'Dążymy do utrzymania wysokiej dostępności usługi, ale nie gwarantujemy nieprzerwanego dostępu. O planowanych pracach serwisowych informujemy z wyprzedzeniem, gdy jest to możliwe.',
  ]},
  { heading: '14. Ograniczenie odpowiedzialności', paragraphs: ['W najszerszym zakresie dozwolonym przez prawo Giggal.ai ani jego członkowie zarządu, pracownicy, partnerzy, agenci, dostawcy i podmioty powiązane w żadnym wypadku nie ponoszą odpowiedzialności za szkody pośrednie, przypadkowe, szczególne lub wynikowe ani za odszkodowanie o charakterze karnym, w tym między innymi za utratę zysków, danych, możliwości korzystania, renomy (goodwill) lub inne straty niematerialne, wynikające z:'], list: [
    'Dostępu do Usługi lub korzystania z niej albo braku możliwości dostępu do Usługi lub korzystania z niej',
    'Jakiegokolwiek zachowania lub treści osób trzecich w Usłudze',
    'Jakichkolwiek treści uzyskanych za pośrednictwem Usługi',
    'Nieuprawnionego dostępu do twoich transmisji lub treści, ich wykorzystania lub zmiany',
    'Niedokładnych wyników weryfikacji e-mail',
    'Nieudanych doręczeń wiadomości lub odbić po weryfikacji',
    'Kredytów zużytych w wyniku błędu lub niewłaściwego użycia po stronie użytkownika',
  ]},
  { heading: '15. Wyłączenie gwarancji', paragraphs: [
    'Usługa jest świadczona „w stanie, w jakim jest” i „w miarę dostępności”, bez jakichkolwiek gwarancji, wyraźnych lub dorozumianych. Giggal.ai wyłącza wszelkie gwarancje, w tym między innymi dorozumiane gwarancje przydatności handlowej, przydatności do określonego celu i nienaruszania praw.',
    'Nie gwarantujemy, że Usługa będzie działać bez przerw, terminowo, bezpiecznie i bez błędów ani że wyniki weryfikacji e-mail będą w 100% dokładne.',
  ]},
  { heading: '16. Zwolnienie z odpowiedzialności', paragraphs: ['Zobowiązujesz się bronić Giggal.ai, jego licencjobiorców i licencjodawców oraz zwolnić ich z odpowiedzialności i zrekompensować im wszelkie roszczenia, szkody, zobowiązania, straty, odpowiedzialność, koszty lub długi oraz wydatki wynikające z korzystania przez ciebie z Usługi lub z naruszenia niniejszego Regulaminu.']},
  { heading: '17. Rozwiązanie umowy', paragraphs: ['Możemy zamknąć lub zawiesić twoje konto i dostęp do Usługi natychmiast, bez uprzedzenia i bez odpowiedzialności, z dowolnego powodu, w tym między innymi w razie naruszenia niniejszego Regulaminu. W przypadku rozwiązania umowy:'], list: [
    'Twoje prawo do korzystania z Usługi natychmiast wygasa',
    'Niewykorzystane kredyty przepadają bez zwrotu',
    'Abonamenty cykliczne zostają anulowane',
    'Dostęp do konta i danych może zostać trwale cofnięty',
  ]},
  { heading: '18. Prawo właściwe', paragraphs: ['Niniejszy Regulamin podlega prawu jurysdykcji, w której działa Giggal.ai, i jest interpretowany zgodnie z tym prawem, bez względu na jego normy kolizyjne.']},
  { heading: '19. Rozstrzyganie sporów', paragraphs: ['Wszelkie spory wynikające z niniejszego Regulaminu lub z Usługi albo z nimi związane strony najpierw próbują rozwiązać w drodze negocjacji w dobrej wierze. Jeśli negocjacje się nie powiodą, spory zostaną rozstrzygnięte w wiążącym postępowaniu arbitrażowym zgodnie z regulaminem właściwej instytucji arbitrażowej.']},
  { heading: '20. Zmiany regulaminu', paragraphs: ['Zastrzegamy sobie prawo do zmiany lub zastąpienia niniejszego Regulaminu w dowolnym momencie, według własnego uznania. Jeśli zmiana jest istotna, poinformujemy o niej co najmniej 30 dni przed wejściem w życie nowych warunków. To, co stanowi istotną zmianę, ustalamy według własnego uznania.']},
  { heading: '21. Rozdzielność postanowień', paragraphs: ['Jeśli którekolwiek postanowienie niniejszego Regulaminu zostanie uznane za niewykonalne lub nieważne, zostanie zmienione i zinterpretowane tak, aby w jak największym zakresie dozwolonym przez obowiązujące prawo osiągnąć cele tego postanowienia. Pozostałe postanowienia pozostają w pełni w mocy.']},
  { heading: '22. Dane kontaktowe', paragraphs: ['Jeśli masz pytania dotyczące niniejszego Regulaminu, skontaktuj się z nami:'], list: [
    'E-mail: info@giggal.ai', 'Strona: https://giggal.ai',
  ], after: ['Korzystając z usług Giggal.ai, potwierdzasz, że znasz i rozumiesz treść niniejszego Regulaminu oraz zgadzasz się, że jest on dla ciebie wiążący.']},
]

export default function RegulaminPage() {
  return (
    <LegalPageL10n
      locale="pl"
      path="/pl/regulamin"
      title="Regulamin"
      accent="korzystania z usługi"
      updated="22 października 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
