---
title: Wie lange Sie eine E-Mail-Domain vor einer Kampagne aufwärmen sollten
seoTitle: "E-Mail-Domain aufwärmen: Wie lange vor der Kampagne? (2026)"
description: "Eine neue Domain braucht etwa 2 bis 4 Wochen Warm-up, nachdem sie gealtert ist. Zeiten je nach Lage, ein Plan Tag für Tag und die Werte für den Start."
slug: e-mail-domain-aufwaermen
date: 2026-10-19
updated: 2026-10-19
keyword: e-mail domain aufwärmen
image: /blog/covers/de/e-mail-domain-aufwaermen.webp
imageAlt: "Wie lange Sie eine E-Mail-Domain aufwärmen: etwa 30 Tage Domainalter, 2 bis 4 Wochen Steigerung, dann senden, wenn die Bounces unter 2 Prozent bleiben"
cta: Prüfen Sie die Liste für Ihre erste Kampagne vor dem Versand
---

Eine neue E-Mail-Domain braucht vor einer echten Kampagne etwa 2 bis 4 Wochen Warm-up. Diese Zeit sollte erst beginnen, wenn die Domain ein paar Wochen alt ist. Ein neues Postfach auf einer Domain, die schon normale Geschäftspost sendet, ist meist nach etwa 2 Wochen bereit. Wenn Sie wissen wollen, wie lange Sie eine E-Mail-Domain vor einer Kampagne aufwärmen sollten, sind das die Zahlen für die Planung. Wann Sie wirklich bereit sind, entscheiden danach Ihre eigenen Bounce- und Beschwerderaten.

Kein Mailbox-Anbieter veröffentlicht eine offizielle Dauer für das Warm-up. Google, Microsoft und Yahoo nennen keine Zahl von Tagen für E-Mails aus normalen Postfächern. Die Zahlen, die Sie online sehen, von 14 Tagen bis 12 Wochen, stammen meist von Firmen, die Warm-up-Tools verkaufen. Dieser Leitfaden zeigt, worauf jede Zeitangabe beruht. So können Sie die richtige für Ihre Lage wählen.

Wenn Sie zuerst die Grundlagen zum Warm-up brauchen, beginnen Sie mit unserem Glossareintrag zum [E-Mail-Warm-up](/glossary/email-warmup).

## Wie lange Sie eine E-Mail-Domain aufwärmen, je nach Lage

Die richtige Dauer hängt davon ab, was neu ist: die Domain, das Postfach, das Konto bei Ihrem E-Mail-Anbieter oder die sendende IP.

| Lage | Planen Sie ein | Worauf es beruht |
|---|---|---|
| Ganz neue Domain, neue Postfächer | Die Domain etwa 30 Tage altern lassen, dann 2 bis 4 Wochen Steigerung | Spamhaus setzt neu registrierte Domains in den ersten 24 Stunden auf eine Sperrliste. Der Autor Al Iverson, der über Zustellbarkeit schreibt, rät zu einer Domain, die vor dem Warm-up mindestens 30 Tage alt ist. |
| Neues Postfach auf einer Domain, die schon normale E-Mails sendet | Etwa 2 Wochen Steigerung | Die Domain hat schon eine Versandhistorie. Nur das Volumen des neuen Postfachs ist neu. |
| Neues Microsoft-365-Konto (Tenant) | 60 Tage bis zu Ihrem vollen Limit für externe Empfänger | Microsoft senkt das Limit für externe Empfänger in den ersten 30 Tagen eines Tenants auf 10 % und an den Tagen 31 bis 60 auf 25 %. Test-Tenants fallen auf 500 externe Empfänger pro Tag. |
| Domain nach einer Pause | Langsam neu starten, als wäre sie neu | Twilio SendGrid rät, eine IP nach mehr als 30 Tagen ohne Versand erneut aufzuwärmen. |
| Dedizierte IP auf einer E-Mail-Plattform | 30 bis 45 Tage nach dem Plan der Plattform | Amazon SES steigert über 45 Tage, Twilio SendGrid über 41 Tage, Mandrill von Mailchimp über etwa 30 Tage. Postmark rechnet mit 3 bis 6 Wochen. |

