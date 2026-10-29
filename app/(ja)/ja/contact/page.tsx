'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/ja/contact',
  crumb: 'お問い合わせ',
  h1Lead: 'メールリストについて',
  h1Accent: 'ご相談ください',
  intro: 'メールアドレス検証についてのご質問、使い始めるためのサポート、大量件数のご相談を受け付けています。メッセージをお送りください。通常24時間以内に返信します。',
  formTitle: 'メッセージを送る',
  success: 'ありがとうございます。24時間以内に返信します。',
  failed: 'メッセージを送信できませんでした',
  labels: {
    name: '氏名',
    email: 'メールアドレス',
    company: '会社名',
    phone: '電話番号',
    message: 'メッセージ',
  },
  placeholders: {
    name: '山田 太郎',
    email: 'yamada@company.co.jp',
    company: '株式会社サンプル',
    phone: '+81 3 1234 5678',
    message: 'ご用件をお書きください',
  },
  submit: 'メッセージを送信',
  submitting: '送信中…',
  humans: '担当者が対応します。通常24時間以内に返信します。',
  emailTitle: 'メールで問い合わせる',
  phoneTitle: '電話で問い合わせる',
  phoneHours: '月曜日から金曜日、9:00〜18:00（ロンドン時間）',
  addressTitle: '登記上の所在地',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, London E6 2JA, イギリス',
  ],
  ctaTitle: '今すぐ始めたい場合',
  ctaText: '1,000件分の無料クレジットで、今すぐメールアドレスのチェックを始められます。クレジットカードは不要です。',
  ctaButton: '無料で始める',
  ctaHref: '/ja/sign-up',
}

export default function Page() {
  return <ContactPageL10n locale="ja" content={content} />
}
