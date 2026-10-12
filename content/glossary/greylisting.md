---
title: Greylisting
description: What greylisting is, why a server rejects your first email and accepts the second, how long the delay usually is, and how it affects verification results.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Greylisting is a spam defence. A mail server rejects the first email from a sender it does not know, then accepts the same email when the sender tries again a few minutes later. Real mail servers retry, but most spam software does not.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Get a real answer on addresses that greylist your checks
---

## What is greylisting?

Greylisting is a spam defence that works with a delay. A mail server turns away the first email from a new sender and accepts it on the second try. It is described in RFC 6647.

A few words first. A server is a computer that runs all the time and handles email. An IP address is the number that identifies a server on the internet. Spam is unwanted bulk email.

A receiving server that uses greylisting keeps a record of every sender it has seen. It looks at three things:

1. the sending IP address;
2. the sender address;
3. the recipient address.

If it has not seen this combination before, it rejects the email with a temporary error. A properly configured mail server puts the email in a queue and tries again. A queue is a list of emails that a server is waiting to send. Most spam software sends once and does not retry.

When the retry arrives, the server accepts the email and saves the sender in its record. After that, email from the same sender is accepted on the first try.

## A simple example

Here is greylisting from the sender's side.

1. **Nina emails a new supplier.** Nina works at a café. At 9:00 she emails orders@supplier.example for the first time.
2. **The supplier's server does not know her.** It has never seen this mix of Nina's server, her address and this recipient.
3. **It sends a temporary error.** It answers `451` with a message like "greylisted, try again later".
4. **Nina's server waits.** Her mail server keeps the email in its queue. Nina sees nothing.
5. **It tries again.** At about 9:15, Nina's server sends the same email again.
6. **The email is accepted.** The supplier's server sees the second try. It accepts the email and saves Nina's details.
7. **Next time there is no wait.** When Nina emails the supplier next week, the email is accepted on the first try.

A spam program that sends thousands of emails usually does not try a second time. So its emails never arrive.

## What it looks like for the sender

The first attempt gets a code that starts with 4. It is usually `450` or `451`, with a message like "greylisted, try again later". Your mail server treats this as a [soft bounce](/glossary/soft-bounce) and retries on its own schedule. A soft bounce is a temporary delivery failure.

The receiving server decides how long to wait before accepting the retry. About 15 minutes is common. Some servers use a shorter or longer delay.

Usually you do not notice greylisting. The email arrives a few minutes late. If your tool shows a bounce notice at all, it clears by itself.

## When greylisting matters

Greylisting does not affect a normal campaign. It matters in two cases.

**Time-sensitive emails.** A password reset or a one-time code that arrives 15 minutes late is useless to the user. For this reason, senders of transactional email sometimes ask receiving domains to add their IP addresses to an allow list. Transactional email is email sent because of something the user did, such as a receipt or a login code.

**Example:** Leo asks a website for a login code. The code goes to his work address, which uses greylisting. The code arrives 15 minutes later. By then Leo has stopped trying to log in.

**Verification.** A verifier checks an address by starting an SMTP conversation and stopping before it sends anything. SMTP is the standard way mail servers talk to each other to send email. On a greylisting server, the first attempt gets a `4xx` answer, which means a code that starts with 4. A verifier that stops after one attempt reports the address as unknown. The address may be valid.

## Greylisting and secure email gateways

Many company domains use a [secure email gateway](/glossary/secure-email-gateway) such as Proofpoint or Mimecast. A secure email gateway is a security service that checks a company's email before it reaches staff inboxes. These gateways greylist unknown senders by default. This is one reason a basic check returns unknown for many B2B addresses. B2B addresses are the work addresses of people at other companies.

## How a verifier handles it

A good [email checker](/email-checker) treats a `4xx` answer as "try again", not as a result. It waits, retries from the same IP address, and reports the answer the server gives after the greylisting delay. Giggal.ai does this when it resolves gateway domains. This is how it returns valid or invalid where a single-attempt check returns unknown.

A [bulk email verifier](/bulk-email-verifier) does the same for every address on a list. [Email verification](/) cannot turn greylisting off. It waits for the delay to end and then reports whether each address exists.
