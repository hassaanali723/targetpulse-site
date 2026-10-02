---
title: "Hard bounce e soft bounce: cosa significano e cosa fare"
seoTitle: "Hard bounce e soft bounce: significato e cosa fare"
description: Hard bounce e soft bounce spiegati in modo semplice: come leggere il codice, perché gli strumenti lo classificano diversamente e quale tasso è sicuro.
slug: hard-bounce-e-soft-bounce
date: 2026-09-27
updated: 2026-09-27
keyword: hard bounce soft bounce
image: /blog/covers/it/hard-bounce-e-soft-bounce.webp
imageAlt: Hard bounce e soft bounce, un 5 nel codice significa permanente e un 4 significa riprova
cta: Trova gli hard bounce prima di inviare
---

Un hard bounce è un errore permanente. L'indirizzo email non esiste, il dominio non esiste, oppure il server di destinazione ti ha bloccato. Se invii di nuovo, rimbalza di nuovo.

Un soft bounce è un errore temporaneo. L'indirizzo è reale, ma qualcosa ha fermato la consegna per ora. La casella è piena, il server è occupato, oppure il server ti chiede di riprovare più tardi. Se invii di nuovo, spesso il messaggio arriva.

Queste sono le definizioni. Ci sono altre tre cose che devi sapere, e contano più delle definizioni:

- Ogni strumento di invio usa regole diverse. Lo stesso bounce può contare come hard in uno strumento e come soft in un altro.
- Un indirizzo corretto e funzionante può comunque fare hard bounce. Succede quando la configurazione della tua email è sbagliata, non l'indirizzo.
- Il tasso di bounce che fa sospendere il tuo account non è sempre quello che vedi nel report della campagna.

Questa guida copre tutti e tre i punti.

## Hard bounce e soft bounce: la differenza

| | Hard bounce | Soft bounce |
|---|---|---|
| Cosa significa | Permanente. L'email non verrà consegnata | Temporaneo. Potrebbe essere consegnata a un tentativo successivo |
| Codice nel messaggio di rimbalzo | Inizia con 5 (550, 5.1.1, 5.7.1) | Inizia con 4 (421, 450, 4.2.2) |
| Cause comuni | L'indirizzo non esiste, il dominio non esiste, mittente bloccato | Casella piena, server occupato, troppe email in una volta |
| Cosa fa il tuo strumento di invio | Smette di inviare a quell'indirizzo, di solito subito | Riprova per un po', spesso fino a 72 ore |
| Cosa dovresti fare | Rimuovere l'indirizzo. Non inviare più | Aspettare. Rimuoverlo solo se continua a rimbalzare |
| Danno alla tua reputazione | Alto. Molti hard bounce dicono ai provider che la tua lista è di scarsa qualità | Basso per un singolo bounce. Si accumula se gli stessi indirizzi continuano a rimbalzare |

## Cos'è un hard bounce?

Un hard bounce significa che il server di destinazione ha rifiutato la tua email in modo definitivo. Riprovare non serve.

Lo standard delle email, la RFC 5321, lo chiama errore permanente. Le sue parole esatte sono che il mittente "should not retry", cioè non dovrebbe ripetere la stessa richiesta.

Esistono due tipi di hard bounce. Nel report sembrano uguali, ma richiedono soluzioni diverse.

**Primo tipo: l'indirizzo è sbagliato.** La casella non esiste. Oppure il dominio non esiste. Oppure l'indirizzo è scritto male. Una lista verificata non dovrebbe mai produrre questi bounce. Ecco come si presentano:

- Gmail dice: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft dice: `5.1.1 Bad destination mailbox address`
- Microsoft dice anche: `5.4.1 Recipient address rejected: Access denied`. La documentazione Microsoft spiega questo codice così: "the recipient's address doesn't exist", l'indirizzo del destinatario non esiste.

Anche un indirizzo chiuso quando una persona ha lasciato l'azienda rientra in questo gruppo.

