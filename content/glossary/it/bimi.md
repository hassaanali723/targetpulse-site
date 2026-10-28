---
title: BIMI
description: Cos'è BIMI nelle email, come mostra il logo del tuo marchio in Gmail, cosa serve, com'è fatto il record BIMI e come configurarlo passo per passo.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi record
short: BIMI è uno standard email che mostra il logo del tuo marchio accanto alle tue email, nelle caselle di posta che lo supportano. Funziona solo se il tuo dominio ha DMARC con una policy quarantine o reject. Il logo si pubblica con un record BIMI nel DNS.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Il logo si vede solo se l'email arriva. Verifica la lista prima
---

## Cos'è BIMI nelle email?

BIMI sta per Brand Indicators for Message Identification. È uno standard email che fa comparire il logo del tuo marchio accanto alle email che invii. Il logo appare solo nelle caselle di posta che supportano BIMI. Appare solo se le tue email superano i controlli di autenticazione.

Il dominio è la parte dell'indirizzo dopo la @. In news@example.com il dominio è example.com. BIMI si configura per il dominio, non per una singola casella.

## Un esempio in Gmail

Apri la posta in arrivo di Gmail. Accanto a ogni email c'è un piccolo cerchio. Per la maggior parte dei mittenti contiene una lettera, per esempio una "M" per Marco. Per alcuni marchi contiene il loro logo. Quel logo arriva da BIMI.

Prendiamo un negozio con il dominio example.com. Il negozio ha configurato BIMI con un certificato valido. Ecco cosa succede quando invia una newsletter a un utente Gmail.

1. L'email arriva a Gmail.
2. Gmail controlla [SPF](/glossary/spf), [DKIM](/glossary/dkim) e [DMARC](/glossary/dmarc). L'email li supera.
3. Gmail cerca il record BIMI del dominio nel DNS. Il DNS è l'elenco pubblico di impostazioni di un dominio.
4. Il record indica dove si trovano il logo e il certificato.
5. Gmail controlla il certificato e mostra il logo nel cerchio accanto all'email.

Se il negozio ha un certificato VMC, Gmail aggiunge anche una spunta blu accanto al nome del mittente.

## Cosa serve per BIMI

- **DMARC con una policy attiva.** La policy deve essere `quarantine` o `reject`. Google dice che BIMI non funziona con `p=none`.
- **Il logo in formato SVG Tiny PS.** SVG è un formato di immagine. SVG Tiny PS è una versione ridotta, pensata per essere mostrata in sicurezza nelle caselle di posta. Il logo deve essere quadrato e avere un elemento title con il nome del marchio. Non può contenere script, immagini incorporate, animazioni o link a file esterni. Il file dovrebbe restare sotto i 32 KB.
- **Un certificato del marchio, per Gmail.** Gmail mostra il logo solo con un VMC o un CMC. Un VMC (Verified Mark Certificate) richiede un marchio registrato e aggiunge la spunta blu. Un CMC (Common Mark Certificate) non richiede un marchio registrato e mostra il logo senza spunta. I certificati vengono emessi da un piccolo numero di autorità di certificazione. Google pubblica l'elenco di quelle che accetta.

## Il record BIMI

Il record BIMI è un [record TXT del DNS](/glossary/dns-txt-record). Un record TXT è una riga di testo semplice nelle impostazioni DNS del dominio. Il record si pubblica al nome `default._bimi.example.com`. Qui `default` è il selettore, cioè il nome del record. Un record BIMI con logo e certificato ha questo aspetto:

```
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/cert.pem
```

| Tag | Cosa indica | Esempio |
| --- | --- | --- |
| `v` | La versione. È sempre BIMI1. | `v=BIMI1` |
| `l` | L'indirizzo HTTPS del logo SVG. | `l=https://example.com/bimi/logo.svg` |
| `a` | L'indirizzo HTTPS del certificato VMC o CMC, un file PEM. | `a=https://example.com/bimi/cert.pem` |

Gli esempi di Google mostrano anche un'altra forma. In questa `l=` resta vuoto e `a=` punta al certificato, perché il logo è già dentro il file PEM. Se hai un certificato, segui le indicazioni del tuo fornitore.

## Quali caselle di posta mostrano il logo BIMI

- **Gmail** mostra il logo solo con un VMC o un CMC.
- **Apple Mail** mostra il logo solo con un VMC.
- **Yahoo e Fastmail**, tra gli altri, possono mostrare un logo anche da un record senza certificato.

Le caselle che non supportano BIMI ignorano il record. L'email arriva normalmente, solo senza logo. I provider possono anche impiegare un po' di tempo prima di leggere un record nuovo.

## Come configurare BIMI

1. Porta DMARC a `p=quarantine` o `p=reject`. Il [generatore DMARC](/dmarc-generator) crea il record.
2. Prepara il logo come file SVG Tiny PS e controlla che rispetti le regole.
3. Scegli il certificato. Per Gmail serve un VMC o un CMC. Per Apple Mail serve un VMC.
4. Pubblica il logo e il file del certificato a indirizzi HTTPS.
5. Pubblica il record BIMI come record TXT a `default._bimi.example.com`.

Il nostro [generatore di record BIMI](/bimi-generator) crea il record e controlla il logo SVG nel tuo browser. Così trovi gli errori prima di comprare un certificato.

BIMI non migliora direttamente la consegna delle email. Mostra un logo solo sulle email che superano già DMARC. Il lavoro per arrivarci, cioè configurare bene SPF, DKIM e DMARC, è quello che aiuta le email ad arrivare.

## BIMI e verifica email

BIMI cambia l'aspetto delle email che arrivano nella casella. Non fa niente per le email inviate a indirizzi che non esistono. Quelle rimbalzano e nessuno vede il logo. Prima di una campagna, controlla un indirizzo con la [verifica email](/email-checker) o tutta la lista con la [verifica email in blocco](/bulk-email-verifier). Il nostro [servizio di verifica email](/) trova gli indirizzi inesistenti, così meno email rimbalzano.
