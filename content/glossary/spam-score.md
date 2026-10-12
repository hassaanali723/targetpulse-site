---
title: Spam score
description: What an email spam score is, how SpamAssassin adds up points, what raises a score, how to check your spam score, and how to lower it.
slug: spam-score
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: A spam score is a number that a spam filter gives to an email. The higher the number, the more likely the email goes to the spam folder. Each warning sign the filter finds adds points.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Lower your bounces as well as your spam score
---

## What is a spam score?

A spam score is a number that a [spam filter](/glossary/spam-filter) calculates for each email. A spam filter is the software that decides if an email goes to the inbox or to spam. The filter checks the email against a list of rules. Each rule that matches adds points, and a few rules take points away. The total is the email spam score.

If the score reaches a set limit, the filter marks the email as spam. The best-known example is SpamAssassin, a free spam filter that many mail servers use. Large providers such as Gmail and Outlook.com use their own systems. They do not show senders a score.

## How a spam score works: a SpamAssassin example

SpamAssassin is a project of the Apache Software Foundation. By default, it marks an email as spam when the score reaches 5.0 points. The owner of each mail server can change this limit.

Say a shop sends an email with these three problems.

- The subject line is "FREE GIFT!!! ACT NOW".
- The email has no valid DKIM signature.
- The email is one large image with almost no text.

Three rules match. The points below are example values for illustration. Real SpamAssassin rules have their own scores, and these change between versions.

| Rule that matched | Example points |
| --- | --- |
| Subject is mostly in capital letters | 1.5 |
| No valid DKIM signature | 1.0 |
| Email is mostly one image with little text | 2.0 |
| **Total** | **4.5** |

The total is 4.5, so the email stays just under the default limit of 5.0. One more rule, such as a link shortener, could take it over the limit. Then the email would go to spam.

## What raises a spam score

- **Missing authentication.** No [SPF](/glossary/spf), [DKIM](/glossary/dkim) or [DMARC](/glossary/dmarc) record, or records that fail.
- **A sending IP address on a blacklist.** An IP address is the number that identifies a server on the internet. Many filters check public lists of known spam sources. See [email blacklist](/glossary/email-blacklist).
- **Spammy words and ALL CAPS.** Phrases such as "act now" or "100% free", rows of exclamation marks, and subject lines in capitals.
- **Broken HTML.** HTML is the code that formats an email. Code with errors, or code copied from a web page, looks careless to a filter.
- **Link shorteners.** Short links such as bit.ly hide where they lead. Filters and readers both distrust them.

## Spam score for websites is a different thing

You may also see "Spam Score" in SEO tools. SEO means making a website appear higher in search results. Moz, an SEO company, uses Spam Score to estimate how much a website looks like sites that Google has penalised. It is a score for websites, not for emails. It has nothing to do with whether your email reaches the inbox.

## How to check your email spam score

1. Go to mail-tester.com. It shows you a test email address.
2. Send your real email to that address, from the tool you normally use.
3. Open the results page. It shows a score out of 10 and lists each problem it found.
4. Paste your subject line and text into our [spam word checker](/spam-word-checker). It highlights risky words, capitals and link shorteners in your browser.

On mail-tester.com, a higher score is better. On SpamAssassin, a lower score is better. Read the list of problems, not only the number.

## How to lower your spam score

1. Set up SPF, DKIM and DMARC for your sending domain.
2. Check that your sending IP address is not on a blacklist. A tool such as MXToolbox can do this.
3. Write subject lines in normal case. Use one exclamation mark at most.
4. Use full links to your own domain instead of link shorteners.
5. Send a mix of text and images, not one large image.
6. Use clean HTML from your email tool's editor, not code copied from a website.
7. Test again after each change.

## Spam score and email verification

Running [email verification](/) does not change your spam score. The score is about your email's content and setup, and a verifier does not touch either one. What an [email checker](/email-checker) does is find addresses that do not exist before you send. A [bulk email verifier](/bulk-email-verifier) removes them from a whole list, which cuts bounces and removes dead addresses before they become [spam traps](/glossary/spam-trap). Bounces and spam traps affect your sender reputation, and large providers such as Gmail decide mostly on reputation, not on a content score.
