---
title: SMTP
description: Was SMTP ist, wie ein SMTP-Server eine E-Mail zustellt, wofür die Ports 25, 587 und 465 da sind und was SMTP-Fehler bedeuten. Mit Beispiel.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: smtp
short: SMTP ist das Regelwerk, mit dem Mailserver E-Mails aneinander senden. Jede E-Mail, die Sie abschicken, wird per SMTP von Server zu Server weitergegeben. Zum Lesen von E-Mails dienen andere Verfahren, nämlich IMAP und POP3.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Prüfen Sie per SMTP, ob ein Postfach existiert, ohne eine E-Mail zu senden
---

## Was ist SMTP?

SMTP steht für Simple Mail Transfer Protocol. Ein Protokoll ist eine feste Reihe von Regeln, an die sich zwei Computer beim Austausch von Daten halten. SMTP legt fest, wie ein Mailserver einem anderen Mailserver eine E-Mail übergibt. Ein Mailserver ist ein Computer, der rund um die Uhr läuft und E-Mails sendet oder empfängt.

Der aktuelle Standard für SMTP ist RFC 5321. Ein RFC ist ein öffentliches Dokument, in dem Internetstandards festgehalten werden. Gmail, Outlook, Yahoo und jeder Firmen-Mailserver halten sich an diese Regeln. Nur deshalb kommt eine E-Mail aus Gmail auch bei einer Firma an, die Microsoft nutzt.

## Ein Beispiel: So reist eine E-Mail per SMTP

Anna hat ein Gmail-Konto. Sie schreibt an Jonas, der bei einer Firma mit der Domain firma-beispiel.de arbeitet. Eine Domain ist der Name hinter dem @ in einer E-Mail-Adresse. Die Firma von Jonas nutzt Microsoft Outlook. So läuft der Versand ab:

1. Anna klickt auf Senden. Die Gmail-App übergibt die E-Mail an den Postausgangsserver von Gmail.
2. Der Gmail-Server fragt im DNS nach, welcher Server E-Mails für firma-beispiel.de annimmt. Das DNS ist das öffentliche Verzeichnis des Internets. Die Antwort steht im [MX-Eintrag](/glossary/mx-record) der Domain.
3. Der Gmail-Server baut eine Verbindung zum Mailserver von Microsoft auf.
4. Die beiden Server führen ein kurzes SMTP-Gespräch. Gmail nennt den Absender und den Empfänger. Microsoft antwortet nach jedem Schritt mit einem Zahlencode.
5. Microsoft nimmt die E-Mail an und legt sie in das Postfach von Jonas.
6. Jonas öffnet Outlook und liest die E-Mail. Für das Lesen ist SMTP nicht mehr zuständig.

Das Gespräch aus Schritt 4 sieht vereinfacht so aus. Die Zeilen ohne Zahl sendet der Gmail-Server. Die Zeilen mit Zahl sind die Antworten des Servers von Microsoft.

```
EHLO server.gmail.example
250 OK
MAIL FROM:<anna@gmail.com>
250 OK
RCPT TO:<jonas@firma-beispiel.de>
250 OK
DATA
354 Start mail input
(Betreff und Text der E-Mail)
250 OK
QUIT
```

`MAIL FROM` nennt den Absender. `RCPT TO` nennt den Empfänger. Nach `DATA` folgt die eigentliche E-Mail. `QUIT` beendet die Verbindung.

## Was ein SMTP-Server ist

Ein SMTP-Server ist ein Server, der E-Mails per SMTP sendet oder für eine Domain annimmt. Wenn Sie in einem E-Mail-Programm ein Konto einrichten, fragt es meist nach dem SMTP-Server für den Postausgang. Bei Gmail heißt dieser Server smtp.gmail.com. Ihr Programm gibt jede neue E-Mail an diesen Server. Der Server übernimmt dann die Zustellung, wie im Beispiel oben.

