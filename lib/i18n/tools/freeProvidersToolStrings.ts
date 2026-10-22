// Labels and messages of the free email providers tool
// (components/tools/FreeEmailProviders/FreeEmailProvidersTool.tsx), one object
// per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/freeEmailProvidersStrings.ts.
//
// English is the original wording moved here unchanged. The download file names
// and the CSV header row are user-visible, so they are here too.
//
// Provider names, domains and country codes in lib/tools/freeEmailProviders.ts
// are data and stay as they are. The one company field that is a word rather
// than a name ("Various") can be translated with the optional companyNames map,
// keyed by provider name (the name is the provider's id in the data).
//
// Templates: a string with {slot} markers is filled by the tool with text or
// elements (links). Keep every slot in a translation.

import type { Locale } from '@/lib/i18n/clusters'
import type { FreeEmailProvider, ProviderKind } from '@/lib/tools/freeEmailProviders'

export interface FreeProvidersBannerParts {
  /** Number of domains on the list. */
  domains: number
  /** Number of providers on the list. */
  providers: number
  /** The date the list was checked, already formatted with dateLocale. */
  date: string
}

export interface FreeProvidersToolStrings {
  /** Line above the tool. */
  banner: (p: FreeProvidersBannerParts) => string
  /** Locale used to write the checked-on date (day, month name, year). */
  dateLocale: string
  checkLabel: string
  checkPlaceholder: string
  checkButton: string
  inputEmpty: string
  inputInvalid: string
  /** Result title when the domain is on the list. */
  isFree: (domain: string) => string
  /** First sentence of the result text. `company` is null when it equals the provider name. */
  belongsTo: (name: string, company: string | null) => string
  /** Second sentence of the result text: what each type of provider means for the address. */
  kindNotes: Record<ProviderKind, string>
  /** Result title when the domain isn't on the list. */
  notListed: (domain: string) => string
  /** Template: {mx} and {disposable} (links with mxLink and disposableLink). */
  notListedText: string
  mxLink: string
  /** The MX lookup page in this language; the tool adds ?domain=. */
  mxHref: string
  disposableLink: string
  /** The disposable email checker page in this language. */
  disposableHref: string
  browseLabel: string
  browsePlaceholder: string
  /** The filter buttons. */
  filters: Record<'all' | ProviderKind, string>
  /** The type badge in the table, also the "type" column of the CSV download. */
  kindLabels: Record<ProviderKind, string>
  /** Count line above the table. */
  showing: (domains: number, providers: number) => string
  copy: string
  copied: string
  thProvider: string
  thDomains: string
  /** Empty state of the table. */
  empty: string
  /** Download file names. */
  fileTxt: string
  fileCsv: string
  fileJson: string
  /** First row of the CSV download. Five columns: domain, provider, company, country, type. */
  csvHeader: string
  /** Company names that are words rather than names, by provider name. English leaves this out. */
  companyNames?: Record<string, string>
}

const enPlural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

