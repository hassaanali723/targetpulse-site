// pt-br Anymailfinder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). Numbers come from
// lib/competitorPricing.ts; the competitor's words from lib/i18n/altBrands/pt-br/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'pt-br',
  slug: 'anymailfinder',
  path: '/pt-br/alternativa-ao-anymailfinder',
  cluster: 'altAnymailfinder',
  metaTitle: 'Alternativa ao Anymailfinder para verificar e-mails | Giggal.ai',
  ogTitle: 'Alternativa ao Anymailfinder para verificar listas de e-mail',
  desc: 'Procurando uma alternativa ao Anymailfinder? Compare os preços do Anymail Finder com a Giggal.ai, verificador com pagamento por uso: US$ 9,90 por 10.000.',
  h1: ['Uma ', 'alternativa ao Anymailfinder', ' para as listas que você já tem'],
  heroP:
    'O Anymail Finder foi feito para encontrar endereços de e-mail. O verificador dele é uma ferramenta secundária, paga com um plano mensal. Se a sua lista já existe e você só precisa verificá-la, a Giggal.ai faz isso por US$ 9,90 por 10.000 e-mails, sem assinatura.',
  bluf: [
    { k: 'Função principal', v: 'O Anymail Finder encontra e-mails. A Giggal.ai verifica os e-mails que você já tem.' },
    { k: 'Preço', v: 'Uma verificação custa 0,2 crédito, em planos a partir de US$ 29 por mês. A Giggal.ai custa US$ 9,90 por 10.000, comprados uma vez.' },
    { k: 'Créditos', v: 'Os créditos do Anymail Finder expiram se você cancelar. Os créditos da Giggal.ai nunca expiram.' },
    { k: 'Desconhecido', v: 'O Anymail Finder cobra por toda verificação. A Giggal.ai devolve o crédito em resultados desconhecidos.' },
  ],
  about: {
    heading: 'O que é o Anymail Finder?',
    paragraphs: [
      'O Anymail Finder, também escrito Anymailfinder, é um buscador de e-mails para vendas B2B. Você informa um nome e uma empresa, e ele devolve um e-mail corporativo verificado. Ele também busca por domínio, cargo ou URL do LinkedIn.',
      'Ele tem uma extensão para Chrome, envio em massa de até 100.000 linhas e uma API. Encontrar o e-mail de uma pessoa custa 1 crédito, cobrado só quando ele acha um e-mail verificado.',
      'O Anymail Finder também tem um verificador de e-mail para listas de outras fontes. Cada verificação custa 0,2 crédito e é cobrada sempre. Ele devolve válido, arriscado ou inválido.',
    ],
  },
  reasons: {
    heading: 'Por que as pessoas procuram uma alternativa ao Anymailfinder',
    items: [
      { k: 'Plano mensal', v: 'Seus créditos só continuam valendo enquanto você mantém a assinatura. Se você cancelar, eles expiram no fim do período de cobrança.' },
      { k: 'Por verificação', v: 'O verificador cobra 0,2 crédito por toda verificação, incluindo endereços que ele não consegue confirmar.' },
      { k: 'Cartão no teste', v: 'O teste de 7 dias pede um cartão. A Giggal.ai dá 1.000 créditos grátis sem cartão.' },
      { k: 'Gateways', v: 'O Anymail Finder não informa suporte a secure email gateways como Proofpoint ou Mimecast.' },
    ],
  },
  catchAllHeading: 'Como o Anymail Finder e a Giggal.ai tratam e-mails catch-all',
  catchAllProse:
    'O Anymail Finder diz que verifica a maioria dos endereços catch-all como válidos ou inválidos. Os poucos que ele não consegue alcançar ficam marcados como arriscados. A Giggal.ai também devolve um resultado em endereços catch-all, a 1 crédito cada, e também verifica atrás de 15 secure email gateways citados pelo nome. Quando a Giggal.ai não consegue uma resposta, o resultado é desconhecido e o crédito volta para você.',
  pricingHeading: 'Preços do Anymail Finder para verificação de e-mail',
  pricingProse:
    'O Anymail Finder vende planos mensais de US$ 29 por 400 créditos até US$ 799 por 100.000 créditos. No plano anual, você economiza 33%. Uma verificação custa 0,2 crédito, então 10.000 verificações usam 2.000 créditos.',
  pricingExtra: [
    'Assim, 10.000 verificações por mês ficam no plano de US$ 89, e 100.000 verificações no plano de US$ 299. Os créditos não usados acumulam enquanto você mantém a assinatura. A Giggal.ai vende 10.000 créditos por US$ 9,90 e 100.000 por US$ 76, em compra única, e os créditos não expiram.',
  ],
  strengths: {
    heading: 'Quando o Anymail Finder é a melhor escolha',
    intro: 'O Anymail Finder faz coisas que a Giggal.ai não faz. Escolha o Anymail Finder para estas necessidades:',
  },
  others: {
    heading: 'Outras alternativas ao Anymailfinder',
    intro: 'Estas ferramentas encontram e-mails, verificam e-mails ou fazem as duas coisas. Preços conferidos no site de cada fornecedor em 27 de novembro de 2026.',
    items: [
      { name: 'Findymail', text: 'Encontra e verifica e-mails, com uma extensão para Chrome para LinkedIn e Sales Navigator. O Starter custa US$ 99 por mês por 5.000 créditos de busca e 5.000 créditos de verificação.' },
      { name: 'LeadMagic', text: 'Uma plataforma de dados B2B com busca de e-mails, números de celular e validação. A validação custa 0,25 crédito por resultado conclusivo, em planos a partir de US$ 99 por mês.' },
      { name: 'Scrubby', text: 'Um verificador para endereços catch-all e protegidos por gateway. Os créditos de pagamento por uso custam US$ 0,008 cada e nunca expiram.' },
    ],
  },
  testHeading: 'Verifique uma exportação do Anymail Finder com a Giggal.ai',
  testSteps: [
    'Exporte uma lista que você já verificou no Anymail Finder.',
    'Verifique aqui com os 1.000 créditos grátis. Sem cartão.',
    'Compare as linhas que o Anymail Finder marcou como arriscadas com os resultados que a Giggal.ai devolve.',
  ],
  ctaHeadline: 'Verifique os e-mails que você já encontrou',
  faqs: [
    {
      q: 'Qual é a melhor alternativa ao Anymailfinder?',
      a: 'Depende do trabalho. Para encontrar e-mails, veja o Findymail ou o LeadMagic. Para verificar uma lista que você já tem, a Giggal.ai custa US$ 9,90 por 10.000 créditos, sem assinatura e com créditos que nunca expiram.',
    },
    {
      q: 'Quanto custa o Anymail Finder?',
      a: 'Os planos mensais vão de US$ 29 por 400 créditos a US$ 799 por 100.000 créditos. No plano anual, você economiza 33%. Verificar um e-mail de outra fonte custa 0,2 crédito.',
    },
    {
      q: 'O Anymail Finder tem teste grátis?',
      a: 'Sim. Ele tem um teste de 7 dias com 100 créditos. Você cadastra um cartão, que é verificado, mas não cobrado. A Giggal.ai dá 1.000 créditos grátis sem cartão.',
    },
    {
      q: 'A Giggal.ai encontra endereços de e-mail como o Anymail Finder?',
      a: 'Não. A Giggal.ai só verifica endereços que você já tem. Use primeiro um buscador e depois verifique a lista com a Giggal.ai antes de enviar.',
    },
    {
      q: 'Os créditos do Anymail Finder expiram?',
      a: 'Eles acumulam sem limite enquanto o seu plano estiver ativo. Se você cancelar, eles expiram no fim do período de cobrança. Os créditos da Giggal.ai nunca expiram.',
    },
  ],
  breadcrumb: 'Alternativa ao Anymail Finder',
}

export default cfg
