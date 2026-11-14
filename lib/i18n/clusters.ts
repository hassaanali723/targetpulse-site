// One map of every page that exists in more than one language.
//
// Each cluster is a set of URLs that say the same thing in different
// languages. From it we generate the hreflang tags (through Next's
// metadata.alternates.languages) on every member, and the language switcher
// in the navbar and footer. A member is listed only once it is live and
// self-canonical: an hreflang tag that points at a 404 or at a page that
// canonicalises elsewhere is worse than no tag.
//
// `x-default` is always the English member. Language codes are language-only
// (`it`, `de`, `es`, `fr`): each page serves every country that speaks the
// language (plans/04-phase2 4.3, plans/10 section 2). The one regioned code is
// `pt-BR`, because the Portuguese demand is Brazilian (plans/12 section 8
// item 9); its URL prefix stays lower-case, `/pt-br/`.

import { GLOSSARY_CLUSTERS } from '@/lib/i18n/glossary'

export type Locale = 'en' | 'it' | 'de' | 'es' | 'pt-br' | 'fr' | 'nl' | 'pl' | 'id' | 'ja' | 'ko' | 'tr'

export const LOCALES: Locale[] = ['en', 'it', 'de', 'es', 'pt-br', 'fr', 'nl', 'pl', 'id', 'ja', 'ko', 'tr']

/** The hreflang attribute value for a locale (only Brazil differs from its URL prefix). */
export const HREFLANG_CODE: Record<Locale, string> = {
  en: 'en', it: 'it', de: 'de', es: 'es', 'pt-br': 'pt-BR', fr: 'fr', nl: 'nl', pl: 'pl', id: 'id', ja: 'ja', ko: 'ko', tr: 'tr',
}

export interface Cluster {
  en: string
  it?: string
  de?: string
  es?: string
  'pt-br'?: string
  fr?: string
  nl?: string
  pl?: string
  id?: string
  ja?: string
  ko?: string
  tr?: string
}

