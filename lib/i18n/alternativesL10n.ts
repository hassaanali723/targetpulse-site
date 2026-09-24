// Localized alternative and comparison pages (plans/15): the interface text,
// the translated competitor facts, and the price helpers. Every number still
// comes from lib/competitorPricing.ts; only the words around it change here.
// Prices stay in USD as the vendors publish them; only the number format
// follows the locale (lib/i18n/<locale>.ts).
import {
  getCompetitor,
  GIGGAL,
  LEADMAGIC_BENCHMARK,
  type Competitor,
  type PricingTier,
} from '@/lib/competitorPricing'
import { getStrings, type L10nLocale } from '@/lib/i18n/strings'

const NB = ' '

// ── Numbers ──────────────────────────────────────────────────────────────────
/** A USD figure in the locale's format: "129 $", "9,90 $", "US$ 129". */
export function usdL(locale: L10nLocale, n: number): string {
  return getStrings(locale).usd(n, n % 1 === 0 ? 0 : 2)
}
/** A credit count in the locale's format: "10.000", "10 000". */
export function numL(locale: L10nLocale, n: number): string {
  return getStrings(locale).number(n)
}
/** "97.8%" -> "97,8%" (it, es, pt-br) or "97,8 %" (de, fr). */
export function pctL(locale: L10nLocale, s: string): string {
  if (!/^[\d.]+%$/.test(s)) return s
  const v = s.slice(0, -1).replace('.', ',')
  return locale === 'de' || locale === 'fr' ? `${v}${NB}%` : `${v}%`
}

// ── Interface text ───────────────────────────────────────────────────────────
export interface AltUi {
  enSuffix: string
  bottomLine: string
  volume: string
  perMonth: string
  est: string
  estimateNote: (name: string) => string
  checked: (name: string, date: string) => [string, string, string] // before link, link text, after
  yes: string
  no: string
  rows: {
    price10k: string
    catchAll: string
    catchAllPricing: string
    seg: string
    expiry: string
    free: string
    chargesUnknown: string
    accuracy: string
  }
  gateways: (n: number) => string
  verdictHead: [string, string]
  verdicts: [string, string][]
  bench: { resolved: string; accuracy: string; source: (name: string) => string; caveat: string }
  heroCta: string
  compareAll: string
  tryHeading: string
  faqHeading: string
  keepReading: string
  related: { href: string; anchor: string }[]
  h2hHeading: (name: string) => string
  h2hProse: (name: string) => [string, string, string] // before link, link text, after
  breadcrumbAlternatives: string
  featureHeading: (name: string) => string
  toolLead: string // sentence start before the tool-page link (related[0])
}

const LM_DATE: Record<L10nLocale, string> = {
  it: '25 febbraio 2026',
  de: '25. Februar 2026',
  es: '25 de febrero de 2026',
  'pt-br': '25 de fevereiro de 2026',
  fr: '25 février 2026',
}

