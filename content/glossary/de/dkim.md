---
title: DKIM
description: Was DKIM ist, wie die DKIM-Signatur und der DKIM-Eintrag im DNS funktionieren, wie Sie DKIM einrichten und wie Sie prüfen, ob es klappt.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: dkim
short: DKIM ist eine digitale Signatur, die Ihr Mailserver jeder E-Mail mitgibt. Der empfangende Server prüft sie mit einem öffentlichen Schlüssel im DNS Ihrer Domain. So sieht er, dass die E-Mail wirklich von Ihrer Domain kommt und unterwegs nicht verändert wurde.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: DKIM bestätigt den Absender. Verifizierung bestätigt den Empfänger
---

## Was ist DKIM?

DKIM steht für DomainKeys Identified Mail. Der Standard ist in RFC 6376 definiert. Mit DKIM unterschreibt Ihr Mailserver jede E-Mail digital. Eine digitale Signatur ist eine lange Zeichenfolge. Sie wird aus dem Inhalt der E-Mail und einem geheimen Schlüssel berechnet.

Der empfangende Server prüft mit der Signatur zwei Dinge. Erstens: Die E-Mail kommt von einem Server, der für Ihre Domain senden darf. Zweitens: Niemand hat die E-Mail unterwegs verändert. Eine Domain ist der Name hinter dem @ in einer E-Mail-Adresse, zum Beispiel example.com.

DKIM arbeitet mit zwei Schlüsseln. Der private Schlüssel bleibt geheim auf Ihrem sendenden Server. Mit ihm wird signiert. Der öffentliche Schlüssel steht für alle sichtbar im DNS Ihrer Domain. Mit ihm wird geprüft. Das DNS ist das öffentliche Verzeichnis, in dem die Einstellungen jeder Domain stehen.

## Ein Beispiel: Ein Onlineshop signiert eine Rechnung

Ein Onlineshop hat die Domain example.com. Die Kundin Lena bestellt dort. Sie hat eine Gmail-Adresse. So läuft die DKIM-Prüfung ab:

1. Der Mailserver des Shops erstellt die Rechnungs-E-Mail an Lena.
2. Er berechnet mit dem privaten Schlüssel eine Signatur über den Text und wichtige Kopfzeilen. Kopfzeilen (Header) sind die technischen Zeilen am Anfang jeder E-Mail, etwa Absender, Empfänger und Betreff.
3. Er fügt die Signatur als Kopfzeile `DKIM-Signature` in die E-Mail ein und sendet sie.
4. Gmail empfängt die E-Mail. Es liest in der Signatur, welche Domain signiert hat und wo der Schlüssel liegt.
5. Gmail holt den öffentlichen Schlüssel aus dem DNS von example.com.
6. Gmail rechnet nach. Passt die Signatur zum Inhalt, lautet das Ergebnis DKIM pass.

Hätte jemand unterwegs den Betrag in der Rechnung geändert, würde die Signatur nicht mehr passen. Das Ergebnis wäre dann DKIM fail.

## Die DKIM-Signatur in der E-Mail

Die Kopfzeile `DKIM-Signature` besteht aus mehreren Teilen, die man Tags nennt. Zwei davon sind für das Verständnis am wichtigsten:

- `d=` nennt die Domain, die signiert hat, zum Beispiel `d=example.com`.
- `s=` nennt den Selector, zum Beispiel `s=s2026a`. Der Selector ist ein frei gewählter Name für den Schlüssel.

Eine Domain kann mehrere DKIM-Schlüssel haben, jeden unter einem eigenen Selector. So kann zum Beispiel der Newsletter-Dienst einen Schlüssel nutzen und der eigene Mailserver einen anderen. Die übrigen Tags enthalten die eigentliche Signatur und die Liste der signierten Kopfzeilen. Diese Teile erzeugt der Server automatisch.

## Der DKIM-Eintrag im DNS

Der öffentliche Schlüssel steht in einem [DNS-TXT-Eintrag](/glossary/dns-txt-record). Ein TXT-Eintrag ist ein DNS-Eintrag, der einfachen Text enthält. Der Name des DKIM-Eintrags setzt sich aus Selector, dem Wort `_domainkey` und Ihrer Domain zusammen:

```
s2026a._domainkey.example.com
```

