---
title: "Hard Bounce vs. Soft Bounce: Was beides bedeutet und was zu tun ist"
seoTitle: "Hard Bounce vs. Soft Bounce: Bedeutung und Lösung"
description: Hard Bounce und Soft Bounce einfach erklärt: wie Sie den Bounce-Code lesen, warum Tools denselben Bounce anders einstufen und welche Bounce-Rate sicher ist.
slug: hard-bounce-vs-soft-bounce
date: 2026-09-27
updated: 2026-09-27
keyword: was ist ein hard bounce
image: /blog/covers/de/hard-bounce-vs-soft-bounce.webp
imageAlt: Hard Bounce vs. Soft Bounce, eine 5 im Code bedeutet dauerhaft und eine 4 bedeutet erneut versuchen
cta: Finden Sie Hard Bounces, bevor Sie senden
---

Ein Hard Bounce ist ein dauerhafter Fehler. Die E-Mail-Adresse existiert nicht, die Domain existiert nicht, oder der empfangende Server hat Sie blockiert. Wenn Sie erneut senden, bounct die E-Mail wieder.

Ein Soft Bounce ist ein vorübergehender Fehler. Die Adresse ist echt, aber etwas hat die Zustellung vorerst gestoppt. Das Postfach ist voll, der Server ist ausgelastet, oder der Server bittet Sie, es später noch einmal zu versuchen. Wenn Sie erneut senden, kommt die E-Mail oft an.

Das sind die Definitionen. Es gibt drei weitere Dinge, die Sie wissen müssen, und sie sind wichtiger als die Definitionen:

- Verschiedene Versandtools verwenden verschiedene Regeln. Derselbe Bounce kann in einem Tool als hard und in einem anderen als soft zählen.
- Eine korrekte, funktionierende Adresse kann trotzdem einen Hard Bounce erzeugen. Das passiert, wenn Ihre E-Mail-Konfiguration falsch ist, nicht die Adresse.
- Die Bounce-Rate, die zur Sperrung Ihres Kontos führt, ist nicht immer die, die Sie in Ihrem Kampagnenbericht sehen.

Dieser Leitfaden behandelt alle drei Punkte.

## Hard Bounce vs. Soft Bounce: der Unterschied

| | Hard Bounce | Soft Bounce |
|---|---|---|
| Was es bedeutet | Dauerhaft. Die E-Mail wird nicht zugestellt | Vorübergehend. Sie kann bei einem späteren Versuch zugestellt werden |
| Code in der Bounce-Nachricht | Beginnt mit 5 (550, 5.1.1, 5.7.1) | Beginnt mit 4 (421, 450, 4.2.2) |
| Häufige Ursachen | Adresse existiert nicht, Domain existiert nicht, Absender blockiert | Postfach voll, Server ausgelastet, zu viele E-Mails auf einmal |
| Was Ihr Versandtool tut | Sendet nicht mehr an diese Adresse, meist sofort | Versucht es eine Weile weiter, oft bis zu 72 Stunden |
| Was Sie tun sollten | Adresse entfernen. Nicht erneut senden | Abwarten. Nur entfernen, wenn sie weiter bounct |
| Schaden für Ihre Reputation | Hoch. Viele Hard Bounces sagen den Providern, dass Ihre Liste schlecht ist | Gering bei einem Bounce. Summiert sich, wenn dieselben Adressen weiter bouncen |

## Was ist ein Hard Bounce?

Ein Hard Bounce bedeutet, dass der empfangende Server Ihre E-Mail endgültig abgelehnt hat. Ein erneuter Versuch hilft nicht.

Der E-Mail-Standard RFC 5321 nennt das einen permanenten Fehler. Seine genauen Worte sind, dass der Absender "should not retry", also dieselbe Anfrage nicht wiederholen soll.

Es gibt zwei Arten von Hard Bounces. Im Bericht sehen sie gleich aus, aber sie brauchen unterschiedliche Lösungen.

