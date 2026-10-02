---
title: Spam filter
description: What a spam filter checks before it delivers, files or rejects your email, how a rejection differs from the spam folder, and Google's spam rate limits.
slug: spam-filter
date: 2026-09-29
updated: 2026-09-29
keyword: spam filter
short: A spam filter is the system a mailbox provider uses to decide if an incoming email goes to the inbox, to the spam folder, or is rejected. It checks the sender, the email content, and how past recipients reacted to emails from that sender.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Send to real addresses and spam filters have less to hold against you
---

## What a spam filter does

Every mailbox provider has a spam filter. Gmail, Outlook.com and Yahoo have one. Company mail servers behind a [secure email gateway](/glossary/secure-email-gateway) have one. The filter checks every incoming email and decides to deliver it, move it to spam, or reject it.

The decision happens at one of two points.

**During the SMTP connection.** The receiving server can reject the email before accepting it. You get a bounce with a `5.7.x` code. Examples: Gmail's `550 5.7.1` for a policy block, or `550 5.7.28` for an unusual amount of unwanted email from your IP address. The email never reaches the mailbox.

**After the email is accepted.** The server accepts the email and then puts it in the inbox, the promotions tab, or the spam folder. You do not get a bounce. The only signs are lower open rates and the data in Google Postmaster Tools.

## What the filter checks

Providers do not publish their exact rules. These are the known inputs:

- **Authentication.** Whether [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc) pass. Google and Microsoft now reject bulk email that fails these checks.
- **Reputation.** The sending history of your domain and IP address. See [domain reputation](/glossary/domain-reputation) and [IP reputation](/glossary/ip-reputation).
- **Complaints.** How often recipients click "report spam". Google's guidelines say to keep the complaint rate in Postmaster Tools below 0.10 percent and never reach 0.30 percent.
- **Bounces.** How often you send to addresses that do not exist. A list with many dead addresses looks like a list that was bought or scraped.
- **Engagement.** Whether people open your emails, reply to them, delete them without reading, or move them to another folder.
- **Content.** Links, attachments, images and text patterns that match known spam. Content matters less than it used to. Reputation and authentication matter more.

## Why senders get filtered

Most filtering is not caused by the words in the email. It is caused by the list. Dead addresses cause bounces. People who did not ask for your email cause complaints. Both problems come from addresses that were never checked.

## How a verifier helps

A verifier does not interact with spam filters. It removes the addresses that cause bounces and complaints. Run your list through an [email address checker](/email-checker) before you send. It removes mailboxes that no longer exist. It also removes disposable addresses and role accounts like info@, which get more complaints. The [email bounce rate](/blog/how-to-reduce-email-bounce-rate) guide shows how large this share of a list usually is.
