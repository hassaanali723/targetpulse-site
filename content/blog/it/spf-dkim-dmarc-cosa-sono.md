---
title: "SPF, DKIM e DMARC: cosa sono e come funzionano"
seoTitle: "SPF, DKIM e DMARC: cosa sono e come funzionano insieme (2026)"
description: "SPF controlla il server, DKIM la firma e DMARC che uno dei due corrisponda al dominio From. I record da pubblicare, gli errori comuni e le novità del 2026."
slug: spf-dkim-dmarc-cosa-sono
date: 2026-10-19
updated: 2026-10-19
keyword: spf dkim dmarc cosa sono
image: /blog/covers/it/spf-dkim-dmarc-cosa-sono.webp
imageAlt: Banner blu scuro con la scritta SPF, DKIM, DMARC e tre colonne di spiegazione tecnica
cta: Verifica la tua lista con Giggal.ai
---

SPF, DKIM e DMARC sono tre record DNS, e ognuno risponde a una domanda diversa su un'email. SPF (Sender Policy Framework) elenca i server autorizzati a inviare posta per il tuo dominio. DKIM (DomainKeys Identified Mail) aggiunge una firma a ogni messaggio, così il destinatario può capire che niente è stato modificato dopo l'invio. DMARC (Domain-based Message Authentication, Reporting and Conformance) controlla che almeno uno dei due corrisponda al dominio dell'indirizzo From, e dice al destinatario cosa fare quando nessuno dei due corrisponde. Dal 2024 non sono più facoltativi: Gmail e Outlook.com ora rifiutano molta posta che non supera questi controlli, invece di spostarla semplicemente nello spam.

| Record | Cosa controlla | Dove si trova |
| --- | --- | --- |
| SPF | Quali server possono inviare per il tuo dominio | Record TXT sul tuo dominio |
| DKIM | Una firma digitale su ogni messaggio | Record TXT su selector._domainkey.yourdomain |
| DMARC | Che SPF o DKIM corrisponda al tuo dominio From, e cosa fare se non succede | Record TXT su _dmarc.yourdomain |

## Perché non puoi più farne a meno

Dal 1° febbraio 2024 Google ha introdotto regole obbligatorie per chiunque invii email ad account Gmail personali. Secondo questi requisiti di base, ogni mittente deve configurare SPF oppure DKIM. Deve anche avere un DNS diretto e inverso valido, con record PTR corrispondenti per gli IP di invio, usare la crittografia TLS per la trasmissione e rispettare le specifiche della RFC 5322. Il tuo tasso di spam in Google Postmaster Tools deve restare sotto lo 0,3 percento, e Google consiglia di tenerlo sotto lo 0,1 percento. Se invii posta non autenticata, Google avverte che i messaggi possono finire nella cartella spam o essere rifiutati con il codice di errore 5.7.26.

Se invii 5.000 o più messaggi al giorno a indirizzi Gmail personali, Google ti classifica come mittente di massa e le regole diventano più rigide. I mittenti di massa non possono scegliere tra SPF e DKIM: devono configurare entrambi i protocolli. Devono anche pubblicare un record DMARC e mantenere l'allineamento tra il dominio visibile nell'intestazione From e il dominio di SPF o di DKIM. Per i messaggi di marketing devono includere un meccanismo funzionante di disiscrizione con un clic. Google conta la soglia dei 5.000 messaggi sul dominio principale e su tutti i suoi sottodomini in una finestra di 24 ore. Quando il dominio raggiunge la soglia, Google considera permanente lo stato di mittente di massa. Da novembre 2025 Gmail ha iniziato ad applicare le regole in modo più severo sul traffico non conforme, con ritardi temporanei di consegna e rifiuti permanenti. Queste linee guida si applicano agli account Gmail personali, non alle caselle aziendali Google Workspace.

Microsoft ha introdotto le sue regole di autenticazione il 5 maggio 2025 per i mittenti che inviano 5.000 o più messaggi al giorno ad account privati Outlook.com, Hotmail e Live. I mittenti sopra questa soglia hanno bisogno di un controllo SPF superato, di una firma DKIM superata e di un record DMARC pubblicato con p=none o una policy più rigida, allineato con SPF o DKIM. Se non rispetti questi requisiti, Microsoft blocca i tuoi messaggi con il codice di bounce 550 5.7.515 Access denied, sending domain does not meet the required authentication level (accesso negato, il dominio di invio non raggiunge il livello di autenticazione richiesto). Anche Yahoo ha introdotto regole simili per i mittenti di massa nel 2024.

