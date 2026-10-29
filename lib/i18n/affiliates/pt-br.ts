import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Brazilian Portuguese copy of the affiliate page. Source: app/(en)/affiliates.
// Register "você", "e-mail" with the hyphen, money as US$ 50, numbers 10.000,
// percentages "20 %" as on the pt-br pricing page (no-break space).

export const AFFILIATES_PT_BR: AffiliatesContent = {
  meta: {
    title: 'Programa de afiliados: 20 % de comissão recorrente | Giggal.ai',
    description:
      'Participe do programa de afiliados da Giggal.ai: 20 % de comissão recorrente em cada pagamento dos seus indicados, atribuição de 3 meses e pagamento mensal.',
    ogTitle: 'Programa de afiliados: 20 % de comissão recorrente',
    ogDescription:
      'Ganhe 20 % de comissão recorrente a cada cliente que você indicar à Giggal.ai. Sem prazo final. Sem limite de ganhos.',
  },
  crumb: 'Programa de afiliados',
  h1Lead: 'Ganhe 20 % de comissão',
  h1Accent: 'todo mês, sem prazo final',
  intro: {
    before: 'Indique a',
    after:
      'para o seu público e ganhe 20 % de comissão em cada pagamento dos seus indicados, enquanto eles continuarem clientes. Sem limite de ganhos e sem prazo final.',
  },
  joinCta: 'Participe do programa de afiliados',
  howCta: 'Veja como funciona',
  stats: [
    { value: '20 %', label: 'Recorrente' },
    { value: '3 meses', label: 'Atribuição' },
    { value: 'Todo mês', label: 'Pagamentos' },
    { value: 'US$ 50', label: 'Pagamento mínimo' },
  ],
  why: {
    eyebrow: 'Por que participar',
    h2: 'Um dos programas mais generosos entre as ferramentas de e-mail',
    sub: 'Receita recorrente de verdade, não um pagamento único.',
    cards: [
      {
        title: '20 % recorrente',
        body: 'Ganhe em cada pagamento dos seus indicados, mês após mês, ano após ano.',
      },
      {
        title: 'Sem limite de ganhos',
        body: 'Indique 10 clientes ou 10.000. Não há teto para o que você pode ganhar.',
      },
      {
        title: 'Atribuição de 3 meses',
        body: 'A indicação conta para você se a pessoa se cadastrar em até 3 meses depois de clicar no seu link.',
      },
      {
        title: 'Pagamentos mensais',
        body: 'Receba todo mês via PayPal ou Wise quando atingir o mínimo de US$ 50.',
      },
    ],
  },
  how: {
    eyebrow: 'Como funciona',
    h2: 'Do cadastro ao primeiro pagamento em dias, não em meses',
    steps: [
      {
        title: 'Cadastre-se em 30 segundos',
        body: 'Entre no programa e receba na hora o seu link de indicação exclusivo. Sem entrevista e sem período de espera.',
      },
      {
        title: 'Compartilhe o seu link',
        body: 'Divulgue a Giggal.ai no seu blog, na sua newsletter, nas redes sociais, no YouTube ou diretamente a clientes que precisam de listas de e-mail mais limpas.',
      },
      {
        title: 'Receba todo mês',
        body: 'Ganhe 20 % de cada pagamento dos seus indicados. O rastreamento é automático e o pagamento sai todo mês.',
      },
    ],
  },
  earn: {
    eyebrow: 'Seu potencial',
    h2: 'Veja quanto você pode ganhar',
    sub: 'Com base em clientes no pacote de 100.000 créditos, o mais escolhido (US$ 76/mês). Os outros pacotes também pagam 20 %.',
    colCustomers: 'Clientes indicados',
    colPlan: 'Pacote',
    colEarnings: 'Seus ganhos por mês',
    perMonth: '/mês',
    note: 'Estes números são apenas exemplos. O valor real depende do pacote que os seus indicados escolherem.',
  },
  who: {
    eyebrow: 'Para quem é',
    h2: 'Feito para quem se importa com a entregabilidade',
    sub: 'Se o seu público envia e-mails, você tem um público para a Giggal.ai.',
    cards: [
      {
        title: 'Profissionais de e-mail marketing',
        body: 'Recomende a ferramenta em que você já confia para limpar listas antes das campanhas.',
      },
      {
        title: 'Agências',
        body: 'Tenha uma receita recorrente com cada cliente que você cadastrar.',
      },
      {
        title: 'Criadores de cursos',
        body: 'Inclua a Giggal.ai no conteúdo do seu curso de cold email ou de geração de leads.',
      },
      {
        title: 'Comunidades de SaaS',
        body: 'Compartilhe com o seu público de profissionais de marketing, fundadores e especialistas em growth.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Perguntas frequentes',
    items: [
      {
        q: 'Quando e como eu recebo?',
        a: 'Os pagamentos saem todo mês via PayPal ou Wise (você escolhe), quando o seu saldo a receber chega a US$ 50. Não retemos nenhuma parte do saldo. Assim que um indicado paga, a comissão é sua.',
      },
      {
        q: 'Por quanto tempo dura a comissão?',
        a: 'Enquanto o seu indicado continuar pagando. Se ele for cliente por 3 anos, você ganha 20 % de cada pagamento durante 3 anos. É uma receita recorrente de verdade.',
      },
      {
        q: 'E se o meu indicado cancelar?',
        a: 'Você deixa de ganhar comissão sobre esse cliente no momento em que ele cancela. Se ele assinar de novo mais tarde com a mesma conta, a comissão volta.',
      },
      {
        q: 'Quanto tempo dura a janela de atribuição?',
        a: 'O rastreamento dura 3 meses a partir do momento em que a pessoa clica no seu link. Se ela se cadastrar nesse período, a indicação fica com você.',
      },
      {
        q: 'Posso divulgar no YouTube, em blogs e em anúncios pagos?',
        a: 'Sim para YouTube, blogs, newsletters, redes sociais e Reddit. Anúncios pagos nas palavras-chave da nossa marca (por exemplo, "Giggal.ai") não são permitidos. Todo o resto está liberado.',
      },
      {
        q: 'Preciso ser cliente para participar?',
        a: 'Não, mas recomendamos muito que você teste o produto antes (você recebe 1.000 créditos grátis). Assim você recomenda com base na sua própria experiência.',
      },
      {
        q: 'Existe um valor mínimo para receber?',
        a: 'Sim, US$ 50. A comissão ainda não paga se acumula de um mês para o outro até chegar a esse valor. Depois disso, ela é paga automaticamente.',
      },
    ],
    more: 'Ainda tem dúvidas?',
    talk: 'Fale conosco',
  },
  final: {
    h2: 'Pronto para transformar indicações em renda recorrente?',
    text: 'Cadastre-se em 30 segundos e comece a ganhar 20 % de comissão em cada pagamento dos seus indicados.',
    checks: ['Participação grátis', 'Sem aprovação prévia', 'Comissões vitalícias'],
  },
}
