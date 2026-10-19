---
title: "Spielt Groß- und Kleinschreibung bei E-Mail-Adressen eine Rolle?"
seoTitle: "E-Mail-Adresse: Groß- und Kleinschreibung (Gmail, Outlook)"
description: "Meist nicht. Gmail und Outlook ignorieren Großbuchstaben, aber der Standard erlaubt Unterschiede vor dem @. Wann es zählt und wie Sie Adressen speichern."
slug: e-mail-adresse-gross-kleinschreibung
date: 2026-10-19
updated: 2026-10-19
keyword: e-mail adresse groß kleinschreibung
image: /blog/covers/de/e-mail-adresse-gross-kleinschreibung.webp
imageAlt: Titelbild zur Groß- und Kleinschreibung bei E-Mail-Adressen mit den Regeln für Domains, Gmail, Outlook und Datenbanken
cta: Prüfen Sie, ob eine E-Mail-Adresse wirklich existiert
---

Bei E-Mail-Adressen spielt die Groß- und Kleinschreibung meist keine Rolle. Ob Sie John.Smith@gmail.com oder john.smith@gmail.com eingeben, die E-Mail landet im selben Postfach. Der Teil nach dem @ ignoriert Großbuchstaben komplett. Die Ausnahme ist der Teil vor dem @. Technisch erlaubt der E-Mail-Standard einem Server, Smith und smith als zwei verschiedene Personen zu behandeln. Das sollten Sie wissen, wenn Sie ein Anmeldeformular oder eine Mailingliste betreiben.

## Der Teil nach dem @ unterscheidet nie

Der Domainname nach dem @ unterscheidet nie zwischen Groß- und Kleinschreibung. RFC 5321 sagt, dass Domains von Postfächern den normalen DNS-Regeln folgen. Das DNS ignoriert die Schreibweise der Buchstaben. GMAIL.COM, Gmail.com und gmail.com zeigen also auf genau denselben Mailserver. Sie können die Domain groß oder klein schreiben, ohne dass sich das Ziel Ihrer Nachricht ändert.

## Unterscheiden E-Mail-Adressen vor dem @ zwischen Groß- und Kleinschreibung?

Der Local-Part, also der Benutzername links vom @, funktioniert anders. RFC 5321 sagt in Abschnitt 2.4: "Der Local-Part eines Postfachs MUSS als case-sensitiv behandelt werden." Server, die Ihre Nachricht weitergeben, müssen Groß- und Kleinbuchstaben genau so lassen, wie sie geschrieben sind. Der empfangende Server, auf dem das Postfach liegt, entscheidet, ob `Smith` und `smith` zu zwei verschiedenen Personen gehören.

Derselbe Abschnitt warnt auch: "Die Groß- und Kleinschreibung im Local-Part von Postfächern auszunutzen, behindert die Interoperabilität und wird nicht empfohlen." Stellen Sie sich zwei Kollegen in einem Unternehmen vor, JSmith@ und jsmith@, und wie oft ihre E-Mails vertauscht würden. Die großen Anbieter umgehen das, indem sie die Schreibweise ganz ignorieren.

## Gmail und Outlook

Die Anbieter, die den Großteil der privaten E-Mails abwickeln, ignorieren die Groß- und Kleinschreibung komplett. Produktexperten in der Hilfe-Community von Gmail bestätigen, dass Gmail Großbuchstaben ignoriert. Das gilt beim Anlegen eines Kontos und beim Empfang von E-Mails. Ob jemand an `JaneDoe@gmail.com` oder an `janedoe@gmail.com` schreibt, Google stellt beides in dasselbe Postfach zu. Google behandelt außerdem `@googlemail.com` und `@gmail.com` als dieselbe Adresse.

