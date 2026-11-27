// pt-br Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'findymail',
  path: '/pt-br/alternativa-ao-findymail',
  cluster: 'altFindymail',
  metaTitle: 'Alternativas ao Findymail e preços do Findymail | Giggal.ai',
  ogTitle: 'Alternativas ao Findymail e preços comparados',
  desc: 'Preços do Findymail: a partir de US$ 99 por mês. Compare alternativas e concorrentes do Findymail, como a Giggal.ai, verificador a US$ 9,90 por 10.000 créditos.',
  h1: ['Uma ', 'alternativa ao Findymail', ' para verificar os e-mails que você já tem'],
  heroP:
    'O Findymail encontra e-mails B2B e os verifica. Os planos começam em US$ 99 por mês. Se você já tem uma lista e só precisa verificá-la, a Giggal.ai faz isso por US$ 9,90 por 10.000 e-mails. Você compra os créditos uma vez, e eles nunca expiram.',
  bluf: [
    { k: 'Função principal', v: 'O Findymail encontra e-mails e depois os verifica. A Giggal.ai só verifica.' },
    { k: 'Preço', v: 'O Findymail começa em US$ 99 por mês. A Giggal.ai custa US$ 9,90 por 10.000 créditos, comprados uma vez.' },
    { k: 'Créditos grátis', v: 'O Findymail dá 10 créditos grátis. A Giggal.ai dá 1.000, sem cartão.' },
    { k: 'Garantia', v: 'O Findymail promete uma taxa de bounce abaixo de 5% e devolve créditos se a taxa passar disso.' },
  ],
  about: {
    heading: 'O que é o Findymail?',
    paragraphs: [
      'O Findymail é um buscador de e-mails B2B. Ele encontra e-mails corporativos a partir de um nome e uma empresa, de uma URL do LinkedIn ou de uma busca no Sales Navigator. Todo e-mail que ele encontra é verificado antes de chegar a você.',
      'Ele tem uma extensão para Chrome, um complemento para Google Sheets, envio em massa, uma API e um buscador de telefones. Ele se conecta a Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead e Lemlist, entre outros.',
      'O Findymail também vende créditos de verificação para listas de outras fontes. Ele diz que verifica e-mails catch-all que outras ferramentas marcam como arriscados.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Preços do Findymail em 2026',
  pricingProse:
    'O Findymail tem dois tipos de plano. Os planos baseados em uso são Individual, a US$ 99 por mês, Pro, a US$ 249, Team, a US$ 399, e Scale, a US$ 999. Eles informam o número de usuários e o tamanho dos arquivos, não uma quantidade de créditos.',
  pricingExtra: [
    'O plano Starter, baseado em créditos, custa US$ 99 por mês. Ele inclui 5.000 créditos de busca e 5.000 créditos de verificação. Volumes maiores são Enterprise, com preço sob consulta. Os créditos não usados acumulam, até o dobro da cota mensal.',
    'A Giggal.ai não tem plano mensal. 10.000 créditos custam US$ 9,90, 100.000 custam US$ 76 e um milhão custa US$ 680.',
  ],
  reasons: {
    heading: 'Por que as equipes procuram uma alternativa ao Findymail',
    items: [
      { k: 'Só verificar', v: 'Muitas equipes já têm uma lista. Elas não precisam de um buscador, só de um verificador.' },
      { k: 'Volume', v: 'O Starter inclui 5.000 créditos de verificação por mês. Volumes maiores exigem uma cotação Enterprise.' },
      { k: 'Conta mensal', v: 'O Findymail cobra todo mês. Os créditos da Giggal.ai são comprados uma vez e nunca expiram.' },
      { k: 'Teste pequeno', v: 'O Findymail dá 10 créditos grátis. É pouco para testar uma lista real.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai em e-mails catch-all',
  catchAllProse:
    'O Findymail verifica e-mails catch-all que outras ferramentas marcam como arriscados. A Giggal.ai também devolve um resultado em endereços catch-all, a 1 crédito cada. Além disso, ela verifica endereços atrás de 15 secure email gateways citados pelo nome, como Proofpoint, Mimecast e Barracuda. O Findymail não informa suporte a gateways.',
  strengths: {
    heading: 'O que o Findymail faz bem',
    intro: 'O Findymail é a melhor escolha se você precisa disto:',
  },
  others: {
    heading: 'Outras alternativas e concorrentes do Findymail',
    intro: 'Estas ferramentas também encontram ou verificam e-mails B2B. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Um buscador de e-mails com planos a partir de US$ 29 por mês por 400 créditos. Ele promete que pelo menos 97% dos e-mails que encontra não vão dar hard bounce.' },
      { name: 'LeadMagic', text: 'Uma plataforma de dados B2B com busca de e-mails, números de celular e dados de empresas. Os planos começam em US$ 99 por mês por 5.000 créditos compartilhados.' },
      { name: 'Allegrow', text: 'Um verificador para equipes de vendas que também acompanha o posicionamento na caixa de entrada e a saúde do domínio. O Starter custa US$ 99 por mês por 5.000 contatos.' },
    ],
  },
  testHeading: 'Verifique uma exportação do Findymail com a Giggal.ai',
  testSteps: [
    'Exporte uma lista que você já verificou no Findymail.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas catch-all com o que o Findymail devolveu para os mesmos contatos.',
  ],
  ctaHeadline: 'Verifique sua lista sem assinatura',
  faqs: [
    {
      q: 'Quanto custa o Findymail?',
      a: 'Os planos do Findymail começam em US$ 99 por mês. O plano Starter, baseado em créditos, inclui 5.000 créditos de busca e 5.000 créditos de verificação. Os planos baseados em uso vão de US$ 99 a US$ 999 por mês. Volumes maiores têm preço sob consulta.',
    },
    {
      q: 'O Findymail tem plano grátis?',
      a: 'O Findymail dá 10 créditos grátis para testar, sem cartão. Não há um plano grátis permanente. A Giggal.ai dá 1.000 créditos grátis sem cartão.',
    },
    {
      q: 'Quais são as melhores alternativas ao Findymail?',
      a: 'Para encontrar e-mails, o Anymail Finder e o LeadMagic são opções comuns. Para verificar uma lista que você já tem, a Giggal.ai custa US$ 9,90 por 10.000 créditos, sem assinatura.',
    },
    {
      q: 'O Findymail é bom para verificar e-mails?',
      a: 'Sim. O Findymail verifica todo e-mail que encontra e promete uma taxa de bounce abaixo de 5%. O Starter traz 5.000 créditos de verificação por mês. Por isso, listas grandes precisam de um plano Enterprise ou de outro verificador.',
    },
    {
      q: 'A Giggal.ai encontra e-mails como o Findymail?',
      a: 'Não. A Giggal.ai só verifica. Encontre os e-mails primeiro e depois passe a lista pela Giggal.ai antes de enviar.',
    },
    {
      q: 'Os créditos do Findymail expiram?',
      a: 'Os créditos não usados passam de um mês para o outro, até o dobro da sua cota mensal. Os créditos da Giggal.ai nunca expiram.',
    },
  ],
  breadcrumb: 'Alternativa ao Findymail',
}

export default cfg
