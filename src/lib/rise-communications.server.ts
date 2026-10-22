import { BANKING, EVENT, REGISTRATION_EMAIL } from "./content";

export type RiseRegistrationInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation?: string;
  attendanceFormat: "in-person";
  notes?: string;
};

type RiseRegistration = RiseRegistrationInput & {
  id: string;
  paymentReference: string;
  paymentUploadToken?: string | null;
  paymentProofPath?: string | null;
  status: string;
  paymentStatus: string;
  paymentConfirmedAt?: string | null;
  reminder7dSentAt?: string | null;
  reminder1dSentAt?: string | null;
};

export type RiseEnv = Record<string, unknown>;

const DEFAULT_SUPABASE_URL = "https://xmatyeduxidhmcwzknwo.supabase.co";
const PAYMENT_PROOF_BUCKET = "rise-payment-proofs";
const PAYMENT_PROOF_MAX_BYTES = 10 * 1024 * 1024;
const PAYMENT_PROOF_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

function envValue(env: RiseEnv | undefined, key: string) {
  const injected = env?.[key];
  if (typeof injected === "string" && injected) return injected;
  if (typeof process !== "undefined") return process.env[key];
  return undefined;
}

function requiredEnv(env: RiseEnv | undefined, key: string) {
  const value = envValue(env, key);
  if (!value) throw new Error(`Missing required configuration: ${key}`);
  return value;
}

function supabaseConfig(env?: RiseEnv) {
  return {
    url: envValue(env, "SUPABASE_URL") ?? DEFAULT_SUPABASE_URL,
    key: requiredEnv(env, "SUPABASE_ANON_KEY"),
  };
}

function serviceSupabaseConfig(env: RiseEnv) {
  return {
    url: envValue(env, "SUPABASE_URL") ?? DEFAULT_SUPABASE_URL,
    key: requiredEnv(env, "SUPABASE_SERVICE_ROLE_KEY"),
  };
}

function resendConfig(env?: RiseEnv) {
  return {
    key: requiredEnv(env, "RESEND_API_KEY"),
    from: envValue(env, "RESEND_FROM_EMAIL") ?? "Rise 2026 <registrations@gwfsn.org>",
    internal: envValue(env, "RISE_INTERNAL_EMAIL") ?? REGISTRATION_EMAIL,
  };
}

function publicSiteUrl(env?: RiseEnv) {
  return envValue(env, "PUBLIC_SITE_URL") ?? "https://gwfsn.org";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ??
      character,
  );
}

function htmlShell(content: string) {
  return `<!doctype html><html><body style="margin:0;background:#f6f1eb;color:#221b2e;font-family:Arial,sans-serif"><div style="max-width:620px;margin:0 auto;padding:28px 16px"><div style="background:linear-gradient(135deg,#4b256d,#21152f);border-radius:24px 24px 0 0;padding:30px 28px;color:#fff"><div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#f2a05e;font-weight:700">GWFSN presents</div><h1 style="font-family:Georgia,serif;font-size:34px;font-weight:400;margin:10px 0 0">Rise 2026</h1><p style="margin:8px 0 0;color:#f2e9df">South African Woman · Honour the Past · Own the Present · Shape the Future</p></div><div style="background:#fff;padding:30px 28px;border-radius:0 0 24px 24px;box-shadow:0 12px 40px rgba(34,27,46,.08)">${content}<p style="margin:30px 0 0;padding-top:18px;border-top:1px solid #eee6df;color:#756d79;font-size:12px;line-height:1.6">Questions? Reply to this email or contact <a href="mailto:${BANKING.email}" style="color:#4b256d;font-weight:700">${BANKING.email}</a>.</p></div></div></body></html>`;
}

function eventDetailsHtml() {
  return `<div style="background:#f8f4f0;border-radius:16px;padding:18px;margin:22px 0"><p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:#756d79;font-weight:700">Event details</p><p style="margin:4px 0"><strong>${EVENT.date}</strong></p><p style="margin:4px 0">${EVENT.time}</p><p style="margin:4px 0">${EVENT.venue}</p></div>`;
}

