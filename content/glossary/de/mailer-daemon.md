---
title: Mailer-Daemon
description: Was eine Mailer-Daemon-Nachricht ist, wie Sie den Code darin lesen und was Sie tun, wenn sie zu einer E-Mail gehört, die Sie nie gesendet haben.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: Der Mailer-Daemon ist ein Programm auf einem Mailserver, das automatische Nachrichten sendet. Die meisten dieser Nachrichten sind Bounce-Meldungen über E-Mails, die nicht zugestellt wurden. Eine Nachricht vom Mailer-Daemon bedeutet, dass eine von Ihnen gesendete E-Mail nicht angekommen ist.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Entfernen Sie die Adressen, die bouncen, bevor Sie senden
---

## Was ist ein Mailer-Daemon?

Ein Mailer-Daemon ist ein Programm, das sich um E-Mails kümmert, die nicht zugestellt werden können. Kommt Ihre E-Mail nicht an, schickt es Ihnen automatisch eine Meldung.

Ein paar Begriffe vorab:

- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Ein **Daemon** ist ein Programm, das auf einem Server im Hintergrund läuft. Niemand muss es von Hand starten.
- Eine **Domain** ist der Teil einer E-Mail-Adresse nach dem @, zum Beispiel example.com.
- Ein **Bounce** ist eine E-Mail, die als unzustellbar zu Ihnen zurückkommt.

Der Mailer-Daemon ist also das Hintergrundprogramm, das auf dem Mailserver E-Mails behandelt, die nicht zugestellt werden können. Wird Ihre E-Mail abgelehnt, schickt Ihnen der Mailer-Daemon eine Meldung. Der Absendername ist meist `MAILER-DAEMON@` gefolgt von der Domain des Servers, oder `postmaster@`.

Die Meldung heißt [Unzustellbarkeitsbericht](/glossary/ndr). Sie sagt Ihnen, welche Adresse fehlgeschlagen ist, wann sie fehlgeschlagen ist und warum.

## Ein einfaches Beispiel

1. Martin schreibt einem neuen Kunden an kunde@example.com. Er vertippt sich und schreibt kundee@example.com.
2. Martins Mailserver gibt die E-Mail an den Server von example.com weiter.
3. Der Server von example.com antwortet: Dieses Postfach gibt es nicht.
4. Kurz danach findet Martin eine neue E-Mail im Posteingang. Der Absender ist MAILER-DAEMON@mail.martins-firma.example.
5. In der Meldung steht der Code `550 5.1.1`. Er bedeutet, dass die Adresse nicht existiert.
6. Martin korrigiert den Tippfehler und sendet die E-Mail erneut. Diesmal kommt sie an.

Die Nachricht vom Mailer-Daemon war hier hilfreich. Sie hat Martin den Fehler gezeigt.

## Wie Sie die Nachricht lesen

Der wichtige Teil der Nachricht ist der Code. Man nennt ihn SMTP-Code, weil SMTP das Verfahren ist, mit dem Mailserver E-Mails austauschen. Suchen Sie nach einer dreistelligen Zahl und einer Zahl mit Punkten. Beispiel: `550 5.1.1`.

- Ein Code, der mit **5** beginnt, ist ein [Hard Bounce](/glossary/hard-bounce). Die Adresse existiert nicht, oder der Server hat Ihre E-Mail blockiert. Senden Sie nicht erneut, bis Sie wissen, welcher Fall vorliegt.
- Ein Code, der mit **4** beginnt, ist ein [Soft Bounce](/glossary/soft-bounce). Das Postfach ist voll oder der Server ist ausgelastet. Ihr Mailserver versucht es von selbst erneut.

Den Text neben dem Code schreibt der empfangende Server. Das ist der Server, der die E-Mails für die Adresse Ihres Empfängers annimmt. Zwei Beispiele:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Die Microsoft-Dokumentation sagt, das bedeutet "the recipient's address doesn't exist". Die Adresse des Empfängers existiert also nicht.

## Mailer-Daemon-Nachrichten für E-Mails, die Sie nicht gesendet haben

Manchmal bekommen Sie eine Bounce-Meldung für eine E-Mail, die Sie nie gesendet haben. Das nennt man [Backscatter](/glossary/backscatter).

**Beispiel:** Ein Spammer setzt Ihre Adresse info@ihre-firma.example in das Von-Feld seiner E-Mails. Er sendet sehr viele davon an Adressen, die es nicht gibt. Diese E-Mails bouncen. Die Server schicken die Meldungen an die Adresse im Von-Feld, also an Sie. Ihr Posteingang füllt sich mit Nachrichten vom Mailer-Daemon.

Ihr Konto wurde nicht gehackt. Die Lösung liegt bei Ihrer Domain. Veröffentlichen Sie SPF-, DKIM- und DMARC-Einträge. Das sind Einträge im DNS, dem öffentlichen Verzeichnis mit den Einstellungen jeder Domain. Mit ihnen können empfangende Server prüfen, ob eine E-Mail wirklich von Ihrer Domain kommt. Dann können sie die gefälschten E-Mails ablehnen, statt Ihnen Bounce-Meldungen zu schicken.

## Warum es für Absender wichtig ist

Jede Mailer-Daemon-Nachricht ist ein Bounce. Mailbox-Provider zählen, wie viele Ihrer E-Mails an Adressen gehen, die nicht existieren. Mailbox-Provider sind Anbieter von E-Mail-Postfächern, zum Beispiel Gmail oder Outlook.com. Viele `5.1.1`-Meldungen zeigen ihnen, dass Sie Ihre Liste nicht geprüft haben.

**Beispiel:** Ein Verein sendet seinen Newsletter an eine alte Liste mit 3.000 Adressen. Danach findet er 200 Meldungen vom Mailer-Daemon im Posteingang. Fast alle enthalten `5.1.1`. Jede dieser 200 Adressen sollte er sofort aus der Liste entfernen.

## Wie ein Verifizierer hilft

Wenn Sie eine [E-Mail-Adresse prüfen](/email-checker), fragt das Tool den empfangenden Server, ob er E-Mails für diese Adresse annimmt. Es tut das, bevor Sie etwas senden. Der Server gibt denselben Code, den der Mailer-Daemon Ihnen später schicken würde. Der Unterschied ist, dass keine E-Mail gesendet wurde und Ihre Reputation unberührt bleibt. Die Reputation ist die Bewertung, die Provider Ihnen als Absender geben.

Mit der [E-Mail-Massenprüfung](/bulk-email-verifier) prüfen Sie so eine ganze Liste. [E-Mail-Verifizierung](/) verhindert keine Backscatter-Meldungen. Sie verhindert aber Bounces an Adressen, die es nicht gibt.
