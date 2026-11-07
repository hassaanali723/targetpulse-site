// All page copy for Mimecast email verification, one object per language the page
// ships in. The page is components/pages/Mimecast/MimecastPage.tsx; the URLs live in
// CLUSTERS.mimecast (lib/i18n/clusters.ts).
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists. FAQ answers are plain text.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface MimecastStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogAlt: string
  /** Breadcrumb names: the SEG parent page, then this page. */
  segCrumb: string
  crumb: string
  /** H1 is the lead text plus the highlighted word. */
  h1Lead: string
  h1Highlight: string
  heroIntro: string
  heroCta: string
  pricingCta: string
  heroNote: string
  whatTitle: string
  whatParas: [string, string, string]
  responseTitle: string
  responseParas: [string, string]
  notAllowedTitle: string
  notAllowedPara: string
  handlesTitle: string
  handlesParas: [string, string, string]
  resultsTitle: string
  resultHead: string
  meaningHead: string
  /** Same order as the result rows in the page: deliverable, undeliverable, risky, unknown. */
  results: [ResultRow, ResultRow, ResultRow, ResultRow]
  refundNote: string
  faqTitle: string
  faqs: FaqItem[]
  relatedTitle: string
  /** Link labels: SEG page, catch-all page, pricing. */
  relatedLinks: [string, string, string]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line, button and trust row. */
  ctaSupporting?: string
  ctaButton?: string
  ctaTrust?: [string, string, string]
}

interface ResultRow {
  label: string
  meaning: string
}

const en: MimecastStrings = {
  metaTitle: 'Mimecast Email Verification | Giggal.ai',
  ogTitle: 'Mimecast Email Verification',
  description:
    'Mimecast hides whether a mailbox exists, so most verifiers return Unknown. Giggal.ai routes around Mimecast and returns a real verification result instead.',
  ogAlt: 'Giggal.ai email verification',
  segCrumb: 'SEG Email Verification',
  crumb: 'Mimecast Email Verification',
  h1Lead: 'Verify emails behind',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast is built to stop anyone working out which mailboxes exist on a domain, which is why most verifiers hand back Unknown. Giggal.ai takes a different route and returns a real email verification result.',
  heroCta: 'Start free with 1,000 credits',
  pricingCta: 'See pricing',
  heroNote: 'No card required. Credits never expire.',
  whatTitle: 'What Mimecast does to email verification',
  whatParas: [
    'Mimecast sits in front of the real mail server and answers on its behalf. Mail headed for the domain reaches Mimecast first, and so does anything trying to check whether a mailbox exists. The verifier never actually talks to the system that knows the answer.',
    "Blocking that kind of mailbox lookup is a deliberate feature, not a side effect. Mimecast is supposed to prevent directory harvesting and mailbox enumeration, because that is how an attacker maps out a company's users. Stopping it is the point.",
    'When queried, Mimecast returns a deliberately vague response rather than confirming or denying the mailbox. A verifier that takes that response at face value has two options, and both are bad. It can guess, which puts wrong results into your list, or it can give up and mark the address Unknown, which leaves a real contact unresolved.',
  ],
  responseTitle: 'The response Mimecast sends back',
  responseParas: [
    'People who hit this usually see one of two things: a verification result stuck on Unknown, or a bounce message from their own sending tool. The wording varies, but it commonly mentions an internal resource being temporarily unavailable, or a recipient not being allowed. These are messages Mimecast sends when something checks whether one of the mailboxes it protects exists.',
    'The one behaviour our engine relies on here is specific: it recognises the "internal resource temporarily unavailable" anti-enumeration response and does not treat it as a result. Everything else in this space is real-world context for what you might see, not a claim that we pattern-match every possible string a gateway can return.',
  ],
  notAllowedTitle: 'Why "recipient is not allowed" does not mean the address is invalid',
  notAllowedPara:
    "That message reflects a gateway policy decision about how mail is accepted, not a statement about whether the mailbox exists. The address behind it is often perfectly valid. You are reading the gateway's rules, not the mail server's answer.",
  handlesTitle: 'How Giggal.ai handles Mimecast',
  handlesParas: [
    "The domain's MX records identify Mimecast before verification begins, so the address is on the Mimecast path from the start rather than after a failed attempt.",
    'Direct mail server queries are skipped entirely for Mimecast. Not retried, not throttled, skipped. There are two reasons. Mimecast refuses the check, so there is nothing to gain. And repeated attempts flag the sending IP, which would degrade results across every other domain being verified in the same run.',
    'The email verification result comes from a different signal instead, one that does not rely on Mimecast answering a direct query. When that vague response does show up, it is recognised and never recorded as a real answer. The address comes back as a real deliverable or undeliverable result, or as Unknown with the credit refunded, but not as a guess dressed up as an answer.',
  ],
  resultsTitle: 'What you get back',
  resultHead: 'Result',
  meaningHead: 'Meaning',
  results: [
    { label: 'Deliverable', meaning: 'The mailbox exists and will accept mail' },
    { label: 'Undeliverable', meaning: 'The mailbox does not exist' },
    { label: 'Risky', meaning: 'The address exists but carries deliverability risk' },
    { label: 'Unknown', meaning: 'We could not verify the address' },
  ],
  refundNote:
    'When we cannot verify an address, the credit is refunded automatically. You only pay for verifications we complete.',
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Does a Mimecast bounce mean the email address is wrong?',
      a: 'Usually not. Mimecast messages of that kind reflect a gateway policy decision, not a statement about whether the mailbox exists. The address is often perfectly valid.',
    },
    {
      q: 'Why do most verifiers return Unknown on Mimecast domains?',
      a: 'They connect to the mail server to ask whether a mailbox exists. Mimecast intercepts that and answers with something deliberately vague, so the verifier has nothing to work with.',
    },
    {
      q: 'How does Giggal.ai verify Mimecast domains?',
      a: 'We use alternate verification signals for Mimecast domains. Direct mailbox queries get refused, and repeated attempts damage sender IP reputation, which would degrade results on every other domain in the list.',
    },
    {
      q: 'Do I need to separate Mimecast addresses before uploading?',
      a: 'No. Mimecast domains are identified automatically from MX records during the run.',
    },
    {
      q: 'Does verifying a Mimecast address cost extra?',
      a: 'No. Standard verification is 1 credit regardless of what gateway sits in front of the domain.',
    },
  ],
  relatedTitle: 'Related',
  relatedLinks: ['how SEG verification works', 'verify catch-all & risky emails', 'pricing and credits'],
  ctaHeadline: 'Stop losing Mimecast contacts to Unknown',
  ctaSupporting: '1,000 free credits, no card required.',
  ctaButton: 'Start verifying for free',
  ctaTrust: ['Free trial', 'Credits never expire', 'Refunds on Unknown'],
}

// Korean. Formal polite style (합니다체); terms from SEO-Plan/i18n-batch4-ko-terminology.md.
const ko: MimecastStrings = {
  metaTitle: 'Mimecast 이메일 검증 | Giggal.ai',
  ogTitle: 'Mimecast 이메일 검증',
  description:
    'Mimecast는 메일함이 있는지 숨기기 때문에 대부분의 검증 도구는 알 수 없음을 반환합니다. Giggal.ai는 Mimecast의 응답에 의존하지 않는 다른 방법으로 실제 검증 결과를 반환합니다.',
  ogLocale: 'ko_KR',
  ogAlt: 'Giggal.ai 이메일 검증',
  segCrumb: 'SEG 이메일 검증',
  crumb: 'Mimecast 이메일 검증',
  h1Lead: 'Mimecast 뒤에 있는',
  h1Highlight: '이메일 주소 검증',
  heroIntro:
    'Mimecast는 도메인에 어떤 메일함이 있는지 아무도 알아낼 수 없도록 만들어졌습니다. 그래서 대부분의 검증 도구는 알 수 없음을 반환합니다. Giggal.ai는 다른 경로를 사용해 실제 이메일 검증 결과를 반환합니다.',
  heroCta: '무료 크레딧 1,000개로 시작하기',
  pricingCta: '요금 보기',
  heroNote: '신용카드 불필요. 크레딧 유효기간 없음.',
  whatTitle: 'Mimecast가 이메일 검증에 미치는 영향',
  whatParas: [
    'Mimecast는 실제 메일 서버 앞에 있으며, 메일 서버 대신 응답합니다. 도메인으로 가는 메일은 먼저 Mimecast에 도착합니다. 메일함이 있는지 확인하려는 요청도 마찬가지입니다. 검증 도구는 답을 아는 시스템과 실제로 통신하지 못합니다.',
    '이런 메일함 조회를 막는 것은 의도된 기능이며, 부작용이 아닙니다. Mimecast는 디렉터리 수집(directory harvesting)과 메일함 열거(mailbox enumeration)를 막도록 만들어졌습니다. 공격자는 이런 방법으로 회사의 사용자 목록을 파악하기 때문입니다. 이를 막는 것이 Mimecast의 목적입니다.',
    'Mimecast는 조회를 받으면 메일함이 있다고도 없다고도 하지 않고, 일부러 모호한 응답을 보냅니다. 이 응답을 그대로 믿는 검증 도구에는 두 가지 선택지가 있으며, 둘 다 좋지 않습니다. 추측하면 리스트에 잘못된 결과가 들어갑니다. 포기하고 주소를 알 수 없음으로 표시하면 실제 연락처가 판별되지 않은 채 남습니다.',
  ],
  responseTitle: 'Mimecast가 보내는 응답',
  responseParas: [
    '이 문제를 겪는 사람은 보통 두 가지 중 하나를 봅니다. 알 수 없음에서 바뀌지 않는 검증 결과, 또는 자신이 쓰는 발송 도구의 반송 메시지입니다. 문구는 다양하지만, 내부 리소스를 일시적으로 사용할 수 없다는 내용이나 수신자가 허용되지 않는다는 내용이 흔합니다. 이런 메시지는 Mimecast가 보호하는 메일함이 있는지 무언가가 확인하려 할 때 Mimecast가 보내는 것입니다.',
    '여기서 Giggal의 엔진이 의존하는 동작은 하나로 정해져 있습니다. 엔진은 “internal resource temporarily unavailable”(내부 리소스 일시 사용 불가)이라는 열거 방지 응답을 알아보고, 이를 결과로 취급하지 않습니다. 이 밖의 내용은 실제로 볼 수 있는 응답에 대한 배경 설명입니다. 게이트웨이가 반환할 수 있는 모든 문구를 패턴으로 찾아낸다는 뜻은 아닙니다.',
  ],
  notAllowedTitle: '“recipient is not allowed”가 주소가 무효라는 뜻이 아닌 이유',
  notAllowedPara:
    '이 메시지는 메일을 어떻게 받을지에 대한 게이트웨이의 정책 결정을 나타냅니다. 메일함이 있는지에 대한 답이 아닙니다. 그 뒤에 있는 주소는 문제없이 유효한 경우가 많습니다. 이 메시지는 메일 서버의 답이 아니라 게이트웨이의 규칙입니다.',
  handlesTitle: 'Giggal.ai의 Mimecast 처리 방식',
  handlesParas: [
    '검증을 시작하기 전에 도메인의 MX 레코드로 Mimecast를 식별합니다. 그래서 주소는 검증에 실패한 뒤가 아니라 처음부터 Mimecast 경로로 처리됩니다.',
    'Mimecast에는 메일 서버 직접 조회를 아예 하지 않습니다. 다시 시도하지도, 속도를 늦추지도 않고 건너뜁니다. 이유는 두 가지입니다. Mimecast가 검사를 거부하므로 얻을 것이 없습니다. 그리고 반복해서 시도하면 발송 IP에 플래그가 붙어, 같은 작업에서 검증하는 다른 모든 도메인의 결과가 나빠집니다.',
    '이메일 검증 결과는 대신 다른 신호에서 얻습니다. 이 신호는 Mimecast가 직접 조회에 응답하는지와 상관이 없습니다. 모호한 응답이 오면 이를 알아보고 실제 답으로 기록하지 않습니다. 주소는 실제 전송 가능 또는 전송 불가 결과로 돌아오거나, 크레딧이 환불된 알 수 없음으로 돌아옵니다. 답처럼 보이게 만든 추측으로 돌아오지는 않습니다.',
  ],
  resultsTitle: '받게 되는 결과',
  resultHead: '결과',
  meaningHead: '의미',
  results: [
    { label: '전송 가능', meaning: '메일함이 있고 메일을 받습니다' },
    { label: '전송 불가', meaning: '메일함이 없습니다' },
    { label: '위험', meaning: '주소는 있지만 전송에 위험이 있습니다' },
    { label: '알 수 없음', meaning: '주소를 검증하지 못했습니다' },
  ],
  refundNote:
    '주소를 검증하지 못하면 크레딧이 자동으로 환불됩니다. 완료된 검증에 대해서만 비용을 냅니다.',
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      q: 'Mimecast 반송은 이메일 주소가 잘못되었다는 뜻입니까?',
      a: '보통은 아닙니다. 이런 Mimecast 메시지는 게이트웨이의 정책 결정을 나타낼 뿐, 메일함이 있는지에 대한 답이 아닙니다. 주소는 문제없이 유효한 경우가 많습니다.',
    },
    {
      q: '대부분의 검증 도구가 Mimecast 도메인에서 알 수 없음을 반환하는 이유는 무엇입니까?',
      a: '이런 도구는 메일 서버에 연결해 메일함이 있는지 묻습니다. Mimecast가 이 요청을 가로채 일부러 모호하게 답하므로, 검증 도구는 판단할 근거를 얻지 못합니다.',
    },
    {
      q: 'Giggal.ai는 Mimecast 도메인을 어떻게 검증합니까?',
      a: 'Mimecast 도메인에는 다른 검증 신호를 사용합니다. 메일함 직접 조회는 거부되고, 반복해서 시도하면 발송 IP 평판이 나빠집니다. 그러면 리스트에 있는 다른 모든 도메인의 결과도 나빠집니다.',
    },
    {
      q: '업로드 전에 Mimecast 주소를 따로 분리해야 합니까?',
      a: '아니요. Mimecast 도메인은 작업 중에 MX 레코드로 자동 식별됩니다.',
    },
    {
      q: 'Mimecast 주소를 검증하면 추가 비용이 듭니까?',
      a: '아니요. 도메인 앞에 어떤 게이트웨이가 있든 일반 검증은 크레딧 1개입니다.',
    },
  ],
  relatedTitle: '관련 페이지',
  relatedLinks: ['SEG 검증 방식', '캐치올 이메일과 위험 이메일 검증', '요금과 크레딧'],
  ctaHeadline: 'Mimecast 연락처를 알 수 없음 결과로 잃지 마십시오',
}

