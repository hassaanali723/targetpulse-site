---
title: Hard bounce
description: What a hard bounce is, the codes that mark one, the two kinds that look the same in your report, and what to do with each.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: hard bounce
short: A hard bounce is an email that was rejected for good. The address does not exist, the domain does not exist, or the receiving server has blocked you, and sending again will produce the same result.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Find the addresses that would hard bounce before you send
---

## What a hard bounce means

A hard bounce is a permanent failure. The receiving server looked at your email and refused it. It also said that trying again will not help.

The email standard, RFC 5321, calls this a permanent negative reply. The code in the bounce message starts with a 5, for example `550 5.1.1`. A code that starts with a 4 is a [soft bounce](/glossary/soft-bounce), which is temporary.

## The two kinds of hard bounce

Both look the same in a campaign report. They need different fixes.

**The address is bad.** The mailbox does not exist, the domain does not exist, or the address is spelled wrong. Gmail returns `550 5.1.1 The email account that you tried to reach does not exist`. Microsoft returns `5.1.1 Bad destination mailbox address`. An address that was closed when someone left a company lands here too.

**You are blocked.** The address is real, but the server will not accept mail from you. These carry codes that start with `5.7`. Gmail's `550 5.7.26` means your domain is not authenticated. Microsoft's `5.7.23` means your email failed SPF. Your tool files these as hard bounces because the code starts with 5, but the address is fine and the problem is on your side.

## Why hard bounces matter

Mailbox providers count how often you send to addresses that do not exist. A list full of hard bounces looks like a list nobody checked, which is what spam looks like from the outside. Amazon SES, one of the few senders that publishes its limits, puts an account under review at a 5 percent bounce rate and may pause it at 10 percent. It tells senders to stay under 2 percent.

## What to do with a hard bounce

Remove the address right away if the code is `5.1.1`, `5.1.2` or another address error. Do not retry it. Mailchimp removes these addresses from your audience automatically. Amazon's advice is to remove them "immediately".

Keep the address if the code starts with `5.7`. Fix your SPF, DKIM and DMARC records, or your sending reputation, and then send to the same address again.

The full breakdown of codes and actions is in the [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide.

## How a verifier handles it

A verifier asks the receiving server the same question the bounce would have asked, but before you send. An [email address checker](/email-checker) opens a connection to the mail server and asks whether it accepts mail for the exact address. If the answer is `550 5.1.1`, the address is marked invalid and you remove it before the campaign. No email is sent, so no reputation is spent.
