---
title: DMARC
seoTitle: DMARC란? 3가지 정책과 DMARC 레코드 설정 방법
description: DMARC가 무엇인지, 왜 필요한지, SPF와 DKIM을 어떻게 사용하는지, 3가지 DMARC 정책, 간단한 DMARC 레코드의 뜻, DMARC를 요구하는 곳을 설명합니다.
slug: dmarc
date: 2026-11-04
updated: 2026-11-04
keyword: DMARC
short: DMARC는 도메인의 DNS에 게시하는 규칙입니다. 내 도메인에서 왔다고 주장하지만 SPF와 DKIM을 통과하지 못한 메일을 어떻게 처리할지 받는 쪽 서버에 알려 줍니다. 보고서를 어디로 보낼지도 알려 줍니다.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC는 도메인을 보호하고, 검증은 반송률을 보호합니다
---

## DMARC란?

DMARC는 Domain-based Message Authentication, Reporting and Conformance의 약자입니다. DNS에 게시하는 규칙입니다. DNS는 도메인이 자신의 설정을 공개하는 공개 디렉터리입니다. 이 규칙은 받는 쪽 서버가 가진 질문 하나에 답합니다. 바로 From 주소에 내 도메인을 썼지만 확인에 실패한 메일을 어떻게 처리할지입니다.

From 주소란 받은편지함에서 사람들이 보는 발신자 주소입니다. DMARC가 없으면 누구나 그곳에 내 도메인을 넣을 수 있습니다. DMARC가 있으면 Gmail, Outlook.com 등 메일 서비스 제공업체에 이런 메일을 스팸함으로 보내거나 차단해 달라고 요청할 수 있습니다. 내 이름으로 메일을 보내는 모든 서버에 대한 보고서를 보내 달라고 요청할 수도 있습니다.

## 예시: billing@example.com에서 온 가짜 청구서

Example Ltd는 실제 청구서를 billing@example.com에서 보냅니다. 한 사기범이 이 회사의 고객을 속이려고 합니다. 그러면 다음과 같은 일이 일어납니다.

1. 사기범이 자신의 서버에서 메일을 보냅니다. From 주소에는 billing@example.com이라고 적혀 있습니다. 제목은 “청구서 연체, 오늘 결제 바랍니다”입니다.
2. 메일이 이 회사의 고객인 톰에게 도착합니다.
3. 톰의 메일 서비스 제공업체가 두 가지를 확인합니다. [SPF](/glossary/spf)는 보낸 서버가 example.com의 메일을 보낼 수 있는 서버인지 확인합니다. 그렇지 않습니다. [DKIM](/glossary/dkim)은 example.com의 유효한 서명이 있는지 확인합니다. 서명이 없습니다.
4. 업체가 example.com의 DMARC 레코드를 조회합니다. 레코드에는 `p=reject`라고 적혀 있습니다.
5. 업체가 메일을 차단합니다. 톰은 이 메일을 보지 못합니다.

DMARC 레코드가 없으면 4단계에서 아무것도 찾지 못합니다. 그러면 업체가 스스로 판단하고, 가짜 청구서가 톰의 받은편지함에 도착할 수도 있습니다.

받는 쪽은 내 정책을 요청으로 받아들입니다. 정책과 함께 자체 스팸 필터를 적용할 수도 있습니다.

## DMARC의 판단 기준: 정렬

SPF와 DKIM은 각각 하나의 도메인을 확인합니다. 하지만 이 도메인이 From 주소의 도메인과 다를 수 있습니다. 사기범은 scam-mail.example 같은 자신의 도메인으로 SPF를 통과하면서, From 주소에는 example.com을 보여 줄 수 있습니다.

DMARC는 이 문제를 막기 위해 규칙 하나를 추가합니다. From 주소에 나오는 도메인과 같은 도메인으로 SPF나 DKIM이 통과해야 합니다. 이렇게 도메인이 일치하는 것을 정렬(alignment)이라고 합니다. 두 확인 중 하나만 통과하고 일치하면 됩니다. 이 규칙의 relaxed(완화) 방식과 strict(엄격) 방식은 [DMARC 정렬](/glossary/dmarc-alignment) 페이지에서 설명합니다.

## 3가지 DMARC 정책

정책은 레코드의 `p=` 부분입니다. 값은 세 가지 중 하나입니다.

