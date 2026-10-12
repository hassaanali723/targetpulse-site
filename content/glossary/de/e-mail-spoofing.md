---
title: E-Mail-Spoofing
description: Was E-Mail-Spoofing ist, warum gefälschte Absender möglich sind, woran Sie sie erkennen und wie SPF, DKIM und DMARC Ihre Domain schützen.
slug: e-mail-spoofing
date: 2026-10-12
updated: 2026-10-12
keyword: email spoofing
short: E-Mail-Spoofing bedeutet, dass jemand eine E-Mail mit einer gefälschten Absenderadresse verschickt. Die E-Mail sieht dann so aus, als käme sie von einer anderen Person oder Firma. Betrüger nutzen das, um an Geld, Passwörter oder Daten zu kommen.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Ein Checker zeigt, ob eine Adresse existiert, nicht wer gesendet hat
---

## Was ist E-Mail-Spoofing?

E-Mail-Spoofing ist das Fälschen der Absenderadresse einer E-Mail. Der Betrüger trägt in das Absenderfeld eine fremde Adresse ein, zum Beispiel die Ihrer Bank oder Ihres Chefs. Im Posteingang sieht die E-Mail dann echt aus. Das englische Wort "spoofing" bedeutet Täuschung.

Spoofing ist kein Einbruch in ein Konto. Das Postfach der echten Person bleibt unberührt. Der Betrüger sendet von einem eigenen Server. Er schreibt nur einen falschen Namen und eine falsche Adresse in die E-Mail. Ein Server ist ein Computer, der rund um die Uhr läuft und zum Beispiel E-Mails versendet.

## Ein Beispiel: Die falsche E-Mail vom Chef

Die Muster GmbH hat die Domain example.com. Eine Domain ist der Name hinter dem @ in einer E-Mail-Adresse. Der Geschäftsführer heißt Thomas Weber. Eines Morgens bekommt die Buchhalterin Sabine eine E-Mail mit diesen Kopfzeilen:

```
From: Thomas Weber <t.weber@example.com>
Reply-To: t.weber.office@gmail.com
Subject: Dringende Überweisung heute
```

Kopfzeilen sind die technischen Zeilen am Anfang jeder E-Mail. Im Text steht: "Bitte überweisen Sie heute noch 18.400 Euro an diesen neuen Lieferanten. Ich bin im Termin und nicht erreichbar." So läuft der Betrug ab:

1. Der Betrüger sendet die E-Mail von seinem eigenen Server. Im Absenderfeld steht trotzdem `t.weber@example.com`.
2. Sabine sieht den Namen ihres Chefs und die richtige Domain.
3. Die Nachricht drängt zur Eile und verhindert Rückfragen.
4. Antwortet Sabine, geht die Antwort an die Adresse im Feld Reply-To. Das ist die Gmail-Adresse des Betrügers.

Diese Masche heißt in Deutschland oft CEO-Fraud oder Chef-Betrug. Hätte example.com einen DMARC-Eintrag mit `p=reject`, würde ein Mailserver, der DMARC prüft, diese E-Mail ablehnen.

## Warum E-Mail-Spoofing möglich ist

SMTP ist das Protokoll, mit dem Mailserver E-Mails aneinander senden. Ein Protokoll ist eine feste Reihe von Regeln für den Datenaustausch. SMTP stammt aus den frühen 1980er-Jahren. Es prüft die Absenderadresse nicht. Jeder Server kann in das Feld From jede beliebige Adresse schreiben.

Eine E-Mail hat sogar zwei Absenderadressen. Die eine steht im technischen Umschlag und heißt [Return-Path](/glossary/return-path). An sie gehen Bounces. Die andere steht im Feld From, und nur diese sieht der Leser. Beide kann ein Betrüger frei wählen.

Erst später kamen Prüfungen dazu, die Fälschungen erkennen: SPF, DKIM und DMARC. Sie wirken aber nur, wenn die echte Domain sie eingerichtet hat und der empfangende Server sie prüft.

## Woran Sie eine gefälschte E-Mail erkennen

