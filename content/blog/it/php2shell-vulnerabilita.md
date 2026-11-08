---
title: "PHP2Shell (CVE-2026-109618 e CVE-2026-109619): cos'è e come aggiornare PHP"
seoTitle: "PHP2Shell, vulnerabilità PHP: come aggiornare subito"
description: "PHP2Shell sono due vulnerabilità critiche di PHP che permettono di eseguire codice sui server web. Versioni sicure, come aggiornare e cosa controllare dopo."
slug: php2shell-vulnerabilita
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell vulnerabilità
image: /blog/covers/it/php2shell-vulnerabilita.webp
imageAlt: "PHP2Shell: CVE-2026-109618 e CVE-2026-109619, gravità 9,2 su 10, corrette in PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35"
cta: Controlla che il tuo dominio non sia finito in blacklist
---

PHP2Shell è il nome di due bug critici in PHP stesso: CVE-2026-109618 e CVE-2026-109619. Permettono a un attaccante di eseguire il proprio codice su un server web che usa PHP. L'attaccante non ha bisogno di una password o di un account. PHP ha corretto entrambi i bug il 21 ottobre 2026, e gli attaccanti li stanno già usando.

Se leggi una sola riga, leggi questa. Aggiorna PHP alla versione **8.5.12, 8.4.27, 8.3.36 o 8.2.35** (o successiva), poi **riavvia PHP**. Un nuovo pacchetto non serve a nulla finché i processi PHP non ripartono.

![Cosa fare contro PHP2Shell in 4 passi: trova ogni installazione di PHP, aggiorna PHP a una versione corretta, riavvia PHP, poi cerca segni di intrusione](/blog/fig-it-php2shell-what-to-do.webp)

## Cos'è PHP2Shell, in parole semplici

PHP è il linguaggio su cui gira una grande parte dei siti web. WordPress, Laravel, Drupal, Magento e phpBB funzionano tutti con PHP. La maggior parte di questi siti gira su un server dove PHP gestisce ogni richiesta di pagina.

PHP2Shell non è un bug di WordPress o del tuo codice. È un bug di PHP, il motore che sta sotto. Quindi ogni sito PHP su un server non aggiornato è esposto, anche se il codice del sito è perfetto.

PHP ha valutato entrambi i bug 9,2 su 10 (CVSS v4.0). È la fascia "critica". Il nome PHP2Shell viene dal risultato: una shell, cioè l'attaccante può digitare comandi sul tuo server.

## Come funziona PHP2Shell, passo per passo

Prima ti servono quattro fatti su come PHP gestisce una pagina web.

1. Un server PHP tiene attivi alcuni "worker" PHP. Ogni worker gestisce una richiesta web, poi la successiva, e così via.
2. Per ogni richiesta, PHP riserva memoria per i dati di quella richiesta. Tra questi ci sono i campi dei moduli, i cookie, i file caricati e i dati di sessione.
3. Quando la richiesta finisce, PHP ripulisce quella memoria. La richiesta successiva dovrebbe partire senza nulla di residuo.
4. Ogni richiesta ha un limite di memoria, fissato da `memory_limit` in `php.ini`. Se una richiesta lo supera, PHP la interrompe.

Entrambi i bug di PHP2Shell sono errori nei passi 2 e 3. PHP confonde quale memoria è valida.

### Bug 1 (CVE-2026-109618): PHP esaurisce la memoria a metà

1. L'attaccante invia una richiesta costruita per usare molta memoria.
2. PHP raggiunge il limite di memoria mentre sta ancora compilando i dati della richiesta. Una parte di quei dati è scritta solo a metà.
3. PHP interrompe la richiesta ed esegue la pulizia.
4. La pulizia tratta i dati scritti a metà come completi. Così PHP lavora con memoria che contiene dati spazzatura, o dati scelti dall'attaccante.

Il rimedio temporaneo indicato da PHP per questo bug è togliere il limite di memoria e tenere piccoli i caricamenti. Questo fa capire che l'attacco dipende dal raggiungere il limite con una richiesta grande.

### Bug 2 (CVE-2026-109619): residui di una richiesta precedente

