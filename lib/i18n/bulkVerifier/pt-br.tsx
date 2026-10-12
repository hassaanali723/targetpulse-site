import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Brazilian Portuguese copy for /pt-br/validador-de-email-em-massa, translated
// from the English /bulk-email-verifier page. Keywords from Ahrefs Brazil:
// "validador de email em massa (gratuito)" (primary), verificador de e-mail em
// massa, validar e-mails em massa, verificar lista de e-mails, verificar
// e-mail em massa. "E-mail" keeps the hyphen, as in lib/i18n/emailChecker/pt-br.tsx.

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Validador de e-mail em massa: verifique listas grátis',
    description:
      'Validador de e-mail em massa para CSV e Excel de até 50.000 endereços. Cada linha recebe válido ou inválido, catch-all incluído. Comece com 1.000 créditos grátis.',
    breadcrumb: 'Validador de e-mail em massa',
    appName: 'Giggal.ai Validador de E-mail em Massa',
  },
  hero: {
    h1Lead: 'Validador de e-mail em massa:',
    h1Rest: 'verifique a lista inteira de uma vez',
    intro:
      'Envie um arquivo CSV ou Excel e este validador de e-mail em massa verifica cada endereço dele. Cada linha recebe um resultado válido ou inválido, inclusive os endereços catch-all.',
    ctaPrimary: 'Verificar uma lista grátis',
    ctaPricing: 'Ver preços',
    checks: ['1.000 créditos grátis', 'Não precisa de cartão', 'Os créditos nunca expiram'],
  },
  facts: [
    { v: '50.000', l: 'endereços por arquivo' },
    { v: '98,5 %', l: 'de precisão em listas corporativas' },
    { v: '1 crédito', l: 'por endereço, catch-all incluído' },
    { v: '<3 %', l: 'de bounce após a verificação, em geral' },
  ],
  definition: {
    title: 'O que é a verificação de e-mail em massa?',
    text: 'A verificação de e-mail em massa confere uma lista inteira de endereços de e-mail de uma vez e mostra quais deles podem receber mensagens. Um verificador de e-mail em massa consulta os servidores de e-mail de cada domínio e pergunta se cada caixa existe, sem enviar nenhum e-mail. Em inglês, essa ferramenta se chama bulk email verifier. Você remove os endereços que dariam bounce antes do envio. Isso protege a sua reputação de remetente e a sua entregabilidade.',
  },
  steps: {
    title: 'Como validar e-mails em massa',
    intro: 'São três etapas, e nenhum e-mail é enviado para ninguém da sua lista. A maioria das listas fica pronta em minutos.',
    items: [
      {
        title: 'Envie a sua lista',
        text: 'Adicione um arquivo CSV ou Excel com até 50.000 endereços de e-mail. Para uma lista maior, divida em alguns arquivos.',
      },
      {
        title: 'Cada endereço é verificado',
        text: 'O verificador de e-mail em massa consulta os servidores de e-mail de cada domínio e pergunta se a caixa existe. Ele também marca endereços descartáveis, de função, duplicados e catch-all.',
      },
      {
        title: 'Baixe os resultados',
        text: 'Você recebe um CSV com um resultado em cada linha. Mantenha os endereços válidos, remova os inválidos e verifique os desconhecidos de novo mais tarde.',
      },
    ],
  },
  results: {
    title: 'O que o verificador de e-mail em massa devolve para cada endereço',
    intro: 'Cada linha termina com um de três resultados.',
    valid: {
      title: 'Válido',
      text: 'A caixa existe, então uma mensagem enviada para ela deve chegar. Mantenha esses endereços.',
    },
    invalid: {
      title: 'Inválido',
      text: 'O formato está errado, o domínio não tem servidor de e-mail ou a caixa não existe. Uma mensagem enviada para ele vai dar bounce. Remova esses endereços.',
    },
    unknown: {
      title: 'Desconhecido',
      text: 'O servidor de e-mail não deu uma resposta clara, muitas vezes por causa de greylisting. Verifique esses endereços de novo mais tarde. Os créditos dos resultados desconhecidos são devolvidos.',
    },
    flagsIntro: 'Cada linha também mostra estas marcações, para você decidir o que manter:',
    flags: [
      { lead: 'Catch-all', rest: ', resolvido como válido ou inválido em vez de ficar como arriscado' },
      { lead: 'Descartável', rest: ', uma caixa temporária que vai parar de funcionar' },
      { lead: 'Endereço de função', rest: ', como contato@ ou vendas@, uma caixa compartilhada e não uma pessoa' },
      { lead: 'Duplicado', rest: ', o mesmo endereço mais de uma vez no seu arquivo' },
    ],
  },
  catchAll: {
    title: 'Endereços catch-all recebem um resultado real',
    paragraphs: [
      <>
        Alguns servidores de e-mail de empresas aceitam qualquer endereço, real ou inventado. Isso é um{' '}
        <InlineLink locale="pt-br" href="/catch-all-verification">domínio catch-all</InlineLink>. Uma verificação normal
        recebe sim para todos os endereços desse domínio. Então ela não consegue separar uma caixa real de um erro de
        digitação.
      </>,
      'Muitos validadores de e-mail em massa param aí e marcam todo endereço catch-all como "arriscado". Em listas B2B, isso pode ser uma parte grande dos seus contatos, e muitos deles são pessoas reais. Você precisa adivinhar para quais deles enviar.',
      <>
        A Giggal.ai verifica cada endereço catch-all e devolve válido ou inválido, pelo mesmo 1 crédito de qualquer outro
        endereço. Ela também funciona em domínios protegidos por{' '}
        <InlineLink locale="pt-br" href="/seg-email-verification">gateways de segurança como Proofpoint e Mimecast</InlineLink>{' '}
        (em inglês), onde outras ferramentas costumam devolver desconhecido.
      </>,
    ],
  },
  pricing: {
    title: 'Validador de e-mail em massa gratuito: comece com 1.000 créditos',
    intro:
      'Cada conta nova recebe 1.000 créditos grátis, sem cartão. Isso verifica uma lista de até 1.000 endereços sem custo. Depois disso, este serviço de verificação de e-mail em massa é pago conforme o uso. Você compra créditos uma vez, não há plano mensal e os créditos nunca expiram.',
    colCredits: 'Créditos (endereços)',
    colPrice: 'Preço',
    colPer1k: 'Por 1.000 endereços',
    freeLabel: 'Grátis',
    freeNote: 'Contas novas, sem cartão',
    footnote: (
      <>
        Um crédito verifica um endereço, verificação catch-all incluída. Veja todos os{' '}
        <InlineLink locale="pt-br" href="/pricing">preços</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Quando usar um validador de e-mail em massa',
    intro:
      'Verifique uma lista sempre que for enviar para muitos endereços de uma vez. Remover antes os endereços mortos mantém a sua entregabilidade alta.',
    items: [
      'Antes de uma campanha de cold email, para que os bounces não prejudiquem a sua entregabilidade.',
      'Depois de coletar leads de um formulário, de um evento ou de uma base de leads.',
      'Antes de enviar para uma lista antiga de newsletter que não é usada há meses.',
      'Antes de importar contatos para o seu CRM ou para a sua ferramenta de e-mail.',
    ],
  },
  software: {
    title: 'Software de verificação de e-mail em massa para as suas ferramentas',
    intro:
      'Enviar um arquivo é uma das formas. Você também pode verificar e-mails em massa a partir do seu próprio app ou fluxo de trabalho.',
    items: [
      {
        title: 'API de verificação de e-mail (em inglês)',
        text: 'Envie endereços do seu app ou formulário de cadastro e receba o resultado em JSON.',
      },
      {
        title: 'Integrações',
        text: 'Verifique contatos novos automaticamente com Zapier ou n8n.',
      },
      {
        title: 'Servidor MCP (em inglês)',
        text: 'Verifique e-mails no Claude, no ChatGPT, no Cursor e no VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'Verificar lista de e-mails ou limpar a lista?',
    listText: (
      <>
        Verificar uma lista de e-mails dá um resultado a cada endereço. A limpeza é o que você faz com esses resultados:
        você remove os endereços inválidos, descartáveis e duplicados e fica com um arquivo limpo. As duas começam com o
        mesmo envio de arquivo. Leia mais sobre{' '}
        <InlineLink locale="pt-br" href="/email-list-cleaning">limpeza de lista de e-mails</InlineLink> (em inglês).
      </>
    ),
    oneTitle: 'Precisa verificar só um endereço?',
    oneText: (
      <>
        Use o <InlineLink locale="pt-br" href="/email-checker">verificador de e-mail</InlineLink> grátis. Ele confere um
        endereço por vez, com os mesmos testes e sem cadastro.
      </>
    ),
  },
  faqTitle: 'Perguntas frequentes sobre o validador de e-mail em massa',
  faqs: [
    {
      q: 'O que é um validador de e-mail em massa?',
      a: 'Um validador de e-mail em massa verifica uma lista inteira de endereços de e-mail de uma vez, em vez de um endereço por vez. Você envia um arquivo e cada endereço recebe um resultado: válido, inválido ou desconhecido. Também é chamado de verificador de e-mail em massa ou de validador de e-mails em lote.',
    },
    {
      q: 'Quantos e-mails posso verificar de uma vez?',
      a: 'Até 50.000 endereços por arquivo. Se a sua lista for maior, divida em vários arquivos e envie cada um.',
    },
    {
      q: 'Existe um validador de e-mail em massa gratuito?',
      a: 'Sim. Cada conta nova recebe 1.000 créditos grátis, sem cartão. Um crédito verifica um endereço, então você pode verificar uma lista de até 1.000 endereços de graça.',
    },
    {
      q: 'A validação de e-mail em massa grátis é mesmo grátis?',
      a: 'Sim. Os seus primeiros 1.000 endereços são grátis, sem cartão. Os créditos grátis nunca expiram, então você pode usar quando quiser. Você só paga se precisar verificar mais de 1.000 endereços.',
    },
    {
      q: 'Quanto tempo leva a verificação de e-mail em massa?',
      a: 'A maioria das listas fica pronta em minutos.',
    },
    {
      q: 'Quais formatos de arquivo posso enviar?',
      a: 'CSV ou Excel. Você baixa os resultados em CSV, com um resultado em cada linha.',
    },
    {
      q: 'O verificador de e-mail em massa envia e-mails para a minha lista?',
      a: 'Não. Ele pergunta a cada servidor de e-mail se a caixa existe e para antes de enviar qualquer mensagem. Ninguém da sua lista recebe nada.',
    },
    {
      q: 'Quanto custa a verificação de e-mail em massa?',
      a: 'Um crédito por endereço, com a verificação catch-all incluída. 10.000 endereços custam US$ 9,90 e 100.000 custam US$ 76. Você paga uma vez, sem plano mensal, e os créditos nunca expiram.',
    },
    {
      q: 'O que acontece com os endereços catch-all?',
      a: 'Cada um é verificado e volta como válido ou inválido, pelo mesmo 1 crédito de qualquer outro endereço. Muitos validadores de e-mail em massa marcam todos eles como "arriscado".',
    },
    {
      q: 'O que significa "desconhecido" e eu pago por isso?',
      a: 'Desconhecido significa que o servidor de e-mail não deu uma resposta clara. Muitas vezes é porque ele atrasa remetentes novos de propósito (greylisting). Verifique esses endereços de novo mais tarde. Os créditos dos resultados desconhecidos são devolvidos.',
    },
    {
      q: 'Validar e-mails em massa é o mesmo que verificar e-mails em massa?',
      a: 'Sim. Validar, verificar e checar são três palavras para a mesma tarefa: descobrir quais endereços de uma lista podem receber mensagens.',
    },
    {
      q: 'Qual é a precisão do validador de e-mail em massa?',
      a: 'A Giggal.ai mede 98,5 % de precisão em listas corporativas. Listas verificadas com ela costumam ter bounce abaixo de 3 %.',
    },
    {
      q: 'A minha lista fica privada?',
      a: 'A Giggal.ai é operada pela TargetPulse Ltd e trata dados pessoais de acordo com o GDPR. A política de privacidade em giggal.ai/pt-br/privacidade explica o que é coletado, como é usado e por quanto tempo é guardado.',
    },
  ],
  ctaHeadline: 'Verifique a sua lista de e-mails em minutos',
}