**Erste Art: Die Adresse ist falsch.** Das Postfach existiert nicht. Oder die Domain existiert nicht. Oder die Adresse ist falsch geschrieben. Eine verifizierte Liste sollte diese Bounces nie erzeugen. So sehen sie aus:

- Gmail meldet: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft meldet: `5.1.1 Bad destination mailbox address`
- Microsoft meldet außerdem: `5.4.1 Recipient address rejected: Access denied`. Die Microsoft-Dokumentation erklärt diesen Code so: "the recipient's address doesn't exist", die Adresse des Empfängers existiert nicht.

Eine Adresse, die geschlossen wurde, als jemand das Unternehmen verlassen hat, gehört ebenfalls in diese Gruppe.

**Zweite Art: Sie sind blockiert.** Die Adresse ist echt. Aber der empfangende Server nimmt keine E-Mails von Ihnen an. Diese Bounces haben Codes, die mit 5.7 beginnen:

- `550 5.7.1` bedeutet eine Blockierung durch eine Richtlinie.
- `550 5.7.26` bedeutet, dass Gmail Ihre E-Mail abgelehnt hat, weil Ihre Domain nicht authentifiziert ist.
- `550 5.7.30` bedeutet, dass Ihre E-Mail die DKIM-Prüfung nicht bestanden hat.

Ihr Versandtool zählt diese als Hard Bounces, weil der Code mit 5 beginnt. Aber die Adresse ist in Ordnung. Das Problem liegt auf Ihrer Seite. Wir erklären das weiter unten genauer, denn seit 2025 ist das die am schnellsten wachsende Ursache für Hard Bounces auf sauberen Listen.

## Was ist ein Soft Bounce?

Ein Soft Bounce bedeutet, dass der empfangende Server "jetzt nicht" gesagt hat. RFC 5321 nennt das einen vorübergehenden Fehler. Die Worte lauten: "the error condition is temporary and the action may be requested again", der Fehlerzustand ist vorübergehend und die Aktion kann erneut angefordert werden. Ihr Versandtool nimmt das wörtlich und versucht es später noch einmal.

Hier sind die häufigen Ursachen mit den Codes, die Sie sehen werden:

