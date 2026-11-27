// pt-br words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Sem créditos grátis',
    creditsExpire: 'Os créditos mensais não usados acumulam, até 2 vezes a cota mensal',
    catchAllCreditCost: '0,25 crédito por resultado conclusivo; o resultado desconhecido é grátis',
    claimedAccuracy: 'Declara 99,5% na validação',
    pricingBasisNote:
      'O LeadMagic é vendido como assinatura mensal com um único saldo de créditos: Essential US$ 99 (5.000 créditos), Growth US$ 249 (20.000), Professional US$ 499 (50.000), Ultimate US$ 849 (100.000). Uma validação conclusiva custa 0,25 crédito, e um resultado desconhecido é grátis. Os valores acima são o menor plano mensal que cobre essa quantidade de validações. No plano anual, dois meses saem grátis. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
    betterFitFor: [
      'Muitos dados de enriquecimento além da verificação: números de celular, dados de empresas, mudanças de emprego e dados de anúncios',
      'Dados próprios publicados de testes com catch-all, algo que a maioria dos fornecedores não publica',
      'Equipes que querem busca, enriquecimento e verificação em uma única assinatura',
      'Uma API feita para desenvolvedores, com preço em créditos por endpoint',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: 'Teste de 7 dias com 100 créditos; o cartão é verificado, mas não cobrado',
    creditsExpire: 'Os créditos acumulam sem limite enquanto a assinatura estiver ativa e expiram no fim do período de cobrança se você cancelar',
    catchAllCreditCost: '0,2 crédito por verificação, como qualquer outra verificação',
    claimedAccuracy: 'Declara 98,9% de precisão com 86,4% de cobertura',
    pricingBasisNote:
      'O Anymail Finder é vendido como assinatura mensal, com faixas de 400 créditos por US$ 29 por mês até 100.000 créditos por US$ 799. Verificar um e-mail que você encontrou em outro lugar custa 0,2 crédito por verificação. Os valores acima são os menores planos mensais que cobrem essa quantidade de verificações. No plano anual, você economiza 33%. Um milhão de verificações por mês fica acima da maior faixa mensal. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
    betterFitFor: [
      'Encontrar endereços de e-mail a partir de um nome e um domínio, o que a Giggal.ai não faz',
      'Uma garantia de entrega declarada de 97% ou mais',
      'Créditos que acumulam sem limite enquanto você mantém a assinatura',
      'Uma marca com muitos anos de mercado e muito conteúdo publicado',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '10 créditos no cadastro, sem cartão',
    creditsExpire: 'Os créditos não usados acumulam, até o dobro da cota mensal',
    catchAllCreditCost: '1 crédito, como qualquer outra verificação',
    claimedAccuracy: 'Garante uma taxa de bounce abaixo de 5%, com devolução de créditos se a taxa passar disso',
    pricingBasisNote:
      'O Findymail vende planos baseados em uso de US$ 99 a US$ 999 por mês, que não informam uma quantidade de créditos. Há também um plano com créditos: o Starter, por US$ 99 por mês, com 5.000 créditos de busca e 5.000 créditos de verificação. Acima disso, tudo é Enterprise, com preço sob consulta. Por isso não há valor publicado para 10.000, 100.000 ou um milhão de verificações por mês. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
    betterFitFor: [
      'Encontrar os endereços de e-mail, algo que a Giggal.ai não faz de forma alguma',
      'Uma garantia de taxa de bounce com devolução de créditos',
      'Uma extensão para Chrome que encontra e verifica e-mails no LinkedIn e no Sales Navigator',
      'SOC 2 Tipo 2 e hospedagem na UE',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Começo grátis, quantidade não publicada',
    creditsExpire: 'Não publicado',
    catchAllCreditCost: 'Créditos de catch-all separados: 5.000 por mês no plano de US$ 99',
    pricingBasisNote:
      'O Listmint é vendido como assinatura mensal com dois saldos de créditos. O Starter custa US$ 99 por mês por 20.000 créditos padrão e 5.000 créditos de catch-all. O Agency custa US$ 187 por mês por 50.000 créditos padrão e 10.000 créditos de catch-all. Volumes maiores são Enterprise, com preço sob consulta. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
    betterFitFor: [
      'Uma verificação de catch-all que, segundo o Listmint, é feita manualmente',
      'Verificação de catch-all em tempo real',
      'Uma grande cota mensal de créditos padrão no plano de entrada',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: 'Teste de 14 dias para até 1.000 endereços',
    creditsExpire: 'A cota do plano é mensal; o teste termina após 14 dias',
    catchAllCreditCost: '1 contato da cota do plano',
    claimedAccuracy: 'Declara 99%',
    pricingBasisNote:
      'O Allegrow é vendido como assinatura mensal. O Starter custa US$ 99 por mês por 5.000 contatos, e os créditos extras custam US$ 8 por 1.000. Assim, 10.000 por mês saem por US$ 139. Esse é um cálculo nosso com base nos preços publicados, não um plano que o Allegrow oferece. As linhas de 100.000 e 1.000.000 são o Scale Plus Unlimited, a US$ 1.340 por mês com cobrança anual, que dá verificação ilimitada. Os valores da Giggal.ai são preços únicos de pagamento por uso.',
    betterFitFor: [
      'Um plano de verificação ilimitada, que a Giggal.ai não tem',
      'Pontuação da reputação do remetente e monitoramento do posicionamento na caixa de entrada, junto com a verificação',
      'Integrações nativas com HubSpot, Outreach e Salesloft, com SSO e relatórios SOC 2',
      'Um estudo publicado sobre falsos positivos em endereços fictícios',
    ],
    estimateNote: 'Cálculo nosso com base nos preços publicados do Allegrow, não um plano que o Allegrow oferece.',
    notes: { unlimited: 'ilimitado' },
  },
  no2bounce: {
    freeTier: '100 créditos sem cartão, que nunca expiram',
    creditsExpire: 'Os créditos nunca expiram, sem limite de uso mensal',
    catchAllCreditCost: '1 crédito por e-mail, como na verificação padrão',
    claimedAccuracy: 'Declara 99,6%',
    betterFitFor: [
      'Muitas faixas de preço, de 10.000 créditos até 50 milhões',
      'Créditos que nunca expiram, como na Giggal.ai',
      'Planos mensais e anuais, 15% e 20% mais baratos que o pagamento por uso, respectivamente',
      'Um buscador de e-mails e uma busca por domínio com os mesmos créditos',
    ],
  },
  quickemailverification: {
    freeTier: '100 créditos por dia, grátis',
    creditsExpire: 'Os créditos permanentes de pagamento por uso nunca expiram',
    catchAllCreditCost: 'Devolvido com o status catch-all, sem confirmação',
    claimedAccuracy: 'Declara 99%',
    betterFitFor: [
      '100 créditos grátis todo dia, mais uma cota grátis mensal',
      'Créditos permanentes de pagamento por uso que nunca expiram',
      'Um preço de entrada baixo, a partir de US$ 4 por 500 créditos',
      'Uma API em tempo real já estabelecida',
    ],
  },
  myemailverifier: {
    freeTier: '100 créditos por dia, grátis',
    creditsExpire: 'Os créditos nunca expiram',
    catchAllCreditCost: 'Devolvido com o status catch-all, sem confirmação',
    betterFitFor: [
      'Um preço base muito baixo, de US$ 0,0025 por verificação',
      '100 créditos grátis todo dia, que se renovam em vez de acabar depois de um teste',
      'Créditos que nunca expiram, com promoções de créditos bônus em grandes volumes',
      'Um bom histórico de avaliações públicas no G2, no Capterra e no Trustpilot',
    ],
  },
  scrubby: {
    freeTier: '200 créditos',
    creditsExpire: 'Os créditos de pagamento por uso nunca expiram; os créditos do plano acumulam',
    catchAllCreditCost: '1 crédito na Quick Verification; a Deep Verification custa 3 créditos e leva até 72 horas',
    claimedAccuracy: 'Não publicado na página de preços',
    betterFitFor: [
      'Uma opção de Deep Verification que envia e-mails reais para endereços difíceis de verificar',
      'Uma cota grátis de 200 créditos, sem cartão',
      'Planos de pagamento por uso e planos mensais, com créditos do plano que acumulam',
      'Uma única tarefa bem definida, em vez de uma suíte ampla',
    ],
    notes: { 'Quote only': 'Só sob consulta' },
  },
  mailfloss: {
    freeTier: '500 verificações por mês, mais um teste de 7 dias nas assinaturas',
    creditsExpire: 'Os créditos pré-pagos nunca expiram; os créditos da assinatura zeram todo mês',
    catchAllCreditCost: 'Marcado, não resolvido',
    betterFitFor: [
      'Limpeza diária automática, ligada direto à sua plataforma de e-mail',
      '41 integrações nativas, entre elas Mailchimp, Klaviyo e HubSpot',
      'Uma assinatura que funciona sozinha depois de configurada, sem uploads manuais',
      'Opção de assinatura ou de créditos pré-pagos',
    ],
  },
  bounceless: {
    freeTier: '1.000 créditos por mês com um e-mail corporativo, sem cartão',
    creditsExpire: 'Os créditos nunca expiram, sejam de pacotes ou de assinaturas',
    catchAllCreditCost: 'Indícios de catch-all incluídos na verificação de 1 crédito',
    betterFitFor: [
      'Uma cota grátis de 1.000 créditos todo mês com um e-mail corporativo',
      'Pacotes avulsos e assinaturas mensais, com créditos que nunca expiram',
      'Ferramentas extras na mesma conta: saúde do remetente, posicionamento na caixa de entrada e verificação de formulários de cadastro',
      'Um preço baixo em volumes muito grandes, US$ 579 por um milhão',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: os principais dados`,
  factRows: { price10k: '10.000 verificações', free: 'Créditos grátis', expiry: 'Validade dos créditos', catchAll: 'Catch-all' },
  perMonth: ' por mês',
  notPublished: 'Não publicado',
}
