---
title: "Regex Email: Sprawdzone Wzorce dla JavaScript, Python i HTML (oraz Granice Regex)"
seoTitle: "Regex Email: Sprawdzone Wzorce dla JS, Python i HTML"
description: "Sprawdzone wyrażenia regularne do walidacji adresu email w JavaScript, Python i HTML5. Ograniczenia RFC 5322, pułapki i dlaczego regex nie sprawdza istnienia skrzynki."
slug: regex-email
date: 2026-10-27
updated: 2026-10-27
keyword: regex email
image: /blog/covers/pl/regex-email.webp
imageAlt: Wzorce wyrażeń regularnych do walidacji email i etapy sprawdzania
cta: Sprawdź swoje adresy email z Giggal.ai
---

Walidacja adresu email za pomocą wyrażenia regularnego wydaje się prosta dopóki nie spotkasz rzeczywistych danych w środowisku produkcyjnym. Adres taki jak `michal+newsletter@sub.domena.pl` jest w pełni poprawny, podczas gdy `uzytkownik@localhost` czy `test..123@domena.pl` natychmiast wywołują błędy w systemach pocztowych.

Wgląd w oficjalne specyfikacje (RFC 5321 i RFC 5322) ujawnia poważny problem: stworzenie wyrażenia regularnego obejmującego każdy dopuszczony teoretycznie przypadek wymaga ponad 6500 znaków. Taki wzorzec dopuszcza komentarze w nawiasach okrągłych, ciągi znaków w cudzysłowach ze spacjami oraz adresy IP w nawiasach kwadratowych. W nowoczesnej aplikacji internetowej ten oficjalny potworek jest bezużyteczny: spowalnia działanie aplikacji, jest nieczytelny i akceptuje konstrukcje, których żaden współczesny serwer pocztowy nie obsługuje.

W codziennej praktyce programistycznej potrzebujesz pragmatycznego wzorca regex: reguły, która wychwytuje oczywiste literówki bez blokowania prawdziwych użytkowników.

| Typ Wzorca | Część lokalna (przed @) | Subdomeny i TLD | Zalecane zastosowanie |
| --- | --- | --- | --- |
| **Standard Produkcyjny** | Litery, cyfry, `._%+*-` | Wiele subdomen, TLD o długości 2+ znaków | Formularze rejestracji, aplikacje webowe |
| **Natywny HTML5** | Podzbiór RFC (ASCII) | Punycode / Alfanumeryczne | Szybka weryfikacja w przeglądarce |
| **Minimalistyczny** | Wszystko poza spacjami i `@` | Co najmniej jedna kropka po `@` | Swobodna filtracja wstępna, proste skrypty |

---

## Zalecany wzorzec regex do środowisk produkcyjnych

W większości aplikacji internetowych najlepiej sprawdza się wzorzec, który egzekwuje standardowe reguły nazewnictwa i obsługuje nowoczesne końcówki domen:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Szczegółowa analiza poszczególnych elementów

Rozłożenie wyrażenia na części wyjaśnia, w jaki sposób eliminuje ono powszechne błędy przy wpisywaniu:

1. `^`: Wskazuje początek tekstu, uniemożliwiając częściowe dopasowania.
2. `[a-zA-Z0-9._%+-]+`: Dopuszcza jeden lub więcej dozwolonych znaków w nazwie użytkownika (części lokalnej): małe i wielkie litery, cyfry, kropki, podkreślenia, znaki procenta, plusy oraz myślniki.
3. `@`: Wymaga dokładnie jednego znaku małpy.
4. `[a-zA-Z0-9.-]+`: Sprawdza nazwę domeny, zezwalając na litery, cyfry, myślniki oraz kropki oddzielające subdomeny (na przykład `poczta.marketing.przyklad`).
5. `\.`: Dopasowuje kropkę oddzielającą domenę od jej końcówki.
6. `[a-zA-Z]{2,}`: Wymaga co najmniej dwóch liter dla domeny najwyższego poziomu (TLD). Obsługuje tradycyjne końcówki `.pl` czy `.com`, a także nowsze rozszerzenia typu `.technology` czy `.online`, odrzucając ucięte wpisy w rodzaju `uzytkownik@domena.p`.
7. `$`: Wyznacza koniec sprawdzanego ciągu znaków.

