---
title: "SPF, DKIM and DMARC Explained"
seoTitle: "SPF, DKIM and DMARC Explained: How They Work Together (2026)"
description: "SPF checks the server, DKIM the signature, and DMARC that one of them matches your From domain. The records to publish, common failures, and what changed in 2026."
slug: spf-dkim-dmarc-explained
date: 2026-10-04
updated: 2026-10-04
keyword: spf dkim dmarc explained
image: /blog/covers/spf-dkim-dmarc-explained.webp
imageAlt: Dark blue banner reading SPF, DKIM, DMARC with three technical breakdown columns
---

SPF, DKIM and DMARC are three DNS records that each answer a different question about an email. SPF (Sender Policy Framework) lists the servers allowed to send mail for your domain. DKIM (DomainKeys Identified Mail) adds a signature to each message so the receiver can tell nothing was changed after it left you. DMARC (Domain-based Message Authentication, Reporting and Conformance) checks that at least one of those two matches the domain in your From address, and tells the receiver what to do when neither does. Since 2024 they've stopped being optional: Gmail and Outlook.com now reject a lot of mail that fails these checks instead of just sending it to spam.

| Record | What it checks | Where it lives |
| --- | --- | --- |
| SPF | Which servers may send for your domain | TXT record on your domain |
| DKIM | A digital signature on each message | TXT record at selector._domainkey.yourdomain |
| DMARC | That SPF or DKIM matches your From domain, and what to do if not | TXT record at _dmarc.yourdomain |

## Why you can't skip them anymore

Starting 1 February 2024, Google introduced mandatory sender rules for anyone delivering email to personal Gmail accounts. Under these baseline requirements, every sender must configure either SPF or DKIM, set up valid forward and reverse DNS with matching PTR records for sending IPs, enforce TLS encryption for transmission, and adhere to RFC 5322 specifications. Your spam rate in Google Postmaster Tools has to stay below 0.3%, and Google recommends keeping it under 0.1%. If you deliver unauthenticated mail, Google warns that messages face placement into spam folders or outright rejection under error code 5.7.26.

If you send 5,000 or more messages a day to personal Gmail addresses, Google classifies you as a bulk sender and the rules tighten. Bulk senders can't pick between SPF or DKIM; you must set up both protocols. You must also publish a DMARC record, maintain domain alignment between your visible From header and either SPF or DKIM, and include a functioning one-click unsubscribe mechanism for marketing messages. Google counts this 5,000-message threshold across your primary domain and all its subdomains over a 24-hour window, and once your domain hits that threshold, Google considers bulk status permanent. Starting November 2025, Gmail began ramping up enforcement on non-compliant traffic, issuing temporary delivery delays and permanent rejections. These guidelines apply to personal Gmail accounts, not to Google Workspace business mailboxes.

Microsoft introduced its own authentication enforcement on 5 May 2025 for senders delivering 5,000 or more daily messages to consumer Outlook.com, Hotmail, and Live accounts. Senders crossing this threshold need a passing SPF evaluation, a passing DKIM signature, and a published DMARC record set to p=none or stricter that aligns with SPF or DKIM. If you fail to meet these requirements, Microsoft blocks your messages with bounce code 550 5.7.515 Access denied, sending domain does not meet the required authentication level. Yahoo introduced similar rules for bulk senders in 2024.

| Code | What failed |
| --- | --- |
| 4.7.27 and 5.7.27 | SPF did not pass |
| 4.7.30 and 5.7.30 | DKIM did not pass |
| 4.7.31 | Missing DMARC record or no policy |
| 4.7.32 | From domain not aligned with SPF or DKIM |
| 4.7.23 and 5.7.25 | PTR record problems |

Google uses the 4.x codes for temporary rate limiting and the 5.x codes for permanent delivery blocks. When your campaigns bounce, don't guess what went wrong from your marketing dashboard. Inspect the raw server rejection headers, as detailed in our guide to [reading bounce messages](/blog/550-5-7-1-error).

## SPF: which servers may send for your domain

