---
title: Quanto dura il warm-up di un dominio email prima di una campagna
seoTitle: "Warm-up dominio email: quanto dura prima di una campagna (2026)"
description: "Per un dominio nuovo prevedi da 2 a 4 settimane di warm-up, dopo che è invecchiato. Tempi per situazione, un piano giorno per giorno e i numeri da controllare."
slug: warm-up-dominio-email
date: 2026-10-19
updated: 2026-10-19
keyword: warm up dominio email
image: /blog/covers/it/warm-up-dominio-email.webp
imageAlt: "Quanto dura il warm-up di un dominio email: circa 30 giorni di età del dominio, da 2 a 4 settimane di crescita, poi invio quando i bounce restano sotto il 2 percento"
cta: Verifica la lista della prima campagna prima di inviare
---

Un nuovo dominio email ha bisogno di circa 2-4 settimane di warm-up prima di una vera campagna. Il conteggio dovrebbe partire solo dopo che il dominio ha qualche settimana di età. Una nuova casella su un dominio che già invia normale posta di lavoro di solito è pronta in circa 2 settimane. Se ti chiedi quanto deve durare il warm-up di un dominio email prima di una campagna, questi sono i numeri per pianificare. Poi sono i tuoi tassi di bounce e di segnalazioni a dire quando sei davvero pronto.

Nessun provider di posta pubblica una durata ufficiale del warm-up. Google, Microsoft e Yahoo non danno un numero di giorni per le email inviate da caselle normali. Le cifre che trovi online, da 14 giorni a 12 settimane, vengono soprattutto da aziende che vendono strumenti di warm-up. Questa guida mostra su cosa si basa ogni tempistica, così puoi scegliere quella giusta per la tua situazione.

Se prima ti servono le basi su cos'è il warm-up, parti dalla voce [warm-up email](/glossary/email-warmup) del nostro glossario.

## Quanto dura il warm-up di un dominio email, per situazione

La durata giusta dipende da cosa è nuovo: il dominio, la casella, l'account con il tuo provider di posta o l'IP di invio.

| Situazione | Prevedi | Su cosa si basa |
|---|---|---|
| Dominio nuovo, caselle nuove | Lascia invecchiare il dominio per circa 30 giorni, poi 2-4 settimane di crescita | Spamhaus mette in lista di blocco i domini appena registrati per le prime 24 ore. L'esperto di deliverability Al Iverson consiglia un dominio con almeno 30 giorni di età prima del warm-up. |
| Nuova casella su un dominio che già invia posta normale | Circa 2 settimane di crescita | Il dominio ha già una storia di invii. È nuovo solo il volume della nuova casella. |
| Nuovo account Microsoft 365 (tenant) | 60 giorni prima del limite completo di invio verso l'esterno | Microsoft sta riducendo il limite di destinatari esterni al 10% nei primi 30 giorni di un tenant e al 25% dal giorno 31 al 60. I tenant di prova scendono a 500 destinatari esterni al giorno. |
| Dominio che riprende dopo una pausa | Riparti piano, come se fosse nuovo | Twilio SendGrid dice di rifare il warm-up di un IP dopo più di 30 giorni senza invii. |
| IP dedicato su una piattaforma email | 30-45 giorni, seguendo il piano della piattaforma | Amazon SES fa crescere i volumi in 45 giorni, Twilio SendGrid in 41 giorni, Mandrill di Mailchimp in circa 30 giorni. Postmark prevede da 3 a 6 settimane. |

I limiti di Microsoft 365 contano soprattutto per i team che creano un nuovo tenant solo per l'outreach. Microsoft ha annunciato la modifica ad agosto 2026 e la sta introducendo tra metà settembre e la fine di novembre 2026. Finché un nuovo tenant non ha due mesi, non può inviare all'esterno a pieno volume, qualunque cosa dica il tuo strumento di warm-up.

![Tempi di warm-up di un dominio email per situazione: dominio nuovo, nuova casella su un dominio esistente, nuovo tenant Microsoft 365, dominio in pausa e IP dedicato](/blog/fig-it-warm-up-time-by-situation.webp)

