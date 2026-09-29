---
title: Mailer-daemon
description: Cos'è un messaggio del mailer-daemon, perché lo ricevi, come leggere il codice al suo interno e cosa fare quando ne ricevi uno per un'email che non hai inviato.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: Il mailer-daemon è la parte di un server di posta che invia messaggi automatici. La maggior parte di questi messaggi sono avvisi di rimbalzo. Un messaggio da mailer-daemon significa che un'email che hai inviato non è stata consegnata.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Rimuovi gli indirizzi che rimbalzano prima di inviare
---

## Cos'è un mailer-daemon

Un daemon è un programma che gira in sottofondo su un server. Il mailer-daemon è il programma che gestisce le email che non possono essere consegnate. Quando la tua email viene rifiutata, il mailer-daemon ti invia un avviso. Il nome del mittente di solito è `MAILER-DAEMON@` seguito dal dominio del server, oppure `postmaster@`.

L'avviso si chiama [rapporto di mancato recapito](/glossary/ndr). Ti dice quale indirizzo ha fallito, quando ha fallito e perché.

## Come leggere il messaggio

La parte importante del messaggio è il codice. Cerca un numero di tre cifre e un numero con i punti. Esempio: `550 5.1.1`.

- Un codice che inizia con **5** è un [hard bounce](/glossary/hard-bounce). L'indirizzo non esiste, oppure il server ha bloccato la tua email. Non inviare di nuovo finché non sai quale dei due casi è.
- Un codice che inizia con **4** è un [soft bounce](/glossary/soft-bounce). La casella è piena o il server è occupato. Il tuo server di posta riproverà da solo.

Il testo accanto al codice è scritto dal server di destinazione. Due esempi:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. La documentazione Microsoft dice che significa "the recipient's address doesn't exist", l'indirizzo del destinatario non esiste.

## Messaggi del mailer-daemon per email che non hai inviato

A volte ricevi un avviso di rimbalzo per un'email che non hai mai inviato. Si chiama [backscatter](/glossary/backscatter). Uno spammer ha messo il tuo indirizzo nel campo Da delle sue email. Quando quelle email rimbalzano, gli avvisi arrivano a te.

Il tuo account non è stato violato. La soluzione sta nel tuo dominio. Pubblica i record SPF, DKIM e DMARC. Così i server di destinazione possono rifiutare le email false invece di inviare gli avvisi di rimbalzo a te.

## Perché conta per chi invia

Ogni messaggio del mailer-daemon è un bounce. I provider di posta contano quante delle tue email vanno a indirizzi che non esistono. Molti avvisi `5.1.1` indicano che non hai controllato la tua lista.

## Come aiuta un verificatore

Un [verificatore di indirizzi email](/email-checker) chiede al server di destinazione se accetta email per un indirizzo. Lo fa prima che tu invii qualsiasi cosa. Il server dà lo stesso codice che il mailer-daemon ti manderebbe più tardi. La differenza è che nessuna email è stata inviata e la tua reputazione non ne risente.
