---
title: "E-Mail-Bounce-Rate: Richtwerte und wie man sie senkt"
description: Was die E-Mail-Bounce-Rate ist, Richtwerte für Marketing-, Transaktions- und Cold E-Mails und eine funktionierende Reihenfolge, um eine hohe Rate zu senken.
slug: e-mail-bounce-rate-senken
date: 2026-09-23
updated: 2026-09-26
keyword: e-mail-bounce-rate
image: /blog/covers/de/e-mail-bounce-rate-senken.webp
imageAlt: E-Mail-Bounce-Rate: Richtwerte und wie man sie senkt
cta: Bringen Sie Ihre Bounce-Rate unter Kontrolle
---

Eine hohe Bounce-Rate ist selten ein einzelnes Problem. Meist sind es drei oder vier kleine, die sich stapeln, und man geht sie gern in der falschen Reihenfolge an: zuerst die spannende technische Arbeit, zuletzt die langweilige Listenpflege, die das meiste davon behoben hätte.

Deshalb ist diese Liste danach geordnet, wie viel jeder Schritt tatsächlich bringt, nicht danach, wie befriedigend er ist.

## Was ist die E-Mail-Bounce-Rate?

Die E-Mail-Bounce-Rate ist der Anteil der Nachrichten eines Versands, die unzustellbar zurückkamen: gebouncte Nachrichten geteilt durch gesendete Nachrichten, in Prozent. Sie senden 10.000, bekommen 250 zurück, und die Bounce-Rate liegt bei 2,5 Prozent. Die meisten Tools weisen sie pro Kampagne aus und teilen sie in Hard Bounces (Adresse oder Domain existiert nicht) und Soft Bounces (volles Postfach, ausgelasteter Server, vorübergehende Sperre). Mailbox-Anbieter achten am genauesten auf den Anteil der Hard Bounces, denn er ist das deutlichste Zeichen einer Liste, die nie verifiziert wurde.

## Richtwerte für die Bounce-Rate

Die akzeptable Zahl hängt von der Art der Post ab, weil Anbieter jede Art anders beurteilen.

| Versandart | Gesund | Beobachten | Schädlich |
|---|---|---|---|
| Marketing an eine Liste mit Einwilligung | unter 1% | 1 bis 2% | über 2% |
| Transaktional (Belege, Passwort-Resets) | unter 0,5% | 0,5 bis 1% | über 1% |
| Cold Outreach | unter 2% | 2 bis 5% | über 5% |

![Gesunde, zu beobachtende und schädliche Bounce-Raten für Marketing-, Transaktions- und Cold-E-Mails](/blog/fig-de-bounce-rate-bands.webp)
Dieselbe Bounce-Rate ist bei einer Versandart in Ordnung und bei einer anderen ein Problem.

Cold E-Mails bekommen eine breitere Spanne, weil die Liste per Definition kälter ist, werden aber auch härter beurteilt, sobald sie die Grenze überschreiten: Eine Cold-Kampagne mit 6 Prozent zieht schneller Sperren auf sich als ein Newsletter mit derselben Rate. Diese Spannen nutzen Zustellbarkeitsteams in der Praxis; die Regeln von Google und Yahoo für Massenversender legen die Obergrenze für Spam-Beschwerden bei 0,3 Prozent fest, und eine Bounce-Rate über diesen Spannen geht meist mit Beschwerden einher.

## Wie hoch ist die durchschnittliche E-Mail-Bounce-Rate?

Am häufigsten genannt wird eine Zahl um 2 bis 2,5 Prozent über alle Versender hinweg. Nehmen Sie sie als Kuriosität und nicht als Zielwert, denn dieser Durchschnitt fasst Versender zusammen, deren Listen fast nichts gemeinsam haben, und die Streuung darin ist weit größer, als die Zahl vermuten lässt.

Wer nach der durchschnittlichen Bounce-Rate nach Branche sucht, findet eine Tabelle, die auf Dutzenden Seiten wiederholt wird, mit ordentlichen Werten für E-Commerce, Gesundheitswesen, Bildung und so weiter. Diese Zahlen gehen fast alle auf eine einzige Benchmark-Seite von Mailchimp zurück, und dort stehen heute nur Öffnungsraten, Klickraten und Abmelderaten. Eine Bounce-Tabelle nach Branche gibt es dort nicht. Die Seiten, die diese Werte zitieren, zitieren größtenteils einander, und mehrere davon verkaufen selbst E-Mail-Verifizierung.

