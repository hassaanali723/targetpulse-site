import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/pt-br'

// The existence question: "como saber se um email existe" 450 / KD 0
// (emailverify.io at 1 with a service page), "verificar se email existe" 300,
// "como saber se o email é valido" 200 and the smaller phrasings, 21 rows and
// 2,530 searches (plans/12 section 2.1), the largest child cluster of the five
// languages. The "verdadeiro" rows get their own H2. The page answers in the
// first 60 words and embeds the checker.

const PATH = '/pt-br/verificacao-de-email/como-saber-se-um-email-existe'
const DESC =
  'Quatro métodos para saber se um e-mail existe, o que cada um deixa passar, e um verificador que confirma a caixa sem enviar nada. Grátis e sem cadastro.'

export const metadata: Metadata = {
  title: { absolute: 'Como Saber se um E-mail Existe: 4 Métodos e Teste | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Como saber se um e-mail existe: quatro métodos e um verificador',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
}

const steps = [
  {
    name: 'Verificação SMTP sem enviar e-mail',
    text: 'Um verificador abre uma conversa com o servidor de e-mail do domínio, informa o destinatário e lê o código de resposta: 250 se a caixa é aceita, 550 se não existe. Nenhuma mensagem é entregue.',
  },
  {
    name: 'Consultar os registros MX do domínio',
    text: 'Se o domínio não publica registros MX, nenhuma caixa pode existir nele. Uma consulta DNS diz isso em um segundo, mas um registro MX presente não prova que a caixa específica exista.',
  },
  {
    name: 'Pesquisar na web ou no LinkedIn',
    text: 'Para um contato importante, procure o padrão dos endereços da empresa (nome.sobrenome@, inicial+sobrenome@) no site dela ou em perfis públicos e compare. Lento, mas útil quando o servidor responde "desconhecido".',
  },
  {
    name: 'Enviar uma mensagem e esperar o bounce (o método que falha)',
    text: 'Muitos guias recomendam. Em um domínio catch-all o servidor aceita qualquer destinatário e não devolve bounce mesmo que a caixa não exista, então a ausência de bounce não confirma nada. Só funciona em domínios que não são catch-all, e cada bounce prejudica sua reputação de envio.',
  },
]

// FAQ: the existence rows verbatim (plans/12 section 3.4).
const faqs: FaqItem[] = [
  {
    q: 'Como saber se o e-mail é válido?',
    a: 'Um e-mail é válido quando está bem escrito, o domínio tem servidores de e-mail e o servidor aceita a caixa em uma verificação SMTP. Só o último passo confirma que ele existe; o formato sozinho não diz nada. O verificador desta página faz os três em segundos.',
  },
  {
    q: 'Como verificar se um e-mail existe sem enviar nada?',
    a: 'Com a verificação SMTP: pergunta-se ao servidor de e-mail se a caixa existe e lê-se a resposta sem entregar nenhuma mensagem. É o método que a ferramenta desta página usa.',
  },
  {
    q: 'Esse e-mail existe? Como testar um endereço do Gmail?',
    a: 'Igual a qualquer outro: o Gmail responde à verificação SMTP e confirma ou rejeita a caixa. Digite o endereço no verificador acima; em alguns segundos você vê válido ou inválido.',
  },
  {
    q: 'Como saber se um endereço de e-mail existe quando o resultado é "desconhecido"?',
    a: 'O servidor não respondeu a tempo, aplica greylisting a remetentes novos ou está atrás de um gateway de segurança que aceita tudo. Tente de novo mais tarde ou use a verificação catch-all completa.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ComoSaberSeUmEmailExistePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('pt-br', [
          { name: 'Verificação de e-mail', path: '/pt-br/verificacao-de-email' },
          { name: 'Como saber se um e-mail existe?', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Como saber se um e-mail existe',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="pt-br" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/pt-br/verificacao-de-email" className="hover:underline">Verificação de e-mail</Link> › Esse e-mail existe?
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Como saber se um e-mail existe: quatro métodos e um verificador
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Um e-mail existe se o servidor de e-mail do seu domínio aceita aquela caixa quando ela é
          proposta em uma conversa SMTP. Dá para perguntar sem enviar nenhuma mensagem: é o que a
          ferramenta abaixo faz em alguns segundos. Nos domínios catch-all, que aceitam tudo, são
          necessárias verificações adicionais, e ela também as executa.
        </p>
      </section>

      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Grátis, sem cadastro. A mesma ferramenta da página{' '}
          <Link href="/pt-br/verificacao-de-email" className="text-indigo-600 font-bold hover:underline">verificação de e-mail</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Método {i + 1}: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              É o método mais confiável e o mais rápido, com um limite: alguns servidores não respondem
              a remetentes desconhecidos (greylisting) ou respondem sim para tudo. No primeiro caso o
              resultado é &quot;desconhecido&quot; e vale repetir; no segundo o domínio é catch-all e é
              preciso o passo descrito mais abaixo.
            </p>
          )}
          {i === 1 && (
            <p className={proseP}>
              Um domínio com registros MX válidos e um servidor que responde é a base. Se falta, você
              pode descartar o endereço sem mais verificações. Se está lá, ainda precisa passar ao
              método 1 para a caixa específica.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>O que a verificação SMTP faz que os métodos manuais não fazem</h2>
        <p className={proseP}>
          Os métodos manuais checam sinais em volta do endereço: um padrão de nomes, a presença de um
          servidor, a ausência de um bounce. A verificação SMTP pergunta ao próprio servidor pela caixa
          específica e lê a resposta dele. É a única pergunta que o servidor responde diretamente, e é por
          isso que uma lista &quot;verificada&quot; só com formato e MX continua dando bounce. Em um domínio
          catch-all o servidor aceita todos os destinatários, então a mensagem não volta mesmo que a
          caixa não exista. A{' '}
          <Link href="/pt-br/verificacao-catch-all" className="text-indigo-600 font-bold hover:underline">
            verificação catch-all
          </Link>{' '}
          da Giggal analisa outros sinais do servidor e da caixa e devolve válido ou inválido também
          nesses casos.
        </p>
      </section>

      <section id="verdadeiro-ou-falso" className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Como saber se um e-mail é verdadeiro ou falso</h2>
        <p className={proseP}>
          Existir e ser verdadeiro são perguntas diferentes. A verificação confirma que a caixa existe;
          ela não diz se quem escreve é quem diz ser. Os sinais de um e-mail falso estão na mensagem, não
          no servidor: um nome de exibição que não combina com o domínio (um banco escrevendo de um
          endereço do Gmail), um domínio parecido com o verdadeiro trocando uma letra, urgência e pedido
          de pagamento ou de senha, um endereço de função que não existe no site da empresa. O que o
          verificador acrescenta é o que ele mede: se o domínio tem servidores de e-mail, se a caixa
          existe, se o endereço é descartável. Um remetente de um domínio sem MX ou de uma caixa
          descartável não é uma empresa real. Uma caixa válida, por outro lado, não torna o remetente
          honesto: vale como um sinal entre os outros, não como prova.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>O que fazer com um e-mail que não existe</h2>
        <p className={proseP}>
          Tire da lista e não insista: cada envio para uma caixa inexistente é um hard bounce, e os
          provedores contam os hard bounces para decidir se você é um remetente confiável. Se o contato
          importa, procure o endereço atual em vez de insistir no antigo. Para uma lista inteira, a
          verificação em massa faz essa limpeza em cada linha antes do envio.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Perguntas frequentes</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="pt-br" headline="Verifique a lista inteira" />
      <FooterL10n locale="pt-br" />
    </main>
  )
}
