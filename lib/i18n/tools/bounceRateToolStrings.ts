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
}

export function bounceRateToolStrings(locale: Locale): BounceRateToolStrings {
  return BOUNCE_RATE_TOOL_STRINGS[locale] ?? en
}
