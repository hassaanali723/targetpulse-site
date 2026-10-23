import type { ApiDocsStrings } from './types'

// Indonesian API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Register "Anda", as in lib/i18n/id.ts. Numbers 50.000.

export const API_DOCS_ID: ApiDocsStrings = {
  breadcrumbName: 'Dokumentasi API',
  schema: {
    headline: 'Dokumentasi API Giggal.ai',
    description:
      'REST API untuk mengecek alamat email, menjalankan pemeriksaan massal, dan mengecek secara mendalam alamat catch-all serta alamat di balik SEG. Endpoint JSON, autentikasi dengan API key, biaya hanya per pemeriksaan yang berhasil.',
  },
  contactPath: '/id/kontak',

  overviewBanner:
    'Mencari gambaran umum? Baca halaman tentang [API verifikasi email](/email-verification-api) atau [API validasi email untuk formulir pendaftaran](/email-validation-api) (dalam bahasa Inggris).',
  hero: {
    h1: 'Dokumentasi API verifikasi email',
    lead: 'Cek alamat email, jalankan pemeriksaan massal, dan cek secara mendalam alamat catch-all serta alamat di balik SEG. Semua endpoint memakai JSON dan autentikasi dengan API key. Anda hanya membayar pemeriksaan yang berhasil.',
  },

  sidebar: {
    searchPlaceholder: 'Cari…',
    collapse: 'Ciutkan',
    expand: 'Luaskan',
  },

  intro: {
    h2: 'Pengantar',
    body: 'Dengan API Giggal.ai, Anda bisa mengecek alamat email, menjalankan pemeriksaan massal hingga 50.000 alamat email per tugas, dan mengecek secara mendalam alamat catch-all serta alamat di balik SEG. API ini adalah REST API sederhana dengan JSON. Setiap pemeriksaan yang berhasil memakai kredit dari akun Anda.',
    baseUrlLabel: 'URL dasar',
    apiKeyLabel: 'Membuat API key',
    apiKeyBody:
      'Buat API key (kunci API) di dashboard Giggal.ai Anda: buka tab Developer API di sidebar lalu klik Create API Key. Setiap key terhubung ke akun Anda dan mencatat pemakaiannya sendiri. Anda bisa mencabut key kapan saja.',
    apiKeyLink: 'Buka tab Developer API',
    envelopeLabel: 'Struktur respons',
    envelopeBody: 'Setiap respons memiliki struktur JSON yang sama:',
    quickStartLabel: 'Mulai cepat: mengecek satu alamat dengan cURL',
  },

  auth: {
    h2: 'Autentikasi',
    body: 'Kirim API key Anda di setiap permintaan, dalam salah satu dari dua header berikut. Keduanya berfungsi.',
    bearerLabel: 'Opsi 1: Bearer token',
    xApiKeyLabel: 'Opsi 2: header X-API-Key',
    note: 'Key yang tidak ada, tidak valid, atau sudah dicabut menghasilkan error HTTP 401. Jangan pernah menaruh API key di kode sisi klien. Kirim panggilan API lewat backend Anda sendiri.',
    idempotencyLabel: 'Idempotensi (massal dan catch-all)',
    idempotencyBody:
      'Pada `POST /v1/verify-batch` dan `POST /v1/catchall`, kirim header `Idempotency-Key`. Percobaan ulang dengan key yang sama mengembalikan respons aslinya. Tidak ada tugas ganda dan kredit tidak dipotong dua kali.',
  },

  groups: {
    'single-verification': 'Pemeriksaan satuan',
    'bulk-verification': 'Pemeriksaan massal',
    'catchall-verification': 'Pemeriksaan catch-all',
    account: 'Akun',
  },
  groupCount: {
    one: '{n} endpoint dalam grup ini.',
    other: '{n} endpoint dalam grup ini.',
  },

  endpoint: {
    authorizations: 'Otorisasi',
    pathParams: 'Parameter path dan query',
    requestBody: 'Body permintaan',
    required: 'Wajib',
    responseSamples: 'Contoh respons',
  },

  endpoints: {
    'verify-single': {
      title: 'Mengecek satu alamat email',
      description:
        'Mengecek satu alamat email secara sinkron. Memakai 1 kredit. Jika domainnya catch-all, pemeriksaan mendalam dilakukan dalam permintaan yang sama dan responsnya berisi catch_all_score dan catch_all_verdict.',
      bodyParams: {
        email: 'Alamat email yang ingin Anda cek.',
      },
    },
    'submit-batch': {
      title: 'Memulai pemeriksaan massal',
      description:
        'Kirim hingga 50.000 alamat email per tugas. Prosesnya asinkron: panggil GET /v1/jobs/:jobId untuk memantau progresnya. Kirim header Idempotency-Key agar pembuatan tugas bisa dicoba ulang tanpa biaya ganda.',
      bodyParams: {
        emails:
          'Daftar alamat email yang ingin dicek. Maksimal 50.000 per tugas. Alamat ganda dan alamat dengan format salah dibuang oleh server.',
        name: 'Nama tugas yang mudah dibaca, opsional. Ditampilkan di dashboard Anda.',
      },
    },
    'get-job': {
      title: 'Melihat status tugas massal',
      description:
        'Panggil endpoint ini untuk memantau progres. Statusnya berubah dari processing ke completed (atau failed). Interval yang disarankan: setiap 10 sampai 15 detik. Daftar kecil (kurang dari 50 alamat email) biasanya selesai dalam 30 detik.',
      params: {
        jobId: 'ID tugas yang dikembalikan oleh POST /v1/verify-batch.',
      },
    },
    'get-job-results': {
      title: 'Mengambil hasil tugas massal',
      description:
        'Jika statusnya "completed", ambil hasil untuk setiap alamat email. Hasilnya dibagi per halaman: kirim parameter query page dan limit. Hasil disimpan selama 48 jam (lihat resultsExpiresAt pada tugas).',
      params: {
        jobId: 'ID tugas.',
        page: 'Nomor halaman, default 1.',
        limit: 'Hasil per halaman, default 25, maksimal 500.',
      },
    },
    'start-catchall': {
      title: 'Memulai pemeriksaan catch-all',
      description:
        'Menjalankan pemeriksaan catch-all mendalam untuk tugas massal yang sudah selesai. Hanya alamat yang ditandai catch-all dalam tugas asli yang dicek ulang. Memakai 1 kredit per alamat (lihat creditsRequired dalam respons).',
      bodyParams: {
        jobId:
          'ID tugas massal yang sudah selesai. Hanya alamat catch-all dari tugas itu yang dicek secara mendalam.',
        name: 'Nama tugas yang mudah dibaca, opsional.',
      },
    },
    'get-catchall': {
      title: 'Melihat status tugas catch-all',
      description:
        'Panggil endpoint ini untuk memantau progres dan jumlah terbaru di verdictCounts. Tugas catch-all biasanya berlangsung beberapa detik sampai beberapa menit, tergantung jumlah alamat.',
      params: {
        taskId: 'ID tugas yang dikembalikan oleh POST /v1/catchall.',
      },
    },
    'catchall-results': {
      title: 'Mengambil hasil tugas catch-all',
      description:
        'Mengambil hasil untuk setiap alamat email, dibagi per halaman, beserta rincian skornya (sinyal dari domain dan usia domain).',
      params: {
        taskId: 'ID tugas.',
        page: 'Nomor halaman, default 1.',
        limit: 'Hasil per halaman, default 25, maksimal 500.',
        verdict: 'Filter berdasarkan hasil: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Mengunduh hasil catch-all sebagai CSV',
      description:
        'Mengunduh semua hasil dari tugas catch-all yang sudah selesai sebagai file CSV dengan kolom Email, Score, dan Verdict. Content-Type-nya adalah text/csv.',
      params: {
        taskId: 'ID tugas.',
        verdict: 'Filter berdasarkan hasil: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Melihat saldo kredit Anda',
      description:
        'Menampilkan saldo akun Anda: kredit yang tersedia, kredit yang dicadangkan (ditahan untuk tugas yang sedang berjalan), dan total sejak akun Anda dibuka. Pemeriksaan dengan hasil "unknown" dikembalikan otomatis dan juga tercatat di sini.',
    },
  },

  errors: {
    h2: 'Error dan batas',
    statusHeader: 'Status',
    meaningHeader: 'Arti',
    statusRows: [
      { status: '200 OK', meaning: 'Permintaan berhasil (pemeriksaan sinkron, atau pengambilan status atau hasil).' },
      { status: '202 Accepted', meaning: 'Tugas asinkron sudah dibuat dan masuk antrean.' },
      { status: '400 Bad Request', meaning: 'Parameter tidak ada atau tidak valid (format email salah, daftar emails kosong, jobId tidak ada).' },
      { status: '401 Unauthorized', meaning: 'API key tidak ada, tidak valid, atau sudah dicabut.' },
      { status: '402 Payment Required', meaning: 'Kredit tidak cukup untuk tindakan ini.' },
      { status: '404 Not Found', meaning: 'ID tugas ini tidak ada di akun Anda.' },
      { status: '409 Conflict', meaning: 'Tugas tidak berada pada status yang diperlukan (misalnya hasil diminta sebelum tugas selesai).' },
      { status: '410 Gone', meaning: 'Hasil tugas sudah melewati masa simpan 48 jam.' },
      { status: '429 Too Many Requests', meaning: 'Batas permintaan terlampaui. Tunggu sebentar lalu coba lagi.' },
      { status: '500 / 502 / 503', meaning: 'Server atau layanan verifikasi di belakangnya sedang tidak tersedia untuk sementara.' },
    ],
    rateLimitsH3: 'Batas permintaan',
    rateLimitsBody:
      'Setiap respons berisi header `RateLimit-Limit`, `RateLimit-Remaining`, dan `RateLimit-Reset` (penulisan sesuai RFC), sehingga Anda bisa mengatur jarak antarpermintaan. `RateLimit-Reset` menunjukkan jumlah detik sampai jendela waktu saat ini dimulai ulang.',
    categoryHeader: 'Kategori',
    limitHeader: 'Batas',
    rateLimitRows: [
      { category: 'Semua endpoint (default)', limit: '300 permintaan / 15 menit' },
      { category: 'Membuat tugas (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 permintaan / 15 menit' },
      { category: 'Memantau tugas (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 permintaan / 15 menit' },
      { category: 'Jumlah maksimal alamat email per tugas massal', limit: '50.000' },
      { category: 'Masa simpan hasil', limit: '48 jam' },
    ],
    tierNote:
      'Ada tiga batas, karena Anda lebih sering memantau tugas daripada membuatnya. Anda bisa memanggil API setiap beberapa detik selama tugas berjalan. Batas `600 / 15 min` (sekitar 40 per menit) memberi Anda cukup ruang tanpa membebani server.',
    higherLimitsTitle: 'Butuh batas yang lebih tinggi?',
    higherLimitsBody: 'Kami rutin menaikkan batas untuk mitra integrasi yang sudah terverifikasi.',
    higherLimitsCta: 'Hubungi kami',
    h429: 'Struktur respons 429',
    body429: 'Jika Anda mencapai batas, API mengembalikan error HTTP 429 dengan body berikut:',
    backoff:
      'Sebelum mencoba lagi, tunggu sejumlah detik yang tertulis di header `RateLimit-Reset` (waktu sampai jendela dimulai ulang).',
  },

  cta: {
    h3: 'Siap menghubungkan API?',
    body: 'Buat API key Anda dalam beberapa detik. Kredit uji coba gratis sudah termasuk, sehingga Anda bisa menguji semuanya dari awal sampai akhir sebelum membayar.',
    primary: 'Buat API key Anda',
    secondary: 'Bicara dengan tim kami',
  },
}
