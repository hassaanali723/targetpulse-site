---
title: Record TXT DNS
description: Cos'è un record TXT DNS, a cosa serve per le email (SPF, DKIM e DMARC), come aggiungerne uno, le regole che lo rendono inutilizzabile e come controllarlo. Con esempi.
slug: record-txt-dns
date: 2026-10-22
updated: 2026-10-22
keyword: record txt dns
short: Un record TXT DNS è una riga di testo salvata nelle impostazioni del tuo dominio. I server di posta leggono i record TXT per controllare SPF, DKIM e DMARC. Altri servizi li leggono per confermare che il dominio è tuo.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: I tuoi record sono a posto. Ora controlla gli indirizzi a cui scrivi
---

## Cos'è un record TXT DNS?

Un record TXT DNS è una riga di testo salvata nelle impostazioni del tuo dominio. Chiunque su internet può leggerla.

Prima, cos'è il DNS. DNS sta per Domain Name System, cioè sistema dei nomi di dominio. Funziona come un elenco telefonico pubblico dei domini. Quando qualcuno scrive il tuo dominio, il DNS dice al suo computer dove trovarlo. Il DNS contiene diversi tipi di voci, chiamate record. Ogni tipo di record ha un solo compito.

Un record TXT contiene testo semplice. Non manda nessuno da nessuna parte. È una nota collegata al tuo dominio. Altri sistemi leggono la nota e agiscono di conseguenza.

## A cosa servono i record TXT

Per le email, i record TXT contengono le regole che dimostrano che le tue email sono vere.

| Uso | Dove va il record | Valore di esempio |
|---|---|---|
| **[SPF](/glossary/spf)** | il tuo dominio, per esempio `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Proprietà del dominio** | il tuo dominio | `google-site-verification=abc123...` |

I valori qui sopra sono esempi accorciati. I tuoi valori reali te li dà il tuo provider di posta o il servizio che stai collegando.

## Un esempio semplice

Ecco come si aggiunge un record TXT.

1. **Marco inizia a usare Google Workspace.** Vuole che le sue email da marco@studio.example arrivino nella casella dei destinatari.
2. **Google gli dà un valore.** La guida di configurazione gli dice di aggiungere un record SPF con `v=spf1 include:_spf.google.com ~all`.
3. **Marco apre le impostazioni del dominio.** Accede al sito dove ha comprato il dominio. Questo si chiama registrar o provider DNS.
4. **Aggiunge un record TXT.** Sceglie il tipo TXT, lascia come nome il suo dominio e incolla il valore.
5. **Aspetta.** La modifica può richiedere da pochi minuti a qualche ora per essere visibile ovunque.
6. **Ora i server possono controllarlo.** Quando Marco invia un'email, il server di destinazione legge il suo record TXT. Vede che i server di Google sono autorizzati a inviare per studio.example.

## Le regole che rendono inutilizzabile un record TXT

La maggior parte dei problemi con i record TXT nasce da pochi errori semplici.

- **Un solo record SPF per dominio.** Se un dominio ha due record TXT che iniziano con `v=spf1`, SPF fallisce. Uniscili in un solo record.
- **I valori lunghi vengono divisi.** Un singolo pezzo di testo in un record TXT può contenere fino a 255 caratteri. I valori lunghi, come le chiavi DKIM, vengono salvati in più pezzi. La maggior parte dei provider DNS lo fa per te.
- **Usa il nome esatto.** Un record DMARC deve stare su `_dmarc`, non sul dominio principale. Un record DKIM deve stare sul nome del selettore che ti dà il tuo provider.
- **Copia il valore esattamente.** Un solo carattere mancante rende il record inutile.

## Come controllare un record TXT

Puoi leggere i record TXT di qualsiasi dominio. Su un computer Mac o Linux, apri il terminale e scrivi `dig TXT example.com`. Su Windows, scrivi `nslookup -type=TXT example.com`.

Puoi anche usare la nostra [verifica record SPF](/spf-checker). Legge il record SPF di un dominio e spiega cosa consente.

## Che rapporto c'è tra record TXT e verifica

I record TXT proteggono le email che invii. Dimostrano che l'email arriva da te. Non dicono nulla sul fatto che la persona a cui scrivi abbia ancora una casella.

Quello è un controllo diverso. La [verifica email](/email-checker) chiede al server di destinazione se un indirizzo esiste. Ti servono tutte e due le cose: record corretti sul tuo dominio e una lista pulita di indirizzi reali.
