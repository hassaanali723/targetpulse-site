---
title: "PHP2Shell (CVE-2026-109618 und CVE-2026-109619): Was die Sicherheitslücke ist und wie Sie PHP patchen"
seoTitle: "PHP2Shell-Sicherheitslücke: So patchen Sie PHP jetzt"
description: "PHP2Shell sind zwei kritische Lücken in PHP, über die Angreifer Code auf Webservern ausführen. Welche PHP-Versionen sicher sind und wie Sie patchen."
slug: php2shell-sicherheitsluecke
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell sicherheitslücke
image: /blog/covers/de/php2shell-sicherheitsluecke.webp
imageAlt: "PHP2Shell: CVE-2026-109618 und CVE-2026-109619, bewertet mit 9,2 von 10, behoben in PHP 8.5.12, 8.4.27, 8.3.36 und 8.2.35"
cta: Sorgen Sie dafür, dass Ihre E-Mail ein echtes Postfach erreicht
---

PHP2Shell ist der Name für zwei kritische Sicherheitslücken in PHP selbst: CVE-2026-109618 und CVE-2026-109619. Über sie kann ein Angreifer eigenen Code auf einem Webserver ausführen, auf dem PHP läuft. Der Angreifer braucht dafür kein Passwort und kein Konto. PHP hat beide Lücken am 21. Oktober 2026 geschlossen, und Angreifer nutzen sie bereits aus.

Wenn Sie nur eine Zeile lesen, lesen Sie diese. Aktualisieren Sie PHP auf **8.5.12, 8.4.27, 8.3.36 oder 8.2.35** (oder neuer) und **starten Sie PHP danach neu**. Ein neues Paket wirkt erst, wenn die PHP-Prozesse neu gestartet sind.

![Was bei PHP2Shell zu tun ist, in 4 Schritten: jede PHP-Installation finden, PHP auf eine korrigierte Version aktualisieren, PHP neu starten, dann nach einem Einbruch suchen](/blog/fig-de-php2shell-what-to-do.webp)

## Was PHP2Shell ist, einfach erklärt

PHP ist die Programmiersprache hinter einem großen Teil der Websites. WordPress, Laravel, Drupal, Magento und phpBB laufen alle damit. Die meisten dieser Websites laufen auf einem Server, auf dem PHP jede Seitenanfrage bearbeitet.

PHP2Shell ist kein Fehler in WordPress oder in Ihrem eigenen Code. Es ist ein Fehler in PHP, also in der Grundlage darunter. Deshalb ist jede PHP-Website auf einem ungepatchten Server angreifbar, auch wenn ihr eigener Code fehlerfrei ist.

PHP hat beide Lücken mit 9,2 von 10 bewertet (CVSS v4.0). Das ist die Stufe „kritisch“. Der Name PHP2Shell kommt vom Ergebnis eines Angriffs: einer Shell. Das heißt, der Angreifer kann Befehle auf Ihrem Server eingeben.

## Wie PHP2Shell funktioniert, Schritt für Schritt

Zuerst brauchen Sie vier Fakten dazu, wie PHP eine Webseite bearbeitet.

1. Ein PHP-Server hält einige PHP-„Worker“ in Betrieb. Jeder Worker bearbeitet eine Webanfrage, dann die nächste und so weiter.
2. Für jede Anfrage reserviert PHP Speicher für die Daten dieser Anfrage. Dazu gehören Formularfelder, Cookies, hochgeladene Dateien und Sitzungsdaten.
3. Wenn die Anfrage endet, räumt PHP diesen Speicher auf. Die nächste Anfrage sollte ohne Reste beginnen.
4. Jede Anfrage hat ein Speicherlimit, festgelegt durch `memory_limit` in `php.ini`. Überschreitet eine Anfrage dieses Limit, bricht PHP die Anfrage ab.

Beide PHP2Shell-Lücken sind Fehler in den Schritten 2 und 3. PHP bringt durcheinander, welcher Speicher gültig ist.

### Lücke 1 (CVE-2026-109618): PHP geht mittendrin der Speicher aus

