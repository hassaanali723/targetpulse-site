---
title: Hard Bounce
description: Was ein Hard Bounce ist, welche Codes einen Hard Bounce bedeuten, die zwei Arten von Hard Bounce und was Sie mit jeder Art tun sollten.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: was ist ein hard bounce
short: Ein Hard Bounce ist eine E-Mail, die der empfangende Server dauerhaft abgelehnt hat. Die Adresse existiert nicht, die Domain existiert nicht, oder der Server hat Ihre E-Mail blockiert. Wenn Sie dieselbe E-Mail erneut senden, schlägt sie wieder fehl.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Finden Sie die Adressen, die hard bouncen würden, bevor Sie senden
---

## Was ein Hard Bounce ist

Ein Hard Bounce ist ein dauerhafter Zustellfehler. Der empfangende Server hat Ihre E-Mail abgelehnt und lehnt sie wieder ab, wenn Sie sie erneut senden.

Der E-Mail-Standard RFC 5321 nennt das eine permanente negative Antwort. Der Code in der Bounce-Nachricht beginnt mit 5. Beispiel: `550 5.1.1`. Ein Code, der mit 4 beginnt, ist ein [Soft Bounce](/glossary/soft-bounce). Ein Soft Bounce ist vorübergehend.

## Die zwei Arten von Hard Bounce

Beide Arten erscheinen im Kampagnenbericht als "Hard Bounce". Sie haben unterschiedliche Ursachen und unterschiedliche Lösungen.

**Art 1: Die Adresse ist falsch.** Das Postfach existiert nicht, die Domain existiert nicht, oder die Adresse enthält einen Schreibfehler. Gmail antwortet mit `550 5.1.1 The email account that you tried to reach does not exist`. Microsoft antwortet mit `5.1.1 Bad destination mailbox address`. Eine Adresse, die geschlossen wurde, als ein Mitarbeiter das Unternehmen verlassen hat, gehört ebenfalls in diese Gruppe.

**Art 2: Ihre E-Mail ist blockiert.** Die Adresse ist echt, aber der Server nimmt keine E-Mails von Ihnen an. Diese Codes beginnen mit `5.7`. Gmails `550 5.7.26` bedeutet, dass Ihre Domain nicht authentifiziert ist. Microsofts `5.7.23` bedeutet, dass Ihre E-Mail die SPF-Prüfung nicht bestanden hat. Ihr Versandtool zählt diese Codes als Hard Bounces, weil sie mit 5 beginnen. Aber die Adresse ist in Ordnung. Das Problem ist Ihre E-Mail-Konfiguration.

## Warum Hard Bounces wichtig sind

Mailbox-Provider zählen, wie oft Sie an Adressen senden, die nicht existieren. Viele Hard Bounces zeigen ihnen, dass Ihre Liste nicht geprüft wurde. Amazon SES veröffentlicht seine Grenzen. Es stellt ein Konto bei einer Bounce-Rate von 5 Prozent unter Beobachtung. Bei 10 Prozent kann es das Konto pausieren. Es empfiehlt, unter 2 Prozent zu bleiben.

## Was Sie mit einem Hard Bounce tun sollten

Wenn der Code `5.1.1`, `5.1.2` oder ein anderer Adressfehler ist, entfernen Sie die Adresse jetzt aus Ihrer Liste. Senden Sie nicht mehr an sie. Mailchimp entfernt diese Adressen automatisch aus Ihrer Audience. Amazon rät Absendern, sie "immediately", also sofort, zu entfernen.

Wenn der Code mit `5.7` beginnt, behalten Sie die Adresse. Korrigieren Sie Ihre SPF-, DKIM- und DMARC-Einträge oder Ihre Absenderreputation. Dann senden Sie erneut an dieselbe Adresse.

Die vollständige Tabelle der Codes und der passenden Maßnahmen steht im Leitfaden [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce).

## Wie ein Verifizierer damit umgeht

Ein Verifizierer stellt dem empfangenden Server dieselbe Frage, aber vor dem Versand. Ein [E-Mail-Adressen-Checker](/email-checker) verbindet sich mit dem Mailserver und fragt, ob er E-Mails für genau diese Adresse annimmt. Antwortet der Server mit `550 5.1.1`, markiert der Verifizierer die Adresse als ungültig. Sie entfernen sie vor der Kampagne. Es wurde keine E-Mail gesendet, also bleibt Ihre Reputation unberührt.
