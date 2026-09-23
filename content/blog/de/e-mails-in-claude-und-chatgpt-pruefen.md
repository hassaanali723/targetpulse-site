---
title: "E-Mails direkt in Claude und ChatGPT prüfen"
description: Verbinden Sie ein E-Mail-Verifizierungstool per MCP mit Claude, ChatGPT, Cursor oder VS Code und prüfen Sie Adressen im Gespräch statt per CSV-Export.
slug: e-mails-in-claude-und-chatgpt-pruefen
date: 2026-09-23
keyword: e-mails direkt in claude und chatgpt prüfen
cta: E-Mails prüfen, ohne den Chat zu verlassen
---

Die meiste E-Mail-Verifizierung läuft noch genauso wie 2015. Sie exportieren eine CSV, öffnen einen Browser-Tab, laden die Datei hoch, warten, laden eine andere CSV herunter und importieren sie irgendwo. Das funktioniert. Es sind aber auch vier Kontextwechsel für etwas, das im Kern eine einzige Frage ist: Ist dieses Postfach echt?

Wenn Sie einen Teil Ihrer Arbeit ohnehin in Claude oder ChatGPT erledigen, gibt es jetzt einen kürzeren Weg. Das Model Context Protocol erlaubt einem Assistenten, ein externes Tool direkt aufzurufen, die Verifizierung kann also in dem Gespräch stattfinden, das Sie gerade führen.

## Was MCP eigentlich ist

MCP ist eine Spezifikation dafür, wie ein KI-Assistent mit einem externen Dienst spricht. Anthropic hat sie Ende 2024 veröffentlicht, und sie wird inzwischen weit über Claude hinaus genutzt. Das nützliche Denkmodell ist ein Steckerstandard. Vorher brauchte jeder Assistent für jedes Tool eine eigene Integration. Jetzt veröffentlicht ein Dienst einen MCP-Server, und jeder kompatible Client kann ihn nutzen.

Für ein Verifizierungstool ist die Oberfläche klein. Es gibt nur eine Handvoll Dinge, die Sie je fragen würden: Prüfe diese Adresse, prüfe diese Liste, zeig mir die vollständige Aufschlüsselung, sag mir, wie viele Credits ich noch habe. Giggal.ai stellt genau diese als drei Tools bereit, `verify_emails`, `get_verification_details` und `get_credit_balance`.

Anders als bei einer API schreiben Sie den Aufruf nicht selbst. Sie sagen, was Sie wollen, in dem Satz, den Sie ohnehin getippt hätten, und der Assistent findet heraus, welches Tool er mit welchen Argumenten aufruft.

## Wofür es gut ist, und wofür nicht

Ehrlich über die Grenze zu sein, erspart Enttäuschungen.

Es ist gut, wenn die Verifizierung ein Schritt in etwas Größerem ist, das Sie gerade im Gespräch tun. Sie haben eine Liste von Konferenzteilnehmern eingefügt und wollen die toten entfernen, bevor Sie das Outreach schreiben. Sie debuggen einen Anmeldeablauf und wollen wissen, ob eine bestimmte Adresse echt ist. Sie entwerfen eine Sequenz und wollen die zwölf Namen im Zielaccount prüfen, bevor Sie sich festlegen. In all diesen Fällen hieße die Alternative, das Gespräch zu verlassen, und der Tool-Aufruf ist wirklich schneller.

Es ist nicht gut, um eine Liste mit 200.000 Zeilen zu bereinigen. Das ist eine Aufgabe für einen Massen-Upload oder die API, und sie durch eine Chat-Oberfläche zu schicken, bringt nichts außer längerem Warten und vielen Tokens. Nutzen Sie dafür das Dashboard oder den REST-Endpunkt, genau dafür sind sie da. Für eine schnelle Einzelprüfung gibt es außerdem [E-Mail-Adresse prüfen](/email-checker) auf der Website.

## Einrichtung

Sie brauchen ein Giggal.ai-Konto und einen API-Schlüssel. Der Schlüssel liegt im Tab Developer API der App, nicht in den Einstellungen, eine Kleinigkeit, über die Leute öfter stolpern, als sie sollten.

Der Server ist remote, es gibt also nichts zu installieren und kein SDK. Er liegt unter `https://mcp.giggal.ai/mcp` und authentifiziert sich mit Ihrem API-Schlüssel.

