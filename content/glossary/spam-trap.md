---
title: Spam trap
description: What a spam trap is, the three kinds and how each one gets onto a list, what happens when you hit one, and the only reliable way to keep them out.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: A spam trap is an email address that never signs up for anything. Mailbox providers and anti-spam groups watch it. Anyone who sends to it either bought a list, scraped it, or kept addresses long after they died.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Remove the dead addresses before they turn into traps
---

## What a spam trap is

A spam trap is an address that exists only to catch senders. Nobody uses it. Nobody has ever opted in with it. So when mail arrives at it, the organisation running the trap knows the sender did not get that address from a signup form.

Amazon's guidance for its email service describes who runs them: internet service providers, mailbox providers and anti-spam organisations. The addresses are kept secret. You only find out you hit one when your mail starts going to spam or your IP lands on a [blacklist](/glossary/email-blacklist).

## The three kinds

**Pristine traps.** Addresses created just to be traps. They are placed on web pages where scrapers will find them and never used for anything else. Only a scraped or purchased list contains them.

**Recycled traps.** Real addresses that were abandoned. The provider closed them, bounced mail to them for a while, then quietly reopened them as traps. Amazon describes these as addresses "that were once valid, but have been unused (and bouncing) for an extended period of time". A list that was never cleaned collects them over time.

**Typo traps.** Addresses at domains that look like real ones with a spelling mistake, such as a misspelt version of a big provider's domain. They catch senders who never check what people typed into the form.

## What happens when you hit one

There is no bounce. The trap accepts the email. Whoever runs it records your sending IP and domain. Depending on the operator, your IP may be added to a blocklist, your reputation with that provider drops, or your sending service puts your account under review. Amazon says it does not disclose how many hits trigger action, and that "even a small number of spamtrap hits can have a very negative effect".

## How to keep them out

Nobody can give you a list of traps. The defence is the list itself.

- Do not buy, rent or scrape addresses. Pristine traps only arrive that way.
- Remove every address that hard bounces, straight away. Amazon's wording is to remove them "long before they are converted to spamtraps".
- Stop sending to people who have not opened or clicked in months. Recycled traps hide among them.
- Verify addresses at signup so typos are caught while the person is still on the page.

## What a verifier can and cannot do

An [email address checker](/email-checker) cannot see a spam trap. A recycled trap is a mailbox that exists and accepts mail, so it verifies as valid. What verification does is remove the addresses that are already dead before they are recycled, and catch typo domains before the first send. That closes two of the three doors. The third, purchased lists, is a decision, not a check.
