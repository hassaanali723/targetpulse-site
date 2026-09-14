---
title: "Perché le email rimbalzano: cause e cosa fare"
description: Perché le email rimbalzano, hard bounce e soft bounce, le cause più comuni nelle campagne a freddo, cosa significa un'email rimbalzata e cosa farne.
slug: perche-le-email-rimbalzano
date: 2026-09-13
keyword: perché le email rimbalzano
image: /blog/why-cold-emails-bounce.webp
imageAlt: Illustrazione sul perché le email a freddo rimbalzano
---

Un'email rimbalza quando il server ricevente rifiuta il messaggio e lo rimanda indietro invece di consegnarlo. Se hai appena lanciato una campagna e ti chiedi perché le email a freddo rimbalzano più della posta normale, quasi tutto si riduce a due cose. Stai scrivendo a persone che non hanno chiesto di sentirti, quindi la lista è più fredda e meno precisa, e stai inviando da un dominio con cui il server del destinatario non ha nessuna storia. Le singole cause stanno sotto queste due.

## Cos'è un'email rimbalzata

Un'email rimbalzata (bounce) è un messaggio che il server di posta ricevente ha rifiutato e rimandato indietro con un codice di motivazione, invece di metterlo in una casella. La risposta arriva dal server, non dalla persona, sotto forma di rapporto di mancata consegna (NDR) nella casella del mittente o nel registro dei rimbalzi dello strumento di invio. Il codice in quel rapporto è la parte utile: un codice 5xx è un rifiuto permanente, un codice 4xx è temporaneo. Capire cosa significa un'email rimbalzata vuol dire quasi sempre leggere quel codice.

## Hard bounce e soft bounce non sono lo stesso problema

La prima cosa da controllare è che tipo di rimbalzo hai ricevuto, perché cambia cosa fare dopo.

Un hard bounce è permanente. L'indirizzo non esiste, il dominio non esiste o il server lo ha rifiutato in modo netto. Un messaggio che fa hard bounce non verrà mai consegnato, e l'indirizzo va tolto subito dalla lista. Un soft bounce è temporaneo. La casella era piena, il server era occupato o il messaggio è stato trattenuto per un controllo. I soft bounce a volte si risolvono da soli, e lo strumento di invio di solito ritenta per te.

La distinzione conta per la reputazione. I provider osservano quanto spesso invii a indirizzi che fanno hard bounce, e uno schema ripetuto ti segnala come qualcuno che lavora con una lista cattiva. Un indirizzo morto è rumore. Una campagna piena di indirizzi morti è un segnale.

## Le cause più comuni, in ordine

I rimbalzi si concentrano su poche cause. Più o meno nell'ordine in cui compaiono nelle campagne a freddo:

- L'indirizzo non esiste più. Le persone cambiano lavoro e la casella viene eliminata, mentre il contatto sopravvive in un database comprato o raccolto dal web.
- Il dominio è sparito. Le piccole aziende chiudono, il dominio smette di rispondere e non resta nessun server ad accettare qualcosa.
- La casella è piena. Frequente sugli indirizzi trascurati o personali, di solito un soft bounce.
- Il server ricevente ha rifiutato il tuo dominio di invio. È un blocco di reputazione o di policy, non un problema del destinatario.
- Greylisting. Il server rifiuta temporaneamente il primo tentativo da un mittente sconosciuto e accetta il secondo qualche minuto dopo.
- Filtro antispam. Il messaggio è stato scartato per contenuto o policy prima di arrivare nella casella.

L'ordine conta perché le prime due cause, indirizzi morti e domini morti, sono quelle che la verifica intercetta, e sono anche le più comuni su una lista comprata o raccolta dal web. Le cause più in basso dipendono più dai tempi e dalla tua configurazione che dall'indirizzo.

Spesso puoi leggere la causa direttamente dal messaggio di rimbalzo. Una riga come 550 5.1.1 user unknown è un hard bounce per un indirizzo che non esiste. Un 451 4.7.1 greylisted, try again later è un rifiuto temporaneo che di solito si risolve al secondo tentativo.

