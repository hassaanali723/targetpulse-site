---
title: Punteggio spam
description: Cos'è il punteggio spam di un'email, come lo calcola SpamAssassin con un esempio, cosa lo alza, come controllarlo e come abbassarlo.
slug: punteggio-spam
date: 2026-10-12
updated: 2026-10-12
keyword: punteggio spam
short: Il punteggio spam è il numero che un filtro antispam assegna a un'email. Ogni problema trovato nell'email aggiunge punti. Più alto è il punteggio, più è probabile che l'email finisca nello spam.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Un testo pulito non basta se la lista è piena di indirizzi morti
---

## Cos'è il punteggio spam?

Il punteggio spam, in inglese spam score, è il numero che un [filtro antispam](/glossary/spam-filter) assegna a un'email. Il filtro controlla l'email con una serie di regole. Ogni regola che scatta aggiunge punti. Se il totale supera una soglia, l'email va nella cartella spam o viene bloccata.

Più alto è il punteggio spam, più l'email sembra spam al filtro. Un punteggio basso non garantisce l'arrivo nella posta in arrivo. Un punteggio alto, però, è un problema da risolvere.

## Un esempio di punteggio spam con SpamAssassin

SpamAssassin è un filtro antispam gratuito e open source, usato da molti server di posta. Un server è il computer che riceve la posta per un dominio. SpamAssassin usa molte regole, e ognuna vale un certo numero di punti. Con le impostazioni predefinite, segna un'email come spam quando arriva a 5,0 punti.

Prendiamo un negozio che invia un'email con l'oggetto "OFFERTA INCREDIBILE!!! SOLO OGGI". Il filtro trova tre problemi. I punti qui sotto sono solo un esempio, perché i valori reali cambiano tra versioni e configurazioni.

| Regola che scatta | Punti di esempio |
| --- | --- |
| Oggetto tutto in maiuscolo | 1,5 |
| L'email non ha una firma DKIM valida | 1,8 |
| L'indirizzo IP di invio è in una blacklist | 2,4 |
| **Totale** | **5,7** |

Il totale è 5,7 punti. È sopra la soglia di 5,0, quindi SpamAssassin segna l'email come spam. Supponiamo che il negozio sistemi DKIM. Il totale scende a 3,9 punti e l'email resta sotto la soglia.

Gmail e Outlook non usano SpamAssassin e non pubblicano un punteggio. Decidono soprattutto in base a chi invia e a come reagiscono i destinatari. Anche lì, però, più segnali negativi significano più probabilità di finire in spam.

## Cosa alza il punteggio spam

- **Autenticazione mancante.** Nessun record [SPF](/glossary/spf), [DKIM](/glossary/dkim) o [DMARC](/glossary/dmarc), oppure record che falliscono. Questi record dimostrano che l'email viene davvero dal tuo dominio.
- **Un indirizzo IP in blacklist.** L'indirizzo IP è il numero che identifica su internet il server che invia. Se è in una [blacklist](/glossary/email-blacklist), molti filtri aggiungono punti.
- **Parole e formattazione aggressive.** Frasi come "agisci ora" o "100% gratis", oggetti tutti in maiuscolo, tanti punti esclamativi.
- **HTML con errori.** L'HTML è il codice che dà forma all'email. Un codice con errori fa sembrare l'email fatta in modo trascurato.
- **Link accorciati.** Servizi come bit.ly nascondono dove porta il link. Filtri e lettori non si fidano di questi link.

## Lo Spam Score dei siti web è un'altra cosa

Nel mondo SEO esiste un altro "Spam Score". È una metrica di Moz che riguarda i siti web, non le email. Indica quanto un sito somiglia a siti che Google ha penalizzato. Se cerchi "spam score" online, trovi spesso entrambi i significati. Questa pagina parla solo del punteggio spam delle email.

## Come controllare il punteggio spam

1. **mail-tester.com.** Il sito ti dà un indirizzo email temporaneo. Invii la tua email a quell'indirizzo. Il sito mostra un voto e l'elenco dei problemi trovati, compresi i controlli di SpamAssassin, SPF, DKIM e delle blacklist.
2. **Il nostro [controllo delle parole spam](/spam-word-checker) (in inglese).** Incolli l'oggetto e il testo dell'email. Lo strumento evidenzia le parole a rischio, il testo in maiuscolo e i link accorciati. Non dà un numero, perché nessuno strumento sa come una casella precisa tratterà la tua email.
3. **Le intestazioni dell'email.** Le intestazioni sono le righe tecniche in cima a un'email. Un server che usa SpamAssassin di solito aggiunge un'intestazione X-Spam-Status con il punteggio.

## Come abbassare il punteggio spam

1. Configura SPF, DKIM e DMARC e controlla che risultino PASS.
2. Controlla che il tuo indirizzo IP e il tuo dominio non siano in una blacklist.
3. Scrivi oggetti normali, senza maiuscolo e senza tanti punti esclamativi.
4. Usa link completi del tuo dominio, non link accorciati.
5. Usa un modello HTML corretto, con testo vero e non solo immagini.
6. Invia di nuovo l'email a mail-tester.com e confronta il risultato.

## Punteggio spam e verifica email

La verifica non cambia il punteggio del contenuto, perché un filtro dà gli stessi punti allo stesso testo. La verifica agisce sulla lista. Con la [verifica email](/email-checker) e la [verifica email in blocco](/bulk-email-verifier) togli gli indirizzi inesistenti prima dell'invio. Meno bounce e meno indirizzi abbandonati riducono il rischio di [spam trap](/glossary/spam-trap) e di blacklist, che pesano sulla tua reputazione. Il nostro [servizio di verifica email](/) lavora quindi sulla lista, mentre il punteggio spam dipende dal testo e dalla configurazione.