async function supabaseRequest(
  env: RiseEnv | undefined,
  path: string,
  init: RequestInit = {},
  privileged = false,
) {
  const config = privileged ? serviceSupabaseConfig(env as RiseEnv) : supabaseConfig(env);
  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase request failed (${response.status}): ${detail}`);
  }
  return response;
}

async function sendRiseEmail(
  env: RiseEnv | undefined,
  message: { to: string | string[]; subject: string; html: string; text: string },
) {
  const config = resendConfig(env);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${config.key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: config.from,
      reply_to: BANKING.email,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text,
      tags: [{ name: "program", value: "rise-2026" }],
    }),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${detail}`);
  }
}

async function uploadPaymentProof(env: RiseEnv, path: string, file: File) {
  const config = serviceSupabaseConfig(env);
  const response = await fetch(`${config.url}/storage/v1/object/${PAYMENT_PROOF_BUCKET}/${path}`, {
    method: "POST",
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      "Content-Type": file.type,
      "x-upsert": "false",
      "cache-control": "3600",
    },
    body: file,
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Payment proof upload failed (${response.status}): ${detail}`);
  }
}

async function createPaymentProofSignedUrl(env: RiseEnv, path: string) {
  const config = serviceSupabaseConfig(env);
  const response = await fetch(
    `${config.url}/storage/v1/object/sign/${PAYMENT_PROOF_BUCKET}/${path}`,
    {
      method: "POST",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expiresIn: 60 * 60 * 24 * 7 }),
    },
  );
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Payment proof link failed (${response.status}): ${detail}`);
  }
  const payload = (await response.json()) as { signedURL?: string; signedUrl?: string };
  const signedPath = payload.signedURL ?? payload.signedUrl;
  if (!signedPath) throw new Error("Payment proof link was not returned");
  return signedPath.startsWith("http")
    ? signedPath
    : `${config.url}/storage/v1${signedPath.startsWith("/") ? signedPath : `/${signedPath}`}`;
}

function registrationRow(
  input: RiseRegistrationInput,
  id: string,
  paymentReference: string,
  paymentUploadToken: string,
) {
  return {
    id,
    event_slug: "rise-2026",
    first_name: input.firstName,
    last_name: input.lastName,
    full_name: `${input.firstName} ${input.lastName}`.trim(),
    email: input.email,
    phone: input.phone,
    organisation: input.organisation || null,
    attendance_format: input.attendanceFormat,
    notes: input.notes || null,
    payment_reference: paymentReference,
    payment_upload_token: paymentUploadToken,
    status: "registered",
    payment_status: "pending",
    source: "rise-web",
  };
}

