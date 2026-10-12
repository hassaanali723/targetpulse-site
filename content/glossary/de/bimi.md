---
title: BIMI (E-Mail)
description: Was BIMI bei E-Mails ist, wie Ihr Logo im Posteingang erscheint, was Sie dafür brauchen und wie der BIMI-Record im DNS aussieht. Mit Beispiel.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi record
short: BIMI ist ein E-Mail-Standard, mit dem Ihr Markenlogo neben Ihren E-Mails im Posteingang erscheint. Dafür veröffentlichen Sie einen BIMI-Record im DNS Ihrer Domain. Das Logo erscheint nur in Postfächern, die BIMI unterstützen, und nur bei E-Mails, die DMARC bestehen.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Ihr Logo hilft nur bei E-Mails, die ein echtes Postfach erreichen
---

## Was ist BIMI bei E-Mails?

BIMI steht für Brand Indicators for Message Identification. Es geht hier also um E-Mails, nicht um das Gemüse mit demselben Namen. Mit BIMI zeigt ein Postfach Ihr Markenlogo neben Ihren E-Mails an. Das Logo steht dort, wo sonst ein Kreis mit einem Buchstaben zu sehen ist.

Damit das funktioniert, veröffentlichen Sie einen BIMI-Record im DNS Ihrer Domain. Das DNS ist das öffentliche Verzeichnis, in dem die Einstellungen jeder Domain stehen. Eine Domain ist der Name hinter dem @ in einer E-Mail-Adresse, zum Beispiel example.com.

BIMI ändert nichts daran, ob Ihre E-Mails ankommen. Es zeigt nur ein Logo bei E-Mails, die die Echtheitsprüfungen schon bestehen. Die wichtigste davon ist [DMARC](/glossary/dmarc).

## Ein Beispiel: Das Logo in Gmail

Ein Modehändler hat die Domain example.com. Ohne BIMI zeigt Gmail neben seinen E-Mails einen runden Kreis mit dem Buchstaben E. Der Händler richtet BIMI ein. So läuft es ab:

1. Der Händler stellt seine DMARC-Richtlinie auf `p=quarantine` oder `p=reject` um.
2. Er bereitet sein Logo als SVG-Datei im Format SVG Tiny PS vor.
3. Er kauft ein Markenzertifikat, eine VMC oder eine CMC.
4. Er legt Logo und Zertifikat auf seiner Website unter HTTPS-Adressen ab.
5. Er veröffentlicht den BIMI-Record im DNS.
6. Gmail empfängt eine E-Mail von example.com, die DMARC besteht. Gmail findet den BIMI-Record, prüft das Zertifikat und zeigt das Logo im runden Feld an.

## Was Sie für BIMI brauchen

- **DMARC mit Durchsetzung.** Ihre DMARC-Richtlinie muss `quarantine` oder `reject` sein. Google sagt ausdrücklich, dass BIMI mit `p=none` nicht funktioniert.
- **Ein Logo im Format SVG Tiny PS.** Das ist eine eingeschränkte Form des Bildformats SVG, gebaut für die sichere Anzeige in Postfächern. Das Logo muss quadratisch sein und ein title-Element mit Ihrem Markennamen haben. Skripte, eingebettete Fotos, Animationen und Links zu anderen Dateien sind nicht erlaubt. Die Datei sollte kleiner als 32 KB sein.
- **Ein Markenzertifikat für Gmail.** Ein Zertifikat ist eine Datei von einer Zertifizierungsstelle. Sie bestätigt, dass das Logo zu Ihrer Marke gehört. Eine VMC (Verified Mark Certificate) setzt eine eingetragene Marke voraus und bringt in Gmail einen blauen Haken. Eine CMC (Common Mark Certificate) braucht keine eingetragene Marke. Gmail zeigt das Logo dann ohne Haken.

Eine normale SVG-Datei aus einem Grafikprogramm verletzt meist mindestens eine dieser Regeln. Prüfen Sie das Logo deshalb, bevor Sie ein Zertifikat beantragen.

## Der BIMI-Record im DNS

Der BIMI-Record, auf Deutsch auch BIMI-Eintrag, ist ein [DNS-TXT-Eintrag](/glossary/dns-txt-record). Ein TXT-Eintrag ist ein DNS-Eintrag, der einfachen Text enthält. Er steht unter diesem Namen:

```
default._bimi.example.com
```

Sein Wert sieht so aus:

```
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/cert.pem
```

- `v=BIMI1` zeigt, dass es ein BIMI-Record ist.
- `l=` ist die HTTPS-Adresse Ihres Logos.
- `a=` ist die HTTPS-Adresse Ihres Zertifikats, einer PEM-Datei.

`default` ist der Selector. Einen anderen Selector brauchen Sie nur, wenn Sie für verschiedene Arten von E-Mails verschiedene Logos zeigen wollen. Bei manchen Zertifikaten ist das Logo schon in der PEM-Datei enthalten. Dann bleibt `l=` leer. Folgen Sie in diesem Fall der Anleitung Ihres Zertifikatsanbieters.

## Welche Postfächer BIMI-Logos zeigen

- **Gmail** zeigt das Logo nur mit einer VMC oder einer CMC.
- **Apple Mail** zeigt das Logo nur mit einer VMC.
- **Yahoo und Fastmail** können ein Logo auch ohne Zertifikat zeigen.

Nicht jedes Postfach unterstützt BIMI. In Postfächern ohne BIMI sieht der Empfänger die normale Anzeige ohne Logo. Auch die Anbieter mit BIMI brauchen oft einige Zeit, bis sie einen neuen BIMI-Record erkennen.

## Warum Ihr BIMI-Logo nicht erscheint

Wenn das Logo fehlt, liegt es meist an einem dieser Punkte:

- Ihre DMARC-Richtlinie steht noch auf `p=none`.
- Ihre E-Mails bestehen DMARC nicht.
- Die SVG-Datei entspricht nicht den Regeln von SVG Tiny PS.
- Das Zertifikat fehlt oder ist abgelaufen.
- Das Postfach des Empfängers unterstützt BIMI nicht.

## So richten Sie BIMI ein

1. Bringen Sie Ihre DMARC-Richtlinie auf `quarantine` oder `reject`. Der [DMARC-Generator](/dmarc-generator) (auf Englisch) baut den Eintrag.
2. Bereiten Sie das Logo als SVG Tiny PS vor und prüfen Sie die Datei.
3. Entscheiden Sie sich für ein Zertifikat, VMC oder CMC.
4. Legen Sie Logo und Zertifikat unter HTTPS-Adressen ab.
5. Veröffentlichen Sie den TXT-Eintrag unter `default._bimi` Ihrer Domain.

Unser [BIMI-Generator](/bimi-generator) (auf Englisch) erstellt den BIMI-Record und prüft Ihr Logo gegen die Regeln von SVG Tiny PS. Die Prüfung läuft in Ihrem Browser. Ihr Logo wird nirgendwo hochgeladen.

## BIMI und E-Mail-Verifizierung

BIMI zeigt Ihr Logo nur bei E-Mails, die in einem Postfach ankommen. Eine E-Mail an eine Adresse, die nicht existiert, bounct, und niemand sieht das Logo. Der [E-Mail-Checker](/email-checker) und die [E-Mail-Massenprüfung](/bulk-email-verifier) finden solche Adressen, bevor Sie senden. Eine Verifizierung ändert nichts an Ihrem BIMI-Record oder an Ihrem DMARC-Ergebnis. Die [E-Mail-Verifizierung](/) sorgt nur dafür, dass Ihre E-Mails mit Logo an Postfächer gehen, die es wirklich gibt.
