---
title: "Was ist ein Secure Email Gateway (SEG)?"
description: Ein Secure Email Gateway ist eine Filterschicht vor dem Mailserver eines Unternehmens. Was es tut, wer es herstellt und warum es die E-Mail-Prüfung erschwert.
slug: was-ist-ein-secure-email-gateway
date: 2026-09-23
keyword: was ist ein secure email gateway
image: /blog/what-is-a-secure-email-gateway.webp
imageAlt: Illustration dazu, was ein Secure Email Gateway ist
cta: Prüfen Sie auch Adressen hinter einem SEG
---

Ein Secure Email Gateway ist eine Filterschicht vor dem Mailserver eines Unternehmens, die jede Nachricht prüft, bevor sie durchgelassen wird. Wenn Sie in Verifizierungsergebnissen immer wieder SEG sehen und wissen wollen, was ein Secure Email Gateway praktisch ist: Es ist der Kontrollpunkt, den die ein- und ausgehende Post eines Unternehmens passiert, der unterwegs nach Bedrohungen sucht und Richtlinien durchsetzt. Der Mailserver dahinter sieht nie eine Nachricht, die das Gateway blockiert.

## SEG ist nur die Abkürzung

SEG steht für Secure Email Gateway, und sobald Sie darauf achten, sehen Sie die Abkürzung öfter als den vollen Begriff. Beide werden austauschbar verwendet. Wenn ein Verifizierungstool eine Adresse als hinter einem SEG liegend markiert oder ein Zustellbarkeitsbericht SEG-Filterung erwähnt, ist die hier beschriebene Filterschicht gemeint. Der Begriff klingt technischer als die Idee, die schlicht eine Wache vor der Poststelle ist.

## Was das Gateway tatsächlich tut

Ein Gateway soll schlechte Post draußen und sensible Post drinnen halten. Eingehend sucht es nach Spam, Malware und Phishing und stellt alles unter Quarantäne oder lehnt es ab, was eine Regel auslöst. Ausgehend setzt es Data Loss Prevention und Compliance durch und stoppt Nachrichten, die Kundendaten preisgeben oder gegen eine Vorschrift verstoßen würden. Viele übernehmen auch Verschlüsselung und Langzeitarchivierung.

Ein Unternehmen setzt eines ein, weil all das auf dem Mailserver selbst schwerer zu verwalten und leichter falsch zu machen ist. Das Gateway bündelt die Regeln an einer Stelle, die jede Nachricht passieren muss.

## Die Gateways, denen Sie am ehesten begegnen

Eine Handvoll Anbieter dominiert diesen Bereich. Proofpoint, Mimecast, Barracuda und Cisco IronPort sind die Namen, denen Sie auf Geschäftsdomains am häufigsten begegnen, und dahinter gibt es viele kleinere. Insgesamt erkennen wir 15 Secure Email Gateways.

Sie unterscheiden sich in Funktionen und Preisen, verhalten sich von außen aber gleich. Jedes steht vor dem eigentlichen Mailsystem und entscheidet, was dort ankommt. Deshalb sagt Ihnen ein bestimmter Anbieter nur, dass das Unternehmen dieses Produkt gewählt hat, und wenig über die Adressen dahinter.

## Ein Gateway ist nicht der Postfachanbieter

Man verwechselt das Gateway leicht mit dem E-Mail-System des Unternehmens, aber es sind getrennte Schichten. Ein Unternehmen kann seine Postfächer bei Microsoft 365 oder Google Workspace betreiben und trotzdem ein Gateway eines anderen Anbieters davorsetzen. Ein Unternehmen liefert also die Sicherheitsschicht, ein anderes hostet die Postfächer. Deshalb verrät ein Gateway im Mailweg nicht, welcher Anbieter das Postfach tatsächlich hält, und ein vorgeschaltetes Sicherheitsprodukt sagt nichts über das Postfach dahinter. Beide Entscheidungen fallen unabhängig voneinander, oft durch verschiedene Teams mit verschiedenen Budgets.

## Wie ein Gateway den Weg einer E-Mail ändert

Normalerweise geht eine Nachricht direkt an den Mailserver der Domain. Mit einem Gateway richtet die Domain ihr Mail-Routing stattdessen auf das Gateway aus, also kommt jede eingehende Nachricht zuerst dort an. Das Gateway prüft sie und leitet sie nur weiter, wenn sie besteht, an den echten Server, auf dem das Postfach liegt.

Der Empfänger bemerkt davon nichts. Für alles außerhalb ist das Gateway das Mailsystem der Domain, weil es der einzige Teil ist, der antwortet. Manche Gateways gehen noch weiter und vertrösten unbekannte Absender absichtlich, halten einen ersten Kontakt zurück und antworten erst bei einem späteren Versuch richtig.

## Warum Gateways die Verifizierung stören

Verifizierung beruht darauf, dem Mailserver eine direkte Frage zu stellen und eine direkte Antwort zu lesen. Ein Gateway unterbricht diese Kette. Weil es im Namen der Domain antwortet, kann es eine Nachricht annehmen oder zur Prüfung zurückhalten, ohne je nachzusehen, ob das Postfach dahinter existiert.

Ein Verifizierer, der nach einer bestimmten Adresse fragt, kann also eine annehmende oder unverbindliche Antwort bekommen, die die Richtlinie des Gateways widerspiegelt, nicht den Zustand des Postfachs. Das Vertrösten macht es schlimmer, weil ein zurückgehaltener erster Versuch wie ein unklares Ergebnis aussieht, selbst wenn das Postfach völlig echt ist. Auf die Standardprüfung antwortet die falsche Stelle.

Ein konkretes Beispiel hilft. Ein Verifizierer prüft eine Adresse auf einer Gateway-geschützten Domain. Das Gateway folgt seinen eigenen Regeln für unbekannte Absender und nimmt die Anfrage an oder vertröstet sie. So oder so notiert der Verifizierer eine Antwort, die vom Gateway kam, nicht vom Server, der weiß, ob das Postfach existiert. Am echten Postfach wurde nichts geprüft, und doch hat die Prüfung eine Antwort zu melden.

## Ein Gateway sagt nichts darüber, ob das Postfach echt ist

Das ist der Teil, den man sich merken sollte. Ein Gateway zeigt, dass ein Unternehmen Sicherheit ernst nimmt. Es sagt überhaupt nichts darüber, ob eine bestimmte Adresse dahinter zu einem echten, aktiven Postfach gehört. Eine tote und eine lebende Adresse können hinter demselben Gateway liegen und von außen identisch aussehen, und genau deshalb landen Gateway-geschützte Adressen so oft im selben ungeklärten Stapel wie Catch-all-Domains.

Für Marketer zählt das wegen der Reichweite. Auf einer B2B-Liste sitzt ein guter Teil Ihrer besten Kontakte, die bei größeren und sicherheitsbewussteren Unternehmen, genau hinter solchen Gateways. Schreiben Sie sie alle ab, verlieren Sie das Enterprise-Ende Ihrer Liste. Senden Sie blind, treffen die Sperren Ihre Absenderreputation. Für eine einzelne Adresse starten Sie mit [E-Mail-Adresse prüfen](/email-checker); ist Ihre Liste voll davon, so gehen wir mit [SEG-geschützten E-Mails](/seg-email-verification) (auf Englisch) um.
