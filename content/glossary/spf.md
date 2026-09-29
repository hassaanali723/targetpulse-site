---
title: SPF record
description: What an SPF record is, what it looks like, how receiving servers check it, the limit of ten DNS lookups, and the bounce codes you get when the check fails.
slug: spf
date: 2026-09-29
updated: 2026-09-29
keyword: spf record
short: An SPF record is a DNS record on your domain that lists the servers allowed to send email for that domain. Receiving servers check it to confirm that an email claiming to come from your domain was sent by one of your servers.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Authentication fixes one type of bounce. Verification fixes the other
---

## What an SPF record is

SPF stands for Sender Policy Framework. It is defined in RFC 7208. An SPF record is a [DNS TXT record](/glossary/dns-txt-record) on your domain. It lists the servers that are allowed to send email using your domain name.

A simple SPF record looks like this:

`v=spf1 include:_spf.google.com -all`

Each part has a meaning:

- `v=spf1` says this is an SPF record.
- `include:_spf.google.com` says every server that Google lists is allowed to send for this domain.
- `-all` says reject email from every other server.
- `~all` is a softer ending. It says treat email from other servers as suspicious but do not reject it.

## How receiving servers check it

When an email arrives, the receiving server reads the domain in the [Return-Path](/glossary/return-path). The Return-Path is the address that bounces are sent to. The server gets the SPF record for that domain. Then it checks if the IP address that delivered the email is in the record.

- **Pass.** The IP address is in the record. The email came from an allowed server.
- **Fail.** The IP address is not in the record and the record ends with `-all`. The server may reject the email.
- **Softfail.** The IP address is not in the record and the record ends with `~all`. The server accepts the email but marks it as suspicious.

Microsoft Exchange Online rejects a failing email with `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail returns `550 5.7.26` for an email that has no authentication at all. Both codes start with 5. Your sending tool records them as [hard bounces](/glossary/hard-bounce), even though the address is fine.

## Who needs an SPF record

Everyone who sends bulk email needs one. Google's sender guidelines require SPF and DKIM for senders of 5,000 or more messages a day to Gmail. They also require DMARC. Microsoft requires the same three records for domains that send more than 5,000 emails a day to Outlook.com, Hotmail and Live. Microsoft started enforcing this on 5 May 2025.

If you send less than that, the records still matter. Without them, your email is more likely to go to the spam folder.

## The limit of ten DNS lookups

RFC 7208 limits an SPF check to ten DNS lookups. Every `include:`, `a`, `mx` and `redirect` in your record counts as one lookup. Lookups inside the records you include also count. If the total is more than ten, the check returns a permanent error. Most receiving servers treat this error as a fail.

This is the most common way an SPF record breaks. A company adds one email tool after another to the record. When the eleventh lookup is added, the whole record stops working.

## SPF is one of three records

- SPF checks which server sent the email.
- [DKIM](/glossary/dkim) checks that the email was not changed after it was sent.
- [DMARC](/glossary/dmarc) connects both checks to the From address that the reader sees. It also tells receiving servers what to do when the checks fail.

A domain needs all three. The [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide shows what the failure codes look like in a bounce report.
