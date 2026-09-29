---
title: Hard bounce
description: Cos'è un hard bounce, quali codici indicano un hard bounce, i due tipi di hard bounce e cosa fare con ciascun tipo.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: hard bounce
short: Un hard bounce è un'email che il server di destinazione ha rifiutato in modo permanente. L'indirizzo non esiste, il dominio non esiste, oppure il server ha bloccato la tua email. Se invii di nuovo la stessa email, fallisce di nuovo.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Trova gli indirizzi che farebbero hard bounce prima di inviare
---

## Cos'è un hard bounce

Un hard bounce è un errore di consegna permanente. Il server di destinazione ha rifiutato la tua email e la rifiuterà di nuovo se la rispedisci.

Lo standard delle email RFC 5321 chiama questo caso risposta negativa permanente. Il codice nel messaggio di rimbalzo inizia con 5. Esempio: `550 5.1.1`. Un codice che inizia con 4 è un [soft bounce](/glossary/soft-bounce). Un soft bounce è temporaneo.

## I due tipi di hard bounce

Entrambi i tipi compaiono come "hard bounce" nel report della campagna. Hanno cause diverse e soluzioni diverse.

**Tipo 1: l'indirizzo è sbagliato.** La casella non esiste, il dominio non esiste, oppure l'indirizzo ha un errore di scrittura. Gmail risponde `550 5.1.1 The email account that you tried to reach does not exist`. Microsoft risponde `5.1.1 Bad destination mailbox address`. Anche un indirizzo chiuso quando un dipendente ha lasciato l'azienda rientra in questo gruppo.

**Tipo 2: la tua email è bloccata.** L'indirizzo è reale, ma il server rifiuta le email che arrivano da te. Questi codici iniziano con `5.7`. Il `550 5.7.26` di Gmail significa che il tuo dominio non è autenticato. Il `5.7.23` di Microsoft significa che la tua email non ha superato il controllo SPF. Il tuo strumento di invio conta questi codici come hard bounce perché iniziano con 5. Ma l'indirizzo va bene. Il problema è la configurazione della tua email.

## Perché gli hard bounce contano

I provider di posta contano quante volte invii a indirizzi che non esistono. Molti hard bounce indicano che la tua lista non è stata controllata. Amazon SES pubblica i suoi limiti. Mette un account sotto revisione al 5 percento di bounce. Può sospendere l'account al 10 percento. Consiglia di restare sotto il 2 percento.

## Cosa fare con un hard bounce

Se il codice è `5.1.1`, `5.1.2` o un altro errore di indirizzo, rimuovi subito l'indirizzo dalla lista. Non inviare più a quell'indirizzo. Mailchimp rimuove questi indirizzi dalla tua audience in automatico. Amazon dice ai mittenti di rimuoverli "immediately", cioè subito.

Se il codice inizia con `5.7`, tieni l'indirizzo. Sistema i record SPF, DKIM e DMARC, oppure la tua reputazione di mittente. Poi invia di nuovo allo stesso indirizzo.

La tabella completa dei codici, con cosa fare per ciascuno, è nella guida [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Come lo gestisce un verificatore

Un verificatore fa al server di destinazione la stessa domanda, ma prima dell'invio. Un [verificatore di indirizzi email](/email-checker) si collega al server di posta e chiede se accetta email per quell'indirizzo esatto. Se il server risponde `550 5.1.1`, il verificatore marca l'indirizzo come non valido. Lo togli prima della campagna. Nessuna email è stata inviata, quindi la tua reputazione non ne risente.
