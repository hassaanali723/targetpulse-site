---
title: Email service provider (ESP)
description: Cos'è un email service provider, o piattaforma di email marketing, con esempi, la differenza con un provider di posta e perché controlla i tuoi bounce.
slug: email-service-provider
date: 2026-10-12
updated: 2026-10-12
keyword: piattaforma email marketing
short: Un email service provider, o ESP, è un'azienda che invia email per conto tuo, come newsletter o ricevute. Mailchimp, Brevo e SendGrid sono esempi di piattaforme di email marketing e di invio. Un ESP è diverso da un provider di posta come Gmail, che serve a ricevere e leggere le email.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Verifica la lista prima di caricarla sul tuo ESP
---

## Cos'è un email service provider?

Un email service provider, in breve ESP, è un'azienda il cui servizio invia email per conto tuo. In italiano si parla spesso di piattaforma di email marketing, o di piattaforma di invio. Con un ESP puoi inviare la stessa email a migliaia di persone. Puoi anche inviare in automatico email come ricevute e conferme d'ordine.

L'ESP ha i suoi server di invio. Un server è un computer sempre acceso che svolge un compito per molti utenti. Tu prepari l'email e la lista dei destinatari. L'ESP si occupa dell'invio e ti dice cosa è successo.

## Un esempio: la newsletter di una panetteria

La panetteria di Marco ha 3.000 clienti iscritti alla newsletter. Ogni mese Marco vuole inviare le novità e le offerte.

Inviare da Gmail non funziona bene. Gmail limita il numero di email che puoi inviare in un giorno. Non aggiunge un link di disiscrizione. Non ti dice quante persone hanno aperto l'email.

Allora Marco usa un ESP:

1. Crea un account sulla piattaforma e carica il file con i 3.000 indirizzi.
2. Prepara l'email con l'editor della piattaforma, con foto e testo.
3. Collega il dominio della panetteria. Così le email partono da newsletter@panetteriamarco.it.
4. Programma l'invio per il primo lunedì del mese.
5. Il giorno dopo legge il report. Vede quante email sono state consegnate, quante aperte e quante rimbalzate.

## Esempi di ESP

- **Mailchimp**: email marketing e newsletter.
- **Brevo**: email marketing, email transazionali e SMS.
- **SendGrid**: email inviate da applicazioni e siti, con anche funzioni di marketing.
- **Amazon SES**: il servizio di invio email di Amazon Web Services, pensato per gli sviluppatori.
- **Postmark**: specializzato in email transazionali.

## ESP e provider di posta: la differenza

I due termini si confondono spesso, ma indicano servizi diversi.

| Aspetto | ESP | Provider di posta |
| --- | --- | --- |
| A cosa serve | Inviare email a molte persone | Ricevere e leggere le proprie email |
| Esempi | Mailchimp, Brevo, SendGrid, Amazon SES | Gmail, Outlook, Yahoo |
| Chi lo usa | Aziende e siti che inviano email | Chiunque abbia un indirizzo email |

Quando la panetteria invia la newsletter, l'ESP spedisce l'email. Il provider di posta del cliente, per esempio Gmail, la riceve. Poi decide se metterla nella posta in arrivo o nello spam.

## ESP di marketing ed ESP transazionali

- Un **ESP di marketing** invia la stessa email a una lista di iscritti. Esempi sono le newsletter, le offerte e gli annunci. Mailchimp e Brevo sono usati spesso per questo.
- Un **ESP transazionale** invia un'email a una sola persona, quando questa fa qualcosa. Esempi sono una ricevuta, un link per reimpostare la password o una conferma di spedizione. Postmark, SendGrid e Amazon SES sono usati spesso per questo.

Molte aziende usano entrambi i tipi. Alcuni ESP offrono tutti e due i servizi.

## Cosa fa un ESP per te

- **Server di invio.** L'ESP gestisce i server e la conversazione [SMTP](/glossary/smtp) con i server che ricevono. SMTP è l'insieme di regole che i server usano per scambiarsi le email.
- **Link di disiscrizione.** Aggiunge a ogni email di marketing un link per disiscriversi. Poi smette di inviare a chi lo usa.
- **Gestione dei bounce.** Registra le email rifiutate. Di solito smette di inviare agli indirizzi che fanno [hard bounce](/glossary/hard-bounce).
- **Report.** Mostra consegne, aperture, clic, bounce e segnalazioni di spam.
- **Autenticazione.** Ti dà i record DNS per configurare [SPF](/glossary/spf) e [DKIM](/glossary/dkim) con il tuo dominio. Il DNS è l'elenco pubblico di impostazioni del dominio.

## Perché gli ESP controllano i tuoi bounce

Spesso molti clienti di un ESP inviano dagli stessi server. Se un cliente invia a tanti indirizzi inesistenti, Gmail e Outlook possono fidarsi meno di quei server. Questo danneggia anche gli altri clienti. Per questo molti ESP controllano il [tasso di rimbalzo](/glossary/bounce-rate) di ogni account. Se è troppo alto, possono mettere l'account sotto revisione o sospenderlo. Le soglie cambiano da un ESP all'altro.

## Email service provider e verifica email

Il momento giusto per verificare una lista è prima di caricarla sul tuo ESP. Un ESP registra i bounce solo dopo l'invio, quando hanno già pesato sulla tua reputazione. Con la [verifica email in blocco](/bulk-email-verifier) carichi il file, togli gli indirizzi inesistenti e importi nell'ESP solo quelli validi. Per i nuovi iscritti puoi controllare ogni indirizzo con la [verifica email](/email-checker). Il nostro [servizio di verifica email](/) non sostituisce l'ESP, ma gli consegna una lista più pulita.
