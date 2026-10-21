// Dutch alternative pages (plans/15): translations of the English pages, same
// sections and FAQ. The searched form "<merk> alternatief" leads the title and
// H1, written "ZeroBounce-alternatief" as Dutch compounds a brand name.
// Numbers 10.000, prices US$ 9,90 (currency stays USD). Register "je".
// Only the three clusters registered for nl: zerobounce, neverbounce, snovio.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const zerobounce: AltL10nConfig = {
  locale: 'nl',
  slug: 'zerobounce',
  path: '/nl/zerobounce-alternatief',
  cluster: 'altZerobounce',
  metaTitle: 'ZeroBounce-alternatief: prijzen en catch-all | Giggal.ai',
  ogTitle: 'Een ZeroBounce-alternatief voor lijsten met catch-all-adressen',
  desc: 'ZeroBounce vraagt US$ 129 per 10.000 en geeft catch-all een score van 1 tot 10, geen resultaat. Giggal.ai kost US$ 9,90 en bevestigt het. 1.000 gratis credits.',
  h1: ['Een ', 'ZeroBounce-alternatief', ' dat catch-all-adressen echt controleert'],
  heroP: 'Hetzelfde werk voor een tiende van de prijs. Je krijgt een echt antwoord, geldig of ongeldig, waar ZeroBounce alleen een score van 1 tot 10 geeft. US$ 9,90 per 10.000 credits tegenover US$ 129.',
  bluf: [
    { k: 'Prijs', v: 'US$ 9,90 tegenover US$ 129 per 10.000 credits. Het verschil blijft bij elke staffel.' },
    { k: 'Catch-all', v: 'Wij zeggen geldig of ongeldig. ZeroBounce geeft een score van 1 tot 10, geen antwoord.' },
    { k: 'Minimum', v: 'Hier geen minimum, je begint met 1.000 gratis credits. ZeroBounce vraagt minimaal 2.000 credits voor US$ 39.' },
    { k: 'Proef', v: '1.000 gratis credits voor een hele lijst, zonder creditcard.' },
  ],
  pricingFirst: true,
  pricingHeading: 'Prijzen van ZeroBounce en Giggal.ai vergeleken',
  pricingProse: 'ZeroBounce heeft een minimum van 2.000 credits en een abonnement van US$ 99 per maand. Giggal.ai heeft geen van beide. Je koopt credits, houdt ze zo lang je wilt en begint met 1.000 gratis credits.',
  pricingProseAfterLadder: true,
  catchAllHeading: 'Hoe Giggal.ai catch-all-adressen controleert',
  catchAllProse: 'Op een catch-all-domein accepteert de server elk adres. ZeroBounce geeft die adressen met AI Scoring een score van 1 tot 10 in plaats van ze te bevestigen. Wij sturen deze adressen door een aparte controle en geven een van vier resultaten terug.',
  catchAllProse2: 'In de test van LeadMagic loste ZeroBounce 12% van de catch-all-adressen op.',
  benchmark: true,
  featureNote: 'De 99,6% nauwkeurigheid van ZeroBounce is een claim van de leverancier, geen gemeten cijfer.',
  testSteps: [
    'Exporteer de lijst die je naar ZeroBounce zou sturen.',
    'Upload die hier en controleer hem met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de regels met Catch-All. Tel hoeveel er terugkomen met een echt resultaat.',
  ],
  faqs: [
    { q: 'Hoe verhouden de prijzen zich?', a: 'US$ 9,90 tegenover US$ 129 bij 10.000 credits, US$ 76 tegenover US$ 649 bij 100.000, en US$ 680 tegenover US$ 3.199 bij een miljoen. Bij de tabel staat de datum van beide prijzen.' },
    { q: 'Heeft ZeroBounce een minimale aankoop?', a: 'Ja, 2.000 credits voor US$ 39. Giggal.ai heeft geen minimum en je begint met 1.000 gratis credits, zonder creditcard. Bij geen van beide tools verlopen de credits.' },
    { q: 'Wat doet Giggal.ai met een catch-all-adres dat ZeroBounce alleen een score geeft?', a: 'Giggal.ai zegt of de mailbox echt is, bezorgbaar of niet bezorgbaar, in plaats van alleen een label Catch-All. Elke controle bij Giggal.ai kost vast 1 credit.' },
    { q: 'Hoe nauwkeurig is Giggal.ai bij catch-all-adressen?', a: 'Giggal.ai controleert met 98,5% nauwkeurigheid. Het geeft een echt resultaat, bezorgbaar of niet bezorgbaar, voor catch-all-adressen en adressen achter een SEG die de meeste tools alleen markeren zonder te bevestigen.' },
    { q: 'Kan ik Giggal.ai testen voordat ik betaal?', a: 'Ja. 1.000 gratis credits, zonder creditcard, te gebruiken bij een bulkupload. Controleer een lijst die je met ZeroBounce hebt opgeschoond nog een keer en vergelijk de regels met Catch-All.' },
  ],
  ctaHeadline: 'Zie wat ZeroBounce als Catch-All markeert en Giggal bevestigt',
  breadcrumb: 'ZeroBounce-alternatief',
}

