import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Terugbetalingsbeleid voor e-mailverificatiecredits',
  description: 'Wanneer Giggal.ai credits terugbetaalt: testcredits, losse aankopen, abonnementen, uitzonderingen en termijnen. Bij verschillen geldt de Engelse versie.',
  alternates: { canonical: '/nl/terugbetalingen', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'nl_NL', title: 'Terugbetalingsbeleid', url: 'https://giggal.ai/nl/terugbetalingen', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Samenvatting', paragraphs: [
    'Bij Giggal.ai streven we naar een uitstekende dienst voor e-mailverificatie. Dit terugbetalingsbeleid beschrijft in welke gevallen we geld kunnen terugbetalen voor onze dienst met credits.',
    'We leveren alleen digitale diensten voor e-mailverificatie. We verkopen en verzenden geen fysieke producten.',
  ]},
  { heading: '2. Zo werkt ons creditsysteem', paragraphs: ['Giggal.ai werkt voor e-mailverificatie met een systeem van credits:'], list: [
    '1 credit = 1 e-mailvalidatie: elke verificatie van een e-mailadres kost 1 credit van je account',
    'Betalen per gebruik: je koopt op elk moment credits in bulk (pakketten van 3.000 tot 1.000.000 credits)',
    'Terugkerende credits: je neemt een abonnement op maandelijkse creditpakketten met 10% korting',
    'Geen vervaldatum: credits verlopen nooit en blijven op je account tot je ze gebruikt',
  ]},
  { heading: '3. Gratis testcredits', paragraphs: ['Nieuwe gebruikers krijgen 1.000 gratis testcredits om onze dienst voor e-mailverificatie te testen. Let op:'], list: [
    'Testcredits zijn gratis en je hoeft niets te betalen',
    'Testcredits worden niet terugbetaald, omdat ze een geschenk zijn',
    'Voor testcredits gelden dezelfde validatieregels als voor betaalde credits',
    'Met testcredits kun je 1.000 e-mailadressen controleren',
  ]},
  { heading: '4. Terugbetaling van gekochte credits' },
  { heading: '4.1 Credits per gebruik (losse aankoop)', level: 3, paragraphs: ['Credits die je koopt via pakketten per gebruik, worden na de aankoop in principe niet terugbetaald. De redenen:'], list: [
    'Credits worden direct aan je account toegevoegd en zijn meteen te gebruiken',
    'Credits verlopen niet en houden hun waarde onbeperkt',
    'Je kunt ze op elk moment gebruiken',
  ]},
  { heading: '4.2 Abonnementen met terugkerende credits', level: 3, paragraphs: ['Voor maandelijkse abonnementen op credits geldt:'], list: [
    'Credits worden elke maand gefactureerd en aan je account toegevoegd',
    'Je kunt je abonnement op elk moment opzeggen vóór de volgende factuurperiode',
    'Credits die al aan je account zijn toegevoegd, worden niet terugbetaald',
    'De opzegging gaat in aan het einde van je lopende factuurperiode',
    'Ongebruikte credits uit eerdere maanden blijven na de opzegging op je account',
  ]},
  { heading: '5. Uitzonderlijke omstandigheden en support', paragraphs: ['Onze standaardregel is dat credits niet worden terugbetaald. We begrijpen wel dat er ongewone situaties kunnen ontstaan. Bijvoorbeeld bij:'], list: [
    'Technische fouten waardoor credits onjuist zijn afgeschreven',
    'Storingen in de dienst waardoor e-mailvalidatie niet mogelijk is',
    'Dubbele afschrijvingen of factuurfouten',
    'Ongebruikelijke activiteit op het account of een vermoeden van fraude',
    'Andere uitzonderlijke omstandigheden',
  ], after: ['Neem dan direct contact op met ons supportteam via info@giggal.ai. We bekijken je geval grondig en kunnen per geval en naar eigen inzicht geld terugbetalen of credits corrigeren.']},
  { heading: '6. Problemen met de kwaliteit van de dienst', paragraphs: ['Als technische problemen of storingen de e-mailverificatie verhinderen, geldt het volgende:'], list: [
    'Er worden geen credits afgeschreven voor validaties die mislukken door fouten in ons systeem',
    'Meld elk probleem met validatie direct bij ons supportteam',
    'We kunnen bij storingen compensatiecredits aan je account toevoegen',
    'Langere storingen kunnen naar ons inzicht recht geven op een gedeeltelijke terugbetaling',
  ]},
  { heading: '7. Beëindiging van het account en overtredingen', paragraphs: ['Als je account wordt beëindigd omdat je onze Gebruiksvoorwaarden of ons beleid voor aanvaardbaar gebruik hebt overtreden:'], list: [
    'Worden ongebruikte credits niet terugbetaald',
    'Wordt de toegang tot je account en de resterende credits definitief ingetrokken',
    'Worden terugkerende abonnementen direct opgezegd',
  ]},
  { heading: '8. Een terugbetaling aanvragen of een probleem melden', paragraphs: [
    'Wil je een terugbetaling aanvragen of ongebruikelijke activiteit melden? Neem dan contact op met ons supportteam.',
    'E-mail: info@giggal.ai',
    'Onderwerp: Refund Request / Issue Report',
    'Vermeld deze gegevens in je aanvraag:',
  ], list: [
    'Het e-mailadres van je account',
    'Het ID van de transactie of het bestelnummer',
    'Een gedetailleerde beschrijving van het probleem of de ongebruikelijke activiteit',
    'De datum en de tijd van het incident (indien van toepassing)',
    'Schermafbeeldingen of ander bewijs voor je claim (indien van toepassing)',
    'Het aantal credits waar het om gaat',
  ]},
  { heading: '9. Termijnen voor terugbetaling', paragraphs: ['Als je aanvraag wordt goedgekeurd:'], list: [
    'Bekijken we je geval binnen 2 tot 3 werkdagen',
    'Krijg je per e-mail een antwoord over de beslissing',
    'Worden goedgekeurde terugbetalingen binnen 5 tot 10 werkdagen verwerkt',
    'Betalen we het bedrag via onze betaalprovider terug op de oorspronkelijke betaalmethode',
    'Kan het nog 5 tot 7 werkdagen duren voor het bedrag op je rekening staat, afhankelijk van je betaalprovider',
  ]},
  { heading: '10. Chargebacks', paragraphs: ['Als je een chargeback of betalingsgeschil indient bij je bank of betaalprovider zonder eerst contact met ons op te nemen om het probleem op te lossen:'], list: [
    'Behouden we ons het recht voor om je account definitief te sluiten',
    'Word je uitgesloten van verder gebruik van onze diensten',
    'Vervallen alle resterende credits',
    'Geven we de betaalprovider bewijs om de afschrijving te verdedigen',
  ], after: ['We raden je sterk aan om eerst contact op te nemen met ons supportteam. We willen problemen eerlijk en snel oplossen.']},
  { heading: '11. Overdracht van credits en gedeelde accounts', paragraphs: ['Credits zijn niet overdraagbaar tussen accounts. We betalen niet terug bij:'], list: [
    'Credits die op het verkeerde account zijn gekocht',
    'Verzoeken om credits naar een ander account over te zetten',
    'Overtredingen door het delen van een account',
  ]},
  { heading: '12. Wijzigingen in dit beleid', paragraphs: ['We behouden ons het recht voor om dit terugbetalingsbeleid op elk moment te wijzigen. Wijzigingen gaan direct in zodra ze op onze website staan. Als je onze diensten na een wijziging blijft gebruiken, aanvaard je het nieuwe beleid.']},
  { heading: '13. Contactgegevens', paragraphs: [
    'Heb je vragen over dit terugbetalingsbeleid of heb je hulp nodig? Neem dan contact met ons op.',
    'E-mail: info@giggal.ai',
    'Website: https://giggal.ai',
    'Ons supportteam wil je vragen beantwoorden en eerlijke oplossingen vinden. We antwoorden meestal binnen 24 tot 48 uur op alle vragen.',
    'Dit terugbetalingsbeleid is onderdeel van onze Gebruiksvoorwaarden. Door de diensten van Giggal.ai te gebruiken, verklaar je dat je dit beleid hebt gelezen en begrepen.',
  ]},
]

export default function TerugbetalingenPage() {
  return (
    <LegalPageL10n
      locale="nl"
      path="/nl/terugbetalingen"
      title="Terugbetalingsbeleid"
      accent="voor credits"
      updated="22 oktober 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
