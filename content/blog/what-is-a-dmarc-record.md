---
title: "What Is a DMARC Record?"
seoTitle: "What Is a DMARC Record? Tags, Examples and Reports (2026)"
description: "A DMARC record is a TXT record at _dmarc.yourdomain telling receivers what to do with mail that fails authentication. Every tag in the 2026 standard, with examples."
slug: what-is-a-dmarc-record
date: 2026-10-04
updated: 2026-10-04
keyword: what is a dmarc record
image: /blog/covers/what-is-a-dmarc-record.webp
imageAlt: What is a DMARC record? guide with tag breakdown and policy overview
---

A DMARC record is a TXT record published at `_dmarc.yourdomain` that tells receiving mail servers what to do with mail that fails authentication, and where to send reports about the messages they evaluate. It ties technical sender checks directly to the visible From domain your recipients see in their inbox.

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

Most domains start with exactly these three tags. DMARC builds on [SPF and DKIM](/blog/spf-dkim-dmarc-explained) by checking that the domain on your visible From line matches the domain validated by either protocol. Without it, a message can pass SPF for some other domain's return path while showing your domain in the From line, and nothing ties the two together.

## What a DMARC record looks like

A DMARC record lives in DNS as a TXT record under the host name `_dmarc`. Most DNS dashboards append your domain automatically when you enter `_dmarc`, creating `_dmarc.example.com`. If your provider expects only the prefix and you type the full name, your record ends up at `_dmarc.example.com.example.com`, where receiving servers won't find it.

Every valid record begins with `v=DMARC1`. The standard requires `v=DMARC1` to be the first tag, and the value `DMARC1` is case sensitive. If you write `v=dmarc1`, put another tag first, or misspell it, receiving servers ignore the entire record and treat your domain as having no DMARC policy.

Tags are separated by semicolons, with optional whitespace around them. If the policy tag `p` is missing or invalid but your record includes a valid aggregate reporting address in `rua`, receivers treat the policy as `p=none`. If both `p` and `rua` are missing or invalid, receiving servers skip DMARC processing entirely.

