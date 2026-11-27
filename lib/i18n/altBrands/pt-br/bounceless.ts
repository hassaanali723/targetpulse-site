// Brazilian Portuguese Bounceless alternative page. Translated from
// app/(en)/bounceless-alternative (2026-11-27). Competitor words come from
// lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'bounceless',
  path: '/pt-br/alternativa-ao-bounceless',
  cluster: 'altBounceless',
  metaTitle: 'Alternativa ao Bounceless: preços do Bounceless.io | Giggal.ai',
  ogTitle: 'Alternativa ao Bounceless com verificação atrás de gateways',
  desc: 'O Bounceless custa US$ 29 por 10.000. A Giggal.ai custa US$ 9,90 e verifica e-mails catch-all e atrás de secure email gateways, com créditos que nunca expiram.',
  h1: ['Uma ', 'alternativa ao Bounceless', ' que também verifica e-mails atrás de gateways'],
  heroP:
    'O Bounceless é um verificador de e-mails de baixo custo, com pacotes avulsos e planos mensais. Agora ele inclui indícios de catch-all na verificação padrão. A Giggal.ai também devolve um resultado em endereços catch-all. Além disso, verifica atrás de 15 secure email gateways citados pelo nome.',
  bluf: [
    { k: 'Preço', v: '10.000 créditos custam US$ 29 no Bounceless e US$ 9,90 na Giggal.ai.' },
    { k: 'Em volume', v: 'Um milhão de créditos custa US$ 579 no Bounceless e US$ 680 na Giggal.ai.' },
    { k: 'Gateways', v: 'A Giggal.ai cita por nome 15 gateways de e-mail atrás dos quais verifica. O Bounceless não cita nenhum.' },
    { k: 'Créditos grátis', v: 'O Bounceless dá 1.000 por mês com um e-mail corporativo. A Giggal.ai dá 1.000 uma única vez.' },
  ],
  about: {
    heading: 'O que é o Bounceless?',
    paragraphs: [
      'O Bounceless é um serviço de verificação de e-mails do site bounceless.io. Ele verifica listas em massa e e-mails avulsos, e oferece uma API e um servidor MCP.',
      'A conta também inclui verificações de saúde do remetente, de posicionamento na caixa de entrada e de formulários de cadastro. O Bounceless diz que tem mais de 39.000 contas de clientes.',
      'O Bounceless ainda não tem integrações nativas com apps. Ele oferece guias de CSV e API para ferramentas como Mailchimp, HubSpot e ActiveCampaign.',
    ],
  },
  reasons: {
    heading: 'Por que as pessoas procuram uma alternativa ao Bounceless',
    items: [
      { k: 'Gateways', v: 'O Bounceless não cita secure email gateways como Proofpoint ou Mimecast.' },
      { k: 'Integrações', v: 'Ele ainda não tem integrações nativas com apps, só guias de CSV e API.' },
      { k: 'Preço em 10.000', v: '10.000 créditos custam US$ 29. A Giggal.ai cobra US$ 9,90 pela mesma quantidade.' },
      { k: 'E-mail corporativo', v: 'Os créditos grátis mensais exigem um e-mail corporativo. Endereços de provedores públicos não recebem nenhum.' },
    ],
  },
  catchAllHeading: 'Bounceless vs Giggal.ai em endereços catch-all',
  catchAllProse:
    'O Bounceless inclui indícios de catch-all na verificação de 1 crédito e não cobra resultados não confirmados. A Giggal.ai também devolve um resultado em endereços catch-all por 1 crédito, e devolve o crédito em resultados desconhecidos. A principal diferença são os secure email gateways. A Giggal.ai verifica atrás de 15 deles, entre eles Proofpoint, Mimecast e Barracuda.',
  pricingHeading: 'Preços do Bounceless e da Giggal.ai',
  pricingProse:
    'Os pacotes de pagamento por uso do Bounceless custam US$ 19 por 5.000, US$ 29 por 10.000, US$ 159 por 100.000 e US$ 579 por um milhão. Os planos mensais começam em US$ 19 por 6.500 créditos. Os créditos nunca expiram, sejam de pacotes ou de planos.',
  pricingExtra: [
    'A Giggal.ai vende 10.000 créditos por US$ 9,90, 100.000 por US$ 76 e um milhão por US$ 680. O Bounceless custa menos em um milhão. A Giggal.ai custa menos em 10.000 e em 100.000.',
  ],
  strengths: {
    heading: 'Quando o Bounceless é uma boa escolha',
    intro: 'O Bounceless tem pontos fortes reais:',
  },
  others: {
    heading: 'Outras alternativas ao Bounceless',
    intro: 'Estes verificadores têm preços próximos aos do Bounceless. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'no2bounce', text: '10.000 créditos custam US$ 20 e um milhão custa US$ 679. Os créditos nunca expiram.' },
      { name: 'QuickEmailVerification', text: 'Dá 100 créditos grátis todos os dias. 10.000 créditos permanentes custam US$ 60.' },
      { name: 'Mailfloss', text: 'Conecta-se a 41 plataformas de e-mail e remove endereços inválidos todos os dias. 10.000 créditos pré-pagos custam US$ 40.' },
    ],
  },
  testHeading: 'Passe a mesma lista no Bounceless e na Giggal.ai',
  testSteps: [
    'Exporte uma lista que você já verificou no Bounceless.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas catch-all com os indícios que o Bounceless devolveu.',
  ],
  ctaHeadline: 'E-mails catch-all e atrás de gateways por 1 crédito cada',
  faqs: [
    {
      q: 'Quanto custa o Bounceless?',
      a: 'Os pacotes de pagamento por uso do Bounceless começam em US$ 19 por 5.000 créditos. 10.000 custam US$ 29, 100.000 custam US$ 159 e um milhão custa US$ 579. Os planos mensais começam em US$ 19 por 6.500 créditos.',
    },
    {
      q: 'O Bounceless é grátis?',
      a: 'O Bounceless dá 1.000 créditos grátis por mês se você se cadastrar com um e-mail corporativo. Não é preciso cartão. A Giggal.ai dá 1.000 créditos grátis uma única vez, sem cartão.',
    },
    {
      q: 'O Bounceless verifica e-mails catch-all?',
      a: 'Sim. O Bounceless inclui indícios de catch-all na verificação padrão de 1 crédito, sem custo extra. Resultados não confirmados não são cobrados.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao Bounceless?',
      a: 'Sim, se a sua lista tem muitos domínios de empresas. A Giggal.ai verifica atrás de 15 secure email gateways citados pelo nome e custa US$ 9,90 por 10.000 créditos.',
    },
  ],
  breadcrumb: 'Alternativa ao Bounceless',
}

export default cfg
