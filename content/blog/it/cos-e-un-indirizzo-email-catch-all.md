---
title: "Indirizzo email catch-all: cos'è e come verificarlo"
description: Un dominio catch-all accetta la posta per qualsiasi nome, reale o no. Cosa significa, perché le aziende lo configurano così e come verificare questi indirizzi.
slug: cos-e-un-indirizzo-email-catch-all
date: 2026-09-13
keyword: indirizzo email catch-all
image: /blog/what-is-a-catch-all-email-address.webp
imageAlt: Illustrazione di un indirizzo email catch-all
cta: Scopri cosa sono davvero i tuoi indirizzi catch-all
---

Un indirizzo email catch-all è un indirizzo su un dominio configurato per accettare la posta per qualsiasi nome, che dietro ci sia una casella reale oppure no. Se hai appena visto un indirizzo segnato come catch-all in un report di verifica, la versione breve è questa: l'etichetta descrive il dominio, non la persona. Il dominio accetta tutto. Un messaggio a vendite@, un nome scritto male o un dipendente andato via anni fa arrivano comunque da qualche parte invece di essere rifiutati.

Quella singola scelta di configurazione è il motivo per cui gli indirizzi catch-all sono scomodi da gestire, e vale la pena capirla prima di decidere cosa fare con quelli sulla tua lista.

## Dove si incontra l'etichetta

Di solito il termine compare in uno di due posti. Il primo è un'esportazione di verifica, dove una riga è segnata catch-all o accept-all accanto a un indirizzo dall'aspetto del tutto normale. Il secondo è uno strumento di invio che si ferma su un indirizzo e ti chiede di decidere, perché non riesce a classificarlo.

In entrambi i casi l'indirizzo in sé non rivela nulla. Un dominio catch-all può appartenere a una grande azienda o a un'agenzia di due persone, e il nome prima della chiocciola è identico a qualsiasi altro. L'unico motivo per cui sai di averne uno davanti è l'etichetta che uno strumento gli mette.

## Perché un'azienda fa accettare tutto al suo dominio

La maggior parte dei domini catch-all non nasce da qualcosa di strano. Sono configurati così apposta, per ragioni che hanno senso per chi gestisce il server di posta.

Gli alias di reparto condivisi sono il caso più comune. Indirizzi come info@, lavora-con-noi@ e amministrazione@ non sono legati a una persona, e con un catch-all nessuno di loro va creato a mano. La tolleranza agli errori di battitura è un'altra ragione: se un cliente scrive a giovani invece di giovanni, un dominio che accetta tutto consegna comunque il messaggio.

Il turnover del personale spinge nella stessa direzione. Quando qualcuno se ne va, la posta continua ad arrivare al vecchio indirizzo per mesi, e girarla a un responsabile o a una casella condivisa è più facile che rifiutarla. Fusioni e acquisizioni aggiungono altri casi, perché due aziende spesso consolidano più domini e preferiscono accettare tutto piuttosto che controllare ogni vecchio indirizzo.

In pratica, la maggior parte dei domini catch-all è gestita da un piccolo team IT che ha deciso che accettare la posta era meno lavoro che mantenere una lista di destinatari validi.

## Indirizzo email catch-all e accept-all: la stessa configurazione

Vedrai entrambi i termini, a volte nella stessa schermata di risultati. Catch-all è l'etichetta più vecchia e più diffusa. Accept-all è quella che alcuni provider e strumenti stampano al suo posto. Non c'è nessuna differenza di comportamento: entrambi significano che il server ricevente ha accettato di prendere la posta per qualsiasi nome sul dominio.

## Perché un indirizzo catch-all è difficile da verificare

La verifica normalmente funziona facendo una domanda al server ricevente. Il verificatore avvia il processo di consegna per un indirizzo specifico e legge come risponde il server. Un server che tiene una lista di caselle reali rifiuta un nome che non riconosce, e quel rifiuto è il segnale che l'indirizzo non è valido.

Un server catch-all non dà mai quel segnale. Siccome è impostato per accettare ogni destinatario, risponde a un nome reale e a uno palesemente inventato con la stessa risposta positiva, un semplice SMTP 250. Il verificatore ha chiesto se la casella esiste e ha ricevuto un sì che sarebbe arrivato per qualsiasi nome. Il test si completa e non restituisce nulla su cui agire.

## Cosa significa un risultato catch-all per la tua lista

Un risultato catch-all da solo non risolve niente. Non significa che l'indirizzo non sia valido e non conferma che la casella sia reale. Significa che il controllo standard non ha potuto rispondere alla domanda. La casella potrebbe appartenere a un dipendente attivo o essere morta da anni, e l'etichetta da sola non distingue i due casi.

Per questo gli strumenti mettono gli indirizzi catch-all in uno stato prudente, spesso "a rischio" o "catch-all", invece di valido o non valido. Su una lista aziendale la quota è raramente piccola. Trattare tutto il gruppo come spazzatura elimina in silenzio persone reali, mentre trattarlo come sicuro invita i rimbalzi.

## Quanto sono frequenti

Non sono un caso limite. Su una lista aziendale tipica una minoranza consistente degli indirizzi si trova su domini catch-all, e la quota sale quanto più i tuoi contatti lavorano in aziende medie e grandi, dove alias condivisi e posta gestita sono la norma. I grandi provider di posta personale quasi mai si comportano così, quindi una lista di indirizzi personali ne mostra pochissimi. Una lista di indirizzi di lavoro può mostrarne moltissimi. Per questo l'etichetta catch-all compare più spesso proprio sulle liste che contano per vendite e outreach.

## Cosa fare adesso

Per controllare un singolo indirizzo catch-all subito, la [verifica email gratuita](/it/verifica-email) esegue il controllo completo e restituisce valida o non valida invece dell'etichetta catch-all.

Hai tre scelte oneste. Cancellare ogni indirizzo catch-all e accettare di buttare via contatti che avrebbero aperto la tua posta. Inviare comunque e accettare un tasso di rimbalzo più alto con il costo di reputazione che segue. Oppure controllarli a un livello più profondo del test SMTP standard, l'unica opzione che conserva i contatti reali senza i rimbalzi.

Se vuoi quest'ultima strada, puoi [verificare gli indirizzi catch-all e a rischio](/it/verifica-catch-all) invece di indovinare da che parte della linea cade ogni indirizzo.
