---
title: Google Postmaster Tools
description: What Google Postmaster Tools shows about the email you send to Gmail, how to set it up, the spam rate limits Google publishes, and what it does not show.
slug: postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: Google Postmaster Tools is a free dashboard from Google. It shows how Gmail rates your sending domain. It reports your spam rate, domain reputation, IP reputation, authentication results and delivery errors for email sent to Gmail users.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools reports problems after the send. Verification prevents them
---

## What Google Postmaster Tools is

Google Postmaster Tools is a website Google provides for email senders. You add your domain and prove you own it by adding a DNS record. Google then shows you data about the email your domain sends to Gmail addresses. It is free. It is the only official source of information about how Gmail rates your domain.

It covers Gmail only. Email sent to Outlook.com, Yahoo or company mail servers does not appear. Microsoft has a separate service for its own network.

## What it shows

- **Spam rate.** The percentage of your delivered email that Gmail users marked as spam. Google's sender guidelines refer to this number.
- **Domain reputation and IP reputation.** A rating for each: bad, low, medium or high. High means Gmail rarely filters your email. Bad means most of your email goes to spam or is rejected.
- **Authentication.** The percentage of your email that passes [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc).
- **Encryption.** The percentage of your email sent over TLS.
- **Delivery errors.** The percentage of your email that Gmail rejected or delayed, with the reason.
- **Feedback loop.** Complaint rates per campaign, for large senders who use the Feedback-ID header.

## The limits Google publishes

Google's sender guidelines say:

- Keep the spam rate shown in Postmaster Tools below 0.10 percent.
- Never reach a spam rate of 0.30 percent or higher.
- Senders of 5,000 or more messages a day must have SPF, DKIM and DMARC.
- Marketing email from these senders must have one-click unsubscribe.

Senders who go above 0.30 percent get their email filtered or rejected. These limits are small. On 10,000 delivered emails, 0.30 percent is 30 complaints.

## What it does not show

Postmaster Tools reports on email that was delivered. It cannot show you addresses that do not exist. An email to a dead address is rejected during the SMTP connection. That rejection is a bounce. Bounces are not part of the spam rate. A list with many invalid addresses can show a low spam rate while the bounce rate is damaging your reputation.

Postmaster Tools also needs volume. If your domain sends only a small amount of email to Gmail, the charts are empty. Google does not publish the minimum volume.

## How it works with verification

Postmaster Tools reports problems after you send. Verification removes the causes before you send. Running a list through an [email address checker](/email-checker) removes addresses that bounce. It also removes disposable addresses and role addresses that cause complaints. After that, Postmaster Tools has less to report. The [email bounce rate](/blog/how-to-reduce-email-bounce-rate) guide explains both sides.
