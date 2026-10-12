---
title: Email warm-up
description: What email warm-up is, why a new domain needs it, an example warm-up schedule, manual warm-up vs warm-up tools, and the mistakes that undo it.
slug: email-warmup
date: 2026-10-12
updated: 2026-10-12
keyword: email warm up
short: Email warm-up means slowly increasing how many emails a new address or domain sends. Mailbox providers have no history for a new domain, so they are careful with its email. Warm-up builds that history step by step.
related: ip-warming, domain-reputation, sender-reputation, deliverability, bounce-rate, spam-filter
cta: Verify your list before the first real campaign
---

## What is email warm-up?

Email warm-up is the process of starting slowly with a new email address or domain. You send a small number of emails at first. Then you raise the number a little each week. A domain is the name after the @ in an email address, such as example.com.

The goal is to show mailbox providers such as Gmail and Outlook.com that people want your email. Providers watch how people react to your first emails. If few emails bounce and few people complain, providers trust your domain more. Then they accept more email from it.

## Why a new domain needs email warm-up

Mailbox providers judge a sender by its history. This is called [domain reputation](/glossary/domain-reputation). A new domain has no history at all.

Spammers often register new domains and send thousands of emails on the first day. So providers are careful with domains they do not know yet. A large first campaign from a brand-new domain may be slowed down, sent to spam or partly rejected.

Warm-up avoids this. You start with a small volume, which is normal for a new sender. Each good week gives providers more history to judge you by.

## An example email warm-up schedule

Say Leo sets up a new sales domain, leo-outreach.com. He wants to send 200 emails a day from it. This schedule shows one way to build up. The numbers are only an example. Real schedules vary by provider, list and tool.

| Week | Emails per day | What to watch |
| --- | --- | --- |
| 1 | About 20 | Replies and bounces |
| 2 | About 40 | Whether emails land in spam |
| 3 | About 80 | Spam complaints |
| 4 | About 120 | Open rates at each provider |
| 5 and later | Up to 200 | Keep the volume steady |

In week 1, Leo sends to the people most likely to reply, such as existing contacts. If bounces or complaints rise in any week, he stays at the same level for another week.

## Manual warm-up vs warm-up tools

**Manual warm-up** means you send real emails to real contacts. You raise the number on a schedule like the one above. You start with the people most likely to open and reply.

**Warm-up tools** do part of this for you. You connect your mailbox to the tool. The tool sends emails between your mailbox and a network of other mailboxes that use the same tool. Those mailboxes open the emails, reply to them and move them out of spam. This creates activity on your new address before you send real campaigns.

Both methods aim for steady volume and good reactions. A warm-up tool does not replace a good list. Your reputation still depends on how real recipients react to your real campaigns.

## Email warm-up vs IP warming

| | Email warm-up | IP warming |
| --- | --- | --- |
| What it builds | Trust in a new domain or mailbox | Trust in a new sending IP address |
| Who needs it | Anyone with a new domain or mailbox | Senders with a new dedicated IP |
| Typical sender | Sales teams and small businesses | Large senders with their own IP |

An IP address is the number that identifies a sending server. If you send through a shared IP at an ESP, that IP already has a sending history. You only need to warm up your domain. See [IP warming](/glossary/ip-warming).

## Mistakes that undo email warm-up

- **Sending to an unverified list.** Say 10 of your first 100 emails bounce. Providers then see a new sender with a bad list in week one.
- **Jumping volume.** Going from 40 emails a day to 1,000 in one step matches what spammers do.
- **Missing authentication.** Set up [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc) before the first email, not after.
- **Ignoring replies.** If people ask you to stop, remove them at once. Otherwise they may click "Report spam".
- **Changing too much at once.** A new domain, a new tool and a new list in the same week make problems hard to trace.

## Email warm-up and email verification

Verify your list before the first real campaign from a new domain. In the first weeks, providers have little history to judge you by, so each bounce stands out. An [email verifier](/email-checker) shows whether an address exists before you send to it. A [bulk email verifier](/bulk-email-verifier) does this for your whole list, so the emails in your warm-up go to real mailboxes. Warm-up builds trust slowly, and [email verification](/) stops bounces from undoing that work.