**Secondo tipo: sei bloccato.** L'indirizzo è reale. Ma il server di destinazione non accetta posta da te. Questi bounce hanno codici che iniziano con 5.7:

- `550 5.7.1` indica un blocco per policy.
- `550 5.7.26` indica che Gmail ha rifiutato la tua email perché il tuo dominio non è autenticato.
- `550 5.7.30` indica che la tua email non ha superato il controllo DKIM.

Il tuo strumento di invio conta questi codici come hard bounce, perché iniziano con 5. Ma l'indirizzo va bene. Il problema è dalla tua parte. Lo spieghiamo meglio più avanti, perché dal 2025 è la causa di hard bounce che cresce più in fretta sulle liste pulite.

## Cos'è un soft bounce?

Un soft bounce significa che il server di destinazione ha risposto "non adesso". La RFC 5321 lo chiama errore temporaneo. Le sue parole sono: "the error condition is temporary and the action may be requested again", cioè la condizione di errore è temporanea e la richiesta può essere ripetuta. Il tuo strumento di invio la prende alla lettera e riprova più tardi.

Ecco le cause comuni, con i codici che vedrai:

- **Casella piena.** Gmail dice `452 4.2.2 The recipient's inbox is out of storage space`. La persona può cancellare qualche email e liberare spazio.
- **Troppe email troppo in fretta.** Gmail dice `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Oppure `421 4.7.28` quando vede troppa posta dal tuo indirizzo IP. Microsoft dice da `4.7.500` a `4.7.699 Access denied, please try again later` mentre controlla la tua attività.
- **Greylisting.** Alcuni server, e molti secure email gateway, rifiutano la prima email da un mittente che non conoscono. Poi la accettano al secondo tentativo. L'attesa è di solito di circa 15 minuti.
- **Server non disponibile.** Un codice `421` significa che il server non è disponibile. Un `4.4.1` o `4.4.2` significa che la connessione è fallita o è scaduta.
- **Email scaduta.** Un codice `4.4.7` significa che il tuo server ha continuato a provare, poi si è arreso. La RFC 5321 dice che i server dovrebbero riprovare per circa quattro o cinque giorni.

Un soft bounce è normale. Un soft bounce che si ripete è un problema. Se una casella risulta "piena" a ogni invio per sei settimane, quella casella non è piena. È abbandonata. Prima o poi ogni strumento di invio la tratterà così.

## Come leggere il codice in un messaggio di rimbalzo

Ogni messaggio di rimbalzo contiene un codice. Quando sai leggerlo, non ti serve l'etichetta di nessuno. Vedi da solo cosa è successo.

In ogni messaggio ci sono due codici.

**Il primo codice ha tre cifre**, come 550 o 421. Qui conta solo la prima cifra. Un 4 significa temporaneo. Un 5 significa permanente.

**Il secondo codice ha tre numeri separati da punti**, come 5.1.1. Il primo numero ripete la stessa regola: 4 è temporaneo, 5 è permanente. Il secondo e il terzo numero ti dicono il motivo:

- `.1.1` significa che la casella non esiste (la parte prima della @ è sbagliata).
- `.1.2` significa che il dominio non esiste (la parte dopo la @ è sbagliata).
- `.2.2` significa che la casella è piena.
- `.7.1` significa che il server ti ha rifiutato per una policy.

![Come leggere un codice di rimbalzo: la prima cifra dice se è hard o soft, il codice esteso dice il motivo, e l'azione dipende da entrambi](/blog/fig-it-bounce-code-reading.webp)
Leggi la prima cifra per conoscere il tipo. Leggi il codice completo per conoscere il motivo. Poi agisci in base al motivo.

La tabella qui sotto elenca i codici che vedrai davvero. Il testo dei messaggi è copiato dalla documentazione ufficiale di Gmail e di Microsoft.

| Codice | Dove lo vedi | Cosa significa | Tipo | Cosa fare |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, quasi tutti i server | La casella non esiste | Hard | Rimuovi l'indirizzo |
| 5.1.2 | Qualsiasi server | Il dominio non esiste | Hard | Rimuovi l'indirizzo |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | L'indirizzo non esiste | Hard | Rimuovi l'indirizzo |
| 550 5.2.1 | Gmail | L'account è inattivo | Hard | Rimuovi l'indirizzo |
| 552 5.2.2 | Gmail | La casella è piena e l'account è inattivo | Hard | Rimuovi l'indirizzo |
| 452 4.2.2 | Gmail | La casella è piena | Soft | Aspetta. Rimuovilo se continua a succedere |
| 450 4.2.1 | Gmail | La persona sta ricevendo troppe email | Soft | Aspetta |
| 421 4.7.28 | Gmail | Troppa posta in arrivo dal tuo IP | Soft | Invia più lentamente. Controlla la lista |
| 550 5.7.28 | Gmail | Troppa posta indesiderata dal tuo IP | Hard | Smetti di inviare. Sistema la lista e il volume |
| 550 5.7.1 | Gmail, Microsoft | Bloccato da una policy | Hard, ma l'indirizzo va bene | Controlla autenticazione e reputazione |
| 550 5.7.26 | Gmail | Il tuo dominio non è autenticato | Hard, ma l'indirizzo va bene | Configura SPF e DKIM |
| 550 5.7.30 | Gmail | La tua email non ha superato DKIM | Hard, ma l'indirizzo va bene | Sistema la configurazione DKIM |
| 5.7.23 | Microsoft | La tua email non ha superato SPF | Hard, ma l'indirizzo va bene | Sistema il record SPF |
| da 5.7.606 a 5.7.649 | Microsoft | Il tuo IP di invio è bannato | Hard, ma l'indirizzo va bene | Chiedi a Microsoft di togliere il ban, poi risolvi la causa |
| da 4.7.500 a 4.7.699 | Microsoft | Attività sospetta, bloccato per ora | Soft | Aspetta. Si sblocca da solo se sei un mittente legittimo |
| 4.4.7 | Qualsiasi server | L'email è scaduta dopo giorni di tentativi | Soft, ma ha rinunciato | Rimuovi l'indirizzo se si ripete |

Guarda l'ultima colonna. Due codici possono essere entrambi hard bounce e richiedere azioni opposte. Un `5.1.1` significa cancella l'indirizzo. Un `5.7.26` significa tieni l'indirizzo e sistema il tuo DNS.

## Perché lo stesso bounce è hard in uno strumento e soft in un altro

Le persone confrontano i tassi di bounce tra strumenti diversi e si confondono. Ecco perché.

Il server di destinazione invia un codice. Fa solo questo. Poi il tuo strumento di invio decide cosa fare con quel codice. Ogni strumento ha la sua regola, e le regole sono diverse. La guida di Twilio lo dice chiaramente: "not all ISPs adhere to that code consistently", non tutti i provider rispettano quel codice in modo coerente.

Ecco quattro strumenti diffusi e le loro regole:

| Strumento | Cosa fa con un soft bounce | Quando un soft bounce diventa hard bounce |
|---|---|---|
| Mailchimp | Riprova e mantiene il contatto | Dopo 7 soft bounce se il contatto non ha mai aperto nulla. Dopo 15 se ha aperto in passato |
| HubSpot | Lo chiama "pending" e riprova fino a 72 ore. Poi registra un soft bounce | Non in automatico. Ma HubSpot mette "casella piena" nel gruppo degli hard bounce, non dei soft |
| SendGrid | Riprova fino a 72 ore | Dopo 72 ore smette di provare. Gli hard bounce finiscono in una lista di blocco |
| Amazon SES | Riprova per un po', poi ti avvisa che ha smesso | Mai in automatico. Solo gli hard bounce contano nel tasso di bounce. Le risposte automatiche non contano affatto |

![Quattro piattaforme di invio e le loro regole su quando un soft bounce diventa hard bounce](/blog/fig-it-bounce-rules-by-platform.webp)
Stesso codice, quattro regole diverse. Sposta una lista da Mailchimp a HubSpot e il numero di hard bounce cambia, anche se gli indirizzi sono gli stessi.

Quindi una casella piena è un soft bounce per Gmail. È un hard bounce per HubSpot. E per Amazon SES è un soft bounce che non diventa mai hard. Se il tuo tasso di bounce cambia dopo aver cambiato strumento, controlla le regole prima di dare la colpa alla lista.

La soluzione semplice è smettere di fidarsi dell'etichetta e leggere il codice. Ogni strumento permette di esportare il messaggio di rimbalzo. Il codice al suo interno è lo stesso, indipendentemente da quale strumento lo ha raccolto.

## Qual è un tasso di hard bounce accettabile?

Il limite lo decide l'azienda che invia la tua posta. La maggior parte non lo pubblica. Amazon SES sì, e i suoi numeri sono una buona guida per capire come ragionano i provider.

| Tasso di hard bounce | Cosa fa Amazon SES |
|---|---|
| Sotto il 2% | Il livello sotto cui SES ti dice di restare "for best results", per i migliori risultati |
| 5% o più | Il tuo account viene messo sotto revisione |
| 10% o più | L'invio può essere sospeso finché non risolvi il problema |

Due dettagli contano. SES conta solo gli hard bounce. I soft bounce e i bounce per IP bloccato non contano contro di te. E SES non usa una finestra di tempo fissa. Guarda un volume tipico dei tuoi invii, quindi un piccolo mittente viene giudicato allo stesso modo di uno grande.

Le segnalazioni di spam viaggiano insieme ai bounce. Le linee guida per i mittenti di Google dicono di tenere il tasso di segnalazioni sotto lo 0,10 percento e di non arrivare mai allo 0,30 percento. Amazon SES mette gli account sotto revisione allo 0,1 percento e può sospenderli allo 0,5 percento. Una lista che fa hard bounce sopra il 2 percento di solito riceve anche segnalazioni. Entrambe le cose hanno la stessa causa: persone che non hanno chiesto la tua posta, e indirizzi che nessuno ha controllato.

L'articolo sui [valori di riferimento del tasso di rimbalzo](/blog/how-to-reduce-email-bounce-rate) divide i limiti sicuri per tipo di email e per origine della lista.

## Devi rimuovere gli hard bounce dalla lista?

Sì. Subito.

Le parole esatte di Amazon sono: "you should immediately remove the recipient's email address from your mailing list", dovresti rimuovere subito l'indirizzo del destinatario dalla tua lista. La stessa pagina avverte che, se continui a inviare a indirizzi che hanno fatto hard bounce, il tuo invio può essere sospeso. Mailchimp non ti lascia nemmeno scegliere. Gli indirizzi con hard bounce vengono "cleaned from your audience automatically and immediately", rimossi dall'audience in automatico e subito, e non ricevono più nulla.

Non riprovare. Non tenerli per la prossima campagna nel caso la casella torni attiva. Un indirizzo `5.1.1` che è rimbalzato il mese scorso rimbalzerà anche il mese prossimo. Ogni tentativo in più dice al provider che invii a indirizzi che non conosci.

C'è un'eccezione. Se il codice è `5.7.26`, `5.7.30`, `5.7.23`, oppure un codice di IP bannato come `5.7.6xx`, il problema non è l'indirizzo. Cancellarlo non risolve nulla. Sistema l'autenticazione o la reputazione. Poi invia di nuovo allo stesso indirizzo.

I soft bounce sono l'opposto. Lasciali stare. Il tuo strumento di invio riproverà da solo. Se il tuo strumento non ha una regola per i bounce ripetuti, creane una. Un indirizzo che fa soft bounce per tre invii di fila in un mese non tornerà. La regola dei sette di Mailchimp è un limite sicuro per chiunque.

## Perché un indirizzo corretto fa hard bounce?

Perché un hard bounce misura se l'email è stata accettata. Non misura se l'indirizzo esiste. Quattro cose causano un bounce 5xx su una casella reale e funzionante.

**La tua email non è autenticata.** Il 5 maggio 2025 Microsoft ha iniziato a imporre SPF, DKIM e DMARC a qualsiasi dominio che invia più di 5.000 email al giorno a indirizzi Outlook.com, Hotmail e Live. Prima ha spostato la posta non conforme nella cartella spam. Poi ha iniziato a rifiutarla con `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. Google richiede gli stessi tre record ai mittenti di massa. I codici `550 5.7.26` e `550 5.7.30` di Gmail sono ciò che vedi dalla tua parte quando manca un record. Tutti questi codici iniziano con 5. Quindi finiscono nella colonna degli hard bounce, anche se gli indirizzi avrebbero accettato l'email.

