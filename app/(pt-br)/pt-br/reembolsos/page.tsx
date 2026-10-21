import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de reembolso de créditos e assinaturas',
  description: 'Como funcionam os reembolsos da Giggal.ai: créditos pelo uso e assinaturas, créditos de teste, qualidade do serviço, chargebacks e como pedir reembolso.',
  alternates: { canonical: '/pt-br/reembolsos', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pt_BR', title: 'Política de reembolso', url: 'https://giggal.ai/pt-br/reembolsos', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Brazilian Portuguese translation of app/(en)/refund-policy/page.tsx, clause
// by clause (English "Last Updated: October 22, 2026"). The English text is
// binding; the notice at the top of LegalPageL10n says so. Numbers as in
// English, Brazilian format (1.000.000).

const sections: LegalSection[] = [
  { heading: '1. Visão geral', paragraphs: [
    'Na Giggal.ai, buscamos oferecer serviços excepcionais de verificação de e-mail. Esta Política de reembolso descreve as circunstâncias em que reembolsos podem ser concedidos no nosso serviço baseado em créditos.',
    'Prestamos apenas serviços digitais de verificação de e-mail e não vendemos nem enviamos bens físicos.',
  ]},
  { heading: '2. Como funciona o nosso sistema de créditos', paragraphs: ['A Giggal.ai funciona com um sistema baseado em créditos para a verificação de e-mail:'], list: [
    '1 crédito = 1 validação de e-mail: cada verificação de endereço de e-mail consome 1 crédito da sua conta',
    'Pagamento pelo uso: compre créditos em volume a qualquer momento (pacotes de 3.000 a 1.000.000 de créditos)',
    'Créditos recorrentes: assine pacotes mensais recorrentes de créditos com 10 % de desconto',
    'Sem validade: os créditos nunca expiram e permanecem na sua conta até serem usados',
  ]},
  { heading: '3. Créditos de teste grátis', paragraphs: ['Os novos usuários recebem 1.000 créditos de teste grátis para testar o nosso serviço de verificação de e-mail. Observe que:'], list: [
    'Os créditos de teste são fornecidos gratuitamente, sem necessidade de pagamento',
    'Os créditos de teste não são reembolsáveis, por serem gratuitos',
    'Os créditos de teste seguem as mesmas regras de validação dos créditos pagos',
    'Os créditos de teste podem ser usados para verificar 1.000 endereços de e-mail',
  ]},
  { heading: '4. Política de reembolso na compra de créditos' },
  { heading: '4.1 Créditos pelo uso (compra única)', level: 3, paragraphs: ['Os créditos comprados em pacotes pelo uso geralmente não são reembolsáveis depois que a compra é concluída, porque:'], list: [
    'Os créditos são adicionados à sua conta na hora e ficam disponíveis para uso imediato',
    'Os créditos não expiram e mantêm o seu valor por tempo indeterminado',
    'Você tem a flexibilidade de usá-los a qualquer momento',
  ]},
  { heading: '4.2 Assinaturas de créditos recorrentes', level: 3, paragraphs: ['Para as assinaturas mensais recorrentes de créditos:'], list: [
    'Os créditos são cobrados e adicionados à sua conta todo mês',
    'Você pode cancelar a sua assinatura a qualquer momento antes do próximo ciclo de cobrança',
    'Os créditos já adicionados à sua conta não são reembolsáveis',
    'O cancelamento produz efeito ao fim do período de cobrança em curso',
    'Os créditos não usados de meses anteriores permanecem na sua conta após o cancelamento',
  ]},
  { heading: '5. Circunstâncias excepcionais e suporte', paragraphs: ['Embora a nossa regra padrão seja que os créditos não são reembolsáveis, entendemos que situações incomuns podem acontecer. Em casos de:'], list: [
    'Erros técnicos que resultem em desconto incorreto de créditos',
    'Falhas do serviço que impeçam a validação de e-mails',
    'Cobranças duplicadas ou erros de faturamento',
    'Atividade incomum na conta ou suspeita de fraude',
    'Quaisquer outras circunstâncias excepcionais',
  ], after: ['Entre em contato imediatamente com a nossa equipe de suporte pelo e-mail info@giggal.ai. Vamos analisar o seu caso com atenção e poderemos conceder reembolsos ou ajustes de créditos, caso a caso, a nosso critério.']},
  { heading: '6. Problemas de qualidade do serviço', paragraphs: ['Se você tiver problemas técnicos ou interrupções do serviço que impeçam a verificação de e-mails:'], list: [
    'Os créditos não serão descontados por validações que falharem por erros do nosso sistema',
    'Comunique imediatamente qualquer problema de validação à nossa equipe de suporte',
    'Podemos adicionar créditos compensatórios à sua conta por interrupções do serviço',
    'Interrupções prolongadas podem dar direito a reembolsos parciais, a nosso critério',
  ]},
  { heading: '7. Encerramento da conta e violações', paragraphs: ['Se a sua conta for encerrada por violação dos nossos Termos de serviço ou da nossa Política de uso aceitável:'], list: [
    'Nenhum reembolso será concedido por créditos não usados',
    'O acesso à sua conta e aos créditos restantes será revogado de forma permanente',
    'As assinaturas recorrentes serão canceladas imediatamente',
  ]},
  { heading: '8. Como solicitar um reembolso ou relatar problemas', paragraphs: [
    'Para solicitar um reembolso ou relatar atividade incomum, entre em contato com a nossa equipe de suporte: e-mail info@giggal.ai, assunto "Refund Request / Issue Report".',
    'Inclua as seguintes informações na sua solicitação:',
  ], list: [
    'O endereço de e-mail da sua conta',
    'O ID da transação ou o número do pedido',
    'Uma descrição detalhada do problema ou da atividade incomum',
    'A data e a hora do incidente (se aplicável)',
    'Capturas de tela ou provas que fundamentem a sua solicitação (se aplicável)',
    'O número de créditos afetados',
  ]},
  { heading: '9. Prazos de processamento do reembolso', paragraphs: ['Se a sua solicitação de reembolso for aprovada:'], list: [
    'Analisaremos o seu caso em 2 a 3 dias úteis',
    'Você receberá por e-mail uma resposta sobre a decisão',
    'Os reembolsos aprovados serão processados em 5 a 10 dias úteis',
    'Os reembolsos serão emitidos para o método de pagamento original por meio do nosso processador de pagamentos',
    'Pode levar mais 5 a 7 dias úteis para o reembolso aparecer na sua conta, dependendo do seu provedor de pagamento',
  ]},
  { heading: '10. Chargebacks', paragraphs: ['Se você abrir um chargeback ou uma contestação de pagamento com o seu banco ou provedor de pagamento sem antes entrar em contato conosco para resolver o problema:'], list: [
    'Reservamo-nos o direito de encerrar a sua conta de forma permanente',
    'Você será impedido de usar os nossos serviços no futuro',
    'Todos os créditos restantes serão perdidos',
    'Forneceremos ao processador de pagamentos as provas em defesa da cobrança',
  ], after: ['Recomendamos fortemente que você entre em contato primeiro com a nossa equipe de suporte. Temos o compromisso de resolver os problemas de forma justa e rápida.']},
  { heading: '11. Transferência de créditos e compartilhamento de contas', paragraphs: ['Os créditos não são transferíveis entre contas. Não serão concedidos reembolsos por:'], list: [
    'Créditos comprados na conta errada',
    'Solicitações de transferência de créditos para outra conta',
    'Violações relacionadas ao compartilhamento de contas',
  ]},
  { heading: '12. Mudanças nesta política', paragraphs: ['Reservamo-nos o direito de modificar esta Política de reembolso a qualquer momento. As mudanças entram em vigor imediatamente após a publicação no nosso site. O uso continuado dos nossos serviços após qualquer mudança constitui aceitação da nova política.']},
  { heading: '13. Informações de contato', paragraphs: [
    'Se você tiver dúvidas sobre esta Política de reembolso ou precisar de ajuda, entre em contato conosco: e-mail info@giggal.ai, site https://giggal.ai.',
    'A nossa equipe de suporte tem o compromisso de atender às suas preocupações e encontrar soluções justas. Normalmente respondemos a todas as solicitações em 24 a 48 horas.',
    'Esta Política de reembolso faz parte dos nossos Termos de serviço. Ao usar os serviços da Giggal.ai, você declara que leu e compreendeu esta política.',
  ]},
]

export default function ReembolsosPage() {
  return (
    <LegalPageL10n
      locale="pt-br"
      path="/pt-br/reembolsos"
      title="Política de"
      accent="reembolso"
      updated="22 de outubro de 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
