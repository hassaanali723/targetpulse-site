---
title: Soft Bounce
description: Was ein Soft Bounce ist, die häufigen Ursachen mit ihren Codes, wie lange Versandtools es erneut versuchen und wann Sie eine Adresse entfernen sollten.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Ein Soft Bounce ist eine E-Mail, die wegen eines vorübergehenden Problems diesmal nicht angekommen ist. Die Adresse ist echt. Das Postfach ist zum Beispiel voll, der Server ist ausgelastet, oder der Server bittet Sie, es später erneut zu versuchen.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Sehen Sie vor dem Versand, welche Ihrer Adressen echt sind
---

## Was ist ein Soft Bounce?

Ein Soft Bounce ist ein vorübergehender Zustellfehler. Ihre E-Mail ist diesmal nicht angekommen. Die Adresse gibt es aber, und ein späterer Versuch kann klappen.

Ein paar Begriffe vorab:

- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Der **empfangende Server** ist der Mailserver, der die E-Mails für die Adresse Ihres Empfängers annimmt.
- Ein **Bounce** ist eine E-Mail, die als unzustellbar zu Ihnen zurückkommt.

Bei einem Soft Bounce stellt der empfangende Server Ihre E-Mail diesmal nicht zu. Er erlaubt Ihnen aber, es später erneut zu versuchen.

Der E-Mail-Standard RFC 5321 nennt das eine vorübergehende negative Antwort. Ein RFC ist ein öffentliches Dokument, das einen Internetstandard festlegt. Die Antwort des Servers enthält einen Code. Bei einem Soft Bounce beginnt der Code mit 4. Beispiel: `452 4.2.2`.

Ein Code, der mit 5 beginnt, ist ein [Hard Bounce](/glossary/hard-bounce). Ein Hard Bounce ist dauerhaft.

## Ein einfaches Beispiel

1. Lisa verschickt montags den Newsletter ihres Fahrradladens.
2. Der Kunde Peter hat die Adresse peter@example.com. Sein Postfach ist voll, weil er seit Wochen keine E-Mails gelöscht hat.
3. Der Server von example.com antwortet mit `452 4.2.2`. Das heißt: Im Postfach ist kein Platz mehr.
4. Lisas Versandtool erfasst einen Soft Bounce. Es versucht die Zustellung später automatisch erneut.
5. Am Dienstag löscht Peter alte E-Mails. Beim nächsten Versuch kommt der Newsletter an.

Lisa muss hier nichts tun. Anders ist es, wenn Peters Postfach jede Woche voll ist. Dazu mehr weiter unten.

## Häufige Ursachen

- **Das Postfach ist voll.** Gmail antwortet mit `452 4.2.2 The recipient's inbox is out of storage space`. Die Person muss E-Mails löschen.
- **Zu viele E-Mails zu schnell.** Gmail antwortet mit `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Kommen zu viele E-Mails von Ihrer IP-Adresse, antwortet Gmail mit `421 4.7.28`. Die IP-Adresse ist die Nummer, an der man Ihren sendenden Server im Internet erkennt.
- **Greylisting.** Der Server lehnt die erste E-Mail eines unbekannten Absenders ab. Beim zweiten Versuch nimmt er dieselbe E-Mail an. Siehe [Greylisting](/glossary/greylisting).
- **Der Server ist ausgefallen oder langsam.** Ein Code `421` bedeutet, dass der Server nicht verfügbar ist. Ein Code `4.4.1` oder `4.4.2` bedeutet, dass die Verbindung fehlgeschlagen oder abgelaufen ist.
- **Die E-Mail ist abgelaufen.** Ein Code `4.4.7` bedeutet, dass Ihr Server es die gesamte Wiederholungszeit lang versucht hat und dann aufgehört hat. RFC 5321 sagt, Server sollten es etwa vier bis fünf Tage lang versuchen.

## Was Ihr Versandtool tut

Nach einem Soft Bounce versucht Ihr Versandtool die Zustellung automatisch erneut. Jedes Tool hat eigene Regeln.

| Tool | Was es nach einem Soft Bounce tut |
|---|---|
| SendGrid | versucht es bis zu 72 Stunden lang erneut |
| HubSpot | markiert die E-Mail bis zu 72 Stunden als ausstehend und erfasst dann einen Soft Bounce |
| Mailchimp | ändert eine Adresse nach 7 Soft Bounces in einen Hard Bounce, wenn der Kontakt nie eine E-Mail geöffnet hat |
| Mailchimp | setzt die Grenze auf 15 Soft Bounces, wenn der Kontakt früher eine E-Mail geöffnet hat |

Derselbe Soft Bounce kann in verschiedenen Tools unterschiedlich benannt sein. Lesen Sie deshalb den Code in der Bounce-Nachricht, nicht das Etikett.

## Was Sie mit einem Soft Bounce tun sollten

Zunächst nichts. Lassen Sie Ihr Versandtool es erneut versuchen. Ein einzelner Soft Bounce ist normal.

Entfernen Sie aber eine Adresse, die bei mehreren Versendungen in Folge soft bounct.

**Beispiel:** Ein Postfach ist sechs Wochen lang bei jedem Versand voll. Dann ist es nicht einfach nur voll. Niemand benutzt es. Mailchimps Grenze von 7 Soft Bounces ist eine sichere Regel für solche Fälle.

So gehen Sie Schritt für Schritt vor:

1. Lesen Sie den Code in der Bounce-Nachricht.
2. Beginnt er mit 4, warten Sie auf die automatischen Wiederholungen.
3. Kommt dieselbe Adresse bei mehreren Versendungen in Folge wieder als Soft Bounce zurück, entfernen Sie sie.

## Wie ein Verifizierer damit umgeht

Ein Verifizierer verbindet sich mit dem Mailserver, bevor Sie senden. Antwortet der Server mit einem 4xx-Code, versucht es der Verifizierer erneut. Bleibt die Antwort gleich, markiert der Verifizierer die Adresse als unbekannt, nicht als gültig. Unbekannt bedeutet, dass das Postfach existiert, aber möglicherweise keine E-Mails empfängt.

Mit dem [E-Mail-Prüfer](/email-checker) prüfen Sie einzelne Adressen, mit der [E-Mail-Massenprüfung](/bulk-email-verifier) eine ganze Liste. [E-Mail-Verifizierung](/) findet vor allem Adressen, die nicht existieren. Einen Soft Bounce wegen eines vollen Postfachs kann sie nicht verhindern. Der Leitfaden [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce) erklärt jeden Code und was Sie damit tun sollten.
