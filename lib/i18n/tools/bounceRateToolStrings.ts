// Labels and messages of the bounce rate calculator (components/tools/BounceRateCalculator/BounceRateCalculatorTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/bounceRateStrings.ts.

import type { Locale } from '@/lib/i18n/clusters'

export interface BounceRateToolStrings {
  tabAria: string
  tabEmail: string
  tabWebsite: string
  fieldSent: { label: string; hint: string; placeholder: string }
  fieldHard: { label: string; hint: string; placeholder: string }
  fieldSoft: { label: string; hint: string; placeholder: string }
  fieldSessions: { label: string; hint: string; placeholder: string }
  fieldEngaged: { label: string; hint: string; placeholder: string }
  tryExamplePrompt: string
  tryExampleLink: string
  errorWhole: string
  errorCheck: string
  emailResults: {
    heading: string
    bouncedOfSent: (bounced: string, sent: string) => string
    statHard: { label: string; note: string }
    statSoft: { label: string; note: string }
    statDelivered: { label: string; note: (delivered: string) => string }
    deliveredComparison: (pct: string) => string
    allUnderLimits: (hardRate: string) => string
    overLimits: (hardRate: string, providers: string) => string
    limitsHeader: string
    countsHard: string
    countsAll: string
    atLimit: string
    overLimit: string
    underLimit: string
    tooMany: (n: string) => string
    leftRoom: (n: string, counts: 'hard' | 'all') => string
    providerNote: string
    ctaBox: {
      title: string
      desc: string
      button: string
    }
  }
  websiteResults: {
    heading: string
    sessionsNotEngaged: (unengaged: string, sessions: string) => string
    statEngagement: { label: string; note: string }
    statEngaged: { label: string; note: string }
  }
}

const en: BounceRateToolStrings = {
  tabAria: 'What to calculate',
  tabEmail: 'Email bounce rate',
  tabWebsite: 'Website bounce rate',
  fieldSent: { label: 'Emails sent', hint: 'The total your tool reports for the send.', placeholder: '10,000' },
  fieldHard: { label: 'Hard bounces', hint: 'Permanent: the address doesn’t exist.', placeholder: '150' },
  fieldSoft: { label: 'Soft bounces', hint: 'Temporary. Leave empty if your tool shows only one number.', placeholder: '100' },
  fieldSessions: { label: 'Sessions', hint: 'From your Google Analytics 4 report.', placeholder: '2,000' },
  fieldEngaged: { label: 'Engaged sessions', hint: 'Same report and date range.', placeholder: '1,250' },
  tryExamplePrompt: 'Enter your numbers, or ',
  tryExampleLink: 'try an example',
  errorWhole: 'Use whole numbers only, without decimals or letters.',
  errorCheck: 'Check the numbers.',
  emailResults: {
    heading: 'Email bounce rate',
    bouncedOfSent: (bounced, sent) => `${bounced} of ${sent} emails bounced. Mailchimp, Klaviyo and Mailgun count it this way.`,
    statHard: { label: 'Hard bounce rate', note: 'Most provider limits count only these.' },
    statSoft: { label: 'Soft bounce rate', note: 'Temporary failures, such as a full mailbox.' },
    statDelivered: { label: 'Delivered rate', note: (delivered) => `${delivered} emails were accepted.` },
    deliveredComparison: (pct) => `If your tool divides by delivered emails instead of sent, the same numbers give ${pct}. Check how your tool words it before you compare.`,
    allUnderLimits: (hardRate) => `Your hard bounce rate of ${hardRate} is under every provider limit below.`,
    overLimits: (hardRate, providers) => `Your hard bounce rate is ${hardRate}, which is at or above the limit ${providers} set. Clean the list before your next send.`,
    limitsHeader: 'Your numbers against provider limits',
    countsHard: 'hard bounces',
    countsAll: 'all bounces',
    atLimit: 'At',
    overLimit: 'Over',
    underLimit: 'Under',
    tooMany: (n) => `${n} too many`,
    leftRoom: (n, counts) => `${n} more ${counts === 'hard' ? 'hard ' : ''}bounce${n === '1' ? '' : 's'} left`,
    providerNote: 'Gmail, Yahoo and Microsoft publish no bounce rate limit. Their 0.3% rule is about spam complaints, not bounces. Mailchimp doesn’t publish a number either.',
    ctaBox: {
      title: 'Most hard bounces come from addresses that don’t exist',
      desc: 'Checking the list before you send removes them, so they never count against you.',
      button: 'Verify an email list',
    },
  },
  websiteResults: {
    heading: 'Website bounce rate (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} of ${sessions} sessions were not engaged.`,
    statEngagement: { label: 'Engagement rate', note: 'Engaged sessions ÷ sessions. Bounce rate is 100% minus this.' },
    statEngaged: { label: 'Engaged sessions', note: 'Over 10 seconds, a key event, or 2 or more page views.' },
  },
}

