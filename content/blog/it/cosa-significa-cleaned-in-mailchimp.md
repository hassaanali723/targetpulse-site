---
title: "Cosa significa Cleaned in Mailchimp?"
seoTitle: "Cosa significa Cleaned in Mailchimp? Cause e cosa fare"
description: "Cleaned in Mailchimp indica un indirizzo con hard bounce o soft bounce ripetuti, a cui Mailchimp non invia più. Perché succede, quanto costa e cosa fare dopo."
slug: cosa-significa-cleaned-in-mailchimp
date: 2026-10-19
updated: 2026-10-19
keyword: cosa significa cleaned in mailchimp
image: /blog/covers/it/cosa-significa-cleaned-in-mailchimp.webp
imageAlt: Guida allo stato Cleaned dell'audience Mailchimp con le cause dei bounce e le differenze tra gli stati
cta: Verifica la tua lista con Giggal.ai
---

Cleaned in Mailchimp significa che Mailchimp ha smesso di inviare a quell'indirizzo perché ha fatto hard bounce, o soft bounce troppe volte, e Mailchimp lo considera non valido. Il nome confonde, perché "cleaned" (ripulito) fa pensare che Mailchimp abbia sistemato o corretto qualcosa per te. In realtà non è stato riparato nulla. Il contatto resta nella tua audience con l'etichetta Cleaned, non può ricevere nessuna email da te e non conta nel tuo limite mensile di contatti.

## Perché Mailchimp segna un indirizzo come Cleaned

Gli hard bounce sono errori di consegna permanenti, in cui un server ricevente rifiuta un'email in modo netto. I motivi comuni indicati da Mailchimp sono una casella che non esiste e un server ricevente che ha bloccato la consegna in modo permanente. Errori di battitura come con al posto di com, e vecchi indirizzi di persone che hanno lasciato un'azienda, sono esempi tipici. Nella maggior parte dei casi Mailchimp segna come Cleaned in automatico e subito gli indirizzi che fanno hard bounce, e li esclude da tutte le campagne future inviate alla tua audience.

I soft bounce funzionano in modo diverso, perché sono errori di consegna temporanei. Quando un indirizzo fa soft bounce, Mailchimp ritenta la consegna negli invii successivi invece di escluderlo subito. Ma se un indirizzo continua a fallire, Mailchimp lo trasforma in hard bounce e lo segna come Cleaned. Mailchimp applica un conteggio preciso: segna un indirizzo come Cleaned dopo 7 soft bounce se il contatto non ha nessuna attività precedente come iscritto, e permette fino a 15 soft bounce per i contatti con attività precedente.

Mailchimp elenca diversi motivi per cui un messaggio di una campagna può fare soft bounce. La casella del destinatario può essere piena, inattiva o configurata male. Il suo server di posta può essere fermo o offline, oppure la tua campagna può aver inviato troppe email a quel server in poco tempo. Altri motivi di soft bounce sono messaggi troppo grandi, domini temporaneamente inesistenti, filtri sui contenuti o messaggi che non possono essere inoltrati. Un'email può fare soft bounce anche se non rispetta i requisiti antivirus, antispam o sul mittente del server di destinazione, oppure se il messaggio [non ha superato DMARC](/blog/spf-dkim-dmarc-explained).

Mailchimp dice di non poter prevedere se un'email rimbalzerà prima dell'invio, e che ogni provider di posta respinge la posta in base alle proprie regole. Quando l'invio di una campagna è finito, le ricevute dei bounce restano disponibili nei report email di Mailchimp per 30 giorni dopo l'invio. Puoi leggere di più su come i server di posta classificano i problemi di consegna nella nostra guida su [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce), oppure consultare la guida di Mailchimp [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/) (in inglese).

## Cleaned, Unsubscribed, Archived e gli altri tipi di contatto

Mailchimp divide i contatti in categorie distinte, che decidono se possono ricevere messaggi e se li paghi:

| Stato | Cosa significa | Può ricevere | Conta nel limite di contatti |
| --- | --- | --- | --- |
| Subscribed (iscritto) | Ha dato il consenso a ricevere le tue campagne email | Email di marketing, SMS di marketing, annunci, email transazionali | Sì |
| Unsubscribed (disiscritto) | Ha scelto di non ricevere più le tue campagne di marketing | Annunci ed email transazionali | Sì |
| Non-subscribed (non iscritto) | Ha interagito con te (un negozio, un'integrazione o un'importazione) ma non ha mai dato il consenso | Annunci ed email transazionali | Sì |
| Cleaned | L'indirizzo ha avuto un hard bounce o soft bounce ripetuti, non è recapitabile | Niente | No |
| Pending (in attesa) | Ha compilato un modulo di iscrizione ma non ha confermato il double opt-in | Niente | No |
| Archived (archiviato) | Tolto dall'audience attiva, con i dati del profilo conservati | Niente | No |
| Deleted (eliminato) | Rimosso in modo permanente, non si può annullare | Niente | No |

