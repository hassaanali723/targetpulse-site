---
title: Google Postmaster Tools
description: What Google Postmaster Tools shows you about mail you send to Gmail, how to set it up, the spam rate limits Google publishes, and what the dashboards cannot tell you.
slug: postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: Google Postmaster Tools is a free dashboard from Google that shows how Gmail sees your sending domain. It reports your spam rate, domain and IP reputation, authentication results and delivery errors for mail sent to Gmail users.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools shows the damage. Verification prevents it
---

## What it is

Google Postmaster Tools is a website Google runs for senders. You add your domain, prove you own it by adding a DNS record, and Google starts showing you data about the mail your domain sends to Gmail addresses. It costs nothing. It is the only official window into how Gmail rates you.

It only covers Gmail. Mail to Outlook.com, Yahoo or company servers does not appear. Microsoft has a separate service for its own network.

## What it shows

- **Spam rate.** The share of your delivered mail that Gmail users marked as spam. This is the number Google's sender guidelines refer to.
- **Domain reputation and IP reputation.** A rating for each: bad, low, medium or high. High means Gmail rarely filters your mail. Bad means most of it is going to spam or being rejected.
- **Authentication.** The share of your mail that passes [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc).
- **Encryption.** The share of your mail sent over TLS.
- **Delivery errors.** The share of your mail Gmail rejected or deferred, with the reason.
- **Feedback loop.** For large senders who use the Feedback-ID header, complaint rates per campaign.

## The numbers Google publishes

Google's sender guidelines say to keep the spam rate reported in Postmaster Tools below 0.10 percent, and to avoid ever reaching a rate of 0.30 percent or higher. Senders who cross the higher line see their mail filtered or rejected. For senders of 5,000 or more messages a day, the guidelines also require SPF, DKIM and DMARC, and a one-click unsubscribe on marketing mail.

Those thresholds are small. On 10,000 delivered emails, 0.30 percent is 30 complaints.

## What it does not tell you

Postmaster Tools reports on mail that was delivered. It cannot show you the addresses that were never real. A dead address produces a bounce at the SMTP door, and bounces are not in the spam rate. So a list full of invalid addresses can show a clean spam rate while your bounce rate is destroying your reputation from the other side.

It also needs volume. Domains that send little mail to Gmail see empty charts, because Google does not show data below a threshold it does not publish.

## How it fits with verification

Postmaster Tools is the thermometer. Verification is the thing you do before the fever. Running a list through an [email address checker](/email-checker) removes the addresses that bounce and the disposable and role addresses that generate complaints. Then the dashboards have less to report. The [how to improve email deliverability](/blog/how-to-reduce-email-bounce-rate) guide puts the two together.
