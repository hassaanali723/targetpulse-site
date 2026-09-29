---
title: SPF-Eintrag
description: Was ein SPF-Eintrag ist, wie er aussieht, wie empfangende Server ihn prüfen, das Limit von zehn DNS-Abfragen und die Bounce-Codes, die Sie bekommen, wenn die Prüfung fehlschlägt.
slug: spf-eintrag
date: 2026-09-29
updated: 2026-09-29
keyword: spf eintrag
short: Ein SPF-Eintrag ist ein DNS-Eintrag auf Ihrer Domain, der die Server auflistet, die E-Mails für diese Domain senden dürfen. Empfangende Server prüfen ihn, um zu bestätigen, dass eine E-Mail, die von Ihrer Domain zu kommen behauptet, von einem Ihrer Server gesendet wurde.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Authentifizierung behebt eine Art von Bounce. Verifizierung behebt die andere
---

## Was ein SPF-Eintrag ist

SPF steht für Sender Policy Framework. Es ist in RFC 7208 definiert. Ein SPF-Eintrag ist ein [DNS-TXT-Eintrag](/glossary/dns-txt-record) auf Ihrer Domain. Er listet die Server auf, die E-Mails mit Ihrem Domainnamen senden dürfen.

Ein einfacher SPF-Eintrag sieht so aus:

`v=spf1 include:_spf.google.com -all`

Jeder Teil hat eine Bedeutung:

- `v=spf1` sagt, dass dies ein SPF-Eintrag ist.
- `include:_spf.google.com` sagt, dass jeder Server, den Google auflistet, für diese Domain senden darf.
- `-all` sagt, E-Mails von allen anderen Servern abzulehnen.
- `~all` ist ein weicheres Ende. Es sagt, E-Mails von anderen Servern als verdächtig zu behandeln, aber nicht abzulehnen.

## Wie empfangende Server ihn prüfen

Kommt eine E-Mail an, liest der empfangende Server die Domain im [Return-Path](/glossary/return-path). Der Return-Path ist die Adresse, an die Bounces gesendet werden. Der Server holt den SPF-Eintrag dieser Domain. Dann prüft er, ob die IP-Adresse, die die E-Mail zugestellt hat, im Eintrag steht.

- **Pass.** Die IP-Adresse steht im Eintrag. Die E-Mail kam von einem erlaubten Server.
- **Fail.** Die IP-Adresse steht nicht im Eintrag und der Eintrag endet mit `-all`. Der Server darf die E-Mail ablehnen.
- **Softfail.** Die IP-Adresse steht nicht im Eintrag und der Eintrag endet mit `~all`. Der Server nimmt die E-Mail an, markiert sie aber als verdächtig.

Microsoft Exchange Online lehnt eine fehlgeschlagene E-Mail mit `5.7.23 The message was rejected because of Sender Policy Framework violation` ab. Gmail antwortet mit `550 5.7.26` bei einer E-Mail ohne jede Authentifizierung. Beide Codes beginnen mit 5. Ihr Versandtool erfasst sie als [Hard Bounces](/glossary/hard-bounce), obwohl die Adresse in Ordnung ist.

## Wer einen SPF-Eintrag braucht

Jeder, der Massen-E-Mails versendet, braucht einen. Googles Absenderrichtlinien verlangen SPF und DKIM von Absendern mit 5.000 oder mehr Nachrichten pro Tag an Gmail. Sie verlangen auch DMARC. Microsoft verlangt dieselben drei Einträge von Domains, die mehr als 5.000 E-Mails pro Tag an Outlook.com, Hotmail und Live senden. Microsoft setzt das seit dem 5. Mai 2025 durch.

Wenn Sie weniger senden, sind die Einträge trotzdem wichtig. Ohne sie landet Ihre E-Mail eher im Spam-Ordner.

## Das Limit von zehn DNS-Abfragen

RFC 7208 begrenzt eine SPF-Prüfung auf zehn DNS-Abfragen. Jedes `include:`, `a`, `mx` und `redirect` in Ihrem Eintrag zählt als eine Abfrage. Abfragen in den Einträgen, die Sie einbinden, zählen ebenfalls. Liegt die Summe über zehn, liefert die Prüfung einen permanenten Fehler. Die meisten empfangenden Server behandeln diesen Fehler als Fail.

So gehen SPF-Einträge am häufigsten kaputt. Ein Unternehmen fügt dem Eintrag ein E-Mail-Tool nach dem anderen hinzu. Wird die elfte Abfrage hinzugefügt, funktioniert der ganze Eintrag nicht mehr.

## SPF ist einer von drei Einträgen

- SPF prüft, welcher Server die E-Mail gesendet hat.
- [DKIM](/glossary/dkim) prüft, dass die E-Mail nach dem Versand nicht verändert wurde.
- [DMARC](/glossary/dmarc) verbindet beide Prüfungen mit der Absenderadresse, die der Leser sieht. Es sagt empfangenden Servern auch, was sie tun sollen, wenn die Prüfungen fehlschlagen.

Eine Domain braucht alle drei. Der Leitfaden [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce) zeigt, wie die Fehlercodes in einem Bounce-Bericht aussehen.
