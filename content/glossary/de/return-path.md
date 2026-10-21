---
title: Return-Path
description: Was die Return-Path-Adresse ist, wie sie sich von der Absenderadresse unterscheidet, wohin Bounce-Meldungen gehen und warum SPF und DMARC sie prüfen. Mit einem einfachen Beispiel.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: Der Return-Path ist die Adresse, an die Bounce-Meldungen gehen. Der sendende Server legt sie fest, und sie weicht oft von der Absenderadresse ab, die Sie im Posteingang sehen. SPF prüft die Domain im Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Entfernen Sie tote Adressen, bevor sie bouncen
---

## Was ist der Return-Path?

Der Return-Path ist die Adresse, an die Bounce-Meldungen gehen. Eine Bounce-Meldung ist die automatische Nachricht, die ein Server sendet, wenn eine E-Mail nicht zugestellt werden kann.

Jede E-Mail hat zwei Absenderadressen. Die erste ist die **Von-Adresse** (From). Das ist der Name und die Adresse, die der Leser in seinem Posteingang sieht. Die zweite ist der **Return-Path**. Leser sehen ihn nicht. Mailserver nutzen ihn.

Denken Sie an einen Brief aus Papier. Auf dem Brief im Umschlag steht oben Ihr Name. Das ist die Von-Adresse. Auf dem Umschlag steht in der Ecke eine Absenderadresse. Die Post nutzt sie nur, wenn sie den Brief nicht zustellen kann. Das ist der Return-Path.

Der Return-Path heißt auch Envelope Sender (Umschlag-Absender) oder Bounce-Adresse. Der sendende Server übergibt ihn zu Beginn der Zustellung an den empfangenden Server. Der empfangende Server schreibt ihn dann in eine Zeile oben in der E-Mail, die mit `Return-Path:` beginnt.

## Ein einfaches Beispiel

So funktioniert der Return-Path, wenn eine E-Mail als Bounce zurückkommt.

1. **Tom sendet einen Newsletter.** Tom hat eine Bäckerei. Er sendet jeden Monat einen Newsletter über einen E-Mail-Service-Provider. Ein Provider ist eine Firma, die Massen-E-Mails für Sie versendet.
2. **Zwei Adressen werden festgelegt.** Die Von-Adresse ist tom@bakery.example. Der Provider setzt den Return-Path auf seine eigene Bounce-Adresse, zum Beispiel bounces@mail.provider.example.
3. **Eine Kundin ist weg.** Eine Kundin auf der Liste hat den Job gewechselt. Ihre alte Adresse gibt es nicht mehr.
4. **Der Bounce geht an den Return-Path.** Der empfangende Server sendet die Bounce-Meldung an bounces@mail.provider.example, nicht an Tom.
5. **Der Provider reagiert.** Der Provider liest den Bounce und sendet nicht mehr an diese Adresse. Tom sieht die Meldung nie.

Deshalb kommen Bounces von Newslettern oft nicht in Ihrem eigenen Posteingang an. Sie gehen an den Return-Path, und Ihr Provider kümmert sich darum.

## Return-Path und Von-Adresse im Vergleich

| | Von-Adresse | Return-Path |
|---|---|---|
| **Wer sie sieht** | Der Leser, in seinem Posteingang | Mailserver |
| **Wer sie festlegt** | Sie oder Ihr E-Mail-Programm | Der sendende Server |
| **Wofür sie da ist** | Zeigen, wer die E-Mail gesendet hat | Bounce-Meldungen empfangen |
| **Von SPF geprüft** | Nein | Ja |

Die beiden Adressen können gleich sein. Wenn Sie eine normale E-Mail aus Gmail oder Outlook senden, sind sie es meist. Wenn Sie über einen Provider senden, sind sie meist verschieden.

## So finden Sie den Return-Path einer E-Mail

Öffnen Sie die vollständigen Header der E-Mail. In Gmail öffnen Sie die E-Mail, klicken auf die drei Punkte und wählen **Original anzeigen**. In Outlook öffnen Sie die Eigenschaften der Nachricht. Suchen Sie oben nach einer Zeile wie dieser:

`Return-Path: <bounces@mail.provider.example>`

## Warum er für SPF und DMARC wichtig ist

[SPF](/glossary/spf) ist eine Regel auf Ihrer Domain, die die Server auflistet, die Ihre E-Mails senden dürfen. SPF prüft die Domain im Return-Path. Die Von-Adresse prüft SPF nicht.

[DMARC](/glossary/dmarc) fügt eine zweite Prüfung hinzu. Es fragt, ob die Domain, die SPF bestanden hat, zur Domain in der Von-Adresse passt. Nutzt Ihr Provider seine eigene Return-Path-Domain, kann SPF für den Provider bestehen. Die Domain passt dann aber nicht zu Ihrer Von-Domain.

Bei vielen Providern können Sie einen Return-Path auf Ihrer eigenen Domain einrichten. Das nennt man oft eine eigene Bounce-Domain (Custom Bounce Domain). Damit besteht SPF für Ihre eigene Domain, und DMARC kann dieses Ergebnis zählen.

**Beispiel:** Toms Von-Adresse liegt auf bakery.example. Sein Provider lässt ihn den Return-Path auf bounces.bakery.example setzen. Jetzt passt die Domain, die SPF besteht, zur Domain in der Von-Adresse.

## Wie ein Verifizierer hilft

Jeder Bounce von Ihrer Liste geht an den Return-Path. Ihr Provider zählt sie. Kommen zu viele zurück, sperren viele Provider das Konto vorübergehend oder bitten Sie, die Liste zu bereinigen.

Ein [E-Mail-Checker](/email-checker) fragt den empfangenden Server, ob eine Adresse existiert, bevor Sie etwas senden. Tote Adressen werden vorher entfernt. So erreichen viel weniger Bounces den Return-Path.
