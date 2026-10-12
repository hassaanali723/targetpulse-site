---
title: Google Postmaster Tools
description: What Google Postmaster Tools shows about the email you send to Gmail, how to set it up, the spam rate limits Google publishes, and what it does not show.
slug: postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools is a free website from Google that shows how Gmail rates your sending domain. It reports your spam rate, domain reputation, IP reputation, authentication results and delivery errors for email sent to Gmail users.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools reports problems after the send. Verification prevents them
---

## What is Google Postmaster Tools?

Google Postmaster Tools is a free website from Google for people who send email. It shows how Gmail treats the email your domain sends to Gmail addresses.

A few words first. A domain is the name after the @ in your email address, such as example.com. DNS is the public directory where a domain publishes its settings. Each setting is called a record.

You add your domain and prove you own it by adding a DNS record. Google then shows you data about the email your domain sends to Gmail addresses. It is free. It is the only official source of information about how Gmail rates your domain.

It covers Gmail only. Email sent to Outlook.com, Yahoo or company mail servers does not appear. Microsoft has a separate service for its own network.

## A simple example

Here is how a small company might use it. The numbers are only an example.

1. **A travel company signs up.** Sunny Trips adds its domain, sunnytrips.example, to Google Postmaster Tools.
2. **It proves it owns the domain.** Google gives it a code. The company adds that code to its DNS as a record.
3. **It keeps sending.** It sends its weekly newsletter. Many of its customers use Gmail.
4. **Data appears.** Once enough email has gone to Gmail, Google Postmaster Tools starts to show charts.
5. **It spots a problem.** One week the spam rate rises to 0.25 percent. That means 25 of every 10,000 delivered emails were marked as spam by readers.
6. **It finds the cause.** The rise started when the company emailed a new list of people who never signed up. It stops using that list.

Without the dashboard, Sunny Trips would only have seen falling open rates, with no reason given.

## What it shows

- **Spam rate.** The percentage of your delivered email that Gmail users marked as spam. Google's sender guidelines refer to this number.
- **Domain reputation and IP reputation.** A rating for each: bad, low, medium or high. Your IP address is the number that identifies your sending server. High means Gmail rarely filters your email. Bad means most of your email goes to spam or is rejected.
- **Authentication.** The percentage of your email that passes [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc). These are records on your domain that prove an email really came from you.
- **Encryption.** The percentage of your email sent over TLS. TLS is a standard that encrypts email while it travels between servers.
- **Delivery errors.** The percentage of your email that Gmail rejected or delayed, with the reason.
- **Feedback loop.** Complaint rates per campaign, for large senders who use the Feedback-ID header. A header is a line of technical information at the top of an email.

## The limits Google publishes

Google's sender guidelines say:

1. Keep the spam rate shown in Postmaster Tools below 0.10 percent.
2. Never reach a spam rate of 0.30 percent or higher.
3. Senders of 5,000 or more messages a day must have SPF, DKIM and DMARC.
4. Marketing email from these senders must have one-click unsubscribe.

Senders who go above 0.30 percent get their email filtered or rejected. These limits are small. On 10,000 delivered emails, 0.30 percent is 30 complaints.

## What it does not show

Postmaster Tools reports on email that was delivered. It cannot show you addresses that do not exist. An email to a dead address is rejected during the SMTP connection. SMTP is the standard way mail servers send email to each other. That rejection is a bounce, the automatic message that says an email was not delivered.

Bounces are not part of the spam rate. A list with many invalid addresses can show a low spam rate while the bounce rate is damaging your reputation.

**Example:** a shop sends to 10,000 addresses, and 1,000 of them do not exist. Google Postmaster Tools shows a good spam rate, because it only counts the delivered emails. The 1,000 bounces do not appear in that number.

Postmaster Tools also needs volume. If your domain sends only a small amount of email to Gmail, the charts are empty. Google does not publish the minimum volume.

## How it works with verification

Postmaster Tools reports problems after you send. Verification removes the causes before you send. Running a list through an [email checker](/email-checker) removes addresses that bounce. It also removes disposable addresses and role addresses that cause complaints. A [bulk email verifier](/bulk-email-verifier) does this for a whole list in one upload. After that, Postmaster Tools has less to report.

[Email verification](/) does not change your Gmail ratings by itself. It stops you sending to addresses that do not exist. The [email bounce rate](/blog/how-to-reduce-email-bounce-rate) guide explains both sides.
