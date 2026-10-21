---
title: Backscatter
description: Cos'è il backscatter, perché ricevi messaggi di rimbalzo per email che non hai mai inviato, se il tuo account è stato violato e come fermarlo sul tuo dominio.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter email
short: Il backscatter sono i messaggi di rimbalzo che ricevi per email che non hai mai inviato. Uno spammer ha messo il tuo indirizzo nel campo del mittente delle sue email. Quando quelle email non sono state consegnate, i messaggi di rimbalzo sono tornati a te.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Tieni bassi i tuoi rimbalzi con una lista pulita
---

## Cos'è il backscatter?

Il backscatter sono i messaggi di rimbalzo che ricevi per email che non hai mai inviato.

Tutto parte dallo spam. Uno spammer invia migliaia di email e scrive il tuo indirizzo nel campo del mittente. Molte di quelle email vanno a indirizzi che non esistono. I server di destinazione mandano un messaggio di rimbalzo all'indirizzo del mittente. Quell'indirizzo è il tuo, quindi i rimbalzi arrivano nella tua casella.

Un messaggio di rimbalzo è l'avviso automatico che un server invia quando un'email non può essere consegnata. Il suo nome formale è [rapporto di mancato recapito](/glossary/ndr).

## Un esempio semplice

Ecco come il backscatter raggiunge una piccola attività.

1. **Lena ha un negozio di fiori.** Il suo indirizzo è hello@flowers.example.
2. **Uno spammer copia il suo indirizzo.** Lo spammer invia 10.000 email false. Ognuna dice di arrivare da hello@flowers.example.
3. **Molte email falliscono.** Circa un terzo va a indirizzi che non esistono.
4. **Alcuni server accettano prima e controllano dopo.** Questi server prendono l'email, poi scoprono che quella casella non esiste.
5. **I rimbalzi vanno a Lena.** Quei server inviano gli avvisi di rimbalzo a hello@flowers.example.
6. **La casella di Lena si riempie.** Una mattina trova centinaia di messaggi "Non recapitabile" per email che non ha mai scritto.

Questi numeri sono solo un esempio. Lo schema è comune.

## Il mio account è stato violato?

Di solito no. Per inviare un'email con un falso indirizzo del mittente non serve accedere al tuo account. È come scrivere l'indirizzo di un'altra persona come mittente su una busta. Nessuno ha avuto bisogno della sua chiave per farlo.

Controlla la cartella Posta inviata. Se le email non ci sono, il tuo account non le ha inviate. Se ci sono, cambia la password e attiva la verifica in due passaggi.

## Perché succede

Il backscatter succede perché alcuni server accettano prima un'email e controllano l'indirizzo dopo. Quando il controllo fallisce, mandano un rimbalzo all'indirizzo del mittente. Non possono sapere che l'indirizzo del mittente era falso.

I server configurati bene controllano l'indirizzo mentre l'altro server è ancora collegato. Se l'indirizzo non esiste, rifiutano subito l'email. Non viene creato nessun messaggio di rimbalzo, quindi nessun backscatter arriva a nessuno.

## Come fermarlo sul tuo dominio

Non puoi impedire agli spammer di scrivere il tuo indirizzo. Puoi fare in modo che i server di destinazione rifiutino le loro email false. Per farlo servono tre record sul tuo dominio.

| Record | Cosa fa |
|---|---|
| [SPF](/glossary/spf) | Elenca i server autorizzati a inviare email per il tuo dominio |
| [DKIM](/glossary/dkim) | Aggiunge una firma che dimostra che un'email arriva davvero da te |
| [DMARC](/glossary/dmarc) | Dice ai server di destinazione cosa fare con le email che non superano quei controlli |

Inizia DMARC con `p=none` e leggi i report. Quando passano solo i tuoi servizi, passa a `p=quarantine` e poi a `p=reject`. Con `p=reject`, i server rifiutano le email false invece di mandarti i rimbalzi.

Fino ad allora, puoi spostare i messaggi di rimbalzo in una cartella con un filtro. Non rispondere a questi messaggi.

## Perché interessa a chi gestisce un server

Se gestisci un server di posta, controlla come tratta gli indirizzi sconosciuti. Un server che accetta la posta e la fa rimbalzare dopo manda backscatter a persone che non c'entrano. Alcune blacklist elencano i server che lo fanno, per esempio la lista di backscatterer.org. Se il tuo server è in una blacklist, le tue email potrebbero non essere consegnate.

## Come aiuta un verificatore

La [verifica email](/) non ferma il backscatter, perché non sei tu ad aver inviato quelle email. Ti aiuta con i rimbalzi che causi tu. Rimuovi gli indirizzi morti dalla tua lista prima di inviare, così ogni rimbalzo nella tua casella è uno che sai spiegare.
