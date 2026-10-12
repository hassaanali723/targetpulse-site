---
title: SMTP
description: What SMTP means, how an email travels from one server to another, what an SMTP server is, which SMTP ports to use, and what error replies mean.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: smtp
short: SMTP stands for Simple Mail Transfer Protocol. It is the set of rules that email servers use to send email to each other. Every email you send travels from server to server using SMTP.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Check each address with the receiving server before you send
---

## What is SMTP? (SMTP meaning)

SMTP stands for Simple Mail Transfer Protocol. A protocol is a fixed set of rules that two computers follow to talk to each other. SMTP is the set of rules for sending email. The current version is defined in RFC 5321. An RFC is a public document that sets an internet standard.

A server is a computer that runs all the time and does a job for other computers. An email server sends, receives or stores email. So the short answer to "what is SMTP" is this. It is how email servers pass email to each other.

SMTP only moves email. It does not show you your inbox. Other protocols do that, as explained further down.

## An example: Ana sends an email to Ben

Ana uses Gmail. Ben works at a company called Northwind. His address is ben@northwind.com, and his company uses Outlook through Microsoft 365. Ana writes an email and clicks Send. Here is what happens.

1. Gmail's sending server takes Ana's email.
2. It reads the part after the @ sign, northwind.com. This is the domain, the name of Ben's company on the internet.
3. It looks up the MX record of northwind.com in DNS. DNS is the public directory of the internet. An [MX record](/glossary/mx-record) names the server that receives email for a domain.
4. The MX record points to a Microsoft server. Gmail's server opens a connection to it.
5. Gmail's server introduces itself with the command `EHLO`. Then it gives the sender address with `MAIL FROM`.
6. It gives the recipient address with `RCPT TO:<ben@northwind.com>`.
7. Microsoft's server replies `250`. This means it accepts email for that address.
8. Gmail's server sends the email itself with the `DATA` command.
9. Microsoft's server replies `250` again. It has accepted the email and places it in Ben's mailbox.
10. Gmail's server ends the connection with `QUIT`.

Ana and Ben see none of these steps. Ana sees "Sent", and Ben sees a new email.

## What an SMTP server is

An SMTP server is a server that sends or receives email using SMTP. In the example, Gmail's sending server and Microsoft's receiving server are both SMTP servers. The software that runs on them is called a [mail transfer agent](/glossary/mta), or MTA.

You meet SMTP servers when you set up an email program or an app. Say you want a website contact form to send email through a Gmail account. The form needs the address of Gmail's SMTP server, which is `smtp.gmail.com`. It also needs a port number, a username and a password. The form hands each email to that server, and the server sends it on.

Businesses that send a lot of email usually use an [email service provider](/glossary/esp) such as SendGrid or Amazon SES. These services run SMTP servers for their customers.

## SMTP ports: 25, 587 and 465

A port is a number that tells a server which service a connection is for. SMTP uses three common port numbers.

| Port | What it is used for | Encryption |
| --- | --- | --- |
| 25 | One mail server sending email to another mail server | Optional, turned on with STARTTLS |
| 587 | An app or email program handing email to its own SMTP server | Turned on with STARTTLS before login |
| 465 | The same job as port 587 | Encrypted from the first moment |

STARTTLS is a command that switches an open connection to an encrypted one. Encryption scrambles the content, so nobody between the two servers can read it.

If you set up an app or an email program, use port 587 or 465. Many home internet providers and cloud hosts block outgoing connections on port 25. They do this to stop infected computers from sending spam.

## SMTP vs IMAP and POP3

SMTP sends email. It does not let you read it. Two other protocols handle reading.

- **SMTP** sends email out, from your program to your server and from server to server.
- **IMAP** lets an email program read email that stays on the server. You see the same inbox on your phone and your laptop.
- **POP3** downloads email to one device. Older setups often deleted it from the server afterwards.

So an email program such as Outlook or Apple Mail uses two settings. It uses IMAP or POP3 to read your inbox. It uses SMTP to send.

## When an SMTP server says no

Every SMTP reply starts with a three-digit code. The first digit tells you the type of answer.

- **2xx means success.** `250` means the request was accepted.
- **4xx means a temporary problem.** The sending server tries again later. Example: `451`, try again later.
- **5xx means a permanent failure.** Sending again will fail. Example: `550 5.1.1`, the mailbox does not exist.

A 5xx reply to a real email becomes a [hard bounce](/glossary/hard-bounce). A 4xx reply is a [soft bounce](/glossary/soft-bounce). The [SMTP error codes](/glossary/smtp-error-codes) page lists the common codes and what each one means.

Some servers send a 4xx reply on purpose to senders they do not know yet. This is called [greylisting](/glossary/greylisting). The first attempt fails, and a later retry is accepted.

## SMTP and email verification

An [email verifier](/email-checker) uses the same SMTP conversation as the example above, but it stops before step 8. It asks about the address with `RCPT TO`, and a `250` reply means the server accepts email for it. A `550 5.1.1` reply means the mailbox does not exist. The verifier then sends `QUIT`, so no email is ever sent. A [bulk email verifier](/bulk-email-verifier) runs this [email verification](/) for a whole list, so you can remove addresses that would bounce.
