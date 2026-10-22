---
title: "SPF, DKIM und DMARC einfach erklärt"
seoTitle: "SPF, DKIM und DMARC erklärt: So arbeiten sie zusammen (2026)"
description: "SPF prüft den Server, DKIM die Signatur und DMARC, ob eines davon zu Ihrer From-Domain passt. Die nötigen Einträge, häufige Fehler und was 2026 neu ist."
slug: spf-dkim-dmarc-einfach-erklaert
date: 2026-10-19
updated: 2026-10-19
keyword: spf dkim dmarc
image: /blog/covers/de/spf-dkim-dmarc-einfach-erklaert.webp
imageAlt: Dunkelblaues Banner mit SPF, DKIM, DMARC und drei Spalten mit technischen Erklärungen
cta: Prüfen Sie Ihre Liste vor dem nächsten Versand
---

SPF, DKIM und DMARC sind drei DNS-Einträge. Jeder beantwortet eine andere Frage zu einer E-Mail. SPF (Sender Policy Framework) nennt die Server, die für Ihre Domain E-Mails senden dürfen. DKIM (DomainKeys Identified Mail) fügt jeder Nachricht eine Signatur hinzu. So kann der Empfänger erkennen, dass nichts geändert wurde, nachdem die Nachricht Sie verlassen hat. DMARC (Domain-based Message Authentication, Reporting and Conformance) prüft, ob mindestens einer der beiden zur Domain in Ihrer From-Adresse passt. Und es sagt dem Empfänger, was er tun soll, wenn keiner passt. Seit 2024 sind sie nicht mehr freiwillig. Gmail und Outlook.com lehnen inzwischen viele E-Mails ab, die diese Prüfungen nicht bestehen, statt sie nur in den Spam-Ordner zu legen.

| Eintrag | Was er prüft | Wo er liegt |
| --- | --- | --- |
| SPF | Welche Server für Ihre Domain senden dürfen | TXT-Eintrag auf Ihrer Domain |
| DKIM | Eine digitale Signatur auf jeder Nachricht | TXT-Eintrag unter selector._domainkey.yourdomain |
| DMARC | Ob SPF oder DKIM zu Ihrer From-Domain passt, und was sonst zu tun ist | TXT-Eintrag unter _dmarc.yourdomain |

## Warum Sie sie nicht mehr weglassen können

Ab dem 1. Februar 2024 hat Google Pflichtregeln für alle eingeführt, die E-Mails an private Gmail-Konten senden. Nach diesen Grundanforderungen muss jeder Absender SPF oder DKIM einrichten. Er braucht gültiges Forward- und Reverse-DNS mit passenden PTR-Einträgen für die sendenden IPs. Er muss TLS-Verschlüsselung für die Übertragung nutzen und die Vorgaben von RFC 5322 einhalten. Ihre Spam-Rate in den Google Postmaster Tools muss unter 0,3 % bleiben, und Google empfiehlt, sie unter 0,1 % zu halten. Senden Sie E-Mails ohne Authentifizierung, warnt Google, dass Nachrichten im Spam-Ordner landen oder mit dem Fehlercode 5.7.26 direkt abgelehnt werden.

Senden Sie täglich 5.000 oder mehr Nachrichten an private Gmail-Adressen, stuft Google Sie als Massenversender ein, und die Regeln werden strenger. Massenversender können nicht zwischen SPF und DKIM wählen, sie müssen beide Protokolle einrichten. Sie müssen außerdem einen DMARC-Eintrag veröffentlichen. Ihre sichtbare From-Domain muss zu SPF oder DKIM passen (Alignment). Und Marketing-Nachrichten brauchen eine funktionierende Abmeldung mit einem Klick. Google zählt die Grenze von 5.000 Nachrichten über Ihre Hauptdomain und alle ihre Subdomains in einem Zeitraum von 24 Stunden. Hat Ihre Domain diese Grenze einmal erreicht, gilt der Status als Massenversender für Google dauerhaft. Ab November 2025 hat Gmail die Durchsetzung bei nicht konformem Verkehr verstärkt, mit vorübergehenden Verzögerungen der Zustellung und dauerhaften Ablehnungen. Diese Richtlinien gelten für private Gmail-Konten, nicht für geschäftliche Postfächer in Google Workspace.

