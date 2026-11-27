// Turkish Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). The competitor's words (free tier, strengths) come from
// lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'findymail',
  path: '/tr/findymail-alternatifi',
  cluster: 'altFindymail',
  metaTitle: 'Findymail alternatifleri ve Findymail fiyatları | Giggal.ai',
  ogTitle: 'Findymail alternatifleri ve fiyat karşılaştırması',
  desc: "Findymail fiyatları ayda $99'dan başlar. Findymail alternatiflerini ve rakiplerini karşılaştırın. Giggal.ai, 10.000 kredisi $9,90 olan mail doğrulama aracıdır.",
  h1: ['Elinizdeki mail adreslerini doğrulamak için ', 'Findymail alternatifi', ''],
  heroP:
    "Findymail, B2B e-posta adreslerini bulur ve doğrular. Paketleri ayda $99'dan başlar. Elinizde bir liste varsa ve yalnızca mail doğrulama yapmanız gerekiyorsa Giggal.ai bunu 10.000 e-posta için $9,90'a yapar. Kredileri bir kez satın alırsınız ve süreleri hiç dolmaz.",
  bluf: [
    { k: 'Ana iş', v: 'Findymail e-posta adreslerini bulur, sonra doğrular. Giggal.ai yalnızca doğrular.' },
    { k: 'Fiyat', v: "Findymail ayda $99'dan başlar. Giggal.ai'da 10.000 kredi $9,90'dır ve bir kez satın alınır." },
    { k: 'Ücretsiz krediler', v: 'Findymail 10 ücretsiz kredi verir. Giggal.ai kredi kartı istemeden 1.000 kredi verir.' },
    { k: 'Garanti', v: "Findymail %5'in altında bir bounce oranı vaat eder. Oran bunun üstüne çıkarsa kredileri iade eder." },
  ],
  about: {
    heading: 'Findymail nedir?',
    paragraphs: [
      "Findymail bir B2B e-posta adresi bulma aracıdır. İş e-posta adreslerini bir kişi adı ve şirketten, bir LinkedIn URL'sinden veya bir Sales Navigator aramasından bulur. Bulduğu her e-posta adresi, size verilmeden önce doğrulanır.",
      'Bir Chrome eklentisi, bir Google Sheets eklentisi, toplu yükleme, bir API ve bir telefon numarası bulma aracı sunar. Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead ve Lemlist gibi araçlara bağlanır.',
      'Findymail, başka kaynaklardan gelen listeler için doğrulama kredileri de satar. Diğer araçların riskli olarak işaretlediği catch-all adresleri doğruladığını söyler.',
    ],
  },
  pricingFirst: true,
  pricingHeading: "2026'da Findymail fiyatları",
  pricingProse:
    "Findymail'in iki tür paketi vardır. Kullanıma dayalı paketler şunlardır: ayda $99 olan Individual, $249 olan Pro, $399 olan Team ve $999 olan Scale. Bu paketlerde kredi sayısı değil, kullanıcı sayısı ve dosya boyutu yazar.",
  pricingExtra: [
    "Kredili Starter paketi ayda $99'dır. 5.000 bulma kredisi ve 5.000 doğrulama kredisi içerir. Daha büyük miktarlar Enterprise kapsamındadır ve fiyatı talep üzerine verilir. Kullanılmayan krediler, aylık kotanın iki katına kadar sonraki aya aktarılır.",
    "Giggal.ai'da aylık paket yoktur. 10.000 kredi $9,90, 100.000 kredi $76 ve bir milyon kredi $680'dır.",
  ],
  reasons: {
    heading: 'Ekipler neden Findymail alternatifi arıyor',
    items: [
      { k: 'Yalnızca doğrulama', v: 'Birçok ekibin elinde zaten bir liste vardır. Bu ekiplerin adres bulma aracına değil, yalnızca bir doğrulama aracına ihtiyacı vardır.' },
      { k: 'Miktar', v: 'Starter ayda 5.000 doğrulama kredisi içerir. Daha büyük miktarlar için Enterprise teklifi gerekir.' },
      { k: 'Aylık fatura', v: 'Findymail her ay fatura keser. Giggal.ai kredileri bir kez satın alınır ve süreleri hiç dolmaz.' },
      { k: 'Küçük deneme', v: 'Findymail 10 ücretsiz kredi verir. Bu, gerçek bir listeyi denemek için çok azdır.' },
    ],
  },
  catchAllHeading: 'Catch-all adreslerde Findymail ve Giggal.ai karşılaştırması',
  catchAllProse:
    'Findymail, diğer araçların riskli olarak işaretlediği catch-all adresleri doğrular. Giggal.ai da catch-all adresler için adres başına 1 krediyle sonuç verir. Ayrıca Proofpoint, Mimecast ve Barracuda gibi adı belirtilen 15 güvenli e-posta ağ geçidinin arkasındaki adresleri kontrol eder. Findymail ağ geçidi desteği belirtmez.',
  strengths: {
    heading: "Findymail'in iyi yaptığı işler",
    intro: 'Şunlara ihtiyacınız varsa Findymail daha iyi bir seçimdir:',
  },
  others: {
    heading: 'Diğer Findymail alternatifleri ve rakipleri',
    intro: "Bu araçlar da B2B e-posta adreslerini bulur veya doğrular. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Anymail Finder', text: "Paketleri ayda 400 kredi için $29'dan başlayan bir e-posta adresi bulma aracı. Bulduğu e-posta adreslerinin en az %97'sinin hard bounce olmayacağını vaat eder." },
      { name: 'LeadMagic', text: "E-posta adresi bulma, cep telefonu numaraları ve şirket verileri sunan bir B2B veri platformu. Paketler ayda 5.000 ortak kredi için $99'dan başlar." },
      { name: 'Allegrow', text: "Satış ekipleri için bir doğrulama aracı. Gelen kutusuna ulaşmayı ve alan adı durumunu da takip eder. Starter paketi ayda 5.000 kişi için $99'dır." },
    ],
  },
  testHeading: 'Bir Findymail dışa aktarımını Giggal.ai ile doğrulayın',
  testSteps: [
    "Findymail'de daha önce kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all satırlarını, Findymail'in aynı kişiler için verdiği sonuçlarla karşılaştırın.",
  ],
  ctaHeadline: 'Listenizi abonelik olmadan doğrulayın',
  faqs: [
    {
      q: 'Findymail fiyatı ne kadar?',
      a: "Findymail paketleri ayda $99'dan başlar. Kredili Starter paketi 5.000 bulma kredisi ve 5.000 doğrulama kredisi içerir. Kullanıma dayalı paketler ayda $99 ile $999 arasındadır. Daha büyük miktarların fiyatı talep üzerine verilir.",
    },
    {
      q: "Findymail'in ücretsiz paketi var mı?",
      a: 'Findymail, denemeniz için kredi kartı istemeden 10 ücretsiz kredi verir. Sürekli bir ücretsiz paket yoktur. Giggal.ai kredi kartı istemeden 1.000 ücretsiz kredi verir.',
    },
    {
      q: 'En iyi Findymail alternatifleri hangileri?',
      a: "E-posta adresi bulmak için Anymail Finder ve LeadMagic sık kullanılan seçeneklerdir. Elinizdeki bir listeyi doğrulamak için Giggal.ai'da 10.000 kredi $9,90'dır ve abonelik yoktur.",
    },
    {
      q: 'Findymail mail doğrulama için iyi mi?',
      a: "Evet. Findymail bulduğu her e-posta adresini doğrular ve %5'in altında bir bounce oranı vaat eder. Starter paketi ayda 5.000 doğrulama kredisi içerir. Bu yüzden büyük listeler için bir Enterprise paketi veya başka bir doğrulama aracı gerekir.",
    },
    {
      q: 'Giggal.ai, Findymail gibi mail adresi bulabilir mi?',
      a: 'Hayır. Giggal.ai yalnızca doğrulama yapar. Önce e-posta adreslerini bulun. Ardından göndermeden önce listeyi Giggal.ai ile kontrol edin.',
    },
    {
      q: 'Findymail kredilerinin süresi dolar mı?',
      a: 'Kullanılmayan krediler, aylık kotanızın iki katına kadar sonraki aya aktarılır. Giggal.ai kredilerinin süresi hiç dolmaz.',
    },
  ],
  breadcrumb: 'Findymail alternatifi',
}

export default cfg
