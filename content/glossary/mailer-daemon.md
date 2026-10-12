---
title: Mailer-daemon
description: What a mailer-daemon message is, why you receive one, how to read the code inside it, and what to do when you get one for an email you did not send.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: The mailer-daemon is the program on a mail server that sends automatic messages. Most of these messages are bounce notices. A message from the mailer-daemon means an email you sent was not delivered.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Remove the addresses that bounce before you send
---

## What is a mailer-daemon?

The mailer-daemon is a program on a mail server that sends automatic notices. Most of these notices tell you that an email you sent was not delivered.

A few words first. A server is a computer that runs all the time and handles email. A daemon is a program that runs in the background on a server, with nobody watching it. So the mailer-daemon is the background program that deals with email that cannot be delivered.

When your email is rejected, the mailer-daemon sends you a notice. The sender name is usually `MAILER-DAEMON@` followed by the server's domain, or `postmaster@`. The domain is the part of an address after the @, such as example.com.

The notice is called a [non-delivery report](/glossary/ndr). It tells you which address failed, when it failed, and why. Many people simply call it a bounce message.

## A simple example

Here is how a mailer-daemon message reaches your inbox.

1. **Priya sends a quote.** Priya runs a print shop. She emails a price quote to a new client at sam@client.example.
2. **The address is wrong.** The client's real address is sam.lee@client.example. Priya copied it from a business card and left out ".lee".
3. **The server refuses it.** The mail server at client.example has no mailbox called "sam". It rejects the email.
4. **A notice arrives.** A few seconds later, Priya gets an email from MAILER-DAEMON. It says her email could not be delivered.
5. **Priya reads the code.** Inside she finds `550 5.1.1`. This code means the address does not exist.
6. **Priya fixes it.** She checks the business card, corrects the address and sends the quote again.

The mailer-daemon did not block Priya's email. The other server refused it. The mailer-daemon only told her about it.

## How to read the message

The important part of the message is the code. Look for a three-digit number and a number with dots. Example: `550 5.1.1`. The first digit tells you what kind of problem it is.

| First digit | Type | What it means | What to do |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | The address does not exist, or the server blocked your email. | Do not send again until you know which one it is. |
| **4** | [Soft bounce](/glossary/soft-bounce) | The inbox is full or the server is busy. | Wait. Your mail server will retry by itself. |

The text next to the code is written by the receiving server. Two examples:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Microsoft's documentation says this means "the recipient's address doesn't exist".

## Mailer-daemon messages for emails you did not send

Sometimes you get a bounce notice for an email you never sent. This is called [backscatter](/glossary/backscatter). Here is how it happens.

1. A spammer sends thousands of emails. In the From field, they type your address, for example info@shop.example.
2. Many of those emails go to addresses that do not exist.
3. The receiving servers reject them. Their mailer-daemon sends each notice to the From address, which is yours.
4. Your inbox fills with mailer-daemon notices for emails you never wrote.

Your account was not hacked. The fix is on your domain. Publish SPF, DKIM and DMARC records. These are settings on your domain that tell receiving servers which emails really come from you. Then receiving servers can reject the fake emails instead of sending bounce notices to you.

## Why it matters for senders

Every mailer-daemon message is a bounce. Mailbox providers, such as Google and Microsoft, count how many of your emails go to addresses that do not exist. Many `5.1.1` notices tell them you did not check your list.

**Example:** a company sends a newsletter to an old list of 2,000 contacts. Two hundred mailer-daemon notices come back, all with `5.1.1`. Each one is a sign to the providers that nobody cleaned the list. These numbers are only an example.

## How a verifier helps

An [email checker](/email-checker) asks the receiving server if it accepts email for an address. It does this before you send anything. The server gives the same code the mailer-daemon would send you later. The difference is that no email was sent and your reputation is not affected.

A [bulk email verifier](/bulk-email-verifier) runs the same check on every address in a list. [Email verification](/) does not stop backscatter, because you did not send those emails. It stops the mailer-daemon notices that come from dead addresses on your own list.
