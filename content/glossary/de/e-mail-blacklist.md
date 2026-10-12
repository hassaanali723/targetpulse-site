---
title: E-Mail-Blacklist
description: Was eine E-Mail-Blacklist ist, wie Absender darauf landen, wie Sie prüfen, ob Ihre IP oder Domain gelistet ist, und wie Sie wieder entfernt werden.
slug: e-mail-blacklist
date: 2026-10-12
updated: 2026-10-12
keyword: email blacklist
short: Eine E-Mail-Blacklist ist eine öffentliche Liste mit IP-Adressen und Domains, die Spam versenden. Mailserver fragen solche Listen bei eingehenden E-Mails ab. Steht der Absender darauf, wird die E-Mail oft abgelehnt.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Tote Adressen führen zu Spam Traps. Entfernen Sie sie vor dem Versand
---

## Was ist eine E-Mail-Blacklist?

Eine E-Mail-Blacklist ist eine öffentliche Liste von Absendern, die Spam versenden oder versendet haben. Auf der Liste stehen IP-Adressen oder Domains. Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet. Eine Domain ist der Name hinter dem @ in einer E-Mail-Adresse, zum Beispiel example.com.

Viele Mailserver prüfen bei jeder eingehenden E-Mail, ob der Absender auf einer solchen Liste steht. Diese Abfrage dauert nur einen Bruchteil einer Sekunde. Steht der Absender darauf, lehnt der Server die E-Mail ab oder sortiert sie in den Spam-Ordner. Was genau passiert, legt der Betreiber des empfangenden Servers fest. Einer der bekanntesten Betreiber solcher Listen ist Spamhaus.

## Ein Beispiel: Plötzlich bouncen die E-Mails

Eine Werbeagentur betreibt einen eigenen Mailserver. An einem Montag bouncen viele ihrer E-Mails. In den Bounce-Nachrichten steht zum Beispiel diese Zeile:

```
554 5.7.1 Service unavailable; Client host [203.0.113.25] blocked using zen.spamhaus.org
```

So liest die Agentur diese Meldung:

1. `554` und `5.7.1` beginnen mit 5. Das ist ein dauerhafter Fehler, also ein [Hard Bounce](/glossary/hard-bounce).
2. `203.0.113.25` ist die IP-Adresse ihres eigenen Mailservers.
3. `zen.spamhaus.org` ist eine Liste von Spamhaus. Die IP-Adresse der Agentur steht darauf.

Die Agentur sucht die Ursache. Ein Mitarbeiterkonto wurde gehackt und hat am Wochenende Tausende Spam-E-Mails gesendet. Die Agentur ändert das Passwort und stoppt den Spam. Danach beantragt sie die Entfernung von der Liste.

## IP-Blacklists und Domain-Blacklists

- **IP-Blacklists** führen die IP-Adressen von Servern, die Spam senden. Mailserver fragen sie meist über das DNS ab, das öffentliche Verzeichnis des Internets. Diese Form heißt [DNSBL](/glossary/dnsbl).
- **Domain-Blacklists** führen Domains, die in Spam auftauchen. Das kann die Absenderdomain sein oder eine Domain in einem Link im Text der E-Mail.

Senden Sie über eine geteilte IP Ihres ESP, kann die IP auch wegen eines anderen Kunden gelistet werden. Ein ESP ist ein Dienst, der E-Mails für viele Kunden versendet. Eine Domain-Listung betrifft dagegen immer Ihre eigene Domain, egal über welchen Server Sie senden.

## Blacklist oder Blocklist?

Beide Wörter meinen dasselbe. Spamhaus spricht von "Blocklist". Viele andere Anbieter und Tools sagen weiter "Blacklist". In Bounce-Meldungen und Hilfeartikeln finden Sie beide Begriffe. Siehe auch [Blocklist](/glossary/blocklist).

## Wie Absender auf eine E-Mail-Blacklist kommen

- **Treffer auf [Spam Traps](/glossary/spam-trap).** Das sind Adressen, die nur dazu dienen, Absender mit schlechten Listen zu erkennen. Gekaufte und alte Listen enthalten sie.
- **Beschwerden.** Viele Empfänger melden Ihre E-Mails als Spam.
- **Ein gehacktes Konto oder ein gehackter Server.** Er versendet ohne Ihr Wissen Spam, wie im Beispiel oben.
- **Plötzlich große Mengen von einer neuen IP-Adresse.** Eine neue IP ohne Verlauf, die sofort Zehntausende E-Mails sendet, verhält sich wie ein Spammer.

## So prüfen Sie, ob Sie auf einer Blacklist stehen

1. Finden Sie die IP-Adresse Ihres sendenden Servers heraus. Ihr ESP nennt sie Ihnen, oder sie steht in den Kopfzeilen einer gesendeten E-Mail. Kopfzeilen sind die technischen Zeilen am Anfang jeder E-Mail.
2. Geben Sie die IP-Adresse oder Ihre Domain bei einem Blacklist-Checker ein, zum Beispiel bei MXToolbox.
3. Das Tool fragt viele Blacklists auf einmal ab und zeigt, auf welchen Sie stehen.
4. Lesen Sie auch Ihre Bounce-Nachrichten. Oft nennen sie die Liste, die zur Ablehnung geführt hat.

Nicht jede Liste hat dasselbe Gewicht. Manche kleinen Listen nutzt kaum ein Mailserver. Die Listen von Spamhaus werden dagegen von sehr vielen Mailservern abgefragt.

## So werden Sie von einer Blacklist entfernt

1. **Beheben Sie zuerst die Ursache.** Sichern Sie gehackte Konten, senden Sie nicht mehr an gekaufte Listen und entfernen Sie tote Adressen.
2. **Lesen Sie die Website der Liste.** Jede Blacklist erklärt, warum sie Einträge vornimmt und wie man sie entfernen lässt.
3. **Beantragen Sie die Entfernung** über das Formular der Liste. Manche Listen entfernen Einträge nach einiger Zeit auch von selbst.
4. **Beobachten Sie danach Ihre Bounces.** Tritt das Problem erneut auf, landen Sie schnell wieder auf der Liste.

Senden Sie über eine geteilte IP Ihres ESP, wenden Sie sich an den Support des ESP. Er kümmert sich um die Entfernung der IP.

## E-Mail-Blacklists und E-Mail-Verifizierung

Alte und erfundene Adressen auf einer Liste verursachen Bounces, und alte Adressen können zu Spam Traps werden. Beides kann Ihre IP-Adresse oder Domain auf eine Blacklist bringen. Der [E-Mail-Checker](/email-checker) und die [E-Mail-Massenprüfung](/bulk-email-verifier) finden Adressen, die nicht mehr existieren, damit Sie diese vor dem Versand entfernen. Eine Verifizierung erkennt keine aktiven Spam Traps und holt Sie nicht von einer Blacklist herunter. Regelmäßige [E-Mail-Verifizierung](/) senkt aber das Risiko, dass tote Adressen zu einer Listung führen.
