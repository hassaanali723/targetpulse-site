---
title: "Tasso di rimbalzo email: valori medi e come ridurlo"
description: Cos'è il tasso di rimbalzo delle email, i valori di riferimento per marketing, transazionali e cold email, e una sequenza concreta per abbassarlo.
slug: come-ridurre-il-tasso-di-rimbalzo-email
date: 2026-09-23
updated: 2026-09-26
keyword: tasso di rimbalzo email
image: /blog/covers/it/come-ridurre-il-tasso-di-rimbalzo-email.webp
imageAlt: Tasso di rimbalzo email: valori medi e come ridurlo
cta: Riporta sotto controllo il tuo tasso di rimbalzo
---

Un tasso di rimbalzo alto raramente è un solo problema. Di solito sono tre o quattro piccoli problemi sovrapposti, e si tende ad affrontarli nell'ordine sbagliato: prima il lavoro tecnico interessante, per ultima la noiosa pulizia della lista che avrebbe risolto quasi tutto.

Per questo l'ordine qui segue quanto vale davvero ogni passo, non quanto è soddisfacente farlo.

## Cos'è il tasso di rimbalzo delle email?

Il tasso di rimbalzo delle email è la quota di messaggi di un invio che tornano indietro senza essere consegnati: messaggi rimbalzati diviso messaggi inviati, in percentuale. Ne invii 10.000, ne tornano 250, e il tasso di rimbalzo è del 2,5 percento. La maggior parte degli strumenti lo riporta per campagna e lo divide in hard bounce (l'indirizzo o il dominio non esiste) e soft bounce (casella piena, server occupato, blocco temporaneo). I provider guardano soprattutto la quota di hard bounce, perché è il segno più chiaro di una lista mai verificata.

## Valori di riferimento del tasso di rimbalzo

Il numero accettabile dipende dal tipo di posta, perché i provider giudicano ciascuno in modo diverso.

| Tipo di invio | Sano | Da tenere d'occhio | Dannoso |
|---|---|---|---|
| Marketing a una lista con consenso | sotto l'1% | dall'1 al 2% | oltre il 2% |
| Transazionale (ricevute, reset) | sotto lo 0,5% | dallo 0,5 all'1% | oltre l'1% |
| Outreach a freddo | sotto il 2% | dal 2 al 5% | oltre il 5% |

![Fasce sana, da tenere d'occhio e dannosa del tasso di rimbalzo per email di marketing, transazionali e a freddo](/blog/fig-it-bounce-rate-bands.webp)
Lo stesso tasso di rimbalzo va bene su un tipo di invio ed è un problema su un altro.

Le cold email hanno una fascia più ampia perché la lista è più fredda per definizione, ma vengono anche giudicate più duramente quando superano la soglia: una campagna a freddo al 6 percento attira blocchi più in fretta di una newsletter allo stesso tasso. Queste fasce sono quelle che usano in pratica i team di deliverability; le regole di Google e Yahoo per i mittenti di grandi volumi fissano il limite dei reclami spam allo 0,3 percento, e un tasso di rimbalzo sopra queste fasce tende ad andare insieme ai reclami.

## Qual è il tasso di rimbalzo medio delle email?

La cifra che si cita più spesso è intorno al 2 o 2,5 percento su tutti i mittenti. Trattala come una curiosità e non come un obiettivo, perché quella media mette insieme mittenti le cui liste non hanno quasi nulla in comune, e la dispersione al suo interno è molto più ampia di quanto il numero lasci intendere.

Se cerchi il tasso di rimbalzo medio per settore trovi una tabella ripetuta su decine di siti, con cifre ordinate per ecommerce, sanità, istruzione e così via. Quei numeri risalgono quasi tutti a una sola pagina di benchmark di Mailchimp, e oggi quella pagina pubblica soltanto tassi di apertura, di clic e di disiscrizione. Una tabella dei rimbalzi per settore non c'è. I siti che citano quelle cifre in gran parte si citano tra loro, e diversi di essi vendono servizi di verifica email.

Il settore è comunque un indicatore debole. Due aziende SaaS della stessa categoria avranno tassi di rimbalzo diversi di un ordine di grandezza se una ha costruito la lista con i moduli di iscrizione e l'altra l'ha comprata. Quello che predice davvero il numero è da dove arrivano gli indirizzi e da quanto tempo.

| Da dove arriva la lista | Rimbalzo totale tipico | Perché |
|---|---|---|
| Consumer con consenso, inviata negli ultimi 90 giorni | sotto lo 0,5% | Gli indirizzi sono dichiarati dalla persona e confermati di recente |
| Business con consenso, inviata negli ultimi 90 giorni | sotto l'1% | Uguale, ma le caselle aziendali vengono chiuse quando qualcuno se ne va |
| Business con consenso, ferma da 12 mesi | dal 2 al 5% | Circa un quarto dei dati di contatto B2B invecchia in un anno |
| B2B a freddo, verificata prima dell'invio | dall'1 al 3% | Il residuo sono soprattutto domini catch-all che il verificatore non ha risolto |
| B2B a freddo, non verificata | dal 5 al 15% | Niente ha tolto gli indirizzi che non esistono più |
| Comprata o raccolta, non verificata | dal 10 al 30% | I dati rivenduti invecchiano sullo scaffale del fornitore prima di arrivare a te |

![Tasso di rimbalzo tipico per origine della lista, dal consumer con consenso sotto lo 0,5 percento alla lista comprata e non verificata dal 10 al 30 percento](/blog/fig-it-bounce-by-list-source.webp)
Tra la prima riga e l'ultima ci sono sessanta volte di differenza. Nessuna media di settore copre un intervallo simile.

Il B2B sta più in alto del B2C a ogni stadio equivalente, per un motivo che non ha nulla a che vedere con il settore: le persone cambiano lavoro, e una casella aziendale di solito viene chiusa quando succede. Un indirizzo personale su un provider gratuito può restare inutilizzato per anni e continuare ad accettare posta.

Quindi la domanda utile non è come il tuo tasso si confronta con quello del tuo settore. È quale delle righe qui sopra descrive la tua lista, e se hai fatto l'unico passo che la sposta.

## Prima di tutto, capisci che tipo di rimbalzo hai

Lo strumento di invio divide i rimbalzi in hard e soft. Significano cose diverse, e la soluzione dell'uno non fa nulla per l'altro.

Un hard bounce è permanente. La casella non esiste, il dominio non esiste o il server ti ha rifiutato in modo netto. Riprovare darà sempre lo stesso risultato. È la categoria che ti danneggia, perché i provider leggono una serie di hard bounce come un mittente che non sa chi sono i suoi destinatari, cioè come appare uno spammer visto da fuori.

Un soft bounce è temporaneo. La casella è piena, il server è giù, il messaggio era troppo grande, oppure sei finito in greylisting e ti è stato detto di riprovare a breve. La maggior parte degli strumenti di invio ritenta in automatico, e buona parte si risolve da sola.

Prendi il report della tua ultima campagna e guarda la divisione prima di fare qualsiasi altra cosa. Se rimbalzi soprattutto in hard, è un problema di lista e il resto di questo articolo parla soprattutto di quello. Se rimbalzi soprattutto in soft, a un tasso costante in ogni campagna, il problema è più probabilmente di reputazione o di infrastruttura, e pulire la lista non lo sposterà di molto.

## Cosa conta come tasso cattivo

Non esiste una soglia universale, ma i numeri su cui si lavora sono abbastanza costanti.

| Tasso di hard bounce | Cosa significa |
|---|---|
| Sotto il 2% | Normale per una lista curata |
| Dal 2% al 5% | La lista sta invecchiando o non è stata verificata prima dell'invio |
| Oltre il 5% | I provider probabilmente ti stanno già limitando |
| Oltre il 10% | Aspettati la sospensione dalla maggior parte delle piattaforme di invio |

L'outreach a freddo sta nella parte alta del normale perché i dati sono comprati o raccolti dal web invece che dati con consenso. Sotto il 3% è un obiettivo ragionevole per una lista a freddo pulita, e se lavori con una lista calda di persone che si sono iscritte dovresti stare ben sotto l'1%.

## Il passo che risolve quasi tutto

Verifica la lista prima di inviare. È tutto qui, e spiega la grande maggioranza degli hard bounce su quasi ogni lista che vediamo.

Un verificatore controlla la sintassi, conferma che il dominio esista e abbia server di posta configurati, poi controlla se la casella specifica è reale. Passaci tutta la lista prima di una campagna, e ripassaci tutto ciò che ha più di sei mesi circa, perché gli indirizzi B2B decadono in fretta. Le persone cambiano lavoro. Le aziende si riorganizzano. Un indirizzo buono a febbraio non è per forza buono ad agosto, e circa un quarto dei dati di contatto B2B diventa vecchio in un anno. Per un singolo indirizzo basta la [verifica email](/email-checker) gratuita.

C'è una cosa a cui fare attenzione, ed è il motivo per cui molti verificano e rimbalzano lo stesso. Circa il 30% di una lista aziendale si trova su domini catch-all, che accettano posta per qualsiasi indirizzo possibile, che la casella esista o no. La maggior parte dei verificatori non riesce a risolverli e li restituisce come rischiosi, sconosciuti o accept-all. A quel punto hai due opzioni cattive: cancellare un terzo della lista, oppure inviare e scoprirlo a tue spese.

![Grafico ad anello: circa il 70 percento di una lista B2B si risolve in modo pulito e circa il 30 percento sta su domini catch-all](/blog/fig-it-catch-all-share.webp)
La fetta arancione è la parte che un controllo standard restituisce senza risposta, ed è da lì che arrivano i rimbalzi che non ti aspettavi.

Cancellare è la più sicura delle due ed è quello che fa quasi tutti, per questo una lista verificata può sembrare comunque scarna. Un verificatore che risolve gli indirizzi catch-all in un vero valida o non valida ti toglie da quella scelta. È ciò per cui è costruito [Giggal.ai](/), con la sua [verifica catch-all](/catch-all-verification), e applica lo stesso trattamento alle caselle dietro i secure email gateway come Proofpoint e Mimecast, che falliscono in modo simile per un motivo diverso.

## Poi togli gli indirizzi che non avrebbero mai funzionato

Due categorie vale la pena eliminarle anche quando risultano valide.

Gli indirizzi di ruolo sono alias condivisi: info@, sales@, support@, admin@. Di solito esistono, quindi passano la verifica, ma finiscono in una casella condivisa che nessuno possiede davvero. Il coinvolgimento è scarso e i reclami sono più alti della media. Per l'outreach a freddo valgono quasi zero.

Gli indirizzi usa e getta vengono da servizi di posta temporanea ed esistono per pochi minuti. Passano la verifica finché sono vivi e poi spariscono. Qualsiasi verificatore decente segnala entrambe le categorie separatamente dai validi, quindi è un filtro, non lavoro in più.

## Sistema la fonte, non solo la lista

Se continuano ad arrivare indirizzi cattivi, pulire diventa un tapis roulant.

Metti la verifica in tempo reale sui moduli di iscrizione, così un errore di battitura viene intercettato mentre la persona è ancora sulla pagina. Gran parte del valore sta nel prendere gmial.com e hotmial.com nel momento in cui vengono digitati, il che è sia una correzione di deliverability sia un'esperienza migliore per chi voleva davvero sentirti.

Togli il secondo campo "conferma il tuo indirizzo email". Non funziona. Le persone copiano e incollano dal primo campo, e hai aggiunto attrito senza alcun beneficio.

Se compri liste, verificale il giorno in cui arrivano e non il giorno in cui invii. I fornitori vendono gli stessi dati più volte, e invecchiano sul loro scaffale, non solo sul tuo.

## Il lavoro di autenticazione

Questo rientrava tra le cose che non riducono i rimbalzi, e quel consiglio è invecchiato male. SPF, DKIM e DMARC decidono se i server riceventi si fidano che tu sia chi dici di essere, e due dei provider più grandi oggi rifiutano la posta quando mancano.

Microsoft ha iniziato a rifiutare la posta di massa non autenticata verso gli indirizzi Outlook.com, Hotmail e Live il 5 maggio 2025. Chi invia più di 5.000 messaggi al giorno senza tutti e tre i record riceve `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. È un codice 5xx, quindi il tuo strumento di invio lo registra come rimbalzo permanente, contro una casella che esiste e che avrebbe accettato il messaggio. Google ha stretto nella stessa direzione a novembre 2025, passando dal mettere la posta sospetta nello spam al rifiutarla a livello SMTP.

L'effetto pratico è che oggi una lacuna nell'autenticazione compare nel report dei rimbalzi, invece che in silenzio nel tasso di apertura. Se una quota importante dei tuoi rimbalzi porta codici 5.7.x e i tuoi destinatari sono concentrati su Outlook o Gmail, il problema non è la lista, e verificarla di nuovo non servirà.

Configura bene i tre record, verificali una volta con uno dei controlli DMARC gratuiti, e poi smetti di pensarci. Se invece i tuoi rimbalzi sono errori di casella inesistente, che portano il codice 5.1.1, nessun lavoro sul DNS li cambierà.

## Scalda il dominio se è nuovo

Un dominio di invio nuovo di zecca che manda 5.000 messaggi il primo giorno verrà limitato, e la limitazione produce soft bounce che sembrano un problema di lista.

Parti con volumi bassi e aumenta nell'arco di due-quattro settimane. La maggior parte delle piattaforme di invio oggi lo automatizza. Se la tua non lo fa, sali a mano e resisti alla tentazione di saltare passaggi, perché la reputazione che stai costruendo è ciò che decide se la prossima campagna arriva.

## Una sequenza che funziona

Leggi la divisione tra hard e soft della tua ultima campagna. Verifica tutta la lista, compresa la parte catch-all, invece di scartarla. Togli gli indirizzi di ruolo e usa e getta. Metti la verifica sul modulo di iscrizione, così il problema non si ripresenta. Controlla SPF, DKIM e DMARC una volta. Scalda il dominio se è nuovo. Poi invia, leggi i nuovi numeri e ripeti la verifica ogni trimestre.

La maggior parte delle liste passa da un numero sgradevole a uno accettabile già con il secondo passo. Il resto della sequenza serve a evitare che ci ricada.

Se vuoi vedere a che punto è la tua lista attuale, Giggal.ai dà 1.000 crediti gratis senza carta, e funzionano anche su un caricamento in blocco. Da leggere anche: [cos'è un indirizzo catch-all](/blog/what-is-a-catch-all-email-address), [cosa significa rischioso in un report di verifica](/blog/what-does-risky-mean-in-email-verification) e [un buon tasso di rimbalzo per le cold email](/blog/good-bounce-rate-for-cold-email).
