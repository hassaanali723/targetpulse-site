---
title: Email blacklist
description: What an email blacklist is, how IP and domain blacklists differ, how senders get listed, how to check your IP or domain, and how to get removed.
slug: email-blacklist
date: 2026-10-12
updated: 2026-10-12
keyword: email blacklist
short: An email blacklist is a public list of IP addresses or domains known to send spam. Receiving mail servers check these lists and block or filter email from senders on them. Spamhaus runs some of the best-known lists.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Remove dead addresses that lead to spam traps and blacklists
---

## What is an email blacklist?

An email blacklist is a list of senders known to send spam. A sender can be listed by its IP address or by its domain. An IP address is the number that identifies a server on the internet. A domain is the name after the @ in an email address, such as example.com.

Organisations such as Spamhaus build these lists and publish them. Mail servers at companies and email providers check each incoming email against one or more lists. If the sender is listed, the server can reject the email or send it to spam.

Most blacklists are published through DNS, the public directory system of the internet. A list published this way is called a [DNSBL](/glossary/dnsbl).

## An example: emails start bouncing

A company called Orbit sends invoices from its own mail server. One Monday, many customers say they never got their invoice. Kofi, who runs Orbit's IT, reads the bounce messages. Several of them say something like this:

`554 5.7.1 Service unavailable; Client host [192.0.2.25] blocked using zen.spamhaus.org`

The message names Spamhaus. Kofi looks up the IP address `192.0.2.25` on the Spamhaus website. It is listed. Then he finds the reason. Over the weekend, an employee's account was hacked and used to send thousands of spam emails.

Kofi changes the password and stops the spam. Then he asks Spamhaus to remove the listing. Once it is removed, Orbit's invoices are delivered again.

## IP blacklists vs domain blacklists

| Type | What is listed | What the receiving server checks |
| --- | --- | --- |
| IP blacklist | The IP address of a sending server | The server that connects to deliver the email |
| Domain blacklist | A domain name | Domains in the sender address and in links inside the email |

Spamhaus runs both types. Its Domain Blocklist, called the DBL, lists domains. Its other lists, such as the SBL and the XBL, list IP addresses.

## Blacklist or blocklist?

Both words mean the same thing. Spamhaus now uses the word "blocklist". Many tools and people still say "email blacklist", and you may also see "denylist". See [blocklist](/glossary/blocklist).

## How senders get listed

- **Spam traps.** Sending to a [spam trap](/glossary/spam-trap), an address that exists only to catch senders with bad lists. Old and bought lists contain them.
- **Spam complaints.** Many recipients marking your email as spam.
- **A hacked account or server.** Someone takes over an account and sends spam from it, as in the Orbit example.
- **Sudden volume from a new IP.** A new IP address that sends a large amount of email at once matches what spammers do.
- **An infected computer.** Harmful software on a computer in your office sends spam through your network.

## How to check if you are on an email blacklist

1. Find your sending IP address and domain. Your ESP or IT team can tell you.
2. Enter them into a blacklist checker such as MXToolbox. It checks many lists at once.
3. If a list shows you as listed, go to that list's own website. Confirm the listing and read the reason.
4. Read your bounce messages. A block message often names the list, as in the Orbit example.

Not every list has the same effect. Some small lists are used by few mail servers. A Spamhaus listing matters more, because many mail servers check Spamhaus.

## How to get removed from a blacklist

1. **Fix the cause first.** Change hacked passwords, clean infected computers, or stop sending to bad lists. If the cause remains, you will be listed again.
2. **Use the list's removal page.** Most lists have a form to request removal, often called delisting.
3. **Explain what you fixed.** Some lists ask what happened and what you changed.
4. **Wait for the result.** Some lists remove you automatically after a period without spam. Others act on your request.
5. **Watch your sending afterwards.** Check your bounce messages and the blacklist checker again for a few weeks.

## Email blacklists and email verification

Spam traps are one way senders get blacklisted, and traps are found among old, bought or mistyped addresses. An [email checker](/email-checker) finds addresses that no longer exist, before they are recycled into traps. A [bulk email verifier](/bulk-email-verifier) does this for a whole list and also flags addresses with mistyped domains. Verification cannot spot every spam trap, because some traps are working mailboxes. But regular [email verification](/) removes dead addresses, which lowers your bounces and your risk of sending to a recycled trap.
