import type { ApiDocsStrings } from './types'

// Turkish API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Formal "siz", as in lib/i18n/tr.ts. Numbers 50.000. Suffixes after codes
// take an apostrophe (API'yi, CSV dosyası, 401 hatası).

export const API_DOCS_TR: ApiDocsStrings = {
  breadcrumbName: 'API dokümantasyonu',
  schema: {
    headline: 'Giggal.ai API dokümantasyonu',
    description:
      'Tek tek e-posta adresi doğrulama, toplu doğrulama işleri ve catch-all ile SEG korumalı adreslerin derinlemesine kontrolü için REST API. JSON endpointleri, API anahtarıyla kimlik doğrulama, yalnızca başarılı doğrulamalar ücretlendirilir.',
  },
  contactPath: '/tr/iletisim',

  overviewBanner:
    'Genel bir tanıtım mı arıyorsunuz? [E-posta doğrulama API](/email-verification-api) sayfasına veya [kayıt formları için e-posta doğrulama API](/email-validation-api) sayfasına bakın (İngilizce).',
  hero: {
    h1: 'E-posta doğrulama API dokümantasyonu',
    lead: 'Tek tek e-posta adreslerini doğrulayın, toplu doğrulama işleri çalıştırın ve catch-all ile SEG korumalı adresleri derinlemesine kontrol edin. Tüm endpointler JSON kullanır ve API anahtarıyla kimlik doğrulama yapar. Yalnızca başarılı doğrulamalar için ödeme yaparsınız.',
  },

  sidebar: {
    searchPlaceholder: 'Arayın…',
    collapse: 'Daraltın',
    expand: 'Genişletin',
  },

  intro: {
    h2: 'Giriş',
    body: "Giggal.ai API'si ile tek tek e-posta adreslerini doğrulayabilir, iş başına en fazla 50.000 e-posta adresi içeren toplu doğrulama işleri çalıştırabilir ve catch-all ile SEG korumalı adresleri derinlemesine kontrol edebilirsiniz. Bu, JSON kullanan basit bir REST API'dir. Her başarılı doğrulama hesabınızdan kredi kullanır.",
    baseUrlLabel: 'Temel URL',
    apiKeyLabel: 'API anahtarı oluşturma',
    apiKeyBody:
      "API anahtarınızı Giggal.ai panelinizden oluşturun: kenar çubuğunda Developer API sekmesini açın ve Create API Key düğmesine tıklayın. Her anahtar hesabınıza bağlıdır ve kendi kullanımını ayrı kaydeder. Bir anahtarı istediğiniz zaman iptal edebilirsiniz.",
    apiKeyLink: 'Developer API sekmesini açın',
    envelopeLabel: 'Yanıt yapısı',
    envelopeBody: 'Her yanıt aynı JSON yapısını kullanır:',
    quickStartLabel: 'Hızlı başlangıç: cURL ile tek bir adresi doğrulama',
  },

  auth: {
    h2: 'Kimlik doğrulama',
    body: 'API anahtarınızı her istekte aşağıdaki iki HTTP başlığından biriyle gönderin. İkisi de çalışır.',
    bearerLabel: 'Seçenek 1: Bearer token',
    xApiKeyLabel: 'Seçenek 2: X-API-Key başlığı',
    note: 'Eksik, geçersiz veya iptal edilmiş anahtarlar HTTP 401 hatası döndürür. API anahtarlarını asla istemci tarafındaki kodda göstermeyin. API çağrılarını kendi sunucunuz üzerinden yapın.',
    idempotencyLabel: 'Idempotency (toplu doğrulama ve catch-all)',
    idempotencyBody:
      '`POST /v1/verify-batch` ve `POST /v1/catchall` isteklerinde bir `Idempotency-Key` başlığı gönderin. Aynı anahtarla yapılan tekrar denemeleri ilk yanıtı döndürür. Yinelenen bir iş oluşmaz ve krediler iki kez düşülmez.',
  },

  groups: {
    'single-verification': 'Tek adres doğrulama',
    'bulk-verification': 'Toplu doğrulama',
    'catchall-verification': 'Catch-all doğrulama',
    account: 'Hesap',
  },
  groupCount: {
    one: 'Bu grupta {n} endpoint var.',
    other: 'Bu grupta {n} endpoint var.',
  },

  endpoint: {
    authorizations: 'Yetkilendirme',
    pathParams: 'Path ve query parametreleri',
    requestBody: 'İstek gövdesi',
    required: 'Zorunlu',
    responseSamples: 'Örnek yanıtlar',
  },

  endpoints: {
    'verify-single': {
      title: 'Tek bir e-posta adresini doğrulama',
      description:
        'Tek bir e-posta adresini eş zamanlı olarak doğrular. 1 kredi kullanır. Alan adı catch-all ise derinlemesine doğrulama aynı istekte çalışır ve yanıtta catch_all_score ile catch_all_verdict alanları bulunur.',
      bodyParams: {
        email: 'Doğrulanacak e-posta adresi.',
      },
    },
    'submit-batch': {
      title: 'Toplu doğrulama işi gönderme',
      description:
        'İş başına en fazla 50.000 e-posta adresi gönderin. İşlem eş zamansızdır. İlerlemeyi görmek için GET /v1/jobs/:jobId adresini düzenli olarak sorgulayın. İşi oluşturma isteğini iki kez ücretlendirilmeden güvenle tekrar denemek için bir Idempotency-Key başlığı gönderin.',
      bodyParams: {
        emails:
          'Doğrulanacak e-posta adreslerinin dizisi. İş başına en fazla 50.000. Yinelenen ve hatalı biçimli adresler sunucu tarafında çıkarılır.',
        name: 'İş için isteğe bağlı, okunabilir bir ad. Panelinizde gösterilir.',
      },
    },
    'get-job': {
      title: 'Toplu işin durumunu alma',
      description:
        'İlerlemeyi görmek için düzenli olarak sorgulayın. Durum processing değerinden completed (veya failed) değerine geçer. Önerilen sorgulama aralığı: 10 ila 15 saniye. Küçük listeler (50 adresten az) genellikle 30 saniye içinde tamamlanır.',
      params: {
        jobId: 'POST /v1/verify-batch isteğinin döndürdüğü iş kimliği.',
      },
    },
    'get-job-results': {
      title: 'Toplu işin sonuçlarını alma',
      description:
        'Durum "completed" olduğunda her e-posta adresinin sonucunu alın. Sonuçlar sayfalara bölünür, bu yüzden page ve limit query parametrelerini gönderin. Sonuçlar 48 saat saklanır (işteki resultsExpiresAt alanına bakın).',
      params: {
        jobId: 'İş kimliği.',
        page: 'Sayfa numarası, varsayılan 1.',
        limit: 'Sayfa başına sonuç sayısı, varsayılan 25, en fazla 500.',
      },
    },
    'start-catchall': {
      title: 'Catch-all doğrulama görevi başlatma',
      description:
        'Tamamlanmış bir toplu iş için derinlemesine catch-all doğrulamasını başlatır. Yalnızca kaynak işte catch-all olarak işaretlenen adresler yeniden kontrol edilir. Adres başına 1 kredi ücretlendirilir (yanıttaki creditsRequired alanına bakın).',
      bodyParams: {
        jobId:
          'Tamamlanmış bir toplu doğrulama işinin kimliği. Yalnızca o işteki catch-all adresler derinlemesine doğrulanır.',
        name: 'Görev için isteğe bağlı, okunabilir bir ad.',
      },
    },
    'get-catchall': {
      title: 'Catch-all görevinin durumunu alma',
      description:
        'İlerlemeyi ve güncel verdictCounts sayılarını görmek için düzenli olarak sorgulayın. Catch-all görevleri, adres sayısına bağlı olarak genellikle birkaç saniye ila birkaç dakika içinde tamamlanır.',
      params: {
        taskId: 'POST /v1/catchall isteğinin döndürdüğü görev kimliği.',
      },
    },
    'catchall-results': {
      title: 'Catch-all görevinin sonuçlarını alma',
      description:
        'Her e-posta adresinin sonucunu, puanın dayandığı ayrıntılarla (alan adı sinyalleri ve alan adının yaşı) birlikte sayfalar hâlinde alır.',
      params: {
        taskId: 'Görev kimliği.',
        page: 'Sayfa numarası, varsayılan 1.',
        limit: 'Sayfa başına sonuç sayısı, varsayılan 25, en fazla 500.',
        verdict: 'Sonuca göre filtreleme: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Catch-all sonuçlarını CSV olarak indirme',
      description:
        'Tamamlanmış bir catch-all görevinin tüm sonuçlarını Email, Score ve Verdict sütunlarını içeren bir CSV dosyası olarak indirir. Content-Type değeri text/csv olur.',
      params: {
        taskId: 'Görev kimliği.',
        verdict: 'Sonuca göre filtreleme: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Güncel kredi bakiyesini alma',
      description:
        'Hesap bakiyenizi döndürür: kullanılabilir krediler, ayrılmış krediler (devam eden işler için tutulanlar) ve hesabın açılışından bu yana toplamlar. "unknown" sonucuyla dönen doğrulamalar otomatik olarak iade edilir ve burada görünür.',
    },
  },

  errors: {
    h2: 'Hatalar ve istek sınırları',
    statusHeader: 'Durum',
    meaningHeader: 'Anlamı',
    statusRows: [
      { status: '200 OK', meaning: 'İstek başarılı oldu (eş zamanlı doğrulama veya durum ya da sonuç sorgusu).' },
      { status: '202 Accepted', meaning: 'Eş zamansız iş veya görev oluşturuldu ve sıraya alındı.' },
      { status: '400 Bad Request', meaning: 'Eksik veya geçersiz parametreler (hatalı e-posta biçimi, boş emails dizisi, eksik jobId).' },
      { status: '401 Unauthorized', meaning: 'API anahtarı eksik, geçersiz veya iptal edilmiş.' },
      { status: '402 Payment Required', meaning: 'İstenen işlem için kredi yetersiz.' },
      { status: '404 Not Found', meaning: 'Bu iş veya görev kimliği hesabınızda yok.' },
      { status: '409 Conflict', meaning: 'İş gerekli durumda değil (örneğin iş tamamlanmadan sonuçların istenmesi).' },
      { status: '410 Gone', meaning: 'İş sonuçlarının 48 saatlik saklama süresi doldu.' },
      { status: '429 Too Many Requests', meaning: 'İstek sınırı aşıldı. Bir süre bekleyin ve tekrar deneyin.' },
      { status: '500 / 502 / 503', meaning: 'Sunucu veya arkadaki doğrulama hizmeti geçici olarak kullanılamıyor.' },
    ],
    rateLimitsH3: 'İstek sınırları',
    rateLimitsBody:
      'Her yanıtta `RateLimit-Limit`, `RateLimit-Remaining` ve `RateLimit-Reset` başlıkları bulunur (RFC yazımıyla). Böylece isteklerinizin hızını ayarlayabilirsiniz. `RateLimit-Reset`, geçerli zaman aralığı sıfırlanana kadar kalan saniye sayısıdır.',
    categoryHeader: 'Kategori',
    limitHeader: 'Sınır',
    rateLimitRows: [
      { category: 'Tüm endpointler (varsayılan)', limit: '300 istek / 15 dakika' },
      { category: 'İş oluşturma (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 istek / 15 dakika' },
      { category: 'İş durumu sorgulama (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 istek / 15 dakika' },
      { category: 'Toplu iş başına en fazla e-posta adresi', limit: '50.000' },
      { category: 'İş sonuçlarının saklanma süresi', limit: '48 saat' },
    ],
    tierNote:
      'Üç ayrı sınır vardır, çünkü işin durumunu sorgulamak iş oluşturmaktan çok daha sık yapılır. Bir iş çalışırken birkaç saniyede bir sorgu gönderebilirsiniz. `600 / 15 min` sınırı (dakikada yaklaşık 40) size sunucuyu zorlamadan yeterli alan bırakır.',
    higherLimitsTitle: 'Daha yüksek sınırlara mı ihtiyacınız var?',
    higherLimitsBody: 'Doğrulanmış entegrasyon ortakları için sınırları düzenli olarak yükseltiyoruz.',
    higherLimitsCta: 'Bize ulaşın',
    h429: '429 yanıtının biçimi',
    body429: 'Bir istek sınırına ulaştığınızda API, aşağıdaki gövdeyle HTTP 429 döndürür:',
    backoff:
      'Tekrar denemeden önce `RateLimit-Reset` başlığındaki değer kadar (zaman aralığı sıfırlanana kadar kalan saniye) bekleyin.',
  },

  cta: {
    h3: 'Entegrasyona hazır mısınız?',
    body: 'API anahtarınızı saniyeler içinde oluşturun. Ücretsiz deneme kredileri dahildir. Böylece ödeme yapmadan önce entegrasyonu baştan sona kurup test edebilirsiniz.',
    primary: 'API anahtarınızı alın',
    secondary: 'Ekibimizle konuşun',
  },
}