---

## Alternatywne wzorce dla konkretnych zastosowań

W zależności od tego, na którym etapie przeprowadzasz weryfikację, możesz wybrać regułę bardziej rygorystyczną lub bardziej elastyczną.

### 1. Wzorzec standardu W3C dla HTML5

Konsorcjum W3C przygotowało dla pól formularzy `<input type="email">` następujące wyrażenie regularne:

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

Ten wzorzec jest zgodny ze specyfikacją HTML5. Dopuszcza w części lokalnej znaki specjalne, takie jak `!` czy `~`, oraz pilnuje, aby poszczególne człony domeny nie przekraczały 63 znaków.

### 2. Regex minimalistyczny

Gdy zależy Ci wyłącznie na sprawdzeniu po stronie przeglądarki, czy użytkownik nie wysłał pustego pola lub przypadkowego ciągu liter przed przekazaniem adresu do wyspecjalizowanego API:

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

Wyrażenie sprawdza trzy proste warunki: brak spacji przed `@`, brak spacji po `@` oraz przynajmniej jedną kropkę w domenie. Nie generuje fałszywych odrzuceń przy rzadkich formatach adresów.

---

## Implementacja w JavaScript, Python i HTML

Oto jak wdrożyć sprawdzanie poprawności w popularnych środowiskach programistycznych.

### 1. Walidacja email w JavaScript (Frontend i Node.js)

W kodzie JavaScript zawsze warto usunąć białe znaki na krawędziach tekstu i skontrolować całkowitą długość ciągu:

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Usunięcie zbędnych spacji z początku i końca
  const cleanEmail = email.trim();
  
  // Ochrona przed przekroczeniem limitu RFC (maksymalnie 254 znaki)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Przykłady testowe
console.log(isValidEmail("katarzyna.nowak+praca@firma.pl")); // true
console.log(isValidEmail("podwojne..kropki@domena.pl"));      // true (walidacja składni)
console.log(isValidEmail("brak-znaku-malpy.pl"));            // false
console.log(isValidEmail("uzytkownik@domena"));              // false
```

### 2. Regex dla email w Pythonie

W języku Python najlepiej skompilować wyrażenie jednorazowo przy pomocy `re.compile` i weryfikować cały ciąg metodą `re.fullmatch`:

```python
import re

EMAIL_PATTERN = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")

def validate_email_address(email: str) -> bool:
    if not isinstance(email, str):
        return False
    
    clean_email = email.strip()
    if len(clean_email) > 254:
        return False
        
    return bool(EMAIL_PATTERN.fullmatch(clean_email))

# Przykłady testowe
print(validate_email_address("dev@przedsiebiorstwo.pl"))     # True
print(validate_email_address("adres ze spacja@poczta.pl"))   # False
print(validate_email_address("uzytkownik@.domena.pl"))       # False
```

### 3. Natywna walidacja w formularzu HTML5 (bez JavaScript)

Współczesne przeglądarki kontrolują format pola bezpośrednio przez atrybut `type="email"`. W połączeniu z atrybutem `pattern` możesz wymusić podanie kompletnej domeny z rozszerzeniem:

```html
<form action="/rejestracja" method="POST">
  <label for="user-email">Firmowy adres email</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="jan.kowalski@firma.pl"
  />
  <button type="submit">Przejdź dalej</button>
