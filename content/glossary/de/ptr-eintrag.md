---
title: PTR-Eintrag
description: Was ein PTR-Eintrag ist, warum Mailserver ihn prüfen, was passiert, wenn eine sendende IP-Adresse keinen PTR-Eintrag hat, und wie Sie einen einrichten.
slug: ptr-eintrag
date: 2026-09-29
updated: 2026-09-29
keyword: ptr eintrag
short: Ein PTR-Eintrag ist ein DNS-Eintrag, der eine IP-Adresse mit einem Hostnamen verbindet. Er ist das Gegenstück zu einem normalen DNS-Eintrag. Mailserver prüfen den PTR-Eintrag der IP-Adresse, die an sie sendet. Manche Server lehnen E-Mails von IP-Adressen ohne PTR-Eintrag ab.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Prüfen Sie Ihre Liste, nicht nur Ihr DNS
---

## Was ein PTR-Eintrag ist

Ein normaler DNS-Eintrag verbindet einen Namen mit einer IP-Adresse. Zum Beispiel zeigt `mail.beispiel.de` auf `203.0.113.10`. Ein PTR-Eintrag macht das Gegenteil. Er verbindet `203.0.113.10` mit `mail.beispiel.de`. Das nennt man Reverse DNS.

PTR steht für Pointer. Der PTR-Eintrag liegt nicht im DNS Ihrer Domain. Er liegt in einer eigenen DNS-Zone, die dem Besitzer der IP-Adresse gehört. Das ist meist Ihr Hosting-Anbieter oder Ihr E-Mail-Anbieter. Um einen PTR-Eintrag zu setzen oder zu ändern, fragen Sie dort an.

## Warum Mailserver ihn prüfen

Wenn Ihr Server sich mit einem empfangenden Server verbindet, sieht der empfangende Server Ihre IP-Adresse. Er schlägt den PTR-Eintrag für diese IP nach. Dann prüft er zwei Dinge:

- Hat die IP-Adresse einen PTR-Eintrag?
- Zeigt der Hostname im PTR-Eintrag zurück auf dieselbe IP-Adresse?

Trifft beides zu, sieht der Absender wie ein echter Mailserver aus, den jemand absichtlich eingerichtet hat. Gibt es keinen PTR-Eintrag, sieht der Absender wie eines von drei Dingen aus: ein privater Internetanschluss, ein infizierter Computer oder ein Server, den niemand konfiguriert hat. Spam kommt oft von diesen.

## Was ohne PTR-Eintrag passiert

Manche Provider lehnen die E-Mail ab. Gmails Fehlerreferenz listet `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Das ist eine dauerhafte Ablehnung. Ihr Versandtool erfasst sie als [Hard Bounce](/glossary/hard-bounce), obwohl die Adresse existiert.

Andere Provider nehmen die E-Mail an, geben ihr aber eine schlechtere Bewertung. Eine schlechtere Bewertung bedeutet, dass die E-Mail eher im Spam-Ordner landet.

## Wie Sie einen PTR-Eintrag einrichten

- Finden Sie die IP-Adresse, von der Ihre E-Mails gesendet werden.
- Wählen Sie den Hostnamen, auf den sie zeigen soll. Beispiel: `mail.ihredomain.de`.
- Stellen Sie sicher, dass dieser Hostname einen normalen DNS-Eintrag hat, der auf dieselbe IP-Adresse zeigt.
- Bitten Sie Ihren Hosting-Anbieter oder E-Mail-Anbieter, den PTR-Eintrag der IP-Adresse auf diesen Hostnamen zu setzen.

Wenn Sie über Google Workspace, Microsoft 365, SendGrid oder Amazon SES senden, gehören die sendenden IP-Adressen dem Anbieter. Die PTR-Einträge sind bereits gesetzt. Sie müssen nur dann einen PTR-Eintrag setzen, wenn Sie einen eigenen Mailserver betreiben oder eine dedizierte IP-Adresse nutzen.

## PTR-Einträge und Verifizierung

Ein PTR-Eintrag betrifft die IP-Adresse des Absenders. Er betrifft nicht die Adresse des Empfängers. Ein [E-Mail-Adressen-Checker](/email-checker) braucht Ihren PTR-Eintrag nicht, um Ihre Liste zu prüfen.

Ein Verifizierer braucht PTR-Einträge auf seinen eigenen IP-Adressen. Ohne sie verweigern empfangende Server das Gespräch mit ihm. Das ist ein Grund, warum ein Verifizierungsdienst andere Antworten bekommt als ein Skript, das auf einem Laptop läuft.
