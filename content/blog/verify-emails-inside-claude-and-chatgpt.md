---
title: How to verify emails inside Claude and ChatGPT
description: Connect an email verification tool to Claude, ChatGPT, Cursor or VS Code over MCP, and check addresses in the conversation instead of exporting a CSV to a dashboard.
slug: verify-emails-inside-claude-and-chatgpt
date: 2026-08-21
keyword: claude chatgpt email verification tool
---

Most email verification still happens the same way it did in 2015. You export a CSV, open a browser tab, upload the file, wait, download a different CSV, and import it somewhere. It works. It is also four context switches for what is fundamentally one question: is this mailbox real.

If you already do a chunk of your work inside Claude or ChatGPT, there is a shorter path now. Model Context Protocol lets an assistant call an external tool directly, which means the verification can happen in the conversation you are already having.

## What MCP actually is

MCP is a specification for how an AI assistant talks to an outside service. Anthropic published it in late 2024 and it has since been adopted well beyond Claude. The useful mental model is a plug standard. Before it existed, every assistant needed a bespoke integration for every tool. Now a service publishes one MCP server and any compliant client can use it.

For a verification tool this is a small surface. There are only a handful of things you would ever ask: check this address, check this list, show me the full breakdown, tell me how many credits I have left. Giggal.ai exposes exactly those as three tools, `verify_emails`, `get_verification_details` and `get_credit_balance`.

The thing that makes it feel different from an API is that you do not write the call. You say what you want in the sentence you were going to type anyway, and the assistant works out which tool to invoke and with what arguments.

## What this is good for, and what it is not

Being honest about the boundary saves disappointment.

This is good when verification is a step inside something larger you are already doing in the conversation. You pasted a list of conference attendees and want the dead ones stripped before you write the outreach. You are debugging a signup flow and want to know whether a specific address is real. You are drafting a sequence and want to check the twelve names on the target account before committing. In all of those the alternative is leaving the conversation, and the tool call is genuinely faster.

It is not good for cleaning a 200,000-row list. That is a job for a bulk upload or the API, and putting it through a chat interface adds nothing except a longer wait and a lot of tokens. Use the dashboard or the REST endpoint for that, which is what they are for.

## Setting it up

You need a Giggal.ai account and an API key. The key lives in the Developer API tab of the app, not in Settings, which is a small thing that trips people up more often than it should.

The server is remote, so there is nothing to install and no SDK. It lives at `https://mcp.giggal.ai/mcp` and authenticates with your API key.

In Claude Desktop, open Settings, then Connectors, and add a custom connector pointing at that URL. Claude Code takes the same server through `claude mcp add`. Cursor and VS Code both read MCP servers from a JSON config file in the project or user directory, and the shape of that file is documented on the [MCP page](/mcp) along with the exact snippets. ChatGPT supports remote MCP servers through its connector settings on the plans where that feature is enabled.

Once it is connected, the assistant lists the three tools and you can start asking.

## What using it looks like

You do not need special phrasing. These all work:

- Verify hello@stripe.com and tell me if it is a real mailbox
- Here are eleven addresses from a webinar signup, check which ones will bounce
- Which of these are catch-all domains, and do the mailboxes actually exist
- How many verification credits do I have left before I run this

The assistant calls `verify_emails`, gets back a result per address, and explains it in the reply. If you asked about a list, you can follow up in the same conversation. Ask it to drop everything invalid, group the survivors by domain, and write them out as a CSV block you can paste straight into your sending tool. That second half is the part that makes it worth doing, because the assistant is already holding the data and can reshape it without another round trip.

## The catch-all part matters more here than usual

Roughly 30% of a B2B list sits on domains that accept mail for every possible address, real or not. Most verifiers hand those back labelled risky or accept-all, meaning they could not tell.

That label is awkward in a dashboard. It is worse in a conversation, because the assistant will faithfully report what it was given and you end up with a reply telling you that four of your eleven addresses are uncertain, which is exactly the state you were in before you asked. Giggal.ai resolves those to valid or invalid, along with mailboxes behind fifteen named secure email gateways, so the answer coming back to the assistant is an answer rather than a shrug.

## Cost and a sensible precaution

Verifications through MCP spend the same credits as anywhere else. A standard address is one credit, a catch-all is 1.5 inside a run or 2 on its own, and the free tier is 1,000 credits with no card. Credits do not expire.

The precaution is straightforward: an assistant will do what you ask, including running a larger job than you meant. Ask for the credit balance before anything big, and paste addresses rather than pointing it at a file you have not looked at. Neither of these is specific to verification, but the failure mode with a metered API is more annoying than usual.

## Whether it is worth setting up

If you open Claude or ChatGPT most days and email lists are part of your work, it takes about two minutes and removes a step you were doing by hand. If verification is a monthly bulk job you run in a browser, the dashboard is genuinely the better tool and this will not change your life.

Setup instructions and the config snippets for each client are on the [MCP page](/mcp). The [API reference](/public/docs) covers the same operations over REST if you would rather script it.
