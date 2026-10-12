---
title: Hard bounce
description: What a hard bounce is, which codes mean hard bounce, the two types of hard bounce, and what to do with each type.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: hard bounce
short: A hard bounce is an email that the receiving server refused for good. The address does not exist, the domain does not exist, or the server blocked your email. If you send the same email again, it will fail again.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Find the addresses that would hard bounce before you send
---

## What is a hard bounce?

A hard bounce is an email that was not delivered and never will be. The receiving server refused it. If you send it again, the server will refuse it again.

A few words first. A server is a computer that runs all the time and handles email for a domain. The domain is the part of an address after the @, such as example.com. A bounce is the automatic message that tells you an email was not delivered.

Every bounce message contains a code. The email standard RFC 5321 calls a hard bounce a permanent negative reply. Its code starts with 5. Example: `550 5.1.1`. A code that starts with 4 is a [soft bounce](/glossary/soft-bounce). A soft bounce is temporary, so a later try may work.

## A simple example

Here is how a hard bounce happens on a normal list.

1. **Tom collects an address.** Tom runs a small online bookshop. In 2022, a customer signs up with ben@company.example.
2. **The customer leaves his job.** In 2025, Ben leaves Company Ltd. The company closes his mailbox.
3. **Tom sends a newsletter.** His sending tool sends the newsletter to ben@company.example.
4. **The server refuses it.** The mail server at company.example has no mailbox for Ben any more. It answers with the code `550 5.1.1`.
5. **Tom gets a bounce message.** His sending tool records a hard bounce for that address.
6. **Tom removes the address.** Ben's old mailbox will not come back. Sending to it again would only fail again.

Tom did nothing wrong when he collected the address. It was real in 2022. It stopped working later, and nobody told him.

## The two types of hard bounce

Both types show up as "hard bounce" in your campaign report. They have different causes and different fixes.

### Type 1: the address is bad

The mailbox does not exist, the domain does not exist, or the address has a spelling mistake. An address that was closed when an employee left the company, like Ben's, is also in this group.

The big providers word it in their own way:

- Gmail returns `550 5.1.1 The email account that you tried to reach does not exist`.
- Microsoft returns `5.1.1 Bad destination mailbox address`.

**Example:** a customer means to type anna@example.com but types ana@example.com. No mailbox called "ana" exists. The server returns a hard bounce.

### Type 2: your email is blocked

The address is real, but the server refuses email from you. These codes start with `5.7`.

- Gmail's `550 5.7.26` means your domain is not authenticated. Authentication means records on your domain that prove an email really came from you.
- Microsoft's `5.7.23` means your email failed the SPF check. SPF is one of those records. It lists the servers allowed to send email for your domain.

Your sending tool counts these as hard bounces because the code starts with 5. But the address is fine. The problem is your email setup.

**Example:** Maria sets up a new domain, maria-design.example. She emails a client at Gmail before she adds any authentication records. Gmail returns `550 5.7.26`. The client's address works. Maria's setup is what needs fixing.

## Why hard bounces matter

Mailbox providers are the companies that run inboxes, such as Google and Microsoft. They count how often you send to addresses that do not exist. Many hard bounces tell them your list was not checked.

Email sending services watch this number too. The bounce rate is the share of your emails that bounce. For example, 50 bounces on 1,000 emails is a 5 percent bounce rate. Amazon SES, Amazon's service for sending email, publishes its limits:

| Bounce rate | What Amazon SES does |
|---|---|
| Under 2 percent | This is the level it recommends |
| 5 percent | It puts the account under review |
| 10 percent | It may pause the account |

So a single hard bounce is not a problem. A list full of dead addresses is.

## What to do with a hard bounce

First, read the code in the bounce message. The code tells you which type of hard bounce you have.

1. **The code is `5.1.1`, `5.1.2` or another address error.** Remove the address from your list now. Do not send to it again. Mailchimp removes these addresses from your audience automatically. Amazon tells senders to remove them "immediately".
2. **The code starts with `5.7`.** Keep the address. Fix your SPF, DKIM and DMARC records, or your sender reputation. Your sender reputation is how providers rate you, based on your past sending. Then send to the same address again.

The full table of codes and what to do with each one is in the [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide.

## How a verifier handles it

A verifier asks the receiving server the same question before you send. An [email verifier](/email-checker) connects to the mail server. It asks if the server accepts email for that exact address, and it stops before any email is sent. If the server answers `550 5.1.1`, the verifier marks the address as invalid. You remove it before the campaign. No email was sent, so your reputation is not affected.

To check a whole list at once, upload it to a [bulk email verifier](/bulk-email-verifier). [Email verification](/) finds Type 1 problems: addresses that do not exist. It cannot prevent a Type 2 hard bounce, because that one comes from your own email setup.
