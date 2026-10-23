'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/id/kontak',
  crumb: 'Kontak',
  h1Lead: 'Mari bicara tentang',
  h1Accent: 'daftar email Anda',
  intro: 'Punya pertanyaan tentang verifikasi email, butuh bantuan untuk memulai, atau perlu volume khusus? Kirim pesan kepada kami. Kami biasanya membalas dalam 24 jam.',
  formTitle: 'Kirim pesan kepada kami',
  success: 'Terima kasih! Kami akan membalas dalam 24 jam.',
  failed: 'Pesan gagal terkirim',
  labels: {
    name: 'Nama lengkap',
    email: 'Alamat email',
    company: 'Perusahaan',
    phone: 'Telepon',
    message: 'Pesan',
  },
  placeholders: {
    name: 'Budi Santoso',
    email: 'budi@perusahaan.co.id',
    company: 'PT Perusahaan Anda',
    phone: '+62 21 1234 5678',
    message: 'Ceritakan apa yang Anda butuhkan...',
  },
  submit: 'Kirim pesan',
  submitting: 'Sedang mengirim...',
  humans: 'Orang sungguhan yang siap membantu Anda. Kami biasanya membalas dalam 24 jam.',
  emailTitle: 'Kirim email',
  phoneTitle: 'Telepon kami',
  phoneHours: 'Senin sampai Jumat, pukul 09.00 sampai 18.00 (waktu London)',
  addressTitle: 'Kantor terdaftar',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, London E6 2JA, Inggris Raya',
  ],
  ctaTitle: 'Tidak ingin menunggu?',
  ctaText: 'Mulai cek alamat email sekarang dengan 1.000 kredit gratis. Tanpa kartu kredit.',
  ctaButton: 'Mulai gratis',
  ctaHref: '/id/daftar',
}

export default function Page() {
  return <ContactPageL10n locale="id" content={content} />
}
