---
title: Backscatter
description: Was Backscatter ist, warum Sie Bounce-Meldungen für E-Mails bekommen, die Sie nie gesendet haben, ob Ihr Konto gehackt wurde und wie Sie es auf Ihrer Domain stoppen.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter spam
short: Backscatter sind Bounce-Meldungen, die Sie für E-Mails bekommen, die Sie nie gesendet haben. Ein Spammer hat Ihre Adresse in das Absenderfeld seiner E-Mails gesetzt. Als diese E-Mails fehlschlugen, kamen die Bounce-Meldungen zu Ihnen zurück.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Halten Sie Ihre eigenen Bounces mit einer sauberen Liste niedrig
---

## Was ist Backscatter?

Backscatter sind Bounce-Meldungen, die Sie für E-Mails bekommen, die Sie nie gesendet haben.

Alles beginnt mit Spam. Ein Spammer sendet Tausende E-Mails und trägt Ihre Adresse in das Absenderfeld ein. Viele dieser E-Mails gehen an Adressen, die nicht existieren. Die empfangenden Server senden eine Bounce-Meldung an die Absenderadresse zurück. Diese Adresse ist Ihre, also landen die Bounces in Ihrem Posteingang.

Eine Bounce-Meldung ist die automatische Nachricht, die ein Server sendet, wenn eine E-Mail nicht zugestellt werden kann. Ihr offizieller Name ist [Unzustellbarkeitsbericht](/glossary/ndr).

## Ein einfaches Beispiel

So erreicht Backscatter ein kleines Unternehmen.

1. **Lena hat einen Blumenladen.** Ihre Adresse ist hello@flowers.example.
2. **Ein Spammer kopiert ihre Adresse.** Der Spammer sendet 10.000 gefälschte E-Mails. In jeder steht als Absender hello@flowers.example.
3. **Viele E-Mails schlagen fehl.** Etwa ein Drittel geht an Adressen, die nicht existieren.
4. **Manche Server nehmen zuerst an und prüfen später.** Diese Server nehmen die E-Mail an und stellen dann fest, dass es kein solches Postfach gibt.
5. **Die Bounces gehen an Lena.** Diese Server senden Bounce-Meldungen an hello@flowers.example.
6. **Lenas Posteingang füllt sich.** Eines Morgens findet sie Hunderte Meldungen mit dem Betreff "Unzustellbar" für E-Mails, die sie nie geschrieben hat.

Diese Zahlen sind nur ein Beispiel. Das Muster ist häufig.

## Wurde mein Konto gehackt?

Meist nicht. Um eine E-Mail mit einer falschen Absenderadresse zu senden, braucht man keinen Zugang zu Ihrem Konto. Es ist so, als würde jemand die Absenderadresse einer anderen Person auf einen Umschlag schreiben. Dafür brauchte niemand ihren Schlüssel.

Sehen Sie in Ihrem Ordner "Gesendet" nach. Stehen die E-Mails nicht dort, hat Ihr Konto sie nicht gesendet. Stehen sie dort, ändern Sie Ihr Passwort und schalten Sie die Anmeldung in zwei Schritten ein.

## Warum es passiert

Backscatter entsteht, weil manche Server eine E-Mail zuerst annehmen und die Adresse später prüfen. Schlägt die Prüfung fehl, senden sie einen Bounce an die Absenderadresse. Sie können nicht wissen, dass die Absenderadresse gefälscht war.

Gut betriebene Server prüfen die Adresse, solange der andere Server noch verbunden ist. Existiert die Adresse nicht, lehnen sie die E-Mail sofort ab. Es entsteht keine Bounce-Meldung, also erreicht auch kein Backscatter irgendjemanden.

## So stoppen Sie es auf Ihrer Domain

Sie können Spammer nicht daran hindern, Ihre Adresse einzutippen. Sie können aber dafür sorgen, dass empfangende Server die gefälschten E-Mails ablehnen. Das geht mit drei Einträgen auf Ihrer Domain.

| Eintrag | Was er tut |
|---|---|
| [SPF](/glossary/spf) | Listet die Server auf, die E-Mails für Ihre Domain senden dürfen |
| [DKIM](/glossary/dkim) | Fügt eine Signatur hinzu, die beweist, dass eine E-Mail wirklich von Ihnen kommt |
| [DMARC](/glossary/dmarc) | Sagt empfangenden Servern, was sie mit E-Mails tun sollen, die diese Prüfungen nicht bestehen |

Starten Sie DMARC mit `p=none` und lesen Sie die Berichte. Bestehen nur noch Ihre eigenen Dienste, wechseln Sie zu `p=quarantine` und dann zu `p=reject`. Mit `p=reject` lehnen Server die gefälschten E-Mails ab, statt sie als Bounce an Sie zu schicken.

Bis dahin können Sie die Bounce-Meldungen in einen Ordner filtern. Antworten Sie nicht darauf.

## Warum Serverbetreiber darauf achten

Wenn Sie einen Mailserver betreiben, prüfen Sie, wie er mit unbekannten Adressen umgeht. Ein Server, der E-Mails annimmt und später als Bounce zurückschickt, sendet Backscatter an unbeteiligte Menschen. Manche Blacklists führen Server, die das tun, zum Beispiel die Liste auf backscatterer.org. Steht Ihr Server auf einer Blacklist, werden Ihre eigenen E-Mails möglicherweise nicht mehr zugestellt.

## Wie ein Verifizierer hilft

[E-Mail-Verifizierung](/) stoppt kein Backscatter, denn Sie haben diese E-Mails nicht gesendet. Sie hilft bei den Bounces, die Sie selbst verursachen. Entfernen Sie tote Adressen aus Ihrer eigenen Liste, bevor Sie senden. Dann können Sie jeden Bounce in Ihrem Posteingang erklären.
