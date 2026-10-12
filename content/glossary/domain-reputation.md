---
title: Domain reputation
description: What email domain reputation is, how it differs from IP reputation, what hurts it, how to check it, and how to protect your sending domain.
slug: domain-reputation
date: 2026-10-12
updated: 2026-10-12
keyword: domain reputation
short: Domain reputation is how much mailbox providers such as Gmail trust your sending domain. Your domain is the part of your email address after the @, such as example.com. A good domain reputation stays with you, even when you change sending services.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Protect your domain reputation before the next send
---

## What is domain reputation?

Your domain is the name after the @ in your email address. In anna@example.com, the domain is example.com. Mailbox providers such as Gmail, Outlook.com and Yahoo keep a history of the email that comes from each domain. They track bounces, spam complaints and authentication results. They also track how people react to the email. From this history, they decide how much to trust the domain. That level of trust is its domain reputation.

Providers can link each email to its real domain because of three records. [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc) prove which domain an email really comes from. A business may change its sending servers often, but it usually keeps its domain for years.

## An example: moving to a new ESP

A company called Brightline sends newsletters from news@brightline.com. It has used one ESP for three years. An ESP is a company that sends email for its customers, such as Mailchimp or Brevo.

Brightline decides to move to a different ESP. Here is what changes.

1. The new ESP sends from different servers, so the IP address changes. An IP address is the number that identifies a server on the internet.
2. The domain stays the same. Emails still come from news@brightline.com.
3. Gmail sees new IP addresses. But it recognises brightline.com and its DKIM signature.
4. Brightline's domain reputation goes with it. Its three years of history help its emails keep reaching the inbox.

The opposite is also true. If Brightline had a poor domain reputation, a new ESP would not fix it. The problem would stay with the domain.

## Domain reputation vs IP reputation

| | Domain reputation | IP reputation |
| --- | --- | --- |
| What it rates | Your sending domain, such as example.com | The server address your email leaves from |
| Changes when you switch ESP | No | Yes |
| Shared with other senders | No, only you use your domain | Often, on a shared IP |
| How the provider identifies it | By the domain in SPF, DKIM and DMARC | By the IP address that connects |

Providers use both. The [IP reputation](/glossary/ip-reputation) page explains the other half.

## What hurts domain reputation

- **Bounces.** Many emails to addresses that do not exist suggest a list that was bought or never cleaned.
- **Spam complaints.** Google's sender guidelines say to keep the spam rate below 0.10 percent and never reach 0.30 percent.
- **Spam traps.** These are addresses that exist only to catch senders with bad lists. See [spam trap](/glossary/spam-trap).
- **Missing authentication.** Without SPF, DKIM and DMARC, providers cannot be sure an email is really yours.
- **Sudden volume.** A new or quiet domain that suddenly sends thousands of emails matches what spammers do.

## How to check your domain reputation

There is no single public score. Each provider keeps its own view of your domain. These are the main ways to see it.

- **Google Postmaster Tools.** A free service from Google for email sent to Gmail users. You add your domain and prove you own it with a DNS record, a setting in your domain's public directory. It then shows data such as your spam rate and authentication results. See [Google Postmaster Tools](/glossary/postmaster-tools).
- **Your own numbers.** Falling open rates at one provider can mean your email is going to spam there.
- **Blacklist checks.** Tools such as MXToolbox show if your domain is on a public domain blacklist.

## How to protect your domain reputation

1. Set up SPF, DKIM and DMARC for every service that sends email as your domain.
2. Verify your list before each large send, and remove addresses that would bounce.
3. Send cold email from a separate domain or subdomain, such as brightline-mail.com or outreach.brightline.com. This keeps some distance between cold email and your main domain. Providers can still link a subdomain to its main domain.
4. Start slowly with a new domain. Send small daily volumes and raise them over several weeks. See [email warm-up](/glossary/email-warmup).
5. Make unsubscribing easy, so people unsubscribe instead of clicking "Report spam".

## Domain reputation and email verification

Bounces are one of the signals providers use to rate your domain, and you can control them before you send. An [email verifier](/email-checker) finds addresses that do not exist. A [bulk email verifier](/bulk-email-verifier) does the same for a full list, so your campaign goes to real mailboxes. Regular [email verification](/) also removes old addresses before they become recycled spam traps. It does not fix complaints or missing authentication, so the other steps above still apply.
