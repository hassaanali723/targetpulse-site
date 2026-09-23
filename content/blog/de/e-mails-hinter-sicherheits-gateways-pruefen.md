---
title: "E-Mails hinter Sicherheits-Gateways prüfen"
description: Proofpoint, Mimecast und Barracuda nehmen jede Adresse an und brechen so die übliche Prüfung. Was dort passiert und wie Sie echte Antworten bekommen.
slug: e-mails-hinter-sicherheits-gateways-pruefen
date: 2026-09-23
keyword: e-mails hinter sicherheits-gateways prüfen
cta: Holen Sie Kontakte hinter Gateways zurück
---

Wenn Sie schon einmal einen Verifizierungsbericht exportiert und bemerkt haben, dass verdächtig viele Ihrer besten Enterprise-Kontakte als unbekannt zurückkamen, stand wahrscheinlich ein Secure Email Gateway im Weg. Keine Catch-all-Domain, auch wenn das Symptom identisch aussieht. Ein Gateway.

Der Unterschied zählt, weil die Lösung eine andere ist und weil die Kontakte hinter Gateways meist genau die sind, die Sie wollten. Kleine Firmen betreiben selten eins. Banken, Versicherer, Krankenhäuser, Universitäten und die meisten Fortune-500-Unternehmen schon.

## Was der Verifizierer tut, wenn er scheitert

Eine Standardverifizierung ist ein kurzes Gespräch. Ihr Verifizierer verbindet sich mit dem Mailserver aus den MX-Einträgen der Domain, grüßt, nennt einen Absender, nennt dann den Empfänger und wartet. Ein Server mit einer echten Liste seiner Postfächer antwortet ehrlich. Er sagt ja zu einer existierenden Adresse und nein zu einer nicht existierenden, und Ihr Verifizierer notiert die Antwort.

Ein Secure Email Gateway ist eine Filterschicht vor dem eigentlichen Mailserver. Jede Nachricht für die Domain trifft zuerst auf das Gateway, wird auf Malware, Phishing und Richtlinienverstöße geprüft und erst dann nach innen weitergereicht. Proofpoint, Mimecast, Barracuda, Cisco und ein Dutzend kleinerer Anbieter arbeiten alle so.

Das Gateway hat keinen Grund zu wissen, welche Postfächer existieren. Seine Aufgabe ist Filtern, nicht Verzeichnisabfrage. Wenn Ihr Verifizierer also nach einem bestimmten Empfänger fragt, nimmt das Gateway an. Es nimmt echte Adressen an, es nimmt Tippfehler an, es nimmt Namen von Leuten an, die 2019 gegangen sind. Die Annahme passiert am Rand, und die Entscheidung, ob ein Postfach existiert, fällt irgendwo dahinter, wo Ihr Verifizierer nie ankommt.

Von außen ist dieses Verhalten nicht von einer Catch-all-Domain zu unterscheiden. Gleiches Gespräch, gleiche Antwort, gleiches nutzloses Ergebnis.

## Warum "riskant" die falsche Stelle zum Aufhören ist

Die meisten Verifizierer reagieren darauf, indem sie die Adresse markieren. Das Label hängt vom Anbieter ab. Sie sehen risky, unknown, accept-all, catch-all oder ok_for_all, je nachdem, wessen Export Sie lesen. Die Bedeutung ist jedes Mal dieselbe: Wir konnten es nicht feststellen.

Als Antwort ist das ehrlich. Das Problem ist, was danach passiert. Versandtools behandeln diese Labels meist als weiches Nein, und die meisten Menschen folgen dem, weil niemand die Absenderreputation auf ein Vielleicht setzen will. Also werden die Adressen aus der Kampagne gefiltert und still vergessen.

Auf einer B2B-Liste sind das rund 30 % Ihrer Kontakte. Auf einer Liste mit Enterprise-Schwerpunkt mehr. Sie haben für diese Kontakte bezahlt und noch einmal für ihre Verifizierung, und das Ergebnis war ein Achselzucken.

## Was eine Gateway-bewusste Prüfung anders macht

Kurz gesagt: Sie hören auf, dem Gateway eine Frage zu stellen, die es nicht beantworten kann, und finden eine andere Frage, die es beantworten kann.

Gateways sind nicht stumm. Sie verhalten sich nach Mustern, die vom Produkt, der Konfiguration und der konkreten Adresse abhängen. Die Antwortzeiten unterscheiden sich zwischen einer Adresse, die das Gateway am Ende weiterleitet, und einer, die es am Ende ablehnt. Fehlercodes und ihr genauer Wortlaut unterscheiden sich zwischen Anbietern und Versionen. Manche Gateways zeigen eine Ablehnung erst später in der Transaktion, nach dem Punkt, an dem die meisten Verifizierer aufhören zuzuhören. Manche verhalten sich bei einem echten Postfach anders als bei einer zufälligen Zeichenkette auf derselben Domain, wenn man weiß, was man vergleichen muss.

