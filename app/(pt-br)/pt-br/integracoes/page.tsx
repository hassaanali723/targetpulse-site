import type { Metadata } from 'next'
import IntegrationsPageL10n, { type IntegrationsContent } from '@/components/l10n/IntegrationsPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/pt-br/integracoes'
const DESC = 'Integrações para a verificação de e-mail: Zapier, n8n, HubSpot, Mailchimp e Google Sheets. Verifique endereços nas ferramentas que você já usa, sem código.'

export const metadata: Metadata = {
  title: { absolute: 'Integrações: Zapier, n8n, API e verificação em massa | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('integrations') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Integrações para a verificação de e-mail',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
}

const content: IntegrationsContent = {
  path: PATH,
  crumb: 'Integrações',
  h1Lead: 'Verificação de e-mail nas',
  h1Accent: 'ferramentas que você já usa',
  intro: 'Conecte o verificador catch-all da Giggal.ai à sua plataforma de e-mail marketing, ao CRM, às planilhas e às ferramentas de outreach. Verifique os contatos novos em tempo real, mantenha as listas limpas no automático e evite os bounces antes que aconteçam.',
  routes: [
    {
      title: 'Zapier',
      body: 'Conecte a Giggal.ai a mais de 8.000 apps sem escrever código: HubSpot, Mailchimp, Google Sheets, Pipedrive, Typeform e outros. Cada contato novo é verificado ao entrar. Os guias por app estão em inglês.',
      href: '/integrations/zapier',
      cta: 'Guia do Zapier (em inglês)',
    },
    {
      title: 'n8n',
      body: 'Para quem automatiza com o n8n: um nó HTTP para a nossa API verifica os endereços dentro do fluxo e envia os resultados para onde forem necessários.',
      href: '/integrations/n8n',
      cta: 'Guia do n8n (em inglês)',
    },
    {
      title: 'API REST',
      body: 'Verificação individual e em massa, resolução catch-all, créditos e resultados em JSON, com autenticação por chave de API. Tudo o que faz uma requisição HTTP pode verificar e-mails com a Giggal.',
      href: '/public/docs',
      cta: 'Documentação da API (em inglês)',
    },
  ],
  notFoundTitle: 'Não encontrou a sua ferramenta?',
  notFoundText: 'Qualquer sistema que envie requisições HTTP pode verificar e-mails com a Giggal.ai. Escreva para a gente e indicamos o caminho mais curto.',
  contactLabel: 'Fale com a gente',
  contactHref: '/pt-br/contato',
}

export default function Page() {
  return <IntegrationsPageL10n locale="pt-br" content={content} />
}
