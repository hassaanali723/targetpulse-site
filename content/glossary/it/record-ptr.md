---
title: Record PTR
description: Cos'è un record PTR, perché i server di posta lo controllano, cosa succede quando un indirizzo IP di invio non ha un record PTR e come configurarne uno.
slug: record-ptr
date: 2026-09-29
updated: 2026-10-12
keyword: record ptr
short: Un record PTR collega l'indirizzo IP di un server al suo nome, cioè fa il contrario di un normale record DNS. I server di posta controllano il record PTR dell'indirizzo IP che invia loro email. Alcuni rifiutano le email dagli indirizzi IP che non ne hanno uno.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Controlla la tua lista, non solo il tuo DNS
---

## Cos'è un record PTR?

Prima, alcune parole che servono per capire.

- **Indirizzo IP:** il numero che identifica un computer su internet. Esempio: `203.0.113.10`.
- **Nome host:** il nome di un computer, più facile da leggere. Esempio: `mail.example.com`.
- **DNS:** l'elenco pubblico che collega i nomi agli indirizzi IP. Ogni riga di questo elenco si chiama record.

Un normale record DNS collega un nome a un indirizzo IP. Per esempio, `mail.example.com` punta a `203.0.113.10`. Un record PTR fa il contrario. Collega `203.0.113.10` a `mail.example.com`. Per questo si parla di DNS inverso.

PTR sta per pointer, cioè puntatore. Il record PTR non sta nel DNS del tuo dominio. Sta in una zona DNS separata, che appartiene al proprietario dell'indirizzo IP. Di solito è la tua società di hosting o il tuo provider di posta. Per impostare o cambiare un record PTR, devi chiederlo a loro.

## Un esempio semplice

Davide gestisce il server di posta del suo studio di architettura. Il server ha l'indirizzo IP `203.0.113.10`.

1. Davide imposta il nome `mail.example.com` per il suo server.
2. Chiede al suo provider di hosting di creare il record PTR. Il record PTR collega `203.0.113.10` a `mail.example.com`.
3. Davide invia un'email a un cliente su Gmail.
4. Il server di Gmail vede che l'email arriva da `203.0.113.10`.
5. Gmail legge il record PTR di quell'IP e trova `mail.example.com`.
6. Gmail controlla che `mail.example.com` punti di nuovo a `203.0.113.10`. È così.
7. Il controllo passa. Gmail continua con gli altri controlli sull'email.

Se Davide non avesse un record PTR, Gmail potrebbe rifiutare l'email al passaggio 5.

## Perché i server di posta lo controllano

Quando il tuo server si collega a un server di destinazione, quel server vede il tuo indirizzo IP. Cerca il record PTR di quell'IP. Poi controlla due cose:

1. L'indirizzo IP ha un record PTR?
2. Il nome host nel record PTR punta di nuovo allo stesso indirizzo IP?

Se entrambe le risposte sono sì, il mittente sembra un vero server di posta, configurato da qualcuno apposta.

Se non c'è un record PTR, il mittente sembra una di queste tre cose:

- una connessione internet di casa;
- un computer infetto da un virus;
- un server che nessuno ha configurato.

Lo spam arriva spesso da questi tre tipi di mittente. Per questo il record PTR mancante è un segnale negativo.

## Cosa succede senza record PTR

Alcuni provider rifiutano l'email. La guida agli errori di Gmail elenca questo codice: `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Cioè il messaggio è stato bloccato perché l'indirizzo IP di invio non ha un record PTR.

È un rifiuto permanente. Il tuo strumento di invio lo registra come [hard bounce](/glossary/hard-bounce), anche se l'indirizzo del destinatario esiste. Un hard bounce è un'email rifiutata in modo permanente.

Altri provider accettano l'email, ma le danno un punteggio più basso. Un punteggio più basso significa che l'email ha più probabilità di finire nella cartella spam.

## Come configurare un record PTR

1. Trova l'indirizzo IP da cui parte la tua posta.
2. Scegli il nome host a cui deve puntare. Esempio: `mail.example.com`.
3. Controlla che quel nome host abbia un normale record DNS che punta allo stesso indirizzo IP.
4. Chiedi alla tua società di hosting o al tuo provider di posta di impostare il record PTR dell'indirizzo IP su quel nome host.

Potresti non dover fare niente. Se invii tramite Google Workspace, Microsoft 365, SendGrid o Amazon SES, il provider possiede gli indirizzi IP di invio. I loro record PTR sono già impostati. Devi impostare un record PTR solo se gestisci un tuo server di posta o usi un indirizzo IP dedicato, cioè riservato solo a te.

## Record PTR e verifica

Un record PTR riguarda l'indirizzo IP di chi invia. Non riguarda l'indirizzo di chi riceve. La [verifica email](/email-checker) non ha bisogno del tuo record PTR per controllare la tua lista.

Un verificatore ha bisogno di record PTR sui propri indirizzi IP. Senza, i server di destinazione si rifiutano di parlare con lui. Questo è uno dei motivi per cui un servizio di verifica ottiene risposte diverse da uno script lanciato da un portatile.

Il record PTR e la verifica risolvono due problemi diversi. Il record PTR evita i rifiuti dovuti al tuo server. La [verifica email in blocco](/bulk-email-verifier) trova gli indirizzi che non esistono prima dell'invio. Il nostro [servizio di verifica email](/) si occupa solo del secondo problema.