Die Branche ist ohnehin ein schwacher Indikator. Zwei SaaS-Firmen derselben Kategorie liegen um eine Größenordnung auseinander, wenn die eine ihre Liste über Anmeldeformulare aufgebaut und die andere sie gekauft hat. Was die Zahl wirklich vorhersagt, ist die Herkunft der Adressen und ihr Alter.

| Woher die Liste stammt | Typische Gesamt-Bounce-Rate | Warum |
|---|---|---|
| Consumer mit Einwilligung, Versand in den letzten 90 Tagen | unter 0,5% | Die Adressen sind selbst angegeben und kürzlich bestätigt |
| Business mit Einwilligung, Versand in den letzten 90 Tagen | unter 1% | Dasselbe, aber Firmenpostfächer werden geschlossen, wenn jemand geht |
| Business mit Einwilligung, seit 12 Monaten unberührt | 2 bis 5% | Rund ein Viertel der B2B-Kontaktdaten veraltet pro Jahr |
| Cold B2B, vor dem Versand verifiziert | 1 bis 3% | Der Rest sind meist Catch-all-Domains, die ein Verifizierer nicht auflösen konnte |
| Cold B2B, nicht verifiziert | 5 bis 15% | Nichts hat die Adressen entfernt, die es nicht mehr gibt |
| Gekauft oder gescrapt, nicht verifiziert | 10 bis 30% | Weiterverkaufte Daten altern im Regal des Anbieters, bevor sie bei Ihnen ankommen |

![Typische E-Mail-Bounce-Rate nach Herkunft der Liste, von Consumer mit Einwilligung unter 0,5 Prozent bis gekauft und unverifiziert bei 10 bis 30 Prozent](/blog/fig-de-bounce-by-list-source.webp)
Zwischen der obersten und der untersten Zeile liegt der Faktor sechzig. Kein Branchendurchschnitt deckt eine solche Spanne ab.

B2B liegt auf jeder vergleichbaren Stufe höher als B2C, aus einem Grund, der nichts mit der Branche zu tun hat: Menschen wechseln den Job, und ein Firmenpostfach wird dann meist geschlossen. Eine private Adresse bei einem kostenlosen Anbieter kann jahrelang ungenutzt bleiben und trotzdem Post annehmen.

Die nützliche Frage ist also nicht, wie Ihre Rate im Branchenvergleich dasteht. Sie lautet, welche der Zeilen oben Ihre Liste beschreibt und ob Sie den einen Schritt gemacht haben, der sie verschiebt.

## Zuerst: Wissen, welche Art Sie haben

Ihr Versandtool teilt Bounces in hart und weich. Beide bedeuten Verschiedenes, und die Lösung für das eine hilft beim anderen nicht.

Ein Hard Bounce ist dauerhaft. Das Postfach existiert nicht, die Domain existiert nicht, oder der Server hat Sie rundweg abgelehnt. Ein erneuter Versand bringt für immer dasselbe Ergebnis. Diese Kategorie schadet Ihnen, weil Mailbox-Anbieter ein Muster von Hard Bounces als Absender lesen, der seine Empfänger nicht kennt, und genau so sieht ein Spammer von außen aus.

Ein Soft Bounce ist vorübergehend. Das Postfach ist voll, der Server ist down, die Nachricht war zu groß, oder Sie wurden per Greylisting gebeten, es gleich noch einmal zu versuchen. Die meisten Versandtools versuchen diese automatisch erneut, und ein guter Teil erledigt sich von selbst.

Holen Sie sich den Bericht Ihrer letzten Kampagne und schauen Sie sich die Aufteilung an, bevor Sie irgendetwas anderes tun. Bouncen Sie überwiegend hart, ist es ein Listenproblem, und darum geht es im Rest dieses Artikels vor allem. Bouncen Sie überwiegend weich, mit gleichbleibender Rate über alle Kampagnen, liegt das Problem eher bei Reputation oder Infrastruktur, und eine Listenbereinigung wird daran wenig ändern.

## Was als schlecht gilt

Es gibt keine allgemeingültige Schwelle, aber die Zahlen, mit denen man arbeitet, sind ziemlich einheitlich.

| Hard-Bounce-Rate | Was sie bedeutet |
|---|---|
| Unter 2% | Normal für eine gepflegte Liste |
| 2% bis 5% | Die Liste altert oder wurde vor dem Versand nicht verifiziert |
| Über 5% | Anbieter drosseln Sie wahrscheinlich bereits |
| Über 10% | Rechnen Sie mit einer Sperre bei den meisten Versandplattformen |

