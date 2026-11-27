// Turkish Anymail Finder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). "Anymailfinder" as one word
// where the English uses it (title, H1, two H2s), "Anymail Finder" elsewhere.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'anymailfinder',
  path: '/tr/anymailfinder-alternatifi',
  cluster: 'altAnymailfinder',
  metaTitle: 'Mail doğrulama için Anymailfinder alternatifi | Giggal.ai',
  ogTitle: 'Mail listelerini doğrulamak için Anymailfinder alternatifi',
  desc: "Anymailfinder alternatifi mi arıyorsunuz? Anymail Finder fiyatlarını, 10.000 kredisi $9,90 olan kullandıkça öde doğrulama aracı Giggal.ai ile karşılaştırın.",
  h1: ['Elinizdeki listeler için ', 'Anymailfinder alternatifi', ''],
  heroP:
    "Anymail Finder, e-posta adresi bulmak için geliştirilmiştir. Doğrulama aracı ise ek bir araçtır ve ücreti aylık paketten ödenir. Listeniz zaten varsa ve yalnızca mail doğrulama yapmanız gerekiyorsa Giggal.ai bunu 10.000 e-posta için $9,90'a yapar. Abonelik yoktur.",
  bluf: [
    { k: 'Ana iş', v: 'Anymail Finder e-posta adresi bulur. Giggal.ai elinizdeki adresleri doğrular.' },
    { k: 'Fiyat', v: "Bir doğrulama kontrolü 0,2 kredi tutar ve paketler ayda $29'dan başlar. Giggal.ai'da 10.000 kredi $9,90'dır ve bir kez satın alınır." },
    { k: 'Krediler', v: 'Aboneliği iptal ederseniz Anymail Finder kredilerinin süresi dolar. Giggal.ai kredilerinin süresi hiç dolmaz.' },
    { k: 'Bilinmiyor', v: 'Anymail Finder her kontrol için ücret alır. Giggal.ai, bilinmiyor sonuçlarında krediyi iade eder.' },
  ],
  about: {
    heading: 'Anymail Finder nedir?',
    paragraphs: [
      "Anymail Finder (Anymailfinder olarak da yazılır), B2B satış için bir e-posta adresi bulma aracıdır. Bir kişi adı ve şirket girersiniz, size doğrulanmış bir iş e-posta adresi verir. Alan adına, unvana veya LinkedIn URL'sine göre de arama yapabilir.",
      'Bir Chrome eklentisi, 100.000 satıra kadar toplu yükleme ve bir API sunar. Bir kişinin e-posta adresini bulmak 1 kredi tutar. Bu kredi yalnızca doğrulanmış bir adres bulunduğunda düşülür.',
      "Anymail Finder'ın başka kaynaklardan gelen listeler için bir e-posta doğrulama aracı da vardır. Her kontrol 0,2 kredi tutar ve her seferinde ücretlendirilir. Geçerli, riskli veya geçersiz sonucunu verir.",
    ],
  },
  reasons: {
    heading: 'Kullanıcılar neden Anymailfinder alternatifi arıyor',
    items: [
      { k: 'Aylık paket', v: 'Kredileriniz yalnızca abonelik devam ettiği sürece kalır. Aboneliği iptal ederseniz fatura döneminin sonunda süreleri dolar.' },
      { k: 'Kontrol başına ücret', v: 'Doğrulama aracı, doğrulayamadığı adresler dahil her kontrol için 0,2 kredi alır.' },
      { k: 'Deneme için kart', v: '7 günlük deneme kredi kartı ister. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir.' },
      { k: 'Ağ geçitleri', v: 'Anymail Finder, Proofpoint veya Mimecast gibi güvenli e-posta ağ geçitleri (SEG) için destek belirtmez.' },
    ],
  },
  catchAllHeading: 'Anymail Finder ve Giggal.ai catch-all adresleri nasıl ele alır',
  catchAllProse:
    'Anymail Finder, catch-all adreslerin çoğunu geçerli veya geçersiz olarak doğruladığını söyler. Ulaşamadığı az sayıda adres riskli olarak kalır. Giggal.ai da catch-all adresler için adres başına 1 krediyle sonuç verir. Ayrıca adı belirtilen 15 güvenli e-posta ağ geçidinin arkasındaki adresleri kontrol eder. Giggal.ai bir yanıt alamadığında sonuç bilinmiyor olur ve kredi size iade edilir.',
  pricingHeading: 'E-posta doğrulama için Anymail Finder fiyatları',
  pricingProse:
    "Anymail Finder, 400 kredi için ayda $29'dan 100.000 kredi için ayda $799'a kadar aylık paketler satar. Yıllık faturalamada %33 tasarruf edersiniz. Bir doğrulama kontrolü 0,2 kredi tutar. Bu yüzden 10.000 kontrol 2.000 kredi kullanır.",
  pricingExtra: [
    "Bu hesapla ayda 10.000 kontrol $89'lık pakete, 100.000 kontrol $299'lık pakete denk gelir. Kullanılmayan krediler, abonelik devam ettiği sürece sonraki aya aktarılır. Giggal.ai 10.000 krediyi $9,90'a, 100.000 krediyi $76'a bir kez satar. Kredilerin süresi dolmaz.",
  ],
  strengths: {
    heading: 'Anymail Finder ne zaman daha iyi bir seçimdir',
    intro: "Anymail Finder, Giggal.ai'ın yapmadığı işleri yapar. Şu ihtiyaçlar için onu seçin:",
  },
  others: {
    heading: 'Diğer Anymailfinder alternatifleri',
    intro: "Bu araçlar e-posta adresi bulur, doğrular ya da ikisini de yapar. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Findymail', text: "E-posta adreslerini bulur ve doğrular. LinkedIn ve Sales Navigator için bir Chrome eklentisi vardır. Starter paketi ayda $99'dır ve 5.000 bulma kredisi ile 5.000 doğrulama kredisi içerir." },
      { name: 'LeadMagic', text: "E-posta adresi bulma, cep telefonu numaraları ve doğrulama sunan bir B2B veri platformu. Doğrulama, kesin sonuç başına 0,25 kredi tutar. Paketler ayda $99'dan başlar." },
      { name: 'Scrubby', text: "Catch-all adresler ve ağ geçidiyle korunan adresler için bir doğrulama aracı. Kullandıkça öde kredilerinin her biri $0,008'dır ve süreleri hiç dolmaz." },
    ],
  },
  testHeading: 'Bir Anymail Finder dışa aktarımını Giggal.ai ile kontrol edin',
  testSteps: [
    "Anymail Finder'da daha önce kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Anymail Finder'ın riskli olarak işaretlediği satırları, Giggal.ai'ın verdiği sonuçlarla karşılaştırın.",
  ],
  ctaHeadline: 'Daha önce bulduğunuz e-posta adreslerini doğrulayın',
  faqs: [
    {
      q: 'En iyi Anymailfinder alternatifi hangisi?',
      a: "Bu, yapacağınız işe bağlıdır. E-posta adresi bulmak için Findymail veya LeadMagic'e bakın. Elinizdeki bir listeyi doğrulamak için Giggal.ai'da 10.000 kredi $9,90'dır. Abonelik yoktur ve kredilerin süresi hiç dolmaz.",
    },
    {
      q: 'Anymail Finder fiyatı ne kadar?',
      a: "Aylık paketler 400 kredi için $29'dan 100.000 kredi için $799'a kadar gider. Yıllık faturalamada %33 tasarruf edersiniz. Başka bir kaynaktan gelen bir e-posta adresini doğrulamak 0,2 kredi tutar.",
    },
    {
      q: "Anymail Finder'ın ücretsiz denemesi var mı?",
      a: 'Evet. 100 kredilik 7 günlük bir deneme vardır. Bir kredi kartı eklersiniz. Kart kontrol edilir ama ücret alınmaz. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir.',
    },
    {
      q: 'Giggal.ai, Anymail Finder gibi mail adresi bulabilir mi?',
      a: 'Hayır. Giggal.ai yalnızca elinizdeki adresleri doğrular. Önce bir adres bulma aracı kullanın. Ardından göndermeden önce listeyi Giggal.ai ile doğrulayın.',
    },
    {
      q: 'Anymail Finder kredilerinin süresi dolar mı?',
      a: 'Paketiniz aktif olduğu sürece krediler üst sınır olmadan sonraki aya aktarılır. Aboneliği iptal ederseniz fatura döneminin sonunda süreleri dolar. Giggal.ai kredilerinin süresi hiç dolmaz.',
    },
  ],
  breadcrumb: 'Anymail Finder alternatifi',
}

export default cfg