| Codice | Cosa non ha funzionato |
| --- | --- |
| 4.7.27 e 5.7.27 | SPF non superato |
| 4.7.30 e 5.7.30 | DKIM non superato |
| 4.7.31 | Record DMARC mancante o senza policy |
| 4.7.32 | Dominio From non allineato con SPF o DKIM |
| 4.7.23 e 5.7.25 | Problemi con il record PTR |

Google usa i codici 4.x per le limitazioni temporanee di frequenza e i codici 5.x per i blocchi permanenti di consegna. Quando le tue campagne rimbalzano, non cercare di indovinare il problema dalla dashboard di marketing. Controlla le intestazioni grezze del rifiuto del server, come spiega la nostra guida su [come leggere i messaggi di rimbalzo](/blog/550-5-7-1-error).

## SPF: quali server possono inviare per il tuo dominio

Sender Policy Framework, standardizzato nella RFC 7208, verifica il mittente della busta di un messaggio in arrivo. Il mittente della busta è l'indirizzo Return-Path o MAIL FROM che i server di posta usano per restituire i bounce. SPF può anche valutare il nome del server dichiarato durante lo scambio iniziale HELO o EHLO. SPF controlla solo il mittente della busta e ignora l'indirizzo From visibile che le persone vedono nella loro casella. Per questo SPF da solo non può impedire a un malintenzionato di falsificare il nome del tuo brand.

Un [record SPF](/glossary/spf) si trova nel DNS come un unico record TXT. Dice ai server riceventi quali indirizzi IP, server MX e piattaforme esterne possono inviare posta per il tuo dominio. Un record tipico ha questo aspetto:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Ogni record inizia con `v=spf1`. L'istruzione `include:_spf.google.com` dice ai server riceventi di interrogare il record SPF di Google e di autorizzare gli indirizzi IP elencati al suo interno. Il secondo include autorizza a inviare i server gestiti dalla tua piattaforma di marketing o dal tuo servizio di email transazionali.

La direttiva finale dice ai riceventi come trattare i mittenti non elencati. Il qualificatore softfail, scritto `~all`, indica che i server non elencati probabilmente non sono autorizzati, ma suggerisce ai riceventi di accettare il messaggio e applicare il filtro antispam. Il qualificatore fail, scritto `-all`, segna i server non elencati come errore netto, e alcuni riceventi rifiutano subito quella posta. Chi controlla configurazioni complesse spesso parte con `~all`, così la posta di lavoro legittima non viene scartata per sbaglio.

La RFC 7208 fissa due limiti rigidi che non puoi superare. Primo, un dominio può pubblicare un solo record SPF. Pubblicarne due produce un permerror, che invalida SPF per tutta la tua posta in uscita. Secondo, SPF limita la valutazione a un massimo di 10 ricerche DNS tra `include`, `a`, `mx`, `ptr`, `exists` e `redirect`. Se per risolvere il tuo record serve un'undicesima ricerca, i server riceventi restituiscono un permerror. Anche l'inoltro rompe SPF: quando un destinatario inoltra il tuo messaggio, l'IP del server che inoltra non corrisponde al tuo record, e SPF fallisce.

## DKIM: una firma che dimostra che il messaggio non è stato modificato

DKIM, definito nella RFC 6376, lavora sul messaggio e non sul server. Quando il tuo server prepara l'invio di un messaggio, crea un hash crittografico di alcune intestazioni e del corpo. Firma quell'hash con una chiave privata e scrive il risultato in un'intestazione `DKIM-Signature`. L'intestazione contiene due valori principali: il dominio di firma nel tag `d=` e la stringa del selettore nel tag `s=`. DKIM dice solo se la firma è valida. Decidere cosa fare in caso di errore è compito di DMARC.

Quando il messaggio arriva, il ricevente legge il selettore e il dominio dall'intestazione, cerca nel DNS la chiave pubblica su `s._domainkey.d` e controlla la firma. DKIM firma intestazioni e contenuto, ma non cifra l'email. Il corpo viaggia come testo leggibile, ma la firma dimostra che nessuno ha modificato oggetto, dati del mittente o testo durante il percorso.

L'inoltro normale delle email lascia intatti intestazioni e corpo, quindi una firma DKIM valida di solito sopravvive all'inoltro. Per la posta inoltrata DKIM è quindi più affidabile di SPF. Le mailing list che aggiungono un piè di pagina o un'etichetta nell'oggetto possono comunque rompere la firma. Gmail richiede chiavi di almeno 1024 bit e consiglia 2048 bit.

Un record DNS con la chiave pubblica DKIM ha questa forma:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

