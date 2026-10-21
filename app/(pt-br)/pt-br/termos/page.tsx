import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Termos de serviço do verificador de e-mail',
  description: 'Termos de uso da Giggal.ai: sua conta, compra de créditos e assinaturas, consumo dos créditos e regras do serviço. A versão em inglês prevalece.',
  alternates: { canonical: '/pt-br/termos', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pt_BR', title: 'Termos de serviço', url: 'https://giggal.ai/pt-br/termos', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Brazilian Portuguese translation of app/(en)/terms-of-service/page.tsx,
// clause by clause (English "Last Updated: October 22, 2026"). The English text
// is binding; the notice at the top of LegalPageL10n says so. Numbers as in
// English, Brazilian format (1.000.000).

const sections: LegalSection[] = [
  { heading: '1. Aceitação dos termos', paragraphs: [
    'Este serviço é operado pela TargetPulse Ltd ("nós"), empresa registrada na Inglaterra e no País de Gales sob o número 17079825, com sede social em Office 17366, 182-184 High Street North, East Ham, London E6 2JA. A TargetPulse Ltd é o controlador dos dados pessoais tratados por meio do Giggal.ai. Contato: info@giggal.ai. Denúncias de abuso: abuse@giggal.ai.',
    'Ao acessar e usar os serviços da Giggal.ai, você aceita os termos e as disposições deste acordo e concorda em ficar vinculado a eles. Se você não concordar em cumprir o que foi exposto acima, não use este serviço.',
    'Estes Termos de serviço regem o seu uso do serviço Giggal.ai Email Verifier, operado pela TargetPulse Ltd sob o nome comercial Giggal.ai.',
  ]},
  { heading: '2. Descrição do serviço', paragraphs: [
    'O Giggal.ai Email Verifier é uma ferramenta baseada na nuvem que ajuda equipes a limpar e validar listas de e-mail. Os usuários enviam arquivos CSV ou e-mails individuais, e nós verificamos a entregabilidade, os registros do domínio e se cada caixa de correio existe, para reduzir os endereços inválidos e melhorar a qualidade das listas. O produto é vendido como um sistema de créditos com pagamento pelo uso, de modo que os clientes pagam apenas pelos e-mails que realmente validam.',
    'O Serviço é prestado a você sujeito a estes Termos de serviço e a quaisquer termos e condições adicionais que possam se aplicar.',
  ]},
  { heading: '2.1 Serviço de verificação de e-mail', level: 3, paragraphs: ['Nosso serviço principal é a verificação e validação de e-mails, que inclui:'], list: [
    'Detecção de gateways: identificação de gateways de e-mail seguros (SEG) e de filtros defensivos de perímetro',
    'Validação de domínio: verificação de que o domínio do e-mail existe e tem registros MX válidos',
    'Verificação da caixa de correio: verificação de que o endereço de e-mail específico existe e pode receber e-mails',
    'Detecção de e-mails descartáveis: identificação de endereços de e-mail temporários ou descartáveis',
    'Detecção de e-mails de função: detecção de endereços de e-mail genéricos (por exemplo, info@, support@)',
    'Detecção catch-all: identificação de domínios que aceitam todos os endereços de e-mail',
    'Verificação em tempo real: verifica se a caixa de correio do destinatário existe',
    'Verificação em massa: processamento simultâneo de milhares de endereços de e-mail',
  ]},
  { heading: '2.2 Sistema de créditos', level: 3, paragraphs: ['Nosso serviço funciona com um modelo baseado em créditos, no qual:'], list: [
    '1 crédito = 1 verificação de e-mail: cada verificação de endereço de e-mail consome exatamente 1 crédito do saldo da sua conta',
    'Pagamento pelo uso: compre créditos a qualquer momento, em pacotes de 3.000 a 1.000.000 de créditos',
    'Assinaturas recorrentes: assine pacotes mensais recorrentes de créditos com 10 % de desconto sobre o preço normal',
    'Sem validade: os créditos nunca expiram e permanecem disponíveis na sua conta até serem usados',
    'Teste grátis: as contas novas recebem 1.000 créditos gratuitos para testar o serviço',
  ]},
  { heading: '2.3 Recursos do serviço', level: 3, paragraphs: ['Nosso serviço de verificação de e-mail inclui:'], list: [
    'Acesso à API em tempo real para verificação instantânea',
    'Recursos de envio e processamento em massa',
    'Relatórios e análises de verificação detalhados',
    'Exportação dos resultados nos formatos CSV, Excel e JSON',
    'Detecção e remoção de e-mails duplicados',
    'Ferramentas de limpeza e segmentação de listas',
    'Suporte à integração por meio da API e de sistemas de terceiros compatíveis',
  ]},
  { heading: '3. Conta de usuário', paragraphs: ['Para usar determinados recursos do Serviço, você precisa registrar uma conta. Você se compromete a:'], list: [
    'Fornecer informações exatas, atuais e completas no cadastro',
    'Manter e atualizar prontamente as informações da sua conta',
    'Manter a segurança da sua senha e aceitar todos os riscos de acesso não autorizado',
    'Nos avisar imediatamente sobre qualquer uso não autorizado da sua conta',
    'Responder por todas as atividades realizadas na sua conta',
  ]},
  { heading: '4. Condições de pagamento', paragraphs: ['O processamento dos pagamentos é feito com segurança pelo nosso gateway de pagamento autorizado. Ao comprar créditos ou serviços, você se compromete a:'], list: [
    'Fornecer informações de compra e de conta atuais, completas e exatas',
    'Atualizar prontamente as informações da sua conta e de pagamento, quando necessário',
    'Pagar todos os valores pelos preços vigentes no momento das suas compras',
    'Pagar os impostos, o IVA ou outras taxas aplicáveis às suas compras',
  ]},
  { heading: '4.1 Modalidades de compra de créditos', level: 3, paragraphs: ['Você pode comprar créditos pelas seguintes modalidades:'], list: [
    'Compra única (pagamento pelo uso): compre pacotes de créditos conforme a necessidade, com adição imediata à conta',
    'Assinatura mensal recorrente: receba créditos automaticamente todo mês com 10 % de desconto',
  ]},
  { heading: '4.2 Preços e cobrança', level: 3, paragraphs: [
    'Todos os preços são exibidos em dólares americanos (USD) e incluem as taxas aplicáveis. Os créditos são adicionados à sua conta imediatamente após a confirmação do pagamento. Nenhuma compra de créditos é reembolsável, salvo quando a lei exigir ou quando a nossa Política de reembolso previr expressamente.',
  ]},
  { heading: '4.3 Créditos de teste grátis', level: 3, paragraphs: ['Os novos usuários recebem 1.000 créditos de teste grátis ao registrar a conta. Os créditos de teste:'], list: [
    'São fornecidos sem custo e não exigem dados de pagamento',
    'Funcionam da mesma forma que os créditos pagos na verificação de e-mails',
    'Não são reembolsáveis, por serem gratuitos',
    'Podem ser usados para verificar até 1.000 endereços de e-mail',
    'Ajudam você a avaliar a qualidade do nosso serviço antes de comprar',
  ]},
  { heading: '5. Serviços de assinatura recorrente', paragraphs: ['As assinaturas mensais recorrentes de créditos são cobradas automaticamente todo mês. A cobrança é feita antecipadamente, de forma mensal e recorrente, e os créditos são adicionados à sua conta após a confirmação do pagamento. Os principais termos incluem:'], list: [
    'As assinaturas se renovam automaticamente ao fim de cada ciclo de cobrança, salvo cancelamento',
    'Você pode cancelar a sua assinatura a qualquer momento antes da próxima data de cobrança',
    'O cancelamento produz efeito ao fim do período de cobrança em curso',
    'Os créditos já adicionados à sua conta continuam disponíveis após o cancelamento',
    'Os assinantes recorrentes recebem 10 % de desconto em relação aos preços do pagamento pelo uso',
  ]},
  { heading: '6. Uso e gestão dos créditos' },
  { heading: '6.1 Consumo de créditos', level: 3, paragraphs: ['Os créditos são consumidos da seguinte forma:'], list: [
    'Cada verificação de e-mail concluída com sucesso consome exatamente 1 crédito',
    'Os créditos são descontados apenas por verificações concluídas',
    'Verificações que falham por erros do sistema não consomem créditos',
    'E-mails duplicados no mesmo lote de verificação são processados apenas uma vez',
  ]},
  { heading: '6.2 Validade e transferência de créditos', level: 3, paragraphs: ['Regras importantes sobre os créditos:'], list: [
    'Sem validade: os créditos nunca expiram e permanecem na sua conta por tempo indeterminado',
    'Não transferíveis: os créditos não podem ser transferidos entre contas',
    'Não reembolsáveis: depois de comprados, os créditos não são reembolsáveis (veja as exceções na Política de reembolso)',
    'Vinculados à conta: os créditos estão vinculados à sua conta e não podem ser compartilhados',
  ]},
  { id: 'cancellation-policy', heading: '7. Cancelamento e reembolsos', paragraphs: ['Você pode cancelar a sua assinatura recorrente a qualquer momento nas configurações da conta ou entrando em contato com a nossa equipe de suporte pelo e-mail info@giggal.ai. Após o cancelamento:'], list: [
    'A sua assinatura não será renovada no próximo ciclo de cobrança',
    'Você manterá todos os créditos da sua conta',
    'Você poderá continuar usando os seus créditos existentes sem restrições',
    'Você ainda poderá comprar pacotes de créditos pelo uso',
  ], after: ['Os reembolsos por atividade incomum ou circunstâncias excepcionais são tratados de acordo com a nossa Política de reembolso. Se você tiver problemas ou suspeitar de atividade fraudulenta, entre em contato imediatamente com a nossa equipe de suporte para análise.']},
  { heading: '8. Política de uso aceitável', paragraphs: ['Você se compromete a usar o Serviço apenas para fins lícitos e em conformidade com todas as leis e regulamentos aplicáveis. Você se compromete a não usar o Serviço:'], list: [
    'Para verificar endereços de e-mail obtidos sem o devido consentimento ou autorização',
    'Para enviar spam ou mensagens de e-mail não solicitadas após a verificação',
    'Para violar leis ou regulamentos aplicáveis, incluindo a CAN-SPAM Act, o GDPR, a LGPD e a CASL',
    'Para infringir ou violar os direitos de terceiros',
    'Para distribuir malware ou outro código nocivo',
    'Para se passar por qualquer pessoa ou entidade',
    'Para praticar qualquer atividade fraudulenta ou abuso do nosso serviço',
    'Para revender ou redistribuir os nossos serviços de verificação sem autorização',
    'Para tentar fazer engenharia reversa ou comprometer os nossos sistemas de verificação',
    'Para compartilhar as credenciais da sua conta ou os seus créditos com usuários não autorizados',
  ]},
  { heading: '9. Precisão e limitações do serviço', paragraphs: ['Embora busquemos a máxima precisão na verificação de e-mails, você reconhece e concorda que:'], list: [
    'A verificação de e-mail não pode garantir 100 % de precisão devido a limitações técnicas',
    'Alguns servidores de e-mail podem dar respostas falso-positivas ou falso-negativas',
    'Os resultados da verificação se baseiam em verificações em tempo real e podem mudar com o tempo',
    'Fornecemos os resultados da verificação "no estado em que se encontram" e não damos nenhuma garantia de entregabilidade',
    'Você é responsável pelo uso lícito dos dados verificados e por quaisquer comunicações posteriores',
  ]},
  { heading: '10. Uso lícito e conformidade nas mensagens', paragraphs: ['Se você usar endereços de e-mail verificados para qualquer mensagem de prospecção, transacional ou de suporte, você é o único responsável por garantir a conformidade com todas as leis e regulamentos aplicáveis, incluindo, entre outros:'], list: [
    'CAN-SPAM Act (Estados Unidos)', 'GDPR (União Europeia)', 'LGPD (Brasil)', 'CASL (Canadá)', 'Outras leis antispam e de proteção de dados aplicáveis',
  ], after: ['Você deve obter todos os consentimentos exigidos e incluir os mecanismos de descadastro ou de preferências exigidos por lei, quando aplicável. A Giggal.ai não é responsável pelo uso que você faz dos endereços de e-mail verificados.']},
  { heading: '11. Propriedade intelectual', paragraphs: ['O Serviço e seus conteúdos, recursos e funcionalidades originais pertencem à Giggal.ai e são protegidos por leis internacionais de direitos autorais, marcas, patentes, segredos comerciais e outras leis de propriedade intelectual. Você não pode copiar, modificar, distribuir, vender ou alugar nenhuma parte dos nossos serviços sem autorização prévia por escrito.']},
  { heading: '12. Dados e privacidade', paragraphs: [
    'O seu uso do Serviço também é regido pela nossa Política de privacidade. Coletamos, armazenamos e tratamos os seus dados conforme descrito na Política de privacidade. Você mantém todos os direitos sobre os dados dos seus clientes e as suas listas de e-mail, e não os usaremos, exceto quando necessário para prestar o Serviço ou quando exigido por lei.',
    'Os endereços de e-mail enviados para verificação são processados com segurança e não são armazenados de forma permanente. Não vendemos, não compartilhamos e não usamos as suas listas de e-mail para nenhuma finalidade além da prestação dos serviços de verificação.',
  ]},
  { heading: '13. Modificações e disponibilidade do serviço', paragraphs: [
    'Reservamo-nos o direito de modificar ou descontinuar o Serviço (ou qualquer parte dele), temporária ou permanentemente, com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou descontinuação do Serviço.',
    'Buscamos manter uma alta disponibilidade do serviço, mas não garantimos acesso ininterrupto. As manutenções programadas serão anunciadas com antecedência quando possível.',
  ]},
  { heading: '14. Limitação de responsabilidade', paragraphs: ['Na máxima medida permitida pela lei, em nenhuma hipótese a Giggal.ai, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliadas serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, de dados, de uso, de goodwill ou outras perdas intangíveis, decorrentes de:'], list: [
    'O seu acesso ao Serviço ou uso dele, ou a impossibilidade de acessar ou usar o Serviço',
    'Qualquer conduta ou conteúdo de terceiros no Serviço',
    'Qualquer conteúdo obtido do Serviço',
    'Acesso, uso ou alteração não autorizados das suas transmissões ou do seu conteúdo',
    'Resultados de verificação de e-mail inexatos',
    'Falhas na entrega de e-mails ou bounces após a verificação',
    'Créditos consumidos por erro ou uso indevido do usuário',
  ]},
  { heading: '15. Exclusão de garantias', paragraphs: [
    'O Serviço é fornecido "no estado em que se encontra" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. A Giggal.ai se isenta de todas as garantias, incluindo, entre outras, as garantias implícitas de comerciabilidade, adequação a uma finalidade específica e não violação.',
    'Não garantimos que o Serviço será ininterrupto, pontual, seguro ou livre de erros, nem que os resultados da verificação de e-mail serão 100 % precisos.',
  ]},
  { heading: '16. Indenização', paragraphs: ['Você concorda em defender, indenizar e isentar de responsabilidade a Giggal.ai e seus licenciados e licenciantes contra quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos ou dívidas, e despesas decorrentes do seu uso do Serviço ou da violação destes Termos.']},
  { heading: '17. Rescisão', paragraphs: ['Podemos encerrar ou suspender a sua conta e o seu acesso ao Serviço imediatamente, sem aviso prévio nem responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos. Em caso de rescisão:'], list: [
    'O seu direito de usar o Serviço cessará imediatamente',
    'Os créditos não usados serão perdidos sem reembolso',
    'As assinaturas recorrentes serão canceladas',
    'O acesso à sua conta e aos seus dados poderá ser revogado de forma permanente',
  ]},
  { heading: '18. Lei aplicável', paragraphs: ['Estes Termos serão regidos e interpretados de acordo com as leis da jurisdição em que a Giggal.ai opera, sem considerar as suas normas sobre conflito de leis.']},
  { heading: '19. Resolução de disputas', paragraphs: ['Quaisquer disputas decorrentes destes Termos ou do Serviço, ou relacionadas a eles, serão primeiro objeto de tentativa de solução por meio de negociações de boa-fé. Se as negociações falharem, as disputas serão resolvidas por arbitragem vinculante, de acordo com as regras da associação de arbitragem apropriada.']},
  { heading: '20. Mudanças nos termos', paragraphs: ['Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento, a nosso exclusivo critério. Se uma revisão for substancial, avisaremos com pelo menos 30 dias de antecedência antes que os novos termos entrem em vigor. O que constitui uma mudança substancial será determinado a nosso exclusivo critério.']},
  { heading: '21. Divisibilidade', paragraphs: ['Se qualquer disposição destes Termos for considerada inexequível ou inválida, essa disposição será alterada e interpretada para atingir os seus objetivos na máxima medida possível segundo a lei aplicável, e as demais disposições continuarão em pleno vigor e efeito.']},
  { heading: '22. Informações de contato', paragraphs: [
    'Se você tiver dúvidas sobre estes Termos de serviço, entre em contato conosco: e-mail info@giggal.ai, site https://giggal.ai.',
    'Ao usar os serviços da Giggal.ai, você declara que leu e compreendeu estes Termos de serviço e concorda em ficar vinculado a eles.',
  ]},
]

export default function TermosPage() {
  return (
    <LegalPageL10n
      locale="pt-br"
      path="/pt-br/termos"
      title="Termos de"
      accent="serviço"
      updated="22 de outubro de 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
