// it words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Nessun credito gratis',
    creditsExpire: 'I crediti mensili non usati passano al mese successivo, fino al doppio della quota mensile',
    catchAllCreditCost: '0,25 crediti per risultato definitivo; un risultato sconosciuto è gratis',
    claimedAccuracy: 'Dichiara 99,5% per la validazione',
    pricingBasisNote:
      'LeadMagic è un abbonamento mensile con un unico pacchetto di crediti: Essential 99 $ (5.000 crediti), Growth 249 $ (20.000), Professional 499 $ (50.000), Ultimate 849 $ (100.000). Una validazione con risultato definitivo costa 0,25 crediti, e un risultato sconosciuto è gratis. I valori sopra sono il piano mensile più piccolo che copre quel numero di validazioni. Con la fatturazione annuale due mesi sono gratis. I valori di Giggal.ai sono prezzi a consumo, pagati una volta.',
    betterFitFor: [
      'Molti dati di arricchimento oltre alla verifica: numeri di cellulare, dati aziendali, cambi di lavoro e dati sulle inserzioni pubblicitarie',
      'Pubblica i propri dati di test sugli indirizzi catch-all, cosa che la maggior parte dei fornitori non fa',
      'Team che vogliono ricerca, arricchimento e verifica in un solo abbonamento',
      'Una API pensata per gli sviluppatori, con prezzi in crediti per ogni endpoint',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: 'Prova di 7 giorni con 100 crediti; la carta viene controllata, non addebitata',
    creditsExpire: "I crediti passano al mese successivo senza limite finché l'abbonamento è attivo, e scadono alla fine del periodo di fatturazione se annulli",
    catchAllCreditCost: '0,2 crediti per verifica, come qualsiasi altra verifica',
    claimedAccuracy: "Dichiara il 98,9% di precisione con l'86,4% di copertura",
    pricingBasisNote:
      "Anymail Finder è un abbonamento mensile, con fasce di crediti da 400 crediti a 29 $ al mese fino a 100.000 crediti a 799 $. Verificare un'email trovata altrove costa 0,2 crediti per verifica. I valori sopra sono i piani mensili più piccoli che coprono quel numero di verifiche. Con la fatturazione annuale risparmi il 33%. Un milione di verifiche al mese supera la fascia mensile più alta. I valori di Giggal.ai sono prezzi a consumo, pagati una volta.",
    betterFitFor: [
      'Trovare indirizzi email partendo da nome e dominio, cosa che Giggal.ai non fa',
      'Una garanzia di consegna dichiarata del 97% o più',
      'Crediti che passano al mese successivo senza limite finché resti abbonato',
      'Un marchio presente da molti anni, con molti contenuti pubblicati',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '10 crediti alla registrazione, senza carta',
    creditsExpire: 'I crediti non usati passano al mese successivo, fino al doppio della quota mensile',
    catchAllCreditCost: '1 credito, come qualsiasi altra verifica',
    claimedAccuracy: 'Garantisce un tasso di rimbalzo sotto il 5%, con i crediti rimborsati sopra quella soglia',
    pricingBasisNote:
      "Findymail vende piani basati sull'utilizzo da 99 $ a 999 $ al mese, che non indicano un numero di crediti. Ha poi un piano a crediti: Starter a 99 $ al mese con 5.000 crediti finder e 5.000 crediti verifier. Tutto ciò che va oltre è Enterprise, con prezzo su richiesta. Per questo non c'è un prezzo pubblicato per 10.000, 100.000 o un milione di verifiche al mese. I valori di Giggal.ai sono prezzi a consumo, pagati una volta.",
    betterFitFor: [
      'La ricerca degli indirizzi email, che Giggal.ai non offre affatto',
      'Una garanzia sul tasso di rimbalzo, con il rimborso dei crediti',
      "Un'estensione per Chrome che trova e verifica le email su LinkedIn e Sales Navigator",
      "SOC 2 Type 2 e hosting nell'UE",
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Avvio gratuito, quantità non pubblicata',
    creditsExpire: 'Non pubblicato',
    catchAllCreditCost: 'Crediti catch-all separati: 5.000 al mese nel piano da 99 $',
    pricingBasisNote:
      'Listmint è un abbonamento mensile con due pacchetti di crediti. Starter costa 99 $ al mese per 20.000 crediti standard e 5.000 crediti catch-all. Agency costa 187 $ al mese per 50.000 crediti standard e 10.000 crediti catch-all. I volumi più grandi sono Enterprise, con prezzo su richiesta. I valori di Giggal.ai sono prezzi a consumo, pagati una volta.',
    betterFitFor: [
      'Una verifica catch-all che Listmint dice di fare a mano',
      'Verifica catch-all in tempo reale',
      'Una grande quota mensile di crediti standard nel piano base',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: 'Prova di 14 giorni per un massimo di 1.000 indirizzi',
    creditsExpire: 'La quota del piano è mensile; la prova scade dopo 14 giorni',
    catchAllCreditCost: '1 contatto dalla quota del piano',
    claimedAccuracy: 'Dichiara 99%',
    pricingBasisNote:
      'Allegrow è un abbonamento mensile. Starter costa 99 $ al mese per 5.000 contatti, con crediti aggiuntivi a 8 $ ogni 1.000. 10.000 al mese costano quindi 139 $. È un nostro calcolo sui prezzi pubblicati, non un piano che Allegrow offre. Le righe da 100.000 e 1.000.000 sono Scale Plus Unlimited a 1340 $ al mese con fatturazione annuale, cioè verifica illimitata. I valori di Giggal.ai sono prezzi a consumo, pagati una volta.',
    betterFitFor: [
      'Un piano con verifica illimitata, che Giggal.ai non ha',
      'Punteggio della reputazione del mittente e monitoraggio del posizionamento in inbox, oltre alla verifica',
      'Integrazioni native con HubSpot, Outreach e Salesloft, con SSO e report SOC 2',
      'Uno studio pubblicato sui falsi positivi con indirizzi inventati',
    ],
    estimateNote: 'Un nostro calcolo sui prezzi pubblicati da Allegrow, non un piano che Allegrow offre.',
    notes: { unlimited: 'illimitato' },
  },
  no2bounce: {
    freeTier: '100 crediti senza carta, che non scadono mai',
    creditsExpire: 'I crediti non scadono mai, senza limite di utilizzo mensile',
    catchAllCreditCost: '1 credito per email, come la verifica standard',
    claimedAccuracy: 'Dichiara 99,6%',
    betterFitFor: [
      'Molte fasce di prezzo, da 10.000 crediti fino a 50 milioni',
      'Crediti che non scadono mai, come su Giggal.ai',
      'Piani mensili e annuali con il 15% e il 20% in meno rispetto ai prezzi a consumo',
      'Un email finder e una ricerca per dominio con gli stessi crediti',
    ],
  },
  quickemailverification: {
    freeTier: '100 crediti al giorno, gratis',
    creditsExpire: 'I crediti permanenti a consumo non scadono mai',
    catchAllCreditCost: 'Restituito come stato catch-all, non confermato',
    claimedAccuracy: 'Dichiara 99%',
    betterFitFor: [
      '100 crediti gratis ogni giorno, più una quota gratuita mensile',
      'Crediti permanenti a consumo che non scadono mai',
      'Un prezzo di ingresso basso, da 4 $ per 500 crediti',
      'Una API in tempo reale presente da anni',
    ],
  },
  myemailverifier: {
    freeTier: '100 crediti al giorno, gratis',
    creditsExpire: 'I crediti non scadono mai',
    catchAllCreditCost: 'Restituito come stato catch-all, non confermato',
    betterFitFor: [
      'Un prezzo base molto basso, 0,0025 $ per verifica',
      '100 crediti gratis al giorno, che si rinnovano invece di finire dopo una prova',
      'Crediti che non scadono mai, con promozioni di crediti bonus per grandi volumi',
      'Molte recensioni pubbliche su G2, Capterra e Trustpilot',
    ],
  },
  scrubby: {
    freeTier: '200 crediti',
    creditsExpire: 'I crediti a consumo non scadono mai; i crediti dei piani passano al mese successivo',
    catchAllCreditCost: '1 credito con Quick Verification; Deep Verification costa 3 crediti e richiede fino a 72 ore',
    claimedAccuracy: 'Non pubblicato nella sua pagina prezzi',
    betterFitFor: [
      'Una Deep Verification che invia email reali agli indirizzi difficili da verificare',
      'Una quota gratuita di 200 crediti, senza carta',
      'Piani a consumo e mensili, con crediti dei piani che passano al mese successivo',
      'Un solo compito ben definito invece di una suite ampia',
    ],
    notes: { 'Quote only': 'Solo su richiesta' },
  },
  mailfloss: {
    freeTier: '500 verifiche al mese, più una prova di 7 giorni sugli abbonamenti',
    creditsExpire: 'I crediti prepagati non scadono mai; i crediti degli abbonamenti si azzerano ogni mese',
    catchAllCreditCost: 'Segnalato, non risolto',
    betterFitFor: [
      'Pulizia automatica ogni giorno, collegata direttamente alla tua piattaforma email',
      '41 integrazioni native, tra cui Mailchimp, Klaviyo e HubSpot',
      'Un abbonamento che funziona da solo dopo la configurazione, invece dei caricamenti manuali',
      'Sia abbonamenti sia crediti prepagati',
    ],
  },
  bounceless: {
    freeTier: '1.000 crediti al mese con un indirizzo email aziendale, senza carta',
    creditsExpire: 'I crediti di pacchetti o abbonamenti non scadono mai',
    catchAllCreditCost: 'Le indicazioni sui catch-all sono incluse nella verifica da 1 credito',
    betterFitFor: [
      'Una quota gratuita di 1.000 crediti ogni mese con un indirizzo email aziendale',
      'Pacchetti una tantum e abbonamenti mensili, con crediti che non scadono mai',
      'Altri strumenti nello stesso account: stato del mittente, posizionamento in inbox e controllo dei moduli di iscrizione',
      'Un prezzo basso a volumi molto alti, 579 $ per un milione',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: i dati principali`,
  factRows: { price10k: '10.000 verifiche', free: 'Crediti gratis', expiry: 'Scadenza dei crediti', catchAll: 'Catch-all' },
  perMonth: ' al mese',
  notPublished: 'Non pubblicato',
}
