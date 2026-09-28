---
title: Spam filter
description: What a spam filter looks at when it decides where your email goes, the difference between a rejection and the spam folder, and the numbers Google publishes for senders.
slug: spam-filter
date: 2026-09-29
updated: 2026-09-29
keyword: spam filter
short: A spam filter is the system a mailbox provider uses to decide whether an incoming email goes to the inbox, the spam folder, or nowhere. It scores the sender, the message and how past recipients reacted.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Send to real addresses and the filters have less to hold against you
---

## What a spam filter does

Every mailbox provider runs one. Gmail, Outlook.com, Yahoo and the company mail servers behind a [secure email gateway](/glossary/secure-email-gateway) all decide, message by message, whether to deliver, divert or refuse.

The decision happens in two places.

**At the door.** The receiving server can refuse the email during the SMTP conversation. You get a bounce with a `5.7.x` code, for example Gmail's `550 5.7.1` for a policy block or `550 5.7.28` for an unusual rate of unsolicited mail from your IP. This is a rejection. The email never enters the mailbox.

**After acceptance.** The server takes the email and then files it in the inbox, in promotions, or in spam. You get no bounce. The only signs are lower open rates and what Google Postmaster Tools reports.

## What the filter looks at

Providers do not publish their rules, but the inputs are known.

- **Authentication.** Whether [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc) pass. Google and Microsoft now reject bulk mail that fails them.
- **Reputation.** The history of your sending domain and IP address. See [domain reputation](/glossary/domain-reputation) and [IP reputation](/glossary/ip-reputation).
- **Complaints.** How often recipients click "report spam". Google's guidelines say to keep the rate reported in Postmaster Tools below 0.10 percent and never reach 0.30 percent.
- **Bounces.** How often you send to addresses that do not exist. A list nobody verified looks like a spammer's list.
- **Engagement.** Whether people open, reply, delete unread or move your mail.
- **Content.** Links, attachments, images, and patterns that match known spam. This matters less than it used to. Reputation and authentication carry more weight.

## Why senders get filtered

Most filtering is not about the words in the email. It is about who you are sending to. A list with dead addresses produces bounces. A list of people who never asked for the mail produces complaints. Both feed the filter, and both come from the same source: addresses that were never checked.

## How a verifier helps

A verifier does not talk to spam filters. It removes the addresses that would have fed them. Running a list through an [email address checker](/email-checker) before a send takes out the mailboxes that no longer exist, the disposable addresses, and the role accounts that generate complaints. The [email bounce rate](/blog/how-to-reduce-email-bounce-rate) guide shows how much of a list that usually is.