export async function registerRiseAttendee(input: RiseRegistrationInput, env?: RiseEnv) {
  const id = crypto.randomUUID();
  const paymentUploadToken = crypto.randomUUID();
  // Keep the EFT reference to a fixed nine characters while retaining uniqueness.
  const compactCode = parseInt(id.replace(/-/g, "").slice(0, 7), 16)
    .toString(36)
    .toUpperCase()
    .padStart(6, "0");
  const paymentReference = `R26${compactCode}`;
  const row = registrationRow(input, id, paymentReference, paymentUploadToken);

  await supabaseRequest(env, "rise_registrations", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(row),
  });

  const attendeeEmail = htmlShell(
    `<p style="font-size:18px;line-height:1.5">Thank you, <strong>${escapeHtml(input.firstName)}</strong>. Your place has been reserved while we match your EFT payment.</p>${eventDetailsHtml()}<div style="border:2px solid #f2a05e;border-radius:16px;padding:18px;margin:22px 0"><p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.14em;color:#756d79;font-weight:700">Your payment reference</p><p style="font-family:monospace;font-size:20px;color:#4b256d;font-weight:700;margin:0">${escapeHtml(paymentReference)}</p></div><p style="line-height:1.6">Please pay <strong>${EVENT.price}</strong> by EFT using the details below, then upload your proof of payment using the secure button below. We will send your confirmed registration email as soon as payment is verified.</p><div style="background:#4b256d;color:#fff;border-radius:16px;padding:20px;line-height:1.8"><strong>Standard Bank</strong><br/>Account name: ${BANKING.accountName}<br/>Account number: ${BANKING.accountNumber}<br/>Reference: ${escapeHtml(paymentReference)}<br/>Amount: ${EVENT.price}</div><p style="margin:24px 0 0"><a href="${publicSiteUrl(env)}/payment-proof?ref=${encodeURIComponent(paymentReference)}&amp;token=${encodeURIComponent(paymentUploadToken)}" style="display:inline-block;background:#f2a05e;color:#21152f;text-decoration:none;font-weight:700;padding:14px 20px;border-radius:999px">Upload proof of payment</a></p><p style="line-height:1.6">Your upload is private and will only be used to verify your payment. You can also reply to this email if you need help.</p>`,
  );
  const proofUrl = `${publicSiteUrl(env)}/payment-proof?ref=${encodeURIComponent(paymentReference)}&token=${encodeURIComponent(paymentUploadToken)}`;
  const attendeeText = `Thank you, ${input.firstName}. Your Rise 2026 place has been reserved.\n\n${EVENT.date}\n${EVENT.time}\n${EVENT.venue}\n\nPayment reference: ${paymentReference}\n\nPay ${EVENT.price} by EFT to Standard Bank, account name ${BANKING.accountName}, account number ${BANKING.accountNumber}. Upload your proof of payment here: ${proofUrl}\n\nWe will confirm your registration once payment is verified.`;
  const config = resendConfig(env);
  const internalEmail = htmlShell(
    `<p style="font-size:18px;line-height:1.5"><strong>New Rise 2026 registration</strong></p>${eventDetailsHtml()}<p style="line-height:1.8"><strong>Name:</strong> ${escapeHtml(row.full_name)}<br/><strong>Email:</strong> ${escapeHtml(input.email)}<br/><strong>Phone:</strong> ${escapeHtml(input.phone)}<br/><strong>Organisation:</strong> ${escapeHtml(input.organisation || "Not provided")}<br/><strong>Payment reference:</strong> ${escapeHtml(paymentReference)}<br/><strong>Registration ID:</strong> ${escapeHtml(id)}<br/><strong>Notes:</strong> ${escapeHtml(input.notes || "None")}</p><p style="line-height:1.6">When payment is verified, call the protected payment-confirmation endpoint with this registration ID or payment reference to send the attendee their confirmation and start reminder eligibility.</p>`,
  );

  let emailStatus: "sent" | "pending" = "sent";
  try {
    await sendRiseEmail(env, {
      to: input.email,
      subject: `Your Rise 2026 place is reserved · ${paymentReference}`,
      html: attendeeEmail,
      text: attendeeText,
    });
    await sendRiseEmail(env, {
      to: config.internal,
      subject: `New Rise 2026 registration · ${row.full_name}`,
      html: internalEmail,
      text: `New Rise 2026 registration\n\n${row.full_name}\n${input.email}\n${input.phone}\nPayment reference: ${paymentReference}\nRegistration ID: ${id}`,
    });
  } catch (error) {
    emailStatus = "pending";
    console.error("Rise registration saved but email delivery failed", error);
  }

  return { success: true, paymentReference, paymentUploadToken, emailStatus };
}

async function getRegistration(lookup: string, env: RiseEnv) {
  const field = /^[0-9a-f-]{36}$/i.test(lookup) ? "id" : "payment_reference";
  const response = await supabaseRequest(
    env,
    `rise_registrations?${field}=eq.${encodeURIComponent(lookup)}&select=*`,
    { headers: { Prefer: "return=representation" } },
    true,
  );
  const rows = (await response.json()) as Array<Record<string, unknown>>;
  const row = rows[0];
  if (!row) return undefined;
  return {
    ...row,
    firstName: String(row.first_name),
    lastName: String(row.last_name),
    email: String(row.email),
    phone: String(row.phone),
    paymentReference: String(row.payment_reference),
    paymentUploadToken: row.payment_upload_token ? String(row.payment_upload_token) : null,
    paymentProofPath: row.payment_proof_path ? String(row.payment_proof_path) : null,
    reminder7dSentAt: row.reminder_7d_sent_at ? String(row.reminder_7d_sent_at) : null,
    reminder1dSentAt: row.reminder_1d_sent_at ? String(row.reminder_1d_sent_at) : null,
  } as RiseRegistration;
}