const tr: MimecastStrings = {
  metaTitle: 'Mimecast mail doğrulama | Giggal.ai',
  ogTitle: 'Mimecast mail doğrulama',
  description: 'Mimecast posta kutusunun var olup olmadığını gizler, bu yüzden çoğu araç bilinmiyor sonucu verir. Giggal.ai başka bir yöntemle gerçek sonuç verir.',
  ogLocale: 'tr_TR',
  ogAlt: 'Giggal.ai e-posta doğrulama',
  segCrumb: 'SEG mail doğrulama',
  crumb: 'Mimecast mail doğrulama',
  h1Lead: 'Mimecast arkasındaki',
  h1Highlight: 'mail adreslerini doğrulayın',
  heroIntro: 'Mimecast, bir alan adında hangi posta kutularının var olduğunun öğrenilmesini engellemek için tasarlanmıştır. Bu yüzden çoğu doğrulama aracı bilinmiyor sonucu döndürür. Giggal.ai farklı bir yol izler ve gerçek bir mail doğrulama sonucu döndürür.',
  heroCta: '1.000 krediyle ücretsiz başlayın',
  pricingCta: 'Fiyatları görün',
  heroNote: 'Kredi kartı gerekmez. Kredilerin süresi dolmaz.',
  whatTitle: 'Mimecast e-posta doğrulamayı nasıl etkiler',
  whatParas: [
    "Mimecast, gerçek e-posta sunucusunun önünde durur ve onun adına yanıt verir. Alan adına giden e-postalar önce Mimecast'e ulaşır. Bir posta kutusunun var olup olmadığını kontrol etmeye çalışan her istek de önce Mimecast'e ulaşır. Doğrulama aracı, yanıtı bilen sistemle hiçbir zaman doğrudan konuşmaz.",
    "Bu tür posta kutusu sorgularını engellemek bir yan etki değil, bilinçli bir özelliktir. Mimecast'in amacı dizin toplamayı (directory harvesting) ve posta kutusu taramasını önlemektir, çünkü saldırganlar bir şirketin kullanıcı listesini bu yöntemle çıkarır. Bunu durdurmak ürünün asıl amacıdır.",
    'Mimecast sorgulandığında posta kutusunu doğrulamak ya da reddetmek yerine bilerek belirsiz bir yanıt döndürür. Bu yanıtı olduğu gibi kabul eden bir doğrulama aracının iki seçeneği vardır ve ikisi de kötüdür. Tahmin edebilir, bu da listenize yanlış sonuçlar ekler. Ya da vazgeçip adresi bilinmiyor olarak işaretleyebilir, bu da gerçek bir kişiyi sonuçsuz bırakır.',
  ],
  responseTitle: "Mimecast'in geri gönderdiği yanıt",
  responseParas: [
    "Bu sorunla karşılaşanlar genellikle iki şeyden birini görür: bilinmiyor sonucunda kalan bir doğrulama ya da kendi gönderim aracından gelen bir bounce mesajı. İfadeler değişir ama mesaj genellikle geçici olarak kullanılamayan bir dahili kaynaktan veya izin verilmeyen bir alıcıdan söz eder. Bunlar, koruduğu posta kutularından birinin var olup olmadığı kontrol edildiğinde Mimecast'in gönderdiği mesajlardır.",
    'Motorumuzun burada dayandığı davranış tektir ve bellidir: "internal resource temporarily unavailable" (dahili kaynak geçici olarak kullanılamıyor) şeklindeki tarama karşıtı yanıtı tanır ve bunu bir sonuç olarak kabul etmez. Bu konudaki diğer bilgiler, karşılaşabileceğiniz mesajlar hakkında gerçek kullanımdan gelen bağlamdır. Bir ağ geçidinin döndürebileceği her olası metni eşleştirdiğimiz anlamına gelmez.',
  ],
  notAllowedTitle: '"recipient is not allowed" mesajı neden adresin geçersiz olduğu anlamına gelmez',
  notAllowedPara: 'Bu mesaj, e-postanın nasıl kabul edileceğine dair bir ağ geçidi politikası kararını yansıtır. Posta kutusunun var olup olmadığı hakkında bir bilgi değildir. Arkasındaki adres çoğu zaman tamamen geçerlidir. Okuduğunuz şey e-posta sunucusunun yanıtı değil, ağ geçidinin kurallarıdır.',
  handlesTitle: "Giggal.ai, Mimecast'i nasıl ele alır",
  handlesParas: [
    "Alan adının MX kayıtları, doğrulama başlamadan önce Mimecast'i tespit eder. Böylece adres, başarısız bir denemeden sonra değil, en baştan Mimecast yoluna alınır.",
    "Mimecast için doğrudan e-posta sunucusu sorguları tamamen atlanır. Tekrar denenmez, yavaşlatılmaz, atlanır. Bunun iki nedeni vardır. Mimecast kontrolü reddeder, bu yüzden denemenin bir faydası yoktur. Ayrıca tekrarlanan denemeler gönderen IP'nin işaretlenmesine yol açar. Bu da aynı çalıştırmada doğrulanan diğer tüm alan adlarındaki sonuçları kötüleştirir.",
    "Mail doğrulama sonucu bunun yerine farklı bir sinyalden gelir. Bu sinyal, Mimecast'in doğrudan bir sorguyu yanıtlamasına dayanmaz. Belirsiz yanıt geldiğinde tanınır ve hiçbir zaman gerçek bir yanıt olarak kaydedilmez. Adres gerçek bir teslim edilebilir veya teslim edilemez sonucuyla ya da kredisi iade edilmiş bir bilinmiyor sonucuyla döner. Yanıt gibi gösterilen bir tahminle dönmez.",
  ],
  resultsTitle: 'Ne sonuç alırsınız',
  resultHead: 'Sonuç',
  meaningHead: 'Anlamı',
  results: [
    {
      label: 'Teslim edilebilir',
      meaning: 'Posta kutusu var ve e-posta kabul eder',
    },
    {
      label: 'Teslim edilemez',
      meaning: 'Posta kutusu yok',
    },
    {
      label: 'Riskli',
      meaning: 'Adres var ama teslim edilebilirlik riski taşır',
    },
    {
      label: 'Bilinmiyor',
      meaning: 'Adresi doğrulayamadık',
    },
  ],
  refundNote: 'Bir adresi doğrulayamadığımızda kredi otomatik olarak iade edilir. Yalnızca tamamladığımız doğrulamalar için ödeme yaparsınız.',
  faqTitle: 'Sık sorulan sorular',
  faqs: [
    {
      q: 'Mimecast bounce mesajı mail adresinin yanlış olduğu anlamına mı gelir?',
      a: "Genellikle hayır. Mimecast'in bu tür mesajları bir ağ geçidi politikası kararını yansıtır. Posta kutusunun var olup olmadığı hakkında bilgi vermez. Adres çoğu zaman tamamen geçerlidir.",
    },
    {
      q: 'Çoğu doğrulama aracı Mimecast alan adlarında neden bilinmiyor sonucu verir?',
      a: 'Bu araçlar bir posta kutusunun var olup olmadığını sormak için e-posta sunucusuna bağlanır. Mimecast bu sorguyu araya girerek alır ve bilerek belirsiz bir yanıt verir. Bu yüzden doğrulama aracının elinde kullanabileceği bir bilgi kalmaz.',
    },
    {
      q: 'Giggal.ai, Mimecast alan adlarındaki mail adreslerini nasıl doğrular?',
      a: "Mimecast alan adları için başka doğrulama sinyalleri kullanırız. Doğrudan posta kutusu sorguları reddedilir. Tekrarlanan denemeler de gönderen IP'nin itibarına zarar verir ve bu, listedeki diğer tüm alan adlarındaki sonuçları kötüleştirir.",
    },
    {
      q: 'Yüklemeden önce Mimecast adreslerini ayırmam gerekir mi?',
      a: 'Hayır. Mimecast alan adları çalıştırma sırasında MX kayıtlarından otomatik olarak belirlenir.',
    },
    {
      q: 'Mimecast arkasındaki bir mail adresini doğrulamak ek ücretli mi?',
      a: 'Hayır. Alan adının önünde hangi ağ geçidi olursa olsun standart doğrulama 1 kredidir.',
    },
  ],
  relatedTitle: 'İlgili sayfalar',
  relatedLinks: [
    'SEG doğrulama nasıl çalışır',
    'catch-all ve riskli e-postaları doğrulayın',
    'fiyatlar ve krediler',
  ],
  ctaHeadline: 'Mimecast arkasındaki kişiler için bilinmiyor yerine gerçek sonuç alın',
}

