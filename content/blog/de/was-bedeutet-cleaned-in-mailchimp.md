---
title: "Was bedeutet Cleaned in Mailchimp?"
seoTitle: "Was bedeutet Cleaned in Mailchimp? Ursachen und Lösung"
description: "Cleaned in Mailchimp heißt, eine Adresse hatte einen Hard Bounce oder wiederholt Soft Bounces. Mailchimp sendet nicht mehr an sie. Ursachen, Kosten, Lösung."
slug: was-bedeutet-cleaned-in-mailchimp
date: 2026-10-19
updated: 2026-10-19
keyword: mailchimp cleaned bedeutung
image: /blog/covers/de/was-bedeutet-cleaned-in-mailchimp.webp
imageAlt: Leitfaden zum Status Cleaned in der Mailchimp-Zielgruppe mit Bounce-Ursachen und den Unterschieden zwischen den Status
cta: Finden Sie ungültige Adressen, bevor Mailchimp sie bereinigt
---

Cleaned in Mailchimp bedeutet, dass Mailchimp nicht mehr an diese Adresse sendet. Die Adresse hatte einen Hard Bounce oder zu viele Soft Bounces, und Mailchimp hält sie für ungültig. Der Name führt oft in die Irre. "Cleaned" klingt, als hätte Mailchimp etwas für Sie aufgeräumt oder repariert. Tatsächlich wurde nichts repariert. Der Kontakt bleibt in Ihrer Zielgruppe und trägt das Label Cleaned. Er kann keine E-Mail mehr von Ihnen empfangen und zählt nicht zu Ihrem monatlichen Kontaktlimit.

## Warum Mailchimp eine Adresse bereinigt

Hard Bounces sind dauerhafte Zustellfehler, bei denen ein empfangender Server eine E-Mail direkt ablehnt. Die häufigen Gründe bei Mailchimp sind ein Postfach, das nicht existiert, und ein empfangender Server, der die Zustellung dauerhaft gesperrt hat. Typische Beispiele sind Tippfehler wie con statt com und alte Adressen von Personen, die ein Unternehmen verlassen haben. In den meisten Fällen bereinigt Mailchimp Adressen mit Hard Bounce automatisch und sofort. Sie werden dann von jeder künftigen Kampagne an Ihre Zielgruppe ausgeschlossen.

Soft Bounces funktionieren anders, denn sie sind vorübergehende Zustellfehler. Bounct eine Adresse soft, versucht Mailchimp die Zustellung bei künftigen Versänden erneut, statt sie sofort zu sperren. Scheitert eine Adresse aber immer wieder, macht Mailchimp daraus einen Hard Bounce und bereinigt sie. Mailchimp nutzt dafür eine feste Zahl. Es bereinigt eine Adresse nach 7 Soft Bounces, wenn der Kontakt keine frühere Abonnentenaktivität hat. Bei Kontakten mit früherer Abonnentenaktivität erlaubt es bis zu 15 Soft Bounces.

Mailchimp nennt mehrere Gründe, warum eine Kampagnen-E-Mail soft bouncen kann. Das Postfach des Empfängers kann voll, inaktiv oder falsch eingerichtet sein. Sein Mailserver kann ausgefallen oder offline sein. Oder Ihre Kampagne hat in kurzer Zeit zu viele E-Mails an diesen Server gesendet. Weitere Gründe für Soft Bounces sind zu große Nachrichten, Domains, die vorübergehend nicht existieren, Inhaltsfilter oder Nachrichten, die nicht weitergeleitet werden können. Eine E-Mail kann auch soft bouncen, wenn sie die Anforderungen des Zielservers an Virenschutz, Spamschutz oder Absender nicht erfüllt. Das gilt auch, wenn die Nachricht [DMARC nicht bestanden hat](/blog/spf-dkim-dmarc-explained).

