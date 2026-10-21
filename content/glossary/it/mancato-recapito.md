---
title: Rapporto di mancato recapito (NDR)
description: Cos'è un rapporto di mancato recapito, chi lo invia, come leggere il codice e le parti al suo interno e cosa fare quando ne ricevi uno. Con un esempio semplice.
slug: mancato-recapito
date: 2026-10-22
updated: 2026-10-22
keyword: rapporto di mancato recapito
short: Un rapporto di mancato recapito, o NDR, è un'email automatica che ti dice che un messaggio che hai inviato non è stato consegnato. Indica l'indirizzo che ha fallito e dà un codice che spiega il motivo. Quasi tutti lo chiamano messaggio di rimbalzo.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Rimuovi gli indirizzi che ti manderebbero un NDR
---

## Cos'è un rapporto di mancato recapito?

Un rapporto di mancato recapito, o NDR (non-delivery report), è un'email automatica che ti dice che un messaggio non è stato consegnato. Arriva da pochi secondi a qualche ora dopo l'invio.

Quasi tutti lo chiamano messaggio di rimbalzo. Il nome tecnico negli standard email è delivery status notification, o DSN, cioè notifica sullo stato di consegna. I tre nomi indicano la stessa cosa.

Un NDR di solito arriva da un indirizzo come `MAILER-DAEMON@` o `postmaster@`. Sono mittenti automatici su un server di posta. Nessuno scrive questi messaggi a mano. Li crea un programma chiamato [mailer-daemon](/glossary/mailer-daemon).

## Un esempio semplice

Ecco come un NDR arriva a te.

1. **Anna invia una fattura.** Anna è una contabile. Invia per email una fattura a un cliente, mark@oldfirm.example.
2. **L'indirizzo non c'è più.** Mark ha lasciato quell'azienda l'anno scorso. La sua casella è stata cancellata.
3. **Il server la rifiuta.** Il server di posta di oldfirm.example non ha nessuna casella per Mark. Rifiuta l'email.
4. **Arriva l'NDR.** Un minuto dopo, Anna riceve un'email con un oggetto come "Non recapitabile" o "Delivery Status Notification (Failure)".
5. **Anna legge il codice.** Dentro trova `550 5.1.1`. Questo codice significa che l'indirizzo non esiste.
6. **Anna risolve.** Chiede al cliente un nuovo contatto e invia lì la fattura.

L'NDR non ha causato il problema. Ha solo avvisato Anna.

## Cosa contiene un NDR

La maggior parte degli NDR ha le stesse parti, anche se ogni programma di posta li mostra in modo diverso.

| Parte | Cosa mostra |
|---|---|
| **Indirizzo che ha fallito** | L'indirizzo che non ha potuto ricevere la tua email |
| **Codice di errore** | Un codice breve, per esempio `550 5.1.1`, che spiega il problema |
| **Messaggio del server** | Una frase del server di destinazione, per esempio "user unknown", cioè utente sconosciuto |
| **La tua email originale** | Spesso è allegata, così vedi cosa non è arrivato |

## Come leggere il codice

La prima cifra del codice ti dice il tipo di problema.

| Prima cifra | Tipo | Cosa significa | Cosa fare |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | Il problema è permanente. L'indirizzo potrebbe non esistere, oppure il server ti ha bloccato. | Non inviare di nuovo a quell'indirizzo finché non sai quale dei due casi è. |
| **4** | [Soft bounce](/glossary/soft-bounce) | Il problema è temporaneo. La casella potrebbe essere piena o il server occupato. | Aspetta. Il tuo server di posta riprova da solo. |

Due esempi comuni:

- `550 5.1.1` significa che l'indirizzo non esiste. Rimuovilo dalla tua lista.
- `452 4.2.2` significa che la casella è piena. Riprova più tardi.

## Quando ricevi un NDR per un'email che non hai inviato

A volte arriva un NDR per un'email che non hai mai scritto. Questo si chiama [backscatter](/glossary/backscatter). Uno spammer ha messo il tuo indirizzo nel campo del mittente, l'email non è stata consegnata e l'NDR è arrivato a te. Di solito il tuo account non è stato violato. Se pubblichi i record SPF, DKIM e DMARC per il tuo dominio, i server di destinazione possono invece rifiutare le email false.

## Perché gli NDR contano per chi invia

Ogni NDR da un indirizzo morto pesa contro di te. I provider di posta come Google e Microsoft guardano quante delle tue email vanno a indirizzi che non esistono. Molti NDR con `5.1.1` dicono loro che la tua lista è vecchia.

**Esempio:** un negozio invia un'offerta a 5.000 vecchi contatti. Se tornano 400 NDR, sono l'8% della lista. Molte piattaforme di invio controllano o sospendono gli account con numeri come questi. Questi numeri sono solo un esempio.

## Come aiuta un verificatore

La [verifica email](/email-checker) chiede al server di destinazione informazioni su un indirizzo prima che tu invii. Il server dà la stessa risposta che metterebbe in un NDR. La differenza è che nessuna email è stata inviata, quindi niente rimbalza e la tua reputazione non ne risente.
