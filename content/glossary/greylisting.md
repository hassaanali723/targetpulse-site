---
title: Greylisting
description: What greylisting is, why a server rejects your first email and accepts the second, how long the delay usually lasts, and what it does to verification results.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: Greylisting is when a mail server rejects the first email from a sender it does not know and accepts the same email when it is sent again a little later. Real mail servers retry. Most spam software does not.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Get a real answer on addresses that greylist your checks
---

## What greylisting is

Greylisting is a spam defence that costs the sender nothing but time. The idea is described in RFC 6647. A receiving server keeps a note of every sender it has seen. When mail arrives from a new combination of sending IP, sender address and recipient address, the server refuses it with a temporary error. A properly built mail server will queue the message and try again. Most spam tools send once and move on.

When the retry arrives, the server accepts it and remembers the sender. From then on, mail from that sender goes straight through.

## What it looks like from your side

The first attempt gets a code that starts with 4, usually `450` or `451`, with a message such as "greylisted, try again later". Your mail server treats that as a [soft bounce](/glossary/soft-bounce) and retries on its own schedule. The delay before the server will accept the retry is set by the receiver. Around 15 minutes is common, though some servers use a shorter or longer window.

You normally never see this happen. The email arrives a few minutes late and the bounce notice, if your tool shows one at all, clears itself.

## Why it matters

Greylisting is harmless for a normal send. It matters in two situations.

**Time-sensitive email.** A password reset or a one-time code that arrives 15 minutes late has already failed for the user. Transactional senders sometimes ask receiving domains to whitelist their IPs for this reason.

**Verification.** A verifier checks an address by starting a mail conversation and stopping before it sends anything. On a greylisting server the first attempt gets a `4xx` answer. A verifier that stops there reports the address as unknown when it may be perfectly valid.

## Greylisting and secure email gateways

Many company domains sit behind a [secure email gateway](/glossary/secure-email-gateway) such as Proofpoint or Mimecast. These gateways greylist unfamiliar senders as a matter of course. That is one of the reasons a standard check comes back unknown for a large share of B2B addresses.

## How a verifier handles it

A good [email address checker](/email-checker) treats a `4xx` answer as "ask again", not as a result. It waits, retries from the same IP, and reports the answer the server gives once the greylist window has passed. Giggal.ai does this as part of resolving gateway domains, which is how it returns a valid or invalid answer where a single-attempt check returns unknown.
