---
title: "Come verificare email in Claude e ChatGPT"
description: Collega uno strumento di verifica email a Claude, ChatGPT, Cursor o VS Code via MCP e controlla gli indirizzi nella conversazione invece di esportare un CSV.
slug: verificare-email-in-claude-e-chatgpt
date: 2026-09-23
keyword: verificare email in claude e chatgpt
image: /blog/covers/it/verificare-email-in-claude-e-chatgpt.webp
imageAlt: Come verificare email in Claude e ChatGPT
cta: Verifica email senza uscire dalla chat
---

La maggior parte della verifica email avviene ancora come nel 2015. Esporti un CSV, apri una scheda del browser, carichi il file, aspetti, scarichi un altro CSV e lo importi da qualche parte. Funziona. Sono anche quattro cambi di contesto per quella che in fondo è una sola domanda: questa casella è reale?

Se fai già una parte del tuo lavoro dentro Claude o ChatGPT, oggi c'è una strada più corta. Il Model Context Protocol permette a un assistente di chiamare direttamente uno strumento esterno, quindi la verifica può avvenire nella conversazione che stai già facendo.

## Cos'è davvero MCP

MCP è una specifica per il modo in cui un assistente AI parla con un servizio esterno. Anthropic l'ha pubblicata alla fine del 2024 e da allora è stata adottata ben oltre Claude. Il modello mentale utile è quello di uno standard di presa. Prima, ogni assistente aveva bisogno di un'integrazione su misura per ogni strumento. Ora un servizio pubblica un solo server MCP e qualsiasi client compatibile può usarlo.

Per uno strumento di verifica la superficie è piccola. Le cose che chiederesti sono poche: controlla questo indirizzo, controlla questa lista, mostrami il dettaglio completo, dimmi quanti crediti mi restano. Giggal.ai espone esattamente queste come tre strumenti, `verify_emails`, `get_verification_details` e `get_credit_balance`.

Ciò che lo rende diverso da un'API è che la chiamata non la scrivi tu. Dici quello che vuoi nella frase che avresti scritto comunque, e l'assistente capisce quale strumento invocare e con quali argomenti.

## A cosa serve, e a cosa no

Essere onesti sul confine evita delusioni.

Serve quando la verifica è un passo dentro qualcosa di più grande che stai già facendo nella conversazione. Hai incollato una lista di partecipanti a una conferenza e vuoi togliere quelli morti prima di scrivere l'outreach. Stai facendo debug di un flusso di iscrizione e vuoi sapere se un indirizzo specifico è reale. Stai scrivendo una sequenza e vuoi controllare i dodici nomi dell'account target prima di impegnarti. In tutti questi casi l'alternativa è uscire dalla conversazione, e la chiamata allo strumento è davvero più veloce.

Non serve per pulire una lista da 200.000 righe. Quello è un lavoro per il caricamento in blocco o per l'API, e farlo passare da un'interfaccia chat non aggiunge nulla se non un'attesa più lunga e molti token. Per quello usa la dashboard o l'endpoint REST, che esistono apposta. Per un controllo veloce di un indirizzo c'è anche la [verifica email](/email-checker) sul sito.

## Configurazione

Ti servono un account Giggal.ai e una chiave API. La chiave si trova nella scheda Developer API dell'app, non in Impostazioni, un dettaglio che confonde le persone più spesso di quanto dovrebbe.

Il server è remoto, quindi non c'è nulla da installare e nessun SDK. Si trova su `https://mcp.giggal.ai/mcp` e si autentica con la tua chiave API.

In Claude Desktop apri Impostazioni, poi Connettori, e aggiungi un connettore personalizzato che punta a quell'URL. Claude Code accetta lo stesso server tramite `claude mcp add`. Cursor e VS Code leggono entrambi i server MCP da un file di configurazione JSON nella cartella del progetto o dell'utente, e la struttura di quel file è documentata nella [pagina MCP](/mcp) (in inglese) insieme agli snippet esatti. ChatGPT supporta i server MCP remoti tramite le impostazioni dei connettori, sui piani in cui la funzione è attiva.

Una volta collegato, l'assistente elenca i tre strumenti e puoi iniziare a chiedere.

## Come si usa

Non servono formule speciali. Funzionano tutte queste:

- Verifica hello@stripe.com e dimmi se è una casella reale
- Ecco undici indirizzi da un'iscrizione a un webinar, controlla quali rimbalzeranno
- Quali di questi sono domini catch-all, e le caselle esistono davvero
- Quanti crediti di verifica mi restano prima di lanciare questo

L'assistente chiama `verify_emails`, riceve un risultato per ogni indirizzo e lo spiega nella risposta. Se hai chiesto di una lista, puoi continuare nella stessa conversazione. Chiedigli di togliere tutto ciò che non è valido, raggruppare i sopravvissuti per dominio e scriverli come blocco CSV da incollare direttamente nel tuo strumento di invio. È questa seconda metà a renderlo utile, perché l'assistente ha già i dati in mano e può rimodellarli senza un altro giro.

## La parte catch-all conta qui più del solito

Circa il 30% di una lista B2B si trova su domini che accettano posta per qualsiasi indirizzo possibile, reale o no. La maggior parte dei verificatori li restituisce etichettati come rischiosi o accept-all, cioè non sono riusciti a capirlo.

Quell'etichetta è scomoda in una dashboard. In una conversazione è peggio, perché l'assistente riporterà fedelmente ciò che ha ricevuto e finisci con una risposta che ti dice che quattro dei tuoi undici indirizzi sono incerti, esattamente la situazione in cui eri prima di chiedere. Giggal.ai li risolve in validi o non validi, insieme alle caselle dietro quindici secure email gateway riconosciuti, così la risposta che arriva all'assistente è una risposta e non un'alzata di spalle.

## Costi e una precauzione sensata

Le verifiche via MCP consumano gli stessi crediti di qualsiasi altro canale. Ogni verifica di un indirizzo costa 1 credito fisso (compresi gli indirizzi catch-all e protetti da SEG), e il piano gratuito è di 1.000 crediti senza carta. I crediti non scadono.

La precauzione è semplice: un assistente fa quello che chiedi, anche lanciare un lavoro più grande di quanto intendevi. Chiedi il saldo crediti prima di qualcosa di grosso, e incolla gli indirizzi invece di indicargli un file che non hai guardato. Nessuna delle due cose è specifica della verifica, ma con un'API a consumo l'errore è più fastidioso del solito.

## Vale la pena configurarlo?

Se apri Claude o ChatGPT quasi ogni giorno e le liste email fanno parte del tuo lavoro, ci vogliono circa due minuti e togli un passaggio che facevi a mano. Se la verifica è un lavoro mensile in blocco che fai nel browser, la dashboard è davvero lo strumento migliore e questo non ti cambierà la vita.

Le istruzioni di configurazione e gli snippet per ogni client sono nella [pagina MCP](/mcp) (in inglese). Il [riferimento API](/public/docs) (in inglese) copre le stesse operazioni via REST se preferisci automatizzare con uno script.