1. Der Angreifer sendet eine Anfrage, die so gebaut ist, dass sie viel Speicher verbraucht.
2. PHP erreicht sein Speicherlimit, während es die Daten der Anfrage noch einträgt. Ein Teil dieser Daten ist erst halb geschrieben.
3. PHP bricht die Anfrage ab und räumt auf.
4. Beim Aufräumen behandelt PHP die halb geschriebenen Daten als vollständig. So arbeitet PHP mit Speicher, der unbrauchbare Daten enthält oder Daten, die der Angreifer gewählt hat.

Die eigene Übergangslösung von PHP für diese Lücke ist, das Speicherlimit zu entfernen und Uploads klein zu halten. Daran sehen Sie, dass der Angriff davon abhängt, mit einer großen Anfrage das Limit zu erreichen.

### Lücke 2 (CVE-2026-109619): Reste einer früheren Anfrage

1. Eine Anfrage endet, und PHP gibt den Speicher frei, den sie genutzt hat.
2. Versehentlich behält PHP eine Notiz, wo ein Teil dieses freigegebenen Speichers lag.
3. Derselbe Worker übernimmt die nächste Anfrage. Diese Anfrage kann vom Angreifer kommen.
4. Bevor PHP die Notiz zurücksetzt, folgt die neue Anfrage ihr. Sie liest oder schreibt Speicher, in dem jetzt etwas anderes liegt.

Programmierer nennen das einen „Use after free“-Fehler. PHP führt eine Folge als bestätigt: Der Angreifer kann Speicher lesen, den er nicht sehen dürfte. Die Übergangslösung von PHP schaltet den Upload-Fortschritt für Sitzungen ab (session upload progress). Diese Funktion meldet, wie weit ein Datei-Upload ist. Sie ist standardmäßig eingeschaltet.

### Warum ein Speicherfehler einen Angreifer Code ausführen lässt

Der Speicher eines Programms enthält zwei Arten von Inhalten. Die eine sind Daten, zum Beispiel Text und Zahlen. Die andere ist die Stelle, an der die nächsten Anweisungen liegen, die das Programm ausführt.

Wenn ein Angreifer bestimmen kann, was PHP in Speicher schreibt, den es nicht nutzen sollte, kann er diese Stellen ändern. PHP führt dann die Anweisungen des Angreifers statt der eigenen aus. Das nennt man Speicherkorruption (memory corruption). So werden beide Lücken zu Remote Code Execution (RCE): Jemand im Internet führt Befehle auf Ihrem Server aus.

![Wie PHP2Shell aus einer Webanfrage die Kontrolle über einen Server macht: Der Angreifer sendet ohne Login eine präparierte Anfrage, PHP verwaltet den Speicher der Anfrage falsch, die Daten des Angreifers ersetzen die eigenen Daten von PHP, und PHP führt die Befehle des Angreifers aus](/blog/fig-de-php2shell-how-it-works.webp)

PHP sagt, dass das Risiko bei Apache mit mod_php am höchsten ist. Dort kann der Angriff beginnen, bevor irgendein Code Ihrer Website läuft. Ihre Website braucht keinen eigenen Fehler.

### Die beiden Lücken im Vergleich

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Name bei PHP | RCE via OOM corruption | RCE via stale global state |
| Was schiefgeht | PHP geht beim Aufbau der Anfrage der Speicher aus, danach vertraut es halb gebauten Daten | PHP nutzt Speicher erneut, der von einer früheren Anfrage übrig ist |
| Was der Angreifer braucht | Eine Webanfrage, kein Login | Anfragen an denselben PHP-Worker, kein Login |
| Bestätigte Folgen | Remote Code Execution | Remote Code Execution, Lesen von Speicher |
| Schweregrad (CVSS v4.0) | 9,2 kritisch | 9,2 kritisch |

## Wie die Lücke gefunden wurde

Die PHP Foundation nannte mehrere Teams als Entdecker, darunter Calif, OpenAI und Wiz. Calif und Wiz sagten, dass sie bei ihrer Forschung KI-Modelle genutzt haben. PHP kündigte den Fix am 20. Oktober an und veröffentlichte ihn am 21. Oktober.

