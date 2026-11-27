// nl words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

const GIGGAL_PAYG = 'De cijfers van Giggal.ai zijn eenmalige prijzen voor betalen per gebruik.'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Geen gratis credits',
    creditsExpire: 'Ongebruikte maandcredits schuiven door, tot twee keer het maandtegoed',
    catchAllCreditCost: '0,25 credit per eenduidig resultaat; een onbekend resultaat is gratis',
    claimedAccuracy: 'Claimt 99,5% voor validatie',
    pricingBasisNote: `LeadMagic is een maandabonnement met één pool van credits: Essential US$ 99 (5.000 credits), Growth US$ 249 (20.000), Professional US$ 499 (50.000), Ultimate US$ 849 (100.000). Een eenduidige validatie kost 0,25 credit en een onbekend resultaat is gratis. De cijfers hierboven zijn het kleinste maandplan dat zoveel validaties dekt. Bij jaarbetaling krijg je twee maanden gratis. ${GIGGAL_PAYG}`,
    betterFitFor: [
      'Veel verrijkingsdata naast verificatie: mobiele nummers, bedrijfsgegevens, functiewisselingen en advertentiedata',
      'Publiceert eigen benchmarkdata over catch-all-adressen, wat de meeste leveranciers niet doen',
      'Teams die e-mailadressen willen vinden, verrijken en verifiëren met één abonnement',
      'Een API voor ontwikkelaars met creditprijzen per endpoint',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: 'Proefperiode van 7 dagen met 100 credits; je kaart wordt gecontroleerd, maar er wordt niets afgeschreven',
    creditsExpire: 'Credits schuiven zonder limiet door zolang het abonnement loopt, en verlopen aan het eind van de factuurperiode als je opzegt',
    catchAllCreditCost: '0,2 credit per controle, net als elke andere verificatie',
    claimedAccuracy: 'Claimt 98,9% nauwkeurigheid bij 86,4% dekking',
    pricingBasisNote: `Anymail Finder is een maandabonnement met creditstaffels van 400 credits voor US$ 29 per maand tot 100.000 credits voor US$ 799. Het controleren van een e-mailadres dat je ergens anders hebt gevonden, kost 0,2 credit per controle. De cijfers hierboven zijn de kleinste maandplannen die zoveel controles dekken. Bij jaarbetaling bespaar je 33%. Een miljoen controles per maand ligt boven de hoogste maandstaffel. ${GIGGAL_PAYG}`,
    betterFitFor: [
      'E-mailadressen vinden op basis van een naam en een domein, wat Giggal.ai niet doet',
      'Een bezorggarantie van 97% of meer, volgens Anymail Finder',
      'Credits die zonder limiet doorschuiven zolang je abonnement loopt',
      'Een merk dat al lang bestaat, met veel gepubliceerde content',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '10 credits bij registratie, zonder creditcard',
    creditsExpire: 'Ongebruikte credits schuiven door, tot twee keer het maandtegoed',
    catchAllCreditCost: '1 credit, net als elke andere verificatie',
    claimedAccuracy: 'Garandeert een bouncepercentage onder 5%, en betaalt credits terug als het hoger is',
    pricingBasisNote: `Findymail verkoopt plannen op basis van gebruik van US$ 99 tot US$ 999 per maand, zonder vermeld aantal credits. Daarnaast is er één plan met credits: Starter voor US$ 99 per maand met 5.000 finder-credits en 5.000 verifier-credits. Alles daarboven valt onder Enterprise, met een prijs op aanvraag. Er is dus geen gepubliceerde prijs voor 10.000, 100.000 of een miljoen verificaties per maand. ${GIGGAL_PAYG}`,
    betterFitFor: [
      'E-mailadressen vinden, wat Giggal.ai helemaal niet doet',
      'Een garantie op het bouncepercentage, met terugbetaalde credits',
      'Een Chrome-extensie die e-mailadressen vindt en controleert op LinkedIn en in Sales Navigator',
      'SOC 2 Type 2 en hosting in de EU',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Gratis start, hoeveelheid niet gepubliceerd',
    creditsExpire: 'Niet gepubliceerd',
    catchAllCreditCost: 'Aparte catch-all-credits: 5.000 per maand in het plan van US$ 99',
    pricingBasisNote: `Listmint is een maandabonnement met twee pools van credits. Starter kost US$ 99 per maand voor 20.000 standaardcredits en 5.000 catch-all-credits. Agency kost US$ 187 per maand voor 50.000 standaardcredits en 10.000 catch-all-credits. Grotere volumes vallen onder Enterprise, met een prijs op aanvraag. ${GIGGAL_PAYG}`,
    betterFitFor: [
      'Een catch-all-controle die Listmint naar eigen zeggen met de hand uitvoert',
      'Catch-all-verificatie in realtime',
      'Een groot maandtegoed aan standaardcredits in het instapplan',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: 'Proefperiode van 14 dagen voor maximaal 1.000 adressen',
    creditsExpire: 'Het tegoed van het plan geldt per maand; de proefperiode verloopt na 14 dagen',
    catchAllCreditCost: '1 contact uit het tegoed van het plan',
    claimedAccuracy: 'Claimt 99%',
    pricingBasisNote: `Allegrow is een maandabonnement. Starter kost US$ 99 per maand voor 5.000 contacten, en extra credits kosten US$ 8 per 1.000. 10.000 per maand komt daarmee op US$ 139. Dat is onze berekening op basis van de gepubliceerde tarieven, geen plan dat Allegrow vermeldt. De rijen voor 100.000 en 1.000.000 zijn Scale Plus Unlimited voor US$ 1.340 per maand bij jaarlijkse facturering, met onbeperkte verificatie. ${GIGGAL_PAYG}`,
    betterFitFor: [
      'Een plan met onbeperkte verificatie, iets wat Giggal.ai niet heeft',
      'Scores voor afzenderreputatie en monitoring van inbox placement naast verificatie',
      'Native integraties met HubSpot, Outreach en Salesloft, met SSO en SOC 2-rapporten',
      'Een gepubliceerd onderzoek naar fout-positieve resultaten bij verzonnen adressen',
    ],
    estimateNote: 'Onze berekening op basis van de gepubliceerde tarieven van Allegrow, geen plan dat Allegrow vermeldt.',
    notes: { unlimited: 'onbeperkt' },
  },
  no2bounce: {
    freeTier: '100 credits zonder creditcard, die nooit verlopen',
    creditsExpire: 'Credits verlopen nooit, zonder maandelijkse gebruikslimiet',
    catchAllCreditCost: '1 credit per e-mailadres, net als bij de standaardcontrole',
    claimedAccuracy: 'Claimt 99,6%',
    betterFitFor: [
      'Veel prijsstaffels, van 10.000 credits tot 50 miljoen',
      'Credits die nooit verlopen, net als bij Giggal.ai',
      'Maand- en jaarabonnementen met 15% en 20% korting ten opzichte van betalen per gebruik',
      'Een e-mailfinder en een zoekfunctie per domein met dezelfde credits',
    ],
  },
  quickemailverification: {
    freeTier: '100 credits per dag, gratis',
    creditsExpire: 'Blijvende credits voor betalen per gebruik verlopen nooit',
    catchAllCreditCost: 'Gemeld met de status catch-all, niet bevestigd',
    claimedAccuracy: 'Claimt 99%',
    betterFitFor: [
      'Elke dag 100 gratis credits, plus een gratis maandtegoed',
      'Blijvende credits voor betalen per gebruik die nooit verlopen',
      'Een lage instapprijs vanaf US$ 4 voor 500 credits',
      'Een gevestigde realtime API',
    ],
  },
  myemailverifier: {
    freeTier: '100 credits per dag, gratis',
    creditsExpire: 'Credits verlopen nooit',
    catchAllCreditCost: 'Gemeld met de status catch-all, niet bevestigd',
    betterFitFor: [
      'Een zeer laag basistarief van US$ 0,0025 per verificatie',
      '100 gratis credits per dag, die elke dag terugkomen in plaats van na een proefperiode te stoppen',
      'Credits die nooit verlopen, met acties voor bonuscredits bij grote volumes',
      'Veel goede openbare reviews op G2, Capterra en Trustpilot',
    ],
  },
  scrubby: {
    freeTier: '200 credits',
    creditsExpire: 'Credits voor betalen per gebruik verlopen nooit; credits van een plan schuiven door',
    catchAllCreditCost: '1 credit bij Quick Verification; Deep Verification kost 3 credits en duurt tot 72 uur',
    claimedAccuracy: 'Niet gepubliceerd op de prijspagina',
    betterFitFor: [
      'Een Deep Verification die echte e-mails stuurt naar adressen die moeilijk te controleren zijn',
      'Een gratis tegoed van 200 credits zonder creditcard',
      'Betalen per gebruik en maandplannen, met credits van een plan die doorschuiven',
      'Eén gerichte taak in plaats van een breed pakket tools',
    ],
    notes: { 'Quote only': 'Alleen op aanvraag' },
  },
  mailfloss: {
    freeTier: '500 verificaties per maand, plus een proefperiode van 7 dagen bij abonnementen',
    creditsExpire: 'Vooraf betaalde credits verlopen nooit; abonnementscredits worden elke maand gereset',
    catchAllCreditCost: 'Gemarkeerd, niet opgelost',
    betterFitFor: [
      'Automatische dagelijkse opschoning, direct gekoppeld aan je e-mailplatform',
      '41 native integraties, waaronder Mailchimp, Klaviyo en HubSpot',
      'Een abonnement dat na de installatie vanzelf loopt, in plaats van handmatige uploads',
      'Keuze uit een abonnement of vooraf betaalde credits',
    ],
  },
  bounceless: {
    freeTier: '1.000 credits per maand met een zakelijk e-mailadres, zonder creditcard',
    creditsExpire: 'Credits uit pakketten of abonnementen verlopen nooit',
    catchAllCreditCost: 'Gegevens over catch-all zitten in de controle van 1 credit',
    betterFitFor: [
      'Een gratis tegoed van 1.000 credits per maand met een zakelijk e-mailadres',
      'Eenmalige pakketten en maandabonnementen, met credits die nooit verlopen',
      'Extra tools in één account: status van de afzender, inbox placement en controle van aanmeldformulieren',
      'Een lage prijs bij zeer grote volumes, US$ 579 voor een miljoen',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: de belangrijkste feiten`,
  factRows: { price10k: '10.000 controles', free: 'Gratis credits', expiry: 'Geldigheid van credits', catchAll: 'Catch-all' },
  perMonth: ' per maand',
  notPublished: 'Niet gepubliceerd',
}
