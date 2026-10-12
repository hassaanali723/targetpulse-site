---
title: E-Mail-Zustellbarkeit
description: Was E-Mail-Zustellbarkeit (Deliverability) bedeutet, wie sie sich von der Zustellrate unterscheidet, was sie beeinflusst und wie Sie sie messen und verbessern.
slug: e-mail-zustellbarkeit
date: 2026-10-12
updated: 2026-10-12
keyword: e-mail zustellbarkeit
short: E-Mail-Zustellbarkeit, auf Englisch Deliverability, beschreibt, ob Ihre E-Mails im Posteingang der Empfänger ankommen. Eine E-Mail kann angenommen werden und trotzdem im Spam-Ordner landen. Gute Zustellbarkeit heißt, dass sie im Posteingang landet.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Bessere Zustellbarkeit beginnt mit Adressen, die existieren
---

## Was ist E-Mail-Zustellbarkeit?

E-Mail-Zustellbarkeit beschreibt, wie viele Ihrer E-Mails im Posteingang der Empfänger ankommen. Im Englischen heißt das Deliverability. Gemeint ist nicht nur, ob eine E-Mail ankommt. Gemeint ist, wo sie ankommt.

Über den Ort entscheidet der Mailbox-Provider des Empfängers. Ein Mailbox-Provider ist der Anbieter, bei dem jemand sein Postfach hat, zum Beispiel Gmail, Outlook, Yahoo oder GMX. Er entscheidet bei jeder E-Mail neu. Die E-Mail kann an drei Orten enden:

- im Posteingang,
- im Spam-Ordner,
- nirgends, weil der Server sie abgelehnt hat.

Gute Zustellbarkeit heißt, dass möglichst viele Ihrer E-Mails im Posteingang landen. Eine E-Mail im Spam-Ordner gilt technisch als zugestellt, wird aber leicht übersehen.

## Zustellung und Zustellbarkeit: der Unterschied

Die beiden Begriffe klingen gleich, messen aber verschiedene Dinge:

- **Zustellung (Delivery)** heißt, dass der empfangende Server die E-Mail angenommen hat. Sie ist nicht gebounct.
- **Zustellbarkeit (Deliverability)** heißt, dass die E-Mail im Posteingang gelandet ist und nicht im Spam-Ordner.

Ein Rechenbeispiel mit ausgedachten Zahlen: Sie senden 1.000 E-Mails. 40 davon bouncen, weil die Adressen nicht existieren. 960 E-Mails wurden also zugestellt. Von diesen 960 landen 800 im Posteingang und 160 im Spam-Ordner.

| Kennzahl | Rechnung | Ergebnis |
| --- | --- | --- |
| Zustellrate | 960 von 1.000 gesendeten E-Mails | 96 Prozent |
| Anteil im Posteingang | 800 von 1.000 gesendeten E-Mails | 80 Prozent |

Ihr Versandtool meldet in diesem Beispiel "96 Prozent zugestellt". Im Posteingang sehen Ihre E-Mail aber nur 800 Empfänger. Den Anteil im Posteingang nennt man auch [Inbox Placement](/glossary/inbox-placement).

## Was die E-Mail-Zustellbarkeit beeinflusst

- **Authentifizierung.** [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) zeigen, dass Ihre E-Mails wirklich von Ihrer Domain kommen. Eine Domain ist der Name hinter dem @ in Ihrer Adresse. Google und Microsoft verlangen alle drei von Absendern mit 5.000 oder mehr E-Mails pro Tag.
- **Absender-Reputation.** Mailbox-Provider merken sich, wie sich Ihre Domain und Ihre IP-Adresse bisher verhalten haben. Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet. Mehr dazu unter [Absender-Reputation](/glossary/sender-reputation).
- **Bounces.** Viele E-Mails an Adressen, die nicht existieren, zeigen, dass Ihre Liste nicht gepflegt ist. Siehe [Bounce-Rate](/glossary/bounce-rate).
- **Spam-Beschwerden.** Jeder Klick auf "Spam melden" schadet Ihnen. Googles Absenderrichtlinien nennen eine Spam-Rate von 0,30 Prozent, die Sie nie erreichen sollten.
- **Listenqualität.** Gekaufte oder alte Listen enthalten tote Adressen und [Spam Traps](/glossary/spam-trap).
- **Inhalt.** Viele Links, Linkkürzer und Betreffzeilen in Großbuchstaben können einen [Spamfilter](/glossary/spam-filter) auslösen. Der Inhalt zählt aber weniger als Reputation und Authentifizierung.

## So messen Sie die Zustellbarkeit

Kein Versandtool weiß sicher, wie viele E-Mails im Spam-Ordner landen. Der empfangende Server meldet das nicht zurück. Es gibt aber gute Wege, es abzuschätzen.

- **Seed-Test.** Sie senden Ihre E-Mail an eine Reihe eigener Testpostfächer bei verschiedenen Anbietern. Dann sehen Sie nach, wo die E-Mail gelandet ist. Diese Testadressen nennt man [Seed-List](/glossary/seed-list).
- **[Google Postmaster Tools](/glossary/postmaster-tools).** Das kostenlose Tool von Google zeigt Daten zu Ihren E-Mails an Gmail-Adressen, zum Beispiel Ihre Spam-Rate. Es deckt nur Gmail ab.
- **Microsoft SNDS.** Der kostenlose Dienst von Microsoft zeigt Daten zu E-Mails von Ihren IP-Adressen an Outlook.com.
- **Ihre eigenen Zahlen.** Sinken die Öffnungen bei einem Anbieter plötzlich, landen Ihre E-Mails dort vielleicht im Spam.

## So verbessern Sie Ihre E-Mail-Zustellbarkeit

1. Richten Sie SPF, DKIM und DMARC für Ihre Domain ein.
2. Prüfen Sie Ihre Liste vor dem Versand und entfernen Sie Adressen, die nicht existieren.
3. Senden Sie nur an Menschen, die sich angemeldet haben. Am sichersten geht das mit [Double Opt-in](/glossary/double-opt-in).
4. Bieten Sie eine einfache Abmeldung mit einem Klick an. Wer sich nicht abmelden kann, klickt eher auf "Spam melden".
5. Senden Sie von einer neuen Domain anfangs wenig und steigern Sie langsam. Siehe [E-Mail-Warm-up](/glossary/email-warmup).
6. Senden Sie in einem gleichmäßigen Rhythmus statt in plötzlichen großen Mengen.
7. Entfernen Sie Empfänger, die seit Monaten keine E-Mail geöffnet haben.
8. Beobachten Sie Bounce-Rate und Spam-Rate nach jeder Kampagne.

## E-Mail-Zustellbarkeit und E-Mail-Verifizierung

Eine Verifizierung wirkt auf einen Teil der Zustellbarkeit, nämlich auf die Bounces. Sie findet Adressen, die nicht existieren, damit Sie diese vor dem Versand entfernen. Weniger Bounces schützen Ihre Absender-Reputation, und die Reputation entscheidet mit, ob Ihre E-Mails im Posteingang landen. Für einzelne Adressen nutzen Sie den [E-Mail-Checker](/email-checker), für ganze Listen die [E-Mail-Massenprüfung](/bulk-email-verifier). Auf Inhalt und Authentifizierung hat die [E-Mail-Verifizierung](/) keinen Einfluss, dafür brauchen Sie SPF, DKIM, DMARC und klare Texte.