Die Angreifer waren schneller als der Fix. Amazon sah am 17. Oktober einen Versuch, die Lücke auszunutzen. Das war vier Tage vor der Veröffentlichung.

## Was ein Angreifer mit PHP2Shell tun kann

Sobald der Angreifer Code über PHP ausführt, handelt er mit den Rechten des Kontos, unter dem PHP läuft. Auf vielen Linux-Servern ist das `www-data`. Dieses Konto kann die Dateien Ihrer Website lesen und ändern.

| Was der Angreifer tun kann | Was das für Sie bedeutet |
|---|---|
| Befehle auf dem Server ausführen | Dateien Ihrer Website lesen, ändern oder löschen. Gefälschte Seiten einstellen. |
| Geheime Daten aus dem Speicher lesen | Laut Wiz kann ausgelesener Speicher Passwörter, Tokens, API-Schlüssel und Zertifikate aus den Anfragen anderer Besucher offenlegen. |
| Ihre Konfigurationsdateien lesen | Dateien wie `wp-config.php` und `.env` enthalten Datenbankpasswörter. Damit kann der Angreifer Kundendaten kopieren. |
| Eine Hintertür einbauen | Eine versteckte PHP-Datei lässt ihn auch nach Ihrem Patch wieder hinein. Das NCSC fordert Sie auf, nach solchen Dateien zu suchen. |
| Spam und Phishing von Ihrem Server senden | Ihre Domain und Ihre IP landen auf Blacklists, und Ihre echten E-Mails kommen nicht mehr an. |
| Den ganzen Rechner übernehmen | Dream Research berichtete, dass Angreifer PHP2Shell mit einer Lücke im Linux-Kernel (CVE-2026-46300) kombinierten und so die volle Kontrolle über 24 Firewalls erlangten. Tenable hat diesen Bericht nicht bestätigt. |

## Wer betroffen ist

Die Sicherheitsmeldung von PHP nennt jede PHP-Umgebung, die Webanfragen bedient:

- PHP-FPM (die häufigste Umgebung mit Nginx)
- Apache mit mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

Das britische National Cyber Security Centre (NCSC) geht weiter. Es sagt, dass jede Organisation, die PHP einsetzt, davon ausgehen sollte, dass sie angreifbar ist, egal mit welcher Version. Das gilt auch für PHP in gekauften Produkten, zum Beispiel in Appliances und gehosteten Tools.

Am 26. Oktober sagte die Sicherheitsfirma Trail of Bits, dass funktionierende Exploits ungepatchtes PHP 8.2 bis 8.5 treffen. Sie führte die Exploits an MediaWiki, Symfony, Laravel und phpBB vor.

## Wird die Lücke in echten Angriffen genutzt?

Ja. Das ist keine Theorie.

![PHP2Shell-Zeitleiste: erster Angriffsversuch am 17. Oktober, Fix am 21. Oktober veröffentlicht, am 26. Oktober in die CISA-KEV-Liste aufgenommen, Patch-Frist für US-Bundesbehörden am 29. Oktober](/blog/fig-de-php2shell-timeline.webp)

- **17. Oktober:** Das Threat-Intelligence-Team von Amazon sah einen Versuch, die Lücke auszunutzen. Das war vier Tage, bevor der Fix erschien.
- **21. Oktober:** PHP veröffentlichte die korrigierten Versionen. Cloudflare sagte, dass es am selben Tag erste Angriffe sah.
- **26. Oktober:** CISA, die US-Behörde für Cyberabwehr, nahm beide Lücken in ihren Katalog Known Exploited Vulnerabilities (KEV) auf. Diese Liste enthält nur Lücken, für die echte Angriffe belegt sind.
- **29. Oktober:** Die Frist, bis zu der CISA den US-Bundesbehörden das Patchen vorgeschrieben hat.

## Welche PHP-Versionen sicher sind

Suchen Sie Ihren PHP-Zweig in der Tabelle. Ist Ihre Version niedriger als die korrigierte Version, sind Sie angreifbar.

