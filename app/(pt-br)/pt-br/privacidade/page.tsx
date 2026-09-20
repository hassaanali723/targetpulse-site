import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de privacidade da Giggal.ai',
  description: 'Como a Giggal.ai trata os dados pessoais e os e-mails enviados para verificação. Tradução de cortesia; prevalece a versão em inglês.',
  alternates: { canonical: '/pt-br/privacidade', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pt_BR', title: 'Política de privacidade', url: 'https://giggal.ai/pt-br/privacidade', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Introdução', paragraphs: ['A Giggal.ai ("nós") se compromete a proteger a sua privacidade. Esta política explica como coletamos, usamos, compartilhamos e protegemos as suas informações quando você usa nossos serviços de verificação de e-mail e nosso site.']},
  { heading: '2. Informações que coletamos' },
  { heading: '2.1 Dados pessoais', level: 3, paragraphs: ['Podemos coletar os dados pessoais que você fornece voluntariamente quando:'], list: [
    'Registra uma conta', 'Compra créditos ou uma assinatura', 'Entra em contato com o suporte', 'Envia listas de e-mails para verificação', 'Usa os formulários de contato ou de suporte do site',
  ], after: ['Esses dados podem incluir nome, endereço de e-mail, identificadores da conta, dados opcionais da empresa e metadados das transações. Os dados dos cartões de pagamento são tratados pelo nosso processador de pagamentos e não ficam conosco.']},
  { heading: '2.2 Autenticação e dados técnicos', level: 3, paragraphs: ['Usamos o Clerk para cadastro e login (incluindo o acesso com Google e com e-mail e senha). Nesse processo coletamos e tratamos:'], list: [
    'Identificadores da conta (ID de usuário, nome, e-mail)', 'Provedor de autenticação e método de acesso', 'Metadados de acesso (como data e hora dos logins)',
    'Dados técnicos de segurança (como endereço IP e user agent) para proteger as contas e prevenir abusos', 'Cookies ou tokens de sessão necessários para manter um acesso seguro',
  ]},
  { heading: '2.3 Dados de verificação de e-mail', level: 3, paragraphs: ['Quando você usa nossos serviços, coletamos e tratamos:'], list: [
    'Os endereços de e-mail enviados para verificação', 'Os resultados e o status da verificação (válido, inválido, catch-all, descartável etc.)',
    'As listas enviadas para processamento em massa', 'Os dados de uso da API e o histórico de verificações',
  ]},
  { heading: '3. Como usamos as informações', list: [
    'Prestar e manter os serviços', 'Processar transações e gerir assinaturas', 'Enviar notificações relacionadas ao serviço', 'Prestar suporte',
    'Melhorar e otimizar os serviços', 'Detectar e prevenir fraudes e abusos', 'Cumprir obrigações legais', 'Analisar o uso e as tendências',
  ]},
  { heading: '4. Base legal do tratamento (GDPR e LGPD)', paragraphs: ['Se você está no Espaço Econômico Europeu ou no Brasil, a base legal depende dos dados e do contexto:'], list: [
    'Execução do contrato: o tratamento é necessário para prestar os serviços', 'Interesse legítimo: o tratamento atende a nossos interesses legítimos',
    'Consentimento: você deu consentimento explícito para fins específicos', 'Obrigação legal: o tratamento é necessário para cumprir a lei',
  ]},
  { heading: '5. Compartilhamento dos dados' },
  { heading: '5.1 Prestadores de serviço', level: 3, paragraphs: ['Compartilhamos dados com fornecedores terceiros que atuam em nosso nome:'], list: [
    'Processadores de pagamento', 'Provedores de autenticação (como o Clerk)', 'Provedores de hospedagem na nuvem', 'Provedores de segurança e monitoramento', 'Ferramentas de atendimento ao cliente',
  ]},
  { heading: '5.2 Obrigações legais', level: 3, paragraphs: ['Podemos compartilhar dados quando a lei exigir ou em resposta a solicitações válidas das autoridades públicas (por exemplo, ordens judiciais).']},
  { heading: '5.3 Transferências empresariais', level: 3, paragraphs: ['Em caso de fusão, aquisição ou venda de ativos, os dados podem ser transferidos como parte da operação.']},
  { heading: '6. Segurança dos dados', paragraphs: ['Adotamos medidas técnicas e organizacionais adequadas para proteger os dados, entre elas:'], list: [
    'Criptografia dos dados em trânsito e em repouso', 'Avaliações periódicas de segurança', 'Controles de acesso e autenticação', 'Data centers seguros', 'Treinamento da equipe em proteção de dados',
  ], after: ['Nenhum método de transmissão pela internet é 100 % seguro e não podemos garantir segurança absoluta.']},
  { heading: '7. Retenção dos dados', paragraphs: ['Conservamos os dados pessoais só pelo tempo necessário aos fins indicados nesta política, salvo se a lei exigir ou permitir um período maior. Quando deixam de ser necessários, são excluídos ou anonimizados com segurança.']},
  { heading: '8. Seus direitos', paragraphs: ['Dependendo de onde você está, pode ter os seguintes direitos:'], list: [
    'Acesso: solicitar acesso aos seus dados', 'Retificação: solicitar a correção de dados inexatos', 'Exclusão: solicitar a eliminação dos dados',
    'Portabilidade: receber uma cópia dos dados em formato portável', 'Limitação: solicitar a limitação do tratamento', 'Oposição: se opor ao tratamento',
    'Revogação do consentimento: revogar o consentimento quando o tratamento se baseia nele',
  ], after: ['Para exercer esses direitos, escreva para info@giggal.ai.']},
  { heading: '9. Cookies e tecnologias de rastreamento', paragraphs: ['Usamos cookies e tecnologias semelhantes para acompanhar a atividade no site e guardar certas informações. Você pode configurar o navegador para recusar cookies ou avisar quando um é enviado; algumas partes do serviço podem não funcionar corretamente.']},
  { heading: '10. Links para sites de terceiros', paragraphs: ['O site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade deles e recomendamos que você leia as políticas correspondentes.']},
  { heading: '11. Privacidade de menores', paragraphs: ['Nossos serviços não se destinam a menores de 18 anos. Não coletamos conscientemente dados de menores. Se você souber que um menor nos forneceu dados pessoais, entre em contato e os excluiremos.']},
  { heading: '12. Transferências internacionais', paragraphs: ['Os dados podem ser transferidos e conservados em sistemas fora do seu país, onde as leis de proteção de dados podem ser diferentes. Adotamos garantias adequadas para proteger os dados conforme esta política.']},
  { heading: '13. Direitos dos residentes na Califórnia (CCPA)', list: [
    'Direito de saber quais dados pessoais são coletados', 'Direito de saber se os dados são vendidos ou compartilhados',
    'Direito de se opor à venda dos dados', 'Direito à exclusão', 'Direito de não sofrer discriminação por exercer esses direitos',
  ]},
  { heading: '14. Mudanças nesta política', paragraphs: ['Podemos atualizar esta política de tempos em tempos. As mudanças serão publicadas nesta página com a nova data de atualização. Recomendamos relê-la periodicamente.']},
  { heading: '15. Contato', paragraphs: ['Para dúvidas sobre esta política: e-mail info@giggal.ai, site https://giggal.ai.', 'Ao usar os serviços da Giggal.ai você declara ter lido e compreendido esta política e concordar com seus termos.']},
]

export default function PrivacidadePage() {
  return (
    <LegalPageL10n
      locale="pt-br"
      path="/pt-br/privacidade"
      title="Política de"
      accent="privacidade"
      updated="4 de fevereiro de 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
