---
title: E-Mail-Service-Provider (ESP)
description: Was ein E-Mail-Service-Provider ist, welche Anbieter es gibt, wie er sich von einem Mailbox-Provider unterscheidet und warum er auf Ihre Bounces achtet.
slug: e-mail-service-provider
date: 2026-10-12
updated: 2026-10-12
keyword: email service provider
short: Ein E-Mail-Service-Provider (ESP) ist ein Dienst, der E-Mails in Ihrem Auftrag versendet, zum Beispiel Newsletter oder Bestellbestätigungen. Bekannte Anbieter sind Mailchimp, Brevo und SendGrid. Ein ESP ist nicht dasselbe wie Gmail oder Outlook, wo Menschen ihre E-Mails lesen.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Prüfen Sie Ihre Liste, bevor Sie sie zu Ihrem ESP hochladen
---

## Was ist ein E-Mail-Service-Provider?

Ein E-Mail-Service-Provider, kurz ESP, ist eine Firma, deren Dienst E-Mails für Sie versendet. Sie laden Ihre Empfängerliste hoch, schreiben Ihre E-Mail und klicken auf Senden. Der ESP stellt die E-Mails dann über seine eigenen Server zu. Ein Server ist ein Computer, der rund um die Uhr läuft und Dienste für andere Computer anbietet.

Im deutschen Marketing spricht man auch von E-Mail-Marketing-Anbietern, Newsletter-Tools oder Versanddienstleistern. Gemeint ist meist dasselbe: ein Dienst, der viele E-Mails zuverlässig für Sie verschickt. Wer einen E-Mail-Marketing-Anbieter sucht, sucht also in der Regel einen ESP.

## Ein Beispiel: Die Bäckerei und ihr Newsletter

Die Bäckerei Krüger hat 3.000 Kunden, die ihren Newsletter abonniert haben. Jeden Monat stellt sie neue Brote und Angebote vor. Aus ihrem normalen Gmail-Konto kann sie den Newsletter nicht gut senden. Gmail begrenzt, wie viele E-Mails ein privates Konto pro Tag senden darf. Ein privates Konto hat auch keine Abmeldelinks und keine Berichte.

Deshalb nutzt die Bäckerei einen ESP. So läuft es ab:

1. Die Bäckerei legt ein Konto bei einem ESP an, zum Beispiel bei Brevo.
2. Sie lädt ihre Liste mit 3.000 Adressen hoch.
3. Sie gestaltet den Newsletter im Editor des ESP.
4. Der ESP fügt automatisch einen Abmeldelink ein.
5. Die Bäckerei klickt auf Senden. Der ESP verschickt die 3.000 E-Mails über seine Server.
6. Am nächsten Tag sieht die Bäckerei im Bericht, wie viele E-Mails geöffnet wurden und wie viele gebounct sind.

## Bekannte E-Mail-Service-Provider

| Anbieter | Wofür er vor allem genutzt wird |
| --- | --- |
| Mailchimp | Newsletter und Marketing-E-Mails |
| Brevo | Newsletter, Marketing und transaktionale E-Mails |
| SendGrid | Transaktionale E-Mails und Marketing, oft über eine API |
| Amazon SES | Versand über eine API, vor allem für Entwickler |
| Postmark | Transaktionale E-Mails |

Eine API ist eine Schnittstelle, über die Software direkt mit dem Dienst spricht. Ein Onlineshop kann so zum Beispiel jede Bestellbestätigung automatisch über Amazon SES senden.

## ESP und Mailbox-Provider: der Unterschied

Diese beiden Begriffe werden oft verwechselt:

- Ein **ESP** sendet E-Mails. Mailchimp, Brevo oder SendGrid stellen Ihre E-Mails an die Empfänger zu.
- Ein **Mailbox-Provider** ist der Anbieter, bei dem jemand sein Postfach hat und seine E-Mails liest. Beispiele sind Gmail, Outlook, Yahoo und GMX.

Im Beispiel oben ist Brevo der ESP der Bäckerei. Eine Kundin liest den Newsletter in ihrem Gmail-Postfach. Für sie ist Gmail der Mailbox-Provider. Gmail entscheidet, ob der Newsletter im Posteingang oder im Spam-Ordner landet. Der ESP kann das nicht bestimmen.

## Marketing-ESP und transaktionaler ESP

Es gibt zwei Arten von E-Mails, die ein ESP versendet:

- **Marketing-E-Mails** gehen an viele Empfänger gleichzeitig. Beispiele sind Newsletter, Angebote und Einladungen.
- **Transaktionale E-Mails** gehen an eine Person, weil sie etwas getan hat. Beispiele sind Bestellbestätigungen, Rechnungen und Links zum Zurücksetzen eines Passworts.

Manche ESPs sind für eine der beiden Arten gebaut, andere bieten beide an. Viele Firmen trennen die beiden Arten, oft mit eigenen Domains oder Subdomains. Bekommt ein Newsletter viele Beschwerden, leidet dann nicht die Zustellung der Rechnungen.

## Was ein ESP für Sie übernimmt

- **Sendende Server.** Sie müssen keinen eigenen Mailserver betreiben. Der ESP nutzt [SMTP](/glossary/smtp), das Protokoll, mit dem Mailserver E-Mails aneinander senden.
- **Abmeldelinks.** Jede Marketing-E-Mail bekommt einen Link, über den sich Empfänger abmelden können.
- **Verarbeitung von Bounces.** Adressen, die dauerhaft scheitern, werden meist automatisch gesperrt.
- **Berichte.** Sie sehen Öffnungen, Klicks, Bounces und Abmeldungen.
- **Hilfe bei der Authentifizierung.** Der ESP zeigt Ihnen die DNS-Einträge für SPF und DKIM, damit Ihre E-Mails als echt erkannt werden.

## Warum Ihr ESP auf Ihre Bounces achtet

Viele Kunden eines ESP senden über dieselben IP-Adressen. Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet. Sendet ein Kunde an viele Adressen, die nicht existieren, leidet der Ruf dieser IP-Adressen. Das trifft dann auch alle anderen Kunden, die darüber senden.

Deshalb beobachten viele ESPs die Bounce-Rate jedes Kontos. Die Bounce-Rate ist der Anteil der E-Mails, die nicht zugestellt werden konnten. Ist sie zu hoch, können viele ESPs ein Konto prüfen oder den Versand pausieren. Die genauen Grenzen legt jeder ESP selbst fest. Mehr dazu unter [Bounce-Rate](/glossary/bounce-rate).

## E-Mail-Service-Provider und E-Mail-Verifizierung

Prüfen Sie Ihre Liste, bevor Sie sie zu Ihrem ESP hochladen. Die [E-Mail-Massenprüfung](/bulk-email-verifier) findet in Ihrer Datei die Adressen, die nicht existieren, damit Sie diese vor dem Import entfernen. Neue Kontakte können Sie einzeln mit dem [E-Mail-Checker](/email-checker) prüfen. So bleibt Ihre Bounce-Rate beim ESP niedrig, und das Risiko einer Sperre wegen Bounces sinkt. Die [E-Mail-Verifizierung](/) ersetzt Ihren ESP nicht, sie sorgt nur dafür, dass er an Adressen sendet, die es gibt.