**L'azienda blocca gli indirizzi sconosciuti all'ingresso.** Microsoft Exchange può essere configurato per rifiutare qualsiasi indirizzo che non è nella directory aziendale. Lo fa con `5.4.1 Recipient address rejected: Access denied`. Nella maggior parte dei casi è un vero hard bounce. A volte è un nuovo dipendente la cui casella non è ancora stata aggiunta. Per questo un verificatore che controlla la casella stessa ti dà una risposta migliore di quella del bounce.

**C'è un secure email gateway davanti alla casella.** Molte aziende fanno passare tutta la posta in arrivo attraverso un [secure email gateway](/blog/what-is-a-secure-email-gateway) come Proofpoint, Mimecast o Barracuda. Il gateway risponde per tutto il dominio. Analizza ogni email e rifiuta tutto ciò che viola una delle sue regole, di solito con un codice di policy `5.7.1`. Quello è un hard bounce su una casella che esiste. I gateway causano anche bounce in ritardo. Il gateway accetta l'email all'ingresso senza controllare se la casella esiste. Il bounce arriva minuti o ore dopo, quando il server dietro il gateway non trova la casella. Il tuo report mostra un hard bounce, ma è arrivato dopo l'invio, non durante.

**Il dominio è catch-all.** È il problema inverso. Un [dominio catch-all](/blog/what-is-a-catch-all-email-address) accetta posta per qualsiasi indirizzo, reale o no. Quindi non risponde mai `5.1.1` all'ingresso. L'email viene accettata, poi rimbalza più tardi, oppure sparisce senza avviso. Circa il 30 percento di una lista B2B si trova su questi domini. È da lì che arrivano gli hard bounce inaspettati.

