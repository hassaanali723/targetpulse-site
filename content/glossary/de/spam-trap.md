---
title: Spam Trap
description: Was eine Spam Trap ist, die drei Arten und wie jede auf eine Liste gelangt, was passiert, wenn Sie an eine senden, und wie Sie sie von Ihrer Liste fernhalten.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: Eine Spam Trap ist eine E-Mail-Adresse, die kein Mensch benutzt. Sie dient nur dazu, Absender zu erkennen, die ohne Erlaubnis E-Mails senden. Wenn Sie an eine Spam Trap senden, zeigt das, dass Ihre Liste gekauft, von Websites kopiert oder lange nicht bereinigt wurde.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Entfernen Sie tote Adressen, bevor sie zu Spam Traps werden
---

## Was ist eine Spam Trap?

Eine Spam Trap ist eine E-Mail-Adresse, die wie eine normale Adresse aussieht. Aber kein Mensch liest die E-Mails, die dort ankommen. Niemand hat sich je damit für einen Newsletter angemeldet. Niemand hat sie je einer Firma gegeben.

Kommt eine E-Mail bei einer Spam Trap an, weiß die Organisation dahinter deshalb eines sicher. Der Absender hat die Adresse nicht aus einem Anmeldeformular. Er hat sie gekauft, von einer Website kopiert oder zu lange auf einer alten Liste behalten.

Wer betreibt Spam Traps? Amazons Dokumentation für seinen E-Mail-Dienst Amazon SES nennt drei Gruppen. Das sind Internetanbieter, Mailbox-Provider und Anti-Spam-Organisationen. Ein Mailbox-Provider ist ein Anbieter von E-Mail-Postfächern, zum Beispiel ein großer kostenloser E-Mail-Dienst.

Die Adressen sind geheim. Sie erfahren erst später, dass Sie an eine gesendet haben. Ihre E-Mails landen dann im Spam, oder Ihre IP-Adresse wird auf eine [Blacklist](/glossary/email-blacklist) gesetzt. Die IP-Adresse ist die Nummer, an der man den Server erkennt, von dem Ihre E-Mails kommen. Ein Server ist ein Computer, der rund um die Uhr läuft und zum Beispiel E-Mails versendet.

## Ein einfaches Beispiel

So sendet eine Firma an eine Spam Trap, ohne es zu merken.

1. **Ein Shop kauft eine Liste.** Der Onlineshop "Muster Shop GmbH" kauft 10.000 E-Mail-Adressen von einer Website, die Kontaktdaten verkauft.
2. **In der Liste steckt eine Falle.** Eine der Adressen ist info@versteckte-seite.example. Eine Anti-Spam-Organisation hat sie vor Jahren auf einer Webseite versteckt. Kein Mensch hat sie je benutzt.
3. **Der Shop sendet ein Angebot.** Die E-Mail geht an alle 10.000 Adressen, auch an die Falle.
4. **Nichts scheint falsch.** Die Spam Trap nimmt die E-Mail an wie jedes andere Postfach. Der Shop sieht keinen Fehler.
5. **Die Falle speichert den Absender.** Die Organisation notiert die IP-Adresse und die Domain des Shops. Die Domain ist der Teil einer E-Mail-Adresse nach dem @.
6. **Die Probleme kommen später.** Ein paar Tage danach landen mehr E-Mails des Shops im Spam-Ordner. Manche Kunden bekommen keine Bestellbestätigung mehr. Der Shop weiß nicht, warum.

Der Shop bekommt nie eine Meldung wie "Sie haben eine Spam Trap getroffen". Er sieht nur die Folgen.

## Die drei Arten von Spam Traps

### 1. Pristine Traps (nie benutzt)

Diese Adressen wurden nur als Fallen angelegt. Sie werden nie für etwas anderes benutzt. Sie stehen versteckt auf Webseiten, wo Scraping-Tools sie finden. Ein Scraping-Tool ist ein Programm, das automatisch Adressen von Websites kopiert.

**Beispiel:** Die Adresse kontakt-7731@irgendeine-domain.example steht im Code einer Webseite. Ein Besucher sieht sie nicht. Ein Scraping-Tool sammelt sie ein.

Nur abgegriffene oder gekaufte Listen enthalten Pristine Traps. Eine Person, die sich selbst auf Ihrer Website angemeldet hat, ist nie eine solche Falle.

### 2. Recycelte Traps (alte Adressen, die zu Fallen wurden)

Diese Adressen waren einmal echt. Dann hat die Person sie aufgegeben. Der Provider hat die Adresse geschlossen und E-Mails eine Zeit lang bouncen lassen. Bouncen heißt, dass die E-Mail als unzustellbar an den Absender zurückgeht. Danach hat der Provider die Adresse als Falle wieder geöffnet.

