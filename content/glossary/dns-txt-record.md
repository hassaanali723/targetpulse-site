---
title: DNS TXT record
description: What a DNS TXT record is, what it is used for in email (SPF, DKIM and DMARC), how to add one, the rules that break it, and how to check it. With examples.
slug: dns-txt-record
date: 2026-10-22
updated: 2026-10-22
keyword: dns txt record
short: A DNS TXT record is a line of text stored in your domain's settings. Mail servers read TXT records to check SPF, DKIM and DMARC. Other services read them to confirm that you own the domain.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Your records are set. Now check the addresses you send to
---

## What is a DNS TXT record?

A DNS TXT record is a line of text stored in your domain's settings. Anyone on the internet can read it.

First, what DNS is. DNS stands for Domain Name System. It works like a public phone book for domains. When someone types your domain, DNS tells their computer where to find it. DNS holds different types of entries, called records. Each record type has one job.

A TXT record holds plain text. It does not send anyone anywhere. It is a note attached to your domain. Other systems read the note and act on it.

## What TXT records are used for

In email, TXT records hold the rules that prove your emails are real.

| Use | Where the record goes | Example value |
|---|---|---|
| **[SPF](/glossary/spf)** | your domain, for example `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Domain ownership** | your domain | `google-site-verification=abc123...` |

The values above are shortened examples. Your real values come from your email provider or the service you are connecting.

## A simple example

Here is how a TXT record is added.

1. **Marco starts using Google Workspace.** He wants his emails from marco@studio.example to reach inboxes.
2. **Google gives him a value.** The setup guide tells him to add an SPF record with `v=spf1 include:_spf.google.com ~all`.
3. **Marco opens his domain settings.** He logs in where he bought the domain. This is called the registrar or DNS host.
4. **He adds a TXT record.** He chooses the type TXT, leaves the name as his domain and pastes the value.
5. **He waits.** The change can take from a few minutes to a few hours to show everywhere.
6. **Servers can now check him.** When Marco sends an email, the receiving server reads his TXT record. It sees that Google's servers are allowed to send for studio.example.

## Rules that break TXT records

Most problems with TXT records come from a few simple mistakes.

- **Only one SPF record per domain.** If a domain has two TXT records that start with `v=spf1`, SPF fails. Join them into one record instead.
- **Long values are split.** One piece of text in a TXT record can hold up to 255 characters. Long values, such as DKIM keys, are stored as several pieces. Most DNS hosts do this for you.
- **Use the exact name.** A DMARC record must sit at `_dmarc`, not at your main domain. A DKIM record must sit at the selector name your provider gives you.
- **Copy the value exactly.** One missing character makes the record useless.

## How to check a TXT record

You can read the TXT records of any domain. On a Mac or Linux computer, open the terminal and type `dig TXT example.com`. On Windows, type `nslookup -type=TXT example.com`.

You can also use our [SPF checker](/spf-checker). It reads the SPF record of a domain and explains what it allows.

## How TXT records relate to verification

TXT records protect the email you send. They prove the email comes from you. They say nothing about whether the person you write to still has a mailbox.

That is a different check. An [email checker](/email-checker) asks the receiving server whether an address exists. You need both: correct records on your domain, and a clean list of real addresses.
