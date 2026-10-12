---
title: DMARC
description: Was DMARC ist, wie es SPF und DKIM mit der Absenderadresse verbindet, was die Richtlinien none, quarantine und reject bewirken und wie Sie starten.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: dmarc
short: DMARC ist eine Regel, die Sie im DNS Ihrer Domain veröffentlichen. Sie sagt empfangenden Servern, was mit E-Mails passieren soll, die Ihre Domain als Absender nennen, aber die Prüfungen nicht bestehen. Sie legt auch fest, wohin die Server Berichte darüber senden.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC schützt Ihren Absender. Verifizierung schützt Ihre Liste
---

## Was ist DMARC?

DMARC steht für Domain-based Message Authentication, Reporting and Conformance. Es ist eine kurze Textzeile im DNS Ihrer Domain. Das DNS ist das öffentliche Verzeichnis, in dem die Einstellungen jeder Domain stehen. Eine Domain ist der Name hinter dem @ in einer E-Mail-Adresse, zum Beispiel example.com.

Die DMARC-Zeile sagt anderen Mailservern zwei Dinge:

- Was sie mit einer E-Mail tun sollen, die angeblich von Ihrer Domain kommt, aber die Prüfungen [SPF](/glossary/spf) und [DKIM](/glossary/dkim) nicht besteht.
- An welche Adresse sie Berichte über die E-Mails senden sollen, die in Ihrem Namen verschickt werden.

DMARC gibt es, weil jeder in das Absenderfeld einer E-Mail jede beliebige Adresse schreiben kann. Ohne DMARC können Betrüger Ihre Domain leichter für gefälschte E-Mails nutzen. Das nennt man [E-Mail-Spoofing](/glossary/email-spoofing).

## Ein Beispiel: Die gefälschte Mahnung

Ihre Firma hat die Domain example.com. Ein Betrüger sendet einem Ihrer Kunden diese E-Mail:

```
From: buchhaltung@example.com
Subject: Ihre Rechnung ist überfällig
```

Der Kunde sieht example.com und vertraut der E-Mail. Sie haben sie aber nie gesendet. Ihre Domain hat einen DMARC-Eintrag mit `p=reject`. Dann passiert Folgendes:

1. Die E-Mail des Betrügers erreicht Gmail.
2. Gmail prüft SPF und DKIM. Keine der beiden Prüfungen besteht für example.com.
3. Gmail liest Ihren DMARC-Eintrag. Dort steht `p=reject`.
4. Gmail lehnt die E-Mail ab. Ihr Kunde sieht sie nie.

Ihre echten E-Mails bestehen dieselben Prüfungen. Sie werden normal zugestellt.

## Wie DMARC entscheidet: das Alignment

SPF und DKIM allein haben eine Lücke. Ein Betrüger kann beide Prüfungen für seine eigene Domain bestehen. Im Absenderfeld, das der Leser sieht, steht trotzdem Ihre Domain. DMARC schließt diese Lücke mit einer Regel. SPF oder DKIM muss für dieselbe Domain bestehen, die im Absenderfeld steht. Diese Übereinstimmung heißt [DMARC-Alignment](/glossary/dmarc-alignment).

Eine der beiden Prüfungen reicht. Besteht DKIM für example.com und steht example.com im Absenderfeld, besteht die E-Mail DMARC. Das gilt auch dann, wenn SPF fehlschlägt.

## Die drei DMARC-Richtlinien

Der Teil `p=` im Eintrag ist Ihre Richtlinie, auf Englisch Policy. Es gibt drei mögliche Werte:

| Richtlinie | Was mit einer E-Mail passiert, die DMARC nicht besteht | Wann Sie sie nutzen |
| --- | --- | --- |
| `p=none` | Nichts. Sie wird normal zugestellt, und Sie bekommen Berichte. | Am Anfang, solange Sie Ihre echten Absender suchen |
| `p=quarantine` | Sie landet im Spam-Ordner. | Wenn alle echten Absender bestehen |
| `p=reject` | Sie wird abgelehnt und nicht zugestellt. | Wenn Sie sicher sind, dass keine echte E-Mail mehr fehlschlägt |

