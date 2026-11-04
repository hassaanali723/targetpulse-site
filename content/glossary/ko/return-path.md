---
title: Return-Path
seoTitle: Return-Path란? From 주소와의 차이와 SPF에서의 역할
description: Return-Path 주소가 무엇인지, From 주소와 어떻게 다른지, 반송 메시지가 어디로 가는지, SPF와 DMARC가 왜 이 주소를 확인하는지 간단한 예시와 함께 설명합니다.
slug: return-path
date: 2026-11-04
updated: 2026-11-04
keyword: Return-Path
short: Return-Path는 반송 메시지가 가는 주소입니다. 보내는 서버가 정하며, 받은편지함에서 보이는 From 주소와 다른 경우가 많습니다. SPF는 Return-Path의 도메인을 확인합니다.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: 반송되기 전에 쓰이지 않는 주소 지우기
---

## Return-Path란?

Return-Path는 반송 메시지가 가는 주소입니다. 반송 메시지란 메일을 전달할 수 없을 때 서버가 보내는 자동 알림입니다.

모든 메일에는 발신자 주소가 두 개 있습니다. 첫 번째는 **From** 주소입니다. 읽는 사람이 받은편지함에서 보는 이름과 주소입니다. 두 번째는 **Return-Path**입니다. 읽는 사람에게는 보이지 않습니다. 메일 서버가 사용합니다.

종이 편지를 생각해 보십시오. 봉투 안의 편지 맨 위에는 내 이름이 있습니다. 이것이 From 주소입니다. 봉투 모서리에는 보내는 사람 주소가 있습니다. 우체국은 편지를 배달할 수 없을 때만 이 주소를 사용합니다. 이것이 Return-Path입니다.

Return-Path는 봉투 발신자(envelope sender) 또는 반송 주소(bounce address)라고도 합니다. 보내는 서버는 전달을 시작할 때 이 주소를 받는 쪽 서버에 알려 줍니다. 그러면 받는 쪽 서버는 메일 맨 위에 `Return-Path:`로 시작하는 줄을 만들어 이 주소를 적습니다.

## 간단한 예

메일이 반송될 때 Return-Path가 작동하는 방식은 다음과 같습니다.

1. **톰이 뉴스레터를 보냅니다.** 톰은 빵집을 운영합니다. 매달 이메일 발송 서비스로 뉴스레터를 보냅니다. 이메일 발송 서비스란 대량 메일을 대신 보내 주는 회사입니다.
2. **주소 두 개가 정해집니다.** From 주소는 tom@bakery.example입니다. 발송 서비스는 Return-Path를 자사의 반송 주소로 정합니다. 예를 들면 bounces@mail.provider.example입니다.
3. **고객 한 명이 떠났습니다.** 리스트에 있던 한 고객이 직장을 옮겼습니다. 그 고객의 예전 주소는 더 이상 존재하지 않습니다.
4. **반송 메시지가 Return-Path로 갑니다.** 받는 쪽 서버는 톰이 아니라 bounces@mail.provider.example로 반송 알림을 보냅니다.
5. **발송 서비스가 처리합니다.** 발송 서비스는 반송 메시지를 읽고 그 주소로 보내는 것을 멈춥니다. 톰은 그 알림을 보지 못합니다.

그래서 뉴스레터의 반송 메시지는 내 받은편지함에 오지 않는 경우가 많습니다. 반송 메시지는 Return-Path로 가고, 발송 서비스가 처리합니다.

## Return-Path와 From 주소의 차이

| | From 주소 | Return-Path |
|---|---|---|
| **보는 사람** | 받은편지함에서 읽는 사람 | 메일 서버 |
| **정하는 사람** | 나 또는 내 이메일 앱 | 보내는 서버 |
| **용도** | 누가 보냈는지 보여 주기 | 반송 메시지 받기 |
| **SPF의 확인 대상** | 아니요 | 예 |

두 주소는 같을 수도 있습니다. Gmail이나 Outlook에서 일반 메일을 보내면 보통 같습니다. 발송 서비스를 통해 보내면 보통 다릅니다.

## 메일의 Return-Path를 찾는 방법

메일의 전체 헤더를 엽니다. Gmail에서는 메일을 열고 점 3개를 클릭한 뒤 “원본 보기”를 선택합니다. Outlook에서는 메시지 속성을 엽니다. 위쪽에서 다음과 같은 줄을 찾습니다.

`Return-Path: <bounces@mail.provider.example>`

## SPF와 DMARC에서 중요한 이유

[SPF](/glossary/spf)는 내 메일을 보낼 수 있는 서버를 나열하는 도메인 규칙입니다. SPF는 Return-Path의 도메인을 확인합니다. From 주소는 확인하지 않습니다.

[DMARC](/glossary/dmarc)는 두 번째 확인을 추가합니다. SPF를 통과한 도메인이 From 주소의 도메인과 일치하는지 묻습니다. 발송 서비스가 자사 도메인을 Return-Path로 쓰면, SPF는 발송 서비스의 도메인으로 통과하지만 내 From 도메인과는 일치하지 않을 수 있습니다.

많은 발송 서비스는 내 도메인으로 Return-Path를 설정할 수 있게 해 줍니다. 이것을 흔히 맞춤 반송 도메인(custom bounce domain)이라고 합니다. 이 설정을 쓰면 SPF가 내 도메인으로 통과하고, DMARC도 그 결과를 인정할 수 있습니다.

**예:** 톰의 From 주소는 bakery.example 도메인에 있습니다. 톰의 발송 서비스에서는 Return-Path를 bounces.bakery.example로 설정할 수 있습니다. 이제 SPF를 통과하는 도메인이 From 주소의 도메인과 일치합니다.

## 검증 도구가 도움이 되는 부분

리스트에서 생기는 모든 반송은 Return-Path로 갑니다. 발송 서비스는 이 반송을 셉니다. 반송이 너무 많으면 많은 발송 서비스가 계정을 일시 정지하거나 리스트를 정리하라고 요청합니다.

[이메일 유효성 검사 도구](/email-checker)는 아무것도 보내기 전에 주소가 존재하는지 받는 쪽 서버에 묻습니다. 쓰이지 않는 주소를 먼저 지우므로, Return-Path에 도착하는 반송이 크게 줄어듭니다.
