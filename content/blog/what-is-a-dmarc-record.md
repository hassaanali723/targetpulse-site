---
title: "What Is a DMARC Record?"
seoTitle: "What Is a DMARC Record? Tags, Examples and Reports (2026)"
description: "A DMARC record is a TXT record at _dmarc.yourdomain telling receivers what to do with mail that fails authentication. Every tag in the 2026 standard, with examples."
slug: what-is-a-dmarc-record
date: 2026-10-04
updated: 2026-10-09
keyword: what is a dmarc record
image: /blog/covers/what-is-a-dmarc-record.webp
imageAlt: What is a DMARC record? guide with tag breakdown and policy overview
---

A DMARC record is one short line of text that you add to your domain's DNS settings. It tells other mail servers what to do with an email that claims to come from your domain but fails the security checks. It also tells them where to send you reports about the email they receive in your name.

**In one sentence:** DMARC is a public rule that says "if an email claims to be from my domain but is not really from me, put it in spam or block it, and send me a report."

## DMARC explained with an example

### The problem

Anyone can send an email and put your address in the From line. Say your domain is `example.com`. A scammer sends your customer this email:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Your customer sees `example.com` and trusts it. But you never sent this email.

### The two checks that already exist

Mail providers like Gmail and Outlook can already run two checks on every email:

- **SPF:** did this email come from a server that `example.com` allows to send its email?
- **DKIM:** does this email carry the digital signature of `example.com`?

On their own, these checks have a gap. The scammer can pass them for their own domain, while the From line still shows yours. Nothing connects the check to the address your customer sees.

### What DMARC adds

DMARC adds one rule. SPF or DKIM must pass for the same domain that is shown in the From line. This match is called **alignment**. If neither check passes for that domain, the email fails DMARC.

DMARC also lets you decide what happens to an email that fails.

### A DMARC record, part by part

