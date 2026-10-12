---
title: Double opt-in
description: What double opt-in means, how the confirmation email works, single vs double opt-in compared, why businesses use it, and how to set it up.
slug: double-opt-in
date: 2026-10-12
updated: 2026-10-12
keyword: double opt in
short: Double opt-in means a person signs up for your emails and then confirms by clicking a link in a confirmation email. Only after that click are they added to your list. It shows that the person owns the address and wants your email.
related: single-opt-in, list-cleaning, email-hygiene, suppression-list, spam-trap, typo-domain
cta: Catch typos at signup, before the confirmation email bounces
---

## What is double opt-in?

Double opt-in is a way to add people to an email list in two steps. First, the person enters their email address on your website. Second, they click a link in an email you send to that address. Only then is the address added to your list.

To opt in means to choose to join. "Double" means the person chooses twice, once on the form and once in the email. An address that is never confirmed is never added.

## An example: Maria joins a bakery newsletter

Maria visits the website of her local bakery. She wants to get its monthly newsletter.

1. She types her address, maria.lopez@gmail.com, into the signup form and clicks Subscribe.
2. The website shows a message: "Please check your inbox to confirm your email."
3. A minute later, Maria gets an email from the bakery. The subject is "Please confirm your email".
4. The email has one button that says "Yes, subscribe me".
5. Maria clicks it. A page opens that says "Thank you, you are subscribed."
6. The bakery's email tool adds Maria to the list. It records the date and time of her click.

Now say Maria had typed maria.lopez@gmial.com by mistake. The confirmation email would never reach her. She would never click, so the wrong address would never join the list.

## Single opt-in vs double opt-in

With [single opt-in](/glossary/single-opt-in), the person enters their address and is added at once. There is no confirmation step.

| | Single opt-in | Double opt-in |
| --- | --- | --- |
| Steps for the subscriber | One: fill in the form | Two: fill in the form, then click the link |
| List growth | Faster, because everyone is added | Slower, because some people never confirm |
| Mistyped addresses | Added to the list, then they bounce | Never added |
| Fake signups by bots | Added to the list | Never added, unless someone clicks the link |
| Proof of consent | Only the signup form | A record of the confirmation click |
| Risk of spam traps | Higher | Lower |

## Why businesses use double opt-in

- **Proof of consent.** Consent means the person agreed to get your email. With double opt-in, the business can show when each person confirmed.
- **Fewer fake and mistyped addresses.** Addresses that cannot receive email never confirm, so they never join the list.
- **Fewer spam traps.** A [typo domain](/glossary/typo-domain) address may get the one confirmation email. But nobody clicks the link, so it never joins the list. The same is true for other [spam traps](/glossary/spam-trap).
- **Readers who took a step to join.** Each person on the list clicked a link to confirm they want your email.

## How to set up double opt-in in your ESP

An ESP is the service you use to send email to your list, such as Mailchimp or Brevo. Many ESPs offer double opt-in as a setting. The menu names differ, but the steps are similar.

1. Open the settings of your list, audience or signup form.
2. Turn on double opt-in or the confirmation email.
3. Edit the confirmation email. Use a clear subject such as "Please confirm your email" and one large button.
4. Set the page people see after they click.
5. Test the form with your own address before you publish it.
6. Check that your ESP records the confirmation date and time for each subscriber.

Keep the confirmation email short. Send it right away, while the person still remembers signing up.

## Double opt-in and email verification

Double opt-in and verification do different jobs, and they work well together. A check at signup, the same check an [email checker](/email-checker) runs, catches typos such as gmial.com before the confirmation email bounces. Double opt-in then shows that the person owns the address and wants your email. For older addresses, collected before you used double opt-in, use a [bulk email verifier](/bulk-email-verifier). It removes the addresses that would bounce, as part of regular [email verification](/).
