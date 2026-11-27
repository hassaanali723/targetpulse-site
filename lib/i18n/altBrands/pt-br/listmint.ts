// pt-br Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'listmint',
  path: '/pt-br/alternativa-ao-listmint',
  cluster: 'altListmint',
  metaTitle: 'Alternativa ao Listmint: verificação de catch-all | Giggal.ai',
  ogTitle: 'Alternativa ao Listmint para verificar e-mails catch-all',
  desc: 'O Listmint custa US$ 99 por mês com 5.000 créditos de catch-all. A Giggal.ai verifica catch-all a 1 crédito, US$ 9,90 por 10.000, e os créditos nunca expiram.',
  h1: ['Uma ', 'alternativa ao Listmint', ' com um único saldo de créditos'],
  heroP:
    'O Listmint é um verificador de e-mail com foco em endereços catch-all. Ele divide cada plano em créditos padrão e um saldo menor de créditos de catch-all. A Giggal.ai usa um único saldo. Uma verificação de catch-all custa 1 crédito, igual a qualquer outro e-mail.',
  bluf: [
    { k: 'Créditos', v: 'O Listmint tem dois saldos de créditos. A Giggal.ai tem um, a 1 crédito por e-mail.' },
    { k: 'Preço', v: 'O Starter do Listmint custa US$ 99 por mês. A Giggal.ai custa US$ 9,90 por 10.000 créditos, comprados uma vez.' },
    { k: 'Catch-all', v: 'O Starter do Listmint dá 5.000 créditos de catch-all por mês. A Giggal.ai não tem limite separado.' },
    { k: 'Gateways', v: 'A Giggal.ai verifica endereços atrás de 15 gateways de e-mail citados pelo nome. O Listmint não cita nenhum.' },
  ],
  about: {
    heading: 'O que é o Listmint?',
    paragraphs: [
      'O Listmint é um serviço de verificação de e-mail do listmint.io. Ele faz verificações SMTP padrão e uma verificação de catch-all separada. O Listmint diz que verifica os endereços catch-all manualmente.',
      'Os créditos de catch-all custam mais que os créditos padrão. Por isso, cada plano inclui um saldo grande de créditos padrão e um saldo menor de créditos de catch-all.',
      'O Listmint também diz que consegue verificar endereços catch-all em tempo real.',
    ],
  },
  reasons: {
    heading: 'Por que as pessoas procuram uma alternativa ao Listmint',
    items: [
      { k: 'Limite de catch-all', v: 'O Starter inclui 5.000 créditos de catch-all por mês. Uma única lista B2B grande pode usar todos eles.' },
      { k: 'Plano mensal', v: 'O Listmint é cobrado todo mês. Os créditos da Giggal.ai são comprados uma vez e nunca expiram.' },
      { k: 'Volume', v: 'O maior plano publicado é o Agency, com 50.000 créditos padrão. Mais do que isso exige uma cotação Enterprise.' },
      { k: 'Gateways', v: 'O Listmint não cita os secure email gateways atrás dos quais consegue verificar.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai em endereços catch-all',
  catchAllProse:
    'O Listmint cobra as verificações de catch-all de um saldo de créditos separado. No plano Starter de US$ 99, esse saldo é de 5.000 por mês. A Giggal.ai não tem saldo separado. Cada endereço custa 1 crédito, seja catch-all ou não. Quando a Giggal.ai não consegue uma resposta, o resultado é desconhecido e o crédito é devolvido.',
  pricingHeading: 'Preços do Listmint comparados com a Giggal.ai',
  pricingProse:
    'O Starter do Listmint custa US$ 99 por mês por 20.000 créditos padrão e 5.000 créditos de catch-all. O Agency custa US$ 187 por mês por 50.000 créditos padrão e 10.000 créditos de catch-all. O Enterprise tem preço sob consulta.',
  pricingExtra: [
    'A Giggal.ai não tem faixas de plano. 10.000 créditos custam US$ 9,90 e 100.000 custam US$ 76. Você pode usar qualquer um deles em endereços catch-all.',
  ],
  strengths: {
    heading: 'Quando o Listmint é uma boa opção',
    intro: 'O Listmint faz sentido se você quer isto:',
  },
  others: {
    heading: 'Outras alternativas ao Listmint',
    intro: 'Estes verificadores também devolvem um resultado em endereços catch-all. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Scrubby', text: 'Verifica domínios catch-all e protegidos por gateway a 1 crédito. A Deep Verification custa 3 créditos e envia e-mails reais. O pagamento por uso custa US$ 0,008 por crédito.' },
      { name: 'no2bounce', text: 'Envia mensagens de teste para confirmar caixas de e-mail catch-all. 10.000 créditos de pagamento por uso custam US$ 20 e nunca expiram.' },
      { name: 'Allegrow', text: 'Devolve válido ou inválido em contatos catch-all para equipes de vendas. O Starter custa US$ 99 por mês por 5.000 contatos.' },
    ],
  },
  testHeading: 'Passe uma lista do Listmint pela Giggal.ai',
  testSteps: [
    'Exporte uma lista que você já verificou no Listmint.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas catch-all com o que o Listmint devolveu.',
  ],
  ctaHeadline: 'Verifique e-mails catch-all sem limite separado de créditos',
  faqs: [
    {
      q: 'Quanto custa o Listmint?',
      a: 'O Starter do Listmint custa US$ 99 por mês, com 20.000 créditos padrão e 5.000 créditos de catch-all. O Agency custa US$ 187 por mês, com 50.000 créditos padrão e 10.000 de catch-all. O Enterprise tem preço sob consulta.',
    },
    {
      q: 'Por que o Listmint tem créditos de catch-all separados?',
      a: 'O Listmint diz que os créditos de catch-all custam mais que os créditos SMTP normais, porque uma verificação de catch-all dá mais trabalho. A Giggal.ai cobra 1 crédito por endereço, incluindo os catch-all.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao Listmint?',
      a: 'Sim, se você verifica listas com muitos endereços catch-all. A Giggal.ai não tem limite separado para catch-all nem plano mensal. Ela custa US$ 9,90 por 10.000 créditos.',
    },
    {
      q: 'O Listmint tem teste grátis?',
      a: 'O Listmint permite começar grátis, mas não publica quantos créditos isso inclui. A Giggal.ai dá 1.000 créditos grátis sem cartão.',
    },
  ],
  breadcrumb: 'Alternativa ao Listmint',
}

export default cfg
