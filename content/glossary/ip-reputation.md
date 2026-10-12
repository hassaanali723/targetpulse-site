---
title: IP reputation
description: What email IP reputation is, how shared and dedicated IPs differ, what builds or hurts it, how to check your IP reputation, and how to improve it.
slug: ip-reputation
date: 2026-10-12
updated: 2026-10-12
keyword: ip reputation
short: IP reputation is how much mailbox providers such as Gmail and Outlook trust the IP address your emails come from. An IP address is the number that identifies a server on the internet. A poor IP reputation sends your emails to spam or gets them blocked.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Keep dead addresses off your list to protect your IP reputation
---

## What is IP reputation?

Every server on the internet has an IP address. It is a number, such as `192.0.2.10`, that identifies the server. When you send an email, it leaves from a server with an IP address.

Mailbox providers such as Gmail, Outlook.com and Yahoo track the email that comes from each IP address. They count how many emails bounce and how many people mark them as spam. They also check whether the IP is on [blacklists](/glossary/email-blacklist). From this history, they decide how much to trust the IP. That level of trust is its IP reputation.

A good email IP reputation helps your emails reach the inbox. A poor one leads to the spam folder, slower delivery or rejected emails.

## An example: two senders on one shared IP

An ESP is a company that sends email for its customers, such as Mailchimp or SendGrid. Say two of its customers send from the same IP address, `192.0.2.10`.

- **Customer A** is a bookshop. It emails people who signed up on its website. Few emails bounce, and few people complain.
- **Customer B** bought a list of 50,000 addresses. Thousands of them bounce. Many recipients click "Report spam".

Gmail records the bounces and complaints against `192.0.2.10`. The reputation of that IP drops. Some of the bookshop's emails may now go to spam as well, even though the bookshop did nothing wrong.

ESPs try to prevent this. Many of them watch each customer's bounce and complaint rates. They pause accounts like Customer B's to protect the other customers on the same IP.

## Shared IP vs dedicated IP

| | Shared IP | Dedicated IP |
| --- | --- | --- |
| Who sends from it | Many customers of the same ESP | Only you |
| What its reputation depends on | Everyone who sends from it | Only your email |
| Who it suits | Small and medium senders | Large senders with steady volume |
| Setup | Ready to use | Needs to be warmed up first |

A dedicated IP gives you full control over its reputation. It also means nobody else's good email helps you. A new dedicated IP has no history, so you build its reputation slowly.

## What builds or hurts IP reputation

These things build a good IP reputation:

- Sending a steady amount of email, without sudden jumps.
- Low bounce rates, because your list is clean.
- Few spam complaints, because people asked for your email.

These things hurt it:

- Many [hard bounces](/glossary/hard-bounce) from addresses that do not exist.
- Emails to [spam traps](/glossary/spam-trap), addresses that exist only to catch senders with bad lists.
- Spam complaints from people who did not expect your email.
- A listing on a blacklist such as Spamhaus.
- A large volume of email from a new IP with no history.

## How to check your IP reputation

1. Find your sending IP. Send yourself an email at Gmail, open it and choose Show original. Gmail shows the IP address next to the SPF result. Your ESP can also tell you.
2. Enter the IP into a blacklist checker such as MXToolbox. It checks the IP against many public blacklists at once.
3. For Outlook.com, sign up for Microsoft SNDS (Smart Network Data Services). It shows data about the email your IP sends to Outlook.com users.
4. For Gmail, use [Google Postmaster Tools](/glossary/postmaster-tools). It shows data about the email your domain sends to Gmail users.

## How to improve your IP reputation

1. Find and fix the cause first, such as a bad list or a hacked account.
2. Remove addresses that bounce, and verify your list before the next send.
3. Stop sending to people who never open your email.
4. If your IP is on a blacklist, ask for removal after you fix the cause.
5. Start slowly with any new IP. Send small daily volumes and raise them over several weeks. See [IP warming](/glossary/ip-warming).

## IP reputation vs domain reputation

IP reputation belongs to the server address. [Domain reputation](/glossary/domain-reputation) belongs to the name after the @ in your email address, such as example.com. If you move to a new ESP, your IP changes but your domain stays the same. Providers use both, and a problem with either one can hurt your delivery.

## IP reputation and email verification

Bounces and spam traps both hurt IP reputation, and both come from bad addresses on your list. An [email checker](/email-checker) asks the receiving server whether an address exists before you send. A [bulk email verifier](/bulk-email-verifier) does this for a full list and marks the addresses that would bounce. Removing them through [email verification](/) means fewer bounces are recorded against your IP. Verification cannot find every spam trap, because some traps are working mailboxes, but it removes dead addresses before they are turned into traps.
