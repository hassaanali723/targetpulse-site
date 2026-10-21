import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Dutch copy for /nl/bulk-e-mailverificatie, translated from the English
// /bulk-email-verifier page (app/(en)/bulk-email-verifier/page.tsx) by way of
// the French copy. Keyword plan (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md):
// no native bulk phrase has volume, so the title carries the loan term
// "bulk email checker" and the H1 the native "bulk e-mailverificatie".
// Supporting words: e-maillijst controleren, e-mailadressen controleren,
// gratis. Numbers 50.000 and 98,5%. Register "je".

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Bulk email checker: e-maillijst in één keer controleren',
    description:
      'Bulk e-mailverificatie voor CSV- en Excel-bestanden tot 50.000 adressen. Elke regel krijgt geldig of ongeldig, ook catch-all. 1.000 gratis credits.',
    breadcrumb: 'Bulk e-mailverificatie',
    appName: 'Giggal.ai Bulk e-mailverificatie',
  },
  hero: {
    h1Lead: 'Bulk e-mailverificatie:',
    h1Rest: 'controleer je hele lijst in één keer',
    intro:
      'Upload een CSV- of Excel-bestand en deze bulk email checker controleert elk adres. Elke regel krijgt een resultaat, geldig of ongeldig, ook voor catch-all-adressen.',
    ctaPrimary: 'Gratis een lijst controleren',
    ctaPricing: 'Prijzen bekijken',
    checks: ['1.000 gratis credits', 'Geen creditcard nodig', 'Credits verlopen nooit'],
  },
  facts: [
    { v: '50.000', l: 'adressen per bestand' },
    { v: '98,5%', l: 'nauwkeurigheid op zakelijke lijsten' },
    { v: '1 credit', l: 'per adres, ook catch-all' },
    { v: '<3%', l: 'bouncepercentage na verificatie, meestal' },
  ],
  definition: {
    title: 'Wat is bulk e-mailverificatie?',
    text: 'Bulk e-mailverificatie controleert een hele lijst e-mailadressen in één keer. Je ziet welke adressen mail kunnen ontvangen. Een tool voor bulk e-mailverificatie vraagt de mailservers van elk domein of elke mailbox bestaat, zonder een e-mail te versturen. Je haalt de adressen die zouden bouncen weg voordat je verstuurt. Dat beschermt je afzenderreputatie en je bezorgbaarheid. In het Engels heet zo’n tool een bulk email verifier.',
  },
  steps: {
    title: 'Hoe bulk e-mailverificatie werkt',
    intro:
      'Drie stappen, en er gaat geen e-mail naar de contacten op je lijst. De meeste lijsten zijn binnen een paar minuten klaar.',
    items: [
      {
        title: 'Upload je lijst',
        text: 'Voeg een CSV- of Excel-bestand toe met tot 50.000 e-mailadressen. Is je lijst groter, verdeel hem dan over meerdere bestanden.',
      },
      {
        title: 'Elk adres wordt gecontroleerd',
        text: 'De tool vraagt de mailservers van elk domein of de mailbox bestaat. Hij markeert ook wegwerpadressen, rol-adressen, dubbele adressen en catch-all-adressen.',
      },
      {
        title: 'Download de resultaten',
        text: 'Je krijgt een CSV-bestand met een resultaat op elke regel. Houd de geldige adressen, verwijder de ongeldige en controleer de onbekende later opnieuw.',
      },
    ],
  },
  results: {
    title: 'Wat de bulk email checker per adres teruggeeft',
    intro: 'Elke regel eindigt met een van drie resultaten.',
    valid: {
      title: 'Geldig',
      text: 'De mailbox bestaat, dus een e-mail naar dit adres zou moeten aankomen. Houd deze adressen.',
    },
    invalid: {
      title: 'Ongeldig',
      text: 'Het formaat klopt niet, het domein heeft geen mailserver of de mailbox bestaat niet. Een e-mail naar dit adres bouncet. Verwijder deze adressen.',
    },
    unknown: {
      title: 'Onbekend',
      text: 'De mailserver gaf geen duidelijk antwoord, vaak door greylisting. Controleer deze adressen later opnieuw. Credits voor onbekende resultaten worden terugbetaald.',
    },
    flagsIntro: 'Elke regel toont ook deze kenmerken, zodat je kunt kiezen welke adressen je houdt:',
    flags: [
      { lead: 'Catch-all', rest: ', beoordeeld als geldig of ongeldig in plaats van "riskant"' },
      { lead: 'Wegwerpadres', rest: ', een tijdelijke mailbox die binnenkort niet meer werkt' },
      { lead: 'Rol-adres', rest: ', zoals info@ of sales@, een gedeelde mailbox en geen persoon' },
      { lead: 'Dubbel adres', rest: ', hetzelfde adres meer dan één keer in je bestand' },
    ],
  },
  catchAll: {
    title: 'Catch-all-adressen krijgen geldig of ongeldig als resultaat',
    paragraphs: [
      <>
        Sommige zakelijke mailservers accepteren elk adres, echt of verzonnen. Dat heet een{' '}
        <InlineLink locale="nl" href="/catch-all-verification">catch-all-domein</InlineLink>. Een normale controle krijgt
        voor elk adres op zo’n domein een ja. Hij kan dus geen echte mailbox onderscheiden van een typefout.
      </>,
      <>
        Veel tools voor bulk e-mailvalidatie stoppen daar en markeren elk catch-all-adres als &quot;riskant&quot;. In
        B2B-lijsten kan dat een groot deel van je contacten zijn, en veel van hen zijn echte mensen. Je moet dan raden
        naar wie je mailt.
      </>,
      <>
        Giggal.ai controleert elk catch-all-adres en geeft geldig of ongeldig terug, voor 1 credit, net als elk ander
        adres. Het werkt ook op domeinen achter{' '}
        <InlineLink locale="nl" href="/seg-email-verification">beveiligingsgateways zoals Proofpoint en Mimecast</InlineLink>{' '}
        (in het Engels), waar andere tools vaak onbekend teruggeven.
      </>,
    ],
  },
  pricing: {
    title: 'Gratis bulk email checker: begin met 1.000 credits',
    intro:
      'Elk nieuw account krijgt 1.000 gratis credits, zonder creditcard. Daarmee controleer je gratis een lijst van maximaal 1.000 adressen. Daarna betaal je per gebruik. Je koopt credits één keer, zonder maandabonnement, en de credits verlopen nooit.',
    colCredits: 'Credits (adressen)',
    colPrice: 'Prijs',
    colPer1k: 'Per 1.000 adressen',
    freeLabel: 'Gratis',
    freeNote: 'Nieuwe accounts, zonder creditcard',
    footnote: (
      <>
        Eén credit controleert één adres, catch-all-controles inbegrepen. Bekijk alle{' '}
        <InlineLink locale="nl" href="/pricing">prijzen</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Wanneer je een bulk email checker gebruikt',
    intro:
      'Controleer een lijst telkens als je veel adressen tegelijk gaat mailen. Als je eerst de adressen weghaalt die niet meer bestaan, bescherm je je bezorgbaarheid.',
    items: [
      'Voor een cold e-mailcampagne, zodat bounces je bezorgbaarheid niet schaden.',
      'Na het verzamelen van contacten via een formulier, een evenement of een database met leads.',
      'Voordat je een oude nieuwsbrieflijst mailt die je al maanden niet hebt gebruikt.',
      'Voordat je contacten importeert in je CRM of je e-mailmarketingtool.',
    ],
  },
  software: {
    title: 'Software voor bulk e-mailverificatie in je eigen tools',
    intro:
      'Een bestand uploaden is één optie. Je kunt e-mailadressen ook in bulk controleren vanuit je eigen app of workflow.',
    items: [
      {
        title: 'API voor e-mailverificatie (in het Engels)',
        text: 'Stuur adressen vanuit je app of je aanmeldformulier en ontvang het resultaat als JSON.',
      },
      {
        title: 'Integraties',
        text: 'Controleer nieuwe contacten automatisch met Zapier of n8n.',
      },
      {
        title: 'MCP-server',
        text: 'Controleer e-mailadressen vanuit Claude, ChatGPT, Cursor en VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'Een e-maillijst controleren of opschonen?',
    listText: (
      <>
        Bij het controleren van een e-maillijst krijgt elk adres een resultaat. Opschonen is wat je met die
        resultaten doet: je verwijdert ongeldige adressen, wegwerpadressen en dubbele adressen, en je houdt een lijst
        met geldige e-mailadressen over. Beide beginnen met dezelfde upload. Lees meer over{' '}
        <InlineLink locale="nl" href="/email-list-cleaning">een e-maillijst opschonen</InlineLink> (in het Engels).
      </>
    ),
    oneTitle: 'Wil je maar één adres controleren?',
    oneText: (
      <>
        Gebruik de gratis{' '}
        <InlineLink locale="nl" href="/email-checker">email checker</InlineLink>. Die controleert één adres tegelijk
        met dezelfde controles, zonder registratie.
      </>
    ),
  },
  faqTitle: 'Bulk e-mailverificatie: veelgestelde vragen',
  faqs: [
    {
      q: 'Wat is een bulk email checker?',
      a: 'Een bulk email checker controleert een hele lijst e-mailadressen in één keer, in plaats van één adres tegelijk. Je uploadt een bestand en elk adres krijgt een resultaat: geldig, ongeldig of onbekend. Zo’n tool heet ook een tool voor bulk e-mailverificatie of bulk e-mailvalidatie.',
    },
    {
      q: 'Hoeveel e-mailadressen kan ik in één keer controleren?',
      a: 'Tot 50.000 adressen per bestand. Is je lijst groter, verdeel hem dan over meerdere bestanden en upload ze een voor een.',
    },
    {
      q: 'Bestaat er een gratis bulk email checker?',
      a: 'Ja. Elk nieuw account krijgt 1.000 gratis credits, zonder creditcard. Eén credit controleert één adres. Je kunt dus gratis een lijst van maximaal 1.000 adressen controleren.',
    },
    {
      q: 'Is gratis bulk e-mailvalidatie echt gratis?',
      a: 'Ja. Je eerste 1.000 adressen zijn gratis, zonder creditcard. De gratis credits verlopen nooit, dus je gebruikt ze wanneer je wilt. Je betaalt alleen als je meer dan 1.000 adressen moet controleren.',
    },
    {
      q: 'Hoe lang duurt bulk e-mailverificatie?',
      a: 'De meeste lijsten zijn binnen een paar minuten klaar.',
    },
    {
      q: 'Welke bestandsformaten kan ik uploaden?',
      a: 'CSV of Excel. Je downloadt de resultaten als CSV, met een resultaat op elke regel.',
    },
    {
      q: 'Stuurt de bulk email checker e-mails naar mijn lijst?',
      a: 'Nee. De tool vraagt elke mailserver of de mailbox bestaat en stopt voordat er een bericht wordt verstuurd. Niemand op je lijst ontvangt iets.',
    },
    {
      q: 'Wat kost bulk e-mailverificatie?',
      a: 'Eén credit per adres, catch-all-controles inbegrepen. 10.000 adressen kosten US$ 9,90 en 100.000 kosten US$ 76. Je betaalt één keer, zonder maandabonnement, en de credits verlopen nooit.',
    },
    {
      q: 'Wat gebeurt er met catch-all-adressen?',
      a: 'Elk catch-all-adres wordt gecontroleerd en krijgt geldig of ongeldig, voor 1 credit, net als elk ander adres. Veel tools voor bulk e-mailvalidatie markeren ze in plaats daarvan allemaal als "riskant".',
    },
    {
      q: 'Wat betekent "onbekend", en betaal ik voor dat resultaat?',
      a: 'Onbekend betekent dat de mailserver geen duidelijk antwoord gaf, vaak omdat hij nieuwe afzenders met opzet vertraagt (greylisting). Controleer deze adressen later opnieuw. Credits voor onbekende resultaten worden terugbetaald.',
    },
    {
      q: 'Is bulk e-mailvalidatie hetzelfde als bulk e-mailverificatie?',
      a: 'Ja. Validatie, verificatie en controle zijn drie woorden voor hetzelfde werk: uitzoeken welke adressen op een lijst mail kunnen ontvangen.',
    },
    {
      q: 'Hoe nauwkeurig is de bulk email checker?',
      a: 'Giggal.ai meet een nauwkeurigheid van 98,5% op zakelijke lijsten. Lijsten die met deze tool zijn gecontroleerd, hebben meestal een bouncepercentage onder 3%.',
    },
    {
      q: 'Blijft mijn lijst privé?',
      a: 'Giggal.ai wordt beheerd door TargetPulse Ltd en verwerkt persoonsgegevens volgens de AVG. Het privacybeleid op giggal.ai/nl/privacy legt uit welke gegevens we verzamelen, hoe we ze gebruiken en hoe lang we ze bewaren.',
    },
  ],
  ctaHeadline: 'Controleer je e-maillijst in een paar minuten',
}
