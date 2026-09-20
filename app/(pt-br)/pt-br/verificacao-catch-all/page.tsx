import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/pt-br/verificacao-catch-all'
const DESC =
  'Verificação catch-all que devolve válido ou inválido em domínios accept-all, também atrás de Mimecast e Proofpoint. 98,5 % de precisão, 1 crédito por e-mail.'

export const metadata: Metadata = {
  title: { absolute: 'Verificação Catch-all: válido em vez de arriscado | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Verificação catch-all: válido em vez de arriscado',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Verificação catch-all',
  h1Accent: 'Verificação catch-all',
  h1Tail: 'com uma resposta de verdade em cada endereço',
  intro:
    'A maioria dos verificadores para diante dos domínios catch-all e accept-all. A Giggal.ai confirma se cada caixa existe de verdade, incluindo as que estão atrás de gateways de segurança como Mimecast e Proofpoint, com 98,5 % de precisão.',
  toolLine: (
    <>
      Para um único endereço, use o{' '}
      <Link href="/pt-br/verificacao-de-email" className="text-indigo-600 font-bold hover:underline">verificador de e-mail grátis</Link>.
    </>
  ),
  ctaPrimary: 'Comece a verificar os catch-all',
  ctaSecondary: { label: 'Ver preços', href: '/pt-br/precos' },
  ctaNote: '1.000 créditos grátis para começar. Sem cartão.',
  card: {
    kicker: 'Verificação profunda ativa', title: 'Resultados da lista', file: 'contatos_2026.csv',
    valid: '39.113', invalid: '10.508', risky: '0',
    note: 'Em uma lista típica cerca de 30 % dos endereços estão em domínios catch-all. Verificamos um por um: a maioria é válida.',
    labels: { valid: 'Válidos', invalid: 'Inválidos', risky: 'Arriscados' },
  },
  whatKicker: 'O contexto',
  whatTitle: 'O que é um domínio catch-all',
  whatParas: [
    'Um domínio catch-all aceita todo e-mail que recebe, mesmo para endereços que não existem. O servidor responde com uma aceitação genérica a qualquer endereço, então uma verificação SMTP comum não consegue saber se há uma caixa real por trás.',
    'Em uma lista comercial típica cerca de 30 % dos contatos estão em domínios catch-all. A maioria das ferramentas reconhece o padrão, desiste e marca tudo como arriscado ou desconhecido. Você fica com uma lista longa de contatos que não pode usar com segurança.',
    'Sobram duas opções, as duas ruins: enviar e arriscar bounces, spam traps e uma reputação danificada, ou apagar e perder clientes reais. A verificação catch-all resolve o problema conferindo a existência real da caixa em vez de adivinhar.',
  ],
  sameH3: 'Catch-all e accept-all são a mesma coisa',
  sameParas: [
    'Alguns verificadores escrevem "accept all", outros "catch-all" ou "catchall". Descrevem uma única configuração: um domínio cujo servidor de e-mail responde 250 OK a qualquer destinatário. Seja qual for o rótulo que a sua última ferramenta usou, a solução é a mesma e é a desta página.',
  ],
  howKicker: 'Como funciona',
  howTitle: 'Como a Giggal.ai verifica os e-mails catch-all',
  howText: 'Cada endereço catch-all passa por vários níveis de verificação que se combinam em um único resultado claro. Você vê válido ou inválido, não um relatório técnico.',
  signals: [
    { title: 'Verificação profunda da caixa', body: 'Confirmamos a existência real de cada caixa, não só que o domínio aceita tudo. Onde uma verificação SMTP padrão vê uma aceitação genérica e para, nós seguimos até uma resposta real.' },
    { title: 'Sinais de confiança do domínio', body: 'Analisamos a configuração de cada domínio: registros SPF, DKIM e DMARC, certificados SSL e reputação da hospedagem. Domínios bem configurados hospedam caixas reais com muito mais frequência.' },
    { title: 'Gateways de segurança', body: 'Os endereços protegidos por gateways como Mimecast, Proofpoint e Barracuda são verificados diretamente. O gateway deixa de esconder se há uma caixa real atrás do endereço.' },
  ],
  compareKicker: 'Resultados claros',
  compareTitle: 'Das suposições aos resultados',
  compareText: 'A diferença entre um verificador típico e a Giggal.ai na mesma lista de 48.000 e-mails.',
  compare: {
    typicalLabel: 'Um verificador típico', giggalLabel: 'Giggal.ai', count: '48.028 e-mails verificados', catchAllLabel: 'Catch-all',
    typical: ['31.566', '5.982', '10.480'], giggal: ['39.950', '8.078', '0'],
    typicalNote: 'Mais de 10.000 contatos catch-all para os quais você não pode escrever com segurança. Cerca de 80 % são reais, mas você não sabe quais.',
    giggalNote: 'Cerca de 8.400 contatos entregáveis a mais recuperados do monte catch-all. Cada endereço tem um resultado claro.',
  },
  whoKicker: 'Para quem é',
  whoTitle: 'Quem usa a verificação catch-all',
  audience: [
    { title: 'Times de outreach', body: 'Você envia só para contatos verificados. Menos bounces, mais respostas, domínios de envio mais saudáveis.' },
    { title: 'Agências', body: 'Limpe as listas de cada cliente com o mesmo verificador, para que relatórios e entrega continuem previsíveis.' },
    { title: 'Sales operations', body: 'Mantenha no CRM só os contatos que recebem de verdade as suas sequências e atualizações.' },
    { title: 'Newsletters', body: 'Proteja aberturas e cliques removendo endereços que parecem reais mas nunca são entregues.' },
  ],
  faqTitle: 'Perguntas frequentes',
  faq: [
    { q: 'O que é um domínio catch-all?', a: 'Um domínio que aceita qualquer e-mail enviado, mesmo para endereços que não existem. O servidor responde "sim, existe" a qualquer endereço, por isso as verificações SMTP tradicionais não conseguem saber se uma caixa específica é real.' },
    { q: 'A verificação catch-all custa créditos extras?', a: 'Não. Custa 1 crédito por e-mail, exatamente como uma verificação padrão.' },
    { q: 'Qual é a precisão da verificação catch-all?', a: 'Cerca de 98,5 % em listas corporativas. Em vez de adivinhar só pelas respostas SMTP, verificamos a existência real da caixa, então o resultado se mantém também na hora do envio.' },
    { q: 'Ela deixa a verificação do resto da lista mais lenta?', a: 'Não. As verificações catch-all rodam em paralelo com a verificação normal, não depois. A lista completa termina no mesmo tempo.' },
    { q: 'Posso verificar só os endereços catch-all de uma lista já limpa em outro lugar?', a: 'Sim. No painel abra Catch-All Detection, cole ou envie só os endereços que quer conferir e verifique. O custo é o mesmo: 1 crédito por e-mail.' },
    { q: 'O que acontece se uma verificação catch-all devolve "desconhecido"?', a: 'É raro, mas se não chegamos a um resultado o crédito é devolvido automaticamente. Você só paga pelas verificações concluídas.' },
  ],
  ctaHeadline: 'Verifique uma lista e compare os resultados',
}

export default function VerificacaoCatchAllPage() {
  return <CatchAllPageL10n locale="pt-br" content={content} />
}
