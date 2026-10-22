---
title: "Was ist ein DMARC-Eintrag?"
seoTitle: "Was ist ein DMARC-Eintrag? Tags, Beispiele und Berichte (2026)"
description: "Ein DMARC-Eintrag ist ein TXT-Eintrag unter _dmarc.ihredomain. Er regelt, was mit nicht authentifizierten E-Mails passiert. Alle Tags im Standard von 2026."
slug: was-ist-ein-dmarc-eintrag
date: 2026-10-19
updated: 2026-10-19
keyword: dmarc eintrag
image: /blog/covers/de/was-ist-ein-dmarc-eintrag.webp
imageAlt: Leitfaden zur Frage, was ein DMARC-Eintrag ist, mit Übersicht der Tags und Richtlinien
cta: Entfernen Sie ungültige Adressen vor dem nächsten Versand
---

Ein DMARC-Eintrag ist eine kurze Textzeile, die Sie in den DNS-Einstellungen Ihrer Domain hinzufügen. Sie sagt anderen Mailservern, was sie mit einer E-Mail tun sollen, die angeblich von Ihrer Domain kommt, aber die Sicherheitsprüfungen nicht besteht. Sie sagt ihnen auch, wohin sie Ihnen Berichte über die E-Mails schicken sollen, die sie in Ihrem Namen erhalten.

**In einem Satz:** DMARC ist eine öffentliche Regel, die sagt: "Wenn eine E-Mail angeblich von meiner Domain kommt, aber nicht wirklich von mir ist, legen Sie sie in den Spam-Ordner oder sperren Sie sie, und schicken Sie mir einen Bericht."

## DMARC an einem Beispiel erklärt

### Das Problem

Jeder kann eine E-Mail senden und Ihre Adresse in die From-Zeile schreiben. Angenommen, Ihre Domain ist `example.com`. Ein Betrüger sendet Ihrem Kunden diese E-Mail:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Ihr Kunde sieht `example.com` und vertraut der E-Mail. Aber Sie haben diese E-Mail nie gesendet. Im Betreff steht "Ihre Rechnung ist überfällig", darunter ein Link zum Bezahlen.

### Die zwei Prüfungen, die es schon gibt

Mail-Anbieter wie Gmail und Outlook können bei jeder E-Mail schon zwei Prüfungen durchführen:

- **SPF:** Kam diese E-Mail von einem Server, den `example.com` zum Senden seiner E-Mails erlaubt?
- **DKIM:** Trägt diese E-Mail die digitale Signatur von `example.com`?

Allein haben diese Prüfungen eine Lücke. Der Betrüger kann sie für seine eigene Domain bestehen, während die From-Zeile weiter Ihre Domain zeigt. Nichts verbindet die Prüfung mit der Adresse, die Ihr Kunde sieht.

### Was DMARC hinzufügt

DMARC fügt eine Regel hinzu. SPF oder DKIM muss für dieselbe Domain bestehen, die in der From-Zeile steht. Diese Übereinstimmung heißt **Alignment**. Besteht keine der beiden Prüfungen für diese Domain, besteht die E-Mail DMARC nicht.

Mit DMARC entscheiden Sie außerdem, was mit einer E-Mail passiert, die durchfällt.

### Ein DMARC-Eintrag, Teil für Teil

Sie fügen diese Zeile in den DNS-Einstellungen von `example.com` hinzu:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Das sagt jeder Teil:

- `v=DMARC1`: "Das ist meine DMARC-Regel."
- `p=reject`: "Wenn eine E-Mail angeblich von example.com kommt, aber die Prüfung nicht besteht, sperren Sie sie."
- `rua=mailto:reports@example.com`: "Schicken Sie mir täglich einen Bericht über alle, die in meinem Namen E-Mails senden."

### Was mit der gefälschten E-Mail passiert

1. Die E-Mail des Betrügers von `billing@example.com` erreicht Gmail.
2. Gmail führt SPF und DKIM aus. Keine der beiden Prüfungen besteht für `example.com`.
3. Gmail liest Ihren DMARC-Eintrag. Dort steht `p=reject`.
4. Gmail sperrt die E-Mail. Ihr Kunde sieht sie nie.