Der Wert des Eintrags sieht so aus. Der Schlüssel hinter `p=` ist hier gekürzt:

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` zeigt, dass es ein DKIM-Eintrag ist.
- `k=rsa` nennt das Verfahren des Schlüssels. RSA ist der Standard.
- `p=` enthält den öffentlichen Schlüssel.

Der private Schlüssel gehört nie ins DNS. Er bleibt auf dem sendenden Server. Als Schlüssellänge sind 2048 Bit die sichere Wahl. Gmail verlangt mindestens 1024 Bit und empfiehlt 2048 Bit. RFC 8301 schreibt mindestens 1024 Bit vor und empfiehlt ebenfalls 2048 Bit.

## Warum DKIM wichtig ist

- **DKIM übersteht Weiterleitungen.** Leitet jemand eine E-Mail weiter, sendet ein anderer Server sie weiter. [SPF](/glossary/spf) schlägt dann oft fehl, weil dieser Server nicht in Ihrem SPF-Eintrag steht. Die DKIM-Signatur reist in der E-Mail mit und bleibt meist gültig. Mailinglisten, die eine Fußzeile anhängen, können sie aber ungültig machen.
- **DMARC baut auf DKIM auf.** [DMARC](/glossary/dmarc) verlangt, dass SPF oder DKIM für die Domain im Absenderfeld besteht. Laut dem DMARC-Standard darf sich eine Domain mit der Richtlinie `p=reject` nicht allein auf SPF verlassen.
- **Große Mailbox-Provider verlangen DKIM.** Googles Absenderrichtlinien verlangen SPF, DKIM und DMARC von Absendern mit 5.000 oder mehr E-Mails pro Tag an Gmail. Microsoft verlangt seit dem 5. Mai 2025 dasselbe für Outlook.com, Hotmail und Live.

## So richten Sie DKIM ein

Wie Sie DKIM einrichten, hängt davon ab, wer Ihre E-Mails sendet.

- **Sie nutzen einen Dienst wie Google Workspace, Microsoft 365, Mailchimp oder Brevo.** Der Dienst erzeugt den Schlüssel selbst. Er zeigt Ihnen einen oder mehrere DNS-Einträge, die Sie bei Ihrem DNS-Anbieter anlegen. Das ist meist die Firma, bei der Sie Ihre Domain gekauft haben. Danach schalten Sie DKIM im Dienst ein.
- **Sie betreiben einen eigenen Mailserver.** Dann erzeugen Sie das Schlüsselpaar selbst. Unser [DKIM-Generator](/dkim-generator) (auf Englisch) erstellt das Schlüsselpaar und den fertigen TXT-Eintrag in Ihrem Browser. Den privaten Schlüssel tragen Sie in die DKIM-Einstellungen Ihres Servers ein, mit demselben Selector wie im DNS.

## So prüfen Sie, ob DKIM funktioniert

1. Senden Sie eine E-Mail von Ihrer Domain an ein privates Gmail-Konto.
2. Öffnen Sie die E-Mail in Gmail im Browser.
3. Klicken Sie oben rechts in der E-Mail auf die drei Punkte und wählen Sie "Original anzeigen".
4. Oben in der Übersicht steht eine Zeile für DKIM. Dort sollte PASS stehen, zusammen mit Ihrer Domain.

Steht dort FAIL oder fehlt die Zeile, prüfen Sie zwei Dinge. Ist der DNS-Eintrag schon veröffentlicht? Und stimmt der Selector auf dem Server genau mit dem Namen im DNS überein?

## DKIM und E-Mail-Verifizierung

DKIM und Verifizierung prüfen verschiedene Seiten einer E-Mail. DKIM zeigt dem Empfänger, dass eine E-Mail wirklich von Ihrer Domain kommt, aber nicht, ob die Empfängeradresse existiert. Eine korrekt signierte E-Mail an ein gelöschtes Postfach bounct trotzdem. Mit dem [E-Mail-Prüfer](/email-checker) oder der [E-Mail-Massenprüfung](/bulk-email-verifier) finden Sie solche Adressen vor dem Versand. Zusammen sorgen DKIM und [E-Mail-Verifizierung](/) dafür, dass Ihre E-Mails echt sind und an Postfächer gehen, die es gibt.