async function getRegistrationForProof(paymentReference: string, paymentUploadToken: string, env: RiseEnv) {
  const response = await supabaseRequest(
    env,
    `rise_registrations?payment_reference=eq.${encodeURIComponent(paymentReference)}&payment_upload_token=eq.${encodeURIComponent(paymentUploadToken)}&select=*`,
    { headers: { Prefer: "return=representation" } },
    true,
  );
  const rows = (await response.json()) as Array<Record<string, unknown>>;
  const row = rows[0];
  if (!row) return undefined;
  return {
    ...row,
    firstName: String(row.first_name),
    lastName: String(row.last_name),
    email: String(row.email),
    phone: String(row.phone),
    paymentReference: String(row.payment_reference),
    paymentUploadToken: String(row.payment_upload_token),
    paymentStatus: String(row.payment_status),
  } as RiseRegistration;
}

export async function handleRisePaymentProofRequest(request: Request, env: RiseEnv) {
  const url = new URL(request.url);
  if (url.pathname !== "/api/rise/payment-proof" || request.method !== "POST") return;
  try {
    const form = await request.formData();
    const paymentReference = String(form.get("paymentReference") ?? "").trim();
    const paymentUploadToken = String(form.get("paymentUploadToken") ?? "").trim();
    const file = form.get("proof");
    if (!paymentReference || !paymentUploadToken) throw new Error("This upload link is incomplete");
    if (!(file instanceof File) || file.size === 0) throw new Error("Please choose a PDF, JPG or PNG file");
    if (file.size > PAYMENT_PROOF_MAX_BYTES) throw new Error("Please keep the file below 10 MB");
    if (!PAYMENT_PROOF_TYPES.has(file.type.toLowerCase())) throw new Error("Please upload a PDF, JPG or PNG file");

    const registration = await getRegistrationForProof(paymentReference, paymentUploadToken, env);
    if (!registration) {
      return new Response(JSON.stringify({ error: "We could not match that upload link to a registration" }), {
        status: 404,
        headers: { "content-type": "application/json" },
      });
    }
    if (registration.paymentStatus === "confirmed") {
      return new Response(JSON.stringify({ error: "This registration is already confirmed" }), {
        status: 409,
        headers: { "content-type": "application/json" },
      });
    }

    const extension = file.type === "application/pdf" ? "pdf" : file.type === "image/png" ? "png" : "jpg";
    const proofPath = `${registration.id}/${crypto.randomUUID()}.${extension}`;
    await uploadPaymentProof(env, proofPath, file);
    await supabaseRequest(
      env,
      `rise_registrations?id=eq.${encodeURIComponent(registration.id)}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          payment_status: "submitted",
          payment_proof_path: proofPath,
          payment_proof_uploaded_at: new Date().toISOString(),
        }),
      },
      true,
    );

    let proofLink = "";
    try {
      proofLink = await createPaymentProofSignedUrl(env, proofPath);
    } catch (error) {
      console.error("Proof uploaded but signed review link failed", error);
    }
    const config = resendConfig(env);
    try {
      await sendRiseEmail(env, {
        to: config.internal,
        subject: `Proof of payment received · ${paymentReference}`,
        html: htmlShell(`<p style="font-size:18px;line-height:1.5"><strong>Proof of payment received</strong></p>${eventDetailsHtml()}<p style="line-height:1.8"><strong>Name:</strong> ${escapeHtml(`${registration.firstName} ${registration.lastName}`)}<br/><strong>Email:</strong> ${escapeHtml(registration.email)}<br/><strong>Reference:</strong> ${escapeHtml(paymentReference)}<br/><strong>File:</strong> ${escapeHtml(file.name)}</p>${proofLink ? `<p><a href="${escapeHtml(proofLink)}" style="display:inline-block;background:#4b256d;color:#fff;text-decoration:none;font-weight:700;padding:13px 18px;border-radius:999px">Review proof of payment</a></p>` : ""}<p style="line-height:1.6">The registration is now marked as payment submitted. Confirm the bank receipt before using the payment-confirmed action.</p>`),
        text: `Proof of payment received\n\n${registration.firstName} ${registration.lastName}\n${registration.email}\nReference: ${paymentReference}\nFile: ${file.name}${proofLink ? `\nReview: ${proofLink}` : ""}`,
      });
      await sendRiseEmail(env, {
        to: registration.email,
        subject: "We received your proof of payment · Rise 2026",
        html: htmlShell(`<p style="font-size:18px;line-height:1.5">Thank you, <strong>${escapeHtml(registration.firstName)}</strong>. We’ve received your proof of payment.</p>${eventDetailsHtml()}<div style="background:#fff8ec;border-radius:16px;padding:18px;margin:22px 0;color:#6e4c18"><strong>Payment review in progress</strong><br/>Reference: <span style="font-family:monospace">${escapeHtml(paymentReference)}</span></div><p style="line-height:1.6">Our team will verify the payment and send your confirmed registration email as soon as it is matched. There is nothing else you need to do right now.</p>`),
        text: `We received your proof of payment for Rise 2026. Reference: ${paymentReference}. Our team will verify it and confirm your registration by email.`,
      });
    } catch (error) {
      console.error("Payment proof saved but notification email failed", error);
    }
    return new Response(JSON.stringify({ success: true }), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error("Rise payment proof upload failed", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Upload failed" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
}

async function sendPaymentConfirmation(registration: RiseRegistration, env: RiseEnv) {
  await sendRiseEmail(env, {
    to: registration.email,
    subject: "Payment received · your Rise 2026 registration is confirmed",
    html: htmlShell(
      `<p style="font-size:18px;line-height:1.5">Wonderful news, <strong>${escapeHtml(registration.firstName)}</strong> — your payment has been received and your place is now confirmed.</p>${eventDetailsHtml()}<div style="background:#edf7ef;border-radius:16px;padding:18px;margin:22px 0;color:#1f6b36"><strong>Registration confirmed</strong><br/>Payment reference: <span style="font-family:monospace">${escapeHtml(registration.paymentReference)}</span></div><p style="line-height:1.6">We’ll keep you updated with arrival information, programme notes and reminders. Please bring this reference with you on the day.</p>`,
    ),
    text: `Your Rise 2026 registration is confirmed, ${registration.firstName}. Payment reference: ${registration.paymentReference}. Event: ${EVENT.date}, ${EVENT.time}, ${EVENT.venue}. We will send arrival information and reminders before the event.`,
  });
}

export async function confirmRisePayment(lookup: string, env: RiseEnv) {
  const registration = await getRegistration(lookup, env);
  if (!registration) throw new Error("Registration not found");
  await supabaseRequest(
    env,
    `rise_registrations?id=eq.${encodeURIComponent(registration.id)}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        status: "confirmed",
        payment_status: "confirmed",
        payment_confirmed_at: new Date().toISOString(),
      }),
    },
    true,
  );
  await sendPaymentConfirmation(registration, env);
  return { success: true, email: registration.email };
}