Gmail ignoriert bei privaten Adressen auch Punkte. `jane.doe@gmail.com` und `janedoe@gmail.com` erreichen also dasselbe Postfach. Gehen Sie aber nicht davon aus, dass das überall gilt. Die Dokumentation von Google sagt, dass Punkte bei Google-Workspace-Konten auf Arbeits- oder Schuldomains sehr wohl zählen. Punkte und Großbuchstaben folgen getrennten Regeln. Ein anderer Anbieter ignoriert Punkte also nicht automatisch, nur weil Gmail es tut.

Die Antwort von Microsoft ist ähnlich. In einer Antwort im Support-Forum von Microsoft erklärt ein Nutzer drei Dinge. Der Teil nach dem @ unterscheidet nie zwischen Groß- und Kleinschreibung. Beim Benutzernamen hängt es vom Anbieter ab. Große Anbieter wie Outlook und Gmail ignorieren die Schreibweise. Dieselbe Antwort fügt hinzu, dass einige Unternehmen eigene Server betreiben, die doch unterscheiden.

## Wann Großbuchstaben trotzdem Probleme machen

Am häufigsten passiert es beim Login. Sie melden sich auf dem Handy als `Sarah@example.com` an, weil die Tastatur den ersten Buchstaben groß geschrieben hat. Später melden Sie sich mit `sarah@example.com` an. Ein einfaches System meldet dann, dass kein Konto gefunden wurde. Die Person hat ihre Adresse nicht geändert. Aber das Login-Formular hat den Text mit strenger Unterscheidung der Schreibweise verglichen.

Listen und CRMs haben ihre eigene Form des Problems. Meldet sich jemand als `Bob@company.com` an und lädt später einen Leitfaden als `bob@company.com` herunter, zählen viele Plattformen zwei getrennte Leads. Das bläht Ihre Kennzahlen auf, und die Person bekommt Kampagnen doppelt. Entfernen Sie Dubletten ohne Rücksicht auf die Schreibweise, bevor Sie eine Marketing-Liste [prüfen oder an sie senden](/email-list-cleaning) (auf Englisch).

Dann gibt es den seltenen Firmenserver, der die Schreibweise streng unterscheidet. Das ist die Ausnahme, die die Antwort bei Microsoft erwähnt. Schreibt ein Kontakt seine Adresse auf der Visitenkarte als `M.MacDonald@specialtycorp.com`, behalten Sie diese Schreibweise bei, wenn Sie ihm schreiben. Normalen Systemen schadet das nicht, und bei Systemen, die unterscheiden, vermeiden Sie Zustellprobleme.

## Wenn Sie E-Mail-Adressen speichern

Wenn Sie Webanwendungen bauen oder Kontaktdatenbanken verwalten, behalten Sie die Schreibweise bei. Speichern Sie die Adresse genau so, wie die Person sie eingegeben hat. Führen Sie aber alle Vergleiche, Suchen und Prüfungen auf Eindeutigkeit in Kleinbuchstaben durch.

Die ursprüngliche Eingabe zu behalten respektiert, wie die Person in Profilen und E-Mail-Headern angezeigt werden möchte. Die Umwandlung in Kleinbuchstaben verhindert doppelte Konten. Meldet sich jemand als `IStillUse@AOL.COM` an, zwingen Sie den Anzeigenamen nicht in Kleinbuchstaben. Behandeln Sie aber `iSTilLUSE@aol.com` als Dublette davon.

Für die Eindeutigkeit in PostgreSQL indexieren Sie den Ausdruck in Kleinbuchstaben, statt eine einfache Unique-Bedingung anzulegen:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL bietet auch die Erweiterung `citext`, die Zeichenketten ohne Unterscheidung der Schreibweise vergleicht. In MySQL unterscheidet die Standard-Collation (`utf8mb4_0900_ai_ci`) schon nicht zwischen Groß- und Kleinschreibung. Normale Unique-Schlüssel erkennen dort doppelte Schreibweisen also ohne zusätzliche Funktionen.

