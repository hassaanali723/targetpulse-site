---
title: Spam trap
description: Cos'è una spam trap, i tre tipi e come ognuno finisce in una lista, cosa succede quando invii a una spam trap e come tenerle fuori dalla tua lista.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: Una spam trap è un indirizzo email che nessuna persona reale usa. Esiste solo per individuare chi invia email senza permesso. Se invii a una spam trap, significa che la tua lista è stata comprata, copiata da siti web o non è stata pulita da molto tempo.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Rimuovi gli indirizzi morti prima che diventino spam trap
---

## Cos'è una spam trap?

Una spam trap è un indirizzo email che sembra normale, ma nessuna persona lo legge. Nessuno si è mai iscritto a una newsletter con quell'indirizzo. Nessuno lo ha mai dato a un'azienda.

Quindi, se un'email arriva a una spam trap, chi la gestisce sa una cosa con certezza. Il mittente non ha avuto l'indirizzo dalla persona. Lo ha comprato, copiato da un sito web o tenuto troppo a lungo in una lista vecchia.

Chi gestisce le spam trap? La documentazione di Amazon per il suo servizio di invio email (Amazon SES) risponde così. Le gestiscono i provider internet, i provider di posta e le organizzazioni antispam. Un provider di posta è l'azienda che offre le caselle email, come i grandi servizi gratuiti. Gli indirizzi sono segreti apposta. Se i mittenti li conoscessero, li cancellerebbero e basta.

## Un esempio semplice

Ecco come un'azienda invia email a una spam trap senza accorgersene.

1. **Un negozio compra una lista.** "Negozio Online Srl" compra 10.000 indirizzi email da un sito che vende contatti.
2. **Nella lista c'è una trappola.** Uno degli indirizzi è info@pagina-nascosta.example. Un'organizzazione antispam lo ha messo su una pagina web anni fa. Nessuna persona lo ha mai usato.
3. **Il negozio invia una promozione.** L'email parte verso tutti i 10.000 indirizzi, compresa la spam trap.
4. **Sembra tutto normale.** La spam trap accetta l'email come una casella qualsiasi. Il negozio non vede nessun errore.
5. **La trappola registra il mittente.** L'organizzazione annota il server di invio e il dominio del negozio. Il dominio è la parte dell'indirizzo dopo la @.
6. **I problemi arrivano dopo.** Qualche giorno più tardi, più email del negozio finiscono nello spam. Alcuni clienti non ricevono le conferme d'ordine. Il negozio non sa perché.

Il negozio non riceve mai un messaggio che dice "hai colpito una spam trap". Vede solo le conseguenze.

## I tre tipi di spam trap

### 1. Trappole pristine (mai usate da nessuno)

Questi indirizzi sono stati creati solo per fare da trappola. Vengono nascosti su pagine web. Lì li trovano gli strumenti di scraping, cioè programmi che copiano in automatico gli indirizzi dai siti.

**Esempio:** l'indirizzo contatto-7731@un-dominio.example compare nel codice di una pagina web. Un visitatore non lo vede. Uno strumento di scraping lo raccoglie.

Solo le liste comprate o raccolte con uno scraper contengono trappole pristine. Una persona che si è iscritta sul tuo sito non può mai essere una di queste.

### 2. Trappole riciclate (indirizzi vecchi diventati trappole)

Questi erano indirizzi reali. Poi la persona ha smesso di usarli. Per un lungo periodo il provider ha fatto rimbalzare ogni email, cioè l'ha rimandata indietro come non consegnabile. Dopo, il provider ha riattivato l'indirizzo come trappola.

Amazon li descrive come indirizzi "that were once valid, but have been unused (and bouncing) for an extended period of time". Cioè indirizzi un tempo validi, ma inutilizzati e in bounce da molto tempo.

**Esempio:** Sara si è iscritta alla tua newsletter nel 2019 con sara.r@vecchiolavoro.example. Poi ha cambiato lavoro. Il suo indirizzo ha iniziato a rimbalzare, ma tu hai continuato a inviare. Anni dopo, l'indirizzo diventa una spam trap. La tua email successiva finisce lì.

Le liste che non vengono mai pulite accumulano trappole riciclate nel tempo.

### 3. Trappole da errore di battitura

Queste trappole stanno su domini che somigliano a un dominio famoso, con un piccolo errore di scrittura.

**Esempio:** una persona scrive il suo indirizzo nel tuo modulo di iscrizione. Sbaglia una lettera nel dominio. Il dominio sembra quello di un grande provider, ma non lo è. Se quel dominio sbagliato è gestito come spam trap, ogni email che invii a quell'indirizzo viene registrata.

Queste trappole colpiscono chi non controlla cosa le persone scrivono nei moduli.

## Cosa succede quando invii a una spam trap

Non ricevi nessun bounce. Un bounce è l'avviso automatico che un'email non è stata consegnata. La spam trap accetta l'email come una casella normale. Poi chi la gestisce registra il tuo indirizzo IP e il tuo dominio. L'indirizzo IP è il numero che identifica il server da cui parte la tua email.

Cosa succede dopo dipende dall'organizzazione:

- **Il tuo indirizzo IP può finire in una [blacklist](/glossary/email-blacklist).** Una blacklist, o blocklist, è un elenco di mittenti da bloccare. Molti server di posta la controllano e rifiutano le email di chi è nell'elenco.
- **La tua reputazione presso quel provider può calare.** Così più email finiscono nello spam.
- **Il tuo servizio di invio può mettere il tuo account sotto revisione.** Può anche bloccare gli invii finché non sistemi la lista.

Quante spam trap servono per avere problemi? Amazon non dà un numero. Dice che "even a small number of spamtrap hits can have a very negative effect". Cioè anche pochi invii a spam trap possono avere un effetto molto negativo.

## Come tenere le spam trap fuori dalla lista

Nessuno può darti un elenco di indirizzi spam trap, perché sono segreti. Quindi proteggi la lista con queste abitudini:

1. **Non comprare, affittare o raccogliere indirizzi con uno scraper.** È l'unico modo in cui le trappole pristine entrano in una lista.
2. **Rimuovi subito ogni indirizzo che fa hard bounce.** Un hard bounce significa che l'indirizzo non esiste. Amazon dice di rimuoverli "long before they are converted to spamtraps", cioè molto prima che diventino trappole.
3. **Smetti di inviare a chi non apre e non clicca da mesi.** Le trappole riciclate si trovano tra gli indirizzi vecchi e silenziosi.
4. **Controlla gli indirizzi al momento dell'iscrizione.** Un errore di battitura fermato sul modulo non diventa mai una spam trap nella tua lista.

## Cosa può e non può fare un verificatore

Un verificatore non può trovare ogni spam trap. Una trappola riciclata è una casella reale che accetta email, quindi può risultare valida anche con il [verificatore email](/email-checker). Diffida di chi promette di trovare tutte le trappole.

La verifica fa un'altra cosa. Trova gli indirizzi che non esistono più, così li cancelli prima che un provider li ricicli in trappole. Intercetta anche i domini scritti male prima del primo invio. Per controllare una lista intera, caricala nella [verifica email in blocco](/bulk-email-verifier) del nostro [servizio di verifica email](/). Non rende sicura una lista comprata. Non comprare liste è una decisione, non un controllo.
