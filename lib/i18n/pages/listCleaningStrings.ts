// All page copy for the email list cleaning page, one object per language the page
// ships in. The page is components/pages/ListCleaning/ListCleaningPage.tsx; the URLs
// live in CLUSTERS.listCleaning (lib/i18n/clusters.ts).
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists. FAQ answers are plain
// text (FaqAccordion does not render markup).
//
// What stays in the component as data: the sign-up URL, the sample file name and
// addresses in the hero illustration, step numbers, table row colours, the related
// card links and the before/after numbers.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface ListCleaningStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogAlt: string
  crumb: string
  /** The Service JSON-LD on other languages. English uses emailListCleaningServiceLd(). */
  serviceName?: string
  serviceType?: string

  // Hero
  /** The H1 is the lead, a space, then the highlighted phrase. */
  h1Lead: string
  h1Highlight: string
  heroIntro: string
  heroCta: string
  heroPricing: string
  heroNote: string
  /** Labels in the bulk-results illustration. */
  demoDone: string
  demoDeliverable: string
  demoUndeliverable: string

  /** Review chips and award row. English leaves these out and the components use their defaults. */
  ratings?: {
    reviews: (count: number) => string
    ratedAria: (rating: string, platform: string) => string
  }
  awards?: { headingLead: string; headingRest: string; showLabel: string }

  // Three steps
  stepsTitle: string
  steps: [StepCopy, StepCopy, StepCopy]

  // What it removes (table)
  removesTitle: string
  removesCols: [string, string, string]
  /** Invalid, disposable, role-based, duplicate, catch-all, unknown. */
  removesRows: [RemoveRow, RemoveRow, RemoveRow, RemoveRow, RemoveRow, RemoveRow]
  /** Carries the two bounce links. */
  removesOutro: string

  // Why cleaners flag good leads as risky
  riskyTitle: string
  riskyParas: [string, string, string]

  // Before and after (hidden until real numbers are added)
  beforeAfterTitle: string
  beforeAfterIntro: string
  beforeAfterCols: [string, string]
  /** Uploaded, valid, invalid, disposable, role, duplicates, catch-all valid, catch-all invalid, unknown. */
  beforeAfterRows: [string, string, string, string, string, string, string, string, string]
  /** "{pct}" is the removed percentage, "{kept}" the catch-all contacts kept. */
  beforeAfterOutro: string

  // Pricing
  pricingTitle: string
  pricingIntro: string
  /** Carries the link to /pricing. */
  pricingFootnote: string

  // How often to clean
  oftenTitle: string
  oftenIntro: string
  oftenBullets: [string, string, string, string]
  oftenOutro: string

  // Where it already lives
  livesTitle: string
  livesIntro: string
  /** Each starts with a **bold** label. */
  livesBullets: [string, string, string, string]

  // Cleaning vs verification
  vsTitle: string
  vsParas: [string, string]

  faqTitle: string
  faqs: FaqItem[]

  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string

  relatedTitle: string
  /** Same order as RELATED_HREFS in the page component. */
  related: [RelatedCopy, RelatedCopy, RelatedCopy, RelatedCopy, RelatedCopy, RelatedCopy, RelatedCopy, RelatedCopy]
}

interface StepCopy {
  title: string
  body: string
}

interface RemoveRow {
  result: string
  meaning: string
  action: string
}

interface RelatedCopy {
  title: string
  desc: string
}

const en: ListCleaningStrings = {
  metaTitle: 'Email List Cleaning Service That Resolves Catch-All Leads | Giggal.ai',
  ogTitle: 'Email List Cleaning Service That Keeps Catch-All Leads',
  description:
    'Email list cleaning service that removes invalid, disposable and duplicate emails and resolves catch-alls instead of deleting them. 1,000 free credits.',
  ogAlt: 'Giggal.ai email list cleaning service',
  crumb: 'Email list cleaning',

  h1Lead: 'Email list cleaning service that also',
  h1Highlight: 'resolves catch-all leads',
  heroIntro:
    'Upload your list and get it back clean in minutes. Our email list cleaning service removes invalid, disposable, role-based and duplicate addresses before they bounce and hurt your sender reputation. Many list cleaners mark every catch-all address as "risky" and leave the choice to you. We check each one and tell you which one is safe to send.',
  heroCta: 'Clean my list free',
  heroPricing: 'See pricing',
  heroNote: '1,000 free credits, no card needed. CSV or Excel, up to 50,000 addresses per file. Credits never expire.',
  demoDone: 'Done',
  demoDeliverable: 'Deliverable',
  demoUndeliverable: 'Undeliverable',

  stepsTitle: 'Clean your email list in three steps',
  steps: [
    {
      title: 'Upload your list',
      body: 'Add a CSV or Excel file with up to 50,000 addresses. Bigger list? Split it into a few files.',
    },
    {
      title: 'We check every address',
      body: "The domain's mail servers (MX) and whether the mailbox itself exists, plus disposable, role-based, duplicate and catch-all checks. No email is sent to your contacts.",
    },
    {
      title: 'Download the clean list',
      body: 'You get a CSV with a result on every row, so you can keep, remove or review each address.',
    },
  ],

  removesTitle: 'What email list cleaning removes',
  removesCols: ['Result', 'What it means', 'What to do'],
  removesRows: [
    {
      result: 'Invalid',
      meaning: "The mailbox or domain doesn't exist. Sending to it causes a hard bounce.",
      action: 'Remove',
    },
    {
      result: 'Disposable',
      meaning: 'A temporary inbox from a service like Mailinator or 10MinuteMail. It will be gone soon.',
      action: 'Remove',
    },
    {
      result: 'Role-based',
      meaning: 'A shared inbox like info@, sales@ or support@. Rarely a real decision-maker.',
      action: 'Remove for outreach, keep for support lists',
    },
    {
      result: 'Duplicate',
      meaning: 'The same address appears more than once.',
      action: 'Keep one copy',
    },
    {
      result: 'Catch-all, resolved',
      meaning: 'The domain accepts every address. Giggal checks the mailbox behind it.',
      action: 'Keep if valid, remove if invalid',
    },
    {
      result: 'Unknown',
      meaning: "The server didn't answer in time or asked us to retry later (greylisting).",
      action: 'Retry later. Unknown results are refunded.',
    },
  ],
  removesOutro:
    'Removing these addresses keeps your bounce rate low. That protects your sender reputation, so more of your emails reach the inbox. New to bounces? Read [what a hard bounce is](/glossary/hard-bounce) and [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Why many email list cleaners flag good leads as risky',
  riskyParas: [
    'Many company mail servers accept every address, real or made up. That\'s a [catch-all domain](/blog/what-is-a-catch-all-email-address). On these domains a standard check gets the same "yes" for a real mailbox and a typo. Many email list cleaning services stop there, label the address "risky" and leave the decision to you.',
    'On B2B lists these domains are common. Larger companies often sit behind security gateways that hide the mailbox. Delete these addresses and you throw away real buyers. Send to them and the dead ones bounce.',
    'Giggal resolves each catch-all address to valid or invalid for the same 1 credit as any other check. It also works on domains behind [security gateways like Proofpoint and Mimecast](/seg-email-verification), where other tools return "unknown". See how [catch-all verification](/catch-all-verification) works.',
  ],

  beforeAfterTitle: 'Before and after: a real cleaned list',
  beforeAfterIntro: "Here's what cleaning did to one real B2B list, anonymized.",
  beforeAfterCols: ['Result', 'Addresses'],
  beforeAfterRows: [
    'Uploaded',
    'Valid, kept',
    'Invalid, removed',
    'Disposable, removed',
    'Role-based, flagged',
    'Duplicates, removed',
    'Catch-all resolved to valid, kept',
    'Catch-all resolved to invalid, removed',
    'Unknown, refunded',
  ],
  beforeAfterOutro:
    '{pct}% of the list was removed. {kept} catch-all contacts were kept that a standard cleaner would have marked risky.',

  pricingTitle: 'Email list cleaning pricing',
  pricingIntro:
    'Pay for the emails you clean, with no monthly commitment. One credit cleans one address, catch-all checks included. Credits never expire, and your first 1,000 are free.',
  pricingFootnote: 'Cleaning a 10,000-contact list costs $9.90. Monthly plans save 10%. [See all prices](/pricing)',

  oftenTitle: 'How often should you clean your email list?',
  oftenIntro:
    'Addresses go stale on their own. People change jobs, companies change domains, and old inboxes get shut down. B2B lists go stale fastest. Clean your list:',
  oftenBullets: [
    "Before a campaign to any list you haven't cleaned in the last few months.",
    'Right after you import a purchased, scraped or enriched list.',
    'When your bounce rate starts climbing. For cold email, [stay under 2%](/blog/good-bounce-rate-for-cold-email).',
    'On a regular schedule for any list you send to often.',
  ],
  oftenOutro:
    "Regular cleaning is what people mean by email hygiene: keeping only addresses that exist and can receive your mail. It's the simplest way to [reduce your bounce rate](/blog/how-to-reduce-email-bounce-rate). To keep bad addresses out in the first place, verify new sign-ups in real time with the [API](/public/docs).",

  livesTitle: 'Clean up your email list where it already lives',
  livesIntro: "You don't have to export and re-import by hand.",
  livesBullets: [
    '**Email and CRM tools:** send clean contacts to [HubSpot](/integrations/zapier/hubspot), Mailchimp, ActiveCampaign, SendGrid and [80+ other apps](/integrations).',
    '**Automation:** connect any tool through [Zapier](/integrations/zapier) or [n8n](/integrations/n8n).',
    '**API:** clean lists from your own code with the [REST API](/public/docs).',
    '**AI assistants:** check addresses inside Claude, ChatGPT or Cursor over [MCP](/mcp).',
  ],

  vsTitle: 'Email list cleaning vs email verification',
  vsParas: [
    "They use the same checks. Email verification answers the question for one address. Email list cleaning runs those checks on a whole file and gives you back a list you can send to. You'll also see it called email scrubbing or using an email list cleaner. It's the same job.",
    'To check a single address, use the [free email checker](/email-checker). To see if an address is a throwaway inbox, use the [disposable email checker](/disposable-email-checker).',
  ],

  faqTitle: 'Email list cleaning FAQ',
  faqs: [
    {
      q: 'What does an email list cleaning service do?',
      a: 'It checks every address on your list and removes the ones that would bounce or hurt deliverability: invalid, disposable, duplicate and role-based addresses. Giggal also resolves catch-all addresses to valid or invalid instead of marking them risky.',
    },
    {
      q: 'How much does it cost to clean an email list?',
      a: 'One credit per address, catch-all checks included. 10,000 addresses cost $9.90, and your first 1,000 credits are free. Credits never expire.',
    },
    {
      q: 'Can I clean my email list for free?',
      a: 'Yes, up to 1,000 addresses. Every new account gets 1,000 free credits, no card needed, and they never expire. After that, 10,000 addresses cost $9.90.',
    },
    {
      q: 'How long does email list cleaning take?',
      a: 'Most lists come back in minutes.',
    },
    {
      q: 'Will my contacts receive an email?',
      a: 'No. The checks talk to the receiving mail server and stop before any message is sent. Your contacts never see anything.',
    },
    {
      q: 'What happens to catch-all addresses?',
      a: 'Each one is checked and returned as valid or invalid, for the same 1 credit. You keep the real contacts and drop the dead ones.',
    },
    {
      q: 'What files can I upload?',
      a: 'CSV or Excel, up to 50,000 addresses per file. You download the clean list as a CSV.',
    },
    {
      q: 'Is email scrubbing the same as email list cleaning?',
      a: 'Yes. Email scrubbing, list cleaning and email hygiene all describe the same job: removing addresses that won’t receive your mail.',
    },
    {
      q: 'What does "unknown" mean, and do I pay for it?',
      a: 'Unknown means the mail server didn’t give a clear answer, often because of greylisting. Try again later. Credits for unknown results are refunded.',
    },
  ],

  ctaHeadline: 'Clean your email list in minutes',
  ctaSupporting: '1,000 free credits, no card needed. Up to 50,000 addresses per file.',
  ctaButton: 'Clean my list free',

  relatedTitle: 'Related tools and guides',
  related: [
    { title: 'Free email checker', desc: 'Verify a single email address: MX records and a mailbox check.' },
    { title: 'Disposable email checker', desc: 'Detect temporary, fake and throwaway inboxes across 100,000+ domains.' },
    {
      title: 'Catch-all email verification',
      desc: 'How Giggal resolves accept-all business domains to deliverable or undeliverable.',
    },
    {
      title: 'How accurate email verification is',
      desc: 'What the 97–99% accuracy claims measure, and how to test a verifier on your own list.',
    },
    { title: 'Why cold emails bounce', desc: 'The common causes of hard vs soft bounces and how to read server response codes.' },
    { title: 'How to reduce email bounce rate', desc: 'What causes a high bounce rate and how to bring it down.' },
    { title: 'Good bounce rate for cold email', desc: 'Under 2% is healthy. What to do at 2–5% and above 5%.' },
    { title: 'Email verification API', desc: 'Check addresses at sign-up or clean files from your own code.' },
  ],
}

