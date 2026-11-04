---
title: BIMI
seoTitle: BIMI란? 메일에 브랜드 로고를 표시하는 조건과 설정 방법
description: 이메일 BIMI가 무엇인지, 받은편지함에 브랜드 로고가 어떻게 표시되는지, 먼저 필요한 것, BIMI 레코드의 형태, 로고를 표시하는 메일 서비스를 설명합니다.
slug: bimi
date: 2026-11-04
updated: 2026-11-04
keyword: BIMI
short: BIMI는 지원하는 받은편지함에서 메일 옆에 브랜드 로고를 표시하는 이메일 표준입니다. Brand Indicators for Message Identification의 약자입니다. 도메인이 quarantine 또는 reject 정책으로 DMARC를 통과할 때만 작동합니다.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: 로고는 메일이 실제 받은편지함에 도착할 때만 의미가 있습니다
---

## 이메일 BIMI란?

BIMI는 Brand Indicators for Message Identification의 약자입니다. 브랜드가 자신이 보낸 메일 옆에 로고를 표시할 수 있게 해 주는 이메일 표준입니다. 로고는 Gmail, Apple Mail처럼 BIMI를 지원하는 받은편지함에 나타납니다. 이 표준은 이메일 기업들의 작업 그룹인 BIMI Group이 발표합니다.

BIMI 자체가 보안을 더해 주지는 않습니다. 이미 DMARC를 통과한 메일에 로고를 표시할 뿐입니다. 도메인을 보호하는 것은 BIMI를 쓰기 위해 먼저 해야 하는 설정 작업입니다.

## 예시: Gmail의 브랜드 로고

휴대전화에서 Gmail을 열어 보십시오. 목록의 메일마다 왼쪽에 작은 원형 그림이 있습니다. 대부분의 발신자는 이름의 첫 글자가 들어간 원으로 표시됩니다. 일부 브랜드는 그 원 안에 자체 로고가 표시됩니다. 이런 브랜드는 BIMI를 사용합니다.

example.com의 신발 가게가 BIMI를 설정했다고 가정하겠습니다. 이 가게가 프리야의 Gmail 주소로 뉴스레터를 보냅니다. 그러면 다음과 같은 일이 일어납니다.

1. Gmail이 example.com의 SPF, DKIM, DMARC를 확인합니다. 메일이 DMARC를 통과합니다.
2. Gmail은 가게의 DMARC 정책이 quarantine 또는 reject라는 것을 확인합니다.
3. Gmail이 `default._bimi.example.com`에서 BIMI 레코드를 조회합니다.
4. 이 레코드는 가게의 로고 파일과 마크 인증서를 가리킵니다.
5. Gmail은 인증서를 확인한 뒤 메일 옆에 로고를 표시합니다.

한 단계라도 실패하면 프리야에게는 평소처럼 첫 글자가 보입니다. 메일 자체는 평소대로 전달됩니다.

## BIMI에 필요한 것

Gmail에 로고가 표시되려면 세 가지가 필요합니다.

- **정책이 적용된 DMARC.** [DMARC](/glossary/dmarc) 정책이 `p=quarantine` 또는 `p=reject`여야 합니다. Google은 BIMI가 `p=none`을 지원하지 않는다고 밝히고 있습니다.
- **SVG Tiny PS 형식의 로고 파일.** SVG는 픽셀이 아니라 도형으로 만든 이미지 형식입니다. SVG Tiny PS는 받은편지함용으로 기능을 줄인 SVG입니다. 이미지는 정사각형이어야 하고, 브랜드 이름이 들어간 제목(title)을 포함해야 합니다. 스크립트, 애니메이션, 다른 파일로 연결되는 링크는 넣을 수 없습니다. 파일 크기는 32 KB 미만으로 유지하는 것이 좋습니다.
- **마크 인증서.** 인증 기관에서 발급받는 파일입니다. 인증 기관은 로고를 사용할 권리가 있는지 확인하는 회사입니다. Gmail은 두 종류를 인정합니다.

| 인증서 | 등록 상표 필요 여부 | Gmail에 표시되는 것 |
| --- | --- | --- |
| VMC(Verified Mark Certificate) | 필요 | 로고와 파란색 체크 표시 |
| CMC(Common Mark Certificate) | 불필요 | 로고만 표시, 체크 표시 없음 |

## BIMI 레코드

BIMI 레코드는 [DNS TXT 레코드](/glossary/dns-txt-record)입니다. DNS는 도메인이 자신의 설정을 공개하는 공개 디렉터리입니다. TXT 레코드는 일반 텍스트를 담는 DNS 항목입니다. BIMI 레코드는 `default._bimi.example.com`에 둡니다. 여기서 `default`는 셀렉터(selector), 즉 레코드를 구분하는 이름입니다.

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1`: 이것이 BIMI 레코드라는 뜻입니다.
- `l=`: SVG 로고의 웹 주소입니다.
- `a=`: VMC 또는 CMC 인증서의 웹 주소입니다. 인증서는 PEM 파일입니다.

Google의 예시에는 `l=` 값을 비워 두고 `a=` 값만 채운 레코드도 있습니다. 로고가 인증서 파일 안에 저장되어 있기 때문에 이렇게 해도 작동합니다. 인증서 제공업체가 권장하는 방식을 따르십시오.

## BIMI 로고를 표시하는 받은편지함

지원 범위는 메일 서비스마다 다릅니다. 다음은 Giggal.ai의 BIMI 레코드 생성기 페이지에 적힌 규칙입니다.

- **Gmail**은 VMC 또는 CMC가 있을 때만 로고를 표시합니다.
- **Apple Mail**은 VMC가 있을 때만 로고를 표시합니다.
- **Yahoo와 Fastmail**은 인증서가 전혀 없는 레코드로도 로고를 표시할 수 있습니다.

BIMI를 지원하지 않는 받은편지함에서는 아무것도 달라지지 않습니다. 메일 서비스가 새 BIMI 레코드를 반영하는 데 시간이 걸리기도 합니다. 그래서 첫날 로고가 보이지 않는다고 해서 항상 오류인 것은 아닙니다.

## BIMI 설정 방법

1. 메일을 보내는 모든 서비스에 SPF와 DKIM을 설정합니다.
2. DMARC 정책을 quarantine 또는 reject로 바꿉니다. Giggal.ai의 [DMARC 레코드 생성기](/dmarc-generator)로 레코드를 만들 수 있습니다.
3. 로고를 SVG Tiny PS 파일로 변환합니다.
4. Gmail에 로고를 표시하려면 VMC나 CMC를 구매합니다.
5. [BIMI 레코드 생성기](/bimi-generator)로 BIMI 레코드를 만듭니다. 이 도구는 브라우저에서 SVG 파일도 확인합니다.
6. DNS의 `default._bimi`에 레코드를 게시합니다.
7. Gmail 주소로 테스트 메일을 보내고 로고가 보이는지 확인합니다.

## BIMI와 이메일 검증

BIMI 자체가 메일 전달을 개선하지는 않습니다. 받은편지함에 도착하고 DMARC를 통과한 메일에 로고를 표시할 뿐입니다. 존재하지 않는 주소로 보낸 메일은 반송되므로, 아무도 로고를 보지 못합니다. [이메일 유효성 검사 도구](/email-checker)와 [대량 이메일 검증 도구](/bulk-email-verifier)는 이런 주소를 찾아 줍니다. 그래서 보내기 전에 지울 수 있습니다. [이메일 검증](/)을 하면 반송되는 메일이 줄어서, 더 많은 실제 사람이 로고를 보게 됩니다.