| Ihr PHP-Zweig | Angreifbar unter | Korrigierte Version | Hinweise |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | Für 8.2 gibt es ab dem 31. Dezember 2026 keine Fixes mehr |
| 8.1, 8.0, 7.4 | alle Versionen | keine offizielle Version | PHP hat kleine Patches für den Quellcode veröffentlicht. Ihr Linux-Anbieter hat eventuell einen Fix. |
| 7.3 bis 5.4 | alle Versionen | keine | Kein Support mehr. Steigen Sie auf eine neuere Version um. |

**Linux-Distributionen nutzen eigene Versionsnummern.** Debian, Ubuntu und Red Hat bauen einen Fix oft in eine ältere Version ein, ohne die Nummer zu ändern. Deshalb kann `php -v` auf einem Server, der schon sicher ist, eine „alte“ Nummer zeigen. Prüfen Sie auf diesen Systemen die Sicherheitsmeldung Ihres Anbieters zu CVE-2026-109618, nicht nur die Nummer.

## So prüfen Sie Ihre PHP-Version

Wählen Sie die Methode, die zu Ihrer Umgebung passt.

| Wo Ihre Website läuft | So sehen Sie die PHP-Version |
|---|---|
| Eigener Server (SSH) | Führen Sie `php -v` aus. Für die Version, die die Website nutzt, prüfen Sie auch das Paket von PHP-FPM oder Apache. |
| WordPress | Gehen Sie zu **Werkzeuge**, dann **Website-Zustand**, dann **Bericht**, dann **Server**. |
| cPanel-Hosting | Öffnen Sie den **MultiPHP Manager**. Er zeigt die PHP-Version für jede Domain. |
| Anderes Shared Hosting | Sehen Sie in Ihrem Hosting-Panel nach, oder fragen Sie den Support. |

Die Kommandozeile und die Website können auf demselben Server unterschiedliche PHP-Versionen nutzen. Prüfen Sie die Version, die die Webseiten ausliefert.

## So patchen Sie

Der Fix besteht darin, die neue PHP-Version zu installieren und PHP neu zu starten. PHP schreibt selbst: „Es gibt keine vollständigen Schutzmaßnahmen, ein Update ist die einzige sichere Wahl.“

**Shared Hosting.** Ihr Hoster patcht PHP für Sie. Bitten Sie den Support um eine Bestätigung, dass der Server eine korrigierte Version nutzt. Wenn Sie in Ihrem Panel eine PHP-Version wählen können, wählen Sie einen unterstützten Zweig.

**Debian- oder Ubuntu-Server.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Red-Hat-, AlmaLinux- oder Rocky-Linux-Server.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Stellen Sie Ihr Image auf einen korrigierten Tag um, zum Beispiel `php:8.4.27-fpm`. Bauen Sie jeden Container neu und stellen Sie ihn neu bereit. Ein alter Container, der noch läuft, bleibt angreifbar.

Prüfen Sie danach noch einmal. Führen Sie `php -v` aus oder laden Sie in WordPress die Seite Website-Zustand neu. Bestätigen Sie die neue Version oder das korrigierte Paket Ihres Anbieters.

## Wenn Sie heute nicht patchen können

PHP nennt einige Einstellungen, die das Risiko senken. PHP stellt klar, dass sie einen Server nicht sicher machen. Nutzen Sie sie nur, während Sie das Update vorbereiten.

| Einstellung | Hilft gegen | Wo Sie sie setzen |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, so dass Anwendungen den Wert nicht überschreiben können |
| Niedriges `post_max_size` | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` oder die Konfiguration des FPM-Pools. Nicht `ini_set()` oder `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, nur PHP 8.5 | `php.ini` |

Starten Sie jeden PHP-Worker neu, nachdem Sie diese Werte geändert haben. PHP warnt außerdem davor, `RLIMIT_AS` oder `RLIMIT_DATA` als Speichergrenze zu nutzen. Sie können die Lücke auslösen.

Das NCSC nennt eine weitere Möglichkeit. Wenn Sie nicht schnell aktualisieren oder das Risiko senken können, nehmen Sie das System vom Netz, bis das möglich ist.

## Prüfen Sie, ob Sie schon gehackt wurden