Sia lo stato Cleaned sia lo stato Unsubscribed ti impediscono di inviare campagne di marketing a un indirizzo email, ma la differenza conta per la tua fattura mensile. Unsubscribed è una scelta dell'iscritto, e Mailchimp continua a contare quel contatto nel limite mensile. Cleaned è una decisione di Mailchimp dopo una consegna fallita: l'indirizzo non può ricevere nulla, e Mailchimp non lo fa pagare. I contatti Pending che restano senza conferma vengono tolti in automatico dalla tua audience dopo 60 giorni. Gli account con vecchi piani a pagamento creati prima del 15 maggio 2019 possono avere regole diverse sul limite di contatti.

## Cosa fare con i contatti Cleaned

Mailchimp consiglia di archiviare i contatti Cleaned invece di eliminarli. L'archiviazione conserva la storia del contatto e tiene registrato l'indirizzo sbagliato nella tua audience. Secondo Mailchimp, questo ti aiuta a evitare di ricevere di nuovo un bounce da quell'indirizzo. Mailchimp consiglia di eliminare i contatti solo per le richieste legate al GDPR, perché l'eliminazione cancella il record in modo permanente e non si può annullare. Archiviare i contatti Cleaned non riduce la tua fattura mensile, perché gli indirizzi Cleaned non contano comunque nel limite del piano. Mailchimp spiega questa regola nella sua documentazione [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/) (in inglese).

Per controllare o esportare tutti gli indirizzi Cleaned della tua audience Mailchimp, puoi isolarli con i segmenti:

1. Apri la scheda Audience nella dashboard di Mailchimp e fai clic su Segments.
2. Fai clic su Create segment.
3. Imposta il criterio del segmento in modo che Email subscription status sia one of Cleaned.
4. Fai clic su Use segment, inserisci un nome per il segmento e salvalo.
5. Apri il segmento salvato, fai clic su Export segment e conferma la richiesta di esportazione.
6. Fai clic su View exports nel banner di notifica, poi su Download CSV per salvare il file.

Quando un contatto diventa Cleaned per un semplice errore di battitura, come user@gmai.com o name@conpany.com, non puoi modificare il record esistente. Per correggere l'errore, aggiungi l'indirizzo corretto come contatto nuovo. Siccome Mailchimp non fa pagare gli indirizzi Cleaned, tenere il record originale con l'errore non ti costa nulla.

A volte anche indirizzi email validi fanno hard bounce. Prima di agire, controlla il motivo del bounce nel report della campagna. Un firewall aziendale rigido o un filtro antispam può aver rifiutato il messaggio con risposte SMTP come Denied, Unacceptable Content o Blocked. Nelle configurazioni aziendali, un filtro può bloccare del tutto gli indirizzi IP di invio di Mailchimp. Il reparto IT del destinatario può risolvere aggiungendo gli indirizzi IP di Mailchimp alla lista dei mittenti consentiti. In altri casi, un grande provider di posta può bloccarti temporaneamente. Secondo Mailchimp, il blocco può sparire entro un giorno o due quando le segnalazioni di spam diminuiscono. Puoi capire le singole risposte di errore del server [leggendo i messaggi di rimbalzo](/blog/550-5-7-1-error). Se l'indirizzo è sicuramente valido e il blocco alla consegna è stato tolto, il contatto deve iscriversi di nuovo dal tuo modulo di iscrizione per rientrare nella tua audience. Mailchimp non ti permette di riportare a mano un contatto Cleaned allo stato Subscribed.

## Quando molti contatti diventano Cleaned tutti insieme

Se una campagna recente ha fatto diventare Cleaned un grande gruppo di contatti tutti insieme, il tuo account potrebbe rischiare una sospensione automatica. Mailchimp sospende gli account in automatico quando un singolo invio supera le soglie di settore stabilite per bounce, disiscrizioni o segnalazioni di abuso. Mailchimp dice che i provider di servizi Internet e le organizzazioni antispam gli chiedono di applicare questi limiti. Se Mailchimp sospende il tuo account, l'invio viene disattivato mentre i team di conformità indagano. L'accesso, le chiamate API e l'accesso ai dati continuano però a funzionare normalmente.

