---
title: Spamfilter
description: Was ein Spamfilter prüft, wenn er entscheidet, wohin Ihre E-Mail geht, der Unterschied zwischen einer Ablehnung und dem Spam-Ordner, und die Spam-Rate-Grenzen, die Google veröffentlicht.
slug: spamfilter
date: 2026-09-29
updated: 2026-09-29
keyword: spamfilter
short: Ein Spamfilter ist das System, mit dem ein Mailbox-Provider entscheidet, ob eine eingehende E-Mail in den Posteingang geht, in den Spam-Ordner geht oder abgelehnt wird. Er prüft den Absender, den Inhalt der E-Mail und wie frühere Empfänger auf E-Mails dieses Absenders reagiert haben.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Senden Sie an echte Adressen, dann haben Spamfilter weniger gegen Sie in der Hand
---

## Was ein Spamfilter tut

Jeder Mailbox-Provider hat einen Spamfilter. Gmail, Outlook.com und Yahoo haben einen. Firmen-Mailserver hinter einem [Secure Email Gateway](/glossary/secure-email-gateway) haben einen. Der Filter prüft jede eingehende E-Mail und entscheidet, ob er sie zustellt, in den Spam-Ordner verschiebt oder ablehnt.

Die Entscheidung fällt an einem von zwei Punkten.

**Während der SMTP-Verbindung.** Der empfangende Server kann die E-Mail ablehnen, bevor er sie annimmt. Sie bekommen einen Bounce mit einem `5.7.x`-Code. Beispiele: Gmails `550 5.7.1` für eine Richtlinienblockade oder `550 5.7.28` für eine ungewöhnliche Menge unerwünschter E-Mails von Ihrer IP-Adresse. Die E-Mail erreicht das Postfach nie.

**Nachdem die E-Mail angenommen wurde.** Der Server nimmt die E-Mail an und legt sie dann in den Posteingang, den Werbung-Tab oder den Spam-Ordner. Sie bekommen keinen Bounce. Die einzigen Anzeichen sind niedrigere Öffnungsraten und die Daten in Google Postmaster Tools.

## Was der Filter prüft

Provider veröffentlichen ihre genauen Regeln nicht. Das sind die bekannten Kriterien:

- **Authentifizierung.** Ob [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) bestehen. Google und Microsoft lehnen Massen-E-Mails, die diese Prüfungen nicht bestehen, inzwischen ab.
- **Reputation.** Die Versandgeschichte Ihrer Domain und Ihrer IP-Adresse. Siehe [Domain-Reputation](/glossary/domain-reputation) und [IP-Reputation](/glossary/ip-reputation).
- **Beschwerden.** Wie oft Empfänger auf "Spam melden" klicken. Googles Richtlinien sagen, die Beschwerderate in Postmaster Tools unter 0,10 Prozent zu halten und nie 0,30 Prozent zu erreichen.
- **Bounces.** Wie oft Sie an Adressen senden, die nicht existieren. Eine Liste mit vielen toten Adressen sieht aus wie eine gekaufte oder abgegriffene Liste.
- **Engagement.** Ob Leute Ihre E-Mails öffnen, darauf antworten, sie ungelesen löschen oder in einen anderen Ordner verschieben.
- **Inhalt.** Links, Anhänge, Bilder und Textmuster, die bekanntem Spam entsprechen. Inhalt zählt weniger als früher. Reputation und Authentifizierung zählen mehr.

## Warum Absender gefiltert werden

Die meiste Filterung wird nicht durch die Wörter in der E-Mail ausgelöst. Sie wird durch die Liste ausgelöst. Tote Adressen verursachen Bounces. Leute, die Ihre E-Mails nicht angefordert haben, verursachen Beschwerden. Beide Probleme entstehen durch Adressen, die nie geprüft wurden.

## Wie ein Verifizierer hilft

Ein Verifizierer hat keinen Kontakt mit Spamfiltern. Er entfernt die Adressen, die Bounces und Beschwerden verursachen. Lassen Sie Ihre Liste vor dem Versand durch einen [E-Mail-Adressen-Checker](/email-checker) laufen. Er entfernt Postfächer, die nicht mehr existieren. Er entfernt auch Wegwerfadressen und Rollenkonten wie info@, die mehr Beschwerden bekommen. Der Leitfaden zur [E-Mail-Bounce-Rate](/blog/how-to-reduce-email-bounce-rate) zeigt, wie groß dieser Anteil einer Liste meist ist.