Cold Outreach liegt am oberen Ende des Normalen, weil die Daten gekauft oder gescrapt statt per Einwilligung gesammelt sind. Unter 3 % ist ein vernünftiges Ziel für eine bereinigte Cold-Liste, und wenn Sie eine warme Liste von Menschen haben, die sich angemeldet haben, sollten Sie deutlich unter 1 % liegen.

## Der Schritt, der das meiste behebt

Verifizieren Sie die Liste vor dem Versand. Das ist der ganze Schritt, und er erklärt die große Mehrheit der Hard Bounces auf fast jeder Liste, die wir sehen.

Ein Verifizierer prüft die Syntax, bestätigt, dass die Domain existiert und Mailserver eingerichtet hat, und prüft dann, ob das konkrete Postfach echt ist. Lassen Sie ihn vor einer Kampagne über die ganze Liste laufen, und wiederholen Sie das für alles, was älter als etwa sechs Monate ist, denn B2B-Adressen veralten schnell. Menschen wechseln den Job. Firmen strukturieren um. Eine Adresse, die im Februar gut war, ist im August nicht unbedingt noch gut, und etwa ein Viertel der B2B-Kontaktdaten veraltet innerhalb eines Jahres. Eine einzelne Adresse können Sie kostenlos direkt hier prüfen: [E-Mail-Adresse prüfen](/email-checker).

Auf eine Sache müssen Sie hier achten, und sie ist der Grund, warum viele verifizieren und trotzdem bouncen. Rund 30 % einer B2B-Liste liegen auf Catch-all-Domains, die Post für jede mögliche Adresse annehmen, ob ein Postfach existiert oder nicht. Die meisten Verifizierer können diese nicht auflösen und liefern sie als riskant, unbekannt oder Accept-all zurück. Dann haben Sie zwei schlechte Optionen: ein Drittel Ihrer Liste löschen oder trotzdem senden und es auf die harte Tour herausfinden.

![Ringdiagramm: rund 70 Prozent einer B2B-Liste lassen sich sauber auflösen, rund 30 Prozent liegen auf Catch-all-Domains](/blog/fig-de-catch-all-share.webp)
Das orange Segment ist der Teil, den eine Standardprüfung unbeantwortet zurückgibt, und daher kommen die Bounces, mit denen Sie nicht gerechnet haben.

Löschen ist die sicherere der beiden und das, was die meisten tun, weshalb sich eine verifizierte Liste trotzdem dünn anfühlen kann. Ein Verifizierer, der Catch-all-Adressen in ein echtes gültig oder ungültig auflöst, befreit Sie von dieser Wahl. Dafür ist [Giggal.ai](/) mit seiner [Catch-all-Verifizierung](/catch-all-verification) gebaut, und dieselbe Behandlung gilt für Postfächer hinter Secure Email Gateways wie Proofpoint und Mimecast, die aus einem anderen Grund auf ähnliche Weise scheitern.

## Dann: Entfernen Sie die Adressen, die nie funktioniert hätten

Zwei Kategorien lohnt es sich zu entfernen, selbst wenn sie als gültig verifiziert werden.

Rollenadressen sind gemeinsame Aliase: info@, vertrieb@, support@, admin@. Sie existieren meist, bestehen also die Verifizierung, landen aber in einem gemeinsamen Postfach, das niemandem persönlich gehört. Die Interaktion ist schwach und die Beschwerderate überdurchschnittlich. Für Cold Outreach sind sie fast wertlos.

Wegwerfadressen stammen von Diensten für temporäre Post und existieren ein paar Minuten. Solange sie leben, bestehen sie die Verifizierung, danach verschwinden sie. Jeder ordentliche Verifizierer markiert beide Kategorien getrennt von den gültigen, also ist das ein Filterschritt und keine Zusatzarbeit.

## Reparieren Sie den Zulauf, nicht nur die Liste

Wenn ständig schlechte Adressen nachkommen, wird das Bereinigen zum Laufband.

Setzen Sie Echtzeit-Verifizierung in Ihre Anmeldeformulare, damit ein Tippfehler auffällt, solange die Person noch auf der Seite ist. Der größte Nutzen liegt darin, gmial.com und hotmial.com in dem Moment abzufangen, in dem sie getippt werden, was sowohl die Zustellbarkeit verbessert als auch ein besseres Erlebnis für jemanden ist, der wirklich von Ihnen hören wollte.

