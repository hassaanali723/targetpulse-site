// pt-br LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'leadmagic',
  path: '/pt-br/alternativa-ao-leadmagic',
  cluster: 'altLeadmagic',
  metaTitle: 'Alternativa ao LeadMagic: preços do LeadMagic | Giggal.ai',
  ogTitle: 'Alternativa ao LeadMagic só para verificação de e-mail',
  desc: 'Preços do LeadMagic: a partir de US$ 99 por mês por 5.000 créditos compartilhados. A Giggal.ai verifica e-mails a US$ 9,90 por 10.000 créditos que não expiram.',
  h1: ['Uma ', 'alternativa ao LeadMagic', ' só para verificação de e-mail'],
  heroP:
    'O LeadMagic é uma plataforma de dados B2B. A validação de e-mail é um dos produtos dele e divide um saldo mensal de créditos com os outros. Se você só precisa verificar listas de e-mail, a Giggal.ai faz esse único trabalho. Custa US$ 9,90 por 10.000 e-mails, com pagamento único.',
  bluf: [
    { k: 'O que é', v: 'O LeadMagic vende dados de contatos e de empresas. A Giggal.ai só verifica endereços de e-mail.' },
    { k: 'Preço', v: 'O LeadMagic começa em US$ 99 por mês. A Giggal.ai custa US$ 9,90 por 10.000 créditos, comprados uma vez.' },
    { k: 'Créditos grátis', v: 'O LeadMagic não dá créditos grátis. A Giggal.ai dá 1.000, sem cartão.' },
    { k: 'Catch-all', v: 'Os dois devolvem um resultado em endereços catch-all. A Giggal.ai também verifica atrás de 15 gateways de e-mail citados pelo nome.' },
  ],
  about: {
    heading: 'O que é o LeadMagic?',
    paragraphs: [
      'O LeadMagic é uma plataforma de dados B2B para equipes de vendas. A plataforma encontra e-mails corporativos e números de celular e adiciona dados de empresas aos registros de contatos. Também acompanha mudanças de emprego e atividade de anúncios.',
      'A validação de e-mail é um produto dentro do LeadMagic. Ela devolve válido, inválido ou desconhecido. Um resultado conclusivo custa 0,25 crédito, e um resultado desconhecido é grátis. A validação de catch-all é um produto separado, que usa os mesmos créditos.',
      'As equipes usam o LeadMagic pelo app web, por uma API REST, por uma CLI ou por um servidor MCP. Ele se conecta a ferramentas como Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier e Make.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Preços do LeadMagic em 2026',
  pricingProse:
    'O LeadMagic é uma assinatura mensal. O Essential custa US$ 99 por 5.000 créditos. O Growth custa US$ 249 por 20.000, o Professional US$ 499 por 50.000 e o Ultimate US$ 849 por 100.000. Todos os produtos usam os mesmos créditos.',
  pricingExtra: [
    'Com 0,25 crédito por validação, o plano de US$ 99 cobre 20.000 verificações por mês. Para 100.000 verificações por mês, você precisa do Professional, a US$ 499. No plano anual, dois meses saem grátis. Os créditos mensais não usados acumulam, até o dobro da cota mensal.',
    'A Giggal.ai não tem assinatura. 10.000 créditos custam US$ 9,90, 100.000 custam US$ 76 e um milhão custa US$ 680. Os créditos nunca expiram.',
  ],
  reasons: {
    heading: 'Por que as equipes procuram uma alternativa ao LeadMagic',
    items: [
      { k: 'Conta mensal', v: 'O LeadMagic cobra todo mês, mesmo nos meses em que você não verifica nada. Os créditos da Giggal.ai são comprados uma vez.' },
      { k: 'Créditos compartilhados', v: 'A validação e o enriquecimento usam os mesmos créditos. Uma limpeza de lista grande deixa menos créditos para encontrar contatos.' },
      { k: 'Sem teste grátis', v: 'O LeadMagic não dá créditos grátis. Você paga antes de poder testar na sua própria lista.' },
      { k: 'Gateways', v: 'O LeadMagic não informa suporte a secure email gateways como Proofpoint ou Mimecast.' },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai em endereços catch-all',
  catchAllProse:
    'O LeadMagic devolve válido, inválido ou desconhecido em domínios catch-all e não cobra pelo desconhecido. A Giggal.ai também devolve um resultado em endereços catch-all, a 1 crédito cada. Além disso, ela verifica endereços atrás de 15 secure email gateways, como Proofpoint, Mimecast e Barracuda. Esses gateways aceitam qualquer endereço num primeiro momento. Por isso, uma verificação simples não consegue distinguir um endereço real de um falso.',
  strengths: {
    heading: 'O que o LeadMagic faz bem',
    intro: 'O LeadMagic é a melhor escolha se você precisa disto:',
  },
  others: {
    heading: 'Outras alternativas ao LeadMagic',
    intro: 'Se você precisa de busca e verificação em uma só ferramenta, estas são outras opções. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Findymail', text: 'Um buscador de e-mails que também verifica. O plano Starter custa US$ 99 por mês por 5.000 créditos de busca e 5.000 créditos de verificação. O Findymail promete uma taxa de bounce abaixo de 5%.' },
      { name: 'Anymail Finder', text: 'Um buscador de e-mails com um verificador separado. Uma verificação custa 0,2 crédito, e os planos começam em US$ 29 por mês por 400 créditos.' },
      { name: 'no2bounce', text: 'Um verificador com créditos de pagamento por uso que nunca expiram. 10.000 créditos custam US$ 20.' },
    ],
  },
  testHeading: 'Teste a Giggal.ai em uma lista que o LeadMagic já verificou',
  testSteps: [
    'Exporte uma lista que você já verificou no LeadMagic.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas catch-all com o que o LeadMagic devolveu para os mesmos endereços.',
  ],
  ctaHeadline: 'Verifique sua lista sem plano mensal',
  faqs: [
    {
      q: 'Quanto custa o LeadMagic?',
      a: 'O LeadMagic começa em US$ 99 por mês por 5.000 créditos. Os planos vão até US$ 849 por mês por 100.000 créditos. A validação de e-mail custa 0,25 crédito por resultado conclusivo. Assim, o plano de US$ 99 cobre 20.000 verificações.',
    },
    {
      q: 'O LeadMagic tem plano grátis?',
      a: 'Não. O LeadMagic diz que não há créditos grátis. O recurso Search tem um teste de 14 dias. A Giggal.ai dá 1.000 créditos grátis sem cartão, válidos em envio em massa.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao LeadMagic?',
      a: 'Sim, se você só precisa de verificação de e-mail. A Giggal.ai verifica listas, devolve um resultado em endereços catch-all e custa US$ 9,90 por 10.000. Ela não encontra e-mails nem números de telefone, então não substitui os produtos de dados do LeadMagic.',
    },
    {
      q: 'O LeadMagic cobra por resultados desconhecidos?',
      a: 'Não. O LeadMagic cobra 0,25 crédito por um resultado conclusivo e nada pelo desconhecido. A Giggal.ai também devolve o crédito quando um resultado é desconhecido.',
    },
    {
      q: 'O LeadMagic vale a pena só para verificar e-mails?',
      a: 'Vale a pena se você usa os produtos de dados dele todo mês. Só para verificação, você paga pelo menos US$ 99 por mês. A Giggal.ai vende 10.000 verificações por US$ 9,90, uma vez.',
    },
    {
      q: 'O teste de catch-all do LeadMagic é neutro?',
      a: 'Não. O LeadMagic publicou esse teste em fevereiro de 2026 e se colocou em primeiro lugar. Leia como um teste de fornecedor. A Giggal.ai não estava entre as ferramentas avaliadas.',
    },
  ],
  breadcrumb: 'Alternativa ao LeadMagic',
}

export default cfg
