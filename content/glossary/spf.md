---
title: SPF record
description: What an SPF record is, what it looks like, how receiving servers check it, the limit of ten DNS lookups, and the bounce codes you get when the check fails.
slug: spf
date: 2026-09-29
updated: 2026-10-12
keyword: spf record
short: An SPF record is a line of text on your domain that lists the servers allowed to send email for that domain. Receiving servers check it to confirm that an email claiming to come from your domain was sent by one of your servers.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Authentication fixes one type of bounce. Verification fixes the other
---

## What is an SPF record?

An SPF record is a line of text on your domain that lists the servers allowed to send email for it. SPF stands for Sender Policy Framework. It is defined in RFC 7208.

A few words first. A domain is the name after the @ in an email address, such as example.com. A server is a computer that sends or receives email. DNS is the public directory where a domain publishes its settings. Each setting is called a record. An SPF record is a [DNS TXT record](/glossary/dns-txt-record), which is a DNS record that holds plain text.

A simple SPF record looks like this:

`v=spf1 include:_spf.google.com -all`

Each part has a meaning:

- `v=spf1` says this is an SPF record.
- `include:_spf.google.com` says every server that Google lists is allowed to send for this domain.
- `-all` says reject email from every other server.
- `~all` is a softer ending. It says treat email from other servers as suspicious but do not reject it.

## A simple example

Here is how one SPF record protects a small business.

1. **A bakery uses Google Workspace.** Rosa's Bakery sends its email from rosa@bakery.example through Google Workspace.
2. **It publishes an SPF record.** The record says `v=spf1 include:_spf.google.com -all`. This means only Google's servers may send email for bakery.example.
3. **Rosa emails a customer.** The email leaves from one of Google's servers.
4. **The customer's server checks.** It looks up the SPF record for bakery.example. Google's server is allowed, so the result is pass.
5. **Someone sends a fake email.** A scammer sends an email that claims to come from bakery.example. It comes from a server that is not in the record.
6. **The check fails.** The record ends with `-all`, so the customer's server may reject the fake email.

## How receiving servers check it

When an email arrives, the receiving server reads the domain in the [Return-Path](/glossary/return-path). The Return-Path is the address that bounces are sent to. A bounce is the automatic message that tells a sender an email was not delivered.

The server gets the SPF record for that domain. Then it checks if the IP address that delivered the email is in the record. An IP address is the number that identifies a server on the internet. There are three common results:

- **Pass.** The IP address is in the record. The email came from an allowed server.
- **Fail.** The IP address is not in the record and the record ends with `-all`. The server may reject the email.
- **Softfail.** The IP address is not in the record and the record ends with `~all`. The server accepts the email but marks it as suspicious.

Microsoft Exchange Online rejects a failing email with `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail returns `550 5.7.26` for an email that has no authentication at all. Both codes start with 5. Your sending tool records them as [hard bounces](/glossary/hard-bounce), even though the address is fine.

## Who needs an SPF record

Everyone who sends bulk email needs one. Google's sender guidelines require SPF and DKIM for senders of 5,000 or more messages a day to Gmail. They also require DMARC. Microsoft requires the same three records for domains that send more than 5,000 emails a day to Outlook.com, Hotmail and Live. Microsoft started enforcing this on 5 May 2025.

If you send less than that, the records still matter. Without them, your email is more likely to go to the spam folder.

## The limit of ten DNS lookups

RFC 7208 limits an SPF check to ten DNS lookups. A lookup is one question the receiving server asks DNS. Every `include:`, `a`, `mx` and `redirect` in your record counts as one lookup. Lookups inside the records you include also count. If the total is more than ten, the check returns a permanent error. Most receiving servers treat this error as a fail.

This is the most common way an SPF record breaks. A company adds one email tool after another to the record. When the eleventh lookup is added, the whole record stops working.

**Example:** a company's SPF record includes its office email, its newsletter tool, its help desk tool and its invoice tool. Some of those include other records inside them. Together they need 11 lookups. From that day, the SPF check fails for the company's email, even for email sent from its own office.

## SPF is one of three records

- SPF checks which server sent the email.
- [DKIM](/glossary/dkim) checks that the email was not changed after it was sent.
- [DMARC](/glossary/dmarc) connects both checks to the From address that the reader sees. It also tells receiving servers what to do when the checks fail.

A domain needs all three. The [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide shows what the failure codes look like in a bounce report.

## SPF records and email verification

An SPF record proves which servers may send email for your domain. It does not prove that the recipient's address exists. A correctly authenticated email to a dead address still bounces. An [email checker](/email-checker) asks the receiving server whether a mailbox exists before you send. A [bulk email verifier](/bulk-email-verifier) does the same for a whole list. A correct SPF record helps prevent authentication bounces such as `5.7.23`, and [email verification](/) finds the addresses that would bounce with codes such as `5.1.1`.
