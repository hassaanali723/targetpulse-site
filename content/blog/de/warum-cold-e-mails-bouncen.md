---
title: "Warum bouncen E-Mails? Ursachen und was zu tun ist"
description: Warum E-Mails bouncen, Hard Bounce gegen Soft Bounce, die häufigsten Ursachen bei Cold E-Mails, was eine Bounce-Meldung bedeutet und was Sie damit tun.
slug: warum-cold-e-mails-bouncen
date: 2026-09-23
keyword: warum bouncen e-mails
image: /blog/why-cold-emails-bounce.webp
imageAlt: Illustration dazu, warum Cold E-Mails bouncen
cta: Senken Sie Ihre Bounce-Rate vor dem nächsten Versand
---

Cold E-Mails bouncen, wenn der empfangende Server die Nachricht ablehnt und zurückschickt, statt sie zuzustellen. Wenn Sie gerade eine Kampagne verschickt haben und wissen wollen, warum Cold E-Mails häufiger bouncen als Ihre normale Post, läuft es fast immer auf zwei Dinge hinaus. Sie schreiben Menschen an, die nie um Kontakt gebeten haben, also ist die Liste kälter und ungenauer, und Sie senden von einer Domain, mit der der Server des Empfängers keine Vorgeschichte hat. Die einzelnen Ursachen liegen unter diesen beiden.

## Was ist eine gebouncte E-Mail?

Eine gebouncte E-Mail ist eine Nachricht, die der empfangende Mailserver abgelehnt und mit einem Begründungscode zurückgeschickt hat, statt sie in ein Postfach zu legen. Die Antwort kommt vom Server, nicht von der Person, und landet als Unzustellbarkeitsbericht (NDR) im Posteingang des Absenders oder im Bounce-Protokoll des Versandtools. Der Code in diesem Bericht ist der nützliche Teil: ein 5xx-Code ist eine dauerhafte Ablehnung, ein 4xx-Code eine vorübergehende. Die Frage, was eine gebouncte E-Mail bedeutet, läuft fast immer darauf hinaus, diesen Code zu lesen.

## Hard Bounces und Soft Bounces sind nicht dasselbe Problem

Als Erstes prüfen Sie, welche Art von Bounce Sie bekommen haben, denn davon hängt ab, was Sie als Nächstes tun.

Ein Hard Bounce ist dauerhaft. Die Adresse existiert nicht, die Domain existiert nicht, oder der Server hat sie rundweg abgelehnt. Eine Nachricht mit Hard Bounce wird nie zugestellt, und die Adresse gehört sofort von der Liste. Ein Soft Bounce ist vorübergehend. Das Postfach war voll, der Server war ausgelastet, oder die Nachricht wurde zur genaueren Prüfung zurückgehalten. Soft Bounces lösen sich manchmal von selbst, und das Versandtool versucht es meist automatisch erneut.

Die Unterscheidung zählt wegen der Reputation. Mailbox-Anbieter beobachten, wie oft Sie an Adressen senden, die hart bouncen, und ein wiederkehrendes Muster weist Sie als jemanden aus, der mit einer schlechten Liste arbeitet. Eine tote Adresse ist Rauschen. Eine Kampagne voller toter Adressen ist ein Signal.

## Die üblichen Ursachen, die häufigsten zuerst

Bounces sammeln sich um eine Handvoll Ursachen. Ungefähr in der Reihenfolge, in der sie bei Cold-E-Mail-Kampagnen auftauchen:

- Die Adresse existiert nicht mehr. Menschen wechseln den Job, das Postfach wird gelöscht, während der Kontakt in einer gekauften oder gescrapten Datenbank weiterlebt.
- Die Domain selbst ist weg. Kleine Firmen schließen, ihre Domain löst nicht mehr auf, und es gibt keinen Server mehr, der etwas annimmt.
- Das Postfach ist voll. Häufig bei vernachlässigten oder privaten Adressen, meist ein Soft Bounce.
- Der empfangende Server hat Ihre Absenderdomain abgelehnt. Das ist eine Reputations- oder Richtliniensperre, kein Problem des Empfängers.
- Greylisting. Der Server lehnt den ersten Versuch eines unbekannten Absenders vorübergehend ab und nimmt den Wiederholungsversuch ein paar Minuten später an.
- Spamfilter. Die Nachricht wurde aus Inhalts- oder Richtliniengründen abgewiesen, bevor sie den Posteingang erreichte.

Die Reihenfolge ist wichtig, weil die ersten beiden, tote Adressen und tote Domains, genau das sind, was eine Verifizierung abfängt, und sie sind auf gekauften oder gescrapten Listen auch am häufigsten. Die Ursachen weiter unten haben mehr mit Timing und Ihrer eigenen Einrichtung zu tun als mit der Adresse.

Oft können Sie die Ursache direkt aus der Bounce-Meldung ablesen. Eine Zeile wie 550 5.1.1 user unknown ist ein Hard Bounce für eine Adresse, die nicht existiert. Ein 451 4.7.1 greylisted, try again later ist eine vorübergehende Ablehnung, die sich beim nächsten Versuch meist erledigt. Wer den Code lesen kann, muss nicht raten.

## Was bedeutet "E-Mail kommt zurück"?