const fr: MimecastStrings = {
  metaTitle: 'Vérification d’email Mimecast | Giggal.ai',
  ogTitle: 'Vérification d’email Mimecast',
  description:
    'Mimecast cache l’existence des boîtes mail, donc la plupart des vérificateurs renvoient Inconnu. Giggal.ai contourne Mimecast et renvoie un vrai résultat.',
  ogLocale: 'fr_FR',
  ogAlt: 'Vérification d’email Giggal.ai',
  segCrumb: 'Vérification d’email SEG',
  crumb: 'Vérification d’email Mimecast',
  h1Lead: 'Vérifiez les emails protégés par',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast est conçu pour empêcher quiconque de savoir quelles boîtes mail existent sur un domaine. C’est pourquoi la plupart des vérificateurs renvoient Inconnu. Giggal.ai passe par une autre voie et renvoie un vrai résultat de vérification d’email.',
  heroCta: 'Commencer gratuitement avec 1 000 crédits',
  pricingCta: 'Voir les tarifs',
  heroNote: 'Aucune carte requise. Les crédits n’expirent jamais.',
  whatTitle: 'Ce que Mimecast fait à la vérification d’email',
  whatParas: [
    'Mimecast se place devant le vrai serveur de messagerie et répond à sa place. Le courrier destiné au domaine arrive d’abord chez Mimecast, tout comme chaque tentative de vérifier si une boîte mail existe. Le vérificateur ne parle jamais au système qui connaît la réponse.',
    'Bloquer ce type de recherche de boîte mail est une fonction voulue, pas un effet secondaire. Mimecast doit empêcher la collecte d’adresses (directory harvesting) et l’énumération des boîtes mail, car c’est ainsi qu’un attaquant dresse la liste des utilisateurs d’une entreprise. C’est justement le but.',
    'Quand on l’interroge, Mimecast renvoie une réponse volontairement vague au lieu de confirmer ou de nier l’existence de la boîte mail. Un vérificateur qui prend cette réponse au pied de la lettre a deux options, et les deux sont mauvaises. Il peut deviner, ce qui met de faux résultats dans votre liste. Il peut aussi abandonner et marquer l’adresse comme Inconnu, ce qui laisse un vrai contact sans réponse.',
  ],
  responseTitle: 'La réponse que renvoie Mimecast',
  responseParas: [
    'Les personnes qui rencontrent ce cas voient en général l’une de deux choses : un résultat de vérification bloqué sur Inconnu, ou un message de rebond de leur propre outil d’envoi. Le texte varie, mais il mentionne souvent une ressource interne temporairement indisponible, ou un destinataire non autorisé. Mimecast envoie ces messages quand quelque chose vérifie si l’une des boîtes mail qu’il protège existe.',
    'Notre moteur s’appuie ici sur un seul comportement précis : il reconnaît la réponse anti-énumération « internal resource temporarily unavailable » et ne la traite pas comme un résultat. Le reste de cette section décrit ce que vous pourriez voir en pratique. Nous ne prétendons pas reconnaître chaque message possible qu’une passerelle peut renvoyer.',
  ],
  notAllowedTitle: 'Pourquoi « recipient is not allowed » ne veut pas dire que l’adresse est invalide',
  notAllowedPara:
    'Ce message reflète une décision de la passerelle sur la façon d’accepter le courrier. Il ne dit pas si la boîte mail existe. L’adresse qui se trouve derrière est souvent tout à fait valide. Vous lisez les règles de la passerelle, pas la réponse du serveur de messagerie.',
  handlesTitle: 'Comment Giggal.ai traite Mimecast',
  handlesParas: [
    'Les enregistrements MX du domaine identifient Mimecast avant le début de la vérification. L’adresse suit donc le parcours Mimecast dès le départ, et non après une tentative échouée.',
    'Pour Mimecast, les requêtes directes au serveur de messagerie sont entièrement évitées. Elles ne sont pas relancées, pas ralenties : elles sont évitées. Il y a deux raisons. Mimecast refuse le contrôle, donc il n’y a rien à gagner. Et les tentatives répétées font signaler l’IP d’envoi, ce qui dégraderait les résultats sur tous les autres domaines vérifiés dans le même traitement.',
    'Le résultat de vérification d’email vient d’un autre signal, qui ne dépend pas d’une réponse de Mimecast à une requête directe. Quand la réponse vague apparaît, elle est reconnue et n’est jamais enregistrée comme une vraie réponse. L’adresse revient avec un vrai résultat délivrable ou non délivrable, ou avec Inconnu et le crédit remboursé. Elle ne revient jamais avec une supposition présentée comme une réponse.',
  ],
  resultsTitle: 'Ce que vous recevez',
  resultHead: 'Résultat',
  meaningHead: 'Signification',
  results: [
    { label: 'Délivrable', meaning: 'La boîte mail existe et acceptera le courrier' },
    { label: 'Non délivrable', meaning: 'La boîte mail n’existe pas' },
    { label: 'Risqué', meaning: 'L’adresse existe mais présente un risque de délivrabilité' },
    { label: 'Inconnu', meaning: 'Nous n’avons pas pu vérifier l’adresse' },
  ],
  refundNote:
    'Quand nous ne pouvons pas vérifier une adresse, le crédit est remboursé automatiquement. Vous ne payez que les vérifications que nous terminons.',
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Un rebond Mimecast signifie-t-il que l’adresse mail est fausse ?',
      a: 'En général, non. Ces messages de Mimecast reflètent une décision de la passerelle. Ils ne disent pas si la boîte mail existe. L’adresse est souvent tout à fait valide.',
    },
    {
      q: 'Pourquoi la plupart des vérificateurs renvoient-ils Inconnu sur les domaines Mimecast ?',
      a: 'Ils se connectent au serveur de messagerie pour demander si une boîte mail existe. Mimecast intercepte cette question et répond de façon volontairement vague. Le vérificateur n’a donc rien sur quoi s’appuyer.',
    },
    {
      q: 'Comment Giggal.ai vérifie-t-il les domaines Mimecast ?',
      a: 'Nous utilisons d’autres signaux de vérification pour les domaines Mimecast. Les requêtes directes sur la boîte mail sont refusées, et les tentatives répétées abîment la réputation de l’IP d’envoi. Cela dégraderait les résultats sur tous les autres domaines de la liste.',
    },
    {
      q: 'Dois-je séparer les adresses Mimecast avant l’import ?',
      a: 'Non. Les domaines Mimecast sont identifiés automatiquement à partir des enregistrements MX pendant le traitement.',
    },
    {
      q: 'La vérification d’une adresse Mimecast coûte-t-elle plus cher ?',
      a: 'Non. Une vérification standard coûte 1 crédit, quelle que soit la passerelle placée devant le domaine.',
    },
  ],
  relatedTitle: 'Pages associées',
  relatedLinks: ['comment fonctionne la vérification derrière une SEG', 'vérifier les emails catch-all et risqués', 'tarifs et crédits'],
  ctaHeadline: 'Ne perdez plus vos contacts Mimecast à cause du résultat Inconnu',
}

