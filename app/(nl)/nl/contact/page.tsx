'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/nl/contact',
  crumb: 'Contact',
  h1Lead: 'Laten we praten over',
  h1Accent: 'je lijst',
  intro: 'Heb je een vraag over e-mailverificatie, hulp nodig bij de start of een volume op maat? Stuur ons een bericht. We antwoorden meestal binnen 24 uur.',
  formTitle: 'Stuur ons een bericht',
  success: 'Bedankt! We antwoorden binnen 24 uur.',
  failed: 'Verzenden is mislukt',
  labels: {
    name: 'Volledige naam',
    email: 'E-mailadres',
    company: 'Bedrijf',
    phone: 'Telefoon',
    message: 'Bericht',
  },
  placeholders: {
    name: 'Sanne de Vries',
    email: 'sanne@bedrijf.nl',
    company: 'Jouw bedrijf B.V.',
    phone: '+31 20 123 4567',
    message: 'Vertel ons wat je nodig hebt...',
  },
  submit: 'Bericht versturen',
  submitting: 'Bezig met versturen...',
  humans: 'Echte mensen die je graag helpen. We antwoorden meestal binnen 24 uur, in het Engels of het Nederlands.',
  emailTitle: 'Mail ons',
  phoneTitle: 'Bel ons',
  phoneHours: 'Ma. t/m vr., 9.00 tot 18.00 uur (tijd in Londen)',
  addressTitle: 'Hoofdkantoor',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, Londen E6 2JA, Verenigd Koninkrijk',
  ],
  ctaTitle: 'Liever niet wachten?',
  ctaText: 'Begin direct met controleren met 1.000 gratis credits. Geen creditcard nodig.',
  ctaButton: 'Gratis beginnen',
  ctaHref: '/nl/registreren',
}

export default function Page() {
  return <ContactPageL10n locale="nl" content={content} />
}
