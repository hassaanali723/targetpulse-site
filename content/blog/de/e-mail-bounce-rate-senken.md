---
title: "E-Mail-Bounce-Rate: Richtwerte und wie man sie senkt"
description: Was die E-Mail-Bounce-Rate ist, Richtwerte für Marketing-, Transaktions- und Cold E-Mails und eine funktionierende Reihenfolge, um eine hohe Rate zu senken.
slug: e-mail-bounce-rate-senken
date: 2026-09-23
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

Cold E-Mails bekommen eine breitere Spanne, weil die Liste per Definition kälter ist, werden aber auch härter beurteilt, sobald sie die Grenze überschreiten: Eine Cold-Kampagne mit 6 Prozent zieht schneller Sperren auf sich als ein Newsletter mit derselben Rate. Diese Spannen nutzen Zustellbarkeitsteams in der Praxis; die Regeln von Google und Yahoo für Massenversender legen die Obergrenze für Spam-Beschwerden bei 0,3 Prozent fest, und eine Bounce-Rate über diesen Spannen geht meist mit Beschwerden einher.

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

Löschen ist die sicherere der beiden und das, was die meisten tun, weshalb sich eine verifizierte Liste trotzdem dünn anfühlen kann. Ein Verifizierer, der Catch-all-Adressen in ein echtes gültig oder ungültig auflöst, befreit Sie von dieser Wahl. Dafür ist Giggal.ai mit seiner [Catch-all-Verifizierung](/catch-all-verification) gebaut, und dieselbe Behandlung gilt für Postfächer hinter Secure Email Gateways wie Proofpoint und Mimecast, die aus einem anderen Grund auf ähnliche Weise scheitern.

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

Das senkt Bounces nicht direkt, und das sollte man klar sagen, weil es ständig als Mittel gegen Bounces empfohlen wird. SPF, DKIM und DMARC bestimmen, ob empfangende Server Ihnen glauben, dass Sie sind, wer Sie vorgeben zu sein. Sind sie falsch eingerichtet, werden Nachrichten abgelehnt oder als Spam abgelegt, was in manchen Berichten neben den Bounces auftaucht und die Diagnose trübt.

Richten Sie sie richtig ein, prüfen Sie sie einmal mit einem der kostenlosen DMARC-Checker, und denken Sie dann nicht mehr darüber nach. Sind Ihre Bounces Fehler wegen nicht existierender Postfächer, hilft keine DNS-Arbeit.

## Wärmen Sie eine neue Domain auf

Eine brandneue Absenderdomain, die am ersten Tag 5.000 Nachrichten sendet, wird gedrosselt, und Drosselung erzeugt Soft Bounces, die wie ein Listenproblem aussehen.

Beginnen Sie mit geringem Volumen und steigern Sie es über zwei bis vier Wochen. Die meisten Versandplattformen automatisieren das inzwischen. Tut Ihre das nicht, steigern Sie von Hand und widerstehen Sie dem Drang, Schritte zu überspringen, denn die Reputation, die Sie aufbauen, entscheidet, ob die nächste Kampagne ankommt.

## Eine Reihenfolge, die funktioniert

Lesen Sie die Aufteilung in hart und weich aus Ihrer letzten Kampagne. Verifizieren Sie die ganze Liste, einschließlich des Catch-all-Anteils, statt ihn zu verwerfen. Entfernen Sie Rollen- und Wegwerfadressen. Setzen Sie die Verifizierung ins Anmeldeformular, damit das Problem nicht wiederkommt. Prüfen Sie SPF, DKIM und DMARC einmal. Wärmen Sie die Domain auf, wenn sie neu ist. Dann senden Sie, lesen die neuen Zahlen und wiederholen die Verifizierung jedes Quartal.

Die meisten Listen kommen allein mit dem zweiten Schritt von einer unangenehmen Zahl auf eine akzeptable. Der Rest der Liste sorgt dafür, dass sie nicht zurückrutscht.

Wenn Sie sehen wollen, wo Ihre aktuelle Liste steht, gibt Giggal.ai 1.000 Credits kostenlos ohne Karte, und sie funktionieren auch bei einem Massen-Upload. Weiterlesen: [was eine Catch-all-Adresse ist](/blog/what-is-a-catch-all-email-address), [was riskant in einem Verifizierungsbericht bedeutet](/blog/what-does-risky-mean-in-email-verification) und [eine gute Bounce-Rate bei Cold E-Mails](/blog/good-bounce-rate-for-cold-email).
