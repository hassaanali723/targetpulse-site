---
title: Email spoofing
description: What email spoofing is, an example of a fake CEO email, why email allows it, how to spot a spoofed email, and how to protect your domain.
slug: email-spoofing
date: 2026-10-12
updated: 2026-10-12
keyword: email spoofing
short: Email spoofing is sending an email with a fake sender address, so it looks like it came from someone else. Scammers use it to pose as a bank, a supplier or your own manager. SPF, DKIM and DMARC are the records that stop it for a domain.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Verification checks addresses. DMARC checks senders
---

## What is email spoofing?

Email spoofing means sending an email with a false sender address. The email looks like it came from a person or company you know. In fact, someone else sent it. Scammers use spoofing to make people pay fake invoices, share passwords or open harmful files.

A spoofed email shows a real address in the From line. The From line is the sender name and address you see in your inbox. This is what makes email spoofing different from an email sent from a similar-looking address. Both are explained below.

## An example: a fake email from the CEO

Sara works in finance at a company that uses the domain example.com. A domain is the name after the @ in an email address. At 4 pm on a Friday, Sara gets this email.

- **From:** David Brown, david.brown@example.com
- **Subject:** Urgent payment today
- **Text:** "Please pay the attached invoice to our new supplier before 5 pm. I am in meetings, so reply by email only."

David Brown is the real CEO, and the address is his real address. But David did not send this email. A scammer did, from a server that has nothing to do with example.com.

If Sara pays, the money goes to the scammer's bank account. This type of fraud is often called business email compromise. It works because the email looks normal and asks for speed.

## Why email spoofing is possible

SMTP is the protocol that sends email between servers. It was first defined in 1982. It does not check the From address. Any mail server can be set up to write any address in that line, and the email will still be sent.

So the receiving server has no built-in way to know if the From address is true. This is why three checks were added later. Domain owners publish them in DNS, the public directory where a domain lists its settings.

## Signs of a spoofed email

A spoofed email can look correct in every detail. These signs help you spot one.

- **The Reply-To address is different.** Click Reply and look at the address. If it changes to an unknown address, the email may be fake.
- **The checks fail.** In Gmail, open the email, click the three dots and choose Show original. Look at the SPF, DKIM and DMARC lines. A DMARC FAIL is a strong warning.
- **It asks for money or a password, fast.** Requests to pay today, change bank details or log in are the usual goals of a spoofed email.
- **It tells you to avoid other channels.** "Email only" or "do not call me" is a warning sign.
- **The tone or signature is wrong.** The real person may never write that way.

## How to protect your domain from spoofing

You cannot stop someone from typing your address into the From line. You can tell receiving servers to block those emails. This takes three DNS records.

1. **SPF** lists the servers allowed to send email for your domain. See [SPF record](/glossary/spf).
2. **DKIM** adds a signature to your real emails that a scammer cannot create. See [DKIM](/glossary/dkim).
3. **DMARC** tells receiving servers what to do with email that uses your domain in From but fails both checks. See [DMARC](/glossary/dmarc).

With DMARC at `p=reject`, receivers that follow your policy block the spoofed email before it reaches anyone. At `p=none`, DMARC only sends you reports. It does not stop the email. For DMARC to pass, SPF or DKIM must pass for the same domain shown in From. This is called [DMARC alignment](/glossary/dmarc-alignment).

## Spoofing vs phishing vs lookalike domains

These words are often mixed up. They mean different things.

| Term | What it is | Example |
| --- | --- | --- |
| Email spoofing | An email that uses your real address in From without your permission | From: billing@example.com, sent by a scammer |
| Phishing | Any email that tries to trick you into giving money, data or passwords | A fake "your account is locked" email with a login link |
| Lookalike domain | A separate domain registered to look like yours | exampel.com or example-billing.com |

Spoofing is one method of phishing, and a lookalike domain is another. DMARC stops spoofing of your exact domain. It cannot stop a lookalike domain. The scammer owns that domain, so they can set up its SPF, DKIM and DMARC records themselves.

## What to do if you get a spoofed email

1. Do not reply, click links or open attachments.
2. Check the request another way. Call the person on a phone number you already know, not one from the email.
3. Report it. In Gmail, use the three dots menu and choose Report phishing. In Outlook, use the Report button.
4. If it uses your company's domain, tell your IT team. They can check your DMARC reports.
5. If you already paid or shared a password, contact your bank or change the password at once.

## Email spoofing and email verification

An [email checker](/email-checker) does not detect spoofing. It tells you whether an address exists and accepts email, not who really sent a message. A spoofed email uses a real address, so that address would still check as valid. A [bulk email verifier](/bulk-email-verifier) helps on your own sending side, by removing dead addresses from your list before a campaign. To stop spoofing, use SPF, DKIM and DMARC, and use [email verification](/) to keep your bounce rate low.