Le liste vecchie sono la causa più probabile, perché le persone cambiano lavoro, abbandonano caselle e chiudono account. Se non scrivi alla tua audience da un po', Mailchimp suggerisce di riconfermare i contatti prima di programmare una campagna di massa, chiedendo agli iscritti di confermare che vogliono ancora ricevere i tuoi messaggi.

Mailchimp consiglia anche con forza di autenticare il tuo dominio di invio, di [configurare DMARC](/blog/what-is-a-dmarc-record) e di non usare mai un indirizzo email gratuito di Gmail o Yahoo come indirizzo From.

## Come evitare che i contatti diventino Cleaned

Il modo più diretto per evitare che gli indirizzi diventino Cleaned è verificare le liste prima di importarle o di inviare campagne. Uno strumento di verifica email controlla se ogni casella esiste davvero sul server di destinazione prima che parta una campagna. Così gli indirizzi non validi non rimbalzano nel tuo account. Qui [Giggal può collegarsi a Mailchimp](/integrations) con una chiave API: importa i contatti iscritti della tua audience, controlla se ogni casella esiste e risolve gli indirizzi sui [domini catch-all](/catch-all-verification). Al termine della verifica scarichi i risultati come file CSV e archivi o disiscrivi a mano gli indirizzi sbagliati direttamente in Mailchimp. Lo strumento non modifica nulla nella tua audience Mailchimp.

Verificare prima di inviare tiene bassi i bounce. Se hai un segmento vecchio che non riceve email da tempo, passalo da un verificatore o invia una campagna di riconferma prima di includerlo in una newsletter principale. Assicurati che i record di autenticazione del dominio restino validi nel DNS, perché un errore di allineamento DMARC è una delle cause di soft bounce riconosciute da Mailchimp. Ricorda che verificare la tua audience non recupera i contatti che Mailchimp ha già segnato come Cleaned. Quando un indirizzo riceve lo stato Cleaned, Mailchimp permette a quella persona di tornare solo con una nuova iscrizione dal tuo modulo.

## Domande frequenti

**I contatti Cleaned contano nella fattura di Mailchimp?**
No, i contatti Cleaned non contano nel tuo limite mensile di contatti, e Mailchimp non li fa pagare. Tra i tipi di contatto, solo i contatti Subscribed, Unsubscribed e Non-subscribed contano nel limite di contatti del tuo piano.

**Posso iscrivere di nuovo un contatto Cleaned?**
No, non puoi riportare a mano un contatto Cleaned allo stato Subscribed dalla dashboard di Mailchimp. L'iscritto deve inserire di nuovo i suoi dati nel modulo di iscrizione ospitato da Mailchimp o in un modulo incorporato nel tuo sito per dare di nuovo il consenso.

**Dopo quanti soft bounce Mailchimp segna un contatto come Cleaned?**
Mailchimp segna un indirizzo come Cleaned dopo 7 soft bounce se il contatto non ha nessuna attività precedente come iscritto. Se il contatto ha attività precedente, Mailchimp permette fino a 15 soft bounce prima di trasformare l'indirizzo in hard bounce e segnarlo come Cleaned.

**Devo eliminare i contatti Cleaned?**
No, Mailchimp consiglia di archiviare i contatti Cleaned invece di eliminarli. L'archiviazione tiene il record nella tua audience, e secondo Mailchimp questo ti aiuta a evitare un nuovo bounce da quell'indirizzo. Mailchimp dice di eliminare i contatti solo per motivi legati al GDPR.

**Perché Mailchimp ha segnato come Cleaned un indirizzo che so essere valido?**
Gli indirizzi email validi possono fare hard bounce se un filtro antispam o un firewall aziendale blocca i server di Mailchimp con risposte SMTP come Denied o Blocked. Se il destinatario chiede al suo amministratore di rete di consentire gli indirizzi IP di invio di Mailchimp, potrà rientrare nella tua audience dal tuo modulo di iscrizione.

L'etichetta Cleaned è Mailchimp che protegge la tua reputazione di invio dopo il problema. Verificare prima impedisce del tutto il bounce. Passa la tua lista di iscritti da [Giggal.ai](/email-list-cleaning) (in inglese) prima del prossimo invio, per trovare gli indirizzi non validi prima che Mailchimp li segni come Cleaned.