Diese Signale zu lesen heißt, zuerst das Gateway zu erkennen und dann eine Prüfung anzuwenden, die für genau dieses Produkt gebaut ist statt der generischen. Deshalb wird Gateway-Abdeckung meist als Zahl angegeben. Giggal.ai erkennt fünfzehn, darunter Proofpoint, Mimecast und Barracuda. Andere Tools, die es versuchen, nennen drei oder fünf. Ein Verifizierer, der keine nennt, liefert mit ziemlicher Sicherheit das generische Ergebnis und nennt es riskant.

Man sollte die Grenzen offen sagen. Das ist eine Ableitung aus beobachtetem Verhalten, keine Verzeichnisabfrage, also nicht unfehlbar, und kein ehrlicher Anbieter wird etwas anderes behaupten. Was sie zuverlässig leistet, ist, ein großes unbrauchbares Segment in ein überwiegend brauchbares zu verwandeln, und das ist eine andere und bescheidenere Aussage als Perfektion.

## Herausfinden, wie viel Ihrer Liste betroffen ist

Sie brauchen kein Tool, um zu prüfen, ob Gateways Ihr Problem sind. Sie brauchen die MX-Einträge der Domains auf Ihrer Liste.

Nehmen Sie den Domainteil jeder Adresse, entfernen Sie Dubletten und schlagen Sie für jede die MX-Einträge nach. Eine Domain hinter Proofpoint zeigt auf Hostnamen mit pphosted oder ppe-hosted. Mimecast-Domains zeigen auf mimecast.com-Hosts, meist mit einem Regionscode. Barracuda erscheint als barracudanetworks.com. Cisco erscheint als iphmx.com. Microsoft-365- und Google-Workspace-Domains zeigen auf outlook.com- bzw. google.com-Hosts, und das sind keine Gateways, auch wenn sie trotzdem als Catch-all konfiguriert sein können.

Gleichen Sie diese Liste mit den Adressen ab, bei denen Ihr Verifizierer aufgegeben hat. Ist die Überschneidung groß, ist das Gateway die Ursache, und kein erneuter Lauf desselben Tools wird das Ergebnis ändern.

## Ein Tool dafür auswählen

Drei Fragen trennen einen Verifizierer, der das beherrscht, von einem, der es nicht tut.

Nennt er die Gateways, die er erkennt? Ein Anbieter, der hier echte Arbeit leistet, veröffentlicht eine Liste oder zumindest eine Zahl, weil genau das verkauft wird. Vage Formulierungen über fortschrittliche Erkennung ohne genannte Produkte bedeuten meist Erkennung, nicht Auflösung: Das Tool kann Ihnen sagen, dass ein Gateway da ist, und trotzdem nicht, ob das Postfach echt ist.

Liefert er gültig oder ungültig, oder ein Label? Fragen Sie konkret, wie die Ausgabe für eine Adresse hinter Mimecast aussieht. Lautet die Antwort, dass Sie ein Riskant-Flag und einen Konfidenzwert bekommen, haben Sie ein etwas besseres Label gekauft.

Was kostet er bei den Adressen, die die Arbeit brauchen? Gateway- und Catch-all-Auflösung ist für einen Anbieter teurer, also bepreisen die meisten sie anders. Manche verlangen ein Vielfaches eines Standard-Credits. Manche buchen sie von einem separaten, kleineren Kontingent ab, das vor dem Standardkontingent aufgebraucht ist. Beides ist nicht unvernünftig, aber Sie sollten es wissen, bevor Sie eine Liste mit 40 % Enterprise-Domains hochladen. Giggal.ai berechnet jede Verifizierung pauschal mit 1 Credit pro Adresse, aus demselben Guthaben wie alles andere.

## Die praktische Reihenfolge

Lassen Sie Ihre Liste durch Ihr aktuelles Tool laufen und behalten Sie den Export. Ziehen Sie jede Zeile heraus, die als riskant, unbekannt oder Accept-all zurückkam. Prüfen Sie die MX-Einträge dieser Domains, um zu sehen, wie viele Gateways statt einfacher Catch-alls sind. Lassen Sie dann nur dieses Segment durch ein dafür gebautes Tool laufen und vergleichen Sie die beiden Exporte nebeneinander.

Der Vergleich ist der Punkt. Jeder Anbieter hier, wir eingeschlossen, macht Genauigkeitsversprechen, die auf einer Preisseite ähnlich klingen. Die einzige Zahl, die etwas bedeutet, ist, wie viele Ihrer eigenen toten Kontakte wieder lebendig werden, und ob die als gültig markierten tatsächlich Post angenommen haben, als Sie an sie gesendet haben.

Wenn Sie das testen wollen, gibt Giggal.ai 1.000 Credits kostenlos ohne Karte, und sie funktionieren bei einem Massen-Upload statt Adresse für Adresse, was die einzige Art ist, wie dieser Test etwas aussagt. Einzelne Adressen können Sie über [E-Mail-Adresse prüfen](/email-checker) testen. Mehr dazu, [wie wir Catch-all- und Accept-all-Domains verifizieren](/catch-all-verification), oder zum [Ansatz der SEG-Verifizierung](/seg-email-verification) (auf Englisch) im Detail.