Ihre Richtlinie ist eine Bitte an den empfangenden Server, kein Befehl. Mailbox-Provider wie Gmail oder Outlook nutzen neben Ihrer Richtlinie auch eigene Daten und Spamfilter.

## Ein einfacher DMARC-Eintrag, Teil für Teil

Ein DMARC-Eintrag ist ein [DNS-TXT-Eintrag](/glossary/dns-txt-record). Ein TXT-Eintrag ist ein DNS-Eintrag, der einfachen Text enthält. Er steht unter dem Namen `_dmarc.example.com`. Ein erster Eintrag sieht so aus:

```
v=DMARC1; p=none; rua=mailto:reports@example.com
```

- `v=DMARC1` sagt: Dies ist ein DMARC-Eintrag. Dieser Teil muss immer zuerst stehen.
- `p=none` sagt: Tu noch nichts mit E-Mails, die fehlschlagen. Nur beobachten.
- `rua=mailto:reports@example.com` sagt: Sende mir Sammelberichte an diese Adresse.

Die Sammelberichte sind Dateien im XML-Format. Ein Bericht deckt meist einen Tag ab. Er zeigt, welche Server in Ihrem Namen gesendet haben und ob ihre E-Mails bestanden haben. Veröffentlichen Sie nur einen DMARC-Eintrag pro Domain. Findet ein Server zwei, ignoriert er beide.

## So starten Sie mit DMARC

1. Veröffentlichen Sie einen Eintrag mit `p=none` und einer `rua`-Adresse.
2. Lesen Sie einige Wochen lang die Berichte. Suchen Sie alle Dienste, die in Ihrem Namen senden, zum Beispiel Ihr Newsletter-Tool und Ihr Support-System.
3. Richten Sie für jeden dieser Dienste SPF und DKIM ein, bis alle bestehen.
4. Stellen Sie auf `p=quarantine` um und lesen Sie die Berichte weiter.
5. Stellen Sie zum Schluss auf `p=reject` um.

Unser [DMARC-Generator](/dmarc-generator) (auf Englisch) baut den Eintrag für Sie. Alle weiteren Tags und die Berichte erklärt der Leitfaden [What is a DMARC record?](/blog/what-is-a-dmarc-record) (auf Englisch).

## Wer DMARC verlangt

Googles Absenderrichtlinien verlangen einen DMARC-Eintrag von Absendern mit 5.000 oder mehr E-Mails pro Tag an private Gmail-Adressen. Microsoft verlangt seit dem 5. Mai 2025 dasselbe von Absendern mit 5.000 oder mehr E-Mails pro Tag an Outlook.com, Hotmail und Live. Bei beiden reicht `p=none` als Mindestwert. Die Domain im Absenderfeld muss aber zu SPF oder DKIM passen.

Der aktuelle DMARC-Standard ist RFC 9989 vom Mai 2026. Er hat einige ältere Tags abgeschafft, zum Beispiel `pct`. Wer weniger als 5.000 E-Mails am Tag sendet, sollte trotzdem einen Eintrag haben. Ein Eintrag mit `p=none` kostet nichts und zeigt Ihnen, wer in Ihrem Namen sendet.

## DMARC und E-Mail-Verifizierung

DMARC und Verifizierung lösen zwei verschiedene Probleme. DMARC schützt Ihre Domain davor, dass andere in Ihrem Namen E-Mails senden, aber es prüft nicht, ob die Adressen auf Ihrer Liste existieren. Der [E-Mail-Checker](/email-checker) und die [E-Mail-Massenprüfung](/bulk-email-verifier) finden Adressen, die nicht existieren, bevor Sie senden. Eine Verifizierung erkennt keine gefälschten E-Mails und ändert nichts an Ihrem DMARC-Ergebnis. Mit DMARC und [E-Mail-Verifizierung](/) zusammen sind Ihre E-Mails echt, und weniger von ihnen bouncen.
