---
title: Email deliverability
description: What email deliverability means, how it differs from delivery, what affects it, how to measure it, and the steps that improve it.
slug: deliverability
date: 2026-10-12
updated: 2026-10-12
keyword: email deliverability
short: Email deliverability is whether your emails reach the inbox. An email can be delivered and still land in the spam folder. Good email deliverability means most of your emails arrive in the inbox, not in spam and not blocked.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Fewer bounces is the first step to better deliverability
---

## What is email deliverability?

Email deliverability is the ability of your emails to reach the inbox. An email you send can end up in one of three places. It can reach the inbox. It can go to the spam folder. Or the receiving server can reject it, which is called a bounce.

Deliverability is about the first place, the inbox. The mailbox provider decides where each email goes. A mailbox provider is the company that hosts the recipient's inbox, such as Gmail, Outlook.com or Yahoo. Each provider runs a [spam filter](/glossary/spam-filter) that makes this decision for every email.

## Delivery vs deliverability

These two words sound alike but measure different things. Delivery counts the emails that the receiving server accepted. Deliverability asks where those accepted emails went.

Say you send 1,000 emails to your customers. These are example numbers.

| Step | Emails | What it means |
| --- | --- | --- |
| Sent | 1,000 | You clicked send |
| Bounced | 40 | The receiving servers rejected them |
| Delivered | 960 | The receiving servers accepted them |
| In the inbox | 800 | Customers see them in their inbox |
| In spam | 160 | Customers see them only if they open the spam folder |

Your sending tool shows a delivery rate of 96 percent. That looks good. But only 800 of the 1,000 emails reached an inbox. That is 80 percent [inbox placement](/glossary/inbox-placement). A sending tool cannot see which folder an email went to, so it reports the 96 percent.

## What affects email deliverability

Providers do not publish their exact rules. These are the known factors.

- **Authentication.** Whether your domain passes [SPF](/glossary/spf), [DKIM](/glossary/dkim) and [DMARC](/glossary/dmarc). These records prove the email is really from you.
- **Sender reputation.** How much providers trust your domain and your sending IP address, based on your past email. An IP address is the number that identifies a server on the internet. See [sender reputation](/glossary/sender-reputation).
- **Bounces.** Sending to addresses that do not exist tells providers your list was not checked.
- **Spam complaints.** How often people click "Report spam". Google's sender guidelines say to keep this below 0.10 percent and never reach 0.30 percent.
- **List quality.** Whether people asked for your email, and whether the list contains [spam traps](/glossary/spam-trap).
- **Content.** Links, images and wording. Content matters less than the factors above.

## How to measure deliverability

You cannot look inside other people's inboxes. So you measure deliverability in two ways.

**A seed test.** You send your email to a set of test inboxes that you control, at Gmail, Outlook.com, Yahoo and other providers. Then you check where the email landed in each one. This set of test addresses is called a [seed list](/glossary/seed-list).

**Provider data.** [Google Postmaster Tools](/glossary/postmaster-tools) is a free service from Google. It shows data about the email your domain sends to Gmail users, such as your spam complaint rate and authentication results. Microsoft runs a similar service for Outlook.com, called SNDS.

Also watch your own numbers. A sudden drop in opens at one provider can mean your email started going to spam there.

## How to improve email deliverability

1. Set up SPF, DKIM and DMARC for every service that sends email for your domain.
2. Verify your list before you send, and remove addresses that do not exist.
3. Only email people who asked for it. Never buy a list.
4. Add a clear unsubscribe link. Google requires one-click unsubscribe in marketing email from senders of 5,000 or more emails a day.
5. Stop sending to people who have not opened anything in months.
6. Start slowly with a new domain or IP address. See [email warm-up](/glossary/email-warmup).
7. Watch your complaint rate in Postmaster Tools, and find the cause when it rises.

## Email deliverability and email verification

Verification improves one part of deliverability, which is your bounce rate. An [email checker](/email-checker) finds addresses that do not exist before you send to them. A [bulk email verifier](/bulk-email-verifier) does this for a full list in one upload. Fewer bounces protect your sender reputation, and reputation affects whether your emails reach the inbox. Still, [email verification](/) does not fix authentication, content or complaints, so the other steps above still matter.