const fr: BounceRateToolStrings = {
  tabAria: 'Élément à calculer',
  tabEmail: 'Taux de rebond email',
  tabWebsite: 'Taux de rebond site (GA4)',
  fieldSent: { label: 'Emails envoyés', hint: 'Total indiqué par votre outil de routage.', placeholder: '10 000' },
  fieldHard: { label: 'NPAI / Hard bounces', hint: 'Rebonds permanents : adresse inexistante.', placeholder: '150' },
  fieldSoft: { label: 'Soft bounces', hint: 'Temporaires. Laissez vide si non différencié.', placeholder: '100' },
  fieldSessions: { label: 'Sessions', hint: 'Issu de votre rapport Google Analytics 4.', placeholder: '2 000' },
  fieldEngaged: { label: 'Sessions avec engagement', hint: 'Même période et même rapport GA4.', placeholder: '1 250' },
  tryExamplePrompt: 'Saisissez vos chiffres ou ',
  tryExampleLink: 'tester un exemple',
  errorWhole: 'Veuillez saisir uniquement des nombres entiers.',
  errorCheck: 'Vérifiez les valeurs saisies.',
  emailResults: {
    heading: 'Taux de rebond emailing',
    bouncedOfSent: (bounced, sent) => `${bounced} emails sur ${sent} n’ont pas abouti (méthode Mailchimp, Klaviyo et Mailgun).`,
    statHard: { label: 'Taux de hard bounce', note: 'La plupart des seuils d’alerte ne comptent que ces erreurs.' },
    statSoft: { label: 'Taux de soft bounce', note: 'Erreurs temporaires, comme une boîte de réception saturée.' },
    statDelivered: { label: 'Taux de délivrabilité', note: (delivered) => `${delivered} emails ont été acceptés par le serveur.` },
    deliveredComparison: (pct) => `Si votre outil divise par les messages remis au lieu des envoyés, le résultat est de ${pct}.`,
    allUnderLimits: (hardRate) => `Votre taux de hard bounce (${hardRate}) respecte tous les seuils d’expéditeurs ci-dessous.`,
    overLimits: (hardRate, providers) => `Votre taux de hard bounce (${hardRate}) dépasse le seuil toléré par ${providers}. Nettoyez votre liste.`,
    limitsHeader: 'Vos résultats face aux seuils des plateformes',
    countsHard: 'hard bounces',
    countsAll: 'tous rebonds',
    atLimit: 'À la limite',
    overLimit: 'Au-dessus',
    underLimit: 'En dessous',
    tooMany: (n) => `${n} en trop`,
    leftRoom: (n, counts) => `${n} rebond${n === '1' ? '' : 's'} ${counts === 'hard' ? 'définitif' : ''} restant${n === '1' ? '' : 's'}`,
    providerNote: 'Gmail, Yahoo et Microsoft n’imposent pas de seuil fixe de rebond. Leur limite de 0,3 % vise les plaintes pour spam.',
    ctaBox: {
      title: 'Les rebonds permanents proviennent d’adresses invalides',
      desc: 'Vérifier votre fichier avant l’envoi élimine ces adresses pour préserver votre réputation.',
      button: 'Vérifier une liste d’emails',
    },
  },
  websiteResults: {
    heading: 'Taux de rebond du site (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} sessions sur ${sessions} n’ont généré aucun engagement.`,
    statEngagement: { label: 'Taux d’engagement', note: 'Sessions engagées ÷ sessions. Le taux de rebond équivaut à 100 % moins ce taux.' },
    statEngaged: { label: 'Sessions engagées', note: 'Plus de 10 secondes, événement clé, ou 2+ pages vues.' },
  },
}

const es: BounceRateToolStrings = {
  tabAria: 'Qué calcular',
  tabEmail: 'Tasa de rebote de correo',
  tabWebsite: 'Tasa de rebote web (GA4)',
  fieldSent: { label: 'Correos enviados', hint: 'Total registrado por tu plataforma de envío.', placeholder: '10.000' },
  fieldHard: { label: 'Rebotes duros (Hard)', hint: 'Permanente: la dirección no existe.', placeholder: '150' },
  fieldSoft: { label: 'Rebotes suaves (Soft)', hint: 'Temporal. Déjalo en blanco si solo tienes un dato.', placeholder: '100' },
  fieldSessions: { label: 'Sesiones', hint: 'De tu informe de Google Analytics 4.', placeholder: '2.000' },
  fieldEngaged: { label: 'Sesiones con interacción', hint: 'Mismo informe y rango de fechas.', placeholder: '1.250' },
  tryExamplePrompt: 'Introduce tus datos o ',
  tryExampleLink: 'prueba un ejemplo',
  errorWhole: 'Utiliza únicamente números enteros, sin decimales ni letras.',
  errorCheck: 'Revisa los números introducidos.',
  emailResults: {
    heading: 'Tasa de rebote de correo',
    bouncedOfSent: (bounced, sent) => `${bounced} de ${sent} correos rebotaron (fórmula usada por Mailchimp, Klaviyo y Mailgun).`,
    statHard: { label: 'Tasa de rebote duro', note: 'La mayoría de los proveedores sancionan solo este valor.' },
    statSoft: { label: 'Tasa de rebote suave', note: 'Fallos temporales, como buzón lleno o servidor saturado.' },
    statDelivered: { label: 'Tasa de entrega', note: (delivered) => `${delivered} correos fueron aceptados por el servidor.` },
    deliveredComparison: (pct) => `Si tu herramienta divide entre correos entregados en vez de enviados, el resultado es ${pct}.`,
    allUnderLimits: (hardRate) => `Tu tasa de rebote duro (${hardRate}) está por debajo de los límites de los proveedores.`,
    overLimits: (hardRate, providers) => `Tu tasa de rebote duro es del ${hardRate}, alcanzando o superando el límite de ${providers}. Limpia la lista.`,
    limitsHeader: 'Tus métricas frente a los límites de proveedores',
    countsHard: 'rebotes duros',
    countsAll: 'todos los rebotes',
    atLimit: 'En el límite',
    overLimit: 'Superado',
    underLimit: 'Dentro del límite',
    tooMany: (n) => `${n} de más`,
    leftRoom: (n, counts) => `${n} rebote${n === '1' ? '' : 's'} ${counts === 'hard' ? 'duro' : ''} de margen`,
    providerNote: 'Gmail, Yahoo y Microsoft no publican límites de rebote. Su regla del 0,3% aplica a quejas de spam.',
    ctaBox: {
      title: 'La mayoría de rebotes duros son direcciones inexistentes',
      desc: 'Verificar la lista antes de enviar las elimina para proteger la reputación de tu dominio.',
      button: 'Verificar lista de correos',
    },
  },
  websiteResults: {
    heading: 'Tasa de rebote web (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} de ${sessions} sesiones no registraron interacción.`,
    statEngagement: { label: 'Porcentaje de interacción', note: 'Sesiones con interacción ÷ sesiones. El rebote es 100% menos esto.' },
    statEngaged: { label: 'Sesiones con interacción', note: 'Más de 10 segundos, evento clave o 2 o más páginas vistas.' },
  },
}