async function sendReminder(
  registration: RiseRegistration,
  stage: "7-day" | "1-day",
  env: RiseEnv,
) {
  await sendRiseEmail(env, {
    to: registration.email,
    subject: `${stage === "7-day" ? "One week" : "Tomorrow"} · Rise 2026 reminder`,
    html: htmlShell(
      `<p style="font-size:18px;line-height:1.5">A reminder for you, <strong>${escapeHtml(registration.firstName)}</strong>.</p>${eventDetailsHtml()}<p style="line-height:1.6">Your place is confirmed. ${stage === "7-day" ? "We’re one week away — start planning your arrival and invite a woman who should be in the room." : "We’re together tomorrow. Please arrive from 1:30 PM for registration and seating."}</p><div style="background:#4b256d;color:#fff;border-radius:16px;padding:20px;line-height:1.8"><strong>Your reference</strong><br/><span style="font-family:monospace">${escapeHtml(registration.paymentReference)}</span><br/><br/>Royal Majestic Hotel, Rosebank</div>`,
    ),
    text: `Rise 2026 reminder for ${registration.firstName}. ${EVENT.date}, ${EVENT.time}, ${EVENT.venue}. Please arrive from 1:30 PM. Your reference is ${registration.paymentReference}.`,
  });
}

export async function runRiseReminderJob(env: RiseEnv) {
  if (!envValue(env, "SUPABASE_SERVICE_ROLE_KEY")) {
    console.warn("Rise reminder job skipped: SUPABASE_SERVICE_ROLE_KEY is not configured");
    return { sent: 0, skipped: true };
  }
  const eventDate = new Date("2026-08-08T14:00:00+02:00");
  const now = new Date();
  if (now >= eventDate) return { sent: 0 };
  const response = await supabaseRequest(
    env,
    "rise_registrations?status=eq.confirmed&payment_status=eq.confirmed&select=*",
    {},
    true,
  );
  const registrations = (await response.json()) as Array<Record<string, unknown>>;
  const sevenDayDue = now >= new Date(eventDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const oneDayDue = now >= new Date(eventDate.getTime() - 24 * 60 * 60 * 1000);
  let sent = 0;
  for (const row of registrations) {
    const registration = {
      ...row,
      firstName: String(row.first_name),
      email: String(row.email),
      paymentReference: String(row.payment_reference),
      id: String(row.id),
      reminder7dSentAt: row.reminder_7d_sent_at ? String(row.reminder_7d_sent_at) : null,
      reminder1dSentAt: row.reminder_1d_sent_at ? String(row.reminder_1d_sent_at) : null,
    } as RiseRegistration;
    const stage =
      oneDayDue && !registration.reminder1dSentAt
        ? "1-day"
        : sevenDayDue && !registration.reminder7dSentAt
          ? "7-day"
          : null;
    if (!stage) continue;
    await sendReminder(registration, stage, env);
    const field = stage === "1-day" ? "reminder_1d_sent_at" : "reminder_7d_sent_at";
    await supabaseRequest(
      env,
      `rise_registrations?id=eq.${encodeURIComponent(registration.id)}`,
      { method: "PATCH", body: JSON.stringify({ [field]: now.toISOString() }) },
      true,
    );
    sent += 1;
  }
  return { sent };
}

export async function handleRiseAdminRequest(request: Request, env: RiseEnv) {
  const url = new URL(request.url);
  if (url.pathname !== "/api/rise/admin/payment-confirmed" || request.method !== "POST") return;
  const token = envValue(env, "RISE_AUTOMATION_TOKEN");
  if (!token || request.headers.get("authorization") !== `Bearer ${token}`)
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  try {
    const body = (await request.json()) as { registrationId?: string; paymentReference?: string };
    const lookup = body.registrationId ?? body.paymentReference;
    if (!lookup) throw new Error("registrationId or paymentReference is required");
    return new Response(JSON.stringify(await confirmRisePayment(lookup, env)), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Payment confirmation failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}

export type BroadcastOptions = {
  testEmail?: string;
  dryRun?: boolean;
};

export async function sendPostponementBroadcast(env: RiseEnv, options: BroadcastOptions = {}) {
  const subject = "Postponement of Book Launch";
  const htmlBody = htmlShell(
    `<p style="font-size:18px;line-height:1.5;margin-top:0">Dear All,</p><p style="line-height:1.6">Once more we thank you for the graciousness of your presence during our <strong>Rise South African Woman 2026</strong> and we look forward to seeing you in 2027.</p><p style="line-height:1.6">This is just an update with regards the <strong>&ldquo;Women of the Rock&rdquo;</strong> book launch that was scheduled for <strong>August 25th, 2026</strong> at <em>Exclusive Books in Hyde Park</em>.</p><div style="background:#fff8ec;border-left:4px solid #f2a05e;border-radius:0 12px 12px 0;padding:18px 20px;margin:24px 0;color:#593809"><strong style="font-size:15px">Schedule Update:</strong><br/>Due to unforeseen traveling commitments of the author, <strong>Prophetess Bess</strong>, the launch event has been shifted to <strong>late September 2026</strong>, on a date to be announced.</div><p style="line-height:1.6">Please do accept our apologies for any inconvenience caused. The new date of the event will be communicated in the days ahead. For any more information, please contact <a href="tel:0832091905" style="color:#4b256d;font-weight:700;text-decoration:none">083 209 1905</a>.</p><p style="margin:28px 0 0;line-height:1.6">Sincerely,<br/><strong>Book Launch Organising Committee</strong></p>`,
  );
  const textBody = `Dear All,\n\nOnce more we thank you for the graciousness of your presence during our Rise South African Woman 2026 and we look forward to seeing you in 2027.\n\nThis is just an update with regards the "Women of the Rock" book launch that was scheduled for August 25th, 2026 at Exclusive Books in Hyde Park.\n\nDue to unforeseen traveling commitments of the author, Prophetess Bess, the launch event has been shifted to late September 2026, on a date to be announced.\n\nPlease do accept our apologies for any inconvenience caused. The new date of the event will be communicated in the days ahead. For any more information, please contact 083 209 1905.\n\nSincerely,\nBook Launch Organising Committee`;

  if (options.testEmail) {
    if (options.dryRun) {
      return { success: true, mode: "dry-run", testEmail: options.testEmail, subject };
    }
    await sendRiseEmail(env, {
      to: options.testEmail,
      subject: `[TEST] ${subject}`,
      html: htmlBody,
      text: textBody,
    });
    return { success: true, mode: "test-sent", recipient: options.testEmail, subject };
  }

  const response = await supabaseRequest(
    env,
    "rise_registrations?select=email,first_name,last_name",
    {},
    true,
  );
  const rows = (await response.json()) as Array<{ email: string; first_name?: string; last_name?: string }>;
  const uniqueEmails = Array.from(new Set(rows.map((r) => r.email.toLowerCase().trim()))).filter(Boolean);

  if (options.dryRun) {
    return {
      success: true,
      mode: "dry-run",
      totalFound: rows.length,
      uniqueRecipientsCount: uniqueEmails.length,
      recipients: uniqueEmails,
      subject,
    };
  }

  let sent = 0;
  let failed = 0;
  const errors: Array<{ email: string; error: string }> = [];

  for (const email of uniqueEmails) {
    try {
      await sendRiseEmail(env, {
        to: email,
        subject,
        html: htmlBody,
        text: textBody,
      });
      sent++;
    } catch (err) {
      failed++;
      errors.push({ email, error: err instanceof Error ? err.message : String(err) });
    }
  }

  return {
    success: true,
    mode: "live-sent",
    totalFound: rows.length,
    uniqueRecipientsCount: uniqueEmails.length,
    sent,
    failed,
    errors,
  };
}

export async function handleRisePostponementBroadcastRequest(request: Request, env: RiseEnv) {
  const url = new URL(request.url);
  if (url.pathname !== "/api/rise/admin/send-postponement-email" || request.method !== "POST") return;
  const token = envValue(env, "RISE_AUTOMATION_TOKEN");
  if (!token || request.headers.get("authorization") !== `Bearer ${token}`)
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  try {
    const body = (await request.json().catch(() => ({}))) as { testEmail?: string; dryRun?: boolean };
    const result = await sendPostponementBroadcast(env, body);
    return new Response(JSON.stringify(result), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Broadcast failed" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }
}

