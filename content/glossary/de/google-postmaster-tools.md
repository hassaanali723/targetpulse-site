---
title: Google Postmaster Tools
description: Was Google Postmaster Tools über Ihre E-Mails an Gmail zeigt, wie Sie es einrichten, welche Spam-Rate-Grenzen Google setzt und was das Tool nicht zeigt.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: Google Postmaster Tools ist ein kostenloses Dashboard von Google. Es zeigt, wie Gmail Ihre Absenderdomain bewertet. Es meldet Ihre Spam-Rate, Domain-Reputation, IP-Reputation, Authentifizierungsergebnisse und Zustellfehler für E-Mails an Gmail-Nutzer.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools meldet Probleme nach dem Versand. Verifizierung verhindert sie
---

## Was Google Postmaster Tools ist

Google Postmaster Tools ist eine Website, die Google für E-Mail-Absender bereitstellt. Sie fügen Ihre Domain hinzu und weisen den Besitz nach, indem Sie einen DNS-Eintrag setzen. Dann zeigt Google Ihnen Daten über die E-Mails, die Ihre Domain an Gmail-Adressen sendet. Es ist kostenlos. Es ist die einzige offizielle Quelle für Informationen darüber, wie Gmail Ihre Domain bewertet.

Es deckt nur Gmail ab. E-Mails an Outlook.com, Yahoo oder Firmen-Mailserver erscheinen nicht. Microsoft hat einen eigenen Dienst für sein Netzwerk.

## Was es zeigt

- **Spam-Rate.** Der Prozentsatz Ihrer zugestellten E-Mails, den Gmail-Nutzer als Spam markiert haben. Googles Absenderrichtlinien beziehen sich auf diese Zahl.
- **Domain-Reputation und IP-Reputation.** Eine Bewertung für jede: bad, low, medium oder high. High bedeutet, dass Gmail Ihre E-Mails selten filtert. Bad bedeutet, dass die meisten Ihrer E-Mails in den Spam gehen oder abgelehnt werden.
- **Authentifizierung.** Der Prozentsatz Ihrer E-Mails, der [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) besteht.
- **Verschlüsselung.** Der Prozentsatz Ihrer E-Mails, der über TLS gesendet wird.
- **Zustellfehler.** Der Prozentsatz Ihrer E-Mails, den Gmail abgelehnt oder verzögert hat, mit dem Grund.
- **Feedback Loop.** Beschwerderaten pro Kampagne, für große Absender, die den Feedback-ID-Header nutzen.

## Die Grenzen, die Google veröffentlicht

Googles Absenderrichtlinien sagen:

- Halten Sie die in Postmaster Tools angezeigte Spam-Rate unter 0,10 Prozent.
- Erreichen Sie nie eine Spam-Rate von 0,30 Prozent oder mehr.
- Absender von 5.000 oder mehr Nachrichten pro Tag müssen SPF, DKIM und DMARC haben.
- Marketing-E-Mails dieser Absender müssen eine Ein-Klick-Abmeldung haben.

Absender, die über 0,30 Prozent liegen, bekommen ihre E-Mails gefiltert oder abgelehnt. Diese Grenzen sind klein. Bei 10.000 zugestellten E-Mails sind 0,30 Prozent 30 Beschwerden.

## Was es nicht zeigt

Postmaster Tools berichtet über E-Mails, die zugestellt wurden. Es kann Ihnen keine Adressen zeigen, die nicht existieren. Eine E-Mail an eine tote Adresse wird während der SMTP-Verbindung abgelehnt. Diese Ablehnung ist ein Bounce. Bounces sind nicht Teil der Spam-Rate. Eine Liste mit vielen ungültigen Adressen kann eine niedrige Spam-Rate zeigen, während die Bounce-Rate Ihre Reputation beschädigt.

Postmaster Tools braucht außerdem Volumen. Wenn Ihre Domain nur wenige E-Mails an Gmail sendet, bleiben die Diagramme leer. Google veröffentlicht das Mindestvolumen nicht.

## Wie es mit Verifizierung zusammenspielt

Postmaster Tools meldet Probleme nach dem Versand. Verifizierung entfernt die Ursachen vor dem Versand. Wer eine Liste durch einen [E-Mail-Adressen-Checker](/email-checker) laufen lässt, entfernt Adressen, die bouncen. Er entfernt auch Wegwerfadressen und Rollenadressen, die Beschwerden verursachen. Danach hat Postmaster Tools weniger zu melden. Der Leitfaden zur [E-Mail-Bounce-Rate](/blog/how-to-reduce-email-bounce-rate) erklärt beide Seiten.