Mailchimp sagt, dass es nicht vorhersagen kann, ob eine E-Mail vor dem Versand bouncen wird. Jeder Mailbox-Anbieter weist E-Mails nach seinen eigenen Regeln ab. Nach dem Versand einer Kampagne bleiben die Bounce-Meldungen 30 Tage lang in Ihren E-Mail-Berichten in Mailchimp verfügbar. Wie Mailserver Zustellprobleme einstufen, lesen Sie in unserem Leitfaden zu [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce). Oder lesen Sie den Leitfaden von Mailchimp zu [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Cleaned im Vergleich zu Unsubscribed, Archived und anderen Kontaktarten

Mailchimp teilt Kontakte in feste Kategorien ein. Sie bestimmen, ob ein Kontakt Nachrichten empfangen kann und ob Sie für ihn bezahlen:

| Status | Was er bedeutet | Kann empfangen | Zählt zum Kontaktlimit |
| --- | --- | --- | --- |
| Subscribed | Hat dem Empfang Ihrer E-Mail-Kampagnen zugestimmt | Marketing-E-Mails, Marketing-SMS, Anzeigen, Transaktions-E-Mails | Ja |
| Unsubscribed | Hat sich von Ihren Marketing-Kampagnen abgemeldet | Anzeigen und Transaktions-E-Mails | Ja |
| Non-subscribed | Hatte Kontakt mit Ihnen (über einen Shop, eine Integration oder einen Import), hat aber nie zugestimmt | Anzeigen und Transaktions-E-Mails | Ja |
| Cleaned | Die Adresse hatte einen Hard Bounce oder wiederholte Soft Bounces und ist nicht zustellbar | Nichts | Nein |
| Pending | Hat ein Anmeldeformular abgeschickt, das Double Opt-in aber nicht bestätigt | Nichts | Nein |
| Archived | Aus der aktiven Zielgruppe entfernt, die Profildaten bleiben erhalten | Nichts | Nein |
| Deleted | Dauerhaft entfernt, kann nicht rückgängig gemacht werden | Nichts | Nein |

Die Status Cleaned und Unsubscribed verhindern beide, dass Sie Marketing-Kampagnen an eine E-Mail-Adresse senden. Für Ihre monatliche Rechnung ist der Unterschied aber wichtig. Unsubscribed ist die Entscheidung des Abonnenten, und Mailchimp zählt diesen Kontakt weiter zu Ihrem monatlichen Kontaktlimit. Cleaned ist die Entscheidung von Mailchimp, nachdem die Zustellung gescheitert ist. Die Adresse kann nichts empfangen, und Mailchimp berechnet sie nicht. Kontakte mit Status Pending, die unbestätigt bleiben, entfernt Mailchimp nach 60 Tagen automatisch aus Ihrer Zielgruppe. Für Konten mit älteren kostenpflichtigen Tarifen, die vor dem 15. Mai 2019 angelegt wurden, können andere Regeln zum Kontaktlimit gelten.

## Was Sie mit bereinigten Kontakten tun sollten

Mailchimp empfiehlt, bereinigte Kontakte zu archivieren statt zu löschen. Beim Archivieren bleiben der Verlauf des Kontakts und die schlechte Adresse in Ihrer Zielgruppe gespeichert. Laut Mailchimp hilft das, nicht erneut an diese Adresse zu bouncen. Mailchimp rät, Kontakte nur bei Anfragen nach der DSGVO zu löschen. Löschen entfernt den Datensatz dauerhaft und lässt sich nicht rückgängig machen. Das Archivieren bereinigter Kontakte senkt Ihre monatliche Rechnung nicht, denn bereinigte Adressen zählen ohnehin nicht zu Ihrem Tariflimit. Mailchimp erklärt diese Regel in seiner Dokumentation [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Um alle bereinigten Adressen aus Ihrer Mailchimp-Zielgruppe zu prüfen oder zu exportieren, können Sie sie mit Segmenten herausfiltern. Die Namen der Menüpunkte stehen hier so, wie sie in der englischen Oberfläche heißen:

1. Öffnen Sie im Mailchimp-Dashboard den Tab Audience und klicken Sie auf Segments.
2. Klicken Sie auf Create segment.
3. Legen Sie als Bedingung fest, dass Email subscription status einer der Werte Cleaned ist.
4. Klicken Sie auf Use segment, geben Sie dem Segment einen Namen und speichern Sie es.
5. Öffnen Sie das gespeicherte Segment, klicken Sie auf Export segment und bestätigen Sie den Export.
6. Klicken Sie im Hinweisbanner auf View exports und dann auf Download CSV, um die Datei zu speichern.

Wird ein Kontakt wegen eines einfachen Tippfehlers bereinigt, etwa user@gmai.com oder name@conpany.com, können Sie den bestehenden Kontakt nicht bearbeiten. Um den Fehler zu korrigieren, legen Sie die richtige E-Mail-Adresse als neuen Kontakt an. Da Mailchimp bereinigte Adressen nicht berechnet, kostet es Sie nichts, den alten Datensatz mit dem Tippfehler zu behalten.

Gültige E-Mail-Adressen haben gelegentlich einen Hard Bounce. Bevor Sie handeln, prüfen Sie den Bounce-Grund in Ihrem Kampagnenbericht. Eine strenge Firmen-Firewall oder ein Spamfilter kann die Nachricht mit SMTP-Antworten wie Denied, Unacceptable Content oder Blocked abgelehnt haben. In Unternehmen sperrt ein Firmenfilter manchmal die sendenden IP-Adressen von Mailchimp komplett. Das IT-Team des Empfängers kann das beheben, indem es die IP-Adressen von Mailchimp auf seine Allowlist setzt. In anderen Fällen sperrt Sie ein großer Mailbox-Anbieter vorübergehend. Laut Mailchimp kann sich das innerhalb von ein oder zwei Tagen lösen, sobald die Spam-Beschwerden nachlassen. Bestimmte Fehlerantworten von Servern können Sie durch das [Lesen von Bounce-Meldungen](/blog/550-5-7-1-error) einordnen. Ist die Adresse sicher gültig und das Hindernis für die Zustellung beseitigt, muss sich der Kontakt über Ihr Anmeldeformular neu anmelden, um wieder in Ihre Zielgruppe zu kommen. Mailchimp lässt Sie einen bereinigten Kontakt nicht selbst von Hand auf Subscribed zurücksetzen.

## Wenn viele Kontakte auf einmal bereinigt werden

Hat eine aktuelle Kampagne dazu geführt, dass viele Kontakte auf einmal bereinigt wurden, droht Ihrem Konto eine automatische Sperrung. Mailchimp sperrt Konten automatisch, wenn ein einzelner Versand die üblichen Branchengrenzen für Bounces, Abmeldungen oder Missbrauchsbeschwerden überschreitet. Laut Mailchimp verlangen Internetanbieter und Anti-Spam-Organisationen, dass es diese Grenzen durchsetzt. Sperrt Mailchimp Ihr Konto, ist der Versand deaktiviert, während die Compliance-Teams prüfen. Anmelden, API-Aufrufe und der Zugriff auf Daten funktionieren aber normal weiter.

Meist liegt es an alten Listen, denn Menschen wechseln den Job, verlassen Postfächer und schließen Konten. Wenn Sie Ihrer Zielgruppe länger keine E-Mail geschickt haben, schlägt Mailchimp vor, Ihre Kontakte vor einer großen Kampagne erneut bestätigen zu lassen. Sie bitten die Abonnenten dabei zu bestätigen, dass sie Ihre Nachrichten weiter erhalten wollen.

Mailchimp empfiehlt außerdem dringend, Ihre Absenderdomain zu authentifizieren, [DMARC einzurichten](/blog/what-is-a-dmarc-record) und nie eine kostenlose E-Mail-Adresse von Gmail oder Yahoo als From-Adresse zu verwenden.

## Wie Sie verhindern, dass Kontakte bereinigt werden

Am direktesten verhindern Sie bereinigte Adressen, indem Sie Ihre Listen prüfen, bevor Sie sie importieren oder Kampagnen senden. Ein Tool zur E-Mail-Verifizierung prüft vor dem Versand einer Kampagne, ob jedes Postfach auf dem Zielserver wirklich existiert. So bouncen ungültige Adressen nicht in Ihrem Konto. Hier kann sich [Giggal mit Mailchimp verbinden](/integrations), und zwar über einen API-Schlüssel. Giggal importiert die Kontakte Ihrer Zielgruppe mit Status Subscribed, prüft, ob jedes Postfach existiert, und klärt Adressen auf [Catch-all-Domains](/catch-all-verification). Nach der Verifizierung laden Sie die Ergebnisse als CSV-Datei herunter. Die schlechten Adressen archivieren oder melden Sie dann selbst direkt in Mailchimp ab. An Ihrer Mailchimp-Zielgruppe selbst ändert Giggal nichts.

Eine Prüfung vor dem Versand hält die Bounces niedrig. Haben Sie ein älteres Segment, das länger keine E-Mail bekommen hat, lassen Sie es durch einen Verifizierer laufen. Oder senden Sie eine Kampagne zur erneuten Bestätigung, bevor Sie es in einen großen Newsletter aufnehmen. Achten Sie darauf, dass Ihre Einträge zur Domain-Authentifizierung im DNS gültig bleiben. Ein Fehler beim DMARC-Alignment ist einer der bekannten Auslöser für Soft Bounces bei Mailchimp. Denken Sie daran, dass eine Prüfung Ihrer Zielgruppe keine Kontakte zurückholt, die Mailchimp schon bereinigt hat. Hat eine Adresse den Status Cleaned, lässt Mailchimp diese Person nur über eine neue Anmeldung in Ihrem Formular zurückkommen.

## Häufige Fragen

**Zählen bereinigte Kontakte zu meiner Mailchimp-Rechnung?**
Nein. Bereinigte Kontakte zählen nicht zu Ihrem monatlichen Kontaktlimit, und Mailchimp berechnet sie nicht. Von allen Kontaktarten zählen nur Kontakte mit Status Subscribed, Unsubscribed und Non-subscribed zum Kontaktlimit Ihres Tarifs.

**Kann ich einen bereinigten Kontakt wieder anmelden?**
Nein. Sie können einen bereinigten Kontakt im Mailchimp-Dashboard nicht von Hand auf Subscribed zurücksetzen. Der Abonnent muss seine Daten erneut über Ihr von Mailchimp gehostetes Anmeldeformular oder ein eingebettetes Formular auf Ihrer Website eingeben, um wieder zuzustimmen.

**Nach wie vielen Soft Bounces bereinigt Mailchimp einen Kontakt?**
Mailchimp bereinigt eine Adresse nach 7 Soft Bounces, wenn für den Kontakt keine frühere Abonnentenaktivität gespeichert ist. Hat der Kontakt frühere Abonnentenaktivität, erlaubt Mailchimp bis zu 15 Soft Bounces. Danach macht es aus der Adresse einen Hard Bounce und bereinigt sie.

**Soll ich bereinigte Kontakte löschen?**
Nein. Mailchimp empfiehlt, bereinigte Kontakte zu archivieren statt zu löschen. Beim Archivieren bleibt der Datensatz in Ihrer Zielgruppe. Laut Mailchimp hilft das, nicht erneut an diese Adresse zu bouncen. Mailchimp sagt, Sie sollen Kontakte nur aus Gründen der DSGVO löschen.

**Warum hat Mailchimp eine Adresse bereinigt, von der ich weiß, dass sie gültig ist?**
Gültige E-Mail-Adressen können einen Hard Bounce haben, wenn ein Spamfilter oder eine Firewall im Unternehmen die Server von Mailchimp sperrt. Die Antworten lauten dann etwa Denied oder Blocked. Bittet der Empfänger seinen Netzwerkadministrator, die sendenden IP-Adressen von Mailchimp auf die Allowlist zu setzen, kann er sich über Ihr Anmeldeformular wieder in Ihre Zielgruppe eintragen.

Das Label Cleaned bedeutet, dass Mailchimp Ihre Absenderreputation nachträglich schützt. Eine Prüfung vorher verhindert den Bounce von Anfang an. Lassen Sie Ihre Abonnentenliste vor dem nächsten Versand durch [Giggal.ai](/email-list-cleaning) (auf Englisch) laufen. So finden Sie ungültige Adressen, bevor Mailchimp sie bereinigt.
