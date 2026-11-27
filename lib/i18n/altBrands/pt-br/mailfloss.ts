// Brazilian Portuguese Mailfloss alternative page. Translated from
// app/(en)/mailfloss-alternative (2026-11-27). Competitor words come from
// lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'mailfloss',
  path: '/pt-br/alternativa-ao-mailfloss',
  cluster: 'altMailfloss',
  metaTitle: 'Alternativa ao Mailfloss: preços e catch-all | Giggal.ai',
  ogTitle: 'Alternativa ao Mailfloss que verifica e-mails catch-all',
  desc: 'O Mailfloss limpa todo dia a lista da sua plataforma de e-mail, mas só marca os catch-all. A Giggal.ai devolve um resultado neles a US$ 9,90 por 10.000.',
  h1: ['Uma ', 'alternativa ao Mailfloss', ' para limpar uma lista uma única vez'],
  heroP:
    'O Mailfloss se conecta à sua plataforma de e-mail marketing e limpa a lista todos os dias. Ele marca endereços catch-all, mas não os confirma. A Giggal.ai verifica as listas que você envia por upload e devolve um resultado em endereços catch-all, por US$ 9,90 a cada 10.000 e-mails.',
  bluf: [
    { k: 'Como funciona', v: 'O Mailfloss limpa sua lista dentro da sua plataforma de e-mail. A Giggal.ai verifica listas que você envia por upload ou pela API.' },
    { k: 'Catch-all', v: 'O Mailfloss marca endereços catch-all. A Giggal.ai devolve um resultado neles.' },
    { k: 'Preço', v: 'Os créditos pré-pagos do Mailfloss custam US$ 40 por 10.000. A Giggal.ai custa US$ 9,90.' },
    { k: 'Uso grátis', v: 'O Mailfloss dá 500 verificações grátis por mês. A Giggal.ai dá 1.000 uma única vez, sem cartão.' },
  ],
  about: {
    heading: 'O que é o Mailfloss?',
    paragraphs: [
      'O Mailfloss é um serviço de limpeza de listas de e-mail. Ele se conecta a 41 plataformas de e-mail, como Mailchimp, Klaviyo, HubSpot e ActiveCampaign. Depois, remove endereços inválidos da sua lista todos os dias.',
      'Ele também corrige erros de digitação comuns em endereços de e-mail. Ele tem uma API em tempo real, webhooks e um widget de formulário.',
      'O Mailfloss vende assinaturas mensais e créditos pré-pagos. Os créditos pré-pagos nunca expiram.',
    ],
  },
  reasons: {
    heading: 'Por que as pessoas procuram uma alternativa ao Mailfloss',
    items: [
      { k: 'Catch-all', v: 'O Mailfloss marca endereços catch-all. Ele não confirma se a caixa existe.' },
      { k: 'Cartão no teste', v: 'O teste de 7 dias das assinaturas exige cartão de crédito.' },
      { k: 'Limite de plataformas', v: 'O Lite se conecta a 1 plataforma de e-mail, e o Business se conecta a 10.' },
      { k: 'Preço', v: 'Os créditos pré-pagos custam US$ 40 por 10.000 e US$ 300 por 100.000.' },
    ],
  },
  catchAllHeading: 'Como o Mailfloss e a Giggal.ai tratam e-mails catch-all',
  catchAllProse:
    'O Mailfloss marca endereços catch-all e deixa a decisão com você. A Giggal.ai faz verificações adicionais nesses endereços e devolve um de quatro resultados, por 1 crédito cada. Além disso, ela verifica endereços atrás de 15 secure email gateways citados pelo nome.',
  pricingHeading: 'Preços do Mailfloss e da Giggal.ai',
  pricingProse:
    'As assinaturas do Mailfloss são Lite por US$ 29 por mês com 10.000 créditos, Business por US$ 59 com 25.000 e Pro por US$ 209 com 125.000. Os créditos pré-pagos custam US$ 8 por 1.000, US$ 40 por 10.000, US$ 300 por 100.000 e US$ 1.200 por um milhão.',
  pricingExtra: [
    'Toda conta do Mailfloss também recebe 500 verificações grátis por mês. A Giggal.ai vende 10.000 créditos por US$ 9,90 e um milhão por US$ 680, sem assinatura.',
  ],
  strengths: {
    heading: 'Quando o Mailfloss é uma boa escolha',
    intro: 'O Mailfloss faz algumas coisas que a Giggal.ai não faz:',
  },
  others: {
    heading: 'Outras alternativas ao Mailfloss',
    intro: 'Estes verificadores também limpam listas de marketing. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Tem integração com mais de 50 ferramentas de marketing. 10.000 créditos permanentes custam US$ 60.' },
      { name: 'Bounceless', text: '10.000 créditos custam US$ 29. Dá 1.000 créditos grátis por mês com um e-mail corporativo.' },
      { name: 'no2bounce', text: 'Tem integração com HubSpot, Klaviyo e Zoho. 10.000 créditos custam US$ 20 e nunca expiram.' },
    ],
  },
  testHeading: 'Teste a Giggal.ai em uma exportação da sua plataforma de e-mail',
  testSteps: [
    'Exporte uma lista que você já verificou no Mailfloss.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas catch-all com o que o Mailfloss marcou.',
  ],
  ctaHeadline: 'Receba um resultado para endereços catch-all, não só uma marcação',
  faqs: [
    {
      q: 'Quanto custa o Mailfloss?',
      a: 'As assinaturas começam em US$ 29 por mês por 10.000 créditos. Os créditos pré-pagos custam US$ 40 por 10.000 e US$ 1.200 por um milhão, e nunca expiram.',
    },
    {
      q: 'O Mailfloss tem plano grátis?',
      a: 'Sim. Toda conta recebe 500 verificações grátis por mês. As assinaturas também têm um teste de 7 dias, que exige cartão.',
    },
    {
      q: 'O Mailfloss verifica e-mails catch-all?',
      a: 'Ele marca esses e-mails. Ele não confirma se a caixa existe. A Giggal.ai devolve um resultado em endereços catch-all por 1 crédito cada.',
    },
    {
      q: 'A Giggal.ai limpa a lista da minha plataforma de e-mail como o Mailfloss?',
      a: 'Não. A Giggal.ai trabalha com uploads, uma API, Zapier, n8n e HubSpot. Ela não roda uma limpeza diária dentro da sua plataforma de e-mail.',
    },
  ],
  breadcrumb: 'Alternativa ao Mailfloss',
}

export default cfg