const de: BounceRateToolStrings = {
  tabAria: 'Berechnungstyp',
  tabEmail: 'E-Mail Bounce Rate',
  tabWebsite: 'Website Bounce Rate (GA4)',
  fieldSent: { label: 'Gesendete E-Mails', hint: 'Gesamtzahl laut Kampagnenbericht.', placeholder: '10.000' },
  fieldHard: { label: 'Hard Bounces', hint: 'Dauerhaft: Adresse existiert nicht.', placeholder: '150' },
  fieldSoft: { label: 'Soft Bounces', hint: 'Temporär. Frei lassen, wenn nur eine Zahl vorliegt.', placeholder: '100' },
  fieldSessions: { label: 'Sitzungen', hint: 'Aus Ihrem Google Analytics 4 Bericht.', placeholder: '2.000' },
  fieldEngaged: { label: 'Sitzungen mit Interaktion', hint: 'Gleicher Zeitraum und gleicher Bericht.', placeholder: '1.250' },
  tryExamplePrompt: 'Zahlen eingeben oder ',
  tryExampleLink: 'Beispiel laden',
  errorWhole: 'Bitte nur ganze Zahlen ohne Nachkommastellen eingeben.',
  errorCheck: 'Prüfen Sie die Eingaben.',
  emailResults: {
    heading: 'E-Mail Bounce Rate',
    bouncedOfSent: (bounced, sent) => `${bounced} von ${sent} E-Mails konnten nicht zugestellt werden (Mailchimp-, Klaviyo-Standard).`,
    statHard: { label: 'Hard-Bounce-Rate', note: 'Die meisten Provider bewerten primär diesen Wert.' },
    statSoft: { label: 'Soft-Bounce-Rate', note: 'Vorübergehende Fehler wie überfüllte Postfächer.' },
    statDelivered: { label: 'Zustellrate', note: (delivered) => `${delivered} E-Mails wurden erfolgreich angenommen.` },
    deliveredComparison: (pct) => `Wird durch zugestellte statt gesendete E-Mails geteilt, ergibt sich ${pct}.`,
    allUnderLimits: (hardRate) => `Ihre Hard-Bounce-Rate von ${hardRate} liegt unter allen Anbietergrenzen.`,
    overLimits: (hardRate, providers) => `Ihre Hard-Bounce-Rate von ${hardRate} erreicht oder überschreitet das Limit von ${providers}. Bereinigen Sie die Liste.`,
    limitsHeader: 'Ihre Werte im Vergleich zu Anbietergrenzen',
    countsHard: 'Hard Bounces',
    countsAll: 'Alle Bounces',
    atLimit: 'Am Limit',
    overLimit: 'Überschritten',
    underLimit: 'Im Rahmen',
    tooMany: (n) => `${n} zu viel`,
    leftRoom: (n, counts) => `Noch ${n} ${counts === 'hard' ? 'Hard ' : ''}Bounce${n === '1' ? '' : 's'} bis zum Limit`,
    providerNote: 'Gmail, Yahoo und Microsoft veröffentlichen keine harten Bounce-Limits. Ihre 0,3 %-Regel gilt für Spam-Beschwerden.',
    ctaBox: {
      title: 'Die meisten Hard Bounces entstehen durch ungültige Adressen',
      desc: 'Eine Listenprüfung vor dem Versand entfernt fehlerhafte Kontakte zuverlässig.',
      button: 'E-Mail-Liste prüfen',
    },
  },
  websiteResults: {
    heading: 'Website Bounce Rate (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} von ${sessions} Sitzungen waren ohne Interaktion.`,
    statEngagement: { label: 'Interaktionsrate', note: 'Interaktionen ÷ Sitzungen. Bounce Rate = 100 % minus diesen Wert.' },
    statEngaged: { label: 'Interaktionssitzungen', note: 'Dauer > 10 Sek., wichtiges Ereignis oder mindestens 2 Seitenaufrufe.' },
  },
}

