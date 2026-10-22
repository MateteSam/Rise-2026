alter table public.rise_registrations
  add column if not exists payment_upload_token text unique,
  add column if not exists payment_proof_path text,
  add column if not exists payment_proof_uploaded_at timestamptz;

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
