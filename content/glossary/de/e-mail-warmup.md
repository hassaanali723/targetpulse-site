---
title: E-Mail-Warm-up
description: Was E-Mail-Warm-up ist, warum eine neue Domain es braucht, wie ein Beispielplan aussieht und welche Fehler den Warm-up zunichtemachen.
slug: e-mail-warmup
date: 2026-10-12
updated: 2026-10-12
keyword: email warm up
short: E-Mail-Warm-up heißt, dass Sie von einer neuen Adresse oder Domain zuerst wenige E-Mails senden und die Menge langsam steigern. So lernen Mailbox-Provider wie Gmail und Outlook, Ihrem Absender zu vertrauen. Ohne Warm-up landen E-Mails einer neuen Domain eher im Spam.
related: ip-warming, domain-reputation, sender-reputation, deliverability, bounce-rate, spam-filter
cta: Prüfen Sie Ihre Liste, bevor der Warm-up beginnt
---

## Was ist E-Mail-Warm-up?

Warm-up ist Englisch und bedeutet Aufwärmen. Beim E-Mail-Warm-up beginnen Sie mit einer neuen E-Mail-Adresse oder Domain mit wenigen E-Mails pro Tag. Dann erhöhen Sie die Menge Schritt für Schritt über mehrere Wochen. Eine Domain ist der Name hinter dem @ in Ihrer E-Mail-Adresse, zum Beispiel example.com.

Mailbox-Provider sind die Anbieter, bei denen Ihre Empfänger ihr Postfach haben, etwa Gmail, Outlook oder Yahoo. Sie beobachten neue Absender genau. Während des Warm-ups sehen sie, dass Ihre E-Mails ankommen, gelesen werden und kaum Beschwerden auslösen. Daraus entsteht eine gute [Domain-Reputation](/glossary/domain-reputation).

## Warum eine neue Domain einen Warm-up braucht

Eine neue Domain hat keinen Verlauf. Mailbox-Provider wissen nichts über sie. Sie wissen nicht, ob hinter ihr eine echte Firma steht oder ein Spammer. Spammer registrieren oft neue Domains, senden sofort große Mengen und geben die Domain dann auf. Deshalb sind Provider bei neuen Domains vorsichtig.

Sendet eine neue Domain am ersten Tag 5.000 E-Mails, sieht das genau nach diesem Muster aus. Viele E-Mails landen dann im Spam-Ordner oder werden abgelehnt. Sendet sie dagegen anfangs 20 E-Mails am Tag an Menschen, die antworten, sehen die Provider ein anderes Verhalten.

## Ein Beispielplan für den E-Mail-Warm-up

Julia arbeitet bei einem jungen Softwareunternehmen. Die Firma hat die neue Domain example.com registriert. Julia will von julia@example.com E-Mails an mögliche Kunden senden. Ein Plan für ihre ersten Wochen könnte so aussehen. Die Zahlen sind nur ein Beispiel.

| Woche | E-Mails pro Tag | An wen |
| --- | --- | --- |
| 1 | etwa 20 | Kollegen, Partner und Kunden, die sicher antworten |
| 2 | etwa 40 | Bestehende Kontakte, die Julia kennt |
| 3 | etwa 80 | Erste neue Kontakte aus einer geprüften Liste |
| 4 | etwa 150 | Weitere neue Kontakte aus einer geprüften Liste |
| ab 5 | langsam mehr | Je nach Antworten, Bounces und Spam-Rate |

Echte Pläne sehen verschieden aus. Sie hängen vom Mailbox-Provider, von der geplanten Menge und von den Reaktionen der Empfänger ab. Das Muster bleibt gleich: wenig am Anfang, gleichmäßig steigern und langsamer werden, wenn Probleme auftreten.

## Manueller Warm-up und Warm-up-Tools

**Manueller Warm-up.** Sie senden selbst echte E-Mails an echte Kontakte und steigern die Menge nach Plan. Das kostet Zeit. Dafür sind alle Signale echt, denn echte Menschen öffnen und antworten.

**Warm-up-Tools.** Diese Dienste verbinden Ihr Postfach mit einem Netzwerk anderer Postfächer. Das Tool sendet automatisch E-Mails zwischen diesen Postfächern hin und her. Die anderen Postfächer öffnen Ihre E-Mails, antworten darauf und holen sie aus dem Spam-Ordner, falls sie dort landen. So sollen die Provider positive Signale sehen. Viele Tools für Kalt-E-Mails bieten diese Funktion an. Kalt-E-Mails sind E-Mails an Menschen, die Sie noch nicht kennen. Ob Mailbox-Provider diese Signale genauso werten wie echte Reaktionen, veröffentlichen sie nicht.

## E-Mail-Warm-up und IP-Warming

Die beiden Begriffe klingen ähnlich, meinen aber verschiedene Dinge:

- **E-Mail-Warm-up** baut Vertrauen in eine Adresse oder Domain auf. Das braucht jeder, der von einer neuen Domain sendet.
- **[IP-Warming](/glossary/ip-warming)** baut Vertrauen in eine neue IP-Adresse auf. Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet. IP-Warming brauchen Sie nur, wenn Sie eine eigene IP-Adresse nutzen, etwa bei Ihrem ESP oder auf einem eigenen Server.

Ein ESP ist ein Dienst, der E-Mails für Sie versendet. Senden Sie über eine geteilte IP Ihres ESP, ist die IP schon aufgewärmt. Ihre Domain müssen Sie trotzdem aufwärmen, wenn sie neu ist.

## Fehler, die den Warm-up zunichtemachen

- **An eine ungeprüfte Liste senden.** Enthält die Liste viele tote Adressen, bouncen schon in Woche eins viele E-Mails. Bei 40 E-Mails am Tag sind 5 Bounces bereits 12,5 Prozent. Für eine neue Domain ist das ein sehr schlechtes Signal.
- **Die Menge zu schnell steigern.** Ein Sprung von 50 auf 1.000 E-Mails an einem Tag kann den bisherigen Fortschritt zunichtemachen.
- **Fehlende Authentifizierung.** Richten Sie [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) ein, bevor Sie die erste E-Mail senden.
- **Werbliche E-Mails am Anfang.** Viele Links, Anhänge und Werbesprache in den ersten Wochen lösen eher einen [Spamfilter](/glossary/spam-filter) aus.
- **Den Warm-up zu früh beenden.** Wer nach einer Woche auf die volle Menge springt, verliert den Vorteil.

## E-Mail-Warm-up und E-Mail-Verifizierung

Prüfen Sie Ihre Liste, bevor Sie die erste echte Kampagne von der neuen Domain senden. In den ersten Wochen zählt jeder Bounce, weil die Domain noch wenig Verlauf hat. Die [E-Mail-Massenprüfung](/bulk-email-verifier) findet in Ihrer Liste die Adressen, die nicht existieren, und der [E-Mail-Prüfer](/email-checker) prüft einzelne neue Kontakte. Ein Warm-up mit geprüften Adressen baut Vertrauen auf, statt es durch Bounces zu verlieren. Die [E-Mail-Verifizierung](/) ersetzt den Warm-up nicht, aber sie hält die Bounce-Rate dabei niedrig.
