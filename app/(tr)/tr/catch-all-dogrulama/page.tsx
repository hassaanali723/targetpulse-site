import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Turkish catch-all page. Title from the final keyword plan
// ("Catch-all mail doğrulama", SEO-Plan/i18n-batch5-tr-keyword-plan.md).
// Catch-all keeps the English word (catch-all alan adı, catch-all e-posta);
// accept-all is explained once as "her adresi kabul eden". Other tools label
// these addresses "riskli" / "accept-all"; SEG-protected addresses
// "bilinmiyor".

const PATH = '/tr/catch-all-dogrulama'
const TITLE = 'Catch-all mail doğrulama'
const DESC =
  'Catch-all mail doğrulama: catch-all ve accept-all alan adlarındaki adresler %98,5 doğrulukla geçerli veya geçersiz sonuç alır. Mimecast ve Proofpoint dahil.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai catch-all mail doğrulama' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Catch-all mail doğrulama',
  h1Accent: 'Catch-all mail doğrulama:',
  h1Tail: 'catch-all bir adresin geçerli olup olmadığını öğrenin',
  intro:
    'Catch-all alan adı, her adrese "evet" diyen bir alan adıdır. Bu alan adlarına accept-all (her adresi kabul eden) alan adı da denir. Sunucu her adrese evet dediği için çoğu mail doğrulama aracı bu adresleri "riskli" veya "accept-all" olarak işaretler ve kontrolü orada bırakır. Giggal.ai, posta kutusunun gerçekten var olup olmadığını kontrol eder ve %98,5 doğrulukla geçerli veya geçersiz sonucu verir. Mimecast ve Proofpoint gibi güvenli e-posta ağ geçitlerinin (SEG) arkasındaki adresleri de doğrular. Diğer araçlar bu adresleri "bilinmiyor" olarak işaretler.',
  toolLine: (
    <>
      Tek bir adresi kontrol etmek için{' '}
      <Link href="/tr/mail-adresi-dogrulama" className="text-indigo-600 font-bold hover:underline">ücretsiz mail adresi doğrulama aracını</Link> kullanın.
    </>
  ),
  ctaPrimary: 'Catch-all mail doğrulamaya başlayın',
  ctaSecondary: { label: 'Fiyatları görün', href: '/tr/fiyatlar' },
  ctaNote: '1.000 ücretsiz krediyle başlayın. Kredi kartı gerekmez.',
  card: {
    kicker: 'Ayrıntılı doğrulama sürüyor', title: 'Liste sonuçları', file: 'contacts_2026.csv',
    valid: '39.113', invalid: '10.508', risky: '0',
    note: 'Tipik bir listede adreslerin yaklaşık %30\'u catch-all alan adlarındadır. Bu adresleri tek tek kontrol ederiz. Çoğu geçerli çıkar.',
    labels: { valid: 'Geçerli', invalid: 'Geçersiz', risky: 'Riskli' },
  },
  whatKicker: 'Arka plan',
  whatTitle: 'Catch-all e-posta alan adı nedir?',
  whatParas: [
    'Catch-all alan adı, var olmayan adresler dahil her adrese gelen e-postayı kabul eder. Alan adı, @ işaretinden sonraki kısımdır. Örnek olarak company.example alan adını ele alalım. Bu alan adı catch-all ise e-posta sunucusu ann@company.example, sales@company.example ve qx7z41@company.example adreslerinin hepsini kabul eder. Gerçek kişi yalnızca Ann olsa bile üç adrese de "evet" der.',
    'Şirketler bu ayarı hiçbir e-postayı kaçırmamak için yapar. Örneğin gönderen kişi bir ismi yanlış yazdığında da e-posta şirkete ulaşır. Tipik bir satış veya pazarlama listesinde kişilerin yaklaşık %30\'u catch-all alan adlarındadır.',
    'Çoğu doğrulama aracı bu ayarı görünce durur. Bu alan adındaki her adresi "riskli" veya "accept-all" olarak işaretler. Geriye iki seçenek kalır. E-postayı gönderip bounce, spam tuzağı (spam gönderenleri tespit etmek için kullanılan adres) ve gönderen itibarının zarar görmesi riskini alabilirsiniz. Ya da kişileri silip gerçek müşterileri kaybedebilirsiniz.',
  ],
  sameH3: 'Catch-all ve accept-all aynı anlama gelir',
  sameParas: [
    'Bazı doğrulama araçları bu adresleri "accept-all", bazıları "riskli" olarak işaretler. Ayarın kendisine catch-all, catchall veya accept-all denir. Üç ad da her alıcı için 250 OK yanıtı veren bir e-posta sunucusunu anlatır. 250 OK, sunucunun "bu e-postayı kabul ediyorum" anlamına gelen kodudur. Önceki aracınız hangi etiketi kullanmış olursa olsun, catch-all doğrulama aynı şeyi kontrol eder.',
  ],
  howKicker: 'Nasıl çalışır',
  howTitle: 'Giggal.ai catch-all e-postaları nasıl doğrular',
  howText: 'Her catch-all adres üç kontrolden geçer. Bu kontroller tek bir sonuçta birleşir: geçerli veya geçersiz. Okumanız gereken teknik bir rapor yoktur.',
  signals: [
    { title: 'Posta kutusu kontrolü', body: 'Yalnızca alan adının e-posta kabul edip etmediğine değil, posta kutusunun kendisinin var olup olmadığına bakarız. Standart bir kontrol sunucudan genel bir "evet" alır ve durur. Biz bir sonuç elde edene kadar kontrole devam ederiz.' },
    { title: 'Alan adı güven sinyalleri', body: 'Alan adının nasıl kurulduğuna bakarız: SPF, DKIM ve DMARC kayıtlarına, SSL sertifikasına ve barındırma hizmetine. Doğru kurulmuş bir alan adında gerçek posta kutuları bulunma olasılığı daha yüksektir.' },
    { title: 'E-posta ağ geçidi desteği', body: 'Bazı adresler Mimecast, Proofpoint veya Barracuda gibi bir güvenli e-posta ağ geçidinin (SEG) arkasındadır. Diğer araçlar ağ geçidinin arkasını göremez, bu yüzden bu adresleri "bilinmiyor" olarak işaretler. Biz bu adresleri doğrudan doğrularız.' },
  ],
  compareKicker: 'Örnek',
  compareTitle: 'Catch-all sonuçları: tipik bir doğrulama aracı ve Giggal.ai',
  compareText: '48.028 e-posta adresinden oluşan aynı örnek liste, iki farklı yöntemle kontrol edildi.',
  compare: {
    typicalLabel: 'Tipik bir doğrulama aracı', giggalLabel: 'Giggal.ai', count: '48.028 e-posta doğrulandı', catchAllLabel: 'Riskli / accept-all',
    typical: ['31.566', '5.982', '10.480'], giggal: ['39.950', '8.078', '0'],
    typicalNote: 'Güvenle e-posta gönderemeyeceğiniz 10.480 kişi kalır. Hepsi catch-all alan adlarındadır. Bu örnekte yaklaşık %80\'i gerçektir, ancak sonuç hangilerinin gerçek olduğunu söylemez.',
    giggalNote: 'Bu örnekte 8.384 kişi daha riskli grubundan geçerli grubuna geçer. Her adres geçerli veya geçersiz sonucu alır.',
  },
  whoKicker: 'Kimler kullanır',
  whoTitle: 'Catch-all mail doğrulamayı kimler kullanır',
  audience: [
    { title: 'Soğuk e-posta ekipleri', body: 'Yalnızca doğrulanmış kişilere e-posta gönderin. Daha az bounce, gönderim alan adınızın itibarını korur.' },
    { title: 'Pazarlama ajansları', body: 'Her müşteri listesini aynı catch-all e-posta doğrulama aracıyla kontrol edin. Böylece sonuçlar ve raporlar tutarlı kalır.' },
    { title: 'Satış operasyonları', body: 'CRM\'inizde yalnızca e-posta dizilerinizi ve ürün duyurularınızı gerçekten alan kişiler kalsın.' },
    { title: 'Bülten yayıncıları', body: 'Gerçek görünen ama hiç e-posta almayan adresleri kaldırın. Böylece açılma ve tıklama oranlarınız doğru kalır.' },
  ],
  faqTitle: 'Sık sorulan sorular',
  faq: [
    { q: 'Catch-all e-posta alan adı nedir?', a: 'Catch-all alan adı, var olmayan adresler dahil her adrese gelen e-postayı kabul eder. E-posta sunucusu her adrese "evet" der. Bu yüzden normal bir kontrol, adresin arkasında gerçek bir posta kutusu olup olmadığını anlayamaz.' },
    { q: 'Catch-all mail doğrulama ek kredi gerektirir mi?', a: 'Hayır. Catch-all doğrulama da standart doğrulama gibi e-posta başına sabit 1 kredidir.' },
    { q: 'Catch-all doğrulama ne kadar doğru?', a: 'Standart kurumsal listelerde yaklaşık %98,5. Sonuç yalnızca sunucunun ilk yanıtına değil, posta kutusunun var olup olmadığına dayanır. Bu yüzden e-postayı gönderdiğinizde de doğru çıkar.' },
    { q: 'Catch-all kontrolleri listenin geri kalanını yavaşlatır mı?', a: 'Hayır. Catch-all kontrolleri normal kontrollerden sonra değil, onlarla aynı anda çalışır. Listeniz aynı sürede tamamlanır.' },
    { q: 'Başka bir araçla temizlediğim listeden yalnızca catch-all e-postaları doğrulayabilir miyim?', a: 'Evet. Panelinizde "Catch-All Detection" bölümünü açın, yalnızca kontrol etmek istediğiniz adresleri yapıştırın veya yükleyin ve sadece onları doğrulayın. Bu kontroller de e-posta başına sabit 1 kredidir.' },
    { q: 'Giggal.ai\'ın catch-all kontrolü "bilinmiyor" sonucu verirse ne olur?', a: 'Bu nadiren olur. Bir sonuca ulaşamazsak krediniz otomatik olarak iade edilir. Yalnızca tamamlayabildiğimiz doğrulamalar için ödeme yaparsınız.' },
  ],
  ctaHeadline: 'Bir liste doğrulayın ve sonuçları karşılaştırın',
}

export default function CatchAllDogrulamaPage() {
  return <CatchAllPageL10n locale="tr" content={content} />
}
