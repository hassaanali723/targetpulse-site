---
title: "Come verificare email dietro i gateway di sicurezza"
description: Proofpoint, Mimecast e Barracuda accettano ogni indirizzo e rompono il controllo classico. Cosa succede su quei domini e come ottenere una risposta vera.
slug: verificare-email-dietro-gateway-di-sicurezza
date: 2026-09-23
keyword: verificare email dietro i gateway di sicurezza
cta: Recupera i contatti bloccati dai gateway
---

Se hai mai esportato un report di verifica e notato che un numero sospetto dei tuoi migliori contatti enterprise è tornato come sconosciuto, è probabile che di mezzo ci fosse un secure email gateway. Non un dominio catch-all, anche se il sintomo è identico. Un gateway.

La distinzione conta perché la soluzione è diversa, e perché i contatti dietro i gateway tendono a essere proprio quelli che volevi. Le piccole aziende raramente ne usano uno. Banche, assicurazioni, ospedali, università e gran parte delle Fortune 500 sì.

## Cosa fa il verificatore quando fallisce

Una verifica standard è una breve conversazione. Il verificatore si collega al server di posta indicato nei record MX del dominio, saluta, indica un mittente, poi indica il destinatario e aspetta. Un server che tiene un elenco reale delle sue caselle risponde onestamente. Dice sì a un indirizzo che esiste e no a uno che non esiste, e il verificatore annota la risposta.

Un secure email gateway è uno strato di filtro davanti al vero server di posta. Ogni messaggio per il dominio arriva prima al gateway, viene analizzato per malware, phishing e violazioni di policy, e solo dopo passa all'interno. Proofpoint, Mimecast, Barracuda, Cisco e una dozzina di vendor più piccoli funzionano tutti così.

Il gateway non ha motivo di sapere quali caselle esistono. Il suo lavoro è filtrare, non consultare una rubrica. Così, quando il verificatore chiede di un destinatario specifico, il gateway accetta. Accetta indirizzi reali, accetta errori di battitura, accetta i nomi di persone che se ne sono andate nel 2019. L'accettazione avviene al perimetro, e la decisione sull'esistenza della casella avviene da qualche parte dietro, dove il verificatore non arriva mai.

Da fuori, questo comportamento è indistinguibile da un dominio catch-all. Stessa conversazione, stessa risposta, stesso risultato inutile.

## Perché "rischioso" è il punto sbagliato in cui fermarsi

La maggior parte dei verificatori reagisce etichettando l'indirizzo. L'etichetta cambia da vendor a vendor. Vedrai risky, unknown, accept-all, catch-all o ok_for_all a seconda di quale export stai leggendo. Il significato è lo stesso in ogni caso: non siamo riusciti a capirlo.

Come risposta è onesta. Il problema è cosa succede dopo. Gli strumenti di invio tendono a trattare quelle etichette come un no morbido, e la maggior parte delle persone fa lo stesso, perché nessuno vuole scommettere la reputazione di mittente su un forse. Così gli indirizzi vengono tolti dalla campagna e dimenticati.

Su una lista B2B è circa il 30% dei contatti. Su una lista sbilanciata verso l'enterprise è di più. Hai pagato per acquisire quei contatti e hai pagato di nuovo per verificarli, e il risultato è stato un'alzata di spalle.

## Cosa fa diversamente un controllo che conosce i gateway

In breve: smetti di fare al gateway una domanda a cui non sa rispondere e trovi un'altra domanda a cui sa rispondere.

I gateway non sono muti. Si comportano secondo schemi che dipendono dal prodotto, dalla configurazione e dall'indirizzo specifico. I tempi di risposta cambiano tra un indirizzo che il gateway alla fine instraderà e uno che alla fine rifiuterà. I codici di errore e la loro formulazione esatta cambiano tra vendor e tra versioni. Alcuni gateway mostrano un rifiuto più avanti nella transazione, dopo il punto in cui la maggior parte dei verificatori smette di ascoltare. Alcuni si comportano in modo diverso per una casella reale e per una stringa casuale sullo stesso dominio, se sai cosa confrontare.

