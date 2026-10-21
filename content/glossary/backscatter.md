---
title: Backscatter
description: What backscatter is, why you get bounce messages for emails you never sent, whether your account was hacked, and how to stop it on your own domain.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter email
short: Backscatter is bounce messages you receive for emails you never sent. A spammer put your address in the sender field of their emails. When those emails failed, the bounce messages came back to you.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Keep your own bounces low with a clean list
---

## What is backscatter?

Backscatter is bounce messages you receive for emails you never sent.

It starts with spam. A spammer sends thousands of emails and types your address into the sender field. Many of those emails go to addresses that do not exist. The receiving servers send a bounce message back to the sender address. That address is yours, so the bounces land in your inbox.

A bounce message is the automatic notice a server sends when an email cannot be delivered. Its formal name is a [non-delivery report](/glossary/ndr).

## A simple example

Here is how backscatter reaches a small business.

1. **Lena runs a flower shop.** Her address is hello@flowers.example.
2. **A spammer copies her address.** The spammer sends 10,000 fake emails. Each one says it is from hello@flowers.example.
3. **Many emails fail.** About a third go to addresses that do not exist.
4. **Some servers accept first and check later.** These servers take the email, then find there is no such mailbox.
5. **The bounces go to Lena.** Those servers send bounce notices to hello@flowers.example.
6. **Lena's inbox fills up.** One morning she finds hundreds of "Undeliverable" messages for emails she never wrote.

These numbers are only an example. The pattern is common.

## Was my account hacked?

Usually not. Sending an email with a fake sender address does not require access to your account. It is like writing someone else's return address on an envelope. Nobody needed their key to do it.

Check your Sent folder. If the emails are not there, your account did not send them. If they are there, change your password and turn on two-step login.

## Why it happens

Backscatter happens because some servers accept an email first and check the address later. When the check fails, they send a bounce to the sender address. They cannot know the sender address was fake.

Well-run servers check the address while the other server is still connected. If the address does not exist, they refuse the email at once. No bounce message is created, so no backscatter reaches anyone.

## How to stop it on your domain

You cannot stop spammers from typing your address. You can make receiving servers refuse their fake emails. Do this with three records on your domain.

| Record | What it does |
|---|---|
| [SPF](/glossary/spf) | Lists the servers allowed to send email for your domain |
| [DKIM](/glossary/dkim) | Adds a signature that proves an email really came from you |
| [DMARC](/glossary/dmarc) | Tells receiving servers what to do with emails that fail those checks |

Start DMARC with `p=none` and read the reports. When only your own services pass, move to `p=quarantine` and then `p=reject`. With `p=reject`, servers refuse the fake emails instead of bouncing them to you.

Until then, you can filter the bounce messages into a folder. Do not reply to them.

## Why server owners care

If you run a mail server, check how it handles unknown addresses. A server that accepts mail and bounces it later sends backscatter to innocent people. Some blocklists list servers that do this, for example the list at backscatterer.org. Being on a blocklist can stop your own email from being delivered.

## How a verifier helps

[Email verification](/) does not stop backscatter, because you did not send those emails. It helps with the bounces you do cause. Remove dead addresses from your own list before you send, so every bounce in your inbox is one you can explain.
