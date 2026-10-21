---
title: Return-Path
description: What the Return-Path address is, how it differs from the From address, where bounce messages go, and why SPF and DMARC check it. With a simple example.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: The Return-Path is the address where bounce messages go. The sending server sets it, and it is often different from the From address you see in your inbox. SPF checks the domain in the Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Remove dead addresses before they bounce
---

## What is the Return-Path?

The Return-Path is the address where bounce messages go. A bounce message is the automatic notice a server sends when an email cannot be delivered.

Every email has two sender addresses. The first is the **From** address. This is the name and address the reader sees in their inbox. The second is the **Return-Path**. Readers do not see it. Mail servers use it.

Think of a paper letter. The letter inside the envelope has your name at the top. That is the From address. The envelope has a return address in the corner. The post office uses it only when it cannot deliver the letter. That is the Return-Path.

The Return-Path is also called the envelope sender or the bounce address. The sending server gives it to the receiving server at the start of the delivery. The receiving server then writes it into a line at the top of the email that starts with `Return-Path:`.

## A simple example

Here is how the Return-Path works when an email bounces.

1. **Tom sends a newsletter.** Tom runs a bakery. He sends a monthly newsletter through an email service provider. A provider is a company that sends bulk email for you.
2. **Two addresses are set.** The From address is tom@bakery.example. The provider sets the Return-Path to its own bounce address, for example bounces@mail.provider.example.
3. **One customer has left.** A customer on the list moved jobs. Her old address no longer exists.
4. **The bounce goes to the Return-Path.** The receiving server sends the bounce notice to bounces@mail.provider.example, not to Tom.
5. **The provider acts on it.** The provider reads the bounce and stops sending to that address. Tom never sees the notice.

This is why bounces from newsletters often do not reach your own inbox. They go to the Return-Path, and your provider handles them.

## Return-Path vs From address

| | From address | Return-Path |
|---|---|---|
| **Who sees it** | The reader, in their inbox | Mail servers |
| **Who sets it** | You, or your email app | The sending server |
| **What it is for** | Showing who sent the email | Receiving bounce messages |
| **Checked by SPF** | No | Yes |

The two addresses can be the same. When you send a normal email from Gmail or Outlook, they usually are. When you send through a provider, they are usually different.

## How to find the Return-Path of an email

Open the full headers of the email. In Gmail, open the email, click the three dots and choose **Show original**. In Outlook, open the message properties. Look near the top for a line like this:

`Return-Path: <bounces@mail.provider.example>`

## Why it matters for SPF and DMARC

[SPF](/glossary/spf) is a rule on your domain that lists the servers allowed to send your email. SPF checks the domain in the Return-Path. It does not check the From address.

[DMARC](/glossary/dmarc) adds a second test. It asks whether the domain that passed SPF matches the domain in the From address. If your provider uses its own Return-Path domain, SPF can pass for the provider while it does not match your From domain.

Many providers let you set a Return-Path on your own domain. This is often called a custom bounce domain. With it, SPF passes for your own domain, and DMARC can count that result.

**Example:** Tom's From address is on bakery.example. His provider lets him set the Return-Path to bounces.bakery.example. Now the domain that passes SPF matches the domain in the From address.

## How a verifier helps

Every bounce from your list goes to the Return-Path. Your provider counts them. When too many come back, many providers pause the account or ask you to clean the list.

An [email checker](/email-checker) asks the receiving server whether an address exists before you send anything. Dead addresses are removed first, so far fewer bounces ever reach the Return-Path.
