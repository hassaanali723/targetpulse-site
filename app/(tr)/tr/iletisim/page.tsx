'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/tr/iletisim',
  crumb: 'İletişim',
  h1Lead: 'Bizimle',
  h1Accent: 'iletişime geçin',
  intro: 'E-posta doğrulama aracımızla ilgili sorunuz mu var? Başlamak için yardıma mı ihtiyacınız var? Destek almak için bize bugün yazın. Genellikle 24 saat içinde yanıt veririz.',
  formTitle: 'Bize mesaj gönderin',
  success: 'Teşekkür ederiz. 24 saat içinde size dönüş yapacağız.',
  failed: 'Mesaj gönderilemedi',
  labels: {
    name: 'Ad soyad',
    email: 'E-posta adresi',
    company: 'Şirket adı',
    phone: 'Telefon numarası',
    message: 'Mesaj',
  },
  placeholders: {
    name: 'Ayşe Yılmaz',
    email: 'ayse@sirketiniz.com.tr',
    company: 'Şirketiniz A.Ş.',
    phone: '+90 212 123 45 67',
    message: 'İhtiyacınızı kısaca anlatın...',
  },
  submit: 'Mesajı gönderin',
  submitting: 'Gönderiliyor...',
  humans: 'Size gerçek kişiler yardımcı olur. Genellikle 24 saat içinde yanıt veririz.',
  emailTitle: 'E-posta gönderin',
  phoneTitle: 'Bizi arayın',
  phoneHours: 'Pazartesi ila cuma, 09.00 ila 18.00 (Birleşik Krallık saati, GMT/BST)',
  addressTitle: 'Adresimiz',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, London E6 2JA, Birleşik Krallık',
  ],
  ctaTitle: 'Beklemek istemiyor musunuz?',
  ctaText: '1.000 ücretsiz krediyle e-posta adreslerini hemen doğrulamaya başlayın. Kredi kartı gerekmez.',
  ctaButton: 'Ücretsiz başlayın',
  ctaHref: '/tr/kayit-ol',
}

export default function Page() {
  return <ContactPageL10n locale="tr" content={content} />
}
