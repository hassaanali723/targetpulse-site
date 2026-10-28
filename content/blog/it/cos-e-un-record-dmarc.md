---
title: "Cos'è un record DMARC?"
seoTitle: "Cos'è un record DMARC? Tag, esempi e report (2026)"
description: "Un record DMARC è un record TXT su _dmarc.tuodominio che dice ai server cosa fare con la posta non autenticata. Tutti i tag dello standard 2026, con esempi."
slug: cos-e-un-record-dmarc
date: 2026-10-19
updated: 2026-10-19
keyword: record dmarc
image: /blog/covers/it/cos-e-un-record-dmarc.webp
imageAlt: Guida su cos'è un record DMARC con la spiegazione dei tag e una panoramica delle policy
cta: Verifica la tua lista con Giggal.ai
---

Un record DMARC è una breve riga di testo che aggiungi alle impostazioni DNS del tuo dominio. Dice agli altri server di posta cosa fare con un'email che dichiara di venire dal tuo dominio ma non supera i controlli di sicurezza. Dice anche dove inviarti i report sulle email che ricevono a tuo nome.

**In una frase:** DMARC è una regola pubblica che dice "se un'email dichiara di venire dal mio dominio ma non viene davvero da me, mettila nello spam o bloccala, e mandami un report".

## DMARC spiegato con un esempio

### Il problema

Chiunque può inviare un'email e mettere il tuo indirizzo nella riga From. Immagina che il tuo dominio sia `example.com`. Un truffatore invia questa email a un tuo cliente:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Il tuo cliente vede `example.com` e si fida. Ma tu non hai mai inviato questa email.

### I due controlli che esistono già

I provider di posta come Gmail e Outlook possono già eseguire due controlli su ogni email:

- **SPF:** questa email arriva da un server che `example.com` autorizza a inviare la sua posta?
- **DKIM:** questa email porta la firma digitale di `example.com`?

Da soli, questi controlli hanno un punto debole. Il truffatore può superarli per il proprio dominio, mentre la riga From mostra ancora il tuo. Niente collega il controllo all'indirizzo che vede il tuo cliente.

### Cosa aggiunge DMARC

DMARC aggiunge una regola. SPF o DKIM deve passare per lo stesso dominio mostrato nella riga From. Questa corrispondenza si chiama **allineamento**. Se nessuno dei due controlli passa per quel dominio, l'email non supera DMARC.

DMARC ti permette anche di decidere cosa succede a un'email che non supera il controllo.

### Un record DMARC, parte per parte