## Perché i numeri online non coincidono

Se cerchi questa domanda trovi 14 giorni, 3 settimane, almeno 30 giorni, da 4 a 6 settimane e 45 giorni. Ci sono tre motivi per questa differenza.

Primo, non esiste un numero ufficiale da copiare. Le linee guida di Google per i mittenti dicono di "iniziare con un volume di invio basso verso utenti coinvolti e aumentare lentamente il volume nel tempo". Non dicono per quanto tempo. Le buone pratiche di Yahoo per i mittenti non parlano affatto della crescita dei volumi.

Secondo, alcune cifre vengono attribuite a fonti che non le contengono. Alcune guide attribuiscono a Microsoft una tempistica di "4-8 settimane" e una regola che aumenta il volume di 1,5 volte a ogni passo. Non abbiamo trovato nessuna delle due cifre su una pagina Microsoft. L'unico periodo di crescita che Microsoft pubblica riguarda il suo prodotto email Azure Communication Services: "da due a quattro settimane".

Terzo, la maggior parte delle pagine che si posizionano per questa domanda appartiene ad aziende che vendono strumenti di warm-up. Un periodo consigliato più lungo significa anche più settimane di abbonamento a pagamento.

Il comportamento reale dei mittenti è molto più breve dei consigli. Smartlead ha analizzato più di 850 milioni di email inviate tramite la sua piattaforma nella prima metà del 2026. Ha rilevato che "il mittente medio fa il warm-up di una nuova casella per 8 giorni prima della prima campagna, contro i 9,4 giorni di un anno prima". Smartlead stessa precisa che questo è ciò che fanno i mittenti, non un minimo sicuro dimostrato.

## Cosa decide quanto dura il tuo warm-up

Cinque fattori incidono sulla tempistica.

**Età del dominio.** Un dominio registrato questa settimana non ha nessuna storia. Spamhaus aggiunge i domini appena registrati e quelli inattivi da tempo a una lista di blocco per le prime 24 ore, e alcuni server riceventi usano quella lista. Comprare i domini per l'outreach un mese prima di usarli non costa nulla ed elimina questo rischio.

**Quanto devi inviare.** Google dice che "più email invii, più lentamente dovresti aumentare il volume di invio". Un team che ha bisogno di 30 email al giorno da una casella finisce molto prima di un team che ne ha bisogno di 3.000.

**Quanto spesso invii.** Google dice anche che puoi "aumentare il volume di invio più rapidamente se invii ogni giorno invece che ogni settimana". Un dominio che invia un po' ogni giorno lavorativo costruisce una storia più in fretta di uno che invia a blocchi settimanali.

**Quali provider usano i tuoi destinatari.** La posta verso Gmail, Outlook.com e i server aziendali viene giudicata separatamente. Amazon SES osserva che con alcuni provider "puoi costruire una reputazione positiva in circa due settimane, mentre con altri possono servire fino a sei settimane".

**Qualità della lista.** Bounce e segnalazioni di spam durante il warm-up allungano i tempi, a volte di settimane. È il fattore che la maggior parte dei team può controllare direttamente, e ne parliamo più avanti.

## Un piano di warm-up giorno per giorno

Una crescita sicura avanza a piccoli passi e mantiene ogni passo abbastanza a lungo da vedere i risultati. La guida di Customer.io sul warm-up dei domini usa passi di circa 1,5 volte il volume precedente, con ogni fase che dura 2-3 giorni. Ecco questo schema per una casella che punta a 50 cold email al giorno.

| Giorni | Email al giorno | Passa alla fase successiva solo se |
|---|---|---|
| Prima del giorno 1 | Dominio invecchiato, SPF, DKIM e DMARC configurati, posta reale in circolazione | L'autenticazione passa su un'email di prova |
| Da 1 a 3 | 10 | Nessun hard bounce, nessuna segnalazione di spam |
| Da 4 a 6 | 15 | Tasso di bounce sotto il 2% |
| Da 7 a 9 | 22 | Arrivano risposte, nessun rinvio |
| Da 10 a 12 | 33 | Tasso di bounce sotto il 2%, tasso di spam sotto lo 0,08% |
| Da 13 a 15 | 50 | Come sopra, poi mantieni questo livello |