export const CLUSTERS = {
  // English member is /email-checker (renamed from /tools/catch-all-email-checker
  // on 2026-09-18; both old URLs 301 there, see next.config.js).
  tool: { en: '/email-checker', it: '/it/verifica-email', de: '/de/email-adresse-pruefen', es: '/es/validar-correo', 'pt-br': '/pt-br/verificacao-de-email', fr: '/fr/verifier-adresse-mail', nl: '/nl/mailadres-controleren', pl: '/pl/weryfikator-email', id: '/id/cek-email-valid', ja: '/ja/email-checker', ko: '/ko/email-checker', tr: '/tr/mail-adresi-dogrulama' },
  home: { en: '/', it: '/it', de: '/de', es: '/es', 'pt-br': '/pt-br', fr: '/fr', nl: '/nl', pl: '/pl', id: '/id', ja: '/ja', ko: '/ko', tr: '/tr' },
  // The bulk email verifier. Each slug uses the bulk wording of that language's
  // home title (in blocco, Massenprüfung, masiva, em massa, en masse); the
  // Spanish and Portuguese slugs follow the Ahrefs data ("validador de correos
  // masivos", "validador de email em massa").
  bulkVerifier: { en: '/bulk-email-verifier', it: '/it/verifica-email-in-blocco', de: '/de/e-mail-massenpruefung', es: '/es/validador-de-correos-masivos', 'pt-br': '/pt-br/validador-de-email-em-massa', fr: '/fr/verification-email-en-masse', nl: '/nl/bulk-e-mailverificatie', pl: '/pl/masowa-weryfikacja-email', id: '/id/verifikasi-email-massal', ja: '/ja/bulk-email-verifier', ko: '/ko/bulk-email-verifier', tr: '/tr/toplu-mail-dogrulama' },
  pricing: { en: '/pricing', it: '/it/prezzi', de: '/de/preise', es: '/es/precios', 'pt-br': '/pt-br/precos', fr: '/fr/tarifs', nl: '/nl/prijzen', pl: '/pl/cennik', id: '/id/harga', ja: '/ja/pricing', ko: '/ko/pricing', tr: '/tr/fiyatlar' },
  catchall: { en: '/catch-all-verification', it: '/it/verifica-catch-all', de: '/de/catch-all-verifizierung', es: '/es/verificacion-catch-all', 'pt-br': '/pt-br/verificacao-catch-all', fr: '/fr/verification-catch-all', nl: '/nl/catch-all-verificatie', pl: '/pl/weryfikacja-catch-all', id: '/id/verifikasi-catch-all', ja: '/ja/catch-all-verification', ko: '/ko/catch-all-verification', tr: '/tr/catch-all-dogrulama' },
  seg: { en: '/seg-email-verification', it: '/it/verifica-seg', de: '/de/secure-email-gateway', es: '/es/verificacion-seg', 'pt-br': '/pt-br/verificacao-seg', fr: '/fr/verification-seg', nl: '/nl/seg-verificatie', pl: '/pl/weryfikacja-seg', id: '/id/verifikasi-seg', ja: '/ja/seg-email-verification', ko: '/ko/seg-email-verification', tr: '/tr/seg-dogrulama' },
  integrations: { en: '/integrations', it: '/it/integrazioni', de: '/de/integrationen', es: '/es/integraciones', 'pt-br': '/pt-br/integracoes', fr: '/fr/integrations', nl: '/nl/integraties', pl: '/pl/integracje', id: '/id/integrasi', ja: '/ja/integrations', ko: '/ko/integrations', tr: '/tr/entegrasyonlar' },
  // Integration spokes nest under each language's hub path; the 73 per-app
  // Zapier guides stay English only.
  integZapier: { en: '/integrations/zapier', it: '/it/integrazioni/zapier', de: '/de/integrationen/zapier', es: '/es/integraciones/zapier', 'pt-br': '/pt-br/integracoes/zapier', fr: '/fr/integrations/zapier', nl: '/nl/integraties/zapier', pl: '/pl/integracje/zapier', id: '/id/integrasi/zapier', ja: '/ja/integrations/zapier', ko: '/ko/integrations/zapier', tr: '/tr/entegrasyonlar/zapier' },
  integN8n: { en: '/integrations/n8n', it: '/it/integrazioni/n8n', de: '/de/integrationen/n8n', es: '/es/integraciones/n8n', 'pt-br': '/pt-br/integracoes/n8n', fr: '/fr/integrations/n8n', nl: '/nl/integraties/n8n', pl: '/pl/integracje/n8n', id: '/id/integrasi/n8n', ja: '/ja/integrations/n8n', ko: '/ko/integrations/n8n', tr: '/tr/entegrasyonlar/n8n' },
  integHubspot: { en: '/integrations/hubspot', it: '/it/integrazioni/hubspot', de: '/de/integrationen/hubspot', es: '/es/integraciones/hubspot', 'pt-br': '/pt-br/integracoes/hubspot', fr: '/fr/integrations/hubspot', nl: '/nl/integraties/hubspot', pl: '/pl/integracje/hubspot', id: '/id/integrasi/hubspot', ja: '/ja/integrations/hubspot', ko: '/ko/integrations/hubspot', tr: '/tr/entegrasyonlar/hubspot' },
  mcp: { en: '/mcp', it: '/it/mcp', de: '/de/mcp', es: '/es/mcp', 'pt-br': '/pt-br/mcp', fr: '/fr/mcp', nl: '/nl/mcp', pl: '/pl/mcp', id: '/id/mcp', ja: '/ja/mcp', ko: '/ko/mcp', tr: '/tr/mcp' },
  apiDocs: { en: '/public/docs', it: '/it/documentazione-api', de: '/de/api-dokumentation', es: '/es/documentacion-api', 'pt-br': '/pt-br/documentacao-api', fr: '/fr/documentation-api', nl: '/nl/api-documentatie', pl: '/pl/dokumentacja-api', id: '/id/dokumentasi-api', ja: '/ja/api-docs', ko: '/ko/api-docs', tr: '/tr/api-dokumantasyonu' },
  // The affiliate program (2026-10-29). Slugs use each language's usual term;
  // Japanese keeps English letters like every ja URL.
  affiliates: { en: '/affiliates', it: '/it/programma-affiliati', de: '/de/partnerprogramm', es: '/es/programa-de-afiliados', 'pt-br': '/pt-br/programa-de-afiliados', fr: '/fr/programme-affiliation', nl: '/nl/partnerprogramma', pl: '/pl/program-partnerski', id: '/id/program-afiliasi', ja: '/ja/affiliates', ko: '/ko/affiliates', tr: '/tr/ortaklik-programi' },
  contact: { en: '/contact-us', it: '/it/contatti', de: '/de/kontakt', es: '/es/contacto', 'pt-br': '/pt-br/contato', fr: '/fr/contact', nl: '/nl/contact', pl: '/pl/kontakt', id: '/id/kontak', ja: '/ja/contact', ko: '/ko/contact', tr: '/tr/iletisim' },
  signup: { en: '/sign-up', it: '/it/registrati', de: '/de/registrieren', es: '/es/registro', 'pt-br': '/pt-br/cadastro', fr: '/fr/inscription', nl: '/nl/registreren', pl: '/pl/rejestracja', id: '/id/daftar', ja: '/ja/sign-up', ko: '/ko/sign-up', tr: '/tr/kayit-ol' },
  blog: { en: '/blog', it: '/it/blog', de: '/de/blog', es: '/es/blog', 'pt-br': '/pt-br/blog', fr: '/fr/blog', nl: '/nl/blog', pl: '/pl/blog', id: '/id/blog', ja: '/ja/blog', ko: '/ko/blog', tr: '/tr/blog' },
  // One cluster per blog post: every post exists in all six languages, and a
  // localized post's internal links are rewritten through this map (lib/blog.ts).
  postBestTools: { en: '/blog/best-email-verification-tools', it: '/it/blog/migliori-software-per-verificare-le-email', de: '/de/blog/beste-e-mail-verifizierungstools', es: '/es/blog/mejores-herramientas-de-verificacion-de-correo', 'pt-br': '/pt-br/blog/melhores-verificadores-de-email', fr: '/fr/blog/meilleurs-outils-de-verification-email', nl: '/nl/blog/beste-e-mailverificatietools', pl: '/pl/blog/najlepsze-narzedzia-do-weryfikacji-email', id: '/id/blog/alat-verifikasi-email-terbaik', ja: '/ja/blog/best-email-verification-tools', ko: '/ko/blog/best-email-verification-tools', tr: '/tr/blog/en-iyi-e-posta-dogrulama-araclari' },
  postGoodBounce: { en: '/blog/good-bounce-rate-for-cold-email', it: '/it/blog/tasso-di-rimbalzo-ideale-cold-email', de: '/de/blog/gute-bounce-rate-cold-e-mail', es: '/es/blog/tasa-de-rebote-aceptable-cold-email', 'pt-br': '/pt-br/blog/taxa-de-bounce-ideal-cold-email', fr: '/fr/blog/bon-taux-de-rebond-cold-email', nl: '/nl/blog/goed-bouncepercentage-cold-e-mail', pl: '/pl/blog/dobry-wspolczynnik-odbic-cold-mailing', id: '/id/blog/bounce-rate-cold-email-yang-baik', ja: '/ja/blog/good-bounce-rate-for-cold-email', ko: '/ko/blog/good-bounce-rate-for-cold-email', tr: '/tr/blog/soguk-e-posta-icin-iyi-bounce-orani' },
  postAccuracy: { en: '/blog/how-accurate-are-email-verification-tools', it: '/it/blog/quanto-sono-precisi-gli-strumenti-di-verifica-email', de: '/de/blog/wie-genau-sind-e-mail-verifizierungstools', es: '/es/blog/que-tan-precisos-son-los-verificadores-de-correo', 'pt-br': '/pt-br/blog/qual-a-precisao-dos-verificadores-de-email', fr: '/fr/blog/quelle-est-la-precision-des-verificateurs-email', nl: '/nl/blog/hoe-nauwkeurig-zijn-e-mailverificatietools', pl: '/pl/blog/jak-dokladne-sa-narzedzia-do-weryfikacji-email', id: '/id/blog/seberapa-akurat-alat-verifikasi-email', ja: '/ja/blog/how-accurate-are-email-verification-tools', ko: '/ko/blog/how-accurate-are-email-verification-tools', tr: '/tr/blog/e-posta-dogrulama-araclari-ne-kadar-dogru' },
  postReduceBounce: { en: '/blog/how-to-reduce-email-bounce-rate', it: '/it/blog/come-ridurre-il-tasso-di-rimbalzo-email', de: '/de/blog/e-mail-bounce-rate-senken', es: '/es/blog/como-reducir-la-tasa-de-rebote', 'pt-br': '/pt-br/blog/como-reduzir-a-taxa-de-bounce', fr: '/fr/blog/comment-reduire-le-taux-de-rebond', nl: '/nl/blog/bouncepercentage-verlagen', pl: '/pl/blog/jak-zmniejszyc-wspolczynnik-odbic', id: '/id/blog/cara-menurunkan-bounce-rate-email', ja: '/ja/blog/how-to-reduce-email-bounce-rate', ko: '/ko/blog/how-to-reduce-email-bounce-rate', tr: '/tr/blog/e-posta-bounce-orani-nasil-dusurulur' },
  postSegVerify: { en: '/blog/how-to-verify-emails-behind-secure-email-gateways', it: '/it/blog/verificare-email-dietro-gateway-di-sicurezza', de: '/de/blog/e-mails-hinter-sicherheits-gateways-pruefen', es: '/es/blog/verificar-correos-tras-un-gateway-de-seguridad', 'pt-br': '/pt-br/blog/verificar-emails-atras-de-gateways-de-seguranca', fr: '/fr/blog/verifier-un-email-derriere-une-passerelle-securisee', nl: '/nl/blog/e-mails-verifieren-achter-secure-email-gateway', pl: '/pl/blog/weryfikacja-email-za-bramka-bezpieczenstwa', id: '/id/blog/verifikasi-email-di-balik-secure-email-gateway', ja: '/ja/blog/how-to-verify-emails-behind-secure-email-gateways', ko: '/ko/blog/how-to-verify-emails-behind-secure-email-gateways', tr: '/tr/blog/guvenli-e-posta-ag-gecidi-arkasindaki-adresleri-dogrulama' },
  postClaude: { en: '/blog/verify-emails-inside-claude-and-chatgpt', it: '/it/blog/verificare-email-in-claude-e-chatgpt', de: '/de/blog/e-mails-in-claude-und-chatgpt-pruefen', es: '/es/blog/verificar-correos-en-claude-y-chatgpt', 'pt-br': '/pt-br/blog/verificar-emails-no-claude-e-no-chatgpt', fr: '/fr/blog/verifier-emails-dans-claude-et-chatgpt', nl: '/nl/blog/e-mails-verifieren-in-claude-en-chatgpt', pl: '/pl/blog/weryfikacja-email-w-claude-i-chatgpt', id: '/id/blog/verifikasi-email-di-claude-dan-chatgpt', ja: '/ja/blog/verify-emails-inside-claude-and-chatgpt', ko: '/ko/blog/verify-emails-inside-claude-and-chatgpt', tr: '/tr/blog/claude-ve-chatgpt-icinde-e-posta-dogrulama' },
  postRisky: { en: '/blog/what-does-risky-mean-in-email-verification', it: '/it/blog/email-rischiosa-cosa-significa', de: '/de/blog/was-bedeutet-riskant-bei-der-e-mail-pruefung', es: '/es/blog/que-significa-arriesgado-al-validar-un-correo', 'pt-br': '/pt-br/blog/o-que-significa-arriscado-ao-verificar-emails', fr: '/fr/blog/que-signifie-risque-verification-email', nl: '/nl/blog/wat-betekent-riskant-bij-e-mailverificatie', pl: '/pl/blog/co-oznacza-ryzykowny-adres-email', id: '/id/blog/arti-risky-pada-verifikasi-email', ja: '/ja/blog/what-does-risky-mean-in-email-verification', ko: '/ko/blog/what-does-risky-mean-in-email-verification', tr: '/tr/blog/e-posta-dogrulamada-riskli-ne-demek' },
  postCatchAll: { en: '/blog/what-is-a-catch-all-email-address', it: '/it/blog/cos-e-un-indirizzo-email-catch-all', de: '/de/blog/was-ist-eine-catch-all-e-mail-adresse', es: '/es/blog/que-es-un-correo-catch-all', 'pt-br': '/pt-br/blog/o-que-e-um-email-catch-all', fr: '/fr/blog/qu-est-ce-qu-une-adresse-email-catch-all', nl: '/nl/blog/wat-is-een-catch-all-e-mailadres', pl: '/pl/blog/co-to-jest-adres-email-catch-all', id: '/id/blog/apa-itu-email-catch-all', ja: '/ja/blog/what-is-a-catch-all-email-address', ko: '/ko/blog/what-is-a-catch-all-email-address', tr: '/tr/blog/catch-all-e-posta-adresi-nedir' },
  postSeg: { en: '/blog/what-is-a-secure-email-gateway', it: '/it/blog/cos-e-un-secure-email-gateway', de: '/de/blog/was-ist-ein-secure-email-gateway', es: '/es/blog/que-es-un-secure-email-gateway', 'pt-br': '/pt-br/blog/o-que-e-um-secure-email-gateway', fr: '/fr/blog/qu-est-ce-qu-un-secure-email-gateway', nl: '/nl/blog/wat-is-een-secure-email-gateway', pl: '/pl/blog/co-to-jest-secure-email-gateway', id: '/id/blog/apa-itu-secure-email-gateway', ja: '/ja/blog/what-is-a-secure-email-gateway', ko: '/ko/blog/what-is-a-secure-email-gateway', tr: '/tr/blog/guvenli-e-posta-ag-gecidi-nedir' },
  postHardSoft: { en: '/blog/hard-bounce-vs-soft-bounce', it: '/it/blog/hard-bounce-e-soft-bounce', de: '/de/blog/hard-bounce-vs-soft-bounce', es: '/es/blog/rebote-duro-vs-rebote-suave', 'pt-br': '/pt-br/blog/hard-bounce-e-soft-bounce', fr: '/fr/blog/hard-bounce-et-soft-bounce', nl: '/nl/blog/hard-bounce-vs-soft-bounce', pl: '/pl/blog/twarde-i-miekkie-odbicie-email', id: '/id/blog/hard-bounce-vs-soft-bounce', ja: '/ja/blog/hard-bounce-vs-soft-bounce', ko: '/ko/blog/hard-bounce-vs-soft-bounce', tr: '/tr/blog/hard-bounce-ve-soft-bounce-farki' },
  postBounce: { en: '/blog/why-cold-emails-bounce', it: '/it/blog/perche-le-email-rimbalzano', de: '/de/blog/warum-cold-e-mails-bouncen', es: '/es/blog/por-que-rebotan-los-correos', 'pt-br': '/pt-br/blog/por-que-emails-dao-bounce', fr: '/fr/blog/pourquoi-un-email-rebondit', nl: '/nl/blog/waarom-cold-e-mails-bouncen', pl: '/pl/blog/dlaczego-maile-wracaja', id: '/id/blog/kenapa-cold-email-bounce', ja: '/ja/blog/why-cold-emails-bounce', ko: '/ko/blog/why-cold-emails-bounce', tr: '/tr/blog/soguk-e-postalar-neden-geri-doner' },
  post550: { en: '/blog/550-5-7-1-error', it: '/it/blog/errore-550-5-7-1', de: '/de/blog/550-5-7-1-fehler', es: '/es/blog/error-550-5-7-1', 'pt-br': '/pt-br/blog/erro-550-5-7-1', fr: '/fr/blog/erreur-550-5-7-1', nl: '/nl/blog/550-5-7-1-foutmelding', pl: '/pl/blog/blad-550-5-7-1', id: '/id/blog/error-550-5-7-1', ja: '/ja/blog/550-5-7-1-error', ko: '/ko/blog/550-5-7-1-error', tr: '/tr/blog/550-5-7-1-hatasi' },
  postCaseSensitive: { en: '/blog/are-email-addresses-case-sensitive', it: '/it/blog/indirizzi-email-maiuscole-minuscole', de: '/de/blog/e-mail-adresse-gross-kleinschreibung', es: '/es/blog/el-correo-distingue-mayusculas-y-minusculas', 'pt-br': '/pt-br/blog/email-diferencia-maiusculas-e-minusculas', fr: '/fr/blog/adresse-email-sensible-a-la-casse', nl: '/nl/blog/is-een-e-mailadres-hoofdlettergevoelig', pl: '/pl/blog/czy-wielkosc-liter-w-adresie-email-ma-znaczenie', id: '/id/blog/apakah-alamat-email-case-sensitive', ja: '/ja/blog/are-email-addresses-case-sensitive', ko: '/ko/blog/are-email-addresses-case-sensitive', tr: '/tr/blog/e-posta-adresleri-buyuk-kucuk-harfe-duyarli-mi' },
  postColdTemplates: { en: '/blog/cold-email-templates', it: '/it/blog/esempi-di-cold-email', de: '/de/blog/cold-e-mail-vorlagen', es: '/es/blog/plantillas-de-cold-email', 'pt-br': '/pt-br/blog/modelos-de-email-de-prospeccao', fr: '/fr/blog/modeles-de-cold-email', nl: '/nl/blog/cold-e-mail-voorbeelden', pl: '/pl/blog/szablony-cold-maili', id: '/id/blog/contoh-cold-email', ja: '/ja/blog/cold-email-templates', ko: '/ko/blog/cold-email-templates', tr: '/tr/blog/cold-mail-sablonlari' },
  postAddressExamples: { en: '/blog/email-address-examples', it: '/it/blog/esempi-di-indirizzi-email', de: '/de/blog/e-mail-adresse-beispiele', es: '/es/blog/ejemplos-de-direcciones-de-correo', 'pt-br': '/pt-br/blog/exemplos-de-endereco-de-email', fr: '/fr/blog/exemples-d-adresses-email', nl: '/nl/blog/voorbeelden-van-e-mailadressen', pl: '/pl/blog/przyklady-adresow-email', id: '/id/blog/contoh-alamat-email', ja: '/ja/blog/email-address-examples', ko: '/ko/blog/email-address-examples', tr: '/tr/blog/e-posta-adresi-ornekleri' },
  postWarmup: { en: '/blog/how-long-to-warm-up-email-domain', it: '/it/blog/warm-up-dominio-email', de: '/de/blog/e-mail-domain-aufwaermen', es: '/es/blog/cuanto-tiempo-calentar-un-dominio-de-correo', 'pt-br': '/pt-br/blog/quanto-tempo-aquecer-dominio-de-email', fr: '/fr/blog/duree-warm-up-domaine-email', nl: '/nl/blog/e-maildomein-opwarmen', pl: '/pl/blog/rozgrzewanie-domeny-email', id: '/id/blog/berapa-lama-warm-up-domain-email', ja: '/ja/blog/how-long-to-warm-up-email-domain', ko: '/ko/blog/how-long-to-warm-up-email-domain', tr: '/tr/blog/e-posta-alan-adi-isitma-suresi' },
  postEndEmail: { en: '/blog/how-to-end-an-email', it: '/it/blog/come-chiudere-una-email', de: '/de/blog/e-mail-beenden-grussformeln', es: '/es/blog/como-terminar-un-correo', 'pt-br': '/pt-br/blog/como-finalizar-um-email', fr: '/fr/blog/comment-terminer-un-mail', nl: '/nl/blog/e-mail-afsluiten', pl: '/pl/blog/jak-zakonczyc-maila', id: '/id/blog/cara-menutup-email', ja: '/ja/blog/how-to-end-an-email', ko: '/ko/blog/how-to-end-an-email', tr: '/tr/blog/mail-nasil-bitirilir' },
  postSpfDkimDmarc: { en: '/blog/spf-dkim-dmarc-explained', it: '/it/blog/spf-dkim-dmarc-cosa-sono', de: '/de/blog/spf-dkim-dmarc-einfach-erklaert', es: '/es/blog/spf-dkim-dmarc-explicados', 'pt-br': '/pt-br/blog/spf-dkim-e-dmarc', fr: '/fr/blog/spf-dkim-dmarc-explication', nl: '/nl/blog/spf-dkim-dmarc-uitgelegd', pl: '/pl/blog/spf-dkim-dmarc-wyjasnienie', id: '/id/blog/spf-dkim-dmarc-adalah', ja: '/ja/blog/spf-dkim-dmarc-explained', ko: '/ko/blog/spf-dkim-dmarc-explained', tr: '/tr/blog/spf-dkim-dmarc-nedir' },
  postMailchimpCleaned: { en: '/blog/what-does-cleaned-mean-in-mailchimp', it: '/it/blog/cosa-significa-cleaned-in-mailchimp', de: '/de/blog/was-bedeutet-cleaned-in-mailchimp', es: '/es/blog/que-significa-cleaned-en-mailchimp', 'pt-br': '/pt-br/blog/o-que-significa-cleaned-no-mailchimp', fr: '/fr/blog/que-signifie-nettoye-dans-mailchimp', nl: '/nl/blog/wat-betekent-cleaned-in-mailchimp', pl: '/pl/blog/co-oznacza-cleaned-w-mailchimp', id: '/id/blog/arti-cleaned-di-mailchimp', ja: '/ja/blog/what-does-cleaned-mean-in-mailchimp', ko: '/ko/blog/what-does-cleaned-mean-in-mailchimp', tr: '/tr/blog/mailchimp-cleaned-ne-demek' },
  postDmarcRecord: { en: '/blog/what-is-a-dmarc-record', it: '/it/blog/cos-e-un-record-dmarc', de: '/de/blog/was-ist-ein-dmarc-eintrag', es: '/es/blog/que-es-un-registro-dmarc', 'pt-br': '/pt-br/blog/o-que-e-um-registro-dmarc', fr: '/fr/blog/qu-est-ce-qu-un-enregistrement-dmarc', nl: '/nl/blog/wat-is-een-dmarc-record', pl: '/pl/blog/co-to-jest-rekord-dmarc', id: '/id/blog/apa-itu-dmarc-record', ja: '/ja/blog/what-is-a-dmarc-record', ko: '/ko/blog/what-is-a-dmarc-record', tr: '/tr/blog/dmarc-kaydi-nedir' },
  postEmailRegex: { en: '/blog/email-regex', it: '/it/blog/regex-email', de: '/de/blog/e-mail-regex', es: '/es/blog/regex-correo-electronico', 'pt-br': '/pt-br/blog/regex-de-email', fr: '/fr/blog/regex-email-validation', nl: '/nl/blog/e-mail-regex', pl: '/pl/blog/regex-email', id: '/id/blog/regex-email', ja: '/ja/blog/email-regex', ko: '/ko/blog/email-regex', tr: '/tr/blog/email-regex' },
  postEmailBlacklistCheck: { en: '/blog/how-to-check-if-email-domain-is-blacklisted', it: '/it/blog/email-blacklist-check', de: '/de/blog/blacklist-pruefen-email-domain', 'pt-br': '/pt-br/blog/como-saber-se-email-esta-na-blacklist', es: '/es/blog/como-saber-si-un-dominio-esta-en-lista-negra', fr: '/fr/blog/verifier-si-un-domaine-est-sur-liste-noire', nl: '/nl/blog/controleren-of-domein-op-blacklist-staat', pl: '/pl/blog/jak-sprawdzic-czy-domena-jest-na-czarnej-liscie', id: '/id/blog/cara-cek-domain-email-masuk-blacklist', ja: '/ja/blog/how-to-check-if-email-domain-is-blacklisted', ko: '/ko/blog/how-to-check-if-email-domain-is-blacklisted', tr: '/tr/blog/alan-adi-kara-listede-mi' },
  postPhp2shell: { en: '/blog/php2shell-vulnerability', it: '/it/blog/php2shell-vulnerabilita', de: '/de/blog/php2shell-sicherheitsluecke', es: '/es/blog/php2shell-vulnerabilidad', 'pt-br': '/pt-br/blog/php2shell-vulnerabilidade', fr: '/fr/blog/php2shell-vulnerabilite', nl: '/nl/blog/php2shell-kwetsbaarheid', pl: '/pl/blog/php2shell-podatnosc', id: '/id/blog/php2shell-kerentanan', ja: '/ja/blog/php2shell-vulnerability', ko: '/ko/blog/php2shell-vulnerability', tr: '/tr/blog/php2shell-guvenlik-acigi' },
  postEmailDeliverability: {
    en: '/blog/how-to-improve-email-deliverability',
    fr: '/fr/blog/ameliorer-delivrabilite-email',
    de: '/de/blog/e-mail-zustellbarkeit-verbessern',
    es: '/es/blog/como-mejorar-la-entregabilidad-del-correo',
    it: '/it/blog/come-migliorare-deliverability-email',
  },
  // Alternative and comparison pages with local brand demand (plans/15). A
  // language is listed only where every brand on the page is searched in that
  // market, so some clusters are partial.
  altZerobounce: { en: '/zerobounce-alternative', it: '/it/alternativa-a-zerobounce', de: '/de/zerobounce-alternative', es: '/es/alternativa-a-zerobounce', 'pt-br': '/pt-br/alternativa-ao-zerobounce', fr: '/fr/alternative-a-zerobounce', nl: '/nl/zerobounce-alternatief', pl: '/pl/alternatywa-dla-zerobounce', id: '/id/alternatif-zerobounce', ja: '/ja/zerobounce-alternative', ko: '/ko/zerobounce-alternative', tr: '/tr/zerobounce-alternatifi' },
  altNeverbounce: { en: '/neverbounce-alternative', it: '/it/alternativa-a-neverbounce', de: '/de/neverbounce-alternative', es: '/es/alternativa-a-neverbounce', 'pt-br': '/pt-br/alternativa-ao-neverbounce', fr: '/fr/alternative-a-neverbounce', nl: '/nl/neverbounce-alternatief', pl: '/pl/alternatywa-dla-neverbounce', id: '/id/alternatif-neverbounce', ja: '/ja/neverbounce-alternative', ko: '/ko/neverbounce-alternative', tr: '/tr/neverbounce-alternatifi' },
  altHunter: { en: '/hunter-alternative', de: '/de/hunter-alternative', es: '/es/alternativa-a-hunter', 'pt-br': '/pt-br/alternativa-ao-hunter', fr: '/fr/alternative-a-hunter' },
  altSnovio: { en: '/snovio-alternative', it: '/it/alternativa-a-snovio', de: '/de/snovio-alternative', es: '/es/alternativa-a-snovio', 'pt-br': '/pt-br/alternativa-ao-snovio', fr: '/fr/alternative-a-snovio', nl: '/nl/snovio-alternatief', pl: '/pl/alternatywa-dla-snovio', id: '/id/alternatif-snovio', ja: '/ja/snovio-alternative', ko: '/ko/snovio-alternative', tr: '/tr/snovio-alternatifi' },
  altApollo: { en: '/apollo-alternative', fr: '/fr/alternative-a-apollo' },
  altInstantly: { en: '/instantly-alternative', de: '/de/instantly-alternative' },
  cmpZerobounceNeverbounce: { en: '/compare/zerobounce-vs-neverbounce', it: '/it/confronto/zerobounce-vs-neverbounce', de: '/de/vergleich/zerobounce-vs-neverbounce', es: '/es/comparativa/zerobounce-vs-neverbounce', 'pt-br': '/pt-br/comparativo/zerobounce-vs-neverbounce', fr: '/fr/comparatif/zerobounce-vs-neverbounce', nl: '/nl/vergelijking/zerobounce-vs-neverbounce', pl: '/pl/porownanie/zerobounce-vs-neverbounce', id: '/id/perbandingan/zerobounce-vs-neverbounce', ja: '/ja/compare/zerobounce-vs-neverbounce', ko: '/ko/compare/zerobounce-vs-neverbounce', tr: '/tr/karsilastirma/zerobounce-vs-neverbounce' },
  cmpZerobounceHunter: { en: '/compare/zerobounce-vs-hunter', de: '/de/vergleich/zerobounce-vs-hunter', es: '/es/comparativa/zerobounce-vs-hunter', 'pt-br': '/pt-br/comparativo/zerobounce-vs-hunter', fr: '/fr/comparatif/zerobounce-vs-hunter' },
  cmpNeverbounceHunter: { en: '/compare/neverbounce-vs-hunter', de: '/de/vergleich/neverbounce-vs-hunter', es: '/es/comparativa/neverbounce-vs-hunter', 'pt-br': '/pt-br/comparativo/neverbounce-vs-hunter', fr: '/fr/comparatif/neverbounce-vs-hunter' },
  terms: { en: '/terms-of-service', it: '/it/termini', de: '/de/agb', es: '/es/terminos', 'pt-br': '/pt-br/termos', fr: '/fr/conditions', nl: '/nl/voorwaarden', pl: '/pl/regulamin', id: '/id/syarat-dan-ketentuan', ja: '/ja/terms', ko: '/ko/terms', tr: '/tr/kullanim-kosullari' },
  privacy: { en: '/privacy-policy', it: '/it/privacy', de: '/de/datenschutz', es: '/es/privacidad', 'pt-br': '/pt-br/privacidade', fr: '/fr/confidentialite', nl: '/nl/privacy', pl: '/pl/polityka-prywatnosci', id: '/id/kebijakan-privasi', ja: '/ja/privacy', ko: '/ko/privacy', tr: '/tr/gizlilik-politikasi' },
  refund: { en: '/refund-policy', it: '/it/rimborsi', de: '/de/rueckerstattung', es: '/es/reembolsos', 'pt-br': '/pt-br/reembolsos', fr: '/fr/remboursements', nl: '/nl/terugbetalingen', pl: '/pl/zwroty', id: '/id/pengembalian-dana', ja: '/ja/refund-policy', ko: '/ko/refund-policy', tr: '/tr/iade-politikasi' },
  // Directory of disposable email providers and domains (components/disposable/
  // ProvidersPage.tsx). Slugs use the glossary's data-backed term per language.
  // The disposable email checker tool (components/disposable/CheckerPage.tsx).
  // Slugs follow each language's checker slug (verifica-email, email-adresse-
  // pruefen, verificacao-de-email, verifier-adresse-mail) plus the glossary term.
  disposableChecker: { en: '/disposable-email-checker', it: '/it/verifica-email-temporanea', de: '/de/wegwerf-e-mail-pruefen', es: '/es/verificar-correo-desechable', 'pt-br': '/pt-br/verificador-de-e-mail-descartavel', fr: '/fr/verifier-adresse-mail-jetable', nl: '/nl/wegwerp-e-mailadres-controleren', pl: '/pl/sprawdz-jednorazowy-email', id: '/id/cek-email-sementara', ja: '/ja/disposable-email-checker', ko: '/ko/disposable-email-checker', tr: '/tr/gecici-mail-kontrolu' },
  // Free tools localized under plan 30 (components/tools/<Tool>/<Tool>Page.tsx).
  // A language is added here only when its page is live.
  // Product pages localized 2026-11-07 (they were English only).
  listCleaning: { en: '/email-list-cleaning', it: '/it/pulizia-lista-email', de: '/de/e-mail-liste-bereinigen', es: '/es/limpieza-de-listas-de-correo', 'pt-br': '/pt-br/limpeza-de-lista-de-email', fr: '/fr/nettoyage-liste-email', nl: '/nl/e-maillijst-opschonen', pl: '/pl/czyszczenie-listy-email', id: '/id/membersihkan-daftar-email', ja: '/ja/email-list-cleaning', ko: '/ko/email-list-cleaning', tr: '/tr/mail-listesi-temizleme' },
  verificationApi: { en: '/email-verification-api', it: '/it/api-verifica-email', de: '/de/e-mail-verifizierung-api', es: '/es/api-de-verificacion-de-correo', 'pt-br': '/pt-br/api-de-verificacao-de-email', fr: '/fr/api-verification-email', nl: '/nl/e-mailverificatie-api', pl: '/pl/api-weryfikacji-email', id: '/id/api-verifikasi-email', ja: '/ja/email-verification-api', ko: '/ko/email-verification-api', tr: '/tr/email-dogrulama-api' },
  validationApi: { en: '/email-validation-api', it: '/it/api-validazione-email', de: '/de/e-mail-validierung-api', es: '/es/api-de-validacion-de-correo', 'pt-br': '/pt-br/api-de-validacao-de-email', fr: '/fr/api-validation-email', nl: '/nl/e-mailvalidatie-api', pl: '/pl/api-walidacji-email', id: '/id/api-validasi-email', ja: '/ja/email-validation-api', ko: '/ko/email-validation-api', tr: '/tr/email-validasyon-api' },
  mimecast: { en: '/mimecast-email-verification', it: '/it/verifica-email-mimecast', de: '/de/mimecast-e-mail-pruefen', es: '/es/verificacion-de-correos-mimecast', 'pt-br': '/pt-br/verificacao-de-email-mimecast', fr: '/fr/verification-email-mimecast', nl: '/nl/mimecast-e-mailverificatie', pl: '/pl/weryfikacja-email-mimecast', id: '/id/verifikasi-email-mimecast', ja: '/ja/mimecast-email-verification', ko: '/ko/mimecast-email-verification', tr: '/tr/mimecast-mail-dogrulama' },
  // The last three free tools, localized 2026-11-07 (they were English only).
  plusAddressing: { en: '/gmail-plus-addressing', it: '/it/indirizzi-gmail-con-piu', de: '/de/gmail-plus-adressen', es: '/es/direcciones-gmail-con-plus', 'pt-br': '/pt-br/enderecos-gmail-com-mais', fr: '/fr/adresses-gmail-avec-plus', nl: '/nl/gmail-adressen-met-plus', pl: '/pl/adresy-gmail-z-plusem', id: '/id/alamat-gmail-plus', ja: '/ja/gmail-plus-addressing', ko: '/ko/gmail-plus-addressing', tr: '/tr/gmail-arti-adresleme' },
  emailPermutator: { en: '/email-permutator', it: '/it/permutatore-email', de: '/de/e-mail-permutator', es: '/es/permutador-de-correos', 'pt-br': '/pt-br/permutador-de-emails', fr: '/fr/permutateur-email', nl: '/nl/e-mailadressen-combineren', pl: '/pl/generator-wariantow-adresu-email', id: '/id/kombinasi-alamat-email', ja: '/ja/email-permutator', ko: '/ko/email-permutator', tr: '/tr/mail-adresi-kombinasyonlari' },
  spamWordChecker: { en: '/spam-word-checker', it: '/it/controllo-parole-spam', de: '/de/spam-woerter-pruefen', es: '/es/comprobador-de-palabras-spam', 'pt-br': '/pt-br/verificador-de-palavras-de-spam', fr: '/fr/verificateur-mots-spam', nl: '/nl/spamwoorden-controleren', pl: '/pl/wykrywanie-slow-spamowych', id: '/id/cek-kata-spam', ja: '/ja/spam-word-checker', ko: '/ko/spam-word-checker', tr: '/tr/spam-kelime-kontrolu' },
  mxLookup: {
    en: '/mx-lookup',
    fr: '/fr/mx-lookup',
    es: '/es/mx-lookup',
    de: '/de/mx-lookup',
    it: '/it/mx-lookup',
    'pt-br': '/pt-br/mx-lookup',
    nl: '/nl/mx-lookup',
    pl: '/pl/mx-lookup',
    id: '/id/mx-lookup',
    ja: '/ja/mx-lookup', ko: '/ko/mx-lookup',
    tr: '/tr/mx-kaydi-sorgulama',
  },
  spfChecker: {
    en: '/spf-checker',
    fr: '/fr/enregistrement-spf',
    es: '/es/registro-spf',
    de: '/de/spf-generator',
    it: '/it/record-spf',
    'pt-br': '/pt-br/registro-spf',
    nl: '/nl/spf-record',
    pl: '/pl/rekord-spf',
    id: '/id/spf-record',
    ja: '/ja/spf-checker', ko: '/ko/spf-checker',
    tr: '/tr/spf-kaydi-kontrol',
  },
  dkimGenerator: {
    en: '/dkim-generator',
    fr: '/fr/generateur-dkim',
    es: '/es/generador-dkim',
    de: '/de/dkim-generator',
    it: '/it/record-dkim',
    'pt-br': '/pt-br/gerador-dkim',
    nl: '/nl/dkim-generator',
    pl: '/pl/generator-dkim',
    id: '/id/dkim-generator',
    ja: '/ja/dkim-generator', ko: '/ko/dkim-generator',
    tr: '/tr/dkim-olusturucu',
  },
  dmarcGenerator: {
    en: '/dmarc-generator',
    fr: '/fr/generateur-dmarc',
    es: '/es/generador-dmarc',
    de: '/de/dmarc-generator',
    it: '/it/generatore-dmarc',
    'pt-br': '/pt-br/gerador-dmarc',
    nl: '/nl/dmarc-generator',
    pl: '/pl/generator-dmarc',
    id: '/id/dmarc-generator',
    ja: '/ja/dmarc-generator', ko: '/ko/dmarc-generator',
    tr: '/tr/dmarc-olusturucu',
  },
  bimiGenerator: {
    en: '/bimi-generator',
    fr: '/fr/generateur-bimi',
    es: '/es/generador-bimi',
    de: '/de/bimi-record',
    it: '/it/generatore-bimi',
    'pt-br': '/pt-br/gerador-bimi',
    nl: '/nl/bimi-generator',
    pl: '/pl/generator-bimi',
    id: '/id/bimi-generator',
    ja: '/ja/bimi-generator', ko: '/ko/bimi-generator',
    tr: '/tr/bimi-olusturucu',
  },
  bounceRate: {
    en: '/bounce-rate-calculator',
    fr: '/fr/calculateur-taux-de-rebond',
    es: '/es/calculadora-tasa-de-rebote',
    de: '/de/bounce-rate-berechnen',
    it: '/it/calcolo-tasso-di-rimbalzo',
    'pt-br': '/pt-br/calculadora-taxa-de-bounce',
    nl: '/nl/bouncepercentage-berekenen',
    pl: '/pl/kalkulator-wspolczynnika-odrzucen',
    id: '/id/kalkulator-bounce-rate',
    ja: '/ja/bounce-rate-calculator', ko: '/ko/bounce-rate-calculator',
    tr: '/tr/bounce-orani-hesaplama',
  },
  emailSignature: {
    en: '/email-signature-generator',
    'pt-br': '/pt-br/assinatura-de-email',
    de: '/de/e-mail-signatur-erstellen',
    fr: '/fr/generateur-signature-mail',
    es: '/es/generador-de-firmas-de-correo',
    it: '/it/firma-email',
    nl: '/nl/email-handtekening-generator',
    pl: '/pl/generator-stopki-maila',
    id: '/id/generator-tanda-tangan-email',
    ja: '/ja/email-signature-generator', ko: '/ko/email-signature-generator',
    tr: '/tr/mail-imzasi-olusturma',
  },
  emailExtractor: {
    en: '/email-extractor',
    fr: '/fr/extracteur-email',
    es: '/es/extractor-de-emails',
    de: '/de/email-extractor',
    it: '/it/estrattore-email',
    'pt-br': '/pt-br/extrator-de-email',
    nl: '/nl/email-extractor',
    pl: '/pl/ekstraktor-email',
    id: '/id/ekstraktor-email',
    ja: '/ja/email-extractor', ko: '/ko/email-extractor',
    tr: '/tr/e-posta-ayiklayici',
  },
  freeEmailProviders: {
    en: '/free-email-providers',
    fr: '/fr/fournisseurs-messagerie-gratuite',
    es: '/es/proveedores-de-correo-electronico-gratuitos',
    de: '/de/kostenlose-e-mail-anbieter',
    it: '/it/provider-email-gratuiti',
    'pt-br': '/pt-br/provedores-de-email-gratuitos',
    nl: '/nl/gratis-email-providers',
    pl: '/pl/darmowi-dostawcy-poczty-email',
    id: '/id/penyedia-email-gratis',
    ja: '/ja/free-email-providers', ko: '/ko/free-email-providers',
    tr: '/tr/ucretsiz-mail-saglayicilari',
  },
  disposableProviders: { en: '/disposable-email-providers', it: '/it/servizi-email-temporanea', de: '/de/wegwerf-e-mail-anbieter', es: '/es/proveedores-de-correo-desechable', 'pt-br': '/pt-br/provedores-de-e-mail-descartavel', fr: '/fr/fournisseurs-adresse-mail-jetable', nl: '/nl/tijdelijk-e-mailadres-diensten', pl: '/pl/tymczasowy-adres-email', id: '/id/email-sementara', ja: '/ja/disposable-email', ko: '/ko/disposable-email', tr: '/tr/tek-kullanimlik-mail' },
  // The glossary hub and its 60 terms live in lib/i18n/glossary.ts (generated
  // from the term list) and are spread in here so every consumer of CLUSTERS
  // treats them like any other page.
  ...GLOSSARY_CLUSTERS,
} satisfies Record<string, Cluster>