Amazon beschreibt sie als Adressen "that were once valid, but have been unused (and bouncing) for an extended period of time". Auf Deutsch: einst gültig, aber lange unbenutzt und bouncend.

**Beispiel:** Sabine hat sich 2019 mit sabine.m@alte-firma.example für Ihren Newsletter angemeldet. Dann hat sie die Stelle gewechselt. Ihre Adresse hat gebounct, aber Sie haben weiter gesendet. Jahre später wird die Adresse zur Spam Trap. Ihre nächste E-Mail landet darin.

Listen, die nie bereinigt werden, sammeln diese Fallen mit der Zeit.

### 3. Tippfehler-Traps (Schreibfehler in der Domain)

Diese Fallen liegen auf Domains, die wie eine echte Domain mit einem Schreibfehler aussehen.

**Beispiel:** Eine Person tippt ihre Adresse in Ihr Anmeldeformular. In der Domain fehlt ein Buchstabe. Die Domain sieht dann fast aus wie die eines großen Providers, ist es aber nicht. Wird diese falsche Domain als Falle betrieben, wird jede E-Mail an diese Adresse erfasst.

Tippfehler-Traps erkennen Absender, die nicht prüfen, was Leute in das Anmeldeformular tippen.

## Was passiert, wenn Sie an eine Spam Trap senden

Sie bekommen keinen Bounce. Die Falle nimmt die E-Mail an wie ein normales Postfach. Dann speichert die Organisation, die die Spam Trap betreibt, Ihre IP-Adresse und Ihre Domain.

Was danach passiert, hängt von der Organisation ab:

- **Ihre IP-Adresse kann auf eine Blocklist kommen.** Eine Blocklist ist eine Liste gesperrter Absender. Viele Mailserver prüfen solche Listen und lehnen E-Mails von Absendern darauf ab.
- **Ihre Reputation bei diesem Provider kann sinken.** Die Reputation ist die Bewertung, die ein Provider Ihnen als Absender gibt. Sinkt sie, landen mehr Ihrer E-Mails im Spam.
- **Ihr Versanddienst kann Ihr Konto unter Beobachtung stellen.** Der Versanddienst ist das Tool oder die Firma, über die Sie Ihre E-Mails versenden.

Wie viele Treffer braucht es? Amazon nennt keine Zahl. Es sagt: "even a small number of spamtrap hits can have a very negative effect". Das heißt: Schon wenige Spam-Trap-Treffer können sehr negative Folgen haben.

## Wie Sie Spam Traps von Ihrer Liste fernhalten

Niemand kann Ihnen eine Liste mit Spam-Trap-Adressen geben. Die Adressen sind geheim. Sie schützen Ihre Liste deshalb mit diesen Schritten:

1. **Kaufen, mieten oder scrapen Sie keine Adressen.** Pristine Traps kommen nur auf diesem Weg auf eine Liste.
2. **Entfernen Sie jede Adresse sofort, die hard bounct.** Ein [Hard Bounce](/glossary/hard-bounce) bedeutet, dass die Adresse nicht existiert. Amazon rät, solche Adressen zu entfernen, "long before they are converted to spamtraps". Also lange bevor sie zu Fallen werden.
3. **Senden Sie nicht mehr an Leute, die seit Monaten nichts geöffnet oder geklickt haben.** Recycelte Traps sind unter diesen alten, stillen Adressen.
4. **Prüfen Sie Adressen bei der Anmeldung.** Dann fällt ein Tippfehler auf, während die Person noch auf der Seite ist. So wird aus dem Tippfehler keine Spam Trap auf Ihrer Liste.

## Was ein Verifizierer kann und was nicht

Ein [E-Mail-Prüfer](/email-checker) kann eine Spam Trap nicht sicher erkennen. Eine recycelte Spam Trap ist ein Postfach, das existiert und E-Mails annimmt. Deshalb wird sie als gültig verifiziert. Seien Sie vorsichtig mit Tools, die versprechen, jede Spam Trap zu finden.

[E-Mail-Verifizierung](/) hilft trotzdem auf zwei Arten. Sie findet tote Adressen, bevor ein Provider sie zu Fallen recycelt. Sie erkennt Tippfehler-Domains vor dem ersten Versand. Für eine ganze Liste nutzen Sie die [E-Mail-Massenprüfung](/bulk-email-verifier). Vor einer gekauften Liste schützt sie nicht. Das ist eine Entscheidung, keine Prüfung.
