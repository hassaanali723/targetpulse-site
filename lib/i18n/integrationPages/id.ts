import type { IntegrationPagesContent } from './types'

// Indonesian copy for the integration pages, translated from the English pages
// with the Dutch copy as the structural model. Keyword plan
// (SEO-Plan/i18n-batch2-id-keyword-plan.md): the checker keyword "cek email
// valid" links to /id/cek-email-valid; "verifikasi email" carries the rest.
// Product UI labels (Zapier, n8n, HubSpot, Giggal.ai dashboard), property
// names, status values, scopes, tool names and code stay in English, as the
// apps show them. Register "Anda". Numbers 1.000 and 8.000.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Otomatisasi pemasaran',
  'Email Marketing': 'Email marketing',
  CRM: 'CRM',
  Ecommerce: 'E-commerce',
  'Sales & Outreach': 'Penjualan dan outreach',
  'Forms & Surveys': 'Formulir dan survei',
  'Website & Popups': 'Situs web dan pop-up',
  'Spreadsheets & Data': 'Spreadsheet dan data',
  Support: 'Layanan pelanggan',
  Payments: 'Pembayaran',
  Automation: 'Otomatisasi',
  Spreadsheets: 'Spreadsheet',
  Forms: 'Formulir',
  'AI & Agents': 'AI dan agen',
  Developer: 'Developer',
}

