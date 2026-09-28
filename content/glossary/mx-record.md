---
title: MX record
description: What an MX record is, how mail servers use it to find where email for a domain should go, what the priority number means, and what a missing MX record tells a verifier.
slug: mx-record
date: 2026-09-29
updated: 2026-09-29
keyword: mx record
short: An MX record is the DNS entry that says which server receives email for a domain. When you send to name@example.com, your mail server looks up the MX record for example.com to find where to deliver it.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Check whether an address can receive mail at all
---

## What an MX record is

MX stands for mail exchanger. It is one type of record in a domain's DNS, the public directory that maps domain names to servers. A domain's MX records list the hostnames of the servers that accept incoming email for it.

A domain can have several MX records. Each one carries a priority number. Lower numbers are tried first. A typical setup for a Google Workspace domain looks like this:

| priority | mail server |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

If the server with priority 1 does not answer, the sending server moves to the next one.

## How email uses it

When you send to `name@example.com`, your mail server does three things. It looks up the MX records for `example.com`. It connects to the server with the lowest priority number. It then hands over the message using SMTP. RFC 5321, the email standard, describes this lookup. It also says that a domain with no MX record but with a normal address record should be treated as if it had an MX record pointing at itself.

## What an MX record tells you about an address

The MX record is the first real check in email verification, after syntax.

- **No MX record and no address record.** The domain cannot receive email. Every address on it is invalid. A typo like `gmial.com` often fails here.
- **MX record exists.** The domain can receive email, but that says nothing about whether the specific mailbox exists. That needs the next step, an SMTP conversation with the server.
- **MX record points at a known gateway.** If the mail server is Proofpoint, Mimecast or Barracuda, the domain sits behind a [secure email gateway](/glossary/secure-email-gateway), which changes how the mailbox check behaves.

## Why it matters for senders

You can read the MX record of any domain with a DNS lookup, and so can a verifier. Domains whose MX records disappear are a common reason for hard bounces on old lists. The company changed mail providers, or shut down, and the addresses stopped working without anyone telling you.

## How a verifier handles it

An [email address checker](/email-checker) looks up the MX record first. If there is none, the address is marked invalid without any further work. If there is one, the verifier connects to that server and asks whether the mailbox exists. The MX lookup also tells the verifier what kind of server it is talking to, which matters for [catch-all domains](/glossary/catch-all-email) and gateways.
