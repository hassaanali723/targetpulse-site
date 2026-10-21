---
title: Catch-all-E-Mail
description: Was eine Catch-all-Domain ist, warum Firmen eine einrichten, warum eine normale E-Mail-Prüfung Adressen darauf nicht bestätigen kann und was Sie damit tun.
slug: catch-all-e-mail
date: 2026-10-22
updated: 2026-10-22
keyword: catch all e-mail
short: Eine Catch-all-Domain nimmt E-Mails an jede Adresse auf der Domain an, auch an Namen, die es nicht gibt. Weil der Server zu allem Ja sagt, kann eine normale E-Mail-Prüfung nicht erkennen, ob ein bestimmtes Postfach echt ist.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Bekommen Sie eine echte Antwort bei Catch-all-Adressen
---

## Was ist eine Catch-all-E-Mail?

Eine Catch-all-Domain nimmt E-Mails an jede Adresse auf der Domain an. Die Adresse muss nicht existieren.

Die meisten Domains lehnen E-Mails an einen Namen ab, den sie nicht haben. Eine Catch-all-Domain tut das nicht. Sie nimmt die E-Mail an und legt sie in ein gemeinsames Postfach. Manchmal löscht sie die E-Mail auch, ohne jemandem Bescheid zu geben.

Andere Namen für dieselbe Einstellung sind **Accept-all** und **Catch-all-Domain**. Viele Verifizierungs-Tools kennzeichnen diese Adressen als "Catch-all", "Accept-all" oder "Riskant".

## Ein einfaches Beispiel

1. **Acme richtet ein Catch-all ein.** Acme ist eine kleine Firma mit der Domain acme.example. Die Büroleiterin schaltet Catch-all ein, damit keine E-Mail von Kunden verloren geht.
2. **Sara schreibt an eine echte Person.** Sie schickt eine E-Mail an jon@acme.example. Jon arbeitet dort. Er bekommt die E-Mail.
3. **Sara vertippt sich.** Beim nächsten Mal tippt sie jonn@acme.example. Diese Person gibt es nicht.
4. **Der Server sagt trotzdem Ja.** Die E-Mail kommt nicht als Bounce zurück. Sie landet im gemeinsamen Postfach, und vielleicht liest sie niemand.

Sara sieht keinen Fehler und glaubt, dass beide E-Mails angekommen sind. Nur eine hat Jon erreicht.

## Warum Firmen Catch-all nutzen

Firmen schalten Catch-all ein, damit ihnen keine E-Mail entgeht. Kunden machen Tippfehler. Die Namen ehemaliger Mitarbeiter bekommen weiter E-Mails. Ein Catch-all sammelt alles an einem Ort.

## Warum Catch-all ein Problem für die E-Mail-Verifizierung ist

Eine normale E-Mail-Prüfung stellt dem Server eine Frage: "Nehmen Sie E-Mails für diese Adresse an?" Auf einer Catch-all-Domain ist die Antwort immer Ja. Eine echte Person und ein erfundener Name bekommen dieselbe Antwort.

Eine einfache Prüfung kann das Postfach also nicht bestätigen. Sie kann nur melden, dass die Domain alles annimmt.

Das betrifft vor allem B2B-Listen. In einem veröffentlichten Test mit 10.000 echten geschäftlichen E-Mail-Adressen lagen 28 % auf Catch-all-Domains. Den Test hat LeadMagic durchgeführt, eine Firma, die E-Mail-Verifizierung verkauft. Betrachten Sie ihn daher als Test eines Anbieters.

## Was Sie mit Catch-all-Adressen tun

Sie haben drei Möglichkeiten:

| Möglichkeit | Was passiert |
|---|---|
| **Entfernen** | Kein Risiko, aber Sie verlieren auch echte Kontakte |
| **An sie senden** | Manche erreichen echte Menschen, manche gehen verloren oder kommen später als Bounce zurück |
| **Genauer prüfen** | Ein Verifizierer, der über die einfache Prüfung hinausgeht, trennt die echten von den falschen Adressen |

## Wie ein Verifizierer hilft

Giggal.ai führt bei jeder Prüfung eine [Catch-all-Verifizierung](/catch-all-verification) durch. Sie nutzt zusätzliche Signale und liefert ein echtes Ergebnis, zustellbar oder unzustellbar, statt der Markierung "Riskant". Einen längeren Leitfaden mit mehr Beispielen finden Sie im Artikel [was eine Catch-all-E-Mail-Adresse ist](/blog/what-is-a-catch-all-email-address).
