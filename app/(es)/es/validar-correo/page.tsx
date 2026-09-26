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
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/es'

// Spanish free checker, one page for every Spanish-speaking country. Primary
// "validar correo" (PE 1,300 / KD 0, CO 500 / 0, MX 1,300 / 22), with the
// verificar, verificador, validador and comprobar families (plans/10 section
// 2.2). Page 1 is ten single-address tool pages whose titles say "gratis" and
// "gratuitamente"; the copy says so in the first screen and uses both nouns,
// correo and email, because Spain types "email" and Latin America "correo".

const PATH = '/es/validar-correo'
const DESC =
  'Valida y verifica cualquier correo electrónico sin enviar un mensaje: sintaxis, MX, SMTP, catch-all y correos desechables en segundos. Gratis y sin registro.'

export const metadata: Metadata = {
  title: { absolute: 'Validar Correo: Verificador de Email Gratis | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: 'Validar correo: verificador de email gratis',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai validación de correo' }],
  },
  twitter: { card: 'summary_large_image', title: 'Validar correo: verificador de email gratis', description: DESC },
}

// The FAQ questions are pack rows (plans/10 section 8 item 3): "como saber si
// un correo existe" 100, "como verificar un correo electronico" 60, "como
// validar un correo electronico" 60, "qué es el verificador de email" 30,
// "como saber si un correo esta activo" 30.
const faqs: FaqItem[] = [
  {
    q: '¿Cómo saber si un correo existe?',
    a: 'Escríbelo arriba y pulsa Validar. El verificador consulta al servidor de correo del dominio si ese buzón existe y lee la respuesta, sin enviar ningún mensaje. En unos segundos tienes el resultado: válido, no válido o desconocido. La guía "¿Cómo saber si un correo existe?" explica los otros métodos y sus límites.',
  },
  {
    q: '¿Cómo verificar un correo electrónico sin enviar un mensaje?',
    a: 'Con una comprobación SMTP: el verificador abre una conversación con el servidor de correo, indica el destinatario y lee el código de respuesta (250 si el buzón se acepta, 550 si no existe). El destinatario no recibe nada.',
  },
  {
    q: '¿Cómo validar un correo electrónico de una lista entera?',
    a: 'No desde esta página. Regístrate, recibe 1.000 créditos gratis sin tarjeta y sube el archivo CSV o Excel: cada fila pasa las mismas comprobaciones que esta herramienta, catch-all incluido.',
  },
  {
    q: '¿Qué es el verificador de email y qué comprueba?',
    a: 'Es la herramienta de esta página. Comprueba la sintaxis, los registros MX del dominio, el buzón por SMTP y si el dominio es catch-all; además detecta correos desechables, cuentas de rol y proveedores gratuitos.',
  },
  {
    q: '¿Cómo saber si un correo está activo?',
    a: 'Un buzón activo responde 250 a la comprobación SMTP. Si el servidor responde tarde o aplica greylisting, el resultado es "desconocido": no significa que esté inactivo, vuelve a probar más tarde.',
  },
  {
    q: '¿Qué significa "catch-all"?',
    a: 'Un dominio catch-all (o accept-all) acepta correo para cualquier dirección, incluso inventada. Una comprobación estándar siempre recibe un sí y no puede saber si el buzón existe. Giggal hace comprobaciones adicionales y devuelve válido o no válido también en estos dominios.',
  },
  {
    q: '¿Funciona con Gmail, Outlook y Hotmail?',
    a: 'Sí. Gmail, Google Workspace, Outlook, Hotmail y Microsoft 365 responden de forma fiable. Algunos proveedores aplican greylisting a remitentes nuevos; en ese caso el resultado puede ser "desconocido" y conviene repetir la comprobación.',
  },
  {
    q: '¿Se guardan los correos que escribo?',
    a: 'La dirección solo se usa para hacer la comprobación. No se añade a ninguna lista ni se usa para enviar comunicaciones.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function ValidarCorreoPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n('es', [{ name: 'Validar correo', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={webApplicationL10n('es', PATH, 'Verificador de correo gratis de Giggal.ai', DESC)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="es" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Validar correo:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            verificador de correo electrónico gratis
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Comprueba si una dirección de correo existe y es válida: sintaxis, servidores de correo,
          buzón SMTP y dominios catch-all en segundos. No enviamos ningún mensaje a la dirección.
        </p>
      </section>

      {/* ── LA HERRAMIENTA ───────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Gratis, sin registro, sin tarjeta. Una dirección por comprobación, verificación SMTP completa.
        </p>
      </section>

      {/* ── QUÉ SIGNIFICA EL RESULTADO ───────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Qué significa el resultado</h2>
        <p className={proseP}>
          Cada comprobación termina con uno de tres resultados. <strong className="text-slate-900">Válido</strong>{' '}
          significa que el servidor confirmó el buzón y pasó las comprobaciones adicionales: un correo
          a esa dirección debería llegar. <strong className="text-slate-900">No válido</strong> significa
          que la sintaxis es incorrecta, el dominio no tiene servidores de correo o el servidor rechazó el
          buzón: produciría un rebote duro. <strong className="text-slate-900">Desconocido</strong> es raro
          e indica que el servidor no respondió a tiempo o aplica greylisting: vuelve a probar más tarde en
          lugar de darlo por muerto.
        </p>
        <p className={proseP}>
          Debajo del resultado están los detalles de los que depende la entrega: el proveedor (Google
          Workspace, Microsoft 365, un gateway como Proofpoint), el host MX que respondió, si la dirección
          es <strong className="text-slate-900">desechable</strong> (un buzón temporal que desaparecerá),{' '}
          <strong className="text-slate-900">de rol</strong> (info@, ventas@, soporte@: buzones compartidos,
          malos para el outreach) y si está en un <strong className="text-slate-900">proveedor gratuito</strong>{' '}
          como Gmail u Outlook, un dato útil al calificar contactos B2B.
        </p>
      </section>

      {/* ── CÓMO SABER SI UN CORREO EXISTE ───────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>¿Cómo saber si un correo existe?</h2>
        <p className={proseP}>
          Un correo existe si el servidor de su dominio acepta ese buzón cuando se le propone en una
          conversación SMTP. Se puede preguntar sin enviar nada: es lo que hace la herramienta de arriba.
          Antes de responder a un contacto escrito a mano, cuando un formulario rebota o para probar una
          dirección de una lista comprada, la pregunta es la misma. Los cuatro métodos que funcionan, con
          sus límites, están en la guía{' '}
          <Link href="/es/validar-correo/como-saber-si-un-correo-existe" className="text-indigo-600 font-bold hover:underline">
            ¿Cómo saber si un correo existe?
          </Link>
          .
        </p>
      </section>

      {/* ── VALIDADOR: QUÉ COMPRUEBA ─────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Validador de correo electrónico: qué comprueba paso a paso</h2>
        <p className={proseP}>
          Un validador de email serio tiene cuatro pasos.
          Las herramientas gratis que se quedan en el primero son la razón por la que tantas listas
          &quot;verificadas&quot; siguen rebotando.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>
            <strong className="text-slate-900">Sintaxis.</strong> La dirección está bien escrita: una sola
            arroba, una parte local válida, un dominio con extensión. Este paso encuentra errores de
            escritura y nada más.
          </li>
          <li>
            <strong className="text-slate-900">Registros MX.</strong> ¿El dominio publica servidores de
            correo? Sin registro MX ningún buzón puede existir, así que la dirección está muerta antes de
            enviar nada.
          </li>
          <li>
            <strong className="text-slate-900">Verificación SMTP del buzón.</strong> Abrimos una
            conversación con el servidor receptor, indicamos el destinatario y leemos la respuesta. Un
            código 250 significa que el buzón se acepta; un 550, que no existe.
          </li>
          <li>
            <strong className="text-slate-900">Resolución catch-all.</strong> Si el servidor dijo que sí
            también a una dirección inventada, el paso tres no demostró nada. Aquí la mayoría de los
            verificadores escribe &quot;catch-all&quot; y se detiene. Giggal analiza las señales que
            distinguen un buzón real de una respuesta accept-all y devuelve válido o no válido.
          </li>
        </ol>
        <p className={proseP}>
          El panel de arriba muestra cada paso mientras se completa, más el proveedor, el host MX y si la
          dirección es desechable, de rol o de un proveedor gratuito. Sirve para validar correo
          electrónico uno a uno; para verificar emails por miles está la validación en bloque.
        </p>
      </section>

      {/* ── COMPROBAR CORREO (ESPAÑA) ────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Comprobar correo: el verificador para España</h2>
        <p className={proseP}>
          En España se suele decir comprobar el correo; en México, Perú y Colombia, validar el correo.
          Es la misma comprobación: el verificador de email de esta página
          consulta el servidor del dominio, resuelve los dominios catch-all y funciona igual con
          direcciones de empresas españolas, de Gmail o de Outlook. No hay versiones por país: una sola
          herramienta para todo el español.
        </p>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Qué es un dominio catch-all y por qué otros verificadores dicen &quot;arriesgado&quot;</h2>
        <p className={proseP}>
          Detectar un dominio catch-all cuesta poco: la herramienta busca los servidores de correo, abre
          una conexión y propone una dirección al azar que casi seguro no existe. Si el servidor la acepta,
          el dominio acepta todo, y la respuesta llega en un solo intercambio. Por eso casi cualquier
          verificador gratis te dirá con gusto que un dominio es catch-all. Saber qué buzones son reales
          detrás de ese dominio es otro trabajo: hacen falta más sondas, más señales y una infraestructura
          con reputación de envío limpia. En una lista B2B las direcciones catch-all suelen ser un tercio de
          los contactos, y borrarlas en bloque tira clientes reales. Giggal las resuelve una por una y te
          dice cuáles conservar. El método está explicado en{' '}
          <Link href="/es/verificacion-catch-all" className="text-indigo-600 font-bold hover:underline">
            verificación catch-all
          </Link>
          .
        </p>
      </section>

      {/* ── LISTA ENTERA ─────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifica toda tu lista: bulk, API e integraciones</h2>
        <p className={proseP}>
          La comprobación individual sirve para una dirección a la vez. Para un archivo entero regístrate,
          sube el CSV y la validación en bloque ejecuta las mismas comprobaciones en cada fila, catch-all
          incluido. Los primeros 1.000 créditos son gratis, sin tarjeta. Los{' '}
          <Link href="/es/precios" className="text-indigo-600 font-bold hover:underline">
            precios
          </Link>{' '}
          empiezan en 9,90 $ por 10.000 validaciones. La misma comprobación está disponible como API REST
          y a través de las{' '}
          <Link href="/es/integraciones" className="text-indigo-600 font-bold hover:underline">
            integraciones
          </Link>{' '}
          con Zapier, n8n y HubSpot.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Preguntas frecuentes</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="es" headline="Valida toda tu lista" />

      {/* ── ENLACES ──────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/es/validar-correo/como-saber-si-un-correo-existe', label: '¿Cómo saber si un correo existe? Cuatro métodos' },
            { href: '/es/verificacion-catch-all', label: 'Verificación catch-all y direcciones arriesgadas' },
            { href: '/es/precios', label: 'Precios y créditos' },
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

      <FooterL10n locale="es" />
    </main>
  )
}
