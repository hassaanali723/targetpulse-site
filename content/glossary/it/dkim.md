---
title: DKIM
description: Cos'è DKIM, come funziona la firma DKIM con un esempio, com'è fatto il record DKIM nel DNS, come configurarlo e come controllare che funzioni.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: dkim
short: DKIM è una firma digitale che il tuo server aggiunge a ogni email. Chi riceve l'email la controlla con una chiave pubblicata nel DNS del tuo dominio. Se la firma è valida, l'email viene dal tuo dominio e nessuno l'ha modificata durante il viaggio.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Email firmata e indirizzo verificato, prima di ogni invio
---

## Cos'è DKIM?

DKIM sta per DomainKeys Identified Mail. È definito nella RFC 6376. DKIM aggiunge a ogni email una firma digitale. La firma dimostra due cose. L'email è stata inviata da un server autorizzato dal tuo dominio. Nessuno ha cambiato il testo dopo l'invio.

Il dominio è la parte dell'indirizzo dopo la @. In info@example.com il dominio è example.com.

La firma funziona con una coppia di chiavi. Una chiave è un lungo codice creato da un computer. La chiave privata resta segreta sul server che invia. La chiave pubblica viene pubblicata nel DNS del dominio. Il DNS è l'elenco pubblico di impostazioni di un dominio, che ogni server su internet può leggere. Solo la chiave privata può creare la firma. Chiunque può controllarla con la chiave pubblica.

## Un esempio: la ricevuta di un negozio online

Un negozio online usa il dominio example.com. Giulia compra un paio di scarpe. Il negozio le invia la ricevuta al suo indirizzo Gmail.

1. Il server del negozio prepara l'email della ricevuta.
2. Prima di inviarla, il server calcola un'impronta del testo e di alcune intestazioni, come Da e Oggetto. Le intestazioni sono le righe di informazioni in cima a un'email.
3. Il server firma l'impronta con la chiave privata. Aggiunge il risultato all'email in una nuova intestazione, chiamata DKIM-Signature.
4. L'email arriva a Gmail.
5. Gmail legge l'intestazione DKIM-Signature. Trova il dominio e il selettore, poi cerca la chiave pubblica nel DNS di example.com.
6. Gmail ricalcola l'impronta e la confronta con la firma. Se combaciano, DKIM risulta superato.

Supponiamo che qualcuno cambi l'importo nella ricevuta durante il viaggio. L'impronta sarebbe diversa. La firma non combacerebbe e DKIM fallirebbe.

## La firma DKIM

La firma DKIM è un'intestazione dell'email che si chiama DKIM-Signature. Contiene diversi valori. Due sono i più utili da conoscere.

- `d=` è il dominio che ha firmato, ad esempio `d=example.com`.
- `s=` è il selettore, ad esempio `s=s2026a`. Il selettore è un nome scelto da te. Dice al server che riceve quale chiave pubblica usare, perché un dominio può averne più di una.

DKIM firma l'email ma non la cripta. Il testo resta leggibile. La firma dimostra solo che nessuno l'ha cambiato.

## Il record DKIM nel DNS

Il record DKIM è un [record TXT del DNS](/glossary/dns-txt-record). Un record è una riga nelle impostazioni DNS del dominio. Un record TXT contiene testo semplice. Il record DKIM si trova a un nome fatto così: selettore._domainkey.dominio. Per il negozio dell'esempio è `s2026a._domainkey.example.com`.

Il contenuto ha questa forma:

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqh...
```

- `v=DKIM1` dice che è un record DKIM.
- `k=rsa` indica il tipo di chiave. RSA è il tipo predefinito.
- `p=` contiene la chiave pubblica. Qui è accorciata. Un `p=` vuoto significa che la chiave è stata revocata.

La chiave privata non va mai nel DNS. Resta sul server che firma. Per la lunghezza della chiave, Gmail chiede almeno 1024 bit e consiglia 2048. La RFC 8301 dice che chi firma dovrebbe usare 2048 bit.

## Perché DKIM conta

**Resiste all'inoltro.** Quando qualcuno inoltra un'email, la consegna un altro server, con un altro indirizzo IP. Un indirizzo IP è il numero che identifica un server su internet. Per questo il [record SPF](/glossary/spf) spesso fallisce dopo un inoltro. L'inoltro di solito lascia intatti testo e intestazioni, quindi la firma DKIM resta valida. Le mailing list che aggiungono un piè di pagina possono però rompere la firma.

**DMARC lo usa.** [DMARC](/glossary/dmarc) controlla che SPF o DKIM passino per lo stesso dominio che il lettore vede nel campo Da. Questa corrispondenza si chiama [allineamento DMARC](/glossary/dmarc-alignment).

**Google e Microsoft lo richiedono.** Le linee guida per i mittenti di Google chiedono SPF, DKIM e DMARC a chi invia 5.000 o più email al giorno agli account Gmail personali. Microsoft chiede gli stessi tre record a chi invia 5.000 o più email al giorno a Outlook.com, Hotmail e Live.

## Come configurare DKIM

Se usi un servizio di posta o una piattaforma di invio, il servizio crea le chiavi per te. Google Workspace e Microsoft 365 hanno la configurazione DKIM nella loro console di amministrazione. Le piattaforme come Mailchimp, Brevo e SendGrid la hanno nelle impostazioni del dominio.

1. Apri le impostazioni di autenticazione del dominio nel tuo servizio.
2. Copia il nome e il valore del record DKIM che il servizio ti mostra.
3. Crea il record presso il tuo provider DNS, con il tipo che indica il servizio. Di solito il provider DNS è l'azienda dove hai comprato il dominio.
4. Torna nel servizio e attiva la firma.

Se hai un tuo server di posta, puoi creare la coppia di chiavi con il nostro [generatore DKIM](/dkim-generator) (in inglese). La chiave viene creata nel tuo browser e non viene inviata da nessuna parte.

Fai attenzione a un errore frequente. Molte piattaforme firmano di default con il proprio dominio, non con il tuo. La firma passa, ma non è allineata con il dominio nel campo Da. Per DMARC devi attivare la firma DKIM con il tuo dominio.

## Come controllare se DKIM funziona

1. Invia un'email di prova a un tuo account Gmail personale.
2. Apri l'email in Gmail.
3. Clicca sui tre puntini e scegli Mostra originale.
4. In cima alla pagina trovi la riga DKIM. Deve dire PASS, con il tuo dominio.

Se dice FAIL, controlla che il record sia pubblicato. Controlla anche che il selettore sul server sia uguale a quello nel DNS.

## DKIM e verifica email

DKIM e verifica controllano due cose diverse. DKIM dimostra che l'email viene dal tuo dominio. La verifica controlla che l'indirizzo del destinatario esista. Un'email firmata correttamente rimbalza comunque se la casella non c'è più, quindi controlla un indirizzo con il [verificatore email](/email-checker) o tutta la lista con la [verifica email in blocco](/bulk-email-verifier) prima dell'invio. Con DKIM configurato e il nostro [servizio di verifica email](/), riduci sia i rifiuti per autenticazione sia i bounce per indirizzi inesistenti.
