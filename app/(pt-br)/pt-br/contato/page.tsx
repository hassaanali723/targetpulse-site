'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/pt-br/contato',
  crumb: 'Contato',
  h1Lead: 'Fale com',
  h1Accent: 'a gente',
  intro: 'Dúvidas sobre a verificação de e-mail, ajuda para começar ou um volume sob medida: escreva para a gente e normalmente respondemos em menos de 24 horas.',
  formTitle: 'Envie uma mensagem',
  success: 'Obrigado! Respondemos em menos de 24 horas.',
  failed: 'Não foi possível enviar',
  labels: {
    name: 'Nome completo',
    email: 'E-mail',
    company: 'Empresa',
    phone: 'Telefone',
    message: 'Mensagem',
  },
  placeholders: {
    name: 'Maria Silva',
    email: 'maria@empresa.com.br',
    company: 'Sua empresa Ltda.',
    phone: '+55 11 91234-5678',
    message: 'Conte para a gente o que você precisa...',
  },
  submit: 'Enviar a mensagem',
  submitting: 'Enviando...',
  humans: 'Pessoas de verdade, prontas para ajudar. Normalmente respondemos em menos de 24 horas, em inglês ou em português.',
  emailTitle: 'Escreva para a gente',
  phoneTitle: 'Ligue para a gente',
  phoneHours: 'Seg a sex, 9h às 18h (horário de Londres)',
  addressTitle: 'Sede',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, Londres E6 2JA, Reino Unido',
  ],
  ctaTitle: 'Prefere não esperar?',
  ctaText: 'Comece a verificar agora mesmo com 1.000 créditos grátis. Sem cartão.',
  ctaButton: 'Começar grátis',
  ctaHref: '/pt-br/cadastro',
}

export default function Page() {
  return <ContactPageL10n locale="pt-br" content={content} />
}