Aggiungi questa riga alle impostazioni DNS di `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Ecco cosa dice ogni parte:

- `v=DMARC1`: "Questa è la mia regola DMARC."
- `p=reject`: "Se un'email dice di venire da example.com ma non supera il controllo, bloccala."
- `rua=mailto:reports@example.com`: "Mandami un report giornaliero su tutti quelli che inviano email a mio nome."

### Cosa succede all'email falsa

1. L'email del truffatore da `billing@example.com` arriva a Gmail.
2. Gmail esegue SPF e DKIM. Nessuno dei due controlli passa per `example.com`.
3. Gmail legge il tuo record DMARC. Dice `p=reject`.
4. Gmail blocca l'email. Il tuo cliente non la vede mai.

Le tue email vere superano gli stessi controlli, quindi vengono consegnate normalmente.

### Le tre scelte per p

| Impostazione | Cosa succede a un'email che non supera DMARC | Quando usarla |
| --- | --- | --- |
| p=none | Niente. Viene consegnata normalmente, e tu ricevi i report. | All'inizio, mentre trovi tutti i tuoi mittenti reali |
| p=quarantine | Finisce nella cartella spam. | Quando tutti i tuoi mittenti reali passano |
| p=reject | Viene bloccata del tutto. | Quando sei sicuro che nessuna email vera fallirà |

### Come lo configura la maggior parte dei domini

1. Parti con `p=none` e leggi i report giornalieri.
2. Trova ogni servizio reale che invia email per te, come il tuo strumento di invio e il tuo helpdesk. Assicurati che ognuno passi.
3. Passa a `p=quarantine`, poi a `p=reject`. Da quel momento nessuno può falsificare il tuo dominio presso i riceventi che seguono la tua policy.

Per questo la maggior parte dei domini parte con un record come questo, che si limita a osservare:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

Il resto di questa guida spiega più nel dettaglio ogni parte di un record DMARC, e le opzioni aggiuntive che puoi inserire in seguito.

## SPF, DKIM e l'indirizzo From più nel dettaglio

DMARC si appoggia su SPF e DKIM. La nostra guida su [SPF e DKIM](/blog/spf-dkim-dmarc-explained) li spiega per intero. Qui sotto trovi la versione breve.

**SPF** è una lista dei server autorizzati a inviare email per il tuo dominio. Un server ricevente controlla se l'email arriva da un server in quella lista.

**DKIM** è una firma digitale aggiunta a ogni email. Il server ricevente controlla la firma con una chiave pubblicata nel tuo DNS. Se la firma è valida, l'email non è stata modificata durante il percorso ed è stata firmata dal tuo dominio.

**L'indirizzo From** è l'indirizzo del mittente che il destinatario vede nella sua casella, per esempio `hello@example.com`. DMARC controlla che SPF o DKIM sia passato per questo stesso dominio.

## Che aspetto ha un record DMARC

### Dove va nel DNS

Il DNS è l'elenco pubblico di impostazioni del tuo dominio. Lo modifichi presso il tuo gestore DNS, che di solito è l'azienda da cui hai comprato il dominio o il tuo provider di hosting. Un record DMARC è un record TXT, cioè una voce DNS che contiene testo semplice.

Lo aggiungi con il nome host `_dmarc`. La maggior parte dei pannelli DNS aggiunge in automatico il tuo dominio alla fine, quindi `_dmarc` diventa `_dmarc.example.com`.

Attenzione a un errore comune. Alcuni pannelli si aspettano solo `_dmarc`. Se lì scrivi il nome completo `_dmarc.example.com`, il record finisce su `_dmarc.example.com.example.com`. I server riceventi non lo troveranno in quella posizione.

### Le regole per scriverlo

- **Deve iniziare con `v=DMARC1`.** Deve essere la prima parte del record. `DMARC1` va scritto in maiuscolo. Se scrivi `v=dmarc1`, metti un'altra parte prima o lo scrivi male, i server riceventi ignorano tutto il record. Il tuo dominio viene allora trattato come se non avesse nessuna policy DMARC.
- **Separa le parti con il punto e virgola.** Gli spazi intorno al punto e virgola sono ammessi.
- **Se manca la policy.** Immagina che la parte `p` manchi o sia sbagliata, ma che il record abbia un indirizzo valido per i report in `rua`. I riceventi trattano allora la policy come `p=none`. Se mancano o sono sbagliati sia `p` sia `rua`, i riceventi saltano del tutto DMARC per il tuo dominio.
- **Pubblica un solo record DMARC.** Se un server ricevente trova due o più record TXT che iniziano con `v=DMARC1`, li scarta tutti. Questa regola viene dalla [RFC 9989](https://www.rfc-editor.org/info/rfc9989), lo standard DMARC attuale. Due record non ti danno due policy. Lasciano il tuo dominio senza nessuna protezione.

### Come controllare il tuo record

Puoi cercare il tuo record con un comando nel terminale del computer:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Usa `dig` su Linux e macOS. Stampa il tuo record su una riga, tra virgolette. Usa `nslookup` su Windows. Mostra il record restituito dal tuo server DNS.

Se il comando non restituisce nulla, è vera una di due cose. O il record non si è ancora propagato nel DNS, oppure è stato aggiunto con il nome host sbagliato.

## Tutti i tag DMARC, e quali ti servono

Ogni parte di un record DMARC, come `p=none`, si chiama tag. Lo standard attuale, di maggio 2026, ha undici tag.

| Tag | Cosa fa, in parole semplici | Valori possibili | Se lo ometti | Ti serve? |
| --- | --- | --- | --- | --- |
| v | Dice "questo è un record DMARC". Deve venire per primo. | DMARC1 | Obbligatorio | Sì |
| p | La tua policy: cosa fare con la posta che non supera il controllo. Copre il tuo dominio e i suoi sottodomini. | none, quarantine, reject | Trattato come none, se rua è valido | Sì |
| rua | Dove inviare i report riassuntivi giornalieri | Uno o più indirizzi mailto:, separati da virgole | Non ricevi report | Sì |
| sp | Una policy separata per i sottodomini che esistono, come news.example.com | none, quarantine, reject | Uguale a p | Solo se i sottodomini hanno bisogno di regole diverse |
| np | Una policy per i sottodomini che non esistono nel DNS | none, quarantine, reject | Uguale a sp, oppure a p se sp manca | Solo per bloccare sottodomini inventati |
| adkim | Quanto deve essere esatta la corrispondenza del dominio DKIM. r = rilassata, s = rigorosa | r, s | r | Raramente. Rilassata è la scelta normale |
| aspf | Quanto deve essere esatta la corrispondenza del dominio SPF. r = rilassata, s = rigorosa | r, s | r | Raramente. Rilassata è la scelta normale |
| t | Modalità di test. Fa applicare ai riceventi la tua policy un livello più morbido | y, n | n | Solo mentre passi a una policy più rigida |
| ruf | Dove inviare un report su ogni singola email non superata | Uno o più indirizzi mailto:, separati da virgole | Non ricevi report | Raramente, per i limiti legati alla privacy |
| fo | Opzioni per i report sulle singole email | 0, 1, d, s | 0 | Solo se usi ruf |
| psd | Segnala un dominio di suffisso pubblico | y, n, u | u | Solo per suffissi pubblici o grandi organizzazioni che assegnano parti del loro DNS |

Rilassata e rigorosa funzionano così. Con la modalità rilassata, un sottodominio conta come corrispondenza, quindi `mail.example.com` corrisponde a `example.com`. Con la modalità rigorosa, i due domini devono essere esattamente uguali.

Lo standard del 2026 ha ritirato tre tag più vecchi. Sono il tag della percentuale (`pct`), il tag del formato dei report (`rf`) e il tag dell'intervallo dei report (`ri`). Un `pct=100` rimasto nel record non fa danni. Un `pct` sotto 100 serviva ad applicare una policy solo a una parte della tua posta durante un'introduzione graduale. Ora questo compito lo svolge il nuovo tag `t`.

**Cosa serve alla maggior parte dei domini:** solo `v`, `p` e `rua`.

- Aggiungi `sp` o `np` se i tuoi sottodomini hanno bisogno di regole diverse.
- Lascia stare `psd`. Ti serve solo se gestisci una grande organizzazione che assegna parti del suo DNS (`psd=n`), o un suffisso pubblico come `co.uk` (`psd=y`).
- La corrispondenza rilassata (`adkim=r` e `aspf=r`) è quella predefinita e funziona per quasi tutti i domini. Ti servono i tag di allineamento solo se regole di conformità rigide vietano di firmare con un sottodominio.

Puoi creare un record con questi tag, o sistemarne uno vecchio, con il nostro [generatore DMARC](/dmarc-generator).

## Cosa fanno davvero p=none, quarantine e reject

Il tag `p` è la parte più importante del record. Dice ai server riceventi cosa fare con un'email che non supera DMARC. Ci sono tre scelte. Ognuna è una tappa verso la protezione completa.

**p=none: solo osservazione.** I riceventi non fanno niente di speciale con la posta che non supera il controllo. Viene consegnata normalmente, e si applicano solo i soliti filtri antispam. Insieme ai report in `rua`, la RFC 9989 chiama questa configurazione Monitoring Mode (modalità di monitoraggio). Ti mostra ogni servizio che invia email a nome del tuo dominio, senza nessun rischio per le tue consegne.

**p=quarantine: mettila nello spam.** I riceventi trattano come sospetta la posta che non supera il controllo. Presso la maggior parte dei provider di posta, finisce nella cartella spam del destinatario. Questo protegge i tuoi destinatari dalle email false. La posta vera inviata da uno strumento configurato male non va persa, perché si trova ancora nella cartella spam.

**p=reject: bloccala.** I riceventi rifiutano la posta che non supera il controllo. La maggior parte lo fa durante la consegna, con un codice di errore permanente che inizia con 5. L'email non arriva mai in una casella. Il server di invio riceve invece un messaggio di rimbalzo.

### I riceventi non seguono sempre la tua policy

La tua policy è una richiesta, non un ordine. Lo standard dice che i riceventi non dovrebbero rifiutare un'email solo per un `p=reject`. Se non sanno nient'altro sull'email, dovrebbero trattarla invece come quarantine. I provider di posta usano anche i propri dati sulla reputazione del mittente e i propri filtri antispam accanto alla tua policy.

### Perché reject ha bisogno di DKIM, non solo di SPF

L'inoltro rompe SPF. Immagina che qualcuno inoltri la posta di lavoro a un account personale. Il server che inoltra invia l'email dal proprio indirizzo IP. Quell'indirizzo non è nel tuo record SPF, quindi il controllo SPF fallisce.

DKIM sopravvive all'inoltro. La firma viaggia dentro l'email, quindi resta valida e corrisponde ancora al tuo dominio. Per questo un dominio con `p=reject` deve usare DKIM e non dipendere solo da SPF.

### Modalità di test con t=y

La RFC 9989 aggiunge una modalità di test. Imposta `t=y` e i riceventi applicano la tua policy un livello più morbido di quella pubblicata:

- `reject` viene trattato come `quarantine`.
- `quarantine` viene trattato come `none`.

La modalità di test non cambia i tuoi report. Non ha nessun effetto anche quando la tua policy è `p=none`. Ti permette di vedere come si comporta una policy più rigida con la posta reale prima di renderla definitiva.

## Sottodomini: sp e np

Un sottodominio è un nome aggiuntivo davanti al tuo dominio, come `marketing.example.com` o `support.example.com`. Molte aziende inviano email dai sottodomini. I tag `sp` e `np` fissano le regole per i sottodomini che non hanno un proprio record DMARC.

### Come un ricevente trova il record giusto

1. Il ricevente cerca prima un record DMARC per il dominio esatto della riga From. Se invii da `news.example.com` ed esiste `_dmarc.news.example.com`, usa quel record.
2. Se lì non c'è nessun record, cerca il tuo record principale su `_dmarc.example.com`. Lo trova risalendo il nome di dominio, una parte alla volta, verso la fine del nome. Per farlo non usa la Public Suffix List.
3. Quando ha il tuo record principale, controlla se il sottodominio di invio esiste nel DNS.

Poi sceglie la regola:

- Se il sottodominio esiste, applica `sp`. Se `sp` non c'è, applica `p`.
- Se il sottodominio non esiste (il DNS restituisce NXDOMAIN, cioè "nome inesistente"), applica `np`. Se `np` non c'è, usa `sp`. Se non c'è nemmeno `sp`, usa `p`.

### Un esempio

Immagina che questo record sia pubblicato su `_dmarc.example.com`:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Imposta tre regole diverse:

- **La posta da `example.com` stesso** usa `p=reject`. Se non supera DMARC, ai riceventi viene chiesto di bloccarla.
- **La posta da `news.example.com`**, un sottodominio che esiste nel DNS, usa `sp=quarantine`. Immagina che una newsletter non superi il controllo perché un fornitore ha configurato male qualcosa. Finisce nello spam invece di rimbalzare.
- **La posta da un nome inventato come `invoices-2026.example.com`**, che non esiste nel DNS, usa `np=reject`. Un sottodominio inventato da qualcuno riceve la regola rigida, anche se i tuoi sottodomini reali ricevono quarantine.

## Cos'è un report DMARC?

DMARC ha due tipi di report:

- **Report aggregati**, impostati con `rua`. Sono riepiloghi giornalieri.
- **Report sugli errori**, impostati con `ruf`. Descrivono singole email che non hanno superato il controllo.

### Report aggregati (rua)

Un report aggregato è un riepilogo inviato da un provider di posta, come Gmail. Elenca tutta la posta che quel provider ha ricevuto e che dichiarava di venire dal tuo dominio. È un file XML, un file di testo strutturato pensato per essere letto da un software. I provider lo inviano come allegato email, come semplice file `.xml` o come file compresso, per esempio `.xml.gz`.

Ogni report di solito copre un giorno UTC. Lo standard dice che i riceventi dovrebbero inviare i report aggregati almeno ogni 24 ore. Non sono obbligati a inviarne.

Ecco un esempio di report abbreviato:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Ecco cosa dice, blocco per blocco:

- **`<report_metadata>`**: il report arriva da `mail.receiver.example`. Copre un giorno UTC completo.
- **`<policy_published>`**: la policy che il ricevente ha trovato per `example.com`. Qui è `p=none` e `sp=none`.
- **`<row>`**: sono arrivate 412 email dall'indirizzo IP `192.0.2.10`.
- **SPF**: in `<auth_results>`, SPF è passato, ma per il dominio `bounces.esp-mail.example`. Quel dominio non è il tuo dominio From, `example.com`. Quindi in `<policy_evaluated>` SPF risulta `fail`, perché non corrispondeva.
- **DKIM**: in `<auth_results>`, DKIM è passato per `example.com`. Corrisponde al dominio From mostrato in `<identifiers>`. Quindi DKIM è passato ed è allineato, e queste 412 email hanno superato DMARC.

Il punto chiave è semplice. `<auth_results>` mostra i controlli SPF e DKIM grezzi. `<policy_evaluated>` mostra se ogni controllo corrispondeva anche al tuo dominio From. DMARC usa il secondo.

### Report sugli errori (ruf)

I report sugli errori, spesso chiamati report forensi, descrivono ciascuno una singola email non superata. Possono includere le intestazioni dell'email e dettagli sul destinatario. Per questo rischio per la privacy, molti riceventi tolgono quasi tutti i dettagli, oppure non inviano affatto report sugli errori. Il tag `fo` imposta le opzioni per questi report. Conta solo se usi `ruf`.

### Leggere i report

Lo standard consiglia di usare un software per leggere i report aggregati, non di leggerli a mano. Se invii a molti provider di posta, ognuno ti manda il suo report, ogni giorno.

## Perché ricevo email DMARC?

Ricevi queste email giornaliere perché il tag `rua` del tuo record DMARC contiene il tuo indirizzo. Ogni provider di posta che riceve email a tuo nome invia un riepilogo giornaliero a ogni indirizzo indicato in quel tag.

L'oggetto segue un formato fisso, stabilito dalla [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

Il Submitter è il provider che ha controllato l'email, come Google o Microsoft. Il report XML è in allegato, spesso compresso.

Non inviare questi report a una casella personale. Indica in `rua` una casella separata o un servizio che elabora i report. Se non ricordi di averlo configurato, controlla il tuo record DMARC. Potrebbe averlo aggiunto un amministratore precedente, o la guida di configurazione di una piattaforma email.

### Inviare i report a un altro dominio

Immagina che il tuo dominio sia `example.com` e che tu voglia ricevere i report a un indirizzo su `reports.example.net`. Il dominio che riceve deve accettare di riceverli. Lo fa pubblicando un record TXT nel suo DNS. Senza quel record, i riceventi ignorano l'indirizzo e non inviano report.

Il record va su questo nome host:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

I servizi di gestione dei report spesso pubblicano invece un record jolly (`*._report._dmarc.reports.example.net`). Quel solo record copre tutti i domini dei clienti, quindi non serve una configurazione per ciascuno.

## Passare da p=none a reject senza perdere posta

Non saltare subito a reject. Sali un passo alla volta:

1. **Inizia a osservare.** Pubblica un record DMARC su `_dmarc` con `p=none` e un indirizzo `rua` funzionante. Inizi a ricevere i report, e nelle tue consegne non cambia nulla.
2. **Sistema i tuoi mittenti.** Leggi i report. Trova ogni servizio reale che invia email per il tuo dominio e non supera i controlli, e sistema la sua configurazione.
3. **Passa a quarantine.** Passa a `p=quarantine` quando tutti i tuoi mittenti reali passano in modo costante. Controlla le cartelle spam per assicurarti che non ci finisca posta vera.
4. **Passa a reject.** Passa a `p=reject`. Ora le email false a tuo nome vengono bloccate prima di raggiungere chiunque.

Può richiedere tempo. Lo standard dice che far passare tutti i mittenti può richiedere molti mesi, a seconda di quanto spesso invii. Strumenti di fatturazione, helpdesk e piattaforme di marketing sono facili da dimenticare, quindi continua a controllare i report.

**Se i tuoi utenti scrivono a mailing list**, vai più piano. Lo standard suggerisce almeno un mese con `p=none`, poi lo stesso periodo con quarantine. Confronta i risultati prima di passare a reject. Le mailing list spesso cambiano l'oggetto, aggiungono piè di pagina o inviano di nuovo i messaggi. Queste modifiche rompono SPF e a volte anche DKIM. Confrontare diverse settimane di report fa emergere questi problemi prima che reject inizi a bloccare la posta.

**Usa la modalità di test per l'ultimo passo.** Con `t=y` puoi pubblicare `p=reject` mentre i riceventi applicano ancora quarantine. Vedi come reagiscono i riceventi a reject, ma la posta che non supera il controllo finisce ancora nello spam invece di rimbalzare.

**Una nota su SPF rigoroso.** Se il tuo record SPF finisce con `-all`, alcuni riceventi rifiutano la posta non superata già al controllo SPF, prima che venga eseguito DMARC. Quelle email non arrivano mai al controllo DMARC. Non compaiono nemmeno nei tuoi report giornalieri.

## Errori comuni nel record DMARC

### Due record DMARC

Succede spesso quando qualcuno aggiunge un secondo record TXT invece di modificare il primo. I riceventi li vedono entrambi e li scartano entrambi, come dice la RFC 9989. Il tuo dominio si comporta allora come se non avesse nessun record DMARC.

**Soluzione:** controlla il tuo DNS e riunisci tutti i tag in un solo record TXT.

### Il record è sul dominio principale, non su _dmarc

Se inserisci `example.com` come nome host, il record viene creato sul dominio principale, non su `_dmarc.example.com`. I server di posta cercano DMARC solo sul nome `_dmarc`, quindi non lo trovano mai.

**Soluzione:** imposta il nome host su `_dmarc`.

### v=DMARC1 non è all'inizio, o ha maiuscole sbagliate

Scrivere `v=dmarc1`, o iniziare con `p=none; v=DMARC1`, rompe il record. I riceventi lo ignorano.

**Soluzione:** metti `v=DMARC1` all'inizio assoluto del record, seguito da un punto e virgola.

### Indirizzi per i report senza mailto:

Scrivere `rua=dmarc@example.com` invece di `rua=mailto:dmarc@example.com` rompe il formato dell'indirizzo. I riceventi non possono usare un indirizzo senza prefisso, quindi non arriva nessun report.

**Soluzione:** inizia ogni indirizzo in `rua` e `ruf` con `mailto:`.

### Report inviati a un altro dominio senza il suo permesso

Se invii i report al dominio di un fornitore, e quel dominio non ha pubblicato il record di autorizzazione, non ricevi report.

**Soluzione:** assicurati che ogni indirizzo esterno per i report abbia un record `_report._dmarc` corrispondente, come spiegato sopra.

### Reject con il solo SPF

L'inoltro cambia l'indirizzo IP che invia l'email, quindi la posta inoltrata non supera SPF. Senza DKIM, la posta vera inoltrata non supera DMARC e rimbalza con una policy reject.

**Soluzione:** configura la firma DKIM su ogni servizio che invia la tua posta prima di andare oltre `p=none`.

### Tag ritirati presi da vecchie guide

Molte guide più vecchie aggiungevano un tag di percentuale, con valori come 100, o 20 per un'introduzione parziale. Un `pct=100` rimasto nel record non fa danni, ma le introduzioni a percentuale non fanno più parte dello standard.

**Soluzione:** togli i vecchi tag di percentuale. Usa `t=y` se ti serve una policy più morbida mentre fai le modifiche.

## Domande frequenti

**Mi serve davvero un record DMARC?**
Sì, se invii email ad account Gmail o Outlook personali. Google e Microsoft richiedono entrambi ai mittenti di 5.000 o più email al giorno di pubblicare un record DMARC, con il dominio From allineato. Anche i mittenti più piccoli dovrebbero averne uno. Un record `p=none` con `rua` non costa nulla, e i report ti mostrano chi invia email a tuo nome.

**Come controllo il mio record DMARC?**
Esegui `dig TXT _dmarc.yourdomain.com +short` nel terminale, oppure `nslookup -type=TXT _dmarc.yourdomain.com` su Windows. Il risultato dovrebbe essere il tuo record, che inizia con `v=DMARC1`. Puoi anche inviare un'email di prova a un account Gmail, aprirla e scegliere "Mostra originale". Ti mostra se DMARC è passato.

**Cosa significa DMARC fail?**
Significa che l'email non ha superato nessuno dei due controlli. Né SPF né DKIM sono passati per un dominio che corrisponde al dominio From visibile. I riceventi seguono allora la tua policy. Alcuni restituiscono un rifiuto chiaro, come `550 5.7.1 Email rejected per DMARC policy for example.com`. Puoi trovare la causa [leggendo il messaggio di rimbalzo](/blog/550-5-7-1-error). Gmail usa il codice di errore `4.7.31` quando il record DMARC manca, e `4.7.32` quando il dominio From non corrisponde.

**Posso avere più di un record DMARC?**
No. Un dominio può pubblicare un solo record DMARC. La RFC 9989 dice che se un server ricevente ne trova più di uno, deve scartarli tutti. Il tuo dominio resta allora senza nessuna policy DMARC. Modifica il record esistente invece di aggiungerne un secondo.

**DMARC blocca i domini simili al mio?**
No. DMARC protegge solo il dominio esatto presente nel tuo DNS. Non può impedire a qualcuno di registrare un dominio dall'aspetto simile, per esempio con due lettere scambiate o con una terminazione diversa come .net. Non può nemmeno bloccare un nome visualizzato falso. Per i domini simili servono altre misure, come tenere d'occhio le nuove registrazioni di domini che copiano il tuo nome.

Un record DMARC dimostra che la tua posta viene davvero da te. Non può aiutarti quando invii a indirizzi che non esistono più. Passa la tua lista da [Giggal.ai](/email-list-cleaning) (in inglese) prima del prossimo invio per togliere gli indirizzi non validi e tenere basso il tasso di rimbalzo.
