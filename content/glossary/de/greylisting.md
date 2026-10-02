---
title: Greylisting
description: Was Greylisting ist, warum ein Server Ihre erste E-Mail ablehnt und die zweite annimmt, wie lang die Verzögerung ist und was sie für Prüfungen bedeutet.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: Greylisting ist eine Spam-Abwehr. Ein Mailserver lehnt die erste E-Mail eines Absenders ab, den er nicht kennt. Er nimmt dieselbe E-Mail an, wenn der Absender es ein paar Minuten später erneut versucht. Echte Mailserver versuchen es erneut. Die meiste Spam-Software nicht.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Bekommen Sie eine echte Antwort bei Adressen, die Ihre Prüfungen greylisten
---

## Was Greylisting ist

Greylisting ist eine Spam-Abwehr, die mit einer Verzögerung arbeitet. Sie ist in RFC 6647 beschrieben.

Ein empfangender Server führt ein Verzeichnis aller Absender, die er gesehen hat. Der Server betrachtet drei Dinge: die sendende IP-Adresse, die Absenderadresse und die Empfängeradresse. Hat er diese Kombination noch nie gesehen, lehnt er die E-Mail mit einem vorübergehenden Fehler ab. Ein richtig konfigurierter Mailserver stellt die E-Mail in eine Warteschlange und versucht es erneut. Die meiste Spam-Software sendet einmal und versucht es nicht erneut.

Kommt der erneute Versuch an, nimmt der Server die E-Mail an und speichert den Absender in seinem Verzeichnis. Danach werden E-Mails desselben Absenders beim ersten Versuch angenommen.

## Wie es für den Absender aussieht

Der erste Versuch bekommt einen Code, der mit 4 beginnt. Meist ist es `450` oder `451`, mit einer Nachricht wie "greylisted, try again later". Ihr Mailserver behandelt das als [Soft Bounce](/glossary/soft-bounce) und versucht es nach seinem eigenen Zeitplan erneut.

Der empfangende Server entscheidet, wie lange er wartet, bevor er den erneuten Versuch annimmt. Etwa 15 Minuten sind üblich. Manche Server nutzen eine kürzere oder längere Verzögerung.

Normalerweise bemerken Sie Greylisting nicht. Die E-Mail kommt ein paar Minuten später an. Falls Ihr Tool überhaupt eine Bounce-Meldung anzeigt, erledigt sie sich von selbst.

## Wann Greylisting wichtig ist

Greylisting beeinflusst eine normale Kampagne nicht. Es ist in zwei Fällen wichtig.

**Zeitkritische E-Mails.** Ein Passwort-Reset oder ein Einmalcode, der 15 Minuten zu spät ankommt, ist für den Nutzer nutzlos. Deshalb bitten Absender transaktionaler E-Mails empfangende Domains manchmal, ihre IP-Adressen auf eine Erlaubnisliste zu setzen.

**Verifizierung.** Ein Verifizierer prüft eine Adresse, indem er ein SMTP-Gespräch beginnt und abbricht, bevor er etwas sendet. Bei einem greylistenden Server bekommt der erste Versuch eine `4xx`-Antwort. Ein Verifizierer, der nach einem Versuch aufhört, meldet die Adresse als unbekannt. Die Adresse kann gültig sein.

## Greylisting und Secure Email Gateways

Viele Firmendomains nutzen ein [Secure Email Gateway](/glossary/secure-email-gateway) wie Proofpoint oder Mimecast. Diese Gateways greylisten unbekannte Absender standardmäßig. Das ist ein Grund, warum eine einfache Prüfung bei vielen B2B-Adressen unbekannt liefert.

## Wie ein Verifizierer damit umgeht

Ein guter [E-Mail-Adressen-Checker](/email-checker) behandelt eine `4xx`-Antwort als "erneut versuchen", nicht als Ergebnis. Er wartet, versucht es von derselben IP-Adresse erneut und meldet die Antwort, die der Server nach der Greylisting-Verzögerung gibt. Giggal.ai macht das, wenn es Gateway-Domains auflöst. So liefert es gültig oder ungültig, wo eine Prüfung mit einem einzigen Versuch unbekannt liefert.
