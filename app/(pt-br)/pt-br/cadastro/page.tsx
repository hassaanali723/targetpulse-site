import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/pt-br/cadastro'
const DESC =
  'Crie sua conta na Giggal.ai grátis em segundos. 1.000 créditos de verificação grátis, sem cartão. Verifique domínios catch-all com 98,5 % de precisão.'

export const metadata: Metadata = {
  title: { absolute: 'Criar Conta: 1.000 Verificações de E-mail Grátis | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Crie sua conta grátis: 1.000 verificações incluídas',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Cadastro',
  h1Lead: 'Crie sua conta grátis',
  h1Accent: 'e comece com 1.000 créditos',
  intro: 'Crie sua conta na Giggal.ai em menos de 30 segundos. As primeiras 1.000 verificações são por nossa conta, incluindo os domínios catch-all e accept-all que outras ferramentas marcam como "desconhecido". O painel do usuário está, por enquanto, em inglês.',
  ctaPrimary: 'Criar minha conta grátis',
  pricingLabel: 'Ver preços',
  pricingHref: '/pt-br/precos',
  trustPoints: ['Sem cartão', 'Os créditos não expiram', 'Cancele quando quiser'],
  perksKicker: 'O que está incluído',
  perksTitle: 'Tudo o que você precisa para limpar sua lista',
  perksText: 'Acesso completo a todos os recursos com o teste grátis. Sem ferramentas bloqueadas, sem asteriscos.',
  perks: [
    { title: '1.000 créditos grátis', body: 'As primeiras 1.000 verificações são presente nosso. Sem cartão, sem validade.' },
    { title: 'Resultados em tempo real', body: 'Envie uma lista e veja as verificações chegarem linha a linha.' },
    { title: 'Verificação catch-all', body: 'Resultados claros, válido ou inválido, nos domínios catch-all que outras ferramentas pulam.' },
    { title: 'Preços pelo uso', body: 'A partir de US$ 5 por 3.000 créditos. Os créditos não expiram, cancele quando quiser.' },
  ],
  ctaTitle: 'Pronto para limpar sua lista?',
  ctaText: 'Cadastro em 30 segundos. As primeiras 1.000 verificações são grátis.',
  ctaButton: 'Cadastre-se grátis',
}

export default function CadastroPage() {
  return <SignupPageL10n locale="pt-br" content={content} />
}
