---
title: MX record
description: What an MX record is, how mail servers use it to find where to deliver email, what the priority number means, and what a missing MX record tells a verifier.
slug: mx-record
date: 2026-09-29
updated: 2026-10-12
keyword: mx record
short: An MX record is a setting on a domain that says which server receives email for that domain. When you send to name@example.com, your mail server looks up the MX record for example.com to find where to deliver the email.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Check if an address can receive email
---

## What is an MX record?

An MX record is a setting on a domain that says which server receives its email. MX stands for mail exchanger.

A few words first. A domain is a name such as example.com. It is also the part of an email address after the @. A server is a computer that runs all the time and handles email. DNS is the public directory that connects domain names to servers. Each entry in DNS is called a record. So an MX record is one type of DNS record.

The MX records of a domain list the servers that accept incoming email for that domain. Anyone can look them up.

A domain can have more than one MX record. Each MX record has a priority number. Servers with lower numbers are tried first. This is a typical setup for a Google Workspace domain:

| priority | mail server |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

If the server with priority 1 does not answer, the sending server tries the next one.

## A simple example

Here is what happens to one email.

1. **Omar writes an email.** Omar wants to email his accountant at name@example.com. He clicks Send.
2. **His mail server reads the domain.** It sees that the address ends in example.com.
3. **It looks up the MX record.** It asks DNS which server receives email for example.com.
4. **DNS answers.** The MX record for example.com says: mail.example.com, priority 10.
5. **It delivers the email.** Omar's mail server connects to mail.example.com and hands over the email.
6. **The accountant gets it.** The email arrives in the accountant's inbox.

Omar never sees these steps. His mail server does them for him. But without an MX record in step 4, the email would have nowhere to go.

## How email uses MX records

When you send to `name@example.com`, your mail server does three things:

1. It looks up the MX records for `example.com`.
2. It connects to the server with the lowest priority number.
3. It hands over the email using SMTP. SMTP is the standard way mail servers send email to each other.

RFC 5321, the email standard, describes this process. It also covers domains with no MX record. If the domain has a normal A record, mail servers treat that record as the MX record. An A record is a DNS record that connects a domain name to the number of one server, called its IP address.

## What an MX record tells you about an address

The MX record is the first real check in email verification. The syntax check comes before it. The syntax check only looks at the format, for example that the address has one @ and no spaces.

There are three possible results of the MX record lookup:

- **No MX record and no A record.** The domain cannot receive email. Every address on that domain is invalid. **Example:** someone types a well-known domain such as gmail.com with two letters swapped. A typo like this usually fails at this step.
- **An MX record exists.** The domain can receive email. This does not tell you if the specific mailbox exists. That needs the next step: an SMTP conversation with the server. **Example:** example.com has an MX record, but that does not prove the mailbox anna@example.com is real.
- **The MX record points to a known gateway.** If the mail server is Proofpoint, Mimecast or Barracuda, the domain uses a [secure email gateway](/glossary/secure-email-gateway). A gateway is a security service that checks a company's email before it reaches staff inboxes. The mailbox check behaves differently on these domains.

## Why it matters for senders

Anyone can read the MX record of a domain with a DNS lookup. When a company changes email providers or shuts down, its MX records change or disappear. The addresses stop working. Nobody tells you. This is a common cause of [hard bounces](/glossary/hard-bounce) on old lists. A hard bounce is an email that is refused for good.

**Example:** you met 40 people from old-firm.example at a trade show in 2021. The firm closes in 2024, and its domain no longer has an MX record. Every email you send to those 40 contacts now bounces.

## How a verifier handles it

An [email verifier](/email-checker) looks up the MX record first. If there is no MX record, the address is marked invalid and no further checks run. If there is an MX record, the verifier connects to that server and asks if the mailbox exists. The MX lookup also tells the verifier what kind of server it is. This matters for [catch-all domains](/glossary/catch-all-email) and gateways.

A [bulk email verifier](/bulk-email-verifier) runs the same MX record lookup for every domain on your list. [Email verification](/) uses the MX record to find domains that cannot receive email, before you send to them. It does not change anything in your own DNS.
