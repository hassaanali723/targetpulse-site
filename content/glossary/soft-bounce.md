---
title: Soft bounce
description: What a soft bounce is, the common causes and their codes, how long sending tools retry, and when to remove an address that keeps soft bouncing.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: A soft bounce is an email that was not delivered this time because of a temporary problem. The address is real. The inbox is full, the server is busy, or the server asked you to try again later.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: See which of your addresses are real before you send
---

## What is a soft bounce?

A soft bounce is an email that was not delivered this time, but may be delivered later. The problem is temporary. The receiving server allows you to try again.

A few words first. A server is a computer that runs all the time and handles email for a domain. The domain is the part of an address after the @, such as example.com. A bounce is the automatic message that tells you an email was not delivered.

The email standard RFC 5321 calls a soft bounce a temporary negative reply. The code in the bounce message starts with 4. Example: `452 4.2.2`. A code that starts with 5 is a [hard bounce](/glossary/hard-bounce). A hard bounce is permanent.

## A simple example

Here is a normal soft bounce from start to finish.

1. **Lucy sends an invoice.** Lucy runs a cleaning company. On Monday she emails an invoice to a client at james@example.com.
2. **The inbox is full.** James has not deleted any email for years. His mailbox has no space left.
3. **The server refuses it for now.** The server answers with a code that starts with 4. It means "not now, try later".
4. **Lucy's tool tries again.** Her sending tool waits and sends the invoice again a few hours later. It does this by itself.
5. **James clears his inbox.** On Tuesday morning, James deletes old emails.
6. **The next try works.** The invoice arrives on Tuesday afternoon. Lucy did not have to do anything.

The address was real the whole time. Only the timing was wrong.

## Common causes

Each cause comes with its own code. These are the common ones.

- **The inbox is full.** Gmail returns `452 4.2.2 The recipient's inbox is out of storage space`. The person needs to delete some email. This is what happened to James above.
- **Too many emails too fast.** Gmail returns `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail returns `421 4.7.28` when too much email is coming from your IP address. An IP address is the number that identifies the server your email came from. Example: a shop sends a large sale email to all its Gmail customers at once, and Gmail asks it to slow down.
- **Greylisting.** The server rejects the first email from a sender it does not know. It accepts the same email on the second try. See [greylisting](/glossary/greylisting).
- **The server is down or slow.** A `421` code means the server is not available. A `4.4.1` or `4.4.2` code means the connection failed or timed out. Example: a small company's mail server is switched off for an hour for repairs.
- **The email expired.** A `4.4.7` code means your server retried for its full retry period and then stopped. RFC 5321 says servers should retry for about four to five days.

## What your sending tool does

Your sending tool retries a soft bounce automatically. Each tool has its own rules.

| Tool | What it does |
|---|---|
| SendGrid | Retries for up to 72 hours. |
| HubSpot | Marks the email as pending for up to 72 hours. Then it records a soft bounce. |
| Mailchimp | Changes an address to a hard bounce after 7 soft bounces if the contact never opened an email. If the contact opened an email before, the limit is 15 soft bounces. |

The same soft bounce can be labelled differently in different tools. Read the code in the bounce message, not the label.

## What to do with a soft bounce

1. **Do nothing at first.** Let your sending tool retry. One soft bounce is normal.
2. **Watch the address over the next sends.** Note if it bounces again next week, and the week after.
3. **Remove it if it keeps bouncing.** Remove an address that soft bounces on several sends in a row. Mailchimp's limit of 7 soft bounces is a safe rule.

**Example:** you send a weekly newsletter. One address returns "inbox full" every week for six weeks. That inbox is not full. Nobody is using it. Remove the address.

## How a verifier handles it

A verifier connects to the mail server before you send. If the server answers with a 4xx code, which means any code that starts with 4, the verifier tries again. If the answer stays the same, the verifier marks the address as unknown, not valid. Unknown means the mailbox exists but may not be receiving email. The [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) guide explains each code and what to do with it.

An [email verifier](/email-checker) runs this test on one address. A [bulk email verifier](/bulk-email-verifier) runs it on a whole list. [Email verification](/) cannot empty a full inbox or start a server that is down. It tells you which addresses exist before you send, and which ones need a second look.