// Dutch. Terms: SEO-Plan/i18n-batch1-nl-pl-terminology.md (je, e-mailverificatie,
// bezorgbaar/niet bezorgbaar/riskant/onbekend, secure email gateway).
const nl: MimecastStrings = {
  metaTitle: 'Mimecast e-mailverificatie | Giggal.ai',
  ogTitle: 'Mimecast e-mailverificatie',
  description:
    'Mimecast verbergt of een mailbox bestaat, dus de meeste tools geven Onbekend terug. Giggal.ai omzeilt Mimecast en geeft een echt verificatieresultaat terug.',
  ogLocale: 'nl_NL',
  ogAlt: 'Giggal.ai e-mailverificatie',
  segCrumb: 'SEG-verificatie',
  crumb: 'Mimecast e-mailverificatie',
  h1Lead: 'E-mails verifiëren achter',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast is gemaakt om te voorkomen dat iemand uitzoekt welke mailboxen op een domein bestaan. Daarom geven de meeste verificatietools Onbekend terug. Giggal.ai gebruikt een andere route en geeft een echt resultaat van de e-mailverificatie terug.',
  heroCta: 'Gratis beginnen met 1.000 credits',
  pricingCta: 'Prijzen bekijken',
  heroNote: 'Geen creditcard nodig. Credits verlopen nooit.',
  whatTitle: 'Wat Mimecast doet met e-mailverificatie',
  whatParas: [
    'Mimecast staat vóór de echte mailserver en antwoordt namens die server. Mail voor het domein komt eerst bij Mimecast aan, en dat geldt ook voor elke poging om te controleren of een mailbox bestaat. De verificatietool praat dus nooit met het systeem dat het antwoord kent.',
    'Dat Mimecast zulke controles blokkeert, is een bewuste functie en geen bijwerking. Mimecast moet het verzamelen van adressen (directory harvesting) en het opsommen van mailboxen voorkomen, want zo brengt een aanvaller de gebruikers van een bedrijf in kaart. Dat tegenhouden is precies de bedoeling.',
    'Bij een vraag geeft Mimecast met opzet een vaag antwoord. Het bevestigt de mailbox niet en ontkent hem ook niet. Een verificatietool die dat antwoord zomaar aanneemt, heeft twee keuzes, en allebei zijn ze slecht. Hij kan gokken, en dan komen er verkeerde resultaten in je lijst. Of hij geeft op en markeert het adres als Onbekend, en dan blijft een echt contact zonder antwoord.',
  ],
  responseTitle: 'Het antwoord dat Mimecast terugstuurt',
  responseParas: [
    'Wie hiermee te maken krijgt, ziet meestal een van twee dingen: een verificatieresultaat dat op Onbekend blijft staan, of een bouncebericht uit de eigen verzendtool. De tekst verschilt, maar noemt vaak een interne bron die tijdelijk niet beschikbaar is, of een ontvanger die niet is toegestaan. Mimecast stuurt deze berichten als iets controleert of een van de mailboxen die het beschermt bestaat.',
    'Op één specifiek gedrag rekent onze engine hier: hij herkent het antwoord "internal resource temporarily unavailable", dat het opsommen van mailboxen moet voorkomen, en behandelt het niet als resultaat. De rest van deze uitleg beschrijft wat je in de praktijk kunt zien. Het is geen bewering dat we elke mogelijke tekst van een gateway herkennen.',
  ],
  notAllowedTitle: 'Waarom "recipient is not allowed" niet betekent dat het adres ongeldig is',
  notAllowedPara:
    'Dat bericht komt uit een beleidsregel van de gateway over hoe mail wordt geaccepteerd. Het zegt niets over de vraag of de mailbox bestaat. Het adres erachter is vaak gewoon geldig. Je leest de regels van de gateway, niet het antwoord van de mailserver.',
  handlesTitle: 'Hoe Giggal.ai met Mimecast omgaat',
  handlesParas: [
    'De MX-records van het domein laten al vóór de verificatie zien dat het om Mimecast gaat. Het adres gaat dus vanaf het begin de Mimecast-route op, en niet pas na een mislukte poging.',
    'Bij Mimecast slaan we directe vragen aan de mailserver helemaal over. Niet opnieuw proberen, niet vertragen, maar overslaan. Daar zijn twee redenen voor. Mimecast weigert de controle, dus er valt niets te winnen. En herhaalde pogingen zorgen dat het verzendende IP-adres wordt gemarkeerd. Dat zou de resultaten verslechteren voor elk ander domein dat in dezelfde ronde wordt gecontroleerd.',
    'Het resultaat van de e-mailverificatie komt in plaats daarvan uit een ander signaal, dat niet afhangt van een antwoord van Mimecast op een directe vraag. Verschijnt dat vage antwoord toch, dan wordt het herkend en nooit als echt antwoord opgeslagen. Het adres komt terug als echt bezorgbaar of niet bezorgbaar, of als Onbekend met terugbetaling van de credit. Nooit als een gok die op een antwoord lijkt.',
  ],
  resultsTitle: 'Wat je terugkrijgt',
  resultHead: 'Resultaat',
  meaningHead: 'Betekenis',
  results: [
    { label: 'Bezorgbaar', meaning: 'De mailbox bestaat en accepteert mail' },
    { label: 'Niet bezorgbaar', meaning: 'De mailbox bestaat niet' },
    { label: 'Riskant', meaning: 'Het adres bestaat, maar de bezorging brengt risico mee' },
    { label: 'Onbekend', meaning: 'We konden het adres niet verifiëren' },
  ],
  refundNote:
    'Als we een adres niet kunnen verifiëren, krijg je de credit automatisch terug. Je betaalt alleen voor verificaties die we afronden.',
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Betekent een bounce van Mimecast dat het e-mailadres fout is?',
      a: 'Meestal niet. Zulke berichten van Mimecast komen uit een beleidsregel van de gateway. Ze zeggen niets over de vraag of de mailbox bestaat. Het adres is vaak gewoon geldig.',
    },
    {
      q: 'Waarom geven de meeste tools Onbekend terug op Mimecast-domeinen?',
      a: 'Ze maken verbinding met de mailserver om te vragen of een mailbox bestaat. Mimecast onderschept die vraag en geeft met opzet een vaag antwoord. De tool heeft dan niets om mee te werken.',
    },
    {
      q: 'Hoe verifieert Giggal.ai Mimecast-domeinen?',
      a: 'Voor Mimecast-domeinen gebruiken we andere signalen voor de verificatie. Directe vragen aan de mailbox worden geweigerd, en herhaalde pogingen schaden de reputatie van het verzendende IP-adres. Dat zou de resultaten verslechteren voor elk ander domein in de lijst.',
    },
    {
      q: 'Moet ik Mimecast-adressen apart zetten voordat ik upload?',
      a: 'Nee. Mimecast-domeinen worden tijdens de controle automatisch herkend aan hun MX-records.',
    },
    {
      q: 'Kost het verifiëren van een Mimecast-adres extra?',
      a: 'Nee. Een standaardverificatie kost 1 credit, welke gateway er ook vóór het domein staat.',
    },
  ],
  relatedTitle: 'Gerelateerd',
  relatedLinks: ['hoe SEG-verificatie werkt', 'catch-all- en riskante e-mails verifiëren', 'prijzen en credits'],
  ctaHeadline: 'Verlies je Mimecast-contacten niet langer aan Onbekend',
}

// Polish. Terms follow SEO-Plan/i18n-batch1-nl-pl-terminology.md. The gateway
// messages quoted in English are the strings Mimecast actually returns.
const pl: MimecastStrings = {
  metaTitle: 'Weryfikacja email za bramką Mimecast | Giggal.ai',
  ogTitle: 'Weryfikacja email za bramką Mimecast',
  description:
    'Mimecast ukrywa, czy skrzynka istnieje, więc większość weryfikatorów zwraca wynik nieznany. Giggal.ai omija Mimecast i zwraca prawdziwy wynik weryfikacji.',
  ogLocale: 'pl_PL',
  ogAlt: 'Giggal.ai, weryfikacja e-mail',
  segCrumb: 'Weryfikacja email za bramkami SEG',
  crumb: 'Weryfikacja email za bramką Mimecast',
  h1Lead: 'Weryfikuj adresy e-mail za bramką',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast ma uniemożliwiać ustalenie, które skrzynki istnieją w danej domenie. Dlatego większość weryfikatorów zwraca wynik nieznany. Giggal.ai sprawdza adres inną drogą i zwraca prawdziwy wynik weryfikacji e-mail.',
  heroCta: 'Zacznij za darmo z 1000 kredytów',
  pricingCta: 'Zobacz cennik',
  heroNote: 'Bez karty płatniczej. Kredyty nigdy nie wygasają.',
  whatTitle: 'Co Mimecast robi z weryfikacją e-mail',
  whatParas: [
    'Mimecast stoi przed prawdziwym serwerem pocztowym i odpowiada w jego imieniu. Poczta kierowana do domeny trafia najpierw do Mimecast. To samo dotyczy każdej próby sprawdzenia, czy skrzynka istnieje. Weryfikator nigdy nie łączy się z systemem, który zna odpowiedź.',
    'Blokowanie takiego sprawdzania skrzynek to celowa funkcja, a nie efekt uboczny. Mimecast ma zapobiegać zbieraniu adresów z katalogu (directory harvesting) i wyliczaniu skrzynek, bo w ten sposób atakujący poznaje listę użytkowników firmy. Zatrzymanie tego jest właśnie celem.',
    'Na zapytanie Mimecast zwraca celowo niejasną odpowiedź, zamiast potwierdzić istnienie skrzynki albo mu zaprzeczyć. Weryfikator, który bierze tę odpowiedź dosłownie, ma dwie opcje i obie są złe. Może zgadywać, co wprowadza błędne wyniki do twojej listy. Może też się poddać i oznaczyć adres jako nieznany, co zostawia prawdziwy kontakt bez wyniku.',
  ],
  responseTitle: 'Odpowiedź, którą odsyła Mimecast',
  responseParas: [
    'Osoby, które trafią na ten problem, zwykle widzą jedną z dwóch rzeczy: wynik weryfikacji, który utknął na „nieznany”, albo komunikat o odbiciu z własnego narzędzia do wysyłki. Treść bywa różna, ale często mówi, że wewnętrzny zasób jest chwilowo niedostępny albo że odbiorca jest niedozwolony. Takie komunikaty Mimecast wysyła, gdy coś sprawdza, czy istnieje jedna z chronionych przez niego skrzynek.',
    'Nasz silnik opiera się tu na jednym konkretnym zachowaniu. Rozpoznaje odpowiedź „internal resource temporarily unavailable”, która blokuje wyliczanie skrzynek, i nie traktuje jej jako wyniku. Reszta tej sekcji opisuje to, co możesz zobaczyć w praktyce. Nie twierdzimy, że rozpoznajemy każdy możliwy komunikat, jaki może zwrócić bramka.',
  ],
  notAllowedTitle: 'Dlaczego „recipient is not allowed” nie oznacza, że adres jest nieprawidłowy',
  notAllowedPara:
    'Ten komunikat wynika z polityki bramki, która decyduje, jak przyjmowana jest poczta. Nie mówi nic o tym, czy skrzynka istnieje. Adres, którego dotyczy, często jest całkowicie prawidłowy. Czytasz reguły bramki, a nie odpowiedź serwera pocztowego.',
  handlesTitle: 'Jak Giggal.ai obsługuje Mimecast',
  handlesParas: [
    'Rekordy MX domeny pokazują Mimecast, zanim zacznie się weryfikacja. Adres od początku trafia więc na ścieżkę dla Mimecast, a nie dopiero po nieudanej próbie.',
    'W przypadku Mimecast całkowicie pomijamy bezpośrednie zapytania do serwera pocztowego. Nie ponawiamy ich ani nie spowalniamy, tylko pomijamy. Są dwa powody. Mimecast odrzuca test, więc nic nie da się zyskać. Do tego powtarzane próby powodują oznaczenie wysyłającego adresu IP, co pogorszyłoby wyniki dla wszystkich innych domen weryfikowanych w tym samym przebiegu.',
    'Wynik weryfikacji e-mail pochodzi wtedy z innego sygnału, który nie wymaga odpowiedzi Mimecast na bezpośrednie zapytanie. Gdy pojawi się ta niejasna odpowiedź, rozpoznajemy ją i nigdy nie zapisujemy jako prawdziwego wyniku. Adres wraca z prawdziwym wynikiem (dostarczalny lub niedostarczalny) albo jako nieznany ze zwrotem kredytu. Nigdy nie dostajesz zgadywania przedstawionego jako wynik.',
  ],
  resultsTitle: 'Co dostajesz',
  resultHead: 'Wynik',
  meaningHead: 'Znaczenie',
  results: [
    { label: 'Dostarczalny', meaning: 'Skrzynka istnieje i przyjmie pocztę' },
    { label: 'Niedostarczalny', meaning: 'Skrzynka nie istnieje' },
    { label: 'Ryzykowny', meaning: 'Adres istnieje, ale wiąże się z ryzykiem dla dostarczalności' },
    { label: 'Nieznany', meaning: 'Nie udało nam się zweryfikować adresu' },
  ],
  refundNote:
    'Gdy nie możemy zweryfikować adresu, kredyt jest zwracany automatycznie. Płacisz tylko za ukończone weryfikacje.',
  faqTitle: 'Najczęstsze pytania',
  faqs: [
    {
      q: 'Czy odbicie z Mimecast oznacza, że adres e-mail jest błędny?',
      a: 'Zwykle nie. Takie komunikaty Mimecast wynikają z polityki bramki. Nie mówią, czy skrzynka istnieje. Adres często jest całkowicie prawidłowy.',
    },
    {
      q: 'Dlaczego większość weryfikatorów zwraca wynik nieznany w domenach Mimecast?',
      a: 'Łączą się z serwerem pocztowym i pytają, czy skrzynka istnieje. Mimecast przechwytuje to pytanie i odpowiada celowo niejasno, więc weryfikator nie ma na czym oprzeć wyniku.',
    },
    {
      q: 'Jak Giggal.ai weryfikuje domeny Mimecast?',
      a: 'Dla domen Mimecast używamy innych sygnałów weryfikacji. Bezpośrednie zapytania o skrzynkę są odrzucane, a powtarzane próby szkodzą reputacji wysyłającego adresu IP. To pogorszyłoby wyniki dla każdej innej domeny na liście.',
    },
    {
      q: 'Czy muszę oddzielić adresy Mimecast przed wgraniem listy?',
      a: 'Nie. Domeny Mimecast są rozpoznawane automatycznie na podstawie rekordów MX podczas przebiegu.',
    },
    {
      q: 'Czy weryfikacja adresu Mimecast kosztuje więcej?',
      a: 'Nie. Standardowa weryfikacja kosztuje 1 kredyt bez względu na to, jaka bramka stoi przed domeną.',
    },
  ],
  relatedTitle: 'Powiązane',
  relatedLinks: ['jak działa weryfikacja za bramkami SEG', 'weryfikacja adresów catch-all i ryzykownych', 'cennik i kredyty'],
  ctaHeadline: 'Nie trać kontaktów z domen Mimecast przez wynik nieznany',
}