Microsoft hat am 5. Mai 2025 eigene Regeln zur Authentifizierung eingeführt. Sie gelten für Absender, die täglich 5.000 oder mehr Nachrichten an private Konten bei Outlook.com, Hotmail und Live senden. Absender über dieser Grenze brauchen eine bestandene SPF-Prüfung, eine gültige DKIM-Signatur und einen veröffentlichten DMARC-Eintrag mit p=none oder strenger, der zu SPF oder DKIM passt. Erfüllen Sie diese Anforderungen nicht, sperrt Microsoft Ihre Nachrichten mit dem Bounce-Code 550 5.7.515 Access denied, sending domain does not meet the required authentication level. Yahoo hat 2024 ähnliche Regeln für Massenversender eingeführt.

| Code | Was fehlgeschlagen ist |
| --- | --- |
| 4.7.27 und 5.7.27 | SPF hat nicht bestanden |
| 4.7.30 und 5.7.30 | DKIM hat nicht bestanden |
| 4.7.31 | DMARC-Eintrag fehlt oder keine Richtlinie |
| 4.7.32 | From-Domain passt nicht zu SPF oder DKIM |
| 4.7.23 und 5.7.25 | Probleme mit dem PTR-Eintrag |

Google nutzt die Codes 4.x für vorübergehende Ratenbegrenzung und die Codes 5.x für dauerhafte Sperren. Wenn Ihre Kampagnen bouncen, raten Sie die Ursache nicht anhand Ihres Marketing-Dashboards. Prüfen Sie die rohen Ablehnungsmeldungen des Servers, wie in unserem Leitfaden zum [Lesen von Bounce-Meldungen](/blog/550-5-7-1-error) beschrieben.

## SPF: welche Server für Ihre Domain senden dürfen

Sender Policy Framework ist in RFC 7208 standardisiert und prüft den Envelope-Absender einer eingehenden Nachricht. Der Envelope-Absender ist die Return-Path- oder MAIL-FROM-Adresse, an die Mailserver Bounces zurückschicken. SPF kann auch den Servernamen prüfen, der beim ersten HELO- oder EHLO-Handshake genannt wird. SPF prüft nur den Envelope-Absender und ignoriert die sichtbare From-Adresse, die Menschen in ihrem Posteingang sehen. Deshalb kann SPF allein nicht verhindern, dass ein Angreifer Ihren Markennamen fälscht.

Ein [SPF-Eintrag](/glossary/spf) liegt im DNS als einzelner TXT-Eintrag. Er sagt empfangenden Servern, welche IP-Adressen, MX-Server und Drittplattformen für Ihre Domain E-Mails senden dürfen. Ein typischer Eintrag sieht so aus:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Jeder Eintrag beginnt mit `v=spf1`. Die Angabe `include:_spf.google.com` weist empfangende Server an, den SPF-Eintrag von Google abzufragen und die IP-Adressen darin zu erlauben. Das zweite include erlaubt Servern Ihrer Marketing-Plattform oder Ihres Dienstes für Transaktions-E-Mails das Senden.

Die Angabe am Ende sagt Empfängern, wie sie nicht genannte Absender behandeln sollen. Der Softfail-Qualifier `~all` bedeutet, dass nicht genannte Server wahrscheinlich nicht berechtigt sind. Er schlägt aber vor, dass Empfänger die Nachricht annehmen und durch den Spamfilter schicken. Der Fail-Qualifier `-all` markiert nicht genannte Server als harten Fehler, und manche Empfänger lehnen solche E-Mails direkt ab. Absender, die komplexe Einrichtungen prüfen, beginnen oft mit `~all`, damit echte Geschäftspost nicht versehentlich verloren geht.

RFC 7208 setzt zwei strenge Grenzen, die Sie nicht überschreiten dürfen. Erstens darf eine Domain nur einen SPF-Eintrag veröffentlichen. Zwei Einträge führen zu einem permerror, und SPF ist dann für alle Ihre ausgehenden E-Mails ungültig. Zweitens erlaubt SPF höchstens 10 DNS-Abfragen über `include`, `a`, `mx`, `ptr`, `exists` und `redirect`. Braucht die Auflösung Ihres Eintrags eine elfte Abfrage, melden empfangende Server einen permerror. Auch Weiterleitungen machen SPF kaputt. Leitet ein Empfänger Ihre Nachricht weiter, passt die IP des weiterleitenden Servers nicht zu Ihrem Eintrag, und SPF schlägt fehl.

## DKIM: eine Signatur, die zeigt, dass die Nachricht nicht verändert wurde