Die Limits von Microsoft 365 betreffen vor allem Teams, die einen neuen Tenant nur für Outreach einrichten. Microsoft hat die Änderung im August 2026 angekündigt und führt sie zwischen Mitte September und Ende November 2026 ein. Bis ein neuer Tenant zwei Monate alt ist, kann er nicht mit vollem externem Volumen senden, egal was Ihr Warm-up-Tool sagt.

![Zeiten für das Warm-up einer E-Mail-Domain je nach Lage: ganz neue Domain, neues Postfach auf einer bestehenden Domain, neuer Microsoft-365-Tenant, pausierte Domain und dedizierte IP](/blog/fig-de-warm-up-time-by-situation.webp)

## Warum sich die Zahlen online widersprechen

Suchen Sie nach dieser Frage, finden Sie 14 Tage, 3 Wochen, mindestens 30 Tage, 4 bis 6 Wochen und 45 Tage. Für diese Spanne gibt es drei Gründe.

Erstens gibt es keine offizielle Zahl, die man übernehmen könnte. Die Absenderrichtlinien von Google sagen Absendern, sie sollen "mit einem geringen Sendevolumen an engagierte Nutzer beginnen und das Volumen mit der Zeit langsam erhöhen". Sie sagen nicht, wie lange. Die Best Practices von Yahoo für Absender behandeln die Steigerung gar nicht.

Zweitens werden manche Zahlen aus Quellen zitiert, in denen sie nicht stehen. Einige Leitfäden schreiben Microsoft eine Dauer von "4 bis 8 Wochen" und eine Regel zu, das Volumen pro Schritt um das 1,5-Fache zu erhöhen. Wir konnten keine der beiden Zahlen auf einer Seite von Microsoft finden. Die einzige Steigerungsdauer, die Microsoft veröffentlicht, gilt für sein E-Mail-Produkt in Azure Communication Services: "zwei bis vier Wochen".

Drittens gehören die meisten Seiten, die für diese Frage ranken, Firmen, die Warm-up-Tools verkaufen. Eine längere empfohlene Dauer bedeutet auch mehr Wochen eines bezahlten Abos.

Das echte Verhalten von Absendern ist viel kürzer als die Ratschläge. Smartlead hat mehr als 850 Millionen E-Mails ausgewertet, die in der ersten Hälfte von 2026 über seine Plattform gesendet wurden. Das Ergebnis: "Der durchschnittliche Absender wärmt ein neues Postfach 8 Tage lang auf, bevor er die erste Kampagne startet. Ein Jahr zuvor waren es 9,4 Tage." Smartlead selbst merkt an, dass dies beschreibt, was Absender tun. Es ist kein nachgewiesenes sicheres Minimum.

## Was die Dauer Ihres Warm-ups bestimmt

Fünf Dinge beeinflussen die Dauer.

**Alter der Domain.** Eine Domain, die diese Woche registriert wurde, hat gar keine Historie. Spamhaus setzt neu registrierte und zuvor ruhende Domains in den ersten 24 Stunden auf eine Sperrliste, und manche empfangenden Server nutzen diese Liste. Wenn Sie Ihre Outreach-Domains einen Monat vor dem Bedarf kaufen, kostet das nichts und beseitigt dieses Risiko.

**Wie viel Sie senden müssen.** Google sagt: "Je mehr E-Mails Sie senden, desto langsamer sollten Sie das Sendevolumen erhöhen." Ein Team, das 30 E-Mails pro Tag von einem Postfach braucht, ist viel früher fertig als ein Team, das 3.000 braucht.

**Wie oft Sie senden.** Google sagt auch, dass Sie "das Sendevolumen schneller erhöhen können, wenn Sie täglich statt wöchentlich senden". Eine Domain, die an jedem Werktag ein wenig sendet, baut schneller eine Historie auf als eine, die einmal pro Woche viel auf einmal sendet.

