// pt-br Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'allegrow',
  path: '/pt-br/alternativa-ao-allegrow',
  cluster: 'altAllegrow',
  metaTitle: 'Alternativa ao Allegrow: preços do Allegrow | Giggal.ai',
  ogTitle: 'Alternativa ao Allegrow que cobra por e-mail verificado',
  desc: 'Preços do Allegrow: desde US$ 99 por mês por 5.000 contatos. A Giggal.ai verifica e-mails catch-all e de gateway a US$ 9,90 por 10.000. Os créditos não expiram.',
  h1: ['Uma ', 'alternativa ao Allegrow', ' que cobra por e-mail verificado'],
  heroP:
    'O Allegrow é uma plataforma de verificação de e-mail e entregabilidade para equipes de vendas. Ele é vendido como plano mensal a partir de US$ 99 por 5.000 contatos. A Giggal.ai verifica e-mails com créditos comprados uma vez. 10.000 créditos custam US$ 9,90 e nunca expiram.',
  bluf: [
    { k: 'Cobrança', v: 'O Allegrow é um plano mensal. Os créditos da Giggal.ai são comprados uma vez.' },
    { k: 'Preço', v: 'O Starter do Allegrow custa US$ 99 por mês por 5.000 contatos. A Giggal.ai custa US$ 9,90 por 10.000.' },
    { k: 'Catch-all', v: 'Os dois devolvem válido ou inválido em endereços catch-all. Os dois citam Proofpoint e Mimecast.' },
    { k: 'Ferramentas extras', v: 'O Allegrow também monitora o posicionamento na caixa de entrada e a saúde do domínio. A Giggal.ai não faz isso.' },
  ],
  about: {
    heading: 'O que é o Allegrow?',
    paragraphs: [
      'O Allegrow é uma plataforma de verificação de e-mail B2B para equipes de vendas e de receita. Ele verifica contatos, incluindo endereços catch-all, e devolve válido ou inválido. O Allegrow diz que nunca envia e-mails para verificar um endereço catch-all.',
      'Ele também monitora a reputação do remetente e o posicionamento na caixa de entrada das contas de e-mail conectadas. Ele se integra com Outreach, Salesloft, HubSpot, Apollo, ZoomInfo e Clay.',
      'O Allegrow oferece relatórios SOC 2. O SSO é um adicional no plano mais alto.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Preços do Allegrow em 2026',
  pricingProse:
    'O Starter do Allegrow custa US$ 99 por mês por 5.000 contatos. Contatos extras custam US$ 8 por 1.000. O Scale Plus Unlimited custa US$ 1.340 por mês, com cobrança anual, sem limite de créditos. Um plano de API tem preço sob consulta.',
  pricingExtra: [
    'Assim, 10.000 contatos por mês no Starter saem por US$ 139. Essa é uma conta nossa com base nos preços publicados, não um plano listado. A Giggal.ai vende 10.000 créditos por US$ 9,90 e 100.000 por US$ 76, uma vez.',
  ],
  reasons: {
    heading: 'Por que as equipes procuram uma alternativa ao Allegrow',
    items: [
      { k: 'Custo mensal', v: 'O Starter custa US$ 99 todo mês. Equipes que verificam poucas vezes por ano pagam por meses que não usam.' },
      { k: 'Integrações', v: 'As integrações nativas com HubSpot, Outreach e Salesloft ficam no Scale Plus. O Starter se conecta ao Clay por chave de API.' },
      { k: 'Limites do teste', v: 'O teste de 14 dias cobre 1.000 endereços, sem integrações nem acesso à API.' },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai em e-mails catch-all e de gateway',
  catchAllProse:
    'O Allegrow e a Giggal.ai devolvem um resultado válido ou inválido em endereços catch-all. Os dois também citam Proofpoint e Mimecast entre os gateways atrás dos quais verificam. A principal diferença é a cobrança. O Allegrow usa uma cota mensal de contatos. A Giggal.ai cobra 1 crédito por endereço, de créditos que nunca expiram.',
  strengths: {
    heading: 'O que o Allegrow faz bem',
    intro: 'O Allegrow cobre mais do que verificação. Ele é a melhor escolha para estas necessidades:',
  },
  others: {
    heading: 'Outras alternativas ao Allegrow',
    intro: 'Estas ferramentas também verificam endereços catch-all. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Scrubby', text: 'Verifica domínios catch-all e protegidos por gateway. O pagamento por uso custa US$ 0,008 por crédito, e os planos mensais começam em US$ 47.' },
      { name: 'Listmint', text: 'Verifica endereços catch-all com um saldo de créditos separado. O Starter custa US$ 99 por mês por 20.000 créditos padrão e 5.000 créditos de catch-all.' },
      { name: 'Bounceless', text: 'Inclui indícios de catch-all na verificação de 1 crédito e tem ferramentas de posicionamento na caixa de entrada. 10.000 créditos custam US$ 29.' },
    ],
  },
  testHeading: 'Teste a Giggal.ai com os seus resultados do Allegrow',
  testSteps: [
    'Exporte uma lista que você já verificou no Allegrow.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare os resultados catch-all com os do Allegrow para os mesmos contatos.',
  ],
  ctaHeadline: 'Verifique os mesmos endereços difíceis e pague por e-mail',
  faqs: [
    {
      q: 'Quanto custa o Allegrow?',
      a: 'O Starter do Allegrow custa US$ 99 por mês por 5.000 contatos, com contatos extras a US$ 8 por 1.000. O Scale Plus Unlimited custa US$ 1.340 por mês, com cobrança anual. O plano de API tem preço sob consulta.',
    },
    {
      q: 'O Allegrow tem teste grátis?',
      a: 'Sim. O Allegrow tem um teste de 14 dias para até 1.000 endereços, sem cartão. Integrações e acesso à API não fazem parte do teste.',
    },
    {
      q: 'A Giggal.ai é uma boa alternativa ao Allegrow?',
      a: 'Sim, se você só precisa de verificação. A Giggal.ai devolve um resultado em endereços catch-all e de gateway a US$ 9,90 por 10.000. Ela não monitora o posicionamento na caixa de entrada nem a reputação do remetente.',
    },
    {
      q: 'O Allegrow envia e-mails para verificar endereços catch-all?',
      a: 'Não. O Allegrow diz que nunca envia e-mails para verificar um endereço catch-all.',
    },
    {
      q: 'O Allegrow tem plano ilimitado?',
      a: 'Sim. O Scale Plus Unlimited custa US$ 1.340 por mês, com cobrança anual, e dá verificação ilimitada por integrações ou CSV. A Giggal.ai não tem plano ilimitado.',
    },
  ],
  breadcrumb: 'Alternativa ao Allegrow',
}

export default cfg