Öffnen Sie in Claude Desktop die Einstellungen, dann Connectors, und fügen Sie einen benutzerdefinierten Connector mit dieser URL hinzu. Claude Code nimmt denselben Server über `claude mcp add` auf. Cursor und VS Code lesen MCP-Server beide aus einer JSON-Konfigurationsdatei im Projekt- oder Benutzerverzeichnis, und der Aufbau dieser Datei ist auf der [MCP-Seite](/mcp) (auf Englisch) samt genauer Snippets dokumentiert. ChatGPT unterstützt Remote-MCP-Server über seine Connector-Einstellungen in den Tarifen, in denen die Funktion aktiviert ist.

Sobald die Verbindung steht, listet der Assistent die drei Tools auf, und Sie können loslegen.

## Wie die Nutzung aussieht

Sie brauchen keine besondere Formulierung. All das funktioniert:

- Prüfe hello@stripe.com und sag mir, ob es ein echtes Postfach ist
- Hier sind elf Adressen aus einer Webinar-Anmeldung, prüfe, welche bouncen werden
- Welche davon sind Catch-all-Domains, und existieren die Postfächer wirklich
- Wie viele Verifizierungs-Credits habe ich noch, bevor ich das starte

Der Assistent ruft `verify_emails` auf, bekommt ein Ergebnis pro Adresse zurück und erklärt es in der Antwort. Wenn Sie nach einer Liste gefragt haben, können Sie im selben Gespräch nachlegen. Bitten Sie ihn, alles Ungültige zu entfernen, die übrigen nach Domain zu gruppieren und als CSV-Block auszugeben, den Sie direkt in Ihr Versandtool einfügen können. Diese zweite Hälfte macht den Nutzen aus, denn der Assistent hat die Daten schon und kann sie ohne weiteren Umweg umformen.

## Der Catch-all-Teil zählt hier mehr als sonst

Rund 30 % einer B2B-Liste liegen auf Domains, die Post für jede mögliche Adresse annehmen, echt oder nicht. Die meisten Verifizierer liefern diese als riskant oder Accept-all zurück, also: Sie konnten es nicht feststellen.

Dieses Label ist in einem Dashboard lästig. In einem Gespräch ist es schlimmer, weil der Assistent getreu weitergibt, was er bekommen hat, und Sie am Ende eine Antwort lesen, dass vier Ihrer elf Adressen unsicher sind, genau der Stand, den Sie vor der Frage hatten. Giggal.ai löst diese in gültig oder ungültig auf, ebenso Postfächer hinter fünfzehn namentlich erkannten Secure Email Gateways, damit beim Assistenten eine Antwort ankommt und kein Achselzucken.

## Kosten und eine sinnvolle Vorsichtsmaßnahme

Verifizierungen über MCP verbrauchen dieselben Credits wie überall sonst. Jede Adressprüfung kostet pauschal 1 Credit (auch Catch-all- und SEG-geschützte Adressen), und der Gratis-Tarif umfasst 1.000 Credits ohne Karte. Credits verfallen nicht.

Die Vorsichtsmaßnahme ist einfach: Ein Assistent tut, was Sie verlangen, auch einen größeren Auftrag, als Sie gemeint haben. Fragen Sie vor etwas Großem nach dem Credit-Stand, und fügen Sie Adressen ein, statt ihn auf eine Datei zu verweisen, die Sie nicht angesehen haben. Beides ist nicht verifizierungsspezifisch, aber bei einer abgerechneten API ist der Fehlerfall ärgerlicher als sonst.

## Lohnt sich die Einrichtung?

Wenn Sie Claude oder ChatGPT an den meisten Tagen öffnen und E-Mail-Listen zu Ihrer Arbeit gehören, dauert es etwa zwei Minuten und nimmt Ihnen einen Handgriff ab. Wenn Verifizierung ein monatlicher Massenauftrag im Browser ist, ist das Dashboard wirklich das bessere Werkzeug, und das hier wird Ihr Leben nicht verändern.

Einrichtungsanleitung und Konfigurations-Snippets für jeden Client stehen auf der [MCP-Seite](/mcp) (auf Englisch). Die [API-Referenz](/public/docs) (auf Englisch) deckt dieselben Vorgänge per REST ab, falls Sie lieber ein Skript schreiben.