const id: MimecastStrings = {
  metaTitle: 'Verifikasi Email Mimecast | Giggal.ai',
  ogTitle: 'Verifikasi Email Mimecast',
  description:
    'Mimecast menyembunyikan apakah kotak masuk ada, jadi kebanyakan alat verifikasi memberi hasil tidak diketahui. Giggal.ai memberi hasil verifikasi yang nyata.',
  ogLocale: 'id_ID',
  ogAlt: 'Verifikasi email Giggal.ai',
  segCrumb: 'Verifikasi Email SEG',
  crumb: 'Verifikasi Email Mimecast',
  h1Lead: 'Verifikasi email di balik',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast dibuat agar tidak ada yang bisa mengetahui kotak masuk mana yang ada di sebuah domain. Karena itu, kebanyakan alat verifikasi memberi hasil tidak diketahui. Giggal.ai memakai jalur lain dan memberi hasil verifikasi email yang nyata.',
  heroCta: 'Mulai gratis dengan 1.000 kredit',
  pricingCta: 'Lihat harga',
  heroNote: 'Tanpa kartu kredit. Kredit tidak pernah kedaluwarsa.',
  whatTitle: 'Dampak Mimecast pada verifikasi email',
  whatParas: [
    'Mimecast berada di depan server email yang sebenarnya dan menjawab atas nama server itu. Email yang menuju domain tersebut sampai ke Mimecast lebih dulu. Begitu juga setiap upaya untuk mengecek apakah sebuah kotak masuk ada. Alat verifikasi tidak pernah benar-benar berkomunikasi dengan sistem yang tahu jawabannya.',
    'Pemblokiran pencarian kotak masuk seperti ini adalah fitur yang disengaja, bukan efek samping. Mimecast memang dibuat untuk mencegah directory harvesting dan pencacahan kotak masuk (mailbox enumeration), karena dengan cara itulah penyerang memetakan pengguna sebuah perusahaan. Menghentikannya adalah tujuan Mimecast.',
    'Saat ditanya, Mimecast sengaja memberi respons yang samar dan tidak membenarkan atau menyangkal keberadaan kotak masuk. Alat verifikasi yang menerima respons itu begitu saja hanya punya dua pilihan, dan keduanya buruk. Alat itu bisa menebak, sehingga hasil yang salah masuk ke daftar Anda. Atau alat itu bisa menyerah dan menandai alamat sebagai tidak diketahui, sehingga kontak asli tetap tanpa kepastian.',
  ],
  responseTitle: 'Respons yang dikirim Mimecast',
  responseParas: [
    'Orang yang mengalami ini biasanya melihat salah satu dari dua hal: hasil verifikasi yang tertahan di tidak diketahui, atau pesan bounce dari alat pengiriman mereka sendiri. Kata-katanya berbeda-beda, tetapi sering menyebut sumber daya internal yang untuk sementara tidak tersedia, atau penerima yang tidak diizinkan. Mimecast mengirim pesan seperti ini saat ada yang mengecek apakah salah satu kotak masuk yang dilindunginya ada.',
    'Mesin kami hanya mengandalkan satu perilaku yang spesifik di sini: mesin mengenali respons anti-pencacahan "internal resource temporarily unavailable" dan tidak memperlakukannya sebagai hasil. Hal lain di bagian ini adalah konteks nyata tentang apa yang mungkin Anda lihat. Ini bukan klaim bahwa kami mencocokkan setiap kemungkinan teks yang bisa dikirim gateway.',
  ],
  notAllowedTitle: 'Kenapa "recipient is not allowed" tidak berarti alamatnya tidak valid',
  notAllowedPara:
    'Pesan itu menunjukkan keputusan kebijakan gateway tentang cara email diterima. Pesan itu bukan pernyataan tentang apakah kotak masuknya ada. Alamat di baliknya sering kali sepenuhnya valid. Anda sedang membaca aturan gateway, bukan jawaban server email.',
  handlesTitle: 'Cara Giggal.ai menangani Mimecast',
  handlesParas: [
    'MX record domain menunjukkan Mimecast sebelum verifikasi dimulai. Jadi alamat itu masuk ke jalur Mimecast sejak awal, bukan setelah ada upaya yang gagal.',
    'Kueri langsung ke server email dilewati sepenuhnya untuk Mimecast. Tidak diulang, tidak diperlambat, tetapi dilewati. Ada dua alasan. Mimecast menolak pemeriksaan itu, jadi tidak ada yang bisa didapat. Selain itu, upaya berulang membuat IP pengirim ditandai, dan itu akan menurunkan kualitas hasil di semua domain lain yang diverifikasi dalam proses yang sama.',
    'Hasil verifikasi email berasal dari sinyal lain, yang tidak bergantung pada jawaban Mimecast atas kueri langsung. Jika respons samar itu muncul, respons itu dikenali dan tidak pernah dicatat sebagai jawaban nyata. Alamat kembali dengan hasil nyata, dapat dikirim atau tidak dapat dikirim, atau dengan hasil tidak diketahui dan kredit dikembalikan. Alamat tidak pernah kembali dengan tebakan yang dibuat seolah-olah jawaban.',
  ],
  resultsTitle: 'Hasil yang Anda dapatkan',
  resultHead: 'Hasil',
  meaningHead: 'Artinya',
  results: [
    { label: 'Dapat dikirim', meaning: 'Kotak masuknya ada dan akan menerima email' },
    { label: 'Tidak dapat dikirim', meaning: 'Kotak masuknya tidak ada' },
    { label: 'Berisiko', meaning: 'Alamatnya ada, tetapi punya risiko dalam pengiriman' },
    { label: 'Tidak diketahui', meaning: 'Kami tidak bisa memverifikasi alamat ini' },
  ],
  refundNote:
    'Jika kami tidak bisa memverifikasi sebuah alamat, kreditnya dikembalikan secara otomatis. Anda hanya membayar verifikasi yang berhasil kami selesaikan.',
  faqTitle: 'Pertanyaan yang sering diajukan',
  faqs: [
    {
      q: 'Apakah bounce dari Mimecast berarti alamat emailnya salah?',
      a: 'Biasanya tidak. Pesan Mimecast seperti itu menunjukkan keputusan kebijakan gateway, bukan pernyataan tentang apakah kotak masuknya ada. Alamatnya sering kali sepenuhnya valid.',
    },
    {
      q: 'Kenapa kebanyakan alat verifikasi memberi hasil tidak diketahui pada domain Mimecast?',
      a: 'Alat itu terhubung ke server email untuk menanyakan apakah kotak masuk ada. Mimecast mencegat pertanyaan itu dan menjawab dengan respons yang sengaja dibuat samar, jadi alat verifikasi tidak punya data untuk diolah.',
    },
    {
      q: 'Bagaimana Giggal.ai memverifikasi domain Mimecast?',
      a: 'Kami memakai sinyal verifikasi lain untuk domain Mimecast. Kueri kotak masuk langsung ditolak, dan upaya berulang merusak reputasi IP pengirim. Itu akan menurunkan kualitas hasil di setiap domain lain dalam daftar.',
    },
    {
      q: 'Apakah saya perlu memisahkan alamat Mimecast sebelum mengunggah?',
      a: 'Tidak. Domain Mimecast dikenali otomatis dari MX record selama proses berjalan.',
    },
    {
      q: 'Apakah memverifikasi alamat Mimecast dikenai biaya tambahan?',
      a: 'Tidak. Verifikasi standar seharga 1 kredit, apa pun gateway yang ada di depan domain itu.',
    },
  ],
  relatedTitle: 'Terkait',
  relatedLinks: ['cara kerja verifikasi SEG', 'verifikasi email catch-all dan berisiko', 'harga dan kredit'],
  ctaHeadline: 'Jangan biarkan kontak Mimecast berakhir sebagai tidak diketahui',
}

