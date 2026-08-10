---
title: What is a secure email gateway?
description: A secure email gateway is a filtering layer in front of a company mail server. Here is what it does, who makes them, and why it complicates verification.
slug: what-is-a-secure-email-gateway
date: 2026-08-11
keyword: what is a secure email gateway
---

A secure email gateway is a filtering layer that sits in front of a company mail server and inspects every message before it is allowed through. If you keep seeing SEG in verification results and want to know what is a secure email gateway in practical terms, it is the checkpoint a company inbound and outbound mail passes through, scanning for threats and enforcing policy on the way. The mail server behind it never sees a message the gateway decides to block.

## SEG is just the shorthand

SEG stands for secure email gateway, and once you start looking you will see the abbreviation more often than the full phrase. The two are used interchangeably. When a verification tool marks an address as sitting behind a SEG, or a deliverability report mentions SEG filtering, it means the filtering layer described here. The term sounds more technical than the idea, which is a guard posted in front of the mailroom.

## What the gateway is actually doing

A gateway exists to keep bad mail out and sensitive mail in. On the inbound side it scans for spam, malware and phishing, then quarantines or rejects anything that trips a rule. On the outbound side it enforces data loss prevention and compliance, stopping messages that would leak customer data or breach a regulation. Many also handle encryption and long-term archiving.

A company adopts one because running all of that on the mail server itself is harder to manage and easier to get wrong. The gateway centralises the rules in one place that every message has to cross.

## The gateways you are most likely to meet

A handful of vendors dominate this space. Proofpoint, Mimecast, Barracuda and Cisco IronPort are the names you will run into most often on business domains, and there are many smaller ones behind them. We detect 15 secure email gateways in total.

They differ in features and pricing, but from the outside they behave the same way. Each stands in front of the real mail system and decides what reaches it. For that reason, the presence of a specific vendor tells you a company chose that product, and little else about the addresses behind it.

## A gateway is not the mailbox provider

It is easy to confuse the gateway with the company email system, but they are separate layers. A business can run its mailboxes on Microsoft 365 or Google Workspace and still put a gateway from a different vendor in front of them. So one company can provide the security layer while another hosts the inboxes. This is why a gateway in the mail path does not tell you which provider actually holds the mailbox, and why a security product sitting out front reveals nothing about the inbox behind it. The two choices are made independently, often by different teams on different budgets.

## How a gateway changes the path an email takes

Normally a message goes to the domain mail server directly. With a gateway in place, the domain points its mail routing at the gateway instead, so every incoming message arrives there first. The gateway inspects it, and only if it passes does it forward the message on to the real server where the mailbox lives.

The recipient never notices any of this. To anything on the outside, the gateway is the domain mail system, because it is the only part that answers. Some gateways go a step further and defer unfamiliar senders on purpose, holding a first contact and only responding properly on a later attempt.

## Why gateways interfere with verification

Verification depends on asking the mail server a direct question and reading a direct answer. A gateway breaks that chain. Because it answers on behalf of the domain, it can accept a message, or hold it for inspection, without ever consulting whether the mailbox behind it exists.

So a verifier asking about a specific address can get an accepting or noncommittal response that reflects the gateway policy, not the state of the mailbox. The deferral behaviour makes it worse, because a held first attempt looks like an inconclusive result even when the mailbox is perfectly real. The standard check is being answered by the wrong party.

A concrete version helps. A verifier probes an address at a gateway-protected domain. The gateway, following its own rules for unfamiliar senders, accepts the probe or defers it. Either way the verifier records a response that came from the gateway, not from the server that knows whether the mailbox exists. Nothing about the real inbox was tested, yet the check has an answer to report.

## A gateway tells you nothing about whether the mailbox is real

This is the part worth holding on to. The presence of a gateway says a company takes security seriously. It says nothing at all about whether any particular address behind it belongs to a real, active mailbox. A dead address and a live one can sit behind the same gateway and look identical from outside, which is exactly why gateway-protected addresses so often end up in the same unresolved pile as catch-all domains.

For a marketer, the reason this matters is reach. On a B2B list, a good share of your best contacts, the ones at larger and more security-conscious companies, sit behind exactly these gateways. Write them all off and you lose the enterprise end of your list. Send blind and the blocks land on your sending reputation. If your list is full of them, here is how we handle [emails protected by SEG gateways](/seg-email-verification).
