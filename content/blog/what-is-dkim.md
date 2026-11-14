---
title: "What is DKIM? How DomainKeys Identified Mail Secures Email"
seoTitle: "What is DKIM: How It Works, Record Syntax & 2026 Setup Guide"
description: "Understand how DKIM cryptographic signatures authenticate your email domain, inspect DNS TXT record syntax, configure selectors, and prevent spoofing."
slug: what-is-dkim
date: 2026-11-14
updated: 2026-11-14
keyword: what is dkim in email security
image: /blog/covers/what-is-dkim.webp
imageAlt: Technical dark blue banner explaining DKIM email authentication, asymmetric key pairs, and DNS TXT record syntax
cta:
  title: "Generate and Validate Your Domain's DKIM Keys"
  description: "Create secure 2048-bit RSA public and private key pairs, format your DNS TXT record, and test syntax instantly."
  buttonText: "Open Free DKIM Generator"
  buttonUrl: "/dkim-generator"
---

When an email arrives in an inbox, the receiver faces a fundamental problem: standard email transmission protocols do not verify who actually wrote the message. Under basic Internet mail protocols, any sender can place any address they choose into the `From:` header. Spammers and phishers exploit this lack of verification to impersonate trusted brands, financial institutions, and business partners.

To solve this identity vulnerability, the Internet Engineering Task Force established **DomainKeys Identified Mail (DKIM)** under <a href="https://datatracker.ietf.org/doc/html/rfc6376" target="_blank" rel="noopener noreferrer nofollow">IETF RFC 6376</a>. 

If you are evaluating what is DKIM in email security, it is a cryptographic authentication standard that enables an organization to take responsibility for a transmitted message. By attaching a digital signature to the message headers, DKIM proves two things to receiving mail servers:
1. **Authenticity**: The message was authorized by the owner of the sending domain.
2. **Integrity**: The message headers and body content were not modified or tampered with after transmission.

Along with SPF (Sender Policy Framework) and DMARC (Domain-based Message Authentication, Reporting, and Conformance), DKIM forms the defensive foundation of modern email delivery. Here is how DKIM works under the hood, how to inspect its DNS record syntax, how to configure selectors, and how to troubleshoot verification failures.

```youtube
oPdGmJUquyM
```

---

## How DKIM Works: The Cryptographic Handshake

DKIM operates using **asymmetric cryptography** (also known as public-key cryptography). This mathematical system uses a matched pair of digital keys:

- **Private Key**: Kept secret on your outbound sending server (or your email service provider, such as Google Workspace, Microsoft 365, or Amazon SES). It is used to generate the signature for every outbound email.
- **Public Key**: Published openly in your domain's public DNS records as a TXT entry. Any receiving server in the world can read this key to verify your signature, but nobody can use the public key to forge a signature.

```
+---------------------------------------------------------------+
|                      SENDING SERVER                           |
|  1. Hashes email body & selected headers (SHA-256)            |
|  2. Encrypts hash using domain's PRIVATE KEY                  |
|  3. Inserts "DKIM-Signature:" header into message             |
+------------------------------+--------------------------------+
                               |
                               | (SMTP Network Transmission)
                               v
+---------------------------------------------------------------+
|                     RECEIVING SERVER                          |
|  1. Extracts domain (d=) and selector (s=) from signature     |
|  2. Queries DNS TXT: selector._domainkey.domain.com           |
|  3. Retrieves PUBLIC KEY from DNS                             |
|  4. Decrypts signature and compares computed hash with body   |
|  5. Result: PASS (untampered) or FAIL (tampered/invalid)      |
+---------------------------------------------------------------+
```

The authentication process takes place in four sequential phases during SMTP transmission:

### 1. Hashing the Content
Before sending the email, the outbound mail server prepares a digest of the message body and designated headers (such as `From`, `To`, `Subject`, and `Date`). It runs this data through a secure hashing algorithm—most commonly SHA-256—producing a fixed-length string called a hash.

### 2. Signing the Hash
The server takes that calculated hash and encrypts it using its secret private key. This encrypted hash becomes the digital signature. The server appends this signature directly into the email's headers inside a field named `DKIM-Signature`.

### 3. DNS Public Key Retrieval
When the receiving server receives the inbound email, it detects the `DKIM-Signature` header. The header explicitly declares which domain signed the email (the `d=` tag) and which selector points to the public key (the `s=` tag). 

