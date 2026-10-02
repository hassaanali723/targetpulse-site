---
title: Record SPF
description: Cos'è un record SPF, com'è fatto, come lo controllano i server, il limite di dieci ricerche DNS e i codici di rimbalzo che ricevi se fallisce.
slug: record-spf
date: 2026-09-29
updated: 2026-09-29
keyword: record spf
short: Un record SPF è un record DNS sul tuo dominio che elenca i server autorizzati a inviare email per quel dominio. I server di destinazione lo controllano per confermare che un'email che dichiara di venire dal tuo dominio sia stata inviata da uno dei tuoi server.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: L'autenticazione risolve un tipo di bounce. La verifica risolve l'altro
---

## Cos'è un record SPF

SPF sta per Sender Policy Framework. È definito nella RFC 7208. Un record SPF è un [record TXT del DNS](/glossary/dns-txt-record) sul tuo dominio. Elenca i server autorizzati a inviare email usando il tuo nome di dominio.

Un record SPF semplice è così:

`v=spf1 include:_spf.google.com -all`

Ogni parte ha un significato:

- `v=spf1` dice che questo è un record SPF.
- `include:_spf.google.com` dice che ogni server elencato da Google è autorizzato a inviare per questo dominio.
- `-all` dice di rifiutare le email da qualsiasi altro server.
- `~all` è una chiusura più morbida. Dice di trattare le email da altri server come sospette, senza rifiutarle.

## Come lo controllano i server di destinazione

Quando arriva un'email, il server di destinazione legge il dominio nel [Return-Path](/glossary/return-path). Il Return-Path è l'indirizzo a cui vengono inviati i bounce. Il server recupera il record SPF di quel dominio. Poi controlla se l'indirizzo IP che ha consegnato l'email è nel record.

- **Pass.** L'indirizzo IP è nel record. L'email arriva da un server autorizzato.
- **Fail.** L'indirizzo IP non è nel record e il record finisce con `-all`. Il server può rifiutare l'email.
- **Softfail.** L'indirizzo IP non è nel record e il record finisce con `~all`. Il server accetta l'email ma la segna come sospetta.

Microsoft Exchange Online rifiuta un'email che fallisce con `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail risponde `550 5.7.26` per un'email senza nessuna autenticazione. Entrambi i codici iniziano con 5. Il tuo strumento di invio li registra come [hard bounce](/glossary/hard-bounce), anche se l'indirizzo va bene.

## Chi ha bisogno di un record SPF

Chiunque invii email in massa ne ha bisogno. Le linee guida per i mittenti di Google richiedono SPF e DKIM a chi invia 5.000 o più messaggi al giorno a Gmail. Richiedono anche DMARC. Microsoft richiede gli stessi tre record ai domini che inviano più di 5.000 email al giorno a Outlook.com, Hotmail e Live. Microsoft ha iniziato a imporlo il 5 maggio 2025.

Se invii meno di così, i record contano comunque. Senza, la tua email ha più probabilità di finire nella cartella spam.

## Il limite di dieci ricerche DNS

La RFC 7208 limita un controllo SPF a dieci ricerche DNS. Ogni `include:`, `a`, `mx` e `redirect` nel tuo record conta come una ricerca. Contano anche le ricerche dentro i record che includi. Se il totale supera dieci, il controllo restituisce un errore permanente. La maggior parte dei server di destinazione tratta questo errore come un fail.

Questo è il modo più comune in cui un record SPF si rompe. Un'azienda aggiunge al record uno strumento email dopo l'altro. Quando viene aggiunta l'undicesima ricerca, l'intero record smette di funzionare.

## SPF è uno di tre record

- SPF controlla quale server ha inviato l'email.
- [DKIM](/glossary/dkim) controlla che l'email non sia stata modificata dopo l'invio.
- [DMARC](/glossary/dmarc) collega entrambi i controlli all'indirizzo Da che il lettore vede. Dice anche ai server di destinazione cosa fare quando i controlli falliscono.

Un dominio ha bisogno di tutti e tre. La guida [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce) mostra come appaiono i codici di errore in un report di bounce.