export const ALT_UI: Record<L10nLocale, AltUi> = {
  it: {
    enSuffix: ' (in inglese)',
    bottomLine: 'In breve',
    volume: 'Volume',
    perMonth: '/mese',
    est: 'stima',
    estimateNote: (n) => `Stima da fonti di terze parti, non confermata sulla pagina prezzi di ${n}.`,
    checked: (n, d) => [`Prezzi di ${n} verificati il ${d}. I prezzi possono essere cambiati, vedi la `, `pagina prezzi di ${n}`, '.'],
    yes: 'Sì',
    no: 'No',
    rows: {
      price10k: 'Prezzo per 10.000 crediti',
      catchAll: 'Verifica catch-all',
      catchAllPricing: 'Costo del catch-all',
      seg: 'Verifica dietro SEG',
      expiry: 'Scadenza dei crediti',
      free: 'Piano gratuito',
      chargesUnknown: 'Addebita i risultati sconosciuti',
      accuracy: 'Dato di precisione',
    },
    gateways: (n) => `${n} gateway`,
    verdictHead: ['Risultato', 'Significato'],
    verdicts: [
      ['Consegnabile', 'La casella esiste e accetterà la posta'],
      ['Non consegnabile', 'La casella non esiste'],
      ['Rischiosa', "L'indirizzo esiste ma comporta un rischio di consegna"],
      ['Sconosciuta', "Non siamo riusciti a verificare l'indirizzo, e il credito viene rimborsato"],
    ],
    bench: {
      resolved: 'degli indirizzi catch-all risolti',
      accuracy: 'precisione complessiva misurata',
      source: (n) => `I dati di ${n} vengono da un test indipendente condotto da ${LEADMAGIC_BENCHMARK.publisher}, pubblicato il ${LM_DATE.it}, su 10.000 email B2B reali, il 28% delle quali su domini catch-all.`,
      caveat: 'Questo test è stato pubblicato da LeadMagic, che vende un verificatore email concorrente e si è classificato primo nei propri risultati. Leggilo come un test di un fornitore, non come uno studio neutrale. Giggal.ai non era tra gli strumenti misurati.',
    },
    heroCta: 'Inizia gratis con 1.000 crediti',
    compareAll: 'Confronta tutti i verificatori (in inglese)',
    tryHeading: 'Provalo sulla tua lista',
    faqHeading: 'Domande frequenti',
    keepReading: 'Continua a leggere',
    related: [
      { href: '/email-checker', anchor: 'verifica email gratis' },
      { href: '/alternatives', anchor: 'confronta tutti i verificatori' },
      { href: '/catch-all-verification', anchor: 'verifica catch-all ed email rischiose' },
      { href: '/seg-email-verification', anchor: 'email protette da gateway SEG' },
      { href: '/pricing', anchor: 'prezzi e crediti' },
    ],
    h2hHeading: (n) => `${n}: i confronti diretti`,
    h2hProse: (n) => [`Guarda come si colloca ${n} rispetto ai verificatori che seguiamo di più, con Giggal.ai in ogni pagina come terza opzione. La griglia completa è nella `, 'pagina dei confronti', ' (in inglese).'],
    breadcrumbAlternatives: 'Alternative',
    featureHeading: (n) => `${n} vs Giggal.ai`,
    toolLead: 'Per controllare un singolo indirizzo, usa la ',
  },
  de: {
    enSuffix: ' (Englisch)',
    bottomLine: 'Kurz gesagt',
    volume: 'Volumen',
    perMonth: '/Monat',
    est: 'geschätzt',
    estimateNote: (n) => `Schätzung aus Drittquellen, nicht auf der Preisseite von ${n} bestätigt.`,
    checked: (n, d) => [`Preise von ${n} geprüft am ${d}. Preise können sich geändert haben, siehe die `, `Preisseite von ${n}`, '.'],
    yes: 'Ja',
    no: 'Nein',
    rows: {
      price10k: 'Preis für 10.000 Credits',
      catchAll: 'Catch-all-Verifizierung',
      catchAllPricing: 'Kosten für Catch-all',
      seg: 'Prüfung hinter SEGs',
      expiry: 'Verfall der Credits',
      free: 'Gratis-Kontingent',
      chargesUnknown: 'Berechnet unbekannte Ergebnisse',
      accuracy: 'Genauigkeitsangabe',
    },
    gateways: (n) => `${n} Gateways`,
    verdictHead: ['Ergebnis', 'Bedeutung'],
    verdicts: [
      ['Zustellbar', 'Das Postfach existiert und nimmt Post an'],
      ['Unzustellbar', 'Das Postfach existiert nicht'],
      ['Riskant', 'Die Adresse existiert, birgt aber ein Zustellrisiko'],
      ['Unbekannt', 'Wir konnten die Adresse nicht prüfen, und der Credit wird erstattet'],
    ],
    bench: {
      resolved: 'der Catch-all-Adressen aufgelöst',
      accuracy: 'gemessene Gesamtgenauigkeit',
      source: (n) => `Die Zahlen für ${n} stammen aus einem unabhängigen Test von ${LEADMAGIC_BENCHMARK.publisher}, veröffentlicht am ${LM_DATE.de}, mit 10.000 echten B2B-E-Mails, davon 28${NB}% auf Catch-all-Domains.`,
      caveat: 'Dieser Test wurde von LeadMagic veröffentlicht, das selbst einen konkurrierenden E-Mail-Verifizierer verkauft und sich in den eigenen Ergebnissen auf Platz eins gesetzt hat. Lesen Sie ihn als Anbietertest, nicht als neutrale Studie. Giggal.ai gehörte nicht zu den getesteten Tools.',
    },
    heroCta: 'Kostenlos starten mit 1.000 Credits',
    compareAll: 'Alle Verifizierer vergleichen (Englisch)',
    tryHeading: 'Testen Sie es an Ihrer eigenen Liste',
    faqHeading: 'Häufige Fragen',
    keepReading: 'Weiterlesen',
    related: [
      { href: '/email-checker', anchor: 'E-Mail-Adresse prüfen' },
      { href: '/alternatives', anchor: 'alle Verifizierer vergleichen' },
      { href: '/catch-all-verification', anchor: 'Catch-all- und riskante E-Mails prüfen' },
      { href: '/seg-email-verification', anchor: 'E-Mails hinter SEG-Gateways' },
      { href: '/pricing', anchor: 'Preise und Credits' },
    ],
    h2hHeading: (n) => `${n} im direkten Vergleich`,
    h2hProse: (n) => [`So schneidet ${n} gegen die Verifizierer ab, die wir am genauesten verfolgen, mit Giggal.ai auf jeder Seite als dritter Option. Das vollständige Raster steht auf der `, 'Vergleichsübersicht', ' (Englisch).'],
    breadcrumbAlternatives: 'Alternativen',
    featureHeading: (n) => `${n} vs Giggal.ai`,
    toolLead: 'Eine einzelne Adresse testen Sie hier: ',
  },
  es: {
    enSuffix: ' (en inglés)',
    bottomLine: 'En resumen',
    volume: 'Volumen',
    perMonth: '/mes',
    est: 'est.',
    estimateNote: (n) => `Estimación de fuentes externas, no confirmada en la página de precios de ${n}.`,
    checked: (n, d) => [`Precios de ${n} comprobados el ${d}. Los precios pueden haber cambiado, consulta la `, `página de precios de ${n}`, '.'],
    yes: 'Sí',
    no: 'No',
    rows: {
      price10k: 'Precio por 10.000 créditos',
      catchAll: 'Verificación catch-all',
      catchAllPricing: 'Coste del catch-all',
      seg: 'Verificación tras SEG',
      expiry: 'Caducidad de los créditos',
      free: 'Plan gratuito',
      chargesUnknown: 'Cobra los resultados desconocidos',
      accuracy: 'Dato de precisión',
    },
    gateways: (n) => `${n} gateways`,
    verdictHead: ['Resultado', 'Significado'],
    verdicts: [
      ['Entregable', 'El buzón existe y aceptará el correo'],
      ['No entregable', 'El buzón no existe'],
      ['Arriesgado', 'La dirección existe pero conlleva un riesgo de entrega'],
      ['Desconocido', 'No pudimos verificar la dirección, y el crédito se reembolsa'],
    ],
    bench: {
      resolved: 'de las direcciones catch-all resueltas',
      accuracy: 'precisión global medida',
      source: (n) => `Los datos de ${n} vienen de una prueba independiente realizada por ${LEADMAGIC_BENCHMARK.publisher}, publicada el ${LM_DATE.es}, con 10.000 correos B2B reales, el 28% de ellos en dominios catch-all.`,
      caveat: 'Esta prueba la publicó LeadMagic, que vende un verificador de correo competidor y se situó en primer lugar en sus propios resultados. Léela como una prueba de un proveedor, no como un estudio neutral. Giggal.ai no estaba entre las herramientas medidas.',
    },
    heroCta: 'Empieza gratis con 1.000 créditos',
    compareAll: 'Compara todos los verificadores (en inglés)',
    tryHeading: 'Pruébalo con tu propia lista',
    faqHeading: 'Preguntas frecuentes',
    keepReading: 'Sigue leyendo',
    related: [
      { href: '/email-checker', anchor: 'validar el correo gratis' },
      { href: '/alternatives', anchor: 'compara todos los verificadores' },
      { href: '/catch-all-verification', anchor: 'verificar correos catch-all y arriesgados' },
      { href: '/seg-email-verification', anchor: 'correos protegidos por gateways SEG' },
      { href: '/pricing', anchor: 'precios y créditos' },
    ],
    h2hHeading: (n) => `${n}: comparativas directas`,
    h2hProse: (n) => [`Mira cómo se sitúa ${n} frente a los verificadores que más seguimos, con Giggal.ai en cada página como tercera opción. La tabla completa está en la `, 'página de comparativas', ' (en inglés).'],
    breadcrumbAlternatives: 'Alternativas',
    featureHeading: (n) => `${n} vs Giggal.ai`,
    toolLead: 'Para una sola dirección puedes ',
  },
  'pt-br': {
    enSuffix: ' (em inglês)',
    bottomLine: 'Em resumo',
    volume: 'Volume',
    perMonth: '/mês',
    est: 'est.',
    estimateNote: (n) => `Estimativa de fontes externas, não confirmada na página de preços do ${n}.`,
    checked: (n, d) => [`Preços do ${n} conferidos em ${d}. Os preços podem ter mudado, veja a `, `página de preços do ${n}`, '.'],
    yes: 'Sim',
    no: 'Não',
    rows: {
      price10k: 'Preço por 10.000 créditos',
      catchAll: 'Verificação catch-all',
      catchAllPricing: 'Custo do catch-all',
      seg: 'Verificação atrás de SEG',
      expiry: 'Validade dos créditos',
      free: 'Plano grátis',
      chargesUnknown: 'Cobra resultados desconhecidos',
      accuracy: 'Dado de precisão',
    },
    gateways: (n) => `${n} gateways`,
    verdictHead: ['Resultado', 'Significado'],
    verdicts: [
      ['Entregável', 'A caixa existe e vai aceitar o e-mail'],
      ['Não entregável', 'A caixa não existe'],
      ['Arriscado', 'O endereço existe, mas tem risco de entrega'],
      ['Desconhecido', 'Não conseguimos verificar o endereço, e o crédito é devolvido'],
    ],
    bench: {
      resolved: 'dos endereços catch-all resolvidos',
      accuracy: 'precisão geral medida',
      source: (n) => `Os dados do ${n} vêm de um teste independente feito pela ${LEADMAGIC_BENCHMARK.publisher}, publicado em ${LM_DATE['pt-br']}, com 10.000 e-mails B2B reais, 28% deles em domínios catch-all.`,
      caveat: 'Este teste foi publicado pela LeadMagic, que vende um verificador de e-mail concorrente e se colocou em primeiro lugar nos próprios resultados. Leia como um teste de fornecedor, não como um estudo neutro. A Giggal.ai não estava entre as ferramentas medidas.',
    },
    heroCta: 'Comece grátis com 1.000 créditos',
    compareAll: 'Compare todos os verificadores (em inglês)',
    tryHeading: 'Teste na sua própria lista',
    faqHeading: 'Perguntas frequentes',
    keepReading: 'Continue lendo',
    related: [
      { href: '/email-checker', anchor: 'verificação de e-mail grátis' },
      { href: '/alternatives', anchor: 'compare todos os verificadores' },
      { href: '/catch-all-verification', anchor: 'verificar e-mails catch-all e arriscados' },
      { href: '/seg-email-verification', anchor: 'e-mails protegidos por gateways SEG' },
      { href: '/pricing', anchor: 'preços e créditos' },
    ],
    h2hHeading: (n) => `${n}: comparativos diretos`,
    h2hProse: (n) => [`Veja como o ${n} se sai contra os verificadores que mais acompanhamos, com a Giggal.ai em cada página como terceira opção. A grade completa está na `, 'página de comparativos', ' (em inglês).'],
    breadcrumbAlternatives: 'Alternativas',
    featureHeading: (n) => `${n} vs Giggal.ai`,
    toolLead: 'Para um único endereço, use a ',
  },
  fr: {
    enSuffix: ' (en anglais)',
    bottomLine: 'En bref',
    volume: 'Volume',
    perMonth: '/mois',
    est: 'est.',
    estimateNote: (n) => `Estimation issue de sources tierces, non confirmée sur la page de tarifs de ${n}.`,
    checked: (n, d) => [`Tarifs de ${n} vérifiés le ${d}. Les prix ont pu changer, voir la `, `page de tarifs de ${n}`, '.'],
    yes: 'Oui',
    no: 'Non',
    rows: {
      price10k: 'Prix pour 10 000 crédits',
      catchAll: 'Vérification catch-all',
      catchAllPricing: 'Coût du catch-all',
      seg: 'Vérification derrière un SEG',
      expiry: 'Expiration des crédits',
      free: 'Offre gratuite',
      chargesUnknown: 'Facture les résultats inconnus',
      accuracy: 'Chiffre de précision',
    },
    gateways: (n) => `${n} passerelles`,
    verdictHead: ['Résultat', 'Signification'],
    verdicts: [
      ['Distribuable', 'La boîte existe et acceptera le courrier'],
      ['Non distribuable', "La boîte n'existe pas"],
      ['Risqué', "L'adresse existe mais présente un risque de délivrabilité"],
      ['Inconnu', "Nous n'avons pas pu vérifier l'adresse, et le crédit est remboursé"],
    ],
    bench: {
      resolved: 'des adresses catch-all résolues',
      accuracy: 'précision globale mesurée',
      source: (n) => `Les chiffres de ${n} viennent d'un test indépendant réalisé par ${LEADMAGIC_BENCHMARK.publisher}, publié le ${LM_DATE.fr}, sur 10 000 vrais emails B2B, dont 28${NB}% sur des domaines catch-all.`,
      caveat: "Ce test a été publié par LeadMagic, qui vend un vérificateur d'email concurrent et s'est classé premier dans ses propres résultats. Lisez-le comme un test d'éditeur, pas comme une étude neutre. Giggal.ai ne faisait pas partie des outils mesurés.",
    },
    heroCta: 'Commencer gratuitement avec 1 000 crédits',
    compareAll: 'Comparer tous les vérificateurs (en anglais)',
    tryHeading: 'Essayez-le sur votre propre liste',
    faqHeading: 'Questions fréquentes',
    keepReading: 'À lire aussi',
    related: [
      { href: '/email-checker', anchor: 'vérifier une adresse mail' },
      { href: '/alternatives', anchor: 'comparer tous les vérificateurs' },
      { href: '/catch-all-verification', anchor: 'vérifier les emails catch-all et risqués' },
      { href: '/seg-email-verification', anchor: 'emails protégés par une passerelle SEG' },
      { href: '/pricing', anchor: 'tarifs et crédits' },
    ],
    h2hHeading: (n) => `${n} : les comparatifs directs`,
    h2hProse: (n) => [`Voyez comment ${n} se situe face aux vérificateurs que nous suivons le plus, avec Giggal.ai sur chaque page comme troisième option. La grille complète est sur la `, 'page des comparatifs', ' (en anglais).'],
    breadcrumbAlternatives: 'Alternatives',
    featureHeading: (n) => `${n} vs Giggal.ai`,
    toolLead: 'Pour une seule adresse, vous pouvez ',
  },
}