- **Postfach ist voll.** Gmail meldet `452 4.2.2 The recipient's inbox is out of storage space`. Die Person kann E-Mails löschen und Platz schaffen.
- **Zu viele E-Mails zu schnell.** Gmail meldet `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Oder `421 4.7.28`, wenn zu viele E-Mails von Ihrer IP-Adresse kommen. Microsoft meldet `4.7.500` bis `4.7.699 Access denied, please try again later`, während es Ihre Aktivität prüft.
- **Greylisting.** Manche Server, und viele Secure Email Gateways, lehnen die erste E-Mail eines unbekannten Absenders ab. Beim zweiten Versuch nehmen sie sie an. Die Wartezeit beträgt meist etwa 15 Minuten.
- **Server nicht erreichbar.** Ein Code `421` bedeutet, dass der Server nicht verfügbar ist. Ein `4.4.1` oder `4.4.2` bedeutet, dass die Verbindung fehlgeschlagen ist oder abgelaufen ist.
- **E-Mail abgelaufen.** Ein Code `4.4.7` bedeutet, dass Ihr Server es weiter versucht und dann aufgegeben hat. RFC 5321 sagt, Server sollten es etwa vier bis fünf Tage lang versuchen.

Ein Soft Bounce ist normal. Ein Soft Bounce, der sich wiederholt, ist ein Problem. Wenn ein Postfach sechs Wochen lang bei jedem Versand "voll" ist, ist dieses Postfach nicht voll. Es ist verlassen. Jedes Versandtool behandelt es irgendwann so.

## Wie Sie den Code in einer Bounce-Nachricht lesen

Jede Bounce-Nachricht enthält einen Code. Sobald Sie ihn lesen können, brauchen Sie niemandes Einstufung mehr. Sie sehen selbst, was passiert ist.

In jeder Nachricht gibt es zwei Codes.

**Der erste Code hat drei Ziffern**, zum Beispiel 550 oder 421. Hier zählt nur die erste Ziffer. Eine 4 bedeutet vorübergehend. Eine 5 bedeutet dauerhaft.

**Der zweite Code hat drei Zahlen mit Punkten**, zum Beispiel 5.1.1. Die erste Zahl wiederholt dieselbe Regel: 4 ist vorübergehend, 5 ist dauerhaft. Die zweite und dritte Zahl nennen den Grund:

- `.1.1` bedeutet, das Postfach existiert nicht (der Teil vor dem @ ist falsch).
- `.1.2` bedeutet, die Domain existiert nicht (der Teil nach dem @ ist falsch).
- `.2.2` bedeutet, das Postfach ist voll.
- `.7.1` bedeutet, der Server hat Sie wegen einer Richtlinie abgelehnt.

![Wie man einen Bounce-Code liest: Die erste Ziffer sagt hard oder soft, der erweiterte Code sagt warum, und die Maßnahme folgt aus beidem](/blog/fig-de-bounce-code-reading.webp)
Lesen Sie die erste Ziffer, um den Typ zu kennen. Lesen Sie den vollständigen Code, um den Grund zu kennen. Dann handeln Sie nach dem Grund.

Die Tabelle unten listet die Codes, die Sie tatsächlich sehen werden. Der Nachrichtentext ist aus der offiziellen Dokumentation von Gmail und Microsoft übernommen.

| Code | Wo Sie ihn sehen | Was er bedeutet | Typ | Was zu tun ist |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, die meisten Server | Das Postfach existiert nicht | Hard | Adresse entfernen |
| 5.1.2 | Jeder Server | Die Domain existiert nicht | Hard | Adresse entfernen |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | Die Adresse existiert nicht | Hard | Adresse entfernen |
| 550 5.2.1 | Gmail | Das Konto ist inaktiv | Hard | Adresse entfernen |
| 552 5.2.2 | Gmail | Postfach voll und Konto inaktiv | Hard | Adresse entfernen |
| 452 4.2.2 | Gmail | Postfach voll | Soft | Abwarten. Entfernen, wenn es sich wiederholt |
| 450 4.2.1 | Gmail | Die Person erhält zu viele E-Mails | Soft | Abwarten |
| 421 4.7.28 | Gmail | Zu viele E-Mails von Ihrer IP | Soft | Langsamer senden. Liste prüfen |
| 550 5.7.28 | Gmail | Zu viele unerwünschte E-Mails von Ihrer IP | Hard | Versand stoppen. Liste und Volumen korrigieren |
| 550 5.7.1 | Gmail, Microsoft | Durch eine Richtlinie blockiert | Hard, aber die Adresse ist in Ordnung | Authentifizierung und Reputation prüfen |
| 550 5.7.26 | Gmail | Ihre Domain ist nicht authentifiziert | Hard, aber die Adresse ist in Ordnung | SPF und DKIM einrichten |
| 550 5.7.30 | Gmail | Ihre E-Mail hat DKIM nicht bestanden | Hard, aber die Adresse ist in Ordnung | DKIM-Konfiguration korrigieren |
| 5.7.23 | Microsoft | Ihre E-Mail hat SPF nicht bestanden | Hard, aber die Adresse ist in Ordnung | SPF-Eintrag korrigieren |
| 5.7.606 bis 5.7.649 | Microsoft | Ihre Absender-IP ist gesperrt | Hard, aber die Adresse ist in Ordnung | Bei Microsoft die Entsperrung beantragen, dann die Ursache beheben |
| 4.7.500 bis 4.7.699 | Microsoft | Verdächtige Aktivität, vorerst blockiert | Soft | Abwarten. Löst sich von selbst, wenn Sie ein legitimer Absender sind |
| 4.4.7 | Jeder Server | Die E-Mail ist nach Tagen des Versuchens abgelaufen | Soft, aber aufgegeben | Adresse entfernen, wenn es sich wiederholt |

Sehen Sie sich die letzte Spalte an. Zwei Codes können beide Hard Bounces sein und gegensätzliche Maßnahmen erfordern. Ein `5.1.1` bedeutet: Adresse löschen. Ein `5.7.26` bedeutet: Adresse behalten und Ihr DNS korrigieren.

## Warum derselbe Bounce in einem Tool hard und in einem anderen soft ist

Viele vergleichen Bounce-Raten zwischen Tools und sind dann verwirrt. Hier ist der Grund.

Der empfangende Server sendet einen Code. Mehr tut er nicht. Ihr Versandtool entscheidet dann, was es mit diesem Code macht. Jedes Tool hat seine eigene Regel, und die Regeln sind unterschiedlich. Der Leitfaden von Twilio sagt es direkt: "not all ISPs adhere to that code consistently", nicht alle Provider halten sich konsequent an diesen Code.

Hier sind vier verbreitete Tools und ihre Regeln:

| Tool | Was es mit einem Soft Bounce macht | Wann ein Soft Bounce zum Hard Bounce wird |
|---|---|---|
| Mailchimp | Versucht es erneut und behält den Kontakt | Nach 7 Soft Bounces, wenn der Kontakt nie etwas geöffnet hat. Nach 15, wenn er früher geöffnet hat |
| HubSpot | Nennt es "pending" und versucht es bis zu 72 Stunden. Dann wird ein Soft Bounce erfasst | Nicht automatisch. Aber HubSpot zählt "Postfach voll" zu den Hard Bounces, nicht zu den Soft Bounces |
| SendGrid | Versucht es bis zu 72 Stunden erneut | Nach 72 Stunden hört es auf. Hard Bounces kommen auf eine Sperrliste |
| Amazon SES | Versucht es eine Weile, dann meldet es Ihnen, dass es aufgehört hat | Nie automatisch. Nur Hard Bounces zählen für Ihre Bounce-Rate. Automatische Antworten zählen gar nicht |

![Vier Versandplattformen und ihre Regeln, wann ein Soft Bounce zum Hard Bounce wird](/blog/fig-de-bounce-rules-by-platform.webp)
Derselbe Code, vier verschiedene Regeln. Ziehen Sie eine Liste von Mailchimp zu HubSpot um, und Ihre Zahl der Hard Bounces ändert sich, obwohl die Adressen dieselben sind.

Ein volles Postfach ist also bei Gmail ein Soft Bounce. Bei HubSpot ist es ein Hard Bounce. Und bei Amazon SES ist es ein Soft Bounce, der nie hard wird. Wenn sich Ihre Bounce-Rate nach einem Toolwechsel ändert, prüfen Sie die Regeln, bevor Sie der Liste die Schuld geben.

Die einfache Lösung: Vertrauen Sie nicht dem Etikett, sondern lesen Sie den Code. Jedes Tool lässt Sie die Bounce-Nachricht exportieren. Der Code darin ist derselbe, egal welches Tool ihn gesammelt hat.

## Was ist eine akzeptable Hard-Bounce-Rate?

Die Grenze legt das Unternehmen fest, das Ihre E-Mails versendet. Die meisten veröffentlichen sie nicht. Amazon SES tut es, und seine Zahlen sind ein guter Anhaltspunkt dafür, wie Provider denken.

| Hard-Bounce-Rate | Was Amazon SES tut |
|---|---|
| Unter 2 % | Der Wert, unter dem SES Sie "for best results", für beste Ergebnisse, bleiben lässt |
| 5 % oder mehr | Ihr Konto wird überprüft |
| 10 % oder mehr | Ihr Versand kann pausiert werden, bis Sie das Problem behoben haben |

Zwei Details sind wichtig. SES zählt nur Hard Bounces. Soft Bounces und Bounces wegen blockierter IP zählen nicht gegen Sie. Und SES verwendet kein festes Zeitfenster. Es betrachtet eine typische Menge Ihres Versands, sodass ein kleiner Absender genauso beurteilt wird wie ein großer.

Spam-Beschwerden gehen mit Bounces einher. Googles Absenderrichtlinien sagen, dass Ihre Beschwerderate unter 0,10 Prozent bleiben und nie 0,30 Prozent erreichen soll. Amazon SES überprüft Konten bei 0,1 Prozent und kann sie bei 0,5 Prozent pausieren. Eine Liste, die über 2 Prozent Hard Bounces erzeugt, bekommt meist auch Beschwerden. Beides hat dieselbe Ursache: Menschen, die Ihre E-Mails nicht angefordert haben, und Adressen, die niemand geprüft hat.

Der Beitrag zu den [Richtwerten für die E-Mail-Bounce-Rate](/blog/how-to-reduce-email-bounce-rate) schlüsselt die sicheren Grenzen nach E-Mail-Typ und Herkunft der Liste auf.

## Sollten Sie Hard Bounces aus Ihrer Liste entfernen?

Ja. Sofort.

Amazons genaue Worte lauten: "you should immediately remove the recipient's email address from your mailing list", Sie sollten die E-Mail-Adresse des Empfängers sofort aus Ihrer Liste entfernen. Dieselbe Seite warnt, dass Ihr Versand pausiert werden kann, wenn Sie weiter an Adressen mit Hard Bounce senden. Mailchimp lässt Ihnen nicht einmal die Wahl. Adressen mit Hard Bounce werden "cleaned from your audience automatically and immediately", automatisch und sofort aus Ihrer Audience entfernt, und nie wieder angeschrieben.

Versuchen Sie es nicht erneut. Behalten Sie sie nicht für die nächste Kampagne, falls das Postfach zurückkommt. Eine `5.1.1`-Adresse, die letzten Monat gebounct hat, bounct auch nächsten Monat. Jeder weitere Versuch sagt dem Provider, dass Sie an Adressen senden, die Sie nicht kennen.

Es gibt eine Ausnahme. Wenn der Code `5.7.26`, `5.7.30`, `5.7.23` oder ein Code für eine gesperrte IP wie `5.7.6xx` ist, liegt das Problem nicht bei der Adresse. Sie zu löschen bringt nichts. Beheben Sie Ihre Authentifizierung oder Ihre Reputation. Dann senden Sie erneut an dieselbe Adresse.

Soft Bounces sind das Gegenteil. Lassen Sie sie in Ruhe. Ihr Versandtool versucht es von selbst erneut. Wenn Ihr Tool keine Regel für wiederholte Bounces hat, legen Sie eine fest. Eine Adresse, die bei drei Versendungen in Folge innerhalb eines Monats soft bounct, kommt nicht zurück. Mailchimps Regel von sieben ist eine sichere Grenze für jeden.

## Warum erzeugt eine korrekte Adresse einen Hard Bounce?

Weil ein Hard Bounce misst, ob die E-Mail angenommen wurde. Er misst nicht, ob die Adresse existiert. Vier Dinge verursachen einen 5xx-Bounce bei einem echten, funktionierenden Postfach.

**Ihre E-Mail ist nicht authentifiziert.** Am 5. Mai 2025 begann Microsoft, SPF, DKIM und DMARC für jede Domain durchzusetzen, die mehr als 5.000 E-Mails pro Tag an Outlook.com-, Hotmail- und Live-Adressen sendet. Zuerst wurden nicht konforme E-Mails in den Junk-Ordner verschoben. Dann wurden sie abgelehnt mit `550 5.7.515 Access denied, sending domain does not meet the required authentication level`. Google verlangt dieselben drei Einträge von Massenversendern. Gmails Codes `550 5.7.26` und `550 5.7.30` sind das, was ein fehlender Eintrag von Ihrer Seite aus aussieht. Alle diese Codes beginnen mit 5. Sie landen also in Ihrer Hard-Bounce-Spalte, obwohl die Adressen die E-Mail angenommen hätten.

**Das Unternehmen blockiert unbekannte Adressen am Eingang.** Microsoft Exchange kann so eingestellt werden, dass jede Adresse abgelehnt wird, die nicht im Firmenverzeichnis steht. Das geschieht mit `5.4.1 Recipient address rejected: Access denied`. Meistens ist das ein echter Hard Bounce. Manchmal ist es ein neuer Mitarbeiter, dessen Postfach noch nicht angelegt wurde. Deshalb gibt Ihnen ein Verifizierer, der das Postfach selbst prüft, eine bessere Antwort als der Bounce.

**Ein Secure Email Gateway steht vor dem Postfach.** Viele Unternehmen leiten alle eingehenden E-Mails über ein [Secure Email Gateway](/blog/what-is-a-secure-email-gateway) wie Proofpoint, Mimecast oder Barracuda. Das Gateway antwortet für die gesamte Domain. Es prüft jede E-Mail und lehnt alles ab, was eine seiner Regeln verletzt, meist mit einem `5.7.1`-Richtliniencode. Das ist ein Hard Bounce bei einem Postfach, das existiert. Gateways verursachen auch verspätete Bounces. Das Gateway nimmt die E-Mail am Eingang an, ohne zu prüfen, ob das Postfach existiert. Der Bounce kommt Minuten oder Stunden später, wenn der Server hinter dem Gateway kein solches Postfach findet. Ihr Bericht zeigt einen Hard Bounce, aber er kam nach dem Versand an, nicht währenddessen.

**Die Domain ist Catch-all.** Das ist das umgekehrte Problem. Eine [Catch-all-Domain](/blog/what-is-a-catch-all-email-address) nimmt E-Mails für jede Adresse an, ob echt oder nicht. Sie meldet also am Eingang nie `5.1.1`. Die E-Mail wird angenommen, dann später gebounct, oder ohne ein Wort verworfen. Etwa 30 Prozent einer B2B-Liste liegen auf solchen Domains. Von dort kommen die überraschenden Hard Bounces.

Wenn Sie wissen wollen, [warum E-Mails bouncen](/blog/why-cold-emails-bounce), speziell im Cold Outreach, summieren sich die Ursachen anders. Dort richtet das Alter der Liste den größten Schaden an.

## Wie Sie Hard Bounces stoppen, bevor Sie senden

Fast jeder `5.1.1` in einem Kampagnenbericht hätte vermieden werden können. Das Postfach war schon weg, bevor Sie auf Senden gedrückt haben. Die Verifizierung stellt dem empfangenden Server dieselbe Frage, die der Bounce gestellt hätte, aber vor der Kampagne statt danach.

Ein [E-Mail-Adressen-Checker](/email-checker) führt drei Prüfungen der Reihe nach aus:

- **Syntax.** Fängt Dinge wie `name@gmail..com` ab, bevor sie Sie einen Versand kosten.
- **Domain.** Fängt Tippfehler wie `gmial.com` und abgelaufene Domains ab.
- **Postfach.** Öffnet eine Verbindung zum empfangenden Server und fragt, ob er E-Mails für genau diese Adresse annimmt. Lautet die Antwort `5.1.1`, ist das derselbe Bounce, den Sie von der Kampagne bekommen hätten. Aber er kostet Sie keine Reputation, weil keine E-Mail gesendet wurde.

Die Standardverifizierung stößt an einer Stelle an ihre Grenze. Bei einer Catch-all-Domain sagt der Server zu jeder Adresse Ja. Die Prüfung kommt also als "unbekannt" oder "riskant" zurück, und Sie müssen raten. Giggal.ai wurde gebaut, um diesen Teil der Liste in eine echte Antwort zu verwandeln: gültig oder ungültig. Die Seite zur [Catch-all-Verifizierung](/catch-all-verification) erklärt, wie.

Gateways verursachen dasselbe Problem. Ein Gateway nimmt die Frage des Verifizierers für jede Adresse an, also kommt eine Standardprüfung auch dort als "unbekannt" zurück. Giggal.ai prüft diese Adressen auf einem anderen Weg. Der Beitrag über das [Prüfen von E-Mails hinter Secure Email Gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) erklärt, was das Gateway tut und wie die Prüfung daran vorbeikommt.

Für Anmeldeformulare fügen Sie einen Aufruf zur [Echtzeit-Verifizierung](/public/docs) beim Absenden des Formulars hinzu. Eine falsch getippte Adresse wird abgefangen, während die Person noch auf der Seite ist. Das ist der einzige Schritt, der Bounces auf Listen reduziert, die Sie noch gar nicht aufgebaut haben.

Kümmern Sie sich dann um zwei Arten von Adressen, die die Verifizierung bestehen, aber Ihnen trotzdem schaden. Rollenadressen wie info@ und support@ existieren, also bestehen sie. Aber niemand besitzt sie persönlich, und sie bekommen mehr Beschwerden. Wegwerfadressen bestehen, solange sie existieren, und verschwinden später. Jeder gute Verifizierer markiert beide. Besonders eine Liste für [Cold E-Mails](/blog/good-bounce-rate-for-cold-email) sollte sie vor dem ersten Versand entfernen.

## Häufige Fragen

**Was ist der Unterschied zwischen Hard-Bounce-Rate und Soft-Bounce-Rate?**
Jede ist die Zahl dieser Bounce-Art geteilt durch die gesendeten E-Mails. Die Hard-Bounce-Rate ist die, die Ihnen Ärger macht, weil sie die Qualität Ihrer Liste zeigt. Amazon SES zum Beispiel zählt nur Hard Bounces, wenn es entscheidet, ein Konto zu überprüfen oder zu pausieren. Die Soft-Bounce-Rate sagt mehr über Ihre Versandgeschwindigkeit, Ihr Volumen und Ihre Reputation aus. Lesen Sie sie getrennt.

**Soll ich gebouncte E-Mails löschen?**
Löschen Sie Hard Bounces mit Adresscodes sofort: `5.1.1`, `5.1.2`, `5.2.1` und ähnliche. Behalten Sie Hard Bounces mit Authentifizierungscodes, `5.7.26`, `5.7.30` und `5.7.23`, und beheben Sie stattdessen Ihre Authentifizierung. Behalten Sie Soft Bounces und lassen Sie den erneuten Versuch laufen. Entfernen Sie jede Adresse, die mehrmals in Folge soft bounct.

**Kann ein Soft Bounce zum Hard Bounce werden?**
Ja, auf zwei Arten. Der empfangende Server kann seine Antwort ändern. Gmail meldet ein volles Postfach als `452 4.2.2`, solange das Konto aktiv ist, und als `552 5.2.2`, sobald das Konto inaktiv wird. Oder Ihr Versandtool ändert das Etikett. Mailchimp macht aus einer Adresse nach 7 Soft Bounces ohne Aktivität einen Hard Bounce, oder nach 15 mit Aktivität.

**Schaden Soft Bounces der Absenderreputation?**
Einer nicht. Ein stetiger Strom davon schon. Provider sehen, dass Sie immer wieder an Postfächer senden, die nicht empfangen können. Und eine hohe Soft-Bounce-Rate ist oft selbst eine Warnung. Ein Code wie `421 4.7.28` ist der Provider, der Ihnen direkt sagt, dass Sie langsamer werden sollen.

**Warum hat meine E-Mail einen Hard Bounce erzeugt, obwohl die Adresse korrekt ist?**
Fast immer wegen der Authentifizierung. Gmail und Outlook.com lehnen inzwischen Massen-E-Mails ohne SPF, DKIM und DMARC ab. Diese Ablehnung ist ein 5xx-Code, also stuft Ihr Tool sie als Hard Bounce ein. Prüfen Sie den Code. Wenn er mit `5.7` beginnt, liegt das Problem nicht bei der Adresse.

Ein Bounce-Bericht ist nur nützlich, wenn Sie ihn lesen können. Lesen Sie die erste Ziffer. Dann lesen Sie den Grund. Dann handeln Sie nach dem Grund. Die Adressen, die mit `5.1.1` gebounct wären, sind der einfache Teil, denn Sie können sie vor dem Versand finden. Lassen Sie die Liste zuerst durch [Giggal.ai](/) laufen. Die Hard-Bounce-Spalte in Ihrem nächsten Bericht enthält dann fast nur noch Dinge, die Sie nicht wissen konnten.
