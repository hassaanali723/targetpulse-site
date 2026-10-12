---
title: PTR record
description: What a PTR record is, why mail servers check it, what happens when a sending IP address has no PTR record, and how to set one up.
slug: ptr-record
date: 2026-09-29
updated: 2026-10-12
keyword: ptr record
short: A PTR record is a DNS record that connects an IP address to a server name. It is the reverse of a normal DNS record. Mail servers check the PTR record of the IP address that sends to them, and some reject email from an IP address with no PTR record.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Check your list, not only your DNS
---

## What is a PTR record?

A PTR record is a setting that connects an IP address to a server name. PTR stands for pointer.

A few words first. A server is a computer that runs all the time, for example to send email. An IP address is the number that identifies a server on the internet, such as `203.0.113.10`. A hostname is the name of one server, such as `mail.example.com`. DNS is the public directory that connects names and numbers. Each entry in DNS is called a record.

A normal DNS record connects a name to an IP address. For example, `mail.example.com` points to `203.0.113.10`. A PTR record does the opposite. It connects `203.0.113.10` to `mail.example.com`. This is called reverse DNS.

The PTR record is not in your domain's DNS. It is in a separate DNS zone that belongs to the owner of the IP address. A zone is the set of DNS records that one owner controls. The owner is usually your hosting company or your email provider. To set or change a PTR record, you ask them.

## A simple example

Here is what happens when a sending server has no PTR record.

1. **A company sets up a mail server.** Green Garden Ltd runs its own mail server at the IP address `203.0.113.10`.
2. **It sends an email.** The server sends a newsletter to a customer with a Gmail address.
3. **Gmail looks up the PTR record.** Gmail sees the IP address `203.0.113.10`. It asks DNS which name belongs to it.
4. **There is no answer.** Nobody has set a PTR record for that IP address.
5. **Gmail rejects the email.** It returns the code `550 5.7.25`. The message says the sending IP address does not have a PTR record.
6. **Green Garden fixes it.** It asks its hosting company to set the PTR record for `203.0.113.10` to `mail.greengarden.example`.
7. **The next email passes this check.** Gmail looks up the PTR record again and finds a name that points back to the same IP address.

The customer's address was fine the whole time. Only the sender's setup was missing.

## Why mail servers check it

When your server connects to a receiving server, the receiving server sees your IP address. It looks up the PTR record for that IP. Then it checks two things:

1. Does the IP address have a PTR record?
2. Does the hostname in the PTR record point back to the same IP address?

**Example:** the PTR record for `203.0.113.10` says `mail.greengarden.example`. The normal DNS record for `mail.greengarden.example` says `203.0.113.10`. Each one points to the other, so both answers are yes.

If both are true, the sender looks like a real mail server that someone set up on purpose. If there is no PTR record, the sender looks like one of three things:

- a home internet connection;
- an infected computer;
- a server that nobody configured.

Spam often comes from these.

## What happens without a PTR record

Some providers reject the email. Gmail's error reference lists `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. This is a permanent rejection. Your sending tool records it as a [hard bounce](/glossary/hard-bounce), even though the address exists. A hard bounce is an email that was refused for good.

Other providers accept the email but give it a lower score. A lower score means the email is more likely to go to the spam folder. So a missing PTR record can hurt you even when no error comes back.

## How to set up a PTR record

1. Find the IP address your email is sent from.
2. Choose the hostname it should point to. Example: `mail.example.com`.
3. Make sure that hostname has a normal DNS record pointing to the same IP address.
4. Ask your hosting company or email provider to set the PTR record for the IP address to that hostname.
5. Run a reverse DNS lookup on the IP address. It should show the hostname you chose in step 2.

If you send through Google Workspace, Microsoft 365, SendGrid or Amazon SES, the provider owns the sending IP addresses. The PTR records are already set. You only need to set a PTR record if you run your own mail server or use a dedicated IP address. A dedicated IP address is one that only your company sends email from.

## PTR records and verification

A PTR record is about the sender's IP address. It is not about the recipient's address. An [email checker](/email-checker) does not need your PTR record to verify your list. A [bulk email verifier](/bulk-email-verifier) does not need it either.

A verifier does need a PTR record on each of its own IP addresses. Without them, receiving servers refuse to talk to it. This is one reason a verification service gets different answers than a script run from a laptop. [Email verification](/) checks that the addresses on your list exist. Your own PTR record is a separate setting that you fix with your hosting company or email provider.
