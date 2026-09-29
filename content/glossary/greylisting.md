---
title: Greylisting
description: What greylisting is, why a server rejects your first email and accepts the second, how long the delay usually is, and how it affects verification results.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: Greylisting is a spam defence. A mail server rejects the first email from a sender it does not know. It accepts the same email when the sender tries again a few minutes later. Real mail servers retry. Most spam software does not.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Get a real answer on addresses that greylist your checks
---

## What greylisting is

Greylisting is a spam defence that works with a delay. It is described in RFC 6647.

A receiving server keeps a record of every sender it has seen. The server looks at three things: the sending IP address, the sender address and the recipient address. If it has not seen this combination before, it rejects the email with a temporary error. A properly configured mail server puts the email in a queue and tries again. Most spam software sends once and does not retry.

When the retry arrives, the server accepts the email and saves the sender in its record. After that, email from the same sender is accepted on the first try.

## What it looks like for the sender

The first attempt gets a code that starts with 4. It is usually `450` or `451`, with a message like "greylisted, try again later". Your mail server treats this as a [soft bounce](/glossary/soft-bounce) and retries on its own schedule.

The receiving server decides how long to wait before accepting the retry. About 15 minutes is common. Some servers use a shorter or longer delay.

Usually you do not notice greylisting. The email arrives a few minutes late. If your tool shows a bounce notice at all, it clears by itself.

## When greylisting matters

Greylisting does not affect a normal campaign. It matters in two cases.

**Time-sensitive emails.** A password reset or a one-time code that arrives 15 minutes late is useless to the user. For this reason, senders of transactional email sometimes ask receiving domains to add their IP addresses to an allow list.

**Verification.** A verifier checks an address by starting an SMTP conversation and stopping before it sends anything. On a greylisting server, the first attempt gets a `4xx` answer. A verifier that stops after one attempt reports the address as unknown. The address may be valid.

## Greylisting and secure email gateways

Many company domains use a [secure email gateway](/glossary/secure-email-gateway) such as Proofpoint or Mimecast. These gateways greylist unknown senders by default. This is one reason a basic check returns unknown for many B2B addresses.

## How a verifier handles it

A good [email address checker](/email-checker) treats a `4xx` answer as "try again", not as a result. It waits, retries from the same IP address, and reports the answer the server gives after the greylisting delay. Giggal.ai does this when it resolves gateway domains. This is how it returns valid or invalid where a single-attempt check returns unknown.