DKIM ist in RFC 6376 definiert und arbeitet mit der Nachricht selbst statt mit dem Server. Wenn Ihr Server eine Nachricht zum Senden vorbereitet, erstellt er einen kryptografischen Hash aus ausgewählten Headern und dem Text. Diesen Hash signiert er mit einem privaten Schlüssel und schreibt das Ergebnis in einen Header `DKIM-Signature`. Der Header enthält zwei wichtige Werte: die signierende Domain im Tag `d=` und den Selektor im Tag `s=`. DKIM sagt nur, ob die Signatur gültig ist. Was bei einem Fehler zu tun ist, entscheidet DMARC.

Kommt die Nachricht an, liest der Empfänger Selektor und Domain aus dem Header, fragt im DNS den öffentlichen Schlüssel unter `s._domainkey.d` ab und prüft die Signatur. DKIM signiert Header und Inhalt, verschlüsselt die E-Mail aber nicht. Der Text ist lesbar, aber die Signatur beweist, dass niemand Betreff, Absenderangaben oder Text unterwegs verändert hat.

Eine normale Weiterleitung lässt Header und Inhalt unverändert. Deshalb übersteht eine gültige DKIM-Signatur Weiterleitungen meist. Das macht DKIM bei weitergeleiteten E-Mails verlässlicher als SPF. Mailinglisten, die eine Fußzeile anfügen oder den Betreff markieren, können die Signatur aber trotzdem ungültig machen. Gmail verlangt Schlüssel mit mindestens 1024 Bit und empfiehlt 2048.

Ein DKIM-Eintrag mit dem öffentlichen Schlüssel sieht im DNS so aus:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

Das Tag `v=DKIM1` nennt die Protokollversion, `k=rsa` den Schlüsselalgorithmus, und `p=` enthält den öffentlichen Schlüssel in Base64. Betreiben Sie Ihren eigenen Mailserver, können Sie mit unserem [DKIM-Generator](/dkim-generator) ein Schlüsselpaar erstellen.

Eine häufige Falle entsteht, wenn sich Absender auf die Standardsignatur der Plattform verlassen. Viele E-Mail-Plattformen signieren ausgehende E-Mails standardmäßig mit ihrer eigenen gemeinsamen Domain (`d=shared-esp.example`). Die Signatur besteht zwar, aber die signierende Domain passt nicht zu Ihrer sichtbaren From-Domain. Dadurch schlägt das DMARC-Alignment fehl. Richten Sie in den Einstellungen Ihrer Plattform ein eigenes DKIM ein, damit die Signatur Ihre Domain im Tag `d=` nutzt.

## DMARC: die Prüfung, die beides mit Ihrer From-Adresse verbindet

Domain-based Message Authentication, Reporting, and Conformance verbindet die Envelope-Prüfung und die kryptografische Signatur mit der sichtbaren From-Adresse, die Menschen lesen. Alignment bedeutet, dass die Domain, die SPF oder DKIM bestanden hat, dieselbe ist wie die Domain in der From-Zeile. DMARC besteht, wenn SPF oder DKIM die Authentifizierung besteht UND zur Domain im From-Header passt. Eine Nachricht muss nicht bei beiden gleichzeitig passen. Google empfiehlt aber, beide abzugleichen, und weist darauf hin, dass beide später Pflicht werden könnten.

Angenommen, Ihr Unternehmen sendet einen wöchentlichen Newsletter. Die Nachricht zeigt `From: news@example.com`. Für Bounces nutzt Ihr E-Mail-Dienst seine eigene Envelope-Adresse und setzt den Return-Path auf `bounce-123@bounces.esp-mail.example`. Ihr Dienst signiert die Nachricht außerdem mit eigenem DKIM und `d=example.com`.

Wenn der empfangende Server diese Nachricht verarbeitet:
1. SPF prüft die Envelope-Domain `bounces.esp-mail.example` und besteht. Aber `esp-mail.example` passt nicht zu `example.com`, also besteht SPF das DMARC-Alignment nicht.
2. DKIM prüft die Signatur für `example.com`, bestätigt den kryptografischen Hash und passt zur Domain `example.com` im From-Header. DKIM besteht also und erreicht das DMARC-Alignment.
3. Da DKIM bestanden hat und passt, besteht die Nachricht DMARC.

DMARC bietet für SPF und DKIM zwei Arten von Alignment. Relaxed Alignment ist die Standardeinstellung und erlaubt, dass Subdomains Ihrer Organisationsdomain zur Hauptdomain passen. Zum Beispiel passt eine E-Mail von `news.example.com` zu einer SPF- oder DKIM-Domain `example.com`. Strict Alignment, eingestellt mit `aspf=s` oder `adkim=s`, verlangt eine exakt gleiche Domain und lässt keine abweichenden Subdomains zu.

