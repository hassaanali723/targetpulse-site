import type { IntegrationPagesContent } from './types'

// Turkish copy for the integration pages, translated from the English pages
// (lib/i18n/integrationPages/en.ts) with the Indonesian copy as the structural
// model. Keyword plan (SEO-Plan/i18n-batch5-tr-keyword-plan.md, provisional):
// the checker term "e-posta adresi doğrulama" links to
// /tr/mail-adresi-dogrulama; "e-posta doğrulama" carries the rest.
// Product UI labels (Zapier, n8n, HubSpot, Giggal.ai dashboard), property
// names, status values, scopes, tool names and code stay in English, as the
// apps show them. Formal "siz". Numbers 1.000 and 8.000. Suffixes after
// product names take an apostrophe (Zapier'da, HubSpot'a, n8n'de, API'yi).

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Pazarlama otomasyonu',
  'Email Marketing': 'E-posta pazarlaması',
  CRM: 'CRM',
  Ecommerce: 'E-ticaret',
  'Sales & Outreach': 'Satış ve müşteri iletişimi',
  'Forms & Surveys': 'Formlar ve anketler',
  'Website & Popups': 'Web sitesi ve açılır pencereler',
  'Spreadsheets & Data': 'E-tablolar ve veri',
  Support: 'Müşteri desteği',
  Payments: 'Ödemeler',
  Automation: 'Otomasyon',
  Spreadsheets: 'E-tablolar',
  Forms: 'Formlar',
  'AI & Agents': 'Yapay zekâ ve ajanlar',
  Developer: 'Geliştirici',
}

