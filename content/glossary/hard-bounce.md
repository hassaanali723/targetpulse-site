---
title: Hard bounce
description: What a hard bounce is, which codes mean hard bounce, the two types of hard bounce, and what to do with each type.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: hard bounce
short: A hard bounce is an email that the receiving server rejected permanently. The address does not exist, the domain does not exist, or the server blocked your email. Sending the same email again will fail again.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Find the addresses that would hard bounce before you send
---

## What a hard bounce is

A hard bounce is a permanent delivery failure. The receiving server rejected your email and will reject it again if you resend it.

The email standard RFC 5321 calls this a permanent negative reply. The code in the bounce message starts with 5. Example: `550 5.1.1`. A code that starts with 4 is a [soft bounce](/glossary/soft-bounce). A soft bounce is temporary.

## The two types of hard bounce

Both types show up as "hard bounce" in your campaign report. They have different causes and different fixes.

**Type 1: the address is bad.** The mailbox does not exist, the domain does not exist, or the address has a spelling mistake. Gmail returns `550 5.1.1 The email account that you tried to reach does not exist`. Microsoft returns `5.1.1 Bad destination mailbox address`. An address that was closed when an employee left the company is also in this group.

**Type 2: your email is blocked.** The address is real, but the server refuses email from you. These codes start with `5.7`. Gmail's `550 5.7.26` means your domain is not authenticated. Microsoft's `5.7.23` means your email failed the SPF check. Your sending tool counts these as hard bounces because the code starts with 5. But the address is fine. The problem is your email setup.

## Why hard bounces matter

Mailbox providers count how often you send to addresses that do not exist. Many hard bounces tell them your list was not checked. Amazon SES publishes its limits. It puts an account under review at a 5 percent bounce rate. It may pause the account at 10 percent. It recommends staying under 2 percent.

## What to do with a hard bounce

If the code is `5.1.1`, `5.1.2` or another address error, remove the address from your list now. Do not send to it again. Mailchimp removes these addresses from your audience automatically. Amazon tells senders to remove them "immediately".

If the code starts with `5.7`, keep the address. Fix your SPF, DKIM and DMARC records, or your sender reputation. Then send to the same address again.

The full table of codes and what to do with each one is in the [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide.

## How a verifier handles it

A verifier asks the receiving server the same question before you send. An [email address checker](/email-checker) connects to the mail server and asks if it accepts email for that exact address. If the server answers `550 5.1.1`, the verifier marks the address as invalid. You remove it before the campaign. No email was sent, so your reputation is not affected.
