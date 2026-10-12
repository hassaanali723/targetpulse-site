---
title: Spam trap
description: What a spam trap is, explained with examples. The three types, how they end up on your list, what happens when you email one, and how to avoid them.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: A spam trap is an email address that no real person uses. It exists only to catch senders who email people without permission. If you send an email to a spam trap, it shows that your list was bought, copied from websites, or not cleaned for a long time.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Remove dead addresses before they become spam traps
---

## What is a spam trap?

A spam trap is an email address that looks normal, but no real person reads it. Nobody ever signed up for a newsletter with it. Nobody ever gave it to a company.

So if an email arrives at that address, the organisation running the trap learns one thing for sure. The sender did not get the address from the person. They bought it, copied it from a website, or kept it on an old list for too long.

Who runs spam traps? Amazon's documentation for its email sending service (Amazon SES) says they are run by internet service providers, mailbox providers such as the big free email services, and anti-spam organisations. The addresses are kept secret on purpose. If senders knew them, they would just delete them.

## A simple example

Here is how a company sends email to a spam trap without noticing.

1. **A shop buys a list.** "Shop Online Ltd" buys a list of 10,000 email addresses from a website that sells contact data.
2. **The list contains a trap.** One of those addresses is info@hidden-page.example. A spam trap organisation placed it on a web page years ago, where address-collecting tools would find it. No person ever used it.
3. **The shop sends a promotion.** The email goes to all 10,000 addresses, including the trap.
4. **Nothing seems wrong.** The trap does not bounce. The email is accepted like any other. The shop sees no error.
5. **The trap records the sender.** The organisation running the trap notes the shop's sending server and domain.
6. **The problems start later.** A few days later, more of the shop's emails go to spam folders. Some customers stop getting order confirmations. The shop has no idea why.

The shop never sees a message saying "you hit a spam trap". It only sees the result.

## The three types of spam trap

### 1. Pristine traps (never used by anyone)

These addresses were created only to be traps. They are hidden on web pages where tools that copy addresses from the internet (called scraping tools) will find them.

**Example:** an address like contact-7731@some-domain.example appears in the code of a web page. A real visitor never sees it. A scraping tool collects it.

Only lists that were bought or scraped contain pristine traps. A person who signed up on your website can never be one.

### 2. Recycled traps (old addresses that came back as traps)

These were real addresses once. Then the person stopped using them. For a long time, the email provider bounced every email sent to them, which means it sent the email back as undeliverable. After that, the provider turned the address back on as a trap.

Amazon describes these as addresses "that were once valid, but have been unused (and bouncing) for an extended period of time".

**Example:** Sarah signed up for your newsletter in 2019 with sarah.m@oldjob.example. She left that job. Her address started bouncing, but you kept sending. Years later, the address turns into a trap. Your next email lands in it.

Lists that are never cleaned collect recycled traps over time.

### 3. Typo traps (spelling mistakes in the domain)

These traps sit on domains that look like a well-known domain with a small spelling mistake. The domain is the part after the @.

**Example:** a person types their address into your signup form with one wrong letter in the domain, so the domain looks almost like a big email provider's but is not. If that misspelled domain is run as a trap, every email you send to that address is recorded.

Typo traps catch senders who never check what people type into their forms.

## What happens when you send to a spam trap

You do not get a bounce. The trap accepts the email like a normal mailbox. Then the organisation running it records your sending details, such as your IP address (the number that identifies the server your email came from) and your domain.

What happens next depends on who runs the trap:

- **Your IP address or domain may be added to a [blacklist](/glossary/email-blacklist).** Many mail servers check these lists and refuse email from senders on them.
- **Your reputation with that email provider may drop.** More of your emails then go to spam.
- **Your email sending service may review your account.** It may pause your sending until you fix your list.

How many trap hits does it take? Amazon does not give a number. It says "even a small number of spamtrap hits can have a very negative effect".

## How to keep spam traps off your list

Nobody can give you a list of spam trap addresses. They are secret. So you protect your list with good habits:

1. **Never buy, rent or scrape email addresses.** This is the only way pristine traps get onto a list.
2. **Remove every address that [hard bounces](/glossary/hard-bounce), right away.** A hard bounce means the address does not exist. Amazon says to remove these "long before they are converted to spamtraps".
3. **Stop emailing people who have not opened or clicked in months.** Recycled traps hide among old, silent addresses.
4. **Check addresses when people sign up.** A typo caught on the signup page never becomes a typo trap on your list.

## Spam traps and email verification

An [email verifier](/email-checker) cannot spot every spam trap. A recycled trap is a real mailbox that accepts email, so it can pass a check as valid. Be careful with any tool that promises to find all traps.

What [email verification](/) does is remove the addresses that would become traps. It finds addresses that no longer exist, so you can delete them before a provider recycles them. It also catches mistyped domains before your first email goes out. To clean a whole list at once, upload it to a [bulk email verifier](/bulk-email-verifier). It does not make a bought list safe. Not buying lists is a decision, not a check.