"Die Mail kam zurück" ist der Alltagsbegriff für dasselbe: Ihre Nachricht ist bei Ihnen gelandet. Der Wortlaut im Bericht unterscheidet sich je nach Anbieter. Gmail schreibt "Address not found", Microsoft 365 "Recipient address rejected", und Postfix-Server zitieren die rohe SMTP-Zeile, 550 5.1.1 User unknown. Alle drei heißen: Das Postfach ist nicht da. Eine Rückmeldung mit "mailbox full", "greylisted" oder "try again later" ist vorübergehend und erledigt sich meist mit dem nächsten Versuch Ihres Versandtools.

## Nicht jeder Bounce ist ein Listenproblem

Es liegt nahe, jeden Bounce als schlechte Adresse zu lesen, aber ein echter Teil der Bounces bei Cold E-Mails hat mit Ihrer Liste nichts zu tun. Ist Ihre Absenderdomain neu und nicht aufgewärmt, behandeln Server sie mit Misstrauen und lehnen mehr Post ab. Eine brandneue Domain, die am ersten Tag ein paar hundert Cold E-Mails verschickt, sieht Bounces, die eine sechs Monate alte Domain mit derselben Liste nicht sehen würde. Fehlen Ihre SPF-, DKIM- oder DMARC-Einträge oder sind sie falsch eingerichtet, lehnen manche Anbieter Sie ab, bevor sie den Empfänger überhaupt ansehen.

Keines davon lässt sich durch Adressbereinigung beheben. Es sind Probleme auf Absenderseite, und sie tauchen als Bounces auf, die genauso aussehen wie ein Bounce wegen einer toten Adresse, bis Sie die Begründung dahinter lesen.

## Was tun mit einer gebouncten E-Mail?

Eine einzelne Adresse: Lesen Sie den Code. Ein 5.1.1 oder "user unknown" heißt, das Postfach ist weg; entfernen Sie die Adresse und suchen Sie, wenn der Kontakt wichtig ist, seine aktuelle Adresse, statt es erneut zu versuchen. Ein 4.x.x oder "mailbox full" heißt warten; Ihr Tool versucht es von selbst noch einmal. Ein 5.7.1 oder "blocked" zeigt auf Ihre Absenderdomain, nicht auf den Empfänger, also prüfen Sie SPF, DKIM und DMARC, bevor Sie weiter senden. Wenn Sie nicht sicher sind, ob eine Adresse noch lebt, können Sie die [E-Mail-Adresse prüfen](/email-checker), kostenlos, bevor Sie erneut schreiben.

## Was tun, nachdem eine Kampagne gebounct ist

Ziehen Sie zuerst jeden Hard Bounce aus Ihrer Liste und senden Sie nie wieder an diese Adressen. Versuchen Sie es nicht erneut und lassen Sie sie nicht für den nächsten Versand drin in der Hoffnung, dass sie sich erholen, denn das tun sie nicht, und jeder Wiederholungsversuch kostet Reputation. Die Soft Bounces lassen Sie in Ruhe; die Wiederholungen übernimmt Ihr Versandtool.

Dann schauen Sie auf das Verhältnis. Ist ein großer Teil einer frischen Liste beim ersten Versand gebounct, war die Liste schon schlecht, bevor Sie sie angefasst haben, und die Lösung liegt davor, dort, wo Sie Adressen sammeln oder kaufen. Nachträgliches Bereinigen hilft dem nächsten Versand, macht den Reputationsschaden von diesem aber nicht rückgängig.

## Die Herkunft der Liste ist meist die eigentliche Geschichte

Woher eine Liste kommt, sagt voraus, wie sie bouncen wird. Eine Liste aus Ihrem eigenen CRM, mit Menschen, die Ihnen schon einmal geantwortet haben, bounct sehr wenig. Eine aus dem Web gescrapte oder bei einem Händler gekaufte Liste bounct deutlich mehr, weil die Adressen einmal gesammelt und nie wieder geprüft wurden, und ein Teil davon ist inzwischen tot. Wenn Sie wissen, dass eine Liste gekauft oder gescrapt ist, gehen Sie davon aus, dass ein Teil veraltet ist, und prüfen Sie vor dem ersten Versand, statt es aus dem Bounce-Bericht zu lernen.

## Wo Verifizierung hilft und wo nicht

Die Verifizierung entfernt vor dem Versand die Adressen, die hart bouncen würden, und ist damit der größte einzelne Hebel bei einer kalten Liste. Die Liste vorher zu prüfen macht aus einer Vermutung eine bekannte Größe, und das lohnt sich bei jeder Liste, die Sie nicht selbst aufgebaut haben.

Was sie nicht kann, ist einen falsch eingerichteten DNS-Eintrag reparieren oder eine kalte Domain aufwärmen. Das sind Probleme des Absenders, und keine Listenbereinigung berührt sie. Teilen Sie Ihre Bounces also nach Ursache auf. Sind es Adressen, die nicht mehr existieren, schicken Sie die Liste vor dem nächsten Versand durch die [E-Mail-Verifizierung](/), einschließlich der [Catch-all-Verifizierung](/catch-all-verification). Sind es Authentifizierungs- oder Reputationsfehler, liegt die Arbeit an Ihrer eigenen Domain, nicht an der Liste.
