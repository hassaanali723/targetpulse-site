// The glossary: one cluster per term so hreflang, the sitemaps, the language
// switcher and localizeHref() all see the six versions as one page. Generated
// from the term list agreed on 29 Sep 2026 (SEO-Plan/Giggal-Blog-Keywords.xlsx,
// Glossary tab). Localized slugs follow the phrase people search in that
// language (Ahrefs exports in SEO-Plan/ahrefs-exported-files/GLOSSARY).
import type { Cluster, Locale } from '@/lib/i18n/clusters'

export const GLOSSARY_HUB: Record<Locale, string> = {
  en: '/glossary', it: '/it/glossario', de: '/de/glossar', es: '/es/glosario', 'pt-br': '/pt-br/glossario', fr: '/fr/glossaire',
}

export type GlossaryCategory = 'results' | 'bounces' | 'authentication' | 'deliverability' | 'lists' | 'blacklists' | 'infrastructure'
export const GLOSSARY_CATEGORIES: GlossaryCategory[] = ['results', 'bounces', 'authentication', 'deliverability', 'lists', 'blacklists', 'infrastructure']

/** English slug -> category and the slug used in each other language. */
export const GLOSSARY_TERMS: Record<string, { category: GlossaryCategory; it: string; de: string; es: string; 'pt-br': string; fr: string }> = {
  'valid-email': { category: 'results', it: 'email-valida', de: 'gueltige-e-mail-adresse', es: 'correo-valido', 'pt-br': 'e-mail-valido', fr: 'adresse-mail-valide' },
  'invalid-email': { category: 'results', it: 'email-non-valida', de: 'ungueltige-e-mail-adresse', es: 'correo-no-valido', 'pt-br': 'e-mail-invalido', fr: 'adresse-mail-invalide' },
  'risky-email': { category: 'results', it: 'email-rischiosa', de: 'riskante-e-mail', es: 'correo-arriesgado', 'pt-br': 'e-mail-arriscado', fr: 'email-risque' },
  'unknown-email-result': { category: 'results', it: 'risultato-sconosciuto', de: 'unbekanntes-ergebnis', es: 'resultado-desconocido', 'pt-br': 'resultado-desconhecido', fr: 'resultat-inconnu' },
  'catch-all-email': { category: 'results', it: 'email-catch-all', de: 'catch-all-e-mail', es: 'correo-catch-all', 'pt-br': 'e-mail-catch-all', fr: 'email-catch-all' },
  'disposable-email': { category: 'results', it: 'email-temporanea', de: 'wegwerf-e-mail-adresse', es: 'correo-desechable', 'pt-br': 'e-mail-descartavel', fr: 'adresse-mail-jetable' },
  'role-based-email': { category: 'results', it: 'indirizzo-email-di-ruolo', de: 'rollenbasierte-e-mail-adresse', es: 'correo-de-rol', 'pt-br': 'e-mail-de-funcao', fr: 'adresse-mail-de-role' },
  'spam-trap': { category: 'results', it: 'spam-trap', de: 'spam-trap', es: 'spam-trap', 'pt-br': 'spam-trap', fr: 'spam-trap' },
  'honeypot': { category: 'results', it: 'honeypot', de: 'honeypot', es: 'honeypot', 'pt-br': 'honeypot', fr: 'honeypot' },
  'typo-domain': { category: 'results', it: 'dominio-con-errore-di-battitura', de: 'tippfehler-domain', es: 'dominio-con-error-tipografico', 'pt-br': 'dominio-com-erro-de-digitacao', fr: 'domaine-avec-faute-de-frappe' },
  'email-bounce': { category: 'bounces', it: 'rimbalzo-email', de: 'e-mail-bounce', es: 'rebote-de-correo', 'pt-br': 'bounce-de-e-mail', fr: 'rebond-email' },
  'hard-bounce': { category: 'bounces', it: 'hard-bounce', de: 'hard-bounce', es: 'hard-bounce', 'pt-br': 'hard-bounce', fr: 'hard-bounce' },
  'soft-bounce': { category: 'bounces', it: 'soft-bounce', de: 'soft-bounce', es: 'soft-bounce', 'pt-br': 'soft-bounce', fr: 'soft-bounce' },
  'bounce-rate': { category: 'bounces', it: 'tasso-di-rimbalzo-email', de: 'bounce-rate', es: 'tasa-de-rebote', 'pt-br': 'taxa-de-bounce', fr: 'taux-de-rebond-email' },
  'undeliverable': { category: 'bounces', it: 'email-non-consegnata', de: 'e-mail-unzustellbar', es: 'correo-no-entregado', 'pt-br': 'e-mail-nao-entregue', fr: 'email-non-delivre' },
  'mailer-daemon': { category: 'bounces', it: 'mailer-daemon', de: 'mailer-daemon', es: 'mailer-daemon', 'pt-br': 'mailer-daemon', fr: 'mailer-daemon' },
  'ndr': { category: 'bounces', it: 'mancato-recapito', de: 'unzustellbarkeitsbericht', es: 'informe-de-no-entrega', 'pt-br': 'relatorio-de-nao-entrega', fr: 'rapport-de-non-remise' },
  'smtp-error-codes': { category: 'bounces', it: 'codici-errore-smtp', de: 'smtp-fehlercodes', es: 'codigos-de-error-smtp', 'pt-br': 'codigos-de-erro-smtp', fr: 'codes-erreur-smtp' },
  'mailbox-full': { category: 'bounces', it: 'casella-email-piena', de: 'postfach-voll', es: 'buzon-lleno', 'pt-br': 'caixa-de-entrada-cheia', fr: 'boite-mail-pleine' },
  'backscatter': { category: 'bounces', it: 'backscatter', de: 'backscatter', es: 'backscatter', 'pt-br': 'backscatter', fr: 'backscatter' },
  'spf': { category: 'authentication', it: 'record-spf', de: 'spf-eintrag', es: 'registro-spf', 'pt-br': 'registro-spf', fr: 'enregistrement-spf' },
  'dkim': { category: 'authentication', it: 'dkim', de: 'dkim', es: 'dkim', 'pt-br': 'dkim', fr: 'dkim' },
  'dmarc': { category: 'authentication', it: 'dmarc', de: 'dmarc', es: 'dmarc', 'pt-br': 'dmarc', fr: 'dmarc' },
  'dmarc-alignment': { category: 'authentication', it: 'allineamento-dmarc', de: 'dmarc-alignment', es: 'alineacion-dmarc', 'pt-br': 'alinhamento-dmarc', fr: 'alignement-dmarc' },
  'bimi': { category: 'authentication', it: 'bimi', de: 'bimi', es: 'bimi', 'pt-br': 'bimi', fr: 'bimi' },
  'dns-txt-record': { category: 'authentication', it: 'record-txt-dns', de: 'dns-txt-eintrag', es: 'registro-txt-dns', 'pt-br': 'registro-txt-dns', fr: 'enregistrement-txt-dns' },
  'mx-record': { category: 'authentication', it: 'record-mx', de: 'mx-eintrag', es: 'registro-mx', 'pt-br': 'registro-mx', fr: 'enregistrement-mx' },
  'ptr-record': { category: 'authentication', it: 'record-ptr', de: 'ptr-eintrag', es: 'registro-ptr', 'pt-br': 'registro-ptr', fr: 'enregistrement-ptr' },
  'return-path': { category: 'authentication', it: 'return-path', de: 'return-path', es: 'return-path', 'pt-br': 'return-path', fr: 'return-path' },
  'email-spoofing': { category: 'authentication', it: 'email-spoofing', de: 'e-mail-spoofing', es: 'suplantacion-de-correo', 'pt-br': 'spoofing-de-e-mail', fr: 'usurpation-email' },
  'deliverability': { category: 'deliverability', it: 'deliverability-email', de: 'e-mail-zustellbarkeit', es: 'entregabilidad-de-correo', 'pt-br': 'entregabilidade-de-e-mail', fr: 'delivrabilite-email' },
  'inbox-placement': { category: 'deliverability', it: 'consegna-in-inbox', de: 'inbox-placement', es: 'inbox-placement', 'pt-br': 'inbox-placement', fr: 'placement-en-boite-de-reception' },
  'sender-reputation': { category: 'deliverability', it: 'reputazione-mittente', de: 'absender-reputation', es: 'reputacion-del-remitente', 'pt-br': 'reputacao-do-remetente', fr: 'reputation-expediteur' },
  'domain-reputation': { category: 'deliverability', it: 'reputazione-dominio', de: 'domain-reputation', es: 'reputacion-del-dominio', 'pt-br': 'reputacao-do-dominio', fr: 'reputation-de-domaine' },
  'ip-reputation': { category: 'deliverability', it: 'reputazione-ip', de: 'ip-reputation', es: 'reputacion-ip', 'pt-br': 'reputacao-de-ip', fr: 'reputation-ip' },
  'email-warmup': { category: 'deliverability', it: 'warm-up-email', de: 'e-mail-warmup', es: 'calentamiento-de-correo', 'pt-br': 'aquecimento-de-e-mail', fr: 'warm-up-email' },
  'ip-warming': { category: 'deliverability', it: 'riscaldamento-ip', de: 'ip-warming', es: 'calentamiento-de-ip', 'pt-br': 'aquecimento-de-ip', fr: 'warm-up-ip' },
  'greylisting': { category: 'deliverability', it: 'greylisting', de: 'greylisting', es: 'greylisting', 'pt-br': 'greylisting', fr: 'greylisting' },
  'throttling': { category: 'deliverability', it: 'throttling-email', de: 'e-mail-throttling', es: 'throttling-correo', 'pt-br': 'throttling-e-mail', fr: 'throttling-email' },
  'spam-filter': { category: 'deliverability', it: 'filtro-antispam', de: 'spamfilter', es: 'filtro-de-spam', 'pt-br': 'filtro-de-spam', fr: 'filtre-anti-spam' },
  'spam-score': { category: 'deliverability', it: 'punteggio-spam', de: 'spam-score', es: 'puntuacion-de-spam', 'pt-br': 'pontuacao-de-spam', fr: 'score-de-spam' },
  'complaint-rate': { category: 'deliverability', it: 'tasso-di-segnalazioni-spam', de: 'beschwerderate', es: 'tasa-de-quejas-de-spam', 'pt-br': 'taxa-de-reclamacao-de-spam', fr: 'taux-de-plainte-spam' },
  'list-cleaning': { category: 'lists', it: 'pulizia-lista-email', de: 'e-mail-liste-bereinigen', es: 'limpieza-de-lista-de-correo', 'pt-br': 'limpeza-de-lista-de-e-mail', fr: 'nettoyage-liste-email' },
  'email-hygiene': { category: 'lists', it: 'igiene-lista-email', de: 'listenhygiene', es: 'higiene-de-lista-de-correo', 'pt-br': 'higiene-de-lista-de-e-mail', fr: 'hygiene-liste-email' },
  'suppression-list': { category: 'lists', it: 'lista-di-soppressione', de: 'sperrliste', es: 'lista-de-supresion', 'pt-br': 'lista-de-supressao', fr: 'liste-de-suppression' },
  'double-opt-in': { category: 'lists', it: 'double-opt-in', de: 'double-opt-in', es: 'doble-opt-in', 'pt-br': 'double-opt-in', fr: 'double-opt-in' },
  'single-opt-in': { category: 'lists', it: 'single-opt-in', de: 'single-opt-in', es: 'single-opt-in', 'pt-br': 'single-opt-in', fr: 'simple-opt-in' },
  'list-unsubscribe': { category: 'lists', it: 'list-unsubscribe', de: 'list-unsubscribe', es: 'list-unsubscribe', 'pt-br': 'list-unsubscribe', fr: 'list-unsubscribe' },
  'feedback-loop': { category: 'lists', it: 'feedback-loop', de: 'feedback-loop', es: 'feedback-loop', 'pt-br': 'feedback-loop', fr: 'feedback-loop' },
  'unsubscribe-rate': { category: 'lists', it: 'tasso-di-disiscrizione', de: 'abmelderate', es: 'tasa-de-bajas', 'pt-br': 'taxa-de-descadastro', fr: 'taux-de-desabonnement' },
  'seed-list': { category: 'lists', it: 'seed-list', de: 'seed-list', es: 'seed-list', 'pt-br': 'seed-list', fr: 'seed-list' },
  'email-list-decay': { category: 'lists', it: 'decadimento-lista-email', de: 'e-mail-liste-veraltet', es: 'degradacion-de-lista-de-correo', 'pt-br': 'decaimento-de-lista-de-e-mail', fr: 'declin-liste-email' },
  'email-blacklist': { category: 'blacklists', it: 'blacklist-email', de: 'e-mail-blacklist', es: 'lista-negra-de-correo', 'pt-br': 'blacklist-de-e-mail', fr: 'blacklist-email' },
  'blocklist': { category: 'blacklists', it: 'blocklist', de: 'blocklist', es: 'blocklist', 'pt-br': 'blocklist', fr: 'blocklist' },
  'dnsbl': { category: 'blacklists', it: 'dnsbl', de: 'dnsbl', es: 'dnsbl', 'pt-br': 'dnsbl', fr: 'dnsbl' },
  'postmaster-tools': { category: 'blacklists', it: 'google-postmaster-tools', de: 'google-postmaster-tools', es: 'google-postmaster-tools', 'pt-br': 'google-postmaster-tools', fr: 'google-postmaster-tools' },
  'smtp': { category: 'infrastructure', it: 'smtp', de: 'smtp', es: 'smtp', 'pt-br': 'smtp', fr: 'smtp' },
  'mta': { category: 'infrastructure', it: 'mail-transfer-agent', de: 'mail-transfer-agent', es: 'agente-de-transferencia-de-correo', 'pt-br': 'agente-de-transferencia-de-e-mail', fr: 'agent-de-transfert-de-courrier' },
  'esp': { category: 'infrastructure', it: 'email-service-provider', de: 'e-mail-service-provider', es: 'proveedor-de-servicios-de-correo', 'pt-br': 'provedor-de-e-mail', fr: 'fournisseur-de-service-email' },
  'secure-email-gateway': { category: 'infrastructure', it: 'secure-email-gateway', de: 'secure-email-gateway', es: 'secure-email-gateway', 'pt-br': 'secure-email-gateway', fr: 'passerelle-de-messagerie-securisee' },
}

