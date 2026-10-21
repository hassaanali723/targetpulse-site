import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Privacybeleid van de e-mailverificatiedienst',
  description: 'Hoe Giggal.ai persoonsgegevens en de adressen voor verificatie verwerkt. Dit is een vertaling voor het gemak. Bij verschillen geldt de Engelse versie.',
  alternates: { canonical: '/nl/privacy', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'nl_NL', title: 'Privacybeleid', url: 'https://giggal.ai/nl/privacy', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Inleiding', paragraphs: [
    'De dienst wordt geleverd door TargetPulse Ltd ("wij", "ons"), een bedrijf geregistreerd in Engeland en Wales onder nummer 17079825, met statutaire zetel op Office 17366, 182-184 High Street North, East Ham, Londen E6 2JA. TargetPulse Ltd is de verwerkingsverantwoordelijke voor persoonsgegevens die via Giggal.ai worden verwerkt. Contact: info@giggal.ai. Misbruik melden: abuse@giggal.ai.',
    'Giggal.ai ("wij", "ons") zet zich in om je privacy te beschermen. Dit privacybeleid legt uit hoe we je gegevens verzamelen, gebruiken, verstrekken en beschermen als je onze diensten voor e-mailverificatie en onze website gebruikt.',
  ]},
  { heading: '2. Gegevens die we verzamelen' },
  { heading: '2.1 Persoonsgegevens', level: 3, paragraphs: ['We kunnen persoonsgegevens verzamelen die je ons zelf geeft als je:'], list: [
    'Een account aanmaakt', 'Verificatiecredits of een abonnement koopt', 'Contact opneemt met onze klantensupport', 'Lijsten met e-mailadressen ter verificatie stuurt', 'De contact- of supportformulieren op onze website gebruikt',
  ], after: ['Deze gegevens kunnen bestaan uit je naam, e-mailadres, accountgegevens, optionele bedrijfsgegevens en metadata van transacties. Kaartgegevens worden verwerkt door onze betaalprovider en worden niet door ons bewaard.']},
  { heading: '2.2 Authenticatie en technische gegevens', level: 3, paragraphs: ['We gebruiken Clerk voor het aanmaken van accounts en het inloggen (ook inloggen met Google en registreren met e-mail en wachtwoord). Via dit authenticatieproces verzamelen en verwerken we:'], list: [
    'Accountgegevens (zoals gebruikers-ID, naam en e-mailadres)',
    'De authenticatieprovider en de inlogmethode (Google of e-mail en wachtwoord)',
    'Metadata van inlogactiviteit (zoals de tijdstippen waarop je inlogt)',
    'Technische gegevens voor beveiliging (zoals IP-adres en user agent) om accounts te beschermen en misbruik te voorkomen',
    'Noodzakelijke sessiecookies of tokens die nodig zijn om je veilig ingelogd te houden',
  ]},
  { heading: '2.3 Gegevens van e-mailverificatie', level: 3, paragraphs: ['Als je onze diensten voor e-mailverificatie gebruikt, verzamelen en verwerken we:'], list: [
    'E-mailadressen die je ter verificatie stuurt',
    'Verificatieresultaten en status (geldig, ongeldig, catch-all, wegwerpadres, enzovoort)',
    'Lijsten met e-mailadressen die je uploadt voor verwerking in bulk',
    'Gegevens over je API-gebruik en je verificatiegeschiedenis',
  ]},
  { heading: '3. Hoe we je gegevens gebruiken', paragraphs: ['We gebruiken de verzamelde gegevens voor de volgende doelen:'], list: [
    'Onze diensten leveren en onderhouden', 'Je transacties verwerken en abonnementen beheren', 'Je meldingen over de dienst sturen', 'Klantensupport geven',
    'Onze diensten verbeteren en optimaliseren', 'Fraude en misbruik opsporen en voorkomen', 'Wettelijke verplichtingen nakomen', 'Gebruikspatronen en trends analyseren',
  ]},
  { heading: '4. Rechtsgrond voor de verwerking (AVG)', paragraphs: ['Kom je uit de Europese Economische Ruimte (EER)? Dan hangt onze rechtsgrond voor het verzamelen en gebruiken van je gegevens af van de gegevens en de context:'], list: [
    'Uitvoering van de overeenkomst: de verwerking is nodig om onze diensten te leveren',
    'Gerechtvaardigd belang: de verwerking dient onze gerechtvaardigde zakelijke belangen',
    'Toestemming: je hebt uitdrukkelijk toestemming gegeven voor bepaalde doelen',
    'Wettelijke verplichting: de verwerking is nodig om aan de wet te voldoen',
  ]},
  { heading: '5. Delen en verstrekken van gegevens' },
  { heading: '5.1 Dienstverleners', level: 3, paragraphs: ['We delen je gegevens met externe dienstverleners die namens ons diensten uitvoeren:'], list: [
    'Betaalproviders (onze erkende betaalprovider)', 'Authenticatieproviders (zoals Clerk)', 'Aanbieders van cloudhosting', 'Aanbieders van beveiliging en monitoring', 'Tools voor klantensupport',
  ]},
  { heading: '5.2 Wettelijke verplichtingen', level: 3, paragraphs: ['We kunnen je gegevens verstrekken als de wet ons daartoe verplicht of in reactie op geldige verzoeken van overheidsinstanties (bijvoorbeeld een gerechtelijk bevel of een dagvaarding).']},
  { heading: '5.3 Bedrijfsoverdrachten', level: 3, paragraphs: ['Zijn we betrokken bij een fusie, overname of verkoop van bedrijfsmiddelen, dan kunnen je gegevens worden overgedragen als onderdeel van die transactie.']},
  { heading: '6. Beveiliging van gegevens', paragraphs: ['We nemen passende technische en organisatorische beveiligingsmaatregelen om je gegevens te beschermen, waaronder:'], list: [
    'Versleuteling van gegevens tijdens verzending en opslag', 'Regelmatige beoordelingen van de beveiliging', 'Toegangscontrole en authenticatie', 'Beveiligde datacenters', 'Training van medewerkers in gegevensbescherming',
  ], after: ['Toch is geen enkele manier van verzenden via internet 100% veilig, en we kunnen geen absolute veiligheid garanderen.']},
  { heading: '7. Bewaren van gegevens', paragraphs: ['We bewaren je persoonsgegevens alleen zo lang als nodig is voor de doelen in dit privacybeleid, tenzij de wet een langere bewaartermijn vereist of toestaat. Hebben we je gegevens niet meer nodig, dan verwijderen of anonimiseren we ze op een veilige manier.']},
  { heading: '8. Je rechten', paragraphs: ['Afhankelijk van waar je woont, kun je de volgende rechten hebben:'], list: [
    'Inzage: inzage in je persoonsgegevens vragen',
    'Correctie: correctie van onjuiste gegevens vragen',
    'Verwijdering: verwijdering van je gegevens vragen',
    'Overdraagbaarheid: een kopie van je gegevens in een overdraagbaar formaat vragen',
    'Beperking: beperking van de verwerking vragen',
    'Bezwaar: bezwaar maken tegen de verwerking van je gegevens',
    'Toestemming intrekken: je toestemming intrekken als de verwerking daarop is gebaseerd',
  ], after: ['Wil je deze rechten gebruiken? Neem dan contact met ons op via info@giggal.ai.']},
  { heading: '9. Cookies en trackingtechnologie', paragraphs: ['We gebruiken cookies en vergelijkbare trackingtechnologie om activiteit op onze website te volgen en bepaalde gegevens op te slaan. Je kunt je browser zo instellen dat die alle cookies weigert of laat zien wanneer er een cookie wordt verstuurd. Accepteer je geen cookies, dan kun je sommige delen van onze dienst misschien niet gebruiken.']},
  { heading: '10. Links naar derden', paragraphs: ['Onze website kan links bevatten naar websites van derden. We zijn niet verantwoordelijk voor de privacypraktijken van deze externe websites. We raden je aan het privacybeleid te lezen van elke website van derden die je bezoekt.']},
  { heading: '11. Privacy van kinderen', paragraphs: ['Onze diensten zijn niet bedoeld voor personen jonger dan 18 jaar. We verzamelen niet bewust persoonsgegevens van kinderen. Merk je dat een kind ons persoonsgegevens heeft gegeven? Neem dan contact met ons op. We nemen dan maatregelen om die gegevens te verwijderen.']},
  { heading: '12. Internationale doorgifte van gegevens', paragraphs: ['Je gegevens kunnen worden doorgegeven aan en bewaard op computers buiten je staat, provincie, land of ander rechtsgebied, waar andere wetten voor gegevensbescherming kunnen gelden. We zorgen voor passende waarborgen bij zulke doorgiften.']},
  { heading: '13. Privacyrechten in Californië (CCPA)', paragraphs: ['Woon je in Californië? Dan heb je specifieke rechten over je persoonsgegevens:'], list: [
    'Recht om te weten welke persoonsgegevens worden verzameld',
    'Recht om te weten of persoonsgegevens worden verkocht of verstrekt',
    'Recht om je af te melden voor de verkoop van persoonsgegevens',
    'Recht op verwijdering van persoonsgegevens',
    'Recht om niet gediscrimineerd te worden als je je CCPA-rechten gebruikt',
  ]},
  { heading: '14. Wijzigingen in dit privacybeleid', paragraphs: ['We kunnen ons privacybeleid van tijd tot tijd bijwerken. We laten je wijzigingen weten door het nieuwe privacybeleid op deze pagina te publiceren en de datum "Laatst bijgewerkt" aan te passen. We raden je aan dit privacybeleid regelmatig te lezen.']},
  { heading: '15. Contact', paragraphs: ['Heb je vragen over dit privacybeleid? Neem dan contact met ons op.', 'E-mail: info@giggal.ai', 'Website: https://giggal.ai', 'Door de diensten van Giggal.ai te gebruiken, verklaar je dat je dit privacybeleid hebt gelezen en begrepen, en ga je akkoord met de voorwaarden ervan.']},
]

export default function PrivacyPage() {
  return (
    <LegalPageL10n
      locale="nl"
      path="/nl/privacy"
      title="Privacybeleid"
      accent="van Giggal.ai"
      updated="1 oktober 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
