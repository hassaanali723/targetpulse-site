---
title: Record SPF
description: Cos'è un record SPF, com'è fatto, come lo controllano i server, il limite di dieci ricerche DNS e i codici di rimbalzo che ricevi se fallisce.
slug: record-spf
date: 2026-09-29
updated: 2026-10-12
keyword: record spf
short: Un record SPF è un'impostazione pubblica del tuo dominio che elenca i server autorizzati a inviare email a tuo nome. I server che ricevono la tua email lo controllano. Così confermano che l'email arriva davvero da uno dei tuoi server.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: L'autenticazione risolve un tipo di bounce. La verifica risolve l'altro
---

## Cos'è un record SPF?

SPF sta per Sender Policy Framework. È definito nella RFC 7208, uno standard pubblico di internet.

Prima, alcune parole che servono per capire.

- **Dominio:** la parte dell'indirizzo email dopo la @. In info@example.com il dominio è example.com.
- **DNS:** l'elenco pubblico di impostazioni di ogni dominio. Ogni server su internet può leggerlo. Ogni riga si chiama record.
- **Indirizzo IP:** il numero che identifica un server su internet.

Un record SPF è un [record TXT del DNS](/glossary/dns-txt-record) sul tuo dominio. Un record TXT contiene testo semplice. Il record SPF elenca i server autorizzati a inviare email usando il tuo dominio.

Un record SPF semplice è fatto così:

`v=spf1 include:_spf.google.com -all`

Ogni parte ha un significato:

- `v=spf1` dice che questo è un record SPF.
- `include:_spf.google.com` dice che ogni server elencato da Google può inviare per questo dominio.
- `-all` dice di rifiutare le email da qualsiasi altro server.
- `~all` è una chiusura più morbida. Dice di trattare le email da altri server come sospette, senza rifiutarle.

## Un esempio semplice

Un'azienda usa il dominio example.com e invia le email con Google Workspace. Il suo record SPF è quello qui sopra.

1. Federica, dell'azienda, invia un'email a un cliente su Outlook.com.
2. L'email parte da un server di Google.
3. Il server di Outlook.com riceve l'email e legge il dominio: example.com.
4. Legge il record SPF di example.com nel DNS.
5. Il record dice che i server di Google sono autorizzati. L'indirizzo IP del mittente è di Google.
6. Il controllo passa. L'email continua il suo percorso.

Ora un truffatore invia un'email falsa da un suo server, fingendo di essere example.com. Il suo indirizzo IP non è nel record SPF. Il record finisce con `-all`, quindi il server di Outlook.com può rifiutare l'email.

## Come lo controllano i server di destinazione

Quando arriva un'email, il server di destinazione legge il dominio nel [Return-Path](/glossary/return-path). Il Return-Path è l'indirizzo a cui tornano i bounce, cioè gli avvisi di mancata consegna. Il server legge il record SPF di quel dominio. Poi controlla se l'indirizzo IP che ha consegnato l'email è nel record.

| risultato | cosa è successo | cosa fa il server |
|---|---|---|
| **Pass** | l'indirizzo IP è nel record | l'email arriva da un server autorizzato |
| **Fail** | l'indirizzo IP non è nel record, che finisce con `-all` | può rifiutare l'email |
| **Softfail** | l'indirizzo IP non è nel record, che finisce con `~all` | accetta l'email ma la segna come sospetta |

Microsoft Exchange Online rifiuta un'email che fallisce con questo codice: `5.7.23 The message was rejected because of Sender Policy Framework violation`. Cioè il messaggio è stato rifiutato per una violazione SPF. Gmail risponde `550 5.7.26` per un'email senza nessuna autenticazione.

Entrambi i codici iniziano con 5. Il tuo strumento di invio li registra come [hard bounce](/glossary/hard-bounce), cioè rifiuti permanenti. Ma l'indirizzo del destinatario va bene. Il problema è il tuo record SPF.

## Chi ha bisogno di un record SPF

Chiunque invii email in massa ne ha bisogno.

- **Google:** le linee guida per i mittenti richiedono SPF e DKIM a chi invia 5.000 o più messaggi al giorno a Gmail. Richiedono anche DMARC.
- **Microsoft:** richiede gli stessi tre record ai domini che inviano più di 5.000 email al giorno a Outlook.com, Hotmail e Live. Microsoft ha iniziato a imporlo il 5 maggio 2025.

Se invii meno email, il record SPF conta comunque. Senza, la tua email ha più probabilità di finire nella cartella spam.

## Il limite di dieci ricerche DNS

La RFC 7208 limita un controllo SPF a dieci ricerche DNS. Una ricerca DNS è una domanda che il server fa al DNS per leggere un'impostazione.

Ogni `include:`, `a`, `mx` e `redirect` nel tuo record SPF conta come una ricerca. Contano anche le ricerche dentro i record che includi. Se il totale supera dieci, il controllo restituisce un errore permanente. La maggior parte dei server di destinazione tratta questo errore come un fail.

Questo è il modo più comune in cui un record SPF si rompe. Ecco come succede:

1. Un'azienda usa Google Workspace per la posta. Il record SPF include Google.
2. Poi aggiunge uno strumento per la newsletter. Il record cresce.
3. Poi aggiunge un sistema per le fatture e uno per l'assistenza clienti.
4. Ogni strumento porta con sé altre ricerche.
5. Quando viene aggiunta l'undicesima ricerca, l'intero record smette di funzionare.

Da quel momento, anche le email normali dell'azienda possono fallire il controllo.

## SPF è uno di tre record

- **SPF** controlla quale server ha inviato l'email.
- [DKIM](/glossary/dkim) controlla che l'email non sia stata modificata dopo l'invio.
- [DMARC](/glossary/dmarc) collega entrambi i controlli all'indirizzo Da che il lettore vede. Dice anche ai server di destinazione cosa fare quando i controlli falliscono.

Un dominio ha bisogno di tutti e tre. La guida [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce) mostra come appaiono i codici di errore in un report di bounce.

## Record SPF e verifica email

Un record SPF e la verifica controllano due cose diverse. Il record SPF dimostra che l'email arriva da un server autorizzato. La verifica controlla che l'indirizzo del destinatario esista. Un'email che supera SPF rimbalza comunque se la casella non c'è più. Puoi controllare un indirizzo con la [verifica email](/email-checker) o tutta la lista con la [verifica email in blocco](/bulk-email-verifier), due strumenti del nostro [servizio di verifica email](/).
