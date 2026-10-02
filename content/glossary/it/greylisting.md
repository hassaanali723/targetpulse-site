---
title: Greylisting
description: Cos'è il greylisting, perché un server rifiuta la tua prima email e accetta la seconda, quanto dura il ritardo e come influisce sulla verifica.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: Il greylisting è una difesa antispam. Un server di posta rifiuta la prima email di un mittente che non conosce. Accetta la stessa email quando il mittente riprova qualche minuto dopo. I veri server di posta riprovano. La maggior parte dei programmi di spam no.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Ottieni una risposta vera sugli indirizzi che mettono in greylist i tuoi controlli
---

## Cos'è il greylisting

Il greylisting è una difesa antispam che funziona con un ritardo. È descritto nella RFC 6647.

Un server di destinazione tiene un registro di ogni mittente che ha visto. Il server guarda tre cose: l'indirizzo IP di invio, l'indirizzo del mittente e l'indirizzo del destinatario. Se non ha mai visto questa combinazione prima, rifiuta l'email con un errore temporaneo. Un server di posta configurato correttamente mette l'email in coda e riprova. La maggior parte dei programmi di spam invia una volta sola e non riprova.

Quando arriva il nuovo tentativo, il server accetta l'email e salva il mittente nel suo registro. Da quel momento, le email dello stesso mittente vengono accettate al primo tentativo.

## Come appare al mittente

Il primo tentativo riceve un codice che inizia con 4. Di solito è `450` o `451`, con un messaggio come "greylisted, try again later". Il tuo server di posta lo tratta come un [soft bounce](/glossary/soft-bounce) e riprova secondo i suoi tempi.

Il server di destinazione decide quanto aspettare prima di accettare il nuovo tentativo. Circa 15 minuti è un valore comune. Alcuni server usano un ritardo più corto o più lungo.

Di solito il greylisting non si nota. L'email arriva con qualche minuto di ritardo. Se il tuo strumento mostra un avviso di rimbalzo, si risolve da solo.

## Quando il greylisting conta

Il greylisting non influisce su una campagna normale. Conta in due casi.

**Email urgenti.** Un reset della password o un codice monouso che arriva con 15 minuti di ritardo è inutile per l'utente. Per questo motivo, chi invia email transazionali a volte chiede ai domini di destinazione di aggiungere i propri indirizzi IP a una lista di mittenti consentiti.

**Verifica.** Un verificatore controlla un indirizzo avviando una conversazione SMTP e fermandosi prima di inviare qualsiasi cosa. Su un server con greylisting, il primo tentativo riceve una risposta `4xx`. Un verificatore che si ferma dopo un tentativo segnala l'indirizzo come sconosciuto. L'indirizzo potrebbe essere valido.

## Greylisting e secure email gateway

Molti domini aziendali usano un [secure email gateway](/glossary/secure-email-gateway) come Proofpoint o Mimecast. Questi gateway applicano il greylisting ai mittenti sconosciuti come impostazione predefinita. Questo è uno dei motivi per cui un controllo base restituisce sconosciuto per molti indirizzi B2B.

## Come lo gestisce un verificatore

Un buon [verificatore di indirizzi email](/email-checker) tratta una risposta `4xx` come "riprova", non come un risultato. Aspetta, riprova dallo stesso indirizzo IP e riporta la risposta che il server dà dopo il ritardo del greylisting. Giggal.ai lo fa quando risolve i domini con gateway. È così che restituisce valido o non valido dove un controllo a tentativo singolo restituisce sconosciuto.