You add this line to the DNS settings of `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Here is what each part says:

- `v=DMARC1`: "This is my DMARC rule."
- `p=reject`: "If an email says it is from example.com but fails the check, block it."
- `rua=mailto:reports@example.com`: "Send me a daily report about everyone who sends email in my name."

### What happens to the fake email

1. The scammer's email from `billing@example.com` reaches Gmail.
2. Gmail runs SPF and DKIM. Neither check passes for `example.com`.
3. Gmail reads your DMARC record. It says `p=reject`.
4. Gmail blocks the email. Your customer never sees it.

Your real emails pass the same checks, so they are delivered as normal.

### The three choices for p

| Setting | What happens to an email that fails DMARC | When to use it |
| --- | --- | --- |
| p=none | Nothing. It is delivered as normal, and you get reports. | First, while you find all your real senders |
| p=quarantine | It goes to the spam folder. | Once all your real senders pass |
| p=reject | It is blocked completely. | When you are sure nothing real will fail |

### How most domains set it up

1. Start with `p=none` and read the daily reports.
2. Find every real service that sends email for you, such as your email tool and your support desk. Make sure each one passes.
3. Move to `p=quarantine`, then to `p=reject`. Now nobody can fake your domain at receivers that follow your policy.

So most domains start with a record like this one, which only watches:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

The rest of this guide explains every part of a DMARC record in more detail, and the extra options you can add later.

## SPF, DKIM and the From address in more detail

DMARC sits on top of SPF and DKIM. Our guide to [SPF and DKIM](/blog/spf-dkim-dmarc-explained) covers them in full. The short version is below.

**SPF** is a list of the servers that are allowed to send email for your domain. A receiving server checks whether the email came from a server on that list.

**DKIM** is a digital signature added to each email. The receiving server checks the signature against a key in your DNS. If the signature is valid, the email was not changed on the way and was signed by your domain.

**The From address** is the sender address your recipient sees in their inbox, for example `hello@example.com`. DMARC checks that SPF or DKIM passed for this same domain.

## What a DMARC record looks like

### Where it goes in DNS

DNS is the public settings list for your domain. You edit it at your DNS host, which is usually the company where you bought the domain or your hosting provider. A DMARC record is a TXT record, which is a DNS entry that holds plain text.

You add it under the host name `_dmarc`. Most DNS dashboards add your domain to the end automatically, so `_dmarc` becomes `_dmarc.example.com`.

Watch out for one common slip. Some dashboards expect only `_dmarc`. If you type the full name `_dmarc.example.com` there, the record ends up at `_dmarc.example.com.example.com`. Receiving servers will not find it there.

### The rules for writing it

- **It must start with `v=DMARC1`.** This has to be the first part of the record. `DMARC1` must be in capitals. If you write `v=dmarc1`, put another part first, or misspell it, receiving servers ignore the whole record. Your domain is then treated as if it has no DMARC policy.
- **Separate the parts with semicolons.** Spaces around the semicolons are allowed.
- **If the policy is missing.** Suppose the `p` part is missing or wrong, but the record has a valid report address in `rua`. Receivers then treat the policy as `p=none`. If both `p` and `rua` are missing or wrong, receivers skip DMARC for your domain completely.
- **Publish only one DMARC record.** If a receiving server finds two or more TXT records that start with `v=DMARC1`, it throws all of them away. This rule comes from [RFC 9989](https://www.rfc-editor.org/info/rfc9989), the current DMARC standard. Two records do not give you two policies. They leave your domain with no protection at all.

### How to check your record

You can look up your record with a command in your computer's terminal:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Use `dig` on Linux and macOS. It prints your record on one line, inside quotes. Use `nslookup` on Windows. It shows the record your DNS server returns.

If the command returns nothing, one of two things is true. Either the record has not spread across DNS yet, or it was added under the wrong host name.

## Every DMARC tag, and which ones you need

Each part of a DMARC record, such as `p=none`, is called a tag. The current standard, from May 2026, has eleven tags.

| Tag | What it does, in plain words | Possible values | If you leave it out | Do you need it? |
| --- | --- | --- | --- | --- |
| v | Says "this is a DMARC record". Must come first. | DMARC1 | Required | Yes |
| p | Your policy: what to do with email that fails. Covers your domain and its subdomains. | none, quarantine, reject | Treated as none, if rua is valid | Yes |
| rua | Where to send the daily summary reports | One or more mailto: addresses, separated by commas | You get no reports | Yes |
| sp | A separate policy for subdomains that exist, such as news.example.com | none, quarantine, reject | Same as p | Only if subdomains need different rules |
| np | A policy for subdomains that do not exist in DNS | none, quarantine, reject | Same as sp, or p if sp is missing | Only to block made-up subdomains |
| adkim | How exact the DKIM domain match must be. r = relaxed, s = strict | r, s | r | Rarely. Relaxed is the normal choice |
| aspf | How exact the SPF domain match must be. r = relaxed, s = strict | r, s | r | Rarely. Relaxed is the normal choice |
| t | Test mode. Makes receivers apply your policy one step softer | y, n | n | Only while you move to a stricter policy |
| ruf | Where to send a report about each single failed email | One or more mailto: addresses, separated by commas | You get no reports | Rarely, because of privacy limits |
| fo | Options for the single-email reports | 0, 1, d, s | 0 | Only if you use ruf |
| psd | Marks a public suffix domain | y, n, u | u | Only for public suffixes or large organizations that hand out parts of their DNS |

Relaxed and strict work like this. With relaxed, a subdomain counts as a match, so `mail.example.com` matches `example.com`. With strict, the two domains must be exactly the same.

Three older tags were retired in the 2026 standard. They are the percentage tag (`pct`), the report format tag (`rf`) and the reporting interval tag (`ri`). A leftover `pct=100` does no harm. A `pct` below 100 was used to apply a policy to only part of your email during a rollout. The new `t` tag now does that job.

**What most domains need:** only `v`, `p` and `rua`.

- Add `sp` or `np` if your subdomains need different rules.
- Leave `psd` alone. You only need it if you run a large organization that hands out parts of its DNS (`psd=n`), or a public suffix such as `co.uk` (`psd=y`).
- Relaxed matching (`adkim=r` and `aspf=r`) is the default and works for almost every domain. You only need the alignment tags if strict compliance rules forbid signing with a subdomain.

You can build a record with these tags, or clean up an old one, with our [DMARC generator](/dmarc-generator).

## What p=none, quarantine and reject actually do

The `p` tag is the most important part of the record. It tells receiving servers what to do with an email that fails DMARC. There are three choices. Each one is a stage on the way to full protection.

**p=none: watch only.** Receivers do nothing special with email that fails. It is delivered as normal, and only the usual spam filters apply. Combined with reports in `rua`, RFC 9989 calls this Monitoring Mode. It shows you every service that sends email as your domain, without any risk to your delivery.

**p=quarantine: send it to spam.** Receivers treat failing email as suspicious. At most mailbox providers, it goes to the recipient's spam folder. This protects your recipients from fake emails. Real email from a badly set up tool is not lost, because it can still be found in the spam folder.

**p=reject: block it.** Receivers refuse failing email. Most do this during delivery, with a permanent error code that starts with 5. The email never reaches a mailbox. The sending server gets a bounce message instead.

### Receivers do not always follow your policy

Your policy is a request, not an order. The standard says receivers should not reject an email because of `p=reject` alone. If they know nothing else about the email, they should treat it as quarantine instead. Mailbox providers also use their own sender reputation data and spam filters next to your policy.

### Why reject needs DKIM, not only SPF

Forwarding breaks SPF. Say someone forwards their work email to a personal account. The forwarding server sends the email from its own IP address. That address is not in your SPF record, so the SPF check fails.

DKIM survives forwarding. The signature travels inside the email itself, so it stays valid and still matches your domain. That is why a domain at `p=reject` must use DKIM and not depend on SPF alone.

### Test mode with t=y

RFC 9989 adds a test mode. Set `t=y` and receivers apply your policy one step softer than what you published:

- `reject` is treated as `quarantine`.
- `quarantine` is treated as `none`.

Test mode does not change your reports. It also does nothing when your policy is `p=none`. It lets you see how a stricter policy behaves with real email before you make it permanent.

## Subdomains: sp and np

A subdomain is an extra name in front of your domain, such as `marketing.example.com` or `support.example.com`. Many companies send email from subdomains. The `sp` and `np` tags set the rules for them, for any subdomain that does not have a DMARC record of its own.

### How a receiver finds the right record

1. The receiver first looks for a DMARC record for the exact domain in the From line. If you send from `news.example.com` and `_dmarc.news.example.com` exists, it uses that record.
2. If there is no record there, it looks for your main record at `_dmarc.example.com`. It finds it by moving up the domain name, one part at a time, toward the end of the name. It does not use the Public Suffix List for this.
3. Once it has your main record, it checks whether the sending subdomain exists in DNS.

Then it picks the rule:

- If the subdomain exists, it applies `sp`. If there is no `sp`, it applies `p`.
- If the subdomain does not exist (DNS returns NXDOMAIN, meaning "no such name"), it applies `np`. If there is no `np`, it uses `sp`. If there is no `sp` either, it uses `p`.

### An example

Say this record is published at `_dmarc.example.com`:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

It sets three different rules:

- **Email from `example.com` itself** uses `p=reject`. If it fails DMARC, receivers are asked to block it.
- **Email from `news.example.com`**, a subdomain that exists in DNS, uses `sp=quarantine`. Say a newsletter fails because a vendor set something up wrong. It goes to spam instead of bouncing.
- **Email from a made-up name like `invoices-2026.example.com`**, which does not exist in DNS, uses `np=reject`. A subdomain that someone simply invented gets the strict rule, even though your real subdomains get quarantine.

## What is a DMARC report?

DMARC has two kinds of reports:

- **Aggregate reports**, set with `rua`. These are daily summaries.
- **Failure reports**, set with `ruf`. These describe single failed emails.

### Aggregate reports (rua)

An aggregate report is a summary from one mailbox provider, such as Gmail. It lists all the email that provider received claiming to be from your domain. It is an XML file, a structured text file meant for software to read. Providers send it as an email attachment, either as a plain `.xml` file or a compressed file such as `.xml.gz`.

Each report usually covers one UTC day. The standard says receivers should send aggregate reports at least every 24 hours. They are not required to send any.

Here is a shortened example report:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Here is what it says, block by block:

- **`<report_metadata>`**: the report came from `mail.receiver.example`. It covers one full UTC day.
- **`<policy_published>`**: the policy the receiver saw for `example.com`. Here that is `p=none` and `sp=none`.
- **`<row>`**: 412 emails arrived from the IP address `192.0.2.10`.
- **SPF**: under `<auth_results>`, SPF passed, but for the domain `bounces.esp-mail.example`. That domain is not your From domain, `example.com`. So under `<policy_evaluated>`, SPF shows `fail`, because it did not match.
- **DKIM**: under `<auth_results>`, DKIM passed for `example.com`. That matches the From domain shown in `<identifiers>`. So DKIM passed and matched, and these 412 emails passed DMARC.

The key point is simple. `<auth_results>` shows the raw SPF and DKIM checks. `<policy_evaluated>` shows whether each check also matched your From domain. DMARC uses the second one.

### Failure reports (ruf)

Failure reports, often called forensic reports, describe one failed email each. They can include the email's headers and details about the recipient. Because of this privacy risk, many receivers remove most of the details, or do not send failure reports at all. The `fo` tag sets options for these reports. It only matters if you use `ruf`.

### Reading reports

The standard recommends using software to read aggregate reports, not reading them by hand. If you send to many mailbox providers, each one sends you its own report, every day.

## Why am I getting DMARC emails?

You get these daily emails because your DMARC record's `rua` tag contains your address. Every mailbox provider that receives email in your name sends a daily summary to each address in that tag.

The subject line follows a fixed format, set by [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

The Submitter is the provider that checked the email, such as Google or Microsoft. The XML report is attached, often compressed.

Do not send these reports to a personal inbox. Point `rua` at a separate mailbox or a report processing service instead. If you do not remember setting this up, check your DMARC record. A previous admin, or an email platform's setup guide, may have added it.

### Sending reports to a different domain

Say your domain is `example.com`, and you want reports sent to an address at `reports.example.net`. The receiving domain must agree to accept them. It does this by publishing a TXT record in its DNS. Without that record, receivers ignore the address and send no reports.

The record goes at this host name:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Report services often publish a wildcard record instead (`*._report._dmarc.reports.example.net`). That one record covers every customer domain, so no setup is needed for each one.

## Moving from p=none to reject without losing mail

Do not jump straight to reject. Move up one step at a time:

1. **Start watching.** Publish a DMARC record at `_dmarc` with `p=none` and a working `rua` address. You start getting reports, and nothing about your delivery changes.
2. **Fix your senders.** Read the reports. Find every real service that sends email for your domain and fails the checks, and fix its setup.
3. **Move to quarantine.** Switch to `p=quarantine` once all your real senders pass consistently. Check spam folders to make sure no real email ends up there.
4. **Move to reject.** Switch to `p=reject`. Fake email in your name is now blocked before it reaches anyone.

This can take a while. The standard says getting every sender to pass can take many months, depending on how often you send. Billing tools, support desks and marketing platforms are easy to miss, so keep reviewing your reports.

**If your users post to mailing lists**, go slower. The standard suggests at least a month at `p=none`, then the same length of time at quarantine. Compare the results before you move to reject. Mailing lists often change subject lines, add footers or resend messages. These changes break SPF and sometimes break DKIM too. Comparing several weeks of reports shows these problems before reject starts blocking mail.

**Use test mode for the last step.** With `t=y`, you can publish `p=reject` while receivers still apply quarantine. You see how receivers react to reject, but failing email still goes to spam instead of bouncing.

**A note on strict SPF.** If your SPF record ends with `-all`, some receivers reject failing email at the SPF check, before DMARC runs. Those emails never reach the DMARC check. They also do not appear in your daily reports.

## Common DMARC record mistakes

### Two DMARC records

This often happens when someone adds a second TXT record instead of editing the first one. Receivers see both and throw both away, as RFC 9989 says. Your domain then acts as if it has no DMARC record at all.

**Fix:** check your DNS and combine all the tags into a single TXT record.

### The record is on the main domain, not on _dmarc

If you enter `example.com` as the host name, the record is created on your main domain, not at `_dmarc.example.com`. Mail servers only look for DMARC at the `_dmarc` name, so they never find it.

**Fix:** set the host name to `_dmarc`.

### v=DMARC1 is not first, or is in the wrong case

Typing `v=dmarc1`, or starting with `p=none; v=DMARC1`, breaks the record. Receivers ignore it.

**Fix:** make `v=DMARC1` the very first thing in the record, followed by a semicolon.

### Report addresses without mailto:

Writing `rua=dmarc@example.com` instead of `rua=mailto:dmarc@example.com` breaks the address format. Receivers cannot use a bare address, so no reports arrive.

**Fix:** start every address in `rua` and `ruf` with `mailto:`.

### Reports sent to another domain without its permission

If you send reports to a vendor's domain, and that domain has not published the permission record, you get no reports.

**Fix:** make sure every outside report address has a matching `_report._dmarc` record, as explained above.

### Reject with SPF only

Forwarding changes the IP address that sends the email, so forwarded email fails SPF. Without DKIM, real forwarded email fails DMARC and bounces under a reject policy.

**Fix:** set up DKIM signing on every service that sends your email before you move past `p=none`.

### Retired tags from old guides

Many older guides added a percentage tag, with values like 100, or 20 for a partial rollout. A leftover `pct=100` does no harm, but percentage rollouts are no longer part of the standard.

**Fix:** remove old percentage tags. Use `t=y` if you need a softer policy while you make changes.

## Frequently asked questions

**Do I really need a DMARC record?**
Yes, if you send email to personal Gmail or Outlook accounts. Google and Microsoft both require senders of 5,000 or more emails a day to publish a DMARC record, with the From domain matching. Smaller senders should still have one. A `p=none` record with `rua` costs nothing, and the reports show you who sends email in your name.

**How do I check my DMARC record?**
Run `dig TXT _dmarc.yourdomain.com +short` in your terminal, or `nslookup -type=TXT _dmarc.yourdomain.com` on Windows. The result should be your record, starting with `v=DMARC1`. You can also send a test email to a Gmail account, open it and choose Show original. It shows whether DMARC passed.

**What does DMARC fail mean?**
It means the email failed both checks. Neither SPF nor DKIM passed for a domain that matches the visible From domain. Receivers then follow your policy. Some send back a clear rejection, such as `550 5.7.1 Email rejected per DMARC policy for example.com`. You can find the cause by [reading the bounce message](/blog/550-5-7-1-error). Gmail uses the error code `4.7.31` when the DMARC record is missing, and `4.7.32` when the From domain does not match.

**Can I have more than one DMARC record?**
No. A domain can publish only one DMARC record. RFC 9989 says that if a receiving server finds more than one, it must throw all of them away. Your domain is then left with no DMARC policy. Edit your existing record instead of adding a second one.

**Does DMARC stop lookalike domains?**
No. DMARC only protects the exact domain in your DNS. It cannot stop someone from registering a similar looking domain, for example one with two letters swapped or a different ending such as .net. It also cannot stop a fake display name. Lookalike domains need other measures, such as watching for new domain registrations that copy your name.

A DMARC record proves that your email really comes from you. It cannot help when you send to addresses that no longer exist. Run your list through [Giggal.ai](/email-list-cleaning) before your next send to remove invalid addresses and keep your bounce rate down.
