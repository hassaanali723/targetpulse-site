import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de privacidade do verificador de e-mail',
  description: 'Como a Giggal.ai, operada pela TargetPulse Ltd, coleta, usa, compartilha e protege os seus dados, por quanto tempo os guarda e os seus direitos no GDPR.',
  alternates: { canonical: '/pt-br/privacidade', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'pt_BR', title: 'Política de privacidade', url: 'https://giggal.ai/pt-br/privacidade', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Brazilian Portuguese translation of app/(en)/privacy-policy/page.tsx, clause
// by clause (English "Last Updated: October 1, 2026"). The English text is
// binding; the notice at the top of LegalPageL10n says so.

const sections: LegalSection[] = [
  { heading: '1. Introdução', paragraphs: [
    'Este serviço é operado pela TargetPulse Ltd ("nós"), empresa registrada na Inglaterra e no País de Gales sob o número 17079825, com sede social em Office 17366, 182-184 High Street North, East Ham, London E6 2JA. A TargetPulse Ltd é o controlador dos dados pessoais tratados por meio do Giggal.ai. Contato: info@giggal.ai. Denúncias de abuso: abuse@giggal.ai.',
    'A Giggal.ai ("nós") se compromete a proteger a sua privacidade. Esta Política de privacidade explica como coletamos, usamos, divulgamos e protegemos as suas informações quando você usa os nossos serviços de verificação de e-mail e o nosso site.',
  ]},
  { heading: '2. Informações que coletamos' },
  { heading: '2.1 Informações pessoais', level: 3, paragraphs: ['Podemos coletar as informações pessoais que você nos fornece voluntariamente quando:'], list: [
    'Registra uma conta',
    'Compra créditos de verificação ou uma assinatura',
    'Entra em contato com o nosso suporte ao cliente',
    'Envia listas de e-mail para verificação',
    'Usa os formulários de contato ou de suporte do nosso site',
  ], after: ['Essas informações podem incluir: nome, endereço de e-mail, identificadores da conta, dados opcionais da empresa e metadados das transações. Os dados dos cartões de pagamento são tratados pelo nosso processador de pagamentos e não são armazenados por nós.']},
  { heading: '2.2 Autenticação e dados técnicos', level: 3, paragraphs: ['Usamos o Clerk para o cadastro e o login de contas (incluindo o login com Google e o cadastro com e-mail e senha). Por meio desse processo de autenticação, coletamos e tratamos:'], list: [
    'Identificadores da conta (como ID de usuário, nome e endereço de e-mail)',
    'Provedor de autenticação e método de login (Google ou e-mail e senha)',
    'Metadados da atividade de login (como a data e a hora dos logins)',
    'Dados técnicos de segurança (como endereço IP e user agent) usados para proteger as contas e prevenir abusos',
    'Cookies ou tokens de sessão essenciais, necessários para manter você conectado com segurança',
  ]},
  { heading: '2.3 Dados de verificação de e-mail', level: 3, paragraphs: ['Quando você usa os nossos serviços de verificação de e-mail, coletamos e tratamos:'], list: [
    'Endereços de e-mail enviados para verificação',
    'Resultados e status da verificação (válido, inválido, catch-all, descartável etc.)',
    'Listas de e-mail em massa enviadas para processamento',
    'Dados de uso da API e histórico de verificações',
  ]},
  { heading: '3. Como usamos as suas informações', paragraphs: ['Usamos as informações coletadas para as seguintes finalidades:'], list: [
    'Prestar e manter os nossos serviços',
    'Processar as suas transações e gerenciar assinaturas',
    'Enviar notificações relacionadas ao serviço',
    'Prestar suporte ao cliente',
    'Melhorar e otimizar os nossos serviços',
    'Detectar e prevenir fraudes e abusos',
    'Cumprir obrigações legais',
    'Analisar padrões e tendências de uso',
  ]},
  { heading: '4. Base legal para o tratamento (GDPR e LGPD)', paragraphs: ['Se você está no Espaço Econômico Europeu (EEE) ou no Brasil, a nossa base legal para coletar e usar as suas informações depende dos dados e do contexto:'], list: [
    'Execução de contrato: o tratamento é necessário para prestar os nossos serviços',
    'Legítimo interesse: o tratamento atende aos nossos legítimos interesses comerciais',
    'Consentimento: você deu consentimento explícito para finalidades específicas',
    'Obrigação legal: o tratamento é necessário para cumprir a lei',
  ]},
  { heading: '5. Compartilhamento e divulgação de dados' },
  { heading: '5.1 Prestadores de serviço', level: 3, paragraphs: ['Compartilhamos as suas informações com prestadores de serviço terceiros que atuam em nosso nome:'], list: [
    'Processadores de pagamento (o nosso gateway de pagamento autorizado)',
    'Provedores de autenticação (como o Clerk)',
    'Provedores de hospedagem na nuvem',
    'Provedores de segurança e monitoramento',
    'Ferramentas de suporte ao cliente',
  ]},
  { heading: '5.2 Exigências legais', level: 3, paragraphs: ['Podemos divulgar as suas informações se a lei exigir ou em resposta a solicitações válidas de autoridades públicas (por exemplo, ordens judiciais e intimações).']},
  { heading: '5.3 Transferências empresariais', level: 3, paragraphs: ['Se participarmos de uma fusão, aquisição ou venda de ativos, as suas informações poderão ser transferidas como parte dessa operação.']},
  { heading: '6. Segurança dos dados', paragraphs: ['Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas informações, incluindo:'], list: [
    'Criptografia dos dados em trânsito e em repouso',
    'Avaliações de segurança periódicas',
    'Controles de acesso e autenticação',
    'Data centers seguros',
    'Treinamento dos funcionários em proteção de dados',
  ], after: ['No entanto, nenhum método de transmissão pela internet é 100 % seguro, e não podemos garantir segurança absoluta.']},
  { heading: '7. Retenção dos dados', paragraphs: ['Conservamos as suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política de privacidade, salvo se a lei exigir ou permitir um período de retenção maior. Quando não precisarmos mais das suas informações, vamos excluí-las ou anonimizá-las com segurança.']},
  { heading: '8. Seus direitos', paragraphs: ['Dependendo da sua localização, você pode ter os seguintes direitos:'], list: [
    'Acesso: solicitar acesso às suas informações pessoais',
    'Correção: solicitar a correção de informações inexatas',
    'Exclusão: solicitar a exclusão das suas informações',
    'Portabilidade: solicitar uma cópia dos seus dados em formato portável',
    'Restrição: solicitar a restrição do tratamento',
    'Oposição: se opor ao tratamento das suas informações',
    'Revogação do consentimento: revogar o consentimento quando o tratamento se basear nele',
  ], after: ['Para exercer esses direitos, entre em contato conosco pelo e-mail info@giggal.ai.']},
  { heading: '9. Cookies e tecnologias de rastreamento', paragraphs: ['Usamos cookies e tecnologias de rastreamento semelhantes para acompanhar a atividade no nosso site e armazenar determinadas informações. Você pode configurar o seu navegador para recusar todos os cookies ou para avisar quando um cookie estiver sendo enviado. No entanto, se você não aceitar cookies, talvez não consiga usar algumas partes do nosso serviço.']},
  { heading: '10. Links de terceiros', paragraphs: ['O nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites externos. Recomendamos que você leia as políticas de privacidade de todos os sites de terceiros que visitar.']},
  { heading: '11. Privacidade de crianças', paragraphs: ['Os nossos serviços não se destinam a pessoas menores de 18 anos. Não coletamos intencionalmente informações pessoais de crianças. Se você souber que uma criança nos forneceu informações pessoais, entre em contato conosco, e tomaremos medidas para excluir essas informações.']},
  { heading: '12. Transferências internacionais de dados', paragraphs: ['As suas informações podem ser transferidas e mantidas em computadores localizados fora do seu estado, província, país ou outra jurisdição governamental, onde as leis de proteção de dados podem ser diferentes. Garantimos a adoção de salvaguardas adequadas para essas transferências.']},
  { heading: '13. Direitos de privacidade na Califórnia (CCPA)', paragraphs: ['Se você reside na Califórnia, você tem direitos específicos sobre as suas informações pessoais:'], list: [
    'Direito de saber quais informações pessoais são coletadas',
    'Direito de saber se as informações pessoais são vendidas ou divulgadas',
    'Direito de optar por não participar da venda de informações pessoais',
    'Direito à exclusão das informações pessoais',
    'Direito de não sofrer discriminação por exercer os direitos previstos na CCPA',
  ]},
  { heading: '14. Mudanças nesta Política de privacidade', paragraphs: ['Podemos atualizar a nossa Política de privacidade periodicamente. Avisaremos sobre quaisquer mudanças publicando a nova Política de privacidade nesta página e atualizando a data de "Última atualização". Recomendamos que você revise esta Política de privacidade periodicamente para verificar se houve mudanças.']},
  { heading: '15. Contato', paragraphs: [
    'Se você tiver dúvidas sobre esta Política de privacidade, entre em contato conosco: e-mail info@giggal.ai, site https://giggal.ai.',
    'Ao usar os serviços da Giggal.ai, você declara que leu e compreendeu esta Política de privacidade e concorda com os seus termos.',
  ]},
]

export default function PrivacidadePage() {
  return (
    <LegalPageL10n
      locale="pt-br"
      path="/pt-br/privacidade"
      title="Política de"
      accent="privacidade"
      updated="1º de outubro de 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