The receiving server executes a DNS query for the corresponding TXT record at:
```text
[selector]._domainkey.[domain.com]
```

### 4. Mathematical Verification
The receiving server extracts the public key from the DNS response. It then uses this public key to decrypt the signature stored in the email header, revealing the sender's original calculated hash. Simultaneously, the receiving server calculates its own hash of the received message body and headers.

If the two hashes match perfectly, the verification passes (`dkim=pass`). The receiver knows with mathematical certainty that the email originated from the declared domain and was not altered in transit. If a single character, link, or space was modified by a malicious intermediary, the hashes will not match, and DKIM fails (`dkim=fail`).

---

## Anatomy of a Real `DKIM-Signature` Header

When you view the original message source in Gmail, Outlook, or Apple Mail, you can inspect the raw DKIM header. Below is an example of an authentic production signature:

```text
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
    d=giggal.ai; s=google; t=1731604800;
    h=from:to:subject:date:message-id:feedback-id:mime-version;
    bh=wX8Q2F4K9z8N+1LmPQ3rS9tU5vWxYzAbCdEfGhIjKlM=;
    b=p9X1qR2sT3uV4wX5yZ6aB7cD8eF9gH0iJ1kL2mN3oP4qR5sT6uV7wX8yZ9aB0cD1
      eF2gH3iJ4kL5mN6oP7qR8sT9uV0wX1yZ2aB3cD4eF5gH6iJ7kL8mN9oP0qR1sT2u
      V3wX4yZ5==
```

Every tag in this header performs a specific technical role defined by RFC standards:

| Tag | Technical Meaning | Explanation |
| :--- | :--- | :--- |
| `v=1` | Protocol Version | Identifies the DKIM specification version in use (always `1`). |
| `a=rsa-sha256` | Cryptographic Algorithm | Specifies the signing algorithm. Modern systems use `rsa-sha256` or `ed25519-sha256`. Legacy `rsa-sha1` is deprecated due to collision risks. |
| `c=relaxed/relaxed` | Canonicalization | Dictates how whitespace, line wraps, and casing are prepared before hashing (format is `header/body`). |
| `d=giggal.ai` | Signing Domain | The domain that created the digital signature and publishes the matching public key in DNS. |
| `s=google` | Selector | Identifies which specific public key record in DNS should be used to verify this signature. |
| `t=1731604800` | Timestamp | A Unix epoch timestamp recording the exact second the signature was generated. |
| `h=from:to:subject...` | Signed Headers | The list of email header fields included in the cryptographic hash. These headers cannot be altered without breaking the signature. |
| `bh=wX8Q...=` | Body Hash | The base64-encoded cryptographic hash of the message body content. |
| `b=p9X1...==` | Digital Signature | The actual signature: the encrypted hash of both the signed headers and the `bh` body hash. |

---

## What is a DKIM Selector?

A single domain name rarely sends email through only one server. A typical company sends everyday correspondence through Google Workspace or Microsoft 365, transactional receipts through Amazon SES or Postmark, and outbound marketing newsletters through HubSpot or Klaviyo.

If DKIM allowed only one key per domain, every sending system would need access to the exact same private key—creating a severe security risk—or one service would overwrite the other.

To solve this, DKIM introduces **Selectors**. A selector is an arbitrary string that acts as an address label in your DNS. It allows a domain to publish dozens of distinct public keys simultaneously without key conflicts.

The DNS lookup path for any DKIM record follows this universal syntax:
```text
[selector]._domainkey.[yourdomain.com]
```

### Real-World Multi-Provider Example
Suppose your company runs on `example.com`. You can configure separate selectors for every service:

1. **Google Workspace**:
   - Selector: `google`
   - DNS Query: `google._domainkey.example.com`
2. **Transactional Mail (Postmark)**:
   - Selector: `pm`
   - DNS Query: `pm._domainkey.example.com`
3. **Marketing Campaigns**:
   - Selector: `s1`
   - DNS Query: `s1._domainkey.example.com`

When an email arrives from your marketing platform, its header specifies `s=s1; d=example.com`. The recipient looks up `s1._domainkey.example.com` and verifies the signature using the key dedicated to that marketing service. Your daily corporate emails signed with `s=google` continue working independently.

