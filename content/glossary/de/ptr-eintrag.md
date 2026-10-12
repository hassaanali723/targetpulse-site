---
title: PTR-Eintrag
description: Was ein PTR-Eintrag ist, warum Mailserver ihn prüfen, was passiert, wenn eine sendende IP-Adresse keinen PTR-Eintrag hat, und wie Sie einen einrichten.
slug: ptr-eintrag
date: 2026-09-29
updated: 2026-10-12
keyword: ptr eintrag
short: Ein PTR-Eintrag ist ein Eintrag im DNS, der eine IP-Adresse mit einem Servernamen verbindet. Mailserver prüfen den PTR-Eintrag der IP-Adresse, die ihnen eine E-Mail schickt. Manche Server lehnen E-Mails von IP-Adressen ohne PTR-Eintrag ab.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Prüfen Sie Ihre Liste, nicht nur Ihr DNS
---

## Was ist ein PTR-Eintrag?

Ein PTR-Eintrag verbindet eine IP-Adresse mit einem Namen. So kann jeder nachsehen, zu welchem Server eine IP-Adresse gehört.

Ein paar Begriffe vorab:

- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Eine **IP-Adresse** ist die Nummer, unter der ein Server im Internet erreichbar ist, zum Beispiel `203.0.113.10`.
- Ein **Hostname** ist der Name eines Servers, zum Beispiel `mail.example.com`.
- Das **DNS** ist das öffentliche Verzeichnis, das Namen und IP-Adressen verbindet. Ein **Eintrag** ist eine Zeile darin.

Ein normaler DNS-Eintrag verbindet einen Namen mit einer IP-Adresse. Zum Beispiel zeigt `mail.example.com` auf `203.0.113.10`. Ein PTR-Eintrag macht das Gegenteil. Er verbindet `203.0.113.10` mit `mail.example.com`. Das nennt man Reverse DNS, also umgekehrtes DNS.

PTR steht für Pointer. Der PTR-Eintrag liegt nicht im DNS Ihrer Domain. Er liegt in einer eigenen DNS-Zone, die dem Besitzer der IP-Adresse gehört. Eine DNS-Zone ist der Teil des DNS, den eine bestimmte Firma verwaltet. Der Besitzer ist meist Ihr Hosting-Anbieter oder Ihr E-Mail-Anbieter. Um einen PTR-Eintrag zu setzen oder zu ändern, fragen Sie dort an.

## Ein einfaches Beispiel

1. Die Bäckerei Sommer betreibt einen eigenen Mailserver. Er hat die IP-Adresse `203.0.113.10` und den Namen `mail.baeckerei-sommer.example`.
2. Der Server sendet eine Rechnung an einen Kunden mit einer Gmail-Adresse.
3. Gmail sieht die IP-Adresse `203.0.113.10`. Es fragt im DNS, welcher Name zu dieser IP-Adresse gehört.
4. Der PTR-Eintrag antwortet: `mail.baeckerei-sommer.example`.
5. Dann prüft Gmail die andere Richtung. Zeigt `mail.baeckerei-sommer.example` auf `203.0.113.10`? Die Antwort ist ja.
6. Beide Richtungen passen. Der Server sieht aus wie ein echter Mailserver, den jemand absichtlich eingerichtet hat.

Fehlt der PTR-Eintrag, endet das Beispiel anders. Gmail kann die Rechnung dann ablehnen. Mehr dazu weiter unten.

## Warum Mailserver ihn prüfen

Wenn Ihr Server sich mit einem empfangenden Server verbindet, sieht der empfangende Server Ihre IP-Adresse. Er schlägt den PTR-Eintrag für diese IP-Adresse nach. Dann prüft er zwei Dinge:

1. Hat die IP-Adresse einen PTR-Eintrag?
2. Zeigt der Hostname im PTR-Eintrag zurück auf dieselbe IP-Adresse?

Trifft beides zu, sieht der Absender wie ein echter Mailserver aus, den jemand absichtlich eingerichtet hat. Gibt es keinen PTR-Eintrag, sieht der Absender wie eines von drei Dingen aus:

- ein privater Internetanschluss,
- ein infizierter Computer,
- ein Server, den niemand konfiguriert hat.

Spam kommt oft von diesen.

## Was ohne PTR-Eintrag passiert

Manche Provider lehnen die E-Mail ab. Gmails Fehlerreferenz listet `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Das ist eine dauerhafte Ablehnung. Ihr Versandtool erfasst sie als [Hard Bounce](/glossary/hard-bounce), obwohl die Adresse existiert. Ein Hard Bounce ist eine E-Mail, die dauerhaft abgelehnt wurde.

Andere Provider nehmen die E-Mail an, geben ihr aber eine schlechtere Bewertung. Eine schlechtere Bewertung bedeutet, dass die E-Mail eher im Spam-Ordner landet.

**Beispiel:** Ein Entwickler richtet für seinen Onlineshop einen neuen Server ein. Er vergisst den PTR-Eintrag. Die ersten Bestellbestätigungen an Gmail-Adressen kommen mit `550 5.7.25` zurück. Die Adressen der Kunden sind alle richtig. Erst nachdem der Anbieter den PTR-Eintrag gesetzt hat, kommen die E-Mails an.

## Wie Sie einen PTR-Eintrag einrichten

1. Finden Sie die IP-Adresse, von der Ihre E-Mails gesendet werden.
2. Wählen Sie den Hostnamen, auf den sie zeigen soll. Beispiel: `mail.ihre-firma.example`.
3. Stellen Sie sicher, dass dieser Hostname einen normalen DNS-Eintrag hat, der auf dieselbe IP-Adresse zeigt.
4. Bitten Sie Ihren Hosting-Anbieter oder E-Mail-Anbieter, den PTR-Eintrag der IP-Adresse auf diesen Hostnamen zu setzen.

Senden Sie über Google Workspace, Microsoft 365, SendGrid oder Amazon SES? Dann gehören die sendenden IP-Adressen dem Anbieter. Der PTR-Eintrag ist für jede dieser IP-Adressen bereits gesetzt. Sie brauchen nur dann einen eigenen PTR-Eintrag, wenn Sie einen eigenen Mailserver betreiben oder eine dedizierte IP-Adresse nutzen. Eine dedizierte IP-Adresse ist eine IP-Adresse, die nur Sie zum Senden nutzen.

## PTR-Einträge und Verifizierung

Ein PTR-Eintrag betrifft die IP-Adresse des Absenders. Er betrifft nicht die Adresse des Empfängers. Ein [E-Mail-Checker](/email-checker) braucht Ihren PTR-Eintrag nicht, um Ihre Liste zu prüfen.

Ein Verifizierer braucht aber einen PTR-Eintrag auf jeder seiner eigenen IP-Adressen. Ohne ihn verweigern empfangende Server das Gespräch mit ihm. Das ist ein Grund, warum ein Verifizierungsdienst andere Antworten bekommt als ein Skript, das auf einem Laptop läuft.

[E-Mail-Verifizierung](/) findet Adressen, die nicht existieren, bevor Sie senden. Für eine ganze Liste nutzen Sie die [E-Mail-Massenprüfung](/bulk-email-verifier). Einen fehlenden PTR-Eintrag auf Ihrem eigenen Server behebt sie nicht. Den setzt Ihr Anbieter.