// Italian, "tu". Result labels as the Italian SEG page (/it/verifica-seg). Gateway
// response texts stay in English, as the gateway sends them.
const it: MimecastStrings = {
  metaTitle: 'Verifica email Mimecast | Giggal.ai',
  ogTitle: 'Verifica email Mimecast',
  description:
    "Mimecast nasconde se una casella esiste e la maggior parte dei verificatori restituisce sconosciuta. Giggal.ai segue un'altra strada e dà un risultato reale.",
  ogLocale: 'it_IT',
  ogAlt: 'Verifica email di Giggal.ai',
  segCrumb: 'Verifica dietro SEG',
  crumb: 'Verifica email Mimecast',
  h1Lead: 'Verifica le email protette da',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast è costruito per impedire a chiunque di capire quali caselle esistono su un dominio. Per questo la maggior parte dei verificatori restituisce sconosciuta. Giggal.ai segue un altro percorso e restituisce un vero risultato di verifica email.',
  heroCta: 'Inizia gratis con 1.000 crediti',
  pricingCta: 'Vedi i prezzi',
  heroNote: 'Senza carta. I crediti non scadono mai.',
  whatTitle: 'Cosa fa Mimecast alla verifica email',
  whatParas: [
    'Mimecast sta davanti al vero server di posta e risponde al posto suo. La posta diretta al dominio arriva prima a Mimecast, e lo stesso vale per qualsiasi tentativo di controllare se una casella esiste. Il verificatore non parla mai con il sistema che conosce la risposta.',
    "Bloccare questo tipo di controllo delle caselle è una funzione voluta, non un effetto collaterale. Mimecast deve impedire la raccolta degli indirizzi (directory harvesting) e l'enumerazione delle caselle, perché è così che un attaccante ricostruisce gli utenti di un'azienda. Fermarlo è proprio lo scopo.",
    'Quando riceve una richiesta, Mimecast restituisce una risposta volutamente vaga invece di confermare o negare la casella. Un verificatore che prende quella risposta così com\'è ha due possibilità, e nessuna delle due va bene. Può provare a indovinare, e allora mette risultati sbagliati nella tua lista. Oppure può arrendersi e segnare l\'indirizzo come sconosciuto, e allora un contatto reale resta irrisolto.',
  ],
  responseTitle: 'La risposta che Mimecast rimanda indietro',
  responseParas: [
    'Chi incontra questo problema di solito vede una di due cose: un risultato di verifica fermo su sconosciuta, oppure un messaggio di bounce dal proprio strumento di invio. Il testo cambia, ma spesso parla di una risorsa interna temporaneamente non disponibile o di un destinatario non ammesso. Sono messaggi che Mimecast invia quando qualcosa controlla se esiste una delle caselle che protegge.',
    'Qui il nostro motore si basa su un solo comportamento preciso: riconosce la risposta anti-enumerazione "internal resource temporarily unavailable" e non la tratta come un risultato. Tutto il resto di questa sezione è contesto reale su ciò che potresti vedere. Non sosteniamo di riconoscere ogni possibile testo che un gateway può restituire.',
  ],
  notAllowedTitle: 'Perché "recipient is not allowed" non significa che l\'indirizzo non è valido',
  notAllowedPara:
    "Quel messaggio riflette una decisione di policy del gateway su come accettare la posta. Non dice se la casella esiste. L'indirizzo che c'è dietro spesso è perfettamente valido. Stai leggendo le regole del gateway, non la risposta del server di posta.",
  handlesTitle: 'Come Giggal.ai gestisce Mimecast',
  handlesParas: [
    "I record MX del dominio identificano Mimecast prima che la verifica inizi, quindi l'indirizzo segue il percorso Mimecast fin dall'inizio e non dopo un tentativo fallito.",
    "Con Mimecast le richieste dirette al server di posta vengono saltate del tutto. Non ripetute, non rallentate: saltate. I motivi sono due. Mimecast rifiuta il controllo, quindi non c'è nulla da guadagnare. E i tentativi ripetuti fanno segnalare l'IP di invio, cosa che peggiorerebbe i risultati su tutti gli altri domini verificati nella stessa sessione.",
    "Il risultato della verifica arriva invece da un altro segnale, che non dipende da una risposta di Mimecast a una richiesta diretta. Quando compare quella risposta vaga, viene riconosciuta e non viene mai registrata come risposta reale. L'indirizzo torna con un risultato reale, valida o non valida, oppure come sconosciuta con il credito rimborsato. Mai come un'ipotesi presentata come risposta.",
  ],
  resultsTitle: 'Cosa ricevi',
  resultHead: 'Risultato',
  meaningHead: 'Significato',
  results: [
    { label: 'Valida', meaning: 'La casella esiste e accetta la posta' },
    { label: 'Non valida', meaning: 'La casella non esiste' },
    { label: 'A rischio', meaning: "L'indirizzo esiste ma comporta un rischio di consegna" },
    { label: 'Sconosciuta', meaning: "Non siamo riusciti a verificare l'indirizzo" },
  ],
  refundNote:
    'Quando non riusciamo a verificare un indirizzo, il credito viene rimborsato in automatico. Paghi solo le verifiche che completiamo.',
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: "Un bounce di Mimecast significa che l'indirizzo email è sbagliato?",
      a: "Di solito no. Quei messaggi di Mimecast riflettono una decisione di policy del gateway e non dicono se la casella esiste. L'indirizzo spesso è perfettamente valido.",
    },
    {
      q: 'Perché la maggior parte dei verificatori restituisce sconosciuta sui domini Mimecast?',
      a: 'Si collegano al server di posta per chiedere se una casella esiste. Mimecast intercetta la domanda e risponde con qualcosa di volutamente vago, quindi il verificatore non ha nulla su cui lavorare.',
    },
    {
      q: 'Come verifica Giggal.ai i domini Mimecast?',
      a: "Per i domini Mimecast usiamo segnali di verifica alternativi. Le richieste dirette alla casella vengono rifiutate, e i tentativi ripetuti danneggiano la reputazione dell'IP di invio, cosa che peggiorerebbe i risultati su tutti gli altri domini della lista.",
    },
    {
      q: 'Devo separare gli indirizzi Mimecast prima di caricare la lista?',
      a: 'No. I domini Mimecast vengono riconosciuti in automatico dai record MX durante la verifica.',
    },
    {
      q: 'Verificare un indirizzo Mimecast costa di più?',
      a: 'No. La verifica standard costa 1 credito, qualunque sia il gateway davanti al dominio.',
    },
  ],
  relatedTitle: 'Pagine correlate',
  relatedLinks: ['come funziona la verifica SEG', 'verifica le email catch-all e a rischio', 'prezzi e crediti'],
  ctaHeadline: 'Non perdere più contatti Mimecast per un risultato sconosciuto',
}

// German, "Sie". Result labels as the German SEG page (/de/secure-email-gateway).
// Gateway response texts stay in English, as the gateway sends them.
const de: MimecastStrings = {
  metaTitle: 'Mimecast: E-Mail-Adressen prüfen | Giggal.ai',
  ogTitle: 'Mimecast: E-Mail-Adressen prüfen',
  description:
    'Mimecast verbirgt, ob ein Postfach existiert, daher liefern die meisten Tools nur Unbekannt. Giggal.ai nimmt einen anderen Weg und liefert ein echtes Ergebnis.',
  ogLocale: 'de_DE',
  ogAlt: 'Giggal.ai E-Mail-Verifizierung',
  segCrumb: 'Secure Email Gateway',
  crumb: 'Mimecast-Verifizierung',
  h1Lead: 'E-Mail-Adressen hinter',
  h1Highlight: 'Mimecast prüfen',
  heroIntro:
    'Mimecast soll verhindern, dass jemand herausfindet, welche Postfächer auf einer Domain existieren. Deshalb liefern die meisten Prüftools nur Unbekannt. Giggal.ai nimmt einen anderen Weg und liefert ein echtes Ergebnis der E-Mail-Prüfung.',
  heroCta: 'Kostenlos starten mit 1.000 Credits',
  pricingCta: 'Preise ansehen',
  heroNote: 'Keine Karte nötig. Credits verfallen nie.',
  whatTitle: 'Was Mimecast mit der E-Mail-Prüfung macht',
  whatParas: [
    'Mimecast steht vor dem echten Mailserver und antwortet an seiner Stelle. E-Mails an die Domain kommen zuerst bei Mimecast an, und das gilt auch für jeden Versuch zu prüfen, ob ein Postfach existiert. Das Prüftool spricht nie mit dem System, das die Antwort kennt.',
    'Dass Mimecast solche Postfach-Abfragen blockiert, ist eine gewollte Funktion und kein Nebeneffekt. Mimecast soll Directory Harvesting und das Auflisten von Postfächern verhindern, denn so ermittelt ein Angreifer die Nutzer eines Unternehmens. Genau das zu stoppen ist der Zweck.',
    'Auf eine Abfrage antwortet Mimecast absichtlich vage, statt die Existenz des Postfachs zu bestätigen oder zu verneinen. Ein Prüftool, das diese Antwort einfach übernimmt, hat zwei Möglichkeiten, und beide sind schlecht. Es kann raten, dann landen falsche Ergebnisse in Ihrer Liste. Oder es gibt auf und markiert die Adresse als Unbekannt, dann bleibt ein echter Kontakt ungeklärt.',
  ],
  responseTitle: 'Die Antwort, die Mimecast zurückschickt',
  responseParas: [
    'Wer darauf stößt, sieht meist eines von zwei Dingen: ein Prüfergebnis, das auf Unbekannt hängen bleibt, oder eine Bounce-Meldung aus dem eigenen Versandtool. Der Wortlaut variiert, aber oft ist von einer vorübergehend nicht verfügbaren internen Ressource die Rede oder davon, dass ein Empfänger nicht erlaubt ist. Diese Meldungen sendet Mimecast, wenn etwas prüft, ob eines der geschützten Postfächer existiert.',
    'Unsere Engine stützt sich hier auf ein einziges, genau bestimmtes Verhalten: Sie erkennt die Anti-Enumeration-Antwort "internal resource temporarily unavailable" und behandelt sie nicht als Ergebnis. Alles andere in diesem Abschnitt ist Praxiswissen dazu, was Sie sehen können. Wir behaupten nicht, jede mögliche Meldung eines Gateways zu erkennen.',
  ],
  notAllowedTitle: 'Warum "recipient is not allowed" nicht heißt, dass die Adresse ungültig ist',
  notAllowedPara:
    'Diese Meldung spiegelt eine Richtlinie des Gateways wider, die festlegt, wie E-Mails angenommen werden. Sie sagt nichts darüber, ob das Postfach existiert. Die Adresse dahinter ist oft völlig gültig. Sie lesen die Regeln des Gateways, nicht die Antwort des Mailservers.',
  handlesTitle: 'Wie Giggal.ai mit Mimecast umgeht',
  handlesParas: [
    'Die MX-Einträge der Domain zeigen Mimecast schon vor Beginn der Prüfung. Die Adresse läuft deshalb von Anfang an über den Mimecast-Pfad und nicht erst nach einem gescheiterten Versuch.',
    'Direkte Abfragen beim Mailserver lassen wir bei Mimecast ganz weg. Nicht wiederholt, nicht gedrosselt, sondern weggelassen. Dafür gibt es zwei Gründe. Mimecast lehnt die Prüfung ab, also ist nichts zu gewinnen. Und wiederholte Versuche führen dazu, dass die sendende IP markiert wird. Das würde die Ergebnisse für jede andere Domain im selben Durchlauf verschlechtern.',
    'Das Prüfergebnis kommt stattdessen aus einem anderen Signal, das nicht davon abhängt, dass Mimecast auf eine direkte Abfrage antwortet. Taucht die vage Antwort trotzdem auf, wird sie erkannt und nie als echte Antwort gespeichert. Die Adresse kommt mit einem echten Ergebnis zurück, zustellbar oder unzustellbar, oder als Unbekannt mit erstattetem Credit. Nie als Vermutung, die wie eine Antwort aussieht.',
  ],
  resultsTitle: 'Was Sie zurückbekommen',
  resultHead: 'Ergebnis',
  meaningHead: 'Bedeutung',
  results: [
    { label: 'Zustellbar', meaning: 'Das Postfach existiert und nimmt E-Mails an' },
    { label: 'Unzustellbar', meaning: 'Das Postfach existiert nicht' },
    { label: 'Riskant', meaning: 'Die Adresse existiert, aber die Zustellung ist riskant' },
    { label: 'Unbekannt', meaning: 'Wir konnten die Adresse nicht prüfen' },
  ],
  refundNote:
    'Wenn wir eine Adresse nicht prüfen können, wird der Credit automatisch erstattet. Sie zahlen nur für Prüfungen, die wir abschließen.',
  faqTitle: 'Häufige Fragen',
  faqs: [
    {
      q: 'Bedeutet ein Bounce von Mimecast, dass die E-Mail-Adresse falsch ist?',
      a: 'Meistens nicht. Solche Meldungen von Mimecast spiegeln eine Richtlinie des Gateways wider und sagen nichts darüber, ob das Postfach existiert. Die Adresse ist oft völlig gültig.',
    },
    {
      q: 'Warum liefern die meisten Prüftools bei Mimecast-Domains nur Unbekannt?',
      a: 'Sie verbinden sich mit dem Mailserver und fragen, ob ein Postfach existiert. Mimecast fängt diese Frage ab und antwortet absichtlich vage. Das Prüftool hat dann nichts, womit es arbeiten kann.',
    },
    {
      q: 'Wie prüft Giggal.ai Mimecast-Domains?',
      a: 'Für Mimecast-Domains nutzen wir alternative Prüfsignale. Direkte Postfach-Abfragen werden abgelehnt, und wiederholte Versuche schaden der Reputation der sendenden IP. Das würde die Ergebnisse für jede andere Domain der Liste verschlechtern.',
    },
    {
      q: 'Muss ich Mimecast-Adressen vor dem Hochladen trennen?',
      a: 'Nein. Mimecast-Domains werden während der Prüfung automatisch über die MX-Einträge erkannt.',
    },
    {
      q: 'Kostet die Prüfung einer Mimecast-Adresse mehr?',
      a: 'Nein. Die Standardprüfung kostet 1 Credit, egal welches Gateway vor der Domain steht.',
    },
  ],
  relatedTitle: 'Weiterführende Seiten',
  relatedLinks: ['So funktioniert die Prüfung hinter Secure Email Gateways', 'Catch-all- und riskante E-Mails verifizieren', 'Preise und Credits'],
  ctaHeadline: 'Verlieren Sie keine Mimecast-Kontakte mehr an Unbekannt',
}

