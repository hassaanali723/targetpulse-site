---
title: Greylisting
description: Was Greylisting ist, warum ein Server Ihre erste E-Mail ablehnt und die zweite annimmt, wie lang die Verzögerung ist und was sie für Prüfungen bedeutet.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Greylisting ist eine Spam-Abwehr, bei der ein Mailserver die erste E-Mail eines unbekannten Absenders ablehnt. Versucht der Absender es ein paar Minuten später erneut, nimmt der Server dieselbe E-Mail an. Echte Mailserver versuchen es erneut, die meiste Spam-Software nicht.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Bekommen Sie eine echte Antwort bei Adressen, die Ihre Prüfungen greylisten
---

## Was ist Greylisting?

Greylisting ist eine Spam-Abwehr, die mit einer Verzögerung arbeitet. Ein Mailserver nimmt die erste E-Mail eines unbekannten Absenders nicht sofort an. Er bittet den Absender, es später noch einmal zu versuchen. Das Verfahren ist in RFC 6647 beschrieben. Ein RFC ist ein öffentliches Dokument, das einen Internetstandard festlegt.

Ein paar Begriffe vorab:

- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Eine **IP-Adresse** ist die Nummer, unter der ein Server im Internet erreichbar ist.
- Ein **Code** ist eine Zahl in der Antwort des Servers. Sie sagt, ob er die E-Mail annimmt.

Ein empfangender Server führt ein Verzeichnis aller Absender, die er gesehen hat. Der Server betrachtet drei Dinge:

1. die sendende IP-Adresse,
2. die Absenderadresse,
3. die Empfängeradresse.

Hat er diese Kombination noch nie gesehen, lehnt er die E-Mail mit einem vorübergehenden Fehler ab. Ein richtig konfigurierter Mailserver stellt die E-Mail in eine Warteschlange und versucht es erneut. Die meiste Spam-Software sendet einmal und versucht es nicht erneut.

Kommt der erneute Versuch an, nimmt der Server die E-Mail an und speichert den Absender in seinem Verzeichnis. Danach werden E-Mails desselben Absenders beim ersten Versuch angenommen.

## Ein einfaches Beispiel

1. Anna schreibt zum ersten Mal an einen Lieferanten: einkauf@lieferant.example. Der Server des Lieferanten nutzt Greylisting.
2. Um 10:00 Uhr kommt Annas E-Mail an. Der Server kennt die Kombination aus Annas IP-Adresse, Annas Adresse und einkauf@lieferant.example noch nicht.
3. Er antwortet mit `451` und dem Hinweis "try again later". Die E-Mail ist noch nicht zugestellt.
4. Annas Mailserver legt die E-Mail in seine Warteschlange.
5. Um 10:20 Uhr versucht er es erneut. Die Wartezeit des Servers ist vorbei. Er nimmt die E-Mail an.
6. Schreibt Anna am nächsten Tag wieder, geht ihre E-Mail sofort durch. Der Server kennt die Kombination jetzt.

Anna merkt davon nichts. Ihre E-Mail kommt in diesem Beispiel nur 20 Minuten später an.

## Wie es für den Absender aussieht

Der erste Versuch bekommt einen Code, der mit 4 beginnt. Ein Code mit 4 bedeutet "vorübergehend". Meist ist es `450` oder `451`, mit einer Nachricht wie "greylisted, try again later". Ihr Mailserver behandelt das als [Soft Bounce](/glossary/soft-bounce), also als vorübergehenden Zustellfehler. Er versucht es nach seinem eigenen Zeitplan erneut.

Der empfangende Server entscheidet, wie lange er wartet, bevor er den erneuten Versuch annimmt. Etwa 15 Minuten sind üblich. Manche Server nutzen eine kürzere oder längere Verzögerung.

Normalerweise bemerken Sie Greylisting nicht. Die E-Mail kommt ein paar Minuten später an. Falls Ihr Tool überhaupt eine Bounce-Meldung anzeigt, erledigt sie sich von selbst.

## Wann Greylisting wichtig ist

Greylisting beeinflusst eine normale Kampagne nicht. Es ist in zwei Fällen wichtig.

**Zeitkritische E-Mails.** Ein Passwort-Reset oder ein Einmalcode, der 15 Minuten zu spät ankommt, ist für den Nutzer nutzlos. **Beispiel:** Jan will sich in einem Onlineshop anmelden. Sein Code ist 10 Minuten gültig. Wegen Greylisting kommt er erst nach 15 Minuten an. Jan kann ihn nicht mehr nutzen.

Deshalb bitten Absender transaktionaler E-Mails empfangende Domains manchmal, ihre IP-Adressen auf eine Erlaubnisliste zu setzen. Transaktionale E-Mails sind E-Mails, die eine Person durch eine Handlung auslöst, etwa durch eine Bestellung oder einen Passwort-Reset.

**Verifizierung.** Ein Verifizierer prüft eine Adresse, indem er ein SMTP-Gespräch beginnt und abbricht, bevor er etwas sendet. SMTP ist das Verfahren, mit dem Mailserver E-Mails austauschen. Bei einem Server mit Greylisting bekommt der erste Versuch eine `4xx`-Antwort. Ein Verifizierer, der nach einem Versuch aufhört, meldet die Adresse als unbekannt. Die Adresse kann aber gültig sein.

## Greylisting und Secure Email Gateways

Viele Firmendomains nutzen ein [Secure Email Gateway](/glossary/secure-email-gateway) wie Proofpoint oder Mimecast. Das ist ein Dienst, der eingehende E-Mails prüft, bevor sie in die Postfächer einer Firma gehen. Diese Gateways greylisten unbekannte Absender standardmäßig. Das ist ein Grund, warum eine einfache Prüfung bei vielen B2B-Adressen unbekannt liefert. B2B-Adressen sind geschäftliche Adressen von Firmen.

## Wie ein Verifizierer damit umgeht

Ein guter [E-Mail-Checker](/email-checker) behandelt eine `4xx`-Antwort als "erneut versuchen", nicht als Ergebnis. Er wartet, versucht es von derselben IP-Adresse erneut und meldet die Antwort, die der Server nach der Greylisting-Verzögerung gibt. Giggal.ai macht das, wenn es Gateway-Domains auflöst. So liefert es gültig oder ungültig, wo eine Prüfung mit einem einzigen Versuch unbekannt liefert.

Die [E-Mail-Massenprüfung](/bulk-email-verifier) nutzt dasselbe Verfahren für ganze Listen. So findet [E-Mail-Verifizierung](/) auch bei Servern mit Greylisting die Adressen, die nicht existieren, bevor Sie senden.
