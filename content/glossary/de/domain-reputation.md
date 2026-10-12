---
title: Domain-Reputation
description: Was die Domain-Reputation bei E-Mails ist, wie sie sich von der IP-Reputation unterscheidet, was ihr schadet und wie Sie Ihre Domain schützen.
slug: domain-reputation
date: 2026-10-12
updated: 2026-10-12
keyword: domain reputation
short: Die Domain-Reputation zeigt, wie sehr Mailbox-Provider Ihrer Absenderdomain vertrauen. Die Domain ist der Teil Ihrer E-Mail-Adresse hinter dem @. Mit einer guten Domain-Reputation landen Ihre E-Mails eher im Posteingang, mit einer schlechten eher im Spam.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Schützen Sie Ihre Domain vor Bounces, bevor Sie senden
---

## Was ist Domain-Reputation?

Ihre Domain ist der Teil Ihrer E-Mail-Adresse hinter dem @. Bei info@example.com ist die Domain example.com. Mailbox-Provider wie Gmail, Outlook und Yahoo beobachten, was von jeder Domain kommt. Ein Mailbox-Provider ist der Anbieter, bei dem Ihre Empfänger ihr Postfach haben.

Der Provider achtet auf Fragen wie diese: Wie viele E-Mails dieser Domain bouncen? Wie oft melden Empfänger sie als Spam? Besteht die Domain die Prüfungen SPF, DKIM und DMARC? Aus diesen Signalen bildet er eine Bewertung. Diese Bewertung heißt Domain-Reputation.

Die Domain-Reputation entscheidet mit, wo Ihre E-Mails landen. Bei einer guten Reputation landen sie eher im Posteingang. Bei einer schlechten landen sie eher im Spam-Ordner, auch wenn der Inhalt in Ordnung ist.

## Ein Beispiel: Der Wechsel zu einem anderen Versanddienst

Ein Reiseveranstalter sendet seinen Newsletter von news@example.com. Seit drei Jahren nutzt er dafür einen ESP. Ein ESP ist ein Dienst, der E-Mails für seine Kunden versendet. Nun wechselt er zu einem anderen ESP. So ändert sich seine Lage:

1. Beim neuen ESP kommen seine E-Mails von anderen IP-Adressen. Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet.
2. Die Reputation der alten IP-Adressen bleibt beim alten ESP.
3. Die Domain example.com bleibt gleich. Ihre Reputation zieht mit zum neuen ESP um.
4. War die Domain-Reputation gut, kommen seine E-Mails auch beim neuen ESP gut an.
5. War sie schlecht, hilft der Wechsel nicht. Die Probleme ziehen mit um.

Ein Wechsel des ESP repariert also keine schlechte Domain-Reputation. Nur besseres Senden über Wochen hilft.

## Domain-Reputation und IP-Reputation im Vergleich

| Merkmal | Domain-Reputation | IP-Reputation |
| --- | --- | --- |
| Was bewertet wird | Ihre Domain, zum Beispiel example.com | Die IP-Adresse des sendenden Servers |
| Wem sie gehört | Ihnen | Bei geteilten IPs dem ESP |
| Bei einem Wechsel des ESP | Bleibt bei Ihnen | Bleibt beim alten ESP |
| Wodurch sie entsteht | Alle E-Mails mit Ihrer Domain | Alle E-Mails von dieser IP, auch die anderer Kunden |

Mehr zur rechten Spalte steht unter [IP-Reputation](/glossary/ip-reputation).

## Was der Domain-Reputation schadet

- **Bounces.** Viele E-Mails an Adressen, die nicht existieren. Siehe [Bounce-Rate](/glossary/bounce-rate).
- **Beschwerden.** Empfänger, die Ihre E-Mails als Spam melden. Googles Absenderrichtlinien nennen eine Spam-Rate von 0,30 Prozent, die Sie nie erreichen sollten.
- **Spam Traps.** Adressen, die nur dazu dienen, Absender mit schlechten Listen zu erkennen.
- **Fehlende Authentifizierung.** Ohne [SPF](/glossary/spf), [DKIM](/glossary/dkim) und [DMARC](/glossary/dmarc) kann ein Provider Ihre E-Mails nicht sicher Ihrer Domain zuordnen. Betrüger können Ihre Domain dann leichter fälschen.
- **Plötzliche große Mengen.** Eine neue Domain, die sofort Tausende E-Mails sendet, wirkt verdächtig.

## So prüfen Sie Ihre Domain-Reputation

Kein Mailbox-Provider zeigt Ihnen eine vollständige Bewertung. Es gibt aber gute Hinweise:

- **[Google Postmaster Tools](/glossary/postmaster-tools).** Das kostenlose Tool von Google zeigt Daten zu Ihren E-Mails an Gmail-Adressen, zum Beispiel Ihre Spam-Rate. Sie müssen zuerst nachweisen, dass Ihnen die Domain gehört. Bei wenig Volumen bleiben die Daten leer.
- **DMARC-Berichte.** Sie zeigen, welche Server in Ihrem Namen senden und ob die E-Mails die Prüfungen bestehen.
- **Ihre eigenen Zahlen.** Steigt die Bounce-Rate oder sinken die Öffnungen bei einem Anbieter plötzlich, kann Ihre Reputation dort gesunken sein.
- **Domain-Blacklists.** Manche Blacklists führen Domains statt IP-Adressen. Prüfdienste wie MXToolbox zeigen, ob Ihre Domain auf einer davon steht.

## So schützen Sie Ihre Domain-Reputation

1. Richten Sie SPF, DKIM und DMARC ein.
2. Prüfen Sie Ihre Listen vor dem Versand und entfernen Sie Adressen, die nicht existieren.
3. Senden Sie Kalt-E-Mails von einer eigenen Domain oder Subdomain. Kalt-E-Mails sind E-Mails an Menschen, die Sie noch nicht kennen. Eine Subdomain ist ein Name vor Ihrer Domain, zum Beispiel mail.example.com.
4. Senden Sie von einer neuen Domain zuerst wenig und steigern Sie langsam. Siehe [E-Mail-Warm-up](/glossary/email-warmup).
5. Machen Sie die Abmeldung einfach, damit Empfänger nicht auf "Spam melden" klicken.
6. Entfernen Sie Empfänger, die seit Monaten keine E-Mail geöffnet haben.

## Domain-Reputation und E-Mail-Verifizierung

Ihre Domain-Reputation bleibt bei Ihnen, auch wenn Sie den ESP oder die IP-Adresse wechseln, deshalb lohnt es sich, sie vor Bounces zu schützen. Der [E-Mail-Prüfer](/email-checker) prüft einzelne Adressen, die [E-Mail-Massenprüfung](/bulk-email-verifier) ganze Listen. Beide finden Adressen, die nicht existieren. Wenn Sie diese vor dem Versand entfernen, sinkt Ihre Bounce-Rate, und tote Adressen werden nicht zu Spam Traps. Beschwerden und fehlende Authentifizierung behebt die [E-Mail-Verifizierung](/) nicht, dafür sind Ihre Inhalte und Ihre DNS-Einträge zuständig.
