---
title: Google Postmaster Tools
description: Cosa mostra Google Postmaster Tools sulle email che invii a Gmail, come si configura, i limiti sul tasso di spam che Google pubblica e cosa non mostra.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: Google Postmaster Tools è un pannello gratuito di Google. Mostra come Gmail valuta il tuo dominio di invio. Riporta il tasso di spam, la reputazione del dominio, la reputazione dell'IP, i risultati dell'autenticazione e gli errori di consegna per le email inviate agli utenti Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools segnala i problemi dopo l'invio. La verifica li previene
---

## Cos'è Google Postmaster Tools

Google Postmaster Tools è un sito web che Google mette a disposizione di chi invia email. Aggiungi il tuo dominio e dimostri di possederlo aggiungendo un record DNS. Poi Google ti mostra i dati sulle email che il tuo dominio invia agli indirizzi Gmail. È gratuito. È l'unica fonte ufficiale di informazioni su come Gmail valuta il tuo dominio.

Copre solo Gmail. Le email inviate a Outlook.com, Yahoo o ai server di posta aziendali non compaiono. Microsoft ha un servizio separato per la propria rete.

## Cosa mostra

- **Tasso di spam.** La percentuale delle tue email consegnate che gli utenti Gmail hanno segnalato come spam. Le linee guida per i mittenti di Google si riferiscono a questo numero.
- **Reputazione del dominio e reputazione dell'IP.** Un giudizio per ciascuna: bad, low, medium o high. High significa che Gmail filtra raramente le tue email. Bad significa che la maggior parte delle tue email finisce nello spam o viene rifiutata.
- **Autenticazione.** La percentuale delle tue email che supera [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc).
- **Crittografia.** La percentuale delle tue email inviate con TLS.
- **Errori di consegna.** La percentuale delle tue email che Gmail ha rifiutato o ritardato, con il motivo.
- **Feedback loop.** I tassi di segnalazione per campagna, per i grandi mittenti che usano l'intestazione Feedback-ID.

## I limiti che Google pubblica

Le linee guida per i mittenti di Google dicono:

- Tieni il tasso di spam mostrato in Postmaster Tools sotto lo 0,10 percento.
- Non raggiungere mai un tasso di spam dello 0,30 percento o superiore.
- Chi invia 5.000 o più messaggi al giorno deve avere SPF, DKIM e DMARC.
- Le email di marketing di questi mittenti devono avere la disiscrizione con un clic.

I mittenti che superano lo 0,30 percento vedono le loro email filtrate o rifiutate. Questi limiti sono piccoli. Su 10.000 email consegnate, lo 0,30 percento corrisponde a 30 segnalazioni.

## Cosa non mostra

Postmaster Tools riporta i dati sulle email consegnate. Non può mostrarti gli indirizzi che non esistono. Un'email verso un indirizzo morto viene rifiutata durante la connessione SMTP. Quel rifiuto è un bounce. I bounce non fanno parte del tasso di spam. Una lista con molti indirizzi non validi può mostrare un tasso di spam basso mentre il tasso di bounce sta danneggiando la tua reputazione.

Postmaster Tools ha anche bisogno di volume. Se il tuo dominio invia solo una piccola quantità di email a Gmail, i grafici restano vuoti. Google non pubblica il volume minimo.

## Come si combina con la verifica

Postmaster Tools segnala i problemi dopo l'invio. La verifica rimuove le cause prima dell'invio. Passare una lista in un [verificatore di indirizzi email](/email-checker) rimuove gli indirizzi che rimbalzano. Rimuove anche gli indirizzi temporanei e gli indirizzi di ruolo che causano segnalazioni. Dopo, Postmaster Tools ha meno da segnalare. La guida sul [tasso di rimbalzo email](/blog/how-to-reduce-email-bounce-rate) spiega entrambi i lati.