const it: BounceRateToolStrings = {
  tabAria: 'Cosa calcolare',
  tabEmail: 'Tasso di rimbalzo email',
  tabWebsite: 'Tasso di rimbalzo sito (GA4)',
  fieldSent: { label: 'Email inviate', hint: 'Totale riportato dalla piattaforma di invio.', placeholder: '10.000' },
  fieldHard: { label: 'Rimbalzi duri (Hard)', hint: 'Permanenti: l’indirizzo non esiste.', placeholder: '150' },
  fieldSoft: { label: 'Rimbalzi morbidi (Soft)', hint: 'Temporanei. Lascia vuoto se hai un solo dato.', placeholder: '100' },
  fieldSessions: { label: 'Sessioni', hint: 'Dal tuo report di Google Analytics 4.', placeholder: '2.000' },
  fieldEngaged: { label: 'Sessioni con coinvolgimento', hint: 'Stesso report e intervallo date.', placeholder: '1.250' },
  tryExamplePrompt: 'Inserisci i tuoi numeri o ',
  tryExampleLink: 'prova un esempio',
  errorWhole: 'Inserisci solo numeri interi senza decimali o lettere.',
  errorCheck: 'Verifica i valori inseriti.',
  emailResults: {
    heading: 'Tasso di rimbalzo email',
    bouncedOfSent: (bounced, sent) => `${bounced} email su ${sent} sono rimbalzate (calcolo standard Mailchimp e Klaviyo).`,
    statHard: { label: 'Tasso di hard bounce', note: 'I limiti dei provider si basano prevalentemente su questo.' },
    statSoft: { label: 'Tasso di soft bounce', note: 'Problemi temporanei, come una casella di posta piena.' },
    statDelivered: { label: 'Tasso di consegna', note: (delivered) => `${delivered} email sono state accettate con successo.` },
    deliveredComparison: (pct) => `Se il tuo strumento divide per le email consegnate anziché inviate, ottieni ${pct}.`,
    allUnderLimits: (hardRate) => `Il tuo tasso di hard bounce (${hardRate}) è inferiore a tutte le soglie dei provider indicate.`,
    overLimits: (hardRate, providers) => `Il tuo tasso di hard bounce è del ${hardRate}, pari o superiore al limite stabilito da ${providers}. Pulisci la lista.`,
    limitsHeader: 'I tuoi valori rispetto ai limiti dei provider',
    countsHard: 'hard bounce',
    countsAll: 'tutti i rimbalzi',
    atLimit: 'Al limite',
    overLimit: 'Superato',
    underLimit: 'Entro i limiti',
    tooMany: (n) => `${n} di troppo`,
    leftRoom: (n, counts) => `Ancora ${n} rimbalz${n === '1' ? 'o' : 'i'} ${counts === 'hard' ? 'dur' : ''}${n === '1' ? 'o' : 'i'} di margine`,
    providerNote: 'Gmail, Yahoo e Microsoft non pubblicano un limite fisso di bounce. La regola dello 0,3% riguarda i reclami per spam.',
    ctaBox: {
      title: 'Gli hard bounce derivano da indirizzi non più esistenti',
      desc: 'Verificare la lista prima dell’invio li rimuove per proteggere la reputazione del mittente.',
      button: 'Verifica una lista email',
    },
  },
  websiteResults: {
    heading: 'Tasso di rimbalzo sito (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} sessioni su ${sessions} non hanno registrato coinvolgimento.`,
    statEngagement: { label: 'Tasso di coinvolgimento', note: 'Sessioni con coinvolgimento ÷ sessioni. Il rimbalzo è 100% meno questo dato.' },
    statEngaged: { label: 'Sessioni con coinvolgimento', note: 'Più di 10 secondi, evento chiave o 2 o più pagine visitate.' },
  },
}

const ptBr: BounceRateToolStrings = {
  tabAria: 'O que calcular',
  tabEmail: 'Taxa de bounce de e-mail',
  tabWebsite: 'Taxa de rejeição do site (GA4)',
  fieldSent: { label: 'E-mails enviados', hint: 'Total informado pela sua ferramenta de disparo.', placeholder: '10.000' },
  fieldHard: { label: 'Hard bounces (permanentes)', hint: 'O endereço não existe.', placeholder: '150' },
  fieldSoft: { label: 'Soft bounces (temporários)', hint: 'Temporário. Deixe em branco se houver apenas um valor.', placeholder: '100' },
  fieldSessions: { label: 'Sessões', hint: 'Do seu relatório do Google Analytics 4.', placeholder: '2.000' },
  fieldEngaged: { label: 'Sessões com engajamento', hint: 'Mesmo relatório e período.', placeholder: '1.250' },
  tryExamplePrompt: 'Insira seus números ou ',
  tryExampleLink: 'teste um exemplo',
  errorWhole: 'Use apenas números inteiros, sem vírgulas ou letras.',
  errorCheck: 'Verifique os números.',
  emailResults: {
    heading: 'Taxa de bounce de e-mail',
    bouncedOfSent: (bounced, sent) => `${bounced} de ${sent} e-mails sofreram bounce (cálculo de Mailchimp, Klaviyo e Mailgun).`,
    statHard: { label: 'Taxa de hard bounce', note: 'A maioria dos limites de provedores avalia apenas esse dado.' },
    statSoft: { label: 'Taxa de soft bounce', note: 'Falhas temporárias, como caixa postal cheia.' },
    statDelivered: { label: 'Taxa de entrega', note: (delivered) => `${delivered} e-mails foram aceitos com sucesso.` },
    deliveredComparison: (pct) => `Se a sua ferramenta divide pelos e-mails entregues em vez de enviados, o resultado é ${pct}.`,
    allUnderLimits: (hardRate) => `Sua taxa de hard bounce de ${hardRate} está dentro de todos os limites dos provedores.`,
    overLimits: (hardRate, providers) => `Sua taxa de hard bounce é de ${hardRate}, atingindo ou superando o limite de ${providers}. Higienize a lista.`,
    limitsHeader: 'Seus números em relação aos limites de provedores',
    countsHard: 'hard bounces',
    countsAll: 'todos os bounces',
    atLimit: 'No limite',
    overLimit: 'Acima',
    underLimit: 'Dentro',
    tooMany: (n) => `${n} a mais`,
    leftRoom: (n, counts) => `Mais ${n} ${counts === 'hard' ? 'hard ' : ''}bounce${n === '1' ? '' : 's'} de margem`,
    providerNote: 'Gmail, Yahoo e Microsoft não divulgam limites fixos de bounce. A regra de 0,3% se refere a marcações de spam.',
    ctaBox: {
      title: 'A maioria dos hard bounces vem de e-mails inexistentes',
      desc: 'Validar a lista antes de enviar elimina esses contatos e mantém sua reputação alta.',
      button: 'Validar lista de e-mails',
    },
  },
  websiteResults: {
    heading: 'Taxa de rejeição do site (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} de ${sessions} sessões não tiveram engajamento.`,
    statEngagement: { label: 'Taxa de engajamento', note: 'Sessões com engajamento ÷ sessões. A rejeição é 100% menos isso.' },
    statEngaged: { label: 'Sessões com engajamento', note: 'Mais de 10 segundos, conversão ou 2+ visualizações de página.' },
  },
}

