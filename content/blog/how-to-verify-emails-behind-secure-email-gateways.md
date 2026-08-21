---
title: How to verify emails behind secure email gateways
description: Proofpoint, Mimecast and Barracuda accept every address at the edge, which breaks the check most verifiers rely on. Here is what actually happens on those domains and how to get a real answer.
slug: how-to-verify-emails-behind-secure-email-gateways
date: 2026-08-21
keyword: seg protected email verification tool
---

If you have ever exported a verification report and noticed that a suspicious number of your best enterprise contacts came back unknown, there is a decent chance a secure email gateway was in the way. Not a catch-all domain, though the symptom looks identical. A gateway.

The distinction matters because the fix is different, and because the contacts sitting behind gateways tend to be the ones you actually wanted. Small companies rarely run one. Banks, insurers, hospitals, universities and most of the Fortune 500 do.

## What the verifier is doing when it fails

A standard verification is a short conversation. Your verifier connects to the mail server listed in the domain's MX records, says hello, names a sender, then names the recipient and waits. A server that keeps a real list of its mailboxes answers honestly. It says yes to an address that exists and no to one that does not, and your verifier writes down the answer.

A secure email gateway is a filtering layer that sits in front of the real mail server. Every message for the domain hits the gateway first, gets scanned for malware, phishing and policy violations, and only then gets passed inward. Proofpoint, Mimecast, Barracuda, Cisco and a dozen smaller vendors all work this way.

The gateway has no reason to know which mailboxes exist. Its job is filtering, not directory lookup. So when your verifier asks about a specific recipient, the gateway accepts. It accepts real addresses, it accepts typos, it accepts names of people who left in 2019. Acceptance happens at the perimeter, and the decision about whether a mailbox exists happens somewhere behind it that your verifier never reaches.

From the outside, that behaviour is indistinguishable from a catch-all domain. Same conversation, same answer, same useless result.

## Why "risky" is the wrong place to stop

Most verifiers respond to this by tagging the address. The label varies by vendor. You will see risky, unknown, accept-all, catch-all, or ok_for_all depending on whose export you are reading. The meaning is the same in each case: we could not tell.

That is an honest answer as far as it goes. The problem is what happens next. Sending tools tend to treat those labels as a soft no, and most people follow suit, because nobody wants to gamble a sender reputation on a maybe. So the addresses get filtered out of the campaign and quietly forgotten.

On a B2B list, that is roughly 30% of your contacts. On a list skewed toward enterprise, it is more. You paid to acquire those contacts and you paid again to verify them, and the outcome was a shrug.

## What a gateway-aware check does differently

The short version is that you stop asking the gateway a question it cannot answer, and find a different question it can.

Gateways are not silent. They behave in patterned ways depending on the product, the configuration and the specific address. Response timing differs between an address the gateway will eventually route and one it will eventually reject. Error codes and their exact wording differ between vendors and between versions. Some gateways expose a rejection later in the transaction rather than at the point most verifiers stop listening. Some behave differently for a real mailbox than for a random string at the same domain, if you know what to compare.

Reading those signals means fingerprinting the gateway first, then applying a check built for that specific product rather than the generic one. This is why gateway coverage is usually quoted as a number. Giggal.ai detects fifteen, Proofpoint, Mimecast and Barracuda among them. Other tools that attempt this name three or five. A verifier that names none is almost certainly returning the generic result and labelling it risky.

It is worth being straight about the limits. This is inference from observed behaviour, not a directory lookup, so it is not infallible and no honest vendor will tell you it is. What it does reliably is turn a large unusable segment into a mostly usable one, which is a different and more modest claim than perfection.

## Working out how much of your list this affects

You do not need a tool to check whether gateways are your problem. You need the MX records for the domains on your list.

Take the domain part of every address, deduplicate it, and look up the MX records for each one. A domain behind Proofpoint points at hostnames containing pphosted or ppe-hosted. Mimecast domains point at mimecast.com hosts, usually with a region code. Barracuda shows up as barracudanetworks.com. Cisco appears as iphmx.com. Microsoft 365 and Google Workspace domains point at outlook.com and google.com hosts respectively, and those are not gateways, though they can still be configured as catch-alls.

Cross-reference that list against the addresses your verifier gave up on. If the overlap is large, the gateway is the story and no amount of re-running the same tool will change the result.

## Choosing a tool for this

Three questions separate a verifier that handles this from one that does not.

Does it name the gateways it detects? A vendor doing real work here will publish a list or at least a count, because that is the thing being sold. Vague language about advanced detection with no products named usually means detection, not resolution: the tool can tell you a gateway is present and still cannot tell you whether the mailbox is real.

Does it return valid or invalid, or does it return a label? Ask specifically what the output looks like for an address behind Mimecast. If the answer is that you get a risky flag and a confidence score, you have bought a slightly better label.

What does it cost on the addresses that need the work? Gateway and catch-all resolution costs a vendor more to run, so most price it differently. Some charge a multiple of a standard credit. Some meter it from a separate, smaller allowance that runs out before the standard one. Neither is unreasonable, but you want to know before you upload a list that is 40% enterprise domains. Giggal.ai bills these at 1.5 credits inside a run, from the same balance as everything else.

## The practical sequence

Run your list through whatever you use now and keep the export. Pull out every row that came back risky, unknown or accept-all. Check the MX records on those domains to see how many are gateways rather than plain catch-alls. Then run that segment alone through a tool built for it and compare the two exports side by side.

The comparison is the point. Every vendor here, us included, makes accuracy claims that sound similar on a pricing page. The only figure that means anything is how many of your own dead contacts came back alive, and whether the ones marked valid actually accepted mail when you sent to them.

If you want to try that, Giggal.ai gives 1,000 credits free without a card, and they work on a bulk upload rather than one address at a time, which is the only way this test tells you anything. You can also read more about [how we verify catch-all and accept-all domains](/catch-all-verification), or the [SEG verification approach](/seg-email-verification) in more detail.
