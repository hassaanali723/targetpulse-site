---
title: Mailer-daemon
description: Cos'è un messaggio del mailer-daemon, perché lo ricevi, come leggere il codice al suo interno e cosa fare quando ne ricevi uno per un'email che non hai inviato.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: Il mailer-daemon è il programma di un server di posta che invia messaggi automatici. Quasi sempre questi messaggi sono avvisi di rimbalzo. Se ricevi un'email dal mailer-daemon, un'email che hai inviato non è stata consegnata.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Rimuovi gli indirizzi che rimbalzano prima di inviare
---

## Cos'è un mailer-daemon?

Un server di posta è il computer che invia e riceve le email per un dominio. Il dominio è la parte dell'indirizzo dopo la @.

Un daemon è un programma che gira in sottofondo su un server. Nessuno lo avvia a mano. Il mailer-daemon è il programma che gestisce le email che non possono essere consegnate.

Quando la tua email viene rifiutata, il mailer-daemon ti invia un avviso. Il mittente dell'avviso di solito è `MAILER-DAEMON@` seguito dal dominio del server. A volte è `postmaster@`.

L'avviso si chiama [rapporto di mancato recapito](/glossary/ndr). Ti dice tre cose: quale indirizzo ha fallito, quando ha fallito e perché.

## Un esempio semplice

Elena lavora in un'agenzia di viaggi. Invia un preventivo a un nuovo cliente, roberto@example.com. Ma scrive male l'indirizzo: robreto@example.com.

1. Il server di posta di Elena invia l'email al server di example.com.
2. Il server di example.com controlla le sue caselle. Non esiste nessun "robreto".
3. Il server rifiuta l'email con il codice `550 5.1.1`.
4. Il mailer-daemon del server di Elena prepara un avviso.
5. Pochi secondi dopo, Elena riceve un'email da `MAILER-DAEMON@`. L'oggetto dice che il messaggio non è stato consegnato.
6. Elena legge il codice, corregge l'indirizzo e invia di nuovo.

Il messaggio del mailer-daemon non è spam. È un avviso utile. Ti dice che una tua email non è arrivata.

## Come leggere il messaggio

La parte più importante del messaggio è il codice. Cerca un numero di tre cifre, poi un numero con i punti. Esempio: `550 5.1.1`.

| il codice inizia con | cosa significa | cosa fare |
|---|---|---|
| **5** | è un [hard bounce](/glossary/hard-bounce): l'indirizzo non esiste, oppure il server ha bloccato la tua email | non inviare di nuovo finché non sai quale dei due casi è |
| **4** | è un [soft bounce](/glossary/soft-bounce): la casella è piena o il server è occupato | niente, il tuo server di posta riprova da solo |

Un bounce è un'email che torna indietro perché non è stata consegnata. Il testo accanto al codice lo scrive il server di destinazione. Due esempi reali:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`. Cioè l'account che hai cercato di raggiungere non esiste.
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. La documentazione Microsoft dice che significa "the recipient's address doesn't exist", cioè l'indirizzo del destinatario non esiste.

## Messaggi del mailer-daemon per email che non hai inviato

A volte ricevi un avviso del mailer-daemon per un'email che non hai mai inviato. Questo si chiama [backscatter](/glossary/backscatter).

Ecco cosa succede:

1. Uno spammer invia migliaia di email.
2. Nel campo Da mette il tuo indirizzo, invece del suo.
3. Molte di quelle email vanno a indirizzi che non esistono.
4. I server rispondono con avvisi di rimbalzo. Gli avvisi vanno all'indirizzo nel campo Da, cioè a te.

Il tuo account non è stato violato. La soluzione sta nel tuo dominio. Pubblica i record SPF, DKIM e DMARC. Sono impostazioni pubbliche del dominio che dicono quali server possono inviare email a tuo nome. Con questi record, i server di destinazione possono rifiutare le email false. Così non mandano più gli avvisi di rimbalzo a te.

## Perché conta per chi invia

Ogni messaggio del mailer-daemon è un bounce. I provider di posta, come Gmail o Outlook, contano quante delle tue email vanno a indirizzi che non esistono. Molti avvisi `5.1.1` mostrano che non hai controllato la tua lista. Allora il provider si fida meno di te. Più email finiscono nello spam.

Se dopo una campagna ricevi decine di messaggi dal mailer-daemon, la tua lista contiene molti indirizzi morti.

## Come aiuta un verificatore

Un verificatore chiede al server di destinazione se accetta email per un indirizzo. Lo fa prima che tu invii qualsiasi cosa. Il server dà lo stesso codice che il mailer-daemon ti manderebbe più tardi. La differenza è che nessuna email è stata inviata, quindi la tua reputazione non ne risente.

Puoi controllare un singolo indirizzo con la [verifica email](/email-checker), come quello scritto male da Elena. Per una lista intera, usa la [verifica email in blocco](/bulk-email-verifier). La verifica trova gli indirizzi che non esistono, ma non ferma il backscatter. Per quello servono i record del tuo dominio. Il nostro [servizio di verifica email](/) riduce i messaggi del mailer-daemon causati da indirizzi sbagliati.
