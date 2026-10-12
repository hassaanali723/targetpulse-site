---
title: Spamfilter
description: Was ein Spamfilter prüft, bevor er Ihre E-Mail zustellt, verschiebt oder ablehnt, der Unterschied zum Spam-Ordner und die Spam-Rate-Grenzen von Google.
slug: spamfilter
date: 2026-09-29
updated: 2026-10-12
keyword: spamfilter
short: Ein Spamfilter ist das System, mit dem ein Mailbox-Provider über jede eingehende E-Mail entscheidet. Die E-Mail geht in den Posteingang oder in den Spam-Ordner, oder sie wird abgelehnt. Der Filter prüft dafür den Absender, den Inhalt und wie frühere Empfänger auf E-Mails dieses Absenders reagiert haben.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Senden Sie an echte Adressen, dann haben Spamfilter weniger gegen Sie in der Hand
---

## Was ist ein Spamfilter?

Ein Spamfilter ist ein Programm, das jede eingehende E-Mail prüft. Danach entscheidet es, was mit der E-Mail passiert. Es gibt drei Möglichkeiten:

1. Die E-Mail geht in den Posteingang.
2. Die E-Mail wird in den Spam-Ordner verschoben.
3. Die E-Mail wird abgelehnt.

Jeder Mailbox-Provider hat einen Spamfilter. Ein Mailbox-Provider ist ein Anbieter von E-Mail-Postfächern. Gmail, Outlook.com und Yahoo haben einen. Firmen-Mailserver hinter einem [Secure Email Gateway](/glossary/secure-email-gateway) haben einen. Ein Mailserver ist ein Computer, der rund um die Uhr läuft und E-Mails sendet und empfängt. Ein Secure Email Gateway ist ein Dienst, der E-Mails prüft, bevor sie in die Postfächer einer Firma gehen.

## Wann der Spamfilter entscheidet

Die Entscheidung fällt an einem von zwei Punkten.

**Während der SMTP-Verbindung.** SMTP ist das Verfahren, mit dem Mailserver E-Mails austauschen. Der empfangende Server kann die E-Mail ablehnen, bevor er sie annimmt. Sie bekommen dann einen Bounce mit einem `5.7.x`-Code. Ein Bounce ist eine Meldung, dass Ihre E-Mail nicht zugestellt wurde. Zwei Beispiele von Gmail:

- `550 5.7.1` für eine Richtlinienblockade.
- `550 5.7.28` für eine ungewöhnliche Menge unerwünschter E-Mails von Ihrer IP-Adresse. Die IP-Adresse ist die Nummer, unter der Ihr sendender Server im Internet erreichbar ist.

In diesem Fall erreicht die E-Mail das Postfach nie.

**Nachdem die E-Mail angenommen wurde.** Der Server nimmt die E-Mail an. Dann legt er sie in den Posteingang, den Werbung-Tab oder den Spam-Ordner. Sie bekommen keinen Bounce. Die einzigen Anzeichen sind niedrigere Öffnungsraten und die Daten in Google Postmaster Tools. Das ist ein kostenloses Dashboard, in dem Google Absendern Zahlen zu ihren E-Mails an Gmail zeigt.

## Ein einfaches Beispiel

1. Ein Möbelhaus sendet einen Newsletter an 5.000 Kunden. Die Absenderadresse ist news@moebelhaus.example.
2. Der Spamfilter von Gmail prüft zuerst die Absenderdomain. Ist sie authentifiziert? Wie hat sie sich in der Vergangenheit verhalten?
3. Dann sieht er, dass viele Adressen der Liste nicht existieren. Diese E-Mails bouncen.
4. In den letzten Wochen haben auch viele Empfänger auf "Spam melden" geklickt.
5. Der Spamfilter wertet diese Zeichen zusammen aus. Er legt den Newsletter bei vielen Kunden in den Spam-Ordner.
6. Das Möbelhaus bekommt keine Fehlermeldung. Es sieht nur, dass weniger Kunden die E-Mail öffnen.

In diesem Beispiel war der Text des Newsletters nicht das Problem. Das Problem war die Liste.

## Was der Filter prüft

Provider veröffentlichen ihre genauen Regeln nicht. Das sind die bekannten Kriterien:

- **Authentifizierung.** Ob [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) bestehen. Das sind Einträge im DNS, dem öffentlichen Verzeichnis mit den Einstellungen jeder Domain. Mit ihnen beweist eine Domain, dass eine E-Mail wirklich von ihr kommt. Google und Microsoft lehnen Massen-E-Mails, die diese Prüfungen nicht bestehen, inzwischen ab.
- **Reputation.** Die Versandgeschichte Ihrer Domain und Ihrer IP-Adresse. Die Domain ist der Name hinter dem @ in Ihrer Absenderadresse. Siehe [Domain-Reputation](/glossary/domain-reputation) und [IP-Reputation](/glossary/ip-reputation).
- **Beschwerden.** Wie oft Empfänger auf "Spam melden" klicken. Googles Richtlinien sagen, die Beschwerderate in Postmaster Tools unter 0,10 Prozent zu halten und nie 0,30 Prozent zu erreichen. Bei 10.000 E-Mails wären 0,30 Prozent zum Beispiel 30 Beschwerden.
- **Bounces.** Wie oft Sie an Adressen senden, die nicht existieren. Eine Liste mit vielen toten Adressen sieht aus wie eine gekaufte oder abgegriffene Liste.
- **Engagement.** Ob Leute Ihre E-Mails öffnen, darauf antworten, sie ungelesen löschen oder in einen anderen Ordner verschieben.
- **Inhalt.** Links, Anhänge, Bilder und Textmuster, die bekanntem Spam entsprechen. Inhalt zählt weniger als früher. Reputation und Authentifizierung zählen mehr.

## Warum Absender gefiltert werden

Die meiste Filterung wird nicht durch die Wörter in der E-Mail ausgelöst. Sie wird durch die Liste ausgelöst.

- Tote Adressen verursachen Bounces.
- Leute, die Ihre E-Mails nicht angefordert haben, verursachen Beschwerden.

Beide Probleme entstehen durch Adressen, die nie geprüft wurden. Ein Spamfilter sieht beide Probleme in Ihren Versanddaten.

## Wie ein Verifizierer hilft

Ein Verifizierer hat keinen Kontakt mit Spamfiltern. Er entfernt die Adressen, die Bounces und Beschwerden verursachen. Lassen Sie Ihre Liste vor dem Versand durch die [E-Mail-Massenprüfung](/bulk-email-verifier) laufen, oder prüfen Sie einzelne Adressen mit dem [E-Mail-Checker](/email-checker). Die Prüfung entfernt Postfächer, die nicht mehr existieren. Sie entfernt auch Wegwerfadressen und Rollenkonten wie info@, die mehr Beschwerden bekommen. Wegwerfadressen sind Adressen, die nur für kurze Zeit funktionieren.

[E-Mail-Verifizierung](/) bringt eine E-Mail nicht an einem Spamfilter vorbei. Sie sorgt dafür, dass Ihre Liste weniger Gründe für eine Filterung liefert. Der Leitfaden zur [E-Mail-Bounce-Rate](/blog/how-to-reduce-email-bounce-rate) zeigt, wie groß dieser Anteil einer Liste meist ist.