Leggere quei segnali significa prima riconoscere il gateway, poi applicare un controllo costruito per quel prodotto invece di quello generico. Per questo la copertura dei gateway viene di solito indicata con un numero. Giggal.ai ne rileva quindici, tra cui Proofpoint, Mimecast e Barracuda. Altri strumenti che ci provano ne citano tre o cinque. Un verificatore che non ne nomina nessuno quasi certamente restituisce il risultato generico e lo etichetta come rischioso.

Vale la pena essere chiari sui limiti. Si tratta di un'inferenza dal comportamento osservato, non di una consultazione di rubrica, quindi non è infallibile e nessun vendor onesto ti dirà il contrario. Quello che fa in modo affidabile è trasformare un ampio segmento inutilizzabile in uno per lo più utilizzabile, che è un'affermazione diversa e più modesta della perfezione.

## Capire quanta parte della lista ne è colpita

Non serve uno strumento per capire se il problema sono i gateway. Servono i record MX dei domini della tua lista.

Prendi la parte di dominio di ogni indirizzo, togli i duplicati e cerca i record MX di ciascuno. Un dominio dietro Proofpoint punta a hostname che contengono pphosted o ppe-hosted. I domini Mimecast puntano a host mimecast.com, di solito con un codice di regione. Barracuda compare come barracudanetworks.com. Cisco compare come iphmx.com. I domini Microsoft 365 e Google Workspace puntano rispettivamente a host outlook.com e google.com, e quelli non sono gateway, anche se possono comunque essere configurati come catch-all.

Incrocia quell'elenco con gli indirizzi su cui il verificatore si è arreso. Se la sovrapposizione è ampia, la storia è il gateway, e rilanciare lo stesso strumento non cambierà il risultato.

## Scegliere uno strumento per questo

Tre domande separano un verificatore che gestisce questo caso da uno che non lo fa.

Nomina i gateway che rileva? Un vendor che fa un lavoro reale qui pubblica un elenco o almeno un numero, perché è proprio quello che vende. Un linguaggio vago sul rilevamento avanzato senza prodotti nominati di solito significa rilevamento, non risoluzione: lo strumento ti dice che c'è un gateway ma non sa comunque dirti se la casella è reale.

Restituisce valida o non valida, oppure un'etichetta? Chiedi esattamente come appare l'output per un indirizzo dietro Mimecast. Se la risposta è un flag rischioso con un punteggio di confidenza, hai comprato un'etichetta un po' migliore.

Quanto costa sugli indirizzi che richiedono il lavoro? La risoluzione di gateway e catch-all costa di più al vendor, quindi la maggior parte la prezza in modo diverso. Alcuni fanno pagare un multiplo del credito standard. Altri la scalano da una quota separata e più piccola che finisce prima di quella standard. Nessuna delle due cose è irragionevole, ma è meglio saperlo prima di caricare una lista con il 40% di domini enterprise. Giggal.ai fattura ogni verifica a 1 credito fisso per indirizzo, dallo stesso saldo di tutto il resto.

## La sequenza pratica

Passa la lista nello strumento che usi ora e tieni l'export. Estrai ogni riga tornata come rischiosa, sconosciuta o accept-all. Controlla i record MX di quei domini per vedere quanti sono gateway e non semplici catch-all. Poi passa solo quel segmento in uno strumento costruito per questo e confronta i due export fianco a fianco.

Il punto è il confronto. Ogni vendor, noi compresi, fa affermazioni sulla precisione che in una pagina prezzi suonano simili. L'unico numero che conta è quanti dei tuoi contatti dati per persi tornano vivi, e se quelli segnati come validi hanno davvero accettato la posta quando hai inviato.

Se vuoi provarlo, Giggal.ai dà 1.000 crediti gratis senza carta, e funzionano su un caricamento in blocco invece che un indirizzo alla volta, che è l'unico modo in cui questo test ti dice qualcosa. Per un singolo indirizzo puoi usare la [verifica email](/email-checker). Puoi anche leggere di più su [come verifichiamo i domini catch-all e accept-all](/catch-all-verification), o sull'[approccio alla verifica SEG](/seg-email-verification) più nel dettaglio.
