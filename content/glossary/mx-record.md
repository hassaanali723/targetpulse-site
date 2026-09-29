---
title: MX record
description: What an MX record is, how mail servers use it to find where to deliver email, what the priority number means, and what a missing MX record tells a verifier.
slug: mx-record
date: 2026-09-29
updated: 2026-09-29
keyword: mx record
short: An MX record is a DNS record that says which server receives email for a domain. When you send to name@example.com, your mail server looks up the MX record for example.com to find the server to deliver to.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Check if an address can receive email
---

## What an MX record is

MX stands for mail exchanger. An MX record is one type of DNS record. DNS is the public directory that connects domain names to servers. The MX records of a domain list the servers that accept incoming email for that domain.

A domain can have more than one MX record. Each record has a priority number. Servers with lower numbers are tried first. This is a typical setup for a Google Workspace domain:

| priority | mail server |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

If the server with priority 1 does not answer, the sending server tries the next one.

## How email uses MX records

When you send to `name@example.com`, your mail server does three things:

- It looks up the MX records for `example.com`.
- It connects to the server with the lowest priority number.
- It hands over the email using SMTP.

RFC 5321, the email standard, describes this process. It also covers domains with no MX record. If the domain has a normal A record, mail servers treat that record as the MX record.

## What an MX record tells you about an address

The MX record is the first real check in email verification. The syntax check comes before it.

- **No MX record and no A record.** The domain cannot receive email. Every address on that domain is invalid. A typo like `gmial.com` usually fails at this step.
- **MX record exists.** The domain can receive email. This does not tell you if the specific mailbox exists. That needs the next step: an SMTP conversation with the server.
- **MX record points to a known gateway.** If the mail server is Proofpoint, Mimecast or Barracuda, the domain uses a [secure email gateway](/glossary/secure-email-gateway). The mailbox check behaves differently on these domains.

## Why it matters for senders

Anyone can read the MX record of a domain with a DNS lookup. When a company changes email providers or shuts down, its MX records change or disappear. The addresses stop working. Nobody tells you. This is a common cause of hard bounces on old lists.

## How a verifier handles it

An [email address checker](/email-checker) looks up the MX record first. If there is no MX record, the address is marked invalid and no further checks run. If there is an MX record, the verifier connects to that server and asks if the mailbox exists. The MX lookup also tells the verifier what kind of server it is. This matters for [catch-all domains](/glossary/catch-all-email) and gateways.
