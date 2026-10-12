---
title: BIMI
description: What BIMI in email is, how it shows your brand logo in the inbox, what you need first, what a BIMI record looks like, and which inboxes show it.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi email
short: BIMI is an email standard that shows your brand logo next to your emails in inboxes that support it. It stands for Brand Indicators for Message Identification. It only works when your domain passes DMARC with a quarantine or reject policy.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: A logo helps only if the email reaches a real inbox
---

## What is BIMI in email?

BIMI stands for Brand Indicators for Message Identification. It is an email standard that lets a brand show its logo next to its emails. The logo appears in inboxes that support BIMI, such as Gmail and Apple Mail. The BIMI Group, a working group of email companies, publishes the standard.

BIMI does not add security by itself. It shows a logo on email that already passes DMARC. The work you do to get there is what protects your domain.

## An example: a brand logo in Gmail

Open Gmail on your phone. Each email in the list has a small round picture on the left. For most senders, Gmail shows a circle with the first letter of the sender's name. For some brands, Gmail shows the brand's own logo in that circle. Those brands use BIMI.

Say a shoe shop at example.com sets up BIMI. It sends a newsletter to Priya's Gmail address. Here is what happens.

1. Gmail checks SPF, DKIM and DMARC for example.com. The email passes DMARC.
2. Gmail sees that the shop's DMARC policy is quarantine or reject.
3. Gmail looks up the BIMI record at `default._bimi.example.com`.
4. The record points to the shop's logo file and to its mark certificate.
5. Gmail checks the certificate, then shows the logo next to the email.

If any step fails, Priya sees the usual letter instead. The email itself is still delivered as normal.

## What you need for BIMI

You need three things before a logo shows in Gmail.

- **DMARC at enforcement.** Your [DMARC](/glossary/dmarc) policy must be `p=quarantine` or `p=reject`. Google states that BIMI does not support `p=none`.
- **The logo as an SVG Tiny PS file.** SVG is an image format made of shapes, not pixels. SVG Tiny PS is a cut-down version of SVG built for inboxes. The image must be square and include a title with your brand name. It cannot contain scripts, animation or links to other files. The file should stay under 32 KB.
- **A mark certificate.** This is a file from a certificate authority, a company that checks your right to use the logo. Gmail accepts two types.

| Certificate | Needs a registered trademark | What Gmail shows |
| --- | --- | --- |
| VMC (Verified Mark Certificate) | Yes | Your logo and a blue checkmark |
| CMC (Common Mark Certificate) | No | Your logo, without the checkmark |

## The BIMI record

A BIMI record is a [DNS TXT record](/glossary/dns-txt-record). DNS is the public directory where a domain publishes its settings. A TXT record is an entry in DNS that holds plain text. The BIMI record sits at `default._bimi.example.com`. Here, `default` is the selector, a label for the record.

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1` says this is a BIMI record.
- `l=` is the web address of your SVG logo.
- `a=` is the web address of your VMC or CMC certificate, which is a PEM file.

Google's own examples also show a record with `l=` left empty and only `a=` filled in. This works because the logo is stored inside the certificate file. Follow what your certificate provider recommends.

## Which inboxes show BIMI logos

Support differs by provider. These are the rules stated on our BIMI generator page.

- **Gmail** shows the logo only with a VMC or a CMC.
- **Apple Mail** shows the logo only with a VMC.
- **Yahoo and Fastmail** can show a logo from a record with no certificate at all.

Inboxes that do not support BIMI show nothing different. Providers can also take some time to pick up a new BIMI record. So a logo that does not show on the first day is not always an error.

## How to set up BIMI

1. Set up SPF and DKIM for every service that sends your email.
2. Move your DMARC policy to quarantine or reject. Our [DMARC generator](/dmarc-generator) builds the record.
3. Turn your logo into an SVG Tiny PS file.
4. Buy a VMC or a CMC if you want the logo in Gmail.
5. Build the BIMI record with our [BIMI generator](/bimi-generator). It also checks your SVG file in your browser.
6. Publish the record at `default._bimi` in your DNS.
7. Send a test email to a Gmail account and look for the logo.

## BIMI and email verification

BIMI does not improve delivery by itself. It only shows a logo on email that reaches the inbox and passes DMARC. An email to an address that does not exist bounces, so nobody sees the logo. An [email checker](/email-checker) and a [bulk email verifier](/bulk-email-verifier) find those addresses so you can remove them before you send. With [email verification](/), fewer of your emails bounce, so more real people see your logo.
