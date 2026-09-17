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
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/es'

// The existence question: "como saber si un correo existe" PE 100 / KD 1,
// "como saber si un correo electronico existe" ES 40, "comprobar si existe un
// correo" ES 50 and the smaller phrasings (plans/10 section 2.2). Small on
// its own, but it is the prompt family the AI channel asks; the page answers
// in the first 60 words and embeds the checker.

const PATH = '/es/validar-correo/como-saber-si-un-correo-existe'
const DESC =
  'Cómo saber si un correo existe sin enviar un mensaje: comprobación SMTP, registros MX y búsqueda manual, con los límites de cada método y un verificador gratis.'

export const metadata: Metadata = {
  title: { absolute: '¿Cómo Saber si un Correo Existe? Guía y Verificador | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: '¿Cómo saber si un correo existe? Cuatro métodos y un verificador',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai validación de correo' }],
  },
}

const steps = [
  {
    name: 'Comprobación SMTP sin enviar un correo',
    text: 'Un verificador abre una conversación con el servidor de correo del dominio, indica el destinatario y lee el código de respuesta: 250 si el buzón se acepta, 550 si no existe. No se entrega ningún mensaje.',
  },
  {
    name: 'Consultar los registros MX del dominio',
    text: 'Si el dominio no publica registros MX, ningún buzón puede existir en él. Una consulta DNS lo dice en un segundo, pero un registro MX presente no prueba que el buzón concreto exista.',
  },
  {
    name: 'Buscar en la web o en LinkedIn',
    text: 'Para un contacto importante, busca el formato de las direcciones de la empresa (nombre.apellido@, inicial+apellido@) en su sitio o en perfiles públicos y compara. Lento, pero útil cuando el servidor responde "desconocido".',
  },
  {
    name: 'Enviar un mensaje y esperar el rebote (el método que falla)',
    text: 'Muchas guías lo recomiendan. En un dominio catch-all el servidor acepta cualquier destinatario y no rebota aunque el buzón no exista, así que la ausencia de rebote no confirma nada. Solo sirve en dominios que no son catch-all, y cada rebote daña tu reputación de envío.',
  },
]

const faqs: FaqItem[] = [
  {
    q: '¿Cómo saber si un correo electrónico existe sin enviar nada?',
    a: 'Con la comprobación SMTP: se pregunta al servidor de correo si el buzón existe y se lee la respuesta sin entregar ningún mensaje. Es el método que usa la herramienta de esta página.',
  },
  {
    q: '¿Cómo comprobar si existe un correo de Gmail?',
    a: 'Igual que cualquier otro: Gmail responde a la comprobación SMTP y confirma o rechaza el buzón. Escribe la dirección en el verificador de arriba; en unos segundos verás válido o no válido.',
  },
  {
    q: 'Si el mensaje no rebota, ¿el correo existe?',
    a: 'No necesariamente. En un dominio catch-all el servidor acepta cualquier dirección y no genera rebotes, así que la ausencia de rebote no dice nada. Hace falta la resolución catch-all.',
  },
  {
    q: '¿Cómo saber si un correo está activo?',
    a: 'Un buzón activo responde 250 a la comprobación SMTP. Si responde tarde o aplica greylisting, el resultado es "desconocido": vuelve a probar más tarde antes de descartarlo.',
  },
  {
    q: '¿Por qué el resultado dice "desconocido"?',
    a: 'El servidor no respondió a tiempo, aplica greylisting a remitentes nuevos o está detrás de un gateway de seguridad que acepta todo. Prueba más tarde o usa la verificación catch-all completa.',
  },
  {
    q: '¿Qué hago con un correo que no existe?',
    a: 'Quítalo de la lista y no vuelvas a enviar: cada intento a un buzón inexistente empeora la reputación de tu dominio. Si el contacto importa, busca su dirección actual.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ComoSaberSiUnCorreoExistePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('es', [
          { name: 'Validar correo', path: '/es/validar-correo' },
          { name: '¿Cómo saber si un correo existe?', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Cómo saber si un correo existe',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="es" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/es/validar-correo" className="hover:underline">Validar correo</Link> › ¿Existe este correo?
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          ¿Cómo saber si un correo existe? Cuatro métodos y un verificador
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Un correo existe si el servidor de correo de su dominio acepta ese buzón cuando se le propone
          en una conversación SMTP. Se puede preguntar sin enviar ningún mensaje: es lo que hace la
          herramienta de abajo en unos segundos. En los dominios catch-all, que aceptan todo, hacen falta
          comprobaciones adicionales, y también las ejecuta.
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
          Gratis, sin registro. La misma herramienta que la página{' '}
          <Link href="/es/validar-correo" className="text-indigo-600 font-bold hover:underline">validar correo</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Método {i + 1}: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              Es el método más fiable y el más rápido, con un límite: algunos servidores no responden a
              remitentes desconocidos (greylisting) o responden que sí a todo. En el primer caso el
              resultado es &quot;desconocido&quot; y conviene repetir; en el segundo el dominio es catch-all
              y hace falta el paso descrito más abajo.
            </p>
          )}
          {i === 1 && (
            <p className={proseP}>
              Un dominio con registros MX válidos y un servidor que responde es la base. Si falta, puedes
              descartar la dirección sin más comprobaciones. Si está, igual tienes que pasar al método 1
              para el buzón concreto.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Por qué &quot;el correo llegó&quot; no prueba nada en un dominio catch-all</h2>
        <p className={proseP}>
          En un dominio catch-all el servidor acepta todos los destinatarios, así que el mensaje no vuelve
          aunque el buzón no exista: termina en una carpeta que nadie lee o se descarta en silencio. La{' '}
          <Link href="/es/verificacion-catch-all" className="text-indigo-600 font-bold hover:underline">
            verificación catch-all
          </Link>{' '}
          de Giggal analiza otras señales del servidor y del buzón y devuelve válido o no válido también
          en estos casos.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Qué hacer con un correo que no existe</h2>
        <p className={proseP}>
          Quítalo de la lista y no insistas: cada envío a un buzón inexistente es un rebote duro, y los
          proveedores cuentan los rebotes duros para decidir si eres un remitente fiable. Si el contacto
          importa, busca su dirección actual en lugar de insistir con la antigua. Para una lista entera,
          la validación en bloque hace esta limpieza en cada fila antes del envío.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Preguntas frecuentes</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="es" headline="Valida toda tu lista" />
      <FooterL10n locale="es" />
    </main>
  )
}
