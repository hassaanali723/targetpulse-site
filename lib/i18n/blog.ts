import type { L10nLocale } from '@/lib/i18n/strings'

// Blog chrome per language: hub page copy and article page labels. Post copy
// lives in content/blog/<locale>/*.md.
export interface BlogStrings {
  hubTitle: string
  hubDesc: string
  hubOgTitle: string
  h1: string
  intro: string
  listName: string
  readMore: string
  // Pagination on the hub: page 2 and later live at <hub>/page/<n>.
  prevPage: string
  nextPage: string
  paginationAria: string
  breadcrumbAria: string
  home: string
  tocTitle: string
  tocAria: string
  defaultCta: string
}

export const BLOG_STRINGS: Record<L10nLocale, BlogStrings> = {
  it: {
    hubTitle: 'Blog su Verifica Email e Deliverability | Giggal.ai',
    hubDesc: 'Guide in italiano su indirizzi catch-all, gateway di sicurezza, tassi di rimbalzo e verifica email. Spiegazioni chiare per chi pulisce liste vere.',
    hubOgTitle: 'Blog su verifica email e deliverability',
    h1: 'Guide su verifica email e deliverability',
    intro: 'Spiegazioni chiare su indirizzi catch-all, gateway di sicurezza, tassi di rimbalzo e cosa significano davvero i risultati di una verifica.',
    listName: 'Guide Giggal.ai su verifica email e deliverability',
    readMore: "Leggi l'articolo",
    prevPage: 'Precedente',
    nextPage: 'Successiva',
    paginationAria: 'Paginazione del blog',
    breadcrumbAria: 'Percorso',
    home: 'Pagina iniziale',
    tocTitle: 'In questa pagina',
    tocAria: 'Indice',
    defaultCta: 'Verifica la tua lista con Giggal.ai',
  },
  de: {
    hubTitle: 'Blog zu E-Mail-Verifizierung und Zustellbarkeit | Giggal.ai',
    hubDesc: 'Leitfäden auf Deutsch zu Catch-all-Adressen, Sicherheits-Gateways, Bounce-Raten und E-Mail-Prüfung. Klare Erklärungen für alle, die echte Listen bereinigen.',
    hubOgTitle: 'Blog zu E-Mail-Verifizierung und Zustellbarkeit',
    h1: 'Leitfäden zu E-Mail-Verifizierung und Zustellbarkeit',
    intro: 'Klare Erklärungen zu Catch-all-Adressen, Sicherheits-Gateways, Bounce-Raten und dazu, was die Ergebnisse einer E-Mail-Prüfung wirklich bedeuten.',
    listName: 'Giggal.ai Leitfäden zu E-Mail-Verifizierung und Zustellbarkeit',
    readMore: 'Artikel lesen',
    prevPage: 'Zurück',
    nextPage: 'Weiter',
    paginationAria: 'Blog-Seitennavigation',
    breadcrumbAria: 'Brotkrumen',
    home: 'Startseite',
    tocTitle: 'Auf dieser Seite',
    tocAria: 'Inhaltsverzeichnis',
    defaultCta: 'Prüfen Sie Ihre Liste mit Giggal.ai',
  },
  es: {
    hubTitle: 'Blog de Verificación de Correo y Entregabilidad | Giggal.ai',
    hubDesc: 'Guías en español sobre correos catch-all, gateways de seguridad, tasas de rebote y validación de correo. Explicaciones claras para quien limpia listas reales.',
    hubOgTitle: 'Blog de verificación de correo y entregabilidad',
    h1: 'Guías de verificación de correo y entregabilidad',
    intro: 'Explicaciones claras sobre correos catch-all, gateways de seguridad, tasas de rebote y lo que de verdad significan los resultados de una validación.',
    listName: 'Guías de Giggal.ai sobre verificación de correo y entregabilidad',
    readMore: 'Leer el artículo',
    prevPage: 'Anterior',
    nextPage: 'Siguiente',
    paginationAria: 'Paginación del blog',
    breadcrumbAria: 'Ruta de navegación',
    home: 'Inicio',
    tocTitle: 'En esta página',
    tocAria: 'Índice',
    defaultCta: 'Valida tu lista con Giggal.ai',
  },
  'pt-br': {
    hubTitle: 'Blog de Verificação de E-mail e Entregabilidade | Giggal.ai',
    hubDesc: 'Guias em português sobre e-mails catch-all, gateways de segurança, taxas de bounce e verificação de e-mail. Explicações claras para quem limpa listas reais.',
    hubOgTitle: 'Blog de verificação de e-mail e entregabilidade',
    h1: 'Guias de verificação de e-mail e entregabilidade',
    intro: 'Explicações claras sobre e-mails catch-all, gateways de segurança, taxas de bounce e o que os resultados de uma verificação realmente significam.',
    listName: 'Guias da Giggal.ai sobre verificação de e-mail e entregabilidade',
    readMore: 'Ler o artigo',
    prevPage: 'Anterior',
    nextPage: 'Próxima',
    paginationAria: 'Paginação do blog',
    breadcrumbAria: 'Navegação estrutural',
    home: 'Início',
    tocTitle: 'Nesta página',
    tocAria: 'Índice',
    defaultCta: 'Verifique sua lista com a Giggal.ai',
  },
  fr: {
    hubTitle: 'Blog Vérification d\u2019Email et Délivrabilité | Giggal.ai',
    hubDesc: 'Guides en français sur les adresses catch-all, les passerelles de sécurité, les taux de rebond et la vérification d\u2019email, pour ceux qui nettoient de vraies listes.',
    hubOgTitle: 'Blog vérification d\u2019email et délivrabilité',
    h1: 'Guides de vérification d\u2019email et de délivrabilité',
    intro: 'Des explications claires sur les adresses catch-all, les passerelles de sécurité, les taux de rebond et ce que signifient vraiment les résultats d\u2019une vérification.',
    listName: 'Guides Giggal.ai sur la vérification d\u2019email et la délivrabilité',
    readMore: 'Lire l\u2019article',
    prevPage: 'Précédent',
    nextPage: 'Suivant',
    paginationAria: 'Pagination du blog',
    breadcrumbAria: 'Fil d\u2019Ariane',
    home: 'Accueil',
    tocTitle: 'Sur cette page',
    tocAria: 'Sommaire',
    defaultCta: 'Vérifiez votre liste avec Giggal.ai',
  },
}
