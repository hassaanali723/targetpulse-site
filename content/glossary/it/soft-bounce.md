---
title: Soft bounce
description: Cos'è un soft bounce, le cause comuni con i loro codici, per quanto tempo gli strumenti riprovano e quando togliere un indirizzo dalla lista.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: Un soft bounce è un'email che non è stata consegnata questa volta per un problema temporaneo. L'indirizzo è reale. La casella è piena, il server è occupato, oppure il server ti ha chiesto di riprovare più tardi.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Scopri quali dei tuoi indirizzi sono reali prima di inviare
---

## Cos'è un soft bounce

Un soft bounce è un errore di consegna temporaneo. Il server di destinazione non ha consegnato la tua email questa volta. Ti permette di riprovare più tardi.

Lo standard delle email RFC 5321 chiama questo caso risposta negativa temporanea. Il codice nel messaggio di rimbalzo inizia con 4. Esempio: `452 4.2.2`. Un codice che inizia con 5 è un [hard bounce](/glossary/hard-bounce). Un hard bounce è permanente.

## Cause comuni

- **La casella è piena.** Gmail risponde `452 4.2.2 The recipient's inbox is out of storage space`. La persona deve cancellare qualche email.
- **Troppe email troppo in fretta.** Gmail risponde `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail risponde `421 4.7.28` quando arriva troppa posta dal tuo indirizzo IP.
- **Greylisting.** Il server rifiuta la prima email di un mittente che non conosce. Accetta la stessa email al secondo tentativo. Vedi [greylisting](/glossary/greylisting).
- **Il server è fermo o lento.** Un codice `421` significa che il server non è disponibile. Un codice `4.4.1` o `4.4.2` significa che la connessione è fallita o è scaduta.
- **L'email è scaduta.** Un codice `4.4.7` significa che il tuo server ha riprovato per tutto il periodo previsto e poi si è fermato. La RFC 5321 dice che i server dovrebbero riprovare per circa quattro o cinque giorni.

## Cosa fa il tuo strumento di invio

Il tuo strumento di invio riprova i soft bounce in automatico. Ogni strumento ha le sue regole.

- SendGrid riprova fino a 72 ore.
- HubSpot segna l'email come in attesa fino a 72 ore. Poi registra un soft bounce.
- Mailchimp trasforma un indirizzo in hard bounce dopo 7 soft bounce se il contatto non ha mai aperto un'email. Se il contatto ha aperto un'email in passato, il limite è 15 soft bounce.

Lo stesso soft bounce può avere etichette diverse in strumenti diversi. Leggi il codice nel messaggio di rimbalzo, non l'etichetta.

## Cosa fare con un soft bounce

All'inizio niente. Lascia che il tuo strumento di invio riprovi. Un soft bounce è normale.

Rimuovi un indirizzo che fa soft bounce per più invii di fila. Una casella che risulta piena a ogni invio per sei settimane non è piena. Nessuno la usa. Il limite di 7 soft bounce di Mailchimp è una regola sicura.

## Come lo gestisce un verificatore

Un verificatore si collega al server di posta prima che tu invii. Se il server risponde con un codice 4xx, il verificatore riprova. Se la risposta resta la stessa, il verificatore marca l'indirizzo come sconosciuto, non come valido. Sconosciuto significa che la casella esiste ma potrebbe non ricevere email. La guida [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce) spiega ogni codice e cosa farne.
