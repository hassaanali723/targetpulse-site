import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/pt-br/precos'
const DESC =
  'Preços da verificação de e-mail: a partir de US$ 9,90 por 10.000 créditos, até US$ 0,0007 por e-mail. Pelo uso ou assinatura com 10 % de desconto. Sem validade.'

export const metadata: Metadata = {
  title: { absolute: 'Preços: 10.000 Verificações de E-mail por US$ 9,90 | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Preços da verificação de e-mail',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Preços',
  h1Lead: 'Preços da verificação de',
  h1Accent: 'e-mail',
  intro: (
    <>
      Você paga só o que usa. Sem mensalidade fixa, sem custos escondidos, e os créditos não expiram.
      Comece com <strong className="text-indigo-600 font-extrabold">1.000 créditos de teste grátis</strong>, sem cartão.
    </>
  ),
  contactHref: '/pt-br/contato',
  includedTitle: 'Tudo incluído em cada pacote',
  includedText: 'Todos os recursos, em todos os pacotes. Sem níveis, sem bloqueios.',
  features: [
    'Verificação de sintaxe',
    'Verificação do domínio e dos registros MX',
    'Verificação SMTP da caixa',
    'Detecção de e-mails descartáveis',
    'Detecção de contas de função',
    'Verificação catch-all',
    'Envio e verificação em massa',
    'Exportação para CSV, Excel e JSON',
    'Remoção de duplicados',
    'Relatórios de verificação detalhados',
    'Créditos sem validade',
  ],
  rulesTitle: 'Preços fáceis de entender',
  rulesText: 'Quatro regras que mantêm os preços claros e previsíveis.',
  rules: [
    { title: '1 crédito = 1 e-mail', body: 'Cada verificação usa exatamente um crédito do seu saldo, também em endereços catch-all e atrás de gateways de segurança.' },
    { title: 'Desconto por volume', body: 'Quanto mais créditos você compra, menos paga por crédito: de US$ 0,0017 a US$ 0,0007.' },
    { title: '10 % de desconto na assinatura', body: 'Com a assinatura mensal você economiza automaticamente 10 % em cada pacote.' },
    { title: 'Os créditos não expiram', body: 'Use quando quiser. Eles ficam na sua conta enquanto você precisar.' },
  ],
  faqTitle: 'Perguntas frequentes',
  faqText: 'Créditos, pagamentos e reembolsos.',
  faq: [
    { q: 'Quais formas de pagamento vocês aceitam?', a: 'Todos os cartões de crédito e débito comuns, via Stripe. Os preços estão em dólares americanos; o seu banco aplica o câmbio.' },
    { q: 'Posso cancelar a assinatura quando quiser?', a: 'Sim, a qualquer momento. Você mantém todos os créditos da sua conta e nada mais é cobrado.' },
    { q: 'O que acontece se os créditos acabarem?', a: 'Você compra mais quando quiser. O saldo é atualizado na hora.' },
    { q: 'Vocês fazem reembolso?', a: 'Os créditos normalmente não são reembolsáveis. Os casos excepcionais são avaliados um a um; os resultados "desconhecido" são devolvidos em créditos. Os detalhes estão na política de reembolso.' },
    { q: 'Existe compra mínima?', a: 'O pacote mínimo é de 3.000 créditos (US$ 5,00). Antes de comprar você tem 1.000 créditos de teste grátis.' },
    { q: 'Os créditos expiram?', a: 'Nunca. Eles ficam na sua conta até você usar.' },
  ],
  ctaTitle: 'Comece com 1.000 créditos grátis',
  ctaText: 'Sem cartão. Verifique os primeiros e-mails grátis e veja os resultados em segundos.',
  ctaButton: 'Receber os créditos grátis',
  ctaHref: '/pt-br/cadastro',
}

export default function PrecosPage() {
  return <PricingPageL10n locale="pt-br" content={content} />
}