Sender Policy Framework, standardized in RFC 7208, verifies the envelope sender of an incoming message. The envelope sender is the Return-Path or MAIL FROM address mail servers use to return bounces. SPF can also evaluate the server name declared during the initial HELO or EHLO handshake. Because SPF inspects only the envelope sender and ignores the visible From address people see in their inbox, SPF alone can't prevent an attacker from spoofing your brand name.

An [SPF record](/glossary/spf) lives in DNS as a single TXT record. It tells receiving servers which IP addresses, MX servers, and third-party platforms may send mail for your domain. A typical record looks like this:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Every record begins with `v=spf1`. The statement `include:_spf.google.com` instructs receiving servers to query Google's SPF record and authorize the IP addresses listed inside it. The second include grants sending authority to servers run by your marketing platform or transactional email service.

The directive at the end tells receivers how to treat unlisted senders. The softfail qualifier, written as `~all`, indicates that unlisted servers are probably unauthorized, but suggests receivers accept the message and apply spam filtering. The fail qualifier, written as `-all`, marks unlisted servers as a hard fail, and some receivers reject that mail outright. Senders auditing complex setups often start with `~all` so legitimate business mail doesn't get dropped accidentally.

RFC 7208 sets two strict limits you can't break. First, a domain may publish only one SPF record; publishing two records produces a permerror, invalidating SPF for all your outgoing mail. Second, SPF limits evaluations to at most 10 DNS lookups across `include`, `a`, `mx`, `ptr`, `exists`, and `redirect`. If resolving your record requires an eleventh lookup, receiving servers return a permerror. Forwarding also breaks SPF: when a recipient forwards your message, the forwarding server's IP won't match your record, causing SPF to fail.

## DKIM: a signature that proves the message wasn't changed

DKIM, defined in RFC 6376, works on the message itself rather than the server. When your server prepares to send a message, it creates a cryptographic hash of selected headers and the body, signs that hash with a private key, and writes the result into a `DKIM-Signature` header. The header carries two main values: the signing domain in the `d=` tag and the selector string in the `s=` tag. DKIM only says whether the signature is valid; deciding what to do about a failure is DMARC's job.

When the message arrives, the receiver reads the selector and domain from the header, queries DNS for the public key at `s._domainkey.d`, and checks the signature. DKIM signs headers and content; it doesn't encrypt the email itself. The body travels in readable text, but the signature proves nobody changed the subject line, sender details, or body text in transit.

Because standard email forwarding keeps headers and body content intact, a valid DKIM signature usually survives forwarding. That makes DKIM more dependable than SPF for forwarded mail, though mailing lists that add a footer or tag the subject line can still break the signature. Gmail requires keys of at least 1024 bits and recommends 2048.

A DKIM public key record in DNS takes this form:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

The `v=DKIM1` tag specifies the protocol version, `k=rsa` identifies the key algorithm, and `p=` holds the base64-encoded public key.

A frequent trap happens when senders rely on default platform signatures. Many email platforms sign outgoing mail using their own shared domain by default (`d=shared-esp.example`). While the signature passes, the signing domain doesn't match your visible From domain, causing DMARC alignment to fail. You need to set up custom DKIM in your platform settings so the signature uses your domain in the `d=` tag.

## DMARC: the check that ties both to your From address

Domain-based Message Authentication, Reporting, and Conformance ties envelope checks and cryptographic signatures to the visible From address people read. Alignment means the domain that passed SPF or DKIM is the same as the domain on the From line. DMARC passes when either SPF or DKIM passes authentication AND aligns with the From header domain. A message doesn't need both to align simultaneously, though Google recommends aligning both and notes requiring both may come later.

Say your company sends a weekly newsletter. The message shows `From: news@example.com`. To handle bounces, your email service uses its own envelope address, setting Return-Path to `bounce-123@bounces.esp-mail.example`. Your service also signs the message with custom DKIM using `d=example.com`.

When the receiving server processes this incoming message:
1. SPF checks the envelope domain `bounces.esp-mail.example` and passes, but `esp-mail.example` doesn't match `example.com`, so SPF fails DMARC alignment.
2. DKIM checks the signature for `example.com`, verifies the cryptographic hash, and matches the From header domain `example.com`, so DKIM passes and achieves DMARC alignment.
3. Because DKIM passed and aligned, the message passes DMARC successfully.

