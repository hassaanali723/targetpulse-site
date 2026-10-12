---
title: Hard Bounce
description: Was ein Hard Bounce ist, welche Codes einen Hard Bounce bedeuten, die zwei Arten von Hard Bounce und was Sie mit jeder Art tun sollten.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: was ist ein hard bounce
short: Was ist ein Hard Bounce? Es ist eine E-Mail, die der empfangende Server dauerhaft ablehnt, weil die Adresse oder die Domain nicht existiert oder weil er Ihre E-Mail blockiert. Senden Sie dieselbe E-Mail erneut, schlägt sie wieder fehl.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Finden Sie die Adressen, die hard bouncen würden, bevor Sie senden
---

## Was ist ein Hard Bounce?

Ein Hard Bounce ist ein dauerhafter Zustellfehler. Ihre E-Mail kommt nicht an. Sie wird auch beim nächsten Versuch nicht ankommen.

Ein paar Begriffe vorab:

- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Der **empfangende Server** ist der Mailserver, der die E-Mails für die Adresse Ihres Empfängers annimmt.
- Ein **Bounce** ist eine E-Mail, die als unzustellbar zu Ihnen zurückkommt.

Bei einem Hard Bounce lehnt der empfangende Server Ihre E-Mail ab. Er lehnt sie wieder ab, wenn Sie sie erneut senden.

Der E-Mail-Standard RFC 5321 nennt das eine permanente negative Antwort. Ein RFC ist ein öffentliches Dokument, das einen Internetstandard festlegt. Die Antwort des Servers enthält einen Code. Man nennt ihn SMTP-Code, weil SMTP das Verfahren ist, mit dem Mailserver E-Mails austauschen. Bei einem Hard Bounce beginnt der Code mit 5. Beispiel: `550 5.1.1`.

Ein Code, der mit 4 beginnt, ist ein [Soft Bounce](/glossary/soft-bounce). Ein Soft Bounce ist vorübergehend.

## Ein einfaches Beispiel

1. Tom arbeitet im Marketing einer kleinen Firma. Er sendet einen Newsletter an 2.000 Kunden.
2. Die Kundin Julia hat sich vor drei Jahren mit julia@alte-agentur.example angemeldet. Sie hat die Agentur inzwischen verlassen. Ihr Postfach wurde gelöscht.
3. Toms Mailserver liefert die E-Mail beim Server von alte-agentur.example ab.
4. Der Server antwortet mit `550 5.1.1`. Das bedeutet: Dieses Postfach gibt es nicht.
5. Tom bekommt eine Bounce-Nachricht. Sein Versandtool zählt einen Hard Bounce.
6. Sendet Tom nächste Woche wieder an Julias Adresse, passiert genau dasselbe.

Die richtige Reaktion: Tom entfernt die Adresse sofort aus seiner Liste.

## Die zwei Arten von Hard Bounce

Beide Arten erscheinen im Kampagnenbericht als "Hard Bounce". Der Kampagnenbericht ist die Übersicht, die Ihr Versandtool nach einem Versand zeigt. Die zwei Arten haben unterschiedliche Ursachen und unterschiedliche Lösungen.

### Art 1: Die Adresse ist falsch

Das Postfach existiert nicht, die Domain existiert nicht, oder die Adresse enthält einen Schreibfehler. Die Domain ist der Teil einer Adresse nach dem @, zum Beispiel example.com.