| 정책 | DMARC에 실패한 메일의 처리 | 사용 시점 |
| --- | --- | --- |
| `p=none` | 평소대로 전달됩니다. 보고서만 받습니다. | 처음 시작할 때, 모든 발신 서비스를 찾는 동안 |
| `p=quarantine` | 스팸함으로 갑니다. | 실제 발신 서비스가 모두 통과할 때 |
| `p=reject` | 차단되어 메일함에 도착하지 않습니다. | 실제 메일이 하나도 실패하지 않는다고 확신할 때 |

## 간단한 DMARC 레코드

DMARC 레코드는 `_dmarc`라는 이름에 두는 [DNS TXT 레코드](/glossary/dns-txt-record)입니다. example.com이라면 `_dmarc.example.com`에 둡니다. 간단한 레코드는 다음과 같습니다.

```text
v=DMARC1; p=none; rua=mailto:reports@example.com
```

세미콜론으로 구분된 세 부분이 있습니다.

- `v=DMARC1`: 이것이 DMARC 레코드라는 뜻입니다. 반드시 맨 앞에 와야 합니다.
- `p=none`: 정책입니다. 여기서는 특별한 조치 없이 보고만 하라는 뜻입니다.
- `rua=mailto:reports@example.com`: 매일 오는 요약 보고서를 받을 주소입니다.

도메인에는 DMARC 레코드가 하나만 있어야 합니다. 받는 쪽 서버가 두 개를 찾으면 둘 다 무시합니다. 다른 모든 태그와 보고서 읽는 방법은 [DMARC 레코드란?](/blog/what-is-a-dmarc-record) 가이드에서 설명합니다.

## DMARC를 시작하는 방법

대부분의 도메인은 세 단계로 정책을 올립니다.

1. `p=none`과 `rua` 주소를 넣은 레코드를 게시합니다. 메일에는 아무 변화가 없고, 보고서가 오기 시작합니다.
2. 보고서를 읽습니다. 보고서에는 내 도메인으로 메일을 보내는 모든 서버가 나옵니다. 실제로 쓰는 서비스가 모두 내 도메인으로 SPF나 DKIM을 통과하는지 확인합니다. 뉴스레터 도구와 헬프데스크가 그런 서비스의 예입니다.
3. `p=quarantine`으로 바꿉니다. 실제 메일이 스팸함으로 가지 않으면 `p=reject`로 바꿉니다.

표준 문서는 모든 실제 발신 서비스가 통과하게 만드는 데 여러 달이 걸릴 수 있다고 말합니다. 청구서 도구처럼 메일을 가끔 보내는 서비스는 놓치기 쉽습니다. Giggal.ai의 [DMARC 레코드 생성기](/dmarc-generator)는 단계마다 레코드를 만들어 줍니다.

`p=reject`를 쓰기 전에 모든 메일이 DKIM으로 서명되는지 확인하십시오. 포워딩되면 SPF가 실패합니다. SPF에만 의존하는 reject 정책은 실제로 포워딩된 메일을 차단할 수 있습니다.

## DMARC를 요구하는 곳

Google의 발신자 가이드라인은 개인 Gmail 계정으로 하루 5,000통 이상 보내는 발신자에게 DMARC 레코드를 요구합니다. Microsoft도 Outlook.com, Hotmail, Live에 같은 규칙을 적용합니다. Microsoft는 2025년 5월 5일부터 이 규칙을 적용하기 시작했습니다. 두 곳 모두 `p=none`이면 최소 요건을 충족합니다. From 도메인은 SPF나 DKIM과도 정렬되어야 합니다.

현재 DMARC 표준은 2026년 5월에 발표된 RFC 9989입니다. 이 표준은 RFC 7489를 대체했습니다. `v=DMARC1` 값으로 시작하는 레코드는 계속 작동합니다.

## DMARC와 이메일 검증

DMARC는 내 이름으로 메일을 보내는 사람들로부터 도메인을 보호합니다. 내 리스트에 있는 주소에는 아무 영향도 주지 않습니다. 더 이상 존재하지 않는 메일함으로 보낸 메일은 DMARC를 통과해도 반송됩니다. [이메일 유효성 검사 도구](/email-checker)는 보내기 전에 이런 주소를 찾고, [대량 이메일 검증 도구](/bulk-email-verifier)는 리스트 전체에서 이런 주소를 찾습니다. [이메일 검증](/)으로 반송률을 낮게 유지하고, DMARC로 사기범이 내 도메인을 쓰지 못하게 막을 수 있습니다.
