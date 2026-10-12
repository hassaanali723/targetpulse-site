---
title: SPF-Eintrag
description: Was ein SPF-Eintrag ist, wie er aussieht, wie Server ihn prüfen, das Limit von zehn DNS-Abfragen und welche Bounce-Codes ein Fehlschlag auslöst.
slug: spf-eintrag
date: 2026-09-29
updated: 2026-10-12
keyword: spf eintrag
short: Ein SPF-Eintrag ist ein Eintrag im DNS Ihrer Domain. Er listet die Server auf, die E-Mails im Namen dieser Domain senden dürfen. Empfangende Server prüfen ihn, um zu sehen, ob eine E-Mail wirklich von einem Ihrer Server kommt.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Authentifizierung behebt eine Art von Bounce. Verifizierung behebt die andere
---

## Was ist ein SPF-Eintrag?

Ein SPF-Eintrag ist eine öffentliche Liste der Server, die E-Mails für Ihre Domain senden dürfen. Empfangende Server lesen diese Liste. So erkennen sie E-Mails, die nur so tun, als kämen sie von Ihnen.

Ein paar Begriffe vorab:

- Eine **Domain** ist der Name hinter dem @ in einer E-Mail-Adresse, zum Beispiel example.com.
- Ein **Server** ist ein Computer, der rund um die Uhr läuft. Ein Mailserver sendet und empfängt E-Mails.
- Eine **IP-Adresse** ist die Nummer, unter der ein Server im Internet erreichbar ist.
- Das **DNS** ist das öffentliche Verzeichnis mit den Einstellungen jeder Domain. Ein **Eintrag** ist eine Zeile darin.

SPF steht für Sender Policy Framework. Es ist in RFC 7208 definiert. Ein RFC ist ein öffentliches Dokument, das einen Internetstandard festlegt. Ein SPF-Eintrag ist ein [DNS-TXT-Eintrag](/glossary/dns-txt-record) auf Ihrer Domain. Ein TXT-Eintrag ist ein DNS-Eintrag, der einfachen Text enthält. Er listet die Server auf, die E-Mails mit Ihrem Domainnamen senden dürfen.

Ein einfacher SPF-Eintrag sieht so aus:

`v=spf1 include:_spf.google.com -all`

Jeder Teil hat eine Bedeutung:

- `v=spf1` sagt, dass dies ein SPF-Eintrag ist.
- `include:_spf.google.com` sagt, dass jeder Server, den Google auflistet, für diese Domain senden darf.
- `-all` sagt, E-Mails von allen anderen Servern abzulehnen.
- `~all` ist ein weicheres Ende. Es sagt, E-Mails von anderen Servern als verdächtig zu behandeln, aber nicht abzulehnen.

## Ein einfaches Beispiel

1. Die Firma Gartenwelt hat die Domain gartenwelt.example. Sie sendet ihre E-Mails über Google Workspace.
2. Ihr SPF-Eintrag lautet `v=spf1 include:_spf.google.com -all`.
3. Ein Betrüger sendet von seinem eigenen Server eine falsche Rechnung. Als Absender gibt er buchhaltung@gartenwelt.example an.
4. Der Server des Empfängers liest den SPF-Eintrag von gartenwelt.example.
5. Die IP-Adresse des Betrügers steht nicht darin. Der Eintrag endet mit `-all`.
6. Das Ergebnis ist Fail. Der Server darf die falsche Rechnung ablehnen.

Eine echte E-Mail der Firma kommt dagegen von einem Server von Google. Ihre Prüfung ergibt Pass.

## Wie empfangende Server ihn prüfen

Kommt eine E-Mail an, liest der empfangende Server die Domain im [Return-Path](/glossary/return-path). Der Return-Path ist die Adresse, an die Bounces gesendet werden. Ein Bounce ist eine Meldung, dass eine E-Mail nicht zugestellt wurde. Der Server holt den SPF-Eintrag dieser Domain. Dann prüft er, ob die IP-Adresse, die die E-Mail zugestellt hat, im Eintrag steht.