const en: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains} domains from ${p.providers} providers. Every one had working MX records when we checked on ${p.date}.`,
  dateLocale: 'en-GB',
  checkLabel: 'Is this a free email domain?',
  checkPlaceholder: 'Enter a domain or an email address',
  checkButton: 'Check domain',
  inputEmpty: 'Enter a domain or an email address.',
  inputInvalid: 'That doesn’t look like a domain. Try something like gmail.com.',
  isFree: (domain) => `${domain} is a free email domain.`,
  belongsTo: (name, company) => `It belongs to ${name}${company ? `, run by ${company}` : ''}.`,
  kindNotes: {
    webmail: 'It’s a free webmail service that anyone can join.',
    privacy: 'It’s a private, encrypted email service.',
    isp: 'It comes with a home internet plan, so it’s a personal address too.',
  },
  notListed: (domain) => `${domain} isn’t on this list.`,
  notListedText:
    'It’s most likely a company, school or personal domain. It could also be a small free provider we don’t cover, or a disposable address service. You can {mx} or {disposable}.',
  mxLink: 'look up its mail servers',
  mxHref: '/mx-lookup',
  disposableLink: 'check if it’s disposable',
  disposableHref: '/disposable-email-checker',
  browseLabel: 'Browse the list',
  browsePlaceholder: 'Filter by domain or provider, e.g. hotmail or gmx',
  filters: {
    all: 'All',
    webmail: 'Free webmail',
    privacy: 'Private and encrypted',
    isp: 'Internet providers',
  },
  kindLabels: {
    webmail: 'Free webmail',
    privacy: 'Private and encrypted',
    isp: 'Internet provider',
  },
  showing: (domains, providers) => `Showing ${enPlural(domains, 'domain')} from ${enPlural(providers, 'provider')}`,
  copy: 'Copy domains',
  copied: 'Copied',
  thProvider: 'Provider',
  thDomains: 'Domains',
  empty: 'No domains match that filter.',
  fileTxt: 'free-email-domains.txt',
  fileCsv: 'free-email-domains.csv',
  fileJson: 'free-email-domains.json',
  csvHeader: 'domain,provider,company,country,type',
}

const esTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('es-ES')} ${p.domains === 1 ? 'dominio' : 'dominios'} de ${p.providers.toLocaleString('es-ES')} ${p.providers === 1 ? 'proveedor' : 'proveedores'}. ${p.domains === 1 ? 'Tenía registros MX que funcionaban cuando lo comprobamos' : 'Todos tenían registros MX que funcionaban cuando los comprobamos'} el ${p.date}.`,
  dateLocale: 'es',
  checkLabel: '¿Es un dominio de correo gratuito?',
  checkPlaceholder: 'Escribe un dominio o una dirección de correo',
  checkButton: 'Comprobar dominio',
  inputEmpty: 'Escribe un dominio o una dirección de correo.',
  inputInvalid: 'Eso no parece un dominio. Prueba con algo como gmail.com.',
  isFree: (domain) => `${domain} es un dominio de correo gratuito.`,
  belongsTo: (name, company) =>
    `Pertenece a ${name}${company ? `, gestionado por ${company === 'Varias empresas' ? 'varias empresas' : company}` : ''}.`,
  kindNotes: {
    webmail: 'Es un servicio de correo web gratuito, abierto a todo el mundo.',
    privacy: 'Es un servicio de correo privado y cifrado.',
    isp: 'Viene con la conexión a internet de casa, así que también es una dirección personal.',
  },
  notListed: (domain) => `${domain} no está en esta lista.`,
  notListedText:
    'Seguramente es el dominio de una empresa, una escuela o una persona. También podría ser un proveedor gratuito pequeño que no incluimos, o un servicio de correo desechable. Puedes {mx} o {disposable}.',
  mxLink: 'consultar sus servidores de correo',
  mxHref: '/mx-lookup',
  disposableLink: 'comprobar si es desechable',
  disposableHref: '/es/verificar-correo-desechable',
  browseLabel: 'Explorar la lista',
  browsePlaceholder: 'Filtra por dominio o proveedor, p. ej. hotmail o gmx',
  filters: {
    all: 'Todos',
    webmail: 'Correo web gratuito',
    privacy: 'Privado y cifrado',
    isp: 'Proveedores de internet',
  },
  kindLabels: {
    webmail: 'Correo web gratuito',
    privacy: 'Privado y cifrado',
    isp: 'Proveedor de internet',
  },
  showing: (domains, providers) =>
    `Mostrando ${domains.toLocaleString('es-ES')} ${domains === 1 ? 'dominio' : 'dominios'} de ${providers.toLocaleString('es-ES')} ${providers === 1 ? 'proveedor' : 'proveedores'}`,
  copy: 'Copiar dominios',
  copied: 'Copiados',
  thProvider: 'Proveedor',
  thDomains: 'Dominios',
  empty: 'Ningún dominio coincide con ese filtro.',
  fileTxt: 'dominios-correo-gratis.txt',
  fileCsv: 'dominios-correo-gratis.csv',
  fileJson: 'dominios-correo-gratis.json',
  csvHeader: 'dominio,proveedor,empresa,pais,tipo',
  companyNames: { 'Globo / Vivo': 'Varias empresas' },
}

export const FREE_PROVIDERS_TOOL_STRINGS: Partial<Record<Locale, FreeProvidersToolStrings>> & { en: FreeProvidersToolStrings } = { en, es: esTool }

export function freeProvidersToolStrings(locale: Locale): FreeProvidersToolStrings {
  return FREE_PROVIDERS_TOOL_STRINGS[locale] ?? en
}

/** The company behind a provider, translated where the data holds a word instead of a name. */
export function freeProviderCompany(t: FreeProvidersToolStrings, p: FreeEmailProvider): string {
  return t.companyNames?.[p.name] ?? p.company
}
