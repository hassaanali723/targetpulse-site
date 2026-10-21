---
title: Secure Email Gateway (SEG)
description: Was ein Secure Email Gateway ist, wie es E-Mails filtert, bevor sie das Postfach einer Firma erreichen, wie Sie es am MX-Eintrag erkennen und warum es E-Mail-Prüfungen beeinflusst.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: Ein Secure Email Gateway, kurz SEG, ist ein Filter vor den Postfächern einer Firma. Es prüft jede eingehende E-Mail auf Spam, Phishing und schädliche Dateien, bevor jemand sie bekommt. Bekannte Beispiele sind Mimecast, Proofpoint und Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Prüfen Sie Adressen hinter Secure Email Gateways
---

## Was ist ein Secure Email Gateway?

Ein Secure Email Gateway, kurz SEG, ist ein Sicherheitsfilter für die E-Mails einer Firma. Es steht zwischen dem Internet und den Postfächern der Firma.

Jede E-Mail an die Firma geht zuerst an das Gateway. Das Gateway prüft sie. Es sucht nach Spam, Phishing-Links und schädlichen Anhängen. Sichere E-Mails gehen weiter ins Postfach. Gefährliche E-Mails werden blockiert oder zurückgehalten.

Große Firmen, Banken, Krankenhäuser und Behörden nutzen oft ein Gateway. Zu den bekanntesten Produkten gehören Mimecast, Proofpoint und Barracuda.

## Ein einfaches Beispiel

1. **Daniel schreibt einer Bank.** Daniel verkauft Software. Er schreibt einer Managerin bei einer Bank.
2. **Das Gateway bekommt die E-Mail zuerst.** Die E-Mails der Bank laufen über ein Gateway von Proofpoint.
3. **Das Gateway prüft sie.** Es prüft die Links und den Anhang in Daniels E-Mail.
4. **Die E-Mail wird zugestellt.** Nichts sieht schädlich aus. Also gibt das Gateway sie an den Posteingang der Managerin weiter.

Daniel sieht das Gateway nie. Hätte seine E-Mail einen gefährlichen Link enthalten, wäre sie dort gestoppt worden.

## Wie Sie ein Gateway erkennen

Sehen Sie sich den [MX-Eintrag](/glossary/mx-record) der Domain an. Der MX-Eintrag sagt, welcher Server die E-Mails für eine Domain empfängt. Ist ein Gateway im Einsatz, zeigt der MX-Eintrag auf das Gateway statt auf den Postfach-Anbieter.

| Gateway | Der MX-Eintrag endet oft auf |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Den MX-Eintrag jeder Domain können Sie mit einem MX-Lookup-Tool nachschlagen.

## Warum Gateways die E-Mail-Verifizierung beeinflussen

Ein E-Mail-Checker fragt den empfangenden Server, ob eine Adresse existiert. Auf einer Domain mit Gateway antwortet das Gateway statt des eigentlichen Mailservers.

Manche Gateways beantworten Prüfungen gar nicht. Die meisten Tools melden dann "Unbekannt", auch wenn die Person echt ist. Andere Gateways sagen zu jeder Adresse Ja. Das sieht genauso aus wie eine [Catch-all](/glossary/catch-all-email)-Domain.

Das trifft Business-Listen am stärksten, denn Kontakte bei großen Firmen sitzen oft hinter einem Gateway.

## Wie ein Verifizierer hilft

Giggal.ai erkennt 15 namentlich bekannte Gateways, darunter Mimecast, Proofpoint und Barracuda, und liefert für Adressen dahinter ein echtes Ergebnis. Wie das Schritt für Schritt funktioniert, lesen Sie im Artikel [wie Sie E-Mails hinter einem Secure Email Gateway prüfen](/blog/how-to-verify-emails-behind-secure-email-gateways).