**Welche Anbieter Ihre Empfänger nutzen.** E-Mails an Gmail, Outlook.com und Firmenserver werden getrennt bewertet. Amazon SES schreibt, dass Sie bei manchen Anbietern "in etwa zwei Wochen eine positive Reputation aufbauen können, während es bei anderen bis zu sechs Wochen dauern kann".

**Qualität der Liste.** Bounces und Spam-Beschwerden während des Warm-ups verlängern die Dauer, manchmal um Wochen. Diesen Faktor können die meisten Teams direkt steuern, und wir behandeln ihn weiter unten.

## Ein Warm-up-Plan Tag für Tag

Eine sichere Steigerung wächst in kleinen Schritten und hält jeden Schritt lange genug, um Ergebnisse zu sehen. Der Leitfaden von Customer.io zum Aufwärmen von Domains nutzt Schritte von etwa dem 1,5-Fachen des vorherigen Volumens. Jede Stufe dauert 2 bis 3 Tage. Hier ist dieses Muster für ein Postfach mit dem Ziel von 50 Cold E-Mails pro Tag.

| Tage | E-Mails pro Tag | Nur weiter, wenn |
|---|---|---|
| Vor Tag 1 | Domain gealtert, SPF, DKIM und DMARC eingerichtet, echte E-Mails laufen | Die Authentifizierung bei einer Test-E-Mail besteht |
| 1 bis 3 | 10 | Keine Hard Bounces, keine Spam-Beschwerden |
| 4 bis 6 | 15 | Bounce-Rate unter 2 % |
| 7 bis 9 | 22 | Antworten kommen an, keine Verzögerungen (Deferrals) |
| 10 bis 12 | 33 | Bounce-Rate unter 2 %, Spam-Rate unter 0,08 % |
| 13 bis 15 | 50 | Wie oben, dann auf dieser Stufe bleiben |

Senden Sie zuerst an Ihre engagiertesten Kontakte. Google rät, "mit engagierten Nutzern" zu beginnen. In der Praxis sind das Menschen, die Sie kennen, bestehende Kunden und Personen, die vor Kurzem geantwortet haben.

Zwei Regeln lassen den Plan funktionieren. Sieht eine Stufe schlecht aus, wiederholen Sie sie, statt weiterzugehen. Und senden Sie an jedem Werktag. Mailgun weist darauf hin, dass seine Warm-up-Limits täglichen Versand voraussetzen. Wenn Sie aufhören, "können Sie nicht mit dem Limit für Tag acht weitermachen".

Brauchen Sie mehr als 50 E-Mails pro Tag, nehmen Sie weitere aufgewärmte Postfächer hinzu, statt ein Postfach stärker zu belasten.

![Ein Warm-up-Plan Tag für Tag von 10 auf 50 E-Mails pro Tag in Schritten von etwa dem 1,5-Fachen, mit den Prüfungen von Bounce- und Spam-Rate vor jedem Schritt](/blog/fig-de-warm-up-ramp-schedule.webp)

## Woran Sie erkennen, dass Ihre Domain bereit ist

Eine Domain ist bereit, wenn ihre Werte gesund bleiben, während das Volumen steigt. Prüfen Sie diese Punkte vor Ihrer ersten echten Kampagne:

