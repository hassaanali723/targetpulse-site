---
title: Record PTR
description: Cos'è un record PTR, perché i server di posta lo controllano, cosa succede quando un indirizzo IP di invio non ha un record PTR e come configurarne uno.
slug: record-ptr
date: 2026-09-29
updated: 2026-09-29
keyword: record ptr
short: Un record PTR è un record DNS che collega un indirizzo IP a un nome host. È l'inverso di un normale record DNS. I server di posta controllano il record PTR dell'indirizzo IP che sta inviando loro. Alcuni server rifiutano le email dagli indirizzi IP che non hanno un record PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Controlla la tua lista, non solo il tuo DNS
---

## Cos'è un record PTR

Un normale record DNS collega un nome a un indirizzo IP. Per esempio, `mail.esempio.com` punta a `203.0.113.10`. Un record PTR fa il contrario. Collega `203.0.113.10` a `mail.esempio.com`. Si chiama DNS inverso.

PTR sta per pointer, puntatore. Il record PTR non sta nel DNS del tuo dominio. Sta in una zona DNS separata che appartiene al proprietario dell'indirizzo IP. Di solito è la tua società di hosting o il tuo provider di posta. Per impostare o cambiare un record PTR, lo chiedi a loro.

## Perché i server di posta lo controllano

Quando il tuo server si collega a un server di destinazione, il server di destinazione vede il tuo indirizzo IP. Cerca il record PTR di quell'IP. Poi controlla due cose:

- L'indirizzo IP ha un record PTR?
- Il nome host nel record PTR punta di nuovo allo stesso indirizzo IP?

Se entrambe le cose sono vere, il mittente sembra un vero server di posta che qualcuno ha configurato apposta. Se non c'è un record PTR, il mittente sembra una di queste tre cose: una connessione internet domestica, un computer infetto, oppure un server che nessuno ha configurato. Lo spam arriva spesso da questi.

## Cosa succede senza record PTR

Alcuni provider rifiutano l'email. La guida agli errori di Gmail elenca `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. È un rifiuto permanente. Il tuo strumento di invio lo registra come [hard bounce](/glossary/hard-bounce), anche se l'indirizzo esiste.

Altri provider accettano l'email ma le danno un punteggio più basso. Un punteggio più basso significa che l'email ha più probabilità di finire nella cartella spam.

## Come configurare un record PTR

- Trova l'indirizzo IP da cui parte la tua posta.
- Scegli il nome host a cui deve puntare. Esempio: `mail.tuodominio.com`.
- Assicurati che quel nome host abbia un normale record DNS che punta allo stesso indirizzo IP.
- Chiedi alla tua società di hosting o al tuo provider di posta di impostare il record PTR dell'indirizzo IP su quel nome host.

Se invii tramite Google Workspace, Microsoft 365, SendGrid o Amazon SES, il provider possiede gli indirizzi IP di invio. I record PTR sono già impostati. Devi impostare un record PTR solo se gestisci un tuo server di posta o usi un indirizzo IP dedicato.

## Record PTR e verifica

Un record PTR riguarda l'indirizzo IP del mittente. Non riguarda l'indirizzo del destinatario. Un [verificatore di indirizzi email](/email-checker) non ha bisogno del tuo record PTR per verificare la tua lista.

Un verificatore ha bisogno di record PTR sui propri indirizzi IP. Senza, i server di destinazione si rifiutano di comunicare con lui. Questo è uno dei motivi per cui un servizio di verifica ottiene risposte diverse da uno script lanciato da un portatile.
