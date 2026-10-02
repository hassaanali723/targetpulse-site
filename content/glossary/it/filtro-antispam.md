---
title: Filtro antispam
description: Cosa controlla un filtro antispam prima di consegnare, spostare o rifiutare la tua email, la differenza tra rifiuto e cartella spam e i limiti di Google.
slug: filtro-antispam
date: 2026-09-29
updated: 2026-09-29
keyword: filtro antispam
short: Un filtro antispam è il sistema che un provider di posta usa per decidere se un'email in arrivo va nella casella, va nella cartella spam o viene rifiutata. Controlla il mittente, il contenuto dell'email e come i destinatari precedenti hanno reagito alle email di quel mittente.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Invia a indirizzi reali e i filtri antispam avranno meno elementi contro di te
---

## Cosa fa un filtro antispam

Ogni provider di posta ha un filtro antispam. Gmail, Outlook.com e Yahoo ne hanno uno. I server di posta aziendali dietro un [secure email gateway](/glossary/secure-email-gateway) ne hanno uno. Il filtro controlla ogni email in arrivo e decide se consegnarla, spostarla nello spam o rifiutarla.

La decisione avviene in uno di due momenti.

**Durante la connessione SMTP.** Il server di destinazione può rifiutare l'email prima di accettarla. Ricevi un bounce con un codice `5.7.x`. Esempi: il `550 5.7.1` di Gmail per un blocco di policy, oppure il `550 5.7.28` per una quantità insolita di email indesiderate dal tuo indirizzo IP. L'email non arriva mai nella casella.

**Dopo che l'email è stata accettata.** Il server accetta l'email e poi la mette nella casella, nella scheda promozioni o nella cartella spam. Non ricevi nessun bounce. Gli unici segnali sono tassi di apertura più bassi e i dati in Google Postmaster Tools.

## Cosa controlla il filtro

I provider non pubblicano le regole esatte. Questi sono gli elementi conosciuti:

- **Autenticazione.** Se [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc) passano. Google e Microsoft ora rifiutano le email in massa che falliscono questi controlli.
- **Reputazione.** La storia di invio del tuo dominio e del tuo indirizzo IP. Vedi [reputazione del dominio](/glossary/domain-reputation) e [reputazione IP](/glossary/ip-reputation).
- **Segnalazioni.** Quanto spesso i destinatari cliccano "segnala come spam". Le linee guida di Google dicono di tenere il tasso di segnalazioni in Postmaster Tools sotto lo 0,10 percento e di non arrivare mai allo 0,30 percento.
- **Bounce.** Quanto spesso invii a indirizzi che non esistono. Una lista con molti indirizzi morti sembra una lista comprata o raccolta con uno scraper.
- **Coinvolgimento.** Se le persone aprono le tue email, rispondono, le cancellano senza leggerle o le spostano in un'altra cartella.
- **Contenuto.** Link, allegati, immagini e schemi di testo che corrispondono a spam conosciuto. Il contenuto conta meno di una volta. Reputazione e autenticazione contano di più.

## Perché i mittenti vengono filtrati

La maggior parte dei filtri non scatta per le parole nell'email. Scatta per la lista. Gli indirizzi morti causano bounce. Le persone che non hanno chiesto la tua email causano segnalazioni. Entrambi i problemi nascono da indirizzi che non sono mai stati controllati.

## Come aiuta un verificatore

Un verificatore non interagisce con i filtri antispam. Rimuove gli indirizzi che causano bounce e segnalazioni. Passa la tua lista in un [verificatore di indirizzi email](/email-checker) prima di inviare. Rimuove le caselle che non esistono più. Rimuove anche gli indirizzi temporanei e gli account di ruolo come info@, che ricevono più segnalazioni. La guida sul [tasso di rimbalzo email](/blog/how-to-reduce-email-bounce-rate) mostra quanto è grande di solito questa parte di una lista.