const nl: BounceRateToolStrings = {
  tabAria: 'Wat te berekenen',
  tabEmail: 'E-mail bouncepercentage',
  tabWebsite: 'Website bouncepercentage (GA4)',
  fieldSent: { label: 'Verzonden e-mails', hint: 'Totaal gerapporteerd door je e-mailprogramma.', placeholder: '10.000' },
  fieldHard: { label: 'Hard bounces', hint: 'Permanent: het e-mailadres bestaat niet.', placeholder: '150' },
  fieldSoft: { label: 'Soft bounces', hint: 'Tijdelijk. Laat leeg als je tool slechts één getal toont.', placeholder: '100' },
  fieldSessions: { label: 'Sessies', hint: 'Uit je Google Analytics 4 rapport.', placeholder: '2.000' },
  fieldEngaged: { label: 'Sessies met engagement', hint: 'Zelfde rapport en periode.', placeholder: '1.250' },
  tryExamplePrompt: 'Vul je cijfers in of ',
  tryExampleLink: 'bekijk een voorbeeld',
  errorWhole: 'Gebruik alleen gehele getallen zonder decimalen of letters.',
  errorCheck: 'Controleer de getallen.',
  emailResults: {
    heading: 'E-mail bouncepercentage',
    bouncedOfSent: (bounced, sent) => `${bounced} van ${sent} e-mails zijn gebounced (berekening van Mailchimp en Klaviyo).`,
    statHard: { label: 'Hard bouncepercentage', note: 'De meeste limieten van providers kijken uitsluitend hiernaar.' },
    statSoft: { label: 'Soft bouncepercentage', note: 'Tijdelijke problemen zoals een volle mailbox.' },
    statDelivered: { label: 'Afleverpercentage', note: (delivered) => `${delivered} e-mails zijn geaccepteerd door de server.` },
    deliveredComparison: (pct) => `Als je tool deelt door afgeleverde in plaats van verzonden e-mails, is de uitkomst ${pct}.`,
    allUnderLimits: (hardRate) => `Je hard bouncepercentage van ${hardRate} blijft binnen alle providerlimieten.`,
    overLimits: (hardRate, providers) => `Je hard bouncepercentage is ${hardRate}, wat de limiet van ${providers} overschrijdt. Maak de lijst schoon.`,
    limitsHeader: 'Jouw cijfers afgezet tegen providerlimieten',
    countsHard: 'hard bounces',
    countsAll: 'alle bounces',
    atLimit: 'Op de limiet',
    overLimit: 'Boven limiet',
    underLimit: 'Onder limiet',
    tooMany: (n) => `${n} te veel`,
    leftRoom: (n, counts) => `Nog ${n} ${counts === 'hard' ? 'hard ' : ''}bounce${n === '1' ? '' : 's'} marge`,
    providerNote: 'Gmail, Yahoo en Microsoft publiceren geen vaste bouncelimiet. Hun 0,3% richtlijn geldt voor spamklachten.',
    ctaBox: {
      title: 'De meeste hard bounces ontstaan door niet-bestaande adressen',
      desc: 'Door je lijst vooraf te valideren verwijder je slechte adressen en bescherm je je afzenddomein.',
      button: 'Valideer een e-maillijst',
    },
  },
  websiteResults: {
    heading: 'Website bouncepercentage (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} van de ${sessions} sessies hadden geen engagement.`,
    statEngagement: { label: 'Engagementpercentage', note: 'Sessies met engagement ÷ sessies. Bouncepercentage is 100% min dit getal.' },
    statEngaged: { label: 'Sessies met engagement', note: 'Langer dan 10 seconden, conversie of 2+ paginaweergaven.' },
  },
}

const pl: BounceRateToolStrings = {
  tabAria: 'Co chcesz obliczyć',
  tabEmail: 'Współczynnik odrzuceń e-mail',
  tabWebsite: 'Współczynnik odrzuceń strony (GA4)',
  fieldSent: { label: 'Wysłane maile', hint: 'Łączna liczba z raportu kampanii.', placeholder: '10 000' },
  fieldHard: { label: 'Twarde odbicia (Hard)', hint: 'Trwałe: adres e-mail nie istnieje.', placeholder: '150' },
  fieldSoft: { label: 'Miękkie odbicia (Soft)', hint: 'Tymczasowe. Pozostaw puste, jeśli masz jedną liczbę.', placeholder: '100' },
  fieldSessions: { label: 'Sesje', hint: 'Z Twojego raportu Google Analytics 4.', placeholder: '2 000' },
  fieldEngaged: { label: 'Sesje z zaangażowaniem', hint: 'Ten sam raport i zakres dat.', placeholder: '1 250' },
  tryExamplePrompt: 'Wpisz swoje dane lub ',
  tryExampleLink: 'wypróbuj przykład',
  errorWhole: 'Wpisz wyłącznie liczby całkowite, bez liter i ułamków.',
  errorCheck: 'Sprawdź wprowadzone liczby.',
  emailResults: {
    heading: 'Współczynnik odrzuceń e-mail',
    bouncedOfSent: (bounced, sent) => `${bounced} z ${sent} wiadomości e-mail zostało odrzuconych (metoda Mailchimp i Klaviyo).`,
    statHard: { label: 'Wskaźnik twardych odbić', note: 'Większość limitów platform mailingowych ocenia wyłącznie ten wskaźnik.' },
    statSoft: { label: 'Wskaźnik miękkich odbić', note: 'Błędy tymczasowe, np. przepełniona skrzynka odbiorcza.' },
    statDelivered: { label: 'Wskaźnik dostarczeń', note: (delivered) => `${delivered} maili zostało pomyślnie przyjętych przez serwery.` },
    deliveredComparison: (pct) => `Jeśli Twój program dzieli przez maile dostarczone, a nie wysłane, wynik wynosi ${pct}.`,
    allUnderLimits: (hardRate) => `Twój wskaźnik twardych odbić (${hardRate}) mieści się w limitach wszystkich platform wysyłkowych.`,
    overLimits: (hardRate, providers) => `Twój wskaźnik twardych odbić wynosi ${hardRate}, osiągając lub przekraczając próg platformy ${providers}. Wyczyść bazę.`,
    limitsHeader: 'Twoje wyniki a limity systemów wysyłkowych',
    countsHard: 'twarde odbicia',
    countsAll: 'wszystkie odbicia',
    atLimit: 'Na granicy',
    overLimit: 'Przekroczony',
    underLimit: 'W normie',
    tooMany: (n) => `${n} za dużo`,
    leftRoom: (n, counts) => `Pozostało ${n} ${counts === 'hard' ? 'twardych ' : ''}odbić zapasu`,
    providerNote: 'Gmail, Yahoo i Microsoft nie publikują sztywnych limitów bounce rate. Próg 0,3% dotyczy zgłoszeń spamu.',
    ctaBox: {
      title: 'Większość twardych odbić to nieistniejące skrzynki mailowe',
      desc: 'Weryfikacja bazy przed wysyłką eliminuje błędne adresy i chroni reputację Twojej domeny.',
      button: 'Zweryfikuj listę mailingową',
    },
  },
  websiteResults: {
    heading: 'Współczynnik odrzuceń strony (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} z ${sessions} sesji nie wykazało zaangażowania.`,
    statEngagement: { label: 'Współczynnik zaangażowania', note: 'Sesje z zaangażowaniem ÷ sesje. Bounce rate to 100% minus ten wynik.' },
    statEngaged: { label: 'Sesje z zaangażowaniem', note: 'Powyżej 10 sekund, kluczowe zdarzenie lub 2+ odsłony strony.' },
  },
}

