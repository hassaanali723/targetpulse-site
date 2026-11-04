'use client'

import ContactPageL10n, { type ContactContent } from '@/components/l10n/ContactPage'

const content: ContactContent = {
  path: '/ko/contact',
  crumb: '문의하기',
  h1Lead: 'Giggal.ai에',
  h1Accent: '문의하기',
  intro: '이메일 검증 도구에 관해 궁금한 점이 있거나 시작하는 데 도움이 필요하면 메시지를 보내 주십시오. 보통 24시간 이내에 답변합니다.',
  formTitle: '메시지 보내기',
  success: '감사합니다. 24시간 이내에 답변하겠습니다.',
  failed: '메시지를 보내지 못했습니다',
  labels: {
    name: '이름',
    email: '이메일 주소',
    company: '회사명',
    phone: '전화번호',
    message: '메시지',
  },
  placeholders: {
    name: '홍길동',
    email: 'gildong@company.co.kr',
    company: '주식회사 예시',
    phone: '+82 2 1234 5678',
    message: '문의 내용을 적어 주십시오',
  },
  submit: '메시지 보내기',
  submitting: '보내는 중…',
  humans: '담당자가 직접 답변합니다. 보통 24시간 이내에 회신합니다.',
  emailTitle: '이메일 문의',
  phoneTitle: '전화 문의',
  phoneHours: '월요일~금요일 오전 9시~오후 6시(영국 시간, GMT/BST)',
  addressTitle: '회사 주소',
  addressLines: [
    'Office 17366',
    '182-184 High Street North',
    'East Ham, London E6 2JA, 영국',
  ],
  ctaTitle: '기다리지 않고 바로 시작하시겠습니까?',
  ctaText: '무료 크레딧 1,000개로 지금 바로 이메일 검증을 시작할 수 있습니다. 신용카드는 필요 없습니다.',
  ctaButton: '무료로 시작하기',
  ctaHref: '/ko/sign-up',
}

export default function Page() {
  return <ContactPageL10n locale="ko" content={content} />
}
