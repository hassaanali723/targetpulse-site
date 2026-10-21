---
title: Return-Path
description: Cos'è l'indirizzo Return-Path, in cosa è diverso dall'indirizzo Da, dove vanno i messaggi di rimbalzo e perché SPF e DMARC lo controllano. Con un esempio semplice.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: Il Return-Path è l'indirizzo dove vanno i messaggi di rimbalzo. Lo imposta il server che invia, e spesso è diverso dall'indirizzo Da che vedi nella tua casella. SPF controlla il dominio del Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Rimuovi gli indirizzi morti prima che rimbalzino
---

## Cos'è il Return-Path?

Il Return-Path è l'indirizzo dove vanno i messaggi di rimbalzo. Un messaggio di rimbalzo è l'avviso automatico che un server invia quando un'email non può essere consegnata.

Ogni email ha due indirizzi del mittente. Il primo è l'indirizzo **Da**. È il nome e l'indirizzo che il lettore vede nella sua casella. Il secondo è il **Return-Path**. I lettori non lo vedono. Lo usano i server di posta.

Pensa a una lettera di carta. La lettera dentro la busta ha il tuo nome in alto. Quello è l'indirizzo Da. Sulla busta c'è l'indirizzo del mittente in un angolo. Le poste lo usano solo quando non possono consegnare la lettera. Quello è il Return-Path.

Il Return-Path si chiama anche mittente della busta (envelope sender) o indirizzo di rimbalzo (bounce address). Il server che invia lo comunica al server di destinazione all'inizio della consegna. Il server di destinazione poi lo scrive in una riga in cima all'email che inizia con `Return-Path:`.

## Un esempio semplice

Ecco come funziona il Return-Path quando un'email rimbalza.

1. **Tommaso invia una newsletter.** Tommaso ha una panetteria. Invia una newsletter mensile tramite un provider di servizi email. Un provider è un'azienda che invia email in massa per te.
2. **Vengono impostati due indirizzi.** L'indirizzo Da è tom@bakery.example. Il provider imposta il Return-Path sul proprio indirizzo di rimbalzo, per esempio bounces@mail.provider.example.
3. **Una cliente ha cambiato lavoro.** Una cliente della lista ha cambiato azienda. Il suo vecchio indirizzo non esiste più.
4. **Il rimbalzo va al Return-Path.** Il server di destinazione invia l'avviso di rimbalzo a bounces@mail.provider.example, non a Tommaso.
5. **Il provider lo gestisce.** Il provider legge il rimbalzo e smette di inviare a quell'indirizzo. Tommaso non vede mai l'avviso.

Per questo i rimbalzi delle newsletter spesso non arrivano nella tua casella. Vanno al Return-Path, e li gestisce il tuo provider.

## Return-Path e indirizzo Da a confronto

| | Indirizzo Da | Return-Path |
|---|---|---|
| **Chi lo vede** | Il lettore, nella sua casella | I server di posta |
| **Chi lo imposta** | Tu, o il tuo programma di posta | Il server che invia |
| **A cosa serve** | Mostrare chi ha inviato l'email | Ricevere i messaggi di rimbalzo |
| **Controllato da SPF** | No | Sì |

I due indirizzi possono essere uguali. Quando invii una normale email da Gmail o Outlook, di solito lo sono. Quando invii tramite un provider, di solito sono diversi.

## Come trovare il Return-Path di un'email

Apri le intestazioni complete dell'email. In Gmail, apri l'email, fai clic sui tre puntini e scegli **Mostra originale**. In Outlook, apri le proprietà del messaggio. Cerca vicino all'inizio una riga come questa:

`Return-Path: <bounces@mail.provider.example>`

## Perché conta per SPF e DMARC

[SPF](/glossary/spf) è una regola sul tuo dominio che elenca i server autorizzati a inviare le tue email. SPF controlla il dominio del Return-Path. Non controlla l'indirizzo Da.

[DMARC](/glossary/dmarc) aggiunge un secondo controllo. Verifica se il dominio che ha superato SPF corrisponde al dominio dell'indirizzo Da. Se il tuo provider usa un proprio dominio per il Return-Path, SPF può passare per il provider senza corrispondere al tuo dominio Da.

Molti provider ti permettono di impostare un Return-Path sul tuo dominio. Spesso si chiama dominio di rimbalzo personalizzato (custom bounce domain). Così SPF passa per il tuo dominio, e DMARC può contare quel risultato.

**Esempio:** l'indirizzo Da di Tommaso è sul dominio bakery.example. Il suo provider gli permette di impostare il Return-Path su bounces.bakery.example. Ora il dominio che supera SPF corrisponde al dominio dell'indirizzo Da.

## Come aiuta un verificatore

Ogni rimbalzo della tua lista va al Return-Path. Il tuo provider li conta. Quando ne tornano troppi, molti provider sospendono l'account o ti chiedono di pulire la lista.

La [verifica email](/email-checker) chiede al server di destinazione se un indirizzo esiste prima che tu invii qualsiasi cosa. Gli indirizzi morti vengono rimossi prima, quindi molti meno rimbalzi arrivano al Return-Path.
