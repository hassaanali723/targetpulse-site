---
title: DNS-TXT-Eintrag
description: Was ein DNS-TXT-Eintrag ist, wofür er bei E-Mails dient (SPF, DKIM und DMARC), wie Sie einen anlegen, welche Regeln ihn ungültig machen und wie Sie ihn prüfen. Mit Beispielen.
slug: dns-txt-eintrag
date: 2026-10-22
updated: 2026-10-22
keyword: dns txt eintrag
short: Ein DNS-TXT-Eintrag ist eine Textzeile in den Einstellungen Ihrer Domain. Mailserver lesen TXT-Einträge, um SPF, DKIM und DMARC zu prüfen. Andere Dienste lesen sie, um zu bestätigen, dass Ihnen die Domain gehört.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Ihre Einträge stehen. Prüfen Sie jetzt die Adressen, an die Sie senden
---

## Was ist ein DNS-TXT-Eintrag?

Ein DNS-TXT-Eintrag ist eine Textzeile in den Einstellungen Ihrer Domain. Jeder im Internet kann sie lesen.

Zuerst, was DNS ist. DNS steht für Domain Name System. Es funktioniert wie ein öffentliches Telefonbuch für Domains. Wenn jemand Ihre Domain eintippt, sagt das DNS seinem Computer, wo er sie findet. Das DNS enthält verschiedene Arten von Einträgen. Jede Art von Eintrag hat eine Aufgabe.

Ein TXT-Eintrag enthält einfachen Text. Er schickt niemanden irgendwohin. Er ist eine Notiz, die an Ihre Domain angehängt ist. Andere Systeme lesen die Notiz und handeln danach.

## Wofür TXT-Einträge genutzt werden

Bei E-Mails enthalten TXT-Einträge die Regeln, die beweisen, dass Ihre E-Mails echt sind.

| Zweck | Wo der Eintrag steht | Beispielwert |
|---|---|---|
| **[SPF](/glossary/spf)** | Ihre Domain, zum Beispiel `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Domain-Inhaberschaft** | Ihre Domain | `google-site-verification=abc123...` |

Die Werte oben sind gekürzte Beispiele. Ihre echten Werte bekommen Sie von Ihrem E-Mail-Anbieter oder von dem Dienst, den Sie verbinden.

## Ein einfaches Beispiel

So wird ein TXT-Eintrag angelegt.

1. **Marco beginnt mit Google Workspace.** Er möchte, dass seine E-Mails von marco@studio.example in den Posteingängen ankommen.
2. **Google gibt ihm einen Wert.** Die Einrichtungsanleitung sagt ihm, er soll einen SPF-Eintrag mit `v=spf1 include:_spf.google.com ~all` anlegen.
3. **Marco öffnet seine Domain-Einstellungen.** Er meldet sich dort an, wo er die Domain gekauft hat. Das nennt man Registrar oder DNS-Hoster.
4. **Er legt einen TXT-Eintrag an.** Er wählt den Typ TXT, lässt den Namen auf seiner Domain und fügt den Wert ein.
5. **Er wartet.** Es kann ein paar Minuten bis ein paar Stunden dauern, bis die Änderung überall sichtbar ist.
6. **Server können ihn jetzt prüfen.** Sendet Marco eine E-Mail, liest der empfangende Server seinen TXT-Eintrag. Er sieht, dass die Server von Google für studio.example senden dürfen.

## Regeln, die TXT-Einträge ungültig machen

Die meisten Probleme mit TXT-Einträgen kommen von ein paar einfachen Fehlern.

- **Nur ein SPF-Eintrag pro Domain.** Hat eine Domain zwei TXT-Einträge, die mit `v=spf1` beginnen, schlägt SPF fehl. Fassen Sie sie stattdessen zu einem Eintrag zusammen.
- **Lange Werte werden aufgeteilt.** Ein Textstück in einem TXT-Eintrag kann bis zu 255 Zeichen enthalten. Lange Werte, zum Beispiel DKIM-Schlüssel, werden als mehrere Stücke gespeichert. Die meisten DNS-Hoster erledigen das für Sie.
- **Nutzen Sie den genauen Namen.** Ein DMARC-Eintrag muss bei `_dmarc` stehen, nicht bei Ihrer Hauptdomain. Ein DKIM-Eintrag muss bei dem Selektor-Namen stehen, den Ihr Anbieter Ihnen gibt.
- **Kopieren Sie den Wert genau.** Ein einziges fehlendes Zeichen macht den Eintrag nutzlos.

## Wie Sie einen TXT-Eintrag prüfen

Sie können die TXT-Einträge jeder Domain lesen. Auf einem Mac oder Linux-Computer öffnen Sie das Terminal und tippen `dig TXT example.com`. Unter Windows tippen Sie `nslookup -type=TXT example.com`.

Sie können auch unseren [SPF-Checker](/spf-checker) (auf Englisch) nutzen. Er liest den SPF-Eintrag einer Domain und erklärt, was er erlaubt.

## Was TXT-Einträge mit Verifizierung zu tun haben

TXT-Einträge schützen die E-Mails, die Sie senden. Sie beweisen, dass die E-Mail von Ihnen kommt. Sie sagen nichts darüber, ob die Person, der Sie schreiben, noch ein Postfach hat.

Das ist eine andere Prüfung. Ein [E-Mail-Checker](/email-checker) fragt den empfangenden Server, ob eine Adresse existiert. Sie brauchen beides: richtige Einträge auf Ihrer Domain und eine saubere Liste mit echten Adressen.
