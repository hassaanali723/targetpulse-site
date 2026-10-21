---
title: Unzustellbarkeitsbericht (NDR)
description: Was ein Unzustellbarkeitsbericht ist, wer ihn sendet, wie Sie den Code und die Teile darin lesen und was Sie tun, wenn Sie einen bekommen. Mit einem einfachen Beispiel.
slug: unzustellbarkeitsbericht
date: 2026-10-22
updated: 2026-10-22
keyword: unzustellbarkeitsbericht
short: Ein Unzustellbarkeitsbericht, kurz NDR, ist eine automatische E-Mail, die Ihnen sagt, dass eine gesendete Nachricht nicht zugestellt wurde. Er nennt die Adresse, die fehlgeschlagen ist, und einen Code, der den Grund erklärt. Die meisten Menschen nennen ihn Bounce-Meldung.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Entfernen Sie die Adressen, die Ihnen einen NDR schicken würden
---

## Was ist ein Unzustellbarkeitsbericht?

Ein Unzustellbarkeitsbericht, kurz NDR (Non-Delivery Report), ist eine automatische E-Mail, die Ihnen sagt, dass eine Nachricht nicht zugestellt wurde. Er kommt ein paar Sekunden oder ein paar Stunden nach dem Senden an.

Die meisten Menschen nennen ihn Bounce-Meldung. Der technische Name in den E-Mail-Standards ist Delivery Status Notification, kurz DSN. Alle drei Namen bedeuten dasselbe.

Ein NDR kommt meist von einer Adresse wie `MAILER-DAEMON@` oder `postmaster@`. Das sind automatische Absender auf einem Mailserver. Niemand schreibt diese Nachrichten von Hand. Ein Programm namens [Mailer-Daemon](/glossary/mailer-daemon) erstellt sie.

## Ein einfaches Beispiel

So erreicht Sie ein NDR.

1. **Ana sendet eine Rechnung.** Ana ist Buchhalterin. Sie schickt eine Rechnung per E-Mail an einen Kunden unter mark@oldfirm.example.
2. **Die Adresse gibt es nicht mehr.** Mark hat die Firma letztes Jahr verlassen. Sein Postfach wurde gelöscht.
3. **Der Server lehnt ab.** Der Mailserver von oldfirm.example hat kein Postfach für Mark. Er lehnt die E-Mail ab.
4. **Der NDR kommt an.** Eine Minute später bekommt Ana eine E-Mail mit dem Betreff "Unzustellbar" oder "Delivery Status Notification (Failure)".
5. **Ana liest den Code.** Darin findet sie `550 5.1.1`. Dieser Code bedeutet, dass die Adresse nicht existiert.
6. **Ana behebt das Problem.** Sie fragt den Kunden nach einem neuen Kontakt und sendet die Rechnung dorthin.

Der NDR hat das Problem nicht verursacht. Er hat Ana nur davon berichtet.

## Was ein NDR enthält

Die meisten NDRs haben dieselben Teile, auch wenn sie in jedem E-Mail-Programm anders aussehen.

| Teil | Was er zeigt |
|---|---|
| **Fehlgeschlagene Adresse** | Die Adresse, die Ihre E-Mail nicht empfangen konnte |
| **Fehlercode** | Ein kurzer Code, zum Beispiel `550 5.1.1`, der das Problem erklärt |
| **Servermeldung** | Ein Satz vom empfangenden Server, zum Beispiel "user unknown" |
| **Ihre ursprüngliche E-Mail** | Oft angehängt, damit Sie sehen, was fehlgeschlagen ist |

## Wie Sie den Code lesen

Die erste Ziffer des Codes sagt Ihnen, welche Art von Problem vorliegt.

| Erste Ziffer | Art | Was sie bedeutet | Was Sie tun |
|---|---|---|---|
| **5** | [Hard Bounce](/glossary/hard-bounce) | Der Fehler ist dauerhaft. Die Adresse existiert vielleicht nicht, oder der Server hat Sie blockiert. | Senden Sie nicht erneut an die Adresse, bis Sie wissen, welcher Fall vorliegt. |
| **4** | [Soft Bounce](/glossary/soft-bounce) | Der Fehler ist vorübergehend. Das Postfach ist vielleicht voll oder der Server ausgelastet. | Warten Sie. Ihr Mailserver versucht es von selbst erneut. |

Zwei häufige Beispiele:

- `550 5.1.1` bedeutet, dass die Adresse nicht existiert. Entfernen Sie sie aus Ihrer Liste.
- `452 4.2.2` bedeutet, dass das Postfach voll ist. Versuchen Sie es später erneut.

## Wenn Sie einen NDR für eine E-Mail bekommen, die Sie nicht gesendet haben

Manchmal kommt ein NDR für eine E-Mail, die Sie nie geschrieben haben. Das nennt man [Backscatter](/glossary/backscatter). Ein Spammer hat Ihre Adresse in das Absenderfeld gesetzt, die E-Mail ist fehlgeschlagen, und der NDR kam zu Ihnen. Ihr Konto wurde meist nicht gehackt. Veröffentlichen Sie SPF-, DKIM- und DMARC-Einträge für Ihre Domain. Dann können empfangende Server die gefälschten E-Mails stattdessen ablehnen.

## Warum NDRs für Absender wichtig sind

Jeder NDR von einer toten Adresse zählt gegen Sie. Mailbox-Provider wie Google und Microsoft beobachten, wie viele Ihrer E-Mails an Adressen gehen, die nicht existieren. Viele NDRs mit `5.1.1` zeigen ihnen, dass Ihre Liste alt ist.

**Beispiel:** Ein Shop sendet ein Angebot an 5.000 alte Kontakte. Kommen 400 NDRs zurück, sind das 8 % der Liste. Viele Versandplattformen prüfen oder sperren Konten mit solchen Zahlen. Diese Zahlen sind nur ein Beispiel.

## Wie ein Verifizierer hilft

Ein [E-Mail-Checker](/email-checker) fragt den empfangenden Server nach einer Adresse, bevor Sie senden. Der Server gibt dieselbe Antwort, die er in einen NDR schreiben würde. Der Unterschied ist, dass keine E-Mail gesendet wurde. Nichts kommt als Bounce zurück, und Ihre Reputation bleibt unberührt.