Invia prima ai contatti più coinvolti. Google indica di iniziare "verso utenti coinvolti", cioè in pratica persone che ti conoscono, clienti esistenti e chi ti ha risposto di recente.

Due regole fanno funzionare il piano. Se una fase va male, ripetila invece di passare oltre. E invia ogni giorno lavorativo. Mailgun fa notare che i suoi limiti di warm-up presuppongono invii quotidiani: se ti fermi, "non puoi ripartire dal limite del giorno otto".

Se ti servono più di 50 email al giorno, aggiungi altre caselle già scaldate invece di spingere di più su una sola casella.

![Un piano di warm-up email giorno per giorno da 10 a 50 email al giorno con passi di circa 1,5 volte, con i controlli su bounce e spam che permettono di passare al passo successivo](/blog/fig-it-warm-up-ramp-schedule.webp)

## Come capire che il dominio è pronto

Un dominio è pronto quando i suoi numeri restano buoni mentre il volume sale. Controlla questi punti prima della tua prima vera campagna:

- **Tasso di bounce sotto il 2%.** Customer.io dice che tassi di bounce sopra il 2% "indicano problemi di pulizia della lista da risolvere prima di andare avanti". La nostra [guida sul tasso di rimbalzo delle cold email](/blog/good-bounce-rate-for-cold-email) spiega le fasce.
- **Tasso di segnalazioni di spam sotto lo 0,08%.** È l'obiettivo di warm-up di Customer.io. Il limite massimo di Google per Gmail è lo 0,3%, quindi restare molto sotto ti lascia margine per gli errori.
- **Nessun errore di limite di frequenza.** Se Gmail restituisce il codice 421 4.7.28, ha "rilevato una frequenza insolita di email" da parte tua. Rallenta. Il consiglio di Google è ridurre il volume finché gli errori non si fermano, "poi aumentare di nuovo lentamente".
- **L'autenticazione passa.** Invia un'email di prova a un account Gmail, apri "Mostra originale" e controlla che SPF, DKIM e DMARC risultino PASS. La nostra [guida su SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained) spiega ogni record.
- **Arrivano risposte reali.** Le risposte di persone reali sono un segnale migliore di qualsiasi punteggio in una dashboard.

Google Postmaster Tools può aiutare, con un limite. La sua dashboard sullo stato di conformità è aperta a tutti i mittenti. Ma Google dice che i dati possono mancare "nei giorni in cui il volume di email in uscita è basso", ed è proprio la situazione del warm-up. Non aspettare che Postmaster Tools si riempia di dati prima di fidarti dei tuoi numeri di bounce e segnalazioni.

## Gli strumenti di warm-up lo rendono più veloce?

Gli strumenti di warm-up automatico inviano email tra una rete di caselle. Le email vengono aperte, ricevono risposta e vengono spostate fuori dallo spam in automatico. L'idea è dare al tuo dominio un coinvolgimento positivo prima che parta la campagna vera.

Le prove che questo accorci il warm-up sono deboli:

- **Google non usa le aperture.** Le sue linee guida per i mittenti dicono: "Google non tiene traccia dei tassi di apertura".
- **Il coinvolgimento artificiale potrebbe non contare.** Customer.io, una piattaforma email, afferma che "i provider di posta riconoscono il coinvolgimento artificiale e non gli attribuiscono alcun credito di reputazione", e non supporta questi servizi.
- **La posta di warm-up arriva in modo diverso dalla posta reale.** I dati di Smartlead mostrano che le email di warm-up arrivano in inbox circa il 99% delle volte. Smartlead aggiunge che questo dato riguarda la consegna delle email di warm-up, "non delle campagne a freddo".
- **Google si è già opposta in passato.** GMass, uno strumento email, dice che nell'autunno 2022 Google gli ha chiesto di disattivare il suo sistema di warm-up, pena la perdita dell'accesso all'API di Gmail.

