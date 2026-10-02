---
title: Mailer-Daemon
description: Was eine Mailer-Daemon-Nachricht ist, wie Sie den Code darin lesen und was Sie tun, wenn sie zu einer E-Mail gehört, die Sie nie gesendet haben.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: Der Mailer-Daemon ist der Teil eines Mailservers, der automatische Nachrichten sendet. Die meisten dieser Nachrichten sind Bounce-Meldungen. Eine Nachricht vom Mailer-Daemon bedeutet, dass eine von Ihnen gesendete E-Mail nicht zugestellt wurde.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Entfernen Sie die Adressen, die bouncen, bevor Sie senden
---

## Was ein Mailer-Daemon ist

Ein Daemon ist ein Programm, das auf einem Server im Hintergrund läuft. Der Mailer-Daemon ist das Programm, das E-Mails behandelt, die nicht zugestellt werden können. Wird Ihre E-Mail abgelehnt, schickt Ihnen der Mailer-Daemon eine Meldung. Der Absendername ist meist `MAILER-DAEMON@` gefolgt von der Domain des Servers, oder `postmaster@`.

Die Meldung heißt [Unzustellbarkeitsbericht](/glossary/ndr). Sie sagt Ihnen, welche Adresse fehlgeschlagen ist, wann sie fehlgeschlagen ist und warum.

## Wie Sie die Nachricht lesen

Der wichtige Teil der Nachricht ist der Code. Suchen Sie nach einer dreistelligen Zahl und einer Zahl mit Punkten. Beispiel: `550 5.1.1`.

- Ein Code, der mit **5** beginnt, ist ein [Hard Bounce](/glossary/hard-bounce). Die Adresse existiert nicht, oder der Server hat Ihre E-Mail blockiert. Senden Sie nicht erneut, bis Sie wissen, welcher Fall vorliegt.
- Ein Code, der mit **4** beginnt, ist ein [Soft Bounce](/glossary/soft-bounce). Das Postfach ist voll oder der Server ist ausgelastet. Ihr Mailserver versucht es von selbst erneut.

Den Text neben dem Code schreibt der empfangende Server. Zwei Beispiele:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Die Microsoft-Dokumentation sagt, das bedeutet "the recipient's address doesn't exist", die Adresse des Empfängers existiert nicht.

## Mailer-Daemon-Nachrichten für E-Mails, die Sie nicht gesendet haben

Manchmal bekommen Sie eine Bounce-Meldung für eine E-Mail, die Sie nie gesendet haben. Das nennt man [Backscatter](/glossary/backscatter). Ein Spammer hat Ihre Adresse in das Von-Feld seiner E-Mails gesetzt. Wenn diese E-Mails bouncen, gehen die Meldungen an Sie.

Ihr Konto wurde nicht gehackt. Die Lösung liegt bei Ihrer Domain. Veröffentlichen Sie SPF-, DKIM- und DMARC-Einträge. Dann können empfangende Server die gefälschten E-Mails ablehnen, statt Ihnen Bounce-Meldungen zu schicken.

## Warum es für Absender wichtig ist

Jede Mailer-Daemon-Nachricht ist ein Bounce. Mailbox-Provider zählen, wie viele Ihrer E-Mails an Adressen gehen, die nicht existieren. Viele `5.1.1`-Meldungen zeigen ihnen, dass Sie Ihre Liste nicht geprüft haben.

## Wie ein Verifizierer hilft

Ein [E-Mail-Adressen-Checker](/email-checker) fragt den empfangenden Server, ob er E-Mails für eine Adresse annimmt. Er tut das, bevor Sie etwas senden. Der Server gibt denselben Code, den der Mailer-Daemon Ihnen später schicken würde. Der Unterschied ist, dass keine E-Mail gesendet wurde und Ihre Reputation unberührt bleibt.
