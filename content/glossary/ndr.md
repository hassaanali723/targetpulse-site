---
title: Non-delivery report (NDR)
description: What a non-delivery report is, who sends it, how to read the code and the parts inside it, and what to do when you get one. With a simple example.
slug: ndr
date: 2026-10-22
updated: 2026-10-22
keyword: non delivery report
short: A non-delivery report, or NDR, is an automatic email that tells you a message you sent was not delivered. It names the address that failed and gives a code that explains why. Most people call it a bounce message.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Remove the addresses that would send you an NDR
---

## What is a non-delivery report?

A non-delivery report, or NDR, is an automatic email that tells you a message was not delivered. It arrives a few seconds or a few hours after you send.

Most people call it a bounce message. The technical name in the email standards is a delivery status notification, or DSN. All three names mean the same thing.

An NDR usually comes from an address such as `MAILER-DAEMON@` or `postmaster@`. These are automatic senders on a mail server. Nobody writes these messages by hand. A program called the [mailer-daemon](/glossary/mailer-daemon) creates them.

## A simple example

Here is how an NDR reaches you.

1. **Ana sends an invoice.** Ana is a bookkeeper. She emails an invoice to a client at mark@oldfirm.example.
2. **The address is gone.** Mark left that company last year. His mailbox was deleted.
3. **The server refuses it.** The mail server at oldfirm.example has no mailbox for Mark. It rejects the email.
4. **The NDR arrives.** A minute later, Ana gets an email titled "Undeliverable" or "Delivery Status Notification (Failure)".
5. **Ana reads the code.** Inside she finds `550 5.1.1`. This code means the address does not exist.
6. **Ana fixes it.** She asks the client for a new contact and sends the invoice there.

The NDR did not cause the problem. It only told Ana about it.

## What an NDR contains

Most NDRs have the same parts, even if they look different in each email app.

| Part | What it shows |
|---|---|
| **Failed address** | The address that could not receive your email |
| **Error code** | A short code, for example `550 5.1.1`, that explains the problem |
| **Server message** | A sentence from the receiving server, for example "user unknown" |
| **Your original email** | Often attached, so you can see what failed |

## How to read the code

The first digit of the code tells you the type of problem.

| First digit | Type | What it means | What to do |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | The failure is permanent. The address may not exist, or the server blocked you. | Do not send to the address again until you know which one it is. |
| **4** | [Soft bounce](/glossary/soft-bounce) | The failure is temporary. The inbox may be full or the server busy. | Wait. Your mail server tries again by itself. |

Two common examples:

- `550 5.1.1` means the address does not exist. Remove it from your list.
- `452 4.2.2` means the mailbox is full. Try again later.

## When you get an NDR for an email you did not send

Sometimes an NDR arrives for an email you never wrote. This is called [backscatter](/glossary/backscatter). A spammer put your address in the sender field, the email failed, and the NDR came to you. Your account was usually not hacked. Publishing SPF, DKIM and DMARC records for your domain helps receiving servers reject the fake emails instead.

## Why NDRs matter for senders

Each NDR from a dead address counts against you. Mailbox providers such as Google and Microsoft watch how many of your emails go to addresses that do not exist. Many NDRs with `5.1.1` tell them your list is old.

**Example:** a shop sends an offer to 5,000 old contacts. If 400 NDRs come back, that is 8% of the list. Many sending platforms review or pause accounts with numbers like that. These numbers are only an example.

## How a verifier helps

An [email checker](/email-checker) asks the receiving server about an address before you send. The server gives the same answer it would put in an NDR. The difference is that no email was sent, so nothing bounces and your reputation is not affected.
