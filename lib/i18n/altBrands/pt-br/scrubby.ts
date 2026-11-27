// Brazilian Portuguese Scrubby alternative page. Translated from
// app/(en)/scrubby-alternative (2026-11-27). Scrubby's product names "Quick
// Verification" and "Deep Verification" stay in English. Competitor words come
// from lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'scrubby',
  path: '/pt-br/alternativa-ao-scrubby',
  cluster: 'altScrubby',
  metaTitle: 'Alternativa ao Scrubby: preços do Scrubby.io | Giggal.ai',
  ogTitle: 'Alternativa ao Scrubby para e-mails catch-all e atrás de gateways',
  desc: 'No Scrubby, o crédito custa US$ 0,008 e a Deep Verification leva até 72 horas. A Giggal.ai verifica e-mails catch-all e atrás de gateways a US$ 9,90 por 10.000.',
  h1: ['Uma ', 'alternativa ao Scrubby', ' por US$ 9,90 a cada 10.000 e-mails'],
  heroP:
    'O Scrubby verifica e-mails catch-all e protegidos por gateways. São os mesmos endereços difíceis em que a Giggal.ai se concentra. As diferenças são o preço e a forma como cada verificação funciona. O Scrubby cobra US$ 0,008 por crédito. A Giggal.ai cobra US$ 9,90 a cada 10.000.',
  bluf: [
    { k: 'Preço', v: '10.000 créditos custam US$ 80 no Scrubby e US$ 9,90 na Giggal.ai.' },
    { k: 'Verificação profunda', v: 'A Deep Verification do Scrubby custa 3 créditos e envia e-mails reais. Os resultados finais levam até 72 horas.' },
    { k: 'Créditos grátis', v: 'O Scrubby dá 200 créditos grátis. A Giggal.ai dá 1.000. Nenhuma das duas ferramentas pede cartão.' },
    { k: 'Reembolsos', v: 'O Scrubby diz que todas as compras são definitivas. A Giggal.ai devolve o crédito em resultados desconhecidos.' },
  ],
  about: {
    heading: 'O que é o Scrubby?',
    paragraphs: [
      'O Scrubby é uma ferramenta de verificação de e-mails do site scrubby.io. Ele se concentra em endereços catch-all e arriscados que outros verificadores não conseguem confirmar.',
      'Ele tem duas verificações. A Quick Verification custa 1 crédito e cobre domínios padrão, catch-all e protegidos por SEG. A Deep Verification custa 3 créditos. Nela, o Scrubby envia e-mails reais para cada endereço e entrega os resultados finais em até 72 horas.',
      'O Scrubby se integra com ferramentas como Clay, Instantly, Smartlead, Apollo e HubSpot.',
    ],
  },
  reasons: {
    heading: 'Por que as equipes procuram uma alternativa ao Scrubby',
    items: [
      { k: 'Preço', v: 'O pagamento por uso custa US$ 0,008 por crédito. 10.000 verificações custam US$ 80, e 100.000 custam US$ 800.' },
      { k: 'Tempo de espera', v: 'Os resultados da Deep Verification levam até 72 horas.' },
      { k: 'E-mails reais', v: 'A Deep Verification envia e-mails reais para cada endereço da sua lista.' },
      { k: 'Sem reembolso', v: 'O Scrubby diz que todas as compras são definitivas.' },
    ],
  },
  catchAllHeading: 'Scrubby vs Giggal.ai em e-mails catch-all e atrás de gateways',
  catchAllProse:
    'O Scrubby e a Giggal.ai devolvem um resultado em endereços catch-all e protegidos por gateways. A Giggal.ai cobra 1 crédito por endereço, sem um nível mais profundo. Ela cita por nome 15 gateways atrás dos quais verifica, entre eles Proofpoint, Mimecast e Barracuda. Quando ela não consegue uma resposta, o crédito é devolvido.',
  pricingHeading: 'Preços do Scrubby e da Giggal.ai',
  pricingProse:
    'O pagamento por uso do Scrubby custa US$ 0,008 por crédito, então 10.000 créditos custam US$ 80. Os planos mensais são Starter por US$ 47 com 6.000 créditos, Growth por US$ 97 com 15.000 e Pro por US$ 497 com 100.000. Os créditos de pagamento por uso nunca expiram, e os créditos dos planos acumulam.',
  pricingExtra: [
    'Uma Deep Verification usa 3 créditos, então 10.000 verificações profundas usam 30.000 créditos. A Giggal.ai vende 10.000 créditos por US$ 9,90 e 100.000 por US$ 76.',
  ],
  strengths: {
    heading: 'Quando o Scrubby é uma boa escolha',
    intro: 'O Scrubby tem pontos fortes que vale conhecer:',
  },
  others: {
    heading: 'Outras alternativas ao Scrubby',
    intro: 'Estas ferramentas também devolvem um resultado em endereços catch-all. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'no2bounce', text: 'Envia mensagens de teste para confirmar caixas catch-all. 10.000 créditos custam US$ 20 e nunca expiram.' },
      { name: 'Listmint', text: 'Verifica endereços catch-all manualmente. O Starter custa US$ 99 por mês com 20.000 créditos padrão e 5.000 créditos de catch-all.' },
      { name: 'Allegrow', text: 'Devolve válido ou inválido em contatos catch-all e cita Proofpoint e Mimecast. O Starter custa US$ 99 por mês.' },
    ],
  },
  testHeading: 'Teste a Giggal.ai nos seus endereços catch-all',
  testSteps: [
    'Exporte uma lista que você já verificou no Scrubby.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare os resultados com os do Scrubby para os mesmos endereços catch-all.',
  ],
  ctaHeadline: 'Verifique os mesmos endereços difíceis por US$ 9,90 a cada 10.000',
  faqs: [
    {
      q: 'Quanto custa o Scrubby?',
      a: 'O pagamento por uso do Scrubby custa US$ 0,008 por crédito, ou US$ 80 por 10.000. Os planos mensais começam em US$ 47 por 6.000 créditos. A Deep Verification usa 3 créditos por e-mail.',
    },
    {
      q: 'O que é a Deep Verification do Scrubby?',
      a: 'É a verificação mais lenta do Scrubby para endereços difíceis. Ela custa 3 créditos, envia e-mails reais para cada endereço e entrega os resultados finais em até 72 horas.',
    },
    {
      q: 'O Scrubby tem teste grátis?',
      a: 'Sim. O Scrubby dá 200 créditos grátis sem cartão. A Giggal.ai dá 1.000 créditos grátis sem cartão.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao Scrubby?',
      a: 'Sim. As duas ferramentas devolvem um resultado em endereços catch-all e atrás de gateways. A Giggal.ai custa US$ 9,90 por 10.000 créditos e devolve o crédito em resultados desconhecidos.',
    },
  ],
  breadcrumb: 'Alternativa ao Scrubby',
}

export default cfg
