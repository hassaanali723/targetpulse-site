import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/id'

// The "is this address still active" question: "cek email aktif" 250, "cek
// email aktif atau tidak" 100, "cara cek email aktif" 100, "web cek email
// aktif" 50, "cara cek email aktif atau tidak" 40, "cara cek email masih aktif
// atau tidak" 30, "cara cek email ada atau tidak" 20, about 600 a month
// (SEO-Plan/i18n-batch2-id-keyword-plan.md sections 1 to 3). Modelled on the
// Polish child (/pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje) and the
// German child: the page answers in the first paragraph, embeds the checker
// and lists four methods with their limits. The test-email method is named
// as unreliable. No figures beyond what the method itself states.

const PATH = '/id/cek-email-valid/cara-cek-email-aktif'
const TITLE = 'Cara Cek Email Aktif atau Tidak: 4 cara mudah'
const DESC =
  'Cara cek email aktif atau tidak: 4 cara beserta batasannya, dan email checker gratis yang mengecek mailbox tanpa mengirim pesan. Juga untuk domain catch-all.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
}

const steps = [
  {
    name: 'Cek mailbox dengan email checker, tanpa mengirim pesan',
    text: 'Email checker bertanya kepada server email domain tersebut apakah alamat itu ada. Alat ini tidak mengirim pesan apa pun kepada penerima.',
  },
  {
    name: 'Cek format alamat email',
    text: 'Alamat yang benar punya nama, satu tanda @, dan domain dengan akhiran, misalnya perusahaan.co.id. Satu salah ketik di domain sudah cukup membuat alamat tidak berfungsi. Namun, format yang benar tidak berarti mailbox-nya ada.',
  },
  {
    name: 'Cek MX record domain',
    text: 'Jika domain tidak punya MX record, tidak ada mailbox yang bisa aktif di domain itu. Pencarian DNS menunjukkan hal ini dalam hitungan detik. Namun, adanya MX record tidak membuktikan bahwa mailbox tertentu ada.',
  },
  {
    name: 'Kirim email uji coba dan tunggu bounce (cara yang tidak andal)',
    text: 'Banyak panduan menyarankan cara ini. Di domain catch-all, server menerima semua penerima dan tidak mengirim bounce, meskipun mailbox tidak ada. Jadi, tidak adanya bounce tidak membuktikan apa pun. Cara ini hanya bekerja di domain yang bukan catch-all, dan setiap bounce merusak reputasi pengirim Anda.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'Bagaimana cara cek email ada atau tidak tanpa mengirim pesan?',
    a: 'Masukkan alamat ke email checker di halaman ini untuk cek email aktif atau tidak. Alat ini bertanya kepada server email apakah mailbox ada, dan tidak mengirim pesan apa pun. Hasilnya (valid, tidak valid, atau tidak diketahui) muncul dalam beberapa detik.',
  },
  {
    q: 'Apakah email aktif jika formatnya benar?',
    a: 'Belum tentu. Format yang benar hanya berarti alamat ditulis dengan benar: ada nama, tanda @, dan domain. Alamat dengan format yang benar bisa mengarah ke domain tanpa server email, atau ke mailbox yang tidak pernah dibuat. Jawabannya baru didapat setelah mailbox dicek.',
  },
  {
    q: 'Apakah email masih aktif jika pesan saya tidak kembali?',
    a: 'Belum tentu. Di domain catch-all, server menerima semua alamat dan tidak mengirim bounce. Jadi, tidak adanya pesan error tidak membuktikan apa pun. Untuk kasus ini, Anda perlu verifikasi catch-all.',
  },
  {
    q: 'Mengapa hasilnya "tidak diketahui"?',
    a: 'Server tidak menjawab tepat waktu, menerapkan greylisting untuk pengirim baru, atau berada di balik gateway keamanan email yang menerima semua pesan. Coba lagi nanti, atau gunakan verifikasi catch-all lengkap.',
  },
  {
    q: 'Apakah email checker menunjukkan siapa pemilik email?',
    a: 'Tidak. Server email hanya mengonfirmasi apakah mailbox ada. Server tidak memberi nama pemiliknya. Domain menunjukkan perusahaan atau penyedia email, tetapi tidak menunjukkan orangnya.',
  },
  {
    q: 'Apa yang harus dilakukan dengan alamat yang tidak aktif?',
    a: 'Hapus dari daftar dan jangan kirim lagi. Setiap pengiriman ke mailbox yang tidak ada menurunkan reputasi domain Anda. Jika kontak itu penting, cari alamatnya yang terbaru.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'

export default function CaraCekEmailAktifPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('id', [
          { name: 'Cek email valid', path: '/id/cek-email-valid' },
          { name: 'Cara cek email aktif', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Cara cek email aktif atau tidak',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="id" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/id/cek-email-valid" className="hover:underline">Cek email valid</Link> › Cek email aktif
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Cara cek email aktif atau tidak
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Email masih aktif jika kotak masuknya (mailbox) sudah dibuat dan masih berjalan. Anda bisa mengeceknya tanpa
          mengirim pesan. Itulah yang dilakukan alat di bawah ini, dan hasilnya muncul dalam beberapa detik.
          Jawaban apakah email aktif atau tidak berasal dari server email domain tersebut. Domain catch-all
          menerima semua alamat, jadi perlu pengecekan tambahan. Alat ini juga menjalankan pengecekan tersebut.
        </p>
      </section>

      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Web cek email aktif ini gratis, tanpa perlu mendaftar. Alatnya sama dengan yang ada di halaman{' '}
          <Link href="/id/cek-email-valid" className={link}>cek email valid</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Cara {i + 1}: {s.name.charAt(0).toLowerCase() + s.name.slice(1)}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              Ini cara yang paling pasti dan paling cepat, tetapi ada batasannya. Sebagian server tidak menjawab
              pengirim yang belum dikenal (greylisting, yaitu penolakan sementara untuk pengirim baru). Server lain
              menjawab &quot;ya&quot; untuk setiap alamat. Pada kasus pertama, hasilnya &quot;tidak diketahui&quot; dan
              sebaiknya Anda coba lagi nanti. Pada kasus kedua, domain tersebut catch-all dan Anda perlu langkah
              yang dijelaskan di bawah.
            </p>
          )}
          {i === 2 && (
            <p className={proseP}>
              Domain dengan MX record yang benar dan server yang menjawab adalah syarat dasar. Jika syarat ini
              tidak terpenuhi, Anda bisa menolak alamat tersebut tanpa pengecekan lain. Jika terpenuhi, Anda tetap
              perlu cara 1 untuk mengecek mailbox tertentu.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Apakah email masih aktif jika pesan tidak kembali?</h2>
        <p className={proseP}>
          Anda tidak bisa menganggapnya begitu. Di domain catch-all, server menerima semua penerima. Pesan tidak
          kembali meskipun mailbox tidak ada. Pesan itu masuk ke folder yang tidak dibaca siapa pun, atau dihapus
          tanpa pemberitahuan. Jadi, tidak adanya bounce bukan bukti. Format dan MX record juga tidak bisa
          menjawabnya, karena keduanya hanya mengecek alamat dan domain, bukan mailbox.{' '}
          <Link href="/id/verifikasi-catch-all" className={link}>
            Verifikasi catch-all
          </Link>{' '}
          di Giggal.ai memeriksa sinyal tambahan dari server dan mailbox. Dalam kasus ini pun, hasilnya tetap
          valid atau tidak valid.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Yang tidak ditunjukkan oleh pengecekan: siapa pemilik email</h2>
        <p className={proseP}>
          Server email hanya mengonfirmasi atau menolak mailbox. Server tidak memberi nama pemiliknya. Tidak ada
          juga database publik yang menghubungkan alamat email dengan orang. Pengecekan menunjukkan domain, yaitu
          perusahaan atau penyedia email. Verifikasi lengkap di Giggal.ai juga menandai apakah alamat itu berbasis peran (seperti
          info@), sekali pakai, atau dari layanan email gratis. Jika Anda mencari pemiliknya, bandingkan format
          alamat perusahaan (misalnya namadepan.namabelakang@) dengan profil publik, misalnya di situs perusahaan
          atau di LinkedIn.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Yang perlu dilakukan jika email tidak aktif</h2>
        <p className={proseP}>
          Hapus alamat itu dari daftar dan jangan coba lagi. Setiap pesan ke mailbox yang tidak ada menjadi hard
          bounce, yaitu pesan yang ditolak secara permanen. Penyedia email menghitung hard bounce saat menilai
          apakah domain Anda pengirim yang tepercaya. Jika kontak itu penting, cari alamatnya yang terbaru. Jika
          Anda ingin tahu cara cek email masih aktif atau tidak untuk seluruh daftar, gunakan{' '}
          <Link href="/id/verifikasi-email-massal" className={link}>
            verifikasi email massal
          </Link>{' '}
          sebelum mengirim. Alat ini mengecek setiap baris.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Pertanyaan yang sering diajukan</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="id" headline="Cek seluruh daftar email Anda" />
      <FooterL10n locale="id" />
    </main>
  )
}
