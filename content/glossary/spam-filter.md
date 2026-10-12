---
title: Spam filter
description: What a spam filter checks before it delivers, files or rejects your email, how a rejection differs from the spam folder, and Google's spam rate limits.
slug: spam-filter
date: 2026-09-29
updated: 2026-10-12
keyword: spam filter
short: A spam filter is the system a mailbox provider uses to decide where an incoming email goes. It can send the email to the inbox or the spam folder, or reject it. It checks the sender, the email content, and how past recipients reacted to emails from that sender.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Send to real addresses and spam filters have less to hold against you
---

## What is a spam filter?

A spam filter is a system that checks every incoming email and decides what happens to it. It can deliver the email to the inbox, move it to the spam folder, or reject it. Spam is unwanted bulk email.

Every mailbox provider has a spam filter. A mailbox provider is a company or server that runs inboxes. Gmail, Outlook.com and Yahoo have one. Company mail servers behind a [secure email gateway](/glossary/secure-email-gateway) have one. A secure email gateway is a security service that checks a company's email before it reaches staff inboxes.

The decision happens at one of two points.

**During the SMTP connection.** SMTP is the standard way mail servers send email to each other. The receiving server can reject the email before accepting it. You get a bounce with a `5.7.x` code. A bounce is the automatic message that tells you an email was not delivered. Examples: Gmail's `550 5.7.1` for a policy block, or `550 5.7.28` for an unusual amount of unwanted email from your IP address. An IP address is the number that identifies your sending server. The email never reaches the mailbox.

**After the email is accepted.** The server accepts the email and then puts it in the inbox, the promotions tab, or the spam folder. You do not get a bounce. The only signs are lower open rates and the data in [Google Postmaster Tools](/glossary/postmaster-tools).

## A simple example

Here is how a spam filter can send a normal offer to the spam folder. The numbers are only an example.

1. **A gym sends an offer.** City Gym emails a discount offer to 8,000 members.
2. **The filter checks the sender.** The gym's SPF, DKIM and DMARC records pass. The email really came from the gym.
3. **It checks the gym's history.** Last month the gym emailed an old list. Many of those addresses did not exist, and the emails bounced.
4. **It checks how people reacted before.** Many members deleted the last offer without opening it. Some clicked "report spam".
5. **It decides.** The filter moves the new offer to the spam folder for many members.
6. **The gym gets no error.** No bounce comes back. The gym only sees a lower open rate.

The words in the offer were not the problem. The list was.

## What the filter checks

Providers do not publish their exact rules. These are the known inputs:

- **Authentication.** Whether [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc) pass. These are records on your domain that prove an email really came from you. Google and Microsoft now reject bulk email that fails these checks.
- **Reputation.** The sending history of your domain and IP address. Your domain is the part of your address after the @. See [domain reputation](/glossary/domain-reputation) and [IP reputation](/glossary/ip-reputation).
- **Complaints.** How often recipients click "report spam". Google's guidelines say to keep the complaint rate in Postmaster Tools below 0.10 percent and never reach 0.30 percent. For example, 0.10 percent is 10 complaints on 10,000 emails.
- **Bounces.** How often you send to addresses that do not exist. A list with many dead addresses looks like a list that was bought or scraped. Scraped means copied from websites by a program.
- **Engagement.** Whether people open your emails, reply to them, delete them without reading, or move them to another folder.
- **Content.** Links, attachments, images and text patterns that match known spam. Content matters less than it used to. Reputation and authentication matter more.

## Why senders get filtered

Most filtering is not caused by the words in the email. It is caused by the list. Dead addresses cause bounces. People who did not ask for your email cause complaints. Both problems come from addresses that were never checked.

**Example:** a company changes "FREE" to "free" in every subject line, but keeps sending to an old, unchecked list. Its emails still go to spam, because the list is the cause.

## How a verifier helps

A verifier does not interact with spam filters. It removes the addresses that cause bounces and complaints. Run your list through an [email checker](/email-checker) before you send. It removes mailboxes that no longer exist. It also removes disposable addresses and role accounts like info@, which get more complaints. The [email bounce rate](/blog/how-to-reduce-email-bounce-rate) guide shows how large this share of a list usually is.

For a large list, use a [bulk email verifier](/bulk-email-verifier). [Email verification](/) cannot make a spam filter accept your email. It removes one cause of filtering: sending to addresses that do not exist.