Ihr DMARC-Eintrag kann drei Richtlinien veröffentlichen:
- `p=none`: Schaltet DMARC in den Überwachungsmodus. Empfänger stellen E-Mails normal zu und sammeln Berichte zur Authentifizierung.
- `p=quarantine`: Bittet Empfänger, E-Mails, die DMARC nicht bestehen, in den Spam- oder Junk-Ordner zu legen.
- `p=reject`: Bittet Empfänger, E-Mails, die DMARC nicht bestehen, abzulehnen.

Das Tag rua sagt Empfängern, wohin sie Sammelberichte senden sollen. Das sind meist tägliche XML-Dateien, die zeigen, welche IP-Adressen E-Mails mit Ihrer Domain gesendet haben. Ein üblicher Einstiegseintrag unter `_dmarc.example.com` sieht so aus:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

Im Mai 2026 hat die Internet Engineering Task Force RFC 9989 auf dem Standards Track veröffentlicht, zusammen mit RFC 9990 für Sammelberichte und RFC 9991 für Fehlerberichte. Diese neuen Standards ersetzen offiziell RFC 7489 und RFC 9091. Bestehende Einträge, die mit `v=DMARC1` beginnen, funktionieren weiter. Die neue Spezifikation ändert aber mehrere Tags. Das Prozent-Tag (`pct`) und das Tag für das Berichtsformat (`rf`) sind entfallen und nicht mehr Teil des Standards. Das Tag für das Berichtsintervall (`ri`) gilt als historisch. Absender, die eine neue Richtlinie testen, nutzen jetzt das neue Tag `t` für den Testmodus. Administratoren können mit dem Tag `np` Richtlinien für nicht existierende Subdomains festlegen. Enthält Ihr aktueller DNS-Eintrag ein Prozent-Tag, planen Sie, es zu entfernen. Mit unserem [DMARC-Generator](/dmarc-generator) können Sie einen neuen Eintrag erstellen oder alte Tags entfernen.

## So prüft ein empfangender Server eine Nachricht

Kommt eine E-Mail bei einem empfangenden Gateway an, führt der Server die Prüfungen in einer festen Reihenfolge aus:

1. Der Server nimmt die Netzwerkverbindung an, notiert die IP-Adresse des Absenders und prüft die Begrüßung mit HELO oder EHLO.
2. Der Server liest die Domain aus dem Envelope-Return-Path und fragt im DNS ab, ob die sendende IP laut SPF berechtigt ist.
3. Der Server sucht den Header `DKIM-Signature`, fragt im DNS den öffentlichen Schlüssel unter `selector._domainkey.domain` ab und berechnet die kryptografischen Hashes über Header und Inhalt neu.
4. Der Server prüft den sichtbaren From-Header und fragt im DNS einen DMARC-Eintrag unter `_dmarc.domain` ab.
5. Der Server prüft das Alignment, also ob die authentifizierte SPF-Domain oder die authentifizierte DKIM-Domain zur sichtbaren From-Domain passt.
6. Der Server wendet je nach Ergebnis die veröffentlichte DMARC-Richtlinie an: none, quarantine oder reject.
7. Haben Sie mit rua Berichte angefordert, nimmt der Server das Ergebnis in seinen nächsten Sammelbericht an Sie auf.

In Gmail sehen Sie alle drei Ergebnisse bei jeder Nachricht über "Original anzeigen".

## Wo SPF, DKIM und DMARC meist scheitern

Zwei SPF-Einträge sind ein häufiger Fehler, wenn ein neuer E-Mail-Dienst hinzukommt. Ein Administrator folgt vielleicht der Anleitung und legt `v=spf1 include:sendgrid.net ~all` als zweiten TXT-Eintrag neben einem bestehenden Eintrag für Google an. RFC 7208 verbietet mehrere SPF-Einträge auf einer Domain. Finden empfangende Server zwei Einträge, brechen sie mit einem permerror ab, und SPF schlägt fehl. Sie beheben das, indem Sie alle berechtigten Anbieter in einem Eintrag zusammenfassen: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Mehr als 10 Abfragen führen zu einem weiteren stillen Zustellproblem. Jedes Tag `include`, `a`, `mx`, `ptr`, `exists` oder `redirect` zählt zu dieser Grenze, und auch verschachtelte includes in den Einträgen der Anbieter zählen. Braucht Ihr Eintrag eine elfte Abfrage, melden empfangende Server automatisch einen permerror. Sie beheben das, indem Sie alte Anbietereinträge entfernen, Tools zur Prüfung der Abfragen nutzen oder includes durch feste `ip4`-Bereiche ersetzen. Letzteres gilt aber nur für sendende IPs, die Sie selbst kontrollieren und die sich nicht ändern.

