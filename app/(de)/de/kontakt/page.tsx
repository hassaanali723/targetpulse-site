'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  "path": "/de/kontakt",
  "crumb": "Kontakt",
  "h1Lead": "Sprechen Sie mit",
  "h1Accent": "uns",
  "intro": "Fragen zur E-Mail-Verifizierung, Hilfe beim Start oder ein individuelles Volumen: Schreiben Sie uns, wir antworten in der Regel innerhalb von 24 Stunden.",
  "formTitle": "Nachricht senden",
  "success": "Danke! Wir antworten innerhalb von 24 Stunden.",
  "failed": "Senden fehlgeschlagen",
  "labels": {
    "name": "Vor- und Nachname",
    "email": "E-Mail",
    "company": "Unternehmen",
    "phone": "Telefon",
    "message": "Nachricht"
  },
  "placeholders": {
    "name": "Max Mustermann",
    "email": "max@firma.de",
    "company": "Ihre Firma GmbH",
    "phone": "+49 30 1234 5678",
    "message": "Erzählen Sie uns, was Sie brauchen..."
  },
  "submit": "Nachricht senden",
  "submitting": "Wird gesendet...",
  "humans": "Echte Menschen, die gern helfen. Wir antworten in der Regel innerhalb von 24 Stunden, auf Englisch oder Deutsch.",
  "emailTitle": "Schreiben Sie uns",
  "phoneTitle": "Rufen Sie uns an",
  "phoneHours": "Mo bis Fr, 9 bis 18 Uhr (Londoner Zeit)",
  "addressTitle": "Anschrift",
  "addressLines": [
    "Office 17366",
    "182-184 High Street North",
    "East Ham, London E6 2JA, Vereinigtes Königreich"
  ],
  "ctaTitle": "Lieber nicht warten?",
  "ctaText": "Starten Sie sofort mit 1.000 Gratis-Credits. Keine Kreditkarte nötig.",
  "ctaButton": "Kostenlos starten",
  "ctaHref": "/de/registrieren"
}

export default function Page() {
  return <ContactPageL10n locale="de" content={content} />
}
