---
title: DMARC
description: What DMARC is, why it exists, how it uses SPF and DKIM, the three DMARC policies, a simple DMARC record explained, and who requires it.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: dmarc
short: DMARC is a rule you publish in your domain's DNS. It tells receiving servers what to do with an email that claims to be from your domain but fails SPF and DKIM. It also tells them where to send you reports.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC protects your domain. Verification protects your bounce rate
---

## What is DMARC?

DMARC stands for Domain-based Message Authentication, Reporting and Conformance. It is a rule you publish in DNS. DNS is the public directory where a domain lists its settings. The rule answers one question for receiving servers. What should happen to an email that uses your domain in the From address but fails the checks?

The From address is the sender address people see in their inbox. Without DMARC, anyone can put your domain there. With DMARC, you can ask Gmail, Outlook.com and other providers to send such emails to spam or block them. You can also ask them to send you reports about every server that sends email in your name.

## An example: a fake invoice from billing@example.com

Example Ltd sends its real invoices from billing@example.com. A scammer wants to trick its customers. Here is what happens.

1. The scammer sends an email from their own server. The From address says billing@example.com. The subject says "Invoice overdue, pay today".
2. The email reaches Tom, one of the company's customers.
3. Tom's email provider runs two checks. [SPF](/glossary/spf) checks whether the sending server is allowed to send for example.com. It is not. [DKIM](/glossary/dkim) checks for a valid signature from example.com. There is none.
4. The provider looks up the DMARC record of example.com. The record says `p=reject`.
5. The provider blocks the email. Tom never sees it.

Without a DMARC record, step 4 finds nothing. The provider then decides on its own, and the fake invoice might reach Tom's inbox.

Receivers treat your policy as a request. They can also apply their own spam filters next to it.

## How DMARC decides: alignment

SPF and DKIM each check a domain. But this domain can be different from the one in the From address. A scammer can pass SPF for their own domain, such as scam-mail.example, while the From address shows example.com.

DMARC adds one rule to fix this. SPF or DKIM must pass for the same domain that appears in the From address. This match is called alignment. Only one of the two checks needs to pass and match. The [DMARC alignment](/glossary/dmarc-alignment) page explains the relaxed and strict versions of this rule.

## The three DMARC policies

The policy is the `p=` part of the record. It has three possible values.

| Policy | What happens to an email that fails DMARC | When to use it |
| --- | --- | --- |
| `p=none` | It is delivered as normal. You only get reports. | At the start, while you find all your senders |
| `p=quarantine` | It goes to the spam folder. | When all your real senders pass |
| `p=reject` | It is blocked and never reaches a mailbox. | When you are sure no real email fails |

## A simple DMARC record

A DMARC record is a [DNS TXT record](/glossary/dns-txt-record) at the name `_dmarc`. For example.com, it sits at `_dmarc.example.com`. Here is a simple record:

```text
v=DMARC1; p=none; rua=mailto:reports@example.com
```

It has three parts, separated by semicolons.

- `v=DMARC1` says this is a DMARC record. It must come first.
- `p=none` is the policy. Here it says: do nothing special, only report.
- `rua=mailto:reports@example.com` is the address that receives the daily summary reports.

A domain may have only one DMARC record. If a receiving server finds two, it ignores both. The guide [what is a DMARC record](/blog/what-is-a-dmarc-record) explains every other tag and how to read the reports.

## How to start with DMARC

Most domains move up in three steps.

1. Publish a record with `p=none` and a `rua` address. Nothing changes for your email, and the reports start arriving.
2. Read the reports. They list every server that sends email as your domain. Make sure each real service passes SPF or DKIM for your domain. Your newsletter tool and your help desk are two examples.
3. Move to `p=quarantine`. When no real email goes to spam, move to `p=reject`.

The standard says getting every real sender to pass can take many months. Services that send rarely, such as billing tools, are easy to miss. Our [DMARC generator](/dmarc-generator) builds the record for each step.

Before you use `p=reject`, make sure all your email is signed with DKIM. Forwarding breaks SPF. A reject policy that depends on SPF alone can block real forwarded email.

## Who requires DMARC

Google's sender guidelines require a DMARC record from senders of 5,000 or more emails a day to personal Gmail accounts. Microsoft has the same rule for Outlook.com, Hotmail and Live. It started enforcing it on 5 May 2025. For both, `p=none` meets the minimum. The From domain must also align with SPF or DKIM.

The current DMARC standard is RFC 9989, published in May 2026. It replaced RFC 7489. Records that start with `v=DMARC1` keep working.

## DMARC and email verification

DMARC protects your domain from people who send email in your name. It does nothing about the addresses on your own list. An email to a mailbox that no longer exists bounces, even when it passes DMARC. An [email checker](/email-checker) finds those addresses before you send, and a [bulk email verifier](/bulk-email-verifier) finds them in a full list. With [email verification](/) your bounce rate stays low, and DMARC stops scammers from using your domain.