Verbinden Sie einen neuen Versanddienst, ohne ihn im DNS einzutragen, sind Ihre ausgehenden E-Mails den Spamfiltern ausgesetzt. Vertriebs- oder Support-Teams verbinden oft Terminplaner, Helpdesk-Plattformen oder Rechnungssysteme, ohne die Person zu informieren, die das DNS verwaltet. Diese neuen Server stehen nicht in Ihrem SPF-Eintrag und signieren nicht mit Ihren DKIM-Schlüsseln. Ihre Nachrichten bestehen die Authentifizierung also nicht und landen im Spam-Ordner. Die Lösung ist eine einfache Regel: Wer ein neues Tool verbindet, informiert die Person, die das DNS verwaltet. Dazu kommt ein Blick in Ihre DMARC-Berichte nach Absendern, die Sie nicht kennen.

Wer sich auf das DKIM der Plattform verlässt, verliert das DMARC-Alignment, obwohl die Signatur kryptografisch gültig ist. Signiert ein E-Mail-Dienst Nachrichten mit `d=platform-mail.example`, während Ihre From-Zeile `From: support@yourcompany.example` zeigt, besteht DKIM die technische Prüfung. Das Alignment mit Ihrer Domain schlägt aber fehl. Um das zu beheben, öffnen Sie die Einstellungen Ihrer Plattform, erstellen eigene DKIM-Schlüssel für Ihre Domain und veröffentlichen die Selektor-Einträge in Ihrer DNS-Verwaltung.

Weiterleitungen machen SPF regelmäßig kaputt, wenn ein Empfänger berufliche E-Mails an ein privates Postfach weiterleitet. Der Server dazwischen gibt die Nachricht mit seiner eigenen IP-Adresse weiter, und diese passt nicht zu Ihrem SPF-Eintrag. Externe Weiterleitungen können Sie nicht steuern. Haben Ihre Nachrichten aber gültige DKIM-Signaturen, überstehen sie die Weiterleitung und erfüllen DMARC auch über weitere Stationen.

Massenkampagnen über eine andere Plattform mit einer kostenlosen From-Adresse auf `@gmail.com` bestehen DMARC grundsätzlich nicht. Die Absenderrichtlinien von Google warnen ausdrücklich, dass es der Zustellbarkeit schadet, Gmail-Adressen von externen Servern aus vorzutäuschen. Drittplattformen können für die Domain von Google keine gültigen Signaturen erzeugen und SPF nicht bestehen. Deshalb lehnen Mailbox-Anbieter solche E-Mails ab oder legen sie in Quarantäne. Absender sollten Outreach immer von einer eigenen Domain aus betreiben.

Bleibt DMARC dauerhaft auf `p=none`, ist Ihre Domain anfällig für Fälschungen. Eine Überwachungsrichtlinie erfüllt zwar das Minimum von Gmail und Microsoft. Aber `p=none` sagt empfangenden Servern, dass sie bei gefälschten E-Mails gar nichts zum Schutz unternehmen sollen. Wer genau Ihre Domain fälscht, wird bei dieser Einstellung von DMARC nicht gestoppt. Prüfen Sie Ihre täglichen Sammelberichte ein paar Wochen lang. Stellen Sie sicher, dass alle echten Versandquellen passen. Stellen Sie Ihre Richtlinie dann auf `p=quarantine` und danach auf `p=reject` um.

## Checkliste zur Einrichtung von SPF, DKIM und DMARC

Gehen Sie diese Punkte der Reihe nach durch:

1. Listen Sie jeden internen Dienst, jede Marketing-Plattform, jeden Support-Desk und jedes Tool für Transaktions-E-Mails auf, das mit Ihrer Domain E-Mails sendet.
2. Veröffentlichen Sie einen einzigen gemeinsamen [SPF-Eintrag](/glossary/spf) für alle berechtigten sendenden Server und bleiben Sie unter 10 Abfragen. Der [SPF-Checker](/spf-checker) zählt sie für Sie.
3. Schalten Sie für jede Versandplattform eigene DKIM-Signaturen mit Ihrer Domain ein und veröffentlichen Sie die passenden Selektor-Einträge im DNS.
4. Sorgen Sie dafür, dass Ihre sendenden IP-Adressen gültiges Forward-DNS und einen passenden [PTR-Eintrag](/glossary/ptr-record) im Reverse-DNS haben.
5. Veröffentlichen Sie unter `_dmarc` einen ersten [DMARC-Eintrag](/blog/what-is-a-dmarc-record) mit `p=none` und einem aktiven Postfach für `rua`, damit Sie XML-Sammelberichte erhalten.
6. Registrieren Sie Ihre Absenderdomain in den [Google Postmaster Tools](/glossary/postmaster-tools), um die Domain-Reputation, Zustellfehler und Spam-Beschwerderaten zu überwachen.
7. Prüfen Sie Ihre DMARC-Sammelberichte ein paar Wochen lang. Stellen Sie sicher, dass jeder echte Versandstrom bei SPF oder DKIM passt.
8. Stellen Sie Ihre DMARC-Richtlinie von `p=none` auf `p=quarantine` um, prüfen Sie, ob die Zustellung stabil bleibt, und stellen Sie dann auf `p=reject` um.
9. Senden Sie eine Testnachricht an ein privates Gmail-Konto und öffnen Sie "Original anzeigen". Prüfen Sie, ob bei SPF, DKIM und DMARC jeweils PASS steht.

## Häufige Fragen

**Braucht DMARC sowohl SPF als auch DKIM?**
Nein. DMARC verlangt, dass SPF oder DKIM die Authentifizierung besteht und zur Domain im sichtbaren From-Header passt. Sind beide Protokolle auf Ihrer Domain aktiv, sind Sie besser geschützt, wenn eine Weiterleitung SPF kaputt macht. Google empfiehlt beide für den Versand großer Mengen. Eine Nachricht besteht DMARC aber auch, wenn nur einer der beiden ein gültiges Alignment erreicht.

**Was ist der Unterschied zwischen SPF und DMARC?**
SPF erlaubt bestimmten IP-Adressen von Mailservern, für die technische Envelope-Absenderadresse im Return-Path-Header zu senden. DMARC prüft die sichtbare From-Adresse, die Menschen in ihrem E-Mail-Programm sehen. Es prüft, ob SPF oder DKIM zu dieser sichtbaren Domain passt. Und es sagt empfangenden Servern, ob sie Nachrichten, die die Prüfung nicht bestehen, annehmen, in Quarantäne legen oder ablehnen sollen.

**Brauche ich DMARC, wenn ich weniger als 5.000 E-Mails pro Tag sende?**
Gmail verlangt DMARC nur von Massenversendern. Bei geringem Volumen werden Sie also nicht gesperrt, wenn Sie es weglassen. SPF oder DKIM brauchen Sie aber trotzdem. Ein Eintrag mit p=none und rua lohnt sich dennoch. Die Berichte zeigen Ihnen, welche Dienste mit Ihrer Domain senden, auch solche, die Sie vergessen haben, und jeden, der Ihre Domain fälscht.

**Kann ich zwei SPF-Einträge haben?**
Nein. RFC 7208 verbietet mehr als einen SPF-Eintrag auf einer Domain. Finden empfangende Server mehrere SPF-Einträge im DNS, brechen sie die Prüfung sofort mit einem permerror ab und werten SPF als fehlgeschlagen. Sie müssen alle berechtigten IP-Adressen und includes von Drittanbietern in einem Eintrag zusammenfassen, der mit `v=spf1` beginnt.

**Wie lässt sich DMARC am einfachsten erklären?**
SPF prüft, ob der sendende Server für Ihre Domain senden darf. DKIM prüft eine Signatur, die zeigt, dass die Nachricht nicht verändert wurde. DMARC ist die letzte Prüfung. Es bestätigt, dass einer der beiden zur selben Domain gehört wie die From-Adresse. Ist das bei keinem der Fall, sagt DMARC dem empfangenden Server, ob er die Nachricht trotzdem zustellen, in den Spam-Ordner legen oder ablehnen soll.

Diese Einträge beweisen, wer Sie sind. Sie ändern aber nichts daran, an wen Sie senden, und E-Mails an tote Adressen bouncen weiterhin. Unser Leitfaden dazu, [wie Sie die Bounce-Rate senken](/blog/how-to-reduce-email-bounce-rate), behandelt diese Seite. Und Sie können Ihre Liste vor dem nächsten Versand durch [Giggal.ai](/email-list-cleaning) (auf Englisch) laufen lassen.