Se vuoi sapere [perché le email rimbalzano](/blog/why-cold-emails-bounce) nel cold outreach in particolare, le cause si sommano in modo diverso. Lì l'età della lista fa la maggior parte del danno.

## Come fermare gli hard bounce prima di inviare

Quasi ogni `5.1.1` in un report di campagna si poteva evitare. La casella era già sparita prima che tu premessi invio. La verifica fa al server di destinazione la stessa domanda che avrebbe fatto il bounce, ma prima della campagna invece che dopo.

Un [verificatore di indirizzi email](/email-checker) esegue tre controlli in ordine:

- **Sintassi.** Intercetta cose come `nome@gmail..com` prima che ti costino un invio.
- **Dominio.** Intercetta errori di battitura come `gmial.com` e domini scaduti.
- **Casella.** Apre una connessione con il server di destinazione e chiede se accetta posta per quell'indirizzo esatto. Se la risposta è `5.1.1`, è lo stesso bounce che avresti ricevuto dalla campagna. Ma non ti costa reputazione, perché nessuna email è stata inviata.

La verifica standard si ferma in un punto. Su un dominio catch-all, il server dice sì a ogni indirizzo. Quindi il controllo torna come "sconosciuto" o "rischioso", e devi tirare a indovinare. Giggal.ai è nato per trasformare quella parte della lista in una risposta reale, valido o non valido. La pagina sulla [verifica catch-all](/catch-all-verification) spiega come.

