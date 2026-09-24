// Localized /compare pages (plans/15): the three pairs with local brand demand,
// built the same way as lib/compare.ts but in each language. Hard facts come
// from competitorPricing.ts through localizedCompetitor(); the qualitative
// text for the three brands is translated here from lib/compareProfiles.ts.
import type { FaqItem } from '@/components/landing/FaqAccordion'
import type { CmpRow, CmpValue } from '@/lib/compare'
import { tierAt, giggalTierAt, type Competitor } from '@/lib/competitorPricing'
import { CLUSTERS, type ClusterId } from '@/lib/i18n/clusters'
import type { L10nLocale } from '@/lib/i18n/strings'
import { ALT_UI, giggalFacts, localizedCompetitor, usdL } from '@/lib/i18n/alternativesL10n'

/** The URL segment that holds comparison pages in each language. */
export const COMPARE_SEGMENT: Record<L10nLocale, string> = {
  it: 'confronto',
  de: 'vergleich',
  es: 'comparativa',
  'pt-br': 'comparativo',
  fr: 'comparatif',
}

const PAIRS: { versus: string; cluster: ClusterId }[] = [
  { versus: 'zerobounce-vs-neverbounce', cluster: 'cmpZerobounceNeverbounce' },
  { versus: 'zerobounce-vs-hunter', cluster: 'cmpZerobounceHunter' },
  { versus: 'neverbounce-vs-hunter', cluster: 'cmpNeverbounceHunter' },
]

/** The localized pairs of one language (only those whose cluster lists it). */
export function comparePairs(locale: L10nLocale): { versus: string; cluster: ClusterId; path: string }[] {
  return PAIRS.flatMap((p) => {
    const path = (CLUSTERS[p.cluster] as Record<string, string | undefined>)[locale]
    return path ? [{ ...p, path }] : []
  })
}

// Titles from plans/15-compare-alt-pages.json (checked by 15-check-plan.py).
const TITLES: Record<string, Partial<Record<L10nLocale, string>>> = {
  'zerobounce-vs-neverbounce': {
    it: 'ZeroBounce vs NeverBounce: prezzi e precisione | Giggal.ai',
    de: 'ZeroBounce vs NeverBounce: Preise im Vergleich | Giggal.ai',
    es: 'ZeroBounce vs NeverBounce: precios y precisión | Giggal.ai',
    'pt-br': 'ZeroBounce vs NeverBounce: preços e precisão | Giggal.ai',
    fr: 'ZeroBounce vs NeverBounce : prix et précision | Giggal.ai',
  },
  'zerobounce-vs-hunter': {
    de: 'ZeroBounce vs Hunter: Preise und Genauigkeit | Giggal.ai',
    es: 'ZeroBounce vs Hunter: precios y precisión | Giggal.ai',
    'pt-br': 'ZeroBounce vs Hunter: preços e precisão | Giggal.ai',
    fr: 'ZeroBounce vs Hunter : prix et précision | Giggal.ai',
  },
  'neverbounce-vs-hunter': {
    de: 'NeverBounce vs Hunter: Preise und Genauigkeit | Giggal.ai',
    es: 'NeverBounce vs Hunter: precios y precisión | Giggal.ai',
    'pt-br': 'NeverBounce vs Hunter: preços e precisão | Giggal.ai',
    fr: 'NeverBounce vs Hunter : prix et précision | Giggal.ai',
  },
}

interface Profile {
  category: string
  oneLiner: string // completes "<A> is ..."
  catchAllApproach: string // completes "<A> ..." (verb first)
  bestFor: string // completes the locale's "<A> suits ..."
}

