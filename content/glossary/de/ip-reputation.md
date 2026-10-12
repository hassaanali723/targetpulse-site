---
title: IP-Reputation
description: Was die IP-Reputation bei E-Mails ist, wie sich geteilte und eigene IP-Adressen unterscheiden, was ihr schadet und wie Sie sie prüfen.
slug: ip-reputation
date: 2026-10-12
updated: 2026-10-12
keyword: ip reputation
short: Die IP-Reputation zeigt, wie sehr Mailbox-Provider der IP-Adresse vertrauen, von der Ihre E-Mails kommen. Eine IP-Adresse ist die Nummer, die einen Server im Internet kennzeichnet. Ist die IP-Reputation schlecht, landen Ihre E-Mails im Spam oder werden abgelehnt.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Senden Sie nur an Adressen, die existieren, und schützen Sie Ihre IP
---

## Was ist IP-Reputation?

Jede E-Mail kommt von einem Server. Ein Server ist ein Computer, der rund um die Uhr läuft und zum Beispiel E-Mails versendet. Jeder Server hat eine IP-Adresse. Das ist eine Nummer wie 203.0.113.25, die den Server im Internet kennzeichnet.

Mailbox-Provider wie Gmail, Outlook und Yahoo merken sich, was von jeder IP-Adresse kommt. Ein Mailbox-Provider ist der Anbieter, bei dem Ihre Empfänger ihr Postfach haben. Aus dem, was er beobachtet, bildet er eine Bewertung. Diese Bewertung heißt IP-Reputation.

Kommen von einer IP-Adresse viele erwünschte E-Mails, steigt ihre Reputation. Kommen viele Bounces, Spam-Beschwerden oder Treffer auf Spam Traps, sinkt sie. Bei einer schlechten IP-Reputation sortieren Mailbox-Provider die E-Mails in den Spam-Ordner. Bei einer sehr schlechten lehnen sie die E-Mails ganz ab.

## Ein Beispiel: Zwei Absender auf einer geteilten IP

Ein ESP ist ein Dienst, der E-Mails für seine Kunden versendet. Zwei Kunden eines solchen Dienstes senden über dieselbe IP-Adresse:

- Ein Yogastudio sendet jede Woche einen Newsletter an 2.000 Mitglieder, die sich angemeldet haben.
- Ein anderer Kunde kauft eine Liste mit 50.000 Adressen und sendet an alle auf einmal.

So geht es weiter:

1. Viele Adressen auf der gekauften Liste existieren nicht. Die E-Mails an sie bouncen.
2. Einige Empfänger klicken auf "Spam melden".
3. Ein Teil der Adressen sind [Spam Traps](/glossary/spam-trap). Das sind Adressen, die nur dazu dienen, Absender mit schlechten Listen zu erkennen.
4. Die Mailbox-Provider senken die Reputation der IP-Adresse.
5. Der nächste Newsletter des Yogastudios landet bei vielen Mitgliedern im Spam. Das Studio hat selbst nichts falsch gemacht.

Viele ESPs versuchen, das zu verhindern. Sie prüfen neue Kunden und sperren Konten, die so senden.

## Geteilte IP und eigene IP

| Merkmal | Geteilte IP | Eigene (dedizierte) IP |
| --- | --- | --- |
| Wer darüber sendet | Viele Kunden eines ESP | Nur Sie |
| Wovon die Reputation abhängt | Von allen Absendern auf der IP | Nur von Ihnen |
| Für wen sie passt | Kleine und mittlere Mengen | Große, regelmäßige Mengen |
| Aufwand | Der ESP kümmert sich | Sie müssen die IP erst aufwärmen |

Eine eigene IP lohnt sich nur, wenn Sie regelmäßig viele E-Mails senden. Bei wenigen E-Mails hat die IP zu wenig Verlauf. Mailbox-Provider können sie dann schlecht bewerten.

## Was die IP-Reputation stärkt und was ihr schadet

Das stärkt die IP-Reputation:

- gleichmäßige Mengen, ohne plötzliche Sprünge,
- E-Mails an Menschen, die sich angemeldet haben und Ihre E-Mails öffnen,
- eine einfache Abmeldung.

Das schadet der IP-Reputation:

- **Bounces.** Viele E-Mails an Adressen, die nicht existieren.
- **Spam Traps.** Treffer zeigen, dass eine Liste gekauft, abgegriffen oder alt ist.
- **Beschwerden.** Empfänger, die auf "Spam melden" klicken.
- **Blacklist-Einträge.** Steht die IP auf einer [Blacklist](/glossary/email-blacklist), blockieren viele Server sie sofort.

## So prüfen Sie Ihre IP-Reputation

- **Blacklist-Check.** Dienste wie MXToolbox prüfen Ihre IP-Adresse gegen viele öffentliche Blacklists auf einmal. Technisch heißen diese Listen [DNSBL](/glossary/dnsbl).
- **Microsoft SNDS.** Smart Network Data Services ist ein kostenloser Dienst von Microsoft. Er zeigt Daten über E-Mails von Ihren IP-Adressen an Outlook.com. Sie bekommen nur Zugang zu IP-Adressen, für die Sie verantwortlich sind.
- **Bounce-Meldungen.** Lesen Sie die Fehlermeldungen in Ihren Bounces. Nennen sie eine Blacklist oder einen Grund wie schlechte Reputation, haben Sie einen klaren Hinweis.

Senden Sie über eine geteilte IP Ihres ESP, kümmert sich meist der ESP um die IP-Reputation. Fragen Sie im Zweifel seinen Support.

## So verbessern Sie Ihre IP-Reputation

1. Finden Sie die Ursache. Prüfen Sie Ihre Bounce-Rate, Ihre Beschwerden und mögliche Blacklist-Einträge.
2. Bereinigen Sie Ihre Liste. Entfernen Sie Adressen, die nicht existieren, und Empfänger, die seit Monaten nicht reagieren.
3. Beantragen Sie die Entfernung von Blacklists, nachdem Sie die Ursache behoben haben.
4. Senden Sie eine Zeit lang weniger und nur an Ihre aktivsten Empfänger.
5. Steigern Sie die Menge dann langsam wieder.

Eine neue eigene IP wärmen Sie ebenfalls Schritt für Schritt auf. Das nennt man [IP-Warming](/glossary/ip-warming).

## IP-Reputation und Domain-Reputation

Mailbox-Provider bewerten nicht nur die IP-Adresse, sondern auch Ihre Domain. Die Domain ist der Teil Ihrer Adresse hinter dem @, zum Beispiel example.com. Die IP-Reputation gehört zum Server. Wechseln Sie den ESP, senden Sie von neuen IP-Adressen. Die [Domain-Reputation](/glossary/domain-reputation) nehmen Sie dagegen mit, weil Ihre Domain gleich bleibt.

## IP-Reputation und E-Mail-Verifizierung

Bounces und Treffer auf Spam Traps senken die IP-Reputation. Eine Verifizierung findet Adressen, die nicht existieren, bevor Sie an sie senden. Mit dem [E-Mail-Checker](/email-checker) prüfen Sie einzelne Adressen, mit der [E-Mail-Massenprüfung](/bulk-email-verifier) ganze Listen. Entfernen Sie die toten Adressen, kommen weniger Bounces von Ihrer IP, und alte Adressen werden nicht zu recycelten Spam Traps. Eine schon belastete IP repariert die [E-Mail-Verifizierung](/) nicht, sie verhindert nur neue Schäden durch tote Adressen.
