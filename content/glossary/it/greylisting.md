---
title: Greylisting
description: Cos'è il greylisting, perché un server rifiuta la tua prima email e accetta la seconda, quanto dura il ritardo e come influisce sulla verifica.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Il greylisting è una difesa antispam. Un server di posta rifiuta la prima email di un mittente che non conosce e la accetta quando il mittente riprova qualche minuto dopo. I veri server di posta riprovano, mentre la maggior parte dei programmi di spam no.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Ottieni una risposta vera sugli indirizzi che mettono in greylist i tuoi controlli
---

## Cos'è il greylisting?

Il greylisting è una difesa antispam che funziona con un ritardo. È descritto nella RFC 6647, un documento pubblico sugli standard di internet.

Un server di posta è il computer che riceve le email per un dominio. Il dominio è la parte dell'indirizzo dopo la @. Un server che usa il greylisting tiene un registro di ogni mittente che ha già visto.

Per ogni email in arrivo, il server guarda tre cose:

1. l'indirizzo IP di invio, cioè il numero che identifica il server che invia;
2. l'indirizzo del mittente;
3. l'indirizzo del destinatario.

Se non ha mai visto questa combinazione, rifiuta l'email con un errore temporaneo. Un server di posta configurato bene mette l'email in coda e riprova. La maggior parte dei programmi di spam invia una volta sola e non riprova.

Quando arriva il nuovo tentativo, il server accetta l'email. Poi salva il mittente nel suo registro. Da quel momento, le email dello stesso mittente vengono accettate al primo tentativo.

## Un esempio semplice

Simone lavora per un'azienda di software. Scrive per la prima volta a un fornitore, ordini@fornitore.example. Il server del fornitore usa il greylisting.

1. Alle 10:00 il server di Simone invia l'email.
2. Il server del fornitore non ha mai visto questo mittente. Risponde con il codice `451` e un testo come "greylisted, try again later". Cioè "messo in lista grigia, riprova più tardi".
3. Il server di Simone mette l'email in coda.
4. Alle 10:15 riprova.
5. Il server del fornitore riconosce lo stesso mittente. Questa volta accetta l'email.
6. Il fornitore riceve l'email con 15 minuti di ritardo.
7. Il giorno dopo Simone scrive di nuovo. L'email arriva subito, perché il mittente è già nel registro.

Simone non ha visto nessun errore. Ha solo notato, forse, un piccolo ritardo.

## Come appare al mittente

Il primo tentativo riceve un codice che inizia con 4. Un codice con 4 significa "problema temporaneo, riprova". Di solito è `450` o `451`, con un messaggio come "greylisted, try again later". Il tuo server di posta lo tratta come un [soft bounce](/glossary/soft-bounce), cioè un rifiuto temporaneo. Poi riprova secondo i suoi tempi.

Il server di destinazione decide quanto aspettare prima di accettare il nuovo tentativo. Circa 15 minuti è un valore comune. Alcuni server usano un ritardo più corto o più lungo.

Di solito il greylisting non si nota. L'email arriva con qualche minuto di ritardo. Se il tuo strumento mostra un avviso di rimbalzo, si risolve da solo.

## Quando il greylisting conta

Il greylisting non influisce su una campagna normale. Conta in due casi.

**Email urgenti.** Pensa a un'email per il reset della password, o a un codice monouso per accedere a un sito. Se arriva con 15 minuti di ritardo, per l'utente è inutile. Per questo, chi invia email transazionali a volte chiede ai domini di destinazione un'eccezione. Le email transazionali sono quelle automatiche, come conferme d'ordine e codici. L'eccezione consiste nell'aggiungere i propri indirizzi IP a una lista di mittenti consentiti.

**Verifica.** Un verificatore controlla un indirizzo avviando una conversazione SMTP. SMTP è il linguaggio che i server di posta usano per parlare tra loro. Il verificatore si ferma prima di inviare qualsiasi cosa. Su un server con greylisting, il primo tentativo riceve una risposta `4xx`. Un verificatore che si ferma dopo un solo tentativo segnala l'indirizzo come sconosciuto. Ma l'indirizzo potrebbe essere valido.

## Greylisting e secure email gateway

Molti domini aziendali usano un [secure email gateway](/glossary/secure-email-gateway), come Proofpoint o Mimecast. È un filtro di sicurezza che controlla le email prima che arrivino alle caselle dell'azienda.

Questi gateway applicano il greylisting ai mittenti sconosciuti come impostazione predefinita. Questo è uno dei motivi per cui un controllo semplice restituisce "sconosciuto" per molti indirizzi B2B, cioè indirizzi di aziende.

## Come lo gestisce un verificatore

Un buon verificatore tratta una risposta `4xx` come "riprova", non come un risultato. Aspetta, riprova dallo stesso indirizzo IP e riporta la risposta che il server dà dopo il ritardo del greylisting. Giggal.ai lo fa quando controlla i domini con gateway. Così restituisce valido o non valido, dove un controllo a tentativo singolo restituisce sconosciuto.

Puoi controllare un indirizzo con la [verifica email](/email-checker) o una lista intera con la [verifica email in blocco](/bulk-email-verifier). Sui server con greylisting il controllo richiede più tempo, perché il verificatore deve aspettare e riprovare. Il nostro [servizio di verifica email](/) trova gli indirizzi che non esistono prima che tu invii.