const PROFILES: Record<string, Partial<Record<L10nLocale, Profile>>> = {
  zerobounce: {
    it: { category: 'Verificatore puro', oneLiner: "un verificatore di lunga data inserito in un'ampia suite di deliverability.", catchAllApproach: "assegna agli indirizzi catch-all un punteggio da 1 a 10 con l'AI invece di confermare la casella.", bestFor: 'ai team che vogliono la verifica insieme a inbox placement, monitoraggio DMARC e blacklist.' },
    de: { category: 'Reiner Verifizierer', oneLiner: 'ein etablierter Verifizierer in einer breiten Zustellbarkeits-Suite.', catchAllApproach: 'bewertet Catch-all-Adressen per KI von 1 bis 10, statt das Postfach zu bestätigen.', bestFor: 'Teams, die Verifizierung zusammen mit Inbox-Placement, DMARC- und Blacklist-Monitoring wollen.' },
    es: { category: 'Verificador puro', oneLiner: 'un verificador veterano integrado en una amplia suite de entregabilidad.', catchAllApproach: 'puntúa las direcciones catch-all de 1 a 10 con IA en lugar de confirmar el buzón.', bestFor: 'equipos que quieren la verificación junto con inbox placement y monitorización de DMARC y listas negras.' },
    'pt-br': { category: 'Verificador puro', oneLiner: 'um verificador tradicional dentro de uma ampla suíte de entregabilidade.', catchAllApproach: 'dá aos endereços catch-all uma nota de 1 a 10 com IA em vez de confirmar a caixa.', bestFor: 'equipes que querem verificação junto com inbox placement e monitoramento de DMARC e blacklists.' },
    fr: { category: 'Vérificateur pur', oneLiner: 'un vérificateur installé de longue date au sein d’une large suite de délivrabilité.', catchAllApproach: 'note les adresses catch-all de 1 à 10 par IA au lieu de confirmer la boîte.', bestFor: 'aux équipes qui veulent la vérification avec le test de placement en boîte, le suivi DMARC et des listes noires.' },
  },
  neverbounce: {
    it: { category: 'Verificatore puro', oneLiner: 'un verificatore noto per le integrazioni CRM profonde e la pulizia delle liste dentro i tuoi strumenti.', catchAllApproach: 'segna gli indirizzi accept-all e ne risolve solo una piccola parte.', bestFor: 'ai team che puliscono le liste direttamente dentro Salesforce, HubSpot o Marketo.' },
    de: { category: 'Reiner Verifizierer', oneLiner: 'ein Verifizierer, bekannt für tiefe CRM-Integrationen und Listenbereinigung direkt in Ihren Tools.', catchAllApproach: 'markiert Accept-all-Adressen und löst nur einen kleinen Teil davon auf.', bestFor: 'Teams, die Listen direkt in Salesforce, HubSpot oder Marketo bereinigen.' },
    es: { category: 'Verificador puro', oneLiner: 'un verificador conocido por sus integraciones profundas con CRM y por limpiar listas dentro de tus herramientas.', catchAllApproach: 'marca las direcciones accept-all y solo resuelve una pequeña parte.', bestFor: 'equipos que limpian listas directamente dentro de Salesforce, HubSpot o Marketo.' },
    'pt-br': { category: 'Verificador puro', oneLiner: 'um verificador conhecido pelas integrações profundas com CRM e por limpar listas dentro das suas ferramentas.', catchAllApproach: 'marca os endereços accept-all e resolve só uma pequena parte deles.', bestFor: 'equipes que limpam listas direto no Salesforce, HubSpot ou Marketo.' },
    fr: { category: 'Vérificateur pur', oneLiner: 'un vérificateur connu pour ses intégrations CRM poussées et le nettoyage des listes dans vos outils.', catchAllApproach: "marque les adresses accept-all et n'en résout qu'une petite partie.", bestFor: 'aux équipes qui nettoient leurs listes directement dans Salesforce, HubSpot ou Marketo.' },
  },
  hunter: {
    de: { category: 'Such- und Outreach-Plattform', oneLiner: 'eine Plattform, die zuerst E-Mails findet und die Prüfung in Monatspläne packt.', catchAllApproach: 'versucht bei einigen großen Anbietern, Accept-all zu bestätigen, und markiert es sonst nur.', bestFor: 'Teams, die Interessenten in einem Abo finden und prüfen wollen.' },
    es: { category: 'Plataforma de búsqueda y outreach', oneLiner: 'una plataforma centrada en encontrar correos, con la verificación incluida en planes mensuales.', catchAllApproach: 'intenta confirmar el accept-all en algunos proveedores grandes y, si no, solo lo marca.', bestFor: 'equipos que quieren encontrar y verificar prospectos con una sola suscripción.' },
    'pt-br': { category: 'Plataforma de busca e prospecção', oneLiner: 'uma plataforma focada em encontrar e-mails, com a verificação embutida em planos mensais.', catchAllApproach: 'tenta confirmar o accept-all em alguns provedores grandes e, fora isso, só marca.', bestFor: 'equipes que querem encontrar e verificar prospects em uma só assinatura.' },
    fr: { category: 'Plateforme de recherche et de prospection', oneLiner: "une plateforme d'abord conçue pour trouver des emails, avec la vérification incluse dans des forfaits mensuels.", catchAllApproach: "tente de confirmer l'accept-all chez quelques grands fournisseurs, et sinon le signale seulement.", bestFor: 'aux équipes qui veulent trouver et vérifier des prospects avec un seul abonnement.' },
  },
}

// ── Per-language sentence builders ───────────────────────────────────────────
interface Lang {
  rows: [string, string, string, string, string, string, string, string, string, string, string]
  priceSentence: (c: Competitor, cell: (n: number) => string) => string
  expiry: (c: Competitor) => string
  free: (c: Competitor) => string
  intro: (A: string, B: string, pa: Profile, pb: Profile) => string
  sections: (A: string, B: string, a: Competitor, b: Competitor, pa: Profile, pb: Profile, ps: [string, string]) => { heading: string; prose: string; label: string }[]
  edges: [string, string, string, string]
  faqs: (A: string, B: string, a: Competitor, b: Competitor, pa: Profile, pb: Profile, ps: [string, string]) => FaqItem[]
  caResolve: (c: Competitor) => string
  desc: (A: string, B: string) => string
  og: (A: string, B: string) => string
  ui: {
    tableHeading: (A: string, B: string) => string
    tableNote: string
    promoHeading: string
    promo: (A: string, B: string) => string
    promoCta: string
    related: string
    altSentence: [string, string, string, string, string] // "Want ... See the", "alternative (A)", "and", "alternative (B)", "pages, or"
    altLabel: (name: string) => string
    compareEvery: string
    allComparisons: string
  }
}

/** The second brand's gateway clause, worded against the first: [both, only b, only a, neither]. */
const segB = (a: Competitor, b: Competitor, w: [string, string, string, string]) =>
  b.advertisesSegSupport ? (a.advertisesSegSupport ? w[0] : w[1]) : a.advertisesSegSupport ? w[2] : w[3]
const lc = (s: string) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s)
const K = ' '