// Italian, "tu". Terms as the Italian bulk and email checker pages: casella, usa e
// getta, di ruolo, hard bounce, valida / non valida / sconosciuta.
const it: ListCleaningStrings = {
  metaTitle: 'Pulizia lista email con risoluzione dei catch-all | Giggal.ai',
  ogTitle: 'Servizio di pulizia lista email che mantiene i contatti catch-all',
  description:
    'Servizio di pulizia lista email che rimuove email non valide, usa e getta e duplicate e risolve i catch-all invece di eliminarli. 1.000 crediti gratuiti.',
  ogLocale: 'it_IT',
  ogAlt: 'Servizio di pulizia lista email di Giggal.ai',
  crumb: 'Pulizia lista email',
  serviceName: 'Giggal.ai Servizio di pulizia lista email',
  serviceType: 'Pulizia e verifica di liste email',

  h1Lead: 'Servizio di pulizia lista email che',
  h1Highlight: 'risolve anche i contatti catch-all',
  heroIntro:
    "Carica la tua lista e ricevila pulita in pochi minuti. Il nostro servizio di pulizia lista email rimuove gli indirizzi non validi, usa e getta, di ruolo e duplicati prima che rimbalzino e danneggino la reputazione del mittente. Molti strumenti di pulizia segnano ogni indirizzo catch-all come \"a rischio\" e lasciano a te la scelta. Noi li controlliamo uno per uno e ti diciamo a quali puoi scrivere senza rischi.",
  heroCta: 'Pulisci la lista gratis',
  heroPricing: 'Vedi i prezzi',
  heroNote: '1.000 crediti gratuiti, senza carta. CSV o Excel, fino a 50.000 indirizzi per file. I crediti non scadono mai.',
  demoDone: 'Fatto',
  demoDeliverable: 'Valida',
  demoUndeliverable: 'Non valida',

  ratings: {
    reviews: (count) => `${count} recensioni`,
    ratedAria: (rating, platform) => `Valutazione di Giggal.ai su ${platform}: ${rating.replace('.', ',')} su 5`,
  },
  awards: {
    headingLead: 'Giggal.ai è stato nominato',
    headingRest: 'Leader su SourceForge e Slashdot',
    showLabel: 'Mostra {badge}',
  },

  stepsTitle: 'Pulisci la tua lista email in tre passaggi',
  steps: [
    {
      title: 'Carica la tua lista',
      body: 'Aggiungi un file CSV o Excel con fino a 50.000 indirizzi. La lista è più grande? Dividila in alcuni file.',
    },
    {
      title: 'Controlliamo ogni indirizzo',
      body: 'Controlliamo i server di posta del dominio (MX) e se la casella esiste. Verifichiamo anche se l\'indirizzo è usa e getta, di ruolo, duplicato o catch-all. Ai tuoi contatti non arriva nessuna email.',
    },
    {
      title: 'Scarica la lista pulita',
      body: 'Ricevi un CSV con un risultato su ogni riga, così puoi tenere, rimuovere o rivedere ogni indirizzo.',
    },
  ],

  removesTitle: 'Cosa rimuove la pulizia della lista email',
  removesCols: ['Risultato', 'Cosa significa', 'Cosa fare'],
  removesRows: [
    {
      result: 'Non valida',
      meaning: 'La casella o il dominio non esiste. Un invio a questo indirizzo causa un hard bounce.',
      action: 'Rimuovi',
    },
    {
      result: 'Usa e getta',
      meaning: 'Una casella temporanea di un servizio come Mailinator o 10MinuteMail. Presto non esisterà più.',
      action: 'Rimuovi',
    },
    {
      result: 'Di ruolo',
      meaning: 'Una casella condivisa come info@, vendite@ o supporto@. Raramente appartiene a chi prende le decisioni.',
      action: "Rimuovi per l'outreach, tieni per le liste di supporto",
    },
    {
      result: 'Duplicata',
      meaning: 'Lo stesso indirizzo compare più di una volta.',
      action: 'Tieni una copia',
    },
    {
      result: 'Catch-all, risolta',
      meaning: 'Il dominio accetta qualsiasi indirizzo. Giggal controlla la casella che c\'è dietro.',
      action: 'Tieni se valida, rimuovi se non valida',
    },
    {
      result: 'Sconosciuta',
      meaning: 'Il server non ha risposto in tempo o ha chiesto di riprovare più tardi (greylisting).',
      action: 'Riprova più tardi. I risultati sconosciuti vengono rimborsati.',
    },
  ],
  removesOutro:
    'Rimuovere questi indirizzi tiene basso il tuo tasso di rimbalzo. Questo protegge la reputazione del mittente, quindi più email raggiungono la posta in arrivo. Non conosci ancora i bounce? Leggi [cos\'è un hard bounce](/glossary/hard-bounce) e [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Perché molti strumenti di pulizia segnano buoni contatti come a rischio',
  riskyParas: [
    'Molti server di posta aziendali accettano ogni indirizzo, reale o inventato. Questo è un [dominio catch-all](/blog/what-is-a-catch-all-email-address). Su questi domini un controllo normale riceve lo stesso "sì" per una casella reale e per un errore di battitura. Molti servizi di pulizia lista email si fermano lì, segnano l\'indirizzo come "a rischio" e lasciano a te la decisione.',
    'Nelle liste B2B questi domini sono comuni. Le aziende più grandi spesso stanno dietro gateway di sicurezza che nascondono la casella. Se elimini questi indirizzi, perdi acquirenti reali. Se scrivi a tutti, quelli morti rimbalzano.',
    'Giggal risolve ogni indirizzo catch-all come valido o non valido per 1 credito, come qualsiasi altro controllo. Funziona anche sui domini dietro [gateway di sicurezza come Proofpoint e Mimecast](/seg-email-verification), dove altri strumenti restituiscono "sconosciuta". Scopri come funziona la [verifica catch-all](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Prima e dopo: una lista reale pulita',
  beforeAfterIntro: 'Ecco cosa ha fatto la pulizia su una lista B2B reale, resa anonima.',
  beforeAfterCols: ['Risultato', 'Indirizzi'],
  beforeAfterRows: [
    'Caricati',
    'Validi, tenuti',
    'Non validi, rimossi',
    'Usa e getta, rimossi',
    'Di ruolo, segnalati',
    'Duplicati, rimossi',
    'Catch-all risolti come validi, tenuti',
    'Catch-all risolti come non validi, rimossi',
    'Sconosciuti, rimborsati',
  ],
  beforeAfterOutro:
    'È stato rimosso il {pct}% della lista. Sono stati tenuti {kept} contatti catch-all che uno strumento di pulizia normale avrebbe segnato come a rischio.',

  pricingTitle: 'Prezzi della pulizia lista email',
  pricingIntro:
    'Paghi le email che pulisci, senza impegno mensile. Un credito pulisce un indirizzo, controlli catch-all inclusi. I crediti non scadono mai e i primi 1.000 sono gratuiti.',
  pricingFootnote: 'Pulire una lista di 10.000 contatti costa 9,90 $. I piani mensili fanno risparmiare il 10%. [Vedi tutti i prezzi](/pricing)',

  oftenTitle: 'Ogni quanto dovresti pulire la tua lista email?',
  oftenIntro:
    'Gli indirizzi smettono di funzionare con il tempo. Le persone cambiano lavoro, le aziende cambiano dominio e le vecchie caselle vengono chiuse. Le liste B2B invecchiano più in fretta. Pulisci la tua lista:',
  oftenBullets: [
    'Prima di una campagna verso una lista che non hai pulito negli ultimi mesi.',
    'Subito dopo aver importato una lista acquistata, estratta dal web o arricchita.',
    'Quando il tuo tasso di rimbalzo inizia a salire. Per le cold email, [resta sotto il 2%](/blog/good-bounce-rate-for-cold-email).',
    'A intervalli regolari per ogni lista a cui scrivi spesso.',
  ],
  oftenOutro:
    'Una pulizia regolare è ciò che si chiama igiene delle liste email: tenere solo gli indirizzi che esistono e possono ricevere la tua posta. È il modo più semplice per [ridurre il tasso di rimbalzo](/blog/how-to-reduce-email-bounce-rate). Per non far entrare indirizzi sbagliati fin dall\'inizio, verifica le nuove iscrizioni in tempo reale con l\'[API](/public/docs).',

  livesTitle: 'Pulisci la tua lista email dove si trova già',
  livesIntro: 'Non devi esportare e reimportare a mano.',
  livesBullets: [
    '**Strumenti di email e CRM:** invia i contatti puliti a [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid e [oltre 80 altre app](/integrations).',
    '**Automazione:** collega qualsiasi strumento tramite [Zapier](/integrations/zapier) o [n8n](/integrations/n8n).',
    '**API:** pulisci le liste dal tuo codice con l\'[API REST](/public/docs).',
    '**Assistenti AI:** controlla gli indirizzi dentro Claude, ChatGPT o Cursor tramite [MCP](/mcp).',
  ],

  vsTitle: 'Pulizia lista email e verifica email: la differenza',
  vsParas: [
    'Usano gli stessi controlli. La verifica email risponde alla domanda per un solo indirizzo. La pulizia lista email esegue questi controlli su un file intero e ti restituisce una lista a cui puoi scrivere. In inglese si chiama anche email scrubbing. È lo stesso lavoro.',
    'Per controllare un solo indirizzo, usa la [verifica email gratuita](/email-checker). Per sapere se un indirizzo è una casella usa e getta, usa la [verifica email temporanea](/disposable-email-checker).',
  ],

  faqTitle: 'Domande frequenti sulla pulizia lista email',
  faqs: [
    {
      q: 'Cosa fa un servizio di pulizia lista email?',
      a: "Controlla ogni indirizzo della tua lista e rimuove quelli che rimbalzerebbero o danneggerebbero la consegna: indirizzi non validi, usa e getta, duplicati e di ruolo. Giggal risolve anche gli indirizzi catch-all come validi o non validi invece di segnarli come a rischio.",
    },
    {
      q: 'Quanto costa pulire una lista email?',
      a: 'Un credito per indirizzo, controlli catch-all inclusi. 10.000 indirizzi costano 9,90 $ e i primi 1.000 crediti sono gratuiti. I crediti non scadono mai.',
    },
    {
      q: 'Posso pulire la mia lista email gratis?',
      a: 'Sì, fino a 1.000 indirizzi. Ogni nuovo account riceve 1.000 crediti gratuiti, senza carta, e non scadono mai. Dopo, 10.000 indirizzi costano 9,90 $.',
    },
    {
      q: 'Quanto tempo richiede la pulizia di una lista email?',
      a: 'La maggior parte delle liste è pronta in pochi minuti.',
    },
    {
      q: "I miei contatti riceveranno un'email?",
      a: 'No. I controlli parlano con il server di posta di destinazione e si fermano prima che venga inviato qualsiasi messaggio. I tuoi contatti non vedono nulla.',
    },
    {
      q: 'Cosa succede agli indirizzi catch-all?',
      a: 'Ognuno viene controllato e restituito come valido o non valido, per lo stesso credito. Tieni i contatti reali e scarti quelli morti.',
    },
    {
      q: 'Quali file posso caricare?',
      a: 'CSV o Excel, fino a 50.000 indirizzi per file. Scarichi la lista pulita in formato CSV.',
    },
    {
      q: "L'email scrubbing è la stessa cosa della pulizia lista email?",
      a: "Sì. Email scrubbing, pulizia delle liste e igiene delle liste email descrivono lo stesso lavoro: rimuovere gli indirizzi che non riceveranno la tua posta.",
    },
    {
      q: 'Cosa significa "sconosciuta" e viene addebitata?',
      a: 'Sconosciuta significa che il server di posta non ha dato una risposta chiara, spesso a causa del greylisting. Riprova più tardi. I crediti dei risultati sconosciuti vengono rimborsati.',
    },
  ],

  ctaHeadline: 'Pulisci la tua lista email in pochi minuti',

  relatedTitle: 'Strumenti e guide correlati',
  related: [
    { title: 'Verifica email gratuita', desc: 'Verifica un singolo indirizzo email: record MX e controllo della casella.' },
    { title: 'Verifica email temporanea', desc: 'Rileva caselle temporanee, false e usa e getta su oltre 100.000 domini.' },
    {
      title: 'Verifica email catch-all',
      desc: 'Come Giggal risolve i domini aziendali che accettano tutto in consegnabili o non consegnabili.',
    },
    {
      title: 'Quanto è precisa la verifica email',
      desc: 'Cosa misura una precisione dichiarata tra il 97 e il 99% e come testare un verificatore sulla tua lista.',
    },
    { title: 'Perché le cold email rimbalzano', desc: 'Le cause comuni di hard bounce e soft bounce e come leggere i codici di risposta del server.' },
    { title: 'Come ridurre il tasso di rimbalzo', desc: 'Cosa causa un tasso di rimbalzo alto e come abbassarlo.' },
    { title: 'Tasso di rimbalzo ideale per le cold email', desc: 'Sotto il 2% è sano. Cosa fare tra il 2 e il 5% e sopra il 5%.' },
    { title: 'API di verifica email', desc: 'Controlla gli indirizzi alla registrazione o pulisci i file dal tuo codice.' },
  ],
}

// German, "Sie". Terms as the German bulk and email checker pages: Postfach,
// Wegwerfadresse, Rollen-Adresse, Hard Bounce, Bounce-Rate, Credits.
const de: ListCleaningStrings = {
  metaTitle: 'E-Mail-Liste bereinigen mit Catch-all-Prüfung | Giggal.ai',
  ogTitle: 'E-Mail-Liste bereinigen und Catch-all-Leads behalten',
  description:
    'E-Mail-Liste bereinigen: Giggal.ai entfernt ungültige, Wegwerf- und doppelte Adressen und prüft Catch-all-Adressen, statt sie zu löschen. 1.000 Credits gratis.',
  ogLocale: 'de_DE',
  ogAlt: 'Giggal.ai Dienst zum Bereinigen von E-Mail-Listen',
  crumb: 'E-Mail-Liste bereinigen',
  serviceName: 'Giggal.ai E-Mail-Listen-Bereinigung',
  serviceType: 'Bereinigung und Verifizierung von E-Mail-Listen',

  h1Lead: 'E-Mail-Liste bereinigen mit einem Dienst, der auch',
  h1Highlight: 'Catch-all-Leads prüft',
  heroIntro:
    'Laden Sie Ihre Liste hoch und erhalten Sie sie in wenigen Minuten bereinigt zurück. Unser Dienst entfernt ungültige Adressen, Wegwerfadressen, Rollen-Adressen und Duplikate, bevor sie bouncen und Ihrer Absenderreputation schaden. Viele Tools zur Listenbereinigung markieren jede Catch-all-Adresse als "riskant" und überlassen Ihnen die Entscheidung. Wir prüfen jede einzelne und sagen Ihnen, an welche Sie sicher senden können.',
  heroCta: 'Liste kostenlos bereinigen',
  heroPricing: 'Preise ansehen',
  heroNote: '1.000 kostenlose Credits, ohne Karte. CSV oder Excel, bis zu 50.000 Adressen pro Datei. Credits verfallen nie.',
  demoDone: 'Fertig',
  demoDeliverable: 'Zustellbar',
  demoUndeliverable: 'Unzustellbar',

  ratings: {
    reviews: (count) => `${count} Bewertungen`,
    ratedAria: (rating, platform) => `Giggal.ai mit ${rating.replace('.', ',')} von 5 auf ${platform} bewertet`,
  },
  awards: {
    headingLead: 'Giggal.ai ist ausgezeichnet als',
    headingRest: 'Leader auf SourceForge und Slashdot',
    showLabel: '{badge} anzeigen',
  },

  stepsTitle: 'E-Mail-Liste in drei Schritten bereinigen',
  steps: [
    {
      title: 'Liste hochladen',
      body: 'Laden Sie eine CSV- oder Excel-Datei mit bis zu 50.000 Adressen hoch. Ist Ihre Liste größer, teilen Sie sie in mehrere Dateien auf.',
    },
    {
      title: 'Wir prüfen jede Adresse',
      body: 'Wir prüfen die Mailserver der Domain (MX) und ob das Postfach selbst existiert. Dazu kommen die Prüfungen auf Wegwerfadressen, Rollen-Adressen, Duplikate und Catch-all. Ihre Kontakte erhalten keine E-Mail.',
    },
    {
      title: 'Bereinigte Liste herunterladen',
      body: 'Sie erhalten eine CSV-Datei mit einem Ergebnis in jeder Zeile. So können Sie jede Adresse behalten, entfernen oder prüfen.',
    },
  ],

  removesTitle: 'Was beim Bereinigen der E-Mail-Liste entfernt wird',
  removesCols: ['Ergebnis', 'Bedeutung', 'Was zu tun ist'],
  removesRows: [
    {
      result: 'Ungültig',
      meaning: 'Das Postfach oder die Domain existiert nicht. Eine E-Mail an diese Adresse erzeugt einen Hard Bounce.',
      action: 'Entfernen',
    },
    {
      result: 'Wegwerfadresse',
      meaning: 'Ein temporäres Postfach von einem Dienst wie Mailinator oder 10MinuteMail. Es verschwindet bald.',
      action: 'Entfernen',
    },
    {
      result: 'Rollen-Adresse',
      meaning: 'Ein geteiltes Postfach wie info@, vertrieb@ oder support@. Selten ein Entscheider.',
      action: 'Für Akquise entfernen, für Support-Listen behalten',
    },
    {
      result: 'Duplikat',
      meaning: 'Dieselbe Adresse steht mehr als einmal in der Liste.',
      action: 'Eine Kopie behalten',
    },
    {
      result: 'Catch-all, geprüft',
      meaning: 'Die Domain nimmt jede Adresse an. Giggal prüft das Postfach dahinter.',
      action: 'Behalten, wenn gültig, entfernen, wenn ungültig',
    },
    {
      result: 'Unbekannt',
      meaning: 'Der Server hat nicht rechtzeitig geantwortet oder um einen späteren Versuch gebeten (Greylisting).',
      action: 'Später erneut prüfen. Unbekannte Ergebnisse werden erstattet.',
    },
  ],
  removesOutro:
    'Wenn Sie diese Adressen entfernen, bleibt Ihre Bounce-Rate niedrig. Das schützt Ihre Absenderreputation, und mehr E-Mails landen im Posteingang. Neu beim Thema Bounces? Lesen Sie, [was ein Hard Bounce ist](/glossary/hard-bounce), und den Vergleich [Hard Bounce vs. Soft Bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Warum viele Tools zur Listenbereinigung gute Leads als riskant markieren',
  riskyParas: [
    'Viele Mailserver von Unternehmen nehmen jede Adresse an, echt oder erfunden. Das ist eine [Catch-all-Domain](/blog/what-is-a-catch-all-email-address). Auf diesen Domains erhält eine normale Prüfung dasselbe "Ja" für ein echtes Postfach und für einen Tippfehler. Viele Dienste zur Bereinigung von E-Mail-Listen hören hier auf, markieren die Adresse als "riskant" und überlassen Ihnen die Entscheidung.',
    'In B2B-Listen sind diese Domains häufig. Größere Unternehmen liegen oft hinter Sicherheits-Gateways, die das Postfach verbergen. Löschen Sie diese Adressen, verlieren Sie echte Käufer. Senden Sie an sie, bouncen die toten Adressen.',
    'Giggal prüft jede Catch-all-Adresse und liefert gültig oder ungültig. Das kostet 1 Credit, wie jede andere Prüfung. Es funktioniert auch bei Domains hinter [Sicherheits-Gateways wie Proofpoint und Mimecast](/seg-email-verification), bei denen andere Tools "unbekannt" liefern. So funktioniert die [Catch-all-Verifizierung](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Vorher und nachher: eine echte bereinigte Liste',
  beforeAfterIntro: 'So hat die Bereinigung eine echte, anonymisierte B2B-Liste verändert.',
  beforeAfterCols: ['Ergebnis', 'Adressen'],
  beforeAfterRows: [
    'Hochgeladen',
    'Gültig, behalten',
    'Ungültig, entfernt',
    'Wegwerfadressen, entfernt',
    'Rollen-Adressen, markiert',
    'Duplikate, entfernt',
    'Catch-all als gültig geprüft, behalten',
    'Catch-all als ungültig geprüft, entfernt',
    'Unbekannt, erstattet',
  ],
  beforeAfterOutro:
    '{pct} % der Liste wurden entfernt. {kept} Catch-all-Kontakte wurden behalten, die ein normales Tool als riskant markiert hätte.',

  pricingTitle: 'Preise für die Bereinigung von E-Mail-Listen',
  pricingIntro:
    'Sie zahlen für die E-Mails, die Sie bereinigen, ohne monatliche Bindung. Ein Credit bereinigt eine Adresse, Catch-all-Prüfungen inklusive. Credits verfallen nie, und die ersten 1.000 sind kostenlos.',
  pricingFootnote: 'Eine Liste mit 10.000 Kontakten zu bereinigen kostet 9,90 $. Mit dem Monatsabo sparen Sie 10 %. [Alle Preise ansehen](/pricing)',

  oftenTitle: 'Wie oft sollten Sie Ihre E-Mail-Liste bereinigen?',
  oftenIntro:
    'Adressen veralten von selbst. Menschen wechseln den Job, Unternehmen wechseln die Domain, und alte Postfächer werden geschlossen. B2B-Listen veralten am schnellsten. Bereinigen Sie Ihre Liste:',
  oftenBullets: [
    'Vor einer Kampagne an eine Liste, die Sie in den letzten Monaten nicht bereinigt haben.',
    'Direkt nach dem Import einer gekauften, gescrapten oder angereicherten Liste.',
    'Wenn Ihre Bounce-Rate steigt. Für Cold-E-Mails gilt: [unter 2 % bleiben](/blog/good-bounce-rate-for-cold-email).',
    'In festen Abständen bei jeder Liste, an die Sie oft senden.',
  ],
  oftenOutro:
    'Regelmäßiges Bereinigen ist das, was man E-Mail-Hygiene nennt: nur Adressen behalten, die existieren und Ihre E-Mails empfangen können. Es ist der einfachste Weg, [die Bounce-Rate zu senken](/blog/how-to-reduce-email-bounce-rate). Damit schlechte Adressen gar nicht erst in die Liste kommen, prüfen Sie neue Anmeldungen in Echtzeit mit der [API](/public/docs).',

  livesTitle: 'E-Mail-Liste dort bereinigen, wo sie schon liegt',
  livesIntro: 'Sie müssen nicht von Hand exportieren und wieder importieren.',
  livesBullets: [
    '**E-Mail- und CRM-Tools:** Senden Sie bereinigte Kontakte an [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid und [über 80 weitere Apps](/integrations).',
    '**Automatisierung:** Verbinden Sie jedes Tool über [Zapier](/integrations/zapier) oder [n8n](/integrations/n8n).',
    '**API:** Bereinigen Sie Listen aus Ihrem eigenen Code mit der [REST-API](/public/docs).',
    '**KI-Assistenten:** Prüfen Sie Adressen direkt in Claude, ChatGPT oder Cursor über [MCP](/mcp).',
  ],

  vsTitle: 'E-Mail-Liste bereinigen oder E-Mail-Adressen verifizieren?',
  vsParas: [
    'Beide nutzen dieselben Prüfungen. Die E-Mail-Verifizierung beantwortet die Frage für eine Adresse. Die Bereinigung einer E-Mail-Liste führt diese Prüfungen für eine ganze Datei aus und gibt Ihnen eine Liste zurück, an die Sie senden können. Auf Englisch heißt das auch Email Scrubbing oder Email List Cleaning. Es ist dieselbe Aufgabe.',
    'Um eine einzelne Adresse zu prüfen, nutzen Sie den [kostenlosen E-Mail-Prüfer](/email-checker). Ob eine Adresse ein Wegwerf-Postfach ist, zeigt Ihnen die [Prüfung auf Wegwerf-E-Mails](/disposable-email-checker).',
  ],

  faqTitle: 'Häufige Fragen zum Bereinigen von E-Mail-Listen',
  faqs: [
    {
      q: 'Was macht ein Dienst zur Bereinigung von E-Mail-Listen?',
      a: 'Er prüft jede Adresse Ihrer Liste und entfernt die Adressen, die bouncen oder Ihrer Zustellbarkeit schaden würden: ungültige Adressen, Wegwerfadressen, Duplikate und Rollen-Adressen. Giggal prüft außerdem Catch-all-Adressen und liefert gültig oder ungültig, statt sie als riskant zu markieren.',
    },
    {
      q: 'Was kostet es, eine E-Mail-Liste zu bereinigen?',
      a: 'Ein Credit pro Adresse, Catch-all-Prüfungen inklusive. 10.000 Adressen kosten 9,90 $, und Ihre ersten 1.000 Credits sind kostenlos. Credits verfallen nie.',
    },
    {
      q: 'Kann ich meine E-Mail-Liste kostenlos bereinigen?',
      a: 'Ja, bis zu 1.000 Adressen. Jedes neue Konto erhält 1.000 kostenlose Credits, ohne Karte, und sie verfallen nie. Danach kosten 10.000 Adressen 9,90 $.',
    },
    {
      q: 'Wie lange dauert das Bereinigen einer E-Mail-Liste?',
      a: 'Die meisten Listen sind in wenigen Minuten fertig.',
    },
    {
      q: 'Erhalten meine Kontakte eine E-Mail?',
      a: 'Nein. Die Prüfungen sprechen mit dem empfangenden Mailserver und hören auf, bevor eine Nachricht gesendet wird. Ihre Kontakte sehen nichts davon.',
    },
    {
      q: 'Was passiert mit Catch-all-Adressen?',
      a: 'Jede wird geprüft und als gültig oder ungültig zurückgegeben, ebenfalls für 1 Credit. Sie behalten die echten Kontakte und entfernen die toten.',
    },
    {
      q: 'Welche Dateien kann ich hochladen?',
      a: 'CSV oder Excel, bis zu 50.000 Adressen pro Datei. Die bereinigte Liste laden Sie als CSV herunter.',
    },
    {
      q: 'Ist Email Scrubbing dasselbe wie das Bereinigen einer E-Mail-Liste?',
      a: 'Ja. Email Scrubbing, Listenbereinigung und E-Mail-Hygiene beschreiben dieselbe Aufgabe: Adressen entfernen, die Ihre E-Mails nicht empfangen werden.',
    },
    {
      q: 'Was bedeutet "unbekannt", und zahle ich dafür?',
      a: 'Unbekannt bedeutet, dass der Mailserver keine klare Antwort gegeben hat, oft wegen Greylisting. Versuchen Sie es später erneut. Credits für unbekannte Ergebnisse werden erstattet.',
    },
  ],

  ctaHeadline: 'E-Mail-Liste in wenigen Minuten bereinigen',

  relatedTitle: 'Verwandte Tools und Ratgeber',
  related: [
    { title: 'Kostenloser E-Mail-Prüfer', desc: 'Eine einzelne E-Mail-Adresse prüfen: MX-Einträge und Postfach-Prüfung.' },
    { title: 'Wegwerf-E-Mails prüfen', desc: 'Temporäre, gefälschte und Wegwerf-Postfächer auf über 100.000 Domains erkennen.' },
    {
      title: 'Catch-all-Verifizierung',
      desc: 'Wie Giggal Catch-all-Domains von Unternehmen als zustellbar oder unzustellbar einordnet.',
    },
    {
      title: 'Wie genau E-Mail-Verifizierung ist',
      desc: 'Was die Angaben von 97 bis 99 % Genauigkeit messen und wie Sie einen Prüfer an Ihrer eigenen Liste testen.',
    },
    { title: 'Warum Cold-E-Mails bouncen', desc: 'Die häufigsten Ursachen für Hard und Soft Bounces und wie Sie Server-Antwortcodes lesen.' },
    { title: 'E-Mail-Bounce-Rate senken', desc: 'Was eine hohe Bounce-Rate verursacht und wie Sie sie senken.' },
    { title: 'Gute Bounce-Rate für Cold-E-Mails', desc: 'Unter 2 % ist gesund. Was bei 2 bis 5 % und über 5 % zu tun ist.' },
    { title: 'E-Mail-Verifizierungs-API', desc: 'Adressen bei der Anmeldung prüfen oder Dateien aus Ihrem eigenen Code bereinigen.' },
  ],
}

// Spanish: one page for every Spanish-speaking country, "tú". Terms as the Spanish
// bulk and email checker pages: correo, buzón, desechable, de rol, rebote duro.
const es: ListCleaningStrings = {
  metaTitle: 'Limpieza de listas de correo con catch-all resuelto | Giggal.ai',
  ogTitle: 'Servicio de limpieza de listas de correo que conserva los catch-all',
  description:
    'Limpieza de listas de correo que elimina direcciones no válidas, desechables y duplicadas y resuelve los catch-all en lugar de borrarlos. 1.000 créditos gratis.',
  ogLocale: 'es_LA',
  ogAlt: 'Servicio de limpieza de listas de correo de Giggal.ai',
  crumb: 'Limpieza de listas de correo',
  serviceName: 'Giggal.ai Servicio de limpieza de listas de correo',
  serviceType: 'Limpieza y verificación de listas de correo',

  h1Lead: 'Servicio de limpieza de listas de correo que también',
  h1Highlight: 'resuelve los contactos catch-all',
  heroIntro:
    'Sube tu lista y recíbela limpia en minutos. Nuestro servicio de limpieza de listas de correo elimina las direcciones no válidas, desechables, de rol y duplicadas antes de que reboten y dañen tu reputación de remitente. Muchos limpiadores de listas marcan cada dirección catch-all como "arriesgada" y te dejan la decisión. Nosotros comprobamos cada una y te decimos a cuáles puedes enviar sin riesgo.',
  heroCta: 'Limpia mi lista gratis',
  heroPricing: 'Ver precios',
  heroNote: '1.000 créditos gratis, sin tarjeta. CSV o Excel, hasta 50.000 direcciones por archivo. Los créditos no caducan.',
  demoDone: 'Listo',
  demoDeliverable: 'Entregable',
  demoUndeliverable: 'No entregable',

  ratings: {
    reviews: (count) => `${count} reseñas`,
    ratedAria: (rating, platform) => `Giggal.ai tiene una valoración de ${rating.replace('.', ',')} sobre 5 en ${platform}`,
  },
  awards: {
    headingLead: 'Giggal.ai está valorado como',
    headingRest: 'Líder en SourceForge y Slashdot',
    showLabel: 'Mostrar {badge}',
  },

  stepsTitle: 'Limpia tu lista de correo en tres pasos',
  steps: [
    {
      title: 'Sube tu lista',
      body: 'Añade un archivo CSV o Excel con hasta 50.000 direcciones. ¿Tu lista es más grande? Divídela en varios archivos.',
    },
    {
      title: 'Comprobamos cada dirección',
      body: 'Consultamos los servidores de correo del dominio (MX) y si el propio buzón existe. También comprobamos si la dirección es desechable, de rol, duplicada o catch-all. No se envía ningún correo a tus contactos.',
    },
    {
      title: 'Descarga la lista limpia',
      body: 'Recibes un CSV con un resultado en cada fila, para que conserves, elimines o revises cada dirección.',
    },
  ],

  removesTitle: 'Qué elimina la limpieza de listas de correo',
  removesCols: ['Resultado', 'Qué significa', 'Qué hacer'],
  removesRows: [
    {
      result: 'No válido',
      meaning: 'El buzón o el dominio no existe. Enviar a esa dirección causa un rebote duro.',
      action: 'Eliminar',
    },
    {
      result: 'Desechable',
      meaning: 'Un buzón temporal de un servicio como Mailinator o 10MinuteMail. Pronto dejará de existir.',
      action: 'Eliminar',
    },
    {
      result: 'De rol',
      meaning: 'Un buzón compartido como info@, ventas@ o soporte@. Rara vez es una persona que toma decisiones.',
      action: 'Eliminar para prospección, conservar para listas de soporte',
    },
    {
      result: 'Duplicado',
      meaning: 'La misma dirección aparece más de una vez.',
      action: 'Conservar una copia',
    },
    {
      result: 'Catch-all, resuelto',
      meaning: 'El dominio acepta cualquier dirección. Giggal comprueba el buzón que hay detrás.',
      action: 'Conservar si es válido, eliminar si no es válido',
    },
    {
      result: 'Desconocido',
      meaning: 'El servidor no respondió a tiempo o pidió volver a intentarlo más tarde (greylisting).',
      action: 'Reintentar más tarde. Los resultados desconocidos se reembolsan.',
    },
  ],
  removesOutro:
    'Eliminar estas direcciones mantiene baja tu tasa de rebote. Eso protege tu reputación de remitente, así que más correos llegan a la bandeja de entrada. Si no conoces los rebotes, lee [qué es un rebote duro](/glossary/hard-bounce) y [rebote duro vs rebote suave](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Por qué muchos limpiadores de listas marcan buenos contactos como arriesgados',
  riskyParas: [
    'Muchos servidores de correo de empresa aceptan cualquier dirección, real o inventada. Eso es un [dominio catch-all](/blog/what-is-a-catch-all-email-address). En estos dominios, una comprobación normal recibe el mismo "sí" para un buzón real y para un error de escritura. Muchos servicios de limpieza de listas de correo se detienen ahí, marcan la dirección como "arriesgada" y te dejan la decisión.',
    'En las listas B2B estos dominios son habituales. Las empresas grandes suelen estar detrás de gateways de seguridad que ocultan el buzón. Si borras estas direcciones, pierdes compradores reales. Si les envías, las direcciones muertas rebotan.',
    'Giggal resuelve cada dirección catch-all como válida o no válida por 1 crédito, igual que cualquier otra comprobación. También funciona en dominios protegidos por [gateways de seguridad como Proofpoint y Mimecast](/seg-email-verification), donde otras herramientas devuelven "desconocido". Mira cómo funciona la [verificación catch-all](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Antes y después: una lista real limpiada',
  beforeAfterIntro: 'Esto es lo que hizo la limpieza con una lista B2B real, anonimizada.',
  beforeAfterCols: ['Resultado', 'Direcciones'],
  beforeAfterRows: [
    'Subidas',
    'Válidas, conservadas',
    'No válidas, eliminadas',
    'Desechables, eliminadas',
    'De rol, marcadas',
    'Duplicadas, eliminadas',
    'Catch-all resueltas como válidas, conservadas',
    'Catch-all resueltas como no válidas, eliminadas',
    'Desconocidas, reembolsadas',
  ],
  beforeAfterOutro:
    'Se eliminó el {pct} % de la lista. Se conservaron {kept} contactos catch-all que un limpiador normal habría marcado como arriesgados.',

  pricingTitle: 'Precios de la limpieza de listas de correo',
  pricingIntro:
    'Paga por los correos que limpias, sin compromiso mensual. Un crédito limpia una dirección, con la comprobación catch-all incluida. Los créditos no caducan y los primeros 1.000 son gratis.',
  pricingFootnote: 'Limpiar una lista de 10.000 contactos cuesta 9,90 $. Los planes mensuales ahorran un 10 %. [Ver todos los precios](/pricing)',

  oftenTitle: '¿Cada cuánto deberías limpiar tu lista de correo?',
  oftenIntro:
    'Las direcciones dejan de funcionar con el tiempo. Las personas cambian de trabajo, las empresas cambian de dominio y los buzones antiguos se cierran. Las listas B2B se quedan obsoletas más rápido. Limpia tu lista:',
  oftenBullets: [
    'Antes de una campaña a cualquier lista que no hayas limpiado en los últimos meses.',
    'Justo después de importar una lista comprada, extraída de sitios web o enriquecida.',
    'Cuando tu tasa de rebote empieza a subir. Para cold email, [mantente por debajo del 2 %](/blog/good-bounce-rate-for-cold-email).',
    'Con una frecuencia fija para cualquier lista a la que envíes a menudo.',
  ],
  oftenOutro:
    'La limpieza regular es lo que se llama higiene de correo: conservar solo las direcciones que existen y pueden recibir tu correo. Es la forma más sencilla de [reducir tu tasa de rebote](/blog/how-to-reduce-email-bounce-rate). Para que las direcciones malas no entren desde el principio, verifica los registros nuevos en tiempo real con la [API](/public/docs).',

  livesTitle: 'Limpia tu lista de correo donde ya la tienes',
  livesIntro: 'No tienes que exportar y volver a importar a mano.',
  livesBullets: [
    '**Herramientas de email y CRM:** envía los contactos limpios a [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid y [más de 80 apps](/integrations).',
    '**Automatización:** conecta cualquier herramienta con [Zapier](/integrations/zapier) o [n8n](/integrations/n8n).',
    '**API:** limpia listas desde tu propio código con la [API REST](/public/docs).',
    '**Asistentes de IA:** comprueba direcciones dentro de Claude, ChatGPT o Cursor con [MCP](/mcp).',
  ],

  vsTitle: 'Limpieza de listas de correo vs verificación de correo',
  vsParas: [
    'Las dos usan las mismas comprobaciones. La verificación de correo responde la pregunta para una dirección. La limpieza de listas de correo aplica esas comprobaciones a un archivo entero y te devuelve una lista a la que puedes enviar. También se llama depuración de listas (email scrubbing en inglés) o uso de un limpiador de listas de correo. Es el mismo trabajo.',
    'Para comprobar una sola dirección, usa el [verificador de correo gratis](/email-checker). Para saber si una dirección es un buzón desechable, usa el [verificador de correos desechables](/disposable-email-checker).',
  ],

  faqTitle: 'Preguntas frecuentes sobre la limpieza de listas de correo',
  faqs: [
    {
      q: '¿Qué hace un servicio de limpieza de listas de correo?',
      a: 'Comprueba cada dirección de tu lista y elimina las que rebotarían o dañarían tu entregabilidad: direcciones no válidas, desechables, duplicadas y de rol. Giggal también resuelve las direcciones catch-all como válidas o no válidas en lugar de marcarlas como arriesgadas.',
    },
    {
      q: '¿Cuánto cuesta limpiar una lista de correo?',
      a: 'Un crédito por dirección, con la comprobación catch-all incluida. 10.000 direcciones cuestan 9,90 $ y tus primeros 1.000 créditos son gratis. Los créditos no caducan.',
    },
    {
      q: '¿Puedo limpiar mi lista de correo gratis?',
      a: 'Sí, hasta 1.000 direcciones. Cada cuenta nueva recibe 1.000 créditos gratis, sin tarjeta, y no caducan. Después, 10.000 direcciones cuestan 9,90 $.',
    },
    {
      q: '¿Cuánto tarda la limpieza de una lista de correo?',
      a: 'La mayoría de las listas se procesan en minutos.',
    },
    {
      q: '¿Mis contactos recibirán un correo?',
      a: 'No. Las comprobaciones hablan con el servidor de correo de destino y se detienen antes de enviar ningún mensaje. Tus contactos no ven nada.',
    },
    {
      q: '¿Qué pasa con las direcciones catch-all?',
      a: 'Cada una se comprueba y se devuelve como válida o no válida, por el mismo crédito. Conservas los contactos reales y descartas los muertos.',
    },
    {
      q: '¿Qué archivos puedo subir?',
      a: 'CSV o Excel, hasta 50.000 direcciones por archivo. Descargas la lista limpia en CSV.',
    },
    {
      q: '¿La depuración de listas es lo mismo que la limpieza de listas de correo?',
      a: 'Sí. Depuración de listas (email scrubbing), limpieza de listas e higiene de correo describen el mismo trabajo: eliminar las direcciones que no recibirán tu correo.',
    },
    {
      q: '¿Qué significa "desconocido" y tengo que pagarlo?',
      a: 'Desconocido significa que el servidor de correo no dio una respuesta clara, a menudo por greylisting. Vuelve a intentarlo más tarde. Los créditos de los resultados desconocidos se reembolsan.',
    },
  ],

  ctaHeadline: 'Limpia tu lista de correo en minutos',

  relatedTitle: 'Herramientas y guías relacionadas',
  related: [
    { title: 'Verificador de correo gratis', desc: 'Verifica una sola dirección de correo: registros MX y comprobación del buzón.' },
    { title: 'Verificador de correos desechables', desc: 'Detecta buzones temporales, falsos y desechables en más de 100.000 dominios.' },
    {
      title: 'Verificación de correos catch-all',
      desc: 'Cómo resuelve Giggal en entregables o no entregables las direcciones de dominios de empresa que aceptan todo.',
    },
    {
      title: 'Qué tan precisa es la verificación de correo',
      desc: 'Qué miden las cifras de precisión del 97 al 99 % y cómo probar un verificador con tu propia lista.',
    },
    { title: 'Por qué rebotan los cold emails', desc: 'Las causas habituales de rebotes duros y suaves, y cómo leer los códigos de respuesta del servidor.' },
    { title: 'Cómo reducir la tasa de rebote', desc: 'Qué causa una tasa de rebote alta y cómo bajarla.' },
    { title: 'Tasa de rebote aceptable en cold email', desc: 'Menos del 2 % es una tasa sana. Qué hacer entre el 2 y el 5 % y por encima del 5 %.' },
    { title: 'API de verificación de correo', desc: 'Comprueba direcciones en el registro o limpia archivos desde tu propio código.' },
  ],
}

// Brazilian Portuguese, "você". Terms as the Brazilian bulk and email checker
// pages: e-mail (with the hyphen), caixa, descartável, endereço de função, bounce.
const ptBr: ListCleaningStrings = {
  metaTitle: 'Limpeza de lista de e-mail com catch-all resolvido | Giggal.ai',
  ogTitle: 'Serviço de limpeza de lista de e-mail que mantém os leads catch-all',
  description:
    'Serviço de limpeza de lista de e-mail que remove e-mails inválidos, descartáveis e duplicados e resolve os catch-all em vez de apagá-los. 1.000 créditos grátis.',
  ogLocale: 'pt_BR',
  ogAlt: 'Serviço de limpeza de lista de e-mail da Giggal.ai',
  crumb: 'Limpeza de lista de e-mail',
  serviceName: 'Giggal.ai Serviço de limpeza de lista de e-mail',
  serviceType: 'Limpeza e verificação de listas de e-mail',

  h1Lead: 'Serviço de limpeza de lista de e-mail que também',
  h1Highlight: 'resolve os leads catch-all',
  heroIntro:
    'Envie sua lista e receba a versão limpa em minutos. Nosso serviço de limpeza de lista de e-mail remove os endereços inválidos, descartáveis, de função e duplicados antes que deem bounce e prejudiquem sua reputação de remetente. Muitas ferramentas de limpeza marcam todo endereço catch-all como "arriscado" e deixam a decisão com você. Nós verificamos cada um e dizemos para quais é seguro enviar.',
  heroCta: 'Limpar minha lista grátis',
  heroPricing: 'Ver preços',
  heroNote: '1.000 créditos grátis, sem cartão. CSV ou Excel, até 50.000 endereços por arquivo. Os créditos nunca expiram.',
  demoDone: 'Concluído',
  demoDeliverable: 'Entregável',
  demoUndeliverable: 'Não entregável',

  ratings: {
    reviews: (count) => `${count} avaliações`,
    ratedAria: (rating, platform) => `Giggal.ai tem nota ${rating.replace('.', ',')} de 5 no ${platform}`,
  },
  awards: {
    headingLead: 'A Giggal.ai é avaliada como',
    headingRest: 'Líder no SourceForge e no Slashdot',
    showLabel: 'Mostrar {badge}',
  },

  stepsTitle: 'Limpe sua lista de e-mail em três passos',
  steps: [
    {
      title: 'Envie sua lista',
      body: 'Adicione um arquivo CSV ou Excel com até 50.000 endereços. Sua lista é maior? Divida em alguns arquivos.',
    },
    {
      title: 'Verificamos cada endereço',
      body: 'Consultamos os servidores de e-mail do domínio (MX) e se a própria caixa existe. Também verificamos se o endereço é descartável, de função, duplicado ou catch-all. Nenhum e-mail é enviado aos seus contatos.',
    },
    {
      title: 'Baixe a lista limpa',
      body: 'Você recebe um CSV com um resultado em cada linha, para manter, remover ou revisar cada endereço.',
    },
  ],

  removesTitle: 'O que a limpeza de lista de e-mail remove',
  removesCols: ['Resultado', 'O que significa', 'O que fazer'],
  removesRows: [
    {
      result: 'Inválido',
      meaning: 'A caixa ou o domínio não existe. Enviar para esse endereço causa um hard bounce.',
      action: 'Remover',
    },
    {
      result: 'Descartável',
      meaning: 'Uma caixa temporária de um serviço como Mailinator ou 10MinuteMail. Ela vai deixar de existir em breve.',
      action: 'Remover',
    },
    {
      result: 'De função',
      meaning: 'Uma caixa compartilhada como contato@, vendas@ ou suporte@. Raramente é uma pessoa que toma decisões.',
      action: 'Remover para prospecção, manter para listas de suporte',
    },
    {
      result: 'Duplicado',
      meaning: 'O mesmo endereço aparece mais de uma vez.',
      action: 'Manter uma cópia',
    },
    {
      result: 'Catch-all, resolvido',
      meaning: 'O domínio aceita qualquer endereço. A Giggal verifica a caixa por trás dele.',
      action: 'Manter se for válido, remover se for inválido',
    },
    {
      result: 'Desconhecido',
      meaning: 'O servidor não respondeu a tempo ou pediu para tentar de novo mais tarde (greylisting).',
      action: 'Tente de novo mais tarde. Os resultados desconhecidos são reembolsados.',
    },
  ],
  removesOutro:
    'Remover esses endereços mantém sua taxa de bounce baixa. Isso protege sua reputação de remetente, então mais e-mails chegam à caixa de entrada. Bounces são novidade para você? Leia [o que é um hard bounce](/glossary/hard-bounce) e [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Por que muitas ferramentas de limpeza marcam bons leads como arriscados',
  riskyParas: [
    'Muitos servidores de e-mail de empresas aceitam qualquer endereço, real ou inventado. Isso é um [domínio catch-all](/blog/what-is-a-catch-all-email-address). Nesses domínios, uma verificação normal recebe o mesmo "sim" para uma caixa real e para um erro de digitação. Muitos serviços de limpeza de lista de e-mail param aí, marcam o endereço como "arriscado" e deixam a decisão com você.',
    'Em listas B2B esses domínios são comuns. Empresas maiores costumam ficar atrás de gateways de segurança que escondem a caixa. Se você apaga esses endereços, joga fora compradores reais. Se envia para eles, os endereços mortos dão bounce.',
    'A Giggal resolve cada endereço catch-all como válido ou inválido pelo mesmo 1 crédito de qualquer outra verificação. Ela também funciona em domínios atrás de [gateways de segurança como Proofpoint e Mimecast](/seg-email-verification), onde outras ferramentas devolvem "desconhecido". Veja como funciona a [verificação catch-all](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Antes e depois: uma lista real limpa',
  beforeAfterIntro: 'Veja o que a limpeza fez com uma lista B2B real, anonimizada.',
  beforeAfterCols: ['Resultado', 'Endereços'],
  beforeAfterRows: [
    'Enviados',
    'Válidos, mantidos',
    'Inválidos, removidos',
    'Descartáveis, removidos',
    'De função, sinalizados',
    'Duplicados, removidos',
    'Catch-all resolvidos como válidos, mantidos',
    'Catch-all resolvidos como inválidos, removidos',
    'Desconhecidos, reembolsados',
  ],
  beforeAfterOutro:
    '{pct} % da lista foi removida. Foram mantidos {kept} contatos catch-all que uma ferramenta de limpeza comum teria marcado como arriscados.',

  pricingTitle: 'Preços da limpeza de lista de e-mail',
  pricingIntro:
    'Pague pelos e-mails que você limpa, sem compromisso mensal. Um crédito limpa um endereço, com a verificação catch-all incluída. Os créditos nunca expiram e os primeiros 1.000 são grátis.',
  pricingFootnote: 'Limpar uma lista de 10.000 contatos custa US$ 9,90. Os planos mensais economizam 10 %. [Ver todos os preços](/pricing)',

  oftenTitle: 'Com que frequência você deve limpar sua lista de e-mail?',
  oftenIntro:
    'Os endereços ficam desatualizados com o tempo. As pessoas mudam de emprego, as empresas mudam de domínio e caixas antigas são desativadas. Listas B2B ficam desatualizadas mais rápido. Limpe sua lista:',
  oftenBullets: [
    'Antes de uma campanha para qualquer lista que você não limpou nos últimos meses.',
    'Logo depois de importar uma lista comprada, extraída de sites ou enriquecida.',
    'Quando sua taxa de bounce começar a subir. Para cold email, [fique abaixo de 2 %](/blog/good-bounce-rate-for-cold-email).',
    'Em intervalos regulares, para qualquer lista que você usa com frequência.',
  ],
  oftenOutro:
    'A limpeza regular é o que se chama de higiene de e-mail: manter apenas endereços que existem e podem receber suas mensagens. É o jeito mais simples de [reduzir sua taxa de bounce](/blog/how-to-reduce-email-bounce-rate). Para impedir que endereços ruins entrem na lista, verifique os novos cadastros em tempo real com a [API](/public/docs).',

  livesTitle: 'Limpe sua lista de e-mail onde ela já está',
  livesIntro: 'Você não precisa exportar e importar de novo à mão.',
  livesBullets: [
    '**Ferramentas de e-mail e CRM:** envie contatos limpos para o [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid e [mais de 80 apps](/integrations).',
    '**Automação:** conecte qualquer ferramenta pelo [Zapier](/integrations/zapier) ou pelo [n8n](/integrations/n8n).',
    '**API:** limpe listas a partir do seu próprio código com a [API REST](/public/docs).',
    '**Assistentes de IA:** verifique endereços dentro do Claude, do ChatGPT ou do Cursor via [MCP](/mcp).',
  ],

  vsTitle: 'Limpeza de lista de e-mail vs verificação de e-mail',
  vsParas: [
    'As duas usam as mesmas verificações. A verificação de e-mail responde à pergunta para um endereço. A limpeza de lista de e-mail roda essas verificações em um arquivo inteiro e devolve uma lista para a qual você pode enviar. Você também vai ver isso com o nome de higienização de lista (email scrubbing, em inglês) ou de ferramenta de limpeza de lista. É o mesmo trabalho.',
    'Para verificar um único endereço, use o [verificador de e-mail grátis](/email-checker). Para saber se um endereço é uma caixa descartável, use o [verificador de e-mail descartável](/disposable-email-checker).',
  ],

  faqTitle: 'Perguntas frequentes sobre limpeza de lista de e-mail',
  faqs: [
    {
      q: 'O que faz um serviço de limpeza de lista de e-mail?',
      a: 'Ele verifica cada endereço da sua lista e remove os que dariam bounce ou prejudicariam sua entregabilidade: endereços inválidos, descartáveis, duplicados e de função. A Giggal também resolve os endereços catch-all como válidos ou inválidos em vez de marcá-los como arriscados.',
    },
    {
      q: 'Quanto custa limpar uma lista de e-mail?',
      a: 'Um crédito por endereço, com a verificação catch-all incluída. 10.000 endereços custam US$ 9,90, e seus primeiros 1.000 créditos são grátis. Os créditos nunca expiram.',
    },
    {
      q: 'Posso limpar minha lista de e-mail grátis?',
      a: 'Sim, até 1.000 endereços. Cada conta nova recebe 1.000 créditos grátis, sem cartão, e eles nunca expiram. Depois disso, 10.000 endereços custam US$ 9,90.',
    },
    {
      q: 'Quanto tempo leva a limpeza de lista de e-mail?',
      a: 'A maioria das listas fica pronta em minutos.',
    },
    {
      q: 'Meus contatos vão receber algum e-mail?',
      a: 'Não. As verificações falam com o servidor de e-mail de destino e param antes de qualquer mensagem ser enviada. Seus contatos não veem nada.',
    },
    {
      q: 'O que acontece com os endereços catch-all?',
      a: 'Cada um é verificado e devolvido como válido ou inválido, pelo mesmo 1 crédito. Você mantém os contatos reais e descarta os mortos.',
    },
    {
      q: 'Quais arquivos posso enviar?',
      a: 'CSV ou Excel, até 50.000 endereços por arquivo. Você baixa a lista limpa em CSV.',
    },
    {
      q: 'Higienização de lista é a mesma coisa que limpeza de lista de e-mail?',
      a: 'Sim. Higienização de lista (email scrubbing), limpeza de lista e higiene de e-mail descrevem o mesmo trabalho: remover os endereços que não vão receber suas mensagens.',
    },
    {
      q: 'O que significa "desconhecido" e eu pago por isso?',
      a: 'Desconhecido significa que o servidor de e-mail não deu uma resposta clara, muitas vezes por causa de greylisting. Tente de novo mais tarde. Os créditos dos resultados desconhecidos são reembolsados.',
    },
  ],

  ctaHeadline: 'Limpe sua lista de e-mail em minutos',

  relatedTitle: 'Ferramentas e guias relacionados',
  related: [
    { title: 'Verificador de e-mail grátis', desc: 'Verifique um único endereço de e-mail: registros MX e verificação da caixa.' },
    { title: 'Verificador de e-mail descartável', desc: 'Detecte caixas temporárias, falsas e descartáveis em mais de 100.000 domínios.' },
    {
      title: 'Verificação de e-mail catch-all',
      desc: 'Como a Giggal classifica como entregáveis ou não entregáveis os endereços de domínios corporativos que aceitam tudo.',
    },
    {
      title: 'Qual é a precisão da verificação de e-mail',
      desc: 'O que medem as promessas de 97 a 99 % de precisão e como testar um verificador na sua própria lista.',
    },
    { title: 'Por que cold emails dão bounce', desc: 'As causas comuns de hard bounce e soft bounce e como ler os códigos de resposta do servidor.' },
    { title: 'Como reduzir a taxa de bounce', desc: 'O que causa uma taxa de bounce alta e como baixá-la.' },
    { title: 'Taxa de bounce ideal para cold email', desc: 'Abaixo de 2 % é saudável. O que fazer entre 2 e 5 % e acima de 5 %.' },
    { title: 'API de verificação de e-mail', desc: 'Verifique endereços no cadastro ou limpe arquivos a partir do seu próprio código.' },
  ],
}

// Korean. Formal polite style (합니다체); terms from SEO-Plan/i18n-batch4-ko-terminology.md.
const ko: ListCleaningStrings = {
  metaTitle: '이메일 리스트 정리 서비스: 캐치올 주소까지 판별 | Giggal.ai',
  ogTitle: '캐치올 주소를 지우지 않고 판별하는 이메일 리스트 정리 서비스',
  description:
    '이메일 리스트 정리 서비스로 무효, 일회용, 중복 이메일 주소를 지웁니다. 캐치올 주소는 지우지 않고 유효 또는 무효로 판별합니다. 무료 크레딧 1,000개를 드립니다.',
  ogLocale: 'ko_KR',
  ogAlt: 'Giggal.ai 이메일 리스트 정리 서비스',
  crumb: '이메일 리스트 정리',
  serviceName: 'Giggal.ai 이메일 리스트 정리 서비스',
  serviceType: '이메일 리스트 정리 및 검증',

  h1Lead: '캐치올(catch-all) 주소까지 판별하는',
  h1Highlight: '이메일 리스트 정리 서비스',
  heroIntro:
    '리스트를 업로드하면 몇 분 안에 정리된 리스트를 받습니다. 이 이메일 리스트 정리 서비스는 무효 주소, 일회용 주소, 역할 기반 주소, 중복 주소를 반송되기 전에 지웁니다. 반송은 발신자 평판을 떨어뜨립니다. 많은 리스트 정리 도구는 캐치올 주소를 모두 “위험”으로 표시하고 판단을 고객님께 넘깁니다. Giggal은 주소를 하나씩 검사하고, 어떤 주소로 보내도 안전한지 알려 드립니다.',
  heroCta: '무료로 리스트 정리하기',
  heroPricing: '요금 보기',
  heroNote: '무료 크레딧 1,000개, 신용카드 불필요. CSV 또는 Excel 파일 1개에 주소 최대 50,000개. 크레딧 유효기간 없음.',
  demoDone: '완료',
  demoDeliverable: '전송 가능',
  demoUndeliverable: '전송 불가',

  ratings: {
    reviews: (count) => `리뷰 ${count}개`,
    ratedAria: (rating, platform) => `Giggal.ai의 ${platform} 평점은 5점 만점에 ${rating}점입니다`,
  },
  awards: {
    headingLead: 'Giggal.ai는 SourceForge와 Slashdot에서',
    headingRest: 'Leader로 평가받았습니다',
    showLabel: '{badge} 보기',
  },

  stepsTitle: '세 단계로 끝나는 이메일 리스트 정리',
  steps: [
    {
      title: '리스트 업로드',
      body: '주소가 최대 50,000개 들어 있는 CSV 또는 Excel 파일을 추가합니다. 리스트가 더 크면 파일 몇 개로 나누십시오.',
    },
    {
      title: '모든 주소 검사',
      body: '도메인의 메일 서버(MX)와 메일함이 실제로 있는지 검사합니다. 일회용 주소, 역할 기반 주소, 중복 주소, 캐치올 주소도 검사합니다. 연락처에는 이메일이 발송되지 않습니다.',
    },
    {
      title: '정리된 리스트 다운로드',
      body: '모든 행에 결과가 들어 있는 CSV 파일을 받습니다. 주소마다 남길지, 지울지, 다시 확인할지 정할 수 있습니다.',
    },
  ],

  removesTitle: '이메일 리스트 정리로 지우는 주소',
  removesCols: ['결과', '의미', '조치'],
  removesRows: [
    {
      result: '무효',
      meaning: '메일함이나 도메인이 없습니다. 이 주소로 보내면 하드 바운스가 발생합니다.',
      action: '삭제',
    },
    {
      result: '일회용',
      meaning: 'Mailinator나 10MinuteMail 같은 서비스의 임시 메일함입니다. 곧 사라집니다.',
      action: '삭제',
    },
    {
      result: '역할 기반',
      meaning: 'info@, sales@, support@ 같은 공용 메일함입니다. 실제 의사 결정권자인 경우가 드뭅니다.',
      action: '아웃리치 리스트에서는 삭제, 고객 지원 리스트에서는 유지',
    },
    {
      result: '중복',
      meaning: '같은 주소가 두 번 이상 들어 있습니다.',
      action: '하나만 남기기',
    },
    {
      result: '캐치올, 판별 완료',
      meaning: '도메인이 모든 주소를 받습니다. Giggal이 그 뒤에 있는 메일함을 검사합니다.',
      action: '유효하면 유지, 무효이면 삭제',
    },
    {
      result: '알 수 없음',
      meaning: '서버가 제시간에 응답하지 않았거나 나중에 다시 시도하라고 요청했습니다(그레이리스팅).',
      action: '나중에 다시 시도. 알 수 없음 결과는 크레딧을 환불합니다.',
    },
  ],
  removesOutro:
    '이 주소들을 지우면 반송률이 낮게 유지됩니다. 그러면 발신자 평판이 보호되어 더 많은 이메일이 받은편지함에 도달합니다. 반송에 대해 처음 알아보신다면 [하드 바운스란 무엇인지](/glossary/hard-bounce)와 [하드 바운스와 소프트 바운스의 차이](/blog/hard-bounce-vs-soft-bounce)를 읽어 보십시오.',

  riskyTitle: '많은 이메일 리스트 정리 도구가 좋은 리드를 위험으로 표시하는 이유',
  riskyParas: [
    '많은 회사 메일 서버는 실제 주소든 지어낸 주소든 모든 주소를 받습니다. 이것이 [캐치올 도메인](/blog/what-is-a-catch-all-email-address)입니다. 이런 도메인에서는 일반 검사를 하면 실제 메일함과 오타 주소 모두 똑같이 “예”라는 응답을 받습니다. 많은 이메일 리스트 정리 서비스는 여기서 멈추고, 주소에 “위험” 표시를 붙인 뒤 판단을 고객님께 넘깁니다.',
    'B2B 리스트에는 이런 도메인이 흔합니다. 큰 회사는 메일함을 숨기는 보안 게이트웨이 뒤에 있는 경우가 많습니다. 이 주소들을 지우면 실제 구매자를 버리게 됩니다. 이 주소들로 보내면 없는 주소에서 반송이 발생합니다.',
    'Giggal은 다른 검사와 같은 크레딧 1개로 캐치올 주소를 하나씩 유효 또는 무효로 판별합니다. 다른 도구가 “알 수 없음”을 반환하는 [Proofpoint, Mimecast 같은 보안 게이트웨이](/seg-email-verification) 뒤의 도메인에서도 작동합니다. [캐치올 검증](/catch-all-verification)이 어떻게 작동하는지 확인해 보십시오.',
  ],

  beforeAfterTitle: '정리 전과 후: 실제로 정리한 리스트',
  beforeAfterIntro: '실제 B2B 리스트 하나를 정리한 결과입니다. 개인 정보는 익명 처리했습니다.',
  beforeAfterCols: ['결과', '주소 수'],
  beforeAfterRows: [
    '업로드한 주소',
    '유효, 유지',
    '무효, 삭제',
    '일회용, 삭제',
    '역할 기반, 표시',
    '중복, 삭제',
    '캐치올에서 유효로 판별, 유지',
    '캐치올에서 무효로 판별, 삭제',
    '알 수 없음, 환불',
  ],
  beforeAfterOutro:
    '리스트의 {pct}%를 지웠습니다. 일반 정리 도구라면 위험으로 표시했을 캐치올 연락처 {kept}개를 남겼습니다.',

  pricingTitle: '이메일 리스트 정리 요금',
  pricingIntro:
    '정리한 이메일 수만큼만 결제하며, 월 약정은 없습니다. 크레딧 1개로 주소 1개를 정리하며, 캐치올 검사도 포함됩니다. 크레딧은 유효기간이 없고, 처음 1,000개는 무료입니다.',
  pricingFootnote: '연락처 10,000개 리스트를 정리하는 비용은 US$9.90입니다. 월 구독은 10% 할인됩니다. [전체 요금 보기](/pricing)',

  oftenTitle: '이메일 리스트는 얼마나 자주 정리해야 합니까?',
  oftenIntro:
    '주소는 시간이 지나면 저절로 쓸 수 없게 됩니다. 사람은 이직하고, 회사는 도메인을 바꾸고, 오래된 메일함은 폐쇄됩니다. B2B 리스트가 가장 빨리 낡습니다. 다음과 같은 경우에 리스트를 정리하십시오.',
  oftenBullets: [
    '최근 몇 달 동안 정리하지 않은 리스트로 캠페인을 보내기 전.',
    '구매, 스크래핑, 데이터 보강으로 얻은 리스트를 가져온 직후.',
    '반송률이 오르기 시작할 때. 콜드메일은 [반송률 2% 미만을 유지](/blog/good-bounce-rate-for-cold-email)하십시오.',
    '자주 발송하는 리스트는 정기적으로.',
  ],
  oftenOutro:
    '정기적인 정리를 이메일 위생(email hygiene)이라고 합니다. 실제로 있고 메일을 받을 수 있는 주소만 남기는 일입니다. [반송률을 낮추는](/blog/how-to-reduce-email-bounce-rate) 가장 간단한 방법입니다. 처음부터 잘못된 주소가 들어오지 않게 하려면 [API](/public/docs)로 새 가입자의 주소를 실시간으로 검증하십시오.',

  livesTitle: '이메일 리스트가 있는 곳에서 바로 정리',
  livesIntro: '직접 내보내고 다시 가져올 필요가 없습니다.',
  livesBullets: [
    '**이메일 및 CRM 도구:** 정리된 연락처를 [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid와 [그 밖의 80개 이상 앱](/integrations)으로 보냅니다.',
    '**자동화:** [Zapier](/integrations/zapier) 또는 [n8n](/integrations/n8n)으로 어떤 도구든 연결합니다.',
    '**API:** [REST API](/public/docs)로 직접 작성한 코드에서 리스트를 정리합니다.',
    '**AI 어시스턴트:** [MCP](/mcp)로 Claude, ChatGPT, Cursor 안에서 주소를 검사합니다.',
  ],

  vsTitle: '이메일 리스트 정리와 이메일 검증의 차이',
  vsParas: [
    '두 작업은 같은 검사를 사용합니다. 이메일 검증은 주소 하나에 대한 질문에 답합니다. 이메일 리스트 정리는 같은 검사를 파일 전체에 실행하고, 발송할 수 있는 리스트를 돌려줍니다. 이메일 스크러빙(email scrubbing) 또는 이메일 리스트 클리너(email list cleaner) 사용이라고도 합니다. 모두 같은 작업입니다.',
    '주소 하나를 검사하려면 [무료 이메일 유효성 검사 도구](/email-checker)를 사용하십시오. 주소가 일회용 메일함인지 확인하려면 [일회용 이메일 판별 도구](/disposable-email-checker)를 사용하십시오.',
  ],

  faqTitle: '이메일 리스트 정리 FAQ',
  faqs: [
    {
      q: '이메일 리스트 정리 서비스는 무엇을 합니까?',
      a: '리스트의 모든 주소를 검사하고, 반송되거나 이메일 도달률을 떨어뜨릴 주소를 지웁니다. 무효 주소, 일회용 주소, 중복 주소, 역할 기반 주소가 여기에 해당합니다. Giggal은 캐치올 주소도 위험으로 표시하지 않고 유효 또는 무효로 판별합니다.',
    },
    {
      q: '이메일 리스트 정리 비용은 얼마입니까?',
      a: '주소 1개당 크레딧 1개이며, 캐치올 검사도 포함됩니다. 주소 10,000개는 US$9.90이고, 처음 크레딧 1,000개는 무료입니다. 크레딧은 유효기간이 없습니다.',
    },
    {
      q: '이메일 리스트를 무료로 정리할 수 있습니까?',
      a: '네, 주소 1,000개까지 가능합니다. 모든 새 계정에 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없고 유효기간도 없습니다. 그다음에는 주소 10,000개에 US$9.90입니다.',
    },
    {
      q: '이메일 리스트 정리에는 시간이 얼마나 걸립니까?',
      a: '대부분의 리스트는 몇 분 안에 끝납니다.',
    },
    {
      q: '연락처에 이메일이 발송됩니까?',
      a: '아니요. 검사는 수신 메일 서버와 통신하고, 메시지가 발송되기 전에 멈춥니다. 연락처에는 아무것도 전달되지 않습니다.',
    },
    {
      q: '캐치올 주소는 어떻게 처리됩니까?',
      a: '주소마다 검사해 같은 크레딧 1개로 유효 또는 무효 결과를 돌려 드립니다. 실제 연락처는 남기고 없는 주소는 지울 수 있습니다.',
    },
    {
      q: '어떤 파일을 업로드할 수 있습니까?',
      a: 'CSV 또는 Excel 파일이며, 파일 1개에 주소 최대 50,000개까지 가능합니다. 정리된 리스트는 CSV 파일로 다운로드합니다.',
    },
    {
      q: '이메일 스크러빙과 이메일 리스트 정리는 같은 것입니까?',
      a: '네. 이메일 스크러빙, 리스트 정리, 이메일 위생은 모두 같은 작업을 말합니다. 메일을 받지 못할 주소를 지우는 일입니다.',
    },
    {
      q: '“알 수 없음”은 무슨 뜻이며, 비용이 청구됩니까?',
      a: '알 수 없음은 메일 서버가 분명한 답을 주지 않았다는 뜻입니다. 그레이리스팅 때문인 경우가 많습니다. 나중에 다시 시도하십시오. 알 수 없음 결과에 사용한 크레딧은 환불됩니다.',
    },
  ],

  ctaHeadline: '몇 분 안에 이메일 리스트를 정리하십시오',

  relatedTitle: '관련 도구와 가이드',
  related: [
    { title: '무료 이메일 유효성 검사', desc: '이메일 주소 하나를 검증합니다. MX 레코드와 메일함을 검사합니다.' },
    { title: '일회용 이메일 판별', desc: '100,000개가 넘는 도메인에서 임시, 가짜, 일회용 메일함을 찾아냅니다.' },
    {
      title: '캐치올 이메일 검증',
      desc: 'Giggal이 accept-all(모든 주소 수신) 비즈니스 도메인을 전송 가능 또는 전송 불가로 판별하는 방법입니다.',
    },
    {
      title: '이메일 검증의 정확도',
      desc: '97~99% 정확도 주장이 무엇을 측정하는지, 가진 리스트로 검증 도구를 시험하는 방법은 무엇인지 설명합니다.',
    },
    { title: '콜드메일이 반송되는 이유', desc: '하드 바운스와 소프트 바운스의 흔한 원인과 서버 응답 코드를 읽는 방법입니다.' },
    { title: '이메일 반송률을 낮추는 방법', desc: '반송률이 높아지는 원인과 반송률을 낮추는 방법입니다.' },
    { title: '콜드메일의 적정 반송률', desc: '2% 미만이면 양호합니다. 2~5%일 때와 5%를 넘을 때 할 일을 설명합니다.' },
    { title: '이메일 검증 API', desc: '가입 시점에 주소를 검사하거나, 직접 작성한 코드로 파일을 정리합니다.' },
  ],
}

const tr: ListCleaningStrings = {
  metaTitle: 'Mail listesi temizleme, catch-all adres kontrolüyle | Giggal.ai',
  ogTitle: 'Catch-all adresleri silmeyen mail listesi temizleme hizmeti',
  description: 'Mail listesi temizleme hizmeti: geçersiz, geçici ve yinelenen adresleri çıkarır, catch-all adresleri silmek yerine kontrol eder. 1.000 ücretsiz kredi.',
  ogLocale: 'tr_TR',
  ogAlt: 'Giggal.ai mail listesi temizleme hizmeti',
  crumb: 'Mail listesi temizleme',
  serviceName: 'Giggal.ai mail listesi temizleme hizmeti',
  serviceType: 'E-posta listesi temizleme ve doğrulama',
  h1Lead: 'Catch-all adresleri de doğrulayan',
  h1Highlight: 'mail listesi temizleme hizmeti',
  heroIntro: 'Listenizi yükleyin ve birkaç dakika içinde temizlenmiş hâliyle geri alın. Mail listesi temizleme hizmetimiz geçersiz, geçici, rol tabanlı ve yinelenen adresleri, geri dönüp (bounce) gönderen itibarınıza zarar vermeden önce çıkarır. Birçok liste temizleme aracı her catch-all adresi "riskli" olarak işaretler ve kararı size bırakır. Biz her birini kontrol eder ve hangisine göndermenin güvenli olduğunu söyleriz.',
  heroCta: 'Listenizi ücretsiz temizleyin',
  heroPricing: 'Fiyatları görün',
  heroNote: '1.000 ücretsiz kredi, kredi kartı gerekmez. CSV veya Excel, dosya başına en fazla 50.000 adres. Kredilerin süresi dolmaz.',
  demoDone: 'Tamamlandı',
  demoDeliverable: 'Teslim edilebilir',
  demoUndeliverable: 'Teslim edilemez',
  ratings: {
    reviews: (count) => `${count} değerlendirme`,
    ratedAria: (rating, platform) => `Giggal.ai, ${platform} üzerinde 5 üzerinden ${rating.replace('.', ',')} puan aldı`,
  },
  awards: {
    headingLead: "Giggal.ai, SourceForge ve Slashdot'ta",
    headingRest: 'Leader olarak değerlendirildi',
    showLabel: '{badge} rozetini gösterin',
  },
  stepsTitle: 'Mail listenizi üç adımda temizleyin',
  steps: [
    {
      title: 'Listenizi yükleyin',
      body: 'En fazla 50.000 adres içeren bir CSV veya Excel dosyası ekleyin. Listeniz daha mı büyük? Listeyi birkaç dosyaya bölün.',
    },
    {
      title: 'Her adresi kontrol ederiz',
      body: 'Alan adının e-posta sunucularını (MX) ve posta kutusunun kendisinin var olup olmadığını kontrol ederiz. Geçici, rol tabanlı, yinelenen ve catch-all adres kontrolleri de yapılır. Kişilerinize hiçbir e-posta gönderilmez.',
    },
    {
      title: 'Temiz listeyi indirin',
      body: 'Her satırında bir sonuç bulunan bir CSV dosyası alırsınız. Böylece her adresi tutabilir, çıkarabilir veya inceleyebilirsiniz.',
    },
  ],
  removesTitle: 'Mail listesi temizleme hangi adresleri çıkarır?',
  removesCols: ['Sonuç', 'Anlamı', 'Ne yapmalısınız'],
  removesRows: [
    {
      result: 'Geçersiz',
      meaning: "Posta kutusu veya alan adı yok. Bu adrese göndermek hard bounce'a neden olur.",
      action: 'Çıkarın',
    },
    {
      result: 'Geçici',
      meaning: 'Mailinator veya 10MinuteMail gibi bir servisten alınmış geçici bir gelen kutusu. Kısa süre içinde kapanır.',
      action: 'Çıkarın',
    },
    {
      result: 'Rol tabanlı',
      meaning: 'info@, sales@ veya support@ gibi ortak bir gelen kutusu. Nadiren gerçek bir karar vericiye aittir.',
      action: 'Satış e-postalarında çıkarın, destek listelerinde tutun',
    },
    {
      result: 'Yinelenen',
      meaning: 'Aynı adres listede birden fazla kez geçiyor.',
      action: 'Bir kopyasını tutun',
    },
    {
      result: 'Catch-all, kontrol edildi',
      meaning: 'Alan adı her adresi kabul eder. Giggal arkasındaki posta kutusunu kontrol eder.',
      action: 'Geçerliyse tutun, geçersizse çıkarın',
    },
    {
      result: 'Bilinmiyor',
      meaning: 'Sunucu zamanında yanıt vermedi veya daha sonra tekrar denememizi istedi (greylisting).',
      action: 'Daha sonra tekrar deneyin. Bilinmiyor sonuçlarının kredisi iade edilir.',
    },
  ],
  removesOutro: 'Bu adresleri çıkarmak bounce (geri dönen e-posta) oranınızı düşük tutar. Bu da gönderen itibarınızı korur ve e-postalarınızın daha fazlası gelen kutusuna ulaşır. Bounce konusunda yeni misiniz? [Hard bounce nedir](/glossary/hard-bounce) ve [hard bounce ile soft bounce farkı](/blog/hard-bounce-vs-soft-bounce) yazılarını okuyun.',
  riskyTitle: 'Birçok liste temizleme aracı neden iyi müşteri adaylarını riskli olarak işaretler?',
  riskyParas: [
    'Birçok şirketin e-posta sunucusu, gerçek ya da uydurma her adresi kabul eder. Buna [catch-all alan adı](/blog/what-is-a-catch-all-email-address) denir. Bu alan adlarında standart bir kontrol, gerçek bir posta kutusu için de yazım hatalı bir adres için de aynı "evet" yanıtını alır. Birçok e-posta listesi temizleme hizmeti burada durur, adresi "riskli" olarak etiketler ve kararı size bırakır.',
    'B2B listelerinde bu alan adları yaygındır. Büyük şirketler çoğu zaman posta kutusunu gizleyen güvenlik ağ geçitlerinin arkasındadır. Bu adresleri silerseniz gerçek müşteri adaylarını kaybedersiniz. Bu adreslere gönderirseniz kapanmış olanlar geri döner.',
    'Giggal her catch-all adresi, diğer kontrollerle aynı 1 kredi karşılığında geçerli ya da geçersiz olarak sonuçlandırır. Diğer araçların "bilinmiyor" döndürdüğü, [Proofpoint ve Mimecast gibi güvenlik ağ geçitlerinin](/seg-email-verification) arkasındaki alan adlarında da çalışır. [Catch-all doğrulamanın](/catch-all-verification) nasıl çalıştığını görün.',
  ],
  beforeAfterTitle: 'Önce ve sonra: temizlenmiş gerçek bir liste',
  beforeAfterIntro: 'Temizlemenin gerçek bir B2B listesinde yaptığı değişiklik aşağıdadır. Liste anonimleştirilmiştir.',
  beforeAfterCols: ['Sonuç', 'Adres sayısı'],
  beforeAfterRows: [
    'Yüklenen',
    'Geçerli, tutuldu',
    'Geçersiz, çıkarıldı',
    'Geçici, çıkarıldı',
    'Rol tabanlı, işaretlendi',
    'Yinelenen, çıkarıldı',
    'Catch-all, geçerli çıktı, tutuldu',
    'Catch-all, geçersiz çıktı, çıkarıldı',
    'Bilinmiyor, kredi iade edildi',
  ],
  beforeAfterOutro: 'Listeden çıkarılan adreslerin oranı: %{pct}. Standart bir temizleme aracının riskli olarak işaretleyeceği {kept} catch-all kişi listede tutuldu.',
  pricingTitle: 'Mail listesi temizleme fiyatları',
  pricingIntro: 'Aylık taahhüt olmadan, yalnızca temizlediğiniz e-postalar için ödeme yaparsınız. Bir kredi bir adresi temizler, catch-all kontrolleri dahildir. Kredilerin süresi dolmaz ve ilk 1.000 krediniz ücretsizdir.',
  pricingFootnote: '10.000 kişilik bir listeyi temizlemek $9,90 tutar. Aylık planlarda %10 tasarruf edersiniz. [Tüm fiyatları görün](/pricing)',
  oftenTitle: 'Mail listenizi ne sıklıkla temizlemelisiniz?',
  oftenIntro: 'Adresler zamanla kendiliğinden eskir. İnsanlar iş değiştirir, şirketler alan adı değiştirir ve eski gelen kutuları kapatılır. En hızlı eskiyen listeler B2B listeleridir. Listenizi şu durumlarda temizleyin:',
  oftenBullets: [
    'Son birkaç ayda temizlemediğiniz bir listeye kampanya göndermeden önce.',
    'Satın alınmış, web sitelerinden toplanmış veya zenginleştirilmiş bir listeyi içe aktardıktan hemen sonra.',
    "Bounce oranınız yükselmeye başladığında. Soğuk e-postada [%2'nin altında kalın](/blog/good-bounce-rate-for-cold-email).",
    'Sık gönderim yaptığınız her listede, düzenli bir takvimle.',
  ],
  oftenOutro: 'Düzenli temizlik, e-posta hijyeni denen şeydir: yalnızca var olan ve e-postanızı alabilen adresleri tutmak. Bu, [bounce oranınızı düşürmenin](/blog/how-to-reduce-email-bounce-rate) en basit yoludur. Kötü adreslerin listeye hiç girmemesi için yeni kayıtları [API](/public/docs) ile gerçek zamanlı doğrulayın.',
  livesTitle: 'Mail listenizi bulunduğu yerde temizleyin',
  livesIntro: 'Listeyi elle dışa ve içe aktarmanız gerekmez.',
  livesBullets: [
    "**E-posta ve CRM araçları:** temiz kişileri [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid ve [80'den fazla başka uygulamaya](/integrations) gönderin.",
    '**Otomasyon:** her aracı [Zapier](/integrations/zapier) veya [n8n](/integrations/n8n) üzerinden bağlayın.',
    '**API:** listeleri kendi kodunuzdan [REST API](/public/docs) ile temizleyin.',
    '**Yapay zekâ asistanları:** adresleri Claude, ChatGPT veya Cursor içinde [MCP](/mcp) üzerinden kontrol edin.',
  ],
  vsTitle: 'Mail listesi temizleme ile e-posta doğrulama arasındaki fark',
  vsParas: [
    'İkisi de aynı kontrolleri kullanır. E-posta doğrulama bu soruyu tek bir adres için yanıtlar. E-posta listesi temizleme aynı kontrolleri bir dosyanın tamamında çalıştırır ve size gönderim yapabileceğiniz bir liste verir. Bu işe e-posta scrubbing de denir. E-posta listesi temizleyici (email list cleaner) kullanmak da aynı işi anlatır.',
    'Tek bir adresi kontrol etmek için [ücretsiz mail adresi doğrulama](/email-checker) aracını kullanın. Bir adresin tek kullanımlık bir gelen kutusu olup olmadığını görmek için [geçici mail kontrolü](/disposable-email-checker) aracını kullanın.',
  ],
  faqTitle: 'Mail listesi temizleme hakkında sık sorulan sorular',
  faqs: [
    {
      q: 'Mail listesi temizleme hizmeti ne yapar?',
      a: 'Listenizdeki her adresi kontrol eder ve geri dönecek ya da teslim edilebilirliğe zarar verecek adresleri çıkarır: geçersiz, geçici, yinelenen ve rol tabanlı adresler. Giggal ayrıca catch-all adresleri riskli olarak işaretlemek yerine geçerli ya da geçersiz olarak sonuçlandırır.',
    },
    {
      q: 'Mail listesi temizlemenin maliyeti nedir?',
      a: 'Adres başına bir kredi, catch-all kontrolleri dahil. 10.000 adres $9,90 tutar ve ilk 1.000 krediniz ücretsizdir. Kredilerin süresi dolmaz.',
    },
    {
      q: 'Mail listemi ücretsiz temizleyebilir miyim?',
      a: 'Evet, 1.000 adrese kadar. Her yeni hesap 1.000 ücretsiz kredi alır. Kredi kartı gerekmez ve kredilerin süresi dolmaz. Bundan sonra 10.000 adres $9,90 tutar.',
    },
    {
      q: 'Mail listesi temizleme ne kadar sürer?',
      a: 'Çoğu liste birkaç dakika içinde tamamlanır.',
    },
    {
      q: 'Kişilerime mail gider mi?',
      a: 'Hayır. Kontroller alıcının e-posta sunucusuyla konuşur ve herhangi bir mesaj gönderilmeden önce durur. Kişileriniz hiçbir şey görmez.',
    },
    {
      q: 'Catch-all adreslere ne olur?',
      a: 'Her biri kontrol edilir ve aynı 1 kredi karşılığında geçerli ya da geçersiz olarak döner. Gerçek kişileri tutar, kapanmış adresleri çıkarırsınız.',
    },
    {
      q: 'Hangi dosyaları yükleyebilirim?',
      a: 'CSV veya Excel, dosya başına en fazla 50.000 adres. Temiz listeyi CSV olarak indirirsiniz.',
    },
    {
      q: 'Email scrubbing ile mail listesi temizleme aynı şey mi?',
      a: 'Evet. E-posta scrubbing, liste temizleme ve e-posta hijyeni aynı işi anlatır: e-postanızı almayacak adresleri çıkarmak.',
    },
    {
      q: '"Bilinmiyor" ne anlama gelir ve bunun için ödeme yapar mıyım?',
      a: "Bilinmiyor, e-posta sunucusunun net bir yanıt vermediği anlamına gelir. Bunun nedeni çoğu zaman greylisting'dir. Daha sonra tekrar deneyin. Bilinmiyor sonuçlarının kredileri iade edilir.",
    },
  ],
  ctaHeadline: 'Mail listenizi birkaç dakikada temizleyin',
  relatedTitle: 'İlgili araçlar ve rehberler',
  related: [
    {
      title: 'Ücretsiz mail adresi doğrulama',
      desc: 'Tek bir e-posta adresini doğrulayın: MX kayıtları ve posta kutusu kontrolü.',
    },
    {
      title: 'Geçici mail kontrolü',
      desc: "100.000'den fazla alan adında geçici, sahte ve tek kullanımlık gelen kutularını tespit edin.",
    },
    {
      title: 'Catch-all mail doğrulama',
      desc: "Giggal'ın her adresi kabul eden (accept-all) kurumsal alan adlarını nasıl teslim edilebilir ya da teslim edilemez olarak sonuçlandırdığı.",
    },
    {
      title: 'E-posta doğrulama araçları ne kadar doğru',
      desc: '%97 ila %99 doğruluk iddialarının neyi ölçtüğü ve bir doğrulama aracını kendi listenizde nasıl test edeceğiniz.',
    },
    {
      title: 'Soğuk e-postalar neden geri döner',
      desc: "Hard bounce ve soft bounce'un yaygın nedenleri ve sunucu yanıt kodlarının nasıl okunacağı.",
    },
    {
      title: 'E-posta bounce oranı nasıl düşürülür',
      desc: 'Yüksek bounce oranının nedenleri ve oranı nasıl düşüreceğiniz.',
    },
    {
      title: 'Soğuk e-posta için iyi bounce oranı',
      desc: "%2'nin altı sağlıklıdır. %2 ila %5 arasında ve %5'in üstünde ne yapmanız gerektiği.",
    },
    {
      title: "Email doğrulama API'si",
      desc: 'Adresleri kayıt sırasında kontrol edin veya dosyaları kendi kodunuzdan temizleyin.',
    },
  ],
}

const fr: ListCleaningStrings = {
  metaTitle: 'Nettoyage de liste email qui résout les catch-all | Giggal.ai',
  ogTitle: 'Nettoyage de liste email qui résout les catch-all',
  description:
    'Nettoyage de liste email : retirez les adresses invalides, jetables et en double. Les adresses catch-all sont résolues, pas supprimées. 1 000 crédits gratuits.',
  ogLocale: 'fr_FR',
  ogAlt: 'Service de nettoyage de liste email Giggal.ai',
  crumb: 'Nettoyage de liste email',
  serviceName: 'Service de nettoyage de liste email Giggal.ai',
  serviceType: 'Nettoyage et vérification de listes d’emails',

  h1Lead: 'Un service de nettoyage de liste email qui',
  h1Highlight: 'résout aussi les adresses catch-all',
  heroIntro:
    'Importez votre liste et récupérez-la nettoyée en quelques minutes. Notre service de nettoyage de liste email retire les adresses invalides, jetables, génériques et en double. Il le fait avant qu’elles ne rebondissent et ne nuisent à votre réputation d’expéditeur. Beaucoup d’outils de nettoyage marquent chaque adresse catch-all comme « risquée » et vous laissent décider. Nous vérifions chacune de ces adresses et vous indiquons lesquelles vous pouvez contacter sans risque.',
  heroCta: 'Nettoyer ma liste gratuitement',
  heroPricing: 'Voir les tarifs',
  heroNote:
    '1 000 crédits gratuits, aucune carte requise. CSV ou Excel, jusqu’à 50 000 adresses par fichier. Les crédits n’expirent jamais.',
  demoDone: 'Terminé',
  demoDeliverable: 'Délivrable',
  demoUndeliverable: 'Non délivrable',

  ratings: {
    reviews: (count) => `${count} avis`,
    ratedAria: (rating, platform) => `Note de Giggal.ai sur ${platform} : ${rating.replace('.', ',')} sur 5`,
  },
  awards: {
    headingLead: 'Giggal.ai est classé',
    headingRest: 'Leader sur SourceForge et Slashdot',
    showLabel: 'Afficher {badge}',
  },

  stepsTitle: 'Nettoyez votre liste email en trois étapes',
  steps: [
    {
      title: 'Importez votre liste',
      body: 'Ajoutez un fichier CSV ou Excel de 50 000 adresses au maximum. Votre liste est plus longue ? Découpez-la en plusieurs fichiers.',
    },
    {
      title: 'Nous vérifions chaque adresse',
      body: 'Nous contrôlons les serveurs de messagerie du domaine (MX) et l’existence de la boîte mail. Nous repérons aussi les adresses jetables, génériques, en double et catch-all. Aucun email n’est envoyé à vos contacts.',
    },
    {
      title: 'Téléchargez la liste nettoyée',
      body: 'Vous recevez un fichier CSV avec un résultat sur chaque ligne. Vous pouvez ainsi garder, retirer ou revoir chaque adresse.',
    },
  ],

  removesTitle: 'Ce que le nettoyage de liste email retire',
  removesCols: ['Résultat', 'Ce que cela signifie', 'Que faire'],
  removesRows: [
    {
      result: 'Invalide',
      meaning: 'La boîte mail ou le domaine n’existe pas. Un envoi vers cette adresse provoque un hard bounce.',
      action: 'Retirer',
    },
    {
      result: 'Jetable',
      meaning: 'Une boîte temporaire d’un service comme Mailinator ou 10MinuteMail. Elle disparaîtra bientôt.',
      action: 'Retirer',
    },
    {
      result: 'Générique',
      meaning: 'Une boîte partagée comme info@, sales@ ou support@. Elle appartient rarement à un vrai décideur.',
      action: 'Retirer pour la prospection, garder pour les listes de support',
    },
    {
      result: 'En double',
      meaning: 'La même adresse apparaît plusieurs fois.',
      action: 'Garder une seule copie',
    },
    {
      result: 'Catch-all, résolu',
      meaning: 'Le domaine accepte toutes les adresses. Giggal vérifie la boîte mail qui se trouve derrière.',
      action: 'Garder si valide, retirer si invalide',
    },
    {
      result: 'Inconnu',
      meaning: 'Le serveur n’a pas répondu à temps ou nous a demandé de réessayer plus tard (greylisting).',
      action: 'Réessayer plus tard. Les résultats inconnus sont remboursés.',
    },
  ],
  removesOutro:
    'Retirer ces adresses maintient votre taux de rebond à un niveau bas. Cela protège votre réputation d’expéditeur, et davantage de vos emails arrivent en boîte de réception. Vous découvrez les rebonds ? Lisez [ce qu’est un hard bounce](/glossary/hard-bounce) et [hard bounce et soft bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Pourquoi beaucoup d’outils de nettoyage marquent de bons contacts comme risqués',
  riskyParas: [
    'Beaucoup de serveurs de messagerie d’entreprise acceptent toutes les adresses, réelles ou inventées. C’est un [domaine catch-all](/blog/what-is-a-catch-all-email-address). Sur ces domaines, un contrôle standard reçoit le même « oui » pour une vraie boîte mail et pour une faute de frappe. Beaucoup de services de nettoyage de liste email s’arrêtent là. Ils marquent l’adresse comme « risquée » et vous laissent décider.',
    'Ces domaines sont fréquents dans les listes B2B. Les grandes entreprises utilisent souvent des passerelles de sécurité qui cachent la boîte mail. Si vous supprimez ces adresses, vous perdez de vrais acheteurs. Si vous leur écrivez, les adresses mortes rebondissent.',
    'Giggal résout chaque adresse catch-all en valide ou invalide, pour 1 crédit, comme tout autre contrôle. Cela fonctionne aussi sur les domaines protégés par des [passerelles de sécurité comme Proofpoint et Mimecast](/seg-email-verification), où d’autres outils renvoient « inconnu ». Découvrez comment fonctionne la [vérification catch-all](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Avant et après : une vraie liste nettoyée',
  beforeAfterIntro: 'Voici l’effet du nettoyage sur une vraie liste B2B, rendue anonyme.',
  beforeAfterCols: ['Résultat', 'Adresses'],
  beforeAfterRows: [
    'Importées',
    'Valides, gardées',
    'Invalides, retirées',
    'Jetables, retirées',
    'Génériques, signalées',
    'En double, retirées',
    'Catch-all résolues en valides, gardées',
    'Catch-all résolues en invalides, retirées',
    'Inconnues, remboursées',
  ],
  beforeAfterOutro:
    '{pct} % de la liste a été retirée. {kept} contacts catch-all ont été gardés, alors qu’un outil de nettoyage standard les aurait marqués comme risqués.',

  pricingTitle: 'Tarifs du nettoyage de liste email',
  pricingIntro:
    'Payez les emails que vous nettoyez, sans engagement mensuel. Un crédit nettoie une adresse, contrôles catch-all compris. Les crédits n’expirent jamais, et les 1 000 premiers sont gratuits.',
  pricingFootnote:
    'Nettoyer une liste de 10 000 contacts coûte 9,90 $. Les abonnements mensuels font économiser 10 %. [Voir tous les tarifs](/pricing)',

  oftenTitle: 'À quelle fréquence nettoyer votre liste email ?',
  oftenIntro:
    'Les adresses deviennent obsolètes d’elles-mêmes. Les gens changent d’emploi, les entreprises changent de domaine et les anciennes boîtes mail sont fermées. Les listes B2B vieillissent le plus vite. Nettoyez votre liste :',
  oftenBullets: [
    'Avant une campagne vers une liste que vous n’avez pas nettoyée depuis quelques mois.',
    'Juste après l’import d’une liste achetée, extraite du web ou enrichie.',
    'Quand votre taux de rebond commence à monter. Pour le cold email, [restez sous 2 %](/blog/good-bounce-rate-for-cold-email).',
    'À intervalles réguliers pour toute liste que vous utilisez souvent.',
  ],
  oftenOutro:
    'Un nettoyage régulier, c’est ce que l’on appelle l’hygiène de liste email : ne garder que les adresses qui existent et peuvent recevoir vos emails. C’est la façon la plus simple de [réduire votre taux de rebond](/blog/how-to-reduce-email-bounce-rate). Pour empêcher les mauvaises adresses d’entrer, vérifiez les nouvelles inscriptions en temps réel avec l’[API](/public/docs).',

  livesTitle: 'Nettoyez votre liste email là où elle se trouve déjà',
  livesIntro: 'Vous n’avez pas besoin d’exporter puis de réimporter vos contacts à la main.',
  livesBullets: [
    '**Outils d’emailing et CRM :** envoyez les contacts nettoyés vers [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid et [plus de 80 autres applications](/integrations).',
    '**Automatisation :** connectez n’importe quel outil avec [Zapier](/integrations/zapier) ou [n8n](/integrations/n8n).',
    '**API :** nettoyez vos listes depuis votre propre code avec l’[API REST](/public/docs).',
    '**Assistants IA :** vérifiez des adresses dans Claude, ChatGPT ou Cursor via [MCP](/mcp).',
  ],

  vsTitle: 'Nettoyage de liste email ou vérification d’email',
  vsParas: [
    'Les deux utilisent les mêmes contrôles. La vérification d’email répond à la question pour une seule adresse. Le nettoyage de liste email applique ces contrôles à un fichier entier et vous rend une liste prête pour l’envoi. On parle aussi de nettoyage de fichier email ou d’outil de nettoyage de liste. C’est le même travail.',
    'Pour contrôler une seule adresse, utilisez le [vérificateur d’adresse mail gratuit](/email-checker). Pour savoir si une adresse est une boîte jetable, utilisez le [vérificateur d’adresse mail jetable](/disposable-email-checker).',
  ],

  faqTitle: 'FAQ sur le nettoyage de liste email',
  faqs: [
    {
      q: 'Que fait un service de nettoyage de liste email ?',
      a: 'Il vérifie chaque adresse de votre liste et retire celles qui rebondiraient ou nuiraient à votre délivrabilité : les adresses invalides, jetables, en double et génériques. Giggal résout aussi les adresses catch-all en valide ou invalide, au lieu de les marquer comme risquées.',
    },
    {
      q: 'Combien coûte le nettoyage d’une liste email ?',
      a: 'Un crédit par adresse, contrôles catch-all compris. 10 000 adresses coûtent 9,90 $, et vos 1 000 premiers crédits sont gratuits. Les crédits n’expirent jamais.',
    },
    {
      q: 'Puis-je nettoyer ma liste email gratuitement ?',
      a: 'Oui, jusqu’à 1 000 adresses. Chaque nouveau compte reçoit 1 000 crédits gratuits, sans carte, et ils n’expirent jamais. Ensuite, 10 000 adresses coûtent 9,90 $.',
    },
    {
      q: 'Combien de temps prend le nettoyage d’une liste email ?',
      a: 'La plupart des listes sont prêtes en quelques minutes.',
    },
    {
      q: 'Mes contacts vont-ils recevoir un email ?',
      a: 'Non. Les contrôles échangent avec le serveur de messagerie du destinataire et s’arrêtent avant l’envoi de tout message. Vos contacts ne voient rien.',
    },
    {
      q: 'Que deviennent les adresses catch-all ?',
      a: 'Chacune est vérifiée et renvoyée comme valide ou invalide, pour le même crédit. Vous gardez les vrais contacts et retirez les adresses mortes.',
    },
    {
      q: 'Quels fichiers puis-je importer ?',
      a: 'CSV ou Excel, jusqu’à 50 000 adresses par fichier. Vous téléchargez la liste nettoyée au format CSV.',
    },
    {
      q: 'L’email scrubbing est-il la même chose que le nettoyage de liste email ?',
      a: 'Oui. Email scrubbing, nettoyage de liste et hygiène de liste email désignent le même travail : retirer les adresses qui ne recevront pas vos emails.',
    },
    {
      q: 'Que signifie « inconnu », et dois-je payer ce résultat ?',
      a: 'Inconnu signifie que le serveur de messagerie n’a pas donné de réponse claire, souvent à cause du greylisting. Réessayez plus tard. Les crédits des résultats inconnus sont remboursés.',
    },
  ],

  ctaHeadline: 'Nettoyez votre liste email en quelques minutes',

  relatedTitle: 'Outils et guides associés',
  related: [
    { title: 'Vérificateur d’adresse mail gratuit', desc: 'Vérifiez une seule adresse mail : enregistrements MX et contrôle de la boîte mail.' },
    { title: 'Vérificateur d’adresse mail jetable', desc: 'Détectez les boîtes temporaires, fausses et jetables sur plus de 100 000 domaines.' },
    {
      title: 'Vérification des emails catch-all',
      desc: 'Comment Giggal classe en délivrables ou non délivrables les adresses des domaines professionnels accept-all.',
    },
    {
      title: 'La précision de la vérification d’email',
      desc: 'Ce que mesurent les annonces de 97 à 99 % de précision, et comment tester un vérificateur sur votre propre liste.',
    },
    { title: 'Pourquoi les cold emails rebondissent', desc: 'Les causes courantes des hard bounces et des soft bounces, et comment lire les codes de réponse du serveur.' },
    { title: 'Comment réduire le taux de rebond', desc: 'Ce qui cause un taux de rebond élevé et comment le faire baisser.' },
    { title: 'Bon taux de rebond pour le cold email', desc: 'Moins de 2 % est sain. Que faire entre 2 et 5 % et au-delà de 5 %.' },
    { title: 'API de vérification d’email', desc: 'Contrôlez les adresses à l’inscription ou nettoyez des fichiers depuis votre propre code.' },
  ],
}

// Dutch. Terms: SEO-Plan/i18n-batch1-nl-pl-terminology.md (je, e-maillijst opschonen,
// geldig/ongeldig/riskant/onbekend, credits). Numbers 1.000 and 50.000, prices US$ 9,90.
const nl: ListCleaningStrings = {
  metaTitle: 'E-maillijst opschonen, ook voor catch-all-adressen | Giggal.ai',
  ogTitle: 'E-maillijst opschonen, ook voor catch-all-adressen',
  description:
    'E-maillijst opschonen: verwijder ongeldige, wegwerp- en dubbele adressen. Catch-all-adressen controleren we in plaats van ze te wissen. 1.000 gratis credits.',
  ogLocale: 'nl_NL',
  ogAlt: 'E-maillijst opschonen met Giggal.ai',
  crumb: 'E-maillijst opschonen',
  serviceName: 'Giggal.ai E-maillijst opschonen',
  serviceType: 'E-maillijst opschonen en e-mailverificatie',

  h1Lead: 'E-maillijst opschonen met controle van',
  h1Highlight: 'catch-all-adressen',
  heroIntro:
    'Upload je lijst en krijg hem binnen enkele minuten opgeschoond terug. Onze dienst haalt ongeldige adressen, wegwerpadressen, rol-adressen en dubbele adressen weg voordat ze bouncen en je afzenderreputatie schaden. Veel tools voor het opschonen van een e-maillijst markeren elk catch-all-adres als "riskant" en laten de keuze aan jou. Wij controleren elk adres en vertellen je naar welke adressen je veilig kunt mailen.',
  heroCta: 'Mijn lijst gratis opschonen',
  heroPricing: 'Prijzen bekijken',
  heroNote: '1.000 gratis credits, geen creditcard nodig. CSV of Excel, tot 50.000 adressen per bestand. Credits verlopen nooit.',
  demoDone: 'Klaar',
  demoDeliverable: 'Bezorgbaar',
  demoUndeliverable: 'Niet bezorgbaar',

  ratings: {
    reviews: (count) => `${count} reviews`,
    ratedAria: (rating, platform) => `Giggal.ai krijgt op ${platform} een score van ${rating.replace('.', ',')} van 5`,
  },
  awards: {
    headingLead: 'Giggal.ai is beoordeeld als',
    headingRest: 'Leader op SourceForge en Slashdot',
    showLabel: 'Toon {badge}',
  },

  stepsTitle: 'Je e-maillijst opschonen in drie stappen',
  steps: [
    {
      title: 'Upload je lijst',
      body: 'Voeg een CSV- of Excel-bestand toe met maximaal 50.000 adressen. Is je lijst groter? Splits hem dan in een paar bestanden.',
    },
    {
      title: 'Wij controleren elk adres',
      body: 'We controleren de mailservers van het domein (MX) en of de mailbox zelf bestaat. Daarnaast zoeken we wegwerpadressen, rol-adressen, dubbele adressen en catch-all-adressen. Je contacten krijgen geen e-mail.',
    },
    {
      title: 'Download de opgeschoonde lijst',
      body: 'Je krijgt een CSV-bestand met een resultaat op elke regel. Zo kun je elk adres houden, verwijderen of nog eens bekijken.',
    },
  ],

  removesTitle: 'Wat het opschonen van een e-maillijst verwijdert',
  removesCols: ['Resultaat', 'Wat het betekent', 'Wat je doet'],
  removesRows: [
    {
      result: 'Ongeldig',
      meaning: 'De mailbox of het domein bestaat niet. Een e-mail naar dit adres geeft een hard bounce.',
      action: 'Verwijderen',
    },
    {
      result: 'Wegwerpadres',
      meaning: 'Een tijdelijke mailbox van een dienst zoals Mailinator of 10MinuteMail. Die verdwijnt binnenkort.',
      action: 'Verwijderen',
    },
    {
      result: 'Rol-adres',
      meaning: 'Een gedeelde mailbox zoals info@, sales@ of support@. Zelden iemand die beslissingen neemt.',
      action: 'Verwijderen voor outreach, houden voor supportlijsten',
    },
    {
      result: 'Dubbel adres',
      meaning: 'Hetzelfde adres staat meer dan één keer in de lijst.',
      action: 'Eén exemplaar houden',
    },
    {
      result: 'Catch-all, gecontroleerd',
      meaning: 'Het domein accepteert elk adres. Giggal controleert de mailbox die erachter zit.',
      action: 'Houden als geldig, verwijderen als ongeldig',
    },
    {
      result: 'Onbekend',
      meaning: 'De server antwoordde niet op tijd of vroeg ons het later opnieuw te proberen (greylisting).',
      action: 'Later opnieuw proberen. Onbekende resultaten worden terugbetaald.',
    },
  ],
  removesOutro:
    'Als je deze adressen verwijdert, blijft je bouncepercentage laag. Dat beschermt je afzenderreputatie, zodat meer e-mails in de inbox komen. Weet je nog weinig over bounces? Lees [wat een hard bounce is](/glossary/hard-bounce) en [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Waarom veel tools voor het opschonen van e-maillijsten goede leads als riskant markeren',
  riskyParas: [
    'Veel mailservers van bedrijven accepteren elk adres, echt of verzonnen. Dat heet een [catch-all-domein](/blog/what-is-a-catch-all-email-address). Op zo’n domein geeft een standaardcontrole hetzelfde "ja" voor een echte mailbox en voor een tikfout. Veel diensten voor het opschonen van e-maillijsten stoppen daar. Ze noemen het adres "riskant" en laten de beslissing aan jou.',
    'Op B2B-lijsten komen deze domeinen vaak voor. Grotere bedrijven zitten vaak achter een beveiligingsgateway die de mailbox verbergt. Verwijder je deze adressen, dan gooi je echte kopers weg. Mail je ze, dan bouncen de adressen die niet meer bestaan.',
    'Giggal beoordeelt elk catch-all-adres als geldig of ongeldig, voor dezelfde 1 credit als elke andere controle. Dat werkt ook op domeinen achter [beveiligingsgateways zoals Proofpoint en Mimecast](/seg-email-verification), waar andere tools "onbekend" teruggeven. Lees hoe [catch-all-verificatie](/catch-all-verification) werkt.',
  ],

  beforeAfterTitle: 'Voor en na: een echte opgeschoonde lijst',
  beforeAfterIntro: 'Dit deed het opschonen met een echte B2B-lijst, geanonimiseerd.',
  beforeAfterCols: ['Resultaat', 'Adressen'],
  beforeAfterRows: [
    'Geüpload',
    'Geldig, behouden',
    'Ongeldig, verwijderd',
    'Wegwerpadres, verwijderd',
    'Rol-adres, gemarkeerd',
    'Dubbel, verwijderd',
    'Catch-all beoordeeld als geldig, behouden',
    'Catch-all beoordeeld als ongeldig, verwijderd',
    'Onbekend, terugbetaald',
  ],
  beforeAfterOutro:
    '{pct}% van de lijst is verwijderd. {kept} catch-all-contacten zijn behouden die een standaardtool als riskant had gemarkeerd.',

  pricingTitle: 'Prijzen voor het opschonen van een e-maillijst',
  pricingIntro:
    'Je betaalt voor de e-mailadressen die je opschoont, zonder maandelijkse verplichting. Eén credit schoont één adres op, inclusief catch-all-controle. Credits verlopen nooit, en je eerste 1.000 zijn gratis.',
  pricingFootnote: 'Een lijst van 10.000 contacten opschonen kost US$ 9,90. Met een maandabonnement bespaar je 10%. [Bekijk alle prijzen](/pricing)',

  oftenTitle: 'Hoe vaak moet je je e-maillijst opschonen?',
  oftenIntro:
    'Adressen verouderen vanzelf. Mensen wisselen van baan, bedrijven veranderen van domein en oude mailboxen worden opgeheven. B2B-lijsten verouderen het snelst. Schoon je lijst op:',
  oftenBullets: [
    'Vóór een campagne naar een lijst die je de laatste maanden niet hebt opgeschoond.',
    'Direct nadat je een gekochte, gescrapete of verrijkte lijst hebt geïmporteerd.',
    'Als je bouncepercentage begint te stijgen. Blijf bij cold e-mail [onder 2%](/blog/good-bounce-rate-for-cold-email).',
    'Volgens een vast schema voor elke lijst waar je vaak naar mailt.',
  ],
  oftenOutro:
    'Regelmatig opschonen noemen mensen e-mailhygiëne: je houdt alleen adressen die bestaan en je mail kunnen ontvangen. Het is de eenvoudigste manier om [je bouncepercentage te verlagen](/blog/how-to-reduce-email-bounce-rate). Wil je voorkomen dat slechte adressen op je lijst komen? Controleer nieuwe aanmeldingen dan direct met de [API](/public/docs).',

  livesTitle: 'Schoon je e-maillijst op waar hij al staat',
  livesIntro: 'Je hoeft niet met de hand te exporteren en opnieuw te importeren.',
  livesBullets: [
    '**E-mail- en CRM-tools:** stuur opgeschoonde contacten naar [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid en [meer dan 80 andere apps](/integrations).',
    '**Automatisering:** koppel elke tool via [Zapier](/integrations/zapier) of [n8n](/integrations/n8n).',
    '**API:** schoon lijsten op vanuit je eigen code met de [REST API](/public/docs).',
    '**AI-assistenten:** controleer adressen in Claude, ChatGPT of Cursor via [MCP](/mcp).',
  ],

  vsTitle: 'E-maillijst opschonen vs e-mailverificatie',
  vsParas: [
    'Ze gebruiken dezelfde controles. E-mailverificatie geeft het antwoord voor één adres. Bij het opschonen van een e-maillijst lopen die controles over een heel bestand, en je krijgt een lijst terug waar je naar kunt mailen. Je komt ook de termen e-mail scrubbing en email list cleaner tegen. Het is hetzelfde werk.',
    'Wil je één adres controleren? Gebruik dan de [gratis email checker](/email-checker). Wil je weten of een adres een tijdelijke mailbox is? Gebruik dan de [wegwerp-e-mailchecker](/disposable-email-checker).',
  ],

  faqTitle: 'Veelgestelde vragen over e-maillijst opschonen',
  faqs: [
    {
      q: 'Wat doet een dienst voor het opschonen van een e-maillijst?',
      a: 'Hij controleert elk adres op je lijst en verwijdert de adressen die zouden bouncen of je bezorgbaarheid schaden: ongeldige adressen, wegwerpadressen, dubbele adressen en rol-adressen. Giggal beoordeelt ook catch-all-adressen als geldig of ongeldig, in plaats van ze als riskant te markeren.',
    },
    {
      q: 'Wat kost het om een e-maillijst op te schonen?',
      a: 'Eén credit per adres, inclusief catch-all-controle. 10.000 adressen kosten US$ 9,90, en je eerste 1.000 credits zijn gratis. Credits verlopen nooit.',
    },
    {
      q: 'Kan ik mijn e-maillijst gratis opschonen?',
      a: 'Ja, tot 1.000 adressen. Elk nieuw account krijgt 1.000 gratis credits, zonder creditcard, en ze verlopen nooit. Daarna kosten 10.000 adressen US$ 9,90.',
    },
    {
      q: 'Hoe lang duurt het opschonen van een e-maillijst?',
      a: 'De meeste lijsten zijn binnen enkele minuten klaar.',
    },
    {
      q: 'Krijgen mijn contacten een e-mail?',
      a: 'Nee. De controles praten met de ontvangende mailserver en stoppen voordat er een bericht wordt verstuurd. Je contacten zien niets.',
    },
    {
      q: 'Wat gebeurt er met catch-all-adressen?',
      a: 'Elk catch-all-adres wordt gecontroleerd en komt terug als geldig of ongeldig, voor dezelfde 1 credit. Je houdt de echte contacten en verwijdert de adressen die niet bestaan.',
    },
    {
      q: 'Welke bestanden kan ik uploaden?',
      a: 'CSV of Excel, tot 50.000 adressen per bestand. Je downloadt de opgeschoonde lijst als CSV-bestand.',
    },
    {
      q: 'Is e-mail scrubbing hetzelfde als een e-maillijst opschonen?',
      a: 'Ja. E-mail scrubbing, een lijst opschonen en e-mailhygiëne beschrijven allemaal hetzelfde werk: adressen verwijderen die je mail niet zullen ontvangen.',
    },
    {
      q: 'Wat betekent "onbekend", en betaal ik daarvoor?',
      a: 'Onbekend betekent dat de mailserver geen duidelijk antwoord gaf, vaak door greylisting. Probeer het later opnieuw. Credits voor onbekende resultaten worden terugbetaald.',
    },
  ],

  ctaHeadline: 'Schoon je e-maillijst op in enkele minuten',

  relatedTitle: 'Gerelateerde tools en artikelen',
  related: [
    { title: 'Gratis email checker', desc: 'Controleer één e-mailadres: MX-records en een controle van de mailbox.' },
    { title: 'Wegwerp-e-mailchecker', desc: 'Herken tijdelijke, nep- en wegwerpmailboxen op meer dan 100.000 domeinen.' },
    {
      title: 'Catch-all-verificatie',
      desc: 'Hoe Giggal accept-all-domeinen van bedrijven beoordeelt als bezorgbaar of niet bezorgbaar.',
    },
    {
      title: 'Hoe nauwkeurig e-mailverificatie is',
      desc: 'Wat de claims van 97 tot 99% nauwkeurigheid meten, en hoe je een tool op je eigen lijst test.',
    },
    { title: 'Waarom cold e-mails bouncen', desc: 'De meest voorkomende oorzaken van hard en soft bounces, en hoe je de antwoordcodes van de server leest.' },
    { title: 'Je bouncepercentage verlagen', desc: 'Wat een hoog bouncepercentage veroorzaakt en hoe je het omlaag krijgt.' },
    { title: 'Goed bouncepercentage voor cold e-mail', desc: 'Onder 2% is gezond. Wat je doet bij 2 tot 5% en boven 5%.' },
    { title: 'API voor e-mailverificatie', desc: 'Controleer adressen bij aanmelding of schoon bestanden op vanuit je eigen code.' },
  ],
}

/** 1 opinia, 2-4 opinie (not 12-14), 5+ opinii. Same as lib/i18n/emailChecker/pl.tsx. */
function plOpinie(n: number): string {
  if (n === 1) return '1 opinia'
  const last = n % 10
  const lastTwo = n % 100
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return `${n} opinie`
  return `${n} opinii`
}

// Polish. Terms follow SEO-Plan/i18n-batch1-nl-pl-terminology.md: "czyszczenie
// listy mailingowej", register "ty", "e-mail" in running text, "email" in the
// searched forms. Numbers 1000 and 50 000 (no-break space), prices 9,90 USD.
const pl: ListCleaningStrings = {
  metaTitle: 'Czyszczenie listy mailingowej z testem catch-all | Giggal.ai',
  ogTitle: 'Czyszczenie listy mailingowej z testem catch-all',
  description:
    'Czyszczenie listy mailingowej: usuwa adresy nieprawidłowe, jednorazowe i duplikaty, a adresy catch-all sprawdza, zamiast je kasować. 1000 kredytów gratis.',
  ogLocale: 'pl_PL',
  ogAlt: 'Giggal.ai, usługa czyszczenia listy mailingowej',
  crumb: 'Czyszczenie listy mailingowej',
  serviceName: 'Usługa czyszczenia listy mailingowej Giggal.ai',
  serviceType: 'Czyszczenie i weryfikacja list mailingowych',

  h1Lead: 'Czyszczenie listy mailingowej, które',
  h1Highlight: 'sprawdza też adresy catch-all',
  heroIntro:
    'Wgraj listę, a po kilku minutach dostaniesz ją z powrotem wyczyszczoną. Nasza usługa czyszczenia listy mailingowej usuwa adresy nieprawidłowe, jednorazowe, funkcyjne i zduplikowane, zanim dadzą odbicie i zaszkodzą twojej reputacji nadawcy. Wiele narzędzi do czyszczenia list oznacza każdy adres catch-all jako „ryzykowny” i zostawia decyzję tobie. My sprawdzamy każdy taki adres i mówimy, na który można bezpiecznie wysłać wiadomość.',
  heroCta: 'Wyczyść listę za darmo',
  heroPricing: 'Zobacz cennik',
  heroNote: '1000 darmowych kredytów, bez karty. CSV lub Excel, do 50 000 adresów w jednym pliku. Kredyty nigdy nie wygasają.',
  demoDone: 'Gotowe',
  demoDeliverable: 'Dostarczalny',
  demoUndeliverable: 'Niedostarczalny',

  ratings: {
    reviews: (count) => plOpinie(count),
    ratedAria: (rating, platform) => `Ocena Giggal.ai w serwisie ${platform}: ${rating.replace('.', ',')} na 5`,
  },
  awards: {
    headingLead: 'Giggal.ai ma wyróżnienie',
    headingRest: 'Leader w serwisach SourceForge i Slashdot',
    showLabel: 'Pokaż {badge}',
  },

  stepsTitle: 'Wyczyść listę mailingową w trzech krokach',
  steps: [
    {
      title: 'Wgraj listę',
      body: 'Dodaj plik CSV lub Excel z maksymalnie 50 000 adresów. Masz większą listę? Podziel ją na kilka plików.',
    },
    {
      title: 'Sprawdzamy każdy adres',
      body: 'Sprawdzamy serwery pocztowe domeny (MX) i to, czy sama skrzynka istnieje. Do tego dochodzą testy adresów jednorazowych, funkcyjnych, duplikatów i catch-all. Do twoich kontaktów nie trafia żaden e-mail.',
    },
    {
      title: 'Pobierz czystą listę',
      body: 'Dostajesz plik CSV z wynikiem w każdym wierszu. Każdy adres możesz zachować, usunąć albo przejrzeć.',
    },
  ],

  removesTitle: 'Co usuwa czyszczenie listy mailingowej',
  removesCols: ['Wynik', 'Co oznacza', 'Co zrobić'],
  removesRows: [
    {
      result: 'Nieprawidłowy',
      meaning: 'Skrzynka lub domena nie istnieje. Wysyłka na ten adres kończy się twardym odbiciem.',
      action: 'Usuń',
    },
    {
      result: 'Jednorazowy',
      meaning: 'Tymczasowa skrzynka z usługi takiej jak Mailinator lub 10MinuteMail. Wkrótce przestanie istnieć.',
      action: 'Usuń',
    },
    {
      result: 'Funkcyjny',
      meaning: 'Wspólna skrzynka, na przykład info@, sales@ lub support@. Rzadko należy do osoby, która podejmuje decyzje.',
      action: 'Usuń z cold mailingu, zachowaj na listach obsługi klienta',
    },
    {
      result: 'Duplikat',
      meaning: 'Ten sam adres występuje więcej niż raz.',
      action: 'Zachowaj jedną kopię',
    },
    {
      result: 'Catch-all, sprawdzony',
      meaning: 'Domena przyjmuje każdy adres. Giggal sprawdza skrzynkę, która za nim stoi.',
      action: 'Zachowaj prawidłowe, usuń nieprawidłowe',
    },
    {
      result: 'Nieznany',
      meaning: 'Serwer nie odpowiedział na czas albo poprosił o ponowną próbę później (greylisting).',
      action: 'Spróbuj ponownie później. Kredyty za nieznane wyniki są zwracane.',
    },
  ],
  removesOutro:
    'Usunięcie tych adresów utrzymuje niski współczynnik odbić. To chroni twoją reputację nadawcy, więc więcej twoich e-maili trafia do skrzynki odbiorczej. Dopiero poznajesz temat odbić? Przeczytaj, [czym jest twarde odbicie](/glossary/hard-bounce), oraz porównanie [twardego i miękkiego odbicia](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Dlaczego wiele narzędzi do czyszczenia list oznacza dobre kontakty jako ryzykowne',
  riskyParas: [
    'Wiele firmowych serwerów pocztowych przyjmuje każdy adres, prawdziwy lub wymyślony. To [domena catch-all](/blog/what-is-a-catch-all-email-address). W takich domenach zwykły test dostaje to samo „tak” dla prawdziwej skrzynki i dla literówki. Wiele usług czyszczenia list mailingowych kończy w tym miejscu, oznacza adres jako „ryzykowny” i zostawia decyzję tobie.',
    'Na listach B2B takie domeny są częste. Poczta większych firm często przechodzi przez bramki bezpieczeństwa, które ukrywają skrzynkę. Jeśli usuniesz te adresy, stracisz prawdziwych kupujących. Jeśli na nie wyślesz, nieistniejące adresy dadzą odbicie.',
    'Giggal sprawdza każdy adres catch-all i zwraca wynik prawidłowy albo nieprawidłowy za ten sam 1 kredyt co każdy inny test. Działa też na domenach za [bramkami bezpieczeństwa, takimi jak Proofpoint i Mimecast](/seg-email-verification), gdzie inne narzędzia zwracają wynik „nieznany”. Zobacz, jak działa [weryfikacja catch-all](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Przed i po: prawdziwa wyczyszczona lista',
  beforeAfterIntro: 'Oto, co czyszczenie zmieniło na jednej prawdziwej, zanonimizowanej liście B2B.',
  beforeAfterCols: ['Wynik', 'Adresy'],
  beforeAfterRows: [
    'Wgrane',
    'Prawidłowe, zachowane',
    'Nieprawidłowe, usunięte',
    'Jednorazowe, usunięte',
    'Funkcyjne, oznaczone',
    'Duplikaty, usunięte',
    'Catch-all z wynikiem prawidłowy, zachowane',
    'Catch-all z wynikiem nieprawidłowy, usunięte',
    'Nieznane, kredyty zwrócone',
  ],
  beforeAfterOutro:
    'Z listy usunięto {pct}% adresów. Liczba zachowanych kontaktów catch-all, które zwykłe narzędzie oznaczyłoby jako ryzykowne: {kept}.',

  pricingTitle: 'Cennik czyszczenia listy mailingowej',
  pricingIntro:
    'Płacisz za adresy, które czyścisz, bez miesięcznego zobowiązania. Jeden kredyt czyści jeden adres, a test catch-all jest w cenie. Kredyty nigdy nie wygasają, a pierwsze 1000 dostajesz za darmo.',
  pricingFootnote: 'Wyczyszczenie listy 10 000 kontaktów kosztuje 9,90 USD. W abonamencie miesięcznym oszczędzasz 10%. [Zobacz wszystkie ceny](/pricing)',

  oftenTitle: 'Jak często czyścić listę mailingową?',
  oftenIntro:
    'Adresy same się dezaktualizują. Ludzie zmieniają pracę, firmy zmieniają domeny, a stare skrzynki są zamykane. Listy B2B dezaktualizują się najszybciej. Czyść listę:',
  oftenBullets: [
    'Przed kampanią do każdej listy, której nie czyszczono w ostatnich kilku miesiącach.',
    'Zaraz po imporcie listy kupionej, zebranej ze stron internetowych albo wzbogaconej.',
    'Gdy twój współczynnik odbić zaczyna rosnąć. W cold mailingu [trzymaj go poniżej 2%](/blog/good-bounce-rate-for-cold-email).',
    'Regularnie, według stałego harmonogramu, jeśli często wysyłasz na daną listę.',
  ],
  oftenOutro:
    'Regularne czyszczenie to właśnie higiena listy mailingowej: zostawiasz tylko adresy, które istnieją i mogą odbierać twoją pocztę. To najprostszy sposób, aby [zmniejszyć współczynnik odbić](/blog/how-to-reduce-email-bounce-rate). Aby złe adresy w ogóle nie trafiały na listę, weryfikuj nowe rejestracje w czasie rzeczywistym przez [API](/public/docs).',

  livesTitle: 'Wyczyść listę mailingową w narzędziu, w którym już ją masz',
  livesIntro: 'Nie musisz ręcznie eksportować i ponownie importować danych.',
  livesBullets: [
    '**Narzędzia do e-mail marketingu i CRM:** wysyłaj czyste kontakty do [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid i [ponad 80 innych aplikacji](/integrations).',
    '**Automatyzacja:** połącz dowolne narzędzie przez [Zapier](/integrations/zapier) lub [n8n](/integrations/n8n).',
    '**API:** czyść listy z własnego kodu przez [REST API](/public/docs).',
    '**Asystenci AI:** sprawdzaj adresy w Claude, ChatGPT lub Cursor przez [MCP](/mcp).',
  ],

  vsTitle: 'Czyszczenie listy mailingowej a weryfikacja e-mail',
  vsParas: [
    'Oba korzystają z tych samych testów. Weryfikacja e-mail odpowiada na pytanie o jeden adres. Czyszczenie listy mailingowej uruchamia te testy na całym pliku i zwraca listę, na którą możesz wysyłać. Spotkasz też nazwy „scrubbing listy” i „email list cleaner”. To ta sama praca.',
    'Aby sprawdzić jeden adres, użyj [darmowego weryfikatora email](/email-checker). Aby sprawdzić, czy adres to jednorazowa skrzynka, użyj [narzędzia do sprawdzania jednorazowych adresów e-mail](/disposable-email-checker).',
  ],

  faqTitle: 'Czyszczenie listy mailingowej: pytania i odpowiedzi',
  faqs: [
    {
      q: 'Co robi usługa czyszczenia listy mailingowej?',
      a: 'Sprawdza każdy adres na twojej liście i usuwa te, które dałyby odbicie lub zaszkodziłyby dostarczalności: adresy nieprawidłowe, jednorazowe, zduplikowane i funkcyjne. Giggal sprawdza też adresy catch-all i zwraca dla nich wynik prawidłowy albo nieprawidłowy, zamiast oznaczać je jako ryzykowne.',
    },
    {
      q: 'Ile kosztuje wyczyszczenie listy mailingowej?',
      a: 'Jeden kredyt za adres, a test catch-all jest w cenie. 10 000 adresów kosztuje 9,90 USD, a pierwsze 1000 kredytów dostajesz za darmo. Kredyty nigdy nie wygasają.',
    },
    {
      q: 'Czy mogę wyczyścić listę mailingową za darmo?',
      a: 'Tak, do 1000 adresów. Każde nowe konto dostaje 1000 darmowych kredytów, bez karty, a te kredyty nigdy nie wygasają. Potem 10 000 adresów kosztuje 9,90 USD.',
    },
    {
      q: 'Ile trwa czyszczenie listy mailingowej?',
      a: 'Większość list wraca po kilku minutach.',
    },
    {
      q: 'Czy moje kontakty dostaną e-mail?',
      a: 'Nie. Testy komunikują się z serwerem pocztowym odbiorcy i kończą się, zanim zostanie wysłana jakakolwiek wiadomość. Twoje kontakty niczego nie zobaczą.',
    },
    {
      q: 'Co dzieje się z adresami catch-all?',
      a: 'Każdy z nich jest sprawdzany i dostaje wynik prawidłowy albo nieprawidłowy, za ten sam 1 kredyt. Zachowujesz prawdziwe kontakty i usuwasz nieistniejące.',
    },
    {
      q: 'Jakie pliki mogę wgrać?',
      a: 'CSV lub Excel, do 50 000 adresów w jednym pliku. Czystą listę pobierasz jako plik CSV.',
    },
    {
      q: 'Czy scrubbing listy to to samo co czyszczenie listy mailingowej?',
      a: 'Tak. Scrubbing, czyszczenie listy i higiena list mailingowych to ta sama praca: usuwanie adresów, które nie odbiorą twojej poczty.',
    },
    {
      q: 'Co oznacza wynik „nieznany” i czy za niego płacę?',
      a: 'Nieznany oznacza, że serwer pocztowy nie dał jasnej odpowiedzi, często z powodu greylistingu. Spróbuj ponownie później. Kredyty za nieznane wyniki są zwracane.',
    },
  ],

  ctaHeadline: 'Wyczyść listę mailingową w kilka minut',

  relatedTitle: 'Powiązane narzędzia i poradniki',
  related: [
    { title: 'Darmowy weryfikator email', desc: 'Sprawdź jeden adres e-mail: rekordy MX i test skrzynki.' },
    {
      title: 'Sprawdzanie jednorazowych adresów e-mail',
      desc: 'Wykrywa tymczasowe, fałszywe i jednorazowe skrzynki w ponad 100 000 domen.',
    },
    {
      title: 'Weryfikacja adresów catch-all',
      desc: 'Jak Giggal sprawdza firmowe domeny accept-all i zwraca wynik dostarczalny albo niedostarczalny.',
    },
    {
      title: 'Jak dokładna jest weryfikacja e-mail',
      desc: 'Co mierzą deklaracje dokładności od 97 do 99% i jak przetestować weryfikator na własnej liście.',
    },
    {
      title: 'Dlaczego cold maile wracają',
      desc: 'Najczęstsze przyczyny twardych i miękkich odbić oraz sposób czytania kodów odpowiedzi serwera.',
    },
    { title: 'Jak zmniejszyć współczynnik odbić', desc: 'Co powoduje wysoki współczynnik odbić i jak go obniżyć.' },
    {
      title: 'Dobry współczynnik odbić w cold mailingu',
      desc: 'Poniżej 2% to bezpieczny poziom. Co zrobić przy 2 do 5% i powyżej 5%.',
    },
    { title: 'API do weryfikacji email', desc: 'Sprawdzaj adresy przy rejestracji albo czyść pliki z własnego kodu.' },
  ],
}

const id: ListCleaningStrings = {
  metaTitle: 'Membersihkan Daftar Email dan Mengecek Catch-All | Giggal.ai',
  ogTitle: 'Membersihkan Daftar Email dan Mengecek Catch-All',
  description:
    'Layanan membersihkan daftar email dari alamat tidak valid, email sekali pakai, dan alamat ganda. Alamat catch-all dicek, bukan dihapus. 1.000 kredit gratis.',
  ogLocale: 'id_ID',
  ogAlt: 'Layanan membersihkan daftar email Giggal.ai',
  crumb: 'Membersihkan daftar email',
  serviceName: 'Layanan Membersihkan Daftar Email Giggal.ai',
  serviceType: 'Membersihkan dan memverifikasi daftar email',

  h1Lead: 'Layanan membersihkan daftar email yang juga',
  h1Highlight: 'memberi hasil pasti untuk alamat catch-all',
  heroIntro:
    'Unggah daftar Anda dan dapatkan kembali daftar yang bersih dalam beberapa menit. Layanan kami membersihkan daftar email dari alamat tidak valid, email sekali pakai, alamat berbasis peran, dan alamat ganda sebelum alamat itu bounce dan merusak reputasi pengirim Anda. Banyak alat pembersih daftar menandai setiap alamat catch-all sebagai "berisiko" dan menyerahkan keputusannya kepada Anda. Kami mengecek setiap alamat itu dan memberi tahu mana yang aman untuk dikirimi email.',
  heroCta: 'Bersihkan daftar saya gratis',
  heroPricing: 'Lihat harga',
  heroNote:
    '1.000 kredit gratis, tanpa kartu kredit. CSV atau Excel, hingga 50.000 alamat per file. Kredit tidak pernah kedaluwarsa.',
  demoDone: 'Selesai',
  demoDeliverable: 'Dapat dikirim',
  demoUndeliverable: 'Tidak dapat dikirim',

  ratings: {
    reviews: (count) => `${count} ulasan`,
    ratedAria: (rating, platform) => `Giggal.ai mendapat nilai ${rating.replace('.', ',')} dari 5 di ${platform}`,
  },
  awards: {
    headingLead: 'Giggal.ai dinilai sebagai',
    headingRest: 'Leader di SourceForge dan Slashdot',
    showLabel: 'Tampilkan {badge}',
  },

  stepsTitle: 'Bersihkan daftar email Anda dalam tiga langkah',
  steps: [
    {
      title: 'Unggah daftar Anda',
      body: 'Tambahkan file CSV atau Excel dengan hingga 50.000 alamat. Daftar Anda lebih besar? Bagi menjadi beberapa file.',
    },
    {
      title: 'Kami mengecek setiap alamat',
      body: 'Kami mengecek server email domain (MX) dan apakah kotak masuknya sendiri ada. Kami juga mengecek email sekali pakai, alamat berbasis peran, alamat ganda, dan alamat catch-all. Tidak ada email yang dikirim ke kontak Anda.',
    },
    {
      title: 'Unduh daftar yang bersih',
      body: 'Anda mendapat file CSV dengan hasil di setiap baris. Anda bisa menyimpan, menghapus, atau meninjau setiap alamat.',
    },
  ],

  removesTitle: 'Alamat yang dihapus saat membersihkan daftar email',
  removesCols: ['Hasil', 'Artinya', 'Yang perlu dilakukan'],
  removesRows: [
    {
      result: 'Tidak valid',
      meaning: 'Kotak masuk atau domainnya tidak ada. Mengirim ke alamat ini menyebabkan hard bounce.',
      action: 'Hapus',
    },
    {
      result: 'Email sekali pakai',
      meaning: 'Kotak masuk sementara dari layanan seperti Mailinator atau 10MinuteMail. Alamat ini akan segera hilang.',
      action: 'Hapus',
    },
    {
      result: 'Alamat berbasis peran',
      meaning: 'Kotak masuk bersama seperti info@, sales@, atau support@. Jarang milik pengambil keputusan.',
      action: 'Hapus untuk outreach, simpan untuk daftar dukungan pelanggan',
    },
    {
      result: 'Alamat ganda',
      meaning: 'Alamat yang sama muncul lebih dari satu kali.',
      action: 'Simpan satu salinan',
    },
    {
      result: 'Catch-all, sudah dicek',
      meaning: 'Domain ini menerima semua alamat. Giggal mengecek kotak masuk di baliknya.',
      action: 'Simpan jika valid, hapus jika tidak valid',
    },
    {
      result: 'Tidak diketahui',
      meaning: 'Server tidak menjawab tepat waktu atau meminta kami mencoba lagi nanti (greylisting).',
      action: 'Coba lagi nanti. Kredit untuk hasil tidak diketahui dikembalikan.',
    },
  ],
  removesOutro:
    'Menghapus alamat ini menjaga bounce rate (tingkat bounce) Anda tetap rendah. Itu melindungi reputasi pengirim Anda, sehingga lebih banyak email sampai ke kotak masuk. Baru mengenal bounce? Baca [apa itu hard bounce](/glossary/hard-bounce) dan [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).',

  riskyTitle: 'Kenapa banyak alat pembersih daftar email menandai kontak yang bagus sebagai berisiko',
  riskyParas: [
    'Banyak server email perusahaan menerima semua alamat, baik asli maupun fiktif. Itulah [domain catch-all](/blog/what-is-a-catch-all-email-address). Di domain seperti ini, pemeriksaan biasa mendapat jawaban "ya" yang sama untuk kotak masuk asli dan untuk salah ketik. Banyak layanan pembersih daftar email berhenti di situ, menandai alamat itu "berisiko", dan menyerahkan keputusannya kepada Anda.',
    'Di daftar B2B, domain seperti ini sering ditemukan. Perusahaan besar sering memakai gateway keamanan yang menyembunyikan kotak masuk. Jika Anda menghapus alamat ini, Anda membuang pembeli sungguhan. Jika Anda mengirim ke alamat ini, alamat yang sudah mati akan bounce.',
    'Giggal memberi hasil valid atau tidak valid untuk setiap alamat catch-all, seharga 1 kredit seperti pemeriksaan lain. Ini juga berfungsi pada domain di balik [gateway keamanan seperti Proofpoint dan Mimecast](/seg-email-verification), tempat alat lain memberi hasil "tidak diketahui". Lihat cara kerja [verifikasi catch-all](/catch-all-verification).',
  ],

  beforeAfterTitle: 'Sebelum dan sesudah: daftar asli yang sudah dibersihkan',
  beforeAfterIntro: 'Berikut hasil pembersihan pada satu daftar B2B asli, dengan data yang sudah dianonimkan.',
  beforeAfterCols: ['Hasil', 'Alamat'],
  beforeAfterRows: [
    'Diunggah',
    'Valid, disimpan',
    'Tidak valid, dihapus',
    'Email sekali pakai, dihapus',
    'Alamat berbasis peran, ditandai',
    'Alamat ganda, dihapus',
    'Catch-all dengan hasil valid, disimpan',
    'Catch-all dengan hasil tidak valid, dihapus',
    'Tidak diketahui, kredit dikembalikan',
  ],
  beforeAfterOutro:
    '{pct}% dari daftar ini dihapus. {kept} kontak catch-all tetap disimpan, padahal alat pembersih biasa akan menandainya berisiko.',

  pricingTitle: 'Harga membersihkan daftar email',
  pricingIntro:
    'Bayar untuk email yang Anda bersihkan, tanpa komitmen bulanan. Satu kredit membersihkan satu alamat, termasuk pemeriksaan catch-all. Kredit tidak pernah kedaluwarsa, dan 1.000 kredit pertama Anda gratis.',
  pricingFootnote:
    'Membersihkan daftar berisi 10.000 kontak seharga US$9,90. Dengan langganan bulanan, Anda hemat 10%. [Lihat semua harga](/pricing)',

  oftenTitle: 'Seberapa sering Anda harus membersihkan daftar email?',
  oftenIntro:
    'Alamat email menjadi usang dengan sendirinya. Orang pindah kerja, perusahaan mengganti domain, dan kotak masuk lama ditutup. Daftar B2B paling cepat usang. Bersihkan daftar Anda:',
  oftenBullets: [
    'Sebelum kampanye ke daftar yang belum Anda bersihkan dalam beberapa bulan terakhir.',
    'Segera setelah Anda mengimpor daftar yang dibeli, hasil scraping, atau hasil pengayaan data.',
    'Saat bounce rate Anda mulai naik. Untuk cold email, [jaga di bawah 2%](/blog/good-bounce-rate-for-cold-email).',
    'Secara rutin untuk setiap daftar yang sering Anda kirimi email.',
  ],
  oftenOutro:
    'Pembersihan rutin inilah yang disebut kebersihan daftar email (email hygiene): hanya menyimpan alamat yang ada dan bisa menerima email Anda. Ini cara paling sederhana untuk [menurunkan bounce rate](/blog/how-to-reduce-email-bounce-rate). Agar alamat buruk tidak masuk sejak awal, verifikasi pendaftaran baru secara real-time dengan [API](/public/docs).',

  livesTitle: 'Bersihkan daftar email Anda di alat yang sudah Anda pakai',
  livesIntro: 'Anda tidak perlu mengekspor dan mengimpor ulang secara manual.',
  livesBullets: [
    '**Alat email dan CRM:** kirim kontak yang bersih ke [HubSpot](/integrations/hubspot), Mailchimp, ActiveCampaign, SendGrid, dan [lebih dari 80 aplikasi lain](/integrations).',
    '**Otomatisasi:** hubungkan alat apa pun melalui [Zapier](/integrations/zapier) atau [n8n](/integrations/n8n).',
    '**API:** bersihkan daftar dari kode Anda sendiri dengan [REST API](/public/docs).',
    '**Asisten AI:** cek alamat langsung di Claude, ChatGPT, atau Cursor melalui [MCP](/mcp).',
  ],

  vsTitle: 'Membersihkan daftar email vs verifikasi email',
  vsParas: [
    'Keduanya memakai pemeriksaan yang sama. Verifikasi email menjawab pertanyaan untuk satu alamat. Membersihkan daftar email menjalankan pemeriksaan itu pada seluruh file dan mengembalikan daftar yang siap Anda kirimi email. Anda juga akan melihat istilah email scrubbing atau email list cleaner. Pekerjaannya sama.',
    'Untuk mengecek satu alamat, pakai [email checker gratis](/email-checker). Untuk melihat apakah sebuah alamat adalah kotak masuk sementara, pakai [pemeriksa email sekali pakai](/disposable-email-checker).',
  ],

  faqTitle: 'FAQ membersihkan daftar email',
  faqs: [
    {
      q: 'Apa yang dilakukan layanan membersihkan daftar email?',
      a: 'Layanan ini mengecek setiap alamat di daftar Anda dan menghapus alamat yang akan bounce atau merusak deliverability (tingkat keterkiriman email): alamat tidak valid, email sekali pakai, alamat ganda, dan alamat berbasis peran. Giggal juga memberi hasil valid atau tidak valid untuk alamat catch-all, bukan menandainya berisiko.',
    },
    {
      q: 'Berapa biaya membersihkan daftar email?',
      a: 'Satu kredit per alamat, termasuk pemeriksaan catch-all. 10.000 alamat seharga US$9,90, dan 1.000 kredit pertama Anda gratis. Kredit tidak pernah kedaluwarsa.',
    },
    {
      q: 'Bisakah saya membersihkan daftar email secara gratis?',
      a: 'Bisa, hingga 1.000 alamat. Setiap akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit, dan kredit itu tidak pernah kedaluwarsa. Setelah itu, 10.000 alamat seharga US$9,90.',
    },
    {
      q: 'Berapa lama proses membersihkan daftar email?',
      a: 'Sebagian besar daftar selesai dalam beberapa menit.',
    },
    {
      q: 'Apakah kontak saya akan menerima email?',
      a: 'Tidak. Pemeriksaan berkomunikasi dengan server email penerima dan berhenti sebelum ada pesan yang dikirim. Kontak Anda tidak melihat apa pun.',
    },
    {
      q: 'Apa yang terjadi pada alamat catch-all?',
      a: 'Setiap alamat catch-all dicek dan mendapat hasil valid atau tidak valid, seharga 1 kredit yang sama. Anda menyimpan kontak asli dan membuang alamat yang sudah mati.',
    },
    {
      q: 'File apa yang bisa saya unggah?',
      a: 'CSV atau Excel, hingga 50.000 alamat per file. Anda mengunduh daftar yang bersih sebagai file CSV.',
    },
    {
      q: 'Apakah email scrubbing sama dengan membersihkan daftar email?',
      a: 'Ya. Email scrubbing, membersihkan daftar, dan email hygiene semuanya berarti pekerjaan yang sama: menghapus alamat yang tidak akan menerima email Anda.',
    },
    {
      q: 'Apa arti "tidak diketahui", dan apakah saya membayar untuk hasil itu?',
      a: 'Tidak diketahui berarti server email tidak memberi jawaban yang jelas, sering karena greylisting. Coba lagi nanti. Kredit untuk hasil tidak diketahui dikembalikan.',
    },
  ],

  ctaHeadline: 'Bersihkan daftar email Anda dalam beberapa menit',

  relatedTitle: 'Alat dan panduan terkait',
  related: [
    { title: 'Email checker gratis', desc: 'Verifikasi satu alamat email: MX record dan pemeriksaan kotak masuk.' },
    { title: 'Pemeriksa email sekali pakai', desc: 'Deteksi kotak masuk sementara, palsu, dan sekali pakai di lebih dari 100.000 domain.' },
    {
      title: 'Verifikasi email catch-all',
      desc: 'Cara Giggal memberi hasil dapat dikirim atau tidak dapat dikirim untuk domain bisnis accept-all.',
    },
    {
      title: 'Seberapa akurat verifikasi email',
      desc: 'Apa yang diukur oleh klaim akurasi 97 sampai 99%, dan cara menguji alat verifikasi pada daftar Anda sendiri.',
    },
    { title: 'Kenapa cold email bounce', desc: 'Penyebab umum hard bounce dan soft bounce, serta cara membaca kode respons server.' },
    { title: 'Cara menurunkan bounce rate email', desc: 'Penyebab bounce rate tinggi dan cara menurunkannya.' },
    { title: 'Bounce rate cold email yang baik', desc: 'Di bawah 2% berarti sehat. Yang perlu dilakukan pada 2 sampai 5% dan di atas 5%.' },
    { title: 'API verifikasi email', desc: 'Cek alamat saat pendaftaran atau bersihkan file dari kode Anda sendiri.' },
  ],
}

const ja: ListCleaningStrings = {
  metaTitle: 'メールリストのクリーニング：キャッチオールドメインのアドレスも判定 | Giggal.ai',
  ogTitle: 'キャッチオールドメインのアドレスも残せるメールリストのクリーニング',
  description:
    '無効、使い捨て、重複のメールアドレスを削除するメールリストのクリーニングサービスです。キャッチオールドメインのアドレスは削除せず、有効か無効かを判定します。無料クレジット1,000件付き。',
  ogLocale: 'ja_JP',
  ogAlt: 'Giggal.aiのメールリストのクリーニングサービス',
  crumb: 'メールリストのクリーニング',
  serviceName: 'Giggal.ai メールリストのクリーニングサービス',
  serviceType: 'メールリストのクリーニングとメールアドレス検証',

  h1Lead: 'メールリストのクリーニングサービス：',
  h1Highlight: 'キャッチオールドメインのアドレスも判定',
  heroIntro:
    'リストをアップロードすると、数分でクリーニング済みのリストが返ってきます。このメールリストのクリーニングサービスは、無効なアドレス、使い捨てメールアドレス、役割アドレス、重複したアドレスを、バウンスする前に削除します。バウンスは送信者レピュテーションを下げます。多くのクリーニングツールは、キャッチオールドメインのアドレスをすべて「リスクあり」とし、判断を利用者に任せます。Giggalはアドレスを1件ずつチェックし、送信しても安全かどうかをお伝えします。',
  heroCta: 'リストを無料でクリーニング',
  heroPricing: '料金を見る',
  heroNote: '無料クレジット1,000件付き。クレジットカードは不要です。CSVまたはExcel、1ファイルあたり最大50,000件。クレジットに有効期限はありません。',
  demoDone: '完了',
  demoDeliverable: '配信可能',
  demoUndeliverable: '配信不可',

  ratings: {
    reviews: (count) => `${count}件のレビュー`,
    ratedAria: (rating, platform) => `Giggal.aiの${platform}での評価は5点中${rating}点です`,
  },
  awards: {
    headingLead: 'Giggal.aiはSourceForgeとSlashdotで',
    headingRest: 'Leaderと評価されています',
    showLabel: '{badge}を表示',
  },

  stepsTitle: 'メールリストのクリーニングは3つのステップで行います',
  steps: [
    {
      title: 'リストをアップロード',
      body: '最大50,000件のアドレスが入ったCSVまたはExcelのファイルを追加します。リストがそれより大きい場合は、複数のファイルに分けてください。',
    },
    {
      title: 'すべてのアドレスをチェック',
      body: 'ドメインのメールサーバー（MX）と、メールボックスが実際に存在するかをチェックします。使い捨て、役割アドレス、重複、キャッチオールドメインのチェックも行います。連絡先にメールは送られません。',
    },
    {
      title: 'クリーニング済みのリストをダウンロード',
      body: 'すべての行に結果が入ったCSVファイルを受け取ります。アドレスごとに、残す、削除する、確認するを決められます。',
    },
  ],

  removesTitle: 'メールリストのクリーニングで削除するアドレス',
  removesCols: ['結果', '意味', '対応'],
  removesRows: [
    {
      result: '無効',
      meaning: 'メールボックスまたはドメインが存在しません。送信するとハードバウンスになります。',
      action: '削除する',
    },
    {
      result: '使い捨て',
      meaning: 'Mailinatorや10MinuteMailのようなサービスの一時的な受信トレイです。すぐに使えなくなります。',
      action: '削除する',
    },
    {
      result: '役割アドレス',
      meaning: 'info@、sales@、support@のような共有の受信トレイです。決裁者本人のアドレスであることはまれです。',
      action: '営業メールでは削除し、サポート用のリストでは残す',
    },
    {
      result: '重複',
      meaning: '同じアドレスが2回以上出てきます。',
      action: '1件だけ残す',
    },
    {
      result: 'キャッチオールドメイン（判定済み）',
      meaning: 'すべてのアドレス宛てのメールを受け付けるドメインです。Giggalはその背後にあるメールボックスをチェックします。',
      action: '有効なら残し、無効なら削除する',
    },
    {
      result: '不明',
      meaning: 'サーバーが時間内に応答しなかったか、後で再試行するよう求めました（グレーリスティング）。',
      action: '後で再試行してください。不明の結果はクレジットを返却します。',
    },
  ],
  removesOutro:
    'これらのアドレスを削除すると、バウンス率を低く保てます。送信者レピュテーションが守られ、より多くのメールが受信トレイに届きます。バウンスについて詳しくは、[ハードバウンスとは](/glossary/hard-bounce)と[ハードバウンスとソフトバウンスの違い](/blog/hard-bounce-vs-soft-bounce)をお読みください。',

  riskyTitle: '多くのメールリストのクリーニングツールが有望な見込み客を「リスクあり」とする理由',
  riskyParas: [
    '多くの企業のメールサーバーは、実在するかどうかに関係なく、すべてのアドレスを受け付けます。これが[キャッチオールドメイン](/blog/what-is-a-catch-all-email-address)です。このドメインでは、通常のチェックは実在するメールボックスにも入力ミスのアドレスにも同じ「はい」を受け取ります。多くのメールリストのクリーニングサービスはそこで止まり、アドレスを「リスクあり」として判断を利用者に任せます。',
    'B2Bのリストでは、このようなドメインがよくあります。また、大企業は、メールボックスを隠すセキュリティゲートウェイを使っていることがよくあります。これらのアドレスを削除すると、実在する購入者を失います。そのまま送信すると、存在しないアドレスがバウンスします。',
    'Giggalは、キャッチオールドメインのアドレスを1件ずつ有効か無効かに判定します。料金はほかのチェックと同じ1クレジットです。[ProofpointやMimecastのようなセキュリティゲートウェイ](/seg-email-verification)の背後にあるドメインにも対応しています。こうしたドメインでは、ほかのツールは「不明」を返します。[キャッチオールドメインの検証](/catch-all-verification)のしくみもご覧ください。',
  ],

  beforeAfterTitle: 'クリーニングの前と後：実際のリストの例',
  beforeAfterIntro: '実際のB2Bのリスト1件をクリーニングした結果です。個人を特定できる情報は除いています。',
  beforeAfterCols: ['結果', 'アドレス数'],
  beforeAfterRows: [
    'アップロード数',
    '有効、残した',
    '無効、削除した',
    '使い捨て、削除した',
    '役割アドレス、印を付けた',
    '重複、削除した',
    'キャッチオールドメインで有効と判定、残した',
    'キャッチオールドメインで無効と判定、削除した',
    '不明、クレジットを返却した',
  ],
  beforeAfterOutro:
    'リストの{pct}%を削除しました。通常のクリーニングツールなら「リスクあり」としたキャッチオールドメインの連絡先を{kept}件残しました。',

  pricingTitle: 'メールリストのクリーニングの料金',
  pricingIntro:
    'クリーニングしたメールアドレスの分だけ支払います。月額の契約は不要です。1クレジットでアドレス1件をクリーニングでき、キャッチオールドメインのチェックも含まれます。クレジットに有効期限はなく、最初の1,000件は無料です。',
  pricingFootnote: '10,000件のリストのクリーニングはUS$9.90です。月額プランは10%お得です。[すべての料金を見る](/pricing)',

  oftenTitle: 'メールリストはどのくらいの頻度でクリーニングするべきですか？',
  oftenIntro:
    'アドレスは時間とともに使えなくなります。人は転職し、会社はドメインを変え、古い受信トレイは閉鎖されます。B2Bのリストは特に早く古くなります。次のときにリストをクリーニングしてください。',
  oftenBullets: [
    'ここ数か月クリーニングしていないリストに、キャンペーンを送る前。',
    '購入したリスト、スクレイピングしたリスト、エンリッチしたリストをインポートした直後。',
    'バウンス率が上がり始めたとき。コールドメールでは[2%未満に保ってください](/blog/good-bounce-rate-for-cold-email)。',
    '頻繁に送信するリストは、定期的に。',
  ],
  oftenOutro:
    '定期的なクリーニングは、メールリストの衛生管理（email hygiene）とも呼ばれます。実在し、メールを受け取れるアドレスだけを残すことです。[バウンス率を下げる](/blog/how-to-reduce-email-bounce-rate)ための最も簡単な方法です。そもそも悪いアドレスを入れないためには、[API](/public/docs)で新しい登録をリアルタイムに検証してください。',

  livesTitle: 'メールリストを今ある場所でクリーニング',
  livesIntro: '手作業でエクスポートして、もう一度インポートする必要はありません。',
  livesBullets: [
    '**メール配信ツールとCRM：**クリーニング済みの連絡先を[HubSpot](/integrations/hubspot)、Mailchimp、ActiveCampaign、SendGridなど、[80以上のアプリ](/integrations)に送れます。',
    '**自動化：**[Zapier](/integrations/zapier)または[n8n](/integrations/n8n)で、どのツールともつなげられます。',
    '**API：**[REST API](/public/docs)を使って、自社のコードからリストをクリーニングできます。',
    '**AIアシスタント：**[MCP](/mcp)を使って、Claude、ChatGPT、Cursorの中でアドレスをチェックできます。',
  ],

  vsTitle: 'メールリストのクリーニングとメールアドレス検証の違い',
  vsParas: [
    'どちらも同じチェックを使います。メールアドレス検証は、アドレス1件について答えを出します。メールリストのクリーニングは、同じチェックをファイル全体に行い、送信に使えるリストを返します。英語ではemail list cleaning、email scrubbingとも呼ばれます。どれも同じ作業です。',
    'アドレス1件をチェックするには、[無料のメールアドレス存在確認ツール](/email-checker)を使ってください。アドレスが使い捨ての受信トレイかどうかを調べるには、[捨てメアド判定ツール](/disposable-email-checker)を使ってください。',
  ],

  faqTitle: 'メールリストのクリーニングに関するよくある質問',
  faqs: [
    {
      q: 'メールリストのクリーニングサービスでは何をしますか？',
      a: 'リストのすべてのアドレスをチェックし、バウンスするアドレスや到達率を下げるアドレスを削除します。対象は、無効なアドレス、使い捨てメールアドレス、重複したアドレス、役割アドレスです。Giggalは、キャッチオールドメインのアドレスも「リスクあり」とせず、有効か無効かに判定します。',
    },
    {
      q: 'メールリストのクリーニングの料金はいくらですか？',
      a: 'アドレス1件につき1クレジットで、キャッチオールドメインのチェックも含まれます。10,000件でUS$9.90です。最初の1,000クレジットは無料です。クレジットに有効期限はありません。',
    },
    {
      q: 'メールリストを無料でクリーニングできますか？',
      a: 'はい、1,000件まで無料です。新しいアカウントには無料クレジット1,000件が付きます。クレジットカードは不要で、有効期限もありません。その後は、10,000件でUS$9.90です。',
    },
    {
      q: 'メールリストのクリーニングにはどのくらい時間がかかりますか？',
      a: 'ほとんどのリストは数分で終わります。',
    },
    {
      q: 'リストの連絡先にメールが届きますか？',
      a: 'いいえ。チェックは受信側のメールサーバーとやり取りし、メッセージを送る前に止まります。連絡先には何も届きません。',
    },
    {
      q: 'キャッチオールドメインのアドレスはどうなりますか？',
      a: '1件ずつチェックし、有効か無効かの結果を返します。料金は同じ1クレジットです。実在する連絡先は残し、存在しないアドレスは削除できます。',
    },
    {
      q: 'どのファイルをアップロードできますか？',
      a: 'CSVまたはExcelで、1ファイルあたり最大50,000件です。クリーニング済みのリストはCSVでダウンロードできます。',
    },
    {
      q: 'メールスクラビングとメールリストのクリーニングは同じですか？',
      a: 'はい。メールスクラビング（email scrubbing）、リストのクリーニング、メールリストの衛生管理は、どれも同じ作業を指します。メールを受け取れないアドレスを削除することです。',
    },
    {
      q: '「不明」とは何ですか？料金はかかりますか？',
      a: '不明とは、メールサーバーがはっきりした答えを返さなかったことを意味します。グレーリスティングが原因であることがよくあります。後でもう一度お試しください。不明の結果のクレジットは返却されます。',
    },
  ],

  ctaHeadline: 'メールリストを数分でクリーニング',

  relatedTitle: '関連ツールとガイド',
  related: [
    { title: '無料のメールアドレス存在確認', desc: 'メールアドレス1件を検証します。MXレコードとメールボックスをチェックします。' },
    { title: '捨てメアド判定', desc: '100,000以上のドメインをもとに、一時的なアドレス、偽のアドレス、使い捨てのアドレスを見つけます。' },
    {
      title: 'キャッチオールドメインの検証',
      desc: 'すべてのアドレスを受け付ける企業ドメインのアドレスを、Giggalが配信可能か配信不可かに判定するしくみです。',
    },
    {
      title: 'メールアドレス検証の精度',
      desc: '「97〜99%の精度」という数字が何を測っているか。自社のリストで検証ツールを試す方法。',
    },
    { title: 'コールドメールがバウンスする理由', desc: 'ハードバウンスとソフトバウンスのよくある原因と、サーバーの応答コードの読み方。' },
    { title: 'メールのバウンス率を下げる方法', desc: 'バウンス率が高くなる原因と、バウンス率を下げる方法。' },
    { title: 'コールドメールのバウンス率の目安', desc: '2%未満なら健全です。2〜5%のときと5%を超えたときの対応。' },
    { title: 'メールアドレス検証API', desc: '登録時にアドレスをチェックしたり、自社のコードからファイルをクリーニングしたりできます。' },
  ],
}

export const LIST_CLEANING_STRINGS: Partial<Record<Locale, ListCleaningStrings>> & { en: ListCleaningStrings } = {
  en,
  ja,
  fr,
  nl,
  pl,
  id,
  'pt-br': ptBr,
  es,
  de,
  it,
  ko,
  tr,
}

/** The page copy for `locale`, or English when that language has not been added yet. */
export function getListCleaningStrings(locale: Locale): ListCleaningStrings {
  return LIST_CLEANING_STRINGS[locale] ?? LIST_CLEANING_STRINGS.en
}
