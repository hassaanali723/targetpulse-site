---
title: PTR record
description: What a PTR record is, why mail servers check it, what happens when a sending IP has no PTR record, and how to set one up.
slug: ptr-record
date: 2026-09-29
updated: 2026-09-29
keyword: ptr record
short: A PTR record is the reverse of a normal DNS record. It maps an IP address back to a hostname. Mail servers check the PTR record of the IP that is sending to them, and some reject mail from IPs that have none.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Check your list, not just your DNS
---

## What a PTR record is

A normal DNS record maps a name to an IP address: `mail.example.com` points to `203.0.113.10`. A PTR record does the opposite. It maps `203.0.113.10` back to `mail.example.com`. This is called reverse DNS.

PTR stands for pointer. The record does not live in your domain's DNS. It lives in a special zone owned by whoever controls the IP address, usually your hosting company or email provider. To set or change a PTR record, you ask them.

## Why mail servers check it

When your server connects to a receiving server, the receiver sees your IP address. It looks up the PTR record for that IP. Then it checks two things. Does the IP have a PTR record at all? And does the hostname in that record point back to the same IP?

A match is a basic sign that the sender is a real mail server that someone set up on purpose. No PTR record is a sign of a home connection, a compromised machine, or a server nobody configured. Spam often comes from those.

## What happens without one

Some providers reject the mail outright. Gmail's error reference lists `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. That is a permanent rejection, so your sending tool records it as a [hard bounce](/glossary/hard-bounce) against an address that exists.

Others do not reject but score the mail lower, which pushes it toward the spam folder.

## How to set it up

- Find the IP address your mail is sent from.
- Decide the hostname it should map to, for example `mail.yourdomain.com`.
- Make sure that hostname has a normal DNS record pointing to the same IP.
- Ask your hosting or email provider to set the PTR record for the IP to that hostname.

If you send through a service like Google Workspace, Microsoft 365, SendGrid or Amazon SES, the provider owns the sending IPs and the PTR records are already in place. You only deal with PTR records when you run your own mail server or use a dedicated IP address.

## PTR records and verification

A PTR record is about the sender's IP, not the recipient's address. An [email address checker](/email-checker) does not need one to verify your list. But a verifier that connects to mail servers needs good PTR records on its own IPs, otherwise receiving servers refuse to talk to it. That is one of the reasons a verification service gets different answers than a script run from a laptop.