DMARC provides two alignment modes for both SPF and DKIM. Relaxed alignment is the default setting and permits subdomains of your organizational domain to align with the root domain. For example, mail sent from `news.example.com` aligns with an SPF or DKIM domain of `example.com`. Strict alignment, configured with `aspf=s` or `adkim=s`, requires an exact domain match and disallows subdomain differences.

Your DMARC record publishes three possible policy instructions:
- `p=none`: Puts DMARC in monitoring mode; receivers deliver mail normally while collecting authentication reports.
- `p=quarantine`: Asks receivers to send mail that fails DMARC to the spam or junk folder.
- `p=reject`: Asks receivers to refuse mail that fails DMARC.

The rua tag tells receivers where to send aggregate reports, usually daily XML files showing which IP addresses sent mail using your domain. A standard starter record published at `_dmarc.example.com` looks like this:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

In May 2026, the Internet Engineering Task Force published RFC 9989 on the Standards Track, alongside RFC 9990 for aggregate reporting and RFC 9991 for failure reporting. These new standards officially obsolete RFC 7489 and RFC 9091. Existing records starting with `v=DMARC1` continue to work, but the updated specification adjusts several operational tags. The percentage tag (`pct`) and report format tag (`rf`) are retired and no longer part of the standard, while the reporting interval tag (`ri`) is classified as historic. Senders testing policy rollouts now use the new `t` tag for test mode, and administrators can define policies for non-existent subdomains using the `np` tag. If your current DNS record contains a percentage tag, plan to remove it.

## How a receiving server checks a message

When an incoming email arrives at a receiving gateway, the server runs authentication checks in a specific order:

1. The server accepts the network connection, notes the sender IP address, and evaluates the HELO or EHLO greeting.
2. The server extracts the domain from the envelope Return-Path and queries DNS to check SPF permissions for the sending IP.
3. The server locates the `DKIM-Signature` header, queries DNS for the public key at `selector._domainkey.domain`, and recalculates cryptographic hashes across headers and body content.
4. The server inspects the visible From header and queries DNS for a DMARC policy record at `_dmarc.domain`.
5. The server evaluates domain alignment, checking whether the authenticated SPF domain or authenticated DKIM domain matches the visible From domain.
6. The server applies the published DMARC policy of none, quarantine, or reject based on the alignment outcome.
7. If you've asked for reports with rua, the server adds the result to its next aggregate report to you.

In Gmail you can see all three results with Show original on any message.

## Where SPF, DKIM and DMARC usually break

Publishing two SPF records is a frequent mistake when adding a new email service. An admin might follow setup docs to add `v=spf1 include:sendgrid.net ~all` and publish a second TXT record alongside an existing Google record. RFC 7208 prohibits multiple SPF records on a single domain. When receiving servers find two records, they halt with a permerror and fail SPF. You fix this by merging all authorized vendors into one string: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Exceeding the 10-lookup limit causes another silent delivery breakdown. Every `include`, `a`, `mx`, `ptr`, `exists`, or `redirect` tag counts toward this limit, and includes nested inside vendor records count too. If your record requires an eleventh lookup, receiving servers return an automatic permerror. You fix lookup exhaustion by cleaning out old vendor records, using lookup auditing tools, or replacing includes with explicit `ip4` ranges, but only for sending IPs you control and that don't change.

Connecting a new sending service without adding it to DNS leaves your outbound mail exposed to spam filters. Sales or support teams often hook up appointment schedulers, helpdesk platforms, or invoice systems without notifying whoever manages DNS. Because these new servers aren't listed in your SPF record and don't sign with your DKIM keys, their messages fail authentication and land in spam folders. The fix is a simple rule that anyone connecting a new tool tells whoever manages DNS, plus a look through your DMARC reports for senders you don't recognize.

Relying on platform-signed DKIM breaks DMARC alignment even though the signature validates cryptographically. When an email service signs messages with `d=platform-mail.example` while your From line displays `From: support@yourcompany.example`, DKIM passes technical checks but fails alignment against your domain. To fix this mismatch, open your platform settings, generate custom DKIM keys for your domain, and publish the selector records in your DNS console.

