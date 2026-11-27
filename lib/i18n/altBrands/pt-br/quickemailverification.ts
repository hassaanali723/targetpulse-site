// Brazilian Portuguese QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words (free tier, catch-all status, strengths) match
// lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'quickemailverification',
  path: '/pt-br/alternativa-ao-quickemailverification',
  cluster: 'altQuickemailverification',
  metaTitle: 'Alternativa ao QuickEmailVerification e preços | Giggal.ai',
  ogTitle: 'Alternativa ao QuickEmailVerification que verifica catch-all',
  desc: 'O QuickEmailVerification cobra US$ 60 por 10.000 e marca o catch-all como status. A Giggal.ai devolve um resultado nesses e-mails por US$ 9,90 a cada 10.000.',
  h1: ['Uma ', 'alternativa ao QuickEmailVerification', ' que verifica e-mails catch-all'],
  heroP:
    'O QuickEmailVerification é um verificador de e-mails que existe há muitos anos, com 100 créditos grátis por dia. Ele marca endereços catch-all como catch-all e para aí. A Giggal.ai devolve um resultado nesses endereços, por US$ 9,90 a cada 10.000 e-mails.',
  bluf: [
    { k: 'Catch-all', v: 'O QuickEmailVerification marca o catch-all como um status. A Giggal.ai devolve um resultado.' },
    { k: 'Preço', v: '10.000 créditos custam US$ 60 no QuickEmailVerification e US$ 9,90 na Giggal.ai.' },
    { k: 'Créditos grátis', v: 'O QuickEmailVerification dá 100 por dia. A Giggal.ai dá 1.000 uma única vez, sem cartão.' },
    { k: 'Validade', v: 'Os créditos de pagamento por uso nunca expiram em nenhuma das duas ferramentas.' },
  ],
  about: {
    heading: 'O que é o QuickEmailVerification?',
    paragraphs: [
      'O QuickEmailVerification é um serviço de verificação de e-mails do site quickemailverification.com. Ele verifica listas em massa, e-mails avulsos e formulários de cadastro por meio de uma API REST.',
      'O plano grátis dá 100 créditos todos os dias. Segundo o próprio serviço, ele se integra com mais de 50 ferramentas de marketing, entre elas Zapier e WordPress.',
      'O site dele mostra selos de ISO 27001, GDPR, CCPA e HIPAA. Ele declara 99% de precisão.',
    ],
  },
  reasons: {
    heading: 'Por que as equipes procuram uma alternativa ao QuickEmailVerification',
    items: [
      { k: 'Catch-all', v: 'Endereços catch-all voltam como catch-all. Você ainda precisa decidir se envia ou não.' },
      { k: 'Preço', v: '10.000 créditos custam US$ 60, e 100.000 custam US$ 320.' },
      { k: 'Gateways', v: 'Ele não anuncia suporte a secure email gateways como Proofpoint ou Mimecast.' },
    ],
  },
  catchAllHeading: 'O que acontece com e-mails catch-all em cada ferramenta',
  catchAllProse:
    'O QuickEmailVerification devolve endereços catch-all com o status catch-all. Ele não confirma a caixa. Numa lista B2B, isso pode deixar muitos endereços sem uma resposta clara. A Giggal.ai faz verificações adicionais nesses endereços e devolve um de quatro resultados, por 1 crédito cada.',
  pricingHeading: 'Preços do QuickEmailVerification e da Giggal.ai',
  pricingProse:
    'O QuickEmailVerification vende créditos permanentes que nunca expiram. 500 créditos custam US$ 4, 10.000 custam US$ 60, 100.000 custam US$ 320 e um milhão custa US$ 1.350. Um plano diário grátis dá 100 créditos por dia.',
  pricingExtra: ['A Giggal.ai vende 10.000 créditos por US$ 9,90, 100.000 por US$ 76 e um milhão por US$ 680. Os créditos dela também nunca expiram.'],
  strengths: {
    heading: 'Quando o QuickEmailVerification é uma boa escolha',
    intro: 'O QuickEmailVerification tem pontos fortes reais:',
  },
  others: {
    heading: 'Outras alternativas ao QuickEmailVerification',
    intro: 'Estes verificadores tratam endereços catch-all de formas diferentes. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 créditos custam US$ 29, com indícios de catch-all incluídos no preço.' },
      { name: 'no2bounce', text: '10.000 créditos custam US$ 20. Ele envia mensagens de teste para confirmar caixas catch-all.' },
      { name: 'Mailfloss', text: 'Limpa listas dentro de 41 plataformas de e-mail todos os dias. Os créditos pré-pagos custam US$ 40 por 10.000.' },
    ],
  },
  testHeading: 'Verifique de novo suas linhas catch-all com a Giggal.ai',
  testSteps: [
    'Exporte uma lista que você já verificou no QuickEmailVerification.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Veja as linhas que o QuickEmailVerification marcou como catch-all e compare os resultados.',
  ],
  ctaHeadline: 'Receba um resultado para os endereços marcados como catch-all',
  faqs: [
    {
      q: 'Quanto custa o QuickEmailVerification?',
      a: 'Os créditos permanentes começam em US$ 4 por 500. 10.000 custam US$ 60, 100.000 custam US$ 320 e um milhão custa US$ 1.350. Esses créditos nunca expiram.',
    },
    {
      q: 'O QuickEmailVerification é grátis?',
      a: 'Ele tem um plano grátis com 100 créditos por dia, e os créditos são renovados todo dia. A Giggal.ai dá 1.000 créditos grátis uma única vez, sem cartão, válidos em envio em massa.',
    },
    {
      q: 'O QuickEmailVerification verifica e-mails catch-all?',
      a: 'Ele detecta domínios catch-all e devolve o status catch-all. Ele não confirma se a caixa existe. A Giggal.ai devolve um resultado nesses endereços.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao QuickEmailVerification?',
      a: 'Sim, para listas B2B com muitos endereços catch-all. A Giggal.ai custa US$ 9,90 por 10.000 créditos e devolve um resultado nesses endereços.',
    },
  ],
  breadcrumb: 'Alternativa ao QuickEmailVerification',
}

export default cfg
