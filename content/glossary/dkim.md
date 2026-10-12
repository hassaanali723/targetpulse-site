---
title: DKIM
description: What DKIM is, how a DKIM signature proves an email came from your domain, what a DKIM record looks like, and how to set it up and check it.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: dkim
short: DKIM stands for DomainKeys Identified Mail. It adds a digital signature to every email you send. The receiving server checks the signature to confirm the email came from your domain and was not changed after it was sent.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Signed email still bounces when the address does not exist
---

## What is DKIM?

DKIM stands for DomainKeys Identified Mail. It is defined in RFC 6376. DKIM adds a digital signature to each email that leaves your server. A digital signature is a long code that only your server can create.

The receiving server checks the code. If it is valid, two things are true. The email was signed by your domain. Nobody changed it after it was sent.

A domain is the name after the @ in an email address, such as example.com. DKIM works per domain. Each domain that sends email should sign it with its own key.

## An example: a shop sends a receipt

A shop runs at example.com. Lena buys a lamp, and the shop emails a receipt to her Gmail address. Here is what DKIM does.

1. The shop's sending server writes the receipt.
2. It uses a private key to create a signature for the email. A private key is a secret file that stays on the sending server.
3. It adds the signature to the email as a header called `DKIM-Signature`. A header is a line of technical information at the top of an email. Readers do not normally see it.
4. The email arrives at Gmail.
5. Gmail reads the header. It finds the domain example.com and the selector s2026a.
6. Gmail looks up the public key for that selector in the shop's DNS. DNS is the public directory where a domain publishes its settings.
7. Gmail uses the public key to check the signature. The check passes.
8. Gmail records the result as DKIM pass for example.com.

Say someone changed the amount on the receipt after it was sent. The check in step 7 would then fail. The public key can confirm a signature, but it cannot create one. Only the private key can do that.

## The DKIM signature

The DKIM signature is one header with several parts, called tags. Each tag is a letter, an equals sign and a value. Two tags matter most.

- `d=` is the signing domain, for example `d=example.com`.
- `s=` is the selector, for example `s=s2026a`. A selector is a label that names one key. A domain can have several keys at once, each with its own selector.

The header also holds the signature itself in `b=`, and a code for the email body in `bh=`. The receiving server uses all of them to run the check.

## The DKIM record

The public key is published in a DKIM record. This is a [DNS TXT record](/glossary/dns-txt-record), a DNS entry that holds plain text. Its name is built from the selector and the domain:

`s2026a._domainkey.example.com`

The value of the record looks like this:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` says this is a DKIM record.
- `k=rsa` names the type of key.
- `p=` holds the public key. The real value is several hundred characters long.

The private key never goes in DNS. It stays on the sending server. For key size, use 2048 bits. Gmail accepts 1024 bits as a minimum but recommends 2048. RFC 8301 says signers should use 2048 bits.

## Why DKIM matters

DKIM survives forwarding. Say someone forwards the shop's receipt to another account. The forwarding server sends it from its own IP address. An IP address is the number that identifies a server on the internet. That IP address is not in the shop's [SPF record](/glossary/spf), so SPF fails. The DKIM signature travels inside the email, so it still passes.

[DMARC](/glossary/dmarc) uses DKIM. DMARC passes when SPF or DKIM passes for the same domain shown in the From address. Forwarding breaks SPF, so DKIM is often the check that makes DMARC pass.

DKIM is also required for bulk senders. Google's sender guidelines require SPF, DKIM and DMARC from senders of 5,000 or more emails a day to Gmail. Microsoft has the same rule for Outlook.com, Hotmail and Live.

## How to set up DKIM

How you set up DKIM depends on who sends your email.

- **You use an email service** such as Google Workspace, Microsoft 365, Mailchimp or SendGrid. The service creates the key for you. It shows you the DKIM record to add at your DNS host. Your DNS host is usually the company where you bought the domain.
- **You run your own mail server.** You create the key pair yourself. Our [DKIM generator](/dkim-generator) creates a 2048-bit key pair and the TXT record in your browser. You install the private key on your server and publish the record in DNS.

Check one common problem. Many email services sign with their own shared domain by default. The signature passes, but the domain in `d=` is not yours, so DMARC alignment fails. Turn on custom DKIM in the service's settings, so `d=` shows your domain. The [DMARC alignment](/glossary/dmarc-alignment) page explains why this matters.

## How to check that DKIM works

1. Send an email from your domain to a personal Gmail account.
2. Open the email in Gmail.
3. Click the three dots menu and choose Show original.
4. Find the DKIM line near the top. It should say PASS with your domain.

If it says FAIL, check two things. The DNS record may not have finished publishing. Or the selector on your server may not match the selector in DNS exactly.

## DKIM and email verification

DKIM proves an email came from your domain, not that the recipient's address exists. A correctly signed email to a dead address still bounces. An [email verifier](/email-checker) asks the receiving server whether each mailbox exists before you send. A [bulk email verifier](/bulk-email-verifier) does the same for a whole list. DKIM proves who sent the email, and [email verification](/) makes sure it goes to addresses that can receive it.
