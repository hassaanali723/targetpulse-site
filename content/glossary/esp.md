---
title: Email service provider (ESP)
description: What an email service provider is, examples such as Mailchimp and SendGrid, how an ESP differs from Gmail or Outlook, and why ESPs watch your bounces.
slug: esp
date: 2026-10-12
updated: 2026-10-12
keyword: email service provider
short: An email service provider, or ESP, is a company whose service sends emails for you. Businesses use one to send newsletters, receipts and password resets to many people. Mailchimp, Brevo and SendGrid are examples.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Verify your list before you upload it to your ESP
---

## What is an email service provider (ESP)?

An email service provider, or ESP, is a company that sends email for other businesses. Email sent this way is sometimes called ESP email. You write the email and choose who gets it. The ESP's servers send it to every address. A server is a computer that runs all the time and does a job for other computers.

Businesses use an ESP because a normal inbox is not built for sending to many people. Gmail and Outlook.com limit how many emails one account can send each day. They also have no tools for unsubscribe links, bounce handling or campaign reports.

## An example: a bakery sends its newsletter

Rosa owns a bakery. She has 3,000 customers on her email list. Each month she sends a newsletter about new cakes and opening hours.

At first she tried to send it from her personal Gmail account. Gmail stopped her after a few hundred emails, because personal accounts have a daily sending limit. Her customers also had no way to unsubscribe.

So she signed up with an ESP. Now she does this each month.

1. She uploads her list of 3,000 addresses to the ESP.
2. She writes the newsletter in the ESP's editor.
3. She clicks send. The ESP's servers send the email to all 3,000 addresses.
4. The ESP adds an unsubscribe link to each email. It removes people who click it.
5. The next day, she reads a report. It shows how many emails bounced, were opened and were clicked.

## Examples of email service providers

| ESP | Commonly used for |
| --- | --- |
| Mailchimp | Newsletters and marketing campaigns |
| Brevo | Marketing campaigns and transactional email |
| SendGrid | Transactional email from apps, and marketing email |
| Amazon SES | Sending email from apps and websites |
| Postmark | Transactional email such as receipts and password resets |

## ESP vs mailbox provider

These two are often confused. They do different jobs.

- An **email service provider** sends email for you. Examples: Mailchimp, SendGrid, Amazon SES.
- A **mailbox provider** hosts the inbox where people read their email. Examples: Gmail, Outlook.com, Yahoo Mail.

In the bakery example, the ESP sends Rosa's newsletter. Gmail, Outlook.com and Yahoo Mail are where her customers read it. The mailbox provider decides if the newsletter goes to the inbox or to spam. The ESP cannot make that decision.

## Marketing ESP vs transactional ESP

ESPs handle two kinds of email.

- **Marketing email** goes to many people at once, on your schedule. Newsletters and sale announcements are marketing email.
- **Transactional email** goes to one person after they do something. Receipts, password resets and shipping updates are transactional email.

Some ESPs focus on one kind. Postmark and Amazon SES are mainly used for transactional email. Mailchimp is best known for marketing email. Others, such as Brevo and SendGrid, offer both. Many businesses send the two kinds through separate accounts or services. That way, a problem with a campaign does not delay password resets.

## What an email service provider does for you

- Runs the sending servers and the [mail transfer agent](/glossary/mta) software on them.
- Sends each email over [SMTP](/glossary/smtp), the standard rules servers use to pass email to each other.
- Adds unsubscribe links and keeps a list of people who unsubscribed.
- Reads bounce messages and stops sending to addresses that hard bounce.
- Shows reports on opens, clicks, bounces and spam complaints.
- Helps you set up SPF and DKIM, so your emails prove they come from your domain.

## Why ESPs care about your bounces

When you send through an ESP, you use its servers and often its IP addresses. An IP address is the number that identifies a server on the internet. If your emails bounce or get spam complaints, the reputation of those IP addresses drops. Other customers who share the same IP addresses can be affected too.

For this reason, many ESPs watch each account's bounce rate. If it is too high, they may review the account or pause it. A list with many old or mistyped addresses leads to a high [bounce rate](/glossary/bounce-rate).

## Email service providers and email verification

Verify your list before you upload it to your ESP. An [email checker](/email-checker) tells you if one address exists. A [bulk email verifier](/bulk-email-verifier) checks a whole file, such as Rosa's 3,000 addresses, and marks the ones that would bounce. You remove those and upload the clean list. This [email verification](/) step does not replace your ESP, but it lowers your bounce rate and protects your ESP account.
