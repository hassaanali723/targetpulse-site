import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Indonesian copy for /id/verifikasi-email-massal, translated from the English
// /bulk-email-verifier page (app/(en)/bulk-email-verifier/page.tsx), with the
// Dutch copy as the structural model. Keyword plan
// (SEO-Plan/i18n-batch2-id-keyword-plan.md): no native bulk phrase has volume,
// so the title carries the loan term "bulk email checker" and the H1 the native
// "verifikasi email massal". Supporting words: cek daftar email, cek alamat
// email, gratis. Numbers 50.000 and 98,5%. Register "Anda".

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Bulk Email Checker: verifikasi email massal sekaligus',
    description:
      'Verifikasi email massal untuk file CSV dan Excel hingga 50.000 alamat. Setiap baris mendapat hasil valid atau tidak valid, juga catch-all. 1.000 kredit gratis.',
    breadcrumb: 'Verifikasi email massal',
    appName: 'Giggal.ai Verifikasi Email Massal',
  },
  hero: {
    h1Lead: 'Verifikasi email massal:',
    h1Rest: 'cek seluruh daftar Anda sekaligus',
    intro:
      'Unggah file CSV atau Excel, lalu bulk email checker ini mengecek setiap alamat. Setiap baris mendapat hasil, valid atau tidak valid, termasuk untuk alamat catch-all.',
    ctaPrimary: 'Cek daftar secara gratis',
    ctaPricing: 'Lihat harga',
    checks: ['1.000 kredit gratis', 'Tanpa kartu kredit', 'Kredit tidak pernah kedaluwarsa'],
  },
  facts: [
    { v: '50.000', l: 'alamat per file' },
    { v: '98,5%', l: 'akurasi pada daftar bisnis' },
    { v: '1 kredit', l: 'per alamat, termasuk catch-all' },
    { v: '<3%', l: 'bounce rate setelah verifikasi, biasanya' },
  ],
  definition: {
    title: 'Apa itu verifikasi email massal?',
    text: 'Verifikasi email massal mengecek seluruh daftar alamat email sekaligus. Anda melihat alamat mana yang bisa menerima email. Alat verifikasi email massal bertanya ke server email setiap domain apakah setiap kotak masuk ada, tanpa mengirim email. Anda membuang alamat yang akan bounce sebelum mengirim. Ini melindungi reputasi pengirim dan deliverability (tingkat keterkiriman email) Anda. Dalam bahasa Inggris, alat seperti ini disebut bulk email verifier.',
  },
  steps: {
    title: 'Cara kerja verifikasi email massal',
    intro:
      'Tiga langkah, dan tidak ada email yang dikirim ke kontak di daftar Anda. Sebagian besar daftar selesai dalam beberapa menit.',
    items: [
      {
        title: 'Unggah daftar Anda',
        text: 'Tambahkan file CSV atau Excel dengan hingga 50.000 alamat email. Jika daftar Anda lebih besar, bagi ke beberapa file.',
      },
      {
        title: 'Setiap alamat dicek',
        text: 'Alat ini bertanya ke server email setiap domain apakah kotak masuknya ada. Alat ini juga menandai email sekali pakai, alamat berbasis peran, alamat ganda, dan alamat catch-all.',
      },
      {
        title: 'Unduh hasilnya',
        text: 'Anda mendapat file CSV dengan hasil di setiap baris. Simpan alamat yang valid, hapus yang tidak valid, dan cek ulang yang tidak diketahui nanti.',
      },
    ],
  },
  results: {
    title: 'Hasil bulk email checker untuk setiap alamat',
    intro: 'Setiap baris berakhir dengan salah satu dari tiga hasil.',
    valid: {
      title: 'Valid',
      text: 'Kotak masuknya ada, jadi email ke alamat ini seharusnya sampai. Simpan alamat ini.',
    },
    invalid: {
      title: 'Tidak valid',
      text: 'Formatnya salah, domainnya tidak punya server email, atau kotak masuknya tidak ada. Email ke alamat ini akan bounce. Hapus alamat ini.',
    },
    unknown: {
      title: 'Tidak diketahui',
      text: 'Server email tidak memberi jawaban yang jelas, sering karena greylisting. Cek ulang alamat ini nanti. Kredit untuk hasil tidak diketahui dikembalikan.',
    },
    flagsIntro: 'Setiap baris juga menampilkan tanda berikut, sehingga Anda bisa memilih alamat mana yang disimpan:',
    flags: [
      { lead: 'Catch-all', rest: ', dinilai valid atau tidak valid, bukan "berisiko"' },
      { lead: 'Email sekali pakai', rest: ', kotak masuk sementara yang akan segera tidak berfungsi' },
      { lead: 'Alamat berbasis peran', rest: ', seperti info@ atau sales@, kotak masuk bersama dan bukan milik satu orang' },
      { lead: 'Alamat ganda', rest: ', alamat yang sama muncul lebih dari satu kali di file Anda' },
    ],
  },
  catchAll: {
    title: 'Alamat catch-all mendapat hasil valid atau tidak valid',
    paragraphs: [
      <>
        Sebagian server email bisnis menerima alamat apa pun, asli atau karangan. Ini disebut{' '}
        <InlineLink locale="id" href="/catch-all-verification">domain catch-all</InlineLink>. Pemeriksaan biasa
        mendapat jawaban ya untuk setiap alamat di domain seperti itu. Jadi pemeriksaan itu tidak bisa membedakan kotak
        masuk asli dari salah ketik.
      </>,
      <>
        Banyak alat validasi email massal berhenti di situ dan menandai setiap alamat catch-all sebagai &quot;berisiko&quot;.
        Di daftar B2B, jumlahnya bisa menjadi bagian besar dari kontak Anda, dan banyak di antaranya orang sungguhan.
        Anda jadi harus menebak siapa yang akan Anda kirimi email.
      </>,
      <>
        Giggal.ai mengecek setiap alamat catch-all dan memberi hasil valid atau tidak valid, seharga 1 kredit, sama
        seperti alamat lain. Ini juga berfungsi pada domain di balik{' '}
        <InlineLink locale="id" href="/seg-email-verification">gateway keamanan seperti Proofpoint dan Mimecast</InlineLink>{' '}
        (dalam bahasa Inggris), tempat alat lain sering memberi hasil tidak diketahui.
      </>,
    ],
  },
  pricing: {
    title: 'Bulk email checker gratis: mulai dengan 1.000 kredit',
    intro:
      'Setiap akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit. Dengan kredit itu Anda bisa mengecek daftar hingga 1.000 alamat secara gratis. Setelah itu Anda membayar sesuai pemakaian. Anda membeli kredit sekali, tanpa langganan bulanan, dan kreditnya tidak pernah kedaluwarsa.',
    colCredits: 'Kredit (alamat)',
    colPrice: 'Harga',
    colPer1k: 'Per 1.000 alamat',
    freeLabel: 'Gratis',
    freeNote: 'Akun baru, tanpa kartu kredit',
    footnote: (
      <>
        Satu kredit mengecek satu alamat, termasuk pemeriksaan catch-all. Lihat semua{' '}
        <InlineLink locale="id" href="/pricing">harga</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Kapan memakai bulk email checker',
    intro:
      'Cek daftar setiap kali Anda akan mengirim email ke banyak alamat sekaligus. Jika Anda membuang dulu alamat yang sudah tidak ada, deliverability Anda terlindungi.',
    items: [
      'Sebelum kampanye cold email, agar bounce tidak merusak deliverability Anda.',
      'Setelah mengumpulkan kontak dari formulir, acara, atau database prospek.',
      'Sebelum mengirim email ke daftar newsletter lama yang sudah berbulan-bulan tidak dipakai.',
      'Sebelum mengimpor kontak ke CRM atau alat email marketing Anda.',
    ],
  },
  software: {
    title: 'Software verifikasi email massal di alat Anda sendiri',
    intro:
      'Mengunggah file adalah salah satu pilihan. Anda juga bisa mengecek alamat email secara massal dari aplikasi atau alur kerja Anda sendiri.',
    items: [
      {
        title: 'API verifikasi email (dalam bahasa Inggris)',
        text: 'Kirim alamat dari aplikasi atau formulir pendaftaran Anda dan terima hasilnya dalam JSON.',
      },
      {
        title: 'Integrasi',
        text: 'Cek kontak baru secara otomatis dengan Zapier atau n8n.',
      },
      {
        title: 'Server MCP',
        text: 'Cek alamat email dari Claude, ChatGPT, Cursor, dan VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'Mengecek atau membersihkan daftar email?',
    listText: (
      <>
        Saat Anda mengecek daftar email, setiap alamat mendapat hasil. Membersihkan adalah apa yang Anda lakukan dengan
        hasil itu: Anda menghapus alamat tidak valid, email sekali pakai, dan alamat ganda, lalu tersisa daftar alamat
        email yang valid. Keduanya dimulai dengan unggahan yang sama. Baca lebih lanjut tentang{' '}
        <InlineLink locale="id" href="/email-list-cleaning">membersihkan daftar email</InlineLink> (dalam bahasa Inggris).
      </>
    ),
    oneTitle: 'Hanya ingin mengecek satu alamat?',
    oneText: (
      <>
        Pakai{' '}
        <InlineLink locale="id" href="/email-checker">email checker</InlineLink> gratis. Alat itu mengecek satu alamat
        sekali jalan dengan pemeriksaan yang sama, tanpa perlu daftar.
      </>
    ),
  },
  faqTitle: 'Verifikasi email massal: pertanyaan umum',
  faqs: [
    {
      q: 'Apa itu bulk email checker?',
      a: 'Bulk email checker mengecek seluruh daftar alamat email sekaligus, bukan satu per satu. Anda mengunggah file dan setiap alamat mendapat hasil: valid, tidak valid, atau tidak diketahui. Alat seperti ini juga disebut alat verifikasi email massal atau validasi email massal.',
    },
    {
      q: 'Berapa banyak alamat email yang bisa saya cek sekaligus?',
      a: 'Hingga 50.000 alamat per file. Jika daftar Anda lebih besar, bagi ke beberapa file dan unggah satu per satu.',
    },
    {
      q: 'Apakah ada bulk email checker gratis?',
      a: 'Ada. Setiap akun baru mendapat 1.000 kredit gratis, tanpa kartu kredit. Satu kredit mengecek satu alamat. Jadi Anda bisa mengecek daftar hingga 1.000 alamat secara gratis.',
    },
    {
      q: 'Apakah validasi email massal gratis benar-benar gratis?',
      a: 'Ya. 1.000 alamat pertama Anda gratis, tanpa kartu kredit. Kredit gratis tidak pernah kedaluwarsa, jadi Anda bisa memakainya kapan saja. Anda hanya membayar jika perlu mengecek lebih dari 1.000 alamat.',
    },
    {
      q: 'Berapa lama verifikasi email massal berlangsung?',
      a: 'Sebagian besar daftar selesai dalam beberapa menit.',
    },
    {
      q: 'Format file apa yang bisa saya unggah?',
      a: 'CSV atau Excel. Anda mengunduh hasilnya sebagai CSV, dengan hasil di setiap baris.',
    },
    {
      q: 'Apakah bulk email checker mengirim email ke daftar saya?',
      a: 'Tidak. Alat ini bertanya ke setiap server email apakah kotak masuknya ada, lalu berhenti sebelum pesan apa pun dikirim. Tidak ada orang di daftar Anda yang menerima apa pun.',
    },
    {
      q: 'Berapa biaya verifikasi email massal?',
      a: 'Satu kredit per alamat, termasuk pemeriksaan catch-all. 10.000 alamat seharga US$9,90 dan 100.000 alamat seharga US$76. Anda membayar sekali, tanpa langganan bulanan, dan kreditnya tidak pernah kedaluwarsa.',
    },
    {
      q: 'Apa yang terjadi pada alamat catch-all?',
      a: 'Setiap alamat catch-all dicek dan mendapat hasil valid atau tidak valid, seharga 1 kredit, sama seperti alamat lain. Banyak alat validasi email massal justru menandai semuanya sebagai "berisiko".',
    },
    {
      q: 'Apa arti "tidak diketahui", dan apakah saya membayar untuk hasil itu?',
      a: 'Tidak diketahui berarti server email tidak memberi jawaban yang jelas, sering karena server sengaja menahan pengirim baru (greylisting). Cek ulang alamat ini nanti. Kredit untuk hasil tidak diketahui dikembalikan.',
    },
    {
      q: 'Apakah validasi email massal sama dengan verifikasi email massal?',
      a: 'Ya. Validasi, verifikasi, dan pengecekan adalah tiga kata untuk pekerjaan yang sama: mencari tahu alamat mana di sebuah daftar yang bisa menerima email.',
    },
    {
      q: 'Seberapa akurat bulk email checker ini?',
      a: 'Giggal.ai mengukur akurasi 98,5% pada daftar bisnis. Daftar yang sudah dicek dengan alat ini biasanya punya bounce rate di bawah 3%.',
    },
    {
      q: 'Apakah daftar saya tetap privat?',
      a: 'Giggal.ai dikelola oleh TargetPulse Ltd dan memproses data pribadi sesuai GDPR. Kebijakan privasi di giggal.ai/id/kebijakan-privasi menjelaskan data apa yang kami kumpulkan, bagaimana kami memakainya, dan berapa lama kami menyimpannya.',
    },
  ],
  ctaHeadline: 'Cek daftar email Anda dalam beberapa menit',
}