const LANG: Record<L10nLocale, Lang> = {
  it: {
    rows: ['Categoria', 'Risolve il catch-all', 'Costo del catch-all', 'Secure email gateway', 'Prezzo a 10.000', 'Prezzo a 100.000', 'Prezzo a 1.000.000', 'Scadenza dei crediti', 'Piano gratuito', 'Addebita i risultati sconosciuti', 'Dato di precisione'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} è venduto a piano mensile, da ${p(10000)} per 10.000 verifiche al mese`
      : `${c.name} costa ${p(10000)} a 10.000, ${p(100000)} a 100.000 e ${p(1000000)} a un milione`,
    expiry: (c) => `Con ${c.name}, ${lc(c.creditsExpire)}`,
    free: (c) => `offre ${lc(c.freeTier)} per iniziare`,
    intro: (A, B, pa, pb) => `La scelta tra ${A} e ${B} di solito dipende da come ciascuno tratta gli indirizzi su cui la tua lista fa davvero fatica. ${A} è ${pa.oneLiner} ${B} è ${pb.oneLiner} Qui sotto vediamo come si fanno pagare, cosa fanno con gli indirizzi catch-all e quanto dichiarano di essere precisi, e mostriamo dove si colloca Giggal.ai sulla stessa lista, così hai un terzo numero da valutare.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Come ${A} e ${B} gestiscono il catch-all`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} I domini catch-all accettano posta per qualsiasi nome, quindi un controllo normale non distingue una casella reale da una morta, ed è di solito qui che una lista perde in silenzio contatti buoni.`, label: 'Come Giggal.ai gestisce il catch-all.' },
      { heading: `Prezzi di ${A} e ${B} a confronto`, prose: `${ps[0]}. ${ps[1]}. Entrambi i numeri vengono dai prezzi pubblicati dai fornitori, quindi mettili accanto al volume che invii ogni mese.`, label: 'Come si fa pagare Giggal.ai.' },
      { heading: 'Supporto ai secure email gateway', prose: `Sui domini enterprise un gateway come Mimecast, Proofpoint o Barracuda sta spesso davanti alla casella e blocca il controllo abituale. ${A} ${a.advertisesSegSupport ? 'dichiara di verificare dietro quei gateway' : 'non copre quei gateway'}, e ${B} ${segB(a, b, ['lo fa anche lui', 'invece sì', 'no', 'nemmeno'])}.`, label: 'Come Giggal.ai gestisce i gateway.' },
      { heading: 'Crediti, piani gratuiti e scadenze', prose: `${LANG.it.expiry(a)}, e ${A} ${LANG.it.free(a)}. ${LANG.it.expiry(b)}, e ${B} ${LANG.it.free(b)}.`, label: 'Come Giggal.ai tratta i crediti.' },
    ],
    edges: [
      'Giggal.ai risolve gli indirizzi catch-all in un vero risultato consegnabile o non consegnabile a 1 credito fisso per email.',
      'Giggal.ai pubblica un prezzo fisso a consumo, 9,90 $ a 10.000, 76 $ a 100.000 e 680 $ a un milione, con crediti che non scadono mai.',
      'Giggal.ai rileva 15 secure email gateway riconosciuti, tra cui Mimecast, Proofpoint e Barracuda, e restituisce un risultato vero sugli indirizzi dietro di loro.',
      'I crediti Giggal.ai non scadono mai, i risultati sconosciuti non vengono addebitati, e ogni lista parte con 1.000 crediti gratis senza carta.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Quale scegliere, ${A} o ${B}?`, a: `Dipende dalla tua lista. ${A} è adatto ${pa.bestFor} ${B} è adatto ${pb.bestFor} Se contano di più la risoluzione del catch-all e la copertura dei secure email gateway, Giggal.ai gestisce entrambi a 9,90 $ per 10.000.` },
      { q: `Come si confrontano ${A} e ${B} sul prezzo?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai costa 9,90 $ a 10.000, 76 $ a 100.000 e 680 $ a un milione, con crediti che non scadono mai.` },
      { q: `${A} o ${B} risolvono gli indirizzi catch-all?`, a: `${LANG.it.caResolve(a)}. ${LANG.it.caResolve(b)}. Giggal.ai risolve il catch-all in un vero risultato consegnabile o non consegnabile a 1 credito fisso per email e verifica anche dietro 15 secure email gateway.` },
      { q: `Esiste un'opzione migliore di ${A} o ${B}?`, a: 'Giggal.ai è costruito per gli indirizzi difficili che entrambi tendono a saltare. Risolve il catch-all in un risultato vero a 1 credito fisso per email, verifica dietro 15 secure email gateway e pubblica un prezzo fisso di 9,90 $ per 10.000 con crediti che non scadono mai. Puoi provare una lista con 1.000 crediti gratis, senza carta.' },
      { q: 'Posso provare Giggal.ai prima di decidere?', a: `Sì. Giggal.ai dà 1.000 crediti gratis senza carta, utilizzabili su un caricamento in blocco, così puoi passare la stessa lista che testeresti con ${A} o ${B} e confrontare le righe catch-all.` },
    ],
    caResolve: (c) => (c.resolvesCatchAll ? `${c.name} restituisce un risultato sugli indirizzi catch-all` : `${c.name} segnala il catch-all senza confermare la casella`),
    desc: (A, B) => `Stai scegliendo tra ${A} e ${B}? Ecco come i due verificatori si confrontano su prezzo, catch-all e precisione, e dove si colloca Giggal.ai.`,
    og: (A, B) => `${A} vs ${B}, e come si colloca Giggal.ai`,
    ui: {
      tableHeading: (A, B) => `Come si confrontano ${A}, ${B} e Giggal.ai`,
      tableNote: 'Ogni prezzo e ogni condizione qui vengono dai prezzi pubblicati dal fornitore. Dove uno strumento non vende a volume, la cella mostra "Su richiesta", "Per utente" o il prezzo del piano mensile.',
      promoHeading: 'Perché i team scelgono Giggal.ai al posto di entrambi',
      promo: (A, B) => `${A} e ${B} lasciano entrambi una pila di indirizzi catch-all e protetti da gateway non confermati. Giggal.ai restituisce un risultato vero su quegli indirizzi a 1 credito fisso, verifica dietro 15 secure email gateway e pubblica un prezzo fisso di 9,90 $ per 10.000 con crediti che non scadono mai.`,
      promoCta: 'Verifica 1.000 email gratis',
      related: 'Confronti correlati',
      altSentence: ['Vuoi un confronto diretto con Giggal.ai? Guarda le pagine ', '', ' e ', '', ', oppure '],
      altLabel: (n) => `alternativa a ${n}`,
      compareEvery: 'confronta tutti i verificatori (in inglese)',
      allComparisons: 'Tutti i confronti (in inglese)',
    },
  },
  de: {
    rows: ['Kategorie', 'Löst Catch-all auf', 'Kosten für Catch-all', 'Secure Email Gateways', 'Preis bei 10.000', 'Preis bei 100.000', 'Preis bei 1.000.000', 'Verfall der Credits', 'Gratis-Kontingent', 'Berechnet unbekannte Ergebnisse', 'Genauigkeitsangabe'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} wird im Monatsplan verkauft, ab ${p(10000)} für 10.000 Prüfungen im Monat`
      : `${c.name} kostet ${p(10000)} bei 10.000, ${p(100000)} bei 100.000 und ${p(1000000)} bei einer Million`,
    expiry: (c) => `Bei ${c.name} gilt: ${c.creditsExpire}`,
    free: (c) => `zum Start gibt es ${c.freeTier}`,
    intro: (A, B, pa, pb) => `Die Wahl zwischen ${A} und ${B} hängt meist davon ab, wie beide mit den Adressen umgehen, an denen Ihre Liste wirklich hängt. ${A} ist ${pa.oneLiner} ${B} ist ${pb.oneLiner} Unten sehen Sie, wie beide abrechnen, was sie mit Catch-all-Adressen machen und wie genau sie nach eigener Angabe sind, und wo Giggal.ai bei derselben Liste landet, damit Sie eine dritte Zahl zum Abwägen haben.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Wie ${A} und ${B} mit Catch-all umgehen`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} Catch-all-Domains nehmen Post für jeden Namen an, ein normaler Check kann also ein echtes Postfach nicht von einem toten unterscheiden, und genau hier verliert eine Liste meist unbemerkt gute Kontakte.`, label: 'So geht Giggal.ai mit Catch-all um.' },
      { heading: `${A} vs ${B}: Preise`, prose: `${ps[0]}. ${ps[1]}. Beide Zahlen stammen direkt aus den Preisen der Anbieter, legen Sie sie also neben Ihr monatliches Versandvolumen.`, label: 'So rechnet Giggal.ai ab.' },
      { heading: 'Unterstützung für Secure Email Gateways', prose: `Auf Enterprise-Domains sitzt oft ein Gateway wie Mimecast, Proofpoint oder Barracuda vor dem Postfach und blockiert den üblichen Check. ${A} ${a.advertisesSegSupport ? 'gibt an, hinter diesen Gateways zu prüfen' : 'deckt diese Gateways nicht ab'}, und ${B} ${segB(a, b, ['ebenso', 'schon', 'nicht', 'auch nicht'])}.`, label: 'So geht Giggal.ai mit Gateways um.' },
      { heading: 'Credits, Gratis-Kontingente und Verfall', prose: `${LANG.de.expiry(a)}, und ${LANG.de.free(a)}. ${LANG.de.expiry(b)}, und ${LANG.de.free(b)}.`, label: 'So behandelt Giggal.ai Credits.' },
    ],
    edges: [
      'Giggal.ai löst Catch-all-Adressen in ein echtes Ergebnis zustellbar oder unzustellbar auf, pauschal 1 Credit pro E-Mail.',
      'Giggal.ai veröffentlicht einen festen Pay-as-you-go-Preis, 9,90 $ bei 10.000, 76 $ bei 100.000 und 680 $ bei einer Million, mit Credits, die nie verfallen.',
      'Giggal.ai erkennt 15 namentlich bekannte Secure Email Gateways, darunter Mimecast, Proofpoint und Barracuda, und liefert für Adressen dahinter ein echtes Ergebnis.',
      'Giggal.ai-Credits verfallen nie, unbekannte Ergebnisse werden nicht berechnet, und jede Liste startet mit 1.000 Gratis-Credits ohne Karte.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Was soll ich wählen, ${A} oder ${B}?`, a: `Das hängt von Ihrer Liste ab. ${A} passt zu ${pa.bestFor} ${B} passt zu ${pb.bestFor} Wenn Catch-all-Auflösung und die Abdeckung von Secure Email Gateways am wichtigsten sind, erledigt Giggal.ai beides für 9,90 $ pro 10.000.` },
      { q: `Wie unterscheiden sich ${A} und ${B} beim Preis?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai kostet 9,90 $ bei 10.000, 76 $ bei 100.000 und 680 $ bei einer Million, mit Credits, die nie verfallen.` },
      { q: `Lösen ${A} oder ${B} Catch-all-Adressen auf?`, a: `${LANG.de.caResolve(a)}. ${LANG.de.caResolve(b)}. Giggal.ai löst Catch-all in ein echtes Ergebnis zustellbar oder unzustellbar auf, pauschal 1 Credit pro E-Mail, und prüft auch hinter 15 Secure Email Gateways.` },
      { q: `Gibt es eine bessere Option als ${A} oder ${B}?`, a: 'Giggal.ai ist für die schwierigen Adressen gebaut, die beide gern auslassen. Es löst Catch-all zu einem echten Ergebnis auf, pauschal 1 Credit pro E-Mail, prüft hinter 15 Secure Email Gateways und veröffentlicht einen Festpreis von 9,90 $ pro 10.000 mit Credits, die nie verfallen. Sie können eine Liste mit 1.000 Gratis-Credits prüfen, ohne Karte.' },
      { q: 'Kann ich Giggal.ai vor der Entscheidung testen?', a: `Ja. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte, auch für einen Massen-Upload, damit Sie dieselbe Liste prüfen können, die Sie mit ${A} oder ${B} testen würden, und die Catch-all-Zeilen vergleichen.` },
    ],
    caResolve: (c) => (c.resolvesCatchAll ? `${c.name} liefert für Catch-all-Adressen ein Ergebnis` : `${c.name} markiert Catch-all, ohne das Postfach zu bestätigen`),
    desc: (A, B) => `${A} oder ${B}? So schneiden die beiden E-Mail-Verifizierer bei Preis, Catch-all und Genauigkeit ab, und wo Giggal.ai bei derselben Liste landet.`,
    og: (A, B) => `${A} vs ${B}, und wo Giggal.ai steht`,
    ui: {
      tableHeading: (A, B) => `${A}, ${B} und Giggal.ai im Vergleich`,
      tableNote: 'Jeder Preis und jede Bedingung hier stammt aus den Preisen des Anbieters. Wo ein Tool nicht nach Volumen verkauft, steht in der Zelle "Auf Anfrage", "Pro Nutzer" oder der Preis des Monatsplans.',
      promoHeading: 'Warum Teams Giggal.ai statt beider wählen',
      promo: (A, B) => `${A} und ${B} lassen beide einen Stapel Catch-all- und Gateway-geschützter Adressen unbestätigt. Giggal.ai liefert für diese Adressen ein echtes Ergebnis, pauschal 1 Credit, prüft hinter 15 Secure Email Gateways und veröffentlicht einen Festpreis von 9,90 $ pro 10.000 mit Credits, die nie verfallen.`,
      promoCta: '1.000 E-Mails gratis prüfen',
      related: 'Weitere Vergleiche',
      altSentence: ['Sie wollen einen direkten Vergleich mit Giggal.ai? Sehen Sie sich die Seiten ', '', ' und ', '', ' an, oder '],
      altLabel: (n) => `${n} Alternative`,
      compareEvery: 'vergleichen Sie alle Verifizierer (Englisch)',
      allComparisons: 'Alle Vergleiche (Englisch)',
    },
  },
  es: {
    rows: ['Categoría', 'Resuelve el catch-all', 'Coste del catch-all', 'Secure email gateways', 'Precio con 10.000', 'Precio con 100.000', 'Precio con 1.000.000', 'Caducidad de los créditos', 'Plan gratuito', 'Cobra los resultados desconocidos', 'Dato de precisión'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} se vende por plan mensual, desde ${p(10000)} por 10.000 verificaciones al mes`
      : `${c.name} cuesta ${p(10000)} con 10.000, ${p(100000)} con 100.000 y ${p(1000000)} con un millón`,
    expiry: (c) => `Con ${c.name}, ${lc(c.creditsExpire)}`,
    free: (c) => `ofrece ${lc(c.freeTier)} para empezar`,
    intro: (A, B, pa, pb) => `Elegir entre ${A} y ${B} suele depender de cómo trata cada uno las direcciones con las que tu lista de verdad tiene problemas. ${A} es ${pa.oneLiner} ${B} es ${pb.oneLiner} Abajo repasamos cómo cobran, qué hacen con las direcciones catch-all y qué precisión dicen tener, y mostramos dónde queda Giggal.ai con la misma lista, para que tengas una tercera cifra que valorar.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Cómo tratan ${A} y ${B} el catch-all`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} Los dominios catch-all aceptan correo para cualquier nombre, así que una comprobación normal no distingue un buzón real de uno muerto, y suele ser aquí donde una lista pierde contactos buenos sin que nadie lo note.`, label: 'Cómo trata Giggal.ai el catch-all.' },
      { heading: `Precios de ${A} frente a ${B}`, prose: `${ps[0]}. ${ps[1]}. Ambas cifras vienen de los precios publicados por cada proveedor, así que ponlas junto al volumen que envías cada mes.`, label: 'Cómo cobra Giggal.ai.' },
      { heading: 'Soporte de secure email gateways', prose: `En los dominios enterprise, un gateway como Mimecast, Proofpoint o Barracuda suele estar delante del buzón y bloquear la comprobación habitual. ${A} ${a.advertisesSegSupport ? 'dice verificar detrás de esos gateways' : 'no cubre esos gateways'}, y ${B} ${segB(a, b, ['también', 'sí', 'no', 'tampoco'])}.`, label: 'Cómo trata Giggal.ai los gateways.' },
      { heading: 'Créditos, planes gratuitos y caducidad', prose: `${LANG.es.expiry(a)}, y ${A} ${LANG.es.free(a)}. ${LANG.es.expiry(b)}, y ${B} ${LANG.es.free(b)}.`, label: 'Cómo trata Giggal.ai los créditos.' },
    ],
    edges: [
      'Giggal.ai resuelve las direcciones catch-all en un resultado real, entregable o no entregable, a 1 crédito fijo por correo.',
      'Giggal.ai publica un precio fijo de pago por uso, 9,90 $ con 10.000, 76 $ con 100.000 y 680 $ con un millón, con créditos que no caducan nunca.',
      'Giggal.ai detecta 15 secure email gateways identificados, entre ellos Mimecast, Proofpoint y Barracuda, y devuelve un resultado real en las direcciones que hay detrás.',
      'Los créditos de Giggal.ai no caducan nunca, no cobra los resultados desconocidos y cada lista empieza con 1.000 créditos gratis sin tarjeta.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `¿Cuál elijo, ${A} o ${B}?`, a: `Depende de tu lista. ${A} encaja con ${pa.bestFor} ${B} encaja con ${pb.bestFor} Si lo que más importa es resolver el catch-all y cubrir los secure email gateways, Giggal.ai hace ambas cosas por 9,90 $ por 10.000.` },
      { q: `¿Cómo se comparan ${A} y ${B} en precio?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai cuesta 9,90 $ con 10.000, 76 $ con 100.000 y 680 $ con un millón, con créditos que no caducan nunca.` },
      { q: `¿Resuelven ${A} o ${B} las direcciones catch-all?`, a: `${LANG.es.caResolve(a)}. ${LANG.es.caResolve(b)}. Giggal.ai resuelve el catch-all en un resultado real, entregable o no entregable, a 1 crédito fijo por correo, y además verifica detrás de 15 secure email gateways.` },
      { q: `¿Hay una opción mejor que ${A} o ${B}?`, a: 'Giggal.ai está hecho para las direcciones difíciles que ambos suelen saltarse. Resuelve el catch-all en un resultado real a 1 crédito fijo por correo, verifica detrás de 15 secure email gateways y publica un precio fijo de 9,90 $ por 10.000 con créditos que no caducan nunca. Puedes probar una lista con 1.000 créditos gratis, sin tarjeta.' },
      { q: '¿Puedo probar Giggal.ai antes de decidir?', a: `Sí. Giggal.ai da 1.000 créditos gratis sin tarjeta, válidos en una carga masiva, así que puedes pasar la misma lista que probarías en ${A} o ${B} y comparar las filas catch-all.` },
    ],
    caResolve: (c) => (c.resolvesCatchAll ? `${c.name} devuelve un resultado en las direcciones catch-all` : `${c.name} marca el catch-all sin confirmar el buzón`),
    desc: (A, B) => `¿Comparas ${A} y ${B}? Así se sitúan los dos verificadores en precio, catch-all y precisión, y dónde queda Giggal.ai con la misma lista.`,
    og: (A, B) => `${A} vs ${B}, y dónde queda Giggal.ai`,
    ui: {
      tableHeading: (A, B) => `Cómo se comparan ${A}, ${B} y Giggal.ai`,
      tableNote: 'Cada precio y condición de esta tabla viene de los precios publicados por el proveedor. Si una herramienta no vende por volumen, la celda muestra "Bajo presupuesto", "Por usuario" o el precio de su plan mensual.',
      promoHeading: 'Por qué los equipos eligen Giggal.ai en lugar de ambos',
      promo: (A, B) => `${A} y ${B} dejan sin confirmar un montón de direcciones catch-all y protegidas por gateways. Giggal.ai devuelve un resultado real en ellas a 1 crédito fijo, verifica detrás de 15 secure email gateways y publica un precio fijo de 9,90 $ por 10.000 con créditos que no caducan nunca.`,
      promoCta: 'Verifica 1.000 correos gratis',
      related: 'Comparativas relacionadas',
      altSentence: ['¿Quieres una comparación directa con Giggal.ai? Mira las páginas ', '', ' y ', '', ', o '],
      altLabel: (n) => `alternativa a ${n}`,
      compareEvery: 'compara todos los verificadores (en inglés)',
      allComparisons: 'Todas las comparativas (en inglés)',
    },
  },
  'pt-br': {
    rows: ['Categoria', 'Resolve catch-all', 'Custo do catch-all', 'Secure email gateways', 'Preço em 10.000', 'Preço em 100.000', 'Preço em 1.000.000', 'Validade dos créditos', 'Plano grátis', 'Cobra resultados desconhecidos', 'Dado de precisão'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `O ${c.name} é vendido por plano mensal, a partir de ${p(10000)} por 10.000 verificações por mês`
      : `O ${c.name} custa ${p(10000)} em 10.000, ${p(100000)} em 100.000 e ${p(1000000)} em um milhão`,
    expiry: (c) => `No ${c.name}, ${lc(c.creditsExpire)}`,
    free: (c) => `oferece ${lc(c.freeTier)} para começar`,
    intro: (A, B, pa, pb) => `Escolher entre ${A} e ${B} costuma depender de como cada um lida com os endereços em que a sua lista realmente tem problema. O ${A} é ${pa.oneLiner} O ${B} é ${pb.oneLiner} Abaixo mostramos como cobram, o que fazem com endereços catch-all e qual precisão dizem ter, e onde a Giggal.ai fica na mesma lista, para você ter um terceiro número para pesar.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Como ${A} e ${B} lidam com catch-all`, prose: `O ${A} ${pa.catchAllApproach} O ${B} ${pb.catchAllApproach} Domínios catch-all aceitam e-mail para qualquer nome, então uma checagem normal não diferencia uma caixa real de uma morta, e é geralmente aqui que uma lista perde contatos bons sem ninguém perceber.`, label: 'Como a Giggal.ai lida com catch-all.' },
      { heading: `Preços do ${A} e do ${B}`, prose: `${ps[0]}. ${ps[1]}. Os dois números vêm direto dos preços publicados por cada fornecedor, então compare com o volume que você envia por mês.`, label: 'Como a Giggal.ai cobra.' },
      { heading: 'Suporte a secure email gateways', prose: `Em domínios enterprise, um gateway como Mimecast, Proofpoint ou Barracuda costuma ficar na frente da caixa e bloquear a checagem comum. O ${A} ${a.advertisesSegSupport ? 'diz verificar atrás desses gateways' : 'não cobre esses gateways'}, e o ${B} ${segB(a, b, ['também', 'sim', 'não', 'também não'])}.`, label: 'Como a Giggal.ai lida com gateways.' },
      { heading: 'Créditos, planos grátis e validade', prose: `${LANG['pt-br'].expiry(a)}, e o ${A} ${LANG['pt-br'].free(a)}. ${LANG['pt-br'].expiry(b)}, e o ${B} ${LANG['pt-br'].free(b)}.`, label: 'Como a Giggal.ai trata os créditos.' },
    ],
    edges: [
      'A Giggal.ai resolve endereços catch-all em um resultado real, entregável ou não entregável, a 1 crédito fixo por e-mail.',
      'A Giggal.ai publica um preço fixo de pagamento por uso, US$ 9,90 em 10.000, US$ 76 em 100.000 e US$ 680 em um milhão, com créditos que nunca expiram.',
      'A Giggal.ai detecta 15 secure email gateways identificados, entre eles Mimecast, Proofpoint e Barracuda, e devolve um resultado real nos endereços atrás deles.',
      'Os créditos da Giggal.ai nunca expiram, resultados desconhecidos não são cobrados, e toda lista começa com 1.000 créditos grátis sem cartão.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Qual escolher, ${A} ou ${B}?`, a: `Depende da sua lista. O ${A} serve para ${pa.bestFor} O ${B} serve para ${pb.bestFor} Se o que mais importa é resolver catch-all e cobrir secure email gateways, a Giggal.ai faz os dois por US$ 9,90 por 10.000.` },
      { q: `Como ${A} e ${B} se comparam no preço?`, a: `${ps[0]}. ${ps[1]}. A Giggal.ai custa US$ 9,90 em 10.000, US$ 76 em 100.000 e US$ 680 em um milhão, com créditos que nunca expiram.` },
      { q: `O ${A} ou o ${B} resolvem endereços catch-all?`, a: `${LANG['pt-br'].caResolve(a)}. ${LANG['pt-br'].caResolve(b)}. A Giggal.ai resolve o catch-all em um resultado real, entregável ou não entregável, a 1 crédito fixo por e-mail, e também verifica atrás de 15 secure email gateways.` },
      { q: `Existe uma opção melhor que ${A} ou ${B}?`, a: 'A Giggal.ai é feita para os endereços difíceis que os dois costumam pular. Resolve o catch-all em um resultado real a 1 crédito fixo por e-mail, verifica atrás de 15 secure email gateways e publica um preço fixo de US$ 9,90 por 10.000 com créditos que nunca expiram. Você pode testar uma lista com 1.000 créditos grátis, sem cartão.' },
      { q: 'Posso testar a Giggal.ai antes de decidir?', a: `Sim. A Giggal.ai dá 1.000 créditos grátis sem cartão, válidos em envio em massa, então você pode passar a mesma lista que testaria no ${A} ou no ${B} e comparar as linhas catch-all.` },
    ],
    caResolve: (c) => (c.resolvesCatchAll ? `O ${c.name} devolve um resultado em endereços catch-all` : `O ${c.name} marca o catch-all sem confirmar a caixa`),
    desc: (A, B) => `Comparando ${A} e ${B}? Veja como os dois verificadores se saem em preço, catch-all e precisão, e onde a Giggal.ai fica na mesma lista.`,
    og: (A, B) => `${A} vs ${B}, e onde fica a Giggal.ai`,
    ui: {
      tableHeading: (A, B) => `Como ${A}, ${B} e Giggal.ai se comparam`,
      tableNote: 'Cada preço e condição aqui vem dos preços publicados pelo fornecedor. Quando uma ferramenta não vende por volume, a célula mostra "Sob consulta", "Por usuário" ou o preço do plano mensal.',
      promoHeading: 'Por que as equipes escolhem a Giggal.ai em vez dos dois',
      promo: (A, B) => `O ${A} e o ${B} deixam uma pilha de endereços catch-all e protegidos por gateway sem confirmação. A Giggal.ai devolve um resultado real nesses endereços a 1 crédito fixo, verifica atrás de 15 secure email gateways e publica um preço fixo de US$ 9,90 por 10.000 com créditos que nunca expiram.`,
      promoCta: 'Verifique 1.000 e-mails grátis',
      related: 'Comparativos relacionados',
      altSentence: ['Quer uma comparação direta com a Giggal.ai? Veja as páginas ', '', ' e ', '', ', ou '],
      altLabel: (n) => `alternativa ao ${n}`,
      compareEvery: 'compare todos os verificadores (em inglês)',
      allComparisons: 'Todos os comparativos (em inglês)',
    },
  },
  fr: {
    rows: ['Catégorie', 'Résout le catch-all', 'Coût du catch-all', 'Secure email gateways', `Prix à 10${K}000`, `Prix à 100${K}000`, `Prix à 1${K}000${K}000`, 'Expiration des crédits', 'Offre gratuite', 'Facture les résultats inconnus', 'Chiffre de précision'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} est vendu par forfait mensuel, à partir de ${p(10000)} pour 10${K}000 vérifications par mois`
      : `${c.name} coûte ${p(10000)} à 10${K}000, ${p(100000)} à 100${K}000 et ${p(1000000)} à un million`,
    expiry: (c) => `Chez ${c.name}, ${lc(c.creditsExpire)}`,
    free: (c) => `propose ${lc(c.freeTier)} pour démarrer`,
    intro: (A, B, pa, pb) => `Choisir entre ${A} et ${B} dépend surtout de la façon dont chacun traite les adresses qui posent vraiment problème dans votre liste. ${A} est ${pa.oneLiner} ${B} est ${pb.oneLiner} Voici comment ils facturent, ce qu'ils font des adresses catch-all et la précision qu'ils annoncent, avec la place de Giggal.ai sur la même liste, pour que vous ayez un troisième chiffre à comparer.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Comment ${A} et ${B} traitent le catch-all`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} Les domaines catch-all acceptent le courrier pour tous les noms, donc un contrôle normal ne distingue pas une boîte réelle d'une boîte morte, et c'est généralement là qu'une liste perd discrètement de bons contacts.`, label: 'Comment Giggal.ai traite le catch-all.' },
      { heading: `Tarifs de ${A} face à ${B}`, prose: `${ps[0]}. ${ps[1]}. Les deux chiffres viennent directement des tarifs publiés par chaque éditeur, alors comparez-les à votre volume d'envoi mensuel.`, label: 'Comment Giggal.ai facture.' },
      { heading: 'Prise en charge des secure email gateways', prose: `Sur les domaines grands comptes, une passerelle comme Mimecast, Proofpoint ou Barracuda se place souvent devant la boîte et bloque le contrôle habituel. ${A} ${a.advertisesSegSupport ? 'dit vérifier derrière ces passerelles' : 'ne couvre pas ces passerelles'}, et ${B} ${segB(a, b, ['aussi', 'oui', 'non', 'non plus'])}.`, label: 'Comment Giggal.ai traite les passerelles.' },
      { heading: 'Crédits, offres gratuites et expiration', prose: `${LANG.fr.expiry(a)}, et ${A} ${LANG.fr.free(a)}. ${LANG.fr.expiry(b)}, et ${B} ${LANG.fr.free(b)}.`, label: 'Comment Giggal.ai gère les crédits.' },
    ],
    edges: [
      'Giggal.ai transforme les adresses catch-all en vrai résultat distribuable ou non distribuable, à 1 crédit fixe par email.',
      `Giggal.ai publie un prix fixe à l'usage, 9,90 $ à 10${K}000, 76 $ à 100${K}000 et 680 $ à un million, avec des crédits qui n'expirent jamais.`,
      'Giggal.ai détecte 15 secure email gateways identifiées, dont Mimecast, Proofpoint et Barracuda, et renvoie un vrai résultat pour les adresses qui se trouvent derrière.',
      `Les crédits Giggal.ai n'expirent jamais, les résultats inconnus ne sont pas facturés, et chaque liste démarre avec 1${K}000 crédits gratuits sans carte.`,
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Lequel choisir, ${A} ou ${B} ?`, a: `Cela dépend de votre liste. ${A} convient ${pa.bestFor} ${B} convient ${pb.bestFor} Si la résolution du catch-all et la couverture des secure email gateways comptent le plus, Giggal.ai gère les deux à 9,90 $ les 10${K}000.` },
      { q: `Comment ${A} et ${B} se comparent-ils sur le prix ?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai coûte 9,90 $ à 10${K}000, 76 $ à 100${K}000 et 680 $ à un million, avec des crédits qui n'expirent jamais.` },
      { q: `${A} ou ${B} résolvent-ils les adresses catch-all ?`, a: `${LANG.fr.caResolve(a)}. ${LANG.fr.caResolve(b)}. Giggal.ai transforme le catch-all en vrai résultat distribuable ou non distribuable, à 1 crédit fixe par email, et vérifie aussi derrière 15 secure email gateways.` },
      { q: `Existe-t-il une meilleure option que ${A} ou ${B} ?`, a: `Giggal.ai est conçu pour les adresses difficiles que les deux laissent souvent de côté. Il transforme le catch-all en vrai résultat à 1 crédit fixe par email, vérifie derrière 15 secure email gateways et publie un prix fixe de 9,90 $ les 10${K}000 avec des crédits qui n'expirent jamais. Vous pouvez tester une liste avec 1${K}000 crédits gratuits, sans carte.` },
      { q: 'Puis-je tester Giggal.ai avant de décider ?', a: `Oui. Giggal.ai offre 1${K}000 crédits gratuits sans carte, utilisables sur un import en masse, pour passer la même liste que vous testeriez avec ${A} ou ${B} et comparer les lignes catch-all.` },
    ],
    caResolve: (c) => (c.resolvesCatchAll ? `${c.name} renvoie un résultat sur les adresses catch-all` : `${c.name} signale le catch-all sans confirmer la boîte`),
    desc: (A, B) => `Vous comparez ${A} et ${B} ? Voici comment les deux vérificateurs se situent sur le prix, le catch-all et la précision, et où se place Giggal.ai.`,
    og: (A, B) => `${A} vs ${B}, et où se situe Giggal.ai`,
    ui: {
      tableHeading: (A, B) => `${A}, ${B} et Giggal.ai comparés`,
      tableNote: "Chaque prix et chaque condition ici viennent des tarifs publiés par l'éditeur. Quand un outil ne vend pas au volume, la cellule indique « Sur devis », « Par utilisateur » ou le prix de son forfait mensuel.",
      promoHeading: 'Pourquoi les équipes choisissent Giggal.ai plutôt que les deux',
      promo: (A, B) => `${A} et ${B} laissent tous deux une pile d'adresses catch-all et protégées par une passerelle sans confirmation. Giggal.ai renvoie un vrai résultat sur ces adresses à 1 crédit fixe, vérifie derrière 15 secure email gateways et publie un prix fixe de 9,90 $ les 10${K}000 avec des crédits qui n'expirent jamais.`,
      promoCta: `Vérifier 1${K}000 emails gratuitement`,
      related: 'Comparatifs liés',
      altSentence: ['Vous voulez une comparaison directe avec Giggal.ai ? Voyez les pages ', '', ' et ', '', ', ou '],
      altLabel: (n) => `alternative à ${n}`,
      compareEvery: 'comparez tous les vérificateurs (en anglais)',
      allComparisons: 'Tous les comparatifs (en anglais)',
    },
  },
}