export const TR: IntegrationPagesContent = {
  common: {
    locale: 'tr',
    hubPath: '/tr/entegrasyonlar',
    hubCrumb: 'Entegrasyonlar',
    checkerPath: '/tr/mail-adresi-dogrulama',
    signupLabel: '1.000 ücretsiz krediyle başlayın',
    getStarted: 'Ücretsiz başlayın',
    allIntegrations: 'Tüm entegrasyonları görün',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'E-posta doğrulama entegrasyonları: HubSpot, Zapier | Giggal.ai',
      description:
        'HubSpot, Zapier, n8n, Mailchimp, Claude ve ChatGPT için e-posta doğrulama entegrasyonları. Adresleri kullandığınız araçlarda doğrulayın, catch-all dahil.',
      ogTitle: 'E-posta doğrulama entegrasyonları: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        "Giggal.ai e-posta doğrulamayı HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude ve ChatGPT'ye bağlayın.",
    },
    h1Lead: 'E-posta doğrulama entegrasyonları:',
    h1Accent: 'zaten kullandığınız araçlar için',
    intro:
      'Giggal.ai, CRM sisteminize, e-posta platformunuza, e-tablolarınıza ve yapay zekâ asistanınıza bağlanan bir [mail adresi doğrulama](/tr/mail-adresi-dogrulama) aracıdır. Her kontrol, posta kutusunun var olup olmadığını söyler. Catch-all adresler de geçerli ya da geçersiz sonucu alır.',
    waysTitle: 'Araçlarınıza e-posta doğrulama eklemenin dört yolu',
    waysIntro:
      'Çalışma şeklinize uyan yolu seçin. Her yol aynı kredileri kullanır ve aynı sonucu verir.',
    ways: [
      {
        label: 'Doğrudan',
        title: 'Doğrudan entegrasyonlar',
        text: "[HubSpot](/tr/entegrasyonlar/hubspot), Mailchimp, SendGrid ve diğer platformları Giggal.ai panelinden bağlayın. Bir listeyi içe aktarın, doğrulayın ve temiz listeyi geri gönderin.",
      },
      {
        label: 'Otomasyon',
        title: 'Zapier ve n8n',
        text: "Her yeni kişiyi, form yanıtını veya e-tablo satırını geldiği anda doğrulayın. [Zapier](/tr/entegrasyonlar/zapier) üzerindeki Giggal.ai uygulamasını ya da [n8n](/tr/entegrasyonlar/n8n) için resmi node'u kullanın.",
      },
      {
        label: 'MCP',
        title: 'Yapay zekâ asistanları',
        text: "[Giggal.ai MCP sunucusunu](/tr/mcp) Claude, ChatGPT, Cursor veya VS Code'a ekleyin. Ardından asistandan adresleri sohbetin içinde doğrulamasını isteyin.",
      },
      {
        label: 'API',
        title: 'REST API',
        text: 'Tek adres veya toplu doğrulama isteklerini kendi kodunuzdan gönderin. Sonuçlar JSON olarak döner. [API dokümantasyonu](/tr/api-dokumantasyonu) her endpointi listeler.',
      },
    ],
    grid: {
      searchPlaceholder: 'Entegrasyon arayın…',
      searchAria: 'Entegrasyon arayın',
      connectionAria: 'Bağlantı türüne göre filtreleyin',
      connection: { all: 'Tümü', direct: 'Doğrudan', zapier: 'Zapier üzerinden', api: 'API', mcp: 'MCP' },
      categoryAria: 'Kategoriye göre filtreleyin',
      allCategories: 'Tüm kategoriler',
      categories: CATEGORIES,
      prevPage: 'Önceki sayfa',
      nextPage: 'Sonraki sayfa',
      pagination: 'Sayfalar',
      showing: '{total} entegrasyondan {from} ila {to} arası gösteriliyor',
      noMatchTitle: 'Aramanızla eşleşen bir entegrasyon yok.',
      noMatchText:
        'HTTP isteği gönderebilen her araç [REST API](/tr/api-dokumantasyonu) ile çalışabilir.',
      descriptions: {
        zapier:
          "Her yeni e-posta adresini 8.000'den fazla uygulamada gerçek zamanlı doğrulayın, catch-all adresler dahil. Kod gerekmez.",
        n8n:
          "Resmi Giggal.ai community node'u ile n8n iş akışlarınızda tek adresleri ve listelerin tamamını doğrulayın.",
        claude:
          "Giggal.ai MCP sunucusunu Claude'a ekleyin ve e-posta adreslerini sohbetin içinde doğrulayın.",
        chatgpt:
          "Giggal.ai MCP sunucusunu ChatGPT'ye ekleyin ve e-posta adreslerini sohbetin içinde doğrulayın.",
        clay:
          "Clay tablolarındaki müşteri adayı e-posta adreslerini Giggal.ai API'si ile doğrulayın, catch-all adresler dahil.",
        'rest-api':
          'Tek adres, toplu ve catch-all e-posta doğrulama için REST API. İstediğiniz özel entegrasyonu kurun.',
        mailchimp:
          'Bir Mailchimp audience listesini içe aktarın, doğrulayın ve yalnızca teslim edilebilir aboneleri tutun.',
        mailgun:
          'Mailgun hesabınızı bağlayın ve gönderim listelerinizi her kampanyadan önce doğrulayın.',
        mailjet:
          "Mailjet kişi listelerini Giggal.ai'a aktarın ve doğrulayın, catch-all adresler dahil.",
        sendgrid:
          'Gönderen itibarınızı korumak için SendGrid kişilerinizi toplu olarak doğrulayın.',
        activecampaign:
          'ActiveCampaign kişilerinizi içe aktarın, doğrulayın ve göndermeden önce hatalı adresleri çıkarın.',
        'campaign-monitor':
          'Campaign Monitor hesabınızı bağlayın ve her abone listesini Giggal.ai üzerinde doğrulayın.',
        getresponse:
          'Bounce sayısını azaltmak için GetResponse listelerinizi doğrulayın, catch-all alan adlarındaki kişiler dahil.',
        aweber:
          'AWeber abonelerinizi içe aktarın, doğrulayın ve temiz listeyi geri gönderin.',
        mailerlite:
          'MailerLite hesabınızı bağlayın ve abone listelerinizi bir sonraki kampanyadan önce doğrulayın.',
        drip:
          'Otomatik e-postalarınız gerçek posta kutularına ulaşsın diye Drip kişilerinizi toplu olarak doğrulayın.',
        'elastic-email':
          'Elastic Email listelerinizi içe aktarın ve doğrulayın, catch-all adresler ve güvenli e-posta ağ geçitlerinin arkasındaki adresler dahil.',
        'reply-io':
          'Reply.io dizileriniz başlamadan önce müşteri adaylarının e-posta adreslerini doğrulayın. Böylece e-postalarınız gerçek posta kutularına ulaşır.',
        'zoho-crm':
          'Zoho CRM kişilerini ve müşteri adaylarını içe aktarın, doğrulayın ve CRM verilerinizi temiz tutun.',
        'google-sheets':
          'Her yeni satırı eklendiği anda doğrulayın ve sonucu e-tablonuza geri yazın.',
        hubspot:
          'HubSpot CRM hesabınızdaki kişileri ve listeleri doğrulayın, ardından HubSpot içinde sonuca göre filtreleyin.',
        salesforce:
          'Her yeni Salesforce müşteri adayının e-posta adresini oluşturulduğu anda doğrulayın.',
        typeform:
          'Typeform yanıtlarındaki e-posta adreslerini diğer araçlarınıza ulaşmadan önce doğrulayın.',
        slack:
          'Doğrulama sonuçlarını ve liste bildirimlerini bir Slack kanalına gönderin.',
      },
      zapierAppDescription:
        '{name} uygulamasına gelen e-posta adreslerini Zapier üzerinden gerçek zamanlı doğrulayın.',
      logoAlt: 'Giggal.ai ile {name} e-posta doğrulama entegrasyonu',
    },
    appListTitle: 'Desteklediğimiz tüm Zapier uygulamaları',
    appListIntro: '{count} uygulama Zapier üzerinden Giggal.ai ile bağlanır. Her birinin kendi kurulum kılavuzu vardır (İngilizce).',
    apiTitle: 'Aracınız listede yok mu?',
    apiText:
      'HTTP isteği gönderebilen her araç Giggal.ai ile e-posta adresi doğrulayabilir. Tek adres ve toplu kontroller için [e-posta doğrulama API](/tr/email-dogrulama-api) sayfasına bakın ya da Zapier üzerinden bağlanın.',
    apiCta: 'API dokümantasyonu',
    apiHref: '/tr/api-dokumantasyonu',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier ile e-posta doğrulama: 8.000+ uygulama | Giggal.ai',
      description:
        "Zapier'da Giggal.ai ile e-posta adreslerini doğrulayın. Her yeni kişiyi gerçek zamanlı kontrol edin, catch-all adreslerde de sonuç alın. Kod gerekmez.",
      ogTitle: 'Zapier ile e-posta doğrulama: 8.000+ uygulama',
      ogDescription:
        "Her yeni e-posta adresini Zapier'da Giggal.ai ile doğrulayın. HubSpot, Google Sheets, Salesforce, Mailchimp ve 8.000'den fazla uygulamayla çalışır.",
    },
    crumb: 'Zapier',
    h1Lead: 'Zapier ile e-posta doğrulama:',
    h1Accent: "8.000'den fazla uygulama",
    intro:
      "Giggal.ai [mail adresi doğrulama](/tr/mail-adresi-dogrulama) aracını herhangi bir Zap'a ekleyin ve her adresi geldiği anda kontrol edin. Formlar, CRM sistemleri, e-tablolar ve e-posta platformlarıyla çalışır. Catch-all adresler de geçerli ya da geçersiz sonucu alır. Kod yazmanız gerekmez.",
    viewOnZapier: "Zapier'da görün",
    tabsTitle: 'Zapier iş akışları ve kurulum kılavuzu',
    tabsIntro:
      "Sık kullanılan bir iş akışıyla başlayın ya da kılavuzu izleyerek yaklaşık beş dakikada kendi Zap'ınızı oluşturun.",
    tabs: {
      cardSubtitle: "Giggal.ai'ı 8.000'den fazla uygulamaya bağlayın",
      tryFree: 'Ücretsiz deneyin',
      actionsTitle: '4 Zapier eylemi',
      actions: [
        { name: 'Verify Email', description: 'Tek bir e-posta adresini gerçek zamanlı doğrular, catch-all adresler dahil.' },
        { name: 'Start Bulk Verification', description: 'Bir adres listesi gönderir. Sonraki adımların kullanabileceği bir iş kimliği döndürür.' },
        { name: 'Get Bulk Verification Results', description: 'Toplu işin durumu tamamlandığında sonuçlarını alır.' },
        { name: 'Get Credit Balance', description: 'Kalan Giggal.ai kredilerinizi gösterir.' },
      ],
      workflowsTab: 'İş akışları',
      guideTab: 'Kurulum kılavuzu',
      workflows: [
        {
          title: 'Yeni HubSpot kişilerini doğrulayın',
          description:
            "HubSpot'ta bir kişi oluşturulduğunda Giggal.ai e-posta adresini doğrular ve sonucu bir kişi özelliğine yazar.",
        },
        {
          title: "Google Sheets'teki yeni satırları doğrulayın",
          description:
            'Her yeni satır eklendiği anda doğrulanır. Durum, risk düzeyi ve catch-all sonucu satıra geri yazılır.',
        },
        {
          title: 'Yeni Salesforce müşteri adaylarını doğrulayın',
          description:
            'Her yeni müşteri adayı, bir satış temsilcisi onunla çalışmaya başlamadan önce doğrulanır. Böylece kimse var olmayan bir posta kutusuna yazmaz.',
        },
        {
          title: 'Mailchimp kayıtlarını doğrulayın',
          description:
            'Her yeni aboneyi kayıt anında doğrulayın ve Mailchimp audience listenize yalnızca teslim edilebilir adresleri ekleyin.',
        },
        {
          title: 'Typeform yanıtlarını kontrol edin',
          description:
            'Form yanıtlarındaki yanlış yazılmış ve geçici e-posta adreslerini diğer araçlarınıza ulaşmadan önce bulun.',
        },
        {
          title: "Sonuçları Slack'e gönderin",
          description:
            'Bir doğrulama bittiğinde ya da catch-all bir alan adındaki müşteri adayı geçerli olarak doğrulandığında Slack mesajı gönderin.',
        },
      ],
      workflowCta: "Zapier'da kurun",
      guideTitle: "Giggal.ai'ı Zapier'a bağlama",
      guideIntro:
        'Kurulum yaklaşık beş dakika sürer. Aşağıdaki örnek, bir Google Sheets tablosundaki her yeni satırı doğrular.',
      steps: [
        {
          title: 'Tetikleyici uygulamayı seçin',
          text: "Bir Zap oluşturun ve onu başlatacak uygulamayı seçin. Zapier'daki 8.000'den fazla uygulamanın her biri kullanılabilir. Bu örnekte Google Sheets'i ve New or Updated Spreadsheet Row olayını seçin. Hesabınızı bağlayın ve Continue düğmesine tıklayın.",
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: "Zapier'da Google Sheets ve New or Updated Spreadsheet Row olayıyla tetikleyici kurulumu",
        },
        {
          title: 'Giggal.ai uygulamasını eylem adımı olarak ekleyin',
          text: 'Eylem adımında uygulama seçicide Giggal.ai uygulamasını arayın ve seçin.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Zapier uygulama seçicisinde Giggal.ai araması',
        },
        {
          title: 'Bir eylem olayı seçin',
          text: 'Giggal.ai dört eylem sunar: Verify Email, Start Bulk Verification, Get Bulk Verification Results ve Get Credit Balance. Bu örnek için Verify Email eylemini seçin.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Zapier olay seçicisinde dört Giggal.ai eylem olayı',
        },
        {
          title: 'Giggal.ai hesabınızı bağlayın',
          text: "Zapier ilk seferde API anahtarınızı ister. Giggal.ai panelinde Developer API sekmesini açın ve Create API Key düğmesine tıklayın. Anahtarı Zapier'a yapıştırın ve Connect düğmesine tıklayın. Yeni hesaplar, kredi kartı gerekmeden 1.000 ücretsiz kredi alır.",
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: "Giggal.ai hesabını bir API anahtarıyla Zapier'a bağlama",
        },
        {
          title: 'E-posta alanını eşleyin ve sonucu kullanın',
          text: "Email girdisini adresin bulunduğu sütunla eşleyin ve bir test çalıştırın. Giggal.ai durumu, risk düzeyini, puanı ve catch-all sonucunu döndürür. Bu adımdan sonra Zapier filtreleri veya yolları (Filter, Paths) ekleyin. Örneğin teslim edilebilir adresleri tabloya geri yazın ve geçersiz olanları başka bir sekmeye taşıyın.",
        },
      ],
      help: 'Bir adımda takıldınız mı? [Ekibimize ulaşın](/tr/iletisim) ya da yanıtın tam yapısı için [API dokümantasyonunu](/tr/api-dokumantasyonu) okuyun.',
    },
    why: [
      {
        title: "Zapier'da catch-all e-posta doğrulama",
        text: "Birçok doğrulama aracı catch-all adresleri riskli olarak işaretler ve orada durur. Bir B2B listesinde bu, adreslerin yaklaşık %30'u olabilir. Giggal.ai bu adresleri daha ayrıntılı kontrol eder ve Zap'ınızın içinde geçerli ya da geçersiz sonucunu verir.",
      },
      {
        title: 'Veri girişi anında doğrulama',
        text: 'Müşteri adayları bir formdan, CRM sisteminden veya e-tablodan geldikleri anda doğrulanır. Hatalı adresler listelerinize hiç girmez, bu yüzden sonradan daha az temizlik yaparsınız.',
      },
      {
        title: "Zap'ınızın yönlendirme için kullanabileceği sonuçlar",
        text: 'Her kontrol bir durum, risk düzeyi, teslim edilebilirlik puanı ve catch-all sonucu döndürür. Bunları Zapier filtrelerinde ve yollarında kullanarak her müşteri adayını doğru yere gönderin.',
      },
    ],
    appsTitle: 'Bu uygulamaların herhangi birinden e-posta adreslerini doğrulayın',
    appsIntro: 'Aşağıdaki her uygulamanın Zapier üzerinden e-posta doğrulama için kendi kurulum kılavuzu vardır (İngilizce).',
    categories: CATEGORIES,
    faqTitle: 'Zapier ile e-posta doğrulama: sık sorulan sorular',
    faq: [
      {
        q: 'Giggal.ai Zapier entegrasyonu nasıl çalışır?',
        a: "Bir Zap'a Giggal.ai adımı eklersiniz. Tetikleyici çalıştığında, örneğin yeni bir CRM kişisi veya form yanıtı geldiğinde, Zapier e-posta adresini Giggal.ai'a gönderir. Giggal.ai posta kutusunun var olup olmadığını kontrol eder ve sonucu bir sonraki adıma iletir. Kod gerekmez.",
      },
      {
        q: 'Zapier catch-all e-posta adreslerini doğrulayabilir mi?',
        a: 'Evet, doğrulama adımı olarak Giggal.ai ile. Çoğu doğrulama aracı catch-all alan adları için riskli veya bilinmiyor sonucu verir. Giggal.ai bu adreslerde ek kontroller çalıştırır ve bir puanla birlikte geçerli ya da geçersiz sonucunu verir.',
      },
      {
        q: 'Hangi uygulamaları bağlayabilirim?',
        a: "Zapier'daki her uygulamayı. HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform ve Slack bunlardan bazılarıdır. Bir uygulama Zapier'da varsa Giggal.ai'a adres gönderebilir.",
      },
      {
        q: 'Zapier üzerinden bir kontrol kaç kredi kullanır?',
        a: 'Panelde veya API ile olduğu gibi e-posta adresi başına bir kredi. Catch-all kontrolleri de aynı şekilde 1 kredi kullanır. Yeni hesaplar, kredi kartı gerekmeden 1.000 ücretsiz kredi alır.',
      },
      {
        q: 'Gerçek zamanlı mı doğrulamalıyım, toplu olarak mı?',
        a: "Çoğu ekip ikisini de yapar. Zapier'daki gerçek zamanlı kontroller hatalı adresleri girişte durdurur. Toplu doğrulama ise elinizdeki listeleri panelde veya Start Bulk Verification eylemiyle temizler.",
      },
    ],
    howToName: "Zapier'da Giggal.ai ile e-posta adresi doğrulama",
    howToDescription:
      'Herhangi bir Zapier iş akışında, catch-all adresler dahil e-posta doğrulamayı kurun.',
    cta: {
      title: "Zapier'da her yeni e-posta adresini doğrulayın",
      text: "İlk doğrulama Zap'ınızı yaklaşık beş dakikada oluşturun. Kredi kartı gerekmeden 1.000 ücretsiz kredi alırsınız ve catch-all kontrolleri dahildir.",
      primary: 'Ücretsiz başlayın',
      secondary: 'Tüm entegrasyonları görün',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'n8n ile e-posta doğrulama: resmi community node | Giggal.ai',
      description:
        "Resmi Giggal.ai community node'u ile n8n'de e-posta adreslerini doğrulayın. Tek adresler veya listeler, catch-all dahil. n8n-nodes-giggal npm'de.",
      ogTitle: 'n8n ile e-posta doğrulama: resmi community node',
      ogDescription:
        "Giggal.ai community node'u ile n8n iş akışlarında tek adresleri ve listelerin tamamını doğrulayın. Catch-all adresler dahil.",
    },
    crumb: 'n8n',
    h1Lead: 'n8n ile e-posta doğrulama:',
    h1Accent: "resmi Giggal.ai node'u",
    intro:
      "Giggal.ai [mail adresi doğrulama](/tr/mail-adresi-dogrulama) aracını n8n iş akışlarınıza ekleyin. Tek bir adresi gerçek zamanlı doğrulayın ya da listenin tamamını toplu iş olarak gönderin. Catch-all adresler de geçerli ya da geçersiz sonucu alır. Node'u npm'den bir kez kurarsınız.",
    viewOnNpm: "npm'de görün",
    opsTitle: "n8n node'u neler yapabilir",
    opsIntro:
      "Node'da iki Resource ve dört Operation seçeneği vardır. Tek adres kontrolleri için Email, listeler için Job seçeneğini kullanın.",
    ops: [
      { name: 'Verify', detail: 'Tek bir e-posta adresini gerçek zamanlı doğrular, catch-all dahil. Kontrol başına 1 kredi.' },
      { name: 'Verify Batch', detail: 'Listenin tamamını tek bir istekte gönderir. İş akışınızın daha sonra kontrol edebileceği bir iş kimliği döndürür.' },
      { name: 'Get Status', detail: 'Toplu işin ne kadar ilerlediğini gösterir: işlenen adres sayısı, yüzde ve bitiş zamanı.' },
      { name: 'Get Results', detail: 'Tamamlanan sonuçları sayfa sayfa alır. deliverable veya catch_all gibi isteğe bağlı bir filtre kullanılabilir.' },
    ],
    installTitle: "Node'u kurun ve ilk e-posta adresinizi doğrulayın",
    installIntro:
      'Bulutta veya kendi sunucunuzda çalışan bir n8n kurulumuna ve ücretsiz bir Giggal.ai hesabına ihtiyacınız var. Kurulum yaklaşık beş dakika sürer.',
    installSteps: [
      {
        title: "n8n ayarlarında Community nodes bölümünü açın",
        text: "n8n'de sol alttaki hesap menünüze tıklayın ve Settings bölümünü açın. Ardından Community nodes seçeneğini seçin.",
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'n8n ayarlar menüsündeki Community nodes seçeneği',
      },
      {
        title: "n8n-nodes-giggal paketini kurun",
        text: "Install a community node düğmesine tıklayın. npm Package Name alanına `n8n-nodes-giggal` yazın, onay kutusunu işaretleyin ve Install düğmesine tıklayın. Giggal.ai node'u ardından node listenizde görünür.",
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Install community nodes penceresinde n8n-nodes-giggal paketinin kurulması',
      },
      {
        title: "Node'u ekleyin ve bir credential oluşturun",
        text: "Giggal.ai node'unu bir iş akışına ekleyin. Credential açılır listesinde Create new credential seçeneğini seçin.",
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: "n8n'de node üzerinde yeni bir Giggal.ai credential oluşturma",
      },
      {
        title: 'API anahtarınızı yapıştırın',
        text: "Giggal.ai panelinde Developer API sekmesini açın ve Create API Key düğmesine tıklayın. Anahtarı API Key alanına yapıştırın ve kaydedin. Kurulumunuzdaki her Giggal.ai node'u artık bu anahtarı kullanabilir. Yeni hesaplar, kredi kartı gerekmeden 1.000 ücretsiz kredi alır.",
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: "Giggal.ai API anahtarını n8n credential'ına ekleme",
      },
      {
        title: 'İlk e-posta adresinizi doğrulayın',
        text: 'Resource alanını Email, Operation alanını Verify olarak ayarlayın. Email Address alanını `{{ $json.email }}` gibi bir expression ile verilerinize eşleyin ve Execute step düğmesine tıklayın. Çıktıda durum, risk düzeyi, teslim edilebilirlik puanı ve catch-all ayrıntıları görünür.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: "n8n'de tek bir e-posta adresini doğrulama ve çıktıyı okuma",
      },
    ],
    batchTitle: "n8n'de listenin tamamını doğrulayın",
    batchIntro:
      'Birkaç adresten fazlası için Resource alanında Job seçeneğini kullanın. Sıra şöyledir: listeyi gönderin, durumu kontrol edin, sonra sonuçları alın.',
    batchSteps: [
      {
        title: 'Listeyi Verify Batch ile gönderin',
        text: "Operation alanını Verify Batch olarak ayarlayın ve Email Field alanında adresleri içeren özelliği belirtin. Daha sonra panelde kolayca bulmak için işe bir ad verebilirsiniz. Catch-all adreslerin daha ayrıntılı kontrol edilmesi için Enable Catch-All Rescue seçeneğini açık bırakın. Node hemen bir iş kimliği döndürür ve doğrulama arka planda çalışır.",
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: "Giggal.ai n8n node'u ile doğrulama için bir e-posta listesi gönderme",
      },
      {
        title: 'İlerlemeyi Get Status ile kontrol edin',
        text: "Resource alanını Job, Operation alanını Get Status olarak ayarlayın ve önceki adımdaki iş kimliğini girin. Döngünün API'yi çok sık sorgulamaması için kontroller arasına bir Wait node'u koyun.",
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: "n8n'de Get Status işlemiyle toplu işin ilerlemesini kontrol etme",
      },
      {
        title: 'Sonuçları Get Results ile alın',
        text: 'Durum completed olduğunda aynı iş kimliğiyle Get Results işlemini çalıştırın. Her e-posta adresi için durumu, risk düzeyi ve puanı içeren bir öğe alırsınız. Yalnızca deliverable, undeliverable veya catch_all satırlarını almak için Status Filter alanını kullanın.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: "n8n'de tamamlanan toplu doğrulama sonuçlarını alma",
      },
    ],
    calloutTitle: 'Catch-all ve ağ geçidi arkasındaki adresler geçerli ya da geçersiz sonucu alır',
    calloutText:
      'Birçok doğrulama aracı, güvenli e-posta ağ geçitlerinin arkasındaki adresler için bilinmiyor, catch-all alan adları için riskli sonucu verir. Giggal.ai, Proofpoint ve Mimecast gibi [ağ geçitlerinin arkasındaki adresleri doğrular](/tr/seg-dogrulama) ve catch-all alan adlarında ek kontroller çalıştırır. [Catch-all doğrulamanın nasıl çalıştığını görün](/tr/catch-all-dogrulama).',
    faqTitle: 'n8n ile e-posta doğrulama: sık sorulan sorular',
    faq: [
      {
        q: "Giggal.ai node'u n8n Cloud'da çalışır mı?",
        a: "Evet. Node'u Settings, ardından Community nodes bölümünden kurun ve API anahtarınızı ekleyin. n8n Cloud'da ve kendi sunucunuzdaki kurulumlarda aynı şekilde çalışır.",
      },
      {
        q: "Community node'u kurmak güvenli mi?",
        a: "Giggal.ai ekibi paketi npm'de n8n-nodes-giggal adıyla yayınlar ve kaynak kodunu herkes okuyabilir. Node yalnızca Giggal.ai API'si ile iletişim kurar ve bunun için sizin kurduğunuz credential bilgisini kullanır.",
      },
      {
        q: 'n8n catch-all e-posta adreslerini doğrulayabilir mi?',
        a: "Evet, Giggal.ai node'u ile. Tek adres kontrolleri catch-all alan adlarını otomatik olarak ele alır. Toplu işler de Enable Catch-All Rescue açıkken aynısını yapar. Riskli etiketi yerine bir puanla birlikte geçerli ya da geçersiz sonucunu alırsınız.",
      },
      {
        q: "n8n'de doğrulamanın maliyeti nedir?",
        a: "Giggal.ai'ın diğer tüm bölümlerinde olduğu gibi e-posta adresi başına bir kredi. Catch-all kontrolleri de aynı şekilde 1 kredi kullanır. Yeni hesaplar, kredi kartı gerekmeden 1.000 ücretsiz krediyle başlar.",
      },
      {
        q: "Node'un çıktısı nedir?",
        a: 'Her e-posta adresi için bir durum, risk düzeyi ve teslim edilebilirlik puanı döner. Ayrıca ücretsiz, rol tabanlı ve geçici adresler için işaretler, e-posta sunucusu ayrıntıları ve catch-all sonucu da döner. Çıktı, filtreleyip eşleyebileceğiniz standart n8n JSON verisidir.',
      },
    ],
    howToName: "Giggal.ai community node'u ile n8n'de e-posta adresi doğrulama",
    howToDescription:
      "n8n-nodes-giggal paketini kurun, API anahtarınızı ekleyin ve n8n iş akışlarında tek adresleri veya listelerin tamamını doğrulayın.",
    cta: {
      title: 'n8n iş akışlarınıza e-posta doğrulama ekleyin',
      text: "n8n-nodes-giggal paketini kurun, API anahtarınızı yapıştırın ve geçersiz e-posta adreslerinin iş akışlarınızdan geçmesini durdurun. Kredi kartı gerekmeden 1.000 ücretsiz kredi alırsınız.",
      primary: 'Ücretsiz başlayın',
      secondary: 'Tüm entegrasyonları görün',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot e-posta doğrulama ve geçerlilik kontrolü | Giggal.ai',
      description:
        "Giggal.ai ile HubSpot e-posta doğrulama. Kişileri ve listeleri kontrol edin, catch-all adreslerde de sonuç alın ve HubSpot'ta sonuca göre filtreleyin.",
      ogTitle: 'HubSpot e-posta doğrulama ve geçerlilik kontrolü',
      ogDescription:
        "Giggal.ai'ı HubSpot'a bağlayın, kişilerinizi ve listelerinizi doğrulayın ve CRM sisteminizde sonuca göre filtreleyin.",
    },
    crumb: 'HubSpot',
    h1Lead: 'HubSpot e-posta doğrulama',
    h1Accent: 've geçerlilik kontrolü',
    intro:
      "HubSpot CRM hesabınızdaki mevcut kişileri doğrulayın. Bir kez bağlanın ve bir liste seçin. Her kişinin kaydına bir sonuç yazılır. Catch-all adresler riskli değil, teslim edilebilir ya da teslim edilemez sonucu alır. Hiçbir şeyi dışa aktarmanız veya yeniden içe aktarmanız gerekmez.",
    openDashboard: 'Paneli açın',
    capsTitle: 'HubSpot entegrasyonu ne yapar',
    capsIntro: "Dört adım, hepsi HubSpot ve Giggal.ai içinde.",
    caps: [
      {
        name: 'Kişileri veya bir listeyi içe aktarın',
        detail: 'All contacts seçeneğini ya da herhangi bir HubSpot listesini seçin. Önce e-posta adresi sayısını görürsünüz. Böylece başlamadan önce kaç kredi kullanılacağını bilirsiniz.',
      },
      {
        name: 'Her adresi doğrulayın',
        detail: 'Her posta kutusunun var olup olmadığı kontrol edilir. Catch-all alan adları riskli değil, net bir sonuç alır. Adres başına 1 kredi.',
      },
      {
        name: 'Sonuçları geri yazın',
        detail: 'Her kişiye beş Giggal özelliği yazılır. Böylece sonuç kayıtta kalır.',
      },
      {
        name: 'Filtreleyin ve liste oluşturun',
        detail: 'Giggal email status özelliğini HubSpot filtrelerinde ve aktif listelerde kullanın. Bir sonraki gönderimden önce hatalı adresleri çıkarın.',
      },
    ],
    stepsTitle: 'HubSpot nasıl bağlanır ve ilk liste nasıl doğrulanır',
    stepsIntro:
      "Dört adım vardır ve yaklaşık iki dakika sürer. Bir Giggal.ai hesabına ve HubSpot'ta uygulama kurma ile kişi özelliklerini düzenleme iznine ihtiyacınız var.",
    steps: [
      {
        title: "Giggal.ai'da Integration sekmesini açın",
        text: "Giggal.ai'a giriş yapın, Email Validation bölümüne gidin ve Integration sekmesini açın. HubSpot kartını bulun ve Connect düğmesine tıklayın. Henüz hesabınız yoksa kayıt bir dakika sürer ve 1.000 ücretsiz kredi içerir.",
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'Giggal.ai Integration sekmesindeki HubSpot kartı ve Connect düğmesi',
      },
      {
        title: "HubSpot'ta izinleri onaylayın",
        text: "HubSpot, Giggal.ai'ın erişebileceği her şeyi gösteren kendi onay ekranını açar: kişi özelliklerini görüntüleme, kişileri değiştirme, kişi özelliği ayarlarını değiştirme, kişi listelerini görüntüleme ve uygulamayı kuran hesabı okuma. Listeyi inceleyin ve Connect app düğmesine tıklayın. Giggal.ai'a geri dönersiniz ve HubSpot kartında artık Verify yazar.",
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Giggal Email Verifier uygulaması için HubSpot izin onay ekranı',
      },
      {
        title: 'Bir kişi listesini içe aktarın',
        text: "Import from HubSpot penceresini açmak için HubSpot kartındaki Verify düğmesine tıklayın. All contacts seçeneğini ya da portalınızdaki herhangi bir listeyi seçin. Her satır içindeki e-posta adresi sayısını gösterir. Böylece başlamadan önce maliyeti bilirsiniz. Import düğmesine tıklayın.",
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Kişi listelerini ve e-posta adresi sayılarını gösteren Import from HubSpot penceresi',
      },
      {
        title: 'Listeyi doğrulayın ve sonuçları eşitleyin',
        text: "Giggal.ai her adresi kontrol eder ve sonucu, kontrol bittikçe her HubSpot kişisine yazar. Görev kartında sonuçların dağılımı ve bir Synced to HubSpot sayacı görünür. Yazma işlemini istediğiniz zaman yeniden çalıştırmak için Sync to HubSpot düğmesine tıklayın.",
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: "Giggal.ai'da tamamlanan HubSpot doğrulama görevi ve HubSpot'a eşitlenen sonuçlar",
      },
    ],
    calloutTitle: 'HubSpot ile neden catch-all e-posta doğrulama kullanmalısınız',
    calloutText:
      "Bir B2B listesinin yaklaşık %30'u catch-all alan adlarındadır. Birçok doğrulama aracı bu kişiler için riskli sonucu verir ve bu sonuçla bir işlem yapamazsınız. Giggal.ai bir [mail adresi doğrulama](/tr/mail-adresi-dogrulama) aracıdır. Catch-all alan adlarında ek kontroller çalıştırır ve Proofpoint ile Mimecast gibi [güvenli e-posta ağ geçitlerinin arkasındaki adresleri doğrular](/tr/seg-dogrulama). Bu kişilerin çoğu teslim edilebilir ya da teslim edilemez sonucuyla döner. [Catch-all doğrulamanın nasıl çalıştığını görün](/tr/catch-all-dogrulama).",
    propsTitle: 'Giggal.ai her kişiye hangi HubSpot özelliklerini yazar',
    propsIntro:
      'Beş özellik, ilk doğrulamayı çalıştırdığınızda oluşturulur. Bu özellikler Giggal Email Verifier adlı bir özellik grubunda yer alır. Mevcut HubSpot özellikleriniz değiştirilmez.',
    propsHead: ['Özellik', 'Tür', 'Ne gösterir'],
    props: [
      ['Giggal email is valid', 'Onay kutusu', 'Posta kutusunun var olduğu doğrulandığında evet.'],
      ['Giggal email status', 'Açılır liste', 'Deliverable, Undeliverable, Risky veya Unknown.'],
      ['Giggal deliverability score', 'Sayı', '0 ila 100 arası güven puanı.'],
      ['Giggal email detail', 'Metin', 'Sonucun kısa nedeni.'],
      ['Giggal verified at', 'Tarih', 'Adresin en son kontrol edildiği tarih.'],
    ],
    scopesTitle: 'HubSpot izinleri ve veriler',
    scopesIntro: "Giggal.ai, HubSpot'tan dört izin (scope) ister. Her birinin tek bir kullanım amacı vardır.",
    scopes: [
      ['crm.objects.contacts.read', 'Doğrulamak için seçtiğiniz kişilerin e-posta adresini okur.'],
      ['crm.objects.contacts.write', 'Doğrulama sonucunu bu kişilere geri yazar.'],
      ['crm.schemas.contacts.write', 'İlk kullanımda beş Giggal özelliğini oluşturur.'],
      ['crm.lists.read', 'Doğrulanacak listeyi seçebilmeniz için kişi listelerinizi gösterir.'],
    ],
    scopesNote:
      'Giggal.ai yalnızca seçtiğiniz kişilerin e-posta adresini okur. Kişi oluşturmaz veya silmez. Yukarıdaki beş özellik dışında hiçbir özelliği değiştirmez. Kontrol ettiği adreslere hiçbir zaman e-posta göndermez.',
    faqTitle: 'HubSpot e-posta doğrulama: sık sorulan sorular',
    faq: [
      {
        q: 'Giggal.ai kişilerime e-posta gönderir mi?',
        a: 'Hayır. Doğrulama alıcının e-posta sunucusuyla iletişim kurar ve herhangi bir mesaj gönderilmeden önce durur. Kişilerinizin ne gelen kutusuna ne de spam klasörüne bir şey ulaşır.',
      },
      {
        q: 'HubSpot hesabımda neyi değiştirir?',
        a: 'İlk kullanımda, beş özel kişi özelliği içeren Giggal Email Verifier adlı bir özellik grubu oluşturur. Sonrasında sonuçları yalnızca bu özelliklere yazar. Mevcut HubSpot özellikleri değiştirilmez ve hiçbir kişi oluşturulmaz veya silinmez.',
      },
      {
        q: 'Catch-all alan adlarını doğrulayabilir mi?',
        a: "Evet. Giggal.ai'ı HubSpot ile kullanmanın asıl nedeni budur. Birçok doğrulama aracı catch-all alan adlarında riskli veya bilinmiyor sonucu verir. Giggal.ai daha ayrıntılı kontrol eder ve bunların çoğu için teslim edilebilir ya da teslim edilemez sonucunu verir.",
      },
      {
        q: 'E-posta geçerlilik kontrolü ile e-posta doğrulama aynı şey mi?',
        a: 'Pratikte evet. İki terim de bir adresin e-posta alıp alamayacağını kontrol etmeyi anlatır. Giggal.ai adresin biçimini, alan adının e-posta sunucularını ve posta kutusunu kontrol eder, sonra HubSpot kişisine tek bir sonuç yazar.',
      },
      {
        q: 'Maliyeti nedir?',
        a: 'Adres başına bir kredi ve catch-all kontrolleri dahildir. Yeni hesaplar 1.000 ücretsiz krediyle başlar ve adres başına fiyat, miktar arttıkça düşer.',
      },
      {
        q: "Sonuçları HubSpot'ta nasıl kullanırım?",
        a: 'Kişileri Giggal email status özelliğine göre filtreleyin veya bu özelliğe göre aktif bir liste oluşturun. Sık kullanılan bir kurulum şöyledir: gönderim kitlesi olarak Deliverable kişilerden oluşan aktif bir liste ve Undeliverable kişilerden oluşan bir gönderim engelleme listesi.',
      },
      {
        q: 'Bağlantıyı nasıl kaldırırım?',
        a: "Giggal.ai'da Integration sekmesini açın, HubSpot kartındaki ayarlar simgesine tıklayın ve Disconnect seçeneğini seçin. Uygulamayı HubSpot'ta Settings, Integrations, Connected Apps bölümünden de kaldırabilirsiniz. Daha önce yazılan sonuçlar kişilerinizde kalır.",
      },
    ],
    howToName: 'Giggal.ai ile HubSpot kişilerini doğrulama',
    howToDescription:
      "Giggal.ai'ı HubSpot'a bağlayın, bir kişi listesini doğrulayın ve sonucu her kişideki beş özellikten okuyun.",
    cta: {
      title: 'HubSpot kişilerinizi temizleyin',
      text: 'Bir kez bağlanın. CRM sisteminizdeki her kişi, filtreleyebileceğiniz bir doğrulama sonucu alır. Kredi kartı gerekmeden 1.000 ücretsiz krediyle başlarsınız.',
      primary: 'Ücretsiz başlayın',
      secondary: 'Tüm entegrasyonları görün',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'E-posta doğrulama MCP sunucusu: Claude, ChatGPT | Giggal.ai',
      description:
        "Giggal.ai'ı MCP üzerinden Claude, ChatGPT, Cursor ve VS Code'a bağlayın ve e-posta adreslerini sohbetin içinde doğrulayın. Catch-all adresler de sonuç alır.",
      ogTitle: 'Claude ve ChatGPT için e-posta doğrulama MCP sunucusu',
      ogDescription:
        'Giggal.ai uzak bir MCP sunucusu çalıştırır. Böylece Claude, ChatGPT, Cursor ve VS Code e-posta adreslerini doğrulayabilir. Catch-all kontrolleri dahildir.',
    },
    crumb: 'MCP',
    h1Lead: 'E-posta doğrulama MCP sunucusu:',
    h1Accent: 'Claude ve ChatGPT için',
    intro:
      "Giggal.ai uzak bir MCP sunucusu çalıştırır. Bu sunucuyu Claude, ChatGPT, Cursor veya VS Code'a bağlayın. Yapay zekâ asistanınız bir [mail adresi doğrulama](/tr/mail-adresi-dogrulama) aracı gibi çalışır. Ondan bir adresi veya bir listeyi kontrol etmesini isteyin, size sohbetin içinde yanıt verir.",
    urlLabel: 'MCP URL',
    directoryLabel: "Giggal.ai'ı Claude'a ekleyin",
    points: [
      'Claude ve ChatGPT, OAuth ile oturum açar',
      'Kod editörleri API anahtarınızı kullanır',
      'Catch-all kontrolleri dahildir',
    ],
    setupTitle: 'MCP sunucusunu yapay zekâ aracınızda kurun',
    setupSubtitle:
      'Adımları görmek için aracınızı seçin. Claude ve ChatGPT bir oturum açma işlemiyle bağlanır. Kod editörleri bir yapılandırma dosyası okur.',
    toolsTitle: 'Yapay zekâ asistanı neler yapabilir',
    toolsIntro:
      'Sunucu, asistanınıza üç araç (tool) verir. Siz günlük dille sorarsınız, asistan doğru aracı seçer.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Adresleri doğrulayın',
        body: 'Tek bir e-posta adresini veya bir listeyi kontrol edin. Catch-all alan adlarındaki adresler dahil her adres geçerli ya da geçersiz sonucu alır.',
      },
      {
        tool: 'get_verification_details',
        title: 'Sonuçların tamamını alın',
        body: 'Önceki bir kontrolün ayrıntılarını alın: her adres için durum, neden kodları ve teslim edilebilirlik puanı.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Kredilerinizi kontrol edin',
        body: 'Büyük bir kontrole başlamadan önce kaç krediniz kaldığını sorun.',
      },
    ],
    whyTitle: 'Catch-all sonucu sohbette neden önemlidir',
    why: [
      "Bir B2B listesinin yaklaşık %30'u catch-all alan adlarındadır. Bu alan adları, posta kutusu var olsun ya da olmasın her adrese gelen e-postayı kabul eder. Birçok doğrulama aracı bu adresleri riskli olarak etiketler. Bu, aracın adresi doğrulayamadığı anlamına gelir.",
      "Sohbette bu etiket işe yaramaz. Asistan kendisine verileni tekrarlar, bu yüzden listenizin üçte biri belirsiz sonuçla döner. Giggal.ai bu adresleri daha ayrıntılı kontrol eder ve geçerli ya da geçersiz sonucunu verir. Proofpoint, Mimecast ve Barracuda dahil adı bilinen 15 güvenli e-posta ağ geçidinin (SEG) arkasındaki posta kutuları için de aynısını yapar.",
      "Örnek istemler için [Claude ve ChatGPT içinde e-posta doğrulama](/tr/blog/claude-ve-chatgpt-icinde-e-posta-dogrulama) yazısını okuyun. MCP sunucusu, [e-posta doğrulama API'si](/tr/email-dogrulama-api) ile aynı altyapıyı kullanır.",
    ],
    faqTitle: 'E-posta doğrulama MCP sunucusu: sık sorulan sorular',
    faq: [
      {
        q: 'Claude e-posta adreslerini doğrulayabilir mi?',
        a: `Evet, MCP üzerinden bir e-posta doğrulama aracı bağladığınızda. Giggal.ai sunucusunu ${MCP_URL} adresiyle Claude'da custom connector olarak ya da Claude Code'da claude mcp add komutuyla ekleyin. Ardından örneğin şunu sorun: "bu on bir adresi doğrula ve hangilerinin geri döneceğini söyle". Claude, verify_emails aracını çağırır ve sonucu sohbette gösterir.`,
      },
      {
        q: 'ChatGPT e-posta adreslerini doğrulayabilir mi?',
        a: "Evet, custom connector kullanımına izin veren ChatGPT paketlerinde. Giggal.ai'ı MCP sunucusu URL'siyle özel bir plugin olarak ekleyin ve OAuth ile oturum açın. Uzak MCP sunucularını destekleyen her istemci aynı sunucuyu kullanabilir. Cursor, VS Code, Windsurf, Cline ve Zed bunlardan bazılarıdır.",
      },
      {
        q: 'Yapay zekâ asistanı neler yapabilir?',
        a: 'Üç şey. verify_emails tek bir adresi veya bir listeyi kontrol eder. get_verification_details her adres için durum ve neden kodları dahil sonucun tamamını döndürür. get_credit_balance kaç krediniz kaldığını gösterir.',
      },
      {
        q: 'Catch-all adresler nasıl ele alınır?',
        a: "Giggal.ai'ın diğer bölümlerinde olduğu gibi. Birçok doğrulama aracı catch-all adresleri riskli olarak etiketler. Giggal.ai bu adresler için geçerli ya da geçersiz sonucu verir. Proofpoint, Mimecast ve Barracuda gibi adı bilinen 15 güvenli e-posta ağ geçidinin arkasındaki posta kutuları için de aynısını yapar.",
      },
      {
        q: 'API anahtarına ihtiyacım var mı?',
        a: 'Claude ve ChatGPT için yok. İkisi de OAuth ile bağlanır, bu yüzden Giggal.ai hesabınızla oturum açarsınız. Claude Code, Cursor ve VS Code gibi kod editörleri bir API anahtarı kullanır. Anahtarı Giggal.ai uygulamasındaki Developer API sekmesinde bulursunuz.',
      },
      {
        q: 'MCP üzerinden doğrulama daha pahalı mı?',
        a: 'Hayır. Panel ve REST API ile aynı kredileri kullanır: adres başına 1 kredi, catch-all dahil. Yeni hesaplar, kredi kartı gerekmeden 1.000 ücretsiz kredi alır ve kredilerin süresi hiç dolmaz.',
      },
      {
        q: 'Büyük bir listeyi bu yolla temizlemeli miyim?',
        a: "Hayır. MCP, doğrulama bir görevin adımlarından biri olduğunda en iyi sonucu verir. Örneğin satış e-postası yazmadan önce bir düzine kişiyi kontrol etmek gibi. On binlerce adres için uygulamadaki toplu yüklemeyi veya REST API'yi kullanın.",
      },
    ],
    howToName: "Giggal.ai e-posta doğrulamayı MCP üzerinden Claude veya ChatGPT'ye bağlama",
    howToDescription:
      'Giggal.ai MCP sunucusu ile Claude, ChatGPT, Cursor veya VS Code içinde catch-all dahil e-posta adreslerini doğrulamak için dört adım.',
    setupSteps: [
      {
        name: 'Bir Giggal.ai hesabı oluşturun',
        text: "Giggal.ai'a kaydolun. Yeni hesaplar, kredi kartı gerekmeden 1.000 ücretsiz doğrulama kredisi alır.",
      },
      {
        name: 'MCP sunucusunu istemcinize ekleyin',
        text: `Sunucu URL'si olarak ${MCP_URL} adresini kullanın. Claude'da Settings, ardından Connectors bölümünden ekleyin. ChatGPT'de özel bir plugin olarak ekleyin. Kod editörleri bir JSON yapılandırma dosyası okur. Bu sayfa her editör için dosyayı gösterir.`,
      },
      {
        name: 'Oturum açın veya API anahtarınızı ekleyin',
        text: "Claude ve ChatGPT, Giggal.ai'a oturum açmanızı ve Allow düğmesine tıklamanızı ister. Kod editörleri, uygulamadaki Developer API sekmesinden alınan API anahtarına ihtiyaç duyar.",
      },
      {
        name: 'Asistandan bir adresi doğrulamasını isteyin',
        text: 'Günlük dille sorun, örneğin: "hello@example.com adresini doğrula ve gerçek bir posta kutusu olup olmadığını söyle". Asistan verify_emails aracını çağırır ve sonucu gösterir.',
      },
    ],
    ctaTitle: "Giggal.ai'ı yapay zekâ asistanınıza bağlayın",
    ctaText:
      "Kredi kartı gerekmeden 1.000 ücretsiz doğrulama kredisiyle başlayın. MCP URL'sini Claude, ChatGPT veya kod editörünüze ekleyin.",
    ctaButton: 'Ücretsiz başlayın',
  },
}