// Spanish, "tú". Gateway response texts stay in English, as the gateway sends them.
const es: MimecastStrings = {
  metaTitle: 'Verificación de correos Mimecast | Giggal.ai',
  ogTitle: 'Verificación de correos Mimecast',
  description:
    'Mimecast oculta si un buzón existe, así que la mayoría de los verificadores devuelven desconocido. Giggal.ai sigue otra ruta y devuelve un resultado real.',
  ogLocale: 'es_LA',
  ogAlt: 'Verificación de correo de Giggal.ai',
  segCrumb: 'Verificación SEG',
  crumb: 'Verificación de correos Mimecast',
  h1Lead: 'Verifica correos protegidos por',
  h1Highlight: 'Mimecast',
  heroIntro:
    'Mimecast está hecho para impedir que alguien averigüe qué buzones existen en un dominio. Por eso la mayoría de los verificadores devuelven desconocido. Giggal.ai sigue otra ruta y devuelve un resultado real de verificación de correo.',
  heroCta: 'Empieza gratis con 1.000 créditos',
  pricingCta: 'Ver precios',
  heroNote: 'Sin tarjeta. Los créditos no caducan.',
  whatTitle: 'Qué hace Mimecast con la verificación de correo',
  whatParas: [
    'Mimecast se coloca delante del servidor de correo real y responde en su lugar. El correo dirigido al dominio llega primero a Mimecast, y también cualquier intento de comprobar si un buzón existe. El verificador nunca habla con el sistema que conoce la respuesta.',
    'Bloquear ese tipo de consulta de buzones es una función deliberada, no un efecto secundario. Mimecast debe impedir la recolección de direcciones (directory harvesting) y la enumeración de buzones, porque así es como un atacante descubre los usuarios de una empresa. Impedirlo es justo su objetivo.',
    'Cuando recibe una consulta, Mimecast devuelve a propósito una respuesta vaga en lugar de confirmar o negar el buzón. Un verificador que acepta esa respuesta tal cual tiene dos opciones, y las dos son malas. Puede adivinar, y entonces mete resultados erróneos en tu lista. O puede rendirse y marcar la dirección como desconocida, y entonces un contacto real queda sin resolver.',
  ],
  responseTitle: 'La respuesta que devuelve Mimecast',
  responseParas: [
    'Quien se encuentra con esto suele ver una de dos cosas: un resultado de verificación que se queda en desconocido o un mensaje de rebote de su propia herramienta de envío. El texto varía, pero suele decir que un recurso interno no está disponible temporalmente o que un destinatario no está permitido. Son mensajes que Mimecast envía cuando algo comprueba si existe uno de los buzones que protege.',
    'Aquí nuestro motor depende de un solo comportamiento concreto: reconoce la respuesta antienumeración "internal resource temporarily unavailable" y no la trata como un resultado. Todo lo demás en esta sección es contexto real sobre lo que puedes ver. No afirmamos reconocer cada texto posible que puede devolver un gateway.',
  ],
  notAllowedTitle: 'Por qué "recipient is not allowed" no significa que la dirección no sea válida',
  notAllowedPara:
    'Ese mensaje refleja una decisión de política del gateway sobre cómo acepta el correo. No dice si el buzón existe. La dirección que hay detrás suele ser perfectamente válida. Estás leyendo las reglas del gateway, no la respuesta del servidor de correo.',
  handlesTitle: 'Cómo trata Giggal.ai a Mimecast',
  handlesParas: [
    'Los registros MX del dominio identifican a Mimecast antes de empezar la verificación, así que la dirección va por la ruta de Mimecast desde el principio y no después de un intento fallido.',
    'Con Mimecast nos saltamos por completo las consultas directas al servidor de correo. No las reintentamos ni las ralentizamos: las omitimos. Hay dos motivos. Mimecast rechaza la comprobación, así que no hay nada que ganar. Y los intentos repetidos hacen que se marque la IP de envío, lo que empeoraría los resultados de todos los demás dominios que se verifican en la misma tanda.',
    'En su lugar, el resultado de la verificación sale de otra señal, una que no depende de que Mimecast responda a una consulta directa. Cuando aparece esa respuesta vaga, se reconoce y nunca se guarda como una respuesta real. La dirección vuelve con un resultado real, entregable o no entregable, o como desconocida con el crédito reembolsado. Nunca vuelve con una suposición presentada como respuesta.',
  ],
  resultsTitle: 'Qué recibes',
  resultHead: 'Resultado',
  meaningHead: 'Significado',
  results: [
    { label: 'Entregable', meaning: 'El buzón existe y aceptará correo' },
    { label: 'No entregable', meaning: 'El buzón no existe' },
    { label: 'Arriesgado', meaning: 'La dirección existe, pero tiene riesgo de entrega' },
    { label: 'Desconocido', meaning: 'No pudimos verificar la dirección' },
  ],
  refundNote:
    'Cuando no podemos verificar una dirección, el crédito se reembolsa automáticamente. Solo pagas por las verificaciones que completamos.',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Un rebote de Mimecast significa que la dirección de correo está mal?',
      a: 'Normalmente no. Esos mensajes de Mimecast reflejan una decisión de política del gateway y no dicen si el buzón existe. La dirección suele ser perfectamente válida.',
    },
    {
      q: '¿Por qué la mayoría de los verificadores devuelven desconocido en los dominios con Mimecast?',
      a: 'Se conectan al servidor de correo para preguntar si un buzón existe. Mimecast intercepta esa pregunta y responde a propósito con algo vago, así que el verificador no tiene nada con qué trabajar.',
    },
    {
      q: '¿Cómo verifica Giggal.ai los dominios con Mimecast?',
      a: 'Usamos señales de verificación alternativas para los dominios con Mimecast. Las consultas directas al buzón se rechazan, y los intentos repetidos dañan la reputación de la IP de envío, lo que empeoraría los resultados de todos los demás dominios de la lista.',
    },
    {
      q: '¿Tengo que separar las direcciones de Mimecast antes de subir la lista?',
      a: 'No. Los dominios con Mimecast se identifican automáticamente por sus registros MX durante el proceso.',
    },
    {
      q: '¿Verificar una dirección de Mimecast cuesta más?',
      a: 'No. La verificación estándar cuesta 1 crédito, sin importar qué gateway haya delante del dominio.',
    },
  ],
  relatedTitle: 'Relacionado',
  relatedLinks: ['cómo funciona la verificación SEG', 'verifica correos catch-all y arriesgados', 'precios y créditos'],
  ctaHeadline: 'Deja de perder contactos de Mimecast por resultados desconocidos',
}

