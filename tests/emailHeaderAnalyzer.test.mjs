import test from 'node:test'
import assert from 'node:assert/strict'
import {
  decodeRfc2047,
  extractHeaderBlock,
  parseRawHeaders,
  analyzeEmailHeaders,
} from '../lib/tools/emailHeaderAnalyzerPure.ts'

test('decodeRfc2047 decodes UTF-8 and ISO-8859-1 encoded words', () => {
  const utf8 = '=?UTF-8?B?VGVzdCBTdWJqZWN0?='
  assert.equal(decodeRfc2047(utf8), 'Test Subject')

  const q = '=?ISO-8859-1?Q?Hello_World=21?='
  assert.equal(decodeRfc2047(q), 'Hello World!')

  const adjacent = '=?UTF-8?B?SGVsbG8=?= =?UTF-8?B?V29ybGQ=?='
  assert.equal(decodeRfc2047(adjacent), 'HelloWorld')
})

test('extractHeaderBlock cuts off at first empty line', () => {
  const full = `From: alice@example.com\r\nTo: bob@example.com\r\n\r\nHello Bob,\r\nSubject: Fake\r\n`
  const headers = extractHeaderBlock(full)
  assert.ok(headers.includes('From: alice@example.com'))
  assert.ok(headers.includes('To: bob@example.com'))
  assert.ok(!headers.includes('Hello Bob'))
  assert.ok(!headers.includes('Subject: Fake'))
})

test('parseRawHeaders handles folded headers properly', () => {
  const raw = `Received: by mail.example.com\r\n with ESMTP\r\n id abc; Fri, 27 Nov 2026 12:00:00 +0000\r\nSubject: Test`
  const list = parseRawHeaders(raw)
  assert.equal(list.length, 2)
  assert.equal(list[0].name, 'Received')
  assert.ok(list[0].rawValue.includes('with ESMTP id abc'))
  assert.equal(list[1].name, 'Subject')
})

test('analyzeEmailHeaders analyzes complete header flow with hops and auth', () => {
  const sample = `Delivered-To: recipient@company.com
Received: by 2002:a05:6808:148b:b0:3c8:4e62:9a1e with SMTP id w11csp123;
        Fri, 27 Nov 2026 10:00:05 -0800 (PST)
Authentication-Results: mx.google.com;
       dkim=pass header.i=@sender.org header.s=s2026 header.b=AbCdEf;
       spf=pass (google.com: domain of bounce@sender.org designates 149.72.100.25 as permitted sender) smtp.mailfrom=bounce@sender.org;
       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=sender.org
Received: from mail.sender.org (mail.sender.org. [149.72.100.25])
        by mx.google.com with ESMTPS id abc123def
        for <recipient@company.com>
        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384);
        Fri, 27 Nov 2026 10:00:02 -0800 (PST)
Received: from internal.sender.local (10.0.0.5) by mail.sender.org with SMTP;
        Fri, 27 Nov 2026 10:00:00 -0800 (PST)
From: "Marketing Team" <newsletter@sender.org>
Reply-To: support@sender.org
Return-Path: <bounce@sender.org>
To: recipient@company.com
Subject: =?UTF-8?B?WW91ciBXZWVrbHkgVXBkYXRl?=
Date: Fri, 27 Nov 2026 18:00:00 +0000
Message-ID: <msg-12345@sender.org>
List-Unsubscribe: <https://sender.org/unsub?id=123>, <mailto:unsub@sender.org>
List-Unsubscribe-Post: List-Unsubscribe=One-Click

Hello recipient!
`

  const result = analyzeEmailHeaders(sample)

  // Summary
  assert.equal(result.summary.spfStatus, 'pass')
  assert.equal(result.summary.dkimStatus, 'pass')
  assert.equal(result.summary.dmarcStatus, 'pass')
  assert.equal(result.summary.authservId, 'mx.google.com')
  assert.equal(result.summary.hopCount, 3)
  assert.equal(result.summary.hasClockSkew, false)
  assert.equal(result.summary.totalDelaySeconds, 5)

  // Metadata
  assert.equal(result.metadata.fromAddress, 'newsletter@sender.org')
  assert.equal(result.metadata.fromDomain, 'sender.org')
  assert.equal(result.metadata.replyToAddress, 'support@sender.org')
  assert.equal(result.metadata.returnPathAddress, 'bounce@sender.org')
  assert.equal(result.metadata.subject, 'Your Weekly Update')
  assert.equal(result.metadata.hasOneClickUnsubscribe, true)

  // Hops order: bottom-to-top (Origin hop 1 -> Final hop 3)
  assert.equal(result.hops[0].hopNumber, 1)
  assert.equal(result.hops[0].ip, '10.0.0.5')
  assert.equal(result.hops[0].isPublicIp, false)

  assert.equal(result.hops[1].hopNumber, 2)
  assert.equal(result.hops[1].ip, '149.72.100.25')
  assert.equal(result.hops[1].isPublicIp, true)
  assert.equal(result.hops[1].tlsEncrypted, true)
  assert.ok(result.hops[1].tlsDetail.includes('TLS1_3') || result.hops[1].tlsDetail.includes('ESMTPS'))

  assert.equal(result.hops[2].hopNumber, 3)

  // Auth block
  assert.equal(result.authResults.length, 1)
  assert.equal(result.authResults[0].authservId, 'mx.google.com')
  assert.equal(result.authResults[0].methods.length, 3)
})

test('analyzeEmailHeaders flags clock skew when hop timestamps go backwards', () => {
  const sample = `Received: by hop2.example.com; Fri, 27 Nov 2026 10:00:00 +0000\r\nReceived: by hop1.example.com; Fri, 27 Nov 2026 10:00:10 +0000\r\nFrom: sender@example.com\r\n\r\nBody`
  const result = analyzeEmailHeaders(sample)
  assert.equal(result.hops.length, 2)
  assert.equal(result.hops[1].clockSkew, true)
  assert.ok(result.hops[1].delayLabel.includes('Clock skew'))
  assert.equal(result.summary.hasClockSkew, true)
})
