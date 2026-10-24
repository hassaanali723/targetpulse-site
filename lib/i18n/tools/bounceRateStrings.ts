// All page copy for the bounce rate calculator, one object per language the
// page ships in. Routes: app/(en)/bounce-rate-calculator and one per locale,
// listed in CLUSTERS.bounceRate (lib/i18n/clusters.ts).
// The tool's client UI strings are in lib/i18n/tools/bounceRateToolStrings.ts.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface BounceRatePageStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogImage: string
  ogAlt: string
  crumb: string
  appName: string
  featureList: string[]
  h1: string
  heroIntro: string
  howTitle: string
  howSteps: string[]
  howFooter: string
  imageAlt: string
  formulaTitle: string
  formulaIntro: string
  emailFormulaTitle: string
  emailFormulaCode: string
  emailFormulaText: string
  websiteFormulaTitle: string
  websiteFormulaCode: string
  websiteFormulaText: string
  websiteOldText: string
  calcEmailTitle: string
  calcEmailSteps: string[]
  calcEmailIntro: string
  definitionsHead: [string, string]
  definitionsRows: { a: string; b: string; href: string }[]
  calcEmailDiff: string
  calcEmailHardNote: string
  limitsTitle: string
  limitsIntro: string
  limitsHead: [string, string, string]
  limitsRows: { name: string; limit: number; what: string; source: string }[]
  limitsMailchimpNote: string
  limitsMailboxNote: string
  benchmarksTitle: string
  benchmarksParas: string[]
  hardSoftTitle: string
  hardSoftParas: string[]
  softRulesHead: [string, string]
  softRulesRows: { a: string; b: string; href: string }[]
  hardSoftLink: string
  ga4Title: string
  ga4Paras: string[]
  lowerTitle: string
  lowerParas: string[]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  ctaSupporting?: string
  ctaButton?: string
}

