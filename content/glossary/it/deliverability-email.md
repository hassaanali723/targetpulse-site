---
title: Email deliverability
description: Cos'è la deliverability email, la differenza tra email consegnata ed email in inbox con un esempio, cosa la influenza, come misurarla e migliorarla.
slug: deliverability-email
date: 2026-10-12
updated: 2026-10-12
keyword: email deliverability
short: La deliverability email indica quante delle tue email arrivano nella posta in arrivo del destinatario. Non basta che un'email venga consegnata. Deve finire in inbox, non nella cartella spam, e non deve essere bloccata.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Una lista verificata è il primo passo per arrivare in inbox
---

## Cos'è la deliverability email?

La deliverability email è la capacità delle tue email di arrivare nella posta in arrivo, chiamata anche inbox. Il termine inglese si usa anche in italiano. A volte si traduce come recapitabilità.

Un'email che invii può finire in tre posti:

- nella posta in arrivo, dove la persona la vede tra le altre email;
- nella cartella spam, separata dalla posta in arrivo;
- da nessuna parte, perché il server del destinatario l'ha rifiutata.

Una buona deliverability email significa che la maggior parte delle tue email finisce nel primo posto.

## Consegna e deliverability: un esempio con i numeri

Consegna e deliverability sono due cose diverse. Un'email è consegnata quando il server del destinatario la accetta. Un server è il computer che riceve la posta per un dominio. La deliverability guarda anche dove il server mette l'email.

Supponiamo che tu invii 1.000 email. Questi sono numeri di esempio.

| Passaggio | Email | Cosa è successo |
| --- | --- | --- |
| Inviate | 1.000 | Tutte partite dal tuo strumento di invio |
| Rimbalzate | 40 | Il server le ha rifiutate, per esempio perché l'indirizzo non esiste |
| Consegnate | 960 | Il server le ha accettate |
| In posta in arrivo | 800 | La persona le vede nella inbox |
| In spam | 160 | Accettate, ma messe nella cartella spam |

Il tasso di consegna è 960 su 1.000, cioè il 96 percento. Ma solo 800 email su 1.000 sono arrivate in inbox. Molti strumenti di invio mostrano il primo numero come "consegnate". Il secondo numero dice quante persone possono davvero vedere la tua email.

## Cosa influenza la deliverability

- **Autenticazione.** I record [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc) dimostrano che le email vengono davvero dal tuo dominio. Il dominio è la parte dell'indirizzo dopo la @.
- **Reputazione del mittente.** I provider di posta come Gmail e Outlook registrano come si comportano il tuo dominio e il tuo indirizzo IP. L'indirizzo IP è il numero che identifica su internet il server che invia. Vedi [reputazione del mittente](/glossary/sender-reputation).
- **Bounce.** Molte email verso indirizzi che non esistono indicano una lista non controllata. Vedi [tasso di rimbalzo](/glossary/bounce-rate).
- **Segnalazioni di spam.** Ogni volta che una persona clicca "Segnala spam", la tua reputazione ne risente. Le linee guida di Google chiedono di tenere il tasso di spam sotto lo 0,10 percento e di non arrivare mai allo 0,30 percento.
- **Qualità della lista.** Indirizzi comprati, vecchi o scritti male portano bounce e [spam trap](/glossary/spam-trap).
- **Contenuto.** Frasi aggressive, testo tutto in maiuscolo e link accorciati possono far scattare i [filtri antispam](/glossary/spam-filter).

## Come misurare la deliverability email

**Test con una seed list.** Una [seed list](/glossary/seed-list) è un elenco di caselle di prova su diversi provider, come Gmail, Outlook e Yahoo. Invii la campagna anche a queste caselle. Poi controlli in quale cartella è finita l'email in ogni casella. Così vedi quante email arrivano in inbox per ogni provider.

**Google Postmaster Tools.** È un pannello gratuito di Google per chi invia email a Gmail. Mostra il tasso di spam, gli errori di consegna e i risultati dell'autenticazione per il tuo dominio. Vedi [Google Postmaster Tools](/glossary/postmaster-tools).

**I report del tuo strumento di invio.** I tassi di bounce, di segnalazione e di disiscrizione mostrano i problemi della lista.

## Come migliorare la deliverability

1. Configura SPF, DKIM e DMARC per il dominio da cui invii.
2. Verifica la lista prima di ogni campagna e togli gli indirizzi che non esistono.
3. Rimuovi subito ogni indirizzo che fa [hard bounce](/glossary/hard-bounce).
4. Invia solo a persone che si sono iscritte. Non comprare liste.
5. Metti un link di disiscrizione chiaro in ogni email di marketing.
6. Se il dominio è nuovo, aumenta il volume poco alla volta con il [warm up email](/glossary/email-warmup).
7. Smetti di inviare a chi non apre e non clicca da molti mesi.
8. Controlla ogni settimana Postmaster Tools e i report del tuo strumento di invio.

## Email deliverability e verifica email

La verifica agisce su un fattore preciso della deliverability, cioè i bounce. La [verifica email](/email-checker) controlla se un indirizzo esiste prima che tu invii, e la [verifica email in blocco](/bulk-email-verifier) fa lo stesso controllo su tutta la lista. Meno bounce proteggono la reputazione del mittente, e una buona reputazione aiuta le email ad arrivare in inbox. La verifica non cambia il contenuto né l'autenticazione, quindi usa il nostro [servizio di verifica email](/) insieme a SPF, DKIM e DMARC.
