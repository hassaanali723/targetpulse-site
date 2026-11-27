// tr words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
// Suffixes after a USD amount follow "dolar" ($99'dır, $4'dan), as on the
// existing tr alternative pages.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Ücretsiz kredi yok',
    creditsExpire: 'Kullanılmayan aylık krediler, aylık kotanın 2 katına kadar sonraki aya aktarılır',
    catchAllCreditCost: 'Kesin sonuç başına 0,25 kredi; bilinmiyor sonucu ücretsizdir',
    claimedAccuracy: 'Doğrulama için %99,5 iddia eder',
    pricingBasisNote:
      'LeadMagic, tek bir ortak kredi havuzu olan aylık bir aboneliktir: Essential $99 (5.000 kredi), Growth $249 (20.000), Professional $499 (50.000), Ultimate $849 (100.000). Kesin sonuçlu bir doğrulama 0,25 kredi tutar, bilinmiyor sonucu ücretsizdir. Yukarıdaki rakamlar, o sayıda doğrulamayı karşılayan en küçük aylık paketin fiyatıdır. Yıllık faturalamada iki ay ücretsizdir. Giggal.ai rakamları tek seferlik, kullandıkça öde fiyatlarıdır.',
    betterFitFor: [
      'Doğrulamanın ötesinde geniş zenginleştirme verisi: cep telefonu numaraları, şirket verileri, iş değişiklikleri ve reklam verileri',
      'Kendi catch-all karşılaştırma testinin verilerini yayınlaması; çoğu sağlayıcı bunu yapmaz',
      'Adres bulma, zenginleştirme ve doğrulamayı tek bir abonelikte isteyen ekipler',
      'Uç nokta başına kredi fiyatı olan, geliştiricilere yönelik bir API',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: '100 krediyle 7 günlük deneme; kart kontrol edilir ama ücret alınmaz',
    creditsExpire: 'Abonelik devam ettiği sürece krediler üst sınır olmadan sonraki aya aktarılır; iptal ederseniz fatura döneminin sonunda süreleri dolar',
    catchAllCreditCost: 'Kontrol başına 0,2 kredi, diğer tüm doğrulamalarla aynı',
    claimedAccuracy: '%86,4 kapsamada %98,9 doğruluk iddia eder',
    pricingBasisNote:
      'Anymail Finder aylık bir aboneliktir. Kredi kademeleri ayda $29 karşılığında 400 krediden $799 karşılığında 100.000 krediye kadar gider. Başka bir yerde bulduğunuz bir e-posta adresini doğrulamak, kontrol başına 0,2 kredi tutar. Yukarıdaki rakamlar, o sayıda kontrolü karşılayan en küçük aylık paketlerin fiyatıdır. Yıllık faturalamada %33 tasarruf edersiniz. Ayda bir milyon kontrol, aylık kademelerin üstündedir. Giggal.ai rakamları tek seferlik, kullandıkça öde fiyatlarıdır.',
    betterFitFor: [
      'Ad ve alan adından e-posta adresi bulma; Giggal.ai bunu yapmaz',
      'Belirtilen %97 veya daha yüksek bir teslim garantisi',
      'Abonelik devam ettiği sürece üst sınır olmadan sonraki aya aktarılan krediler',
      'Çok sayıda yayınlanmış içeriği olan, uzun süredir var olan bir marka',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: 'Kayıtta 10 kredi, kredi kartı gerekmez',
    creditsExpire: 'Kullanılmayan krediler, aylık kotanın iki katına kadar sonraki aya aktarılır',
    catchAllCreditCost: '1 kredi, diğer tüm doğrulamalarla aynı',
    claimedAccuracy: "%5'in altında bounce oranı garanti eder; oran bunun üstüne çıkarsa krediler iade edilir",
    pricingBasisNote:
      "Findymail, ayda $99 ile $999 arasında, kredi sayısı belirtmeyen kullanıma dayalı paketler satar. Bir de kredili paket vardır: ayda $99 olan Starter, 5.000 bulma kredisi ve 5.000 doğrulama kredisi içerir. Bunun üstündeki her şey Enterprise olarak teklif üzerine fiyatlandırılır. Bu yüzden ayda 10.000, 100.000 veya bir milyon doğrulama için yayınlanmış bir fiyat yoktur. Giggal.ai rakamları tek seferlik, kullandıkça öde fiyatlarıdır.",
    betterFitFor: [
      'E-posta adreslerini en baştan bulma; Giggal.ai bunu hiç yapmaz',
      'İade edilen kredilerle desteklenen bir bounce oranı garantisi',
      "LinkedIn ve Sales Navigator'da e-posta adreslerini bulan ve doğrulayan bir Chrome eklentisi",
      "SOC 2 Type 2 ve AB'de barındırma",
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: 'Ücretsiz başlangıç, miktar yayınlanmamış',
    creditsExpire: 'Yayınlanmamış',
    catchAllCreditCost: "Ayrı catch-all kredileri: $99'lık pakette ayda 5.000",
    pricingBasisNote:
      "Listmint, iki ayrı kredi havuzu olan aylık bir aboneliktir. Starter ayda $99'dır ve 20.000 standart kredi ile 5.000 catch-all kredisi içerir. Agency ayda $187'dır ve 50.000 standart kredi ile 10.000 catch-all kredisi içerir. Daha büyük miktarlar Enterprise kapsamındadır ve fiyatı talep üzerine verilir. Giggal.ai rakamları tek seferlik, kullandıkça öde fiyatlarıdır.",
    betterFitFor: [
      "Listmint'in elle yaptığını söylediği bir catch-all kontrolü",
      'Gerçek zamanlı catch-all doğrulama',
      'Giriş paketinde yüksek bir aylık standart kredi kotası',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: '1.000 adrese kadar 14 günlük deneme',
    creditsExpire: 'Paket kotası aylıktır; deneme 14 gün sonra sona erer',
    catchAllCreditCost: 'Paket kotasından 1 kişi',
    claimedAccuracy: '%99 iddia eder',
    pricingBasisNote:
      "Allegrow aylık bir aboneliktir. Starter ayda $99'dır ve 5.000 kişi içerir. Ek krediler her 1.000 kredi için $8'dır. Bu yüzden ayda 10.000 kontrol $139 tutar. Bu rakamı yayınlanmış fiyatlardan biz hesapladık. Allegrow böyle bir paket sunmaz. 100.000 ve 1.000.000 satırları, yıllık faturalamayla ayda $1.340 olan Scale Plus Unlimited paketidir. Bu paket sınırsız doğrulama sunar. Giggal.ai rakamları tek seferlik, kullandıkça öde fiyatlarıdır.",
    betterFitFor: [
      "Sınırsız doğrulama sunan bir paket; Giggal.ai'da bunun bir karşılığı yoktur",
      'Doğrulamanın yanında gönderen itibarı puanlaması ve gelen kutusuna ulaşma takibi',
      'SSO ve SOC 2 raporlarıyla HubSpot, Outreach ve Salesloft için yerel entegrasyonlar',
      'Uydurma adreslerde yanlış pozitif sonuçlar üzerine yayınlanmış bir çalışma',
    ],
    estimateNote: "Allegrow'un yayınladığı fiyatlardan bizim hesapladığımız rakam. Allegrow'un sunduğu bir paket değildir.",
    notes: { unlimited: 'sınırsız' },
  },
  no2bounce: {
    freeTier: '100 kredi, kredi kartı gerekmez, kredilerin süresi hiç dolmaz',
    creditsExpire: 'Kredilerin süresi hiç dolmaz ve aylık kullanım sınırı yoktur',
    catchAllCreditCost: 'E-posta başına 1 kredi, standart kontrolle aynı',
    claimedAccuracy: '%99,6 iddia eder',
    betterFitFor: [
      'Çok sayıda fiyat kademesi: 10.000 krediden 50 milyon krediye kadar',
      "Süresi hiç dolmayan krediler, Giggal.ai'daki gibi",
      'Kullandıkça öde fiyatından %15 ve %20 daha ucuz aylık ve yıllık paketler',
      'Aynı kredilerle çalışan bir e-posta adresi bulma aracı ve alan adı araması',
    ],
  },
  quickemailverification: {
    freeTier: 'Günde 100 kredi, ücretsiz',
    creditsExpire: 'Kalıcı kullandıkça öde kredilerinin süresi hiç dolmaz',
    catchAllCreditCost: 'Catch-all durumu olarak bildirilir, doğrulanmaz',
    claimedAccuracy: '%99 iddia eder',
    betterFitFor: [
      'Her gün 100 ücretsiz kredi, buna ek olarak aylık ücretsiz kota',
      'Süresi hiç dolmayan kalıcı kullandıkça öde kredileri',
      "500 kredi için $4'dan başlayan düşük bir giriş fiyatı",
      'Uzun süredir sunulan, gerçek zamanlı bir API',
    ],
  },
  myemailverifier: {
    freeTier: 'Günde 100 kredi, ücretsiz',
    creditsExpire: 'Kredilerin süresi hiç dolmaz',
    catchAllCreditCost: 'Catch-all durumu olarak bildirilir, doğrulanmaz',
    betterFitFor: [
      'Doğrulama başına $0,0025 gibi çok düşük bir temel fiyat',
      'Bir deneme süresinden sonra bitmek yerine her gün yenilenen 100 ücretsiz kredi',
      'Süresi hiç dolmayan krediler ve yüksek miktarlarda bonus kredi kampanyaları',
      "G2, Capterra ve Trustpilot'ta çok sayıda herkese açık değerlendirme",
    ],
  },
  scrubby: {
    freeTier: '200 kredi',
    creditsExpire: 'Kullandıkça öde kredilerinin süresi hiç dolmaz; paket kredileri sonraki aya aktarılır',
    catchAllCreditCost: 'Quick Verification ile 1 kredi; Deep Verification 3 kredi tutar ve 72 saate kadar sürer',
    claimedAccuracy: 'Fiyat sayfasında yayınlanmamış',
    betterFitFor: [
      'Doğrulanması zor adreslere gerçek e-postalar gönderen bir Deep Verification seçeneği',
      'Kredi kartı gerektirmeyen, 200 kredilik ücretsiz paket',
      'Hem kullandıkça öde hem aylık paketler; paket kredileri sonraki aya aktarılır',
      'Geniş bir araç paketi yerine tek bir işe odaklanması',
    ],
    notes: { 'Quote only': 'Yalnızca teklif üzerine' },
  },
  mailfloss: {
    freeTier: 'Ayda 500 doğrulama, ayrıca aboneliklerde 7 günlük deneme',
    creditsExpire: 'Ön ödemeli kredilerin süresi hiç dolmaz; abonelik kredileri her ay sıfırlanır',
    catchAllCreditCost: 'İşaretlenir, sonuç verilmez',
    betterFitFor: [
      'Doğrudan e-posta platformunuza bağlı, her gün otomatik çalışan liste temizliği',
      'Mailchimp, Klaviyo ve HubSpot dahil 41 yerel entegrasyon',
      'Elle yükleme yerine, kurulduktan sonra kendi kendine çalışan bir abonelik',
      'Abonelik ya da ön ödemeli kredi arasında seçim',
    ],
  },
  bounceless: {
    freeTier: 'İş e-posta adresiyle ayda 1.000 kredi, kredi kartı gerekmez',
    creditsExpire: 'Kredi paketlerinden ya da aboneliklerden gelen kredilerin süresi hiç dolmaz',
    catchAllCreditCost: '1 kredilik kontrole catch-all bilgisi dahildir',
    betterFitFor: [
      'İş e-posta adresiyle her ay 1.000 kredilik ücretsiz kota',
      'Tek seferlik kredi paketleri ve aylık abonelikler; kredilerin süresi hiç dolmaz',
      'Tek hesapta ek araçlar: gönderen durumu, gelen kutusuna ulaşma ve kayıt formu kontrolleri',
      'Çok yüksek miktarlarda düşük fiyat: bir milyon kontrol için $579',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}: temel bilgiler`,
  factRows: { price10k: '10.000 kontrol', free: 'Ücretsiz krediler', expiry: 'Kredilerin süresi', catchAll: 'Catch-all' },
  perMonth: '/ay',
  notPublished: 'Yayınlanmamış',
}