</form>
```

Jeżeli wpisany tekst nie pasuje do wzorca, przeglądarka zatrzyma wysyłanie formularza i wyświetli komunikat w języku użytkownika.

---

## Nietypowe przypadki, na których wykłada się większość regexów

Zanim wdrożysz konkretne wyrażenie regularne, upewnij się, że Twój system prawidłowo radzi sobie z tymi czterema sytuacjami:

### 1. Adresy z plusem (Subaddressing)
Poczta Gmail, Outlook czy Fastmail pozwala dodawać znak plusa i własny identyfikator (np. `michal+zakupy@gmail.com`). Zbyt restrykcyjne wzorce, które pomijają znak `+`, niesłusznie odrzucają takie adresy, utrudniając użytkownikom zakładanie konta.

### 2. Długie domeny najwyższego poziomu (gTLD)
Starsze poradniki sugerowały wzorce kończące się na `\.[a-zA-Z]{2,4}$`, zakładając obecność wyłącznie końcówek typu `.pl`, `.com` lub `.org`. Obecnie istnieje kilkaset dłuższych rozszerzeń, takich jak `.technology`, `.nieruchomosci` czy `.international`. Zawsze stosuj `[a-zA-Z]{2,}` bez sztucznego limitu górnego.

### 3. Międzynarodowe nazwy domen (IDN)
W Polsce i innych krajach europejskich nazwy domen mogą zawierać znaki diakrytyczne (np. `kontakt@kraków.pl`). Standardowe wzorce oparte na ASCII odrzucają takie adresy. Jeśli Twój projekt ma je obsługiwać, zamień domenę na format ASCII przy użyciu Punycode (`xn--...`) przed przystąpieniem do walidacji składni.

### 4. Następujące po sobie kropki
Standard RFC 5322 zezwala na sąsiadujące kropki, o ile znajdują się w cudzysłowie (`"jan..kowalski"@domena.pl`), lecz serwery pocztowe niemal bez wyjątku odrzucają wielokrotne kropki bez cudzysłowu (`jan..kowalski@domena.pl`). Aby zablokować podwójne kropki w części lokalnej, możesz dodać asercję negatywną `(?!.*\.\.)`.

---

## Gdzie kończy się regex: martwy punkt dostarczalności

Wyrażenie regularne ocenia wyłącznie jeden aspekt: **poprawność składni**. Odpowiada jedynie na pytanie: *„Czy ten ciąg znaków przypomina adres poczty elektronicznej?”*

W żaden sposób nie odpowie na kluczowe pytanie biznesowe: *„Czy wiadomość wysłana na ten adres faktycznie trafi do działającej skrzynki odbiorczej?”*

### Analiza architektoniczna: dlaczego regex nie potwierdza istnienia skrzynki

W inżynierii oprogramowania traktowanie walidacji adresu email jako prostego problemu dopasowywania wzorców tekstowych jest częstym błędem projektowym. W poniższym materiale wideo architekt oprogramowania Derek Comartin (Code Opinion) wyjaśnia, dlaczego parsowanie adresów zgodnych z RFC za pomocą wyrażeń regularnych prowadzi do niestabilnego kodu oraz dlaczego sprawdzanie składni to zupełnie co innego niż weryfikacja istnienia skrzynki:

```youtube
M6itpAfbvas
Obejrzyj wideo: [Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas) autorstwa Derek Comartin (Code Opinion)
```

Główne wnioski z tej analizy:
- **Pułapka specyfikacji RFC**: Próba uwzględnienia każdego teoretycznego wyjątku tworzy potworki regex liczące tysiące znaków, które w praktyce zawodzą przy współczesnych domenach.
- **Składnia a rzeczywiste istnienie konta**: Adres typu `nieistniejace.konto.771@gmail.com` przechodzi każdy test składniowy bez zarzutu, lecz wysłana wiadomość natychmiast odbija się, gdyż serwer pocztowy nie ma takiego użytkownika.
- **Dwuetapowa strategia**: Aplikacje produkcyjne powinny stosować lekki wzorzec po stronie klienta do wyłapywania literówek, a rzeczywiste potwierdzenie doręczalności przeprowadzać przed zapisaniem rekordu w bazie danych.

Oto pięć częstych sytuacji, w których adres poprawny składniowo kończy się natychmiastowym błędem doręczenia:

```
[ Wpis użytkownika: nieistniejace.konto.771@gmail.com ]
                           │
                           ▼
 1. Walidacja składni Regex ─────► POPRAWNA (Zgodne znaki, obecne @ i TLD)
                           │
                           ▼
 2. Sprawdzenie rekordów DNS MX ─► POPRAWNE (gmail.com posiada aktywne serwery)
                           │
                           ▼
 3. Weryfikacja skrzynki SMTP ───► BŁĄD (Odpowiedź Google: 550 5.1.1 User Unknown)
                           │
                           ▼
              [ WYNIK: HARD BOUNCE ]
