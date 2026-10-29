import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Italian copy of the affiliate page. Source: app/(en)/affiliates/page.tsx.
// Register: "tu", as in lib/i18n/it.ts. Money as on the Italian site: "50 $".

export const AFFILIATES_IT: AffiliatesContent = {
  meta: {
    title: 'Programma di affiliazione: 20% ricorrente | Giggal.ai',
    description:
      'Programma di affiliazione di Giggal.ai: 20% di commissione ricorrente su ogni pagamento dei referral, attribuzione di 3 mesi, pagamenti mensili, nessun tetto.',
    ogTitle: 'Programma di affiliazione: 20% ricorrente sulla verifica email',
    ogDescription:
      'Guadagna il 20% di commissione ricorrente per ogni cliente che porti a Giggal.ai. Nessuna scadenza, nessun tetto.',
  },
  crumb: 'Programma di affiliazione',
  h1Lead: 'Guadagna il 20% ricorrente',
  h1Accent: 'ogni mese, senza scadenza',
  intro: {
    before: 'Consiglia',
    after:
      'al tuo pubblico e guadagna una commissione del 20% su ogni pagamento dei tuoi referral, finché restano clienti. Nessun tetto, nessuna scadenza.',
  },
  joinCta: 'Unisciti al programma di affiliazione',
  howCta: 'Scopri come funziona',
  stats: [
    { value: '20%', label: 'Ricorrente' },
    { value: '3 mesi', label: 'Attribuzione' },
    { value: 'Mensili', label: 'Pagamenti' },
    { value: '50 $', label: 'Pagamento minimo' },
  ],
  why: {
    eyebrow: 'Perché partecipare',
    h2: 'Uno dei programmi più generosi tra gli strumenti per l\'email',
    sub: 'Un ricavo ricorrente reale, non un premio una tantum.',
    cards: [
      {
        title: '20% ricorrente',
        body: 'Guadagni su ogni pagamento dei tuoi referral, mese dopo mese, anno dopo anno.',
      },
      {
        title: 'Nessun tetto ai guadagni',
        body: 'Porta 10 clienti o 10.000. Non c\'è un limite a quanto puoi guadagnare.',
      },
      {
        title: 'Attribuzione di 3 mesi',
        body: 'Il referral è tuo se la persona si registra entro 3 mesi dal clic sul tuo link.',
      },
      {
        title: 'Pagamenti mensili',
        body: 'Ricevi un pagamento ogni mese tramite PayPal o Wise, una volta raggiunto il minimo di 50 $.',
      },
    ],
  },
  how: {
    eyebrow: 'Come funziona',
    h2: 'Dall\'iscrizione al primo pagamento in pochi giorni, non in mesi',
    steps: [
      {
        title: 'Iscriviti in 30 secondi',
        body: 'Iscriviti al programma e ricevi subito il tuo link di referral personale. Nessun colloquio, nessun periodo di attesa.',
      },
      {
        title: 'Condividi il tuo link',
        body: 'Promuovi Giggal.ai sul tuo blog, nella newsletter, sui social, su YouTube o direttamente con i clienti che hanno bisogno di liste email più pulite.',
      },
      {
        title: 'Ricevi i pagamenti ogni mese',
        body: 'Guadagni il 20% di ogni pagamento dei tuoi referral. Il tracciamento è automatico e il pagamento arriva ogni mese.',
      },
    ],
  },
  earn: {
    eyebrow: 'Il tuo potenziale',
    h2: 'Ecco quanto puoi guadagnare',
    sub: 'Calcolato su clienti con il piano 100K, il più scelto (76 $/mese). Anche gli altri piani pagano il 20%.',
    colCustomers: 'Clienti segnalati',
    colPlan: 'Con il piano',
    colEarnings: 'Il tuo guadagno mensile',
    perMonth: '/mese',
    note: 'Questi numeri sono solo un esempio. Il guadagno reale dipende dal piano che scelgono i tuoi referral.',
  },
  who: {
    eyebrow: 'Per chi è',
    h2: 'Pensato per chi tiene alla deliverability',
    sub: 'Se il tuo pubblico invia email, è un pubblico adatto a Giggal.ai.',
    cards: [
      {
        title: 'Email marketer',
        body: 'Consiglia lo strumento di cui ti fidi già per pulire le liste prima delle campagne.',
      },
      {
        title: 'Agenzie',
        body: 'Ottieni un ricavo ricorrente da ogni cliente che porti su Giggal.ai.',
      },
      {
        title: 'Creatori di corsi',
        body: 'Inserisci Giggal.ai nel programma del tuo corso di cold email o lead generation.',
      },
      {
        title: 'Community SaaS',
        body: 'Condividilo con il tuo pubblico di marketer, founder e professionisti della crescita.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Domande frequenti',
    items: [
      {
        q: 'Quando e come vengo pagato?',
        a: 'I pagamenti partono ogni mese tramite PayPal o Wise (a tua scelta), quando il saldo non pagato raggiunge 50 $. Non tratteniamo nessuna quota a garanzia. Quando un referral paga, la commissione è tua.',
      },
      {
        q: 'Per quanto tempo dura la commissione?',
        a: 'Finché il tuo referral continua a pagare. Se resta cliente per 3 anni, guadagni il 20% di ogni pagamento per 3 anni. È un vero ricavo ricorrente.',
      },
      {
        q: 'Cosa succede se il mio referral annulla l\'abbonamento?',
        a: 'Smetti di guadagnare la commissione su quel cliente nel momento in cui annulla. Se in seguito si abbona di nuovo con lo stesso account, la commissione riprende.',
      },
      {
        q: 'Quanto dura la finestra di attribuzione?',
        a: 'Il tracciamento dura 3 mesi dal momento in cui una persona clicca sul tuo link. Se si registra entro quel periodo, il referral viene attribuito a te.',
      },
      {
        q: 'Posso fare promozione su YouTube, blog e annunci a pagamento?',
        a: 'Sì per YouTube, blog, newsletter, social media e Reddit. Gli annunci a pagamento sulle parole chiave del nostro brand (ad esempio "Giggal.ai") non sono consentiti. Tutto il resto è permesso.',
      },
      {
        q: 'Devo essere cliente per partecipare?',
        a: 'No, ma ti consigliamo vivamente di provare prima il prodotto (ricevi 1.000 crediti gratuiti). Così puoi consigliarlo per esperienza diretta.',
      },
      {
        q: 'C\'è una soglia minima di pagamento?',
        a: 'Sì, 50 $. Le commissioni non pagate passano al mese successivo finché non raggiungi la soglia. Poi vengono pagate in automatico.',
      },
    ],
    more: 'Hai altre domande?',
    talk: 'Contattaci',
  },
  final: {
    h2: 'Vuoi trasformare i referral in entrate ricorrenti?',
    text: 'Iscriviti in 30 secondi e inizia a guadagnare il 20% di commissione su ogni pagamento dei tuoi referral.',
    checks: ['Iscrizione gratuita', 'Nessuna approvazione richiesta', 'Commissioni a vita'],
  },
}