Streichen Sie das zweite Feld "E-Mail-Adresse bestätigen". Es funktioniert nicht. Die Leute kopieren aus dem ersten Feld und fügen es ein, und Sie haben ohne Nutzen Reibung eingebaut.

Wenn Sie Listen kaufen, verifizieren Sie sie am Tag der Lieferung, nicht am Tag des Versands. Händler verkaufen dieselben Daten mehrfach, und sie altern in deren Regal, nicht nur in Ihrem.

## Die Authentifizierungsarbeit

Das galt lange als etwas, das Bounces nicht senkt, und dieser Rat ist schlecht gealtert. SPF, DKIM und DMARC bestimmen, ob empfangende Server Ihnen glauben, dass Sie sind, wer Sie vorgeben zu sein, und zwei der größten Anbieter weisen Post inzwischen ganz ab, wenn sie fehlen.

Microsoft weist seit dem 5. Mai 2025 unauthentifizierte Massenmail an Outlook.com-, Hotmail- und Live-Adressen zurück. Wer mehr als 5.000 Nachrichten pro Tag ohne alle drei Einträge versendet, erhält `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. Das ist ein 5xx-Code, Ihr Versandtool verbucht ihn also als Hard Bounce, gegen ein Postfach, das existiert und die Nachricht angenommen hätte. Google hat im November 2025 in dieselbe Richtung verschärft und legt verdächtige Post nicht mehr in den Spam, sondern weist sie auf SMTP-Ebene ab.

Praktisch heißt das: Eine Lücke in der Authentifizierung taucht heute in Ihrem Bounce-Report auf statt still in Ihrer Öffnungsrate. Wenn ein großer Teil Ihrer Bounces 5.7.x-Codes trägt und Ihre Empfänger sich bei Outlook oder Gmail ballen, ist nicht die Liste das Problem, und sie erneut zu verifizieren hilft nicht.

Richten Sie die drei Einträge sauber ein, prüfen Sie sie einmal mit einem der kostenlosen DMARC-Checker, und denken Sie dann nicht mehr daran. Sind Ihre Bounces dagegen Fehler wegen nicht existierender Postfächer, die den Code 5.1.1 tragen, ändert keine DNS-Arbeit etwas daran.

## Wärmen Sie eine neue Domain auf

Eine brandneue Absenderdomain, die am ersten Tag 5.000 Nachrichten sendet, wird gedrosselt, und Drosselung erzeugt Soft Bounces, die wie ein Listenproblem aussehen.

Beginnen Sie mit geringem Volumen und steigern Sie es über zwei bis vier Wochen. Die meisten Versandplattformen automatisieren das inzwischen. Tut Ihre das nicht, steigern Sie von Hand und widerstehen Sie dem Drang, Schritte zu überspringen, denn die Reputation, die Sie aufbauen, entscheidet, ob die nächste Kampagne ankommt.

## Eine Reihenfolge, die funktioniert

Lesen Sie die Aufteilung in hart und weich aus Ihrer letzten Kampagne. Verifizieren Sie die ganze Liste, einschließlich des Catch-all-Anteils, statt ihn zu verwerfen. Entfernen Sie Rollen- und Wegwerfadressen. Setzen Sie die Verifizierung ins Anmeldeformular, damit das Problem nicht wiederkommt. Prüfen Sie SPF, DKIM und DMARC einmal. Wärmen Sie die Domain auf, wenn sie neu ist. Dann senden Sie, lesen die neuen Zahlen und wiederholen die Verifizierung jedes Quartal.

Die meisten Listen kommen allein mit dem zweiten Schritt von einer unangenehmen Zahl auf eine akzeptable. Der Rest der Liste sorgt dafür, dass sie nicht zurückrutscht.

Wenn Sie sehen wollen, wo Ihre aktuelle Liste steht, gibt Giggal.ai 1.000 Credits kostenlos ohne Karte, und sie funktionieren auch bei einem Massen-Upload. Weiterlesen: [was eine Catch-all-Adresse ist](/blog/what-is-a-catch-all-email-address), [was riskant in einem Verifizierungsbericht bedeutet](/blog/what-does-risky-mean-in-email-verification) und [eine gute Bounce-Rate bei Cold E-Mails](/blog/good-bounce-rate-for-cold-email).
