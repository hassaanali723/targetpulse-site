// Turkish strings for the shared chrome and the two interactive components.
// One page set for Turkey (SEO-Plan/i18n-batch5-tr-keyword-plan.md).
// Formal "siz" throughout. Terms follow SEO-Plan/i18n-batch5-tr-terminology.md.
// Tool names use the searched forms (final keyword plan, Ahrefs Turkey): Mail
// adresi doğrulama, Geçici mail kontrolü, Tek kullanımlık mail siteleri,
// Ücretsiz mail sağlayıcıları, Mail imzası oluşturma, Toplu mail doğrulama.
// Body text keeps e-posta. Other terms: catch-all alan adı, geçerli /
// geçersiz / riskli / bilinmiyor. Suffixes after names and codes take an
// apostrophe (Gmail'e, SPF'yi, API'yi). Numbers 1.000 and 10.000 (tr-TR),
// decimals 98,5, percent sign first (%98,5), prices $9,90 (currency stays USD),
// dates 22 Ekim 2026.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  // Same links, in the same order, as the English navbar (components/Navbar.tsx).
  links: [
    { name: 'Catch-all doğrulama', href: '/tr/catch-all-dogrulama' },
    { name: 'Entegrasyonlar', href: '/tr/entegrasyonlar' },
    { name: 'MCP', href: '/tr/mcp' },
    { name: 'Fiyatlar', href: '/tr/fiyatlar' },
    { name: 'Ortaklık programı', href: '/tr/ortaklik-programi' },
  ],
  login: 'Giriş yap',
  signup: 'Ücretsiz kaydolun',
  menu: 'Menüyü açın',
  homeAria: 'Giggal.ai ana sayfa',
}

export const footer = {
  blurb:
    'Her posta kutusunun gerçekten var olup olmadığını kontrol eden e-posta doğrulama hizmeti. Böylece kampanyalarınız gerçek gelen kutularına ulaşır. Diğer araçların atladığı catch-all ve accept-all alan adlarında da çalışır.',
  solutions: {
    heading: 'Çözümler',
    links: [
      { name: 'Catch-all doğrulama', href: '/tr/catch-all-dogrulama' },
      { name: 'MCP sunucusu', href: '/tr/mcp' },
    ],
  },
  resources: {
    heading: 'Kaynaklar',
    links: [
      { name: 'Blog', href: '/tr/blog' },
      { name: 'Sözlük', href: '/tr/sozluk' },
      { name: 'Doğrulama araçları karşılaştırması (İngilizce)', href: '/alternatives' },
      { name: 'ZeroBounce alternatifi', href: '/tr/zerobounce-alternatifi' },
      { name: 'NeverBounce alternatifi', href: '/tr/neverbounce-alternatifi' },
      { name: 'Snov.io alternatifi', href: '/tr/snovio-alternatifi' },
      { name: 'API dokümantasyonu', href: '/tr/api-dokumantasyonu' },
    ],
  },
  freeTools: {
    heading: 'Ücretsiz araçlar',
    links: [
      { name: 'Mail adresi doğrulama', href: '/tr/mail-adresi-dogrulama' },
      { name: 'Geçici mail kontrolü', href: '/tr/gecici-mail-kontrolu' },
      { name: 'Tek kullanımlık mail siteleri', href: '/tr/tek-kullanimlik-mail' },
      { name: 'Ücretsiz mail sağlayıcıları', href: '/tr/ucretsiz-mail-saglayicilari' },
      { name: 'E-posta ayıklayıcı', href: '/tr/e-posta-ayiklayici' },
      { name: 'DKIM oluşturucu', href: '/tr/dkim-olusturucu' },
      { name: 'DMARC kaydı oluşturucu', href: '/tr/dmarc-olusturucu' },
      { name: 'MX kaydı sorgulama', href: '/tr/mx-kaydi-sorgulama' },
      { name: 'SPF kaydı kontrolü', href: '/tr/spf-kaydi-kontrol' },
      { name: 'Gmail artı adresleme', href: '/tr/gmail-arti-adresleme' },
      { name: 'Bounce oranı hesaplama', href: '/tr/bounce-orani-hesaplama' },
      { name: 'Mail adresi kombinasyonları', href: '/tr/mail-adresi-kombinasyonlari' },
      { name: 'BIMI kaydı oluşturucu', href: '/tr/bimi-olusturucu' },
      { name: 'Spam kelime kontrolü', href: '/tr/spam-kelime-kontrolu' },
      { name: 'Mail imzası oluşturma', href: '/tr/mail-imzasi-olusturma' },
    ],
  },
  product: {
    heading: 'Ürün',
    // Same order as the English footer: the paid product only.
    links: [
      { name: 'Mail doğrulama', href: '/tr' },
      { name: 'Toplu mail doğrulama', href: '/tr/toplu-mail-dogrulama' },
      { name: 'E-posta listesi temizleme (İngilizce)', href: '/email-list-cleaning' },
      { name: 'Entegrasyonlar', href: '/tr/entegrasyonlar' },
      { name: "E-posta doğrulama API'si (İngilizce)", href: '/email-verification-api' },
      { name: 'Fiyatlar', href: '/tr/fiyatlar' },
    ],
  },
  company: {
    heading: 'Şirket',
    links: [
      { name: 'İletişim', href: '/tr/iletisim' },
      { name: 'Ortaklık programı', href: '/tr/ortaklik-programi' },
    ],
  },
  legal: [
    { name: 'Kullanım Koşulları', href: '/tr/kullanim-kosullari' },
    { name: 'Gizlilik Politikası', href: '/tr/gizlilik-politikasi' },
    { name: 'İade Politikası', href: '/tr/iade-politikasi' },
  ],
  legalHeading: 'Yasal',
  rights: 'Tüm hakları saklıdır.',
  operatedBy: 'Giggal.ai, TargetPulse Ltd (Londra, Birleşik Krallık) tarafından işletilir.',
  abuseReports: 'Kötüye kullanım bildirimi:',
  language: 'Dil',
}

