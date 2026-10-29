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
  nl: 'vergelijking',
  pl: 'porownanie',
  id: 'perbandingan',
  ja: 'compare',
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
    nl: 'ZeroBounce vs NeverBounce: prijzen en nauwkeurigheid | Giggal.ai',
  pl: 'ZeroBounce vs NeverBounce: ceny i dokładność | Giggal.ai',
    id: 'ZeroBounce vs NeverBounce: harga dan akurasi | Giggal.ai',
    ja: 'ZeroBounce vs NeverBounce：料金と正確性の比較 | Giggal.ai',
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
    nl: { category: 'Pure verificatietool', oneLiner: 'een verificatietool die al lang bestaat, binnen een breed pakket voor bezorgbaarheid.', catchAllApproach: 'geeft catch-all-adressen met AI een score van 1 tot 10 in plaats van de mailbox te bevestigen.', bestFor: 'teams die verificatie willen samen met inbox placement en monitoring van DMARC en blacklists.' },
    pl: { category: 'Wyspecjalizowany weryfikator', oneLiner: 'działający od lat weryfikator, który jest częścią szerokiego pakietu narzędzi do dostarczalności.', catchAllApproach: 'ocenia adresy catch-all za pomocą AI w skali od 1 do 10, zamiast potwierdzić skrzynkę.', bestFor: 'zespołów, które chcą mieć weryfikację razem z testami umieszczenia w skrzynce odbiorczej (inbox placement) oraz monitoringiem DMARC i czarnych list.' },
    id: { category: 'Alat verifikasi murni', oneLiner: 'alat verifikasi yang sudah lama ada dan menjadi bagian dari paket deliverability yang luas.', catchAllApproach: 'memberi alamat catch-all skor 1 sampai 10 dengan AI, bukan memastikan kotak masuknya.', bestFor: 'tim yang ingin verifikasi sekaligus inbox placement serta pemantauan DMARC dan blacklist.' },
    ja: { category: 'メールアドレス検証専用のツール', oneLiner: '幅広い到達率ツール群の一部として、長く提供されている検証ツールです。', catchAllApproach: 'キャッチオールドメインのアドレスに、メールボックスを確認する代わりに、AIで1〜10のスコアを付けます。', bestFor: '検証に加えて、受信トレイへの到達テスト（インボックスプレースメント）、DMARCとブラックリストの監視も使いたいチーム' },
  },
  neverbounce: {
    it: { category: 'Verificatore puro', oneLiner: 'un verificatore noto per le integrazioni CRM profonde e la pulizia delle liste dentro i tuoi strumenti.', catchAllApproach: 'segna gli indirizzi accept-all e ne risolve solo una piccola parte.', bestFor: 'ai team che puliscono le liste direttamente dentro Salesforce, HubSpot o Marketo.' },
    de: { category: 'Reiner Verifizierer', oneLiner: 'ein Verifizierer, bekannt für tiefe CRM-Integrationen und Listenbereinigung direkt in Ihren Tools.', catchAllApproach: 'markiert Accept-all-Adressen und löst nur einen kleinen Teil davon auf.', bestFor: 'Teams, die Listen direkt in Salesforce, HubSpot oder Marketo bereinigen.' },
    es: { category: 'Verificador puro', oneLiner: 'un verificador conocido por sus integraciones profundas con CRM y por limpiar listas dentro de tus herramientas.', catchAllApproach: 'marca las direcciones accept-all y solo resuelve una pequeña parte.', bestFor: 'equipos que limpian listas directamente dentro de Salesforce, HubSpot o Marketo.' },
    'pt-br': { category: 'Verificador puro', oneLiner: 'um verificador conhecido pelas integrações profundas com CRM e por limpar listas dentro das suas ferramentas.', catchAllApproach: 'marca os endereços accept-all e resolve só uma pequena parte deles.', bestFor: 'equipes que limpam listas direto no Salesforce, HubSpot ou Marketo.' },
    fr: { category: 'Vérificateur pur', oneLiner: 'un vérificateur connu pour ses intégrations CRM poussées et le nettoyage des listes dans vos outils.', catchAllApproach: "marque les adresses accept-all et n'en résout qu'une petite partie.", bestFor: 'aux équipes qui nettoient leurs listes directement dans Salesforce, HubSpot ou Marketo.' },
    nl: { category: 'Pure verificatietool', oneLiner: 'een verificatietool die bekendstaat om zijn CRM-integraties en het opschonen van lijsten in je eigen tools.', catchAllApproach: 'markeert accept-all-adressen en lost maar een klein deel daarvan op.', bestFor: 'teams die lijsten direct in Salesforce, HubSpot of Marketo opschonen.' },
    pl: { category: 'Wyspecjalizowany weryfikator', oneLiner: 'weryfikator znany z rozbudowanych integracji z CRM i z czyszczenia list bezpośrednio w twoich narzędziach.', catchAllApproach: 'oznacza adresy accept-all i rozstrzyga tylko niewielką ich część.', bestFor: 'zespołów, które czyszczą listy bezpośrednio w Salesforce, HubSpot lub Marketo.' },
    id: { category: 'Alat verifikasi murni', oneLiner: 'alat verifikasi yang dikenal karena integrasi CRM-nya dan pembersihan daftar langsung di alat Anda.', catchAllApproach: 'menandai alamat accept-all dan hanya menyelesaikan sebagian kecil darinya.', bestFor: 'tim yang membersihkan daftar langsung di Salesforce, HubSpot, atau Marketo.' },
    ja: { category: 'メールアドレス検証専用のツール', oneLiner: 'CRMとの連携と、お使いのツールの中でのリストのクリーニングで知られる検証ツールです。', catchAllApproach: 'アクセプトオール（accept-all）のアドレスにラベルを付け、結果を出せるのはその一部だけです。', bestFor: 'Salesforce、HubSpot、Marketoの中で直接リストをクリーニングするチーム' },
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
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} restituisce un risultato su alcuni indirizzi catch-all`
        : c.resolvesCatchAll
        ? `${c.name} restituisce un risultato sugli indirizzi catch-all`
        : `${c.name} segnala il catch-all senza confermare la casella`,
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
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} liefert für einige Catch-all-Adressen ein Ergebnis`
        : c.resolvesCatchAll
        ? `${c.name} liefert für Catch-all-Adressen ein Ergebnis`
        : `${c.name} markiert Catch-all, ohne das Postfach zu bestätigen`,
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
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} devuelve un resultado en algunas direcciones catch-all`
        : c.resolvesCatchAll
        ? `${c.name} devuelve un resultado en las direcciones catch-all`
        : `${c.name} marca el catch-all sin confirmar el buzón`,
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
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `O ${c.name} devolve um resultado em alguns endereços catch-all`
        : c.resolvesCatchAll
        ? `O ${c.name} devolve um resultado em endereços catch-all`
        : `O ${c.name} marca o catch-all sem confirmar a caixa`,
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
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} renvoie un résultat sur certaines adresses catch-all`
        : c.resolvesCatchAll
        ? `${c.name} renvoie un résultat sur les adresses catch-all`
        : `${c.name} signale le catch-all sans confirmer la boîte`,
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
  nl: {
    rows: ['Categorie', 'Lost catch-all op', 'Kosten van catch-all', 'Secure email gateways', 'Prijs bij 10.000', 'Prijs bij 100.000', 'Prijs bij 1.000.000', 'Geldigheid van credits', 'Gratis plan', 'Rekent onbekende resultaten af', 'Cijfer voor nauwkeurigheid'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} wordt verkocht als maandabonnement, vanaf ${p(10000)} voor 10.000 controles per maand`
      : `${c.name} kost ${p(10000)} bij 10.000, ${p(100000)} bij 100.000 en ${p(1000000)} bij een miljoen`,
    expiry: (c) => `${c.name}: ${lc(c.creditsExpire)}`,
    free: (c) => `biedt ${lc(c.freeTier)} om mee te beginnen`,
    intro: (A, B, pa, pb) => `De keuze tussen ${A} en ${B} hangt vooral af van hoe elk van beide omgaat met de adressen die in je lijst echt problemen geven. ${A} is ${pa.oneLiner} ${B} is ${pb.oneLiner} Hieronder zie je wat ze rekenen, wat ze doen met catch-all-adressen en hoe nauwkeurig ze zeggen te zijn. We laten ook zien waar Giggal.ai staat op dezelfde lijst, zodat je een derde cijfer hebt om te vergelijken.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Hoe ${A} en ${B} omgaan met catch-all`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} Catch-all-domeinen accepteren mail voor elke naam. Een normale controle kan daar een echte mailbox niet onderscheiden van een dode. Daar verliest een lijst vaak goede contacten zonder dat je het merkt.`, label: 'Hoe Giggal.ai met catch-all omgaat.' },
      { heading: `Prijzen van ${A} en ${B} vergeleken`, prose: `${ps[0]}. ${ps[1]}. Beide cijfers komen rechtstreeks uit de gepubliceerde prijzen van elke leverancier. Vergelijk ze met het aantal e-mails dat je per maand verstuurt.`, label: 'Wat Giggal.ai rekent.' },
      { heading: 'Ondersteuning voor secure email gateways', prose: `Op domeinen van grote bedrijven staat vaak een gateway zoals Mimecast, Proofpoint of Barracuda voor de mailbox. Die blokkeert de gewone controle. ${A} ${a.advertisesSegSupport ? 'zegt achter deze gateways te controleren' : 'dekt deze gateways niet'}, en ${B} ${segB(a, b, ['ook', 'wel', 'niet', 'ook niet'])}.`, label: 'Hoe Giggal.ai met gateways omgaat.' },
      { heading: 'Credits, gratis plannen en geldigheid', prose: `${LANG.nl.expiry(a)}. ${A} ${LANG.nl.free(a)}. ${LANG.nl.expiry(b)}. ${B} ${LANG.nl.free(b)}.`, label: 'Hoe Giggal.ai met credits omgaat.' },
    ],
    edges: [
      'Giggal.ai maakt van catch-all-adressen een echt resultaat, bezorgbaar of niet bezorgbaar, voor vast 1 credit per e-mailadres.',
      'Giggal.ai publiceert een vaste prijs per gebruik: US$ 9,90 bij 10.000, US$ 76 bij 100.000 en US$ 680 bij een miljoen, met credits die nooit verlopen.',
      'Giggal.ai herkent 15 secure email gateways, waaronder Mimecast, Proofpoint en Barracuda, en geeft een echt resultaat voor de adressen erachter.',
      'Credits van Giggal.ai verlopen nooit, onbekende resultaten worden niet afgerekend en elke lijst begint met 1.000 gratis credits, zonder creditcard.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Welke kies ik, ${A} of ${B}?`, a: `Dat hangt af van je lijst. ${A} past bij ${pa.bestFor} ${B} past bij ${pb.bestFor} Zijn catch-all-adressen en secure email gateways voor jou het belangrijkst, dan doet Giggal.ai allebei voor US$ 9,90 per 10.000.` },
      { q: `Hoe verhouden de prijzen van ${A} en ${B} zich?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai kost US$ 9,90 bij 10.000, US$ 76 bij 100.000 en US$ 680 bij een miljoen, met credits die nooit verlopen.` },
      { q: `Lossen ${A} of ${B} catch-all-adressen op?`, a: `${LANG.nl.caResolve(a)}. ${LANG.nl.caResolve(b)}. Giggal.ai maakt van catch-all een echt resultaat, bezorgbaar of niet bezorgbaar, voor vast 1 credit per e-mailadres. Het controleert ook achter 15 secure email gateways.` },
      { q: `Is er een betere optie dan ${A} of ${B}?`, a: `Giggal.ai is gebouwd voor de lastige adressen die beide vaak niet oplossen. Het maakt van catch-all een echt resultaat voor vast 1 credit per e-mailadres, controleert achter 15 secure email gateways en publiceert een vaste prijs van US$ 9,90 per 10.000, met credits die nooit verlopen. Je kunt een lijst testen met 1.000 gratis credits, zonder creditcard.` },
      { q: 'Kan ik Giggal.ai testen voordat ik kies?', a: `Ja. Giggal.ai geeft 1.000 gratis credits zonder creditcard, te gebruiken bij een bulkupload. Controleer dezelfde lijst die je met ${A} of ${B} zou testen en vergelijk de catch-all-regels.` },
    ],
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} geeft voor een deel van de catch-all-adressen een resultaat`
        : c.resolvesCatchAll
        ? `${c.name} geeft een resultaat voor catch-all-adressen`
        : `${c.name} markeert catch-all zonder de mailbox te bevestigen`,
    desc: (A, B) => `Twijfel je tussen ${A} en ${B}? Zo verhouden beide verificatietools zich op prijs, catch-all en nauwkeurigheid. Je ziet ook waar Giggal.ai staat.`,
    og: (A, B) => `${A} vs ${B}, en waar Giggal.ai staat`,
    ui: {
      tableHeading: (A, B) => `${A}, ${B} en Giggal.ai vergeleken`,
      tableNote: 'Elke prijs en elke voorwaarde hier komt uit de gepubliceerde prijzen van de leverancier. Verkoopt een tool niet per volume, dan staat in de cel "Op aanvraag", "Per gebruiker" of de prijs van het maandplan.',
      promoHeading: 'Waarom teams Giggal.ai kiezen in plaats van een van beide',
      promo: (A, B) => `${A} en ${B} laten allebei veel catch-all-adressen en adressen achter een gateway onbevestigd. Giggal.ai geeft voor deze adressen een echt resultaat voor vast 1 credit, controleert achter 15 secure email gateways en publiceert een vaste prijs van US$ 9,90 per 10.000, met credits die nooit verlopen.`,
      promoCta: 'Controleer gratis 1.000 e-mailadressen',
      related: 'Verwante vergelijkingen',
      altSentence: ['Wil je een directe vergelijking met Giggal.ai? Bekijk de pagina’s ', '', ' en ', '', ', of '],
      altLabel: (n) => `${n}-alternatief`,
      compareEvery: 'vergelijk alle verificatietools (in het Engels)',
      allComparisons: 'Alle vergelijkingen (in het Engels)',
    },
  },
  pl: {
    rows: ['Kategoria', 'Rozstrzyga catch-all', 'Koszt catch-all', 'Secure email gateway', 'Cena przy 10 000', 'Cena przy 100 000', 'Cena przy 1 000 000', 'Ważność kredytów', 'Darmowy pakiet', 'Opłata za wyniki nieznane', 'Deklarowana dokładność'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} jest sprzedawany w planach miesięcznych, od ${p(10000)} za 10 000 weryfikacji miesięcznie`
      : `${c.name} kosztuje ${p(10000)} przy 10 000, ${p(100000)} przy 100 000 i ${p(1000000)} przy milionie`,
    expiry: (c) => `W ${c.name} ${lc(c.creditsExpire)}`,
    free: (c) => `oferuje na start ${lc(c.freeTier)}`,
    intro: (A, B, pa, pb) => `Wybór między ${A} a ${B} zależy zwykle od tego, jak każde z tych narzędzi traktuje adresy, które sprawiają twojej liście najwięcej problemów. ${A} to ${pa.oneLiner} ${B} to ${pb.oneLiner} Poniżej pokazujemy, jak oba narzędzia naliczają opłaty, co robią z adresami catch-all i jaką dokładność deklarują. Pokazujemy też, jak na tej samej liście wypada Giggal.ai. To daje ci trzecią liczbę do porównania.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Jak ${A} i ${B} obsługują adresy catch-all`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} Domeny catch-all przyjmują pocztę na każdą nazwę. Zwykły test nie odróżni więc prawdziwej skrzynki od martwej. W tym miejscu lista zwykle traci dobre kontakty i nikt tego nie zauważa.`, label: 'Jak Giggal.ai obsługuje catch-all.' },
      { heading: `Ceny ${A} i ${B}`, prose: `${ps[0]}. ${ps[1]}. Obie wartości pochodzą bezpośrednio z cenników dostawców, więc porównaj je ze swoim miesięcznym wolumenem wysyłki.`, label: 'Jak rozlicza się Giggal.ai.' },
      { heading: 'Obsługa secure email gateway', prose: `W domenach dużych firm przed skrzynką często stoi bramka, taka jak Mimecast, Proofpoint albo Barracuda, i blokuje zwykły test. ${A} ${a.advertisesSegSupport ? 'deklaruje weryfikację za takimi bramkami' : 'nie obsługuje takich bramek'}, a ${B} ${segB(a, b, ['także', 'tak', 'nie', 'również nie'])}.`, label: 'Jak Giggal.ai obsługuje bramki.' },
      { heading: 'Kredyty, darmowe pakiety i ważność', prose: `${LANG.pl.expiry(a)}. ${A} ${LANG.pl.free(a)}. ${LANG.pl.expiry(b)}. ${B} ${LANG.pl.free(b)}.`, label: 'Jak Giggal.ai traktuje kredyty.' },
    ],
    edges: [
      'Giggal.ai rozstrzyga adresy catch-all i zwraca prawdziwy wynik, dostarczalny albo niedostarczalny, za stały 1 kredyt za adres.',
      'Giggal.ai publikuje stałą cenę za użycie: 9,90 USD przy 10 000, 76 USD przy 100 000 i 680 USD przy milionie, z kredytami, które nigdy nie wygasają.',
      'Giggal.ai rozpoznaje 15 konkretnych bramek bezpieczeństwa poczty (secure email gateway), w tym Mimecast, Proofpoint i Barracuda, i zwraca prawdziwy wynik dla adresów za nimi.',
      'Kredyty Giggal.ai nigdy nie wygasają, za wyniki nieznane nie płacisz, a każda lista startuje z 1000 darmowych kredytów bez karty.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Co wybrać: ${A} czy ${B}?`, a: `To zależy od twojej listy. ${A} jest dobrym wyborem dla ${pa.bestFor} ${B} jest dobrym wyborem dla ${pb.bestFor} Jeśli najważniejsze są rozstrzyganie adresów catch-all i obsługa secure email gateway, Giggal.ai robi jedno i drugie za 9,90 USD za 10 000.` },
      { q: `Jak ${A} i ${B} wypadają pod względem ceny?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai kosztuje 9,90 USD przy 10 000, 76 USD przy 100 000 i 680 USD przy milionie, z kredytami, które nigdy nie wygasają.` },
      { q: `Czy ${A} albo ${B} rozstrzygają adresy catch-all?`, a: `${LANG.pl.caResolve(a)}. ${LANG.pl.caResolve(b)}. Giggal.ai rozstrzyga catch-all i zwraca prawdziwy wynik, dostarczalny albo niedostarczalny, za stały 1 kredyt za adres. Weryfikuje też adresy za 15 bramkami secure email gateway.` },
      { q: `Czy jest lepsza opcja niż ${A} albo ${B}?`, a: 'Giggal.ai jest zbudowany do trudnych adresów, które oba narzędzia często pomijają. Rozstrzyga catch-all i zwraca prawdziwy wynik za stały 1 kredyt za adres. Weryfikuje adresy za 15 bramkami secure email gateway. Publikuje stałą cenę 9,90 USD za 10 000, z kredytami, które nigdy nie wygasają. Możesz sprawdzić listę za pomocą 1000 darmowych kredytów, bez karty.' },
      { q: 'Czy mogę przetestować Giggal.ai przed decyzją?', a: `Tak. Giggal.ai daje 1000 darmowych kredytów bez karty, także do masowego importu. Sprawdzisz tę samą listę, którą chcesz przetestować w ${A} lub ${B}, i porównasz wiersze catch-all.` },
    ],
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} zwraca wynik dla części adresów catch-all`
        : c.resolvesCatchAll
        ? `${c.name} zwraca wynik dla adresów catch-all`
        : `${c.name} oznacza catch-all bez potwierdzenia skrzynki`,
    desc: (A, B) => `Porównujesz ${A} i ${B}? Zobacz, jak oba weryfikatory wypadają pod względem ceny, catch-all i dokładności oraz gdzie plasuje się Giggal.ai.`,
    og: (A, B) => `${A} vs ${B} i miejsce Giggal.ai`,
    ui: {
      tableHeading: (A, B) => `${A}, ${B} i Giggal.ai: porównanie`,
      tableNote: 'Każda cena i każdy warunek w tabeli pochodzą z cenników dostawców. Gdy narzędzie nie sprzedaje pakietów według wolumenu, komórka pokazuje „Na zapytanie”, „Za użytkownika” albo cenę planu miesięcznego.',
      promoHeading: 'Dlaczego zespoły wybierają Giggal.ai zamiast obu narzędzi',
      promo: (A, B) => `${A} i ${B} zostawiają bez potwierdzenia sporą część adresów catch-all i adresów chronionych przez bramki. Giggal.ai zwraca dla nich prawdziwy wynik za stały 1 kredyt, weryfikuje adresy za 15 bramkami secure email gateway i publikuje stałą cenę 9,90 USD za 10 000, z kredytami, które nigdy nie wygasają.`,
      promoCta: 'Sprawdź 1000 adresów za darmo',
      related: 'Powiązane porównania',
      altSentence: ['Chcesz porównać jedno z nich bezpośrednio z Giggal.ai? Zobacz strony ', '', ' i ', '', ' albo '],
      altLabel: (n) => `alternatywa dla ${n}`,
      compareEvery: 'porównaj wszystkie weryfikatory (po angielsku)',
      allComparisons: 'Wszystkie porównania (po angielsku)',
    },
  },
  id: {
    rows: ['Kategori', 'Menyelesaikan catch-all', 'Biaya catch-all', 'Secure email gateway', 'Harga untuk 10.000', 'Harga untuk 100.000', 'Harga untuk 1.000.000', 'Masa berlaku kredit', 'Paket gratis', 'Menagih hasil tidak diketahui', 'Klaim akurasi'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name} dijual sebagai langganan bulanan, mulai ${p(10000)} untuk 10.000 pemeriksaan per bulan`
      : `${c.name} seharga ${p(10000)} untuk 10.000, ${p(100000)} untuk 100.000, dan ${p(1000000)} untuk satu juta`,
    expiry: (c) => `${c.name}: ${lc(c.creditsExpire)}`,
    free: (c) => `menyediakan paket gratis berupa ${lc(c.freeTier)}`,
    intro: (A, B, pa, pb) => `Pilihan antara ${A} dan ${B} terutama bergantung pada cara masing-masing menangani alamat yang benar-benar menimbulkan masalah di daftar Anda. ${A} adalah ${pa.oneLiner} ${B} adalah ${pb.oneLiner} Di bawah ini Anda melihat biaya keduanya, apa yang mereka lakukan pada alamat catch-all, dan akurasi yang mereka klaim. Kami juga menunjukkan posisi Giggal.ai pada daftar yang sama, agar Anda punya angka ketiga sebagai pembanding.`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `Cara ${A} dan ${B} menangani catch-all`, prose: `${A} ${pa.catchAllApproach} ${B} ${pb.catchAllApproach} Domain catch-all menerima email untuk nama apa pun. Di domain seperti itu, pemeriksaan biasa tidak bisa membedakan kotak masuk asli dari kotak masuk yang mati. Di sinilah sebuah daftar sering kehilangan kontak yang baik tanpa disadari.`, label: 'Cara Giggal.ai menangani catch-all.' },
      { heading: `Perbandingan harga ${A} dan ${B}`, prose: `${ps[0]}. ${ps[1]}. Kedua angka ini diambil langsung dari harga yang dipublikasikan setiap vendor. Bandingkan dengan jumlah email yang Anda kirim per bulan.`, label: 'Biaya di Giggal.ai.' },
      { heading: 'Dukungan untuk secure email gateway', prose: `Domain perusahaan besar sering memasang gateway seperti Mimecast, Proofpoint, atau Barracuda di depan kotak masuk. Gateway ini memblokir pemeriksaan biasa. ${A} ${a.advertisesSegSupport ? 'mengklaim bisa memverifikasi di balik gateway ini' : 'tidak mencakup gateway ini'}, dan ${B} ${segB(a, b, ['juga', 'mencakupnya', 'tidak', 'juga tidak'])}.`, label: 'Cara Giggal.ai menangani gateway.' },
      { heading: 'Kredit, paket gratis, dan masa berlaku', prose: `${LANG.id.expiry(a)}. ${A} ${LANG.id.free(a)}. ${LANG.id.expiry(b)}. ${B} ${LANG.id.free(b)}.`, label: 'Cara Giggal.ai menangani kredit.' },
    ],
    edges: [
      'Giggal.ai mengubah alamat catch-all menjadi hasil yang jelas, dapat dikirim atau tidak dapat dikirim, dengan biaya tetap 1 kredit per alamat email.',
      'Giggal.ai memublikasikan harga tetap sesuai pemakaian: US$9,90 untuk 10.000, US$76 untuk 100.000, dan US$680 untuk satu juta, dengan kredit yang tidak pernah kedaluwarsa.',
      'Giggal.ai mengenali 15 secure email gateway, termasuk Mimecast, Proofpoint, dan Barracuda, dan memberi hasil yang jelas untuk alamat di baliknya.',
      'Kredit Giggal.ai tidak pernah kedaluwarsa, hasil tidak diketahui tidak ditagih, dan setiap daftar dimulai dengan 1.000 kredit gratis, tanpa kartu kredit.',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `Mana yang sebaiknya saya pilih, ${A} atau ${B}?`, a: `Tergantung daftar Anda. ${A} cocok untuk ${pa.bestFor} ${B} cocok untuk ${pb.bestFor} Jika alamat catch-all dan secure email gateway paling penting bagi Anda, Giggal.ai menangani keduanya seharga US$9,90 per 10.000.` },
      { q: `Bagaimana perbandingan harga ${A} dan ${B}?`, a: `${ps[0]}. ${ps[1]}. Giggal.ai seharga US$9,90 untuk 10.000, US$76 untuk 100.000, dan US$680 untuk satu juta, dengan kredit yang tidak pernah kedaluwarsa.` },
      { q: `Apakah ${A} atau ${B} menyelesaikan alamat catch-all?`, a: `${LANG.id.caResolve(a)}. ${LANG.id.caResolve(b)}. Giggal.ai mengubah catch-all menjadi hasil yang jelas, dapat dikirim atau tidak dapat dikirim, dengan biaya tetap 1 kredit per alamat email. Giggal.ai juga memverifikasi di balik 15 secure email gateway.` },
      { q: `Apakah ada pilihan yang lebih baik daripada ${A} atau ${B}?`, a: 'Giggal.ai dibuat untuk alamat sulit yang sering tidak diselesaikan oleh keduanya. Giggal.ai mengubah catch-all menjadi hasil yang jelas dengan biaya tetap 1 kredit per alamat email, memverifikasi di balik 15 secure email gateway, dan memublikasikan harga tetap US$9,90 per 10.000, dengan kredit yang tidak pernah kedaluwarsa. Anda bisa mengetes sebuah daftar dengan 1.000 kredit gratis, tanpa kartu kredit.' },
      { q: 'Bisakah saya mencoba Giggal.ai sebelum memilih?', a: `Bisa. Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit, yang bisa dipakai untuk unggahan massal. Cek daftar yang sama yang akan Anda tes dengan ${A} atau ${B}, lalu bandingkan baris catch-all-nya.` },
    ],
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name} memberi hasil untuk sebagian alamat catch-all`
        : c.resolvesCatchAll
        ? `${c.name} memberi hasil untuk alamat catch-all`
        : `${c.name} menandai catch-all tanpa memastikan kotak masuknya`,
    desc: (A, B) => `Ragu memilih antara ${A} dan ${B}? Lihat perbandingan kedua alat verifikasi ini dari sisi harga, catch-all, dan akurasi, serta posisi Giggal.ai.`,
    og: (A, B) => `${A} vs ${B}, dan posisi Giggal.ai`,
    ui: {
      tableHeading: (A, B) => `Perbandingan ${A}, ${B}, dan Giggal.ai`,
      tableNote: 'Setiap harga dan syarat di sini berasal dari harga yang dipublikasikan vendor. Jika sebuah alat tidak dijual per volume, sel menampilkan keterangan dari vendor atau harga paket bulanan.',
      promoHeading: 'Kenapa tim memilih Giggal.ai, bukan salah satu dari keduanya',
      promo: (A, B) => `${A} dan ${B} sama-sama membiarkan banyak alamat catch-all dan alamat di balik gateway tanpa kepastian. Giggal.ai memberi hasil yang jelas untuk alamat ini dengan biaya tetap 1 kredit, memverifikasi di balik 15 secure email gateway, dan memublikasikan harga tetap US$9,90 per 10.000, dengan kredit yang tidak pernah kedaluwarsa.`,
      promoCta: 'Cek 1.000 alamat email secara gratis',
      related: 'Perbandingan terkait',
      altSentence: ['Ingin perbandingan langsung dengan Giggal.ai? Lihat halaman ', '', ' dan ', '', ', atau '],
      altLabel: (n) => `Alternatif ${n}`,
      compareEvery: 'bandingkan semua alat verifikasi (dalam bahasa Inggris)',
      allComparisons: 'Semua perbandingan (dalam bahasa Inggris)',
    },
  },
  // Japanese word order: the brand comes first with は, and each profile
  // phrase is a full clause. oneLiner and catchAllApproach end in 。;
  // bestFor is a noun phrase that the template closes with に向いています。
  ja: {
    rows: ['カテゴリ', 'キャッチオールドメインの結果', 'キャッチオールドメインの料金', 'セキュアメールゲートウェイ', '10,000件の料金', '100,000件の料金', '1,000,000件の料金', 'クレジットの有効期限', '無料枠', '不明の結果への課金', '正確性の主張'],
    priceSentence: (c, p) => c.pricingModel === 'subscription'
      ? `${c.name}は月額プランで販売されており、月10,000件のチェックで${p(10000)}からです`
      : `${c.name}の料金は、10,000件で${p(10000)}、100,000件で${p(100000)}、100万件で${p(1000000)}です`,
    expiry: (c) => `${c.name}の場合、${c.creditsExpire}`,
    free: (c) => `${c.name}の無料枠は${c.freeTier}です`,
    intro: (A, B, pa, pb) => `${A}と${B}のどちらを選ぶかは、主に、リストで実際に問題になるアドレスをそれぞれがどう扱うかで決まります。${A}は、${pa.oneLiner}${B}は、${pb.oneLiner}以下では、両者の料金、キャッチオールドメインのアドレスへの対応、主張している正確性を比べます。同じリストでのGiggal.aiの位置づけも示すので、3つ目の数値として比べられます。`,
    sections: (A, B, a, b, pa, pb, ps) => [
      { heading: `${A}と${B}のキャッチオールドメインへの対応`, prose: `${A}は、${pa.catchAllApproach}${B}は、${pb.catchAllApproach}キャッチオールドメインは、どの名前宛てのメールも受け付けます。そのため通常のチェックでは、実在するメールボックスと使われていないメールボックスを区別できません。ここで、リストから良い連絡先が気づかれないまま失われることがよくあります。`, label: 'Giggal.aiのキャッチオールドメインへの対応：' },
      { heading: `${A}と${B}の料金比較`, prose: `${ps[0]}。${ps[1]}。どちらの数値も、各ベンダーが公開している料金からそのまま取っています。毎月の送信件数と比べてください。`, label: 'Giggal.aiの料金：' },
      { heading: 'セキュアメールゲートウェイ（SEG）への対応', prose: `大企業のドメインでは、Mimecast、Proofpoint、Barracudaなどのゲートウェイが、メールボックスの前に置かれていることがよくあります。こうしたゲートウェイは通常のチェックをブロックします。${A}は${a.advertisesSegSupport ? 'こうしたゲートウェイの背後でも検証できると主張しています' : 'こうしたゲートウェイに対応していません'}。${B}${segB(a, b, ['も同様に対応を主張しています', 'は対応を主張しています', 'は対応していません', 'も対応していません'])}。`, label: 'Giggal.aiのゲートウェイへの対応：' },
      { heading: 'クレジット、無料枠、有効期限', prose: `${LANG.ja.expiry(a)}。${LANG.ja.free(a)}。${LANG.ja.expiry(b)}。${LANG.ja.free(b)}。`, label: 'Giggal.aiのクレジットの扱い：' },
    ],
    edges: [
      'Giggal.aiは、キャッチオールドメインのアドレスに配信可能か配信不可かのはっきりした結果を返します。料金はメールアドレス1件あたり1クレジットで一定です。',
      'Giggal.aiは、従量課金の固定料金を公開しています。10,000件でUS$9.90、100,000件でUS$76、100万件でUS$680で、クレジットに有効期限はありません。',
      'Giggal.aiは、Mimecast、Proofpoint、Barracudaを含む15のセキュアメールゲートウェイを識別し、その背後のアドレスにはっきりした結果を返します。',
      'Giggal.aiのクレジットに有効期限はなく、不明の結果には課金しません。どのリストも、無料クレジット1,000件で始められます。クレジットカードは不要です。',
    ],
    faqs: (A, B, a, b, pa, pb, ps) => [
      { q: `${A}と${B}のどちらを選ぶべきですか？`, a: `リストによって違います。${A}は、${pa.bestFor}に向いています。${B}は、${pb.bestFor}に向いています。キャッチオールドメインのアドレスの判定と、セキュアメールゲートウェイへの対応がもっとも重要なら、Giggal.aiは10,000件US$9.90で両方に対応します。` },
      { q: `${A}と${B}の料金はどのくらい違いますか？`, a: `${ps[0]}。${ps[1]}。Giggal.aiは10,000件でUS$9.90、100,000件でUS$76、100万件でUS$680で、クレジットに有効期限はありません。` },
      { q: `${A}や${B}は、キャッチオールドメインのアドレスに結果を出せますか？`, a: `${LANG.ja.caResolve(a)}。${LANG.ja.caResolve(b)}。Giggal.aiは、キャッチオールドメインのアドレスに配信可能か配信不可かのはっきりした結果を返します。料金はメールアドレス1件あたり1クレジットで一定です。15のセキュアメールゲートウェイの背後のアドレスも検証します。` },
      { q: `${A}や${B}より良い選択肢はありますか？`, a: 'Giggal.aiは、両者が結果を出せないことの多い難しいアドレスのために作られています。キャッチオールドメインのアドレスにメールアドレス1件あたり1クレジットの一定料金ではっきりした結果を返し、15のセキュアメールゲートウェイの背後のアドレスも検証します。10,000件US$9.90の固定料金を公開しており、クレジットに有効期限はありません。無料クレジット1,000件でリストを試せます。クレジットカードは不要です。' },
      { q: '選ぶ前にGiggal.aiを試せますか？', a: `はい。Giggal.aiでは、一括アップロードにも使える無料クレジット1,000件を、クレジットカードなしで受け取れます。${A}や${B}で試すのと同じリストをチェックし、キャッチオールドメインの行を比べてください。` },
    ],
    caResolve: (c) =>
      c.resolvesCatchAll === 'partial'
        ? `${c.name}は、キャッチオールドメインのアドレスの一部に結果を返します`
        : c.resolvesCatchAll
        ? `${c.name}は、キャッチオールドメインのアドレスに結果を返します`
        : `${c.name}は、キャッチオールドメインのアドレスにラベルを付けるだけで、メールボックスを確認しません`,
    desc: (A, B) => `${A}と${B}で迷っていますか？　料金、キャッチオールドメインへの対応、正確性で2つの検証ツールを比べ、Giggal.aiの位置づけも示します。`,
    og: (A, B) => `${A} vs ${B}とGiggal.aiの位置づけ`,
    ui: {
      tableHeading: (A, B) => `${A}、${B}、Giggal.aiの比較`,
      tableNote: 'ここにある料金と条件は、すべてベンダーが公開している料金によるものです。件数ごとに販売していないツールでは、ベンダーの記載か月額プランの料金を表示しています。',
      promoHeading: 'チームが両者ではなくGiggal.aiを選ぶ理由',
      promo: (A, B) => `${A}も${B}も、キャッチオールドメインのアドレスとゲートウェイの背後のアドレスの多くを、確認できないまま残します。Giggal.aiは、こうしたアドレスに1クレジットの一定料金ではっきりした結果を返し、15のセキュアメールゲートウェイの背後のアドレスも検証します。10,000件US$9.90の固定料金を公開しており、クレジットに有効期限はありません。`,
      promoCta: 'メールアドレス1,000件を無料でチェック',
      related: '関連する比較',
      altSentence: ['関連ページ：', '', '、', '', '、'],
      altLabel: (n) => `${n}の代替ツール`,
      compareEvery: 'すべての検証ツールの比較（英語）',
      allComparisons: 'すべての比較（英語）',
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
  const bo = (yes: boolean | 'partial' | null): CmpValue => ({ kind: 'bool', yes })
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