const id: BounceRateToolStrings = {
  tabAria: 'Pilihan perhitungan',
  tabEmail: 'Bounce rate email',
  tabWebsite: 'Bounce rate website (GA4)',
  fieldSent: { label: 'Email terkirim', hint: 'Total email yang dilaporkan sistem pengiriman.', placeholder: '10.000' },
  fieldHard: { label: 'Hard bounce (Permanen)', hint: 'Alamat email tidak ditemukan atau tidak aktif.', placeholder: '150' },
  fieldSoft: { label: 'Soft bounce (Sementara)', hint: 'Masalah sementara. Kosongkan jika hanya ada satu angka.', placeholder: '100' },
  fieldSessions: { label: 'Sesi', hint: 'Dari laporan Google Analytics 4 Anda.', placeholder: '2.000' },
  fieldEngaged: { label: 'Sesi engaged (Berinteraksi)', hint: 'Laporan dan rentang tanggal yang sama.', placeholder: '1.250' },
  tryExamplePrompt: 'Masukkan data Anda atau ',
  tryExampleLink: 'coba contoh',
  errorWhole: 'Gunakan angka bulat saja, tanpa desimal atau huruf.',
  errorCheck: 'Periksa kembali angka yang dimasukkan.',
  emailResults: {
    heading: 'Bounce rate email',
    bouncedOfSent: (bounced, sent) => `${bounced} dari ${sent} email mengalami bounce (metode Mailchimp, Klaviyo, dan Mailgun).`,
    statHard: { label: 'Tingkat hard bounce', note: 'Sebagian besar batas penyedia layanan hanya menghitung angka ini.' },
    statSoft: { label: 'Tingkat soft bounce', note: 'Kegagalan sementara, seperti kotak masuk penerima penuh.' },
    statDelivered: { label: 'Tingkat keterkiriman', note: (delivered) => `${delivered} email berhasil diterima oleh server tujuan.` },
    deliveredComparison: (pct) => `Jika sistem Anda membagi dengan email yang diterima (delivered), hasilnya adalah ${pct}.`,
    allUnderLimits: (hardRate) => `Tingkat hard bounce Anda (${hardRate}) berada di bawah semua batas penyedia layanan.`,
    overLimits: (hardRate, providers) => `Tingkat hard bounce Anda adalah ${hardRate}, menyamai atau melebihi batas ${providers}. Bersihkan daftar email Anda.`,
    limitsHeader: 'Angka Anda dibandingkan batas penyedia email',
    countsHard: 'hard bounce',
    countsAll: 'semua bounce',
    atLimit: 'Di batas',
    overLimit: 'Melebihi',
    underLimit: 'Aman',
    tooMany: (n) => `${n} terlalu banyak`,
    leftRoom: (n, counts) => `Tersisa batas ${n} ${counts === 'hard' ? 'hard ' : ''}bounce lagi`,
    providerNote: 'Gmail, Yahoo, dan Microsoft tidak menerbitkan batas bounce rate khusus. Aturan 0,3% mereka berlaku untuk keluhan spam.',
    ctaBox: {
      title: 'Sebagian besar hard bounce disebabkan oleh alamat email palsu',
      desc: 'Memvalidasi daftar email sebelum mengirim akan menghapusnya secara otomatis demi menjaga reputasi domain.',
      button: 'Validasi daftar email',
    },
  },
  websiteResults: {
    heading: 'Bounce rate website (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${unengaged} dari ${sessions} sesi tidak berinteraksi (unengaged).`,
    statEngagement: { label: 'Tingkat engagement', note: 'Sesi engaged ÷ sesi. Bounce rate adalah 100% dikurangi angka ini.' },
    statEngaged: { label: 'Sesi engaged', note: 'Lebih dari 10 detik, peristiwa penting, atau 2+ tampilan halaman.' },
  },
}