export type ClusterId = keyof typeof CLUSTERS

const SITE = 'https://giggal.ai'

/**
 * The `alternates.languages` object for a page in `clusterId`. Absolute
 * URLs, every live member plus x-default, so every page of a cluster
 * carries the same reciprocal set.
 */
export function hreflangAlternates(clusterId: ClusterId): Record<string, string> {
  const c: Cluster = CLUSTERS[clusterId]
  const out: Record<string, string> = { 'x-default': `${SITE}${c.en}`, en: `${SITE}${c.en}` }
  for (const loc of LOCALES) {
    if (loc === 'en') continue
    const u = c[loc]
    if (u) out[HREFLANG_CODE[loc]] = `${SITE}${u}`
  }
  return out
}

/**
 * `href` (an English path, optionally with #hash or ?query) rewritten to the
 * same page in `locale` when the page exists there; otherwise unchanged.
 * Used by the blog renderer so a localized post links to localized pages.
 */
export function localizeHref(href: string, locale: Locale): { href: string; localized: boolean } {
  if (locale === 'en' || !href.startsWith('/')) return { href, localized: true }
  const m = /^([^?#]*)(.*)$/.exec(href)
  const path = (m?.[1] || '/').replace(/\/$/, '') || '/'
  const rest = m?.[2] || ''
  if (path === `/${locale}` || path.startsWith(`/${locale}/`)) return { href, localized: true }
  for (const c of Object.values(CLUSTERS) as Cluster[]) {
    if (c.en === path) {
      const there = c[locale]
      return there ? { href: there + rest, localized: true } : { href, localized: false }
    }
  }
  return { href, localized: false }
}

/** The cluster whose English member is `path`, if the page exists in another language. */
export function clusterOfEnglish(path: string): ClusterId | undefined {
  for (const [id, c] of Object.entries(CLUSTERS) as [ClusterId, Cluster][]) {
    if (c.en === path) return id
  }
  return undefined
}

/** The URL of `locale`'s page in the cluster, or that locale's home if the page has no alternate. */
export function alternateFor(clusterId: ClusterId | undefined, locale: Locale): string {
  if (clusterId) {
    const c: Cluster = CLUSTERS[clusterId]
    const u = c[locale]
    if (u) return u
  }
  return CLUSTERS.home[locale] ?? '/'
}

// Localized pages with no English counterpart yet (the how-to children). They
// carry no hreflang (a single-language page needs none) and are listed here
// only so the sitemaps and llms.txt know about them. When the English child
// ships, each pair moves into CLUSTERS.
export const LOCALE_ONLY_URLS: Record<Exclude<Locale, 'en'>, string[]> = {
  it: ['/it/verifica-email/email-esistente'],
  de: ['/de/email-adresse-pruefen/gibt-es-diese-email-adresse'],
  es: ['/es/validar-correo/como-saber-si-un-correo-existe'],
  'pt-br': ['/pt-br/verificacao-de-email/como-saber-se-um-email-existe'],
  fr: ['/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide'],
  nl: [],
  pl: ['/pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje'],
  id: ['/id/cek-email-valid/cara-cek-email-aktif'],
  ja: ['/ja/email-checker/check-if-email-exists'],
  ko: ['/ko/email-checker/check-if-email-is-valid'],
  tr: ['/tr/mail-adresi-dogrulama/mail-adresi-gecerli-mi'],
}

/** Every URL of one locale, for its sitemap and llms.txt. */
export function localeUrls(locale: Exclude<Locale, 'en'>): string[] {
  const clustered = Object.values(CLUSTERS)
    .map((c) => (c as Cluster)[locale])
    .filter((u): u is string => !!u)
  return [...clustered, ...LOCALE_ONLY_URLS[locale]]
}

// Kept for the callers written for the Italian wave.
export const IT_ONLY_URLS = LOCALE_ONLY_URLS.it
export function italianUrls(): string[] {
  return localeUrls('it')
}