- **Die Antwortadresse ist eine andere.** Klicken Sie auf Antworten und sehen Sie nach, an wen die Antwort geht. Steht dort eine andere Adresse als im Absenderfeld, ist Vorsicht geboten.
- **Die Prüfungen schlagen fehl.** Öffnen Sie die E-Mail in Gmail, klicken Sie auf die drei Punkte und wählen Sie "Original anzeigen". Dort stehen die Ergebnisse für SPF, DKIM und DMARC. FAIL bei DMARC ist ein deutliches Warnzeichen.
- **Die Nachricht drängt.** Sie verlangt eine schnelle Zahlung, ein Passwort oder Bankdaten. Oft heißt es, der Absender sei nicht erreichbar.
- **Der Name stimmt, die Adresse nicht.** Im Absenderfeld steht "Thomas Weber", aber dahinter eine fremde Gmail-Adresse.
- **Die Domain ist fast richtig.** Statt example.com steht dort exampel.com. Das ist streng genommen kein Spoofing, wird aber für dieselben Betrügereien genutzt.

## So schützen Sie Ihre Domain vor Spoofing

Sie können niemanden daran hindern, Ihre Adresse in eine E-Mail zu schreiben. Sie können aber dafür sorgen, dass empfangende Server solche E-Mails erkennen und ablehnen. Dafür brauchen Sie drei Einträge im DNS. Das DNS ist das öffentliche Verzeichnis, in dem die Einstellungen jeder Domain stehen.

1. **[SPF](/glossary/spf)** listet die Server auf, die für Ihre Domain senden dürfen.
2. **[DKIM](/glossary/dkim)** signiert jede E-Mail digital, damit Fälschungen und Änderungen auffallen.
3. **[DMARC](/glossary/dmarc)** verlangt, dass SPF oder DKIM für die Domain im Absenderfeld besteht. Diese Übereinstimmung heißt [DMARC-Alignment](/glossary/dmarc-alignment). Mit `p=reject` bitten Sie empfangende Server, fehlschlagende E-Mails abzulehnen.

Starten Sie DMARC mit `p=none` und stellen Sie Schritt für Schritt auf `reject` um. Erst `reject` stoppt gefälschte E-Mails bei Servern, die Ihrer Regel folgen. Mit [BIMI](/glossary/bimi) können Sie danach Ihr Logo neben Ihren echten E-Mails zeigen.

## Spoofing, Phishing und ähnliche Domains

Diese drei Begriffe werden oft vermischt. Sie meinen verschiedene Dinge:

| Begriff | Was es bedeutet |
| --- | --- |
| Spoofing | Die Absenderadresse ist gefälscht. Sie zeigt eine echte Domain, die dem Betrüger nicht gehört. |
| Phishing | Eine betrügerische E-Mail, die an Passwörter, Bankdaten oder Geld kommen will. Sie kann gespooft sein, muss es aber nicht. |
| Ähnliche Domain | Der Betrüger registriert eine Domain, die fast gleich aussieht, zum Beispiel exampel.com statt example.com. |

Bei einer ähnlichen Domain hilft DMARC nicht. Die Domain gehört wirklich dem Betrüger. Er kann für sie SPF, DKIM und DMARC einrichten, und seine E-Mails bestehen alle Prüfungen. Hier hilft nur genaues Lesen der Adresse.

## Was Sie tun sollten, wenn Sie eine gefälschte E-Mail bekommen

1. Klicken Sie auf keinen Link und öffnen Sie keinen Anhang.
2. Antworten Sie nicht auf die E-Mail.
3. Fragen Sie beim angeblichen Absender nach. Nutzen Sie dafür eine Telefonnummer oder Adresse, die Sie schon kennen, nicht die aus der E-Mail.
4. Melden Sie die E-Mail in Ihrem Postfach als Phishing oder Spam. In einer Firma informieren Sie auch die IT-Abteilung.
5. Haben Sie schon Geld überwiesen, rufen Sie sofort Ihre Bank an und erstatten Sie Anzeige bei der Polizei.

## E-Mail-Spoofing und E-Mail-Verifizierung

Eine Verifizierung schützt nicht vor Spoofing. Der [E-Mail-Checker](/email-checker) zeigt, ob eine Adresse existiert und E-Mails annehmen kann, aber nicht, wer eine bestimmte E-Mail wirklich gesendet hat. Die gefälschte E-Mail von `t.weber@example.com` nutzt eine echte Adresse, die der Checker als gültig erkennen würde. Gegen Spoofing helfen SPF, DKIM und DMARC. Die [E-Mail-Massenprüfung](/bulk-email-verifier) und die [E-Mail-Verifizierung](/) helfen bei etwas anderem: Sie entfernen Adressen, die nicht existieren, aus Ihrer eigenen Liste, damit weniger E-Mails bouncen.