Selectors also enable **zero-downtime key rotation**. When updating security keys every six months, an organization publishes a new key under selector `2026b`, starts signing new outbound mail with `s=2026b`, and leaves the older selector `2026a` active in DNS for a few weeks until older in-flight messages finish processing.

---

## Understanding Canonicalization: `relaxed` vs. `simple`

During Internet transmission, intermediate mail transfer agents often make minor cosmetic changes to an email. A mail server might strip trailing spaces, convert tabs to spaces, wrap lines at 78 characters, or change uppercase header names to lowercase.

If a cryptographic signature depended on an exact byte-for-byte match, these harmless formatting modifications would cause signatures to break constantly.

DKIM solves this with **Canonicalization** (`c=` tag), which defines how headers and message bodies are standardized before calculating their hashes. There are two canonicalization algorithms:

### 1. `simple`
- **Behavior**: Requires strict, unmodified text. Whitespace, line breaks, and empty lines must remain byte-for-byte identical.
- **Risk**: Extremely fragile. Minor intermediate adjustments by anti-spam gateways or mailing list software cause immediate verification failure.

### 2. `relaxed`
- **Behavior**: Standardizes whitespace before hashing. It converts sequences of spaces or tabs into a single space, strips trailing whitespace from lines, converts header field names to lowercase, and ignores trailing empty lines at the end of the body.
- **Standard**: Recommended by RFC guidelines and used by major mailbox providers.

In the DKIM header, canonicalization is specified as `c=header/body`. In modern production environments, you will almost always see:
```text
c=relaxed/relaxed
```
This configuration tolerates normal mail routing adjustments while strictly protecting the actual text and headers from malicious alteration.

---

## What Does a DKIM DNS Record Look Like?

