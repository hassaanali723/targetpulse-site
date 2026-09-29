---
title: PTR record
description: What a PTR record is, why mail servers check it, what happens when a sending IP address has no PTR record, and how to set one up.
slug: ptr-record
date: 2026-09-29
updated: 2026-09-29
keyword: ptr record
short: A PTR record is a DNS record that connects an IP address to a hostname. It is the reverse of a normal DNS record. Mail servers check the PTR record of the IP address that is sending to them. Some servers reject email from IP addresses that have no PTR record.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Check your list, not only your DNS
---

## What a PTR record is

A normal DNS record connects a name to an IP address. For example, `mail.example.com` points to `203.0.113.10`. A PTR record does the opposite. It connects `203.0.113.10` to `mail.example.com`. This is called reverse DNS.

PTR stands for pointer. The PTR record is not in your domain's DNS. It is in a separate DNS zone that belongs to the owner of the IP address. That is usually your hosting company or your email provider. To set or change a PTR record, you ask them.

## Why mail servers check it

When your server connects to a receiving server, the receiving server sees your IP address. It looks up the PTR record for that IP. Then it checks two things:

- Does the IP address have a PTR record?
- Does the hostname in the PTR record point back to the same IP address?

If both are true, the sender looks like a real mail server that someone set up on purpose. If there is no PTR record, the sender looks like one of three things: a home internet connection, an infected computer, or a server that nobody configured. Spam often comes from these.

## What happens without a PTR record

Some providers reject the email. Gmail's error reference lists `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. This is a permanent rejection. Your sending tool records it as a [hard bounce](/glossary/hard-bounce), even though the address exists.

Other providers accept the email but give it a lower score. A lower score means the email is more likely to go to the spam folder.

## How to set up a PTR record

- Find the IP address your email is sent from.
- Choose the hostname it should point to. Example: `mail.yourdomain.com`.
- Make sure that hostname has a normal DNS record pointing to the same IP address.
- Ask your hosting company or email provider to set the PTR record for the IP address to that hostname.

If you send through Google Workspace, Microsoft 365, SendGrid or Amazon SES, the provider owns the sending IP addresses. The PTR records are already set. You only need to set a PTR record if you run your own mail server or use a dedicated IP address.

## PTR records and verification

A PTR record is about the sender's IP address. It is not about the recipient's address. An [email address checker](/email-checker) does not need your PTR record to verify your list.

A verifier does need PTR records on its own IP addresses. Without them, receiving servers refuse to talk to it. This is one reason a verification service gets different answers than a script run from a laptop.
