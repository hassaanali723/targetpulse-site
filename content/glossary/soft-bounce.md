---
title: Soft bounce
description: What a soft bounce is, the common causes and their codes, how long sending tools retry, and when to remove an address that keeps soft bouncing.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: A soft bounce is an email that was not delivered this time because of a temporary problem. The address is real. The inbox is full, the server is busy, or the server asked you to try again later.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: See which of your addresses are real before you send
---

## What a soft bounce is

A soft bounce is a temporary delivery failure. The receiving server did not deliver your email this time. It allows you to try again later.

The email standard RFC 5321 calls this a temporary negative reply. The code in the bounce message starts with 4. Example: `452 4.2.2`. A code that starts with 5 is a [hard bounce](/glossary/hard-bounce). A hard bounce is permanent.

## Common causes

- **The inbox is full.** Gmail returns `452 4.2.2 The recipient's inbox is out of storage space`. The person needs to delete some email.
- **Too many emails too fast.** Gmail returns `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail returns `421 4.7.28` when too much email is coming from your IP address.
- **Greylisting.** The server rejects the first email from a sender it does not know. It accepts the same email on the second try. See [greylisting](/glossary/greylisting).
- **The server is down or slow.** A `421` code means the server is not available. A `4.4.1` or `4.4.2` code means the connection failed or timed out.
- **The email expired.** A `4.4.7` code means your server retried for its full retry period and then stopped. RFC 5321 says servers should retry for about four to five days.

## What your sending tool does

Your sending tool retries soft bounces automatically. Each tool has its own rules.

- SendGrid retries for up to 72 hours.
- HubSpot marks the email as pending for up to 72 hours. Then it records a soft bounce.
- Mailchimp changes an address to a hard bounce after 7 soft bounces if the contact never opened an email. If the contact opened an email before, the limit is 15 soft bounces.

The same soft bounce can be labelled differently in different tools. Read the code in the bounce message, not the label.

## What to do with a soft bounce

Do nothing at first. Let your sending tool retry. One soft bounce is normal.

Remove an address that soft bounces on several sends in a row. An inbox that is full on every send for six weeks is not full. Nobody is using it. Mailchimp's limit of 7 soft bounces is a safe rule.

## How a verifier handles it

A verifier connects to the mail server before you send. If the server answers with a 4xx code, the verifier tries again. If the answer stays the same, the verifier marks the address as unknown, not valid. Unknown means the mailbox exists but may not be receiving email. The [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide explains each code and what to do with it.
