---
title: Google Postmaster Tools
description: Cosa mostra Google Postmaster Tools sulle email che invii a Gmail, come si configura, i limiti sul tasso di spam che Google pubblica e cosa non mostra.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools è un pannello gratuito di Google che mostra come Gmail valuta il tuo dominio di invio. Riporta il tasso di spam, la reputazione del dominio e dell'IP, i risultati dell'autenticazione e gli errori di consegna. I dati riguardano solo le email inviate agli utenti Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools segnala i problemi dopo l'invio. La verifica li previene
---

## Cos'è Google Postmaster Tools?

Google Postmaster Tools è un sito web che Google mette a disposizione di chi invia email. È gratuito. È l'unica fonte ufficiale di informazioni su come Gmail valuta il tuo dominio.

Il dominio è la parte dell'indirizzo email dopo la @. In news@example.com il dominio è example.com.

Per usarlo, aggiungi il tuo dominio. Poi dimostri di possederlo aggiungendo un record DNS. Il DNS è l'elenco pubblico di impostazioni del tuo dominio. Un record è una riga di questo elenco. Dopo, Google ti mostra i dati sulle email che il tuo dominio invia agli indirizzi Gmail.

Copre solo Gmail. Le email inviate a Outlook.com, Yahoo o ai server di posta aziendali non compaiono. Microsoft ha un servizio separato per la propria rete.

## Un esempio semplice

Valentina gestisce le email di una rivista online. La rivista invia una newsletter dal dominio example.com. Molti lettori usano Gmail.

1. Valentina apre Google Postmaster Tools con il suo account Google.
2. Aggiunge il dominio example.com.
3. Google le dà un record TXT da copiare. Un record TXT è un record DNS che contiene testo semplice.
4. Valentina aggiunge il record nel DNS del dominio, presso l'azienda dove lo ha registrato.
5. Torna in Postmaster Tools e conferma. Google legge il record e verifica che il dominio è suo.
6. Quando la rivista ha inviato abbastanza email a Gmail, compaiono i grafici.
7. Valentina vede il tasso di spam di ogni giorno. Se sale, sa che deve controllare la lista.

## Cosa mostra

- **Tasso di spam.** La percentuale delle tue email consegnate che gli utenti Gmail hanno segnalato come spam. Le linee guida per i mittenti di Google si riferiscono a questo numero.
- **Reputazione del dominio e reputazione dell'IP.** L'indirizzo IP è il numero che identifica il server da cui invii. Per ciascuno, Google dà un giudizio: bad, low, medium o high. High significa che Gmail filtra raramente le tue email. Bad significa che la maggior parte delle tue email finisce nello spam o viene rifiutata.
- **Autenticazione.** La percentuale delle tue email che supera [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc). Sono controlli che dimostrano che l'email arriva davvero dal tuo dominio.
- **Crittografia.** La percentuale delle tue email inviate con TLS. TLS protegge l'email mentre passa da un server all'altro.
- **Errori di consegna.** La percentuale delle tue email che Gmail ha rifiutato o ritardato, con il motivo.
- **Feedback loop.** I tassi di segnalazione per ogni campagna. Sono disponibili per i grandi mittenti che usano l'intestazione Feedback-ID. Un'intestazione è una riga di informazioni in cima a un'email.

## I limiti che Google pubblica

Le linee guida per i mittenti di Google dicono:

1. Tieni il tasso di spam mostrato in Postmaster Tools sotto lo 0,10 percento.
2. Non raggiungere mai un tasso di spam dello 0,30 percento o superiore.
3. Chi invia 5.000 o più messaggi al giorno deve avere SPF, DKIM e DMARC.
4. Le email di marketing di questi mittenti devono avere la disiscrizione con un clic.

I mittenti che superano lo 0,30 percento vedono le loro email filtrate o rifiutate. Questi limiti sono piccoli. Su 10.000 email consegnate, lo 0,30 percento corrisponde a 30 segnalazioni.

| email consegnate | 0,10 percento | 0,30 percento |
|---|---|---|
| 10.000 | 10 segnalazioni | 30 segnalazioni |

## Cosa non mostra

Postmaster Tools riporta i dati sulle email consegnate. Non può mostrarti gli indirizzi che non esistono. Ecco perché:

1. Un'email verso un indirizzo morto viene rifiutata durante la connessione SMTP. SMTP è il linguaggio che i server di posta usano per parlare tra loro.
2. Quel rifiuto è un bounce, cioè un'email che torna indietro.
3. I bounce non fanno parte del tasso di spam.

Quindi una lista con molti indirizzi non validi può mostrare un tasso di spam basso. Nello stesso momento, il tasso di bounce sta danneggiando la tua reputazione.

Google Postmaster Tools ha anche bisogno di volume. Se il tuo dominio invia solo poche email a Gmail, i grafici restano vuoti. Google non pubblica il volume minimo.

## Come si combina con la verifica

Google Postmaster Tools segnala i problemi dopo l'invio. La verifica rimuove alcune cause prima dell'invio. Passa la lista nella [verifica email in blocco](/bulk-email-verifier), oppure controlla un indirizzo con la [verifica email](/email-checker). Così togli gli indirizzi che rimbalzano, gli indirizzi temporanei e gli indirizzi di ruolo che causano segnalazioni. Il nostro [servizio di verifica email](/) non cambia i dati di Google, ma dopo la pulizia Postmaster Tools ha meno da segnalare. La guida sul [tasso di rimbalzo email](/blog/how-to-reduce-email-bounce-rate) spiega entrambi i lati.