1. Una richiesta finisce, e PHP libera la memoria che ha usato.
2. Per errore, PHP conserva una nota che dice dove si trovava parte di quella memoria liberata.
3. Lo stesso worker prende la richiesta successiva. Quella richiesta può arrivare dall'attaccante.
4. Prima che PHP azzeri la nota, la nuova richiesta la segue. Legge o scrive memoria che ora contiene altro.

I programmatori chiamano questo tipo di bug "use after free". PHP indica un risultato come confermato: l'attaccante può leggere memoria che non dovrebbe vedere. Il rimedio temporaneo di PHP disattiva il progresso del caricamento nelle sessioni. È una funzione che indica a che punto è il caricamento di un file. È attiva per impostazione predefinita.

### Perché un errore di memoria permette di eseguire codice

La memoria di un programma contiene due tipi di cose. Una sono i dati, come testo e numeri. L'altra è la posizione delle prossime istruzioni che il programma eseguirà.

Se un attaccante può scegliere cosa PHP scrive in una memoria che non dovrebbe usare, può cambiare quelle posizioni. PHP allora esegue le istruzioni dell'attaccante al posto delle proprie. Questo si chiama corruzione della memoria. È così che entrambi i bug diventano esecuzione di codice da remoto (RCE): qualcuno su internet esegue comandi sul tuo server.

