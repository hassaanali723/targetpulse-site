---
title: Soft bounce
description: What a soft bounce is, the common causes and their codes, how long sending tools keep retrying, and when a soft bounce should be treated as permanent.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: A soft bounce is an email that failed for now, not for good. The address is real, but the inbox is full, the server is busy, or the server asked you to try again later.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: See which of your addresses are real before you send
---

## What a soft bounce means

A soft bounce is a temporary failure. The receiving server did not deliver your email this time, but it left the door open. RFC 5321, the email standard, says the sender "may" request the action again.

The code in the bounce message starts with a 4, for example `452 4.2.2`. A code that starts with a 5 is a [hard bounce](/glossary/hard-bounce), which is permanent.

## Common causes

- **Inbox is full.** Gmail returns `452 4.2.2 The recipient's inbox is out of storage space`. The person can delete some email and make room.
- **Too many emails too fast.** Gmail returns `450 4.2.1 The user you are trying to contact is receiving email too quickly`, or `421 4.7.28` when too much mail is coming from your IP address.
- **Greylisting.** The server rejects the first email from a sender it does not know, then accepts it on the second try. See [greylisting](/glossary/greylisting).
- **Server is down or slow.** A `421` code means the service is not available. A `4.4.1` or `4.4.2` means the connection failed or timed out.
- **Email expired.** A `4.4.7` code means your server kept trying, then gave up. RFC 5321 says servers should retry for about four to five days.

## What your sending tool does

Your tool retries on its own. How long it retries, and when it gives up, depends on the tool. SendGrid retries for up to 72 hours. HubSpot holds the email as pending for up to 72 hours, then records a soft bounce. Mailchimp turns an address into a hard bounce after 7 soft bounces if the contact never opened anything, or after 15 if they did.

So the same soft bounce can end up in different columns depending on which tool you use. Read the code, not the label.

## What to do with a soft bounce

Nothing, at first. Let the retry run. One soft bounce is normal.

A soft bounce that repeats is a different thing. An inbox that is "full" on every send for six weeks is not full, it is abandoned. Remove an address that soft bounces on several sends in a row. Mailchimp's limit of seven is a safe rule for anyone.

## How a verifier handles it

A verifier talks to the mail server before you send. If the server answers with a 4xx code, the verifier retries and, if the answer does not change, marks the address as unknown rather than valid. That tells you the mailbox exists but may not be receiving. The [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide covers what each code means and what to do with it.