export const announcement = {
  // Empty on purpose: the bar renders text + " " + brand + tail, and a leading
  // space at the start of the line collapses, so the line starts with PureMail.
  text: '',
  brand: 'PureMail',
  tail: "'den özel Google ve Outlook gelen kutuları edinin. Gelen kutusu başına aylık $2,90.",
  dismiss: 'Duyuruyu kapatın',
}

export const cta = {
  headline: 'Listenizin tamamını kontrol edin ve sonuçları karşılaştırın',
  offer: '1.000 ücretsiz kredi. Kredi kartı gerekmez.',
  button: 'Ücretsiz başlayın',
  trust: ['Ücretsiz deneme', 'Kredilerin süresi dolmaz', 'Bilinmiyor sonuçlarında kredi iadesi'],
}

export const consoleStrings = {
  header: 'Gerçek zamanlı test',
  live: 'Canlı test',
  actionLabel: 'İşlem',
  actionTitle: 'Posta kutusu doğrulama',
  placeholder: 'Doğrulanacak e-posta adresi...',
  ariaInput: 'Doğrulanacak e-posta adresi',
  button: 'Adresi doğrulayın',
  buttonRunning: 'Analiz ediliyor',
  diagnostics: 'Kontrol durumu',
  checks: {
    basic: 'Temel geçerlilik kontrolleri',
    dns: 'E-posta sunucuları aranıyor',
    catchall: 'Catch-all kontrolü',
    mailbox: 'Posta kutusu kontrolü',
  },
  idleTitle: 'Posta kutusunu doğrulamaya hazır',
  idleText: 'Posta kutusunun var olup olmadığını görmek için bir iş veya kişisel e-posta adresi girin.',
  spawning: 'KONTROLLER BAŞLATILIYOR...',
  initLog: '[INIT] Doğrulama için güvenli bağlantı açılıyor...',
  limitTitle: 'Ücretsiz kontrol sınırına ulaşıldı',
  limitText: 'Bu saatteki 5 ücretsiz kontrol hakkınızın tamamını kullandınız. Ücretsiz kaydolun ve 1.000 ücretsiz kredi alın. Kredi kartı gerekmez. Bu kredilerle listenizin tamamını doğrulayabilirsiniz.',
  limitButton: '1.000 ücretsiz kredi alın',
  errorTitle: 'Doğrulama hatası',
  errorFailed: 'Doğrulama başarısız oldu. Lütfen tekrar deneyin.',
  errorUnreachable: 'Doğrulama hizmetine ulaşılamadı.',
  invalidSyntax: 'Bu geçerli bir e-posta adresi değil.',
  // Rendered as "{domain} " + this text, so the line reads as a sentence:
  // "example.com catch-all bir alan adıdır".
  isCatchAll: 'catch-all bir alan adıdır',
  notCatchAll: 'catch-all bir alan adı değildir',
  catchAllText: 'Bu alan adı her adrese gelen e-postayı kabul eder. Bu yüzden temel bir kontrol, bu posta kutusunun var olup olmadığını söyleyemez.',
  notCatchAllText: 'Bu alan adında standart kontrol güvenilirdir.',
  resultLabel: 'Sonuç',
  verdictTitle: {
    deliverable: 'Geçerli',
    undeliverable: 'Geçersiz',
    risky: 'Riskli',
    unknown: 'Bilinmiyor',
    catchall: 'Catch-all',
    error: 'Hata',
  },
  verdictLine: {
    deliverable: 'Bu posta kutusu var.',
    undeliverable: 'Bu posta kutusu yok.',
    risky: 'Sunucu e-postayı kabul ediyor, ancak bu posta kutusunu tam olarak doğrulayamıyoruz.',
    unknown: 'Bu posta kutusunu doğrulayamadık.',
    catchall: 'Bu posta kutusunu doğrulayamadık.',
    error: '',
  },
}

