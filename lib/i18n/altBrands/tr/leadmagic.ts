// Turkish LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'leadmagic',
  path: '/tr/leadmagic-alternatifi',
  cluster: 'altLeadmagic',
  metaTitle: 'LeadMagic alternatifi: LeadMagic fiyatları 2026 | Giggal.ai',
  ogTitle: 'Yalnızca e-posta doğrulama için LeadMagic alternatifi',
  desc: "LeadMagic fiyatları ayda $99'dan başlar ve 5.000 ortak kredi içerir. Giggal.ai bir mail doğrulama aracıdır: 10.000 kredi $9,90'dır ve süresi hiç dolmaz.",
  h1: ['Yalnızca mail doğrulama için ', 'LeadMagic alternatifi', ''],
  heroP:
    "LeadMagic bir B2B veri platformudur. Mail doğrulama ürünlerinden biridir ve diğer ürünlerle tek bir aylık kredi havuzunu paylaşır. Yalnızca mail listelerini doğrulamanız gerekiyorsa Giggal.ai bu tek işi yapar. 10.000 e-posta için bir kez $9,90 ödersiniz.",
  bluf: [
    { k: 'Nedir', v: 'LeadMagic kişi ve şirket verisi satar. Giggal.ai yalnızca e-posta adreslerini doğrular.' },
    { k: 'Fiyat', v: "LeadMagic ayda $99'dan başlar. Giggal.ai'da 10.000 kredi $9,90'dır ve bir kez satın alınır." },
    { k: 'Ücretsiz krediler', v: 'LeadMagic ücretsiz kredi vermez. Giggal.ai kredi kartı istemeden 1.000 kredi verir.' },
    { k: 'Catch-all', v: 'İki araç da catch-all adresler için sonuç verir. Giggal.ai ayrıca adı belirtilen 15 e-posta ağ geçidinin arkasındaki adresleri de kontrol eder.' },
  ],
  about: {
    heading: 'LeadMagic nedir?',
    paragraphs: [
      'LeadMagic, satış ekipleri için bir B2B veri platformudur. İş e-posta adreslerini ve cep telefonu numaralarını bulur, kişi kayıtlarına şirket verisi ekler. Ayrıca iş değişikliklerini ve reklam faaliyetlerini takip eder.',
      "E-posta doğrulama, LeadMagic'in ürünlerinden biridir. Geçerli, geçersiz veya bilinmiyor sonucunu verir. Kesin bir sonuç 0,25 kredi tutar, bilinmiyor sonucu ücretsizdir. Catch-all doğrulama, aynı kredileri kullanan ayrı bir üründür.",
      "Ekipler LeadMagic'i web uygulaması, REST API, CLI veya MCP sunucusu üzerinden kullanır. LeadMagic; Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier ve Make gibi araçlara bağlanır.",
    ],
  },
  pricingFirst: true,
  pricingHeading: "2026'da LeadMagic fiyatları",
  pricingProse:
    "LeadMagic aylık bir aboneliktir. Essential paketi 5.000 kredi için $99'dır. Growth 20.000 kredi için $249, Professional 50.000 kredi için $499 ve Ultimate 100.000 kredi için $849'dır. Tüm ürünler aynı kredileri kullanır.",
  pricingExtra: [
    "Doğrulama başına 0,25 krediyle $99'lık paket ayda 20.000 kontrolü karşılar. Ayda 100.000 kontrol için $499'lık Professional paketi gerekir. Yıllık faturalamada iki ay ücretsizdir. Kullanılmayan aylık krediler, aylık kotanın iki katına kadar sonraki aya aktarılır.",
    "Giggal.ai'da abonelik yoktur. 10.000 kredi $9,90, 100.000 kredi $76 ve bir milyon kredi $680'dır. Kredilerin süresi hiç dolmaz.",
  ],
  reasons: {
    heading: 'Ekipler neden LeadMagic alternatifi arıyor',
    items: [
      { k: 'Aylık fatura', v: 'LeadMagic, hiç doğrulama yapmadığınız aylarda da her ay fatura keser. Giggal.ai kredileri bir kez satın alınır.' },
      { k: 'Ortak krediler', v: 'Doğrulama ve zenginleştirme aynı kredileri kullanır. Büyük bir liste temizliği, kişi bulmak için daha az kredi bırakır.' },
      { k: 'Ücretsiz deneme yok', v: 'LeadMagic ücretsiz kredi vermez. Kendi listenizde denemeden önce ödeme yaparsınız.' },
      { k: 'Ağ geçitleri', v: 'LeadMagic, Proofpoint veya Mimecast gibi güvenli e-posta ağ geçitleri (SEG) için destek belirtmez.' },
    ],
  },
  catchAllHeading: 'Catch-all adreslerde LeadMagic ve Giggal.ai karşılaştırması',
  catchAllProse:
    'LeadMagic, catch-all alan adlarında geçerli, geçersiz veya bilinmiyor sonucunu verir ve bilinmiyor sonuçları için ücret almaz. Giggal.ai da catch-all adresler için adres başına 1 krediyle sonuç verir. Ayrıca Proofpoint, Mimecast ve Barracuda gibi 15 güvenli e-posta ağ geçidinin arkasındaki adresleri kontrol eder. Bu ağ geçitleri önce her adresi kabul eder. Bu yüzden basit bir kontrol, gerçek bir adresi sahte bir adresten ayıramaz.',
  strengths: {
    heading: "LeadMagic'in iyi yaptığı işler",
    intro: 'Şunlara ihtiyacınız varsa LeadMagic daha iyi bir seçimdir:',
  },
  others: {
    heading: 'Diğer LeadMagic alternatifleri',
    intro: "Adres bulma ve doğrulamayı tek bir araçta istiyorsanız şu seçeneklere bakabilirsiniz. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Findymail', text: "Doğrulama da yapan bir e-posta adresi bulma aracı. Starter paketi ayda $99'dır ve 5.000 bulma kredisi ile 5.000 doğrulama kredisi içerir. Findymail %5'in altında bir bounce oranı vaat eder." },
      { name: 'Anymail Finder', text: "Ayrı bir doğrulama aracı da olan bir e-posta adresi bulma aracı. Bir doğrulama kontrolü 0,2 kredi tutar. Paketler ayda 400 kredi için $29'dan başlar." },
      { name: 'no2bounce', text: "Kullandıkça öde kredileri olan bir doğrulama aracı. Kredilerin süresi hiç dolmaz. 10.000 kredi $20'dır." },
    ],
  },
  testHeading: "Giggal.ai'ı LeadMagic'in kontrol ettiği bir listede deneyin",
  testSteps: [
    "LeadMagic'te daha önce kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all satırlarını, LeadMagic'in aynı adresler için verdiği sonuçlarla karşılaştırın.",
  ],
  ctaHeadline: 'Listenizi aylık paket olmadan doğrulayın',
  faqs: [
    {
      q: 'LeadMagic fiyatı ne kadar?',
      a: "LeadMagic ayda 5.000 kredi için $99'dan başlar. Paketler ayda 100.000 kredi için $849'a kadar çıkar. E-posta doğrulama, kesin sonuç başına 0,25 kredi tutar. Bu yüzden $99'lık paket 20.000 kontrolü karşılar.",
    },
    {
      q: "LeadMagic'in ücretsiz paketi var mı?",
      a: 'Hayır. LeadMagic ücretsiz kredi olmadığını belirtir. Search özelliğinin 14 günlük bir denemesi vardır. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir. Bu krediler toplu yüklemede de kullanılabilir.',
    },
    {
      q: 'Giggal.ai iyi bir LeadMagic alternatifi mi?',
      a: "Yalnızca e-posta doğrulamaya ihtiyacınız varsa evet. Giggal.ai listeleri doğrular, catch-all adresler için sonuç verir ve 10.000 kontrol için $9,90'dır. E-posta adresi veya telefon numarası bulmaz. Bu yüzden LeadMagic'in veri ürünlerinin yerini tutmaz.",
    },
    {
      q: 'LeadMagic bilinmiyor sonuçları için ücret alır mı?',
      a: 'Hayır. LeadMagic kesin bir sonuç için 0,25 kredi alır, bilinmiyor sonucu için ücret almaz. Giggal.ai da sonuç bilinmiyor olduğunda krediyi iade eder.',
    },
    {
      q: 'LeadMagic yalnızca mail doğrulama için alınmaya değer mi?',
      a: "Veri ürünlerini her ay kullanıyorsanız değer. Yalnızca doğrulama için ayda en az $99 ödersiniz. Giggal.ai 10.000 kontrolü bir kez $9,90'a satar.",
    },
    {
      q: "LeadMagic'in catch-all testi tarafsız mı?",
      a: "Hayır. LeadMagic bu testi Şubat 2026'da yayınladı ve kendini birinci sıraya koydu. Bunu bir sağlayıcının yaptığı test olarak okuyun. Giggal.ai bu testteki araçlar arasında değildi.",
    },
  ],
  breadcrumb: 'LeadMagic alternatifi',
}

export default cfg
