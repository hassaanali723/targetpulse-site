import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de reembolso de créditos',
  description: 'Quando a Giggal.ai reembolsa créditos: créditos de teste, compras únicas, assinaturas, casos excepcionais e prazos. Versão de cortesia, prevalece o inglês.',
  alternates: { canonical: '/pt-br/reembolsos', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pt_BR', title: 'Política de reembolso', url: 'https://giggal.ai/pt-br/reembolsos', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Resumo', paragraphs: [
    'Esta política descreve as circunstâncias em que reembolsos podem ser concedidos no nosso serviço baseado em créditos.',
    'Prestamos exclusivamente serviços digitais de verificação de e-mail e não vendemos nem enviamos bens físicos.',
  ]},
  { heading: '2. Como funciona o sistema de créditos', list: [
    '1 crédito = 1 verificação: cada verificação consome 1 crédito da sua conta', 'Pagamento pelo uso: você compra créditos em bloco quando quiser',
    'Créditos recorrentes: pacotes mensais em assinatura com desconto', 'Sem validade: os créditos permanecem na conta até serem usados',
  ]},
  { heading: '3. Créditos de teste grátis', paragraphs: ['Os usuários novos recebem 1.000 créditos de teste. Observe que:'], list: [
    'São gratuitos e não exigem pagamento', 'Não são reembolsáveis por serem um presente', 'Seguem as mesmas regras dos créditos pagos', 'Permitem verificar 1.000 endereços',
  ]},
  { heading: '4. Reembolso de créditos comprados' },
  { heading: '4.1 Créditos pelo uso (compra única)', level: 3, paragraphs: ['Os créditos comprados pelo uso normalmente não são reembolsáveis depois que a compra é concluída, porque:'], list: [
    'São adicionados à conta na hora e ficam disponíveis imediatamente', 'Não expiram e mantêm o valor', 'Você pode usá-los a qualquer momento',
  ]},
  { heading: '4.2 Assinaturas de créditos recorrentes', level: 3, list: [
    'Os créditos são cobrados e adicionados todo mês', 'Você pode cancelar a qualquer momento antes do próximo ciclo', 'Os créditos já adicionados não são reembolsáveis',
    'O cancelamento vale a partir do fim do período em curso', 'Os créditos não usados de meses anteriores permanecem na conta após o cancelamento',
  ]},
  { heading: '5. Circunstâncias excepcionais e suporte', paragraphs: ['A regra geral é que os créditos não são reembolsáveis, mas sabemos que situações incomuns podem acontecer. Em caso de:'], list: [
    'Erros técnicos que causem cobranças de créditos incorretas', 'Falhas do serviço que impeçam a verificação', 'Cobranças duplicadas ou erros de faturamento',
    'Atividade anômala na conta ou suspeita de fraude', 'Outras circunstâncias excepcionais',
  ], after: ['Fale imediatamente com o suporte em info@giggal.ai. Analisaremos o caso e poderemos conceder reembolsos ou correções de créditos, avaliando caso a caso a nosso critério.']},
  { heading: '6. Problemas de qualidade do serviço', paragraphs: ['Se problemas técnicos ou interrupções impedirem a verificação:'], list: [
    'Os créditos não são descontados por verificações que falham por erros do nosso sistema', 'Comunique ao suporte imediatamente qualquer problema de verificação',
    'Podemos adicionar créditos compensatórios pelas interrupções', 'Interrupções prolongadas podem dar direito a reembolsos parciais a nosso critério',
  ]},
  { heading: '7. Encerramento da conta e infrações', paragraphs: ['Se a conta for encerrada por descumprimento dos Termos de serviço ou da política de uso aceitável:'], list: [
    'Nenhum crédito não usado é reembolsado', 'O acesso à conta e aos créditos restantes é revogado de forma permanente', 'As assinaturas são canceladas imediatamente',
  ]},
  { heading: '8. Como solicitar um reembolso ou relatar um problema', paragraphs: ['Escreva para o suporte: e-mail info@giggal.ai, assunto "Refund Request / Issue Report". Inclua:'], list: [
    'O e-mail da sua conta', 'O ID da transação ou do pedido', 'Uma descrição detalhada do problema', 'Data e hora do incidente (se aplicável)',
    'Capturas de tela ou provas (se aplicável)', 'O número de créditos afetados',
  ]},
  { heading: '9. Prazos de processamento do reembolso', paragraphs: ['Se a solicitação for aprovada:'], list: [
    'Analisamos o caso em 2 a 3 dias úteis', 'Você recebe a decisão por e-mail', 'Os reembolsos aprovados são processados em 5 a 10 dias úteis',
    'O reembolso é emitido para o método de pagamento original pelo nosso processador', 'Podem passar mais 5 a 7 dias úteis até aparecer na sua conta',
  ]},
  { heading: '10. Contestações de cobrança (chargebacks)', paragraphs: ['Se você abrir uma contestação com o seu banco ou provedor de pagamento sem falar conosco antes:'], list: [
    'Reservamo-nos o direito de encerrar a sua conta de forma permanente', 'Você não poderá voltar a usar nossos serviços', 'Todos os créditos restantes são perdidos',
    'Forneceremos ao processador de pagamentos as provas em defesa da cobrança',
  ], after: ['Pedimos que fale primeiro com o suporte: resolvemos os problemas de forma justa e rápida.']},
  { heading: '11. Transferência de créditos e contas compartilhadas', paragraphs: ['Os créditos não são transferíveis entre contas. Não são reembolsados:'], list: [
    'Créditos comprados na conta errada', 'Solicitações de transferência para outra conta', 'Infrações por compartilhamento de conta',
  ]},
  { heading: '12. Mudanças nesta política', paragraphs: ['Reservamo-nos o direito de modificar esta política a qualquer momento. As mudanças valem a partir da publicação no site. Ao continuar usando os serviços você aceita a nova versão.']},
  { heading: '13. Contato', paragraphs: [
    'Para dúvidas ou suporte: e-mail info@giggal.ai, site https://giggal.ai. Normalmente respondemos em 24 a 48 horas.',
    'Esta política faz parte dos Termos de serviço. Ao usar os serviços da Giggal.ai você declara tê-la lido e compreendido.',
  ]},
]

export default function ReembolsosPage() {
  return (
    <LegalPageL10n
      locale="pt-br"
      path="/pt-br/reembolsos"
      title="Política de"
      accent="reembolso"
      updated="4 de fevereiro de 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