// Brazilian Portuguese, "você". Gateway response texts stay in English, as the gateway sends them.
const ptBr: MimecastStrings = {
  metaTitle: 'Verificação de e-mail Mimecast | Giggal.ai',
  ogTitle: 'Verificação de e-mail Mimecast',
  description:
    'O Mimecast esconde se uma caixa existe, e a maioria dos verificadores devolve desconhecido. A Giggal.ai segue outro caminho e devolve um resultado real.',
  ogLocale: 'pt_BR',
  ogAlt: 'Verificação de e-mail da Giggal.ai',
  segCrumb: 'Verificação SEG',
  crumb: 'Verificação de e-mail Mimecast',
  h1Lead: 'Verifique e-mails protegidos pelo',
  h1Highlight: 'Mimecast',
  heroIntro:
    'O Mimecast foi feito para impedir que alguém descubra quais caixas existem em um domínio. É por isso que a maioria dos verificadores devolve desconhecido. A Giggal.ai segue outro caminho e devolve um resultado real de verificação de e-mail.',
  heroCta: 'Comece grátis com 1.000 créditos',
  pricingCta: 'Ver preços',
  heroNote: 'Sem cartão. Os créditos nunca expiram.',
  whatTitle: 'O que o Mimecast faz com a verificação de e-mail',
  whatParas: [
    'O Mimecast fica na frente do servidor de e-mail real e responde no lugar dele. As mensagens enviadas para o domínio chegam primeiro ao Mimecast, e o mesmo acontece com qualquer tentativa de verificar se uma caixa existe. O verificador nunca fala com o sistema que sabe a resposta.',
    'Bloquear esse tipo de consulta de caixa é um recurso proposital, não um efeito colateral. O Mimecast deve impedir a coleta de endereços (directory harvesting) e a enumeração de caixas, porque é assim que um atacante mapeia os usuários de uma empresa. Impedir isso é justamente o objetivo.',
    'Quando recebe uma consulta, o Mimecast devolve uma resposta vaga de propósito, em vez de confirmar ou negar a caixa. Um verificador que aceita essa resposta como ela vem tem duas opções, e as duas são ruins. Ele pode adivinhar, e isso coloca resultados errados na sua lista. Ou pode desistir e marcar o endereço como desconhecido, e isso deixa um contato real sem resposta.',
  ],
  responseTitle: 'A resposta que o Mimecast devolve',
  responseParas: [
    'Quem passa por isso costuma ver uma de duas coisas: um resultado de verificação preso em desconhecido ou uma mensagem de bounce da própria ferramenta de envio. O texto varia, mas em geral fala de um recurso interno temporariamente indisponível ou de um destinatário não permitido. São mensagens que o Mimecast envia quando algo verifica se uma das caixas que ele protege existe.',
    'Aqui o nosso motor depende de um único comportamento específico: ele reconhece a resposta antienumeração "internal resource temporarily unavailable" e não a trata como resultado. Todo o resto desta seção é contexto real do que você pode ver. Não afirmamos reconhecer todos os textos possíveis que um gateway pode devolver.',
  ],
  notAllowedTitle: 'Por que "recipient is not allowed" não significa que o endereço é inválido',
  notAllowedPara:
    'Essa mensagem reflete uma decisão de política do gateway sobre como as mensagens são aceitas. Ela não diz se a caixa existe. O endereço por trás dela muitas vezes é perfeitamente válido. Você está lendo as regras do gateway, não a resposta do servidor de e-mail.',
  handlesTitle: 'Como a Giggal.ai lida com o Mimecast',
  handlesParas: [
    'Os registros MX do domínio identificam o Mimecast antes de a verificação começar, então o endereço segue pelo caminho do Mimecast desde o início, e não depois de uma tentativa que falhou.',
    'Com o Mimecast, as consultas diretas ao servidor de e-mail são puladas por completo. Elas não são repetidas nem desaceleradas: são puladas. Há dois motivos. O Mimecast recusa a verificação, então não há nada a ganhar. E tentativas repetidas fazem o IP de envio ser marcado, o que pioraria os resultados de todos os outros domínios verificados na mesma rodada.',
    'Em vez disso, o resultado da verificação vem de outro sinal, que não depende de o Mimecast responder a uma consulta direta. Quando aquela resposta vaga aparece, ela é reconhecida e nunca é registrada como resposta real. O endereço volta com um resultado real, entregável ou não entregável, ou como desconhecido com o crédito reembolsado. Ele nunca volta com um palpite apresentado como resposta.',
  ],
  resultsTitle: 'O que você recebe',
  resultHead: 'Resultado',
  meaningHead: 'Significado',
  results: [
    { label: 'Entregável', meaning: 'A caixa existe e vai aceitar mensagens' },
    { label: 'Não entregável', meaning: 'A caixa não existe' },
    { label: 'Arriscado', meaning: 'O endereço existe, mas tem risco de entrega' },
    { label: 'Desconhecido', meaning: 'Não conseguimos verificar o endereço' },
  ],
  refundNote:
    'Quando não conseguimos verificar um endereço, o crédito é reembolsado automaticamente. Você só paga pelas verificações que concluímos.',
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Um bounce do Mimecast significa que o endereço de e-mail está errado?',
      a: 'Normalmente não. Essas mensagens do Mimecast refletem uma decisão de política do gateway e não dizem se a caixa existe. O endereço muitas vezes é perfeitamente válido.',
    },
    {
      q: 'Por que a maioria dos verificadores devolve desconhecido em domínios com Mimecast?',
      a: 'Eles se conectam ao servidor de e-mail para perguntar se uma caixa existe. O Mimecast intercepta a pergunta e responde com algo vago de propósito, então o verificador fica sem nada para trabalhar.',
    },
    {
      q: 'Como a Giggal.ai verifica domínios com Mimecast?',
      a: 'Usamos sinais de verificação alternativos para domínios com Mimecast. As consultas diretas à caixa são recusadas, e tentativas repetidas prejudicam a reputação do IP de envio, o que pioraria os resultados de todos os outros domínios da lista.',
    },
    {
      q: 'Preciso separar os endereços com Mimecast antes de enviar a lista?',
      a: 'Não. Os domínios com Mimecast são identificados automaticamente pelos registros MX durante o processamento.',
    },
    {
      q: 'Verificar um endereço com Mimecast custa mais?',
      a: 'Não. A verificação padrão custa 1 crédito, não importa qual gateway esteja na frente do domínio.',
    },
  ],
  relatedTitle: 'Relacionados',
  relatedLinks: ['como funciona a verificação SEG', 'verifique e-mails catch-all e arriscados', 'preços e créditos'],
  ctaHeadline: 'Pare de perder contatos com Mimecast por resultados desconhecidos',
}

const ja: MimecastStrings = {
  metaTitle: 'Mimecastの背後にあるメールアドレスの検証 | Giggal.ai',
  ogTitle: 'Mimecastの背後にあるメールアドレスの検証',
  description:
    'Mimecastはメールボックスが存在するかを隠すため、多くの検証ツールは「不明」を返します。Giggal.aiは別の方法でMimecastのドメインを検証し、実際の結果を返します。',
  ogLocale: 'ja_JP',
  ogAlt: 'Giggal.aiのメールアドレス検証',
  segCrumb: 'SEGの背後にあるメールアドレスの検証',
  crumb: 'Mimecastの背後にあるメールアドレスの検証',
  h1Lead: 'メールアドレス検証：',
  h1Highlight: 'Mimecastの背後にあるアドレスも確認',
  heroIntro:
    'Mimecastは、ドメインにどのメールボックスが存在するかを外部から調べられないように作られています。そのため、多くの検証ツールは「不明」を返します。Giggal.aiは別の方法を使い、メールアドレス検証の実際の結果を返します。',
  heroCta: '1,000クレジットで無料で始める',
  pricingCta: '料金を見る',
  heroNote: 'クレジットカードは不要です。クレジットに有効期限はありません。',
  whatTitle: 'Mimecastがメールアドレス検証に与える影響',
  whatParas: [
    'Mimecastは実際のメールサーバーの前に置かれ、サーバーの代わりに応答します。そのドメイン宛てのメールは、まずMimecastに届きます。メールボックスが存在するかを確認しようとする通信も同じです。検証ツールは、答えを知っているシステムと直接やり取りできません。',
    'このようなメールボックスの照会を止めるのは、意図した機能です。偶然そうなっているわけではありません。Mimecastの役割の一つは、ディレクトリハーベスティング（アドレスの収集）とメールボックスの列挙を防ぐことです。攻撃者は、こうした方法で会社のユーザーの一覧を作るからです。照会を止めることが目的です。',
    '照会を受けると、Mimecastはメールボックスがあるともないとも答えず、意図的にあいまいな応答を返します。その応答をそのまま受け取る検証ツールには、二つの選択しかなく、どちらにも問題があります。推測すると、間違った結果がリストに入ります。あきらめてアドレスを「不明」にすると、実在する連絡先が判定されないまま残ります。',
  ],
  responseTitle: 'Mimecastが返す応答',
  responseParas: [
    'この問題にぶつかった人がよく目にするのは、次の二つのどちらかです。一つは「不明」のまま変わらない検証結果、もう一つは自社の送信ツールに届くバウンスメッセージです。文言はさまざまですが、内部のリソースが一時的に使えないことや、受信者が許可されていないことに触れているものがよくあります。これらは、Mimecastが保護しているメールボックスの存在を何かが確認しようとしたときに、Mimecastが返すメッセージです。',
    'Giggalの検証エンジンがここで頼りにしている動作は一つだけです。エンジンは「internal resource temporarily unavailable」という列挙防止の応答を見分け、それを結果として扱いません。ほかに書いた内容は、実際に目にする可能性のあるメッセージの背景の説明です。ゲートウェイが返すすべての文字列を照合しているという意味ではありません。',
  ],
  notAllowedTitle: '「recipient is not allowed」はアドレスが無効という意味ではありません',
  notAllowedPara:
    'このメッセージは、メールをどう受け付けるかについてのゲートウェイのポリシーを示しています。メールボックスが存在するかどうかを示すものではありません。その背後にあるアドレスは、有効であることが多くあります。読んでいるのはゲートウェイのルールで、メールサーバーの答えではありません。',
  handlesTitle: 'Giggal.aiのMimecastへの対応',
  handlesParas: [
    '検証を始める前に、ドメインのMXレコードからMimecastを見分けます。そのため、そのアドレスは失敗した後ではなく、最初からMimecast用の手順で処理されます。',
    'Mimecastでは、メールサーバーへの直接の照会をまったく行いません。再試行も、速度を落とした照会もせず、省略します。理由は二つあります。Mimecastはチェックを拒否するので、照会しても得るものがありません。また、照会をくり返すと送信元のIPに印が付き、同じ処理で検証しているほかのすべてのドメインの結果が悪くなります。',
    'メールアドレス検証の結果は、Mimecastが直接の照会に答えることに頼らない、別のシグナルから得ます。あいまいな応答が返ってきたときは、それを見分け、実際の答えとして記録しません。アドレスは、実際の配信可能か配信不可の結果として返るか、クレジットを返却したうえで「不明」として返ります。推測を答えのように見せて返すことはありません。',
  ],
  resultsTitle: '返される結果',
  resultHead: '結果',
  meaningHead: '意味',
  results: [
    { label: '配信可能', meaning: 'メールボックスが存在し、メールを受け付けます' },
    { label: '配信不可', meaning: 'メールボックスが存在しません' },
    { label: 'リスクあり', meaning: 'アドレスは存在しますが、到達率のリスクがあります' },
    { label: '不明', meaning: 'アドレスを検証できませんでした' },
  ],
  refundNote:
    'アドレスを検証できなかったときは、クレジットが自動で返却されます。料金がかかるのは、完了した検証だけです。',
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'Mimecastからのバウンスは、メールアドレスが間違っているという意味ですか？',
      a: '多くの場合、違います。この種類のMimecastのメッセージは、ゲートウェイのポリシーを示しています。メールボックスが存在するかどうかを示すものではありません。アドレスは有効であることが多くあります。',
    },
    {
      q: 'Mimecastのドメインで、多くの検証ツールが「不明」を返すのはなぜですか？',
      a: '多くの検証ツールは、メールサーバーに接続してメールボックスが存在するかを尋ねます。Mimecastはその問い合わせを横取りし、意図的にあいまいな応答を返します。そのため、検証ツールには判断の材料がありません。',
    },
    {
      q: 'Giggal.aiはMimecastのドメインをどうやって検証しますか？',
      a: 'Mimecastのドメインでは、別の検証シグナルを使います。メールボックスへの直接の照会は拒否されます。また、照会をくり返すと送信元のIPのレピュテーションが下がり、リストにあるほかのすべてのドメインの結果が悪くなります。',
    },
    {
      q: 'アップロードの前に、Mimecastのアドレスを分ける必要がありますか？',
      a: 'いいえ。Mimecastのドメインは、処理の中でMXレコードから自動で見分けます。',
    },
    {
      q: 'Mimecastのアドレスの検証に追加料金はかかりますか？',
      a: 'いいえ。ドメインの前にどのゲートウェイがあっても、通常の検証は1クレジットです。',
    },
  ],
  relatedTitle: '関連ページ',
  relatedLinks: ['SEGの背後にあるメールアドレスの検証のしくみ', 'キャッチオールドメインとリスクありのメールアドレスの検証', '料金とクレジット'],
  ctaHeadline: 'Mimecastの連絡先を「不明」で終わらせないようにしましょう',
}

export const MIMECAST_STRINGS: Partial<Record<Locale, MimecastStrings>> & { en: MimecastStrings } = {
  en,
  ja,
  'pt-br': ptBr,
  es,
  de,
  it,
  fr,
  nl,
  pl,
  id,
  ko,
  tr,
}

/** The page copy for `locale`, or English when that language has no copy yet. */
export function getMimecastStrings(locale: Locale): MimecastStrings {
  return MIMECAST_STRINGS[locale] ?? MIMECAST_STRINGS.en
}