Il tag `v=DKIM1` indica la versione del protocollo, `k=rsa` identifica l'algoritmo della chiave e `p=` contiene la chiave pubblica codificata in base64. Se gestisci un tuo server di posta, puoi creare una coppia di chiavi con il nostro [generatore DKIM](/dkim-generator) (in inglese).

Un errore frequente nasce quando i mittenti si affidano alle firme predefinite della piattaforma. Molte piattaforme email firmano la posta in uscita con un proprio dominio condiviso (`d=shared-esp.example`). La firma passa, ma il dominio di firma non corrisponde al tuo dominio From visibile, e l'allineamento DMARC fallisce. Devi configurare un DKIM personalizzato nelle impostazioni della piattaforma, così la firma usa il tuo dominio nel tag `d=`.

## DMARC: il controllo che collega entrambi all'indirizzo From

Domain-based Message Authentication, Reporting and Conformance collega i controlli sulla busta e le firme crittografiche all'indirizzo From visibile che le persone leggono. Allineamento significa che il dominio che ha superato SPF o DKIM è lo stesso dominio della riga From. DMARC passa quando SPF o DKIM supera l'autenticazione E si allinea con il dominio dell'intestazione From. Non serve che entrambi siano allineati nello stesso momento. Google però consiglia di allinearli entrambi e osserva che in futuro potrebbe richiederli tutti e due.

Immagina che la tua azienda invii una newsletter settimanale. Il messaggio mostra `From: news@example.com`. Per gestire i bounce, il tuo servizio email usa un proprio indirizzo di busta e imposta il Return-Path su `bounce-123@bounces.esp-mail.example`. Il servizio firma anche il messaggio con un DKIM personalizzato che usa `d=example.com`.

Quando il server ricevente elabora questo messaggio:
1. SPF controlla il dominio della busta `bounces.esp-mail.example` e passa, ma `esp-mail.example` non corrisponde a `example.com`, quindi SPF non supera l'allineamento DMARC.
2. DKIM controlla la firma per `example.com`, verifica l'hash crittografico e corrisponde al dominio From `example.com`, quindi DKIM passa e ottiene l'allineamento DMARC.
3. Siccome DKIM è passato ed è allineato, il messaggio supera DMARC.

DMARC offre due modalità di allineamento, sia per SPF sia per DKIM. L'allineamento rilassato è l'impostazione predefinita e permette ai sottodomini del tuo dominio organizzativo di allinearsi con il dominio principale. Per esempio, la posta inviata da `news.example.com` si allinea con un dominio SPF o DKIM `example.com`. L'allineamento rigoroso, configurato con `aspf=s` o `adkim=s`, richiede una corrispondenza esatta del dominio e non ammette differenze di sottodominio.

Il tuo record DMARC pubblica una di tre possibili policy:
- `p=none`: mette DMARC in modalità di monitoraggio. I riceventi consegnano la posta normalmente e raccolgono i report di autenticazione.
- `p=quarantine`: chiede ai riceventi di mettere nella cartella spam o posta indesiderata la posta che non supera DMARC.
- `p=reject`: chiede ai riceventi di rifiutare la posta che non supera DMARC.

Il tag rua dice ai riceventi dove inviare i report aggregati, di solito file XML giornalieri che mostrano quali indirizzi IP hanno inviato posta con il tuo dominio. Un record iniziale standard pubblicato su `_dmarc.example.com` ha questo aspetto:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

A maggio 2026 l'Internet Engineering Task Force ha pubblicato la RFC 9989 nello Standards Track, insieme alla RFC 9990 per i report aggregati e alla RFC 9991 per i report sugli errori. Questi nuovi standard rendono ufficialmente obsolete la RFC 7489 e la RFC 9091. I record esistenti che iniziano con `v=DMARC1` continuano a funzionare, ma la nuova specifica modifica diversi tag operativi. Il tag della percentuale (`pct`) e il tag del formato dei report (`rf`) sono stati ritirati e non fanno più parte dello standard. Il tag dell'intervallo dei report (`ri`) è classificato come storico. Chi prova una nuova policy ora usa il nuovo tag `t` per la modalità di test, e gli amministratori possono definire policy per i sottodomini inesistenti con il tag `np`. Se il tuo record DNS attuale contiene un tag di percentuale, prevedi di toglierlo. Puoi creare un record aggiornato o togliere i tag vecchi con il nostro [generatore DMARC](/dmarc-generator) (in inglese).

## Come un server ricevente controlla un messaggio

Quando un'email arriva a un gateway ricevente, il server esegue i controlli di autenticazione in un ordine preciso:

1. Il server accetta la connessione di rete, registra l'indirizzo IP del mittente e valuta il saluto HELO o EHLO.
2. Il server estrae il dominio dal Return-Path della busta e interroga il DNS per controllare le autorizzazioni SPF dell'IP di invio.
3. Il server trova l'intestazione `DKIM-Signature`, cerca nel DNS la chiave pubblica su `selector._domainkey.domain` e ricalcola gli hash crittografici di intestazioni e corpo.
4. Il server esamina l'intestazione From visibile e cerca nel DNS un record di policy DMARC su `_dmarc.domain`.
5. Il server valuta l'allineamento dei domini, cioè controlla se il dominio SPF autenticato o il dominio DKIM autenticato corrisponde al dominio From visibile.
6. Il server applica la policy DMARC pubblicata, none, quarantine o reject, in base al risultato dell'allineamento.
7. Se hai chiesto i report con rua, il server aggiunge il risultato al prossimo report aggregato che ti invia.

In Gmail puoi vedere tutti e tre i risultati con "Mostra originale" su qualsiasi messaggio.

## Dove SPF, DKIM e DMARC di solito si rompono

Pubblicare due record SPF è un errore frequente quando si aggiunge un nuovo servizio email. Un amministratore segue la documentazione di configurazione, aggiunge `v=spf1 include:sendgrid.net ~all` e pubblica un secondo record TXT accanto a un record Google già esistente. La RFC 7208 vieta più record SPF su un singolo dominio. Quando i server riceventi trovano due record, si fermano con un permerror e SPF fallisce. Si risolve unendo tutti i fornitori autorizzati in un'unica stringa: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Superare il limite di 10 ricerche causa un altro blocco silenzioso delle consegne. Ogni tag `include`, `a`, `mx`, `ptr`, `exists` o `redirect` conta per questo limite, e contano anche gli include annidati nei record dei fornitori. Se il tuo record richiede un'undicesima ricerca, i server riceventi restituiscono in automatico un permerror. Si risolve togliendo i record dei vecchi fornitori, usando strumenti che contano le ricerche, oppure sostituendo gli include con intervalli `ip4` espliciti. Fallo però solo per IP di invio che controlli e che non cambiano.

Collegare un nuovo servizio di invio senza aggiungerlo al DNS espone la tua posta in uscita ai filtri antispam. I team commerciali o di assistenza spesso collegano strumenti per gli appuntamenti, piattaforme di helpdesk o sistemi di fatturazione senza avvisare chi gestisce il DNS. Questi nuovi server non sono nel tuo record SPF e non firmano con le tue chiavi DKIM. I loro messaggi quindi non superano l'autenticazione e finiscono nello spam. La soluzione è una regola semplice: chi collega un nuovo strumento lo comunica a chi gestisce il DNS. In più, controlla nei report DMARC i mittenti che non riconosci.

Affidarsi al DKIM firmato dalla piattaforma rompe l'allineamento DMARC anche se la firma è valida dal punto di vista crittografico. Quando un servizio email firma i messaggi con `d=platform-mail.example` mentre la tua riga From mostra `From: support@yourcompany.example`, DKIM supera i controlli tecnici ma non l'allineamento con il tuo dominio. Per risolvere, apri le impostazioni della piattaforma, genera chiavi DKIM personalizzate per il tuo dominio e pubblica i record del selettore nella console DNS.

L'inoltro dei messaggi rompe SPF ogni volta che un destinatario inoltra la posta di lavoro a una casella personale. Il server intermedio passa il messaggio con il proprio indirizzo IP, che non corrisponde al tuo record SPF. Non puoi controllare le configurazioni di inoltro esterne. Se però i tuoi messaggi hanno firme DKIM valide, sopravvivono all'inoltro e soddisfano i requisiti DMARC anche nei passaggi successivi.

Inviare campagne di massa da un'altra piattaforma con un indirizzo From gratuito `@gmail.com` fallisce DMARC per definizione. Le linee guida di Google per i mittenti avvertono in modo esplicito che usare indirizzi Gmail da server esterni danneggia la consegna. Le piattaforme di terzi non possono produrre firme crittografiche valide né superare SPF per il dominio di Google, quindi i provider di posta rifiutano quella posta o la mettono in quarantena. I mittenti dovrebbero sempre fare outreach da un dominio personalizzato di loro proprietà.