export const ID: IntegrationPagesContent = {
  common: {
    locale: 'id',
    hubPath: '/id/integrasi',
    hubCrumb: 'Integrasi',
    checkerPath: '/id/cek-email-valid',
    signupLabel: 'Mulai dengan 1.000 kredit gratis',
    getStarted: 'Mulai gratis',
    allIntegrations: 'Lihat semua integrasi',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Integrasi verifikasi email untuk alat Anda | Giggal.ai',
      description:
        'Integrasi verifikasi email dengan HubSpot, Zapier, n8n, Mailchimp, Claude, dan ChatGPT. Cek alamat email di alat Anda sendiri, termasuk alamat catch-all.',
      ogTitle: 'Integrasi verifikasi email: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Hubungkan verifikasi email Giggal.ai dengan HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude, dan ChatGPT.',
    },
    h1Lead: 'Integrasi verifikasi email di',
    h1Accent: 'alat yang sudah Anda pakai',
    intro:
      'Dengan Giggal.ai, Anda bisa [cek email valid](/id/cek-email-valid) dari CRM, platform email, spreadsheet, dan asisten AI Anda. Setiap pemeriksaan menunjukkan apakah kotak masuknya ada. Alamat catch-all juga mendapat hasil: valid atau tidak valid.',
    waysTitle: 'Empat cara menambahkan verifikasi email ke alat Anda',
    waysIntro:
      'Pilih cara yang sesuai dengan cara kerja Anda. Setiap cara memakai kredit yang sama dan memberi hasil yang sama.',
    ways: [
      {
        label: 'Langsung',
        title: 'Integrasi langsung',
        text: 'Hubungkan [HubSpot](/id/integrasi/hubspot), Mailchimp, SendGrid, dan platform lain dari dashboard Giggal.ai. Impor daftar, cek daftar itu, lalu kirim kembali daftar yang sudah bersih.',
      },
      {
        label: 'Otomatisasi',
        title: 'Zapier dan n8n',
        text: 'Cek setiap kontak baru, setiap jawaban formulir, atau setiap baris baru di spreadsheet begitu data itu masuk. Pakai aplikasi Giggal.ai di [Zapier](/id/integrasi/zapier) atau node resmi untuk [n8n](/id/integrasi/n8n).',
      },
      {
        label: 'MCP',
        title: 'Asisten AI',
        text: 'Tambahkan [server MCP Giggal.ai](/id/mcp) ke Claude, ChatGPT, Cursor, atau VS Code. Setelah itu minta asisten mengecek alamat langsung di chat.',
      },
      {
        label: 'API',
        title: 'REST API',
        text: 'Kirim pemeriksaan satuan atau massal dari kode Anda sendiri. Hasilnya kembali dalam JSON. [Dokumentasi API](/id/dokumentasi-api) menjelaskan setiap endpoint.',
      },
    ],
    grid: {
      searchPlaceholder: 'Cari integrasi…',
      searchAria: 'Cari integrasi',
      connectionAria: 'Filter berdasarkan jenis koneksi',
      connection: { all: 'Semua', direct: 'Langsung', zapier: 'Lewat Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filter berdasarkan kategori',
      allCategories: 'Semua kategori',
      categories: CATEGORIES,
      prevPage: 'Halaman sebelumnya',
      nextPage: 'Halaman berikutnya',
      pagination: 'Navigasi halaman',
      showing: 'Integrasi {from} sampai {to} dari {total}',
      noMatchTitle: 'Tidak ada integrasi yang cocok dengan pencarian Anda.',
      noMatchText:
        'Setiap alat yang bisa mengirim permintaan HTTP bisa memakai [REST API](/id/dokumentasi-api).',
      descriptions: {
        zapier:
          'Cek setiap alamat email baru secara real-time di lebih dari 8.000 aplikasi, termasuk catch-all. Tanpa kode.',
        n8n:
          'Cek satu alamat atau seluruh daftar di workflow n8n Anda dengan community node resmi dari Giggal.ai.',
        claude:
          'Tambahkan server MCP Giggal.ai ke Claude dan cek alamat email langsung di chat.',
        chatgpt:
          'Tambahkan server MCP Giggal.ai ke ChatGPT dan cek alamat email langsung di chat.',
        clay:
          'Cek alamat email prospek Anda di tabel Clay lewat API Giggal.ai, termasuk catch-all.',
        'rest-api':
          'REST API untuk pemeriksaan satuan, massal, dan catch-all. Bangun integrasi yang Anda butuhkan.',
        mailchimp:
          'Impor audience Mailchimp, cek audience itu, dan simpan hanya pelanggan yang dapat dikirimi email.',
        mailgun:
          'Hubungkan Mailgun dan cek daftar pengiriman Anda sebelum setiap kampanye.',
        mailjet:
          'Impor daftar kontak dari Mailjet ke Giggal.ai dan cek daftar itu, termasuk catch-all.',
        sendgrid:
          'Cek kontak SendGrid Anda secara massal untuk melindungi reputasi pengirim Anda.',
        activecampaign:
          'Impor kontak ActiveCampaign Anda, cek kontak itu, dan hapus alamat buruk sebelum mengirim.',
        'campaign-monitor':
          'Hubungkan Campaign Monitor dan cek setiap daftar pelanggan di Giggal.ai.',
        getresponse:
          'Cek daftar GetResponse Anda untuk mengurangi bounce, termasuk pada domain catch-all.',
        aweber:
          'Impor pelanggan AWeber Anda, cek mereka, dan kirim kembali daftar yang bersih.',
        mailerlite:
          'Hubungkan MailerLite dan cek daftar pelanggan Anda sebelum kampanye berikutnya.',
        drip:
          'Cek kontak Drip Anda secara massal, agar email otomatis Anda sampai ke kotak masuk yang nyata.',
        'elastic-email':
          'Impor daftar Elastic Email Anda dan cek daftar itu, termasuk alamat catch-all dan alamat di balik gateway keamanan.',
        'reply-io':
          'Cek alamat email prospek Anda sebelum memulai sequence Reply.io, agar Anda mengirim ke kotak masuk yang nyata.',
        'zoho-crm':
          'Impor kontak dan lead dari Zoho CRM, cek data itu, dan jaga data CRM Anda tetap bersih.',
        'google-sheets':
          'Cek setiap baris baru begitu baris itu ditambahkan dan tulis hasilnya di spreadsheet Anda.',
        hubspot:
          'Cek kontak dan daftar di HubSpot CRM Anda, lalu filter berdasarkan hasilnya di HubSpot.',
        salesforce:
          'Cek alamat email setiap lead Salesforce baru begitu lead itu dibuat.',
        typeform:
          'Cek alamat email di jawaban Typeform sebelum masuk ke alat Anda yang lain.',
        slack:
          'Kirim hasil verifikasi dan notifikasi tentang daftar ke channel Slack.',
      },
      zapierAppDescription:
        'Cek alamat email yang masuk ke {name} secara real-time lewat Zapier.',
      logoAlt: 'Integrasi verifikasi email {name} dengan Giggal.ai',
    },
    appListTitle: 'Semua aplikasi Zapier yang didukung',
    appListIntro: '{count} aplikasi terhubung dengan Giggal.ai lewat Zapier. Setiap aplikasi punya panduan sendiri (dalam bahasa Inggris).',
    apiTitle: 'Alat Anda tidak ada di daftar?',
    apiText:
      'Setiap alat yang bisa mengirim permintaan HTTP bisa mengecek alamat email dengan Giggal.ai. Pakai [API verifikasi email](/email-verification-api) (dalam bahasa Inggris) untuk pemeriksaan satuan dan massal, atau hubungkan lewat Zapier.',
    apiCta: 'Dokumentasi API',
    apiHref: '/id/dokumentasi-api',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier: cek alamat email di 8.000+ aplikasi | Giggal.ai',
      description:
        'Cek setiap alamat email di Zapier dengan Giggal.ai, secara real-time. Alamat catch-all juga mendapat hasil: valid atau tidak valid. Tanpa kode.',
      ogTitle: 'Zapier: cek alamat email di lebih dari 8.000 aplikasi',
      ogDescription:
        'Cek setiap alamat email baru di Zapier dengan Giggal.ai. Bisa dipakai dengan HubSpot, Google Sheets, Salesforce, Mailchimp, dan lebih dari 8.000 aplikasi lain.',
    },
    crumb: 'Zapier',
    h1Lead: 'Verifikasi email dengan Zapier di',
    h1Accent: 'lebih dari 8.000 aplikasi',
    intro:
      'Tambahkan Giggal.ai ke Zap mana pun untuk [cek email valid](/id/cek-email-valid) begitu alamat itu masuk. Ini berfungsi dengan formulir, CRM, spreadsheet, dan platform email. Alamat catch-all juga mendapat hasil: valid atau tidak valid. Anda tidak perlu menulis kode.',
    viewOnZapier: 'Lihat di Zapier',
    tabsTitle: 'Workflow Zapier dan panduan',
    tabsIntro:
      'Mulai dengan workflow yang sering dipakai, atau ikuti panduan untuk membuat Zap Anda sendiri dalam sekitar lima menit.',
    tabs: {
      cardSubtitle: 'Hubungkan Giggal.ai dengan lebih dari 8.000 aplikasi',
      tryFree: 'Coba gratis',
      actionsTitle: '4 aksi Zapier',
      actions: [
        { name: 'Verify Email', description: 'Mengecek alamat email secara real-time, termasuk catch-all.' },
        { name: 'Start Bulk Verification', description: 'Mengirim daftar alamat. Mengembalikan ID tugas yang bisa dipakai langkah berikutnya.' },
        { name: 'Get Bulk Verification Results', description: 'Mengambil hasil tugas massal setelah tugas selesai.' },
        { name: 'Get Credit Balance', description: 'Menampilkan sisa kredit Giggal.ai Anda.' },
      ],
      workflowsTab: 'Workflow',
      guideTab: 'Panduan',
      workflows: [
        {
          title: 'Cek kontak HubSpot baru',
          description:
            'Saat kontak dibuat di HubSpot, Giggal.ai mengecek alamat emailnya dan menulis hasilnya di properti kontak.',
        },
        {
          title: 'Cek baris baru di Google Sheets',
          description:
            'Setiap baris baru dicek begitu ditambahkan. Status, tingkat risiko, dan hasil catch-all ditulis di baris itu.',
        },
        {
          title: 'Cek lead Salesforce baru',
          description:
            'Setiap lead baru dicek sebelum tim sales mulai menghubunginya. Tidak ada yang mengirim email ke kotak masuk yang tidak ada.',
        },
        {
          title: 'Cek pendaftaran di Mailchimp',
          description:
            'Cek setiap pelanggan baru saat mendaftar dan tambahkan hanya alamat yang dapat dikirim ke audience Mailchimp Anda.',
        },
        {
          title: 'Cek jawaban Typeform',
          description:
            'Temukan alamat yang salah ketik dan email sekali pakai di jawaban formulir, sebelum masuk ke alat Anda yang lain.',
        },
        {
          title: 'Kirim hasil ke Slack',
          description:
            'Kirim pesan ke Slack saat pemeriksaan selesai, atau saat lead di domain catch-all dipastikan valid.',
        },
      ],
      workflowCta: 'Atur di Zapier',
      guideTitle: 'Menghubungkan Giggal.ai ke Zapier',
      guideIntro:
        'Pengaturannya butuh sekitar lima menit. Contoh di bawah mengecek setiap baris baru di spreadsheet Google Sheets.',
      steps: [
        {
          title: 'Pilih aplikasi yang memulai Zap',
          text: 'Buat Zap dan pilih aplikasi yang memulainya. Aplikasi apa pun di Zapier bisa dipakai, jumlahnya lebih dari 8.000. Dalam contoh ini, pilih Google Sheets dan event New or Updated Spreadsheet Row. Hubungkan akun Anda lalu klik Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Mengatur trigger di Zapier dengan Google Sheets dan event New or Updated Spreadsheet Row',
        },
        {
          title: 'Tambahkan Giggal.ai sebagai langkah aksi',
          text: 'Di langkah aksi, cari Giggal.ai di daftar aplikasi lalu pilih.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Mencari Giggal.ai di daftar aplikasi Zapier',
        },
        {
          title: 'Pilih event aksi',
          text: 'Giggal.ai punya empat aksi: Verify Email, Start Bulk Verification, Get Bulk Verification Results, dan Get Credit Balance. Untuk contoh ini, pilih Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Empat event aksi Giggal.ai di daftar event Zapier',
        },
        {
          title: 'Hubungkan akun Giggal.ai Anda',
          text: 'Pertama kali, Zapier meminta API key Anda. Di dashboard Giggal.ai, buka tab Developer API lalu klik Create API Key. Tempel key itu di Zapier lalu klik Connect. Akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Menghubungkan akun Giggal.ai ke Zapier dengan API key',
        },
        {
          title: 'Petakan kolom email dan pakai hasilnya',
          text: 'Petakan kolom Email ke kolom yang berisi alamat, lalu jalankan tes. Giggal.ai mengembalikan status, tingkat risiko, skor, dan hasil catch-all. Setelah langkah ini, tambahkan filter atau jalur (Filter, Paths) dari Zapier. Misalnya, tulis alamat yang dapat dikirim di spreadsheet dan pindahkan alamat tidak valid ke tab lain.',
        },
      ],
      help: 'Ada langkah yang tidak berhasil? [Hubungi tim kami](/id/kontak) atau baca [dokumentasi API](/id/dokumentasi-api) untuk struktur respons yang lengkap.',
    },
    why: [
      {
        title: 'Pemeriksa alamat catch-all di Zapier',
        text: 'Banyak alat menandai alamat catch-all sebagai "berisiko" lalu berhenti di situ. Di daftar B2B, jumlahnya bisa sekitar 30% dari alamat. Giggal.ai mengecek alamat itu lebih mendalam dan memberi hasil valid atau tidak valid di Zap Anda.',
      },
      {
        title: 'Pemeriksaan saat data masuk',
        text: 'Lead dicek begitu masuk lewat formulir, CRM, atau spreadsheet. Alamat buruk tidak pernah masuk ke daftar Anda, dan Anda tidak perlu banyak membersihkan nanti.',
      },
      {
        title: 'Hasil yang bisa dipakai di filter Zapier',
        text: 'Setiap pemeriksaan memberi status, tingkat risiko, skor deliverability, dan hasil catch-all. Pakai data itu di filter dan jalur Zapier untuk mengarahkan setiap lead ke tempat yang tepat.',
      },
    ],
    appsTitle: 'Cek alamat email dari semua aplikasi ini',
    appsIntro: 'Setiap aplikasi di bawah punya panduan sendiri untuk verifikasi email lewat Zapier (dalam bahasa Inggris).',
    categories: CATEGORIES,
    faqTitle: 'Pertanyaan umum tentang verifikasi email dengan Zapier',
    faq: [
      {
        q: 'Bagaimana cara kerja integrasi Zapier dari Giggal.ai?',
        a: 'Anda menambahkan langkah Giggal.ai ke Zap. Saat trigger berjalan, misalnya ada kontak CRM baru atau jawaban formulir, Zapier mengirim alamat email ke Giggal.ai. Giggal.ai mengecek apakah kotak masuknya ada dan meneruskan hasilnya ke langkah berikutnya. Anda tidak perlu kode.',
      },
      {
        q: 'Bisakah Zapier mengecek alamat catch-all?',
        a: 'Bisa, dengan Giggal.ai sebagai langkah pemeriksaan. Kebanyakan alat memberi hasil "berisiko" atau "tidak diketahui" untuk domain catch-all. Giggal.ai menjalankan pemeriksaan tambahan pada alamat ini dan memberi hasil valid atau tidak valid, dengan skor.',
      },
      {
        q: 'Aplikasi apa saja yang bisa saya hubungkan?',
        a: 'Semua aplikasi di Zapier, termasuk HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform, dan Slack. Jika sebuah aplikasi ada di Zapier, aplikasi itu bisa mengirim alamat ke Giggal.ai.',
      },
      {
        q: 'Berapa kredit yang dipakai untuk satu pemeriksaan lewat Zapier?',
        a: 'Satu kredit per alamat email, sama seperti di dashboard atau lewat API. Pemeriksaan catch-all memakai kredit yang sama. Akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit.',
      },
      {
        q: 'Sebaiknya saya mengecek secara real-time atau massal?',
        a: 'Kebanyakan tim melakukan keduanya. Pemeriksaan real-time di Zapier menahan alamat buruk saat data masuk. Pemeriksaan massal membersihkan daftar yang sudah Anda punya, di dashboard atau dengan aksi Start Bulk Verification.',
      },
    ],
    howToName: 'Cara cek alamat email di Zapier dengan Giggal.ai',
    howToDescription:
      'Atur verifikasi email, termasuk untuk alamat catch-all, di setiap workflow Zapier.',
    cta: {
      title: 'Cek setiap alamat email baru di Zapier',
      text: 'Buat Zap verifikasi email pertama Anda dalam sekitar lima menit. Anda mendapat 1.000 kredit gratis, tanpa kartu kredit, dan pemeriksaan catch-all sudah termasuk.',
      primary: 'Mulai gratis',
      secondary: 'Lihat semua integrasi',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'Verifikasi email di n8n: node resmi Giggal.ai | Giggal.ai',
      description:
        'Cek alamat email di n8n dengan community node resmi dari Giggal.ai. Satu alamat atau seluruh daftar, termasuk catch-all. Paket npm n8n-nodes-giggal.',
      ogTitle: 'Verifikasi email di n8n: community node resmi',
      ogDescription:
        'Cek satu alamat atau seluruh daftar di workflow n8n Anda dengan community node dari Giggal.ai. Alamat catch-all sudah termasuk.',
    },
    crumb: 'n8n',
    h1Lead: 'Verifikasi email di n8n dengan',
    h1Accent: 'node resmi Giggal.ai',
    intro:
      'Tambahkan Giggal.ai ke workflow n8n Anda untuk [cek email valid](/id/cek-email-valid) secara real-time, atau kirim seluruh daftar sebagai tugas massal. Alamat catch-all juga mendapat hasil: valid atau tidak valid. Anda memasang node ini satu kali dari npm.',
    viewOnNpm: 'Lihat di npm',
    opsTitle: 'Fungsi node n8n ini',
    opsIntro:
      'Node ini punya dua resource dan empat operasi. Pakai Email untuk satu alamat dan Job untuk sebuah daftar.',
    ops: [
      { name: 'Verify', detail: 'Mengecek alamat email secara real-time, termasuk catch-all. 1 kredit per pemeriksaan.' },
      { name: 'Verify Batch', detail: 'Mengirim seluruh daftar dalam satu permintaan. Mengembalikan ID tugas yang bisa dipanggil workflow Anda nanti.' },
      { name: 'Get Status', detail: 'Menampilkan progres tugas massal: jumlah alamat yang sudah diproses, persentase, dan waktu selesai.' },
      { name: 'Get Results', detail: 'Mengambil hasil yang sudah selesai per halaman, dengan filter opsional seperti deliverable atau catch_all.' },
    ],
    installTitle: 'Pasang node dan cek alamat pertama Anda',
    installIntro:
      'Anda butuh instance n8n, di cloud atau di server Anda sendiri, dan akun Giggal.ai gratis. Pengaturannya butuh sekitar lima menit.',
    installSteps: [
      {
        title: 'Buka Community nodes di pengaturan n8n',
        text: 'Di n8n, klik menu akun Anda di kiri bawah lalu buka Settings. Setelah itu pilih Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'Bagian Community nodes di menu pengaturan n8n',
      },
      {
        title: 'Pasang n8n-nodes-giggal',
        text: 'Klik Install a community node. Isi `n8n-nodes-giggal` di npm Package Name, centang kotaknya, lalu klik Install. Node Giggal.ai lalu muncul di daftar node Anda.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Memasang paket n8n-nodes-giggal di jendela Install community nodes',
      },
      {
        title: 'Tambahkan node dan buat credential',
        text: 'Tambahkan node Giggal.ai ke workflow. Di daftar Credential, pilih Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Membuat credential Giggal.ai baru pada node di n8n',
      },
      {
        title: 'Tempel API key Anda',
        text: 'Di dashboard Giggal.ai, buka tab Developer API lalu klik Create API Key. Tempel key itu di kolom API Key lalu simpan. Semua node Giggal.ai di instance Anda sekarang bisa memakainya. Akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Menambahkan API key Giggal.ai ke credential di n8n',
      },
      {
        title: 'Cek alamat pertama Anda',
        text: 'Atur Resource ke Email dan Operation ke Verify. Petakan kolom Email Address ke data Anda dengan expression seperti `{{ $json.email }}` lalu klik Execute step. Output-nya menampilkan status, tingkat risiko, skor deliverability, dan detail catch-all.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Mengecek alamat email di n8n dan melihat output-nya',
      },
    ],
    batchTitle: 'Mengecek seluruh daftar di n8n',
    batchIntro:
      'Untuk lebih dari beberapa alamat, pakai resource Job. Caranya begini: Anda mengirim daftar, mengecek statusnya, lalu mengambil hasilnya.',
    batchSteps: [
      {
        title: 'Kirim daftar dengan Verify Batch',
        text: 'Atur Operation ke Verify Batch dan tentukan di Email Field properti mana yang berisi alamat. Anda bisa memberi nama tugas, agar mudah ditemukan nanti di dashboard. Biarkan Enable Catch-All Rescue tetap aktif, agar alamat catch-all dicek lebih mendalam. Node langsung mengembalikan ID tugas dan pemeriksaan berjalan di latar belakang.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Mengirim daftar alamat email untuk dicek dengan node Giggal.ai di n8n',
      },
      {
        title: 'Pantau progres dengan Get Status',
        text: 'Atur Resource ke Job dan Operation ke Get Status, lalu masukkan ID tugas dari langkah sebelumnya. Pasang node Wait di antara dua pemeriksaan, agar loop tidak terlalu sering memanggil API.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Memantau progres tugas massal dengan operasi Get Status di n8n',
      },
      {
        title: 'Ambil hasil dengan Get Results',
        text: 'Jika statusnya completed, jalankan Get Results dengan ID tugas yang sama. Anda mendapat satu item per alamat email, dengan status, tingkat risiko, dan skor. Pakai kolom Status Filter untuk mengambil hanya baris deliverable, undeliverable, atau catch_all.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Mengambil hasil pemeriksaan massal yang sudah selesai di n8n',
      },
    ],
    calloutTitle: 'Alamat catch-all dan alamat di balik gateway mendapat hasil valid atau tidak valid',
    calloutText:
      'Banyak alat memberi hasil "tidak diketahui" untuk alamat di balik secure email gateway, dan "berisiko" untuk domain catch-all. Giggal.ai [mengecek alamat di balik gateway ini](/seg-email-verification) (dalam bahasa Inggris), seperti Proofpoint dan Mimecast. Giggal.ai juga menjalankan pemeriksaan tambahan pada domain catch-all. [Lihat cara kerja verifikasi catch-all](/id/verifikasi-catch-all).',
    faqTitle: 'Pertanyaan umum tentang verifikasi email di n8n',
    faq: [
      {
        q: 'Apakah node Giggal.ai berfungsi di n8n Cloud?',
        a: 'Ya. Pasang node lewat Settings lalu Community nodes, dan tambahkan API key Anda. Node ini berfungsi dengan cara yang sama di n8n Cloud dan di instance pada server Anda sendiri.',
      },
      {
        q: 'Apakah community node ini aman dipasang?',
        a: 'Tim Giggal.ai memublikasikan paket ini sebagai n8n-nodes-giggal di npm, dan siapa pun bisa membaca kode sumbernya. Node ini hanya berkomunikasi dengan API Giggal.ai, memakai credential yang Anda atur.',
      },
      {
        q: 'Bisakah n8n mengecek alamat catch-all?',
        a: 'Bisa, dengan node Giggal.ai. Pemeriksaan satuan menangani domain catch-all secara otomatis. Tugas massal juga melakukannya jika Enable Catch-All Rescue aktif. Anda mendapat hasil valid atau tidak valid dengan skor, bukan label "berisiko".',
      },
      {
        q: 'Berapa biaya verifikasi email di n8n?',
        a: 'Satu kredit per alamat email, sama seperti di bagian lain Giggal.ai. Pemeriksaan catch-all memakai kredit yang sama. Akun baru mulai dengan 1.000 kredit gratis, tanpa kartu kredit.',
      },
      {
        q: 'Apa yang dikembalikan node ini?',
        a: 'Setiap alamat email mendapat status, tingkat risiko, dan skor deliverability. Node ini juga mengembalikan tanda untuk alamat gratis, alamat berbasis peran, dan email sekali pakai, detail server email, dan hasil catch-all. Output-nya adalah JSON standar n8n yang bisa Anda filter dan petakan.',
      },
    ],
    howToName: 'Cara cek alamat email di n8n dengan community node Giggal.ai',
    howToDescription:
      'Pasang n8n-nodes-giggal, tambahkan API key Anda, lalu cek satu alamat atau seluruh daftar di workflow n8n Anda.',
    cta: {
      title: 'Tambahkan verifikasi email ke workflow n8n Anda',
      text: 'Pasang n8n-nodes-giggal, tempel API key Anda, dan hentikan alamat mati sebelum masuk ke workflow Anda. Anda mendapat 1.000 kredit gratis, tanpa kartu kredit.',
      primary: 'Mulai gratis',
      secondary: 'Lihat semua integrasi',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot: verifikasi dan validasi alamat email | Giggal.ai',
      description:
        'Cek alamat email di HubSpot dengan Giggal.ai. Validasi kontak dan daftar di CRM Anda, dapatkan hasil untuk catch-all, lalu filter berdasarkan hasil itu.',
      ogTitle: 'HubSpot: verifikasi dan validasi alamat email',
      ogDescription:
        'Hubungkan Giggal.ai ke HubSpot, cek kontak dan daftar Anda, lalu filter berdasarkan hasilnya di CRM Anda.',
    },
    crumb: 'HubSpot',
    h1Lead: 'Verifikasi email di HubSpot',
    h1Accent: 'dan validasi kontak Anda',
    intro:
      'Cek kontak yang sudah ada di HubSpot CRM Anda. Hubungkan akun Anda satu kali, pilih daftar, lalu setiap kontak mendapat hasil di record-nya. Alamat catch-all mendapat hasil dapat dikirim atau tidak dapat dikirim, bukan "berisiko". Anda tidak perlu mengekspor lalu mengimpor ulang apa pun.',
    openDashboard: 'Buka dashboard',
    capsTitle: 'Fungsi integrasi HubSpot',
    capsIntro: 'Empat langkah, semuanya di HubSpot dan Giggal.ai.',
    caps: [
      {
        name: 'Impor kontak atau daftar',
        detail: 'Pilih All contacts atau daftar mana pun di HubSpot. Anda melihat jumlah alamat email terlebih dulu, jadi Anda tahu berapa kredit yang dipakai sebelum mulai.',
      },
      {
        name: 'Cek setiap alamat',
        detail: 'Setiap kotak masuk dicek apakah benar-benar ada. Domain catch-all mendapat hasil yang jelas, bukan "berisiko". 1 kredit per alamat.',
      },
      {
        name: 'Tulis hasil di HubSpot',
        detail: 'Lima properti Giggal diisi pada setiap kontak. Hasilnya tetap tersimpan di record.',
      },
      {
        name: 'Filter dan buat daftar',
        detail: 'Pakai Giggal email status di filter dan daftar aktif HubSpot. Hapus alamat buruk sebelum pengiriman berikutnya.',
      },
    ],
    stepsTitle: 'Menghubungkan HubSpot dan mengecek daftar pertama Anda',
    stepsIntro:
      'Ada empat langkah dan butuh sekitar dua menit. Anda butuh akun Giggal.ai dan, di HubSpot, izin untuk memasang aplikasi dan mengubah properti kontak.',
    steps: [
      {
        title: 'Buka tab Integration di Giggal.ai',
        text: 'Masuk ke Giggal.ai, buka Email Validation, lalu buka tab Integration. Cari kartu HubSpot lalu klik Connect. Jika Anda belum punya akun, mendaftar butuh satu menit dan Anda mendapat 1.000 kredit gratis.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'Kartu HubSpot dan tombol Connect di tab Integration Giggal.ai',
      },
      {
        title: 'Setujui akses di HubSpot',
        text: 'HubSpot menampilkan layar sendiri yang berisi semua akses yang didapat Giggal.ai: melihat properti kontak, mengubah kontak, mengubah pengaturan properti kontak, melihat daftar kontak, dan membaca akun yang memasang aplikasi. Periksa daftar itu lalu klik Connect app. Anda kembali ke Giggal.ai, dan kartu HubSpot sekarang menampilkan Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Layar HubSpot untuk menyetujui akses aplikasi Giggal Email Verifier',
      },
      {
        title: 'Impor daftar kontak',
        text: 'Klik Verify pada kartu HubSpot untuk membuka jendela Import from HubSpot. Pilih All contacts atau daftar mana pun di portal Anda. Setiap baris menampilkan jumlah alamat email di dalamnya, jadi Anda tahu biayanya sebelum mulai. Klik Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Jendela Import from HubSpot dengan daftar kontak dan jumlah alamat email',
      },
      {
        title: 'Cek daftar dan sinkronkan hasilnya',
        text: 'Giggal.ai mengecek setiap alamat dan menulis hasilnya di setiap kontak HubSpot begitu selesai. Kartu tugas menampilkan sebaran hasil dan penghitung Synced to HubSpot. Klik Sync to HubSpot untuk menjalankan ulang penulisan kapan saja.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Pemeriksaan HubSpot yang sudah selesai di Giggal.ai, dengan hasil yang sudah disinkronkan ke HubSpot',
      },
    ],
    calloutTitle: 'Kenapa memakai pemeriksa catch-all dengan HubSpot',
    calloutText:
      'Sekitar 30% dari daftar B2B berada di domain catch-all. Banyak alat memberi hasil "berisiko" untuk kontak ini, dan hasil itu tidak bisa Anda pakai. Dengan Giggal.ai, Anda bisa [cek email valid](/id/cek-email-valid), juga di domain catch-all, berkat pemeriksaan tambahan. Giggal.ai [juga mengecek alamat di balik secure email gateway](/seg-email-verification) (dalam bahasa Inggris), seperti Proofpoint dan Mimecast. Sebagian besar kontak ini kembali dengan hasil dapat dikirim atau tidak dapat dikirim. [Lihat cara kerja verifikasi catch-all](/id/verifikasi-catch-all).',
    propsTitle: 'Properti HubSpot yang diisi Giggal.ai pada setiap kontak',
    propsIntro:
      'Kelima properti dibuat saat pemeriksaan pertama Anda. Properti itu ada di grup properti bernama Giggal Email Verifier. Properti HubSpot Anda yang sudah ada tidak diubah.',
    propsHead: ['Properti', 'Tipe', 'Yang ditampilkan'],
    props: [
      ['Giggal email is valid', 'Kotak centang', 'Ya jika kotak masuknya sudah dipastikan ada.'],
      ['Giggal email status', 'Daftar pilihan', 'Deliverable, Undeliverable, Risky, atau Unknown.'],
      ['Giggal deliverability score', 'Angka', 'Tingkat keyakinan dari 0 sampai 100.'],
      ['Giggal email detail', 'Teks', 'Alasan singkat untuk hasilnya.'],
      ['Giggal verified at', 'Tanggal', 'Tanggal pemeriksaan terakhir alamat itu.'],
    ],
    scopesTitle: 'Akses di HubSpot dan data',
    scopesIntro: 'Giggal.ai meminta empat jenis akses (scope) di HubSpot. Setiap scope punya satu tujuan.',
    scopes: [
      ['crm.objects.contacts.read', 'Membaca alamat email dari kontak yang ingin Anda cek.'],
      ['crm.objects.contacts.write', 'Menulis hasil pemeriksaan di kontak tersebut.'],
      ['crm.schemas.contacts.write', 'Membuat lima properti Giggal saat pertama kali dipakai.'],
      ['crm.lists.read', 'Menampilkan daftar kontak Anda, agar Anda bisa memilih satu untuk dicek.'],
    ],
    scopesNote:
      'Giggal.ai hanya membaca alamat email dari kontak yang Anda pilih. Giggal.ai tidak membuat atau menghapus kontak. Giggal.ai tidak mengubah properti di luar lima properti di atas. Giggal.ai tidak pernah mengirim email ke alamat yang dicek.',
    faqTitle: 'Pertanyaan umum tentang verifikasi email di HubSpot',
    faq: [
      {
        q: 'Apakah Giggal.ai mengirim email ke kontak saya?',
        a: 'Tidak. Pemeriksaan berkomunikasi dengan server email penerima dan berhenti sebelum pesan apa pun dikirim. Kontak Anda tidak menerima apa pun, baik di inbox maupun di folder spam.',
      },
      {
        q: 'Apa yang diubah integrasi ini di akun HubSpot saya?',
        a: 'Saat pertama kali dipakai, integrasi ini membuat grup properti bernama Giggal Email Verifier, dengan lima properti kontak khusus. Setelah itu integrasi hanya menulis hasil di properti tersebut. Properti HubSpot yang sudah ada tidak diubah, dan tidak ada kontak yang dibuat atau dihapus.',
      },
      {
        q: 'Bisakah integrasi ini mengecek domain catch-all?',
        a: 'Bisa. Itulah alasan utama memakai Giggal.ai dengan HubSpot. Banyak alat memberi hasil "berisiko" atau "tidak diketahui" pada domain catch-all. Giggal.ai menjalankan pemeriksaan tambahan dan memberi hasil dapat dikirim atau tidak dapat dikirim untuk sebagian besar alamat ini.',
      },
      {
        q: 'Apakah validasi email sama dengan verifikasi email?',
        a: 'Dalam praktiknya, ya. Kedua istilah ini mengacu pada pemeriksaan yang menunjukkan apakah sebuah alamat bisa menerima email. Giggal.ai mengecek format, server email milik domain, dan kotak masuknya, lalu menulis satu hasil di kontak HubSpot.',
      },
      {
        q: 'Berapa biayanya?',
        a: 'Satu kredit per alamat, dan pemeriksaan catch-all sudah termasuk. Akun baru mulai dengan 1.000 kredit gratis, dan harga per alamat turun saat volume naik.',
      },
      {
        q: 'Bagaimana cara memakai hasilnya di HubSpot?',
        a: 'Filter kontak Anda atau buat daftar aktif berdasarkan Giggal email status. Pengaturan yang sering dipakai adalah daftar aktif berisi kontak Deliverable sebagai daftar pengiriman, dan daftar pengecualian berisi kontak Undeliverable.',
      },
      {
        q: 'Bagaimana cara memutus integrasi?',
        a: 'Buka tab Integration di Giggal.ai, klik ikon pengaturan pada kartu HubSpot, lalu pilih Disconnect. Anda juga bisa menghapus aplikasi di HubSpot, di Settings, Integrations, Connected Apps. Hasil yang sudah ditulis tetap tersimpan di kontak Anda.',
      },
    ],
    howToName: 'Cara cek kontak HubSpot dengan Giggal.ai',
    howToDescription:
      'Hubungkan Giggal.ai ke HubSpot, cek daftar kontak, lalu baca hasilnya di lima properti pada setiap kontak.',
    cta: {
      title: 'Bersihkan kontak HubSpot Anda',
      text: 'Hubungkan akun Anda satu kali, lalu setiap kontak di CRM Anda mendapat hasil verifikasi yang bisa Anda filter. Anda mulai dengan 1.000 kredit gratis, tanpa kartu kredit.',
      primary: 'Mulai gratis',
      secondary: 'Lihat semua integrasi',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Server MCP verifikasi email: Claude, ChatGPT | Giggal.ai',
      description:
        'Hubungkan Giggal.ai lewat MCP ke Claude, ChatGPT, Cursor, dan VS Code, lalu cek alamat email di chat. Alamat catch-all mendapat hasil valid atau tidak valid.',
      ogTitle: 'Server MCP untuk verifikasi email di Claude dan ChatGPT',
      ogDescription:
        'Giggal.ai punya server MCP remote. Claude, ChatGPT, Cursor, dan VS Code bisa memakainya untuk mengecek alamat email. Pemeriksaan catch-all sudah termasuk.',
    },
    crumb: 'MCP',
    h1Lead: 'Server MCP untuk verifikasi email di',
    h1Accent: 'Claude dan ChatGPT',
    intro:
      'Giggal.ai punya server MCP remote. Hubungkan server itu ke Claude, ChatGPT, Cursor, atau VS Code, lalu asisten AI Anda bisa [cek email valid](/id/cek-email-valid) untuk Anda. Minta asisten mengecek satu alamat atau sebuah daftar, dan asisten menjawab di chat.',
    urlLabel: 'URL MCP',
    directoryLabel: 'Tambahkan Giggal.ai ke Claude',
    points: [
      'Claude dan ChatGPT terhubung dengan OAuth',
      'Editor kode memakai API key Anda',
      'Pemeriksaan catch-all sudah termasuk',
    ],
    setupTitle: 'Atur server MCP di alat AI Anda',
    setupSubtitle:
      'Pilih alat Anda untuk melihat langkahnya. Claude dan ChatGPT terhubung dengan login. Editor kode membaca file konfigurasi.',
    toolsTitle: 'Yang bisa dilakukan asisten AI',
    toolsIntro:
      'Server ini memberi asisten Anda tiga tool. Anda bertanya dengan bahasa sehari-hari, dan asisten memilih tool yang tepat.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Cek alamat',
        body: 'Cek satu alamat email atau sebuah daftar. Setiap alamat mendapat hasil valid atau tidak valid, termasuk di domain catch-all.',
      },
      {
        tool: 'get_verification_details',
        title: 'Lihat hasil lengkap',
        body: 'Lihat detail pemeriksaan sebelumnya: status, kode alasan, dan skor deliverability per alamat.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Lihat kredit Anda',
        body: 'Tanyakan sisa kredit Anda sebelum memulai pemeriksaan besar.',
      },
    ],
    whyTitle: 'Kenapa hasil catch-all penting di chat',
    why: [
      'Sekitar 30% dari daftar B2B berada di domain catch-all. Domain ini menerima email untuk alamat apa pun, entah kotak masuknya ada atau tidak. Banyak alat menandai alamat ini sebagai "berisiko". Artinya alat itu tidak bisa memastikannya.',
      'Di chat, label itu tidak membantu. Asisten mengulang apa yang ia terima, jadi sepertiga daftar Anda kembali dengan hasil yang tidak pasti. Giggal.ai mengecek alamat ini lebih mendalam dan memberi hasil valid atau tidak valid. Giggal.ai melakukan hal yang sama untuk kotak masuk di balik 15 secure email gateway (gateway keamanan email) yang kami kenali, termasuk Proofpoint, Mimecast, dan Barracuda.',
      'Untuk contoh pertanyaan, baca [verifikasi email di Claude dan ChatGPT](/id/blog/verifikasi-email-di-claude-dan-chatgpt). Server MCP memakai mesin yang sama dengan [API verifikasi email](/email-verification-api) (dalam bahasa Inggris).',
    ],
    faqTitle: 'Pertanyaan umum tentang server MCP untuk verifikasi email',
    faq: [
      {
        q: 'Bisakah Claude mengecek alamat email?',
        a: `Bisa, setelah tool verifikasi email terhubung lewat MCP. Tambahkan server Giggal.ai di ${MCP_URL} sebagai custom connector di Claude, atau dengan perintah claude mcp add di Claude Code. Setelah itu tanyakan misalnya: "cek sebelas alamat ini dan sebutkan mana yang akan bounce". Claude memanggil tool verify_emails dan menampilkan hasilnya di chat.`,
      },
      {
        q: 'Bisakah ChatGPT mengecek alamat email?',
        a: 'Bisa, dengan paket ChatGPT yang mengizinkan custom connector. Tambahkan Giggal.ai sebagai plugin khusus dengan URL server MCP lalu masuk dengan OAuth. Setiap klien yang mendukung server MCP remote bisa memakai server yang sama, termasuk Cursor, VS Code, Windsurf, Cline, dan Zed.',
      },
      {
        q: 'Apa yang bisa dilakukan asisten AI?',
        a: 'Tiga hal. verify_emails mengecek satu alamat atau sebuah daftar. get_verification_details memberi hasil lengkap per alamat, dengan status dan kode alasan. get_credit_balance menampilkan sisa kredit Anda.',
      },
      {
        q: 'Bagaimana alamat catch-all ditangani?',
        a: 'Sama seperti di bagian lain Giggal.ai. Banyak alat menandai alamat catch-all sebagai "berisiko". Giggal.ai memberi hasil valid atau tidak valid untuk alamat ini. Giggal.ai melakukan hal yang sama untuk kotak masuk di balik 15 secure email gateway yang kami kenali, seperti Proofpoint, Mimecast, dan Barracuda.',
      },
      {
        q: 'Apakah saya butuh API key?',
        a: 'Tidak untuk Claude dan ChatGPT. Keduanya terhubung dengan OAuth, jadi Anda masuk dengan akun Giggal.ai Anda. Editor kode seperti Claude Code, Cursor, dan VS Code memakai API key. Key itu ada di tab Developer API di aplikasi Giggal.ai.',
      },
      {
        q: 'Apakah pemeriksaan lewat MCP lebih mahal?',
        a: 'Tidak. Pemeriksaan lewat MCP memakai kredit yang sama dengan dashboard dan REST API: 1 kredit per alamat, termasuk catch-all. Akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit, dan kreditnya tidak pernah kedaluwarsa.',
      },
      {
        q: 'Apakah saya sebaiknya membersihkan daftar besar dengan cara ini?',
        a: 'Tidak. MCP paling berguna jika pemeriksaan adalah satu langkah dalam sebuah tugas, misalnya mengecek belasan kontak sebelum menulis pesan outreach. Untuk puluhan ribu alamat, pakai unggahan massal di aplikasi atau REST API.',
      },
    ],
    howToName: 'Cara menghubungkan verifikasi email Giggal.ai lewat MCP ke Claude atau ChatGPT',
    howToDescription:
      'Empat langkah untuk mengecek alamat email, termasuk catch-all, di Claude, ChatGPT, Cursor, atau VS Code dengan server MCP Giggal.ai.',
    setupSteps: [
      {
        name: 'Buat akun Giggal.ai',
        text: 'Daftar di Giggal.ai. Akun baru mendapat 1.000 kredit verifikasi gratis, tanpa kartu kredit.',
      },
      {
        name: 'Tambahkan server MCP ke klien Anda',
        text: `Pakai URL server ${MCP_URL}. Di Claude, tambahkan di Settings lalu Connectors. Di ChatGPT, tambahkan sebagai plugin khusus. Editor kode membaca file konfigurasi JSON. Halaman ini menampilkannya untuk setiap editor.`,
      },
      {
        name: 'Masuk atau tambahkan API key Anda',
        text: 'Claude dan ChatGPT meminta Anda masuk ke Giggal.ai lalu mengklik Allow. Editor kode butuh API key dari tab Developer API di aplikasi.',
      },
      {
        name: 'Minta asisten mengecek sebuah alamat',
        text: 'Ajukan pertanyaan dengan bahasa sehari-hari, misalnya: "cek hello@example.com dan beri tahu apakah ini kotak masuk yang nyata". Asisten memanggil verify_emails dan menampilkan hasilnya.',
      },
    ],
    ctaTitle: 'Hubungkan Giggal.ai ke asisten AI Anda',
    ctaText:
      'Mulai dengan 1.000 kredit verifikasi gratis, tanpa kartu kredit. Tambahkan URL MCP ke Claude, ChatGPT, atau editor kode Anda.',
    ctaButton: 'Mulai gratis',
  },
}
