---
title: Email catch-all
description: Cos'è un dominio email catch-all, perché le aziende lo configurano, perché un normale controllo email non può confermare i suoi indirizzi e cosa farne.
slug: email-catch-all
date: 2026-10-22
updated: 2026-10-22
keyword: email catch-all
short: Un dominio email catch-all accetta la posta inviata a qualsiasi indirizzo, anche a nomi che non esistono. Poiché il server dice sì a tutto, un normale controllo email non può dire se una casella specifica è reale.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Ottieni una risposta vera sugli indirizzi catch-all
---

## Cos'è un'email catch-all?

Un dominio email catch-all accetta la posta inviata a qualsiasi indirizzo su quel dominio. Non serve che l'indirizzo esista.

La maggior parte dei domini rifiuta le email inviate a un nome che non hanno. Un dominio catch-all no. Accetta l'email e la mette in un'unica casella condivisa, oppure a volte la cancella senza avvisare nessuno.

Altri nomi per la stessa impostazione sono **accept-all** e **dominio catch-all**. Molti strumenti di verifica segnano questi indirizzi come "catch-all", "accept-all" o "rischioso".

## Un esempio semplice

1. **Acme configura un catch-all.** Acme è una piccola azienda con il dominio acme.example. La responsabile dell'ufficio attiva il catch-all, così nessuna email dei clienti va persa.
2. **Sara scrive a una persona reale.** Invia un'email a jon@acme.example. Jon lavora lì. Riceve l'email.
3. **Sara fa un errore di battitura.** La volta dopo scrive jonn@acme.example. Questa persona non esiste.
4. **Il server dice comunque sì.** L'email non rimbalza. Finisce nella casella condivisa, e forse nessuno la legge.

Sara non vede nessun errore, quindi pensa che entrambe le email siano arrivate. Solo una è arrivata a Jon.

## Perché le aziende usano il catch-all

Le aziende attivano il catch-all per non perdere email. I clienti fanno errori di battitura. I nomi di ex dipendenti continuano a ricevere posta. Un catch-all tiene tutto in un unico posto.

## Perché il catch-all è un problema per la verifica email

Un normale controllo email fa al server una sola domanda: "Accetti posta per questo indirizzo?" Su un dominio catch-all, la risposta è sempre sì. Una persona reale e un nome inventato ricevono la stessa risposta.

Quindi un controllo di base non può confermare la casella. Può solo dire che il dominio accetta tutto.

Questo conta soprattutto per le liste B2B. In un test pubblicato su 10.000 email aziendali reali, il 28% era su domini catch-all. Il test è stato fatto da LeadMagic, un'azienda che vende verifica email, quindi consideralo il test di un fornitore.

## Cosa fare con gli indirizzi catch-all

Hai tre scelte:

| Scelta | Cosa succede |
|---|---|
| **Rimuoverli** | Nessun rischio, ma perdi anche contatti reali |
| **Inviare a questi indirizzi** | Alcune email arrivano a persone reali, altre vanno perse o rimbalzano più tardi |
| **Controllarli più a fondo** | Un verificatore che va oltre il controllo di base separa gli indirizzi reali da quelli falsi |

## Come aiuta un verificatore

Giggal.ai esegue la [verifica catch-all](/catch-all-verification) in ogni controllo. Usa segnali aggiuntivi per dare un risultato reale, consegnabile o non consegnabile, invece di un'etichetta "rischioso". Per una guida più lunga con altri esempi, leggi [cos'è un indirizzo email catch-all](/blog/what-is-a-catch-all-email-address).