![Come PHP2Shell trasforma una richiesta web nel controllo di un server: l'attaccante invia una richiesta costruita ad arte senza login, PHP gestisce male la memoria della richiesta, i dati dell'attaccante sostituiscono quelli di PHP e PHP esegue i comandi dell'attaccante](/blog/fig-it-php2shell-how-it-works.webp)

Secondo PHP il rischio è più alto su Apache con mod_php. Lì l'attacco può partire prima che venga eseguito qualsiasi codice del tuo sito. Non serve che il tuo sito abbia un bug proprio.

### I due bug a confronto

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Nome dato da PHP | RCE via OOM corruption | RCE via stale global state |
| Cosa va storto | PHP esaurisce la memoria durante la preparazione, poi si fida di dati costruiti a metà | PHP riusa memoria rimasta da una richiesta precedente |
| Cosa serve all'attaccante | Una richiesta web, nessun login | Richieste allo stesso worker PHP, nessun login |
| Risultati confermati | Esecuzione di codice da remoto | Esecuzione di codice da remoto, lettura della memoria |
| Gravità (CVSS v4.0) | 9,2 critica | 9,2 critica |

## Come è stata scoperta

La PHP Foundation ha riconosciuto il merito a diversi team, tra cui Calif, OpenAI e Wiz. Calif e Wiz hanno detto di aver usato modelli di intelligenza artificiale nella loro ricerca. PHP ha annunciato la correzione in anticipo il 20 ottobre e l'ha rilasciata il 21 ottobre.

Gli attaccanti sono stati più veloci della correzione. Amazon ha visto un tentativo di sfruttare il bug il 17 ottobre, quattro giorni prima del rilascio.

## Cosa può fare un attaccante con PHP2Shell

Quando l'attaccante esegue codice tramite PHP, agisce con l'account con cui gira PHP. Su molti server Linux quell'account è `www-data`. Quell'account può leggere e modificare i file del tuo sito.

| Cosa può fare l'attaccante | Cosa significa per te |
|---|---|
| Eseguire comandi sul server | Leggere, modificare o cancellare i file del sito. Pubblicare pagine false. |
| Leggere dati segreti dalla memoria | Wiz dice che la memoria esposta può rivelare password, token, chiavi API e certificati presi dalle richieste di altri visitatori. |
| Leggere i file di configurazione | File come `wp-config.php` e `.env` contengono le password del database. Con quelle, l'attaccante può copiare i dati dei clienti. |
| Installare una backdoor | Un file PHP nascosto gli permette di rientrare dopo che hai aggiornato. L'NCSC ti chiede di cercarli. |
| Inviare spam e phishing dal tuo server | Il tuo dominio e il tuo IP finiscono in blacklist, e le tue email vere smettono di arrivare. |
| Prendere il controllo dell'intera macchina | Dream Research ha riferito di attaccanti che hanno combinato PHP2Shell con un bug del kernel Linux (CVE-2026-46300) per ottenere il pieno controllo di 24 firewall. Tenable non ha confermato questa notizia. |

## Chi è coinvolto

L'avviso di PHP elenca ogni configurazione di PHP che serve richieste web:

- PHP-FPM (la configurazione più comune con Nginx)
- Apache con mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

Il National Cyber Security Centre (NCSC) del Regno Unito va oltre. Dice che ogni organizzazione che usa PHP deve considerarsi esposta, qualunque sia la versione. Questo include PHP integrato nei prodotti che acquisti, come appliance e strumenti in hosting.

Il 26 ottobre la società di sicurezza Trail of Bits ha detto che exploit funzionanti colpiscono PHP da 8.2 a 8.5 non aggiornato. Li ha mostrati contro MediaWiki, Symfony, Laravel e phpBB.

## Qualcuno la usa in attacchi reali?

Sì. Non è una teoria.

![Cronologia di PHP2Shell: primo tentativo di attacco visto il 17 ottobre, correzione rilasciata il 21 ottobre, aggiunta alla lista CISA KEV il 26 ottobre, scadenza per le agenzie federali USA il 29 ottobre](/blog/fig-it-php2shell-timeline.webp)

- **17 ottobre:** il team di threat intelligence di Amazon ha visto un tentativo di sfruttare il bug. Erano quattro giorni prima dell'uscita della correzione.
- **21 ottobre:** PHP ha rilasciato le versioni corrette. Cloudflare ha detto di vedere i primi attacchi lo stesso giorno.
- **26 ottobre:** la CISA, l'agenzia statunitense per la difesa informatica, ha aggiunto entrambi i bug al suo catalogo Known Exploited Vulnerabilities (KEV). Quella lista contiene solo bug con prove di attacchi reali.
- **29 ottobre:** la scadenza data dalla CISA alle agenzie federali statunitensi per aggiornare.

## Quali versioni di PHP sono sicure

Trova il tuo ramo di PHP nella tabella. Se la tua versione è inferiore alla versione corretta, sei esposto.

| Il tuo ramo di PHP | Esposto se inferiore a | Versione corretta | Note |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | 8.2 smette di ricevere correzioni il 31 dicembre 2026 |
| 8.1, 8.0, 7.4 | tutte le versioni | nessun rilascio ufficiale | PHP ha pubblicato piccole patch del codice sorgente. Il fornitore della tua distribuzione Linux potrebbe avere una correzione. |
| da 7.3 a 5.4 | tutte le versioni | nessuna | Fuori supporto. Passa a una versione più recente. |

**Le distribuzioni Linux usano numeri di versione diversi.** Debian, Ubuntu e Red Hat spesso aggiungono una correzione a una versione vecchia senza cambiarne il numero. Quindi `php -v` può mostrare un numero "vecchio" su un server che è già sicuro. Su questi sistemi, controlla l'avviso di sicurezza del fornitore per CVE-2026-109618, non solo il numero.

## Come controllare la versione di PHP

Scegli il metodo adatto alla tua configurazione.

| Dove gira il tuo sito | Come vedere la versione di PHP |
|---|---|
| Il tuo server (SSH) | Esegui `php -v`. Per la versione usata dal sito, controlla anche il pacchetto di PHP-FPM o di Apache. |
| WordPress | Vai in **Strumenti**, poi **Salute del sito**, poi **Informazioni**, poi **Server**. |
| Hosting con cPanel | Apri **MultiPHP Manager**. Mostra la versione di PHP per ogni dominio. |
| Altro hosting condiviso | Guarda nel pannello dell'hosting, o chiedi all'assistenza. |

La riga di comando e il sito possono usare versioni di PHP diverse sullo stesso server. Controlla quella che serve le pagine web.

## Come aggiornare

La soluzione è installare la nuova versione di PHP e riavviare PHP. Come scrive PHP: "Non esistono mitigazioni complete, aggiornare è l'unica scelta sicura."

**Hosting condiviso.** L'hosting aggiorna PHP per te. Chiedi all'assistenza di confermare che il server usa una versione corretta. Se il pannello ti permette di scegliere la versione di PHP, scegli un ramo supportato.

**Server Debian o Ubuntu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Server Red Hat, AlmaLinux o Rocky Linux.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Cambia l'immagine con un tag corretto, per esempio `php:8.4.27-fpm`. Ricostruisci e ridistribuisci ogni container. Un vecchio container in esecuzione resta esposto.

Dopo uno di questi passi, controlla di nuovo. Esegui `php -v` o ricarica la pagina Salute del sito di WordPress. Conferma la nuova versione, o conferma il pacchetto corretto del tuo fornitore.

## Se oggi non puoi aggiornare

PHP elenca alcune impostazioni che riducono il rischio. PHP dice chiaramente che non rendono sicuro un server. Usale solo mentre prepari l'aggiornamento.

| Impostazione | Aiuta contro | Dove impostarla |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, in modo che le applicazioni non possano sovrascriverla |
| `post_max_size` basso | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` o la configurazione del pool FPM. Non `ini_set()` o `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, solo PHP 8.5 | `php.ini` |

Riavvia ogni worker PHP dopo aver cambiato queste impostazioni. PHP avverte anche di non usare `RLIMIT_AS` o `RLIMIT_DATA` come limite di memoria. Possono attivare il bug.

L'NCSC indica un'altra opzione. Se non puoi aggiornare o ridurre il rischio in fretta, metti il sistema offline finché non puoi farlo.

## Controlla se hai già subito un'intrusione

Gli attaccanti avevano un vantaggio. Il primo tentativo è arrivato quattro giorni prima della correzione. Quindi un server aggiornato adesso potrebbe aver subito un'intrusione prima.

L'NCSC chiede di controllare i sistemi non aggiornati per cercare segni di intrusione e backdoor. Segni comuni su un server PHP:

- Nuovi file `.php` che non hai creato, spesso nelle cartelle di upload o di cache.
- Nuovi utenti amministratori in WordPress o nella tua applicazione.
- Connessioni in uscita insolite, o un uso della CPU che non sai spiegare.
- Un aumento improvviso delle email in uscita dal tuo server.
- Bounce che dicono che il tuo IP o il tuo dominio è in una blacklist.

Gli ultimi due contano anche se il sito sembra a posto. Un server violato viene spesso usato per inviare spam o phishing dal tuo dominio. Questo può mettere il tuo dominio nelle blacklist, e poi le tue email vere non arrivano più nelle caselle. La nostra guida su [come verificare se il tuo dominio email è in blacklist](/blog/how-to-check-if-email-domain-is-blacklisted) spiega come controllare e risolvere un inserimento.

Se trovi segni di intrusione, aggiornare non basta. L'attaccante potrebbe aver lasciato una backdoor. Ripristina da un backup pulito o rivolgiti a un team di incident response.

## Due problemi collegati da conoscere

**CVE-2026-115560.** Il 23 ottobre PHP ha pubblicato un avviso separato sul progresso del caricamento nelle sessioni. PHP considera poco probabile che questo bug venga sfruttato. L'impostazione `session.upload_progress.enabled=0` della tabella sopra copre anche questo.

**Un problema di SimpleXML nelle versioni corrette.** PHP 8.4.27 e 8.5.12 possono mandare in crash alcune applicazioni che usano SimpleXML (php-src issue #24488). La causa è una modifica separata, non la correzione di sicurezza. Al 26 ottobre una correzione era stata integrata ma non ancora rilasciata. Testa la tua applicazione dopo l'aggiornamento. Non restare sulla versione vulnerabile per questo motivo.

## Video: come il team di sicurezza di PHP ha gestito il caso

```youtube
No3T8JQqhtM
Guarda il video: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) di Laravel News
```

## Risposte rapide

| Domanda | Risposta |
|---|---|
| Cos'è PHP2Shell? | Due bug critici di PHP, CVE-2026-109618 e CVE-2026-109619, che permettono agli attaccanti di eseguire codice su un server. |
| Serve un login? | No. Un attaccante su internet può usarla senza un account. |
| Viene usata negli attacchi? | Sì. La CISA ha aggiunto entrambi i bug al suo catalogo KEV il 26 ottobre 2026. |
| Quali versioni la correggono? | 8.5.12, 8.4.27, 8.3.36 e 8.2.35. |
| Basta aggiornare il pacchetto? | No. Riavvia anche PHP-FPM, Apache o i tuoi container. |
| Un firewall la risolve? | No. Le regole di un web firewall possono bloccare alcuni attacchi, ma solo l'aggiornamento corregge il bug. |

## Fonti

- [PHP news archive 2026](https://www.php.net/archive/2026.php): note di rilascio e avviso di sicurezza
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): segnalazioni di attacchi da Amazon, Cloudflare e Trail of Bits
