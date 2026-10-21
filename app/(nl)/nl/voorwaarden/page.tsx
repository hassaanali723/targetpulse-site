import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Gebruiksvoorwaarden van de e-mailverificatiedienst',
  description: 'De gebruiksvoorwaarden van de e-mailverificatiedienst Giggal.ai. Dit is een vertaling voor het gemak. Bij verschillen geldt de Engelse versie.',
  alternates: { canonical: '/nl/voorwaarden', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'nl_NL', title: 'Gebruiksvoorwaarden', url: 'https://giggal.ai/nl/voorwaarden', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Aanvaarding van de voorwaarden', paragraphs: [
    'De dienst wordt geleverd door TargetPulse Ltd ("wij", "ons"), een bedrijf geregistreerd in Engeland en Wales onder nummer 17079825, met statutaire zetel op Office 17366, 182-184 High Street North, East Ham, Londen E6 2JA. TargetPulse Ltd is de verwerkingsverantwoordelijke voor persoonsgegevens die via Giggal.ai worden verwerkt. Contact: info@giggal.ai. Misbruik melden: abuse@giggal.ai.',
    'Door de diensten van Giggal.ai te openen en te gebruiken, aanvaard je de voorwaarden en bepalingen van deze overeenkomst en ga je ermee akkoord eraan gebonden te zijn. Ga je niet akkoord met het bovenstaande, gebruik deze dienst dan niet.',
    'Deze Gebruiksvoorwaarden gelden voor het gebruik van de dienst Giggal.ai Email Verifier, die TargetPulse Ltd aanbiedt onder de handelsnaam Giggal.ai.',
  ]},
  { heading: '2. Beschrijving van de dienst', paragraphs: [
    'Giggal.ai Email Verifier is een online tool die teams helpt om e-maillijsten op te schonen en te valideren. Gebruikers uploaden CSV-bestanden of losse e-mailadressen. Wij controleren de bezorgbaarheid, de domeinrecords en of elke mailbox bestaat, om ongeldige adressen te verminderen en de kwaliteit van de lijst te verbeteren. Het product wordt verkocht als een systeem met credits waarbij je per gebruik betaalt. Klanten betalen dus alleen voor de e-mailadressen die ze echt valideren.',
    'De Dienst wordt aan je geleverd onder deze Gebruiksvoorwaarden en eventuele aanvullende voorwaarden die van toepassing kunnen zijn.',
  ]},
  { heading: '2.1 Dienst voor e-mailverificatie', level: 3, paragraphs: ['Onze kerndienst is het verifiëren en valideren van e-mailadressen. Daaronder valt:'], list: [
    'Herkenning van gateways: het vaststellen van secure email gateways (SEG) en beveiligingsfilters aan de rand van het netwerk',
    'Validatie van het domein: controleren of het domein van het e-mailadres bestaat en geldige MX-records heeft',
    'Controle van de mailbox: controleren of het specifieke e-mailadres bestaat en e-mail kan ontvangen',
    'Herkenning van wegwerpadressen: het vaststellen van tijdelijke adressen en wegwerpadressen',
    'Herkenning van rol-adressen: het vaststellen van algemene adressen (bijvoorbeeld info@, support@)',
    'Herkenning van catch-all: het vaststellen van domeinen die elk e-mailadres accepteren',
    'Verificatie in realtime: controleren of de mailbox van de ontvanger bestaat',
    'Verificatie in bulk: duizenden e-mailadressen tegelijk verwerken',
  ]},
  { heading: '2.2 Creditsysteem', level: 3, paragraphs: ['Onze dienst werkt met credits. Daarbij geldt:'], list: [
    '1 credit = 1 e-mailverificatie: elke verificatie van een e-mailadres kost precies 1 credit van het saldo van je account',
    'Betalen per gebruik: je koopt op elk moment credits in pakketten van 3.000 tot 1.000.000 credits',
    'Terugkerende abonnementen: je neemt een abonnement op maandelijkse creditpakketten met 10% korting op de normale prijs',
    'Geen vervaldatum: credits verlopen nooit en blijven op je account beschikbaar tot je ze gebruikt',
    'Gratis proef: nieuwe accounts krijgen 1.000 gratis credits om de dienst te testen',
  ]},
  { heading: '2.3 Functies van de dienst', level: 3, paragraphs: ['Onze dienst voor e-mailverificatie omvat:'], list: [
    'Toegang tot de API in realtime voor directe verificatie',
    'Upload en verwerking in bulk',
    'Gedetailleerde verificatierapporten en analyses',
    'Export van resultaten naar CSV, Excel en JSON',
    'Herkennen en verwijderen van dubbele e-mailadressen',
    'Tools om lijsten op te schonen en te segmenteren',
    'Ondersteuning voor integraties via de API en compatibele systemen van derden',
  ]},
  { heading: '3. Gebruikersaccount', paragraphs: ['Voor sommige functies van de Dienst moet je een account aanmaken. Je verplicht je om:'], list: [
    'Bij de registratie juiste, actuele en volledige gegevens te geven',
    'De gegevens van je account bij te houden en snel bij te werken',
    'De beveiliging van je wachtwoord te bewaken en alle risico\'s van onbevoegde toegang te aanvaarden',
    'Ons direct te melden als je account zonder toestemming wordt gebruikt',
    'Verantwoordelijk te zijn voor alle activiteit die met je account plaatsvindt',
  ]},
  { heading: '4. Betalingsvoorwaarden', paragraphs: ['Betalingen worden veilig verwerkt door onze erkende betaalprovider. Als je credits of diensten koopt, ga je ermee akkoord om:'], list: [
    'Actuele, volledige en juiste aankoop- en accountgegevens te geven',
    'Je account- en betaalgegevens waar nodig snel bij te werken',
    'Alle bedragen te betalen tegen de prijzen die gelden op het moment van je aankoop',
    'De geldende belastingen, btw of andere kosten voor je aankopen te betalen',
  ]},
  { heading: '4.1 Manieren om credits te kopen', level: 3, paragraphs: ['Je kunt credits op de volgende manieren kopen:'], list: [
    'Losse aankoop (betalen per gebruik): je koopt creditpakketten wanneer je ze nodig hebt, en ze worden direct aan je account toegevoegd',
    'Maandabonnement: je krijgt elke maand automatisch credits, met 10% korting',
  ]},
  { heading: '4.2 Prijzen en facturering', level: 3, paragraphs: [
    'Alle prijzen worden getoond in Amerikaanse dollars en bevatten de geldende kosten. Credits worden direct aan je account toegevoegd zodra de betaling is bevestigd. Aankopen van credits worden niet terugbetaald, behalve als de wet dat vereist of als ons Terugbetalingsbeleid dat uitdrukkelijk bepaalt.',
  ]},
  { heading: '4.3 Gratis testcredits', level: 3, paragraphs: ['Nieuwe gebruikers krijgen bij de registratie 1.000 gratis testcredits. Voor testcredits geldt:'], list: [
    'Ze zijn gratis en je hoeft geen betaalgegevens te geven',
    'Ze werken voor e-mailverificatie hetzelfde als betaalde credits',
    'Ze worden niet terugbetaald, omdat ze een geschenk zijn',
    'Je kunt er tot 1.000 e-mailadressen mee controleren',
    'Ze helpen je de kwaliteit van onze dienst te beoordelen voordat je iets koopt',
  ]},
  { heading: '5. Terugkerende abonnementen', paragraphs: ['Maandelijkse abonnementen op credits worden elke maand automatisch gefactureerd. Je wordt elke maand vooraf gefactureerd, en de credits worden aan je account toegevoegd zodra de betaling is gelukt. De belangrijkste voorwaarden:'], list: [
    'Het abonnement wordt aan het einde van elke factuurperiode automatisch verlengd, tenzij je opzegt',
    'Je kunt je abonnement op elk moment opzeggen vóór de volgende factuurdatum',
    'De opzegging gaat in aan het einde van de lopende factuurperiode',
    'Credits die al aan je account zijn toegevoegd, blijven na de opzegging beschikbaar',
    'Abonnees krijgen 10% korting ten opzichte van de prijs per gebruik',
  ]},
  { heading: '6. Gebruik en beheer van credits' },
  { heading: '6.1 Verbruik van credits', level: 3, paragraphs: ['Credits worden als volgt verbruikt:'], list: [
    'Elke geslaagde e-mailverificatie kost precies 1 credit',
    'Credits worden alleen afgeschreven voor afgeronde verificaties',
    'Verificaties die mislukken door systeemfouten kosten geen credits',
    'Dubbele e-mailadressen in dezelfde verificatiebatch worden één keer verwerkt',
  ]},
  { heading: '6.2 Geldigheid en overdracht van credits', level: 3, paragraphs: ['Belangrijke regels voor credits:'], list: [
    'Geen vervaldatum: credits verlopen nooit en blijven onbeperkt op je account staan',
    'Niet overdraagbaar: credits kunnen niet tussen accounts worden overgezet',
    'Niet terugbetaalbaar: na aankoop worden credits niet terugbetaald (zie het Terugbetalingsbeleid voor uitzonderingen)',
    'Gekoppeld aan het account: credits horen bij je account en kunnen niet worden gedeeld',
  ]},
  { id: 'cancellation-policy', heading: '7. Opzegging en terugbetalingen', paragraphs: ['Je kunt je terugkerende abonnement op elk moment opzeggen via je accountinstellingen of door contact op te nemen met ons supportteam via info@giggal.ai. Na de opzegging:'], list: [
    'Wordt je abonnement niet verlengd voor de volgende factuurperiode',
    'Houd je alle credits op je account',
    'Kun je je bestaande credits zonder beperking blijven gebruiken',
    'Kun je nog steeds creditpakketten per gebruik kopen',
  ], after: ['Terugbetalingen bij ongebruikelijke activiteit of uitzonderlijke omstandigheden worden behandeld volgens ons Terugbetalingsbeleid. Heb je problemen of vermoed je fraude? Neem dan direct contact op met ons supportteam, zodat we het kunnen bekijken.']},
  { heading: '8. Beleid voor aanvaardbaar gebruik', paragraphs: ['Je verplicht je om de Dienst alleen voor wettige doelen te gebruiken en volgens alle geldende wetten en regels. Je gaat ermee akkoord de Dienst niet te gebruiken om:'], list: [
    'E-mailadressen te controleren die zonder de juiste toestemming of machtiging zijn verkregen',
    'Na de verificatie spam of ongevraagde e-mails te sturen',
    'Geldende wetten of regels te overtreden, waaronder de CAN-SPAM Act, de AVG en CASL',
    'Inbreuk te maken op de rechten van anderen of die rechten te schenden',
    'Malware of andere schadelijke code te verspreiden',
    'Je voor te doen als een andere persoon of organisatie',
    'Fraude te plegen of onze dienst te misbruiken',
    'Onze verificatiediensten zonder toestemming door te verkopen of te verspreiden',
    'Te proberen onze verificatiesystemen te decompileren of aan te tasten',
    'Je inloggegevens of credits te delen met onbevoegde gebruikers',
  ]},
  { heading: '9. Nauwkeurigheid en beperkingen van de dienst', paragraphs: ['We streven naar de hoogste nauwkeurigheid bij e-mailverificatie. Je erkent en aanvaardt wel dat:'], list: [
    'E-mailverificatie door technische beperkingen geen 100% nauwkeurigheid kan garanderen',
    'Sommige mailservers onterecht positieve of onterecht negatieve antwoorden kunnen geven',
    'De verificatieresultaten zijn gebaseerd op controles in realtime en na verloop van tijd kunnen veranderen',
    'We de verificatieresultaten "zoals ze zijn" leveren en geen garanties geven over de bezorgbaarheid',
    'Jij verantwoordelijk bent voor het wettige gebruik van de gecontroleerde gegevens en voor alle communicatie die daarop volgt',
  ]},
  { heading: '10. Wettig gebruik en naleving bij berichten', paragraphs: ['Gebruik je de gecontroleerde e-mailadressen voor outreach, transactionele berichten of supportberichten? Dan ben jij als enige verantwoordelijk voor het naleven van alle geldende wetten en regels, waaronder maar niet beperkt tot:'], list: [
    'CAN-SPAM Act (Verenigde Staten)', 'AVG (Europese Unie)', 'CASL (Canada)', 'Andere geldende wetten tegen spam en voor gegevensbescherming',
  ], after: ['Je moet de vereiste toestemming verkrijgen en, waar van toepassing, de wettelijk verplichte afmeld- of voorkeursinstellingen opnemen. Giggal.ai is niet verantwoordelijk voor jouw gebruik van de gecontroleerde e-mailadressen.']},
  { heading: '11. Intellectueel eigendom', paragraphs: ['De Dienst en de originele inhoud, functies en functionaliteit ervan zijn eigendom van Giggal.ai. Ze worden beschermd door internationale wetten op auteursrecht, merken, octrooien, bedrijfsgeheimen en andere intellectuele eigendomsrechten. Je mag geen deel van onze diensten kopiëren, wijzigen, verspreiden, verkopen of verhuren zonder onze voorafgaande schriftelijke toestemming.']},
  { heading: '12. Gegevens en privacy', paragraphs: [
    'Het gebruik van de Dienst valt ook onder ons Privacybeleid. We verzamelen, bewaren en verwerken je gegevens zoals beschreven in het Privacybeleid. Je behoudt alle rechten op je klantgegevens en e-maillijsten. We gebruiken ze alleen als dat nodig is om de Dienst te leveren of als de wet dat vereist.',
    'E-mailadressen die je ter verificatie stuurt, worden veilig verwerkt en niet permanent bewaard. We verkopen en delen je e-maillijsten niet, en we gebruiken ze voor geen ander doel dan het leveren van verificatiediensten.',
  ]},
  { heading: '13. Wijzigingen en beschikbaarheid van de dienst', paragraphs: [
    'We behouden ons het recht voor om de Dienst (of een deel ervan) tijdelijk of definitief te wijzigen of te stoppen, met of zonder aankondiging. We zijn niet aansprakelijk tegenover jou of een derde voor een wijziging, opschorting of stopzetting van de Dienst.',
    'We streven naar een hoge beschikbaarheid van de dienst, maar garanderen geen ononderbroken toegang. Gepland onderhoud kondigen we vooraf aan als dat mogelijk is.',
  ]},
  { heading: '14. Beperking van aansprakelijkheid', paragraphs: ['Voor zover de wet dat maximaal toestaat, zijn Giggal.ai en haar bestuurders, medewerkers, partners, agenten, leveranciers en gelieerde partijen in geen geval aansprakelijk voor indirecte, incidentele, bijzondere, gevolg- of punitieve schade. Daaronder valt zonder beperking verlies van winst, gegevens, gebruik, goodwill of ander immaterieel verlies, als gevolg van:'], list: [
    'Je toegang tot of gebruik van de Dienst, of het niet kunnen openen of gebruiken ervan',
    'Gedrag of inhoud van derden op de Dienst',
    'Inhoud die via de Dienst is verkregen',
    'Onbevoegde toegang tot, gebruik of wijziging van je verzendingen of inhoud',
    'Onjuiste resultaten van e-mailverificatie',
    'Mislukte bezorging van e-mails of bounces na verificatie',
    'Credits die zijn verbruikt door een fout of verkeerd gebruik van de gebruiker',
  ]},
  { heading: '15. Uitsluiting van garanties', paragraphs: [
    'De Dienst wordt geleverd "zoals hij is" en "zoals beschikbaar", zonder enige garantie, uitdrukkelijk of stilzwijgend. Giggal.ai wijst alle garanties af, waaronder maar niet beperkt tot stilzwijgende garanties van verkoopbaarheid, geschiktheid voor een bepaald doel en het niet maken van inbreuk.',
    'We garanderen niet dat de Dienst ononderbroken, tijdig, veilig of foutloos is, of dat de resultaten van e-mailverificatie 100% juist zijn.',
  ]},
  { heading: '16. Vrijwaring', paragraphs: ['Je verplicht je om Giggal.ai en haar licentienemers en licentiegevers te verdedigen, schadeloos te stellen en te vrijwaren tegen alle claims, schade, verplichtingen, verliezen, aansprakelijkheid, kosten, schulden en uitgaven die voortkomen uit je gebruik van de Dienst of het niet naleven van deze Voorwaarden.']},
  { heading: '17. Beëindiging', paragraphs: ['We kunnen je account en je toegang tot de Dienst direct beëindigen of opschorten, zonder voorafgaande aankondiging en zonder aansprakelijkheid, om welke reden dan ook, waaronder zonder beperking als je deze Voorwaarden schendt. Bij beëindiging:'], list: [
    'Vervalt je recht om de Dienst te gebruiken direct',
    'Vervallen ongebruikte credits zonder terugbetaling',
    'Worden terugkerende abonnementen opgezegd',
    'Kan de toegang tot je account en je gegevens definitief worden ingetrokken',
  ]},
  { heading: '18. Toepasselijk recht', paragraphs: ['Op deze Voorwaarden is het recht van toepassing van het rechtsgebied waarin Giggal.ai actief is. De Voorwaarden worden ook volgens dat recht uitgelegd, zonder rekening te houden met de regels voor conflicterend recht.']},
  { heading: '19. Beslechting van geschillen', paragraphs: ['Geschillen die voortkomen uit of verband houden met deze Voorwaarden of de Dienst proberen we eerst op te lossen door te onderhandelen in goed vertrouwen. Lukt dat niet, dan worden ze beslecht door bindende arbitrage volgens de regels van de bevoegde arbitrage-instantie.']},
  { heading: '20. Wijziging van de voorwaarden', paragraphs: ['We behouden ons het recht voor om deze Voorwaarden op elk moment en naar eigen inzicht te wijzigen of te vervangen. Bij een belangrijke wijziging laten we dat minstens 30 dagen weten voordat de nieuwe voorwaarden ingaan. Wat een belangrijke wijziging is, bepalen wij naar eigen inzicht.']},
  { heading: '21. Scheidbaarheid', paragraphs: ['Als een bepaling van deze Voorwaarden niet afdwingbaar of ongeldig blijkt, wordt die bepaling aangepast en uitgelegd om het doel ervan zo goed mogelijk te bereiken, voor zover de geldende wet dat toestaat. De andere bepalingen blijven volledig van kracht.']},
  { heading: '22. Contactgegevens', paragraphs: ['Heb je vragen over deze Gebruiksvoorwaarden? Neem dan contact met ons op.', 'E-mail: info@giggal.ai', 'Website: https://giggal.ai', 'Door de diensten van Giggal.ai te gebruiken, verklaar je dat je deze Gebruiksvoorwaarden hebt gelezen en begrepen, en ga je ermee akkoord eraan gebonden te zijn.']},
]

export default function VoorwaardenPage() {
  return (
    <LegalPageL10n
      locale="nl"
      path="/nl/voorwaarden"
      title="Gebruiksvoorwaarden"
      accent="van Giggal.ai"
      updated="22 oktober 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
