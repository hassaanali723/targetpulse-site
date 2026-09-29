---
title: Spam trap
description: What a spam trap is, the three types and how each one gets onto a list, what happens when you send to one, and how to keep them off your list.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: A spam trap is an email address that is used only to catch senders. Nobody signs up with it. Mailbox providers and anti-spam organisations monitor it. If you send to a spam trap, it means your list was bought, scraped, or never cleaned.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Remove dead addresses before they become spam traps
---

## What a spam trap is

A spam trap is an email address that exists only to identify senders with bad lists. Nobody uses it. Nobody has ever signed up with it. When an email arrives at a spam trap, the organisation that runs it knows one thing for certain. The sender did not get the address from a signup form.

Amazon's documentation for its email service says spam traps are run by internet service providers, mailbox providers and anti-spam organisations. The addresses are secret. You only find out you sent to one later. Your email starts going to spam, or your IP address is added to a [blacklist](/glossary/email-blacklist).

## The three types of spam trap

**Pristine traps.** Addresses created only to be traps. They are placed on web pages where scraping tools will find them. They are never used for anything else. Only scraped or purchased lists contain them.

**Recycled traps.** Real addresses that were abandoned. The provider closed the address and bounced email to it for a while. Then the provider reopened it as a trap. Amazon describes these as addresses "that were once valid, but have been unused (and bouncing) for an extended period of time". Lists that are never cleaned collect these over time.

**Typo traps.** Addresses on domains that look like a real domain with a spelling mistake. Example: a misspelled version of a large provider's domain. They catch senders who do not check what people typed into the signup form.

## What happens when you send to a spam trap

You do not get a bounce. The trap accepts the email. The organisation running the trap records your IP address and domain. What happens next depends on the organisation:

- Your IP address may be added to a blocklist.
- Your reputation with that provider may drop.
- Your sending service may put your account under review.

Amazon does not say how many spam trap hits trigger action. It says "even a small number of spamtrap hits can have a very negative effect".

## How to keep spam traps off your list

Nobody can give you a list of spam trap addresses. You protect your list with these steps:

- Do not buy, rent or scrape addresses. Pristine traps only arrive this way.
- Remove every address that hard bounces. Do this right away. Amazon says to remove them "long before they are converted to spamtraps".
- Stop sending to people who have not opened or clicked in months. Recycled traps are among them.
- Verify addresses at signup so typos are caught while the person is still on the page.

## What a verifier can and cannot do

An [email address checker](/email-checker) cannot detect a spam trap. A recycled trap is a mailbox that exists and accepts email, so it verifies as valid.

Verification helps in two ways. It removes dead addresses before they are recycled into traps. It catches typo domains before the first send. It does not protect you from a purchased list. That is a decision, not a check.
