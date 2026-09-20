'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/fr/contact',
  crumb: 'Contact',
  h1Lead: 'Parlons de',
  h1Accent: 'votre liste',
  intro: 'Une question sur la vérification d’email, un coup de main pour démarrer ou un volume sur mesure : écrivez-nous et nous répondons en général en moins de 24 heures.',
  formTitle: 'Envoyez-nous un message',
  success: 'Merci ! Nous répondons en moins de 24 heures.',
  failed: 'L’envoi a échoué',
  labels: {
    name: 'Nom et prénom',
    email: 'Adresse email',
    company: 'Entreprise',
    phone: 'Téléphone',
    message: 'Message',
  },
  placeholders: {
    name: 'Marie Dupont',
    email: 'marie@entreprise.fr',
    company: 'Votre entreprise SAS',
    phone: '+33 1 23 45 67 89',
    message: 'Dites-nous ce dont vous avez besoin...',
  },
  submit: 'Envoyer le message',
  submitting: 'Envoi en cours...',
  humans: 'De vraies personnes, prêtes à vous aider. Nous répondons en général en moins de 24 heures, en anglais ou en français.',
  emailTitle: 'Écrivez-nous',
  phoneTitle: 'Appelez-nous',
  phoneHours: 'Lun. à ven., 9h à 18h (heure de Londres)',
  addressTitle: 'Siège',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, Londres E6 2JA, Royaume-Uni',
  ],
  ctaTitle: 'Vous préférez ne pas attendre ?',
  ctaText: 'Commencez à vérifier tout de suite avec 1 000 crédits offerts. Sans carte.',
  ctaButton: 'Commencer gratuitement',
  ctaHref: '/fr/inscription',
}

export default function Page() {
  return <ContactPageL10n locale="fr" content={content} />
}
