import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Brazilian Portuguese home. No head term of its own in the data (the demand
// sits on /pt-br/verificacao-de-email); one page for Brazil and Portugal.
// The hero sends the visitor to the free checker first and to sign-up second
// (plans/12 section 3.3). No gateway line in the hero, no G2 rating in the
// proof line (plans/11 items 10 and 12).

const DESC =
  'Verificação de e-mail que confirma a caixa em domínios catch-all: taxa de bounce abaixo de 3%, verificação em massa, API e 1.000 créditos grátis sem cartão.'

export const metadata: Metadata = {
  title: { absolute: 'Serviço de Verificação de E-mail para Catch-all | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/pt-br', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Serviço de verificação de e-mail para catch-all',
    description: DESC,
    url: 'https://giggal.ai/pt-br',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
  twitter: { card: 'summary_large_image', title: 'Serviço de verificação de e-mail para catch-all', description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Verificação de e-mail',
  h1Accent: 'que resolve o catch-all',
  heroSub: (
    <>
      Serviço de verificação de e-mail para listas inteiras: descubra quais endereços são reais, mesmo em{' '}
      <Link href="/pt-br/verificacao-catch-all" className={heroLink}>domínios catch-all</Link>.
    </>
  ),
  rating: { score: '4,9', on: 'no', reviews: '(129 avaliações)' },
  email: { label: 'E-mail para verificar', placeholder: 'nome@empresa.com.br', button: 'Verificar grátis' },
  listQuestion: 'Vai limpar uma lista inteira?',
  listCta: 'Ganhe 1.000 verificações de e-mail grátis',
  noCard: 'Sem cartão.',
  stats: [
    { n: '500M', suf: '+', l: 'E-mails verificados' },
    { n: '98,5', suf: '%', l: 'Precisão em listas corporativas' },
    { pre: '<\u00a0', n: '3', suf: '%', l: 'Taxa de bounce após a limpeza' },
    { n: '1.000', l: 'Créditos grátis, sem cartão' },
  ],
  bulk: {
    id: 'massa',
    title: 'Verificação de e-mail em massa para toda a sua lista',
    sub: 'Envie sua lista uma vez e nós verificamos cada endereço.',
    points: [
      'Válido ou inválido para cada endereço',
      'Endereços catch-all também recebem uma resposta de verdade',
      'CSV ou Excel, até 50.000 endereços por arquivo',
      'Baixe a lista limpa quando ficar pronta',
    ],
  },
  catchAll: {
    title: 'Por que os endereços catch-all merecem atenção',
    intro: (
      <>
        Alguns servidores de e-mail corporativos aceitam qualquer endereço, real ou inventado. É o que chamamos de{' '}
        <Link href="/pt-br/verificacao-catch-all" className={link}>domínio catch-all</Link>. A maioria dos
        verificadores não vê a diferença, então marca esses e-mails como &quot;arriscado&quot; e deixa a decisão
        com você.
      </>
    ),
    others: 'A maioria dos verificadores',
    othersDetail: 'Catch-all, sem resposta clara',
    ourDetail: 'Catch-all, caixa encontrada',
    risky: 'Arriscado',
    deliverable: 'Entregável',
    othersText: 'Agora é com você: enviar e arriscar um bounce, ou apagar um contato que talvez seja real.',
    ourText: 'Você sabe que o endereço é real e pode enviar. Sem achismo.',
  },
  features: {
    title: 'Verificador e validador de e-mail: limpeza em massa, API e integrações com um único saldo',
    intro: 'Envie uma lista, chame a API ou conecte seu CRM: cada caminho executa a mesma verificação de e-mail.',
    items: [
      { title: 'Limpeza de listas em massa', body: 'Envie um arquivo CSV ou Excel e receba os resultados em minutos.', points: ['Até 50.000 endereços por arquivo', 'Baixe a lista limpa em CSV'], link: 'Limpe uma lista grátis' },
      { title: 'Verificação catch-all', body: 'Uma resposta de verdade em domínios catch-all, em vez de "desconhecido".', points: ['Custa o mesmo crédito que qualquer outra verificação', 'Funciona com domínios protegidos por gateways como Mimecast e Proofpoint'], link: 'Como funciona a verificação catch-all' },
      { title: 'API para desenvolvedores', body: 'Verifique endereços nos seus formulários de cadastro e nos seus apps.', points: ['Um endereço ou uma lista inteira por chamada', 'Chaves de API no seu painel'], link: 'Documentação da API (em inglês)' },
      { title: 'Integrações com CRM e apps', body: 'Envie os contatos limpos para HubSpot, Mailchimp e outros.', points: ['Funciona com as ferramentas que você já usa', 'Zapier e n8n para todo o resto'], link: 'Ver todas as integrações' },
      { title: 'Preços por uso', body: 'Todos os preços são públicos. Os créditos não expiram.', points: ['Sem mensalidade obrigatória', 'Compre mais só quando precisar'], link: 'Ver todos os preços' },
      { title: 'Suporte prioritário', body: 'Travou em algo? Fale direto com nossos engenheiros.', points: ['Pessoas de verdade, não um bot', 'Fale por e-mail ou pelo formulário de contato'], link: 'Falar com o suporte' },
    ],
    preview: {
      done: 'Pronto',
      deliverable: 'Entregável',
      undeliverable: 'Não entregável',
      otherTools: 'Outras ferramentas',
      risky: 'Arriscado',
      credit: '1 crédito',
      email: '1 e-mail',
      creditNote: 'Verificações catch-all custam o mesmo.',
      reply: '24 horas',
      replyNote: 'Nosso tempo de resposta habitual.',
    },
  },
  pricing: {
    id: 'precos',
    claimTop: 'Preço baixo.',
    claimBottom: 'Ótimo custo-benefício.',
    fallbackTitle: 'Preços simples, em dólares',
    priceLine: (p) => `${p} por 10.000 e-mails, verificação catch-all incluída.`,
    claim: { before: '', link: 'Compare com outros verificadores', after: '.' },
    text: 'Você paga só pelo que usa. Os créditos não expiram.',
  },
  switcher: {
    id: 'alternativas',
    title: 'Vai trocar de verificador?',
    intro: 'Veja como a Giggal.ai se compara a outras ferramentas de verificação de e-mail em catch-all, preços e precisão.',
    items: [
      { name: 'ZeroBounce', href: '/pt-br/alternativa-ao-zerobounce', blurb: 'Resolva os endereços catch-all que o ZeroBounce marca como desconhecidos.' },
      { name: 'NeverBounce', href: '/pt-br/alternativa-ao-neverbounce', blurb: 'Preços por uso, com créditos que nunca expiram.' },
      { name: 'Hunter', href: '/pt-br/alternativa-ao-hunter', blurb: 'Um verificador dedicado, em vez de um buscador de e-mails com verificação embutida.' },
      { name: 'Snov.io', href: '/pt-br/alternativa-ao-snovio', blurb: 'Um verificador dedicado, não um módulo dentro de uma plataforma de prospecção.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/pt-br/comparativo/zerobounce-vs-neverbounce', blurb: 'Como os dois se comparam em catch-all, preços e créditos.' },
    ],
    all: 'Compare os 28 verificadores (em inglês)',
  },
  integrations: {
    title: 'Conecte suas ferramentas de marketing',
    sub: 'A Giggal.ai se conecta aos principais CRMs e serviços de e-mail marketing para sincronizar os contatos limpos automaticamente.',
    more: '80+ outras',
    alt: (n) => `${n}: integração de verificação de e-mail com a Giggal.ai`,
  },
  reviewBadges: REVIEW_BADGES['pt-br'],
  reviewWall: REVIEW_WALL['pt-br'],
  mcp: MCP['pt-br'],
  faq: {
    title: 'Perguntas frequentes',
    sub: 'Respostas curtas sobre catch-all, precisão, preços e configuração.',
    more: 'Ainda tem dúvidas?',
    moreLink: 'Fale com a gente',
    items: [
      {
        q: 'O que a Giggal.ai faz de diferente dos outros verificadores?',
        a: 'Resolve os endereços catch-all e os protegidos por gateways de segurança (Mimecast, Proofpoint, Barracuda) com um veredito claro, válido ou inválido, em vez do rótulo "arriscado" com que outras ferramentas desistem. Em uma lista B2B esses endereços são cerca de um terço do total.',
      },
      {
        q: 'Qual é a precisão da verificação?',
        a: '98,5 % em listas corporativas, com uma taxa de bounce que fica abaixo de 3 % após a limpeza. Nos resultados "desconhecido" os créditos são devolvidos.',
      },
      {
        q: 'Como funcionam os créditos?',
        a: 'Uma verificação consome um crédito, seja qual for o tipo de endereço: catch-all e gateway incluídos. Os créditos não expiram. Os primeiros 1.000 são grátis, sem cartão.',
      },
      {
        q: 'Posso enviar um arquivo?',
        a: 'Sim: CSV ou Excel, até 50.000 endereços por arquivo. Os resultados chegam em minutos mesmo em listas grandes, e a lista limpa é baixada em CSV.',
      },
      {
        q: 'Existe uma API?',
        a: 'Sim, uma API REST com verificação individual e em massa, mais um servidor MCP para usar a verificação a partir do Claude, do ChatGPT e do Cursor. A documentação está em inglês.',
      },
      {
        q: 'Posso testar um único e-mail sem me cadastrar?',
        a: 'Sim, com o verificador de e-mail grátis: sem cadastro, sem cartão, sem enviar nenhuma mensagem ao destinatário.',
      },
    ],
  },
  ctaHeadline: 'Comece com 1.000 verificações grátis',
}

export default function HomePtBr() {
  return <HomeL10n locale="pt-br" content={content} />
}
