---
title: Spam Trap
description: Was eine Spam Trap ist, die drei Arten und wie jede auf eine Liste gelangt, was passiert, wenn Sie an eine senden, und wie Sie sie von Ihrer Liste fernhalten.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: Eine Spam Trap ist eine E-Mail-Adresse, die nur dazu dient, Absender zu erkennen. Niemand meldet sich damit an. Mailbox-Provider und Anti-Spam-Organisationen überwachen sie. Wenn Sie an eine Spam Trap senden, bedeutet das, dass Ihre Liste gekauft, abgegriffen oder nie bereinigt wurde.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Entfernen Sie tote Adressen, bevor sie zu Spam Traps werden
---

## Was eine Spam Trap ist

Eine Spam Trap ist eine E-Mail-Adresse, die nur existiert, um Absender mit schlechten Listen zu erkennen. Niemand benutzt sie. Niemand hat sich je damit angemeldet. Kommt eine E-Mail bei einer Spam Trap an, weiß die Organisation, die sie betreibt, eines mit Sicherheit. Der Absender hat die Adresse nicht aus einem Anmeldeformular.

Amazons Dokumentation für seinen E-Mail-Dienst sagt, dass Spam Traps von Internetanbietern, Mailbox-Providern und Anti-Spam-Organisationen betrieben werden. Die Adressen sind geheim. Sie erfahren erst später, dass Sie an eine gesendet haben. Ihre E-Mails landen im Spam, oder Ihre IP-Adresse wird auf eine [Blacklist](/glossary/email-blacklist) gesetzt.

## Die drei Arten von Spam Traps

**Pristine Traps.** Adressen, die nur als Fallen angelegt wurden. Sie werden auf Webseiten platziert, wo Scraping-Tools sie finden. Sie werden nie für etwas anderes benutzt. Nur abgegriffene oder gekaufte Listen enthalten sie.

**Recycelte Traps.** Echte Adressen, die aufgegeben wurden. Der Provider hat die Adresse geschlossen und E-Mails eine Zeit lang bouncen lassen. Dann hat der Provider die Adresse als Falle wieder geöffnet. Amazon beschreibt sie als Adressen "that were once valid, but have been unused (and bouncing) for an extended period of time", also einst gültig, aber lange unbenutzt und bouncend. Listen, die nie bereinigt werden, sammeln diese mit der Zeit.

**Tippfehler-Traps.** Adressen bei Domains, die wie eine echte Domain mit einem Schreibfehler aussehen. Beispiel: eine falsch geschriebene Version der Domain eines großen Providers. Sie erkennen Absender, die nicht prüfen, was Leute in das Anmeldeformular getippt haben.

## Was passiert, wenn Sie an eine Spam Trap senden

Sie bekommen keinen Bounce. Die Falle nimmt die E-Mail an. Die Organisation, die die Falle betreibt, speichert Ihre IP-Adresse und Domain. Was danach passiert, hängt von der Organisation ab:

- Ihre IP-Adresse kann auf eine Blocklist gesetzt werden.
- Ihre Reputation bei diesem Provider kann sinken.
- Ihr Versanddienst kann Ihr Konto unter Beobachtung stellen.

Amazon sagt nicht, wie viele Spam-Trap-Treffer Maßnahmen auslösen. Es sagt: "even a small number of spamtrap hits can have a very negative effect", also schon eine kleine Zahl von Treffern kann sehr negative Folgen haben.

## Wie Sie Spam Traps von Ihrer Liste fernhalten

Niemand kann Ihnen eine Liste mit Spam-Trap-Adressen geben. Sie schützen Ihre Liste mit diesen Schritten:

- Kaufen, mieten oder scrapen Sie keine Adressen. Pristine Traps kommen nur auf diesem Weg.
- Entfernen Sie jede Adresse, die hard bounct. Tun Sie das sofort. Amazon sagt, sie zu entfernen "long before they are converted to spamtraps", also lange bevor sie in Fallen umgewandelt werden.
- Senden Sie nicht mehr an Leute, die seit Monaten nichts geöffnet oder geklickt haben. Recycelte Traps sind darunter.
- Prüfen Sie Adressen bei der Anmeldung, damit Tippfehler erkannt werden, während die Person noch auf der Seite ist.

## Was ein Verifizierer kann und was nicht

Ein [E-Mail-Adressen-Checker](/email-checker) kann eine Spam Trap nicht erkennen. Eine recycelte Falle ist ein Postfach, das existiert und E-Mails annimmt, also wird sie als gültig verifiziert.

Verifizierung hilft auf zwei Arten. Sie entfernt tote Adressen, bevor sie zu Fallen recycelt werden. Sie erkennt Tippfehler-Domains vor dem ersten Versand. Vor einer gekauften Liste schützt sie nicht. Das ist eine Entscheidung, keine Prüfung.
