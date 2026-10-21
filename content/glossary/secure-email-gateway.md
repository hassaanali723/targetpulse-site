---
title: Secure email gateway (SEG)
description: What a secure email gateway is, how it filters email before it reaches a company inbox, how to spot one from the MX record, and why it affects email checks.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: A secure email gateway, or SEG, is a filter that sits in front of a company's mailboxes. It checks every incoming email for spam, phishing and harmful files before anyone receives it. Common examples are Mimecast, Proofpoint and Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Verify addresses behind secure email gateways
---

## What is a secure email gateway?

A secure email gateway, or SEG, is a security filter for a company's email. It sits between the internet and the company's mailboxes.

Every email sent to the company goes to the gateway first. The gateway scans it. It looks for spam, phishing links and harmful attachments. Safe email goes on to the mailbox. Dangerous email is blocked or held.

Large companies, banks, hospitals and government offices often use a gateway. The best-known products include Mimecast, Proofpoint and Barracuda.

## A simple example

1. **Daniel emails a bank.** Daniel sells software. He writes to a manager at a bank.
2. **The gateway receives it first.** The bank's email goes through a Proofpoint gateway.
3. **The gateway scans it.** It checks the links and the attachment in Daniel's email.
4. **The email is delivered.** Nothing looks harmful, so the gateway passes it to the manager's inbox.

Daniel never sees the gateway. If his email had a dangerous link, it would have stopped there.

## How to spot a gateway

Look at the domain's [MX record](/glossary/mx-record). The MX record tells the world which server receives email for a domain. When a gateway is in use, the MX record points to the gateway instead of the mailbox provider.

| Gateway | The MX record often ends in |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

You can look up any domain's MX record with an MX lookup tool.

## Why gateways affect email verification

An email checker asks the receiving server whether an address exists. On a domain with a gateway, the gateway answers instead of the real mail server.

Some gateways refuse to answer checks at all. Most tools then return "unknown", even when the person is real. Other gateways answer yes to every address, which looks the same as a [catch-all](/glossary/catch-all-email) domain.

This hits business lists hardest, because the contacts who work at large companies often sit behind gateways.

## How a verifier helps

Giggal.ai recognises 15 named gateways, including Mimecast, Proofpoint and Barracuda, and returns a real result on addresses behind them. To see how this works step by step, read [how to verify emails behind a secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