const ja: BounceRateToolStrings = {
  tabAria: '計算する項目',
  tabEmail: 'メールのバウンス率',
  tabWebsite: 'Webサイトの直帰率（GA4）',
  fieldSent: { label: '送信数', hint: 'メール配信ツールのレポートにある送信の合計です。', placeholder: '10,000' },
  fieldHard: { label: 'ハードバウンス数', hint: '恒久的なエラーです。メールアドレスが存在しません。', placeholder: '150' },
  fieldSoft: { label: 'ソフトバウンス数', hint: '一時的なエラーです。ツールにバウンス数が1つしかない場合は空欄にします。', placeholder: '100' },
  fieldSessions: { label: 'セッション数', hint: 'Google アナリティクス 4のレポートから入力します。', placeholder: '2,000' },
  fieldEngaged: { label: 'エンゲージのあったセッション数', hint: '同じレポート、同じ期間の数値を入力します。', placeholder: '1,250' },
  tryExamplePrompt: '数値を入力するか、',
  tryExampleLink: '例を試してください',
  errorWhole: '小数や文字を含まない整数で入力してください。',
  errorCheck: '数値を確認してください。',
  emailResults: {
    heading: 'メールのバウンス率',
    bouncedOfSent: (bounced, sent) => `${sent}通中${bounced}通がバウンスしました。Mailchimp、Klaviyo、Mailgunはこの方法で計算しています。`,
    statHard: { label: 'ハードバウンス率', note: '多くの配信サービスの上限は、これだけを数えます。' },
    statSoft: { label: 'ソフトバウンス率', note: 'メールボックスの容量超過などの一時的なエラーです。' },
    statDelivered: { label: '配信率', note: (delivered) => `${delivered}通が受信サーバーに受け付けられました。` },
    deliveredComparison: (pct) => `ツールが送信数ではなく配信数で割る場合、同じ数値で${pct}になります。比較する前に、ツールの計算方法を確認してください。`,
    allUnderLimits: (hardRate) => `ハードバウンス率は${hardRate}で、下記のすべての配信サービスの上限を下回っています。`,
    overLimits: (hardRate, providers) => `ハードバウンス率は${hardRate}で、${providers}の上限に達しているか、上回っています。次の送信の前にリストをクリーニングしてください。`,
    limitsHeader: '配信サービスの上限との比較',
    countsHard: 'ハードバウンスのみ',
    countsAll: 'すべてのバウンス',
    atLimit: '上限ちょうど',
    overLimit: '上限超過',
    underLimit: '上限未満',
    tooMany: (n) => `${n}件超過しています`,
    leftRoom: (n, counts) => `${counts === 'hard' ? 'ハードバウンス' : 'バウンス'}はあと${n}件まで`,
    providerNote: 'Gmail、Yahoo、Microsoftはバウンス率の上限を公開していません。0.3%のルールは迷惑メールの報告率に関するもので、バウンスとは関係ありません。Mailchimpも数値を公開していません。',
    ctaBox: {
      title: 'ハードバウンスの多くは、存在しないメールアドレスが原因です',
      desc: '送信前にリストを確認すれば、こうしたアドレスを取り除けます。バウンスとして数えられることもありません。',
      button: 'メールリストを検証する',
    },
  },
  websiteResults: {
    heading: 'Webサイトの直帰率（GA4）',
    sessionsNotEngaged: (unengaged, sessions) => `${sessions}セッション中${unengaged}セッションにエンゲージメントがありませんでした。`,
    statEngagement: { label: 'エンゲージメント率', note: 'エンゲージのあったセッション数 ÷ セッション数です。直帰率は100%からこの値を引いたものです。' },
    statEngaged: { label: 'エンゲージのあったセッション数', note: '10秒を超える、キーイベントがある、または2ページ以上の表示があったセッションです。' },
  },
}

const ko: BounceRateToolStrings = {
  tabAria: '계산할 항목',
  tabEmail: '이메일 반송률',
  tabWebsite: '웹사이트 이탈률(GA4)',
  fieldSent: { label: '발송 수', hint: '사용하는 도구가 해당 발송에 대해 보고한 전체 수입니다.', placeholder: '10,000' },
  fieldHard: { label: '하드 바운스 수', hint: '영구적인 실패입니다. 주소가 존재하지 않습니다.', placeholder: '150' },
  fieldSoft: { label: '소프트 바운스 수', hint: '일시적인 실패입니다. 도구에 반송 수가 하나만 나오면 비워 두십시오.', placeholder: '100' },
  fieldSessions: { label: '세션수', hint: 'Google 애널리틱스 4 보고서의 값입니다.', placeholder: '2,000' },
  fieldEngaged: { label: '참여 세션수', hint: '같은 보고서, 같은 기간의 값입니다.', placeholder: '1,250' },
  tryExamplePrompt: '숫자를 입력하거나 ',
  tryExampleLink: '예시로 계산해 보십시오',
  errorWhole: '소수점이나 문자 없이 정수만 입력하십시오.',
  errorCheck: '숫자를 확인하십시오.',
  emailResults: {
    heading: '이메일 반송률',
    bouncedOfSent: (bounced, sent) => `이메일 ${sent}건 중 ${bounced}건이 반송되었습니다. Mailchimp, Klaviyo, Mailgun은 이 방식으로 계산합니다.`,
    statHard: { label: '하드 바운스율', note: '대부분의 서비스 한도는 하드 바운스만 계산합니다.' },
    statSoft: { label: '소프트 바운스율', note: '메일함이 가득 찬 경우처럼 일시적인 실패입니다.' },
    statDelivered: { label: '전달률', note: (delivered) => `이메일 ${delivered}건이 수신 서버에 수락되었습니다.` },
    deliveredComparison: (pct) => `도구가 발송 수가 아니라 전달된 이메일 수로 나누면, 같은 숫자로 ${pct}가 됩니다. 비교하기 전에 도구의 계산 방식을 확인하십시오.`,
    allUnderLimits: (hardRate) => `하드 바운스율은 ${hardRate}이며, 아래의 모든 서비스 한도보다 낮습니다.`,
    overLimits: (hardRate, providers) => `하드 바운스율은 ${hardRate}이며, ${providers}의 한도와 같거나 그보다 높습니다. 다음 발송 전에 리스트를 정리하십시오.`,
    limitsHeader: '서비스별 한도와 비교',
    countsHard: '하드 바운스만',
    countsAll: '모든 반송',
    atLimit: '한도 도달',
    overLimit: '한도 초과',
    underLimit: '한도 미만',
    tooMany: (n) => `${n}건 초과`,
    leftRoom: (n, counts) => `${counts === 'hard' ? '하드 바운스' : '반송'} ${n}건 더 허용`,
    providerNote: 'Gmail, Yahoo, Microsoft는 반송률 한도를 공개하지 않습니다. 이들의 0.3% 규칙은 스팸 신고에 관한 것이며, 반송과는 관계가 없습니다. Mailchimp도 수치를 공개하지 않습니다.',
    ctaBox: {
      title: '하드 바운스는 대부분 존재하지 않는 주소에서 발생합니다',
      desc: '발송 전에 리스트를 확인하면 이런 주소를 제거할 수 있습니다. 그러면 반송으로 집계되지 않습니다.',
      button: '이메일 리스트 검증하기',
    },
  },
  websiteResults: {
    heading: '웹사이트 이탈률(GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `세션 ${sessions}개 중 ${unengaged}개가 참여 세션이 아니었습니다.`,
    statEngagement: { label: '참여율', note: '참여 세션수 ÷ 세션수입니다. 이탈률은 100%에서 이 값을 뺀 값입니다.' },
    statEngaged: { label: '참여 세션수', note: '10초 넘게 지속되었거나, 주요 이벤트가 있었거나, 페이지 조회가 2회 이상인 세션입니다.' },
  },
}

