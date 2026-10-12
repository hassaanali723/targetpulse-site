---
title: Filtro antispam
description: Cosa controlla un filtro antispam prima di consegnare, spostare o rifiutare la tua email, la differenza tra rifiuto e cartella spam e i limiti di Google.
slug: filtro-antispam
date: 2026-09-29
updated: 2026-10-12
keyword: filtro antispam
short: Un filtro antispam è il sistema che un provider di posta usa per decidere dove va un'email in arrivo. L'email può andare nella casella, nella cartella spam o essere rifiutata. Il filtro guarda chi la invia, cosa contiene e come i destinatari hanno reagito alle email precedenti di quel mittente.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Invia a indirizzi reali e i filtri antispam avranno meno elementi contro di te
---

## Cos'è un filtro antispam?

Un filtro antispam è un programma che controlla ogni email in arrivo. Decide se consegnarla, spostarla nello spam o rifiutarla.

Ogni provider di posta ha un filtro antispam. Un provider di posta è l'azienda che gestisce le caselle email. Gmail, Outlook.com e Yahoo hanno ciascuno il proprio filtro. Anche molte aziende ne hanno uno, nel loro [secure email gateway](/glossary/secure-email-gateway). È un sistema di sicurezza che controlla le email prima che arrivino alle caselle dei dipendenti.

La decisione del filtro avviene in uno di due momenti.

**Durante la connessione SMTP.** SMTP è il linguaggio che i server di posta usano per parlare tra loro. Un server è il computer che invia o riceve le email. Il server di destinazione può rifiutare l'email prima di accettarla. In quel caso ricevi un bounce, cioè un avviso di mancata consegna, con un codice `5.7.x`. Due esempi di Gmail:

- `550 5.7.1` per un blocco di policy, cioè una regola del provider;
- `550 5.7.28` per una quantità insolita di email indesiderate dal tuo indirizzo IP. L'indirizzo IP è il numero che identifica il server da cui invii.

L'email non arriva mai nella casella.

**Dopo che l'email è stata accettata.** Il server accetta l'email. Poi la mette nella casella, nella scheda promozioni o nella cartella spam. Non ricevi nessun bounce. Gli unici segnali sono tassi di apertura più bassi e i dati in Google Postmaster Tools, il pannello gratuito di Google per chi invia email.

## Un esempio semplice

Roberta gestisce un negozio online di abbigliamento. Invia una promozione a 5.000 clienti. Ecco cosa può succedere a tre email diverse.

1. **Email a un cliente che apre sempre le sue email.** Il filtro antispam vede un mittente conosciuto e autenticato. L'email arriva nella casella.
2. **Email a un indirizzo che non esiste più.** Il server rifiuta l'email. Roberta riceve un bounce. Il filtro prende nota che Roberta invia a indirizzi morti.
3. **Email a una persona che non ricorda di essersi iscritta.** La persona clicca "segnala come spam". Il filtro prende nota anche di questo.

Se i casi 2 e 3 sono tanti, alla promozione successiva il filtro può mandare più email di Roberta nello spam. Possono finirci anche quelle per i clienti del caso 1.

## Cosa controlla il filtro

I provider non pubblicano le regole esatte. Questi sono gli elementi conosciuti:

- **Autenticazione.** Il filtro controlla se [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc) passano. Sono impostazioni del tuo dominio che dimostrano che l'email arriva davvero da te. Google e Microsoft ora rifiutano le email in massa che falliscono questi controlli.
- **Reputazione.** È la storia di invio del tuo dominio e del tuo indirizzo IP. Vedi [reputazione del dominio](/glossary/domain-reputation) e [reputazione IP](/glossary/ip-reputation).
- **Segnalazioni.** Quanto spesso i destinatari cliccano "segnala come spam". Le linee guida di Google dicono di tenere il tasso di segnalazioni in Postmaster Tools sotto lo 0,10 percento. Dicono anche di non arrivare mai allo 0,30 percento.
- **Bounce.** Quanto spesso invii a indirizzi che non esistono. Una lista con molti indirizzi morti sembra una lista comprata o raccolta con uno scraper, cioè un programma che copia indirizzi dai siti web.
- **Coinvolgimento.** Se le persone aprono le tue email, rispondono, le cancellano senza leggerle o le spostano in un'altra cartella.
- **Contenuto.** Link, allegati, immagini e frasi che somigliano a spam conosciuto. Il contenuto conta meno di una volta. Reputazione e autenticazione contano di più.

## Perché i mittenti vengono filtrati

La maggior parte dei filtri non scatta per le parole nell'email. Scatta per la lista. Il motivo è semplice:

1. Gli indirizzi morti causano bounce.
2. Le persone che non hanno chiesto la tua email causano segnalazioni.
3. Bounce e segnalazioni abbassano la tua reputazione.
4. Con una reputazione bassa, il filtro antispam manda più email nello spam.

Entrambi i problemi nascono da indirizzi che non sono mai stati controllati.

## Come aiuta un verificatore

Un verificatore non interagisce con i filtri antispam. Non può far passare un'email da un filtro. Rimuove invece gli indirizzi che causano bounce e segnalazioni.

Passa la tua lista nella [verifica email in blocco](/bulk-email-verifier) prima di inviare, oppure controlla un singolo indirizzo con la [verifica email](/email-checker). La verifica rimuove le caselle che non esistono più. Rimuove anche gli indirizzi temporanei e gli account di ruolo come info@, che ricevono più segnalazioni. Il nostro [servizio di verifica email](/) lavora sulla lista, non sul contenuto delle email. La guida sul [tasso di rimbalzo email](/blog/how-to-reduce-email-bounce-rate) mostra quanto è grande di solito questa parte di una lista.