const en: BounceRatePageStrings = {
  metaTitle: 'Bounce Rate Calculator for Email and Websites | Giggal.ai',
  ogTitle: 'Bounce Rate Calculator for Email and Websites',
  description:
    'Free bounce rate calculator for email and websites. Get the bounce rate formula, hard and soft bounce rates, provider limits and the GA4 calculation.',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Free Bounce Rate Calculator',
  crumb: 'Bounce Rate Calculator',
  appName: 'Free Bounce Rate Calculator',
  featureList: [
    'Email bounce rate from emails sent and bounces',
    'Separate hard bounce, soft bounce and delivered rates',
    'Compares your numbers with sending provider limits',
    'Website bounce rate from Google Analytics 4 sessions',
    'Shows the bounce rate formula with your numbers',
  ],
  h1: 'Bounce Rate Calculator',
  heroIntro:
    'Work out the bounce rate of an email campaign or a website. Enter the numbers from your email tool or from Google Analytics 4 to see the rate and what it means.',
  howTitle: 'How to use the bounce rate calculator',
  howSteps: [
    'For an email campaign, stay on the Email tab. Enter the emails sent and the hard and soft bounces from your campaign report.',
    'If your tool shows only one bounce number, put it in Hard bounces and leave Soft bounces empty.',
    'Read the result. You get the overall bounce rate, the hard and soft rates, and the delivered rate.',
    'Check the provider list below the result. It shows how close you are to the limits of Amazon SES, HubSpot, Postmark and others.',
    'For a website, switch to the Website tab and enter sessions and engaged sessions from Google Analytics 4.',
  ],
  howFooter:
    'The results update as you type. The formula with your own numbers appears under each result, so you can check the maths or copy it into a report.',
  imageAlt:
    'Illustration of an email bounce rate calculation: bounced emails divided by emails sent, compared with provider limits.',
  formulaTitle: 'The bounce rate formula',
  formulaIntro:
    '“Bounce rate” means two different things. In email, it’s the share of messages that couldn’t be delivered. On a website, it’s the share of visits where the person didn’t engage. So the answer to “how is bounce rate calculated?” depends on which one you mean.',
  emailFormulaTitle: 'Email bounce rate formula',
  emailFormulaCode: 'Bounce rate = bounced emails ÷ emails sent × 100',
  emailFormulaText:
    'Send 10,000 emails and get 250 back, and the bounce rate is 250 ÷ 10,000 × 100 = 2.5%. Bounced emails include both hard bounces (the address doesn’t exist) and soft bounces (a temporary problem, such as a full mailbox).',
  websiteFormulaTitle: 'Website bounce rate formula in GA4',
  websiteFormulaCode: 'Bounce rate = (sessions − engaged sessions) ÷ sessions × 100',
  websiteFormulaText:
    'This is the definition in [Google Analytics 4](https://support.google.com/analytics/answer/12195621): the percentage of sessions that were not engaged. It always equals 100% minus the engagement rate. With 2,000 sessions and 1,250 engaged sessions, the bounce rate is 37.5%.',
  websiteOldText:
    'Older guides give a different bounce rate calculation: single-page sessions ÷ all sessions. That was the [Universal Analytics definition](https://support.google.com/analytics/answer/1009409). Standard Universal Analytics stopped processing data on July 1, 2023, so use the GA4 formula for current reports.',
  calcEmailTitle: 'How to calculate email bounce rate',
  calcEmailSteps: [
    'Open the report for one campaign or one period in your email tool.',
    'Note the number of emails sent, then the hard bounces and soft bounces.',
    'Add the two bounce numbers together.',
    'Divide by the emails sent and multiply by 100.',
  ],
  calcEmailIntro:
    'Most tools divide by emails sent, but not all of them say it the same way. Before you compare your number with someone else’s, check what each tool counts:',
  definitionsHead: ['Tool', 'How it calculates bounce rate'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard plus soft bounces ÷ total emails sent', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Bounced emails ÷ total emails sent', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Undelivered ÷ total sent. Its reports also show a separate hard bounce rate', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Bounced emails ÷ “the total number of recipients the campaign was delivered to”', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Bounces ÷ recipients, with separate hard and soft rates in transactional reports', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Hard bounces only, measured over a representative volume of your mail', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'The difference matters at higher rates. 500 bounces on 10,000 emails is 5% of emails sent, but 5.26% of the 9,500 that were delivered. The calculator shows both.',
  calcEmailHardNote:
    'Also work out the hard bounce rate on its own. Most provider limits count only hard bounces, because soft bounces often clear up on the next try.',
  limitsTitle: 'Email bounce rate limits at sending providers',
  limitsIntro:
    'Sending providers publish bounce rate limits and review or suspend accounts that go over them. These are the numbers they publish:',
  limitsHead: ['Provider', 'Limit', 'What it says'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Account put under review at 5% hard bounce rate; sending suspended at 10%. Targets under 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Account suspended at 10% hard bounce rate over a representative volume of mail.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Campaign sending suspended if hard bounce rate exceeds 2% or soft bounce rate exceeds 5%.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Marketing email sending suspended at 5% bounce rate across an account’s recent sends.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Accounts with bounce rates above 5% receive warnings and may be suspended.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) doesn’t publish a number. It says limits vary and that it warns you before it suspends an account.',
  limitsMailboxNote:
    'Mailbox providers set no bounce limit at all. [Gmail’s sender rules](https://support.google.com/a/answer/81126) and [Yahoo’s](https://senders.yahooinc.com/best-practices/) include a 0.3% limit, but it applies to spam complaints. On bounces, Gmail asks senders to unsubscribe people whose mail bounces repeatedly, and Yahoo asks senders to remove invalid recipients promptly.',
  benchmarksTitle: 'Email bounce rate benchmarks',
  benchmarksParas: [
    'Published averages vary a lot, mostly because each report counts bounces differently. [Twilio SendGrid’s 2023 report](https://www.twilio.com/en-us/resource-center/2023-email-marketing-benchmark-report), based on 2022 data, put the average bounce rate at 1.06% and the median at 0.21%. It counts temporary blocks separately. [GetResponse’s 2024 report](https://www.getresponse.com/resources/reports/email-marketing-benchmarks) gave an overall rate of 2.33%, with a range from 1.19% to 4.86% by industry. It doesn’t split hard and soft bounces.',
    'A benchmark is less useful than your own trend and your provider’s limit. For what counts as good in cold outreach, see [what a good bounce rate for cold email is](/blog/good-bounce-rate-for-cold-email). For a fuller look at the averages, see [email bounce rate benchmarks and how to reduce them](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard bounces and soft bounces',
  hardSoftParas: [
    'A hard bounce is a permanent failure. The receiving server answers with a code starting with 5, such as 5.1.1 for an address that doesn’t exist. [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321) says the sender should not repeat the exact request. A soft bounce is temporary and starts with 4. The sender can try again later.',
    'Tools don’t always agree on the border. [RFC 3463](https://datatracker.ietf.org/doc/html/rfc3463) treats a full mailbox as temporary, but some tools file it under hard bounces. Most tools also turn repeated soft bounces into a hard bounce:',
  ],
  softRulesHead: ['Tool', 'When soft bounces become a hard bounce'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'After 7 soft bounces for an address with no activity, or 15 if the address has past activity', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'After more than 7 soft bounces in a row, counted over the past 2 years', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Retries for 36 hours, then blocks the address after 5 soft bounces in a row from campaigns', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Retries a pending bounce for 72 hours before it counts as a soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'For the codes behind each kind, see [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'How to calculate bounce rate in Google Analytics 4',
  ga4Paras: [
    'GA4 calls a session engaged when it lasts longer than 10 seconds or includes a key event. A session with 2 or more page or screen views counts too. Every other session counts toward the bounce rate. The site owner can change the 10-second timer in the data stream’s tag settings.',
    'Most GA4 reports don’t show bounce rate by default. To add it, open a detail report, choose Customize report, go to Metrics and add Bounce rate. You need the Editor or Administrator role. If you’d rather not edit the report, take sessions and engaged sessions from it and use the Website tab above.',
    'The change from Universal Analytics moved many numbers. A visitor who reads one page for 30 seconds and leaves counted as a bounce before. In GA4 it doesn’t, because the visit lasted longer than 10 seconds.',
    'Be careful with website bounce rate bands you find online, such as “26% to 40% is excellent”. They come from the Universal Analytics era and rarely name a source. GA4 has its own [benchmarking](https://support.google.com/analytics/answer/16388466), which compares your property with a peer group when the setting is turned on.',
  ],
  lowerTitle: 'How to lower your email bounce rate',
  lowerParas: [
    'Hard bounces come from addresses that don’t exist, so the fix is to remove those addresses before you send. Check new sign-ups as they arrive, and check older lists before a campaign, because people change jobs and close accounts.',
    'Remove every address that hard bounces. Yahoo asks senders to remove invalid recipients promptly, Gmail asks them to unsubscribe people whose mail bounces repeatedly, and [Microsoft](https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%e2%80%99s-new-requirements-for-high%e2%80%90volume-senders/4399730) advises removing invalid addresses monthly or quarterly.',
    'Use the [email checker](/email-checker) for a single address, or the [bulk email verifier](/bulk-email-verifier) for a whole list. Both tell you which addresses would bounce, catch-all domains included.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What is the formula for bounce rate?',
      a: 'For email, bounce rate = bounced emails ÷ emails sent × 100. For a website in Google Analytics 4, bounce rate = (sessions − engaged sessions) ÷ sessions × 100. That’s the same as 100% minus the engagement rate.',
    },
    {
      q: 'How do you calculate email bounce rate?',
      a: 'Add the hard and soft bounces from your campaign report, divide by the number of emails sent, and multiply by 100. 250 bounces on 10,000 emails sent is a 2.5% bounce rate.',
    },
    {
      q: 'Is email bounce rate based on sent or delivered emails?',
      a: 'Most tools divide by emails sent. Mailchimp, Klaviyo and Mailgun all document it that way. A few tools word it as a share of recipients, so check your tool’s help page before you compare two numbers.',
    },
    {
      q: 'What is a good email bounce rate?',
      a: 'Below 2% is a safe target. Amazon SES asks senders to stay under 2%, and Brevo can suspend accounts with a hard bounce rate above 2%. In Twilio SendGrid’s 2023 report, the median bounce rate was 0.21%.',
    },
    {
      q: 'Is a 5% email bounce rate bad?',
      a: 'Yes. At a 5% hard bounce rate, Amazon SES puts the account under review and HubSpot can suspend it. Clean the list before you send again.',
    },
    {
      q: 'Does Gmail have a bounce rate limit?',
      a: 'No. Gmail’s sender rules set a spam rate limit of 0.3%, not a bounce limit. They do ask senders to unsubscribe people whose addresses bounce repeatedly. Yahoo and Microsoft also publish no bounce number.',
    },
    {
      q: 'How do you calculate bounce rate in GA4?',
      a: 'Take sessions minus engaged sessions, then divide by sessions. GA4 counts a session as engaged if it lasts longer than 10 seconds or has a key event. Sessions with 2 or more page or screen views count too. Everything else is a bounce.',
    },
    {
      q: 'Why is my GA4 bounce rate different from the old Universal Analytics one?',
      a: 'Universal Analytics counted any single-page session as a bounce. GA4 counts sessions that were not engaged. A 30-second visit to one page was a bounce in Universal Analytics, but it is not a bounce in GA4.',
    },
  ],
  ctaHeadline: 'Bring the bounce rate down before you send',
  ctaSupporting:
    'Giggal checks each address before your campaign goes out, catch-all domains included, so bad addresses never reach your sending tool. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const fr: BounceRatePageStrings = {
  metaTitle: 'Calculateur de taux de rebond email et web (GA4) | Giggal.ai',
  ogTitle: 'Calculateur de taux de rebond email et web (GA4)',
  description:
    'Calculateur de taux de rebond gratuit pour campagnes emailing et sites web. Formule de calcul, taux de hard et soft bounce, seuils de routage et calcul GA4.',
  ogLocale: 'fr_FR',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Calculateur de taux de rebond gratuit',
  crumb: 'Calculateur de taux de rebond',
  appName: 'Calculateur de taux de rebond gratuit',
  featureList: [
    'Calcul du taux de rebond email à partir des envois et des rejets',
    'Distinction entre hard bounce, soft bounce et taux de délivrabilité',
    'Comparaison de vos résultats avec les plafonds des plateformes d’envoi',
    'Calcul du taux de rebond de site web issu des sessions Google Analytics 4',
    'Affichage dynamique de la formule appliquée à vos propres chiffres',
  ],
  h1: 'Calculateur de taux de rebond',
  heroIntro:
    'Calculez le taux de rebond d’une campagne emailing ou d’un site web. Saisissez les données de votre routeur ou de Google Analytics 4 pour comprendre vos indicateurs clés.',
  howTitle: 'Comment utiliser le calculateur de taux de rebond',
  howSteps: [
    'Pour une campagne emailing, restez sur l’onglet Email. Saisissez le nombre d’emails envoyés ainsi que les hard et soft bounces indiqués dans votre rapport.',
    'Si votre outil ne fournit qu’un seul chiffre global de rebonds, indiquez-le dans le champ Hard bounces et laissez Soft bounces vide.',
    'Consultez les résultats : vous obtenez le taux de rebond global, la part de rebonds définitifs et temporaires, ainsi que le taux de messages acceptés.',
    'Vérifiez la liste des plateformes sous les résultats. Elle indique votre position face aux seuils stricts d’Amazon SES, Brevo, HubSpot, etc.',
    'Pour un site internet, basculez sur l’onglet Site web et renseignez les sessions et sessions avec engagement issues de Google Analytics 4.',
  ],
  howFooter:
    'Les résultats se mettent à jour en temps réel lors de la saisie. La formule détaillée avec vos propres chiffres s’affiche sous chaque bloc pour faciliter vos vérifications.',
  imageAlt:
    'Illustration du calcul du taux de rebond email : messages rejetés divisés par les messages envoyés et comparaison aux limites des fournisseurs.',
  formulaTitle: 'La formule du taux de rebond',
  formulaIntro:
    'Le terme « taux de rebond » désigne deux réalités distinctes. En emailing, il mesure la part de messages non délivrés. Sur un site web, il correspond à la proportion de visites sans interaction. Le calcul dépend donc du contexte.',
  emailFormulaTitle: 'Formule du taux de rebond email',
  emailFormulaCode: 'Taux de rebond = e-mails rebondis ÷ e-mails envoyés × 100',
  emailFormulaText:
    'Pour 10 000 emails envoyés et 250 rejets, le calcul donne 250 ÷ 10 000 × 100 = 2,5 %. Les rebonds regroupent à la fois les hard bounces (adresses inexistantes) et les soft bounces (erreurs temporaires, comme une boîte saturée).',
  websiteFormulaTitle: 'Formule du taux de rebond web dans GA4',
  websiteFormulaCode: 'Taux de rebond = (sessions − sessions avec engagement) ÷ sessions × 100',
  websiteFormulaText:
    'C’est la définition officielle de [Google Analytics 4](https://support.google.com/analytics/answer/12195621) : le pourcentage de sessions sans engagement. Il équivaut exactement à 100 % moins le taux d’engagement. Sur 2 000 sessions comptant 1 250 sessions engagées, le taux de rebond est de 37,5 %.',
  websiteOldText:
    'Les anciens guides mentionnaient une formule différente : visites d’une seule page divisées par le total des sessions. C’était la définition d’Universal Analytics, qui a cessé de traiter les données en juillet 2023. Utilisez désormais la formule GA4.',
  calcEmailTitle: 'Comment calculer le taux de rebond d’une campagne email',
  calcEmailSteps: [
    'Ouvrez le rapport de votre campagne ou de votre période d’envoi dans votre outil d’emailing.',
    'Relevez le nombre total d’emails envoyés, puis les chiffres des hard bounces et des soft bounces.',
    'Additionnez ces deux types de rebonds.',
    'Divisez le total obtenu par le nombre d’emails envoyés, puis multipliez par 100.',
  ],
  calcEmailIntro:
    'La majorité des solutions divisent par les emails envoyés, mais certaines terminologies varient. Avant de comparer vos chiffres avec des benchmarks, observez la méthode employée :',
  definitionsHead: ['Outil', 'Méthode de calcul du taux de rebond'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard bounces + soft bounces ÷ total des emails envoyés', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Emails rejetés ÷ total des emails envoyés', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Non délivrés ÷ total envoyé. Indique aussi un taux de hard bounce séparé', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Emails rejetés ÷ total des destinataires auxquels la campagne a été remise', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Rebonds ÷ destinataires, avec séparation hard et soft dans les rapports transactionnels', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Hard bounces uniquement, calculés sur un volume représentatif d’envois', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'L’écart devient significatif sur des taux élevés : 500 rebonds sur 10 000 emails représentent 5 % des envois, mais 5,26 % des 9 500 emails acceptés. Notre calculateur affiche les deux données.',
  calcEmailHardNote:
    'Surveillez particulièrement votre taux de hard bounce isolé : c’est sur lui que reposent les sanctions et suspensions de comptes chez la plupart des routeurs.',
  limitsTitle: 'Plafonds de taux de rebond chez les plateformes d’envoi',
  limitsIntro:
    'Les fournisseurs de messagerie professionnelle et routeurs appliquent des seuils stricts au-delà desquels ils suspendent ou restreignent les comptes :',
  limitsHead: ['Plateforme', 'Seuil', 'Règle appliquée'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Compte placé sous surveillance dès 5 % de hard bounce ; blocage des envois à 10 %. Objectif recommandé : sous 2 %.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Suspension automatique du compte dès 10 % de hard bounce sur un volume représentatif.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Blocage des campagnes marketing si le hard bounce dépasse 2 % ou le soft bounce dépasse 5 %.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Suspension des fonctionnalités d’envoi marketing dès 5 % de rebond sur les campagnes récentes.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Avertissement et risque de suspension en cas de taux supérieur à 5 %.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) ne publie pas de pourcentage public fixe. La plateforme précise que les limites varient selon la réputation et qu’un avertissement est émis avant suspension.',
  limitsMailboxNote:
    'Les fournisseurs de messagerie (Gmail, Yahoo, Microsoft) n’imposent pas de seuil de rebond direct. Leur limite de 0,3 % vise les signalements en spam. Gmail exige toutefois de désabonner les adresses qui rebondissent systématiquement.',
  benchmarksTitle: 'Moyennes et benchmarks du taux de rebond',
  benchmarksParas: [
    'Les moyennes observées varient fortement selon les secteurs. Selon le rapport Twilio SendGrid 2023, le taux de rebond moyen global est de 1,06 % et la médiane de 0,21 %. GetResponse reporte une moyenne de 2,33 % tous secteurs confondus.',
    'Plutôt qu’un benchmark abstrait, surveillez votre propre tendance historique et respectez les seuils de votre routeur. Pour en savoir plus sur les cold emails, consultez [quel est un bon taux de rebond en cold email](/blog/good-bounce-rate-for-cold-email). Pour réduire vos rejets, lisez [comment réduire le taux de rebond](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard bounce et soft bounce : quelles différences ?',
  hardSoftParas: [
    'Un hard bounce correspond à un échec définitif : le serveur de destination renvoie un code SMTP commençant par 5 (comme 5.1.1 pour une adresse inconnue). La RFC 5321 stipule que l’expéditeur ne doit pas retenter l’envoi. Un soft bounce est un échec temporaire commençant par 4 (serveur encombré, boîte pleine).',
    'Certains logiciels convertissent automatiquement les soft bounces répétés en hard bounces après plusieurs échecs consécutifs :',
  ],
  softRulesHead: ['Plateforme', 'Conversion des soft bounces en hard bounce'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Après 7 soft bounces pour une adresse sans historique, ou 15 si elle a déjà été active', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Après 7 soft bounces d’affilée sur une période de 2 ans', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Nouvelles tentatives pendant 36 h, puis blocage définitif après 5 soft bounces d’affilée', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Période de test de 72 h avant comptabilisation définitive en soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Pour approfondir les codes d’erreur SMTP et les diagnostics, consultez notre guide sur [hard bounce et soft bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Calculer et interpréter le taux de rebond dans Google Analytics 4',
  ga4Paras: [
    'Dans GA4, une session est qualifiée d’engagée dès lors qu’elle dure plus de 10 secondes, comprend une conversion (événement clé) ou affiche au moins 2 pages ou écrans. Toute autre session est comptabilisée dans le taux de rebond.',
    'La plupart des rapports GA4 standards n’affichent pas cette métrique par défaut. Vous pouvez l’ajouter en personnalisant vos rapports de détail ou utiliser directement l’onglet Site web de notre calculateur ci-dessus.',
    'Cette transition par rapport à l’ancien Universal Analytics modifie profondément les données : une visite de 30 secondes sur un article de blog n’est plus considérée comme un rebond dans GA4.',
    'Méfiez-vous des fourchettes de taux de rebond trouvées en ligne (ex. « 26 % à 40 % est excellent »). Elles datent d’Universal Analytics et ne reposent sur aucune norme GA4. GA4 propose sa propre fonction de [benchmarking](https://support.google.com/analytics/answer/16388466), qui compare vos données à un groupe de pairs lorsque l’option est activée.',
  ],
  lowerTitle: 'Comment faire baisser votre taux de rebond email',
  lowerParas: [
    'Les hard bounces provenant d’adresses erronées ou désactivées, la solution consiste à assainir vos listes avant chaque campagne. Vérifiez systématiquement les nouveaux contacts lors de leur inscription.',
    'Supprimez immédiatement toute adresse générant un hard bounce pour préserver la délivrabilité de votre domaine d’expédition auprès de Yahoo, Microsoft et Gmail.',
    'Utilisez notre [vérificateur d’email](/email-checker) pour tester une adresse unitaire, ou notre [vérificateur d’email en masse](/bulk-email-verifier) pour nettoyer un fichier complet de prospection.',
  ],
  faqTitle: 'Questions fréquentes sur le taux de rebond',
  faqs: [
    {
      q: 'Quelle est la formule du taux de rebond ?',
      a: 'Pour l’email : taux de rebond = emails rejetés ÷ emails envoyés × 100. Pour un site web sous GA4 : taux de rebond = (sessions − sessions engagées) ÷ sessions × 100, soit 100 % moins le taux d’engagement.',
    },
    {
      q: 'Comment calculer le taux de rebond d’une campagne emailing ?',
      a: 'Additionnez les hard et soft bounces de votre rapport de campagne, divisez par le nombre total d’emails envoyés et multipliez par 100. Par exemple, 250 rebonds pour 10 000 emails envoyés représentent un taux de rebond de 2,5 %.',
    },
    {
      q: 'Le taux de rebond est-il calculé sur les emails envoyés ou délivrés ?',
      a: 'La grande majorité des plateformes (Mailchimp, Klaviyo, Mailgun) divisent par les emails envoyés. Quelques rares solutions calculent sur la base des messages remis. Vérifiez la documentation de votre outil.',
    },
    {
      q: 'Quel est un bon taux de rebond email ?',
      a: 'Un taux inférieur à 2 % est considéré comme sain. Amazon SES et Brevo exigent de rester sous les 2 % sous peine d’avertissement ou de suspension. Selon SendGrid, la médiane globale se situe autour de 0,21 %.',
    },
    {
      q: 'Un taux de rebond email de 5 % est-il dangereux ?',
      a: 'Oui. À 5 % de hard bounce, Amazon SES place votre compte sous surveillance et HubSpot peut suspendre vos envois. Nettoyez immédiatement vos listes avant tout nouvel envoi.',
    },
    {
      q: 'Gmail applique-t-il une limite de taux de rebond ?',
      a: 'Non. Les exigences de Gmail fixent un plafond strict de 0,3 % pour les plaintes de spam, mais pas de limite chiffrée sur les rebonds. Gmail demande en revanche de désinscrire rapidement les adresses qui échouent à répétition.',
    },
    {
      q: 'Comment GA4 calcule-t-il le taux de rebond web ?',
      a: 'GA4 soustrait les sessions avec engagement du total des sessions, puis divise par les sessions. Une session est considérée comme engagée si elle dure plus de 10 secondes, contient une conversion ou compte 2+ pages vues.',
    },
    {
      q: 'Pourquoi mon taux de rebond GA4 diffère-t-il d’Universal Analytics ?',
      a: 'Universal Analytics comptabilisait toute visite d’une seule page comme un rebond. GA4 évalue le temps et l’interaction : une visite de 30 secondes sur une seule page n’est plus un rebond dans GA4.',
    },
  ],
  ctaHeadline: 'Faites chuter votre taux de rebond avant votre prochain envoi',
}

const es: BounceRatePageStrings = {
  metaTitle: 'Calculadora de tasa de rebote para correo y web (GA4) | Giggal.ai',
  ogTitle: 'Calculadora de tasa de rebote para correo y web (GA4)',
  description:
    'Calculadora de tasa de rebote gratuita para campañas de email marketing y sitios web. Fórmula, rebotes duros y suaves, límites de proveedores y cálculo GA4.',
  ogLocale: 'es_ES',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Calculadora de tasa de rebote gratuita',
  crumb: 'Calculadora de tasa de rebote',
  appName: 'Calculadora de tasa de rebote gratis',
  featureList: [
    'Calcula la tasa de rebote de correo a partir de envíos y rebotes totales',
    'Separa rebotes duros (hard), suaves (soft) y porcentaje de entrega',
    'Compara tus métricas con los límites de Amazon SES, Brevo y HubSpot',
    'Calcula la tasa de rebote web a partir de sesiones de Google Analytics 4',
    'Muestra la fórmula detallada con tus propios datos en tiempo real',
  ],
  h1: 'Calculadora de tasa de rebote',
  heroIntro:
    'Calcula la tasa de rebote de una campaña de correo o de un sitio web. Introduce las cifras de tu herramienta de email marketing o de Google Analytics 4 para analizar tus resultados.',
  howTitle: 'Cómo utilizar la calculadora de tasa de rebote',
  howSteps: [
    'Para una campaña de correo, mantente en la pestaña Correo. Introduce los envíos y los rebotes duros y suaves de tu informe.',
    'Si tu herramienta solo indica una cifra global de rebotes, colócala en Rebotes duros y deja Rebotes suaves en blanco.',
    'Consulta los resultados: obtendrás el porcentaje global de rebote, la tasa de rebote duro y suave, y el porcentaje entregado.',
    'Revisa la tabla de proveedores para comprobar tu margen frente a las políticas de Amazon SES, Brevo, HubSpot, etc.',
    'Para un sitio web, cambia a la pestaña Web e introduce las sesiones y sesiones con interacción de Google Analytics 4.',
  ],
  howFooter:
    'Los resultados se calculan automáticamente al escribir. La fórmula matemática con tus propios números aparece bajo cada bloque para incluirla fácilmente en informes.',
  imageAlt:
    'Ilustración del cálculo de la tasa de rebote de correo: correos rebotados divididos entre correos enviados y comparación con límites de plataformas.',
  formulaTitle: 'La fórmula de la tasa de rebote',
  formulaIntro:
    'La expresión «tasa de rebote» tiene dos significados según el entorno. En email marketing mide los mensajes que no pudieron entregarse. En analítica web mide las visitas sin interacción. La respuesta a «cómo se calcula la tasa de rebote» depende del medio que analices.',
  emailFormulaTitle: 'Fórmula de la tasa de rebote de correo',
  emailFormulaCode: 'Tasa de rebote = correos rebotados ÷ correos enviados × 100',
  emailFormulaText:
    'Si envías 10.000 correos y rebotan 250, la tasa de rebote es 250 ÷ 10.000 × 100 = 2,5%. Los rebotes engloban tanto los rebotes duros (cuentas inexistentes) como los rebotes suaves (problemas temporales como un buzón lleno).',
  websiteFormulaTitle: 'Fórmula de la tasa de rebote en Google Analytics 4',
  websiteFormulaCode: 'Tasa de rebote = (sesiones − sesiones con interacción) ÷ sesiones × 100',
  websiteFormulaText:
    'Esta es la definición oficial en [Google Analytics 4](https://support.google.com/analytics/answer/12195621): el porcentaje de sesiones que no registraron interacción. Equivale a 100% menos el porcentaje de interacción. Con 2.000 sesiones y 1.250 sesiones con interacción, la tasa de rebote es del 37,5%.',
  websiteOldText:
    'Las guías antiguas ofrecían otra fórmula: sesiones de una sola página ÷ sesiones totales. Esa era la definición de Universal Analytics, que dejó de procesar datos en julio de 2023. Para tus métricas actuales utiliza la fórmula de GA4.',
  calcEmailTitle: 'Cómo calcular la tasa de rebote de correo',
  calcEmailSteps: [
    'Abre el informe de una campaña o periodo en tu plataforma de email.',
    'Anota los correos enviados, los rebotes duros y los rebotes suaves.',
    'Suma los dos valores de rebote.',
    'Divide el resultado entre los correos enviados y multiplica por 100.',
  ],
  calcEmailIntro:
    'La mayoría de servicios dividen entre correos enviados, aunque algunos redactan la métrica de forma diferente. Antes de comparar estadísticas con otros remitentes, revisa la definición aplicada:',
  definitionsHead: ['Herramienta', 'Cómo calcula la tasa de rebote'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Rebotes duros + rebotes suaves ÷ total de correos enviados', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Correos rebotados ÷ total de correos enviados', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'No entregados ÷ total enviados. Muestra también una tasa de rebote duro separada', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Correos rebotados ÷ total de destinatarios a los que se entregó la campaña', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Rebotes ÷ destinatarios, con tasas duras y suaves diferenciadas en transaccional', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Solo rebotes duros, medidos sobre un volumen representativo de correo', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'La diferencia se nota en listas con rebotes altos: 500 rebotes en 10.000 envíos suponen un 5% de los enviados, pero un 5,26% de los 9.500 efectivamente entregados. Nuestra calculadora te muestra ambos valores.',
  calcEmailHardNote:
    'Vigila siempre la tasa de rebote duro por separado, ya que los límites de las plataformas de envío se basan exclusivamente en ella.',
  limitsTitle: 'Límites de tasa de rebote en plataformas de envío',
  limitsIntro:
    'Los proveedores de infraestructura y software de marketing fijan umbrales estrictos de rebote para proteger su reputación IP:',
  limitsHead: ['Proveedor', 'Límite', 'Condición'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Cuenta en revisión con 5% de rebote duro; envíos suspendidos al 10%. Objetivo recomendado: inferior al 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Suspensión al alcanzar un 10% de rebote duro sobre un volumen significativo.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Campañas suspendidas si los rebotes duros superan el 2% o los suaves el 5%.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Bloqueo de envíos de marketing al superar el 5% de rebote en campañas recientes.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Cuentas con tasas superiores al 5% reciben avisos y pueden ser suspendidas.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) no publica un porcentaje fijo. Establece que los límites dependen del historial y emite avisos previos a una suspensión.',
  limitsMailboxNote:
    'Los buzones de destino (Gmail, Yahoo, Microsoft) no fijan un límite público de rebote. Su umbral del 0,3% aplica a quejas por spam. Gmail exige dar de baja a usuarios cuyos correos reboten reiteradamente.',
  benchmarksTitle: 'Estadísticas y medias de tasa de rebote',
  benchmarksParas: [
    'Las medias de la industria cambian según el sector. Según el informe SendGrid 2023, la tasa media de rebote global se sitúa en 1,06% y la mediana en 0,21%. GetResponse sitúa la media en 2,33%.',
    'Más que una media teórica, lo prioritario es vigilar tu propia tendencia y no rebasar el límite de tu proveedor. Para profundizar en prospección comercial, consulta [cuál es una buena tasa de rebote en cold email](/blog/good-bounce-rate-for-cold-email) y [cómo reducir la tasa de rebote](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Rebotes duros vs. rebotes suaves',
  hardSoftParas: [
    'Un rebote duro (hard bounce) es un error permanente. El servidor responde con un código SMTP que empieza por 5 (como 5.1.1 para buzón inexistente). La norma RFC 5321 estipula que el remitente no debe reintentar el envío. Un rebote suave (soft bounce) es temporal (código 4) y permite reintentos.',
    'La mayoría de aplicaciones convierten los rebotes suaves repetidos en duros tras varios intentos:',
  ],
  softRulesHead: ['Plataforma', 'Conversión de rebote suave en duro'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Tras 7 rebotes suaves en cuentas sin actividad previa, o 15 con historial', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Tras más de 7 rebotes suaves consecutivos en un plazo de 2 años', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Reintentos durante 36 horas, bloqueo tras 5 rebotes suaves seguidos en campañas', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Reintentos durante 72 horas antes de computar como rebote suave', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Para conocer los códigos de error detallados, consulta [diferencias entre rebote duro y rebote suave](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Cómo calcular la tasa de rebote en Google Analytics 4',
  ga4Paras: [
    'En GA4 una sesión cuenta como sesión con interacción si supera los 10 segundos, registra un evento clave (conversión) o visualiza al menos 2 páginas. Todas las demás computan como rebote.',
    'Los informes estándar de GA4 no muestran el porcentaje de rebote de forma predeterminada. Puedes añadirlo en la personalización de métricas o utilizar la pestaña Web de esta calculadora.',
    'Este cambio respecto a Universal Analytics modifica las comparativas: una lectura de 30 segundos de un artículo antes contaba como rebote y en GA4 no.',
    'Tenga cuidado con los rangos de tasa de rebote web que circulan en línea (como «del 26 % al 40 % es excelente»). Provienen de la época de Universal Analytics y rara vez citan fuentes. GA4 cuenta con su propio sistema de [evaluación comparativa (benchmarking)](https://support.google.com/analytics/answer/16388466), que compara su propiedad con pares del sector si activa dicha función.',
  ],
  lowerTitle: 'Cómo reducir la tasa de rebote de tus correos',
  lowerParas: [
    'Los rebotes duros se deben a direcciones inexistentes. La solución definitiva consiste en limpiar las listas antes de cualquier envío.',
    'Elimina de inmediato cualquier contacto que genere un rebote permanente para proteger la entregabilidad de tu dominio ante Yahoo, Microsoft y Gmail.',
    'Utiliza nuestro [validador de correo](/email-checker) para comprobaciones individuales o el [validador masivo de correos](/bulk-email-verifier) para listas de prospección completas.',
  ],
  faqTitle: 'Preguntas frecuentes sobre la tasa de rebote',
  faqs: [
    {
      q: '¿Cuál es la fórmula de la tasa de rebote?',
      a: 'Para correo: tasa de rebote = correos rebotados ÷ correos enviados × 100. Para un sitio web en GA4: tasa de rebote = (sesiones − sesiones con interacción) ÷ sesiones × 100, equivalente a 100% menos el porcentaje de interacción.',
    },
    {
      q: '¿Cómo se calcula la tasa de rebote de correo?',
      a: 'Suma los rebotes duros y suaves del informe de campaña, divide entre el total de envíos y multiplica por 100. Por ejemplo, 250 rebotes en 10.000 envíos equivalen al 2,5%.',
    },
    {
      q: '¿La tasa de rebote se calcula sobre enviados o entregados?',
      a: 'La inmensa mayoría de plataformas (Mailchimp, Klaviyo, Mailgun) dividen entre enviados. Solo unas pocas lo hacen entre recibidos.',
    },
    {
      q: '¿Qué es una buena tasa de rebote en email marketing?',
      a: 'Mantenerse por debajo del 2% es la recomendación estándar. Amazon SES y Brevo exigen estar bajo ese umbral para no penalizar la cuenta.',
    },
    {
      q: '¿Es preocupante una tasa de rebote del 5%?',
      a: 'Sí. Al alcanzar un 5% de rebote duro, Amazon SES somete la cuenta a revisión y HubSpot suspende los envíos. Higieniza tu lista antes de continuar.',
    },
    {
      q: '¿Gmail tiene un límite estricto de rebote?',
      a: 'No. Las normas de remitentes de Gmail aplican un límite del 0,3% a quejas de spam, no a rebotes. Sin embargo, exigen dar de baja a direcciones reincidentes.',
    },
    {
      q: '¿Cómo calcula GA4 la tasa de rebote web?',
      a: 'Resta las sesiones con interacción del total de sesiones y divide entre las sesiones. Se considera interacción si supera 10 segundos, hay conversión o 2+ páginas vistas.',
    },
    {
      q: '¿Por qué la tasa de rebote en GA4 es distinta a la de Universal Analytics?',
      a: 'Universal Analytics consideraba rebote cualquier visita de una sola página. GA4 mide el tiempo y la interacción real.',
    },
  ],
  ctaHeadline: 'Reduce tu tasa de rebote antes de tu próximo envío',
}

const de: BounceRatePageStrings = {
  metaTitle: 'Bounce Rate berechnen für E-Mail und Websites (GA4) | Giggal.ai',
  ogTitle: 'Bounce Rate berechnen für E-Mail und Websites (GA4)',
  description:
    'Kostenloser Rechner für E-Mail- und Website-Bounce-Rates. Bounce-Rate-Formel, Hard und Soft Bounces, Grenzwerte von Versand-Providern und GA4-Berechnung.',
  ogLocale: 'de_DE',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Kostenloser Bounce Rate Rechner',
  crumb: 'Bounce Rate Rechner',
  appName: 'Kostenloser Bounce Rate Rechner',
  featureList: [
    'E-Mail-Bounce-Rate aus gesendeten E-Mails und Rückläufern ermitteln',
    'Trennung in Hard Bounces, Soft Bounces und erfolgreiche Zustellrate',
    'Abgleich mit Richtwerten von Amazon SES, Brevo, HubSpot und SendGrid',
    'Website-Bounce-Rate aus Google Analytics 4 Sitzungen berechnen',
    'Formelanzeige mit Ihren konkreten Zahlen in Echtzeit',
  ],
  h1: 'Bounce Rate Rechner',
  heroIntro:
    'Ermitteln Sie die Bounce Rate einer E-Mail-Kampagne oder Website. Geben Sie die Daten Ihres Newslettersystems oder aus Google Analytics 4 ein, um den genauen Wert zu berechnen.',
  howTitle: 'So nutzen Sie den Bounce Rate Rechner',
  howSteps: [
    'Für eine E-Mail-Kampagne bleiben Sie auf dem Reiter E-Mail. Tragen Sie gesendete E-Mails sowie Hard und Soft Bounces aus Ihrem Bericht ein.',
    'Zeigt Ihr Tool nur eine Gesamtzahl an Bounces, tragen Sie diese bei Hard Bounces ein und lassen Soft Bounces leer.',
    'Lesen Sie das Ergebnis ab: Sie sehen die Gesamt-Bounce-Rate, die Anteile harter und weicher Bounces und die Zustellquote.',
    'Prüfen Sie darunter die Limits der Sendeanbieter wie Amazon SES, Brevo oder HubSpot, um Sperrungen zu vermeiden.',
    'Für eine Website wechseln Sie auf den Reiter Website und geben Sitzungen sowie Sitzungen mit Interaktion aus GA4 ein.',
  ],
  howFooter:
    'Die Berechnung erfolgt direkt während der Eingabe. Unter dem Ergebnis wird die Formel mit Ihren Zahlen aufgeschlüsselt.',
  imageAlt:
    'Darstellung der E-Mail-Bounce-Rate-Berechnung: Abgewiesene E-Mails geteilt durch gesendete E-Mails im Vergleich zu Providergrenzen.',
  formulaTitle: 'Die Formel zur Berechnung der Bounce Rate',
  formulaIntro:
    'Der Begriff „Bounce Rate“ beschreibt zwei unterschiedliche Metriken. Im E-Mail-Marketing ist es der Anteil unzustellbarer Nachrichten. Auf Websites misst er Besucher ohne messbare Interaktion.',
  emailFormulaTitle: 'E-Mail Bounce Rate Formel',
  emailFormulaCode: 'Bounce Rate = abgewiesene E-Mails ÷ gesendete E-Mails × 100',
  emailFormulaText:
    'Bei 10.000 gesendeten E-Mails und 250 Rückläufern lautet die Rechnung 250 ÷ 10.000 × 100 = 2,5 %. Darin sind sowohl Hard Bounces (Adresse existiert nicht) als auch Soft Bounces (Postfach voll) enthalten.',
  websiteFormulaTitle: 'Website Bounce Rate Formel in GA4',
  websiteFormulaCode: 'Bounce Rate = (Sitzungen − Sitzungen mit Interaktion) ÷ Sitzungen × 100',
  websiteFormulaText:
    'Dies ist die Definition in [Google Analytics 4](https://support.google.com/analytics/answer/12195621): Der Prozentsatz der Sitzungen ohne Interaktion. Er entspricht exakt 100 % minus der Interaktionsrate.',
  websiteOldText:
    'Ältere Anleitungen teilten Einzelseitenaufrufe durch Gesamtsitzungen. Dies war die Definition von Universal Analytics, das seit Juli 2023 eingestellt ist. Nutzen Sie für aktuelle Auswertungen die GA4-Formel.',
  calcEmailTitle: 'So berechnen Sie die E-Mail Bounce Rate manuell',
  calcEmailSteps: [
    'Öffnen Sie den Kampagnenbericht in Ihrem Newsletter- oder Versand-Tool.',
    'Notieren Sie die Zahl der gesendeten E-Mails sowie Hard und Soft Bounces.',
    'Addieren Sie die beiden Bounce-Zahlen.',
    'Teilen Sie die Summe durch die gesendeten E-Mails und multiplizieren Sie mit 100.',
  ],
  calcEmailIntro:
    'Die meisten Anbieter teilen durch die gesendeten E-Mails. Vergleichen Sie die Zählweisen der Systeme:',
  definitionsHead: ['Tool', 'Berechnungsmethode'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard plus Soft Bounces ÷ gesendete E-Mails', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Bounces ÷ gesendete E-Mails', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Unzustellbar ÷ gesendet. Weist Hard Bounces separat aus', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Bounces ÷ Empfänger, an die die Kampagne zugestellt wurde', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Bounces ÷ Empfänger, trennt Hard und Soft Bounces in Reports', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Nur Hard Bounces über ein repräsentatives Sendevolumen', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'Bei höheren Quoten macht der Unterschied einiges aus: 500 Bounces bei 10.000 Mails sind 5 % der gesendeten, aber 5,26 % der 9.500 zugestellten E-Mails. Der Rechner weist beides aus.',
  calcEmailHardNote:
    'Achten Sie besonders auf die isolierte Hard-Bounce-Rate, da Sendedienstleister ihre Limits fast ausschließlich darauf beziehen.',
  limitsTitle: 'Grenzwerte von E-Mail-Versandanbietern',
  limitsIntro:
    'Sendeplattformen prüfen Kundenkonten regelmäßig und sperren Accounts, die feste Grenzwerte überschreiten:',
  limitsHead: ['Anbieter', 'Limit', 'Regelung'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Überprüfung bei 5 % Hard Bounces; Kontosperrung bei 10 %. Empfohlenes Ziel: unter 2 %.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Sperrung bei 10 % Hard Bounces über ein repräsentatives Volumen.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Versandstopp, wenn die Hard-Bounce-Rate 2 % oder die Soft-Bounce-Rate 5 % überschreitet.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Marketing-E-Mail-Versand wird bei 5 % Bounce Rate ausgesetzt.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Warnung und mögliche Kontosperrung bei Werten über 5 %.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) nennt keinen starren Prozentsatz. Die Limits hängen von der Domain-Historie ab.',
  limitsMailboxNote:
    'Große Postfachanbieter wie Gmail, Yahoo und Microsoft veröffentlichen keine harten Bouncelimits. Ihre 0,3 %-Grenze bezieht sich auf Spam-Beschwerden.',
  benchmarksTitle: 'Durchschnittswerte und Benchmarks',
  benchmarksParas: [
    'Laut Twilio SendGrid 2023 liegt die weltweite durchschnittliche Bounce Rate bei 1,06 % (Median: 0,21 %). GetResponse nennt 2,33 % über alle Branchen.',
    'Wichtiger als globale Durchschnitte ist die eigene Historie. Details zur Kaltakquise finden Sie unter [gute Bounce Rate bei Cold E-Mails](/blog/good-bounce-rate-for-cold-email) sowie [E-Mail Bounce Rate senken](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard Bounces vs. Soft Bounces',
  hardSoftParas: [
    'Ein Hard Bounce ist ein permanenter Zustellfehler (SMTP-Statuscode 5.x.x, z. B. Adresse nicht vorhanden). Laut RFC 5321 darf die Adresse nicht erneut angeschrieben werden. Ein Soft Bounce ist temporär (Statuscode 4.x.x).',
    'Versandtools stufen wiederholte Soft Bounces nach mehreren Versuchen automatisch als Hard Bounce ein:',
  ],
  softRulesHead: ['Tool', 'Umwandlung Soft Bounce in Hard Bounce'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Nach 7 Soft Bounces bei inaktiven Adressen, nach 15 bei Adressen mit früherer Aktivität', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Nach mehr als 7 aufeinanderfolgenden Soft Bounces innerhalb von 2 Jahren', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Wiederholungsversuche für 36 Std., Blockierung nach 5 Soft Bounces in Folge', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Prüfzeitraum von 72 Stunden vor Einstufung als Soft Bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Einen vollständigen Überblick über SMTP-Fehlercodes bietet unser Leitfaden zu [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Bounce Rate in Google Analytics 4 berechnen',
  ga4Paras: [
    'In GA4 zählt eine Sitzung als interagiert, wenn sie länger als 10 Sekunden dauert, ein Schlüsselereignis (Conversion) enthält oder mindestens 2 Seiten aufgerufen wurden.',
    'Standardberichte zeigen die Kennzahl oft nicht an. Sie kann über die Berichtsverwaltung hinzugefügt werden oder Sie nutzen den Website-Rechner oben.',
    'Im Vergleich zu Universal Analytics sinkt die Absprungrate bei Content-Websites meist deutlich, da ein 30-sekündiges Lesen eines Artikels in GA4 kein Bounce mehr ist.',
    'Vorsicht bei pauschalen Richtwerten im Internet wie „26 % bis 40 % sind hervorragend“. Diese stammen aus der Ära von Universal Analytics. GA4 bietet ein eigenes [Benchmarking](https://support.google.com/analytics/answer/16388466), das Ihre Property mit vergleichbaren Websites vergleicht, sofern die Einstellung aktiviert ist.',
  ],
  lowerTitle: 'So senken Sie Ihre E-Mail Bounce Rate',
  lowerParas: [
    'Bereinigen Sie Ihre E-Mail-Listen vor dem Versand, um ungültige oder gelöschte Adressen rechtzeitig zu entfernen.',
    'Entfernen Sie Hard Bounces sofort aus Ihren Verteilern, um Ihre Absender-Reputation bei Gmail, Yahoo und Microsoft zu schützen.',
    'Nutzen Sie unseren [E-Mail-Prüfer](/email-checker) für Einzeladressen oder die [Massenprüfung](/bulk-email-verifier) für komplette Kontaktlisten.',
  ],
  faqTitle: 'Häufig gestellte Fragen zur Bounce Rate',
  faqs: [
    {
      q: 'Wie lautet die Formel für die Bounce Rate?',
      a: 'Für E-Mails: Bounce Rate = unzustellbare E-Mails ÷ gesendete E-Mails × 100. Für Websites in GA4: (Sitzungen − Sitzungen mit Interaktion) ÷ Sitzungen × 100.',
    },
    {
      q: 'Wie berechnet man die E-Mail Bounce Rate?',
      a: 'Addieren Sie Hard und Soft Bounces aus Ihrem Report, teilen Sie durch die Zahl der gesendeten E-Mails und multiplizieren Sie mit 100.',
    },
    {
      q: 'Wird durch gesendete oder zugestellte E-Mails geteilt?',
      a: 'Die überwiegende Mehrheit der Plattformen wie Mailchimp und Klaviyo teilt durch die gesendeten E-Mails.',
    },
    {
      q: 'Was ist eine gute E-Mail Bounce Rate?',
      a: 'Ein Wert unter 2 % gilt als sicher. Bei Amazon SES und Brevo sollten Sie zwingend unter 2 % bleiben.',
    },
    {
      q: 'Sind 5 % Bounce Rate schädlich?',
      a: 'Ja. Bei 5 % Hard Bounces droht bei Amazon SES und HubSpot eine Kontoprüfung oder Versandsperre.',
    },
    {
      q: 'Gibt es bei Gmail ein Bounce-Limit?',
      a: 'Nein, das 0,3 %-Limit von Gmail gilt für Spam-Beschwerden, nicht für Bounces.',
    },
    {
      q: 'Wie ermittelt GA4 die Website Bounce Rate?',
      a: 'Sitzungen ohne Interaktion geteilt durch Gesamtsitzungen. Interaktion bedeutet: > 10 Sekunden, 2+ Seitenaufrufe oder Conversion.',
    },
    {
      q: 'Warum weicht die GA4-Rate von Universal Analytics ab?',
      a: 'Universal Analytics zählte jeden Einzelseitenaufruf als Bounce. GA4 berücksichtigt die tatsächliche Verweildauer.',
    },
  ],
  ctaHeadline: 'Senken Sie Ihre Bounce Rate vor der nächsten Kampagne',
}

const it: BounceRatePageStrings = {
  metaTitle: 'Calcolo tasso di rimbalzo per email e siti web (GA4) | Giggal.ai',
  ogTitle: 'Calcolo tasso di rimbalzo per email e siti web (GA4)',
  description:
    'Calcolatore gratuito del tasso di rimbalzo per email e siti web. Formula di calcolo, hard e soft bounce, limiti dei provider e calcolo GA4.',
  ogLocale: 'it_IT',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Calcolatore tasso di rimbalzo gratuito',
  crumb: 'Calcolatore tasso di rimbalzo',
  appName: 'Calcolatore tasso di rimbalzo gratis',
  featureList: [
    'Calcolo del tasso di rimbalzo email da invii e messaggi respinti',
    'Separazione tra hard bounce, soft bounce e tasso di consegna',
    'Confronto diretto con le soglie di blocco di Amazon SES, Brevo e HubSpot',
    'Calcolo del tasso di rimbalzo web basato sulle sessioni di Google Analytics 4',
    'Visualizzazione interattiva della formula applicata ai tuoi dati',
  ],
  h1: 'Calcolo tasso di rimbalzo',
  heroIntro:
    'Calcola il tasso di rimbalzo di una campagna email o di un sito web. Inserisci i dati della tua piattaforma di invio o di Google Analytics 4 per analizzare la qualità della tua deliverability.',
  howTitle: 'Come utilizzare il calcolatore di tasso di rimbalzo',
  howSteps: [
    'Per una campagna email, seleziona la scheda Email. Inserisci il numero di email inviate e i rimbalzi duri (hard) e morbidi (soft).',
    'Se il tuo strumento fornisce un solo dato complessivo, inseriscilo in Hard bounce e lascia Soft bounce vuoto.',
    'Analizza i risultati: visualizzi il tasso di rimbalzo complessivo, le percentuali separate e il tasso di consegna effettiva.',
    'Verifica la tabella sottostante per controllare il margine rispetto alle soglie di Amazon SES, HubSpot e altri provider.',
    'Per un sito web, passa alla scheda Sito web e inserisci le sessioni e le sessioni con coinvolgimento da GA4.',
  ],
  howFooter:
    'I valori vengono elaborati in tempo reale durante la digitazione. La formula matematica dettagliata compare sotto ogni risultato.',
  imageAlt:
    'Illustrazione del calcolo del tasso di rimbalzo email: messaggi respinti divisi per email inviate e confronto con i limiti dei provider.',
  formulaTitle: 'La formula del tasso di rimbalzo',
  formulaIntro:
    'Il termine «tasso di rimbalzo» (o bounce rate) ha due significati differenti. Nell’email marketing indica i messaggi che non hanno raggiunto la casella di posta. Nel web analytics indica le visite prive di interazione. Il calcolo cambia a seconda del contesto.',
  emailFormulaTitle: 'Formula del tasso di rimbalzo email',
  emailFormulaCode: 'Tasso di rimbalzo = email rimbalzate ÷ email inviate × 100',
  emailFormulaText:
    'Inviando 10.000 email con 250 rimbalzi, la formula è 250 ÷ 10.000 × 100 = 2,5%. I rimbalzi includono sia gli hard bounce (indirizzi inesistenti) che i soft bounce (problemi temporanei come casella piena).',
  websiteFormulaTitle: 'Formula del tasso di rimbalzo in Google Analytics 4',
  websiteFormulaCode: 'Tasso di rimbalzo = (sessioni − sessioni con interazione) ÷ sessioni × 100',
  websiteFormulaText:
    'Questa è la definizione in [Google Analytics 4](https://support.google.com/analytics/answer/12195621): la percentuale di sessioni prive di coinvolgimento. È esattamente pari al 100% meno il tasso di coinvolgimento.',
  websiteOldText:
    'Le guide storiche dividevano le visite di una sola pagina per il totale delle sessioni (Universal Analytics). Poiché Universal Analytics è dismesso dal luglio 2023, per i report attuali si impiega la definizione GA4.',
  calcEmailTitle: 'Come calcolare il tasso di rimbalzo di una campagna email',
  calcEmailSteps: [
    'Apri il report della campagna nella tua piattaforma di email marketing.',
    'Prendi nota del numero di email inviate, degli hard bounce e dei soft bounce.',
    'Somma i due valori di rimbalzo.',
    'Dividi la somma per le email inviate e moltiplica per 100.',
  ],
  calcEmailIntro:
    'La quasi totalità dei software divide per le email inviate. Ecco le definizioni documentate dai principali operatori:',
  definitionsHead: ['Piattaforma', 'Metodo di calcolo del rimbalzo'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard più soft bounce ÷ totale email inviate', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Email rimbalzate ÷ totale email inviate', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Non consegnate ÷ totale inviate. Mostra un tasso hard bounce separato', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Email rimbalzate ÷ totale destinatari a cui è stata consegnata', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Rimbalzi ÷ destinatari, con percentuali distinte nei report transazionali', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Solo hard bounce, calcolati su un volume di invio rappresentativo', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'La distinzione è rilevante: 500 rimbalzi su 10.000 invii sono il 5% delle email inviate, ma il 5,26% delle 9.500 accettate dal server. Il nostro calcolatore mostra entrambi i dati.',
  calcEmailHardNote:
    'Monitora attentamente l’hard bounce rate isolato, poiché i limiti operativi dei provider fanno riferimento quasi esclusivamente a questo indicatore.',
  limitsTitle: 'Limiti di tasso di rimbalzo delle piattaforme di invio',
  limitsIntro:
    'I provider di invio applicano soglie stringenti e possono sospendere gli account che superano tali limiti:',
  limitsHead: ['Provider', 'Soglia', 'Regolamento'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Account sotto revisione al 5% di hard bounce; sospensione al 10%. Soglia consigliata: sotto il 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Sospensione dell’invio al raggiungimento del 10% di hard bounce.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Campagne bloccate se il tasso di hard bounce supera il 2% o il soft bounce il 5%.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Invio email marketing sospeso con un tasso di rimbalzo pari o superiore al 5%.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Account con rimbalzi oltre il 5% ricevono avvertimenti formali con rischio blocco.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) non indica una percentuale fissa pubblica. Applica parametri dinamici in base allo storico del mittente.',
  limitsMailboxNote:
    'I provider di posta (Gmail, Yahoo, Microsoft) non impongono una percentuale pubblica sui bounce. La loro regola dello 0,3% riguarda le segnalazioni spam.',
  benchmarksTitle: 'Benchmark medi di mercato del tasso di rimbalzo',
  benchmarksParas: [
    'I valori medi cambiano sensibilmente per settore. Il report Twilio SendGrid 2023 indica un bounce rate medio globale dell’1,06% (mediana 0,21%). GetResponse stima una media aggregata del 2,33%.',
    'Più che alle medie generali, fai riferimento alla tua cronologia e alle regole del tuo provider. Approfondisci [qual è un tasso di rimbalzo accettabile nel cold email](/blog/good-bounce-rate-for-cold-email) e [come ridurre il tasso di rimbalzo](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard bounce e soft bounce: differenze tecniche',
  hardSoftParas: [
    'Un hard bounce è un errore permanente: il server di ricezione restituisce un codice SMTP che inizia con 5 (es. 5.1.1 casella inesistente). La RFC 5321 impone di non ritentare l’invio. Un soft bounce è un problema provvisorio (codice 4) che ammette nuovi tentativi.',
    'I software tendono a convertire i soft bounce reiterati in hard bounce definitivi:',
  ],
  softRulesHead: ['Piattaforma', 'Conversione dei soft bounce in hard bounce'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Dopo 7 soft bounce per indirizzi inattivi, o 15 se l’indirizzo ha storico positivo', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Dopo oltre 7 soft bounce consecutivi calcolati nell’arco di 2 anni', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Tentativi per 36 ore, poi blocco dell’indirizzo dopo 5 soft bounce consecutivi', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Tentativi automatici per 72 ore prima del conteggio definitivo in soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Per una panoramica esaustiva dei codici SMTP, leggi la guida su [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Calcolare il tasso di rimbalzo in Google Analytics 4',
  ga4Paras: [
    'In GA4 una sessione è considerata con coinvolgimento se dura più di 10 secondi, registra un evento chiave di conversione o include almeno 2 pagine viste.',
    'Nei report standard di GA4 la metrica non è visibile di default. È possibile attivarla nelle metriche personalizzate oppure utilizzare direttamente la scheda Web del nostro calcolatore.',
    'Il passaggio da Universal Analytics ha ridotto la metrica per molti siti web editoriali: un utente che legge con attenzione un articolo per 30 secondi non è più considerato un rimbalzo.',
    'Attenzione alle fasce di tasso di rimbalzo che si trovano online, come «dal 26% al 40% è eccellente». Risalgono all’era di Universal Analytics e raramente citano fonti attendibili. GA4 include una propria funzione di [benchmarking](https://support.google.com/analytics/answer/16388466), che confronta la tua proprietà con siti comparabili se l’opzione è abilitata.',
  ],
  lowerTitle: 'Come abbattere il tasso di rimbalzo delle tue email',
  lowerParas: [
    'Gli hard bounce dipendono da indirizzi errati o disattivati. La soluzione preventiva consiste nella verifica delle liste prima di qualsiasi spedizione.',
    'Rimuovi con tempestività ogni indirizzo che genera un errore permanente per preservare la deliverability del tuo dominio verso Gmail, Yahoo e Outlook.',
    'Usa il nostro [verifica email](/email-checker) per controlli su singoli contatti, oppure il [verifica email in blocco](/bulk-email-verifier) per pulire liste complete.',
  ],
  faqTitle: 'Domande frequenti sul tasso di rimbalzo',
  faqs: [
    {
      q: 'Qual è la formula del tasso di rimbalzo?',
      a: 'Per le email: tasso di rimbalzo = email rimbalzate ÷ email inviate × 100. Per i siti web in GA4: (sessioni − sessioni con coinvolgimento) ÷ sessioni × 100.',
    },
    {
      q: 'Come si calcola il tasso di rimbalzo di una campagna email?',
      a: 'Somma gli hard e soft bounce del report, dividi per il totale delle email inviate e moltiplica per 100. 250 rimbalzi su 10.000 invii corrispondono al 2,5%.',
    },
    {
      q: 'Il calcolo si fa sulle email inviate o consegnate?',
      a: 'La grande maggioranza delle piattaforme (Mailchimp, Klaviyo, Mailgun) divide per le email inviate.',
    },
    {
      q: 'Qual è un buon tasso di rimbalzo per le email?',
      a: 'Un valore inferiore al 2% è considerato ottimale e sicuro per preservare la reputazione IP.',
    },
    {
      q: 'Un tasso di rimbalzo del 5% è pericoloso?',
      a: 'Sì. Al 5% di hard bounce, Amazon SES avvia una revisione dell’account e HubSpot può bloccare gli invii.',
    },
    {
      q: 'Gmail ha una soglia massima di rimbalzo?',
      a: 'No. Il limite dello 0,3% di Gmail riguarda le segnalazioni di spam, non i rimbalzi tecnici.',
    },
    {
      q: 'Come calcola GA4 il tasso di rimbalzo web?',
      a: 'Sottrae le sessioni con coinvolgimento dal totale e divide per le sessioni complessive.',
    },
    {
      q: 'Perché il dato di GA4 è diverso da Universal Analytics?',
      a: 'Universal Analytics considerava rimbalzo qualsiasi visita su una sola pagina. GA4 misura la reale interazione e il tempo trascorso.',
    },
  ],
  ctaHeadline: 'Riduci il tasso di rimbalzo prima del prossimo invio',
}

const ptBr: BounceRatePageStrings = {
  metaTitle: 'Calculadora de taxa de bounce de e-mail e rejeição web | Giggal.ai',
  ogTitle: 'Calculadora de taxa de bounce de e-mail e rejeição web',
  description:
    'Calculadora gratuita de taxa de bounce para campanhas de e-mail e taxa de rejeição no GA4. Fórmulas, hard e soft bounces e limites de provedores.',
  ogLocale: 'pt_BR',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Calculadora de taxa de bounce gratuita',
  crumb: 'Calculadora de taxa de bounce',
  appName: 'Calculadora de taxa de bounce grátis',
  featureList: [
    'Calcula a taxa de bounce a partir de envios e mensagens rejeitadas',
    'Separa hard bounce, soft bounce e percentual de entrega',
    'Compara suas métricas com as regras de Amazon SES, Brevo e HubSpot',
    'Calcula a taxa de rejeição do site no Google Analytics 4',
    'Exibe a fórmula com seus próprios dados atualizada em tempo real',
  ],
  h1: 'Calculadora de taxa de bounce',
  heroIntro:
    'Calcule a taxa de bounce de uma campanha de e-mail ou a taxa de rejeição de um site. Insira os dados da sua ferramenta ou do Google Analytics 4 para avaliar suas métricas.',
  howTitle: 'Como usar a calculadora de taxa de bounce',
  howSteps: [
    'Para disparos de e-mail, fique na aba E-mail. Insira o total de envios e os hard e soft bounces do relatório.',
    'Se a sua plataforma exibe apenas uma métrica unificada de bounce, insira-a em Hard bounces e deixe Soft bounces vazio.',
    'Veja o resultado: taxa geral de bounce, índices separados de hard e soft bounce e taxa de entrega.',
    'Analise a tabela de limites de provedores abaixo para garantir que sua conta não corra risco de bloqueio.',
    'Para sites, vá para a aba Site e insira as sessões e sessões com engajamento do GA4.',
  ],
  howFooter:
    'Os resultados são calculados instantaneamente. A fórmula com os seus próprios valores é exibida sob cada resultado.',
  imageAlt:
    'Ilustração do cálculo da taxa de bounce de e-mail: e-mails rejeitados divididos por e-mails enviados e comparação com limites.',
  formulaTitle: 'A fórmula da taxa de bounce',
  formulaIntro:
    'O termo «taxa de bounce» tem dois significados. Em e-mail marketing mede as mensagens que não foram entregues. Na web (taxa de rejeição) mede visitas sem interação.',
  emailFormulaTitle: 'Fórmula da taxa de bounce de e-mail',
  emailFormulaCode: 'Taxa de bounce = e-mails rejeitados ÷ e-mails enviados × 100',
  emailFormulaText:
    'Ao enviar 10.000 e-mails com 250 rejeições, a conta é 250 ÷ 10.000 × 100 = 2,5%. Os bounces incluem tanto hard bounces (e-mail inexistente) quanto soft bounces (caixa cheia).',
  websiteFormulaTitle: 'Fórmula da taxa de rejeição no GA4',
  websiteFormulaCode: 'Taxa de bounce = (sessões − sessões engajadas) ÷ sessões × 100',
  websiteFormulaText:
    'Esta é a definição no [Google Analytics 4](https://support.google.com/analytics/answer/12195621): porcentagem de sessões sem engajamento (100% menos a taxa de engajamento). Com 2.000 sessões e 1.250 com engajamento, a rejeição é de 37,5%.',
  websiteOldText:
    'Guias antigos calculavam visitas de uma página só divididas por sessões (Universal Analytics). O UA foi desativado em 2023, portanto utilize a fórmula do GA4 para análises atuais.',
  calcEmailTitle: 'Como calcular a taxa de bounce de e-mail',
  calcEmailSteps: [
    'Abra o relatório do disparo na sua ferramenta de e-mail marketing.',
    'Anote o número de envios, hard bounces e soft bounces.',
    'Some os dois tipos de bounce.',
    'Divida o total pelos e-mails enviados e multiplique por 100.',
  ],
  calcEmailIntro:
    'A maioria das ferramentas divide pelos e-mails enviados. Veja como cada uma documenta o cálculo:',
  definitionsHead: ['Ferramenta', 'Como calcula a taxa de bounce'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard mais soft bounces ÷ total de e-mails enviados', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'E-mails que sofreram bounce ÷ total de envios', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Não entregues ÷ total enviado. Mostra taxa de hard bounce separada', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Bounces ÷ destinatários para os quais a campanha foi entregue', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Bounces ÷ destinatários, separando hard e soft em relatórios', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Apenas hard bounces sobre um volume representativo de disparos', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'Essa diferença é importante em listas volumosas: 500 bounces em 10.000 envios representam 5% dos enviados, mas 5,26% dos 9.500 entregues. Nossa ferramenta mostra ambos.',
  calcEmailHardNote:
    'Acompanhe com atenção a taxa de hard bounce isolada, pois é ela que determina restrições nas contas de disparo.',
  limitsTitle: 'Limites de taxa de bounce nas plataformas de envio',
  limitsIntro:
    'Os servidores de envio monitoram os envios e podem suspender contas que ultrapassam seus limites:',
  limitsHead: ['Provedor', 'Limite', 'Regra'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Conta sob revisão com 5% de hard bounce; suspensão com 10%. Meta ideal: abaixo de 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Suspensão da conta ao atingir 10% de hard bounce sobre um volume representativo.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Envios de campanhas suspensos se o hard bounce passar de 2% ou o soft bounce de 5%.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Disparos de marketing suspensos com 5% de bounce em envios recentes.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Contas com taxas superiores a 5% recebem avisos e podem ser bloqueadas.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) não estipula um percentual fixo público. Os limites variam conforme o histórico do remetente.',
  limitsMailboxNote:
    'Provedores de caixas de entrada (Gmail, Yahoo, Microsoft) não divulgam limite de bounce. O teto de 0,3% aplica-se a reclamações de spam.',
  benchmarksTitle: 'Médias e benchmarks de taxa de bounce',
  benchmarksParas: [
    'As médias do mercado variam conforme o segmento. O relatório Twilio SendGrid 2023 apontou média global de 1,06% (mediana de 0,21%). A GetResponse registra média agregada de 2,33%.',
    'Mais importante que a média geral é manter sua própria lista saudável. Veja detalhes em [taxa de bounce ideal no cold email](/blog/good-bounce-rate-for-cold-email) e [como reduzir a taxa de bounce](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard bounces e soft bounces',
  hardSoftParas: [
    'O hard bounce é um erro definitivo: o servidor de destino retorna código SMTP iniciado em 5 (como 5.1.1 para e-mail inexistente). A RFC 5321 orienta a não repetir o envio. Já o soft bounce é temporário (código 4) e admite reenvio.',
    'As plataformas costumam converter soft bounces frequentes em hard bounce permanente:',
  ],
  softRulesHead: ['Ferramenta', 'Quando soft bounces viram hard bounce'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Após 7 soft bounces sem atividade anterior, ou 15 com histórico', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Após mais de 7 soft bounces seguidos em um período de 2 anos', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Reenvia por 36 horas; bloqueia após 5 soft bounces consecutivos em campanhas', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Testa por 72 horas antes de computar como soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Para entender todos os códigos de erro, consulte o guia sobre [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Como calcular a taxa de rejeição no Google Analytics 4',
  ga4Paras: [
    'No GA4 uma sessão é engajada se durar mais de 10 segundos, tiver uma conversão ou registrar 2 ou mais páginas vistas. Todas as outras contam para a taxa de rejeição.',
    'Relatórios padrão do GA4 geralmente ocultam a métrica. Você pode personalizá-los ou utilizar diretamente a aba Site desta calculadora.',
    'Essa alteração em relação ao Universal Analytics diminuiu a rejeição em sites com conteúdo longo: ler uma página por 30 segundos não é mais rejeição no GA4.',
    'Tenha cuidado com faixas de taxa de rejeição encontradas na internet, como «26% a 40% é excelente». Elas vêm da era do Universal Analytics e raramente citam fontes. O GA4 possui seu próprio recurso de [benchmarking](https://support.google.com/analytics/answer/16388466), que compara sua propriedade com um grupo de pares quando ativado.',
  ],
  lowerTitle: 'Como reduzir a taxa de bounce dos seus e-mails',
  lowerParas: [
    'Hard bounces ocorrem por e-mails inválidos. A solução definitiva é higienizar a base antes de disparar qualquer campanha.',
    'Exclua prontamente os e-mails com erro permanente para proteger a reputação do seu domínio junto a Gmail, Yahoo e Outlook.',
    'Use nosso [verificador de e-mail](/email-checker) para checagens individuais ou o [validador em massa](/bulk-email-verifier) para listas de prospecção completas.',
  ],
  faqTitle: 'Perguntas frequentes sobre taxa de bounce',
  faqs: [
    {
      q: 'Qual é a fórmula da taxa de bounce?',
      a: 'Para e-mail: e-mails com bounce ÷ e-mails enviados × 100. Para sites no GA4: (sessões − sessões com engajamento) ÷ sessões × 100.',
    },
    {
      q: 'Como calcular a taxa de bounce de e-mail?',
      a: 'Some os hard e soft bounces do relatório, divida pelo total de envios e multiplique por 100. 250 bounces em 10.000 envios resultam em 2,5%.',
    },
    {
      q: 'O cálculo é feito sobre enviados ou entregues?',
      a: 'A maior parte dos sistemas divide pelo número de enviados (Mailchimp, Klaviyo, Mailgun).',
    },
    {
      q: 'Qual é uma boa taxa de bounce para e-mails?',
      a: 'Manter-se abaixo de 2% é o padrão seguro do mercado para evitar punições em provedores.',
    },
    {
      q: 'Uma taxa de bounce de 5% é prejudicial?',
      a: 'Sim. Com 5% de hard bounce, o Amazon SES audita a conta e a HubSpot bloqueia os disparos. Limpe sua lista.',
    },
    {
      q: 'O Gmail tem um limite para bounces?',
      a: 'Não. O teto de 0,3% do Gmail é para reclamações de spam, não para bounces técnicos.',
    },
    {
      q: 'Como o GA4 calcula a taxa de rejeição?',
      a: 'Sessões sem engajamento divididas pelo total de sessões. Engajamento exige mais de 10s, conversão ou 2+ páginas.',
    },
    {
      q: 'Por que o GA4 tem resultados diferentes do Universal Analytics?',
      a: 'O Universal Analytics considerava rejeição qualquer sessão de página única, sem medir o tempo de permanência.',
    },
  ],
  ctaHeadline: 'Reduza sua taxa de bounce antes do próximo disparo',
}

const nl: BounceRatePageStrings = {
  metaTitle: 'Bouncepercentage berekenen voor e-mail en websites (GA4) | Giggal.ai',
  ogTitle: 'Bouncepercentage berekenen voor e-mail en websites (GA4)',
  description:
    'Gratis calculator voor e-mail bouncepercentage en website bouncerate. Berekening, hard en soft bounces, providerlimieten en GA4-formule.',
  ogLocale: 'nl_NL',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Gratis bouncepercentage calculator',
  crumb: 'Bouncepercentage calculator',
  appName: 'Gratis bouncepercentage calculator',
  featureList: [
    'Bereken het bouncepercentage op basis van verzonden en geweigerde e-mails',
    'Onderscheid tussen hard bounces, soft bounces en afleverpercentages',
    'Toetst je cijfers direct aan de limieten van Amazon SES, Brevo en HubSpot',
    'Berekent het website bouncepercentage volgens Google Analytics 4',
    'Toont de bijbehorende formule met jouw eigen cijfers in realtime',
  ],
  h1: 'Bouncepercentage berekenen',
  heroIntro:
    'Bereken het bouncepercentage van een e-mailcampagne of website. Voer de cijfers uit je e-mailprogramma of Google Analytics 4 in om inzicht te krijgen in je afleverkwaliteit.',
  howTitle: 'Hoe gebruik je de bouncepercentage calculator',
  howSteps: [
    'Blijf voor een e-mailcampagne op het tabblad E-mail. Vul het aantal verzonden e-mails en de hard en soft bounces in.',
    'Toont je tool slechts één totaalgetal aan bounces? Vul dit dan in bij Hard bounces en laat Soft bounces leeg.',
    'Bekijk de resultaten: je ziet het totale bouncepercentage, de uitsplitsing en het afleverpercentage.',
    'Bekijk het provideroverzicht om te zien of je binnen de veilige grenzen van Amazon SES, Brevo en HubSpot blijft.',
    'Kies voor een website het tabblad Website en vul het aantal sessies en sessies met engagement uit GA4 in.',
  ],
  howFooter:
    'De resultaten worden direct bijgewerkt tijdens het typen. De formule met jouw cijfers verschijnt onder het resultaat.',
  imageAlt:
    'Illustratie van de berekening van het e-mail bouncepercentage: geweigerde e-mails gedeeld door verzonden e-mails vergeleken met limieten.',
  formulaTitle: 'De formule voor het bouncepercentage',
  formulaIntro:
    'De term „bouncepercentage” heeft twee betekenissen. Bij e-mail marketing is het het aandeel onbestelbare berichten. Bij websites (GA4) meet het bezoeken zonder interactie.',
  emailFormulaTitle: 'Formule voor e-mail bouncepercentage',
  emailFormulaCode: 'Bouncepercentage = gebouncete e-mails ÷ verzonden e-mails × 100',
  emailFormulaText:
    'Bij 10.000 verzonden e-mails en 250 bounces is de berekening: 250 ÷ 10.000 × 100 = 2,5%. Dit omvat zowel hard bounces (adres bestaat niet) als soft bounces (tijdelijk probleem, zoals een volle mailbox).',
  websiteFormulaTitle: 'Website bouncepercentage formule in GA4',
  websiteFormulaCode: 'Bouncepercentage = (sessies − sessies met engagement) ÷ sessies × 100',
  websiteFormulaText:
    'Dit is de officiële definitie in [Google Analytics 4](https://support.google.com/analytics/answer/12195621): het percentage sessies zonder engagement (100% minus het engagementpercentage). Bij 2.000 sessies en 1.250 met engagement is het bouncepercentage 37,5%.',
  websiteOldText:
    'Oudere handleidingen deelden bezoeken van één pagina door totale sessies (Universal Analytics). Sinds juli 2023 is UA vervangen door GA4.',
  calcEmailTitle: 'Hoe bereken je het e-mail bouncepercentage',
  calcEmailSteps: [
    'Open het campagnerapport in je e-mailmarketingprogramma.',
    'Noteer het aantal verzonden e-mails, hard bounces en soft bounces.',
    'Tel de twee soorten bounces bij elkaar op.',
    'Deel door het aantal verzonden e-mails en vermenigvuldig met 100.',
  ],
  calcEmailIntro:
    'Vrijwel alle platforms delen door verzonden e-mails. Vergelijk hier de gehanteerde definities:',
  definitionsHead: ['Tool', 'Berekeningsmethode'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard plus soft bounces ÷ totaal verzonden e-mails', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Gebouncete e-mails ÷ totaal verzonden e-mails', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Niet afgeleverd ÷ totaal verzonden. Toont hard bounce apart', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Bounces ÷ ontvangers waaraan de campagne is geleverd', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Bounces ÷ ontvangers, met hard en soft splitsing in rapporten', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Alleen hard bounces over een representatief verzendvolume', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'Bij hogere percentages is het verschil aanzienlijk: 500 bounces op 10.000 e-mails is 5% van de verzendingen, maar 5,26% van de 9.500 afgeleverde mails. Onze calculator toont beide cijfers.',
  calcEmailHardNote:
    'Let vooral op het hard bouncepercentage, omdat verzendproviders hun sancties en limieten vrijwel uitsluitend hierop baseren.',
  limitsTitle: 'Bouncepercentage limieten bij e-mailproviders',
  limitsIntro:
    'Verzendproviders bewaken de kwaliteit streng en schorten accounts op die boven vaste drempels uitkomen:',
  limitsHead: ['Provider', 'Limiet', 'Beleid'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Account onder toezicht bij 5% hard bounce; opschorting bij 10%. Streefwaarde: onder 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Opschorting bij 10% hard bounce over een representatief verzendvolume.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Campagnes geblokkeerd als de hard bounce 2% of soft bounce 5% overschrijdt.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Verzending van marketing e-mails geblokkeerd bij 5% bouncepercentage.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Accounts met een bouncepercentage boven 5% ontvangen waarschuwingen en riskeren blokkade.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) publiceert geen vast percentage. Drempelwaarden variëren per verzendhistorie.',
  limitsMailboxNote:
    'Inboxproviders zoals Gmail, Yahoo en Microsoft hanteren geen publieke bouncelimiet. Hun 0,3% norm geldt voor spamklachten.',
  benchmarksTitle: 'Gemiddelden en benchmarks voor bouncepercentages',
  benchmarksParas: [
    'Volgens Twilio SendGrid (2023) is het wereldwijde gemiddelde bouncepercentage 1,06% (mediaan 0,21%). GetResponse rapporteert een gemiddelde van 2,33%.',
    'Belangrijker dan benchmarks is je eigen historische trend. Lees voor koude acquisitie [wat een goed bouncepercentage is voor cold e-mail](/blog/good-bounce-rate-for-cold-email) en bekijk [hoe je het bouncepercentage verlaagt](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard bounces versus soft bounces',
  hardSoftParas: [
    'Een hard bounce is een permanente afleverfout (SMTP-code 5.x.x, zoals een onbekend adres). Volgens RFC 5321 mag de verzender het verzoek niet herhalen. Een soft bounce is tijdelijk (code 4.x.x).',
    'De meeste programma’s zetten herhaalde soft bounces na verloop van tijd automatisch om in een hard bounce:',
  ],
  softRulesHead: ['Tool', 'Wanneer soft bounce een hard bounce wordt'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Na 7 soft bounces zonder eerdere activiteit, of 15 bij eerdere activiteit', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Na meer dan 7 opeenvolgende soft bounces binnen 2 jaar', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Herhaalt gedurende 36 uur, blokkeert na 5 opeenvolgende soft bounces', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Testperiode van 72 uur voordat het als definitieve soft bounce geldt', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Voor gedetailleerde SMTP-foutcodes, bekijk ons artikel over [hard bounce versus soft bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Bouncepercentage berekenen in Google Analytics 4',
  ga4Paras: [
    'In GA4 geldt een sessie als betrokken wanneer deze langer dan 10 seconden duurt, een conversie bevat of minimaal 2 paginaweergaven telt.',
    'Standaardoverzichten in GA4 tonen de metriek vaak niet direct. Voeg deze toe via rapportaanpassing of gebruik het tabblad Website hierboven.',
    'Ten opzichte van Universal Analytics levert GA4 voor informatieve artikelen veel lagere percentages op, omdat een bezoeker die 30 seconden leest geen bounce meer is.',
    'Wees voorzichtig met richtlijnen voor bouncepercentages die u online vindt, zoals „26% tot 40% is uitstekend”. Die dateren uit het Universal Analytics-tijdperk en noemen zelden een bron. GA4 heeft zijn eigen [benchmarking](https://support.google.com/analytics/answer/16388466), waarmee uw property wordt vergeleken met soortgelijke websites.',
  ],
  lowerTitle: 'Hoe verlaag je het e-mail bouncepercentage',
  lowerParas: [
    'Hard bounces ontstaan door niet-bestaande adressen. De oplossing is je e-maillijst controleren vóór verzending.',
    'Verwijder hard bounces onmiddellijk uit je CRM om de afleverkwaliteit van je domein bij Gmail, Yahoo en Outlook veilig te stellen.',
    'Gebruik onze [e-mail checker](/email-checker) voor losse adressen of de [bulk e-mailverificatie](/bulk-email-verifier) voor volledige contactlijsten.',
  ],
  faqTitle: 'Veelgestelde vragen over het bouncepercentage',
  faqs: [
    {
      q: 'Wat is de formule voor het bouncepercentage?',
      a: 'Voor e-mail: gebouncete e-mails ÷ verzonden e-mails × 100. Voor websites in GA4: (sessies − sessies met engagement) ÷ sessies × 100.',
    },
    {
      q: 'Hoe bereken je het e-mail bouncepercentage?',
      a: 'Tel hard en soft bounces uit je campagnerapport bij elkaar op, deel door het aantal verzonden e-mails en vermenigvuldig met 100.',
    },
    {
      q: 'Wordt het percentage berekend over verzonden of afgeleverde e-mails?',
      a: 'Vrijwel alle programma’s zoals Mailchimp en Klaviyo delen door het totale aantal verzonden e-mails.',
    },
    {
      q: 'Wat is een gezond bouncepercentage voor e-mail?',
      a: 'Onder de 2% is de veilige norm. Zowel Amazon SES als Brevo verwachten dat verzenders onder de 2% blijven.',
    },
    {
      q: 'Is een bouncepercentage van 5% schadelijk?',
      a: 'Ja. Bij 5% hard bounce wordt je account bij Amazon SES onder toezicht geplaatst en kan HubSpot je verzending blokkeren.',
    },
    {
      q: 'Hanteert Gmail een bouncelimiet?',
      a: 'Nee. De 0,3% regel van Gmail heeft betrekking op spamklachten, niet op bounces.',
    },
    {
      q: 'Hoe berekent GA4 het bouncepercentage?',
      a: 'Sessies zonder engagement gedeeld door totale sessies. Engagement vereist minstens 10 seconden, een conversie of 2 paginaweergaven.',
    },
    {
      q: 'Waarom verschilt GA4 van Universal Analytics?',
      a: 'Universal Analytics rekende elk bezoek van één enkele pagina als bounce, ongeacht de leestijd. GA4 kijkt naar echte interactie.',
    },
  ],
  ctaHeadline: 'Verlaag je bouncepercentage vóór je volgende verzending',
}

const pl: BounceRatePageStrings = {
  metaTitle: 'Kalkulator współczynnika odrzuceń e-mail i GA4 | Giggal.ai',
  ogTitle: 'Kalkulator współczynnika odrzuceń e-mail i GA4',
  description:
    'Darmowy kalkulator bounce rate dla kampanii e-mail i stron internetowych. Wzór, twarde i miękkie odbicia, limity platform wysyłkowych i GA4.',
  ogLocale: 'pl_PL',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Darmowy kalkulator współczynnika odrzuceń',
  crumb: 'Kalkulator współczynnika odrzuceń',
  appName: 'Darmowy kalkulator współczynnika odrzuceń',
  featureList: [
    'Oblicza współczynnik odrzuceń e-mail z liczby wysłanych wiadomości i zwrotów',
    'Rozróżnia twarde odbicia (hard), miękkie (soft) oraz wskaźnik dostarczeń',
    'Porównuje Twoje wyniki z progami Amazon SES, Brevo, HubSpot i SendGrid',
    'Wylicza współczynnik odrzuceń strony na podstawie sesji Google Analytics 4',
    'Prezentuje wzór matematyczny z Twoimi danymi w czasie rzeczywistym',
  ],
  h1: 'Kalkulator współczynnika odrzuceń',
  heroIntro:
    'Oblicz współczynnik odrzuceń (bounce rate) kampanii mailingowej lub strony internetowej. Wprowadź dane ze swojego systemu pocztowego lub Google Analytics 4, aby ocenić dostarczalność.',
  howTitle: 'Jak korzystać z kalkulatora współczynnika odrzuceń',
  howSteps: [
    'Dla kampanii e-mail przejdź do zakładki E-mail. Wpisz liczbę wysłanych maili oraz twarde i miękkie odbicia z raportu.',
    'Jeśli Twój system podaje tylko jedną łączną liczbę odrzuceń, wpisz ją w pole Twarde odbicia, a Miękkie odbicia zostaw puste.',
    'Odczytaj wyniki: otrzymasz ogólny bounce rate, podział na błędy stałe i tymczasowe oraz wskaźnik dostarczeń.',
    'Sprawdź poniższą listę dostawców, aby upewnić się, że nie ryzykujesz blokady konta w Amazon SES, Brevo czy HubSpot.',
    'Dla strony internetowej wybierz zakładkę Strona i wprowadź sesje oraz sesje z zaangażowaniem z raportu GA4.',
  ],
  howFooter:
    'Wyniki przeliczają się natychmiast podczas wpisywania. Gotowy wzór matematyczny z Twoimi danymi pojawia się pod każdym blokiem.',
  imageAlt:
    'Wizualizacja obliczania współczynnika odrzuceń maili: odrzucone wiadomości podzielone przez wysłane wiadomości w zestawieniu z limitami platform.',
  formulaTitle: 'Wzór na współczynnik odrzuceń (Bounce Rate)',
  formulaIntro:
    'Pojęcie „współczynnik odrzuceń” oznacza dwie różne rzeczy. W e-mail marketingu jest to odsetek wiadomości, których nie udało się doręczyć. W analityce stron www mierzy wizyty bez interakcji.',
  emailFormulaTitle: 'Wzór na współczynnik odrzuceń e-mail',
  emailFormulaCode: 'Wskaźnik odrzuceń = odrzucone wiadomości ÷ wysłane wiadomości × 100',
  emailFormulaText:
    'Przy 10 000 wysłanych maili i 250 zwrotach obliczenie wynosi 250 ÷ 10 000 × 100 = 2,5%. Zwroty obejmują zarówno twarde odbicia (nieistniejące konto), jak i miękkie (przepełniona skrzynka).',
  websiteFormulaTitle: 'Wzór na współczynnik odrzuceń strony w GA4',
  websiteFormulaCode: 'Wskaźnik odrzuceń = (sesje − sesje z zaangażowaniem) ÷ sesje × 100',
  websiteFormulaText:
    'Oto definicja w [Google Analytics 4](https://support.google.com/analytics/answer/12195621): odsetek sesji bez zaangażowania (100% minus współczynnik zaangażowania). Przy 2 000 sesji i 1 250 sesjach z zaangażowaniem współczynnik odrzuceń wynosi 37,5%.',
  websiteOldText:
    'Starsze poradniki dzieliły sesje jednostronicowe przez sesje ogółem (Universal Analytics). System UA został wygaszony w lipcu 2023 r., dlatego w bieżącej analityce stosuj formułę GA4.',
  calcEmailTitle: 'Jak obliczyć współczynnik odrzuceń kampanii mailingowej',
  calcEmailSteps: [
    'Otwórz raport kampanii w swoim programie do e-mail marketingu.',
    'Sprawdź liczbę wysłanych maili, twardych odbić i miękkich odbić.',
    'Dodaj do siebie obie wartości odrzuceń.',
    'Podziel sumę przez liczbę wysłanych maili i pomnóż przez 100.',
  ],
  calcEmailIntro:
    'Prawie wszystkie platformy dzielą przez wiadomości wysłane. Porównaj definicje najpopularniejszych systemów:',
  definitionsHead: ['Narzędzie', 'Jak oblicza współczynnik odrzuceń'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Twarde + miękkie odbicia ÷ wysłane maile', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Odrzucone maile ÷ wysłane maile', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Niedostarczone ÷ wysłane. Wskazuje osobną stopę twardych odbić', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Odrzucone maile ÷ odbiorcy, do których kampania została doręczona', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Odbicia ÷ odbiorcy, z podziałem w raportach transakcyjnych', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Wyłącznie twarde odbicia na reprezentatywnym wolumenie maili', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'Różnica jest widoczna przy wyższych wartościach: 500 odbić na 10 000 maili to 5% wysłanych, ale 5,26% z 9 500 dostarczonych. Nasz kalkulator podaje obie te liczby.',
  calcEmailHardNote:
    'Zwracaj szczególną uwagę na wskaźnik twardych odbić (hard bounce), ponieważ to od niego zależą blokady kont wysyłkowych.',
  limitsTitle: 'Limity współczynnika odrzuceń na platformach pocztowych',
  limitsIntro:
    'Systemy mailingowe nakładają restrykcyjne limity i zawieszają konta przekraczające dozwolone progi:',
  limitsHead: ['Platforma', 'Limit', 'Zasada'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Konto objęte audytem przy 5% hard bounce; blokada wysyłki przy 10%. Rekomendowany próg: poniżej 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Zawieszenie konta przy 10% twardych odbić na znaczącym wolumenie.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Wstrzymanie kampanii, jeśli twarde odbicia przekroczą 2% lub miękkie 5%.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Blokada wysyłek marketingowych przy przekroczeniu 5% odrzuceń.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Ostrzeżenia i ryzyko blokady konta przy wskaźnikach powyżej 5%.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) nie podaje sztywnego limitu procentowego. Progi ustalane są dynamicznie.',
  limitsMailboxNote:
    'Dostawcy poczty (Gmail, Yahoo, Microsoft) nie publikują limitu bounce rate. Ich wymóg 0,3% dotyczy zgłoszeń spamu. Wymagają jednak usuwania adresów, które stale odbijają.',
  benchmarksTitle: 'Średnie rynkowe współczynnika odrzuceń',
  benchmarksParas: [
    'Średnie zależą od branży. Raport Twilio SendGrid 2023 wskazuje średni globalny bounce rate na poziomie 1,06% (mediana 0,21%). GetResponse szacuje średnią rynkową na 2,33%.',
    'Większe znaczenie ma utrzymywanie stałej higieny własnej bazy. Zobacz [jaki jest dobry współczynnik odbić w cold mailingu](/blog/good-bounce-rate-for-cold-email) oraz [jak zmniejszyć współczynnik odbić](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Twarde odbicia a miękkie odbicia',
  hardSoftParas: [
    'Twarde odbicie (hard bounce) to błąd trwały: serwer zwraca kod SMTP z grupy 5xx (np. 5.1.1 – adres nie istnieje). Norma RFC 5321 zabrania ponawiania próby wysyłki. Miękkie odbicie (soft bounce) to problem tymczasowy (kody 4xx).',
    'Programy pocztowe automatycznie zamieniają wielokrotne błędy miękkie w odbicie twarde:',
  ],
  softRulesHead: ['Narzędzie', 'Konwersja miękkich odbić w twarde'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Po 7 miękkich odbiciach dla nowych adresów, lub 15 przy wcześniejszej aktywności', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Po ponad 7 kolejnych miękkich odbiciach w ciągu 2 lat', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Ponawia przez 36 godz., blokuje po 5 miękkich odbiciach z rzędu w kampaniach', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Testuje przez 72 godziny przed ostatecznym zaliczeniem jako soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Szczegółowe zestawienie kodów błędów znajdziesz w artykule [twarde i miękkie odbicie email](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Współczynnik odrzuceń w Google Analytics 4',
  ga4Paras: [
    'W GA4 sesja jest uznawana za zaangażowaną, jeśli trwała powyżej 10 sekund, zarejestrowano konwersję lub co najmniej 2 odsłony podstron. Wszystkie pozostałe sesje tworzą współczynnik odrzuceń.',
    'W raportach standardowych wskaźnik ten bywa ukryty. Możesz go włączyć w konfiguracji raportu lub skorzystać z zakładki Strona w naszym narzędziu.',
    'Dla blogów i serwisów informacyjnych GA4 daje znacznie korzystniejszy obraz niż dawny Universal Analytics, ponieważ użytkownik czytający wpis przez pół minuty nie jest już traktowany jako odrzucenie.',
    'Uważaj na publikowane w sieci przedziały wskaźnika odrzuceń, np. „26% do 40% to wynik doskonały”. Pochodzą one z czasów Universal Analytics i rzadko podają wiarygodne źródła. GA4 oferuje własny mechanizm [benchmarkingowy](https://support.google.com/analytics/answer/16388466), który porównuje Twoją usługę z grupą porównawczą, jeśli funkcja jest włączona.',
  ],
  lowerTitle: 'Jak obniżyć współczynnik odrzuceń e-mail',
  lowerParas: [
    'Twarde odbicia wynikają z błędnych lub usuniętych kont pocztowych. Najskuteczniejszym rozwiązaniem jest weryfikacja bazy przed każdym wysłaniem kampanii.',
    'Usuwaj nieistniejące maile bez zwłoki, aby chronić reputację własnej domeny w Gmailu, Yahoo i Outlooku.',
    'Użyj naszego [weryfikatora e-mail](/email-checker) do testu pojedynczych adresów lub [masowej weryfikacji](/bulk-email-verifier) dla całych list kontaktów.',
  ],
  faqTitle: 'Często zadawane pytania o współczynnik odrzuceń',
  faqs: [
    {
      q: 'Jaki jest wzór na współczynnik odrzuceń?',
      a: 'Dla e-maili: odrzucone maile ÷ wysłane maile × 100. Dla stron www w GA4: (sesje − sesje z zaangażowaniem) ÷ sesje × 100.',
    },
    {
      q: 'Jak obliczyć współczynnik odrzuceń e-mail?',
      a: 'Dodaj twarde i miękkie odbicia z raportu wysyłki, podziel przez liczbę wysłanych wiadomości i pomnóż przez 100. 250 odbić na 10 000 maili to 2,5%.',
    },
    {
      q: 'Czy współczynnik odrzuceń liczy się od wysłanych czy doręczonych?',
      a: 'Zdecydowana większość platform (Mailchimp, Klaviyo, Mailgun) dzieli przez liczbę wysłanych wiadomości.',
    },
    {
      q: 'Jaki jest bezpieczny współczynnik odrzuceń e-mail?',
      a: 'Wskaźnik poniżej 2% jest standardem rynkowym gwarantującym stabilną reputację konta.',
    },
    {
      q: 'Czy współczynnik odrzuceń na poziomie 5% jest groźny?',
      a: 'Tak. Przy 5% twardych odbić Amazon SES wstrzymuje zaufanie do konta, a HubSpot może zablokować wysyłki. Wyczyść bazę.',
    },
    {
      q: 'Czy Gmail stosuje limit współczynnika odrzuceń?',
      a: 'Nie. Limit 0,3% w Gmailu dotyczy zgłoszeń spamu, a nie odbić technicznych.',
    },
    {
      q: 'Jak GA4 oblicza współczynnik odrzuceń?',
      a: 'Dzieli sesje bez zaangażowania przez sesje ogółem. Zaangażowanie wymaga > 10 sek., konwersji lub 2 odsłon.',
    },
    {
      q: 'Czym różni się bounce rate w GA4 od Universal Analytics?',
      a: 'Universal Analytics uznawał za odrzucenie każdą sesję jednopoziomową. GA4 uwzględnia rzeczywisty czas wizyty.',
    },
  ],
  ctaHeadline: 'Obniż współczynnik odrzuceń przed kolejną wysyłką',
}

const id: BounceRatePageStrings = {
  metaTitle: 'Kalkulator Bounce Rate untuk Email dan Website (GA4) | Giggal.ai',
  ogTitle: 'Kalkulator Bounce Rate untuk Email dan Website (GA4)',
  description:
    'Kalkulator bounce rate gratis untuk email marketing dan website. Rumus perhitungan, hard & soft bounce, batas provider pengiriman, dan formula GA4.',
  ogLocale: 'id_ID',
  ogImage: '/tools/bounce-rate-calculator-og-v2.webp',
  ogAlt: 'Kalkulator bounce rate gratis',
  crumb: 'Kalkulator Bounce Rate',
  appName: 'Kalkulator Bounce Rate Gratis',
  featureList: [
    'Menghitung bounce rate email dari jumlah terkirim dan email yang mental',
    'Pemisahan metrik hard bounce, soft bounce, dan rasio keterkiriman',
    'Membandingkan performa Anda dengan batas ketat Amazon SES, Brevo, dan HubSpot',
    'Menghitung bounce rate website berdasarkan data sesi Google Analytics 4',
    'Menampilkan rumus perhitungan dengan angka Anda secara langsung',
  ],
  h1: 'Kalkulator Bounce Rate',
  heroIntro:
    'Hitung bounce rate kampanye email atau situs web Anda. Masukkan angka dari aplikasi email atau Google Analytics 4 untuk memahami performa pengiriman Anda.',
  howTitle: 'Cara menggunakan kalkulator bounce rate',
  howSteps: [
    'Untuk kampanye email, pilih tab Email. Masukkan jumlah email terkirim serta angka hard bounce dan soft bounce dari laporan Anda.',
    'Jika aplikasi Anda hanya menyajikan satu angka bounce gabungan, masukkan angka tersebut pada kolom Hard bounce dan biarkan Soft bounce kosong.',
    'Lihat hasilnya: Anda akan memperoleh bounce rate keseluruhan, rincian hard dan soft bounce, serta persentase keterkiriman (delivered).',
    'Periksa daftar batas penyedia layanan di bawahnya untuk memastikan akun Anda tidak terancam penangguhan di Amazon SES, HubSpot, dll.',
    'Untuk situs web, pilih tab Website dan masukkan total sesi serta sesi yang engaged dari laporan GA4 Anda.',
  ],
  howFooter:
    'Hasil kalkulasi diperbarui secara otomatis saat Anda mengetik. Rincian rumus dengan angka Anda ditampilkan di bawah setiap blok.',
  imageAlt:
    'Ilustrasi perhitungan bounce rate email: jumlah email mental dibagi total email terkirim dan perbandingan batas provider.',
  formulaTitle: 'Rumus perhitungan bounce rate',
  formulaIntro:
    'Istilah «bounce rate» memiliki dua arti berbeda. Pada email, bounce rate adalah proporsi pesan yang gagal diterima server tujuan. Pada website (rasio pentalan), bounce rate mengukur kunjungan tanpa interaksi.',
  emailFormulaTitle: 'Rumus bounce rate email',
  emailFormulaCode: 'Bounce rate = email membal ÷ email terkirim × 100',
  emailFormulaText:
    'Kirim 10.000 email dengan 250 mental, maka rumusnya adalah 250 ÷ 10.000 × 100 = 2,5%. Angka bounce mencakup hard bounce (alamat email palsu/tidak aktif) dan soft bounce (kendala sementara seperti kotak masuk penuh).',
  websiteFormulaTitle: 'Rumus bounce rate website di GA4',
  websiteFormulaCode: 'Bounce rate = (sesi − sesi yang berinteraksi) ÷ sesi × 100',
  websiteFormulaText:
    'Berdasarkan dokumentasi resmi [Google Analytics 4](https://support.google.com/analytics/answer/12195621): persentase sesi yang tidak engaged. Nilai ini selalu sama dengan 100% dikurangi tingkat engagement. Pada 2.000 sesi dengan 1.250 sesi engaged, bounce rate adalah 37,5%.',
  websiteOldText:
    'Panduan lama menggunakan pembagian sesi satu halaman dengan total sesi (Universal Analytics). Karena UA sudah tidak beroperasi sejak Juli 2023, gunakan rumus GA4 untuk laporan Anda saat ini.',
  calcEmailTitle: 'Cara menghitung bounce rate email marketing',
  calcEmailSteps: [
    'Buka laporan performa kampanye pada aplikasi email marketing Anda.',
    'Catat jumlah email yang terkirim (sent), serta data hard bounce dan soft bounce.',
    'Jumlahkan kedua angka bounce tersebut.',
    'Bagi total bounce dengan email terkirim, lalu kalikan 100.',
  ],
  calcEmailIntro:
    'Hampir semua platform membagi dengan email yang dikirim (sent). Berikut metode dokumentasi masing-masing platform terkemuka:',
  definitionsHead: ['Platform', 'Cara menghitung bounce rate'],
  definitionsRows: [
    { a: 'Mailchimp', b: 'Hard + soft bounce ÷ total email terkirim (sent)', href: 'https://mailchimp.com/help/custom-report-metrics/' },
    { a: 'Klaviyo', b: 'Email mental ÷ total email terkirim', href: 'https://help.klaviyo.com/hc/en-us/articles/360057036052' },
    { a: 'Mailgun', b: 'Undelivered ÷ total sent. Menampilkan hard bounce terpisah', href: 'https://documentation.mailgun.com/docs/mailgun/user-manual/reporting/rate-definitions' },
    { a: 'Campaign Monitor', b: 'Email mental ÷ total penerima yang menerima pengiriman kampanye', href: 'https://help.campaignmonitor.com/s/article/bounced-emails-report' },
    { a: 'Brevo', b: 'Bounce ÷ penerima, dengan pemisahan hard dan soft di laporan', href: 'https://help.brevo.com/hc/en-us/articles/4863866741266-Brevo-Glossary' },
    { a: 'Amazon SES', b: 'Hanya hard bounce, dihitung berdasarkan volume pengiriman representatif', href: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
  ],
  calcEmailDiff:
    'Perbedaan ini berdampak pada rasio tinggi: 500 bounce dari 10.000 pengiriman adalah 5% dari email sent, tetapi 5,26% dari 9.500 email yang berhasil delivered. Kalkulator kami menampilkan kedua perspektif.',
  calcEmailHardNote:
    'Pantau angka hard bounce secara ketat, karena batas sanksi dan penangguhan akun oleh penyedia layanan hampir selalu didasarkan pada metrik ini.',
  limitsTitle: 'Batas toleransi bounce rate pada penyedia layanan email',
  limitsIntro:
    'Penyedia infrastruktur email menetapkan ambang batas ketat dan dapat menangguhkan akun yang melebihinya:',
  limitsHead: ['Penyedia', 'Batas', 'Ketentuan'],
  limitsRows: [
    { name: 'Amazon SES', limit: 5, what: 'Akun ditinjau pada 5% hard bounce; pengiriman diblokir pada 10%. Target aman: di bawah 2%.', source: 'https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html' },
    { name: 'Postmark', limit: 10, what: 'Penangguhan akun jika hard bounce mencapai 10% pada volume representatif.', source: 'https://postmarkapp.com/support/article/1118-why-is-my-account-pending-approval' },
    { name: 'Brevo', limit: 2, what: 'Kampanye ditangguhkan jika hard bounce melampaui 2% atau soft bounce melampaui 5%.', source: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { name: 'HubSpot', limit: 5, what: 'Pengiriman email marketing dihentikan pada 5% bounce rate di pengiriman terkini.', source: 'https://knowledge.hubspot.com/marketing-email/why-is-my-email-suspended' },
    { name: 'SendGrid', limit: 5, what: 'Akun dengan bounce di atas 5% mendapat peringatan keras dan risiko pemblokiran.', source: 'https://sendgrid.com/en-us/blog/email-bounce-management' },
  ],
  limitsMailchimpNote:
    '[Mailchimp](https://mailchimp.com/help/about-bounce-warnings/) tidak menerbitkan angka persentase tetap. Batas disesuaikan dengan rekam jejak pengirim.',
  limitsMailboxNote:
    'Penyedia kotak masuk (Gmail, Yahoo, Microsoft) tidak menetapkan batas bounce publik. Ambang 0,3% mereka berlaku khusus keluhan spam.',
  benchmarksTitle: 'Rata-rata dan tolak ukur (benchmark) industri',
  benchmarksParas: [
    'Rata-rata industri berbeda di tiap sektor. Laporan Twilio SendGrid 2023 mencatat rata-rata bounce rate global 1,06% (median 0,21%). GetResponse melaporkan rata-rata keseluruhan sebesar 2,33%.',
    'Menjaga riwayat pengiriman Anda sendiri jauh lebih krusial dibanding angka rata-rata umum. Pelajari [bounce rate yang baik untuk cold email](/blog/good-bounce-rate-for-cold-email) dan [cara menurunkan bounce rate email](/blog/how-to-reduce-email-bounce-rate).',
  ],
  hardSoftTitle: 'Hard bounce vs. soft bounce',
  hardSoftParas: [
    'Hard bounce adalah kegagalan permanen: server tujuan membalas dengan kode SMTP 5xx (misalnya 5.1.1 alamat tidak ada). RFC 5321 melarang pengirim mengulangi pengiriman ke alamat tersebut. Soft bounce adalah kendala sementara (kode 4xx).',
    'Sebagian besar aplikasi secara otomatis mengubah soft bounce berulang menjadi hard bounce permanen:',
  ],
  softRulesHead: ['Platform', 'Konversi soft bounce menjadi hard bounce'],
  softRulesRows: [
    { a: 'Mailchimp', b: 'Setelah 7 soft bounce tanpa riwayat interaksi, atau 15 dengan riwayat aktif', href: 'https://mailchimp.com/help/soft-vs-hard-bounces/' },
    { a: 'Klaviyo', b: 'Setelah lebih dari 7 soft bounce berturut-turut dalam kurun waktu 2 tahun', href: 'https://help.klaviyo.com/hc/en-us/articles/115005250408' },
    { a: 'Brevo', b: 'Mencoba kembali selama 36 jam; memblokir alamat setelah 5 soft bounce berturut-turut', href: 'https://help.brevo.com/hc/en-us/articles/209435165' },
    { a: 'HubSpot', b: 'Menunggu masa percobaan 72 jam sebelum diklasifikasikan sebagai soft bounce', href: 'https://knowledge.hubspot.com/marketing-email/what-is-the-difference-between-a-hard-bounce-and-a-soft-bounce' },
  ],
  hardSoftLink:
    'Untuk panduan kode status SMTP lengkap, baca ulasan kami tentang [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).',
  ga4Title: 'Cara menghitung bounce rate di Google Analytics 4',
  ga4Paras: [
    'Di GA4 sebuah sesi tergolong engaged jika berlangsung lebih dari 10 detik, menghasilkan konversi (key event), atau membuka minimal 2 halaman. Sesi lainnya dihitung sebagai bounce.',
    'Laporan standar GA4 sering menyembunyikan metrik ini. Anda dapat mengaktifkannya di pengaturan laporan atau langsung gunakan tab Website di kalkulator atas.',
    'Perubahan dari Universal Analytics menguntungkan situs konten: pembaca yang membaca artikel selama 30 detik tidak lagi dianggap bounce di GA4.',
    'Berhati-hatilah dengan standar bounce rate situs web yang Anda temukan di internet, seperti “26% hingga 40% sangat bagus”. Angka tersebut berasal dari era Universal Analytics dan jarang menyebutkan sumber yang valid. GA4 memiliki fitur [tolok ukur (benchmarking)](https://support.google.com/analytics/answer/16388466) sendiri yang membandingkan properti Anda dengan grup sejenis.',
  ],
  lowerTitle: 'Cara menurunkan bounce rate email Anda',
  lowerParas: [
    'Hard bounce berasal dari alamat email palsu atau kedaluwarsa. Solusi terbaik adalah memverifikasi daftar kontak sebelum mengirim kampanye.',
    'Segera hapus alamat yang menghasilkan hard bounce demi menjaga reputasi domain Anda di mata Gmail, Yahoo, dan Outlook.',
    'Gunakan [cek email valid](/email-checker) untuk pengujian satuan, atau [verifikasi email massal](/bulk-email-verifier) untuk membersihkan seluruh basis data prospek.',
  ],
  faqTitle: 'Pertanyaan umum seputar bounce rate',
  faqs: [
    {
      q: 'Apa rumus menghitung bounce rate?',
      a: 'Untuk email: email mental ÷ email terkirim × 100. Untuk website di GA4: (sesi − sesi engaged) ÷ sesi × 100.',
    },
    {
      q: 'Bagaimana cara menghitung bounce rate email?',
      a: 'Jumlahkan hard dan soft bounce dari laporan kampanye, bagi dengan total email yang dikirim, lalu kalikan 100. Contohnya, 250 bounce dari 10.000 email adalah 2,5%.',
    },
    {
      q: 'Apakah bounce rate dihitung dari email terkirim (sent) atau diterima (delivered)?',
      a: 'Sebagian besar platform utama seperti Mailchimp dan Klaviyo membagi dengan total email terkirim (sent).',
    },
    {
      q: 'Berapa angka bounce rate email yang dianggap bagus?',
      a: 'Di bawah 2% adalah standar aman industri untuk menjaga reputasi pengiriman domain Anda.',
    },
    {
      q: 'Apakah bounce rate 5% berbahaya?',
      a: 'Ya. Pada angka 5% hard bounce, Amazon SES akan meninjau akun Anda dan HubSpot dapat menghentikan pengiriman. Bersihkan daftar email Anda.',
    },
    {
      q: 'Apakah Gmail memiliki batas bounce rate?',
      a: 'Tidak. Ambang batas 0,3% Gmail berlaku untuk keluhan spam, bukan bounce teknis.',
    },
    {
      q: 'Bagaimana GA4 menghitung bounce rate website?',
      a: 'Membagi sesi yang tidak berinteraksi (unengaged) dengan total sesi. Engagement memerlukan durasi > 10 detik, konversi, atau 2 tampilan halaman.',
    },
    {
      q: 'Mengapa bounce rate GA4 berbeda dengan Universal Analytics?',
      a: 'Universal Analytics menganggap semua sesi satu halaman sebagai pentalan, tanpa memperhitungkan lama waktu membaca pengunjung.',
    },
  ],
  ctaHeadline: 'Turunkan bounce rate sebelum pengiriman berikutnya',
}

export const BOUNCE_RATE_PAGE_STRINGS: Record<Locale, BounceRatePageStrings> = {
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

export function bounceRatePageStrings(locale: Locale): BounceRatePageStrings {
  return BOUNCE_RATE_PAGE_STRINGS[locale] ?? en
}
