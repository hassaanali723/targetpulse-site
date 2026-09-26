import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/pt-br'

// Brazilian free checker, one page for Brazil and Portugal. Primary
// "verificação de e-mail" (3,000 / KD 0, no tracked competitor above 10),
// with the verificar, verificador, validador, consultar and confirmar
// families (plans/12 section 2.1). The BR SERP carries account-verification
// intent (Google's own help page at 6), so the first sentence says what this
// page does: it checks whether an address exists and sends nothing.

const PATH = '/pt-br/verificacao-de-email'
const DESC =
  'Verifique se um endereço de e-mail existe e é válido sem enviar mensagem: sintaxe, MX, SMTP, catch-all e e-mails descartáveis em segundos. Grátis, sem cadastro.'

export const metadata: Metadata = {
  title: { absolute: 'Verificação de E-mail Grátis: Verificador Online | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Verificação de e-mail grátis: verificador de e-mails online',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verificação de e-mail grátis: verificador de e-mails online', description: DESC },
}

// The FAQ questions are pack rows where one exists (plans/12 section 3.1):
// "como verificar o email" 200 / 1, "verificação de emails" 150 / 2. The
// existence questions belong to the child page.
const faqs: FaqItem[] = [
  {
    q: 'Como verificar o e-mail?',
    a: 'Digite o endereço acima e clique em Verificar. O verificador pergunta ao servidor de e-mail do domínio se aquela caixa existe e lê a resposta, sem enviar nenhuma mensagem. Em alguns segundos você tem o resultado: válido, inválido ou desconhecido.',
  },
  {
    q: 'Vocês enviam uma mensagem ao endereço?',
    a: 'Não. A verificação usa uma conversa SMTP: a ferramenta abre a conexão com o servidor, informa o destinatário e lê o código de resposta (250 se a caixa é aceita, 550 se não existe). O destinatário não recebe nada.',
  },
  {
    q: 'O que significa "arriscado"?',
    a: 'É o rótulo que a maioria dos verificadores dá a um endereço em domínio catch-all, porque o servidor aceita qualquer destinatário e uma verificação padrão não consegue confirmar a caixa. A Giggal faz verificações adicionais e devolve válido ou inválido também nesses domínios.',
  },
  {
    q: 'Verificação de e-mail e consulta de e-mail são a mesma coisa?',
    a: 'Na prática, sim: consultar um e-mail é perguntar ao servidor se a caixa existe, e é isso que a verificação faz. A consulta mostra se o endereço é válido, se o domínio é catch-all, se é descartável ou de função. Ela não mostra quem é o dono do endereço.',
  },
  {
    q: 'Posso verificar e-mails em massa?',
    a: 'Não nesta página. Cadastre-se, receba 1.000 créditos grátis sem cartão e envie o arquivo CSV ou Excel: cada linha passa pelas mesmas verificações desta ferramenta, catch-all incluído.',
  },
  {
    q: 'Como saber se um e-mail existe?',
    a: 'Com a verificação SMTP desta página, em segundos. Os outros métodos, com seus limites, estão no guia "Como saber se um e-mail existe?": pesquisa na web, leitura do bounce, recuperação de senha e uma mensagem para um endereço propositalmente errado.',
  },
  {
    q: 'Como validar um e-mail?',
    a: 'Passando pelos quatro passos: sintaxe, registros MX, verificação SMTP da caixa e resolução catch-all. Conferir só o formato não é validar; um endereço bem escrito pode apontar para uma caixa que não existe. O validador desta página faz os quatro de uma vez.',
  },
  {
    q: 'Como verificar um e-mail grátis?',
    a: 'Digite o endereço no verificador de e-mail gratuito acima e clique em Verificar. Sem cadastro, sem cartão, sem enviar mensagem. Para uma lista inteira, o cadastro dá 1.000 créditos grátis.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function VerificacaoDeEmailPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n('pt-br', [{ name: 'Verificação de e-mail', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={webApplicationL10n('pt-br', PATH, 'Verificador de e-mail grátis da Giggal.ai', DESC)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="pt-br" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Verificação de e-mail grátis:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            verificador de e-mails online
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Confira se um e-mail existe e se é válido antes de enviar: sintaxe, servidores de e-mail, caixa
          SMTP e domínios catch-all em segundos. Nenhuma mensagem é enviada ao endereço.
        </p>
      </section>

      {/* ── A FERRAMENTA ─────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Grátis, sem cadastro, sem cartão. Um endereço por verificação, verificação SMTP completa.
        </p>
      </section>

      {/* ── O QUE O RESULTADO SIGNIFICA ──────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>O que o resultado significa</h2>
        <p className={proseP}>
          Cada verificação termina com um de três vereditos. <strong className="text-slate-900">Válido</strong>{' '}
          significa que o servidor confirmou a caixa e ela passou nas verificações adicionais: um e-mail
          para esse endereço deve chegar. <strong className="text-slate-900">Inválido</strong> significa
          que a sintaxe está errada, o domínio não tem servidores de e-mail ou o servidor rejeitou a caixa:
          o envio produziria um hard bounce. <strong className="text-slate-900">Desconhecido</strong> é raro
          e indica que o servidor não respondeu a tempo ou aplica greylisting: tente de novo mais tarde em
          vez de dar o endereço por morto.
        </p>
        <p className={proseP}>
          Abaixo do veredito estão os detalhes de que a entrega depende: o provedor (Google Workspace,
          Microsoft 365, um gateway como o Proofpoint), o host MX que respondeu, se o endereço é{' '}
          <strong className="text-slate-900">descartável</strong> (uma caixa temporária que vai sumir),{' '}
          <strong className="text-slate-900">de função</strong> (contato@, vendas@, suporte@: caixas
          compartilhadas, ruins para outreach) e se está em um{' '}
          <strong className="text-slate-900">provedor gratuito</strong> como Gmail ou Outlook, um dado útil
          ao qualificar contatos B2B. É tudo o que você precisa para confirmar um e-mail antes de enviar.
        </p>
      </section>

      {/* ── COMO SABER SE UM E-MAIL EXISTE ───────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Como saber se um e-mail existe?</h2>
        <p className={proseP}>
          Um e-mail existe se o servidor do seu domínio aceita aquela caixa quando ela é proposta em uma
          conversa SMTP. Dá para perguntar sem enviar nada: verificar se o e-mail existe é o que a
          ferramenta acima faz. Antes de
          responder a um contato anotado à mão, quando um formulário devolve bounce ou para testar um
          endereço de uma lista comprada, a pergunta é a mesma. Os quatro métodos que funcionam, com seus
          limites, estão no guia{' '}
          <Link href="/pt-br/verificacao-de-email/como-saber-se-um-email-existe" className="text-indigo-600 font-bold hover:underline">
            Como saber se um e-mail existe?
          </Link>
          . O mesmo guia explica como{' '}
          <Link href="/pt-br/verificacao-de-email/como-saber-se-um-email-existe#verdadeiro-ou-falso" className="text-indigo-600 font-bold hover:underline">
            verificar se um e-mail é falso
          </Link>
          , que é outra pergunta.
        </p>
      </section>

      {/* ── VERIFICADOR: O QUE CONFERE ───────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verificador de e-mails: o que a ferramenta confere, passo a passo</h2>
        <p className={proseP}>
          Uma verificação séria tem quatro passos. As ferramentas grátis que param no primeiro são o
          motivo de tantas listas &quot;verificadas&quot; continuarem dando bounce.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>
            <strong className="text-slate-900">Sintaxe.</strong> O endereço está bem escrito: uma única
            arroba, uma parte local válida, um domínio com extensão. Este passo encontra erros de
            digitação e nada mais.
          </li>
          <li>
            <strong className="text-slate-900">Registros MX.</strong> O domínio publica servidores de
            e-mail? Sem registro MX nenhuma caixa pode existir, então o endereço está morto antes de
            qualquer envio.
          </li>
          <li>
            <strong className="text-slate-900">Verificação SMTP da caixa.</strong> Abrimos uma conversa
            com o servidor de destino, informamos o destinatário e lemos a resposta. Um código 250
            significa que a caixa é aceita; um 550, que ela não existe.
          </li>
          <li>
            <strong className="text-slate-900">Resolução catch-all.</strong> Se o servidor disse sim
            também para um endereço inventado, o passo três não provou nada. Aqui a maioria dos
            verificadores escreve &quot;catch-all&quot; e para. A Giggal analisa os sinais que separam uma
            caixa real de uma resposta accept-all e devolve válido ou inválido.
          </li>
        </ol>
        <p className={proseP}>
          O painel acima mostra cada passo enquanto ele é concluído, mais o provedor, o host MX e se o
          endereço é descartável, de função ou de um provedor gratuito.
        </p>
      </section>

      {/* ── CONSULTAR E-MAIL ─────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Consulta de e-mail: o que ela mostra sobre um endereço</h2>
        <p className={proseP}>
          No Brasil se diz consultar, checar ou conferir um e-mail; é a mesma verificação. A consulta mostra se o endereço é válido, qual provedor responde por ele, se o domínio é catch-all
          e se a caixa é descartável, de função ou de um provedor gratuito. O que a consulta não mostra é
          quem usa o endereço: nenhuma verificação SMTP devolve nome, empresa ou perfil, e uma ferramenta
          que promete isso está buscando em outras fontes, não no servidor de e-mail. Para saber se vale a
          pena enviar, a resposta do servidor é o que importa, e é o que esta página entrega.
        </p>
      </section>

      {/* ── VALIDADOR DE E-MAIL ──────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Validador de e-mail: como saber se o e-mail é válido</h2>
        <p className={proseP}>
          Um validador de e-mail gratuito como este é mais do que um corretor de formato. Muitos validadores conferem só o formato
          (arroba, domínio, extensão) e chamam isso de validação; um endereço com formato perfeito em um
          domínio sem servidores de e-mail continua inválido, e um endereço bem formado em um domínio
          real pode apontar para uma caixa que não existe. Validar e-mail, aqui, é passar pelos quatro
          passos acima: sintaxe, MX, SMTP e resolução catch-all. Só o último confirma que a caixa existe
          de verdade, e é ele que separa um validador de e-mail de um corretor ortográfico. O mesmo
          teste serve para verificar um endereço por vez aqui e para validar listas inteiras depois do
          cadastro.
        </p>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>O que é um e-mail catch-all e por que outros verificadores dizem &quot;arriscado&quot;?</h2>
        <p className={proseP}>
          Detectar um domínio catch-all custa pouco: a ferramenta busca os servidores de e-mail, abre uma
          conexão e propõe um endereço aleatório que quase certamente não existe. Se o servidor aceita, o
          domínio aceita tudo, e a resposta chega em uma única troca. Por isso quase todo verificador
          grátis vai dizer com gosto que um domínio é catch-all. Saber quais caixas são reais atrás desse
          domínio é outro trabalho: exige mais sondas, mais sinais e uma infraestrutura com reputação de
          envio limpa. Em uma lista B2B os endereços catch-all costumam ser um terço dos contatos, e
          apagá-los em bloco joga fora clientes reais. A Giggal resolve um por um e diz quais manter. O
          método está explicado em{' '}
          <Link href="/pt-br/verificacao-catch-all" className="text-indigo-600 font-bold hover:underline">
            verificação catch-all
          </Link>
          .
        </p>
      </section>

      {/* ── LISTA INTEIRA ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Precisa verificar uma lista inteira? Verificação em massa, API e integrações</h2>
        <p className={proseP}>
          A verificação individual serve para um endereço por vez. Para um arquivo inteiro, cadastre-se,
          envie o CSV e a verificação em massa executa as mesmas verificações em cada linha, catch-all
          incluído. Os primeiros 1.000 créditos são grátis, sem cartão. Os{' '}
          <Link href="/pt-br/precos" className="text-indigo-600 font-bold hover:underline">
            preços
          </Link>{' '}
          começam em US$ 9,90 por 10.000 verificações. A mesma verificação está disponível como API REST
          e pelas{' '}
          <Link href="/pt-br/integracoes" className="text-indigo-600 font-bold hover:underline">
            integrações
          </Link>{' '}
          com Zapier, n8n e HubSpot.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Perguntas frequentes</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="pt-br" headline="Verifique a lista inteira" />

      {/* ── LINKS ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/pt-br/verificacao-de-email/como-saber-se-um-email-existe', label: 'Como saber se um e-mail existe? Quatro métodos' },
            { href: '/pt-br/verificacao-catch-all', label: 'Verificação catch-all e endereços arriscados' },
            { href: '/pt-br/precos', label: 'Preços e créditos' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all card-vivid-shadow"
            >
              <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      <FooterL10n locale="pt-br" />
    </main>
  )
}