- **Bounce-Rate unter 2 %.** Customer.io sagt, dass Bounce-Raten über 2 % "auf Probleme mit der Listenhygiene hinweisen, die Sie lösen sollten, bevor Sie weitergehen". Unser [Leitfaden zur Bounce-Rate bei Cold E-Mails](/blog/good-bounce-rate-for-cold-email) erklärt die Bereiche.
- **Spam-Beschwerderate unter 0,08 %.** Das ist das Warm-up-Ziel von Customer.io. Die harte Grenze von Google für Gmail liegt bei 0,3 %. Wenn Sie weit darunter bleiben, haben Sie Spielraum für Fehler.
- **Keine Fehler wegen Ratenbegrenzung.** Meldet Gmail den Code 421 4.7.28, hat es "eine ungewöhnliche Rate von E-Mails erkannt", die von Ihnen kommt. Senden Sie langsamer. Google rät, das Volumen zu senken, bis die Fehler aufhören, und es "dann wieder langsam zu erhöhen".
- **Die Authentifizierung besteht.** Senden Sie einen Test an ein Gmail-Konto, öffnen Sie "Original anzeigen" und prüfen Sie, ob bei SPF, DKIM und DMARC PASS steht. Unser [Leitfaden zu SPF, DKIM und DMARC](/blog/spf-dkim-dmarc-explained) erklärt jeden Eintrag.
- **Echte Antworten kommen an.** Antworten von echten Menschen sind ein besseres Zeichen als jede Punktzahl in einem Dashboard.

Die Google Postmaster Tools können helfen, mit einer Einschränkung. Das Dashboard zum Compliance-Status steht allen Absendern offen. Google sagt aber, dass Daten fehlen können, "an Tagen, an denen das ausgehende E-Mail-Volumen gering ist". Genau das ist die Lage während des Warm-ups. Warten Sie nicht, bis die Postmaster Tools Daten zeigen, bevor Sie Ihren eigenen Bounce- und Beschwerdewerten vertrauen.

## Machen Warm-up-Tools es schneller?

Automatische Warm-up-Tools senden E-Mails zwischen einem Netz von Postfächern. Die E-Mails werden automatisch geöffnet, beantwortet und aus dem Spam-Ordner verschoben. Die Idee ist, Ihrer Domain positive Interaktionen zu geben, bevor Ihre echte Kampagne beginnt.

Die Belege dafür, dass das Warm-up dadurch kürzer wird, sind schwach:

- **Google nutzt keine Öffnungen.** Seine Absenderrichtlinien sagen: "Google erfasst keine Öffnungsraten."
- **Künstliche Interaktionen zählen vielleicht nicht.** Customer.io, eine E-Mail-Plattform, schreibt, dass "Postfachanbieter künstliche Interaktionen erkennen und dafür keine Reputation gutschreiben". Customer.io unterstützt diese Dienste nicht.
- **Warm-up-E-Mails landen anders als echte E-Mails.** Die eigenen Daten von Smartlead zeigen, dass Warm-up-E-Mails in etwa 99 % der Fälle den Posteingang erreichen. Smartlead fügt hinzu, dass dies die Platzierung von Warm-up-E-Mails ist, "nicht von Cold-Kampagnen".
- **Google hat schon einmal eingegriffen.** GMass, ein E-Mail-Tool, sagt, dass Google es im Herbst 2022 aufgefordert hat, sein Warm-up-System abzuschalten, sonst würde es den Zugang zur Gmail-API verlieren.

Google und Microsoft haben keine konkrete Regel zu Warm-up-Tools veröffentlicht. Wenn Sie eines nutzen, sehen Sie seine Posteingangs-Punktzahl als Kennzahl des Tools. Sie ist kein Beweis, dass Ihre Kampagne den Posteingang erreicht. Echte Gespräche mit echten Kontakten bauen die Historie auf, die zählt.

## Was das Warm-up nicht beheben kann: die Liste für Ihre erste Kampagne

Ein schlechter Versand kann Wochen an Warm-up zunichtemachen. Die übliche Ursache ist die Liste für die erste Kampagne. Lead-Listen veralten, weil Menschen den Job wechseln und Unternehmen Postfächer schließen. Senden Sie an Tag 16 an ein paar hundert alte Adressen, kann die Bounce-Rate weit über 2 % steigen.

Bounces in dieser Phase treffen eine Domain, die erst zwei Wochen Historie hat. Es gibt nicht genug gute Historie, um sie auszugleichen. Google sagt Absendern, sie sollen das Volumen senken, wenn die Bounces steigen. Die Steigerung muss also neu beginnen.

Prüfen Sie die Liste deshalb vor der ersten Kampagne, nicht erst, wenn die Bounces kommen:

