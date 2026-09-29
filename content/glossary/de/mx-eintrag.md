---
title: MX-Eintrag
description: Was ein MX-Eintrag ist, wie Mailserver ihn nutzen, um den Zielserver zu finden, was die Prioritätszahl bedeutet und was ein fehlender MX-Eintrag einem Verifizierer sagt.
slug: mx-eintrag
date: 2026-09-29
updated: 2026-09-29
keyword: mx eintrag
short: Ein MX-Eintrag ist ein DNS-Eintrag, der sagt, welcher Server E-Mails für eine Domain empfängt. Wenn Sie an name@beispiel.de senden, schlägt Ihr Mailserver den MX-Eintrag von beispiel.de nach, um den Server zu finden, an den er zustellen soll.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Prüfen Sie, ob eine Adresse E-Mails empfangen kann
---

## Was ein MX-Eintrag ist

MX steht für Mail Exchanger. Ein MX-Eintrag ist eine Art von DNS-Eintrag. DNS ist das öffentliche Verzeichnis, das Domainnamen mit Servern verbindet. Die MX-Einträge einer Domain listen die Server auf, die eingehende E-Mails für diese Domain annehmen.

Eine Domain kann mehr als einen MX-Eintrag haben. Jeder Eintrag hat eine Prioritätszahl. Server mit niedrigeren Zahlen werden zuerst versucht. Das ist eine typische Konfiguration für eine Google-Workspace-Domain:

| Priorität | Mailserver |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Antwortet der Server mit Priorität 1 nicht, versucht der sendende Server den nächsten.

## Wie E-Mail MX-Einträge nutzt

Wenn Sie an `name@beispiel.de` senden, tut Ihr Mailserver drei Dinge:

- Er schlägt die MX-Einträge für `beispiel.de` nach.
- Er verbindet sich mit dem Server mit der niedrigsten Prioritätszahl.
- Er übergibt die E-Mail per SMTP.

RFC 5321, der E-Mail-Standard, beschreibt diesen Ablauf. Er behandelt auch Domains ohne MX-Eintrag. Hat die Domain einen normalen A-Eintrag, behandeln Mailserver diesen Eintrag wie einen MX-Eintrag.

## Was ein MX-Eintrag über eine Adresse sagt

Der MX-Eintrag ist die erste echte Prüfung in der E-Mail-Verifizierung. Die Syntaxprüfung kommt davor.

- **Kein MX-Eintrag und kein A-Eintrag.** Die Domain kann keine E-Mails empfangen. Jede Adresse auf dieser Domain ist ungültig. Ein Tippfehler wie `gmial.com` scheitert meist an diesem Schritt.
- **MX-Eintrag vorhanden.** Die Domain kann E-Mails empfangen. Das sagt nichts darüber, ob das konkrete Postfach existiert. Dafür braucht es den nächsten Schritt: ein SMTP-Gespräch mit dem Server.
- **MX-Eintrag zeigt auf ein bekanntes Gateway.** Ist der Mailserver Proofpoint, Mimecast oder Barracuda, nutzt die Domain ein [Secure Email Gateway](/glossary/secure-email-gateway). Auf diesen Domains verhält sich die Postfachprüfung anders.

## Warum es für Absender wichtig ist

Jeder kann den MX-Eintrag einer Domain per DNS-Abfrage lesen. Wechselt ein Unternehmen den E-Mail-Anbieter oder schließt es, ändern sich seine MX-Einträge oder verschwinden. Die Adressen funktionieren nicht mehr. Niemand sagt es Ihnen. Das ist eine häufige Ursache für Hard Bounces auf alten Listen.

## Wie ein Verifizierer damit umgeht

Ein [E-Mail-Adressen-Checker](/email-checker) schlägt zuerst den MX-Eintrag nach. Gibt es keinen MX-Eintrag, wird die Adresse als ungültig markiert und es laufen keine weiteren Prüfungen. Gibt es einen MX-Eintrag, verbindet sich der Verifizierer mit diesem Server und fragt, ob das Postfach existiert. Die MX-Abfrage sagt dem Verifizierer auch, um welche Art von Server es sich handelt. Das ist bei [Catch-all-Domains](/glossary/catch-all-email) und Gateways wichtig.
