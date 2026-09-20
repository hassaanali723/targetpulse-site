import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
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

const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Verificação de e-mail',
  h1Accent: 'que resolve o catch-all',
  para1: (
    <>
      Um serviço de verificação de e-mail que confere a caixa de verdade, não só a sintaxe. Taxa de bounce{' '}
      <strong className="text-indigo-600 font-extrabold">abaixo de 3 %</strong>, e os{' '}
      <strong className="text-slate-900 font-extrabold">30 % de cada lista B2B</strong> que outras ferramentas
      marcam como &quot;arriscado&quot; voltam a ser entregáveis.
    </>
  ),
  para2: (
    <>
      <a href="#massa" className={link}>Verificação em massa</a> até 50.000 endereços por arquivo, mais uma API.
      Funciona em{' '}
      <Link href="/pt-br/verificacao-catch-all" className={link}>domínios catch-all</Link>.
    </>
  ),
  freeTitle: '1.000 verificações grátis',
  freeText: 'Comece a limpar sua lista agora. Sem cartão.',
  ctaPrimary: { label: 'Verificar um e-mail grátis', href: '/pt-br/verificacao-de-email' },
  ctaSecondary: { label: 'Ver preços', href: '/pt-br/precos' },
  proof: 'Mais de 500 milhões de e-mails verificados',
  stats: [
    { n: '500M+', l: 'E-mails verificados' },
    { n: '98,5 %', l: 'Precisão em listas corporativas' },
    { n: '< 3 %', l: 'Taxa de bounce após a limpeza' },
    { n: '1.000', l: 'Créditos grátis, sem cartão' },
  ],
  consoleTitle: 'Verifique um e-mail em tempo real',
  consoleText: 'O mesmo motor da verificação em massa, um endereço por vez. Grátis e sem cadastro.',
  catchAll: {
    title: 'Por que os endereços catch-all precisam de um veredito de verdade',
    intro: (
      <>
        Um{' '}
        <Link href="/pt-br/verificacao-catch-all" className={link}>domínio catch-all</Link> aceita e-mail para
        qualquer endereço, exista ou não, então a resposta SMTP em que as ferramentas padrão se baseiam não
        diz nada. Elas escrevem &quot;arriscado&quot; e deixam você apostando às cegas com um terço da lista:
      </>
    ),
    standardLabel: 'Verificadores padrão',
    standardStat: '35 %',
    standardCaption: 'Risco médio de bounce',
    standardText: 'Obrigam você a jogar fora contatos válidos ou a arriscar o bloqueio dos seus domínios de envio.',
    verifiedBadge: 'Verificado',
    verifiedStat: '< 3 %',
    verifiedCaption: 'Bounces no envio',
    verifiedText: 'Identifica as caixas corporativas ativas para que você faça outreach com a certeza de ser lido.',
  },
  featuresId: 'massa',
  featuresTitle: 'Verificador e validador de e-mail: limpeza em massa, API e integrações com um único saldo',
  featuresText: 'Envie uma lista, chame a API ou conecte seu CRM: cada caminho executa a mesma verificação de e-mail.',
  features: [
    { title: 'Limpeza de listas em massa', body: 'Envie um arquivo CSV ou TXT e verifique milhares de contatos em minutos, com os duplicados removidos.' },
    { title: 'Verificação catch-all', body: 'Confirma a entregabilidade em domínios corporativos catch-all que as verificações padrão marcam como desconhecido.' },
    { title: 'Gateways de segurança', body: 'Verifica caixas atrás de Proofpoint, Mimecast e Barracuda, onde a maioria dos verificadores para.' },
    { title: 'API para desenvolvedores', body: 'Integre a verificação em tempo real em formulários de cadastro ou nos seus aplicativos.' },
    { title: 'Integrações', body: 'Sincronize os contatos verificados com HubSpot, Mailchimp, Zapier, n8n e as ferramentas de outreach de sempre.' },
    { title: 'Preços públicos', body: 'Cada faixa de volume está publicada, pelo uso ou em assinatura com 10 % de desconto.' },
  ],
  pricingId: 'precos',
  pricingTitle: 'Preços simples, em dólares',
  pricingText: 'Você paga só o que usa. Os créditos não expiram.',
  contactHref: '/pt-br/contato',
  faqTitle: 'Perguntas frequentes',
  faqMore: 'Mais perguntas?',
  faqMoreLink: 'Fale com a gente',
  faq: [
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
      a: 'Sim: CSV, TXT ou Excel. Os resultados chegam em minutos mesmo em listas grandes, com exportação para CSV, Excel ou JSON e os duplicados removidos.',
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
  ctaHeadline: 'Comece com 1.000 verificações grátis',
}

export default function HomePtBr() {
  return <HomeL10n locale="pt-br" content={content} />
}
