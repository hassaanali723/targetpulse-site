// Brazilian Portuguese MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). myemailverifier.com
// blocked our check on 2026-11-27, so its prices are from the August 2026 check
// and the page says so. Competitor words come from
// lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'myemailverifier',
  path: '/pt-br/alternativa-ao-myemailverifier',
  cluster: 'altMyemailverifier',
  metaTitle: 'Alternativa ao MyEmailVerifier: preços e catch-all | Giggal.ai',
  ogTitle: 'Alternativa ao MyEmailVerifier para listas B2B',
  desc: 'O MyEmailVerifier dá 100 créditos grátis por dia, mas marca o catch-all como status. A Giggal.ai devolve um resultado nesses e-mails por US$ 9,90 a cada 10.000.',
  h1: ['Uma ', 'alternativa ao MyEmailVerifier', ' para listas B2B com domínios catch-all'],
  heroP:
    'O MyEmailVerifier é um verificador de e-mails de baixo custo, com 100 créditos grátis por dia. Ele marca endereços catch-all com um status próprio e não os confirma. A Giggal.ai devolve um resultado nesses endereços, por US$ 9,90 a cada 10.000 e-mails.',
  bluf: [
    { k: 'Catch-all', v: 'O MyEmailVerifier marca o catch-all como um status. A Giggal.ai devolve um resultado.' },
    { k: 'Preço', v: '10.000 créditos custam US$ 15 no MyEmailVerifier e US$ 9,90 na Giggal.ai.' },
    { k: 'Em volume', v: 'Um milhão de créditos custa US$ 349 no MyEmailVerifier e US$ 680 na Giggal.ai.' },
    { k: 'Créditos grátis', v: 'O MyEmailVerifier dá 100 por dia. A Giggal.ai dá 1.000 uma única vez, sem cartão.' },
  ],
  about: {
    heading: 'O que é o MyEmailVerifier?',
    paragraphs: [
      'O MyEmailVerifier é um serviço de verificação de e-mails do site myemailverifier.com. Ele verifica listas em massa e e-mails avulsos, e tem uma API.',
      'Ele dá 100 créditos grátis todos os dias. Os créditos pagos começam em US$ 4 por 1.000 e nunca expiram.',
      'Ele devolve endereços catch-all com um status catch-all separado. Ele não confirma se essas caixas existem.',
    ],
  },
  reasons: {
    heading: 'Por que as pessoas procuram uma alternativa ao MyEmailVerifier',
    items: [
      { k: 'Catch-all', v: 'Endereços catch-all voltam sem uma resposta clara. Em listas B2B, eles podem ser uma grande parte da lista.' },
      { k: 'Gateways', v: 'O MyEmailVerifier não cita Proofpoint, Mimecast nem outros gateways atrás dos quais consegue verificar.' },
    ],
  },
  catchAllHeading: 'E-mails catch-all: MyEmailVerifier vs Giggal.ai',
  catchAllProse:
    'Muitos domínios de empresas aceitam qualquer endereço. Por isso, uma verificação básica não consegue distinguir um endereço real de um falso. O MyEmailVerifier marca esses endereços como catch-all e deixa a decisão com você. A Giggal.ai faz verificações adicionais nesses endereços e devolve um dos quatro resultados abaixo, por 1 crédito cada.',
  pricingHeading: 'Preços do MyEmailVerifier e da Giggal.ai',
  pricingProse:
    'O MyEmailVerifier vende créditos que nunca expiram. Quando conferimos em agosto de 2026, 1.000 créditos custavam US$ 4, 10.000 custavam US$ 15, 100.000 custavam US$ 99 e um milhão custava US$ 349.',
  pricingExtra: [
    'A Giggal.ai vende 10.000 créditos por US$ 9,90, 100.000 por US$ 76 e um milhão por US$ 680. Em um milhão, o MyEmailVerifier custa menos. A Giggal.ai acrescenta um resultado em endereços catch-all e atrás de gateways.',
  ],
  strengths: {
    heading: 'Quando o MyEmailVerifier é uma boa escolha',
    intro: 'O MyEmailVerifier é uma boa escolha para algumas listas:',
  },
  others: {
    heading: 'Outras alternativas ao MyEmailVerifier',
    intro: 'Estes verificadores também têm preços baixos ou créditos grátis diários. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Também dá 100 créditos grátis por dia. 10.000 créditos permanentes custam US$ 60.' },
      { name: 'Bounceless', text: 'Dá 1.000 créditos grátis por mês com um e-mail corporativo. 10.000 créditos custam US$ 29, com indícios de catch-all incluídos.' },
      { name: 'no2bounce', text: '10.000 créditos custam US$ 20 e nunca expiram. Ele envia mensagens de teste para confirmar caixas catch-all.' },
    ],
  },
  testHeading: 'Verifique suas linhas catch-all com a Giggal.ai',
  testSteps: [
    'Exporte uma lista que você já verificou no MyEmailVerifier.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas que o MyEmailVerifier marcou como catch-all.',
  ],
  ctaHeadline: 'Receba um resultado para endereços catch-all',
  faqs: [
    {
      q: 'Quanto custa o MyEmailVerifier?',
      a: 'Quando conferimos em agosto de 2026, 1.000 créditos custavam US$ 4, 10.000 custavam US$ 15, 100.000 custavam US$ 99 e um milhão custava US$ 349. Os créditos nunca expiram.',
    },
    {
      q: 'O MyEmailVerifier é grátis?',
      a: 'Ele dá 100 créditos grátis todos os dias. Os créditos diários são renovados, em vez de acabar depois de um período de teste. A Giggal.ai dá 1.000 créditos grátis uma única vez, sem cartão.',
    },
    {
      q: 'O MyEmailVerifier verifica e-mails catch-all?',
      a: 'Ele detecta domínios catch-all e devolve um status catch-all. Ele não confirma a caixa. A Giggal.ai devolve um resultado em endereços catch-all por 1 crédito cada.',
    },
    {
      q: 'Os créditos da Giggal.ai expiram?',
      a: 'Não. Os créditos da Giggal.ai nunca expiram. Os créditos do MyEmailVerifier também nunca expiram.',
    },
  ],
  breadcrumb: 'Alternativa ao MyEmailVerifier',
}

export default cfg