export interface ComparisonL10n {
  a: Competitor
  b: Competitor
  rows: CmpRow[]
  intro: string
  sections: { heading: string; prose: string; giggalEdge: string; giggalEdgeLabel: string }[]
  faqs: FaqItem[]
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ui: Lang['ui']
}

export function buildComparisonL10n(locale: L10nLocale, versus: string): ComparisonL10n {
  const [aSlug, bSlug] = versus.split('-vs-')
  const L = LANG[locale]
  const ui = ALT_UI[locale]
  const a = localizedCompetitor(aSlug, locale)
  const b = localizedCompetitor(bSlug, locale)
  const pa = PROFILES[aSlug]?.[locale]
  const pb = PROFILES[bSlug]?.[locale]
  const metaTitle = TITLES[versus]?.[locale]
  if (!pa || !pb || !metaTitle) throw new Error(`No ${locale} comparison for ${versus}`)
  const g = giggalFacts(locale)
  const A = a.name
  const B = b.name

  const cell = (c: Competitor, n: number): string => {
    const t = tierAt(c, n)
    if (t && t.status !== 'unknown' && t.totalUsd !== null) return usdL(locale, t.totalUsd) + (t.perMonth ? ui.perMonth : '')
    return t?.note ?? '-'
  }
  const gp = (n: number) => usdL(locale, giggalTierAt(n).totalUsd as number)
  const t = (text: string): CmpValue => ({ kind: 'text', text })
  const bo = (yes: boolean | null): CmpValue => ({ kind: 'bool', yes })
  const r = L.rows
  const rows: CmpRow[] = [
    { label: r[0], a: t(pa.category), b: t(pb.category), giggal: t(g.category) },
    { label: r[1], a: bo(a.resolvesCatchAll), b: bo(b.resolvesCatchAll), giggal: bo(true) },
    { label: r[2], a: t(a.catchAllCreditCost), b: t(b.catchAllCreditCost), giggal: t(g.catchAllCreditCost) },
    { label: r[3], a: bo(a.advertisesSegSupport), b: bo(b.advertisesSegSupport), giggal: t(ui.gateways(g.segGatewayCount)) },
    { label: r[4], a: t(cell(a, 10000)), b: t(cell(b, 10000)), giggal: t(gp(10000)) },
    { label: r[5], a: t(cell(a, 100000)), b: t(cell(b, 100000)), giggal: t(gp(100000)) },
    { label: r[6], a: t(cell(a, 1000000)), b: t(cell(b, 1000000)), giggal: t(gp(1000000)) },
    { label: r[7], a: t(a.creditsExpire), b: t(b.creditsExpire), giggal: t(g.creditsExpire) },
    { label: r[8], a: t(a.freeTier), b: t(b.freeTier), giggal: t(g.freeTier) },
    { label: r[9], a: bo(a.chargesForUnknown), b: bo(b.chargesForUnknown), giggal: bo(false) },
    { label: r[10], a: t(a.claimedAccuracy), b: t(b.claimedAccuracy), giggal: t(g.claimedAccuracy) },
  ]
  const ps: [string, string] = [L.priceSentence(a, (n) => cell(a, n)), L.priceSentence(b, (n) => cell(b, n))]
  const sections = L.sections(A, B, a, b, pa, pb, ps).map((s, i) => ({ heading: s.heading, prose: s.prose, giggalEdgeLabel: s.label, giggalEdge: L.edges[i] }))

  return {
    a,
    b,
    rows,
    intro: L.intro(A, B, pa, pb),
    sections,
    faqs: L.faqs(A, B, a, b, pa, pb, ps),
    metaTitle,
    metaDescription: L.desc(A, B),
    ogTitle: L.og(A, B),
    ui: L.ui,
  }
}
