// Brazilian Portuguese no2bounce alternative page. Translated from
// app/(en)/no2bounce-alternative (2026-11-27). The competitor's words (free
// tier, expiry, strengths) match lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'no2bounce',
  path: '/pt-br/alternativa-ao-no2bounce',
  cluster: 'altNo2bounce',
  metaTitle: 'Alternativa ao no2bounce: preços e catch-all | Giggal.ai',
  ogTitle: 'Alternativa ao no2bounce para verificar e-mails catch-all',
  desc: 'O no2bounce cobra US$ 20 por 10.000 créditos. A Giggal.ai verifica e-mails catch-all e de gateway por US$ 9,90 a cada 10.000. 1.000 créditos grátis, sem cartão.',
  h1: ['Uma ', 'alternativa ao no2bounce', ' com preço menor por e-mail'],
  heroP:
    'O no2bounce é um verificador de e-mails com créditos de pagamento por uso que nunca expiram. A Giggal.ai funciona do mesmo jeito. As diferenças são o preço, os créditos grátis e a forma como cada ferramenta verifica endereços catch-all.',
  bluf: [
    { k: 'Preço', v: '10.000 créditos custam US$ 20 no no2bounce e US$ 9,90 na Giggal.ai.' },
    { k: 'Em volume', v: 'Um milhão de créditos custa US$ 679 no no2bounce e US$ 680 na Giggal.ai.' },
    { k: 'Créditos grátis', v: 'O no2bounce dá 100 créditos grátis. A Giggal.ai dá 1.000. Nenhuma das duas ferramentas pede cartão.' },
    { k: 'Validade', v: 'Os créditos nunca expiram em nenhuma das duas ferramentas.' },
  ],
  about: {
    heading: 'O que é o no2bounce?',
    paragraphs: [
      'O no2bounce é um serviço de verificação de e-mails. Ele verifica e-mails avulsos, listas em massa e e-mails enviados pela API. Os mesmos créditos também pagam o buscador de e-mails, a busca por domínio e a pontuação de e-mails.',
      'Em domínios catch-all, o no2bounce envia mensagens de teste controladas para confirmar se a caixa existe. Ele declara 99,6% de precisão.',
      'Ele se integra com HubSpot, Salesforce, Clay, Zapier, Google Sheets e Zoho CRM, entre outros.',
    ],
  },
  reasons: {
    heading: 'Por que as pessoas procuram uma alternativa ao no2bounce',
    items: [
      { k: 'Preço em 10.000', v: 'O no2bounce cobra US$ 20 por 10.000 créditos. A Giggal.ai cobra US$ 9,90 pela mesma quantidade.' },
      { k: 'Em 100.000', v: '100.000 créditos custam US$ 149 no no2bounce e US$ 76 na Giggal.ai.' },
      { k: 'Teste grátis', v: 'O no2bounce dá 100 créditos grátis. A Giggal.ai dá 1.000, o suficiente para testar uma amostra real.' },
    ],
  },
  catchAllHeading: 'Como o no2bounce e a Giggal.ai verificam endereços catch-all',
  catchAllProse:
    'O no2bounce envia mensagens de teste controladas pelos próprios servidores para confirmar caixas catch-all. A Giggal.ai devolve um resultado em endereços catch-all por 1 crédito cada, sem taxa separada. Além disso, ela verifica endereços atrás de 15 secure email gateways citados pelo nome, entre eles Proofpoint, Mimecast e Barracuda.',
  pricingHeading: 'Preços do no2bounce e da Giggal.ai',
  pricingProse:
    'O no2bounce vende pacotes de pagamento por uso, de 10.000 créditos por US$ 20 até 50 milhões de créditos. 100.000 custam US$ 149 e um milhão custa US$ 679. Os planos mensais custam 15% menos, e os planos anuais custam 20% menos.',
  pricingExtra: [
    'A Giggal.ai vende 10.000 créditos por US$ 9,90, 100.000 por US$ 76 e um milhão por US$ 680. Não há plano para escolher. Os créditos nunca expiram em nenhuma das duas ferramentas.',
  ],
  strengths: {
    heading: 'Quando o no2bounce é uma boa escolha',
    intro: 'O no2bounce é uma escolha razoável para estas necessidades:',
  },
  others: {
    heading: 'Outras alternativas ao no2bounce',
    intro: 'Estes verificadores também vendem créditos que nunca expiram. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 créditos custam US$ 29 e um milhão custa US$ 579. Dá 1.000 créditos grátis por mês com um e-mail corporativo.' },
      { name: 'QuickEmailVerification', text: '10.000 créditos custam US$ 60. Dá 100 créditos grátis todos os dias.' },
      { name: 'Scrubby', text: 'O pagamento por uso custa US$ 0,008 por crédito, com a opção Deep Verification para endereços difíceis.' },
    ],
  },
  testHeading: 'Compare o no2bounce e a Giggal.ai na mesma lista',
  testSteps: [
    'Exporte uma lista que você já verificou no no2bounce.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas catch-all com o que o no2bounce devolveu.',
  ],
  ctaHeadline: 'O mesmo trabalho com um preço menor por e-mail',
  faqs: [
    {
      q: 'Quanto custa o no2bounce?',
      a: 'Os pacotes de pagamento por uso do no2bounce começam em US$ 20 por 10.000 créditos. 100.000 custam US$ 149 e um milhão custa US$ 679. Os planos mensais custam 15% menos, e os planos anuais custam 20% menos.',
    },
    {
      q: 'O no2bounce é grátis?',
      a: 'O no2bounce dá 100 créditos grátis sem cartão, e eles nunca expiram. Depois disso, você compra créditos. A Giggal.ai dá 1.000 créditos grátis sem cartão.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao no2bounce?',
      a: 'Sim. As duas ferramentas vendem créditos que nunca expiram. A Giggal.ai custa menos em 10.000 e 100.000 créditos e dá dez vezes mais créditos grátis. Em um milhão de créditos, os dois preços são quase iguais.',
    },
    {
      q: 'Os créditos do no2bounce expiram?',
      a: 'Não. Os créditos comprados no no2bounce ficam na sua conta até você usar. Os créditos de assinatura valem enquanto a assinatura estiver ativa. Os créditos da Giggal.ai nunca expiram.',
    },
  ],
  breadcrumb: 'Alternativa ao no2bounce',
}

export default cfg