const tr: BounceRateToolStrings = {
  tabAria: 'Hesaplanacak oran',
  tabEmail: 'E-posta bounce oranı',
  tabWebsite: 'Web sitesi bounce oranı',
  fieldSent: { label: 'Gönderilen e-posta', hint: 'Aracınızın bu gönderim için bildirdiği toplam sayı.', placeholder: '10.000' },
  fieldHard: { label: 'Hard bounce sayısı', hint: 'Kalıcı hata: adres mevcut değil.', placeholder: '150' },
  fieldSoft: { label: 'Soft bounce sayısı', hint: 'Geçici hata. Aracınız tek bir sayı gösteriyorsa boş bırakın.', placeholder: '100' },
  fieldSessions: { label: 'Oturumlar', hint: 'Google Analytics 4 raporunuzdaki sayı.', placeholder: '2.000' },
  fieldEngaged: { label: 'Etkileşimli oturumlar', hint: 'Aynı rapor ve aynı tarih aralığı.', placeholder: '1.250' },
  tryExamplePrompt: 'Sayılarınızı girin veya ',
  tryExampleLink: 'bir örnek deneyin',
  errorWhole: 'Yalnızca tam sayı girin. Ondalık veya harf kullanmayın.',
  errorCheck: 'Sayıları kontrol edin.',
  emailResults: {
    heading: 'E-posta bounce oranı',
    bouncedOfSent: (bounced, sent) => `${sent} e-postanın ${bounced} tanesi geri döndü. Mailchimp, Klaviyo ve Mailgun oranı bu şekilde hesaplar.`,
    statHard: { label: 'Hard bounce oranı', note: 'Sağlayıcı limitlerinin çoğu yalnızca bunları sayar.' },
    statSoft: { label: 'Soft bounce oranı', note: 'Dolu posta kutusu gibi geçici hatalar.' },
    statDelivered: { label: 'Teslim oranı', note: (delivered) => `${delivered} e-posta kabul edildi.` },
    deliveredComparison: (pct) => `Aracınız gönderilen e-postalar yerine teslim edilen e-postalara bölüyorsa, aynı sayılar ${pct} sonucunu verir. Karşılaştırma yapmadan önce aracınızın bu oranı nasıl tanımladığını kontrol edin.`,
    allUnderLimits: (hardRate) => `Hard bounce oranınız ${hardRate}. Bu oran aşağıdaki tüm sağlayıcı limitlerinin altında.`,
    overLimits: (hardRate, providers) => `Hard bounce oranınız ${hardRate}. Bu oran, ${providers} tarafından belirlenen limite eşit veya bu limitin üzerinde. Bir sonraki gönderimden önce listeyi temizleyin.`,
    limitsHeader: 'Sayılarınız ve sağlayıcı limitleri',
    countsHard: 'yalnızca hard bounce',
    countsAll: 'tüm bounce türleri',
    atLimit: 'Limitte',
    overLimit: 'Limitin üstünde',
    underLimit: 'Limitin altında',
    tooMany: (n) => `${n} adet fazla`,
    leftRoom: (n, counts) => `Limite ${n} ${counts === 'hard' ? 'hard bounce' : 'bounce'} kaldı`,
    providerNote: 'Gmail, Yahoo ve Microsoft bir bounce oranı limiti yayımlamaz. Bu sağlayıcıların %0,3 kuralı bounce ile değil, spam şikâyetleriyle ilgilidir. Mailchimp de bir sayı yayımlamaz.',
    ctaBox: {
      title: 'Hard bounce hatalarının çoğu var olmayan adreslerden gelir',
      desc: 'Göndermeden önce listeyi kontrol ederseniz bu adresler listeden çıkar. Böylece bounce oranınıza hiç eklenmezler.',
      button: 'E-posta listesi doğrulayın',
    },
  },
  websiteResults: {
    heading: 'Web sitesi bounce oranı (GA4)',
    sessionsNotEngaged: (unengaged, sessions) => `${sessions} oturumun ${unengaged} tanesi etkileşimli değildi.`,
    statEngagement: { label: 'Etkileşim oranı', note: 'Etkileşimli oturumlar ÷ oturumlar. Bounce oranı, %100 eksi bu orandır.' },
    statEngaged: { label: 'Etkileşimli oturumlar', note: '10 saniyeden uzun süren, önemli bir etkinlik içeren veya 2 ya da daha fazla sayfa görüntülemesi olan oturumlar.' },
  },
}

export const BOUNCE_RATE_TOOL_STRINGS: Record<Locale, BounceRateToolStrings> = {
  en,
  fr,
  es,
  de,
  it,
  'pt-br': ptBr,
  nl,
  pl,
  id,
  ja,
  ko,
  tr,
}

export function bounceRateToolStrings(locale: Locale): BounceRateToolStrings {
  return BOUNCE_RATE_TOOL_STRINGS[locale] ?? en
}