1. Lassen Sie die Liste durch einen [E-Mail-Checker](/email-checker) oder eine vollständige [Bereinigung der E-Mail-Liste](/email-list-cleaning) (auf Englisch) laufen.
2. Entfernen Sie ungültige Adressen, Wegwerfadressen und Rollenadressen.
3. Halten Sie Catch-all-Adressen in einer eigenen, langsameren Gruppe. Eine Catch-all-Domain nimmt jede Adresse an. Eine einfache Prüfung kann Ihnen also nicht sagen, ob die Person existiert. Die [Catch-all-Verifizierung](/catch-all-verification) kann es.
4. Senden Sie die erste Kampagne an den saubersten Teil der Liste und erweitern Sie dann.

## Nach dem Warm-up: halten Sie das Volumen gleichmäßig

Das Warm-up endet nicht mit einem einzigen Sprung auf volles Volumen. Google bittet Absender, "E-Mails mit einer gleichmäßigen Rate zu senden" und "E-Mails nicht stoßweise zu senden". Es nennt ein klares Beispiel dafür, was Sie nicht tun sollten: "Wenn Sie das bisherige Volumen plötzlich sofort verdoppeln, kann das zu einer Ratenbegrenzung oder einem Verlust an Reputation führen."

Amazon SES gibt denselben Rat für seine dedizierten IPs: "Sie sollten es vermeiden, direkt nach Abschluss des Warm-ups große Mengen an E-Mails zu senden." Steigern Sie ab Ihrer letzten Warm-up-Stufe in denselben kleinen Schritten, und senden Sie weiter in einem regelmäßigen Rhythmus an Werktagen.

## Häufige Fragen

**Kann ich eine E-Mail-Domain in 7 Tagen aufwärmen?**
Sie können nach einer Woche kleine Mengen senden, und viele Absender tun das. Die Daten von Smartlead nennen einen Durchschnitt von 8 Tagen. Aber ein Warm-up von 7 Tagen auf einer ganz neuen Domain gibt Ihnen sehr wenig Historie, um einen schlechten Versand aufzufangen. Ist die Domain neu, planen Sie mindestens 2 Wochen Steigerung ein, nachdem sie gealtert ist.

**Wie viele E-Mails pro Tag sollte ich während des Warm-ups senden?**
Beginnen Sie mit etwa 10 pro Tag und Postfach und steigern Sie alle 2 bis 3 Tage um etwa das 1,5-Fache, wie im Plan oben. Bleiben Sie auf der Stufe, die Sie brauchen. Leitfäden für Cold Outreach begrenzen ein Postfach meist auf 30 bis 50 E-Mails pro Tag.

**Braucht eine alte Domain ein Warm-up?**
Weniger, wenn sie schon jeden Tag normale E-Mails sendet. Eine Domain, die einen Monat oder länger still war, sollten Sie fast wie eine neue behandeln. Twilio SendGrid nutzt 30 Tage ohne Versand als den Punkt, an dem eine IP erneut aufgewärmt werden muss.

**Sollte ich das Warm-up weiterlaufen lassen, wenn meine Kampagne beginnt?**
Halten Sie Ihren Versand gleichmäßig und echt. Anbieter von Warm-up-Tools raten meist, ein geringes Warm-up weiterlaufen zu lassen. Echte Antworten und eine saubere Liste zählen mehr als das Warm-up-Volumen.

**Veröffentlicht Google einen offiziellen Warm-up-Plan?**
Nein. Google sagt Absendern, sie sollen niedrig mit engagierten Empfängern beginnen, langsam steigern und plötzliche Sprünge vermeiden. Eine Zahl von Tagen nennt Google nicht.

**Warum bouncen meine E-Mails während des Warm-ups?**
Meist wegen der Liste, nicht wegen des Warm-ups. Prüfen Sie die Adressen mit einem [E-Mail-Checker](/email-checker) und lesen Sie in [diesem Leitfaden](/blog/why-cold-emails-bounce), warum Cold E-Mails bouncen.