/** The English slug for a localized slug, or undefined. */
export function glossaryEnSlug(locale: Locale, slug: string): string | undefined {
  if (locale === 'en') return slug in GLOSSARY_TERMS ? slug : undefined
  for (const [en, t] of Object.entries(GLOSSARY_TERMS)) if (t[locale] === slug) return en
  return undefined
}

/** The slug of `en` in `locale`. */
export function glossaryLocalSlug(en: string, locale: Locale): string {
  return locale === 'en' ? en : GLOSSARY_TERMS[en][locale]
}

// One cluster per term. Spread into CLUSTERS in lib/i18n/clusters.ts.
export const GLOSSARY_CLUSTERS = {
  glossary: { en: '/glossary', it: '/it/glossario', de: '/de/glossar', es: '/es/glosario', 'pt-br': '/pt-br/glossario', fr: '/fr/glossaire' },
  glossValidEmail: { en: '/glossary/valid-email', it: '/it/glossario/email-valida', de: '/de/glossar/gueltige-e-mail-adresse', es: '/es/glosario/correo-valido', 'pt-br': '/pt-br/glossario/e-mail-valido', fr: '/fr/glossaire/adresse-mail-valide' },
  glossInvalidEmail: { en: '/glossary/invalid-email', it: '/it/glossario/email-non-valida', de: '/de/glossar/ungueltige-e-mail-adresse', es: '/es/glosario/correo-no-valido', 'pt-br': '/pt-br/glossario/e-mail-invalido', fr: '/fr/glossaire/adresse-mail-invalide' },
  glossRiskyEmail: { en: '/glossary/risky-email', it: '/it/glossario/email-rischiosa', de: '/de/glossar/riskante-e-mail', es: '/es/glosario/correo-arriesgado', 'pt-br': '/pt-br/glossario/e-mail-arriscado', fr: '/fr/glossaire/email-risque' },
  glossUnknownEmailResult: { en: '/glossary/unknown-email-result', it: '/it/glossario/risultato-sconosciuto', de: '/de/glossar/unbekanntes-ergebnis', es: '/es/glosario/resultado-desconocido', 'pt-br': '/pt-br/glossario/resultado-desconhecido', fr: '/fr/glossaire/resultat-inconnu' },
  glossCatchAllEmail: { en: '/glossary/catch-all-email', it: '/it/glossario/email-catch-all', de: '/de/glossar/catch-all-e-mail', es: '/es/glosario/correo-catch-all', 'pt-br': '/pt-br/glossario/e-mail-catch-all', fr: '/fr/glossaire/email-catch-all' },
  glossDisposableEmail: { en: '/glossary/disposable-email', it: '/it/glossario/email-temporanea', de: '/de/glossar/wegwerf-e-mail-adresse', es: '/es/glosario/correo-desechable', 'pt-br': '/pt-br/glossario/e-mail-descartavel', fr: '/fr/glossaire/adresse-mail-jetable' },
  glossRoleBasedEmail: { en: '/glossary/role-based-email', it: '/it/glossario/indirizzo-email-di-ruolo', de: '/de/glossar/rollenbasierte-e-mail-adresse', es: '/es/glosario/correo-de-rol', 'pt-br': '/pt-br/glossario/e-mail-de-funcao', fr: '/fr/glossaire/adresse-mail-de-role' },
  glossSpamTrap: { en: '/glossary/spam-trap', it: '/it/glossario/spam-trap', de: '/de/glossar/spam-trap', es: '/es/glosario/spam-trap', 'pt-br': '/pt-br/glossario/spam-trap', fr: '/fr/glossaire/spam-trap' },
  glossHoneypot: { en: '/glossary/honeypot', it: '/it/glossario/honeypot', de: '/de/glossar/honeypot', es: '/es/glosario/honeypot', 'pt-br': '/pt-br/glossario/honeypot', fr: '/fr/glossaire/honeypot' },
  glossTypoDomain: { en: '/glossary/typo-domain', it: '/it/glossario/dominio-con-errore-di-battitura', de: '/de/glossar/tippfehler-domain', es: '/es/glosario/dominio-con-error-tipografico', 'pt-br': '/pt-br/glossario/dominio-com-erro-de-digitacao', fr: '/fr/glossaire/domaine-avec-faute-de-frappe' },
  glossEmailBounce: { en: '/glossary/email-bounce', it: '/it/glossario/rimbalzo-email', de: '/de/glossar/e-mail-bounce', es: '/es/glosario/rebote-de-correo', 'pt-br': '/pt-br/glossario/bounce-de-e-mail', fr: '/fr/glossaire/rebond-email' },
  glossHardBounce: { en: '/glossary/hard-bounce', it: '/it/glossario/hard-bounce', de: '/de/glossar/hard-bounce', es: '/es/glosario/hard-bounce', 'pt-br': '/pt-br/glossario/hard-bounce', fr: '/fr/glossaire/hard-bounce' },
  glossSoftBounce: { en: '/glossary/soft-bounce', it: '/it/glossario/soft-bounce', de: '/de/glossar/soft-bounce', es: '/es/glosario/soft-bounce', 'pt-br': '/pt-br/glossario/soft-bounce', fr: '/fr/glossaire/soft-bounce' },
  glossBounceRate: { en: '/glossary/bounce-rate', it: '/it/glossario/tasso-di-rimbalzo-email', de: '/de/glossar/bounce-rate', es: '/es/glosario/tasa-de-rebote', 'pt-br': '/pt-br/glossario/taxa-de-bounce', fr: '/fr/glossaire/taux-de-rebond-email' },
  glossUndeliverable: { en: '/glossary/undeliverable', it: '/it/glossario/email-non-consegnata', de: '/de/glossar/e-mail-unzustellbar', es: '/es/glosario/correo-no-entregado', 'pt-br': '/pt-br/glossario/e-mail-nao-entregue', fr: '/fr/glossaire/email-non-delivre' },
  glossMailerDaemon: { en: '/glossary/mailer-daemon', it: '/it/glossario/mailer-daemon', de: '/de/glossar/mailer-daemon', es: '/es/glosario/mailer-daemon', 'pt-br': '/pt-br/glossario/mailer-daemon', fr: '/fr/glossaire/mailer-daemon' },
  glossNdr: { en: '/glossary/ndr', it: '/it/glossario/mancato-recapito', de: '/de/glossar/unzustellbarkeitsbericht', es: '/es/glosario/informe-de-no-entrega', 'pt-br': '/pt-br/glossario/relatorio-de-nao-entrega', fr: '/fr/glossaire/rapport-de-non-remise' },
  glossSmtpErrorCodes: { en: '/glossary/smtp-error-codes', it: '/it/glossario/codici-errore-smtp', de: '/de/glossar/smtp-fehlercodes', es: '/es/glosario/codigos-de-error-smtp', 'pt-br': '/pt-br/glossario/codigos-de-erro-smtp', fr: '/fr/glossaire/codes-erreur-smtp' },
  glossMailboxFull: { en: '/glossary/mailbox-full', it: '/it/glossario/casella-email-piena', de: '/de/glossar/postfach-voll', es: '/es/glosario/buzon-lleno', 'pt-br': '/pt-br/glossario/caixa-de-entrada-cheia', fr: '/fr/glossaire/boite-mail-pleine' },
  glossBackscatter: { en: '/glossary/backscatter', it: '/it/glossario/backscatter', de: '/de/glossar/backscatter', es: '/es/glosario/backscatter', 'pt-br': '/pt-br/glossario/backscatter', fr: '/fr/glossaire/backscatter' },
  glossSpf: { en: '/glossary/spf', it: '/it/glossario/record-spf', de: '/de/glossar/spf-eintrag', es: '/es/glosario/registro-spf', 'pt-br': '/pt-br/glossario/registro-spf', fr: '/fr/glossaire/enregistrement-spf' },
  glossDkim: { en: '/glossary/dkim', it: '/it/glossario/dkim', de: '/de/glossar/dkim', es: '/es/glosario/dkim', 'pt-br': '/pt-br/glossario/dkim', fr: '/fr/glossaire/dkim' },
  glossDmarc: { en: '/glossary/dmarc', it: '/it/glossario/dmarc', de: '/de/glossar/dmarc', es: '/es/glosario/dmarc', 'pt-br': '/pt-br/glossario/dmarc', fr: '/fr/glossaire/dmarc' },
  glossDmarcAlignment: { en: '/glossary/dmarc-alignment', it: '/it/glossario/allineamento-dmarc', de: '/de/glossar/dmarc-alignment', es: '/es/glosario/alineacion-dmarc', 'pt-br': '/pt-br/glossario/alinhamento-dmarc', fr: '/fr/glossaire/alignement-dmarc' },
  glossBimi: { en: '/glossary/bimi', it: '/it/glossario/bimi', de: '/de/glossar/bimi', es: '/es/glosario/bimi', 'pt-br': '/pt-br/glossario/bimi', fr: '/fr/glossaire/bimi' },
  glossDnsTxtRecord: { en: '/glossary/dns-txt-record', it: '/it/glossario/record-txt-dns', de: '/de/glossar/dns-txt-eintrag', es: '/es/glosario/registro-txt-dns', 'pt-br': '/pt-br/glossario/registro-txt-dns', fr: '/fr/glossaire/enregistrement-txt-dns' },
  glossMxRecord: { en: '/glossary/mx-record', it: '/it/glossario/record-mx', de: '/de/glossar/mx-eintrag', es: '/es/glosario/registro-mx', 'pt-br': '/pt-br/glossario/registro-mx', fr: '/fr/glossaire/enregistrement-mx' },
  glossPtrRecord: { en: '/glossary/ptr-record', it: '/it/glossario/record-ptr', de: '/de/glossar/ptr-eintrag', es: '/es/glosario/registro-ptr', 'pt-br': '/pt-br/glossario/registro-ptr', fr: '/fr/glossaire/enregistrement-ptr' },
  glossReturnPath: { en: '/glossary/return-path', it: '/it/glossario/return-path', de: '/de/glossar/return-path', es: '/es/glosario/return-path', 'pt-br': '/pt-br/glossario/return-path', fr: '/fr/glossaire/return-path' },
  glossEmailSpoofing: { en: '/glossary/email-spoofing', it: '/it/glossario/email-spoofing', de: '/de/glossar/e-mail-spoofing', es: '/es/glosario/suplantacion-de-correo', 'pt-br': '/pt-br/glossario/spoofing-de-e-mail', fr: '/fr/glossaire/usurpation-email' },
  glossDeliverability: { en: '/glossary/deliverability', it: '/it/glossario/deliverability-email', de: '/de/glossar/e-mail-zustellbarkeit', es: '/es/glosario/entregabilidad-de-correo', 'pt-br': '/pt-br/glossario/entregabilidade-de-e-mail', fr: '/fr/glossaire/delivrabilite-email' },
  glossInboxPlacement: { en: '/glossary/inbox-placement', it: '/it/glossario/consegna-in-inbox', de: '/de/glossar/inbox-placement', es: '/es/glosario/inbox-placement', 'pt-br': '/pt-br/glossario/inbox-placement', fr: '/fr/glossaire/placement-en-boite-de-reception' },
  glossSenderReputation: { en: '/glossary/sender-reputation', it: '/it/glossario/reputazione-mittente', de: '/de/glossar/absender-reputation', es: '/es/glosario/reputacion-del-remitente', 'pt-br': '/pt-br/glossario/reputacao-do-remetente', fr: '/fr/glossaire/reputation-expediteur' },
  glossDomainReputation: { en: '/glossary/domain-reputation', it: '/it/glossario/reputazione-dominio', de: '/de/glossar/domain-reputation', es: '/es/glosario/reputacion-del-dominio', 'pt-br': '/pt-br/glossario/reputacao-do-dominio', fr: '/fr/glossaire/reputation-de-domaine' },
  glossIpReputation: { en: '/glossary/ip-reputation', it: '/it/glossario/reputazione-ip', de: '/de/glossar/ip-reputation', es: '/es/glosario/reputacion-ip', 'pt-br': '/pt-br/glossario/reputacao-de-ip', fr: '/fr/glossaire/reputation-ip' },
  glossEmailWarmup: { en: '/glossary/email-warmup', it: '/it/glossario/warm-up-email', de: '/de/glossar/e-mail-warmup', es: '/es/glosario/calentamiento-de-correo', 'pt-br': '/pt-br/glossario/aquecimento-de-e-mail', fr: '/fr/glossaire/warm-up-email' },
  glossIpWarming: { en: '/glossary/ip-warming', it: '/it/glossario/riscaldamento-ip', de: '/de/glossar/ip-warming', es: '/es/glosario/calentamiento-de-ip', 'pt-br': '/pt-br/glossario/aquecimento-de-ip', fr: '/fr/glossaire/warm-up-ip' },
  glossGreylisting: { en: '/glossary/greylisting', it: '/it/glossario/greylisting', de: '/de/glossar/greylisting', es: '/es/glosario/greylisting', 'pt-br': '/pt-br/glossario/greylisting', fr: '/fr/glossaire/greylisting' },
  glossThrottling: { en: '/glossary/throttling', it: '/it/glossario/throttling-email', de: '/de/glossar/e-mail-throttling', es: '/es/glosario/throttling-correo', 'pt-br': '/pt-br/glossario/throttling-e-mail', fr: '/fr/glossaire/throttling-email' },
  glossSpamFilter: { en: '/glossary/spam-filter', it: '/it/glossario/filtro-antispam', de: '/de/glossar/spamfilter', es: '/es/glosario/filtro-de-spam', 'pt-br': '/pt-br/glossario/filtro-de-spam', fr: '/fr/glossaire/filtre-anti-spam' },
  glossSpamScore: { en: '/glossary/spam-score', it: '/it/glossario/punteggio-spam', de: '/de/glossar/spam-score', es: '/es/glosario/puntuacion-de-spam', 'pt-br': '/pt-br/glossario/pontuacao-de-spam', fr: '/fr/glossaire/score-de-spam' },
  glossComplaintRate: { en: '/glossary/complaint-rate', it: '/it/glossario/tasso-di-segnalazioni-spam', de: '/de/glossar/beschwerderate', es: '/es/glosario/tasa-de-quejas-de-spam', 'pt-br': '/pt-br/glossario/taxa-de-reclamacao-de-spam', fr: '/fr/glossaire/taux-de-plainte-spam' },
  glossListCleaning: { en: '/glossary/list-cleaning', it: '/it/glossario/pulizia-lista-email', de: '/de/glossar/e-mail-liste-bereinigen', es: '/es/glosario/limpieza-de-lista-de-correo', 'pt-br': '/pt-br/glossario/limpeza-de-lista-de-e-mail', fr: '/fr/glossaire/nettoyage-liste-email' },
  glossEmailHygiene: { en: '/glossary/email-hygiene', it: '/it/glossario/igiene-lista-email', de: '/de/glossar/listenhygiene', es: '/es/glosario/higiene-de-lista-de-correo', 'pt-br': '/pt-br/glossario/higiene-de-lista-de-e-mail', fr: '/fr/glossaire/hygiene-liste-email' },
  glossSuppressionList: { en: '/glossary/suppression-list', it: '/it/glossario/lista-di-soppressione', de: '/de/glossar/sperrliste', es: '/es/glosario/lista-de-supresion', 'pt-br': '/pt-br/glossario/lista-de-supressao', fr: '/fr/glossaire/liste-de-suppression' },
  glossDoubleOptIn: { en: '/glossary/double-opt-in', it: '/it/glossario/double-opt-in', de: '/de/glossar/double-opt-in', es: '/es/glosario/doble-opt-in', 'pt-br': '/pt-br/glossario/double-opt-in', fr: '/fr/glossaire/double-opt-in' },
  glossSingleOptIn: { en: '/glossary/single-opt-in', it: '/it/glossario/single-opt-in', de: '/de/glossar/single-opt-in', es: '/es/glosario/single-opt-in', 'pt-br': '/pt-br/glossario/single-opt-in', fr: '/fr/glossaire/simple-opt-in' },
  glossListUnsubscribe: { en: '/glossary/list-unsubscribe', it: '/it/glossario/list-unsubscribe', de: '/de/glossar/list-unsubscribe', es: '/es/glosario/list-unsubscribe', 'pt-br': '/pt-br/glossario/list-unsubscribe', fr: '/fr/glossaire/list-unsubscribe' },
  glossFeedbackLoop: { en: '/glossary/feedback-loop', it: '/it/glossario/feedback-loop', de: '/de/glossar/feedback-loop', es: '/es/glosario/feedback-loop', 'pt-br': '/pt-br/glossario/feedback-loop', fr: '/fr/glossaire/feedback-loop' },
  glossUnsubscribeRate: { en: '/glossary/unsubscribe-rate', it: '/it/glossario/tasso-di-disiscrizione', de: '/de/glossar/abmelderate', es: '/es/glosario/tasa-de-bajas', 'pt-br': '/pt-br/glossario/taxa-de-descadastro', fr: '/fr/glossaire/taux-de-desabonnement' },
  glossSeedList: { en: '/glossary/seed-list', it: '/it/glossario/seed-list', de: '/de/glossar/seed-list', es: '/es/glosario/seed-list', 'pt-br': '/pt-br/glossario/seed-list', fr: '/fr/glossaire/seed-list' },
  glossEmailListDecay: { en: '/glossary/email-list-decay', it: '/it/glossario/decadimento-lista-email', de: '/de/glossar/e-mail-liste-veraltet', es: '/es/glosario/degradacion-de-lista-de-correo', 'pt-br': '/pt-br/glossario/decaimento-de-lista-de-e-mail', fr: '/fr/glossaire/declin-liste-email' },
  glossEmailBlacklist: { en: '/glossary/email-blacklist', it: '/it/glossario/blacklist-email', de: '/de/glossar/e-mail-blacklist', es: '/es/glosario/lista-negra-de-correo', 'pt-br': '/pt-br/glossario/blacklist-de-e-mail', fr: '/fr/glossaire/blacklist-email' },
  glossBlocklist: { en: '/glossary/blocklist', it: '/it/glossario/blocklist', de: '/de/glossar/blocklist', es: '/es/glosario/blocklist', 'pt-br': '/pt-br/glossario/blocklist', fr: '/fr/glossaire/blocklist' },
  glossDnsbl: { en: '/glossary/dnsbl', it: '/it/glossario/dnsbl', de: '/de/glossar/dnsbl', es: '/es/glosario/dnsbl', 'pt-br': '/pt-br/glossario/dnsbl', fr: '/fr/glossaire/dnsbl' },
  glossPostmasterTools: { en: '/glossary/postmaster-tools', it: '/it/glossario/google-postmaster-tools', de: '/de/glossar/google-postmaster-tools', es: '/es/glosario/google-postmaster-tools', 'pt-br': '/pt-br/glossario/google-postmaster-tools', fr: '/fr/glossaire/google-postmaster-tools' },
  glossSmtp: { en: '/glossary/smtp', it: '/it/glossario/smtp', de: '/de/glossar/smtp', es: '/es/glosario/smtp', 'pt-br': '/pt-br/glossario/smtp', fr: '/fr/glossaire/smtp' },
  glossMta: { en: '/glossary/mta', it: '/it/glossario/mail-transfer-agent', de: '/de/glossar/mail-transfer-agent', es: '/es/glosario/agente-de-transferencia-de-correo', 'pt-br': '/pt-br/glossario/agente-de-transferencia-de-e-mail', fr: '/fr/glossaire/agent-de-transfert-de-courrier' },
  glossEsp: { en: '/glossary/esp', it: '/it/glossario/email-service-provider', de: '/de/glossar/e-mail-service-provider', es: '/es/glosario/proveedor-de-servicios-de-correo', 'pt-br': '/pt-br/glossario/provedor-de-e-mail', fr: '/fr/glossaire/fournisseur-de-service-email' },
  glossSecureEmailGateway: { en: '/glossary/secure-email-gateway', it: '/it/glossario/secure-email-gateway', de: '/de/glossar/secure-email-gateway', es: '/es/glosario/secure-email-gateway', 'pt-br': '/pt-br/glossario/secure-email-gateway', fr: '/fr/glossaire/passerelle-de-messagerie-securisee' },
} satisfies Record<string, Cluster>