| Ergebnis | Was der Server sieht | Was er tut |
|---|---|---|
| Pass | Die IP-Adresse steht im Eintrag. | Die E-Mail kam von einem erlaubten Server. |
| Fail | Die IP-Adresse steht nicht im Eintrag, und der Eintrag endet mit `-all`. | Der Server darf die E-Mail ablehnen. |
| Softfail | Die IP-Adresse steht nicht im Eintrag, und der Eintrag endet mit `~all`. | Der Server nimmt die E-Mail an, markiert sie aber als verdächtig. |

Microsoft Exchange Online lehnt eine fehlgeschlagene E-Mail mit `5.7.23 The message was rejected because of Sender Policy Framework violation` ab. Gmail antwortet mit `550 5.7.26` bei einer E-Mail ohne jede Authentifizierung. Authentifizierung heißt, dass eine Domain mit Einträgen wie SPF beweist, dass eine E-Mail echt ist. Beide Codes beginnen mit 5. Ihr Versandtool erfasst sie als [Hard Bounces](/glossary/hard-bounce), obwohl die Adresse in Ordnung ist.

## Wer einen SPF-Eintrag braucht

Jeder, der Massen-E-Mails versendet, braucht einen. Googles Absenderrichtlinien verlangen SPF und DKIM von Absendern mit 5.000 oder mehr Nachrichten pro Tag an Gmail. Sie verlangen auch DMARC. Microsoft verlangt dieselben drei Einträge von Domains, die mehr als 5.000 E-Mails pro Tag an Outlook.com, Hotmail und Live senden. Microsoft setzt das seit dem 5. Mai 2025 durch.

Wenn Sie weniger senden, ist ein SPF-Eintrag trotzdem wichtig. Ohne ihn landet Ihre E-Mail eher im Spam-Ordner.

## Das Limit von zehn DNS-Abfragen

RFC 7208 begrenzt eine SPF-Prüfung auf zehn DNS-Abfragen. Eine DNS-Abfrage ist eine einzelne Frage an das DNS. Jedes `include:`, `a`, `mx` und `redirect` in Ihrem Eintrag zählt als eine Abfrage. Abfragen in den Einträgen, die Sie einbinden, zählen ebenfalls. Liegt die Summe über zehn, liefert die Prüfung einen permanenten Fehler. Die meisten empfangenden Server behandeln diesen Fehler als Fail.

So geht ein SPF-Eintrag am häufigsten kaputt. Ein Unternehmen fügt dem Eintrag ein E-Mail-Tool nach dem anderen hinzu. Kommt die elfte Abfrage dazu, funktioniert der ganze Eintrag nicht mehr.

**Beispiel:** Eine Firma bindet Google Workspace, ein Newsletter-Tool, ein CRM und ein Ticketsystem ein. Jedes `include:` bringt eigene Abfragen mit. Zusammen sind es in diesem Beispiel zwölf. Ab jetzt schlägt die SPF-Prüfung fehl, auch für echte E-Mails der Firma.

## SPF ist einer von drei Einträgen

- SPF prüft, welcher Server die E-Mail gesendet hat.
- [DKIM](/glossary/dkim) prüft, dass die E-Mail nach dem Versand nicht verändert wurde.
- [DMARC](/glossary/dmarc) verbindet beide Prüfungen mit der Absenderadresse, die der Leser sieht. Es sagt empfangenden Servern auch, was sie tun sollen, wenn die Prüfungen fehlschlagen.

Eine Domain braucht alle drei. Der Leitfaden [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce) zeigt, wie die Fehlercodes in einem Bounce-Bericht aussehen.

## SPF-Eintrag und E-Mail-Verifizierung

Ein SPF-Eintrag und eine Verifizierung lösen zwei verschiedene Probleme. Der SPF-Eintrag zeigt, dass Ihre E-Mail von einem erlaubten Server kommt. Er sagt nichts darüber, ob die Adresse des Empfängers existiert. Wenn Sie eine [E-Mail-Adresse prüfen](/email-checker) oder die [E-Mail-Massenprüfung](/bulk-email-verifier) nutzen, finden Sie Adressen, die es nicht gibt, bevor Sie senden. Mit SPF und [E-Mail-Verifizierung](/) vermeiden Sie beide Arten von Bounce: Bounces wegen fehlender Authentifizierung und Bounces an tote Adressen.
