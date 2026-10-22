create table if not exists public.rise_registrations (
  id uuid primary key,
  event_slug text not null default 'rise-2026',
  first_name text not null,
  last_name text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  organisation text,
  attendance_format text not null default 'in-person' check (attendance_format = 'in-person'),
  notes text,
  payment_reference text not null unique,
  payment_upload_token text unique,
  payment_proof_path text,
  payment_proof_uploaded_at timestamptz,
  status text not null default 'registered' check (status in ('registered', 'confirmed', 'cancelled')),
  payment_status text not null default 'pending' check (payment_status in ('pending', 'submitted', 'confirmed', 'failed')),
  payment_confirmed_at timestamptz,
  reminder_7d_sent_at timestamptz,
  reminder_1d_sent_at timestamptz,
  source text not null default 'rise-web',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists rise_registrations_email_idx on public.rise_registrations (lower(email));
create index if not exists rise_registrations_status_idx on public.rise_registrations (status, payment_status);
create unique index if not exists rise_registrations_payment_upload_token_idx
  on public.rise_registrations (payment_upload_token)
  where payment_upload_token is not null;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'rise-payment-proofs',
  'rise-payment-proofs',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

alter table public.rise_registrations enable row level security;
drop policy if exists "Public can submit Rise registrations" on public.rise_registrations;
create policy "Public can submit Rise registrations" on public.rise_registrations for insert to anon with check (source = 'rise-web' and status = 'registered' and payment_status = 'pending');
revoke all on table public.rise_registrations from anon, authenticated;
grant insert on table public.rise_registrations to anon;
