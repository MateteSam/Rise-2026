# Rise 2026 email automation

The public registration flow is deployed through the `risewomen` Cloudflare Worker and serves:

- https://gwfsn.org/
- https://risewomen.gtmediatech444.workers.dev/

## What is live

- Registration is validated server-side and stored in Supabase before email delivery is attempted.
- Each attendee receives a unique EFT payment reference and a branded registration email.
- `registrations@gwfsn.org` receives an internal registration alert.
- Payment confirmation is available through a protected Worker endpoint:
  `POST /api/rise/admin/payment-confirmed`
- The Worker has an hourly schedule for seven-day and one-day reminders to confirmed attendees.

## Required activation steps

### 1. Verify the sending domain in Resend

The `gwfsn.org` domain has been created in Resend. Add these DNS records to the Cloudflare zone, with proxying disabled:

| Type | Name | Value | Priority |
| --- | --- | --- | --- |
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxc8T76pHMLem+Q+txiX/ruMuwSaiMWo6IakpmlwcF/6qKC8cjmf0PxK5h32As7h1vyDvjsePFVwSqFVq0nNzG1lnjlSGzBvEzvmam4CpV4SEQjtKQ76jU9sUV7+OjXtwuZ3lTlZFpBJvw7656YNMzd2exXLHO3X9ZNjjm7g/ULwIDAQAB` | — |
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` | `10` |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | — |

After DNS propagates, confirm `gwfsn.org` in Resend. The Worker already has the Resend secret and uses `Rise 2026 <registrations@gwfsn.org>` as its sender.

### 2. Add the privileged Supabase secret

The public anon key is intentionally limited to inserts. Payment confirmation and reminder jobs require the Supabase service-role key, which must be stored only as a Cloudflare secret:

```powershell
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY --name risewomen
npx wrangler secret put RISE_AUTOMATION_TOKEN --name risewomen
```

Use a long random value for `RISE_AUTOMATION_TOKEN`; it is the bearer token for the internal payment-confirmation call.

Example request after the secrets are set:

```http
POST https://gwfsn.org/api/rise/admin/payment-confirmed
Authorization: Bearer <RISE_AUTOMATION_TOKEN>
Content-Type: application/json

{"paymentReference":"RISE2026-EXAMPLE-ABC123"}
```

The payment-confirmation call marks the attendee confirmed and sends the confirmation email. The hourly Worker schedule then handles the seven-day and one-day reminders.

## Database

The migration is stored at `supabase/migrations/20260717120000_create_rise_registrations.sql` and has been applied to the active IntergroOS Supabase project. Public reads and updates are intentionally disabled by RLS.