I gateway causano lo stesso problema. Un gateway accetta la domanda del verificatore per qualsiasi indirizzo, quindi anche lì un controllo standard torna "sconosciuto". Giggal.ai controlla questi indirizzi in un altro modo. L'articolo su come [verificare le email dietro i secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways) spiega cosa fa il gateway e come il controllo lo supera.

Per i moduli di iscrizione, aggiungi una chiamata di [verifica in tempo reale](/public/docs) al momento dell'invio del modulo. Un indirizzo scritto male viene intercettato mentre la persona è ancora sulla pagina. È l'unico passaggio che riduce i bounce sulle liste che non hai ancora costruito.

Poi occupati di due tipi di indirizzo che superano la verifica ma ti danneggiano comunque. Gli indirizzi di ruolo come info@ e support@ esistono, quindi passano. Ma nessuno li possiede personalmente e ricevono più segnalazioni. Gli indirizzi usa e getta passano finché esistono e spariscono dopo. Ogni buon verificatore li segnala entrambi. Una lista di [cold email](/blog/good-bounce-rate-for-cold-email) in particolare dovrebbe eliminarli prima del primo invio.

## Domande frequenti

**Qual è la differenza tra tasso di hard bounce e tasso di soft bounce?**
Ognuno è quel tipo di bounce diviso per le email inviate. Il tasso di hard bounce è quello che ti mette nei guai, perché mostra la qualità della tua lista. Amazon SES, per esempio, conta solo gli hard bounce quando decide di mettere sotto revisione o sospendere un account. Il tasso di soft bounce dice di più sulla velocità di invio, sul volume e sulla reputazione. Leggilo separatamente.