```

### 1. Nieistniejące domeny
Adres `kontakt@ta-domena-naprawde-nie-istnieje-992.pl` spełnia kryteria każdego regexu. Jednak domena nigdy nie została zarejestrowana i nie ma wpisów MX. Wysłanie wiadomości powoduje natychmiastowe odbicie.

### 2. Skasowane lub nieaktywne skrzynki
Adres `piotr.zielinski@korporacja.pl` jest bezbłędny pod kątem składniowym. Jeśli Piotr odszedł z firmy kilka miesięcy temu, jego skrzynka została usunięta. Podczas sesji SMTP serwer odbiorcy zwróci kod `550 5.1.1 Recipient rejected: User unknown`. To twarde odbicie (hard bounce), które bezpośrednio obniża reputację Twojej domeny wysyłkowej.

### 3. Skrzynki tymczasowe i jednorazowe
Serwisy typu 10MinuteMail czy GuerrillaMail oferują adresy aktywne przez kilkanaście minut. Regex zatwierdza je bez przeszkód. Jeśli w kolejnych dniach wyślesz fakturę lub powiadomienie, wiadomość nie dotrze do adresata.

### 4. Serwery z konfiguracją Catch-All
Wiele firm konfiguruje serwery pocztowe tak, aby przyjmowały każdą przychodzącą wiadomość, niezależnie od tego, czy adresat rzeczywiście istnieje. Wzorzec regex nie jest w stanie rozróżnić, czy adres należy do aktywnego pracownika, czy serwer bezkrytycznie odbiera całą pocztę.

### 5. Pułapki spamowe (Spam Traps)
Adresy typu spam trap wyglądają jak standardowe skrzynki kontaktowe. Pomyślnie przechodzą testy składni i nawiązują połączenia SMTP. Trafienie wiadomości na taki adres skutkuje wpisaniem adresu IP nadawcy na czarne listy, takie jak Spamhaus.

---

## Dwuetapowa strategia walidacji adresów

Aby proces rejestracji przebiegał sprawnie i jednocześnie nie zaśmiecał bazy niepoprawnymi kontaktami, warto podzielić weryfikację na dwa poziomy:

```
┌────────────────────────────────────────────────────────┐
│                   POZIOM 1: FRONTEND                   │
│  Szybka walidacja składni (HTML5 + Lekki Regex)        │
│  - Wychwytuje literówki w trakcie wpisywania           │
│  - Zapobiega brakującym @ i uciętym domenom            │
│  - Natychmiastowa informacja zwrotna dla użytkownika   │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   POZIOM 2: BACKEND                    │
│  Weryfikacja dostarczalności (DNS + Test SMTP)         │
│  - Sprawdza obecność rekordów MX domeny                │
│  - Symuluje dialog SMTP bez wysyłania rzeczywistej wiadomości│
│  - Identyfikuje domeny jednorazowe oraz serwery catch-all│
└────────────────────────────────────────────────────────┘
```

1. **Po stronie klienta (Natychmiastowy feedback)**: Zastosuj standardowy wzorzec regex lub natywne pole HTML5 `<input type="email">`. Pozwala to wyłapać częste pomyłki, takie jak wpisanie przecinka zamiast kropki (`uzytkownik@gmail,com`).
2. **Po stronie serwera (Rzeczywista dostarczalność)**: Zanim zapiszesz rekord w bazie danych, zweryfikuj czy skrzynka realnie przyjmuje pocztę. Pojedyncze adresy sprawdzisz przez nasz [darmowy weryfikator email](/email-checker), konta jednorazowe odfiltrujesz przy użyciu [wykrywacza tymczasowych adresów](/disposable-email-checker), a cały proces zautomatyzujesz za pomocą [API do weryfikacji adresów email](/public/docs).

Wyrażenie regularne to niezbędny fundament do wstępnego uporządkowania danych wejściowych. Dopiero połączenie go z analizą dostarczalności chroni reputację nadawcy i pozwala utrzymać współczynnik odbić poniżej dopuszczalnego progu 2 procent.