const neverbounce: AltL10nConfig = {
  locale: 'nl',
  slug: 'neverbounce',
  path: '/nl/neverbounce-alternatief',
  cluster: 'altNeverbounce',
  metaTitle: 'NeverBounce-alternatief: prijzen en nauwkeurigheid | Giggal.ai',
  ogTitle: 'Een NeverBounce-alternatief dat catch-all-adressen echt controleert',
  desc: 'NeverBounce vraagt US$ 50 per 10.000 en lost weinig catch-all op, 8% in een test. Giggal.ai kost US$ 9,90 en bevestigt deze adressen. 1.000 gratis credits.',
  h1: ['Een ', 'NeverBounce-alternatief', ' dat catch-all-adressen echt controleert'],
  heroP: 'NeverBounce lost weinig catch-all-adressen op, 8% in de test van LeadMagic, en vraagt US$ 50 per 10.000. Giggal.ai bevestigt deze adressen als geldig of ongeldig, voor US$ 9,90.',
  bluf: [
    { k: 'Prijs', v: 'US$ 50 bij 10.000 tegenover onze US$ 9,90, en US$ 2.500 tegenover US$ 680 bij een miljoen.' },
    { k: 'Catch-all', v: 'Wij zeggen geldig of ongeldig. NeverBounce lost er weinig op (8% opgelost, LeadMagic).' },
    { k: 'Credits', v: 'Verlopen nooit. Credits van NeverBounce verlopen 12 maanden na aankoop.' },
    { k: 'Proef', v: '1.000 gratis credits voor een hele lijst, zonder creditcard.' },
  ],
  catchAllHeading: 'Hoe Giggal.ai catch-all-adressen controleert',
  catchAllProse: 'NeverBounce markeert catch-all-adressen als Accept-All en lost er weinig op, 8% in de test van LeadMagic. Wij sturen deze adressen door een aparte controle en geven een van vier resultaten terug.',
  benchmark: true,
  pricingHeading: 'Prijzen van NeverBounce en Giggal.ai vergeleken',
  pricingProse: 'NeverBounce vraagt US$ 50 bij 10.000, US$ 400 bij 100.000 en US$ 2.500 bij een miljoen. Giggal.ai kost US$ 9,90, US$ 76 en US$ 680 bij dezelfde aantallen, zonder minimum en zonder maandabonnement.',
  featureNote: 'Een streepje betekent een cijfer dat niet openbaar is, zoals de grootte van het gratis plan van NeverBounce. We vullen daar geen schatting in.',
  testSteps: [
    'Exporteer een lijst die je al met NeverBounce hebt opgeschoond.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Bekijk de regels die NeverBounce als Catch-All heeft gemarkeerd. Tel hoeveel echt zijn.',
  ],
  faqs: [
    { q: 'Hoe verhouden de prijzen zich?', a: 'NeverBounce vraagt US$ 50 per 10.000 tegenover US$ 9,90 bij Giggal.ai, en US$ 2.500 tegenover US$ 680 bij een miljoen. Beide publiceren al hun staffels, dus je kunt de cijfers zelf nakijken.' },
    { q: 'Wat doet Giggal.ai met de catch-all-adressen die NeverBounce markeert?', a: 'Giggal.ai zegt of de mailbox echt is, bezorgbaar of niet bezorgbaar, in plaats van een label Accept-All. NeverBounce loste in de test van LeadMagic 8% van de catch-all-adressen op. Elke controle bij Giggal.ai kost vast 1 credit.' },
    { q: 'Hoe verlopen de credits van Giggal.ai tegenover NeverBounce?', a: 'Credits van Giggal.ai verlopen nooit. Credits van NeverBounce verlopen 12 maanden na aankoop, zoals op de eigen prijspagina van NeverBounce staat.' },
    { q: 'Heeft Giggal.ai een API?', a: 'Ja. Giggal.ai heeft openbare API-documentatie en een MCP-server, zodat je vanuit je eigen tools en workflows kunt controleren.' },
    { q: 'Kan ik Giggal.ai testen voordat ik overstap?', a: 'Ja. 1.000 gratis credits, zonder creditcard, bij een bulkupload. Controleer een lijst die je met NeverBounce hebt opgeschoond nog een keer en bekijk de regels met Catch-All.' },
  ],
  ctaHeadline: 'Maak van de Catch-All-regels van NeverBounce echte resultaten',
  breadcrumb: 'NeverBounce-alternatief',
}

