---
title: Soft Bounce
description: Was ein Soft Bounce ist, die häufigen Ursachen mit ihren Codes, wie lange Versandtools es erneut versuchen und wann Sie eine Adresse entfernen sollten.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: Ein Soft Bounce ist eine E-Mail, die diesmal wegen eines vorübergehenden Problems nicht zugestellt wurde. Die Adresse ist echt. Das Postfach ist voll, der Server ist ausgelastet, oder der Server hat Sie gebeten, es später erneut zu versuchen.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Sehen Sie vor dem Versand, welche Ihrer Adressen echt sind
---

## Was ein Soft Bounce ist

Ein Soft Bounce ist ein vorübergehender Zustellfehler. Der empfangende Server hat Ihre E-Mail diesmal nicht zugestellt. Er erlaubt Ihnen, es später erneut zu versuchen.

Der E-Mail-Standard RFC 5321 nennt das eine vorübergehende negative Antwort. Der Code in der Bounce-Nachricht beginnt mit 4. Beispiel: `452 4.2.2`. Ein Code, der mit 5 beginnt, ist ein [Hard Bounce](/glossary/hard-bounce). Ein Hard Bounce ist dauerhaft.

## Häufige Ursachen

- **Das Postfach ist voll.** Gmail antwortet mit `452 4.2.2 The recipient's inbox is out of storage space`. Die Person muss E-Mails löschen.
- **Zu viele E-Mails zu schnell.** Gmail antwortet mit `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail antwortet mit `421 4.7.28`, wenn zu viele E-Mails von Ihrer IP-Adresse kommen.
- **Greylisting.** Der Server lehnt die erste E-Mail eines unbekannten Absenders ab. Beim zweiten Versuch nimmt er dieselbe E-Mail an. Siehe [Greylisting](/glossary/greylisting).
- **Der Server ist ausgefallen oder langsam.** Ein Code `421` bedeutet, dass der Server nicht verfügbar ist. Ein Code `4.4.1` oder `4.4.2` bedeutet, dass die Verbindung fehlgeschlagen oder abgelaufen ist.
- **Die E-Mail ist abgelaufen.** Ein Code `4.4.7` bedeutet, dass Ihr Server es die gesamte Wiederholungszeit lang versucht hat und dann aufgehört hat. RFC 5321 sagt, Server sollten es etwa vier bis fünf Tage lang versuchen.

## Was Ihr Versandtool tut

Ihr Versandtool versucht Soft Bounces automatisch erneut. Jedes Tool hat eigene Regeln.

- SendGrid versucht es bis zu 72 Stunden.
- HubSpot markiert die E-Mail bis zu 72 Stunden als ausstehend. Dann erfasst es einen Soft Bounce.
- Mailchimp ändert eine Adresse nach 7 Soft Bounces in einen Hard Bounce, wenn der Kontakt nie eine E-Mail geöffnet hat. Hat der Kontakt früher eine E-Mail geöffnet, liegt die Grenze bei 15 Soft Bounces.

Derselbe Soft Bounce kann in verschiedenen Tools unterschiedlich benannt sein. Lesen Sie den Code in der Bounce-Nachricht, nicht das Etikett.

## Was Sie mit einem Soft Bounce tun sollten

Zunächst nichts. Lassen Sie Ihr Versandtool es erneut versuchen. Ein Soft Bounce ist normal.

Entfernen Sie eine Adresse, die bei mehreren Versendungen in Folge soft bounct. Ein Postfach, das sechs Wochen lang bei jedem Versand voll ist, ist nicht voll. Niemand benutzt es. Mailchimps Grenze von 7 Soft Bounces ist eine sichere Regel.

## Wie ein Verifizierer damit umgeht

Ein Verifizierer verbindet sich mit dem Mailserver, bevor Sie senden. Antwortet der Server mit einem 4xx-Code, versucht es der Verifizierer erneut. Bleibt die Antwort gleich, markiert der Verifizierer die Adresse als unbekannt, nicht als gültig. Unbekannt bedeutet, dass das Postfach existiert, aber möglicherweise keine E-Mails empfängt. Der Leitfaden [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce) erklärt jeden Code und was Sie damit tun sollten.
