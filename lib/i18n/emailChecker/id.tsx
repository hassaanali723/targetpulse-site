import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Indonesian copy for /id/cek-email-valid, translated from the English
// /email-checker page (app/(en)/email-checker/page.tsx), with the Dutch and
// Polish copy as the structural model. Keyword plan
// (SEO-Plan/i18n-batch2-id-keyword-plan.md, sections 1 to 3): head term
// "cek email valid" (900/mo), H1 "Cek email valid atau tidak", loan terms
// "email checker", "email checker online", "email verifier" and "email
// validator", and the native family in copy and FAQ: cek email valid atau
// tidak, cek validasi email, cara cek email valid atau tidak, cek valid email,
// cek alamat email valid atau tidak, verifikasi email, alamat email, gratis.
// The "is this address still active" family (cek email aktif) belongs to the
// child page /id/cek-email-valid/cara-cek-email-aktif, linked first in
// `related`, so this page does not use that phrase as a heading.
// Register "Anda". Spelling "email" (no hyphen).

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Cek email valid',
    h1Rest: 'atau tidak',
    intro:
      'Cek email valid atau tidak secara gratis dengan email checker online ini. Tempel alamat email, lalu alat ini mengetes format, server email, dan kotak masuknya sendiri. Pada domain catch-all, pemeriksaan berlanjut dan Anda mendapat hasil valid atau tidak valid.',
  },
  tool: {
    caption: 'Tanpa daftar, tanpa kartu kredit. Satu alamat per pemeriksaan.',
    freeCredits: 'Butuh lebih banyak pemeriksaan? Buat akun dan dapatkan 1.000 kredit gratis. Tanpa kartu kredit.',
  },
  ratings: {
    reviews: (count) => `${count} ulasan`,
    ratedAria: (rating, platform) => `Giggal.ai mendapat nilai ${rating.replace('.', ',')} dari 5 di ${platform}`,
  },
  awards: {
    headingLead: 'Giggal.ai dinilai sebagai',
    headingRest: 'Leader di SourceForge dan Slashdot',
    showLabel: 'Tampilkan {badge}',
  },
  steps: {
    title: 'Cara cek email valid atau tidak dalam empat langkah',
    intro:
      'Pemeriksaan alamat email yang lengkap, disebut juga verifikasi email, terdiri dari empat langkah. Banyak alat berhenti setelah langkah pertama. Karena itu banyak daftar yang "sudah dicek" tetap mengalami bounce.',
    items: [
      {
        title: 'Format',
        text: 'Apakah alamatnya ditulis dengan benar: satu tanda @, nama yang valid di depannya, dan domain dengan ekstensi seperti .com atau .co.id. Langkah ini menemukan salah ketik, tidak lebih.',
      },
      {
        title: 'Server email',
        text: 'Apakah domainnya punya record untuk server email (MX record)? Tanpa MX record, domain itu tidak bisa punya kotak masuk. Alamat tersebut sudah mati sebelum Anda mengirim apa pun.',
      },
      {
        title: 'Kotak masuk',
        text: 'Email checker bertanya ke server email apakah kotak masuk ini ada, tanpa mengirim email. Jawaban ya berarti kotak masuknya ada. Jawaban tidak berarti kotak masuknya tidak ada.',
      },
      {
        title: 'Catch-all',
        text: 'Jika server juga menjawab ya untuk alamat karangan, langkah ketiga tidak membuktikan apa pun. Di titik ini kebanyakan email checker menampilkan "catch-all" lalu berhenti. Giggal.ai melihat sinyal tambahan yang membedakan kotak masuk asli dari jawaban accept-all. Setelah itu Giggal.ai memberi hasil valid atau tidak valid.',
      },
    ],
    footnote:
      'Panel hasil di atas menampilkan setiap langkah saat sedang berjalan. Untuk cek validasi email, tempel alamatnya lalu klik tombolnya. Satu alamat butuh beberapa detik.',
  },
  results: {
    title: 'Hasil email checker online untuk setiap alamat',
    intro: 'Setiap pemeriksaan berakhir dengan salah satu dari tiga hasil.',
    valid: {
      title: 'Valid',
      text: 'Kotak masuknya ada dan lolos pemeriksaan tambahan. Jadi email ke alamat ini seharusnya sampai.',
    },
    invalid: {
      title: 'Tidak valid',
      text: 'Format alamatnya salah atau domainnya tidak punya server email, atau server menolak kotak masuknya. Email ke alamat ini akan bounce.',
    },
    unknown: {
      title: 'Tidak diketahui',
      text: 'Jarang terjadi di sini. Server tidak menjawab tepat waktu atau sengaja menahan pengirim baru. Coba lagi nanti, jangan langsung menganggap alamatnya mati.',
    },
    detailsIntro: 'Di bawah hasil, email checker menampilkan detail yang Anda butuhkan untuk menilai deliverability (tingkat keterkiriman email):',
    details: [
      { lead: 'Penyedia email', rest: ' (Google Workspace, Microsoft 365, atau gateway seperti Proofpoint)' },
      { lead: 'Server email yang menjawab', rest: '' },
      { lead: 'Apakah alamatnya email sekali pakai', rest: ' (kotak masuk sementara yang akan hilang)', href: '/id/cek-email-sementara' },
      { lead: 'Apakah alamatnya berbasis peran', rest: ' (info@, sales@, support@, yang masuk ke kotak masuk bersama dan bukan ke satu orang)' },
      { lead: 'Apakah alamatnya milik penyedia email konsumen', rest: ' seperti Gmail atau Yahoo, berguna untuk menilai kontak B2B' },
    ],
  },
  exists: {
    title: 'Cek alamat email valid atau tidak: apakah kotak masuknya ada?',
    p1: 'Sebuah alamat email ada jika kotak masuknya sudah dibuat di server email penerima dan menerima email. Untuk mengeceknya, email checker bertanya langsung ke server itu, tanpa mengirim pesan. Dengan begitu pemeriksaan ini membuktikan bahwa kotak masuknya ada. Pemeriksaan ini tidak membuktikan siapa pemiliknya atau seberapa sering kotak masuk itu dibaca.',
    p2: 'Tidak yakin apakah sebuah alamat dari kontak Anda benar-benar ada? Tes alamat itu di email checker di atas.',
    signsIntro: 'Alamat yang tidak ada sering punya salah satu ciri berikut:',
    signs: [
      { lead: 'Domain dengan salah ketik', rest: ' seperti gmial.com atau yaho.com, yang tidak punya server email atau menolak semua email.' },
      { lead: 'Tidak ada record server email', rest: ' di domainnya, jadi email tidak bisa dikirim ke mana pun.' },
      { lead: 'Kotak masuk yang ditolak:', rest: ' domainnya asli, tetapi server mengatakan orang ini tidak ada, sering karena ia sudah keluar dari perusahaan.' },
      { lead: 'Karakter acak', rest: ' di depan @, diisi oleh bot atau oleh orang yang tidak mau mengisi formulir.' },
    ],
  },
  whySend: {
    title: 'Kenapa Anda perlu cek email valid sebelum mengirim',
    p1: 'Email ke alamat yang tidak ada akan kembali sebagai hard bounce. Gmail, Outlook, dan penyedia email lain menghitung bounce Anda. Jika terlalu banyak email Anda bounce, mereka makin kurang percaya pada domain pengirim Anda. Akibatnya, lebih banyak email Anda masuk ke spam atau diblokir, termasuk email ke orang sungguhan. Dengan verifikasi email, Anda menemukan alamat ini sebelum mengirim.',
    readMore: (
      <>
        Baca{' '}
        <InlineLink href="/id/blog/hard-bounce-vs-soft-bounce">hard bounce vs soft bounce</InlineLink>{' '}
        untuk arti setiap kode bounce dan apa yang perlu Anda lakukan di setiap kasus.
      </>
    ),
    bounceTitle: 'Bounce rate yang lebih rendah.',
    bounceText: 'Daftar yang dibersihkan dengan Giggal.ai biasanya punya bounce rate di bawah 3%.',
    benefits: [
      {
        title: 'Reputasi pengirim yang baik.',
        text: 'Dengan lebih sedikit bounce, domain Anda tetap dipercaya oleh penyedia email.',
      },
      {
        title: 'Deliverability yang lebih baik.',
        text: 'Dengan reputasi yang baik, lebih banyak email Anda masuk ke inbox, bukan ke folder spam.',
      },
      {
        title: 'Data yang lebih bersih.',
        text: 'Alamat yang mati hilang dari CRM Anda sebelum menghabiskan waktu atau kredit pengiriman Anda.',
      },
    ],
  },
  whenToUse: {
    title: 'Kapan memakai email checker',
    intro: 'Pakai email checker ini setiap kali satu alamat menentukan langkah Anda berikutnya:',
    items: [
      'Sebelum membalas kontak masuk yang alamatnya tampak diketik manual.',
      'Saat email pendaftaran bounce dan Anda ingin tahu apakah alamat itu pernah ada.',
      'Sebelum mengirim email ke alamat yang Anda temukan di situs web atau di CRM.',
      'Untuk mengetes alamat dari daftar yang dibeli sebelum Anda membayar untuk membersihkan seluruh file.',
      'Untuk memastikan kontak di domain catch-all yang ditandai "berisiko" oleh alat lain.',
    ],
  },
  catchAll: {
    title: 'Kenapa email checker lain berhenti di catch-all',
    paragraphs: [
      <>
        Sebagian server email bisnis menerima alamat apa pun, asli atau karangan. Ini disebut{' '}
        <InlineLink href="/id/verifikasi-catch-all">domain catch-all</InlineLink>. Jika Anda menanyakan karyawan
        yang asli, server menjawab ya. Jika Anda menanyakan nama karangan, server juga menjawab ya. Jadi pemeriksaan
        kotak masuk biasa tidak membuktikan apa pun di domain ini.
      </>,
      <>
        Mengenali domain catch-all itu mudah: Anda mengetes alamat karangan dan melihat apakah alamat itu diterima.
        Karena itu hampir setiap email checker bisa memberi tahu bahwa sebuah domain adalah catch-all. Mencari tahu
        kotak masuk mana di balik domain itu yang asli butuh kerja jauh lebih banyak. Karena itu kebanyakan alat
        berhenti di label tersebut dan menyerahkan keputusannya kepada Anda. Di daftar B2B, alamat catch-all sering
        menjadi bagian besar dari kontak, dan banyak di antaranya orang sungguhan.
      </>,
      <>
        Giggal.ai melihat sinyal tambahan pada setiap alamat catch-all dan memberi hasil valid atau tidak valid.
        Karena itu setiap pengunjung hanya bisa menjalankan beberapa pemeriksaan di halaman ini. Baca{' '}
        <InlineLink href="/id/blog/apa-itu-email-catch-all">apa itu alamat email catch-all</InlineLink>{' '}
        untuk penjelasan lengkapnya.
      </>,
    ],
  },
  wholeList: {
    title: 'Verifikasi email untuk seluruh daftar, bukan satu alamat',
    list: (
      <>
        Email checker di halaman ini mengecek satu alamat sekali jalan. Untuk mengecek seluruh daftar, buat akun lalu
        unggah file CSV atau Excel dengan hingga 50.000 alamat. Setelah itu Anda{' '}
        <InlineLink href="/id">membersihkan daftar email Anda</InlineLink> dengan pemeriksaan yang sama di setiap
        baris. Anda mulai dengan 1.000 kredit gratis, tanpa kartu kredit.
      </>
    ),
    api: (
      <>
        Untuk mengecek alamat di aplikasi atau formulir pendaftaran Anda sendiri, pakai{' '}
        <InlineLink href="/email-verification-api">API verifikasi email</InlineLink> (dalam bahasa Inggris). API ini
        menjalankan pemeriksaan yang sama dan memberi hasil dalam JSON.
      </>
    ),
  },
  faqTitle: 'Cek email valid: pertanyaan umum',
  faqs: [
    {
      q: 'Apa itu email checker?',
      a: 'Email checker menunjukkan apakah sebuah alamat email valid. Alat ini mengecek format, server email, dan kotak masuknya sendiri. Alat ini juga disebut email verifier atau email validator. Alat ini bekerja tanpa mengirim email ke alamat tersebut.',
    },
    {
      q: 'Apakah email checker sama dengan email verifier?',
      a: 'Ya. Email checker, email verifier, dan email validator adalah nama untuk jenis alat yang sama. Entah Anda menyebutnya cek email valid, cek valid email, atau cek validasi email, maksudnya sama: pemeriksaan format, server email, dan kotak masuk. Bedanya ada pada domain catch-all. Banyak alat berhenti di sana dengan hasil "berisiko". Alat ini memberi hasil valid atau tidak valid.',
    },
    {
      q: 'Bagaimana cara kerja email checker?',
      a: 'Alat ini menjalankan empat pemeriksaan secara berurutan. Pertama format alamat. Lalu record server email milik domain. Setelah itu alat ini bertanya ke server email apakah kotak masuknya ada. Pada domain catch-all, tempat server menjawab ya untuk setiap alamat, Giggal.ai melihat sinyal tambahan untuk membedakan kotak masuk asli dari kotak masuk palsu.',
    },
    {
      q: 'Apa maksud cek email valid atau tidak?',
      a: 'Dengan alat ini, artinya mengecek apakah alamat itu benar-benar ada dan bisa menerima email. Email checker memastikan kotak masuknya ada dan menunjukkan apakah alamatnya email sekali pakai. Alat ini tidak memberi tahu siapa pemilik alamat itu. Alat ini juga tidak memberi tahu apakah email yang Anda terima bisa dipercaya.',
    },
    {
      q: 'Bagaimana cara cek email valid atau tidak?',
      a: 'Tempel alamatnya di email checker di bagian atas halaman ini lalu mulai pemeriksaan. Dalam beberapa detik Anda mendapat hasil: valid, tidak valid, atau tidak diketahui, dengan alasan dan detail server email di bawahnya.',
    },
    {
      q: 'Bisakah saya cek alamat email valid atau tidak tanpa mengirim email?',
      a: 'Bisa. Email checker bertanya ke server email penerima apakah kotak masuknya ada dan berhenti sebelum pesan apa pun dikirim. Jadi Anda bisa mengecek sebuah email tanpa ada yang masuk ke kotak masuk penerima.',
    },
    {
      q: 'Bisakah saya cek apakah sebuah alamat email masih aktif?',
      a: 'Bisa, jika maksud Anda alamat itu masih ada dan bisa menerima email. Email checker bertanya ke server email apakah kotak masuknya ada dan menerima email. Jika Anda ingin tahu apakah sebuah nama alamat masih bisa Anda buat sendiri, coba di penyedia email. Alat ini tidak mengecek hal itu.',
    },
    {
      q: 'Apakah email checker mengirim email ke alamat itu?',
      a: 'Tidak. Pemeriksaan hanya berkomunikasi dengan server email. Pemilik alamat tidak menerima apa pun dan tidak tahu bahwa alamatnya dicek.',
    },
    {
      q: 'Seberapa akurat email checker?',
      a: 'Tergantung alatnya. Kebanyakan akurat pada domain biasa dan menyerah pada domain catch-all, dengan hasil "berisiko" atau "tidak diketahui". Giggal.ai terus mengecek pada domain catch-all dan memberi hasil valid atau tidak valid. Giggal.ai mengukur akurasi 98,5% pada daftar bisnis.',
    },
    {
      q: 'Apa arti "valid" pada domain catch-all?',
      a: 'Artinya kotak masuknya sudah dipastikan, bukan hanya bahwa domainnya menerima alamat itu. Label catch-all biasa hanya mengatakan bahwa server menjawab ya untuk semua alamat. Di sini valid berarti alamat itu lolos pemeriksaan tambahan yang memisahkan kotak masuk asli dari kotak masuk yang akan bounce.',
    },
    {
      q: 'Apa arti "tidak diketahui" pada verifikasi email?',
      a: 'Server email tidak memberi jawaban yang jelas tepat waktu, sering karena server sengaja menahan pengirim baru (greylisting). Ini tidak membuktikan bahwa alamatnya mati. Cek ulang nanti.',
    },
    {
      q: 'Berapa banyak alamat yang bisa saya cek gratis di sini?',
      a: 'Beberapa per jam, tanpa daftar dan tanpa kartu kredit. Setiap pemeriksaan menjalankan semua langkah, karena itu jumlahnya kecil. Untuk mengecek lebih banyak, buat akun.',
    },
    {
      q: 'Apakah alamat email yang valid tetap bisa bounce?',
      a: 'Bisa, tetapi jarang. Hasil valid berarti kotak masuknya ada pada saat pemeriksaan. Email tetap bisa bounce jika kotak masuknya penuh atau server email sedang mati sebentar. Email juga bisa bounce jika orangnya keluar dari perusahaan setelah pemeriksaan, atau jika server memblokir domain pengirim Anda. Cek alamat tidak lama sebelum Anda mengirim.',
    },
    {
      q: 'Apakah data saya tetap privat?',
      a: 'Giggal.ai dikelola oleh TargetPulse Ltd dan memproses data pribadi sesuai GDPR. Kebijakan privasi di giggal.ai/id/kebijakan-privasi menjelaskan data apa yang kami kumpulkan, bagaimana kami memakainya, dan berapa lama kami menyimpannya.',
    },
    {
      q: 'Bisakah saya cek seluruh daftar di sini?',
      a: 'Tidak di halaman ini. Buat akun lalu unggah daftarnya sebagai file CSV atau Excel. Setiap alamat lalu mendapat pemeriksaan yang sama. Anda mulai dengan 1.000 kredit gratis, tanpa kartu kredit.',
    },
  ],
  ctaHeadline: 'Cek seluruh daftar Anda',
  related: [
    { href: '/id/cek-email-valid/cara-cek-email-aktif', label: 'Cara cek email aktif atau tidak' },
    { href: '/id/verifikasi-catch-all', label: 'Verifikasi catch-all dan alamat berisiko' },
    { href: '/id/harga', label: 'Harga dan kredit' },
    { href: '/id/cek-email-sementara', label: 'Cek email sementara' },
    { href: '/id/blog/apa-itu-email-catch-all', label: 'Apa itu alamat email catch-all?' },
  ],
}
