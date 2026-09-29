---
title: Mailer-daemon
description: What a mailer-daemon message is, why you receive one, how to read the code inside it, and what to do when you get one for an email you did not send.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: The mailer-daemon is the part of a mail server that sends automatic messages. Most of these messages are bounce notices. A message from mailer-daemon means an email you sent was not delivered.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Remove the addresses that bounce before you send
---

## What a mailer-daemon is

A daemon is a program that runs in the background on a server. The mailer-daemon is the program that handles email that cannot be delivered. When your email is rejected, the mailer-daemon sends you a notice. The sender name is usually `MAILER-DAEMON@` followed by the server's domain, or `postmaster@`.

The notice is called a [non-delivery report](/glossary/ndr). It tells you which address failed, when it failed, and why.

## How to read the message

The important part of the message is the code. Look for a three-digit number and a number with dots. Example: `550 5.1.1`.

- A code that starts with **5** is a [hard bounce](/glossary/hard-bounce). The address does not exist, or the server blocked your email. Do not send again until you know which one it is.
- A code that starts with **4** is a [soft bounce](/glossary/soft-bounce). The inbox is full or the server is busy. Your mail server will retry by itself.

The text next to the code is written by the receiving server. Two examples:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Microsoft's documentation says this means "the recipient's address doesn't exist".

## Mailer-daemon messages for emails you did not send

Sometimes you get a bounce notice for an email you never sent. This is called [backscatter](/glossary/backscatter). A spammer put your address in the From field of their emails. When those emails bounce, the notices go to you.

Your account was not hacked. The fix is on your domain. Publish SPF, DKIM and DMARC records. Then receiving servers can reject the fake emails instead of sending bounce notices to you.

## Why it matters for senders

Every mailer-daemon message is a bounce. Mailbox providers count how many of your emails go to addresses that do not exist. Many `5.1.1` notices tell them you did not check your list.

## How a verifier helps

An [email address checker](/email-checker) asks the receiving server if it accepts email for an address. It does this before you send anything. The server gives the same code the mailer-daemon would send you later. The difference is that no email was sent and your reputation is not affected.
