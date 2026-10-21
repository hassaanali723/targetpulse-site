import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/pl'

// The existence question: "jak sprawdzić czy mail istnieje" 100, "czy mail
// istnieje" 100, "jak sprawdzić czy dany mail istnieje" 50, "czy ten mail
// istnieje" 40, "czy taki mail istnieje" 40 and the smaller phrasings, about
// 450 a month, all KD 0 (keyword plan sections 2 to 4). Modelled on the German
// child (/de/email-adresse-pruefen/gibt-es-diese-email-adresse): the page
// answers in the first paragraph, embeds the checker and lists four methods
// with their limits. No figures beyond what the method itself states.

const PATH = '/pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje'
const DESC =
  'Jak sprawdzić, czy mail istnieje: 4 sposoby, ich ograniczenia i darmowy weryfikator, który sprawdza skrzynkę bez wysyłania wiadomości. Także dla catch-all.'

export const metadata: Metadata = {
  title: { absolute: 'Jak sprawdzić, czy mail istnieje? 4 sposoby | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Jak sprawdzić, czy mail istnieje? 4 sposoby',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
}

const steps = [
  {
    name: 'Sprawdź skrzynkę w weryfikatorze, bez wysyłania wiadomości',
    text: 'Weryfikator email pyta serwer pocztowy domeny, czy dany mail istnieje. Nie wysyła przy tym żadnej wiadomości do odbiorcy.',
  },
  {
    name: 'Sprawdź format adresu',
    text: 'Poprawny adres ma nazwę, jeden znak @ i domenę z końcówką, na przykład firma.pl. Literówka w domenie wystarczy, aby adres nie działał. Poprawny format nie oznacza jednak, że skrzynka istnieje.',
  },
  {
    name: 'Sprawdź rekordy MX domeny',
    text: 'Jeśli domena nie publikuje rekordów MX, nie może na niej istnieć żadna skrzynka. Zapytanie DNS pokazuje to w sekundę. Obecny rekord MX nie potwierdza jednak, że istnieje konkretna skrzynka.',
  },
  {
    name: 'Wyślij wiadomość testową i poczekaj na odbicie (sposób zawodny)',
    text: 'Wiele poradników zaleca ten sposób. Na domenie catch-all serwer przyjmuje każdego odbiorcę i nie zwraca odbicia, nawet jeśli skrzynka nie istnieje. Brak odbicia niczego więc nie potwierdza. Ten sposób działa tylko na domenach, które nie są catch-all, a każde odbicie szkodzi reputacji nadawcy.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'Jak sprawdzić, czy mail istnieje, bez wysyłania wiadomości?',
    a: 'Wpisz adres w weryfikator na tej stronie. Narzędzie pyta serwer pocztowy, czy skrzynka istnieje, i nie wysyła żadnej wiadomości. Wynik, prawidłowy lub nieprawidłowy, widzisz w kilka sekund.',
  },
  {
    q: 'Czy taki mail istnieje, jeśli ma poprawny format?',
    a: 'Nie zawsze. Poprawny format oznacza tylko, że adres jest dobrze zapisany: ma nazwę, znak @ i domenę. Adres w poprawnym formacie może prowadzić do domeny bez serwera pocztowego albo do skrzynki, której nigdy nie założono. Odpowiedź daje dopiero sprawdzenie skrzynki.',
  },
  {
    q: 'Czy ten mail istnieje, jeśli moja wiadomość nie wróciła?',
    a: 'Niekoniecznie. Na domenie catch-all serwer przyjmuje każdy adres i nie zwraca odbicia. Brak komunikatu o błędzie nic więc nie mówi. W takim przypadku potrzebna jest weryfikacja catch-all.',
  },
  {
    q: 'Dlaczego wynik to „nieznany”?',
    a: 'Serwer nie odpowiedział na czas, stosuje greylisting wobec nowych nadawców albo działa za bramką bezpieczeństwa, która przyjmuje wszystko. Spróbuj ponownie później albo użyj pełnej weryfikacji catch-all.',
  },
  {
    q: 'Czy weryfikator pokaże, do kogo należy dany mail?',
    a: 'Nie. Serwer pocztowy potwierdza tylko, czy skrzynka istnieje. Nie podaje imienia ani nazwiska właściciela. Domena pokazuje firmę lub dostawcę poczty, ale nie osobę.',
  },
  {
    q: 'Co zrobić z adresem, który nie istnieje?',
    a: 'Usuń go z listy i nie wysyłaj na niego ponownie. Każda próba wysyłki na nieistniejącą skrzynkę obniża reputację twojej domeny. Jeśli kontakt jest ważny, poszukaj jego aktualnego adresu.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function JakSprawdzicCzyMailIstniejePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('pl', [
          { name: 'Weryfikator email', path: '/pl/weryfikator-email' },
          { name: 'Jak sprawdzić, czy mail istnieje?', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Jak sprawdzić, czy mail istnieje',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="pl" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/pl/weryfikator-email" className="hover:underline">Weryfikator email</Link> › Czy mail istnieje?
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Jak sprawdzić, czy mail istnieje
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Mail istnieje, jeśli jego skrzynka pocztowa jest założona i aktywna. Możesz to sprawdzić bez
          wysyłania wiadomości. Tak działa narzędzie poniżej, a wynik pojawia się w kilka sekund.
          Odpowiedź, czy mail istnieje, pochodzi z serwera pocztowego danej domeny. Domeny catch-all
          przyjmują każdy adres, więc wymagają dodatkowych kontroli. Narzędzie wykonuje również te kontrole.
        </p>
      </section>

      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Za darmo, bez rejestracji. To samo narzędzie co na stronie{' '}
          <Link href="/pl/weryfikator-email" className="text-indigo-600 font-bold hover:underline">weryfikator email</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Sposób {i + 1}: {s.name.charAt(0).toLowerCase() + s.name.slice(1)}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              To najpewniejszy i najszybszy sposób, ale ma ograniczenie. Niektóre serwery nie odpowiadają
              nieznanym nadawcom (greylisting). Inne odpowiadają „tak” na każdy adres. W pierwszym przypadku
              wynik to „nieznany” i warto spróbować ponownie. W drugim przypadku domena jest
              catch-all i potrzebny jest krok opisany niżej.
            </p>
          )}
          {i === 2 && (
            <p className={proseP}>
              Domena z prawidłowymi rekordami MX i serwerem, który odpowiada, to podstawa. Jeśli jej brakuje,
              możesz odrzucić adres bez dalszych kontroli. Jeśli jest, nadal potrzebujesz sposobu 1, aby
              sprawdzić konkretną skrzynkę.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Czy ten mail istnieje, jeśli wiadomość nie wróciła?</h2>
        <p className={proseP}>
          Nie można tego założyć. Na domenie catch-all serwer przyjmuje każdego odbiorcę. Wiadomość nie wraca
          nawet wtedy, gdy skrzynka nie istnieje. Trafia do folderu, którego nikt nie czyta, albo zostaje
          po cichu usunięta. Brak odbicia nie jest więc potwierdzeniem. Format i rekordy MX też tego nie
          rozstrzygną, bo sprawdzają tylko adres i domenę, a nie skrzynkę.{' '}
          <Link href="/pl/weryfikacja-catch-all" className="text-indigo-600 font-bold hover:underline">
            Weryfikacja catch-all
          </Link>{' '}
          w Giggal.ai analizuje dodatkowe sygnały serwera i skrzynki. Także w tym przypadku zwraca wynik
          prawidłowy lub nieprawidłowy.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Czego weryfikacja nie powie: do kogo należy dany mail</h2>
        <p className={proseP}>
          Serwer pocztowy potwierdza lub odrzuca skrzynkę. Nie podaje imienia ani nazwiska właściciela.
          Nie ma też publicznej bazy, która łączy adresy z osobami. Weryfikacja pokazuje domenę, czyli firmę
          lub dostawcę poczty. Pokazuje też, czy adres jest funkcyjny (np. info@), jednorazowy czy z darmowej
          poczty. Jeśli szukasz właściciela, porównaj format adresów firmy (np. imie.nazwisko@) z publicznymi
          profilami, na przykład na stronie firmy lub na LinkedInie.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Co zrobić, gdy taki mail nie istnieje</h2>
        <p className={proseP}>
          Usuń adres z listy i nie próbuj ponownie. Każda wiadomość na nieistniejącą skrzynkę to twarde
          odbicie (hard bounce). Dostawcy poczty liczą twarde odbicia, gdy oceniają, czy twoja domena jest
          zaufanym nadawcą. Jeśli kontakt jest ważny, poszukaj jego aktualnego adresu. Całą listę sprawdzisz przed
          wysyłką dzięki{' '}
          <Link href="/pl/masowa-weryfikacja-email" className="text-indigo-600 font-bold hover:underline">
            masowej weryfikacji email
          </Link>
          . Narzędzie sprawdza każdy wiersz.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Najczęstsze pytania</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="pl" headline="Sprawdź całą swoją listę" />
      <FooterL10n locale="pl" />
    </main>
  )
}