Publish only one DMARC record for your domain. If a receiving server finds multiple TXT records starting with `v=DMARC1`, [RFC 9989](https://www.rfc-editor.org/info/rfc9989) instructs it to discard all of them. Having two records doesn't give you two policies; it strips your domain of protection entirely.

You can check your record from your terminal:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

On Linux and macOS, `dig` queries your resolver and prints the TXT line wrapped in quotes. On Windows, `nslookup` displays lines returned by your DNS server. If the command returns nothing, your record hasn't propagated or was added under the wrong host name.

## Every DMARC tag, and which ones you need

The May 2026 standard defines eleven tags for policy configuration and reporting.

| Tag | What it does | Values | Default | Do you need it? |
| --- | --- | --- | --- | --- |
| v | Protocol version; must be the first tag in the record | DMARC1 | Required | Yes |
| p | Policy applied to messages from the domain and subdomains | none, quarantine, reject | Treated as none if rua is valid | Yes |
| rua | Destinations for aggregate XML reports | Comma-separated mailto: URIs | No reports | Yes |
| sp | Policy applied to existing subdomains | none, quarantine, reject | Inherits p | Only if subdomains need different handling |
| np | Policy applied to non-existent subdomains (NXDOMAIN) | none, quarantine, reject | Inherits sp (or p) | Only if blocking phantom subdomains |
| adkim | DKIM domain alignment mode | r (relaxed), s (strict) | r | Rarely (relaxed is standard) |
| aspf | SPF domain alignment mode | r (relaxed), s (strict) | r | Rarely (relaxed is standard) |
| t | Test mode flag to soften policy by one tier | y, n | n | Only during policy transitions |
| ruf | Destinations for per-message failure reports | Comma-separated mailto: URIs | No reports | Rarely (privacy limitations apply) |
| fo | Failure reporting options when ruf is active | 0, 1, d, s | 0 | Only if using ruf |
| psd | Public suffix domain evaluation | y, n, u | u | Only for public suffixes or delegated orgs |

The percentage tag (`pct`), report format tag (`rf`), and reporting interval tag (`ri`) are retired in the 2026 standard. A leftover `pct=100` is harmless, but `pct` below 100 was a rollout trick, and `t` now does that job.

Most domains only need `v`, `p` and `rua`. Add `sp` or `np` when subdomains need different treatment. Leave `psd` alone unless you run a large organization that delegates parts of its DNS (`psd=n`), or a public suffix (`psd=y`). Nearly all domain owners find relaxed alignment (`adkim=r` and `aspf=r`) sufficient, so you don't need alignment tags unless strict compliance rules prohibit subdomain signing.

## What p=none, quarantine and reject actually do

The `p` tag tells receiving servers how to handle messages that fail authentication. The three policies represent distinct stages:

A policy of `none` tells receivers to take no protective action when authentication checks fail. Messages failing both SPF and DKIM alignment are delivered normally, subject only to ordinary spam filters. When paired with aggregate reports via `rua`, RFC 9989 calls this Monitoring Mode. It shows you which services send as your domain without risking delivery.

A policy of `quarantine` instructs receivers to treat failing messages as suspicious. For mailbox providers, this usually diverts failing messages into the recipient's spam folder. It protects recipients from phishing while letting legitimate mail from misconfigured tools be retrieved from spam folders.

A policy of `reject` asks receivers to refuse failing messages. Most do it during delivery with a permanent 5xx reply, so the message never reaches a mailbox and the sending server gets a bounce instead.

Receivers aren't obliged to follow your policy. The standard says receiving systems shouldn't reject messages based on `p=reject` alone, and should treat failing messages as quarantine if they have no other information about them. Mailbox providers apply their own reputation metrics and spam filters alongside your declaration.

A domain at `p=reject` must not rely only on SPF; it needs DKIM, because forwarding breaks SPF. When a recipient forwards work emails to a personal account, the forwarding server sends from its own IP address. That IP won't match your SPF record, causing SPF checks to fail. Because DKIM cryptographic signatures travel with message headers, valid signatures survive forwarding intact and preserve DMARC alignment.

The `t` tag introduces a test mode under RFC 9989. Setting `t=y` asks receivers to apply an enforcement policy one level softer than published: `reject` is treated as `quarantine`, and `quarantine` is treated as `none`. It doesn't change reporting, and it does nothing to `p=none`. It lets you test production behavior before committing to permanent rejection.

## Subdomains: sp and np

Organizations often send email from dedicated subdomains like `marketing.example.com` or `support.example.com`. DMARC provides dedicated tags to govern how receivers handle subdomains when the subdomain itself doesn't publish an independent policy record.

When receiving servers evaluate an email, they first check DNS for a DMARC record at the exact From domain. If you send from `news.example.com` and that host publishes `_dmarc.news.example.com`, the receiver applies it directly. If no record exists there, the receiver looks up the organizational record at `_dmarc.example.com`, discovering it via a DNS tree walk toward the root rather than consulting the Public Suffix List.

Once the receiver finds your organizational record, it checks whether the sending subdomain exists in DNS. For existing subdomains, it applies `sp` (or falls back to `p`). For non-existent subdomains returning NXDOMAIN, it applies `np`. If `np` is omitted, the receiver uses `sp`, and if `sp` is also omitted, it falls back to `p`.

Consider this record published at `_dmarc.example.com`:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

This record applies three distinct rules:

Mail sent from root `example.com` evaluates under `p=reject`. If a message fails DMARC, receivers are asked to reject it.

Mail sent from `news.example.com`, which exists in DNS, evaluates under `sp=quarantine`. If a newsletter fails alignment due to a vendor configuration error, receivers route it to spam instead of bouncing it outright.

Mail sent from a made-up address like `invoices-2026.example.com`, which doesn't exist in DNS, evaluates under `np=reject`. So a subdomain someone simply made up gets the strict treatment, even though your real subdomains get quarantine.

## What is a DMARC report?

DMARC specifies two reporting mechanisms: aggregate reports configured with `rua` and failure reports configured with `ruf`.

Aggregate reports are XML files that summarize messages received by a mailbox provider claiming to come from your domain. Mailbox providers send them as email attachments, either plain `.xml` files or compressed ones such as `.xml.gz`. Each report covers a reporting period that is typically one UTC day. The standard says receivers should send aggregate reports at least every 24 hours, though they aren't obliged to send any.

This trimmed sample shows the core structure:

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

Reading through this XML document reveals how the receiver processed your traffic:

The `<report_metadata>` block identifies the sender as `mail.receiver.example` and defines the reporting window covering a full UTC day.

The `<policy_published>` block records your policy as seen during evaluation: `example.com` with `p=none` and `sp=none`.

Inside `<record>`, `<row>` shows that 412 messages arrived from IP address `192.0.2.10`.

Under `<auth_results>`, SPF passed for bounce domain `bounces.esp-mail.example`. But under `<policy_evaluated>`, SPF shows `fail` because that domain doesn't align with your visible From domain `example.com`.

DKIM passed under `<auth_results>` with signing domain `example.com`. Because that matches the From header in `<identifiers>`, DKIM passed and aligned, so these messages passed DMARC.

The point: `<policy_evaluated>` shows the aligned results DMARC used, while `<auth_results>` shows the raw checks.

Failure reports (`ruf`), often called forensic reports, are per-message reports about individual emails that fail authentication. Because failure reports include message headers and can expose recipient details, many receivers redact them heavily or don't send them at all for privacy reasons. The `fo` tag defines failure options, but it only matters if `ruf` is set.

The standard recommends parsing aggregate reports with software rather than reading them by hand. A domain that sends to many providers gets a separate report from each of them, every day.

## Why am I getting DMARC emails?

You receive daily DMARC emails because your record's `rua` tag points to your address. Mailbox providers generate automated daily summaries of mail claiming to come from your domain and dispatch them to every destination in that tag.

The incoming emails follow a fixed subject format defined in [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

The Submitter field names the receiving organization that evaluated the traffic, such as Google or Microsoft. Attached is the XML report itself, often compressed.

You shouldn't route these reports to a personal inbox. Send `rua` to a dedicated mailbox or a report-processing service rather than a personal address. If you don't remember setting it up, check your record; an earlier administrator or an email platform's setup guide may have added it.

If the `rua` address is on a different domain than yours, such as `example.com` sending reports to `reports.example.net`, the destination domain must publish a consent record in DNS, or receivers ignore the address.

The destination domain grants permission by publishing a TXT record at this host:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Report services often publish a wildcard record (`*._report._dmarc.reports.example.net`) so this works automatically for every customer domain without manual destination setup.

## Moving from p=none to reject without losing mail

Transitioning from monitoring to full enforcement requires a sequential rollout:

1. Publish an initial DMARC record at `_dmarc` with `p=none` and an active `rua` address to begin receiving aggregate XML reports without affecting delivery.
2. Read the reports and fix every legitimate source sending mail for your domain that fails authentication.
3. Advance your policy to `p=quarantine` once authorized sources align consistently, checking spam folders to confirm legitimate mail isn't lost.
4. Advance your policy to `p=reject` to protect your domain against impersonation and block unauthorized messages at the receiver gateway.

The standard says getting every sending source authenticated can take many months, depending on how often you send. Identifying third-party billing tools, support desks, and marketing platforms requires steady review.

For domains whose users post to mailing lists, the standard suggests `p=none` for at least a month, then quarantine for an equally long period, comparing results before reject. Mailing lists frequently alter subject lines, append footers, or re-mail messages, breaking SPF and sometimes invalidating DKIM signatures. Comparing reports across multiple weeks helps you spot delivery issues before enforcing rejection.

Setting `t=y` lets you publish reject in DNS while receivers still apply quarantine. This lets you observe receiver behavior under a reject declaration while maintaining a safety net delivering failing messages to spam folders instead of bouncing them permanently.

An SPF record ending with `-all` can get mail rejected early in the SMTP conversation, before DMARC is checked. Messages dropped at the SPF stage never trigger DMARC processing and will not appear in your daily aggregate reports.

## Common DMARC record mistakes

Publishing duplicate DMARC records strips your domain of protection. When administrators add a second TXT record instead of editing the existing one, resolvers return two records. Under RFC 9989, receiving servers discard both, so the domain behaves as if it had no DMARC record. Check your DNS zone and merge all tags into a single TXT line.

Publishing the record at your root domain prevents receivers from finding your policy. Entering `example.com` in your DNS console creates a TXT record at the apex rather than `_dmarc.example.com`. Mail servers query the `_dmarc` host specifically and ignore apex records during policy discovery. Check that your DNS host name is set to `_dmarc`.

Putting another tag ahead of `v=DMARC1`, or changing the capitals in `DMARC1`, makes receivers ignore the record. Typing `v=dmarc1` or starting with `p=none; v=DMARC1` both break it. Make sure `v=DMARC1` is the exact first token in the string, followed by a semicolon.

Omitting the `mailto:` prefix in reporting tags invalidates destinations. Publishing `rua=dmarc@example.com` instead of `rua=mailto:dmarc@example.com` violates the URI specification. Receivers can't use a bare address, so no reports arrive. Check that every address in `rua` and `ruf` begins with `mailto:`.

Pointing `rua` to an external domain without a consent record causes receivers to discard the destination. If you route reports to a vendor domain that hasn't published a matching consent record, you receive no reports. Confirm that external reporting destinations publish the necessary `_report._dmarc` validation record.

Enforcing `p=reject` while relying only on SPF causes forwarded emails to bounce. Forwarding relays break SPF by altering the transmitting IP address. If you haven't configured DKIM signing on outbound streams, legitimate forwarded messages fail authentication and bounce under a reject policy. Configure DKIM across all sending services before advancing beyond `p=none`.

Old guides often leave retired tags behind. Senders who configured DMARC under older guides often retain percentage tags with values like 100 or partial rollout allocations like 20. While a leftover percentage tag at 100 is harmless, partial rollout percentages are no longer part of the standard. Remove legacy percentage tags and use `t=y` if you need to soften enforcement during migration.

## Frequently asked questions

**Do I really need a DMARC record?**
Yes, if you send email to personal Gmail or Outlook accounts. Both Google and Microsoft require senders dispatching 5,000 or more messages daily to publish a DMARC record with visible From alignment. Even for smaller senders, a `p=none` record with `rua` is worth having, because the reports show you who is sending mail under your name.

**How do I check my DMARC record?**
Run `dig TXT _dmarc.yourdomain.com +short` in your terminal or `nslookup -type=TXT _dmarc.yourdomain.com` on Windows. The command outputs your published TXT string starting with `v=DMARC1`. You can also send test mail to a Gmail account and check Show original to confirm DMARC reports a passing status.

**What does DMARC fail mean?**
A DMARC fail means an incoming message failed both SPF alignment and DKIM alignment against the visible From domain. Receivers handle failed messages according to your published policy, and some return explicit rejections like `550 5.7.1 Email rejected per DMARC policy for example.com`. You can diagnose specific policy blocks by [reading bounce messages](/blog/550-5-7-1-error), while Gmail flags non-compliant messages with error code `4.7.31` for missing records and `4.7.32` for unaligned mail.

**Can I have more than one DMARC record?**
No, a domain may publish only one DMARC record in DNS. RFC 9989 states that if a receiving mail server receives multiple DMARC TXT records for a domain, it must discard all of them, which leaves the domain with no DMARC policy. Edit your existing record instead of adding a second entry.

**Does DMARC stop lookalike domains?**
No, DMARC protects only the exact domain name published in your DNS records. It cannot stop malicious senders from registering visually similar domains with transposed letters, alternate top-level domains, or forged display names. Lookalike domains need separate measures, such as watching for new registrations that imitate yours.

Publishing a DMARC record proves your outbound mail is genuinely yours, but authentication cannot protect campaigns sent to bad or abandoned addresses. Run your subscriber list through [Giggal.ai](/email-list-cleaning) before your next send to remove invalid mailboxes and keep your bounce rates down.