const snovio: AltL10nConfig = {
  locale: 'nl',
  slug: 'snovio',
  path: '/nl/snovio-alternatief',
  cluster: 'altSnovio',
  metaTitle: 'Snov.io-alternatief voor e-mailverificatie | Giggal.ai',
  ogTitle: 'Een Snov.io-alternatief dat gebouwd is voor verificatie',
  desc: 'Snov.io rekent verificatie af in credits voor zoeken en outreach. Giggal.ai controleert ook catch-all-adressen voor US$ 9,90 per 10.000. 1.000 gratis credits.',
  h1: ['Een ', 'Snov.io-alternatief', ' dat gebouwd is voor verificatie'],
  heroP: 'Snov.io combineert zoeken, verificatie en verzenden in één platform met credits. Als je verificatie nodig hebt, is Giggal.ai een aparte verificatietool die catch-all-adressen echt controleert, voor een openbare prijs van US$ 9,90 per 10.000.',
  bluf: [
    { k: 'Rol', v: 'Snov.io is een pakket voor zoeken en outreach. Wij verifiëren, ook catch-all-adressen.' },
    { k: 'Catch-all', v: 'Wij geven geldig of ongeldig terug. Snov.io markeert het adres en stopt daar.' },
    { k: 'Facturering', v: 'Snov.io haalt verificatie uit de credits van je abonnement. Bij ons betaal je per gebruik, vanaf US$ 9,90 per 10.000.' },
    { k: 'Proef', v: '1.000 gratis credits voor een hele lijst, zonder creditcard.' },
  ],
  catchAllHeading: 'Hoe Giggal.ai catch-all-adressen controleert',
  catchAllProse: 'Snov.io verifieert als onderdeel van een breder outreachproces, voor één credit per controle. Op catch-all-domeinen markeert het het adres in plaats van de mailbox te bevestigen. Giggal.ai is gebouwd voor verificatie. Het stuurt deze adressen door een aparte controle en geeft een van vier resultaten terug. Het controleert ook achter secure email gateways.',
  pricingHeading: 'Prijzen van Snov.io en Giggal.ai vergeleken',
  pricingProse: 'Snov.io wordt verkocht als maandabonnement met gedeelde credits, één per controle. Het kleinste plan voor 10.000 controles per maand is Pro M voor US$ 189 per maand. Voor 100.000 is dat Ultra voor US$ 738 per maand (ongeveer 25% minder bij jaarbetaling). Een miljoen per maand valt onder een plan op maat. Ongebruikte credits schuiven door zolang het abonnement loopt. Giggal.ai rekent per gebruik: US$ 9,90 voor 10.000, US$ 76 voor 100.000 en US$ 680 voor een miljoen, zonder maandelijkse verplichting.',
  featureNote: 'Snov.io wordt per maand gefactureerd. Het cijfer is daarom het kleinste plan voor dat volume, geen eenmalige prijs. Een miljoen per maand valt onder een plan op maat.',
  testSteps: [
    'Exporteer een lijst die je al met Snov.io hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Bekijk de regels die Snov.io als catch-all heeft gemarkeerd. Tel hoeveel echt zijn.',
  ],
  faqs: [
    { q: 'Is Giggal.ai een goed alternatief voor Snov.io voor verificatie?', a: 'Als je verificatie nodig hebt, ja. Giggal.ai is een aparte verificatietool die catch-all-adressen echt controleert en ook achter secure email gateways verifieert, per gebruik vanaf US$ 9,90 per 10.000. Snov.io vindt ook e-mailadressen en regelt outreach. Dat doet Giggal.ai niet.' },
    { q: 'Vindt Giggal.ai e-mailadressen of verstuurt het campagnes zoals Snov.io?', a: 'Nee. Giggal.ai is alleen een verificatietool. Wil je zoeken, verificatie en verzenden in één platform, dan past Snov.io. Wil je een zuivere verificatie waarbij catch-all-adressen een resultaat krijgen, dan is Giggal.ai daarvoor gebouwd.' },
    { q: 'Hoe gaat Giggal.ai om met de catch-all-adressen die Snov.io alleen markeert?', a: 'Snov.io markeert catch-all zonder de mailbox te bevestigen. Giggal.ai geeft een echt resultaat, bezorgbaar of niet bezorgbaar, voor vast 1 credit per e-mailadres.' },
    { q: 'Hoe verhouden de prijzen zich?', a: 'Snov.io haalt elke controle uit de credits van je abonnement, vanaf US$ 39 per maand voor 1.000 credits (US$ 29,25 bij jaarbetaling). Giggal.ai rekent per gebruik, US$ 9,90 per 10.000, zonder maandelijkse verplichting en met credits die nooit verlopen.' },
    { q: 'Kan ik Giggal.ai testen voordat ik overstap?', a: 'Ja. 1.000 gratis credits, zonder creditcard, bij een bulkupload. Controleer een lijst die Snov.io als catch-all heeft gemarkeerd en kijk hoeveel adressen een echt resultaat krijgen.' },
  ],
  ctaHeadline: 'Verificatie, zonder het hele platform',
  breadcrumb: 'Snov.io-alternatief',
}

export const ALT_NL = { zerobounce, neverbounce, snovio }
