---
title: Spam Score
description: Was ein Spam Score bei E-Mails ist, wie SpamAssassin Punkte vergibt, was den Wert erhöht und wie Sie Ihren Spam Score prüfen und senken.
slug: spam-score
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: Ein Spam Score ist die Punktzahl, die ein Spamfilter einer E-Mail gibt. Jede verdächtige Eigenschaft der E-Mail bringt Punkte. Je höher die Summe, desto eher landet die E-Mail im Spam-Ordner.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Ein guter Spam Score hilft nur bei Adressen, die existieren
---

## Was ist ein Spam Score?

Ein Spam Score ist eine Punktzahl für eine einzelne E-Mail. Ein [Spamfilter](/glossary/spam-filter) berechnet sie, wenn die E-Mail ankommt. Ein Spamfilter ist eine Software auf dem empfangenden Mailserver, die unerwünschte E-Mails aussortiert. Je höher der Spam Score, desto eher hält der Filter die E-Mail für Spam. Über einer bestimmten Grenze verschiebt er sie in den Spam-Ordner oder lehnt sie ab.

Es gibt nicht den einen Spam Score. Jeder Filter rechnet anders. Gmail und Outlook veröffentlichen ihre Rechnung nicht. Bekannt ist vor allem SpamAssassin. Das ist ein Open-Source-Spamfilter, den viele Mailserver und Testdienste nutzen. Open Source heißt, dass der Code öffentlich ist und jeder ihn einsehen kann.

## Ein Beispiel: So rechnet SpamAssassin

SpamAssassin prüft jede E-Mail gegen viele Regeln. Jede Regel, die zutrifft, bringt Punkte. Manche Regeln ziehen Punkte ab, etwa für eine gültige DKIM-Signatur. In der Grundeinstellung markiert SpamAssassin eine E-Mail ab 5,0 Punkten als Spam. Der Betreiber des Servers kann diese Grenze ändern.

Ein Beispiel mit ausgedachten Punktwerten: Ein Onlineshop sendet einen Newsletter mit dem Betreff "JETZT KAUFEN!!! NUR HEUTE". Drei Regeln treffen zu:

| Regel | Punkte im Beispiel |
| --- | --- |
| Betreff fast nur in Großbuchstaben | 1,5 |
| Link über einen Linkkürzer wie bit.ly | 1,8 |
| Sendende IP-Adresse steht auf einer Blacklist | 2,4 |
| **Summe** | **5,7** |

Die Summe liegt über 5,0. SpamAssassin markiert die E-Mail als Spam. Ohne den Blacklist-Eintrag wären es nur 3,3 Punkte gewesen, und die E-Mail wäre durchgekommen. Die echten Punktwerte hängen von der Version und den Einstellungen des Servers ab.

## Was den Spam Score erhöht

- **Fehlende Authentifizierung.** Ohne [SPF](/glossary/spf), [DKIM](/glossary/dkim) oder [DMARC](/glossary/dmarc) kann der Filter nicht prüfen, ob die E-Mail echt ist.
- **Eine IP-Adresse auf einer Blacklist.** Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet. Steht die Adresse Ihres sendenden Servers auf einer [Blacklist](/glossary/email-blacklist), kann das viele Punkte bringen.
- **Typische Spam-Wörter und Großbuchstaben.** Gemeint sind Wendungen wie "100 % gratis" oder "Jetzt handeln" und ganze Sätze in Großbuchstaben.
- **Fehlerhaftes HTML.** HTML ist die Sprache, in der gestaltete E-Mails geschrieben sind. Kaputter Code fällt auf, ebenso eine E-Mail, die nur aus einem großen Bild besteht.
- **Linkkürzer.** Kurze Links wie bit.ly verbergen das Ziel. Filter und Leser misstrauen ihnen.

## Spam Score bei Websites ist etwas anderes

Wer nach "Spam Score" sucht, findet oft auch den Spam Score von Moz. Moz ist ein Anbieter von SEO-Tools. SEO bedeutet Suchmaschinenoptimierung. Der Spam Score von Moz bewertet Websites, nicht E-Mails. Er schätzt, wie sehr eine Website anderen Websites ähnelt, die von Google abgestraft wurden. Für Ihre E-Mails spielt dieser Wert keine Rolle.

## So prüfen Sie Ihren Spam Score

1. **mail-tester.com.** Der Dienst zeigt Ihnen eine Testadresse. Sie senden Ihre E-Mail dorthin und bekommen eine Bewertung von bis zu 10 Punkten. Dort sehen Sie auch, welche SpamAssassin-Regeln zutreffen und ob SPF, DKIM und DMARC bestehen.
2. **Unser [Spam Word Checker](/spam-word-checker) (auf Englisch).** Sie fügen Betreff und Text ein. Das Tool markiert riskante Wörter, Großbuchstaben, Linkkürzer und Platzhalter, die nicht ausgefüllt wurden. Es gibt bewusst keine Punktzahl aus, weil kein Tool weiß, wie ein bestimmtes Postfach Ihre E-Mail bewertet.

Testen Sie mit der fertigen E-Mail, so wie Sie sie senden wollen. Nur dann prüft der Test auch Ihre echten Links und Ihren echten Absender.

## So senken Sie Ihren Spam Score

1. Richten Sie SPF, DKIM und DMARC für Ihre Absenderdomain ein.
2. Prüfen Sie, ob Ihre sendende IP-Adresse oder Domain auf einer Blacklist steht, zum Beispiel mit MXToolbox.
3. Schreiben Sie Betreffzeilen in normaler Groß- und Kleinschreibung, ohne Reihen von Ausrufezeichen.
4. Nutzen Sie volle Links zu Ihrer eigenen Domain statt Linkkürzern.
5. Senden Sie sauberes HTML und eine Textversion der E-Mail.
6. Testen Sie die E-Mail erneut, bevor Sie sie an Ihre ganze Liste senden.

## Spam Score und E-Mail-Verifizierung

Eine Verifizierung ändert nichts am Spam Score einer einzelnen E-Mail, denn der Filter bewertet Inhalt und Technik. Sie wirkt an einer anderen Stelle. Der [E-Mail-Checker](/email-checker) und die [E-Mail-Massenprüfung](/bulk-email-verifier) finden tote Adressen, damit Sie diese entfernen, bevor sie bouncen oder zu [Spam Traps](/glossary/spam-trap) werden. Weniger Bounces und Spam-Trap-Treffer schützen Ihre Reputation, und eine schlechte Reputation kann Ihre IP-Adresse auf eine Blacklist bringen. So hilft [E-Mail-Verifizierung](/) indirekt, aber sie ersetzt keine saubere Einrichtung und keine guten Texte.
