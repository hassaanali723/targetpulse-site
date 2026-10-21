'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/pl/kontakt',
  crumb: 'Kontakt',
  h1Lead: 'Porozmawiajmy o',
  h1Accent: 'twojej liście',
  intro: 'Masz pytanie o weryfikację e-mail, potrzebujesz pomocy na start albo większego wolumenu? Napisz do nas. Zwykle odpowiadamy w ciągu 24 godzin.',
  formTitle: 'Wyślij nam wiadomość',
  success: 'Dziękujemy! Odpowiemy w ciągu 24 godzin.',
  failed: 'Nie udało się wysłać wiadomości',
  labels: {
    name: 'Imię i nazwisko',
    email: 'Adres e-mail',
    company: 'Firma',
    phone: 'Telefon',
    message: 'Wiadomość',
  },
  placeholders: {
    name: 'Anna Kowalska',
    email: 'anna@firma.pl',
    company: 'Twoja Firma sp. z o.o.',
    phone: '+48 22 123 45 67',
    message: 'Napisz, czego potrzebujesz...',
  },
  submit: 'Wyślij wiadomość',
  submitting: 'Wysyłanie...',
  humans: 'Odpowiadają prawdziwi ludzie, gotowi pomóc. Zwykle odpowiadamy w ciągu 24 godzin, po angielsku lub po polsku.',
  emailTitle: 'Napisz do nas',
  phoneTitle: 'Zadzwoń do nas',
  phoneHours: 'Od poniedziałku do piątku, od 9:00 do 18:00 (czas londyński)',
  addressTitle: 'Siedziba',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, Londyn E6 2JA, Wielka Brytania',
  ],
  ctaTitle: 'Nie chcesz czekać?',
  ctaText: 'Zacznij weryfikować od razu z 1000 darmowych kredytów. Bez karty.',
  ctaButton: 'Zacznij za darmo',
  ctaHref: '/pl/rejestracja',
}

export default function Page() {
  return <ContactPageL10n locale="pl" content={content} />
}