export const pricing = {
  payg: 'Kullandıkça öde (tek seferlik)',
  subscription: 'Aylık abonelik',
  save: '%10 tasarruf',
  colVolume: 'Kredi miktarı',
  colRate: 'Kredi başına fiyat',
  colSave: 'Tasarruf',
  colTotal: 'Toplam fiyat',
  credits: 'kredi',
  popular: 'Popüler',
  perCredit: '/ kredi',
  oneTime: 'tek seferlik',
  perMonth: '/ay',
  saveBadge: '%{pct} tasarruf',
  buy: 'Satın alın',
  subscribe: 'Abone olun',
  noDiscount: 'İndirim yok',
  mobVolume: 'Miktar',
  mobRate: 'Birim fiyat',
  mobSave: 'Tasarruf',
  mobPrice: 'Fiyat',
  // tr-TR gives 9,90 and 1.000; with no prefix or suffix the table writes $9,90.
  numberLocale: 'tr-TR',
  currencySuffix: false,
  formula: '1 e-posta adresi doğrulama',
  formulaNote: '(catch-all ve accept-all alan adlarındaki ve SEG arkasındaki adreslerin doğrulaması dahil)',
  formulaCredit: '1 kredi',
  customTitle: 'Özel bir kredi miktarına mı ihtiyacınız var?',
  customText: 'Yüksek hacimler için özel paketler ve size ayrılmış IP havuzları sunuyoruz.',
  customButton: 'Bize ulaşın',
}

export const notFound = {
  kicker: '404',
  title: 'Bu sayfa yok',
  text: 'Adres yanlış yazılmış ya da sayfa taşınmış olabilir. Ücretsiz mail adresi doğrulama aracını ve fiyatlar sayfasını buradan açabilirsiniz.',
  primary: 'Mail adresi doğrulama',
  secondary: 'Ana sayfaya dönün',
}

export const legal = {
  updated: 'Son güncelleme',
  // Rendered as notice + " " + link + tail.
  notice: 'Bu çeviri size kolaylık sağlamak için sunulmuştur. Bir farklılık olması durumunda',
  noticeLink: 'İngilizce sürüm',
  noticeTail: ' geçerlidir. Hukuken bağlayıcı olan tek sürüm budur.',
  breadcrumbHome: 'Ana sayfa',
}

/** Turkish number formatting: 10.000 and 98,5. */
export function trNumber(n: number, decimals = 0): string {
  return n.toLocaleString('tr-TR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

/** Turkish money formatting: $9,90 (currency stays USD, never converted to lira). */
export function trUsd(n: number, decimals = 2): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n)
}

/** 2026-10-22 -> "22 Ekim 2026" */
export function formatDateTr(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}
