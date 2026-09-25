---
title: "Cos'è un secure email gateway (SEG) e come funziona"
description: Un secure email gateway è uno strato di filtro davanti al server di posta aziendale. Cosa fa, chi lo produce e perché complica la verifica delle email.
slug: cos-e-un-secure-email-gateway
date: 2026-09-23
keyword: cos'è un secure email gateway
image: /blog/covers/it/cos-e-un-secure-email-gateway.webp
imageAlt: Cos'è un secure email gateway (SEG) e come funziona
cta: Verifica anche gli indirizzi dietro un SEG
---

Un secure email gateway è uno strato di filtro che si trova davanti al server di posta di un'azienda e ispeziona ogni messaggio prima di lasciarlo passare. Se continui a vedere SEG nei risultati di verifica e vuoi sapere in pratica cos'è un secure email gateway, è il posto di controllo da cui passa la posta in entrata e in uscita di un'azienda, che cerca minacce e applica le policy lungo il percorso. Il server di posta dietro non vede mai un messaggio che il gateway decide di bloccare.

## SEG è solo l'abbreviazione

SEG sta per secure email gateway, e una volta che ci fai caso vedrai la sigla più spesso della formula completa. I due termini si usano in modo intercambiabile. Quando uno strumento di verifica segnala che un indirizzo si trova dietro un SEG, o un report di deliverability parla di filtro SEG, si riferisce allo strato di filtro descritto qui. Il termine suona più tecnico dell'idea, che è una guardia davanti all'ufficio posta.

## Cosa fa davvero il gateway

Un gateway esiste per tenere fuori la posta cattiva e dentro quella sensibile. In entrata cerca spam, malware e phishing, poi mette in quarantena o rifiuta tutto ciò che fa scattare una regola. In uscita applica la prevenzione della perdita di dati e la conformità, fermando i messaggi che farebbero trapelare dati dei clienti o violerebbero una norma. Molti gestiscono anche crittografia e archiviazione a lungo termine.

Un'azienda ne adotta uno perché gestire tutto questo sul server di posta stesso è più difficile e più facile da sbagliare. Il gateway accentra le regole in un unico punto che ogni messaggio deve attraversare.

## I gateway che incontrerai più spesso

Pochi vendor dominano questo settore. Proofpoint, Mimecast, Barracuda e Cisco IronPort sono i nomi che incontrerai più spesso sui domini aziendali, e dietro ce ne sono molti più piccoli. In totale ne rileviamo 15.

Differiscono per funzioni e prezzi, ma da fuori si comportano allo stesso modo. Ognuno sta davanti al vero sistema di posta e decide cosa lo raggiunge. Per questo la presenza di un vendor specifico ti dice che l'azienda ha scelto quel prodotto, e poco altro sugli indirizzi che ci sono dietro.

## Il gateway non è il provider della casella

È facile confondere il gateway con il sistema email dell'azienda, ma sono strati separati. Un'azienda può tenere le caselle su Microsoft 365 o Google Workspace e mettere comunque davanti un gateway di un altro vendor. Così un'azienda fornisce lo strato di sicurezza mentre un'altra ospita le caselle. Per questo un gateway nel percorso della posta non ti dice quale provider ospita davvero la casella, e un prodotto di sicurezza messo davanti non rivela nulla della casella che c'è dietro. Le due scelte sono indipendenti, spesso fatte da team diversi con budget diversi.

## Come un gateway cambia il percorso di una email

Normalmente un messaggio va direttamente al server di posta del dominio. Con un gateway, il dominio punta invece l'instradamento della posta verso il gateway, quindi ogni messaggio in arrivo arriva lì per primo. Il gateway lo ispeziona e, solo se passa, lo inoltra al vero server dove vive la casella.

Il destinatario non si accorge di nulla. Per chiunque sia all'esterno, il gateway è il sistema di posta del dominio, perché è l'unica parte che risponde. Alcuni gateway vanno oltre e rimandano di proposito i mittenti sconosciuti, trattenendo un primo contatto e rispondendo davvero solo a un tentativo successivo.

## Perché i gateway interferiscono con la verifica

La verifica si basa sul fare una domanda diretta al server di posta e leggere una risposta diretta. Un gateway spezza questa catena. Poiché risponde per conto del dominio, può accettare un messaggio, o trattenerlo per l'ispezione, senza mai controllare se la casella dietro esiste.

Così un verificatore che chiede di un indirizzo specifico può ricevere una risposta di accettazione o evasiva che riflette la policy del gateway, non lo stato della casella. Il rinvio peggiora le cose, perché un primo tentativo trattenuto sembra un risultato inconcludente anche quando la casella è perfettamente reale. Al controllo standard risponde la parte sbagliata.

Un esempio concreto aiuta. Un verificatore sonda un indirizzo su un dominio protetto da gateway. Il gateway, seguendo le sue regole per i mittenti sconosciuti, accetta la sonda o la rimanda. In entrambi i casi il verificatore registra una risposta arrivata dal gateway, non dal server che sa se la casella esiste. Nulla della casella reale è stato testato, eppure il controllo ha una risposta da riportare.

## Un gateway non dice nulla sull'esistenza della casella

È questa la parte da ricordare. La presenza di un gateway dice che un'azienda prende sul serio la sicurezza. Non dice assolutamente nulla sul fatto che un indirizzo specifico dietro appartenga a una casella reale e attiva. Un indirizzo morto e uno vivo possono stare dietro lo stesso gateway e sembrare identici da fuori, ed è proprio per questo che gli indirizzi protetti da gateway finiscono così spesso nello stesso mucchio irrisolto dei domini catch-all.

Per chi fa marketing, il motivo per cui conta è la copertura. Su una lista B2B, una buona parte dei tuoi contatti migliori, quelli nelle aziende più grandi e più attente alla sicurezza, sta proprio dietro questi gateway. Scartali tutti e perdi la parte enterprise della lista. Invia alla cieca e i blocchi ricadono sulla tua reputazione di mittente. Per un singolo indirizzo puoi partire dalla [verifica email](/email-checker); se la tua lista ne è piena, ecco come gestiamo le [email protette da gateway SEG](/seg-email-verification).
