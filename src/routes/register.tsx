import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { EVENT, BANKING, REGISTRATION_EMAIL } from "../lib/content";
import { registerRiseAttendeeFn } from "../lib/rise-registration.functions";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Register - Rise, South African Woman 2026" },
      {
        name: "description",
        content:
          "Register for Rise, South African Woman 2026 in person at Royal Majestic Hotel Rosebank.",
      },
      { property: "og:title", content: "Register for Rise 2026" },
      {
        property: "og:description",
        content: "Reserve your place at the GWFSN Women's Day conference on 8 August 2026.",
      },
      { property: "og:url", content: "/register" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
});

type Format = "in-person";
type SubmittedRegistration = {
  firstName: string;
  format: Format;
  paymentReference: string;
  paymentUploadToken: string;
  emailStatus: "sent" | "pending";
};

function RegisterPage() {
  const [format, setFormat] = useState<Format>("in-person");
  const [submitted, setSubmitted] = useState<SubmittedRegistration | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") || "Friend").trim();
    const lastName = String(data.get("lastName") || "").trim();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const result = await registerRiseAttendeeFn({
        data: {
          firstName,
          lastName,
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          organisation: String(data.get("organisation") || "").trim() || undefined,
          attendanceFormat: "in-person",
          notes: String(data.get("notes") || "").trim() || undefined,
        },
      });
      setSubmitted({
        firstName,
        format,
        paymentReference: result.paymentReference,
        paymentUploadToken: result.paymentUploadToken,
        emailStatus: result.emailStatus,
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "We could not complete your registration just now. Please try again, or contact registrations@gwfsn.org.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">
          Registration received
        </p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Thank you, {submitted.firstName}.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Your place has been reserved. We have sent your payment instructions and unique reference
          to your inbox.
        </p>
        {submitted.emailStatus === "pending" && (
          <p className="mx-auto mt-5 max-w-md rounded-xl border border-orange/30 bg-orange/10 px-4 py-3 text-sm text-ink">
            Your registration is saved, but email delivery is still pending. Please contact{" "}
            {REGISTRATION_EMAIL} if you do not receive it shortly.
          </p>
        )}
        <dl className="mx-auto mt-10 grid max-w-md gap-4 text-left">
          {[
            ["Date", EVENT.date],
            ["Time", EVENT.time],
            ["Venue", EVENT.venue],
            ["Attendance", "In Person"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between rounded-xl border border-border bg-card px-5 py-3"
            >
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
              <dd className="text-sm font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-violet/20 bg-violet/5 p-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet">
            Payment reference
          </p>
          <p className="mt-2 break-all font-mono text-lg font-semibold text-ink">
            {submitted.paymentReference}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Use this exact reference when making your EFT payment.
          </p>
        </div>
        <div className="mt-10">
          <BankingPanel paymentReference={submitted.paymentReference} />
        </div>
        <a
          href={`/payment-proof?ref=${encodeURIComponent(submitted.paymentReference)}&token=${encodeURIComponent(submitted.paymentUploadToken)}`}
          className="mx-auto mt-6 block max-w-md rounded-full bg-orange px-6 py-4 text-sm font-semibold text-ink transition hover:bg-cream"
        >
          Upload proof of payment
        </a>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          PDF, JPG or PNG · private upload · up to 10 MB
        </p>
        <p className="mt-10 font-serif text-xl italic text-violet">
          Come ready to honour the past, own the present and shape the future.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr]">
      <aside>
        <p className="text-xs font-semibold uppercase tracking-widest text-violet">Registration</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">
          Reserve your <span className="italic text-orange">place</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {EVENT.date} · {EVENT.time} · {EVENT.venue}. In-person contribution is R499 and is
          allocated entirely to your food and refreshments at the venue restaurant.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
          In-person guests are encouraged to arrive from{" "}
          <strong className="text-ink">1:30 PM</strong> to allow sufficient time for registration
          and seating. This is an in-person event at Royal Majestic Hotel Rosebank.
        </div>
      </aside>

      <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <fieldset className="mb-6">
          <legend className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Attendance format
          </legend>
          <label
            className={`block cursor-pointer rounded-xl border p-4 text-center transition-all ${format === "in-person" ? "border-violet bg-violet/5 text-ink" : "border-border text-muted-foreground hover:border-ink/30"}`}
          >
            <input
              type="radio"
              name="format"
              value="in-person"
              className="sr-only"
              checked={format === "in-person"}
              onChange={() => setFormat("in-person")}
            />
            <span className="block font-serif text-lg text-ink">In Person</span>
            <span className="text-xs">R499 · Royal Majestic Hotel Rosebank</span>
          </label>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="firstName" label="First name" required />
          <Field name="lastName" label="Last name" required />
          <Field name="email" label="Email" type="email" required className="sm:col-span-2" />
          <Field name="phone" label="Phone / WhatsApp" type="tel" required />
          <Field name="organisation" label="Organisation (optional)" />
        </div>
        <label className="mt-4 block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Anything we should know?
          </span>
          <textarea
            name="notes"
            rows={3}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none focus:border-violet"
          />
        </label>
        {errorMessage && (
          <p
            role="alert"
            className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-full bg-violet px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-ink disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? "Securing your place…" : `Reserve my seat — ${EVENT.price}`}
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Photography and video recording may take place during the event.
        </p>
      </form>

      <div className="lg:col-span-2">
        <BankingPanel />
      </div>
    </div>
  );
}

function BankingPanel({ paymentReference }: { paymentReference?: string } = {}) {
  const reference = paymentReference ?? BANKING.reference;
  const rows: [string, string][] = [
    ["Bank", BANKING.bankName],
    ["Account name", BANKING.accountName],
    ["Account number", BANKING.accountNumber],
    ["Reference", reference],
    ["Amount", `${EVENT.price} (in-person)`],
  ];
  return (
    <section className="overflow-hidden rounded-3xl border border-violet/20 bg-gradient-to-br from-violet/95 via-violet to-ink text-cream shadow-xl">
      <div className="border-b border-cream/15 px-5 py-5 sm:px-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange">
          Payment · EFT / Bank Transfer
        </p>
        <h2 className="mt-1 font-serif text-2xl">Banking details</h2>
      </div>
      <dl className="grid grid-cols-1 divide-y divide-cream/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="divide-y divide-cream/10">
          {rows.slice(0, 4).map(([k, v]) => (
            <BankRow key={k} k={k} v={v} />
          ))}
        </div>
        <div className="divide-y divide-cream/10">
          {rows.slice(4).map(([k, v]) => (
            <BankRow key={k} k={k} v={v} highlight={k === "Reference" || k === "Amount"} />
          ))}
        </div>
      </dl>
      <p className="border-t border-cream/15 px-7 py-4 text-xs leading-relaxed text-cream/80">
        Please use the reference above so we can match your payment to your seat. Email proof of
        payment to{" "}
        <a
          href={`mailto:${BANKING.email}`}
          className="font-semibold text-orange underline-offset-2 hover:underline"
        >
          {BANKING.email}
        </a>{" "}
        and your confirmation will follow once payment is verified.
      </p>
    </section>
  );
}

function BankRow({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard?.writeText(v)}
      title="Click to copy"
      className="group flex w-full flex-col items-start gap-1 px-5 py-3 text-left transition-colors hover:bg-cream/5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-7"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-cream/60">{k}</span>
      <span
        className={`font-mono text-sm ${highlight ? "text-orange" : "text-cream"} group-hover:underline`}
      >
        {v}
      </span>
    </button>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  className,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none focus:border-violet"
      />
    </label>
  );
}