Die Angreifer hatten einen Vorsprung. Der erste Versuch kam vier Tage vor dem Fix. In einen Server, der jetzt gepatcht ist, kann also schon vorher jemand eingebrochen sein.

Das NCSC fordert Sie auf, ungepatchte Systeme auf Anzeichen eines Einbruchs und auf Hintertüren zu prüfen. Typische Anzeichen auf einem PHP-Server:

- Neue `.php`-Dateien, die Sie nicht angelegt haben, oft in Upload- oder Cache-Ordnern.
- Neue Admin-Benutzer in WordPress oder Ihrer Anwendung.
- Ungewöhnliche ausgehende Verbindungen oder eine CPU-Last, die Sie nicht erklären können.
- Ein plötzlicher Anstieg der ausgehenden E-Mails von Ihrem Server.
- Bounces, die melden, dass Ihre IP oder Ihre Domain auf einer Blacklist steht.

Die letzten beiden Punkte zählen auch dann, wenn Ihre Website normal aussieht. Ein gehackter Server wird oft genutzt, um Spam oder Phishing über Ihre Domain zu senden. Dadurch kann Ihre Domain auf Blacklists landen, und dann erreichen Ihre echten E-Mails die Postfächer nicht mehr. Unser Leitfaden dazu, [wie Sie prüfen, ob Ihre E-Mail-Domain auf einer Blacklist steht](/blog/how-to-check-if-email-domain-is-blacklisted), zeigt, wie Sie einen Eintrag finden und beheben.

Wenn Sie Anzeichen eines Einbruchs finden, reicht Patchen nicht aus. Der Angreifer hat vielleicht eine Hintertür hinterlassen. Stellen Sie ein sauberes Backup wieder her oder holen Sie ein Incident-Response-Team dazu.

## Zwei verwandte Probleme, die Sie kennen sollten

**CVE-2026-115560.** Am 23. Oktober veröffentlichte PHP eine eigene Sicherheitsmeldung zum Upload-Fortschritt für Sitzungen. PHP hält eine Ausnutzung dieser Lücke für unwahrscheinlich. Die Einstellung `session.upload_progress.enabled=0` aus der Tabelle oben deckt auch sie ab.

**Ein SimpleXML-Problem in den korrigierten Versionen.** PHP 8.4.27 und 8.5.12 können manche Anwendungen, die SimpleXML nutzen, zum Absturz bringen (php-src Issue #24488). Die Ursache ist eine andere Änderung, nicht der Sicherheitsfix. Am 26. Oktober war ein Fix dafür eingepflegt, aber noch nicht veröffentlicht. Testen Sie Ihre Anwendung nach dem Update. Bleiben Sie deswegen nicht auf der angreifbaren Version.

## Video: Wie das PHP-Sicherheitsteam vorgegangen ist

```youtube
No3T8JQqhtM
Video ansehen: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) von Laravel News
```

## Kurze Antworten

| Frage | Antwort |
|---|---|
| Was ist PHP2Shell? | Zwei kritische Lücken in PHP, CVE-2026-109618 und CVE-2026-109619, über die Angreifer Code auf einem Server ausführen können. |
| Braucht ein Angreifer ein Login? | Nein. Ein Angreifer im Internet kann die Lücke ohne Konto nutzen. |
| Wird die Lücke für Angriffe genutzt? | Ja. CISA hat beide Lücken am 26. Oktober 2026 in ihren KEV-Katalog aufgenommen. |
| Welche Versionen schließen die Lücke? | 8.5.12, 8.4.27, 8.3.36 und 8.2.35. |
| Reicht es, das Paket zu aktualisieren? | Nein. Starten Sie auch PHP-FPM, Apache oder Ihre Container neu. |
| Schließt eine Firewall die Lücke? | Nein. Regeln einer Web-Firewall können manche Angriffe blockieren, aber nur ein Update behebt den Fehler. |

## Quellen

- [PHP news archive 2026](https://www.php.net/archive/2026.php): Versionshinweise und die Sicherheitsmeldung
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): Berichte über Angriffe von Amazon, Cloudflare und Trail of Bits