**Devo cancellare le email che sono rimbalzate?**
Cancella subito gli hard bounce con codici di indirizzo: `5.1.1`, `5.1.2`, `5.2.1` e simili. Tieni gli hard bounce con codici di autenticazione, `5.7.26`, `5.7.30` e `5.7.23`, e sistema invece l'autenticazione. Tieni i soft bounce e lascia che il tentativo vada avanti. Rimuovi ogni indirizzo che fa soft bounce più volte di fila.

**Un soft bounce può diventare un hard bounce?**
Sì, in due modi. Il server di destinazione può cambiare risposta. Gmail segnala una casella piena come `452 4.2.2` finché l'account è attivo, e come `552 5.2.2` quando l'account diventa inattivo. Oppure il tuo strumento di invio può cambiare l'etichetta. Mailchimp trasforma un indirizzo in hard bounce dopo 7 soft bounce senza attività, o 15 con attività.

**I soft bounce danneggiano la reputazione del mittente?**
Uno no. Un flusso costante sì. I provider vedono che invii ancora e ancora a caselle che non possono ricevere. E un tasso di soft bounce alto è spesso un avviso di per sé. Un codice come `421 4.7.28` è il provider che ti dice direttamente di rallentare.

**Perché la mia email ha fatto hard bounce se l'indirizzo è corretto?**
Quasi sempre per l'autenticazione. Gmail e Outlook.com ora rifiutano la posta di massa senza SPF, DKIM e DMARC. Quel rifiuto è un codice 5xx, quindi il tuo strumento lo registra come hard bounce. Controlla il codice. Se inizia con `5.7`, il problema non è l'indirizzo.

Un report di bounce è utile solo se sai leggerlo. Leggi la prima cifra. Poi leggi il motivo. Poi agisci in base al motivo. Gli indirizzi che sarebbero rimbalzati con `5.1.1` sono la parte facile, perché puoi trovarli prima di inviare. Passa la lista in [Giggal.ai](/) prima. La colonna degli hard bounce nel tuo prossimo report conterrà quasi solo cose che non potevi sapere.
