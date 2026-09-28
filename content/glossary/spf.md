---
title: SPF record
description: What an SPF record is, what it looks like, how receiving servers use it, the ten-lookup limit, and the bounce codes you get when it fails.
slug: spf
date: 2026-09-29
updated: 2026-09-29
keyword: spf record
short: An SPF record is a line in your domain's DNS that lists the servers allowed to send email for that domain. Receiving servers check it to decide whether an email that claims to come from you really did.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Authentication fixes one kind of bounce. Verification fixes the other
---

## What an SPF record is

SPF stands for Sender Policy Framework. It is defined in RFC 7208. The record is a [DNS TXT record](/glossary/dns-txt-record) on your domain. It says: these are the servers that may send email using my domain name.

A simple SPF record looks like this:

`v=spf1 include:_spf.google.com -all`

Read it left to right. `v=spf1` says this is an SPF record. `include:_spf.google.com` says any server that Google lists may send for this domain. `-all` says reject everything else. A softer ending, `~all`, says treat everything else as suspicious but do not reject it.

## How receiving servers use it

When an email arrives, the receiving server looks at the domain in the [Return-Path](/glossary/return-path), the address bounces go back to. It fetches that domain's SPF record. Then it checks whether the IP address that delivered the email is on the list.

- **Pass.** The IP is listed. The email is who it says it is.
- **Fail.** The IP is not listed and the record ends in `-all`. The server may reject the email.
- **Softfail.** The IP is not listed and the record ends in `~all`. The email is accepted but marked.

Microsoft Exchange Online rejects a failing email with `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail's `550 5.7.26` covers a message that is not authenticated at all. Both codes start with a 5, so your sending tool records them as [hard bounces](/glossary/hard-bounce), even though the address was fine.

## Who has to have one

Everyone who sends bulk mail. Google's sender guidelines require SPF and DKIM for anyone sending 5,000 or more messages a day to Gmail, plus DMARC. Microsoft has enforced the same three records for domains sending over 5,000 a day to Outlook.com, Hotmail and Live since 5 May 2025. Below that volume the records are still the difference between the inbox and the spam folder.

## The ten-lookup limit

RFC 7208 limits an SPF check to ten DNS lookups. Every `include:`, `a`, `mx` and `redirect` in your record counts, and so do the lookups inside the records you include. Go over ten and the check returns a permanent error, which most receivers treat as a fail. This is the most common way a correct-looking SPF record breaks: a company adds one tool after another until the eleventh lookup silently turns the whole record off.

## SPF is one of three

SPF checks the sending server. [DKIM](/glossary/dkim) checks that the message was not changed in transit. [DMARC](/glossary/dmarc) ties the two to the visible From address and tells receivers what to do when they fail. A domain needs all three. The [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide shows what the failure codes look like in a bounce report.