Auch Versanddienste für Newsletter betreiben SMTP-Server. Ein solcher [E-Mail-Service-Provider](/glossary/esp) sendet E-Mails im Auftrag seiner Kunden. Die Software, die auf einem Mailserver E-Mails annimmt und weitergibt, heißt [Mail Transfer Agent](/glossary/mta).

## SMTP-Ports: 25, 587 und 465

Ein Port ist eine Nummer, über die ein Server einen bestimmten Dienst anbietet. Für SMTP gibt es drei übliche Ports:

| Port | Wofür er genutzt wird |
| --- | --- |
| 25 | Server zu Server. Über diesen Port geben Mailserver E-Mails aneinander weiter. |
| 587 | Einlieferung. Ihr E-Mail-Programm oder Ihre App gibt hier eine E-Mail an den Postausgangsserver. Die Verbindung wird mit STARTTLS verschlüsselt. |
| 465 | Einlieferung mit Verschlüsselung von Anfang an. |

STARTTLS bedeutet, dass die Verbindung unverschlüsselt beginnt und dann auf Verschlüsselung umgestellt wird. Bei Port 465 ist die Verbindung ab dem ersten Moment verschlüsselt. Viele Internetanbieter sperren Port 25 für private Anschlüsse. Deshalb nutzen E-Mail-Programme für den Postausgang Port 587 oder 465.

## SMTP, IMAP und POP3: Senden und Lesen

SMTP ist nur für das Senden zuständig. Zum Lesen von E-Mails gibt es zwei andere Protokolle:

- **IMAP** lässt Ihre E-Mails auf dem Server. Sie sehen dieselben E-Mails auf dem Handy und auf dem Laptop.
- **POP3** lädt E-Mails auf ein Gerät herunter. Je nach Einstellung werden sie danach auf dem Server gelöscht.

In einem E-Mail-Programm tragen Sie deshalb meist zwei Server ein. Der eine ist für den Posteingang, mit IMAP oder POP3. Der andere ist für den Postausgang, mit SMTP.

## Wenn der Server Nein sagt: SMTP-Fehlercodes

Bei jedem Schritt antwortet der empfangende Server mit einem dreistelligen Code. Die erste Ziffer zeigt, wie die Antwort gemeint ist:

- **2xx** bedeutet Erfolg. Beispiel: `250 OK`.
- **4xx** bedeutet einen vorübergehenden Fehler. Der sendende Server versucht es später noch einmal. Ein Beispiel dafür ist [Greylisting](/glossary/greylisting).
- **5xx** bedeutet einen dauerhaften Fehler. Ein neuer Versuch scheitert wieder.

Antwortet Microsoft im Beispiel auf `RCPT TO` mit `550 5.1.1`, gibt es das Postfach von Jonas nicht. Anna bekommt dann eine Bounce-Nachricht, also eine Meldung über die gescheiterte Zustellung. Das ist ein [Hard Bounce](/glossary/hard-bounce). Was die einzelnen Codes bedeuten, erklärt der Eintrag zu [SMTP-Fehlercodes](/glossary/smtp-error-codes).

## SMTP und E-Mail-Verifizierung

Eine E-Mail-Verifizierung nutzt genau dieses SMTP-Gespräch, bricht es aber vor `DATA` ab. Der Prüfdienst verbindet sich mit dem Mailserver der Domain und nennt bei `RCPT TO` die Adresse, die Sie prüfen wollen. Antwortet der Server mit 550, gibt es das Postfach nicht, und es wurde keine E-Mail gesendet. So arbeitet unser Tool, wenn Sie eine [E-Mail-Adresse prüfen](/email-checker), und die [E-Mail-Massenprüfung](/bulk-email-verifier) macht dasselbe für eine ganze Liste. Mit [E-Mail-Verifizierung](/) finden Sie tote Adressen also vor dem Versand, und weniger E-Mails bouncen.