## Cosa significa "email tornata indietro"

Tornata indietro, o bounce back, è il nome di tutti i giorni per la stessa cosa: il tuo messaggio è tornato a te. La formulazione nel rapporto cambia da provider a provider. Gmail scrive "Address not found", Microsoft 365 scrive "Recipient address rejected", i server Postfix riportano la riga SMTP grezza, 550 5.1.1 User unknown. Tutte e tre significano che la casella non c'è. Un rimbalzo che parla di "mailbox full", "greylisted" o "try again later" è temporaneo e di solito si risolve con il tentativo successivo dello strumento di invio.

## Non ogni rimbalzo è un problema della lista

Viene naturale leggere ogni rimbalzo come un indirizzo cattivo, ma una parte vera dei rimbalzi nelle campagne a freddo non ha nulla a che fare con la lista. Se il tuo dominio di invio è nuovo e non è stato scaldato, i server lo trattano con sospetto e rifiutano più posta. Un dominio nuovo di zecca che invia qualche centinaio di email a freddo il primo giorno vedrà rimbalzi che un dominio di sei mesi con la stessa lista non vedrebbe. Se i record SPF, DKIM o DMARC mancano o sono sbagliati, alcuni provider ti rifiutano prima ancora di guardare il destinatario.

Nessuno di questi problemi si risolve pulendo gli indirizzi. Sono problemi lato mittente, e producono rimbalzi identici a quelli di un indirizzo morto finché non leggi la motivazione.

## Cosa fare con un'email rimbalzata

Un solo indirizzo: leggi il codice. Un 5.1.1 o "user unknown" significa che la casella è sparita; toglila e, se il contatto conta, cerca il suo indirizzo attuale invece di riprovare. Un 4.x.x o "mailbox full" significa aspettare; lo strumento ritenta da solo. Un 5.7.1 o "blocked" punta al tuo dominio di invio, non al destinatario: controlla SPF, DKIM e DMARC prima di inviare altro. Se non sai se un indirizzo è ancora attivo, passalo dalla [verifica email gratuita](/it/verifica-email) prima di scrivere di nuovo.

## Cosa fare dopo una campagna che rimbalza

Comincia togliendo dalla lista ogni hard bounce e non inviare più a quegli indirizzi. Non riprovare e non lasciarli dentro per il prossimo invio sperando che si riprendano, perché non succederà, e ogni tentativo ripetuto ti costa reputazione. Lascia stare i soft bounce: lo strumento di invio gestisce quei tentativi.

Poi guarda la proporzione. Se una parte grande di una lista nuova è rimbalzata al primo invio, la lista era cattiva prima che la toccassi, e la soluzione sta a monte, dove raccogli o compri gli indirizzi. Pulire dopo aiuta il prossimo invio, ma non cancella il colpo alla reputazione di questo.

## La provenienza della lista è quasi sempre la vera storia

Da dove viene una lista predice come rimbalzerà. Una lista esportata dal tuo CRM, fatta di persone che ti hanno già risposto, rimbalza pochissimo. Una lista raccolta dal web o comprata da un broker rimbalza molto di più, perché gli indirizzi sono stati raccolti una volta e mai più controllati, e una parte è morta nel frattempo. Se sai che una lista è comprata o raccolta, dai per scontato che una parte sia vecchia e verificala prima del primo invio.

## Dove la verifica aiuta, e dove no

La verifica toglie prima dell'invio gli indirizzi che farebbero hard bounce, ed è la leva più grande su una lista a freddo. Controllare la lista prima trasforma un'ipotesi in una quantità nota, e vale la pena farlo su qualsiasi lista che non hai costruito tu.

Quello che non fa è sistemare un record DNS sbagliato o scaldare un dominio nuovo. Sono problemi del mittente, e nessuna pulizia della lista li tocca. Dividi quindi i rimbalzi per causa. Se sono indirizzi che non esistono più, passa la lista dalla [verifica catch-all](/it/verifica-catch-all) prima del prossimo invio. Se sono errori di autenticazione o reputazione, il lavoro è sul tuo dominio, non sulla lista.
