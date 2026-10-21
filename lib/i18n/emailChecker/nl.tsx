import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Dutch copy for /nl/mailadres-controleren, translated from the English
// /email-checker page (app/(en)/email-checker/page.tsx) by way of the French
// copy. Keyword plan (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md, sections 1,
// 3 and 4): head term "mailadres controleren", H1 "Mailadres controleren op
// echtheid", loan terms "email checker" and "email address checker" (H2), and
// the native family in copy and FAQ: e-mailadres controleren, emailadres
// controleren, email adres controleren, email controleren, email verificatie,
// controleren of een mailadres bestaat, beschikbaarheid emailadres
// controleren, bestaat, gratis. Nl has no child page, so the FAQ answers the
// existence questions. Running text keeps the standard spelling "e-mailadres";
// the searched spellings appear only where the plan assigns them.

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Mailadres controleren',
    h1Rest: 'op echtheid',
    intro:
      'Controleer gratis online of een e-mailadres echt bestaat. Plak het adres en deze email checker test het formaat, de mailserver en de mailbox zelf. Op catch-all-domeinen gaat de controle verder en krijg je geldig of ongeldig terug.',
  },
  tool: {
    caption: 'Zonder registratie, zonder creditcard. Eén adres per controle.',
    freeCredits: 'Meer controles nodig? Maak een account aan en ontvang 1.000 gratis credits. Geen creditcard nodig.',
  },
  ratings: {
    reviews: (count) => `${count} reviews`,
    ratedAria: (rating, platform) => `Giggal.ai krijgt op ${platform} een score van ${rating.replace('.', ',')} van 5`,
  },
  awards: {
    headingLead: 'Giggal.ai is beoordeeld als',
    headingRest: 'Leader op SourceForge en Slashdot',
    showLabel: 'Toon {badge}',
  },
  steps: {
    title: 'Zo controleer je een e-mailadres op echtheid',
    intro:
      'Een volledige controle van een e-mailadres, ook wel e-mailverificatie genoemd, heeft vier stappen. Tools die na de eerste stap stoppen, verklaren waarom zoveel "gecontroleerde" lijsten toch nog bouncen.',
    items: [
      {
        title: 'Formaat',
        text: 'Is het adres goed opgebouwd: één @-teken, een geldige naam ervoor en een domein met een extensie zoals .com of .nl. Deze stap vindt typefouten, verder niets.',
      },
      {
        title: 'Mailserver',
        text: 'Heeft het domein records voor een mailserver (MX-records)? Zonder MX-record kan er op dat domein geen mailbox bestaan. Het adres is dan al dood voordat je iets verstuurt.',
      },
      {
        title: 'Mailbox',
        text: 'De email checker vraagt de mailserver of deze mailbox bestaat, zonder een e-mail te versturen. Een ja betekent dat de mailbox bestaat. Een nee betekent dat hij niet bestaat.',
      },
      {
        title: 'Catch-all',
        text: 'Zegt de server ook ja tegen een verzonnen adres, dan heeft stap drie niets bewezen. Hier tonen de meeste email checkers "catch-all" en stoppen ze. Giggal.ai bekijkt extra signalen die een echte mailbox onderscheiden van een accept-all-antwoord. Daarna geeft het geldig of ongeldig terug.',
      },
    ],
    footnote:
      'Het resultaatpaneel hierboven toont elke stap terwijl die loopt. Wil je een mailadres controleren, plak het dan en klik op de knop. Eén adres duurt een paar seconden.',
  },
  results: {
    title: 'Wat de email address checker per adres laat zien',
    intro: 'Elke controle eindigt met een van drie resultaten.',
    valid: {
      title: 'Geldig',
      text: 'De mailbox bestaat en is door de extra controles gekomen. Een e-mail naar dit adres zou dus moeten aankomen.',
    },
    invalid: {
      title: 'Ongeldig',
      text: 'Het adres heeft een verkeerd formaat of geen mailserver, of de server heeft de mailbox geweigerd. Een e-mail naar dit adres bouncet.',
    },
    unknown: {
      title: 'Onbekend',
      text: 'Komt hier zelden voor. De server antwoordde niet op tijd of vertraagt nieuwe afzenders met opzet. Probeer het later opnieuw in plaats van het adres als dood te zien.',
    },
    detailsIntro: 'Onder het resultaat toont de email address checker de details die je nodig hebt om de bezorgbaarheid te beoordelen:',
    details: [
      { lead: 'De e-mailprovider', rest: ' (Google Workspace, Microsoft 365 of een gateway zoals Proofpoint)' },
      { lead: 'De mailserver die antwoordde', rest: '' },
      { lead: 'Of het een wegwerp e-mailadres is', rest: ' (een tijdelijke mailbox die verdwijnt)', href: '/nl/wegwerp-e-mailadres-controleren' },
      { lead: 'Of het een rol-adres is', rest: ' (info@, sales@, support@, die naar een gedeelde mailbox gaan en niet naar een persoon)' },
      { lead: 'Of het adres bij een provider voor consumenten hoort', rest: ' zoals Gmail of Yahoo, nuttig om B2B-contacten te beoordelen' },
    ],
  },
  exists: {
    title: 'Controleren of een mailadres bestaat',
    p1: 'Een e-mailadres bestaat als de mailbox is aangemaakt op de mailserver van de ontvanger en mail accepteert. Om dat te controleren, vraagt de email checker het rechtstreeks aan die server, zonder een bericht te sturen. Zo bewijst de controle dat de mailbox er is. Hij bewijst niet wie de eigenaar is of hoe vaak de mailbox wordt gelezen.',
    p2: 'Weet je niet zeker of een adres uit je contacten bestaat? Test het dan in de email checker hierboven.',
    signsIntro: 'Adressen die niet bestaan, hebben vaak een van deze kenmerken:',
    signs: [
      { lead: 'Een domein met een typefout', rest: ' zoals gmial.com of yaho.com, dat geen mailserver heeft of alles weigert.' },
      { lead: 'Geen records voor een mailserver', rest: ' op het domein, dus de mail kan nergens heen.' },
      { lead: 'Een geweigerde mailbox:', rest: ' het domein is echt, maar de server zegt dat deze persoon er niet is, vaak omdat die het bedrijf heeft verlaten.' },
      { lead: 'Willekeurige tekens', rest: ' voor de @, ingevuld door bots of door mensen die het formulier niet wilden invullen.' },
    ],
  },
  whySend: {
    title: 'Waarom je een emailadres controleert voordat je mailt',
    p1: 'Een e-mail naar een adres dat niet bestaat, komt terug als hard bounce. Gmail, Outlook en andere e-mailproviders tellen je bounces. Bouncet te veel van je mail, dan vertrouwen ze je verzenddomein minder. Meer van je e-mails komen dan in de spam terecht of worden geblokkeerd, ook die naar echte mensen. Met e-mailverificatie vind je deze adressen voordat je verstuurt.',
    readMore: (
      <>
        Lees{' '}
        <InlineLink href="/nl/blog/hard-bounce-vs-soft-bounce">hard bounce vs soft bounce</InlineLink>{' '}
        voor de betekenis van elke bouncecode en wat je per geval doet.
      </>
    ),
    bounceTitle: 'Een lager bouncepercentage.',
    bounceText: 'Lijsten die met Giggal.ai zijn opgeschoond, hebben meestal een bouncepercentage onder 3%.',
    benefits: [
      {
        title: 'Een goede afzenderreputatie.',
        text: 'Met minder bounces houdt je domein het vertrouwen van e-mailproviders.',
      },
      {
        title: 'Een betere bezorgbaarheid.',
        text: 'Met een goede reputatie komen meer van je e-mails in de inbox in plaats van in de spammap.',
      },
      {
        title: 'Schonere gegevens.',
        text: 'Dode adressen verdwijnen uit je CRM voordat ze je tijd of verzendcredits kosten.',
      },
    ],
  },
  whenToUse: {
    title: 'Wanneer je een email checker gebruikt',
    intro: 'Gebruik deze email checker telkens als één adres bepaalt wat je daarna doet:',
    items: [
      'Voordat je antwoordt op een inkomend contact van wie het adres met de hand lijkt getypt.',
      'Als een aanmelding bouncet en je wilt weten of het adres ooit heeft bestaan.',
      'Voordat je mailt naar een adres dat je op een website of in een CRM hebt gevonden.',
      'Om een adres uit een gekochte lijst te testen voordat je betaalt om het hele bestand op te schonen.',
      'Om een contact op een catch-all-domein te bevestigen dat een andere tool als "riskant" heeft gemarkeerd.',
    ],
  },
  catchAll: {
    title: 'Waarom andere email checkers stoppen bij catch-all',
    paragraphs: [
      <>
        Sommige zakelijke mailservers accepteren elk adres, echt of verzonnen. Dat heet een{' '}
        <InlineLink href="/nl/catch-all-verificatie">catch-all-domein</InlineLink>. Vraag je naar een echte
        medewerker, dan zegt de server ja. Vraag je naar een verzonnen naam, dan zegt hij ook ja. De normale
        controle van de mailbox bewijst op dit domein dus niets.
      </>,
      <>
        Een catch-all-domein herkennen is makkelijk: je test een verzonnen adres en kijkt of het wordt
        geaccepteerd. Daarom kan bijna elke email checker je vertellen dat een domein catch-all is. Uitzoeken welke
        mailboxen achter dat domein echt zijn, kost veel meer werk. De meeste tools stoppen daarom bij het label en
        laten de keuze aan jou. In B2B-lijsten zijn catch-all-adressen vaak een groot deel van de contacten, en veel
        van hen zijn echte mensen.
      </>,
      <>
        Giggal.ai bekijkt de extra signalen bij elk catch-all-adres en geeft geldig of ongeldig terug. Daarom kun je
        op deze pagina maar een paar controles per bezoeker doen. Lees{' '}
        <InlineLink href="/nl/blog/wat-is-een-catch-all-e-mailadres">wat een catch-all-e-mailadres is</InlineLink>{' '}
        voor de volledige uitleg.
      </>,
    ],
  },
  wholeList: {
    title: 'Email verificatie voor een hele lijst in plaats van één adres',
    list: (
      <>
        De email checker op deze pagina controleert één adres tegelijk. Wil je een hele lijst controleren, maak dan
        een account aan en upload een CSV- of Excel-bestand met tot 50.000 adressen. Daarna{' '}
        <InlineLink href="/nl">schoon je je e-maillijst op</InlineLink> met dezelfde controles op elke regel. Je
        begint met 1.000 gratis credits, zonder creditcard.
      </>
    ),
    api: (
      <>
        Wil je adressen controleren in je eigen app of aanmeldformulier, gebruik dan de{' '}
        <InlineLink href="/email-verification-api">API voor e-mailverificatie</InlineLink> (in het Engels). Die voert
        dezelfde controles uit en geeft het resultaat als JSON.
      </>
    ),
  },
  faqTitle: 'Mailadres controleren: veelgestelde vragen',
  faqs: [
    {
      q: 'Wat is een email checker?',
      a: 'Een email checker laat zien of een e-mailadres geldig is. De tool controleert het formaat, de mailserver en de mailbox zelf. Hij heet ook wel email verifier of email validator. Hij werkt zonder een e-mail naar het adres te sturen.',
    },
    {
      q: 'Is een email checker hetzelfde als een email address checker?',
      a: 'Ja. Email checker, email address checker en email verifier zijn namen voor hetzelfde soort tool. Of je het nu e-mailadres controleren, emailadres controleren of email adres controleren noemt, het gaat om dezelfde controle van formaat, mailserver en mailbox. Tools verschillen op catch-all-domeinen. Veel tools stoppen daar met "riskant". Deze geeft geldig of ongeldig terug.',
    },
    {
      q: 'Hoe werkt een email checker?',
      a: 'De tool doet vier controles op volgorde. Eerst het formaat van het adres. Dan de records voor de mailserver van het domein. Daarna vraagt hij de mailserver of de mailbox bestaat. Op catch-all-domeinen, waar de server ja zegt tegen elk adres, bekijkt Giggal.ai extra signalen om een echte mailbox van een nepmailbox te onderscheiden.',
    },
    {
      q: 'Wat betekent een mailadres controleren op echtheid?',
      a: 'Met deze tool betekent het: controleren of het adres echt bestaat en mail kan ontvangen. De email checker bevestigt dat de mailbox bestaat en laat zien of het een wegwerp e-mailadres is. Hij zegt niet wie de eigenaar van het adres is. Hij zegt ook niet of een e-mail die je hebt ontvangen te vertrouwen is.',
    },
    {
      q: 'Hoe controleer ik of een mailadres bestaat?',
      a: 'Plak het adres in de email checker bovenaan deze pagina en start de controle. Binnen een paar seconden heb je een resultaat: geldig, ongeldig of onbekend, met de reden en de details van de mailserver eronder.',
    },
    {
      q: 'Bestaat dit e-mailadres? Kan ik dat zien zonder een e-mail te sturen?',
      a: 'Ja. De email checker vraagt de mailserver van de ontvanger of de mailbox bestaat en stopt voordat er een bericht wordt verstuurd. Zo kun je een email controleren zonder dat er iets in de mailbox van de ontvanger aankomt.',
    },
    {
      q: 'Kan ik de beschikbaarheid van een emailadres controleren?',
      a: 'Ja, als je wilt weten of het adres bestaat en mail kan ontvangen. De email checker vraagt de mailserver of de mailbox bestaat en mail accepteert. Wil je weten of een adres nog vrij is om zelf aan te maken, dan probeer je dat bij de e-mailprovider. Dat controleert deze tool niet.',
    },
    {
      q: 'Stuurt de email checker een e-mail naar het adres?',
      a: 'Nee. De controle praat alleen met de mailserver. De eigenaar van het adres ontvangt niets en hoort niet dat zijn adres is gecontroleerd.',
    },
    {
      q: 'Hoe nauwkeurig is een email checker?',
      a: 'Dat hangt af van de tool. De meeste zijn nauwkeurig op gewone domeinen en geven het op bij catch-all-domeinen, waar ze "riskant" of "onbekend" teruggeven. Giggal.ai gaat door op catch-all-domeinen en geeft geldig of ongeldig terug. Het meet een nauwkeurigheid van 98,5% op zakelijke lijsten.',
    },
    {
      q: 'Wat betekent "geldig" op een catch-all-domein?',
      a: 'Dat de mailbox is bevestigd, en niet alleen dat het domein de ontvanger accepteerde. Een gewoon catch-all-label zegt alleen dat de server ja zegt tegen alles. Hier betekent geldig dat het adres door de extra controles is gekomen die een echte mailbox scheiden van een mailbox die bouncet.',
    },
    {
      q: 'Wat betekent "onbekend" bij een e-mailverificatie?',
      a: 'De mailserver gaf niet op tijd een duidelijk antwoord, vaak omdat hij nieuwe afzenders met opzet vertraagt (greylisting). Dat bewijst niet dat het adres dood is. Controleer het later opnieuw.',
    },
    {
      q: 'Hoeveel adressen kan ik hier gratis controleren?',
      a: 'Een paar per uur, zonder registratie en zonder creditcard. Elke controle voert alle stappen uit, daarom is het aantal klein. Wil je er meer controleren, maak dan een account aan.',
    },
    {
      q: 'Kan een geldig e-mailadres toch bouncen?',
      a: 'Ja, maar zelden. Een geldig resultaat betekent dat de mailbox bestond op het moment van de controle. Een e-mail kan toch bouncen als de mailbox vol is of als de mailserver even uitvalt. Hij kan ook bouncen als de persoon na de controle het bedrijf verlaat, of als de server je verzenddomein blokkeert. Controleer adressen kort voordat je verstuurt.',
    },
    {
      q: 'Blijven mijn gegevens privé?',
      a: 'Giggal.ai wordt beheerd door TargetPulse Ltd en verwerkt persoonsgegevens volgens de AVG. Het privacybeleid op giggal.ai/nl/privacy legt uit welke gegevens we verzamelen, hoe we ze gebruiken en hoe lang we ze bewaren.',
    },
    {
      q: 'Kan ik hier een hele lijst controleren?',
      a: 'Niet op deze pagina. Maak een account aan en upload de lijst als CSV- of Excel-bestand. Elk adres krijgt dan dezelfde controles. Je begint met 1.000 gratis credits, zonder creditcard.',
    },
  ],
  ctaHeadline: 'Controleer je hele lijst',
  related: [
    { href: '/nl/bulk-e-mailverificatie', label: 'Bulk e-mailverificatie voor een hele lijst' },
    { href: '/nl/catch-all-verificatie', label: 'Catch-all-verificatie en riskante adressen' },
    { href: '/nl/prijzen', label: 'Prijzen en credits' },
    { href: '/nl/wegwerp-e-mailadres-controleren', label: 'Wegwerp e-mailadres controleren' },
    { href: '/nl/blog/wat-is-een-catch-all-e-mailadres', label: 'Wat is een catch-all-e-mailadres?' },
  ],
}