Lasciare DMARC su `p=none` per sempre lascia il tuo dominio esposto alla falsificazione. Una policy di monitoraggio rispetta il minimo richiesto da Gmail e Microsoft, ma `p=none` dice ai server riceventi di non fare nulla per proteggerti quando compare posta falsificata. Con quella impostazione, DMARC non ferma chi falsifica esattamente il tuo dominio. Dovresti controllare i report aggregati giornalieri per qualche settimana e verificare che tutte le fonti di invio legittime siano allineate. Poi porta la policy a `p=quarantine` e infine a `p=reject`.

## Checklist di configurazione di SPF, DKIM e DMARC

Segui questi passi in ordine:

1. Elenca ogni servizio interno, piattaforma di marketing, helpdesk e strumento transazionale che invia email con il tuo dominio.
2. Pubblica un unico [record SPF](/glossary/spf) che copra i server di invio autorizzati, con meno di 10 ricerche in totale. La [verifica record SPF](/spf-checker) (in inglese) le conta per te.
3. Attiva la firma DKIM personalizzata con il tuo dominio su ogni piattaforma di invio e pubblica nel DNS i record del selettore corrispondenti.
4. Assicurati che i tuoi indirizzi IP di invio abbiano un DNS diretto valido e un [record PTR](/glossary/ptr-record) corrispondente nel DNS inverso.
5. Pubblica un primo [record DMARC](/blog/what-is-a-dmarc-record) su `_dmarc` con `p=none` e una casella `rua` attiva, per iniziare a ricevere i report aggregati XML.
6. Registra il tuo dominio di invio in [Google Postmaster Tools](/glossary/postmaster-tools) per monitorare la reputazione del dominio, gli errori di consegna e il tasso di segnalazioni di spam.
7. Controlla i report DMARC aggregati per qualche settimana, per verificare che ogni flusso di invio legittimo ottenga l'allineamento SPF o DKIM.
8. Porta la policy DMARC da `p=none` a `p=quarantine`, valuta la stabilità delle consegne e poi passa a `p=reject`.
9. Invia un messaggio di prova a un account Gmail personale e apri "Mostra originale" per confermare che SPF, DKIM e DMARC risultino tutti PASS.

## Domande frequenti

**DMARC ha bisogno sia di SPF sia di DKIM?**
No. DMARC richiede che SPF oppure DKIM superi l'autenticazione e sia allineato con il dominio dell'intestazione From visibile. Avere entrambi i protocolli attivi sul dominio ti protegge meglio quando l'inoltro rompe SPF, e Google consiglia di configurarli entrambi per gli invii ad alto volume. Un messaggio però supera DMARC anche se un solo meccanismo ottiene un allineamento valido.

**Che differenza c'è tra SPF e DMARC?**
SPF autorizza specifici indirizzi IP di server di posta a inviare posta per l'indirizzo tecnico del mittente della busta, quello nell'intestazione Return-Path. DMARC esamina l'indirizzo From visibile che le persone vedono nel loro programma di posta. Verifica che SPF o DKIM sia allineato con quel dominio visibile, e dice ai server riceventi se accettare, mettere in quarantena o rifiutare i messaggi che non superano il controllo.

**Mi serve DMARC se invio meno di 5.000 email al giorno?**
Gmail richiede DMARC solo ai mittenti di massa, quindi con volumi bassi non vieni bloccato se non lo hai. Ti serve comunque SPF o DKIM. Vale la pena pubblicare lo stesso un record p=none con rua, perché i report mostrano quali servizi inviano a nome del tuo dominio, compresi quelli che hai dimenticato e chiunque ti stia falsificando.

**Posso avere due record SPF?**
No. La RFC 7208 vieta di pubblicare più di un record SPF su un dominio. Se i server riceventi trovano più record SPF nel DNS, interrompono subito la valutazione con un permerror e considerano SPF fallito. Devi unire tutti gli indirizzi IP autorizzati e gli include dei servizi esterni in un unico record che inizia con `v=spf1`.

**Qual è il modo più semplice per spiegare DMARC?**
SPF controlla che il server che invia il messaggio sia autorizzato a inviare per il tuo dominio. DKIM controlla una firma che mostra che il messaggio non è stato modificato. DMARC è il controllo finale: conferma che uno dei due appartiene allo stesso dominio dell'indirizzo From. Se nessuno dei due corrisponde, DMARC dice al server ricevente se consegnare comunque il messaggio, metterlo nello spam o rifiutarlo.

Questi record dimostrano chi sei, ma non sistemano gli indirizzi a cui invii, e la posta verso indirizzi morti rimbalza comunque. La nostra guida su [come ridurre il tasso di rimbalzo delle email](/blog/how-to-reduce-email-bounce-rate) copre questo aspetto, e puoi passare la tua lista da [Giggal.ai](/email-list-cleaning) (in inglese) prima del prossimo invio.