So antworten zwei große Anbieter:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.1.1 Bad destination mailbox address`

**Beispiel:** Jemand tippt bei der Anmeldung max.mustre@example.com statt max.muster@example.com. Das Postfach mit dem Tippfehler gibt es nicht. Jede E-Mail daran wird ein Hard Bounce.

Eine Adresse, die geschlossen wurde, als ein Mitarbeiter das Unternehmen verlassen hat, gehört ebenfalls in diese Gruppe. Julias Adresse aus dem Beispiel oben ist so ein Fall.

### Art 2: Ihre E-Mail ist blockiert

Die Adresse ist echt. Aber der Server nimmt keine E-Mails von Ihnen an. Diese Codes beginnen mit `5.7`.

- Gmails `550 5.7.26` bedeutet, dass Ihre Domain nicht authentifiziert ist. Authentifiziert heißt: Ihre Domain beweist mit Einträgen wie SPF, DKIM und DMARC, dass die E-Mail wirklich von Ihnen kommt.
- Microsofts `5.7.23` bedeutet, dass Ihre E-Mail die SPF-Prüfung nicht bestanden hat.

Ihr Versandtool zählt diese Codes als Hard Bounces, weil sie mit 5 beginnen. Aber die Adresse ist in Ordnung. Das Problem ist Ihre E-Mail-Konfiguration.

**Beispiel:** Eine Firma wechselt ihr Newsletter-Tool. Sie vergisst, ihren SPF-Eintrag anzupassen. Danach lehnt Microsoft viele ihrer E-Mails mit `5.7.23` ab. Die Empfänger gibt es alle. Die Firma muss ihre Einstellungen korrigieren, nicht ihre Liste.

## Warum Hard Bounces wichtig sind

Mailbox-Provider zählen, wie oft Sie an Adressen senden, die nicht existieren. Mailbox-Provider sind Anbieter von E-Mail-Postfächern, zum Beispiel Gmail oder Outlook.com. Viele Hard Bounces zeigen ihnen, dass Ihre Liste nicht geprüft wurde.

Amazon SES ist ein E-Mail-Versanddienst von Amazon. Er veröffentlicht seine Grenzen für die Bounce-Rate. Die Bounce-Rate ist der Anteil Ihrer E-Mails, die bouncen.

| Bounce-Rate | Was Amazon SES tut |
|---|---|
| unter 2 Prozent | empfohlener Bereich |
| 5 Prozent | stellt das Konto unter Beobachtung |
| 10 Prozent | kann das Konto pausieren |

Ein Rechenbeispiel: Bei 1.000 gesendeten E-Mails und 50 Bounces liegt die Bounce-Rate bei 5 Prozent.

## Was Sie mit einem Hard Bounce tun sollten

Schauen Sie zuerst auf den Code in der Bounce-Nachricht.

1. **Der Code ist `5.1.1`, `5.1.2` oder ein anderer Adressfehler.** Entfernen Sie die Adresse jetzt aus Ihrer Liste. Senden Sie nicht mehr an sie. Mailchimp entfernt diese Adressen automatisch aus Ihrer Audience. Amazon rät Absendern, sie "immediately", also sofort, zu entfernen.
2. **Der Code beginnt mit `5.7`.** Behalten Sie die Adresse. Korrigieren Sie Ihre SPF-, DKIM- und DMARC-Einträge oder Ihre Absenderreputation. Dann senden Sie erneut an dieselbe Adresse.

Die vollständige Tabelle der Codes und der passenden Maßnahmen steht im Leitfaden [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce).

## Wie ein Verifizierer damit umgeht

Ein Verifizierer stellt dem empfangenden Server dieselbe Frage, aber vor dem Versand. Wenn Sie eine [E-Mail-Adresse prüfen](/email-checker), verbindet sich das Tool mit dem Mailserver. Es fragt, ob der Server E-Mails für genau diese Adresse annimmt. Antwortet der Server mit `550 5.1.1`, markiert der Verifizierer die Adresse als ungültig. Sie entfernen sie vor der Kampagne. Es wurde keine E-Mail gesendet, also bleibt Ihre Reputation unberührt.

Für eine ganze Liste gibt es die [E-Mail-Massenprüfung](/bulk-email-verifier). So hilft [E-Mail-Verifizierung](/) gegen Hard Bounces der ersten Art. Gegen Blockaden der zweiten Art hilft sie nicht, denn dort liegt das Problem in Ihren eigenen Einstellungen.