// ── Translated competitor facts ──────────────────────────────────────────────
type Facts = Partial<Pick<Competitor, 'freeTier' | 'creditsExpire' | 'catchAllCreditCost' | 'claimedAccuracy' | 'pricingBasisNote'>> & {
  notes?: Record<string, string> // English tier note -> localized
}

const GIGGAL_FACTS: Record<L10nLocale, { freeTier: string; creditsExpire: string; catchAllCreditCost: string; claimedAccuracy: string; category: string }> = {
  it: { freeTier: '1.000 crediti, senza carta, validi sul caricamento in blocco', creditsExpire: 'I crediti non scadono mai, senza condizioni.', catchAllCreditCost: '1 credito, come qualsiasi altra verifica', claimedAccuracy: 'Dichiara 98,5%', category: 'Verificatore catch-all e SEG' },
  de: { freeTier: '1.000 Credits, ohne Karte, auch für Massenprüfungen', creditsExpire: 'Credits verfallen nie, ohne Bedingungen.', catchAllCreditCost: '1 Credit, wie jede andere Prüfung', claimedAccuracy: `Gibt 98,5${NB}% an`, category: 'Catch-all- und SEG-Verifizierer' },
  es: { freeTier: '1.000 créditos, sin tarjeta, válidos en carga masiva', creditsExpire: 'Los créditos no caducan nunca, sin condiciones.', catchAllCreditCost: '1 crédito, igual que cualquier otra verificación', claimedAccuracy: 'Declara 98,5%', category: 'Verificador catch-all y SEG' },
  'pt-br': { freeTier: '1.000 créditos, sem cartão, válidos em envio em massa', creditsExpire: 'Os créditos nunca expiram, sem condições.', catchAllCreditCost: '1 crédito, como qualquer outra verificação', claimedAccuracy: 'Declara 98,5%', category: 'Verificador catch-all e SEG' },
  fr: { freeTier: '1 000 crédits, sans carte, utilisables en masse', creditsExpire: "Les crédits n'expirent jamais, sans condition.", catchAllCreditCost: '1 crédit, comme toute autre vérification', claimedAccuracy: `Annonce 98,5${NB}%`, category: 'Vérificateur catch-all et SEG' },
}
export function giggalFacts(locale: L10nLocale) {
  return { ...GIGGAL, ...GIGGAL_FACTS[locale] }
}

