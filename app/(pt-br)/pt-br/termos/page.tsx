import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Termos de serviço da Giggal.ai',
  description: 'Termos e condições de uso do serviço de verificação de e-mail Giggal.ai. Tradução de cortesia; prevalece a versão em inglês.',
  alternates: { canonical: '/pt-br/termos', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pt_BR', title: 'Termos de serviço', url: 'https://giggal.ai/pt-br/termos', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Aceitação dos termos', paragraphs: [
    'Ao acessar e usar os serviços da Giggal.ai, você concorda em ficar vinculado aos termos e condições deste acordo. Se não for cumpri-los, não use o serviço.',
    'Estes Termos de serviço regem o uso do serviço Giggal.ai Email Verifier, operado por Hassaan Ali Mehmood sob o nome comercial Giggal.ai.',
  ]},
  { heading: '2. Descrição do serviço', paragraphs: [
    'O Giggal.ai Email Verifier é uma ferramenta na nuvem que ajuda equipes a limpar e validar listas de e-mail. Os usuários enviam arquivos CSV ou endereços individuais e nós conferimos entregabilidade, sintaxe e status da caixa para reduzir os endereços inválidos e melhorar a entrega.',
    'O Serviço é prestado sujeito a estes Termos e a quaisquer condições adicionais aplicáveis.',
  ]},
  { heading: '2.1 Serviço de verificação de e-mail', level: 3, paragraphs: ['Nosso serviço principal é a verificação e validação de e-mails, que inclui:'], list: [
    'Validação de sintaxe: verificação do formato e da estrutura do endereço',
    'Validação de domínio: verificação de que o domínio existe e tem registros MX válidos',
    'Verificação da caixa: verificação de que o endereço específico existe e pode receber e-mail',
    'Detecção de e-mails descartáveis: identificação de endereços temporários',
    'Detecção de contas de função: identificação de endereços genéricos (por exemplo, contato@, suporte@)',
    'Detecção catch-all: identificação de domínios que aceitam qualquer endereço',
    'Validação SMTP: verificação em tempo real pelo protocolo SMTP',
    'Verificação em massa: processamento de milhares de endereços de uma vez',
  ]},
  { heading: '2.2 Sistema de créditos', level: 3, paragraphs: ['O serviço funciona com créditos:'], list: [
    '1 crédito = 1 verificação: cada verificação consome exatamente 1 crédito do saldo',
    'Pagamento pelo uso: pacotes de créditos que você pode comprar a qualquer momento',
    'Assinaturas recorrentes: pacotes mensais com desconto em relação ao preço pelo uso',
    'Sem validade: os créditos continuam disponíveis até serem usados',
    'Teste grátis: as contas novas recebem 1.000 créditos de presente',
  ]},
  { heading: '2.3 Recursos do serviço', level: 3, list: [
    'Acesso à API em tempo real', 'Envio e processamento em massa', 'Relatórios e análises detalhados',
    'Exportação para CSV, Excel e JSON', 'Detecção e remoção de duplicados', 'Ferramentas de limpeza e segmentação de listas',
  ]},
  { heading: '3. Conta de usuário', paragraphs: ['Para usar alguns recursos você precisa registrar uma conta. Você se compromete a:'], list: [
    'Fornecer informações exatas, atuais e completas no cadastro',
    'Manter as informações da conta atualizadas',
    'Proteger a senha e assumir os riscos de um acesso não autorizado',
    'Avisar imediatamente sobre qualquer uso não autorizado da conta',
    'Responder por toda a atividade realizada com a sua conta',
  ]},
  { heading: '4. Condições de pagamento', paragraphs: ['Os pagamentos são processados com segurança pelo nosso gateway de pagamento autorizado. Ao comprar créditos ou serviços você concorda em:'], list: [
    'Fornecer informações de compra e de conta atuais, completas e exatas',
    'Atualizar prontamente os dados de conta e de pagamento',
    'Pagar todos os valores pelos preços vigentes no momento da compra',
    'Pagar os impostos e outros encargos aplicáveis',
  ]},
  { heading: '4.1 Modalidades de compra', level: 3, list: [
    'Compra única (pagamento pelo uso): pacotes de créditos adicionados à conta na hora',
    'Assinatura mensal: créditos recebidos automaticamente todo mês com desconto',
  ]},
  { heading: '4.2 Preços e cobrança', level: 3, paragraphs: [
    'Todos os preços são expressos em dólares americanos e incluem os encargos aplicáveis. Os créditos são adicionados à conta quando o pagamento é confirmado. As compras de créditos não são reembolsáveis, salvo o previsto em lei ou na Política de reembolso.',
  ]},
  { heading: '4.3 Créditos de teste grátis', level: 3, paragraphs: ['Os usuários novos recebem 1.000 créditos de teste ao se cadastrar. Os créditos de teste:'], list: [
    'São gratuitos e não exigem dados de pagamento', 'Funcionam como os créditos pagos', 'Não são reembolsáveis por serem um presente',
    'Permitem verificar até 1.000 endereços', 'Servem para avaliar a qualidade do serviço antes de comprar',
  ]},
  { heading: '5. Assinaturas recorrentes', paragraphs: ['As assinaturas mensais são cobradas automaticamente todo mês, de forma antecipada; os créditos são adicionados à conta quando o pagamento é concluído. Em particular:'], list: [
    'A assinatura se renova automaticamente ao fim de cada ciclo, salvo cancelamento',
    'Você pode cancelar a qualquer momento antes da data de renovação',
    'O cancelamento vale a partir do fim do período em curso',
    'Os créditos já adicionados continuam disponíveis após o cancelamento',
    'Os assinantes recebem desconto em relação ao preço pelo uso',
  ]},
  { heading: '6. Uso e gestão dos créditos' },
  { heading: '6.1 Consumo de créditos', level: 3, list: [
    'Cada verificação concluída consome exatamente 1 crédito', 'Os créditos são descontados só por verificações concluídas',
    'Verificações que falham por erros do sistema não consomem créditos', 'Endereços duplicados no mesmo envio são processados uma única vez',
  ]},
  { heading: '6.2 Validade e transferência de créditos', level: 3, list: [
    'Sem validade: os créditos permanecem na conta por tempo indeterminado', 'Não transferíveis entre contas',
    'Não reembolsáveis após a compra (salvo as exceções da Política de reembolso)', 'Vinculados à conta e não compartilháveis',
  ]},
  { id: 'cancellation-policy', heading: '7. Cancelamento e reembolsos', paragraphs: ['Você pode cancelar a assinatura a qualquer momento nas configurações da conta ou escrevendo para info@giggal.ai. Após o cancelamento:'], list: [
    'A assinatura não se renova no próximo ciclo', 'Você mantém todos os créditos da conta',
    'Você pode continuar usando os créditos sem limitações', 'Você pode continuar comprando pacotes pelo uso',
  ], after: ['Os reembolsos por atividade anômala ou circunstâncias excepcionais são tratados conforme a Política de reembolso. Diante de problemas ou suspeita de fraude, fale com o suporte imediatamente.']},
  { heading: '8. Uso aceitável', paragraphs: ['Você se compromete a usar o Serviço só para fins lícitos e conforme as leis aplicáveis. Em particular, você não usará o Serviço para:'], list: [
    'Verificar endereços obtidos sem consentimento ou autorização', 'Enviar spam ou mensagens não solicitadas após a verificação',
    'Violar leis ou regulamentos, incluindo CAN-SPAM, GDPR, LGPD e CASL', 'Violar direitos de terceiros', 'Distribuir malware ou código nocivo',
    'Se passar por pessoas ou entidades', 'Cometer fraude ou abusar do serviço', 'Revender ou redistribuir o serviço sem autorização',
    'Tentar descompilar ou comprometer nossos sistemas', 'Compartilhar credenciais ou créditos com usuários não autorizados',
  ]},
  { heading: '9. Precisão e limites do serviço', paragraphs: ['Buscamos a máxima precisão, mas você reconhece e aceita que:'], list: [
    'A verificação de e-mail não pode garantir 100 % de precisão por limites técnicos', 'Alguns servidores podem dar respostas falsamente positivas ou negativas',
    'Os resultados se baseiam em verificações em tempo real e podem mudar', 'Os resultados são oferecidos "no estado em que se encontram", sem garantia de entrega',
    'Você é responsável pelo uso lícito dos dados verificados e das comunicações posteriores',
  ]},
  { heading: '10. Uso lícito e conformidade nas comunicações', paragraphs: ['Se você usa os endereços verificados para outreach, mensagens transacionais ou de suporte, é o único responsável por cumprir as leis aplicáveis, entre elas:'], list: [
    'CAN-SPAM Act (Estados Unidos)', 'GDPR (União Europeia)', 'LGPD (Brasil)', 'CASL (Canadá)', 'Outras leis antispam e de proteção de dados',
  ], after: ['Você deve obter os consentimentos exigidos e incluir os mecanismos de descadastro previstos em lei. A Giggal.ai não é responsável pelo uso que você faz dos endereços verificados.']},
  { heading: '11. Propriedade intelectual', paragraphs: ['O Serviço e seus conteúdos, recursos e funcionalidades originais pertencem à Giggal.ai e são protegidos pelas leis internacionais de direitos autorais, marcas, patentes, segredos comerciais e outras propriedades intelectuais. Você não pode copiar, modificar, distribuir, vender ou licenciar nenhuma parte do Serviço sem o nosso consentimento por escrito.']},
  { heading: '12. Dados e privacidade', paragraphs: [
    'O uso do Serviço também é regido pela nossa Política de privacidade. Você mantém todos os direitos sobre os seus dados e as suas listas, que não usaremos para fins diferentes da prestação do serviço.',
    'Os endereços enviados para verificação são processados com segurança e não são conservados de forma permanente. Não vendemos, compartilhamos nem usamos as suas listas para outros fins.',
  ]},
  { heading: '13. Mudanças e disponibilidade do serviço', paragraphs: [
    'Reservamo-nos o direito de modificar ou interromper o Serviço, total ou parcialmente, de forma temporária ou definitiva, com ou sem aviso prévio, sem responsabilidade perante você ou terceiros.',
    'Buscamos alta disponibilidade, mas não garantimos acesso ininterrupto. A manutenção programada é anunciada com antecedência quando possível.',
  ]},
  { heading: '14. Limitação de responsabilidade', paragraphs: ['Na máxima medida permitida pela lei, a Giggal.ai e seus administradores, funcionários, sócios, agentes, fornecedores e afiliados não são responsáveis por danos indiretos, incidentais, especiais, consequentes ou punitivos, incluindo lucros cessantes, perda de dados, de reputação ou outras perdas intangíveis, decorrentes de:'], list: [
    'Acesso ao Serviço, uso ou impossibilidade de acesso', 'Condutas ou conteúdos de terceiros no Serviço', 'Conteúdos obtidos do Serviço',
    'Acessos, usos ou alterações não autorizados das suas transmissões ou conteúdos', 'Resultados de verificação inexatos',
    'Entregas falhas ou bounces após a verificação', 'Créditos consumidos por erro ou uso indevido por parte do usuário',
  ]},
  { heading: '15. Exclusão de garantias', paragraphs: [
    'O Serviço é prestado "no estado em que se encontra" e "conforme a disponibilidade", sem garantias de qualquer tipo, expressas ou implícitas, incluindo as garantias implícitas de comercialização, adequação a um fim específico e não violação.',
    'Não garantimos que o Serviço seja ininterrupto, pontual, seguro ou livre de erros, nem que os resultados de verificação sejam 100 % precisos.',
  ]},
  { heading: '16. Indenização', paragraphs: ['Você se compromete a defender, indenizar e isentar a Giggal.ai, seus licenciados e licenciantes de qualquer reclamação, dano, obrigação, perda, responsabilidade, custo ou despesa decorrente do uso do Serviço, do descumprimento destes Termos ou da violação de direitos de terceiros.']},
  { heading: '17. Rescisão', paragraphs: ['Podemos encerrar ou suspender a sua conta e o acesso ao Serviço imediatamente, sem aviso prévio nem responsabilidade, por qualquer motivo, incluindo o descumprimento destes Termos. Em caso de rescisão:'], list: [
    'O direito de usar o Serviço cessa imediatamente', 'Os créditos não usados são perdidos sem reembolso',
    'As assinaturas são canceladas', 'O acesso à conta e aos dados pode ser revogado de forma permanente',
  ]},
  { heading: '18. Lei aplicável', paragraphs: ['Estes Termos são regidos e interpretados conforme as leis da jurisdição em que a Giggal.ai opera, sem considerar as normas sobre conflito de leis.']},
  { heading: '19. Resolução de disputas', paragraphs: ['As disputas decorrentes destes Termos ou do Serviço serão tratadas primeiro por negociação de boa-fé. Se a negociação falhar, serão resolvidas por arbitragem vinculante conforme as regras aplicáveis na jurisdição em que a Giggal.ai opera.']},
  { heading: '20. Mudanças nos termos', paragraphs: ['Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma mudança for substancial, avisaremos com pelo menos 30 dias de antecedência da sua entrada em vigor. O que constitui uma mudança substancial fica a nosso critério.']},
  { heading: '21. Divisibilidade', paragraphs: ['Se alguma disposição destes Termos for considerada inaplicável ou inválida, será modificada e interpretada para cumprir seus objetivos na máxima medida permitida pela lei, e as demais disposições continuarão plenamente em vigor.']},
  { heading: '22. Contato', paragraphs: ['Para dúvidas sobre estes Termos de serviço: e-mail info@giggal.ai, site https://giggal.ai.', 'Ao usar os serviços da Giggal.ai você declara ter lido e compreendido estes Termos de serviço e concordar com eles.']},
]

export default function TermosPage() {
  return (
    <LegalPageL10n
      locale="pt-br"
      path="/pt-br/termos"
      title="Termos de"
      accent="serviço"
      updated="4 de fevereiro de 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
