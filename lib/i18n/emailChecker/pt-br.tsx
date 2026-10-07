import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Brazilian Portuguese copy for /pt-br/verificacao-de-email, translated from
// the English /email-checker page. Keyword family from the earlier pt-br page:
// "verificação de e-mail" (primary), verificar, verificador, validador,
// consultar and confirmar e-mail, plus "grátis". "E-mail" keeps the hyphen.

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Verificação de e-mail grátis:',
    h1Rest: 'verificador de e-mails online',
    intro:
      'Verifique ou consulte qualquer endereço de e-mail online, grátis. Cole o endereço para testar o formato, o servidor de e-mail e a própria caixa de e-mail. Em domínios catch-all, este verificador de e-mail continua a verificação e devolve válido ou inválido.',
  },
  tool: {
    caption: 'Sem cadastro, sem cartão. Um endereço por verificação.',
    freeCredits: 'Precisa de mais verificações? Crie uma conta e receba 1.000 créditos grátis. Não precisa de cartão.',
  },
  ratings: {
    reviews: (count) => `${count} avaliações`,
    ratedAria: (rating, platform) => `Giggal.ai tem nota ${rating.replace('.', ',')} de 5 no ${platform}`,
  },
  awards: {
    headingLead: 'A Giggal.ai é avaliada como',
    headingRest: 'Líder no SourceForge e no Slashdot',
    showLabel: 'Mostrar {badge}',
  },
  steps: {
    title: 'Como verificar se um e-mail é válido',
    intro:
      'Uma checagem completa de um endereço, também chamada de verificação de e-mail, tem quatro etapas. Os verificadores que fazem só a primeira são o motivo de tantas listas "verificadas" continuarem dando bounce.',
    items: [
      {
        title: 'Formato',
        text: 'O endereço está bem formado? Uma única @, um nome válido antes dela e um domínio com uma extensão como .com. Esta etapa encontra erros de digitação e nada mais.',
      },
      {
        title: 'Servidor de e-mail',
        text: 'O domínio publica registros de servidor de e-mail (MX)? Sem registros MX, nenhuma caixa pode existir ali. Então o endereço está morto antes de qualquer envio.',
      },
      {
        title: 'Caixa de e-mail',
        text: 'O verificador pergunta ao servidor de e-mail se esta caixa existe, sem enviar nenhum e-mail. Um sim significa que a caixa existe. Um não significa que ela não está lá.',
      },
      {
        title: 'Catch-all',
        text: 'Se o servidor também diz sim para um endereço inventado, a etapa três não provou nada. É aqui que a maioria dos verificadores de e-mail escreve "catch-all" e para. A Giggal.ai analisa sinais extras que separam uma caixa real de uma resposta accept-all e devolve válido ou inválido.',
      },
    ],
    footnote:
      'O painel de resultado acima mostra cada etapa enquanto ela é executada. Para verificar se um e-mail é válido, cole o endereço e clique no botão. Um endereço leva poucos segundos.',
  },
  results: {
    title: 'O que o verificador de e-mail mostra para cada endereço',
    intro: 'Cada verificação termina com um de três resultados.',
    valid: {
      title: 'Válido',
      text: 'A caixa existe e passou nos sinais extras. Uma mensagem enviada para ela deve chegar.',
    },
    invalid: {
      title: 'Inválido',
      text: 'O endereço tem um formato errado, não tem servidor de e-mail ou o servidor rejeitou a caixa. Uma mensagem enviada para ele vai dar bounce.',
    },
    unknown: {
      title: 'Desconhecido',
      text: 'É raro aqui. O servidor não respondeu a tempo ou atrasa remetentes novos de propósito. Verifique de novo mais tarde, em vez de considerar o endereço morto.',
    },
    detailsIntro: 'Abaixo do resultado, o verificador de e-mail lista os detalhes de que depende a decisão de envio:',
    details: [
      { lead: 'O provedor de e-mail', rest: ' (Google Workspace, Microsoft 365 ou um gateway como o Proofpoint)' },
      { lead: 'O servidor de e-mail que respondeu', rest: '' },
      {
        lead: 'Se o endereço é descartável',
        rest: ' (uma caixa temporária que vai sumir)',
        href: '/pt-br/verificador-de-e-mail-descartavel',
      },
      {
        lead: 'Se é um endereço de função',
        rest: ' (contato@, vendas@, suporte@, que chegam a uma caixa compartilhada, não a uma pessoa)',
      },
      {
        lead: 'Se está em um provedor de e-mail pessoal',
        rest: ' como Gmail ou Yahoo, o que importa quando você qualifica leads B2B',
      },
    ],
  },
  exists: {
    title: 'Como saber se um e-mail existe',
    p1: 'Um e-mail existe quando a caixa está criada no servidor de destino e aceita mensagens. Para verificar o e-mail, o verificador pergunta diretamente a esse servidor, sem enviar mensagem. Isso prova que a caixa existe. Não prova quem é o dono nem com que frequência ele lê os e-mails.',
    p2: 'Se você não tem certeza de que um endereço dos seus contatos existe, consulte o e-mail no verificador acima.',
    signsIntro: 'Endereços que não existem costumam mostrar um destes sinais:',
    signs: [
      { lead: 'Domínios com erro de digitação', rest: ' como gmial.com ou yaho.com, que não têm servidor de e-mail ou rejeitam tudo.' },
      { lead: 'Sem registros de servidor de e-mail', rest: ' no domínio, então não há para onde a mensagem ir.' },
      {
        lead: 'Uma caixa rejeitada:',
        rest: ' o domínio é real, mas o servidor diz que essa pessoa não está lá, muitas vezes porque ela saiu da empresa.',
      },
      {
        lead: 'Sequências aleatórias',
        rest: ' antes da @, digitadas por bots ou por pessoas que preenchiam um formulário que não queriam completar.',
      },
    ],
  },
  whySend: {
    title: 'Por que verificar um e-mail antes de enviar',
    p1: 'Uma mensagem enviada para um endereço que não existe volta como hard bounce. Gmail, Outlook e outros provedores de e-mail contam os seus bounces. Quando muitos e-mails seus dão bounce, eles confiam menos no seu domínio de envio. Então mais mensagens suas vão para o spam ou são bloqueadas, mesmo as enviadas para pessoas reais. A verificação de e-mail encontra esses endereços antes do envio.',
    readMore: (
      <>
        Leia <InlineLink href="/pt-br/blog/hard-bounce-e-soft-bounce">hard bounce e soft bounce</InlineLink> para saber o
        que significa cada código de bounce e o que fazer com ele.
      </>
    ),
    bounceTitle: 'Taxa de bounce menor.',
    bounceText: 'Listas limpas com a Giggal.ai costumam ter bounce abaixo de 3 %.',
    benefits: [
      {
        title: 'Uma boa reputação de remetente.',
        text: 'Menos bounces mantêm o seu domínio em boa situação com os provedores de e-mail.',
      },
      {
        title: 'Melhor entregabilidade.',
        text: 'Com uma boa reputação, mais e-mails seus chegam à caixa de entrada, e não à pasta de spam.',
      },
      {
        title: 'Dados mais limpos.',
        text: 'Os endereços mortos saem do seu CRM antes de custar tempo ou créditos de envio.',
      },
    ],
  },
  whenToUse: {
    title: 'Quando usar um verificador de e-mail',
    intro: 'Use este verificador de e-mail sempre que um único endereço decidir o seu próximo passo:',
    items: [
      'Antes de responder a um lead cujo endereço parece digitado à mão.',
      'Quando um cadastro dá bounce e você quer saber se o endereço já existiu.',
      'Antes de enviar para um endereço que você encontrou em um site ou em um CRM.',
      'Para testar um endereço de uma lista comprada antes de pagar pela limpeza do arquivo inteiro.',
      'Para confirmar um e-mail em um domínio catch-all que outra ferramenta marcou como "arriscado".',
    ],
  },
  catchAll: {
    title: 'Por que outros verificadores de e-mail param no catch-all',
    paragraphs: [
      <>
        Alguns servidores de e-mail de empresas aceitam qualquer endereço, real ou inventado. Isso é um{' '}
        <InlineLink href="/pt-br/verificacao-catch-all">domínio catch-all</InlineLink>. Pergunte sobre um funcionário
        real e ele diz sim. Pergunte sobre um nome que você inventou e ele também diz sim. Então a verificação normal da
        caixa não prova nada nesse domínio.
      </>,
      'Detectar um domínio catch-all é fácil: basta testar um endereço inventado e ver se ele é aceito. Por isso quase todo verificador de e-mail consegue dizer que um domínio é catch-all. Descobrir quais caixas desse domínio são reais exige muito mais trabalho. Então a maioria dos validadores de e-mail para no rótulo e deixa a decisão para você. Em listas B2B, os endereços catch-all costumam ser uma parte grande dos contatos, e muitos deles são pessoas reais.',
      <>
        A Giggal.ai analisa os sinais extras em cada endereço catch-all e devolve válido ou inválido. É também por isso
        que esta página permite só algumas verificações por visitante. Leia{' '}
        <InlineLink href="/pt-br/blog/o-que-e-um-email-catch-all">o que é um e-mail catch-all</InlineLink> para entender
        o assunto por completo.
      </>,
    ],
  },
  wholeList: {
    title: 'Verificar e-mails de uma lista inteira em vez de um endereço',
    list: (
      <>
        O verificador de e-mail desta página trata um endereço por vez. Para a verificação de e-mail em massa de uma
        lista, crie uma conta e envie um arquivo CSV ou Excel com até 50.000 endereços. Depois,{' '}
        <InlineLink href="/pt-br">limpe a sua lista de e-mails</InlineLink> com as mesmas verificações em cada linha.
        Você começa com 1.000 créditos grátis, sem cartão.
      </>
    ),
    api: (
      <>
        Para verificar endereços dentro do seu próprio app ou formulário de cadastro, use a{' '}
        <InlineLink href="/email-verification-api">API de verificação de e-mail</InlineLink>. Ela faz as mesmas
        verificações e devolve o resultado em JSON.
      </>
    ),
  },
  faqTitle: 'Perguntas frequentes sobre verificação de e-mail',
  faqs: [
    {
      q: 'O que é um verificador de e-mail?',
      a: 'Um verificador de e-mail diz se um endereço de e-mail é válido. Ele confere o formato, o servidor de e-mail e a própria caixa de e-mail. Também é chamado de validador de e-mail. Ele funciona sem enviar nenhuma mensagem ao endereço.',
    },
    {
      q: 'Verificador de e-mail e validador de e-mail são a mesma coisa?',
      a: 'Sim. Verificador de e-mail e validador de e-mail são dois nomes para o mesmo tipo de ferramenta. Os dois verificam um endereço de e-mail conferindo o formato, o servidor de e-mail e a caixa. A diferença está nos domínios catch-all. Muitos param ali com "arriscado". Este devolve válido ou inválido.',
    },
    {
      q: 'Como funciona um verificador de e-mail?',
      a: 'Ele faz quatro verificações, em ordem. Primeiro, o formato do endereço. Depois, os registros de servidor de e-mail do domínio. Em seguida, pergunta ao servidor de e-mail se a caixa existe. Em domínios catch-all, onde o servidor diz sim para todo endereço, a Giggal.ai analisa sinais extras para separar uma caixa real de uma falsa.',
    },
    {
      q: 'Como verificar se um e-mail é válido?',
      a: 'Cole o endereço no verificador de e-mail no topo desta página e faça a verificação. Você recebe um resultado em segundos: válido, inválido ou desconhecido. O motivo e os detalhes do servidor de e-mail aparecem logo abaixo.',
    },
    {
      q: 'Dá para saber se um e-mail existe sem enviar uma mensagem?',
      a: 'Sim. O verificador de e-mail pergunta ao servidor de destino se a caixa existe e para antes de enviar qualquer mensagem. Nada chega à caixa de entrada da pessoa.',
    },
    {
      q: 'O verificador de e-mail envia uma mensagem ao endereço?',
      a: 'Não. A verificação fala só com o servidor de e-mail. O dono do endereço não recebe nada e não é avisado de que o endereço foi verificado.',
    },
    {
      q: 'O verificador de e-mail é preciso?',
      a: 'Depende do verificador. A maioria é precisa em domínios normais e desiste nos domínios catch-all, onde devolve "arriscado" ou "desconhecido". A Giggal.ai continua nos domínios catch-all e devolve válido ou inválido. Ela mede 98,5 % de precisão em listas corporativas.',
    },
    {
      q: 'O que significa "válido" em um domínio catch-all?',
      a: 'Significa que a caixa foi confirmada, e não só que o domínio aceitou o destinatário. Um simples rótulo catch-all diz apenas que o servidor aceita tudo. Aqui, válido significa que o endereço passou nas verificações extras que separam uma caixa real de uma que vai dar bounce.',
    },
    {
      q: 'O que significa "desconhecido" em uma verificação de e-mail?',
      a: 'O servidor de e-mail não deu uma resposta clara a tempo. Muitas vezes é porque ele atrasa remetentes novos de propósito (greylisting). Isso não prova que o endereço está morto. Verifique de novo mais tarde.',
    },
    {
      q: 'Quantos endereços posso verificar aqui?',
      a: 'Alguns endereços por hora, sem cadastro e sem cartão. Cada verificação faz o conjunto completo de testes, por isso o número é pequeno. Para verificar mais, crie uma conta.',
    },
    {
      q: 'Um e-mail válido ainda pode dar bounce?',
      a: 'Sim, mas é raro. Um resultado válido significa que a caixa existia no momento da verificação. A mensagem ainda pode dar bounce se a caixa estiver cheia ou se o servidor de e-mail ficar fora do ar por um tempo. Também pode acontecer se a pessoa sair da empresa depois da verificação ou se o servidor bloquear o seu domínio de envio. Verifique os endereços perto da data de envio.',
    },
    {
      q: 'Meus dados ficam privados?',
      a: 'A Giggal.ai é operada pela TargetPulse Ltd e trata dados pessoais de acordo com o GDPR. A política de privacidade em giggal.ai/pt-br/privacidade explica o que é coletado, como é usado e por quanto tempo é guardado.',
    },
    {
      q: 'Posso verificar uma lista inteira aqui?',
      a: 'Não nesta página. Crie uma conta e envie a lista em um arquivo CSV ou Excel. Cada endereço passa pelas mesmas verificações. Você começa com 1.000 créditos grátis, sem cartão.',
    },
  ],
  ctaHeadline: 'Verifique a sua lista inteira',
  related: [
    { href: '/pt-br/verificacao-de-email/como-saber-se-um-email-existe', label: 'Como saber se um e-mail existe? Quatro métodos' },
    { href: '/pt-br/verificacao-catch-all', label: 'Verificação catch-all e endereços arriscados' },
    { href: '/pt-br/precos', label: 'Preços e créditos' },
    { href: '/pt-br/verificador-de-e-mail-descartavel', label: 'Verificador de e-mail descartável e temporário' },
    { href: '/pt-br/blog/o-que-e-um-email-catch-all', label: 'O que é um e-mail catch-all' },
  ],
}