Achten Sie in Backend-Sprachen auf eine Falle bei der Umwandlung in Kleinbuchstaben, vor allem in Java. In Java nutzt `email.toLowerCase()` die Standard-Locale des Servers. In einer türkischen Locale wird der lateinische Großbuchstabe `I` zu `ı` (einem kleinen i ohne Punkt) statt zu `i`. Das macht Adressen wie `INFO@example.com` kaputt. Um diesen Fehler zu vermeiden, übergeben Sie `Locale.ROOT`:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

`toLowerCase()` in JavaScript ist vor dieser Falle sicher. Es nutzt die Standardzuordnung von Unicode statt der Locale des Hosts. Nur `toLocaleLowerCase()` hängt von der Locale ab.

Um falsche Formate und schlechte Einträge abzufangen, bevor sie in Ihre Datenbank gelangen, prüfen Sie Adressen bei der Anmeldung mit einer [API zur E-Mail-Validierung](/email-validation-api) (auf Englisch). Sie fängt Tippfehler und tote Domains ab, solange die Person noch auf der Seite ist.

## Häufige Fragen

**Unterscheidet Gmail zwischen Groß- und Kleinschreibung?**
Nein. Gmail ignoriert die Groß- und Kleinschreibung beim Anlegen eines Kontos und bei der Zustellung. Lautet Ihre Adresse john.doe@gmail.com, erhalten Sie auch Nachrichten an JOHN.DOE@gmail.com und John.Doe@googlemail.com. Sie können kein neues Konto anlegen, dessen Buchstaben sich nur in der Schreibweise von einem bestehenden Konto unterscheiden.

**Spielt es eine Rolle, wenn ich meine E-Mail-Adresse mit Großbuchstaben eingebe?**
Beim normalen Versand an private und geschäftliche Postfächer verhindern Großbuchstaben die Zustellung nicht. Der empfangende Mailserver ignoriert die Schreibweise und stellt die Nachricht normal zu. Vorsichtig müssen Sie nur bei Login-Formularen sein, die E-Mail-Adressen als exakte Zeichenketten vergleichen.

**Unterscheidet eine E-Mail-ID zwischen Groß- und Kleinschreibung?**
In der Praxis nicht. Eine E-Mail-ID ist nur ein anderer Name für eine E-Mail-Adresse. Gmail, Outlook und die anderen großen Anbieter ignorieren Großbuchstaben darin. Der Standard erlaubt einem Server zwar, Großbuchstaben vor dem @ als Unterschied zu behandeln. Das ist aber selten. Wenn Sie Ihre ID zur besseren Lesbarkeit mit Großbuchstaben schreiben, verlieren Sie dadurch sehr wahrscheinlich keine E-Mail.

**Soll ich E-Mail-Adressen in Kleinbuchstaben speichern?**
Vergleichen und indexieren Sie E-Mail-Adressen in Kleinbuchstaben, um doppelte Konten und Fehler beim Login zu vermeiden. Behalten Sie die ursprüngliche Schreibweise der Person in einer Anzeigespalte, damit Benachrichtigungen sauber aussehen. Können Sie nur eine Spalte behalten, speichern Sie die Adresse wie eingegeben und vergleichen Sie sie mit lower(). So verlieren Sie das Original nicht.

**Können Großbuchstaben einen Bounce auslösen?**
Sehr selten. Das passiert nur bei einem ungewöhnlichen Server, der Admin@ und admin@ als getrennte Postfächer behandelt. Bounct eine Adresse mit Großbuchstaben, suchen Sie zuerst nach einer anderen Ursache, etwa einem Tippfehler oder einem Postfach, das nicht mehr existiert. Der Code in der Bounce-Meldung zeigt Ihnen, welche Ursache es ist. Das erklärt der Beitrag zu [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce).

Großbuchstaben verhindern nicht, dass eine E-Mail ankommt, [ein Tippfehler](/email-checker) aber schon. Wenn Sie eine Kontaktliste vor dem nächsten Versand bereinigen, lassen Sie sie durch [Giggal.ai](/email-list-cleaning) (auf Englisch) laufen. So finden Sie zuerst tote Postfächer und fehlerhafte Domains.