Ihre echten E-Mails bestehen dieselben Prüfungen und werden deshalb normal zugestellt.

### Die drei Möglichkeiten für p

| Einstellung | Was mit einer E-Mail passiert, die DMARC nicht besteht | Wann Sie sie nutzen |
| --- | --- | --- |
| p=none | Nichts. Sie wird normal zugestellt, und Sie bekommen Berichte. | Zuerst, während Sie alle Ihre echten Absender finden |
| p=quarantine | Sie landet im Spam-Ordner. | Sobald alle Ihre echten Absender bestehen |
| p=reject | Sie wird komplett gesperrt. | Wenn Sie sicher sind, dass nichts Echtes durchfällt |

### Wie die meisten Domains es einrichten

1. Beginnen Sie mit `p=none` und lesen Sie die täglichen Berichte.
2. Finden Sie jeden echten Dienst, der für Sie E-Mails sendet, etwa Ihr E-Mail-Tool und Ihren Support-Desk. Sorgen Sie dafür, dass jeder davon besteht.
3. Wechseln Sie zu `p=quarantine` und dann zu `p=reject`. Jetzt kann niemand Ihre Domain bei Empfängern fälschen, die Ihrer Richtlinie folgen.

Die meisten Domains beginnen deshalb mit einem Eintrag wie diesem, der nur beobachtet:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

Der Rest dieses Leitfadens erklärt jeden Teil eines DMARC-Eintrags genauer, und dazu die weiteren Optionen, die Sie später hinzufügen können.

## SPF, DKIM und die From-Adresse genauer

DMARC baut auf SPF und DKIM auf. Unser Leitfaden zu [SPF und DKIM](/blog/spf-dkim-dmarc-explained) behandelt beide ausführlich. Die Kurzfassung steht unten.

**SPF** ist eine Liste der Server, die für Ihre Domain E-Mails senden dürfen. Ein empfangender Server prüft, ob die E-Mail von einem Server auf dieser Liste kam.

**DKIM** ist eine digitale Signatur, die jeder E-Mail hinzugefügt wird. Der empfangende Server prüft die Signatur mit einem Schlüssel in Ihrem DNS. Ist die Signatur gültig, wurde die E-Mail unterwegs nicht verändert und von Ihrer Domain signiert.

**Die From-Adresse** ist die Absenderadresse, die Ihr Empfänger in seinem Posteingang sieht, zum Beispiel `hello@example.com`. DMARC prüft, ob SPF oder DKIM für genau diese Domain bestanden hat.

## So sieht ein DMARC-Eintrag aus

### Wo er im DNS steht

Das DNS ist die öffentliche Liste der Einstellungen für Ihre Domain. Sie bearbeiten es bei Ihrem DNS-Host. Das ist meist die Firma, bei der Sie die Domain gekauft haben, oder Ihr Hosting-Anbieter. Ein DMARC-Eintrag ist ein TXT-Eintrag, also ein DNS-Eintrag, der einfachen Text enthält.

Sie legen ihn unter dem Hostnamen `_dmarc` an. Die meisten DNS-Oberflächen hängen Ihre Domain automatisch an. Aus `_dmarc` wird so `_dmarc.example.com`.

Achten Sie auf einen häufigen Fehler. Manche Oberflächen erwarten nur `_dmarc`. Tippen Sie dort den vollen Namen `_dmarc.example.com` ein, landet der Eintrag unter `_dmarc.example.com.example.com`. Dort finden ihn empfangende Server nicht.

### Die Regeln zum Schreiben

