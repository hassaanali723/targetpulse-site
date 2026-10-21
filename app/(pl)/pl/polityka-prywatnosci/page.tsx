import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Polish translation of the English /privacy-policy, clause by clause
// (English "Last Updated: October 1, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so. RODO is the Polish name of the GDPR.

export const metadata: Metadata = {
  title: 'Polityka prywatności: dane i weryfikacja email',
  description: 'Jak Giggal.ai przetwarza dane osobowe i adresy wysłane do weryfikacji. To tłumaczenie informacyjne. W razie rozbieżności wiążąca jest wersja angielska.',
  alternates: { canonical: '/pl/polityka-prywatnosci', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pl_PL', title: 'Polityka prywatności', url: 'https://giggal.ai/pl/polityka-prywatnosci', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Wprowadzenie', paragraphs: [
    'Usługę prowadzi TargetPulse Ltd („my”), spółka zarejestrowana w Anglii i Walii pod numerem 17079825, z siedzibą pod adresem Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd jest administratorem danych osobowych przetwarzanych w ramach Giggal.ai. Kontakt: info@giggal.ai. Zgłoszenia nadużyć: abuse@giggal.ai.',
    'Giggal.ai („my”) dba o ochronę twojej prywatności. Niniejsza Polityka prywatności wyjaśnia, jak zbieramy, wykorzystujemy, ujawniamy i chronimy twoje informacje, gdy korzystasz z naszych usług weryfikacji e-mail i naszej strony internetowej.',
  ]},
  { heading: '2. Jakie informacje zbieramy' },
  { heading: '2.1 Dane osobowe', level: 3, paragraphs: ['Możemy zbierać dane osobowe, które przekazujesz nam dobrowolnie, gdy:'], list: [
    'Zakładasz konto',
    'Kupujesz kredyty na weryfikację lub abonament',
    'Kontaktujesz się z naszym działem obsługi klienta',
    'Przesyłasz listy adresów e-mail do weryfikacji',
    'Korzystasz z formularzy kontaktowych lub formularzy wsparcia na naszej stronie',
  ], after: ['Te informacje mogą obejmować: imię i nazwisko, adres e-mail, identyfikatory konta, opcjonalne dane firmy oraz metadane transakcji. Dane kart płatniczych obsługuje nasz operator płatności i nie są one przez nas przechowywane.']},
  { heading: '2.2 Uwierzytelnianie i dane techniczne', level: 3, paragraphs: ['Do rejestracji i logowania używamy Clerk (w tym logowania przez Google oraz rejestracji przez e-mail i hasło). W ramach tego procesu uwierzytelniania zbieramy i przetwarzamy:'], list: [
    'Identyfikatory konta (na przykład identyfikator użytkownika, imię i nazwisko oraz adres e-mail)',
    'Dostawcę uwierzytelniania i metodę logowania (Google albo e-mail i hasło)',
    'Metadane aktywności logowania (na przykład daty i godziny logowań)',
    'Dane techniczne związane z bezpieczeństwem (na przykład adres IP i user agent), używane do ochrony kont i zapobiegania nadużyciom',
    'Pliki cookie lub tokeny sesji, bez których nie da się bezpiecznie utrzymać zalogowania',
  ]},
  { heading: '2.3 Dane z weryfikacji e-mail', level: 3, paragraphs: ['Gdy korzystasz z naszych usług weryfikacji e-mail, zbieramy i przetwarzamy:'], list: [
    'Adresy e-mail przesłane do weryfikacji',
    'Wyniki i status weryfikacji (prawidłowy, nieprawidłowy, catch-all, jednorazowy itp.)',
    'Listy adresów e-mail przesłane do masowego przetwarzania',
    'Dane o użyciu API i historię weryfikacji',
  ]},
  { heading: '3. Jak wykorzystujemy twoje informacje', paragraphs: ['Zebrane informacje wykorzystujemy w następujących celach:'], list: [
    'Świadczenie i utrzymanie naszych usług',
    'Obsługa twoich transakcji i zarządzanie abonamentami',
    'Wysyłanie ci powiadomień związanych z usługą',
    'Zapewnienie obsługi klienta',
    'Ulepszanie i optymalizacja naszych usług',
    'Wykrywanie oszustw i nadużyć oraz zapobieganie im',
    'Wypełnianie obowiązków prawnych',
    'Analiza wzorców i trendów użycia',
  ]},
  { heading: '4. Podstawa prawna przetwarzania (RODO)', paragraphs: ['Jeśli pochodzisz z Europejskiego Obszaru Gospodarczego (EOG), podstawa prawna zbierania i wykorzystywania twoich informacji zależy od danych i kontekstu:'], list: [
    'Wykonanie umowy: przetwarzanie jest potrzebne do świadczenia naszych usług',
    'Prawnie uzasadnione interesy: przetwarzanie służy naszym prawnie uzasadnionym interesom biznesowym',
    'Zgoda: przetwarzanie opiera się na wyraźnej zgodzie, której udzielasz na określone cele',
    'Obowiązek prawny: przetwarzanie jest potrzebne do wypełnienia obowiązków wynikających z prawa',
  ]},
  { heading: '5. Udostępnianie i ujawnianie danych' },
  { heading: '5.1 Dostawcy usług', level: 3, paragraphs: ['Udostępniamy twoje informacje zewnętrznym dostawcom usług, którzy działają w naszym imieniu:'], list: [
    'Operatorom płatności (nasz autoryzowany operator płatności)',
    'Dostawcom uwierzytelniania (takim jak Clerk)',
    'Dostawcom hostingu w chmurze',
    'Dostawcom usług bezpieczeństwa i monitoringu',
    'Narzędziom obsługi klienta',
  ]},
  { heading: '5.2 Wymogi prawne', level: 3, paragraphs: ['Możemy ujawnić twoje informacje, jeśli wymaga tego prawo lub w odpowiedzi na uzasadnione żądania organów publicznych (na przykład orzeczenia sądów lub wezwania do przedstawienia dokumentów).']},
  { heading: '5.3 Przekształcenia firmy', level: 3, paragraphs: ['Jeśli uczestniczymy w połączeniu, przejęciu lub sprzedaży aktywów, twoje informacje mogą zostać przekazane w ramach takiej transakcji.']},
  { heading: '6. Bezpieczeństwo danych', paragraphs: ['Stosujemy odpowiednie techniczne i organizacyjne środki bezpieczeństwa, aby chronić twoje informacje, w tym:'], list: [
    'Szyfrowanie danych w trakcie przesyłania i w spoczynku',
    'Regularne oceny bezpieczeństwa',
    'Kontrolę dostępu i uwierzytelnianie',
    'Bezpieczne centra danych',
    'Szkolenia pracowników z ochrony danych',
  ], after: ['Żadna metoda przesyłania danych przez internet nie jest jednak w 100% bezpieczna i nie możemy zagwarantować pełnego bezpieczeństwa.']},
  { heading: '7. Przechowywanie danych', paragraphs: ['Przechowujemy dane osobowe tylko tak długo, jak jest to potrzebne do celów opisanych w niniejszej Polityce prywatności, chyba że prawo wymaga dłuższego okresu przechowywania lub na niego pozwala. Gdy nie potrzebujemy już twoich informacji, bezpiecznie je usuwamy lub anonimizujemy.']},
  { heading: '8. Twoje prawa', paragraphs: ['W zależności od miejsca, w którym przebywasz, możesz mieć następujące prawa:'], list: [
    'Dostęp: możesz zażądać dostępu do swoich danych osobowych',
    'Sprostowanie: możesz zażądać sprostowania nieprawidłowych informacji',
    'Usunięcie: możesz zażądać usunięcia swoich informacji',
    'Przenoszenie: możesz zażądać kopii swoich danych w formacie umożliwiającym ich przeniesienie',
    'Ograniczenie: możesz zażądać ograniczenia przetwarzania',
    'Sprzeciw: możesz wnieść sprzeciw wobec przetwarzania swoich informacji',
    'Wycofanie zgody: możesz wycofać zgodę, jeśli przetwarzanie się na niej opiera',
  ], after: ['Aby skorzystać z tych praw, napisz do nas na adres info@giggal.ai.']},
  { heading: '9. Pliki cookie i technologie śledzące', paragraphs: ['Używamy plików cookie i podobnych technologii śledzących, aby śledzić aktywność na naszej stronie i przechowywać niektóre informacje. Możesz ustawić przeglądarkę tak, aby odrzucała wszystkie pliki cookie lub informowała o wysłaniu pliku cookie. Jeśli jednak nie zaakceptujesz plików cookie, korzystanie z niektórych części usługi może nie być możliwe.']},
  { heading: '10. Linki do stron osób trzecich', paragraphs: ['Nasza strona może zawierać linki do stron osób trzecich. Nie odpowiadamy za praktyki tych zewnętrznych stron w zakresie prywatności. Zachęcamy do zapoznania się z politykami prywatności każdej odwiedzanej strony osób trzecich.']},
  { heading: '11. Prywatność dzieci', paragraphs: ['Nasze usługi nie są przeznaczone dla osób poniżej 18. roku życia. Nie zbieramy świadomie danych osobowych dzieci. Jeśli wiesz, że dziecko przekazało nam dane osobowe, skontaktuj się z nami, a podejmiemy kroki, aby te dane usunąć.']},
  { heading: '12. Międzynarodowe przekazywanie danych', paragraphs: ['Twoje informacje mogą być przekazywane do komputerów i przechowywane na komputerach znajdujących się poza twoim stanem, prowincją, krajem lub inną jurysdykcją, w której przepisy o ochronie danych mogą być inne. Dbamy o to, aby takie przekazywanie było objęte odpowiednimi zabezpieczeniami.']},
  { heading: '13. Prawa mieszkańców Kalifornii (CCPA)', paragraphs: ['Jeśli mieszkasz w Kalifornii, masz szczególne prawa dotyczące twoich danych osobowych:'], list: [
    'Prawo do informacji, jakie dane osobowe są zbierane',
    'Prawo do informacji, czy dane osobowe są sprzedawane lub ujawniane',
    'Prawo do sprzeciwu wobec sprzedaży danych osobowych (opt-out)',
    'Prawo do usunięcia danych osobowych',
    'Prawo do niedyskryminacji za korzystanie z praw wynikających z CCPA',
  ]},
  { heading: '14. Zmiany niniejszej Polityki prywatności', paragraphs: ['Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności. O zmianach poinformujemy, publikując nową Politykę prywatności na tej stronie i aktualizując datę „Ostatnia aktualizacja”. Zalecamy regularne sprawdzanie niniejszej Polityki prywatności pod kątem zmian.']},
  { heading: '15. Kontakt', paragraphs: ['Jeśli masz pytania dotyczące niniejszej Polityki prywatności, skontaktuj się z nami:'], list: [
    'E-mail: info@giggal.ai', 'Strona: https://giggal.ai',
  ], after: ['Korzystając z usług Giggal.ai, potwierdzasz, że znasz i rozumiesz treść niniejszej Polityki prywatności oraz akceptujesz jej warunki.']},
]

export default function PolitykaPrywatnosciPage() {
  return (
    <LegalPageL10n
      locale="pl"
      path="/pl/polityka-prywatnosci"
      title="Polityka"
      accent="prywatności"
      updated="1 października 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