Google e Microsoft non hanno pubblicato nessuna regola specifica sugli strumenti di warm-up. Se ne usi uno, considera il suo punteggio di inbox come una metrica dello strumento, non come una prova che la tua campagna arriverà in inbox. Sono le conversazioni reali con contatti reali a costruire la storia che conta.

## La parte che il warm-up non può risolvere: la lista della prima campagna

Un solo invio sbagliato può annullare settimane di warm-up. La causa abituale è la lista della prima campagna. Le liste di contatti invecchiano perché le persone cambiano lavoro e le aziende chiudono le caselle. Invia a qualche centinaio di vecchi indirizzi il giorno 16 e il tasso di bounce può salire ben oltre il 2%.

In quella fase i bounce colpiscono un dominio che ha solo due settimane di storia. Non c'è abbastanza storia positiva per compensarli. Google dice ai mittenti di ridurre il volume quando i bounce aumentano, quindi la crescita deve ripartire da capo.

Per questo controlla la lista prima della prima campagna, non dopo l'arrivo dei bounce:

1. Passa la lista da una [verifica email](/email-checker) o da una [pulizia completa della lista email](/email-list-cleaning) (in inglese).
2. Togli gli indirizzi non validi, temporanei e di ruolo.
3. Tieni gli indirizzi catch-all in un gruppo separato e più lento. Un dominio catch-all accetta ogni indirizzo, quindi un controllo di base non può dirti se la persona esiste. La [verifica catch-all](/catch-all-verification) può farlo.
4. Invia la prima campagna alla parte più pulita della lista, poi allarga.

## Dopo il warm-up: mantieni il volume costante

Il warm-up non finisce con un unico passaggio al volume pieno. Google chiede ai mittenti di "inviare email a un ritmo costante" e di "evitare di inviare email a ondate". Fa anche un esempio chiaro di cosa non fare: "raddoppiare all'improvviso i volumi inviati in precedenza può causare limitazioni di frequenza o cali di reputazione".

Amazon SES dà lo stesso consiglio per i suoi IP dedicati: "Dovresti evitare di inviare grandi volumi di email subito dopo la fine del processo di warm-up". Cresci dal tuo ultimo livello di warm-up con gli stessi piccoli passi, e continua a inviare con un ritmo regolare nei giorni lavorativi.

## Domande frequenti

**Posso fare il warm-up di un dominio email in 7 giorni?**
Puoi iniziare a inviare piccole quantità dopo una settimana, e molti mittenti lo fanno. I dati di Smartlead indicano una media di 8 giorni. Ma un warm-up di 7 giorni su un dominio nuovo ti lascia pochissima storia per assorbire un invio sbagliato. Se il dominio è nuovo, prevedi almeno 2 settimane di crescita dopo il periodo di invecchiamento.

**Quante email al giorno devo inviare durante il warm-up?**
Parti da circa 10 al giorno per casella e cresci di circa 1,5 volte ogni 2-3 giorni, come nel piano qui sopra. Fermati al livello che ti serve. Le guide sull'outreach a freddo di solito limitano una casella a 30-50 email al giorno.

**Un dominio vecchio ha bisogno del warm-up?**
Meno, se già invia posta normale ogni giorno. Un dominio rimasto fermo per un mese o più va trattato quasi come uno nuovo. Twilio SendGrid considera 30 giorni senza invii come il punto in cui un IP ha di nuovo bisogno del warm-up.

**Devo lasciare attivo il warm-up dopo l'inizio della campagna?**
Mantieni gli invii costanti e reali. I fornitori di strumenti di warm-up di solito consigliano di lasciare attivo un livello basso di warm-up. Le risposte reali e una lista pulita contano più del volume di warm-up.

**Google pubblica un piano di warm-up ufficiale?**
No. Google dice ai mittenti di partire con volumi bassi verso destinatari coinvolti, aumentare lentamente ed evitare picchi improvvisi. Non indica un numero di giorni.

**Perché le mie email rimbalzano durante il warm-up?**
Di solito per colpa della lista, non del warm-up. Controlla gli indirizzi con una [verifica email](/email-checker) e leggi perché le cold email rimbalzano in [questa guida](/blog/why-cold-emails-bounce).
