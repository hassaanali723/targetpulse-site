import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Indonesian copy for /id/program-afiliasi. Source: app/(en)/affiliates/page.tsx.
// Register "Anda", "email" without a hyphen, numbers 1.000 and 10.000,
// money US$50 (symbol first, currency stays USD).

export const AFFILIATES_ID: AffiliatesContent = {
  meta: {
    title: 'Program Afiliasi: Komisi Berulang 20% | Giggal.ai',
    description:
      'Gabung program afiliasi Giggal.ai: komisi berulang 20% dari setiap pembayaran pelanggan hasil referral, atribusi 3 bulan, pencairan bulanan, tanpa batas komisi.',
    ogTitle: 'Program Afiliasi: Komisi Berulang 20% untuk Verifikasi Email',
    ogDescription:
      'Dapatkan komisi berulang 20% untuk setiap pelanggan yang Anda bawa ke Giggal.ai. Tanpa batas waktu dan tanpa batas penghasilan.',
  },
  crumb: 'Program afiliasi',
  h1Lead: 'Dapatkan komisi berulang 20%',
  h1Accent: 'setiap bulan, tanpa batas waktu',
  intro: {
    before: 'Bagikan',
    after:
      'kepada audiens Anda dan dapatkan komisi 20% dari setiap pembayaran pelanggan hasil referral Anda, selama mereka masih menjadi pelanggan. Tanpa batas komisi dan tanpa masa kedaluwarsa.',
  },
  joinCta: 'Gabung Program Afiliasi',
  howCta: 'Lihat cara kerjanya',
  stats: [
    { value: '20%', label: 'Komisi berulang' },
    { value: '3 bulan', label: 'Masa atribusi' },
    { value: 'Bulanan', label: 'Pencairan' },
    { value: 'US$50', label: 'Minimal pencairan' },
  ],
  why: {
    eyebrow: 'Mengapa bergabung',
    h2: 'Salah satu program afiliasi paling menguntungkan di antara alat email',
    sub: 'Pendapatan berulang yang nyata, bukan bonus sekali bayar.',
    cards: [
      {
        title: 'Komisi berulang 20%',
        body: 'Dapatkan komisi dari setiap pembayaran pelanggan hasil referral Anda, bulan demi bulan, tahun demi tahun.',
      },
      {
        title: 'Tanpa batas penghasilan',
        body: 'Bawa 10 pelanggan atau 10.000. Tidak ada batas atas untuk penghasilan Anda.',
      },
      {
        title: 'Atribusi 3 bulan',
        body: 'Referral dihitung untuk Anda jika orang tersebut mendaftar dalam 3 bulan setelah mengklik link Anda.',
      },
      {
        title: 'Pencairan bulanan',
        body: 'Terima pembayaran setiap bulan melalui PayPal atau Wise setelah saldo Anda mencapai minimal US$50.',
      },
    ],
  },
  how: {
    eyebrow: 'Cara kerja',
    h2: 'Dari pendaftaran ke pencairan pertama dalam hitungan hari, bukan bulan',
    steps: [
      {
        title: 'Daftar dalam 30 detik',
        body: 'Daftar di program ini dan langsung dapatkan link referral unik Anda. Tanpa wawancara, tanpa masa tunggu.',
      },
      {
        title: 'Bagikan link Anda',
        body: 'Promosikan Giggal.ai di blog, newsletter, media sosial, YouTube, atau langsung kepada klien yang membutuhkan daftar email yang lebih bersih.',
      },
      {
        title: 'Terima pembayaran bulanan',
        body: 'Dapatkan 20% dari setiap pembayaran pelanggan hasil referral Anda. Semuanya dilacak otomatis dan dicairkan setiap bulan.',
      },
    ],
  },
  earn: {
    eyebrow: 'Potensi Anda',
    h2: 'Ini yang bisa Anda hasilkan',
    sub: 'Berdasarkan pelanggan paket 100K yang paling banyak dipilih (US$76/bulan). Paket lain juga memberi komisi 20%.',
    colCustomers: 'Pelanggan referral',
    colPlan: 'Paket',
    colEarnings: 'Penghasilan bulanan Anda',
    perMonth: '/bulan',
    note: 'Angka ini hanya ilustrasi. Penghasilan sebenarnya bergantung pada paket yang dipilih referral Anda.',
  },
  who: {
    eyebrow: 'Untuk siapa',
    h2: 'Untuk orang yang peduli pada deliverability (keterkiriman email)',
    sub: 'Jika audiens Anda mengirim email, mereka juga audiens untuk Giggal.ai.',
    cards: [
      {
        title: 'Email marketer',
        body: 'Rekomendasikan alat yang sudah Anda percaya untuk membersihkan daftar email sebelum kampanye.',
      },
      {
        title: 'Agensi',
        body: 'Dapatkan pendapatan berulang dari setiap klien yang Anda bawa ke Giggal.ai.',
      },
      {
        title: 'Pembuat kursus',
        body: 'Masukkan Giggal.ai ke materi kursus cold email atau lead generation Anda.',
      },
      {
        title: 'Komunitas SaaS',
        body: 'Bagikan kepada audiens Anda yang terdiri dari pemasar, pendiri bisnis, dan profesional growth.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Pertanyaan yang sering diajukan',
    items: [
      {
        q: 'Kapan dan bagaimana saya dibayar?',
        a: 'Komisi dicairkan setiap bulan melalui PayPal atau Wise (sesuai pilihan Anda), setelah saldo yang belum dibayar mencapai US$50. Tidak ada masa penahanan komisi. Begitu referral Anda membayar, komisinya menjadi milik Anda.',
      },
      {
        q: 'Berapa lama komisi berlaku?',
        a: 'Selama referral Anda terus membayar. Jika mereka menjadi pelanggan selama 3 tahun, Anda mendapat 20% dari setiap pembayaran selama 3 tahun. Ini pendapatan yang benar-benar berulang.',
      },
      {
        q: 'Bagaimana jika referral saya berhenti berlangganan?',
        a: 'Komisi untuk pelanggan tersebut berhenti saat mereka membatalkan langganan. Jika nanti mereka berlangganan lagi dengan akun yang sama, komisi Anda berlanjut.',
      },
      {
        q: 'Berapa lama masa atribusi?',
        a: 'Pelacakan berlaku 3 bulan sejak seseorang mengklik link Anda. Jika orang itu mendaftar dalam masa tersebut, referral-nya dihitung untuk Anda.',
      },
      {
        q: 'Bisakah saya berpromosi di YouTube, blog, dan melalui iklan berbayar?',
        a: 'Bisa di YouTube, blog, newsletter, media sosial, dan Reddit. Iklan berbayar dengan kata kunci merek kami (misalnya "Giggal.ai") tidak diizinkan. Selain itu, cara promosi lain boleh digunakan.',
      },
      {
        q: 'Apakah saya harus menjadi pelanggan untuk bergabung?',
        a: 'Tidak, tetapi kami sangat menyarankan Anda mencoba produknya dulu (Anda mendapat 1.000 kredit gratis). Dengan begitu, Anda merekomendasikannya dari pengalaman sendiri.',
      },
      {
        q: 'Apakah ada batas minimum pencairan?',
        a: 'Ada, yaitu US$50. Komisi yang belum dibayar terbawa ke bulan berikutnya sampai mencapai batas itu, lalu dicairkan secara otomatis.',
      },
    ],
    more: 'Masih punya pertanyaan?',
    talk: 'Hubungi kami',
  },
  final: {
    h2: 'Siap mengubah referral menjadi penghasilan berulang?',
    text: 'Daftar dalam 30 detik dan mulai dapatkan komisi 20% dari setiap pembayaran pelanggan hasil referral Anda.',
    checks: ['Gratis bergabung', 'Tanpa proses persetujuan', 'Komisi seumur hidup'],
  },
}