- **Er muss mit `v=DMARC1` beginnen.** Das muss der erste Teil des Eintrags sein. `DMARC1` muss in Großbuchstaben stehen. Schreiben Sie `v=dmarc1`, setzen Sie einen anderen Teil an den Anfang oder vertippen Sie sich, ignorieren empfangende Server den ganzen Eintrag. Ihre Domain wird dann behandelt, als hätte sie keine DMARC-Richtlinie.
- **Trennen Sie die Teile mit Semikolons.** Leerzeichen um die Semikolons sind erlaubt.
- **Wenn die Richtlinie fehlt.** Angenommen, der Teil `p` fehlt oder ist falsch, aber der Eintrag hat in `rua` eine gültige Adresse für Berichte. Dann behandeln Empfänger die Richtlinie als `p=none`. Fehlen `p` und `rua` beide oder sind falsch, überspringen Empfänger DMARC für Ihre Domain komplett.
- **Veröffentlichen Sie nur einen DMARC-Eintrag.** Findet ein empfangender Server zwei oder mehr TXT-Einträge, die mit `v=DMARC1` beginnen, verwirft er alle. Diese Regel stammt aus [RFC 9989](https://www.rfc-editor.org/info/rfc9989), dem aktuellen DMARC-Standard. Zwei Einträge geben Ihnen nicht zwei Richtlinien. Sie lassen Ihre Domain ganz ohne Schutz.

### So prüfen Sie Ihren Eintrag

Sie können Ihren Eintrag mit einem Befehl im Terminal Ihres Computers abfragen:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Nutzen Sie `dig` unter Linux und macOS. Es gibt Ihren Eintrag in einer Zeile in Anführungszeichen aus. Nutzen Sie `nslookup` unter Windows. Es zeigt den Eintrag, den Ihr DNS-Server zurückgibt.

Gibt der Befehl nichts zurück, trifft eines von zwei Dingen zu. Entweder hat sich der Eintrag noch nicht im DNS verbreitet, oder er wurde unter dem falschen Hostnamen angelegt.

## Alle DMARC-Tags, und welche Sie brauchen

Jeder Teil eines DMARC-Eintrags, etwa `p=none`, heißt Tag. Der aktuelle Standard vom Mai 2026 hat elf Tags.

| Tag | Was es tut, in einfachen Worten | Mögliche Werte | Wenn Sie es weglassen | Brauchen Sie es? |
| --- | --- | --- | --- | --- |
| v | Sagt "das ist ein DMARC-Eintrag". Muss zuerst stehen. | DMARC1 | Pflicht | Ja |
| p | Ihre Richtlinie: was mit E-Mails passiert, die durchfallen. Gilt für Ihre Domain und ihre Subdomains. | none, quarantine, reject | Gilt als none, wenn rua gültig ist | Ja |
| rua | Wohin die täglichen Sammelberichte gehen | Eine oder mehrere mailto:-Adressen, durch Kommas getrennt | Sie bekommen keine Berichte | Ja |
| sp | Eine eigene Richtlinie für existierende Subdomains wie news.example.com | none, quarantine, reject | Wie p | Nur wenn Subdomains andere Regeln brauchen |
| np | Eine Richtlinie für Subdomains, die im DNS nicht existieren | none, quarantine, reject | Wie sp, oder wie p, wenn sp fehlt | Nur um erfundene Subdomains zu sperren |
| adkim | Wie genau die DKIM-Domain passen muss. r = relaxed, s = strict | r, s | r | Selten. Relaxed ist die normale Wahl |
| aspf | Wie genau die SPF-Domain passen muss. r = relaxed, s = strict | r, s | r | Selten. Relaxed ist die normale Wahl |
| t | Testmodus. Empfänger wenden Ihre Richtlinie eine Stufe milder an | y, n | n | Nur während Sie auf eine strengere Richtlinie umstellen |
| ruf | Wohin ein Bericht über jede einzelne durchgefallene E-Mail geht | Eine oder mehrere mailto:-Adressen, durch Kommas getrennt | Sie bekommen keine Berichte | Selten, wegen Grenzen beim Datenschutz |
| fo | Optionen für die Berichte zu einzelnen E-Mails | 0, 1, d, s | 0 | Nur wenn Sie ruf nutzen |
| psd | Kennzeichnet eine Public-Suffix-Domain | y, n, u | u | Nur für Public Suffixes oder große Organisationen, die Teile ihres DNS vergeben |

Relaxed und strict funktionieren so. Bei relaxed zählt eine Subdomain als Übereinstimmung, `mail.example.com` passt also zu `example.com`. Bei strict müssen die beiden Domains genau gleich sein.

Drei ältere Tags wurden im Standard von 2026 abgeschafft. Das sind das Prozent-Tag (`pct`), das Tag für das Berichtsformat (`rf`) und das Tag für das Berichtsintervall (`ri`). Ein übrig gebliebenes `pct=100` schadet nicht. Ein `pct` unter 100 diente dazu, eine Richtlinie während der Einführung nur auf einen Teil Ihrer E-Mails anzuwenden. Diese Aufgabe übernimmt jetzt das neue Tag `t`.

**Was die meisten Domains brauchen:** nur `v`, `p` und `rua`.

- Fügen Sie `sp` oder `np` hinzu, wenn Ihre Subdomains andere Regeln brauchen.
- Lassen Sie `psd` weg. Sie brauchen es nur, wenn Sie eine große Organisation betreiben, die Teile ihres DNS vergibt (`psd=n`), oder einen Public Suffix wie `co.uk` (`psd=y`).
- Relaxed Alignment (`adkim=r` und `aspf=r`) ist der Standard und funktioniert für fast jede Domain. Die Alignment-Tags brauchen Sie nur, wenn strenge Compliance-Regeln das Signieren mit einer Subdomain verbieten.

Mit unserem [DMARC-Generator](/dmarc-generator) können Sie einen Eintrag mit diesen Tags erstellen oder einen alten bereinigen.

## Was p=none, quarantine und reject wirklich tun

Das Tag `p` ist der wichtigste Teil des Eintrags. Es sagt empfangenden Servern, was sie mit einer E-Mail tun sollen, die DMARC nicht besteht. Es gibt drei Möglichkeiten. Jede ist eine Stufe auf dem Weg zum vollen Schutz.

**p=none: nur beobachten.** Empfänger tun mit durchgefallenen E-Mails nichts Besonderes. Sie werden normal zugestellt, und nur die üblichen Spamfilter greifen. Zusammen mit Berichten in `rua` nennt RFC 9989 das Monitoring Mode. So sehen Sie jeden Dienst, der E-Mails mit Ihrer Domain sendet, ohne Risiko für Ihre Zustellung.

**p=quarantine: in den Spam-Ordner.** Empfänger behandeln durchgefallene E-Mails als verdächtig. Bei den meisten Mailbox-Anbietern landen sie im Spam-Ordner des Empfängers. Das schützt Ihre Empfänger vor gefälschten E-Mails. Echte E-Mails von einem schlecht eingerichteten Tool gehen nicht verloren, denn sie lassen sich im Spam-Ordner noch finden.

**p=reject: sperren.** Empfänger lehnen durchgefallene E-Mails ab. Die meisten tun das während der Zustellung mit einem dauerhaften Fehlercode, der mit 5 beginnt. Die E-Mail erreicht nie ein Postfach. Der sendende Server bekommt stattdessen eine Bounce-Meldung.

### Empfänger folgen Ihrer Richtlinie nicht immer

Ihre Richtlinie ist eine Bitte, kein Befehl. Der Standard sagt, Empfänger sollen eine E-Mail nicht allein wegen `p=reject` ablehnen. Wissen sie sonst nichts über die E-Mail, sollen sie sie stattdessen wie quarantine behandeln. Mailbox-Anbieter nutzen neben Ihrer Richtlinie außerdem ihre eigenen Daten zur Absenderreputation und ihre Spamfilter.

### Warum reject DKIM braucht, nicht nur SPF

Weiterleitungen machen SPF kaputt. Angenommen, jemand leitet seine beruflichen E-Mails an ein privates Konto weiter. Der weiterleitende Server sendet die E-Mail von seiner eigenen IP-Adresse. Diese Adresse steht nicht in Ihrem SPF-Eintrag, also schlägt die SPF-Prüfung fehl.

DKIM übersteht Weiterleitungen. Die Signatur reist in der E-Mail selbst mit. Sie bleibt also gültig und passt weiter zu Ihrer Domain. Deshalb muss eine Domain mit `p=reject` DKIM nutzen und darf sich nicht nur auf SPF verlassen.

### Testmodus mit t=y

RFC 9989 fügt einen Testmodus hinzu. Setzen Sie `t=y`, wenden Empfänger Ihre Richtlinie eine Stufe milder an, als Sie sie veröffentlicht haben:

- `reject` wird wie `quarantine` behandelt.
- `quarantine` wird wie `none` behandelt.

Der Testmodus ändert Ihre Berichte nicht. Bei der Richtlinie `p=none` bewirkt er auch nichts. Mit ihm sehen Sie, wie sich eine strengere Richtlinie bei echten E-Mails verhält, bevor Sie sie dauerhaft machen.

## Subdomains: sp und np

Eine Subdomain ist ein zusätzlicher Name vor Ihrer Domain, etwa `marketing.example.com` oder `support.example.com`. Viele Unternehmen senden E-Mails von Subdomains. Die Tags `sp` und `np` legen die Regeln für sie fest, und zwar für jede Subdomain, die keinen eigenen DMARC-Eintrag hat.

### Wie ein Empfänger den richtigen Eintrag findet

1. Der Empfänger sucht zuerst einen DMARC-Eintrag für genau die Domain in der From-Zeile. Senden Sie von `news.example.com` und `_dmarc.news.example.com` existiert, nutzt er diesen Eintrag.
2. Gibt es dort keinen Eintrag, sucht er Ihren Haupteintrag unter `_dmarc.example.com`. Er findet ihn, indem er im Domainnamen Teil für Teil nach oben geht, zum Ende des Namens hin. Die Public Suffix List nutzt er dafür nicht.
3. Hat er Ihren Haupteintrag gefunden, prüft er, ob die sendende Subdomain im DNS existiert.

Dann wählt er die Regel:

- Existiert die Subdomain, wendet er `sp` an. Gibt es kein `sp`, wendet er `p` an.
- Existiert die Subdomain nicht (das DNS meldet NXDOMAIN, also "diesen Namen gibt es nicht"), wendet er `np` an. Gibt es kein `np`, nutzt er `sp`. Gibt es auch kein `sp`, nutzt er `p`.

### Ein Beispiel

Angenommen, dieser Eintrag ist unter `_dmarc.example.com` veröffentlicht:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Er legt drei verschiedene Regeln fest:

- **E-Mails von `example.com` selbst** nutzen `p=reject`. Bestehen sie DMARC nicht, werden Empfänger gebeten, sie zu sperren.
- **E-Mails von `news.example.com`**, einer Subdomain, die im DNS existiert, nutzen `sp=quarantine`. Angenommen, ein Newsletter fällt durch, weil ein Anbieter etwas falsch eingerichtet hat. Dann landet er im Spam-Ordner, statt zu bouncen.
- **E-Mails von einem erfundenen Namen wie `invoices-2026.example.com`**, der im DNS nicht existiert, nutzen `np=reject`. Eine Subdomain, die sich jemand einfach ausgedacht hat, bekommt die strenge Regel, obwohl Ihre echten Subdomains quarantine bekommen.

## Was ist ein DMARC-Bericht?

DMARC hat zwei Arten von Berichten:

- **Sammelberichte**, festgelegt mit `rua`. Das sind tägliche Zusammenfassungen.
- **Fehlerberichte**, festgelegt mit `ruf`. Sie beschreiben einzelne durchgefallene E-Mails.

### Sammelberichte (rua)

Ein Sammelbericht ist eine Zusammenfassung von einem Mailbox-Anbieter wie Gmail. Er listet alle E-Mails auf, die dieser Anbieter angeblich von Ihrer Domain erhalten hat. Es ist eine XML-Datei, also eine strukturierte Textdatei, die für Software gedacht ist. Anbieter senden sie als Anhang einer E-Mail, entweder als einfache `.xml`-Datei oder komprimiert, etwa als `.xml.gz`.

Jeder Bericht umfasst meist einen Tag in UTC. Der Standard sagt, Empfänger sollen Sammelberichte mindestens alle 24 Stunden senden. Verpflichtet sind sie dazu nicht.

Hier ist ein gekürzter Beispielbericht:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Das sagt der Bericht, Block für Block:

- **`<report_metadata>`**: Der Bericht kam von `mail.receiver.example`. Er umfasst einen ganzen Tag in UTC.
- **`<policy_published>`**: die Richtlinie, die der Empfänger für `example.com` gesehen hat. Hier sind das `p=none` und `sp=none`.
- **`<row>`**: 412 E-Mails kamen von der IP-Adresse `192.0.2.10`.
- **SPF**: Unter `<auth_results>` hat SPF bestanden, aber für die Domain `bounces.esp-mail.example`. Diese Domain ist nicht Ihre From-Domain `example.com`. Deshalb zeigt SPF unter `<policy_evaluated>` `fail`, weil es nicht gepasst hat.
- **DKIM**: Unter `<auth_results>` hat DKIM für `example.com` bestanden. Das passt zur From-Domain in `<identifiers>`. DKIM hat also bestanden und gepasst, und diese 412 E-Mails haben DMARC bestanden.

Der Kern ist einfach. `<auth_results>` zeigt die reinen SPF- und DKIM-Prüfungen. `<policy_evaluated>` zeigt, ob jede Prüfung auch zu Ihrer From-Domain gepasst hat. DMARC nutzt den zweiten Wert.

### Fehlerberichte (ruf)

Fehlerberichte, oft forensische Berichte genannt, beschreiben jeweils eine durchgefallene E-Mail. Sie können die Header der E-Mail und Angaben zum Empfänger enthalten. Wegen dieses Risikos für den Datenschutz entfernen viele Empfänger die meisten Angaben oder senden gar keine Fehlerberichte. Das Tag `fo` legt Optionen für diese Berichte fest. Es zählt nur, wenn Sie `ruf` nutzen.

### Berichte lesen

Der Standard empfiehlt, Sammelberichte mit Software zu lesen, nicht von Hand. Senden Sie an viele Mailbox-Anbieter, schickt Ihnen jeder seinen eigenen Bericht, jeden Tag.

## Warum bekomme ich DMARC-E-Mails?

Sie bekommen diese täglichen E-Mails, weil das Tag `rua` in Ihrem DMARC-Eintrag Ihre Adresse enthält. Jeder Mailbox-Anbieter, der E-Mails in Ihrem Namen erhält, sendet an jede Adresse in diesem Tag eine tägliche Zusammenfassung.

Die Betreffzeile folgt einem festen Format, festgelegt in [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

Der Submitter ist der Anbieter, der die E-Mail geprüft hat, etwa Google oder Microsoft. Der XML-Bericht ist angehängt, oft komprimiert.

Senden Sie diese Berichte nicht an ein privates Postfach. Richten Sie `rua` stattdessen auf ein eigenes Postfach oder einen Dienst, der Berichte verarbeitet. Erinnern Sie sich nicht, das eingerichtet zu haben, prüfen Sie Ihren DMARC-Eintrag. Ein früherer Administrator oder die Einrichtungsanleitung einer E-Mail-Plattform hat es vielleicht hinzugefügt.

### Berichte an eine andere Domain senden

Angenommen, Ihre Domain ist `example.com`, und Sie möchten Berichte an eine Adresse bei `reports.example.net` senden lassen. Die empfangende Domain muss zustimmen, sie anzunehmen. Das tut sie, indem sie einen TXT-Eintrag in ihrem DNS veröffentlicht. Ohne diesen Eintrag ignorieren Empfänger die Adresse und senden keine Berichte.

Der Eintrag steht unter diesem Hostnamen:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Dienste für Berichte veröffentlichen oft stattdessen einen Wildcard-Eintrag (`*._report._dmarc.reports.example.net`). Dieser eine Eintrag deckt jede Kundendomain ab. Für die einzelne Domain ist also keine Einrichtung nötig.

## Von p=none zu reject, ohne E-Mails zu verlieren

Springen Sie nicht direkt zu reject. Gehen Sie Schritt für Schritt vor:

1. **Beginnen Sie mit Beobachten.** Veröffentlichen Sie unter `_dmarc` einen DMARC-Eintrag mit `p=none` und einer funktionierenden Adresse in `rua`. Sie bekommen dann Berichte, und an Ihrer Zustellung ändert sich nichts.
2. **Bringen Sie Ihre Absender in Ordnung.** Lesen Sie die Berichte. Finden Sie jeden echten Dienst, der für Ihre Domain E-Mails sendet und die Prüfungen nicht besteht, und korrigieren Sie seine Einrichtung.
3. **Wechseln Sie zu quarantine.** Stellen Sie auf `p=quarantine` um, sobald alle Ihre echten Absender dauerhaft bestehen. Prüfen Sie die Spam-Ordner, damit keine echten E-Mails dort landen.
4. **Wechseln Sie zu reject.** Stellen Sie auf `p=reject` um. Gefälschte E-Mails in Ihrem Namen werden jetzt gesperrt, bevor sie jemanden erreichen.

Das kann eine Weile dauern. Der Standard sagt, dass es viele Monate dauern kann, bis jeder Absender besteht, je nachdem, wie oft Sie senden. Rechnungstools, Support-Desks und Marketing-Plattformen werden leicht übersehen. Prüfen Sie Ihre Berichte also weiter.

**Wenn Ihre Nutzer in Mailinglisten schreiben**, gehen Sie langsamer vor. Der Standard empfiehlt mindestens einen Monat mit `p=none` und danach genauso lange mit quarantine. Vergleichen Sie die Ergebnisse, bevor Sie zu reject wechseln. Mailinglisten ändern oft den Betreff, fügen Fußzeilen an oder senden Nachrichten erneut. Diese Änderungen machen SPF kaputt und manchmal auch DKIM. Wenn Sie Berichte aus mehreren Wochen vergleichen, sehen Sie diese Probleme, bevor reject E-Mails sperrt.

**Nutzen Sie den Testmodus für den letzten Schritt.** Mit `t=y` können Sie `p=reject` veröffentlichen, während Empfänger noch quarantine anwenden. Sie sehen, wie Empfänger auf reject reagieren, aber durchgefallene E-Mails landen weiter im Spam-Ordner, statt zu bouncen.

**Ein Hinweis zu strengem SPF.** Endet Ihr SPF-Eintrag mit `-all`, lehnen manche Empfänger durchgefallene E-Mails schon bei der SPF-Prüfung ab, bevor DMARC läuft. Diese E-Mails erreichen die DMARC-Prüfung nie. Sie erscheinen auch nicht in Ihren täglichen Berichten.

## Häufige Fehler beim DMARC-Eintrag

### Zwei DMARC-Einträge

Das passiert oft, wenn jemand einen zweiten TXT-Eintrag anlegt, statt den ersten zu bearbeiten. Empfänger sehen beide und verwerfen beide, wie RFC 9989 es vorschreibt. Ihre Domain verhält sich dann, als hätte sie gar keinen DMARC-Eintrag.

**Lösung:** Prüfen Sie Ihr DNS und fassen Sie alle Tags in einem einzigen TXT-Eintrag zusammen.

### Der Eintrag steht auf der Hauptdomain, nicht unter _dmarc

Geben Sie `example.com` als Hostnamen ein, wird der Eintrag auf Ihrer Hauptdomain angelegt, nicht unter `_dmarc.example.com`. Mailserver suchen DMARC nur unter dem Namen `_dmarc` und finden ihn deshalb nie.

**Lösung:** Setzen Sie den Hostnamen auf `_dmarc`.

### v=DMARC1 steht nicht zuerst oder ist falsch geschrieben

Wenn Sie `v=dmarc1` tippen oder mit `p=none; v=DMARC1` beginnen, ist der Eintrag ungültig. Empfänger ignorieren ihn.

**Lösung:** Setzen Sie `v=DMARC1` ganz an den Anfang des Eintrags, gefolgt von einem Semikolon.

### Adressen für Berichte ohne mailto:

Schreiben Sie `rua=dmarc@example.com` statt `rua=mailto:dmarc@example.com`, ist das Format der Adresse falsch. Empfänger können eine Adresse ohne mailto: nicht nutzen, also kommen keine Berichte an.

**Lösung:** Beginnen Sie jede Adresse in `rua` und `ruf` mit `mailto:`.

### Berichte an eine andere Domain ohne deren Erlaubnis

Senden Sie Berichte an die Domain eines Anbieters, und diese Domain hat den Eintrag zur Erlaubnis nicht veröffentlicht, bekommen Sie keine Berichte.

**Lösung:** Sorgen Sie dafür, dass jede externe Adresse für Berichte einen passenden Eintrag `_report._dmarc` hat, wie oben erklärt.

### Reject nur mit SPF

Eine Weiterleitung ändert die IP-Adresse, die die E-Mail sendet. Weitergeleitete E-Mails bestehen SPF also nicht. Ohne DKIM bestehen echte weitergeleitete E-Mails DMARC nicht und bouncen bei einer Richtlinie reject.

**Lösung:** Richten Sie bei jedem Dienst, der Ihre E-Mails sendet, DKIM-Signaturen ein, bevor Sie über `p=none` hinausgehen.

### Abgeschaffte Tags aus alten Leitfäden

Viele ältere Leitfäden fügten ein Prozent-Tag hinzu, mit Werten wie 100 oder 20 für eine teilweise Einführung. Ein übrig gebliebenes `pct=100` schadet nicht, aber eine Einführung nach Prozent ist nicht mehr Teil des Standards.

**Lösung:** Entfernen Sie alte Prozent-Tags. Nutzen Sie `t=y`, wenn Sie während Ihrer Änderungen eine mildere Richtlinie brauchen.

## Häufige Fragen

**Brauche ich wirklich einen DMARC-Eintrag?**
Ja, wenn Sie E-Mails an private Konten bei Gmail oder Outlook senden. Google und Microsoft verlangen beide von Absendern mit 5.000 oder mehr E-Mails pro Tag einen DMARC-Eintrag, und die From-Domain muss passen. Kleinere Absender sollten trotzdem einen haben. Ein Eintrag mit `p=none` und `rua` kostet nichts, und die Berichte zeigen Ihnen, wer in Ihrem Namen E-Mails sendet.

**Wie prüfe ich meinen DMARC-Eintrag?**
Führen Sie `dig TXT _dmarc.yourdomain.com +short` in Ihrem Terminal aus, oder `nslookup -type=TXT _dmarc.yourdomain.com` unter Windows. Das Ergebnis sollte Ihr Eintrag sein, beginnend mit `v=DMARC1`. Sie können auch eine Test-E-Mail an ein Gmail-Konto senden, sie öffnen und "Original anzeigen" wählen. Dort sehen Sie, ob DMARC bestanden hat.

**Was bedeutet DMARC fail?**
Es bedeutet, dass die E-Mail beide Prüfungen nicht bestanden hat. Weder SPF noch DKIM hat für eine Domain bestanden, die zur sichtbaren From-Domain passt. Empfänger folgen dann Ihrer Richtlinie. Manche senden eine klare Ablehnung zurück, etwa `550 5.7.1 Email rejected per DMARC policy for example.com`. Die Ursache finden Sie, indem Sie [die Bounce-Meldung lesen](/blog/550-5-7-1-error). Gmail nutzt den Fehlercode `4.7.31`, wenn der DMARC-Eintrag fehlt, und `4.7.32`, wenn die From-Domain nicht passt.

**Kann ich mehr als einen DMARC-Eintrag haben?**
Nein. Eine Domain kann nur einen DMARC-Eintrag veröffentlichen. RFC 9989 sagt, dass ein empfangender Server alle verwerfen muss, wenn er mehr als einen findet. Ihre Domain hat dann keine DMARC-Richtlinie. Bearbeiten Sie Ihren bestehenden Eintrag, statt einen zweiten anzulegen.

**Stoppt DMARC ähnlich aussehende Domains?**
Nein. DMARC schützt nur genau die Domain in Ihrem DNS. Es kann niemanden daran hindern, eine ähnlich aussehende Domain zu registrieren, etwa eine mit zwei vertauschten Buchstaben oder einer anderen Endung wie .net. Es kann auch keinen gefälschten Anzeigenamen stoppen. Gegen ähnlich aussehende Domains brauchen Sie andere Maßnahmen, etwa die Beobachtung neuer Domain-Registrierungen, die Ihren Namen nachahmen.

Ein DMARC-Eintrag beweist, dass Ihre E-Mails wirklich von Ihnen kommen. Er hilft nicht, wenn Sie an Adressen senden, die nicht mehr existieren. Lassen Sie Ihre Liste vor dem nächsten Versand durch [Giggal.ai](/email-list-cleaning) (auf Englisch) laufen. So entfernen Sie ungültige Adressen und halten Ihre Bounce-Rate niedrig.
