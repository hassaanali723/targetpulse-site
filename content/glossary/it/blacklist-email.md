---
title: Email blacklist
description: Cos'è una blacklist email, come un IP o un dominio finisce in blacklist, come controllare se ci sei e come chiedere la rimozione.
slug: blacklist-email
date: 2026-10-12
updated: 2026-10-12
keyword: email blacklist
short: Una blacklist email è un elenco pubblico di indirizzi IP o domini che hanno inviato spam. I server di posta la consultano e bloccano le email dei mittenti in elenco. Se il tuo IP o il tuo dominio è in una blacklist, le tue email rimbalzano o finiscono in spam.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Togli gli indirizzi morti prima che ti portino in blacklist
---

## Cos'è una blacklist email?

Una blacklist email è un elenco pubblico di indirizzi IP o domini che hanno inviato spam. Un indirizzo IP è il numero che identifica un server su internet. Un server è il computer che invia o riceve le email. Un dominio è la parte dell'indirizzo email dopo la @.

Quando arriva un'email, il server che la riceve può consultare una o più blacklist. Se trova l'IP o il dominio del mittente nell'elenco, può rifiutare l'email o metterla in spam. Molte blacklist sono gestite da organizzazioni antispam. La più conosciuta è Spamhaus.

## Un esempio: le email iniziano a rimbalzare

Un'agenzia di viaggi invia un'offerta a 8.000 clienti, come ogni mese. Questa volta il report mostra centinaia di bounce. Molti messaggi di errore dicono qualcosa di simile a questo:

`554 5.7.1 Service unavailable; Client host [203.0.113.40] blocked using zen.spamhaus.org`

Ecco cosa significa ogni parte:

1. `554` inizia con 5, quindi è un rifiuto permanente.
2. `203.0.113.40` è l'indirizzo IP del server di invio dell'agenzia.
3. `zen.spamhaus.org` è la blacklist di Spamhaus che il server ha consultato.
4. `blocked` vuol dire che il server ha trovato l'IP nell'elenco e ha bloccato l'email.

L'agenzia scopre che due mesi prima ha importato una vecchia lista di contatti. Alcuni indirizzi erano [spam trap](/glossary/spam-trap), cioè indirizzi usati solo per individuare chi invia a liste di scarsa qualità. L'inserimento in blacklist è partito da lì.

## Blacklist di IP e blacklist di domini

- Una **blacklist di IP** elenca gli indirizzi IP di server che hanno inviato spam. Il server che riceve controlla l'IP che consegna l'email. Un esempio è la SBL di Spamhaus.
- Una **blacklist di domini** elenca i domini che compaiono nello spam, come mittenti o nei link dentro l'email. Un esempio è la DBL di Spamhaus.

Molte blacklist funzionano tramite il DNS, l'elenco pubblico di impostazioni dei domini che ogni server può interrogare. Per questo si chiamano anche [DNSBL](/glossary/dnsbl).

## Blacklist o blocklist?

I due nomi indicano la stessa cosa. Spamhaus usa il termine "blocklist". Molti strumenti e articoli usano ancora "blacklist". Vedi anche [blocklist](/glossary/blocklist).

## Come si finisce in una email blacklist

- **Invii a spam trap.** Sono indirizzi che nessuno usa. Servono a individuare le liste comprate o mai pulite.
- **Segnalazioni di spam.** Molti destinatari cliccano "Segnala spam".
- **Un account violato.** Qualcuno ruba la password di una casella o di un sito. Poi la usa per inviare spam dal tuo server.
- **Volume improvviso da un IP nuovo.** Un IP senza storia che invia migliaia di email in un giorno si comporta come un mittente di spam.

Ogni blacklist ha le sue regole. Non tutte spiegano cosa fa scattare l'inserimento.

## Come controllare se la tua email è in blacklist

1. Trova l'indirizzo IP del tuo server di invio. Il tuo ESP o il tuo provider te lo può dire. Lo trovi anche nelle intestazioni di un'email inviata, cioè le righe tecniche in cima al messaggio.
2. Apri un controllo blacklist, come quello di MXToolbox.
3. Inserisci l'IP o il dominio.
4. Lo strumento controlla molte blacklist insieme e mostra in quali sei presente.

Se usi un IP condiviso del tuo ESP, contatta l'ESP. L'IP è suo e la rimozione la chiede lui.

## Come uscire da una blacklist

1. **Trova la causa.** Può essere una lista comprata, indirizzi vecchi, un account violato o un picco di invii.
2. **Risolvi il problema.** Pulisci la lista, cambia le password, ferma gli invii sospetti.
3. **Chiedi la rimozione.** Ogni blacklist ha una pagina per richiederla. Su Spamhaus inserisci il tuo IP e vedi il motivo dell'inserimento.
4. **Controlla di nuovo.** Alcune liste tolgono gli indirizzi da sole dopo un certo tempo, se lo spam si ferma.

Se chiedi la rimozione senza risolvere la causa, l'IP o il dominio torna presto nell'elenco.

## Blacklist email e verifica email

Gli indirizzi vecchi e quelli falsi possono portarti in una blacklist. Un indirizzo abbandonato può diventare una spam trap, e una lista piena di indirizzi inesistenti produce molti [hard bounce](/glossary/hard-bounce). Con la [verifica email in blocco](/bulk-email-verifier) togli gli indirizzi che non esistono prima dell'invio, e con la [verifica email](/email-checker) controlli quelli nuovi. Un verificatore non riconosce ogni spam trap, perché alcune sono caselle che esistono e accettano posta. Il nostro [servizio di verifica email](/) riduce il rischio, ma non toglie un IP da una blacklist.
