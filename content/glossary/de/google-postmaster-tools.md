---
title: Google Postmaster Tools
description: Was Google Postmaster Tools über Ihre E-Mails an Gmail zeigt, wie Sie es einrichten, welche Spam-Rate-Grenzen Google setzt und was das Tool nicht zeigt.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools ist ein kostenloses Dashboard von Google, das zeigt, wie Gmail Ihre Absenderdomain bewertet. Es meldet Ihre Spam-Rate, Ihre Domain-Reputation und IP-Reputation, Ihre Authentifizierungsergebnisse und Zustellfehler bei E-Mails an Gmail-Nutzer.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools meldet Probleme nach dem Versand. Verifizierung verhindert sie
---

## Was ist Google Postmaster Tools?

Google Postmaster Tools ist eine Website, die Google für E-Mail-Absender bereitstellt. Dort sehen Sie, wie Gmail die E-Mails Ihrer Domain bewertet. Es ist kostenlos. Es ist die einzige offizielle Quelle für Informationen darüber, wie Gmail Ihre Domain bewertet.

Ein paar Begriffe vorab:

- Eine **Domain** ist der Name hinter dem @ in Ihrer Absenderadresse, zum Beispiel example.com.
- Das **DNS** ist das öffentliche Verzeichnis mit den Einstellungen jeder Domain. Ein **DNS-Eintrag** ist eine Zeile darin.
- Ein **Dashboard** ist eine Seite mit Zahlen und Diagrammen.

So funktioniert es. Sie fügen Ihre Domain hinzu. Dann weisen Sie den Besitz nach, indem Sie einen DNS-Eintrag setzen. Danach zeigt Google Ihnen Daten über die E-Mails, die Ihre Domain an Gmail-Adressen sendet.

Es deckt nur Gmail ab. E-Mails an Outlook.com, Yahoo oder Firmen-Mailserver erscheinen nicht. Microsoft hat einen eigenen Dienst für sein Netzwerk.

## Ein einfaches Beispiel

1. Sophie leitet das Marketing eines Reiseportals mit der Domain reisen.example.
2. Sie fügt reisen.example in Google Postmaster Tools hinzu. Sie setzt den DNS-Eintrag, den Google ihr nennt.
3. Das Portal sendet jede Woche einen Newsletter, auch an viele Gmail-Adressen.
4. Nach einiger Zeit zeigt das Dashboard Daten. Die Spam-Rate liegt bei 0,05 Prozent. Die Domain-Reputation ist "high".
5. Einen Monat später steigt die Spam-Rate auf 0,25 Prozent. Sophie sieht das im Diagramm.
6. Sie prüft die letzten Kampagnen. Eine neue, nicht geprüfte Adressliste ist dazugekommen.

Die Zahlen in diesem Beispiel sind ausgedachte Beispielwerte.

## Was es zeigt

- **Spam-Rate.** Der Prozentsatz Ihrer zugestellten E-Mails, den Gmail-Nutzer als Spam markiert haben. Googles Absenderrichtlinien beziehen sich auf diese Zahl.
- **Domain-Reputation und IP-Reputation.** Reputation ist die Bewertung, die Gmail Ihnen als Absender gibt. Die IP-Adresse ist die Nummer des Servers, der Ihre E-Mails sendet. Für jede gibt es eine Bewertung: bad, low, medium oder high. High bedeutet, dass Gmail Ihre E-Mails selten filtert. Bad bedeutet, dass die meisten Ihrer E-Mails in den Spam gehen oder abgelehnt werden.
- **Authentifizierung.** Der Prozentsatz Ihrer E-Mails, der [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) besteht. Mit diesen drei DNS-Einträgen beweist Ihre Domain, dass eine E-Mail wirklich von ihr kommt.
- **Verschlüsselung.** Der Prozentsatz Ihrer E-Mails, der über TLS gesendet wird. TLS ist ein Verfahren, das die E-Mail auf dem Weg zwischen zwei Servern verschlüsselt.
- **Zustellfehler.** Der Prozentsatz Ihrer E-Mails, den Gmail abgelehnt oder verzögert hat, mit dem Grund.
- **Feedback Loop.** Beschwerderaten pro Kampagne, für große Absender, die den Feedback-ID-Header nutzen. Ein Header ist eine technische Zeile am Anfang einer E-Mail.

## Die Grenzen, die Google veröffentlicht

Googles Absenderrichtlinien sagen:

1. Halten Sie die in Postmaster Tools angezeigte Spam-Rate unter 0,10 Prozent.
2. Erreichen Sie nie eine Spam-Rate von 0,30 Prozent oder mehr.
3. Absender von 5.000 oder mehr Nachrichten pro Tag müssen SPF, DKIM und DMARC haben.
4. Marketing-E-Mails dieser Absender müssen eine Ein-Klick-Abmeldung haben.

Absender, die über 0,30 Prozent liegen, bekommen ihre E-Mails gefiltert oder abgelehnt. Diese Grenzen sind klein. Bei 10.000 zugestellten E-Mails sind 0,30 Prozent 30 Beschwerden. 0,10 Prozent sind 10 Beschwerden.

## Was es nicht zeigt

Google Postmaster Tools berichtet über E-Mails, die zugestellt wurden. Es kann Ihnen keine Adressen zeigen, die nicht existieren. Eine E-Mail an eine tote Adresse wird während der SMTP-Verbindung abgelehnt. SMTP ist das Verfahren, mit dem Mailserver E-Mails austauschen. Diese Ablehnung ist ein Bounce, also eine Meldung, dass die E-Mail nicht zugestellt wurde. Bounces sind nicht Teil der Spam-Rate.

**Beispiel:** Ein Shop sendet an 10.000 Adressen. 800 davon existieren nicht mehr. Das Dashboard kann trotzdem eine niedrige Spam-Rate zeigen. Die 800 Bounces sehen Sie dort nicht.

Eine Liste mit vielen ungültigen Adressen kann also eine niedrige Spam-Rate zeigen, während die Bounce-Rate Ihre Reputation beschädigt. Die Bounce-Rate ist der Anteil Ihrer E-Mails, die bouncen.

Postmaster Tools braucht auch Volumen. Wenn Ihre Domain nur wenige E-Mails an Gmail sendet, bleiben die Diagramme leer. Google veröffentlicht das Mindestvolumen nicht.

## Wie es mit Verifizierung zusammenspielt

Postmaster Tools meldet Probleme nach dem Versand. Verifizierung entfernt die Ursachen vor dem Versand. Prüfen Sie eine ganze Liste mit der [E-Mail-Massenprüfung](/bulk-email-verifier) oder einzelne Adressen mit dem [E-Mail-Checker](/email-checker). So entfernen Sie Adressen, die bouncen würden. Sie entfernen auch Wegwerfadressen und Rollenadressen wie info@, die Beschwerden verursachen. Danach hat Postmaster Tools weniger zu melden. [E-Mail-Verifizierung](/) ersetzt das Dashboard nicht, denn sie sieht keine Spam-Rate. Der Leitfaden zur [E-Mail-Bounce-Rate](/blog/how-to-reduce-email-bounce-rate) erklärt beide Seiten.