Message forwarding routinely breaks SPF whenever a recipient forwards work mail to a personal inbox. The intermediate server passes the message along using its own IP address, which doesn't match your SPF record. You can't control external forwarding setups, but ensuring your messages have valid DKIM signatures allows them to survive forwarding intact and satisfy DMARC requirements across secondary hops.

Sending bulk campaigns through another platform with a free `@gmail.com` From address fails DMARC by design. Google's sender guidelines explicitly warn that impersonating Gmail addresses from external servers harms deliverability. Because third-party platforms can't produce valid cryptographic signatures or pass SPF for Google's domain, mailbox providers reject or quarantine the mail. Senders should always conduct outreach from a custom domain they own.

Leaving DMARC set to `p=none` permanently leaves your domain vulnerable to impersonation. While a monitoring policy meets the Gmail and Microsoft minimum, `p=none` tells receiving servers to take zero protective action when spoofed mail appears. Someone spoofing your exact domain won't be stopped by DMARC at that setting. You should review your daily aggregate reports for a few weeks, verify that all legitimate sending sources align, and advance your policy to `p=quarantine` and then `p=reject`.

## SPF, DKIM and DMARC setup checklist

Work through these in order:

1. List every internal service, marketing platform, support desk, and transactional tool that sends email using your domain.
2. Publish a single unified [SPF record](/glossary/spf) covering authorized sending servers, keeping total lookups under 10.
3. Turn on custom DKIM signing using your own domain for every sending platform and publish the matching selector records in DNS.
4. Ensure your sending IP addresses have valid forward DNS and a matching [PTR record](/glossary/ptr-record) configured in reverse DNS.
5. Publish an initial [DMARC record](/blog/what-is-a-dmarc-record) at `_dmarc` with `p=none` and an active `rua` mailbox to start receiving aggregate XML reports.
6. Register your sending domain in [Google Postmaster Tools](/glossary/postmaster-tools) to monitor domain reputation, delivery errors, and spam complaint rates.
7. Review your aggregate DMARC reports for a few weeks to verify that every legitimate sending stream achieves SPF or DKIM alignment.
8. Advance your DMARC policy from `p=none` to `p=quarantine`, evaluate delivery stability, and then move your policy to `p=reject`.
9. Send a test message to a personal Gmail account and open Show original to confirm SPF, DKIM and DMARC all say PASS.

## Frequently asked questions

**Does DMARC need both SPF and DKIM?**
No, DMARC requires that either SPF or DKIM passes authentication and aligns with the domain in your visible From header. Having both protocols active on your domain provides better resilience when forwarding breaks SPF, and Google recommends configuring both for high-volume sending. However, a message will pass DMARC if only one mechanism achieves valid alignment.

**What's the difference between SPF and DMARC?**
SPF authorizes specific mail server IP addresses to send mail for the technical envelope sender address in the Return-Path header. DMARC inspects the visible From address that people see in their email client, verifies that either SPF or DKIM aligns with that visible domain, and tells receiving servers whether to accept, quarantine, or reject messages that fail validation.

**Do I need DMARC if I send fewer than 5,000 emails a day?**
Gmail only requires DMARC from bulk senders, so you won't be blocked for skipping it at low volume, though you still need SPF or DKIM. It's still worth publishing a p=none record with rua, because the reports show you which services send as your domain, including ones you forgot about and anyone spoofing you.

**Can I have two SPF records?**
No, RFC 7208 forbids publishing more than one SPF record on a domain. If receiving servers find multiple SPF records in DNS, they immediately abort evaluation with a permerror and treat SPF as failed. You must merge all authorized IP addresses and third-party includes into a single record starting with `v=spf1`.

**What's the simplest way to explain DMARC?**
SPF checks that the server sending the message is allowed to send for your domain, and DKIM checks a signature showing the message wasn't changed. DMARC is the final check: it confirms that one of those two belongs to the same domain as the From address. If neither does, DMARC tells the receiving server whether to deliver the message anyway, send it to spam or refuse it.

These records prove who you are, but they don't fix where you send, and mail to dead addresses still bounces. Our guide on [how to reduce email bounce rate](/blog/how-to-reduce-email-bounce-rate) covers that side, and you can run your list through [Giggal.ai](/email-list-cleaning) before the next send.
