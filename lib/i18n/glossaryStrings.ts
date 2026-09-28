import type { Locale } from '@/lib/i18n/clusters'
import type { GlossaryCategory } from '@/lib/i18n/glossary'

// Glossary chrome per language: hub copy, breadcrumb, category names, labels.
export interface GlossaryStrings {
  hubTitle: string
  hubDesc: string
  h1: string
  intro: string
  crumb: string
  home: string
  breadcrumbAria: string
  categories: Record<GlossaryCategory, string>
  related: string
  updated: string
  checkCta: string
  defaultCta: string
  listName: string
}

export const GLOSSARY_STRINGS: Record<Locale, GlossaryStrings> = {
  en: {
    hubTitle: 'Email Verification Glossary | Giggal.ai',
    hubDesc: 'Plain definitions of the terms behind email verification and deliverability: bounces, catch-all, SPF, DKIM, DMARC, spam traps, blacklists and more.',
    h1: 'Email verification glossary',
    intro: 'Every term you will meet in a bounce report, a verification result or a deliverability guide, explained in plain English. Each entry says what the term means, why it matters for your list, and how a verifier handles it.',
    crumb: 'Glossary',
    home: 'Home',
    breadcrumbAria: 'Breadcrumb',
    categories: {
      results: 'Verification results',
      bounces: 'Bounces',
      authentication: 'Authentication and DNS',
      deliverability: 'Deliverability',
      lists: 'List management',
      blacklists: 'Blacklists and monitoring',
      infrastructure: 'Email infrastructure',
    },
    related: 'Related terms',
    updated: 'Updated',
    checkCta: 'Check an email address',
    defaultCta: 'Verify your list with Giggal.ai',
    listName: 'Giggal.ai email verification glossary',
  },
  it: {
    hubTitle: 'Glossario della verifica email | Giggal.ai',
    hubDesc: 'Definizioni semplici dei termini della verifica email e della deliverability: bounce, catch-all, SPF, DKIM, DMARC, spam trap, blacklist e altro.',
    h1: 'Glossario della verifica email',
    intro: 'Ogni termine che incontri in un report di bounce, in un risultato di verifica o in una guida sulla deliverability, spiegato in modo semplice. Ogni voce dice cosa significa il termine, perché conta per la tua lista e come lo gestisce un verificatore.',
    crumb: 'Glossario',
    home: 'Pagina iniziale',
    breadcrumbAria: 'Percorso',
    categories: {
      results: 'Risultati della verifica',
      bounces: 'Bounce',
      authentication: 'Autenticazione e DNS',
      deliverability: 'Deliverability',
      lists: 'Gestione delle liste',
      blacklists: 'Blacklist e monitoraggio',
      infrastructure: 'Infrastruttura email',
    },
    related: 'Termini correlati',
    updated: 'Aggiornato',
    checkCta: 'Verifica un indirizzo email',
    defaultCta: 'Verifica la tua lista con Giggal.ai',
    listName: 'Glossario Giggal.ai della verifica email',
  },
  de: {
    hubTitle: 'Glossar zur E-Mail-Verifizierung | Giggal.ai',
    hubDesc: 'Einfache Definitionen der Begriffe rund um E-Mail-Verifizierung und Zustellbarkeit: Bounces, Catch-all, SPF, DKIM, DMARC, Spam Traps, Blacklists und mehr.',
    h1: 'Glossar zur E-Mail-Verifizierung',
    intro: 'Jeder Begriff, dem Sie in einem Bounce-Bericht, einem Prüfergebnis oder einem Leitfaden zur Zustellbarkeit begegnen, einfach erklärt. Jeder Eintrag sagt, was der Begriff bedeutet, warum er für Ihre Liste wichtig ist und wie ein Verifizierer damit umgeht.',
    crumb: 'Glossar',
    home: 'Startseite',
    breadcrumbAria: 'Navigationspfad',
    categories: {
      results: 'Prüfergebnisse',
      bounces: 'Bounces',
      authentication: 'Authentifizierung und DNS',
      deliverability: 'Zustellbarkeit',
      lists: 'Listenverwaltung',
      blacklists: 'Blacklists und Monitoring',
      infrastructure: 'E-Mail-Infrastruktur',
    },
    related: 'Verwandte Begriffe',
    updated: 'Aktualisiert',
    checkCta: 'E-Mail-Adresse prüfen',
    defaultCta: 'Prüfen Sie Ihre Liste mit Giggal.ai',
    listName: 'Giggal.ai Glossar zur E-Mail-Verifizierung',
  },
  es: {
    hubTitle: 'Glosario de verificación de correo | Giggal.ai',
    hubDesc: 'Definiciones sencillas de los términos de la verificación de correo y la entregabilidad: rebotes, catch-all, SPF, DKIM, DMARC, spam traps, listas negras y más.',
    h1: 'Glosario de verificación de correo',
    intro: 'Cada término que te encontrarás en un informe de rebotes, en un resultado de verificación o en una guía de entregabilidad, explicado en lenguaje sencillo. Cada entrada dice qué significa el término, por qué importa para tu lista y cómo lo trata un verificador.',
    crumb: 'Glosario',
    home: 'Inicio',
    breadcrumbAria: 'Ruta de navegación',
    categories: {
      results: 'Resultados de verificación',
      bounces: 'Rebotes',
      authentication: 'Autenticación y DNS',
      deliverability: 'Entregabilidad',
      lists: 'Gestión de listas',
      blacklists: 'Listas negras y monitorización',
      infrastructure: 'Infraestructura de correo',
    },
    related: 'Términos relacionados',
    updated: 'Actualizado',
    checkCta: 'Comprobar una dirección de correo',
    defaultCta: 'Verifica tu lista con Giggal.ai',
    listName: 'Glosario de verificación de correo de Giggal.ai',
  },
  'pt-br': {
    hubTitle: 'Glossário de verificação de e-mail | Giggal.ai',
    hubDesc: 'Definições simples dos termos da verificação de e-mail e da entregabilidade: bounces, catch-all, SPF, DKIM, DMARC, spam traps, blacklists e mais.',
    h1: 'Glossário de verificação de e-mail',
    intro: 'Todo termo que você vai encontrar em um relatório de bounce, em um resultado de verificação ou em um guia de entregabilidade, explicado de forma simples. Cada entrada diz o que o termo significa, por que ele importa para sua lista e como um verificador lida com ele.',
    crumb: 'Glossário',
    home: 'Início',
    breadcrumbAria: 'Navegação',
    categories: {
      results: 'Resultados da verificação',
      bounces: 'Bounces',
      authentication: 'Autenticação e DNS',
      deliverability: 'Entregabilidade',
      lists: 'Gestão de listas',
      blacklists: 'Blacklists e monitoramento',
      infrastructure: 'Infraestrutura de e-mail',
    },
    related: 'Termos relacionados',
    updated: 'Atualizado',
    checkCta: 'Verificar um endereço de e-mail',
    defaultCta: 'Verifique sua lista com o Giggal.ai',
    listName: 'Glossário de verificação de e-mail do Giggal.ai',
  },
  fr: {
    hubTitle: 'Glossaire de la vérification email | Giggal.ai',
    hubDesc: 'Des définitions simples des termes de la vérification email et de la délivrabilité : rebonds, catch-all, SPF, DKIM, DMARC, spam traps, blacklists et plus.',
    h1: 'Glossaire de la vérification email',
    intro: "Chaque terme que vous croiserez dans un rapport de rebonds, un résultat de vérification ou un guide de délivrabilité, expliqué simplement. Chaque entrée dit ce que le terme signifie, pourquoi il compte pour votre liste et comment un vérificateur le traite.",
    crumb: 'Glossaire',
    home: 'Accueil',
    breadcrumbAria: "Fil d'Ariane",
    categories: {
      results: 'Résultats de vérification',
      bounces: 'Rebonds',
      authentication: 'Authentification et DNS',
      deliverability: 'Délivrabilité',
      lists: 'Gestion des listes',
      blacklists: 'Blacklists et surveillance',
      infrastructure: 'Infrastructure email',
    },
    related: 'Termes liés',
    updated: 'Mis à jour',
    checkCta: 'Vérifier une adresse email',
    defaultCta: 'Vérifiez votre liste avec Giggal.ai',
    listName: 'Glossaire Giggal.ai de la vérification email',
  },
}
