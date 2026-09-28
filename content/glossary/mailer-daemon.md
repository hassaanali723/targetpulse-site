---
title: Mailer-daemon
description: What a mailer-daemon message is, why it lands in your inbox, how to read the code inside it, and when it is a sign that someone is spoofing your address.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: The mailer-daemon is the part of a mail server that sends automatic messages, most often bounce notices. A message from mailer-daemon means an email you sent could not be delivered.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Stop the bounces before the mailer-daemon has to tell you
---

## What a mailer-daemon is

A daemon is a program that runs in the background on a server. The mailer-daemon is the one that handles mail that cannot be delivered. When your email is rejected, the mailer-daemon writes a notice and sends it back to you. The sender name is usually `MAILER-DAEMON@` followed by the server's domain, or `postmaster@`.

The notice itself is a [non-delivery report](/glossary/ndr). It tells you which address failed, when, and why.

## How to read the message

The useful part is the code. Look for a three-digit number and a dotted number, for example `550 5.1.1`.

- A code that starts with **5** is a [hard bounce](/glossary/hard-bounce). The address does not exist, or the server has blocked you. Do not send again until you know which.
- A code that starts with **4** is a [soft bounce](/glossary/soft-bounce). The inbox is full or the server is busy. Your mail server will retry on its own.

The text next to the code is written by the receiving server. Gmail's `550 5.1.1 The email account that you tried to reach does not exist` is one example. Microsoft's `5.4.1 Recipient address rejected: Access denied` is another, and Microsoft's documentation explains it as "the recipient's address doesn't exist".

## Mailer-daemon messages for emails you never sent

Sometimes you get a bounce notice for an email you did not send. This is usually [backscatter](/glossary/backscatter). A spammer put your address in the From field of their emails. When those emails bounce, the notices come to you. Your account is not hacked. The fix is on your domain, not your mailbox: publishing SPF, DKIM and DMARC records lets receiving servers reject the forged mail instead of bouncing it back to you.

## Why it matters for a sender

Every mailer-daemon message is a bounce your reputation paid for. Mailbox providers count how many of your emails go to addresses that do not exist. A steady flow of `5.1.1` notices tells them you did not check your list.

## How a verifier helps

An [email address checker](/email-checker) asks the receiving server whether it will accept mail for an address, before you send anything. The answer is the same code the mailer-daemon would have sent you later, except no email went out and no reputation was spent.