A DKIM record is published as a standard DNS **TXT** record (or occasionally as a CNAME pointing to a provider's TXT record). 

Here is an authentic example of a public key TXT record:

```text
Host / Name:
google._domainkey.example.com

Record Type:
TXT

Value / Content:
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0mZ2c...DAQAB
```

### Breaking Down the Record Tags:
- `v=DKIM1`: Declares the record format version. It must be `DKIM1` and must appear first.
- `k=rsa`: Identifies the key type. The default is `rsa`. Emerging standards also support `k=ed25519` under <a href="https://datatracker.ietf.org/doc/html/rfc8463" target="_blank" rel="noopener noreferrer nofollow">IETF RFC 8463</a> for shorter, faster elliptic-curve keys.
- `p=...`: The base64-encoded public key string. This is the public counterpart to the private key stored on your outbound mail server. If the `p=` tag is empty (`p=`), it acts as a key revocation signal, instructing receivers that this selector is no longer valid.

You can generate cryptographically valid public and private key pairs for your domain using our free [DKIM Generator](/dkim-generator).

---

## Key Length Requirements: 1024-bit vs. 2048-bit

When configuring DKIM keys, key length directly affects cryptographic security:

- **1024-bit RSA Keys**: Historically common because older DNS management systems struggled with long strings. However, 1024-bit RSA is no longer considered secure against modern nation-state computational attacks. Both Google and Yahoo now deprecate 1024-bit keys and strongly recommend 2048-bit signatures.
- **2048-bit RSA Keys**: The current industry gold standard. It provides high cryptographic strength that will remain secure for years to come.

> [!IMPORTANT]
> A 2048-bit public key string is approximately 400 characters long. Standard DNS protocol limits single TXT character strings to 255 bytes. To publish a 2048-bit key in BIND or DNS providers that enforce this limit, split the string into two quoted segments inside the same TXT record:
> ```text
> "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
> "wIDAQAB..."
> ```
> DNS servers automatically concatenate adjacent strings into a single contiguous record upon resolution.

---

## Why DKIM Alone is Not Enough: The Role of DMARC

A common misconception among domain administrators is that setting up DKIM completely prevents email spoofing. In reality, **DKIM by itself has a significant structural loophole**:

DKIM authenticates the domain declared in the `d=` tag of the signature. However, mail clients (like Apple Mail, Gmail, and Thunderbird) display the address found in the human-readable `From:` header.

Without an enforcement protocol connecting the two:
1. An attacker could register `malicious-domain.com`.
2. The attacker sets up valid DKIM keys on `malicious-domain.com`.
3. The attacker sends a phishing email with `From: billing@yourcompany.com`, but signs the email using their own valid `d=malicious-domain.com` key.
4. The receiver checks DKIM: the cryptographic signature on `malicious-domain.com` is valid (`dkim=pass`).

To close this vulnerability, organizations implement **DMARC (Domain-based Message Authentication, Reporting, and Conformance)**.

DMARC introduces **Identifier Alignment**. It requires that the domain verified by DKIM (in the `d=` tag) matches the domain displayed to the human recipient in the `From:` header. If the signature passes but the domains do not align, DMARC fails, and the receiving mailbox can reject the spoofed message.

For a complete guide on setting up authentication policies across your entire stack, read our guide on [SPF, DKIM, and DMARC explained](/blog/spf-dkim-dmarc-explained) and our breakdown of [what is a DMARC record](/blog/what-is-a-dmarc-record).

---

## Top Reasons DKIM Fails (and How to Fix Them)

When monitoring your email authentication reports, a `dkim=fail` status indicates that receivers are distrusting your outbound messages. Here are the most frequent causes:

### 1. Body Hash Mismatches (`bh=` Failure)
The body hash (`bh=`) represents the exact state of the email body when it left your server. If an automated security tool, anti-virus gateway, or corporate proxy modifies the message body along the way—such as appending a corporate legal disclaimer, adding an anti-phishing banner, or re-encoding links for click tracking—the body hash changes. When the receiver hashes the modified body, the hashes mismatch, breaking the signature.
- **Fix**: Ensure that disclaimers and link wrappers are applied *before* the message is signed by the outbound MTA, not after.

### 2. DNS Syntax Errors and Character Truncation
Missing semicolons, extra spaces inside the base64 key, or truncated characters caused by copy-pasting 2048-bit strings into DNS panels will invalidate the public key.
- **Fix**: Always test your published DNS records using an automated syntax validator or our [DKIM Generator](/dkim-generator) before launching high-volume campaigns.

### 3. Automated Email Forwarding
When an email recipient sets up an auto-forwarding rule (for example, forwarding from a university address to a personal Gmail account), the forwarding server often rewrites headers or touches message formatting. While SPF breaks almost 100% of the time during forwarding (because the forwarding server's IP is not in the original sender's SPF record), DKIM survives forwarding **only if the body content remains untouched**. If the forwarding service alters the message, DKIM breaks as well.
- **Fix**: Modern mailbox providers use **ARC (Authenticated Received Chain)** under RFC 8617 to preserve original DKIM authentication status across intermediate hops.

### 4. Sending From Third-Party Apps Without Custom Selectors
When you send marketing or support emails through third-party platforms without setting up custom domain authentication, the platform signs using its own shared domain (e.g., `d=sendgrid.net`). While the signature passes, it fails DMARC alignment because it does not match your `From: yourcompany.com` address.
- **Fix**: Always configure custom domain authentication in every SaaS sending tool so that messages are signed using your own domain and dedicated selector.

---

## DKIM Implementation Checklist for 2026

To ensure high inbox placement and compliance with modern receiver guidelines from Google, Yahoo, and Microsoft (detailed in our [how to improve email deliverability checklist](/blog/how-to-improve-email-deliverability)), audit your sending configuration against these points:

- [ ] **Generate 2048-bit RSA Key Pairs**: Ensure no sending service uses legacy 1024-bit keys.
- [ ] **Assign Unique Selectors Per Service**: Never share private keys across different vendors; use dedicated selectors (`google`, `ses`, `mktg`).
- [ ] **Publish TXT Records in DNS**: Confirm that `selector._domainkey.yourdomain.com` resolves with `v=DKIM1; k=rsa; p=...`.
- [ ] **Configure Relaxed Canonicalization**: Use `c=relaxed/relaxed` on your MTAs to prevent harmless whitespace changes from breaking signatures.
- [ ] **Verify DMARC Alignment**: Confirm that your outbound signing domain (`d=`) matches the domain in your visible `From:` header.
- [ ] **Validate Address Quality Before Sending**: Maintain strict list hygiene with an [email checker](/email-checker) to keep bounce rates under 2% and preserve your authenticated reputation.
- [ ] **Schedule Key Rotation**: Plan to rotate your DKIM selectors and keys every 6 to 12 months using zero-downtime selector transitions.
