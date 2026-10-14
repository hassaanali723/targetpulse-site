---
title: MX-Eintrag
description: Was ein MX-Eintrag ist, wie Mailserver damit den Zielserver finden, was die Prioritätszahl bedeutet und was ein fehlender MX-Eintrag verrät.
slug: mx-eintrag
date: 2026-09-29
updated: 2026-10-12
keyword: mx eintrag
short: Ein MX-Eintrag ist ein Eintrag im DNS, der sagt, welcher Server die E-Mails für eine Domain empfängt. Wenn Sie an name@example.com senden, schlägt Ihr Mailserver den MX-Eintrag von example.com nach. So findet er den Server, an den er die E-Mail übergeben soll.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Prüfen Sie, ob eine Adresse E-Mails empfangen kann
---

## Was ist ein MX-Eintrag?

Ein MX-Eintrag sagt, welcher Server die E-Mails für eine Domain annimmt. MX steht für Mail Exchanger.

Ein paar Begriffe vorab:

- Eine **Domain** ist der Name hinter dem @ in einer E-Mail-Adresse, zum Beispiel example.com.
- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Das **DNS** ist das öffentliche Verzeichnis, das Domainnamen mit Servern verbindet.
- Ein **Eintrag** ist eine Zeile in diesem Verzeichnis. Es gibt verschiedene Arten von Einträgen für verschiedene Aufgaben.

Ein MX-Eintrag ist also eine Art von DNS-Eintrag. Die MX-Einträge einer Domain listen die Server auf, die eingehende E-Mails für diese Domain annehmen.

Eine Domain kann mehr als einen MX-Eintrag haben. Jeder MX-Eintrag hat eine Prioritätszahl. Server mit niedrigeren Zahlen werden zuerst versucht. Das ist eine typische Konfiguration für eine Google-Workspace-Domain:

| Priorität | Mailserver |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Antwortet der Server mit Priorität 1 nicht, versucht der sendende Server den nächsten. In dieser Tabelle ist das einer der beiden Server mit Priorität 5.

## Ein einfaches Beispiel

1. Eva schreibt eine E-Mail an bestellung@example.com und klickt auf Senden.
2. Ihr Mailserver weiß noch nicht, wohin die E-Mail gehen soll. Er fragt im DNS nach dem MX-Eintrag von example.com.
3. Das DNS antwortet zum Beispiel mit `10 mail.example.com`. Die 10 ist die Prioritätszahl.
4. Evas Mailserver verbindet sich mit mail.example.com.
5. Er übergibt die E-Mail. Der Server von example.com legt sie in das Postfach "bestellung".

Hätte example.com keinen MX-Eintrag und auch keinen A-Eintrag, käme die E-Mail nicht an. Eva bekäme eine Fehlermeldung zurück.

## Wie E-Mail MX-Einträge nutzt

Wenn Sie an `name@example.com` senden, tut Ihr Mailserver drei Dinge:

1. Er schlägt die MX-Einträge für `example.com` nach.
2. Er verbindet sich mit dem Server mit der niedrigsten Prioritätszahl.
3. Er übergibt die E-Mail per SMTP. SMTP ist das Verfahren, mit dem Mailserver E-Mails austauschen.

RFC 5321, der E-Mail-Standard, beschreibt diesen Ablauf. Ein RFC ist ein öffentliches Dokument, das einen Internetstandard festlegt. RFC 5321 behandelt auch Domains ohne MX-Eintrag. Hat die Domain einen normalen A-Eintrag, behandeln Mailserver diesen Eintrag wie einen MX-Eintrag. Ein A-Eintrag verbindet einen Namen mit einer IP-Adresse. Die IP-Adresse ist die Nummer, unter der ein Server im Internet erreichbar ist.

## Was ein MX-Eintrag über eine Adresse sagt

Der MX-Eintrag ist die erste echte Prüfung in der E-Mail-Verifizierung. Die Syntaxprüfung kommt davor. Sie prüft nur, ob die Adresse richtig aufgebaut ist, zum Beispiel ob sie genau ein @ enthält.

- **Kein MX-Eintrag und kein A-Eintrag.** Die Domain kann keine E-Mails empfangen. Jede Adresse auf dieser Domain ist ungültig. Ein Tippfehler in der Domain scheitert meist an diesem Schritt. **Beispiel:** Jemand schreibt name@biespiel-firma.example statt name@beispiel-firma.example. Für die falsch geschriebene Domain gibt es keinen MX-Eintrag.
- **MX-Eintrag vorhanden.** Die Domain kann E-Mails empfangen. Das sagt nichts darüber, ob das konkrete Postfach existiert. Dafür braucht es den nächsten Schritt: ein SMTP-Gespräch mit dem Server. Dabei wird der Server gefragt, ob er E-Mails für genau diese Adresse annimmt.
- **MX-Eintrag zeigt auf ein bekanntes Gateway.** Ist der Mailserver Proofpoint, Mimecast oder Barracuda, nutzt die Domain ein [Secure Email Gateway](/glossary/secure-email-gateway). Das ist ein Dienst, der E-Mails prüft, bevor sie in die Postfächer einer Firma gehen. Auf diesen Domains verhält sich die Postfachprüfung anders.

## Warum es für Absender wichtig ist

Jeder kann den MX-Eintrag einer Domain per DNS-Abfrage lesen. Unser kostenloser [MX-Lookup](/mx-lookup) (auf Englisch) zeigt die MX-Einträge jeder Domain. Wechselt ein Unternehmen den E-Mail-Anbieter oder schließt es, ändert sich sein MX-Eintrag oder verschwindet. Die Adressen funktionieren dann nicht mehr. Niemand sagt es Ihnen.

**Beispiel:** Die Firma Holzbau Meier schließt. Ihre Domain holzbau-meier.example läuft aus, und der MX-Eintrag verschwindet. Auf Ihrer Liste stehen noch drei Adressen dieser Firma. Beim nächsten Newsletter kommen alle drei als Hard Bounce zurück. Ein Hard Bounce ist eine E-Mail, die dauerhaft abgelehnt wird.

Das ist eine häufige Ursache für Hard Bounces auf alten Listen.

## Wie ein Verifizierer damit umgeht

Wenn Sie eine [E-Mail-Adresse prüfen](/email-checker), schlägt das Tool zuerst den MX-Eintrag nach. Gibt es keinen MX-Eintrag, wird die Adresse als ungültig markiert, und es laufen keine weiteren Prüfungen. Gibt es einen MX-Eintrag, verbindet sich der Verifizierer mit diesem Server und fragt, ob das Postfach existiert.

Die MX-Abfrage sagt dem Verifizierer auch, um welche Art von Server es sich handelt. Das ist bei [Catch-all-Domains](/glossary/catch-all-email) und Gateways wichtig. Eine Catch-all-Domain nimmt E-Mails an jede Adresse an, auch an erfundene. Die [E-Mail-Massenprüfung](/bulk-email-verifier) macht diese Schritte für jede Adresse einer Liste. So findet [E-Mail-Verifizierung](/) Adressen auf Domains ohne funktionierenden MX-Eintrag, bevor Sie senden.