const FACTS: Record<string, Partial<Record<L10nLocale, Facts>>> = {
  zerobounce: {
    it: { freeTier: '100 crediti al mese', creditsExpire: 'I crediti non scadono', catchAllCreditCost: 'Punteggio AI da 1 a 10, non un esito valido o non valido', claimedAccuracy: 'Dichiara 99,6%' },
    de: { freeTier: '100 Credits pro Monat', creditsExpire: 'Credits verfallen nicht', catchAllCreditCost: 'KI-Score von 1 bis 10, kein gültig oder ungültig', claimedAccuracy: `Gibt 99,6${NB}% an` },
    es: { freeTier: '100 créditos al mes', creditsExpire: 'Los créditos no caducan', catchAllCreditCost: 'Puntuación IA de 1 a 10, sin resultado válido o no válido', claimedAccuracy: 'Declara 99,6%' },
    'pt-br': { freeTier: '100 créditos por mês', creditsExpire: 'Os créditos não expiram', catchAllCreditCost: 'Pontuação de IA de 1 a 10, sem resultado válido ou inválido', claimedAccuracy: 'Declara 99,6%' },
    fr: { freeTier: '100 crédits par mois', creditsExpire: "Les crédits n'expirent pas", catchAllCreditCost: 'Score IA de 1 à 10, pas de résultat valide ou invalide', claimedAccuracy: `Annonce 99,6${NB}%` },
  },
  neverbounce: {
    it: { freeTier: '10 crediti alla registrazione', creditsExpire: "I crediti scadono 12 mesi dopo l'acquisto", catchAllCreditCost: 'Segnati Accept-All, ne risolve pochi' },
    de: { freeTier: '10 Credits bei der Anmeldung', creditsExpire: 'Credits verfallen 12 Monate nach dem Kauf', catchAllCreditCost: 'Als Accept-All markiert, löst wenige auf' },
    es: { freeTier: '10 créditos al registrarse', creditsExpire: 'Los créditos caducan 12 meses después de la compra', catchAllCreditCost: 'Marcados Accept-All, resuelve pocos' },
    'pt-br': { freeTier: '10 créditos no cadastro', creditsExpire: 'Os créditos expiram 12 meses após a compra', catchAllCreditCost: 'Marcados como Accept-All, resolve poucos' },
    fr: { freeTier: "10 crédits à l'inscription", creditsExpire: "Les crédits expirent 12 mois après l'achat", catchAllCreditCost: 'Marqués Accept-All, en résout peu' },
  },
  hunter: {
    de: {
      freeTier: '50 Gratis-Credits pro Monat', creditsExpire: 'Plan-Credits werden jeden Monat zurückgesetzt', catchAllCreditCost: 'Als Accept-all markiert, nicht aufgelöst',
      pricingBasisNote: 'Hunter wird als Monatsabo mit gemeinsamen Credits verkauft (eine Prüfung kostet 0,5 Credit). Der Wert für 10.000 ist der kleinste Monatsplan, der so viele Prüfungen abdeckt (Growth, monatlich abgerechnet; jährlich ist es günstiger). Höhere Volumen gibt es nur auf Enterprise-Anfrage. Die Werte von Giggal.ai sind einmalige Pay-as-you-go-Preise.',
      notes: { Enterprise: 'Enterprise' },
    },
    es: {
      freeTier: '50 créditos gratis al mes', creditsExpire: 'Los créditos del plan se reinician cada mes', catchAllCreditCost: 'Marcado como accept-all, sin resolver',
      pricingBasisNote: 'Hunter se vende como suscripción mensual con créditos compartidos (cada verificación cuesta 0,5 crédito). La cifra de 10.000 es el plan mensual más pequeño que cubre esas verificaciones (Growth, facturado mensualmente; el pago anual es menor). Los volúmenes mayores se cotizan como Enterprise. Las cifras de Giggal.ai son precios únicos de pago por uso.',
      notes: { Enterprise: 'Enterprise' },
    },
    'pt-br': {
      freeTier: '50 créditos grátis por mês', creditsExpire: 'Os créditos do plano zeram todo mês', catchAllCreditCost: 'Marcado como accept-all, não resolvido',
      pricingBasisNote: 'O Hunter é vendido como assinatura mensal com créditos compartilhados (cada verificação custa 0,5 crédito). O valor de 10.000 é o menor plano mensal que cobre essas verificações (Growth, cobrança mensal; no anual sai mais barato). Volumes maiores são cotados como Enterprise. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
      notes: { Enterprise: 'Enterprise' },
    },
    fr: {
      freeTier: '50 crédits gratuits par mois', creditsExpire: 'Les crédits du forfait sont remis à zéro chaque mois', catchAllCreditCost: 'Signalé accept-all, non résolu',
      pricingBasisNote: "Hunter est vendu en abonnement mensuel avec des crédits mutualisés (une vérification coûte 0,5 crédit). Le chiffre à 10 000 est le plus petit forfait mensuel qui couvre ces vérifications (Growth, facturé au mois ; l'annuel revient moins cher). Les volumes supérieurs sont sur devis Entreprise. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.",
      notes: { Enterprise: 'Entreprise' },
    },
  },
  snovio: {
    it: {
      freeTier: '50 crediti nella prova gratuita', creditsExpire: "I crediti del piano si accumulano finché l'abbonamento è attivo", catchAllCreditCost: 'Segnalato, non risolto',
      pricingBasisNote: "Snov.io è venduto come abbonamento mensile con crediti condivisi (1 credito per verifica). I valori sono il piano mensile più piccolo che copre quelle verifiche (fatturazione mensile; con quella annuale si paga circa il 25% in meno). Un milione al mese è un piano su misura. I valori di Giggal.ai sono prezzi una tantum a consumo.",
      notes: { Custom: 'Su misura' },
    },
    de: {
      freeTier: '50 Credits in der kostenlosen Testphase', creditsExpire: 'Plan-Credits werden übertragen, solange das Abo läuft', catchAllCreditCost: 'Markiert, nicht aufgelöst',
      pricingBasisNote: `Snov.io wird als Monatsabo mit gemeinsamen Credits verkauft (1 Credit pro Prüfung). Die Werte sind der kleinste Monatsplan, der so viele Prüfungen abdeckt (monatlich abgerechnet; jährlich rund 25${NB}% günstiger). Eine Million pro Monat ist ein individueller Plan. Die Werte von Giggal.ai sind einmalige Pay-as-you-go-Preise.`,
      notes: { Custom: 'Individuell' },
    },
    es: {
      freeTier: '50 créditos en la prueba gratuita', creditsExpire: 'Los créditos del plan se acumulan mientras la suscripción esté activa', catchAllCreditCost: 'Marcado, sin resolver',
      pricingBasisNote: 'Snov.io se vende como suscripción mensual con créditos compartidos (1 crédito por verificación). Las cifras son el plan mensual más pequeño que cubre esas verificaciones (facturación mensual; la anual es cerca de un 25% menor). Un millón al mes es un plan a medida. Las cifras de Giggal.ai son precios únicos de pago por uso.',
      notes: { Custom: 'A medida' },
    },
    'pt-br': {
      freeTier: '50 créditos no teste grátis', creditsExpire: 'Os créditos do plano acumulam enquanto a assinatura estiver ativa', catchAllCreditCost: 'Marcado, não resolvido',
      pricingBasisNote: 'O Snov.io é vendido como assinatura mensal com créditos compartilhados (1 crédito por verificação). Os valores são o menor plano mensal que cobre essas verificações (cobrança mensal; no anual sai cerca de 25% mais barato). Um milhão por mês é um plano sob medida. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
      notes: { Custom: 'Sob medida' },
    },
    fr: {
      freeTier: "50 crédits pendant l'essai gratuit", creditsExpire: "Les crédits du forfait sont reportés tant que l'abonnement est actif", catchAllCreditCost: 'Signalé, non résolu',
      pricingBasisNote: `Snov.io est vendu en abonnement mensuel avec des crédits mutualisés (1 crédit par vérification). Les chiffres sont le plus petit forfait mensuel qui couvre ces vérifications (facturé au mois ; environ 25${NB}% de moins en annuel). Un million par mois relève d'un forfait sur mesure. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.`,
      notes: { Custom: 'Sur mesure' },
    },
  },
  apollo: {
    fr: {
      freeTier: 'Offre gratuite avec des crédits mensuels limités', creditsExpire: 'Les crédits du forfait sont remis à zéro chaque mois, sans report', catchAllCreditCost: `Dit distinguer valide et invalide sur les catch-all (91${NB}%)`, claimedAccuracy: `Annonce 91${NB}%`,
      pricingBasisNote: "Apollo est facturé par utilisateur (à partir de 49 $ par utilisateur et par mois en annuel), et la vérification est incluse dans des crédits email illimités sous réserve d'usage raisonnable, sans vente au volume : il n'y a donc pas de prix par vérification à comparer. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.",
      notes: { 'Per seat': 'Par utilisateur' },
    },
  },
  instantly: {
    de: {
      freeTier: 'Nicht veröffentlicht', creditsExpire: 'Plan-Credits werden monatlich zurückgesetzt', catchAllCreditCost: '0,25 Credit pro Lead, wie jede andere Prüfung',
      pricingBasisNote: 'Instantly verkauft Credits für seine Versand- und Lead-Plattform, und eine Prüfung kostet 0,25 Credit pro Lead. Growth kostet 47 $ im Monat für 1.500 Credits, Supersonic 197 $ für 5.000, also braucht es für 10.000 Prüfungen im Monat (2.500 Credits) Supersonic. Der Hyper-Tarif für höhere Volumen wird als Spanne ab 197 $ statt als Festpreis angegeben, deshalb bleiben diese Zeilen leer. Die Werte von Giggal.ai sind einmalige Pay-as-you-go-Preise.',
      notes: { Quote: 'Auf Anfrage', Enterprise: 'Enterprise' },
    },
  },
}

/** The competitor with its words translated; numbers untouched. */
export function localizedCompetitor(slug: string, locale: L10nLocale): Competitor {
  const base = getCompetitor(slug)
  const f = FACTS[slug]?.[locale]
  if (!f) throw new Error(`No ${locale} facts for ${slug}`)
  const { notes, ...words } = f
  const tiers: PricingTier[] = base.tiers.map((t) => (t.note && notes?.[t.note] ? { ...t, note: notes[t.note] } : t))
  return {
    ...base,
    ...words,
    claimedAccuracy: words.claimedAccuracy ?? base.claimedAccuracy,
    benchmarkAccuracy: base.benchmarkAccuracy && pctL(locale, base.benchmarkAccuracy),
    benchmarkCatchAllResolved: base.benchmarkCatchAllResolved && pctL(locale, base.benchmarkCatchAllResolved),
    tiers,
  }
}
