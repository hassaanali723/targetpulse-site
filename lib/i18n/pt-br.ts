// Brazilian Portuguese strings for the shared chrome and the two interactive
// components. One page set for Brazil and Portugal (plans/12 section 2.1):
// Brazilian spelling ("e-mail" with the hyphen, as the pages that rank in BR
// write it), register "você". Technical terms stay: catch-all, SMTP, MX, DNS,
// bounce.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'Verificar e-mail', href: '/pt-br/verificacao-de-email' },
  links: [
    { name: 'Catch-all', href: '/pt-br/verificacao-catch-all' },
    { name: 'Integrações', href: '/pt-br/integracoes' },
    { name: 'Preços', href: '/pt-br/precos' },
    { name: 'Contato', href: '/pt-br/contato' },
  ],
  login: 'Entrar',
  signup: 'Cadastre-se grátis',
  menu: 'Abrir o menu',
  homeAria: 'Giggal.ai, página inicial',
}

export const footer = {
  blurb:
    'Verificação SMTP de alto desempenho para que suas campanhas cheguem a caixas reais, incluindo os domínios catch-all e accept-all que outras ferramentas pulam.',
  solutions: {
    heading: 'Soluções',
    links: [
      { name: 'Verificação catch-all', href: '/pt-br/verificacao-catch-all' },
      { name: 'Servidor MCP (em inglês)', href: '/mcp' },
    ],
  },
  resources: {
    heading: 'Recursos',
    links: [
      { name: 'Blog (em inglês)', href: '/blog' },
      { name: 'Comparativo de verificadores (em inglês)', href: '/alternatives' },
      { name: 'Documentação da API (em inglês)', href: '/public/docs' },
    ],
  },
  product: {
    heading: 'Produto',
    links: [
      { name: 'Verificar e-mail grátis', href: '/pt-br/verificacao-de-email' },
      { name: 'Como saber se um e-mail existe?', href: '/pt-br/verificacao-de-email/como-saber-se-um-email-existe' },
      { name: 'Integrações', href: '/pt-br/integracoes' },
      { name: 'Preços', href: '/pt-br/precos' },
      { name: 'Cadastre-se grátis', href: '/pt-br/cadastro' },
    ],
  },
  company: {
    heading: 'Empresa',
    links: [
      { name: 'Contato', href: '/pt-br/contato' },
      { name: 'Programa de afiliados (em inglês)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'Termos de serviço', href: '/pt-br/termos' },
    { name: 'Privacidade', href: '/pt-br/privacidade' },
    { name: 'Reembolsos', href: '/pt-br/reembolsos' },
  ],
  legalHeading: 'Legal',
  rights: 'Todos os direitos reservados.',
  language: 'Idioma',
}

export const announcement = {
  text: 'Caixas de entrada dedicadas do Google e do Outlook com',
  brand: 'PureMail',
  tail: ', US$ 2,90 por caixa ao mês.',
  dismiss: 'Fechar aviso',
}

export const cta = {
  headline: 'Verifique uma lista inteira e compare os resultados',
  offer: '1.000 créditos grátis, sem cartão.',
  button: 'Comece a verificar grátis',
  trust: ['Teste grátis', 'Os créditos não expiram', 'Reembolso dos Desconhecidos'],
}

export const consoleStrings = {
  header: 'Teste em tempo real',
  live: 'Sonda ativa',
  actionLabel: 'Ação',
  actionTitle: 'Handshake com o destinatário',
  placeholder: 'Digite um e-mail para verificar...',
  ariaInput: 'E-mail a verificar',
  button: 'Verificar',
  buttonRunning: 'Verificando',
  diagnostics: 'Status das verificações',
  checks: {
    basic: 'Verificações básicas',
    dns: 'Busca dos servidores de e-mail',
    catchall: 'Verificação catch-all',
    mailbox: 'Existência da caixa',
  },
  idleTitle: 'Pronto para verificar',
  idleText: 'Digite um endereço corporativo ou pessoal para disparar uma sonda DNS e SMTP ao vivo.',
  spawning: 'INICIANDO VERIFICAÇÕES...',
  initLog: '[INIT] Abrindo o socket seguro de verificação...',
  limitTitle: 'Limite diário atingido',
  limitText: 'Você já usou as verificações grátis de hoje. Cadastre-se para receber 1.000 créditos grátis, sem cartão, e verificar a lista inteira.',
  limitButton: 'Receber 1.000 créditos grátis',
  errorTitle: 'Erro na verificação',
  errorFailed: 'A verificação não foi concluída. Tente de novo em alguns segundos.',
  errorUnreachable: 'O serviço de verificação não está respondendo.',
  invalidSyntax: 'Isso não é um endereço de e-mail válido.',
  isCatchAll: 'é um domínio catch-all',
  notCatchAll: 'não é um domínio catch-all',
  catchAllText: 'Aceita e-mail para qualquer endereço, então uma verificação SMTP padrão não consegue dizer se esta caixa existe.',
  notCatchAllText: 'Aqui uma verificação padrão é confiável.',
  resultLabel: 'Resultado',
  verdictTitle: {
    deliverable: 'Válido',
    undeliverable: 'Inválido',
    risky: 'Arriscado',
    unknown: 'Desconhecido',
    catchall: 'Catch-all',
    error: 'Erro',
  },
  verdictLine: {
    deliverable: 'Esta caixa existe.',
    undeliverable: 'Esta caixa não existe.',
    risky: 'O servidor aceita e-mail, mas não conseguimos confirmar esta caixa por completo.',
    unknown: 'Não conseguimos confirmar esta caixa.',
    catchall: 'Não conseguimos confirmar esta caixa.',
    error: '',
  },
}

export const pricing = {
  payg: 'Pague pelo uso (compra única)',
  subscription: 'Assinatura mensal',
  save: 'Economize 10 %',
  colVolume: 'Créditos',
  colRate: 'Preço por crédito',
  colSave: 'Economia',
  colTotal: 'Preço total',
  credits: 'créditos',
  popular: 'Mais escolhido',
  perCredit: '/ crédito',
  oneTime: 'compra única',
  perMonth: '/mês',
  saveBadge: 'Economize {pct} %',
  buy: 'Comprar',
  subscribe: 'Assinar',
  noDiscount: 'Sem desconto',
  mobVolume: 'Créditos',
  mobRate: 'Preço',
  mobSave: 'Economia',
  mobPrice: 'Total',
  numberLocale: 'pt-BR',
  currencySuffix: false,
  currencyPrefix: 'US$ ',
  formula: '1 verificação de e-mail',
  formulaNote: '(verificação catch-all/accept-all incluída)',
  formulaCredit: '1 crédito',
  customTitle: 'Precisa de um volume sob medida?',
  customText: 'Oferecemos planos personalizados e pools de IP dedicados para quem verifica grandes volumes.',
  customButton: 'Fale com a gente',
}

export const notFound = {
  kicker: '404',
  title: 'Esta página não existe',
  text: 'O endereço pode estar errado ou a página foi movida. O verificador de e-mail grátis e os preços estão a um clique.',
  primary: 'Verificar e-mail grátis',
  secondary: 'Voltar ao início',
}

export const legal = {
  updated: 'Última atualização',
  notice: 'Esta é uma tradução de cortesia. Em caso de divergência, prevalece a',
  noticeLink: 'versão em inglês',
  noticeTail: ', que é a única juridicamente vinculante.',
  breadcrumbHome: 'Início',
}

/** Brazilian number formatting: 10.000 and US$ 9,90 (currency stays USD). */
export function ptBrNumber(n: number, decimals = 0): string {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function ptBrUsd(n: number, decimals = 2): string {
  return `US$ ${ptBrNumber(n, decimals)}`
}

/** 2026-09-13 -> "13 de setembro de 2026" */
export function formatDatePtBr(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  if (!y || !m || !d) return iso
  return `${d} de ${months[m - 1]} de ${y}`
}
