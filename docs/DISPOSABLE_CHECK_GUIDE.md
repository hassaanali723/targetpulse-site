# Disposable email detection on the marketing site

## The one rule

Do not keep a list of disposable domains in this repo. Ever.

The backend maintains the list (about 98,000 domains today). It re-downloads the
community sources every 6 hours, applies the admin team's manual corrections, and
pushes the result to the validation workers within a minute. A copy kept in this
repo was 22,000 domains behind within days and told visitors that real
throwaway domains were fine. The only correct way to answer "is this
disposable?" is to ask the backend.

## The endpoint

```
POST {BACKEND_URL}/api/public/validate-email
Content-Type: application/json
X-Site-Token: <PUBLIC_SITE_TOKEN>    # shared secret, server-side env
X-Visitor-IP: <visitor IP>           # from getVisitorIp(req)

{ "email": "someone@example.com" }
```

The backend allows each guest 5 checks per hour. All site traffic reaches it
from the site server's IP, so the visitor's IP is passed explicitly and the
backend honours it only when the token matches. Both headers are set by
`runVerification`; never send them from client code and never log the token.

`BACKEND_URL` and `PUBLIC_SITE_TOKEN` come from server-side env (never in a
client component). Get the visitor's IP with `getVisitorIp(req)` from
`lib/publicVerify.ts`, which reads Cloudflare's `cf-connecting-ip`; do not read
`x-forwarded-for` directly, its first entry is visitor-controlled. `lib/publicVerify.ts` already wraps this call in
`runVerification(email, ip)` and maps the response with `mapResult()`. Use those
two functions. Do not call the endpoint from new code without them.

## Reading the answer

The response is `{ success: true, data: {...} }`. The fields that matter:

| Field | Meaning |
|---|---|
| `data.details.attributes.disposable` | `true` when the domain, or a parent domain, is on the disposable list. This is the disposable verdict. |
| `data.details.sub_status` | `"Disposable Email"` when the above is true. |
| `data.status` | `deliverable`, `undeliverable`, `risky` or `unknown`. Always `undeliverable` for a disposable address. |
| `data.deliverability_score` | 0 to 100. Always 0 for a disposable address. |

Decision for the disposable checker page:

```
if data.details.attributes.disposable === true  -> show "Disposable"
else                                            -> show "Not disposable"
```

Nothing else feeds that verdict.

## What the disposable checker page must and must not claim

**Must:** say whether the domain is a disposable or temporary mail service.

**Must not:** say the address is deliverable, active, or safe to send to. "Not
disposable" only means the domain is not a throwaway service. It says nothing
about whether the mailbox exists. For that, send the visitor to the verifier
tool with a call to action such as "Check if this address is deliverable".

The backend response does contain the full deliverability verdict for
non-disposable addresses, because the public endpoint runs the complete check.
The disposable page should still present only the disposable verdict. Showing
deliverability there blurs the two tools and duplicates the verifier.

## Timing

- Disposable address: the backend answers before any mail-server contact.
  Well under a second.
- Non-disposable address: the backend runs the full check, including SMTP,
  before replying. Allow up to 60 seconds. `runVerification` already sets a
  60 second timeout. Show a progress state, not a spinner that looks stuck.

## Errors

| Status | Meaning | Show |
|---|---|---|
| 429 | visitor hit the guest limit | the message in the response body, plus the signup CTA |
| 400 | bad email format | "Enter a valid email address" |
| anything else, or timeout | backend unavailable | "Could not check right now, please try again" |

Never show a verdict on an error. In particular, never default to "Not
disposable" when the backend did not answer.

## Examples

Disposable, including a subdomain of a listed domain:

```
POST /api/public/validate-email   { "email": "towicif840@abowned.com" }

data.status                         "undeliverable"
data.details.sub_status             "Disposable Email"
data.details.attributes.disposable  true
data.deliverability_score           0
```

`someone@mail.abowned.com` returns the same, because `abowned.com` is listed.

Not disposable:

```
POST /api/public/validate-email   { "email": "info@giggal.ai" }

data.details.attributes.disposable  false
data.status                         (whatever the full check found)
```

For the disposable page, show "Not disposable" and the verifier CTA. Ignore
`data.status` on this page.

## Things you do not need to handle

- New disposable domains. The backend picks them up on its own schedule.
- False positives. The admin team fixes those with an override in the admin
  panel and the change is live within a minute. No site deploy.
- Case, whitespace, trailing dots, subdomains. The backend normalises all of
  it. Send the address as the visitor typed it, trimmed.

## Where the current implementation lives

- `lib/publicVerify.ts`: `runVerification`, `mapResult`, `disposableResult`
  (the console output used when `attributes.disposable` is true).
- `app/api/tools/disposable-check/route.ts`: the page's API route, with the
  per-visitor quota and 24 hour result cache.
- `app/(en)/disposable-email-checker/page.tsx`: the page.
