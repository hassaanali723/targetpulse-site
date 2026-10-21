---
title: Catch-all email
description: What a catch-all email domain is, why companies set one up, why a normal email check cannot confirm addresses on it, and what to do with them.
slug: catch-all-email
date: 2026-10-22
updated: 2026-10-22
keyword: catch all email
short: A catch-all email domain accepts mail sent to any address on it, even names that do not exist. Because the server says yes to everything, a normal email check cannot tell whether a specific mailbox is real.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Get a real answer on catch-all addresses
---

## What is a catch-all email?

A catch-all email domain accepts mail sent to any address on it. The address does not need to exist.

Most domains reject email sent to a name they do not have. A catch-all domain does not. It accepts the email and puts it into one shared mailbox, or sometimes deletes it without telling anyone.

Other names for the same setting are **accept-all** and **catch-all domain**. Many verification tools label these addresses "catch-all", "accept-all" or "risky".

## A simple example

1. **Acme sets up a catch-all.** Acme is a small company with the domain acme.example. Its office manager turns on catch-all so no customer email gets lost.
2. **Sara writes to a real person.** She emails jon@acme.example. Jon works there. He gets the email.
3. **Sara makes a typo.** Next time she types jonn@acme.example. There is no such person.
4. **The server still says yes.** The email does not bounce. It lands in the shared mailbox, and nobody may read it.

Sara sees no error, so she thinks both emails arrived. Only one reached Jon.

## Why companies use catch-all

Companies turn on catch-all so they do not miss email. Customers make typos. Old staff names keep receiving mail. A catch-all keeps all of it in one place.

## Why catch-all is a problem for email verification

A normal email check asks the server one question: "Do you accept mail for this address?" On a catch-all domain, the answer is always yes. A real person and a made-up name get the same answer.

So a basic check cannot confirm the mailbox. It can only report that the domain accepts everything.

This matters most for B2B lists. In one published test of 10,000 real business emails, 28% were on catch-all domains. The test was run by LeadMagic, a company that sells email verification, so treat it as a vendor test.

## What to do with catch-all addresses

You have three choices:

| Choice | What happens |
|---|---|
| **Remove them** | No risk, but you lose real contacts too |
| **Send to them** | Some will reach real people, some will be lost or bounce later |
| **Check them deeper** | A verifier that tests beyond the basic check sorts the real from the fake |

## How a verifier helps

Giggal.ai runs [catch-all verification](/catch-all-verification) as part of every check. It uses extra signals to return a real result, deliverable or undeliverable, instead of a "risky" label. For a longer guide with more examples, read [what a catch-all email address is](/blog/what-is-a-catch-all-email-address).
