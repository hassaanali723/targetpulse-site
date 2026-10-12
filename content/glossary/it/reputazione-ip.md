---
title: IP reputation
description: Cos'è la IP reputation, cioè la reputazione dell'indirizzo IP da cui invii email, la differenza tra IP condiviso e dedicato e come controllarla e migliorarla.
slug: reputazione-ip
date: 2026-10-12
updated: 2026-10-12
keyword: ip reputation
short: La IP reputation, o reputazione IP, è la fiducia che i provider di posta danno all'indirizzo IP da cui partono le tue email. Un indirizzo IP è il numero che identifica un server su internet. Se la reputazione IP è bassa, le email finiscono in spam o vengono rifiutate.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Proteggi la reputazione IP con una lista verificata
---

## Cos'è la reputazione IP?

La reputazione IP, in inglese IP reputation, indica quanto i provider di posta si fidano dell'indirizzo IP da cui partono le tue email. I provider di posta sono i servizi dove le persone ricevono e leggono le email, come Gmail, Outlook e Yahoo.

Un indirizzo IP è il numero che identifica un server su internet, per esempio 203.0.113.25. Un server è il computer che invia le email. Ogni email che arriva porta con sé l'indirizzo IP del server che l'ha consegnata. Il provider guarda come si sono comportate in passato le email da quell'indirizzo. Se molte erano spam o andavano a indirizzi inesistenti, la reputazione è bassa.

## Un esempio: due mittenti sullo stesso IP

Due aziende usano lo stesso ESP, cioè la stessa piattaforma di invio. L'ESP invia le email di entrambe dallo stesso indirizzo IP, 203.0.113.25.

- La libreria Rossi invia una newsletter ogni settimana ai suoi iscritti. Ha pochi bounce e poche segnalazioni.
- L'azienda B compra una lista di 50.000 indirizzi e invia un'offerta a tutti.

Ecco cosa succede.

1. Molti indirizzi della lista comprata non esistono. Migliaia di email rimbalzano.
2. Alcune email arrivano a [spam trap](/glossary/spam-trap). Sono indirizzi usati solo per individuare chi invia a liste di scarsa qualità.
3. Molti destinatari cliccano "Segnala spam".
4. Gmail e Outlook abbassano la reputazione dell'IP 203.0.113.25.
5. Anche la newsletter della libreria Rossi inizia a finire in spam, perché parte dallo stesso IP.

Per questo gli ESP controllano i bounce dei clienti. Possono sospendere un account che danneggia un IP condiviso.

## IP condiviso e IP dedicato

| Aspetto | IP condiviso | IP dedicato |
| --- | --- | --- |
| Chi lo usa | Molti clienti dello stesso ESP | Un solo mittente |
| Da chi dipende la reputazione | Da tutti i mittenti sull'IP | Solo da te |
| Adatto a | Volumi piccoli e medi | Volumi grandi e costanti |
| Chi la gestisce | L'ESP | Tu, con il riscaldamento e invii regolari |

Un IP dedicato con pochi invii non è un vantaggio. I provider hanno bisogno di un volume regolare per farsi un'idea di un IP.

## Cosa costruisce e cosa danneggia la reputazione IP

Costruiscono la reputazione:

- un volume di invio regolare, senza salti improvvisi;
- pochi bounce;
- poche segnalazioni di spam;
- destinatari che aprono e rispondono.

La danneggiano:

- molti [hard bounce](/glossary/hard-bounce) verso indirizzi inesistenti;
- invii a spam trap;
- segnalazioni di spam;
- l'inserimento in una [blacklist](/glossary/email-blacklist) o in una [DNSBL](/glossary/dnsbl).

## Come controllare la IP reputation

- **Controlli delle blacklist.** Strumenti come MXToolbox controllano se il tuo IP è nelle blacklist pubbliche più usate, come quelle di Spamhaus. Inserisci l'indirizzo IP e vedi in quali elenchi compare.
- **Microsoft SNDS.** Smart Network Data Services è un servizio gratuito di Microsoft. Mostra come Outlook.com vede il traffico dai tuoi indirizzi IP. Funziona per gli IP che controlli tu, come un IP dedicato.
- **Google Postmaster Tools.** Mostra dati sulle email che invii a Gmail. Vedi [Google Postmaster Tools](/glossary/postmaster-tools).

Se usi un IP condiviso, chiedi al tuo ESP. L'IP è suo e lo gestisce lui.

## Come migliorare la reputazione IP

1. Su un IP nuovo, aumenta il volume poco alla volta. Questo si chiama [riscaldamento IP](/glossary/ip-warming).
2. Verifica la lista e togli gli indirizzi che non esistono prima di inviare.
3. Rimuovi subito chi fa hard bounce e chi si disiscrive.
4. Invia solo a chi si è iscritto. Non comprare liste.
5. Se il tuo IP è in una blacklist, trova la causa e risolvila. Poi chiedi la rimozione.
6. Mantieni un volume costante, invece di fare grandi invii rari.

## Reputazione IP e reputazione del dominio

La reputazione IP riguarda il server da cui invii. La [reputazione del dominio](/glossary/domain-reputation) riguarda il dominio nel tuo indirizzo, cioè la parte dopo la @. Se cambi ESP, cambi IP, ma il dominio resta lo stesso. Per questo la reputazione del dominio ti segue, mentre quella dell'IP no. I provider di posta guardano entrambe.

## Reputazione IP e verifica email

La verifica protegge la reputazione IP da un problema preciso, gli invii a indirizzi che non esistono. Con la [verifica email in blocco](/bulk-email-verifier) controlli la lista prima della campagna e togli gli indirizzi che farebbero hard bounce. Con la [verifica email](/email-checker) controlli i nuovi indirizzi uno alla volta, per esempio quando qualcuno si iscrive. Meno bounce e meno indirizzi abbandonati, che possono diventare spam trap, significano meno segnali negativi sul tuo IP. Il nostro [servizio di verifica email](/) non toglie un IP da una blacklist, ma riduce il rischio di finirci.
