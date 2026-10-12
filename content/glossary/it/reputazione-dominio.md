---
title: Domain reputation
description: Cos'è la domain reputation, cioè la reputazione del dominio da cui invii email, la differenza con la reputazione IP, cosa la danneggia e come proteggerla.
slug: reputazione-dominio
date: 2026-10-12
updated: 2026-10-12
keyword: domain reputation
short: La domain reputation, o reputazione del dominio, è la fiducia che i provider di posta danno al tuo dominio di invio. Il dominio è la parte dell'indirizzo dopo la @. Questa reputazione resta legata al dominio anche se cambi piattaforma di invio.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Proteggi la reputazione del dominio prima di ogni invio
---

## Cos'è la reputazione del dominio?

La reputazione del dominio, in inglese domain reputation, indica quanto i provider di posta si fidano del dominio da cui invii email. Il dominio è la parte dell'indirizzo dopo la @. In offerte@example.com il dominio è example.com. I provider di posta sono servizi come Gmail, Outlook e Yahoo.

Ogni volta che invii, il provider registra cosa succede. Le email arrivano a persone reali? Qualcuno le segnala come spam? Molte rimbalzano? Con il tempo, queste informazioni formano la reputazione del tuo dominio. Una buona reputazione aiuta le email ad arrivare nella posta in arrivo. Una cattiva reputazione le manda in spam.

## Un esempio: un negozio cambia piattaforma di invio

Un negozio online con il dominio example.com invia newsletter da due anni con Mailchimp. Ha una buona reputazione, con pochi bounce e poche segnalazioni.

1. Il negozio decide di passare a Brevo.
2. Con Brevo le email partono da altri server, con altri indirizzi IP. Un indirizzo IP è il numero che identifica un server su internet.
3. Il dominio però resta example.com. Le email mostrano ancora news@example.com nel campo Da. Sono firmate con [DKIM](/glossary/dkim) per example.com.
4. Gmail riconosce il dominio e la sua storia. La reputazione del dominio segue il negozio sulla nuova piattaforma.

Vale anche al contrario. Se il negozio avesse una cattiva reputazione del dominio, cambiare piattaforma non la cancellerebbe.

## Reputazione del dominio e reputazione IP a confronto

| Aspetto | Reputazione del dominio | Reputazione IP |
| --- | --- | --- |
| A cosa si riferisce | Il dominio dopo la @, ad esempio example.com | Il numero del server che invia, ad esempio 203.0.113.25 |
| Se cambi ESP | Resta con te | Cambia, perché cambiano i server |
| Su un IP condiviso | Resta solo tua | La condividi con gli altri mittenti |
| Come si collega alle email | Tramite il campo Da e la firma DKIM | Tramite il server che consegna l'email |

I provider di posta guardano entrambe. Vedi anche [IP reputation](/glossary/ip-reputation).

## Cosa danneggia la reputazione del dominio

- **Bounce.** Molte email verso indirizzi che non esistono. Vedi [tasso di rimbalzo](/glossary/bounce-rate).
- **Segnalazioni di spam.** Persone che cliccano "Segnala spam" sulle tue email.
- **Spam trap.** Email inviate a indirizzi che servono solo a individuare liste di scarsa qualità.
- **Autenticazione mancante.** Nessun record [SPF](/glossary/spf), DKIM o [DMARC](/glossary/dmarc), oppure record che falliscono.

## Come controllare la domain reputation

Per le email inviate a Gmail puoi usare [Google Postmaster Tools](/glossary/postmaster-tools). È un pannello gratuito di Google. Aggiungi il tuo dominio e dimostri di possederlo con un record DNS. Il DNS è l'elenco pubblico di impostazioni del dominio. Poi Google ti mostra dati sulle email che il dominio invia a Gmail, come il tasso di spam, i risultati dell'autenticazione e gli errori di consegna.

Postmaster Tools copre solo Gmail. Per gli altri provider puoi guardare i segnali nei report del tuo ESP, cioè bounce, segnalazioni di spam e aperture. Strumenti come MXToolbox controllano anche se il tuo dominio è in una blacklist di domini.

## Come proteggere la reputazione del dominio

1. **Autentica il dominio.** Configura SPF, DKIM e DMARC su ogni servizio che invia email per te.
2. **Verifica le liste.** Togli gli indirizzi inesistenti prima di inviare.
3. **Usa un dominio separato per le cold email.** Le cold email sono email inviate a persone che non ti conoscono. Portano più bounce e più segnalazioni. Inviale da un sottodominio o da un dominio separato, per esempio example-mail.com, così il dominio principale resta protetto.
4. **Riscalda i domini nuovi.** Un dominio nuovo non ha storia. Aumenta il volume poco alla volta con il [warm up email](/glossary/email-warmup).
5. **Rendi facile la disiscrizione.** Se una persona non trova come disiscriversi, può cliccare "Segnala spam".

## Reputazione del dominio e verifica email

I bounce sono uno dei segnali che pesano sulla reputazione del dominio, e la verifica li riduce prima dell'invio. Con la [verifica email in blocco](/bulk-email-verifier) controlli tutta la lista e togli gli indirizzi che non esistono. Con il [verificatore email](/email-checker) controlli i singoli indirizzi, per esempio quando qualcuno si iscrive. La verifica non cambia le segnalazioni di spam né l'autenticazione. Il nostro [servizio di verifica email](/) toglie una causa precisa di danno, cioè le email verso caselle che non esistono.
