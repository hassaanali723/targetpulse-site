---
title: Soft bounce
description: Cos'è un soft bounce, le cause comuni con i loro codici, per quanto tempo gli strumenti riprovano e quando togliere un indirizzo dalla lista.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Un soft bounce è un'email che questa volta non è stata consegnata per un problema temporaneo. L'indirizzo esiste, ma la casella è piena, il server è occupato o ti ha chiesto di riprovare più tardi.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Scopri quali dei tuoi indirizzi sono reali prima di inviare
---

## Cos'è un soft bounce?

Un soft bounce è un'email che non è stata consegnata questa volta, per un problema temporaneo. L'indirizzo di solito esiste. Il server di destinazione ti permette di riprovare più tardi.

Il server di destinazione è il computer che riceve le email per un indirizzo. Quando non consegna un'email, ti rimanda un messaggio automatico. Questo messaggio si chiama messaggio di rimbalzo, o bounce. Dentro c'è un codice.

Lo standard delle email, la RFC 5321, chiama questo caso "risposta negativa temporanea". Il codice di un soft bounce inizia con 4. Esempio: `452 4.2.2`.

Un codice che inizia con 5 indica invece un [hard bounce](/glossary/hard-bounce). Un hard bounce è permanente. L'indirizzo non esiste o il server ti ha bloccato.

## Un esempio semplice

Anna invia ogni mese una newsletter ai clienti del suo negozio di libri. Una cliente, Paola, non cancella mai le vecchie email.

1. Anna invia la newsletter a paola@example.com.
2. Il server di Paola controlla la sua casella. È piena.
3. Il server risponde con il codice `452 4.2.2`. Il numero 4 dice che il problema è temporaneo.
4. Lo strumento di invio di Anna registra un soft bounce.
5. Lo strumento riprova da solo qualche ora dopo.
6. Nel frattempo Paola ha cancellato delle email. Questa volta la newsletter arriva.

Anna non ha dovuto fare niente. Questo è il caso più comune.

## Cause comuni

- **La casella è piena.** Gmail risponde `452 4.2.2 The recipient's inbox is out of storage space`. Cioè la casella del destinatario non ha più spazio. La persona deve cancellare qualche email.
- **Troppe email troppo in fretta.** Gmail risponde `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Cioè la persona sta ricevendo email troppo velocemente. Gmail risponde invece `421 4.7.28` quando arriva troppa posta dal tuo indirizzo IP. L'indirizzo IP è il numero che identifica il server da cui invii.
- **Greylisting.** Il server rifiuta la prima email di un mittente che non conosce. Accetta la stessa email al secondo tentativo. Vedi [greylisting](/glossary/greylisting).
- **Il server è fermo o lento.** Un codice `421` significa che il server non è disponibile. Un codice `4.4.1` o `4.4.2` significa che la connessione è fallita o è scaduta.
- **L'email è scaduta.** Un codice `4.4.7` significa che il tuo server ha riprovato per tutto il tempo previsto, poi si è fermato. La RFC 5321 dice che i server dovrebbero riprovare per circa quattro o cinque giorni.

## Cosa fa il tuo strumento di invio

Il tuo strumento di invio riprova i soft bounce in automatico. Ogni strumento ha le sue regole.

| strumento | cosa fa con un soft bounce |
|---|---|
| SendGrid | riprova fino a 72 ore |
| HubSpot | segna l'email come in attesa fino a 72 ore, poi registra un soft bounce |
| Mailchimp | dopo 7 soft bounce trasforma l'indirizzo in hard bounce, se il contatto non ha mai aperto un'email |
| Mailchimp | se il contatto ha aperto un'email in passato, il limite è 15 soft bounce |

Lo stesso soft bounce può avere nomi diversi in strumenti diversi. Per questo conviene leggere il codice nel messaggio di rimbalzo, non l'etichetta.

## Cosa fare con un soft bounce

1. **All'inizio, niente.** Lascia che il tuo strumento di invio riprovi. Un soft bounce ogni tanto è normale.
2. **Guarda se si ripete.** Controlla se lo stesso indirizzo fa soft bounce a ogni invio.
3. **Rimuovi gli indirizzi che falliscono di continuo.** Un indirizzo che fa soft bounce per più invii di fila va tolto dalla lista.

**Esempio:** una casella risulta piena a ogni invio per sei settimane. Il problema non è lo spazio. Nessuno la usa più. Il limite di 7 soft bounce di Mailchimp è una regola sicura da seguire.

## Come lo gestisce un verificatore

Un verificatore si collega al server di posta prima che tu invii. Chiede se il server accetta email per quell'indirizzo. Se il server risponde con un codice 4xx, cioè un codice che inizia con 4, il verificatore riprova. Se la risposta resta la stessa, marca l'indirizzo come sconosciuto, non come valido. Sconosciuto significa che la casella potrebbe esistere, ma potrebbe non ricevere email.

Puoi controllare un indirizzo con il [verificatore email](/email-checker) o una lista intera con la [verifica email in blocco](/bulk-email-verifier). La verifica trova gli indirizzi che non esistono prima dell'invio. Non può svuotare una casella piena, quindi qualche soft bounce resterà sempre. Il nostro [servizio di verifica email](/) ti dice quali indirizzi sono reali. La guida [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce) spiega ogni codice e cosa farne.
