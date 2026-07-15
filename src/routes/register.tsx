import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EVENT, BANKING } from "../lib/content";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Register — Rise, South African Woman 2026" },
      { name: "description", content: "Register for Rise, South African Woman 2026 — in person in Rosebank or online." },
      { property: "og:title", content: "Register for Rise 2026" },
      { property: "og:description", content: "Reserve your place at the GWFSN Women's Day conference on 8 August 2026." },
      { property: "og:url", content: "/register" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
});

type Format = "in-person" | "online";

function RegisterPage() {
  const [format, setFormat] = useState<Format>("in-person");
  const [submitted, setSubmitted] = useState<null | { firstName: string; format: Format }>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = String(data.get("firstName") || "Friend");
    setSubmitted({ firstName, format });
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">Registration confirmed</p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Thank you, {submitted.firstName}.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We look forward to welcoming you to an elegant afternoon of inspiration, reflection, connection and practical growth.
        </p>
        <dl className="mx-auto mt-10 grid max-w-md gap-4 text-left">
          {[
            ["Date", EVENT.date],
            ["Time", EVENT.time],
            ["Venue", EVENT.venue],
            ["Attendance", submitted.format === "in-person" ? "In Person" : "Online"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between rounded-xl border border-border bg-card px-5 py-3">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
              <dd className="text-sm font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        {submitted.format === "in-person" && (
          <div className="mt-10">
            <BankingPanel firstName={submitted.firstName} />
          </div>
        )}
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
          {EVENT.date} · {EVENT.time} · {EVENT.venue}. In-person contribution is R499 and is allocated entirely to your food and refreshments at the venue restaurant.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
          In-person guests are encouraged to arrive from <strong className="text-ink">1:30 PM</strong> to allow sufficient time for registration and seating. Online access instructions will be issued before the event.
        </div>
      </aside>

      <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
        <fieldset className="mb-6">
          <legend className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Attendance format</legend>
          <div className="grid grid-cols-2 gap-3">
            {(["in-person", "online"] as const).map((f) => (
              <label
                key={f}
                className={`cursor-pointer rounded-xl border p-4 text-center transition-all ${
                  format === f ? "border-violet bg-violet/5 text-ink" : "border-border text-muted-foreground hover:border-ink/30"
                }`}
              >
                <input type="radio" name="format" value={f} className="sr-only" checked={format === f} onChange={() => setFormat(f)} />
                <span className="block font-serif text-lg text-ink">{f === "in-person" ? "In Person" : "Online"}</span>
                <span className="text-xs">{f === "in-person" ? "R499 · Rosebank" : "Free · Hybrid stream"}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="firstName" label="First name" required />
          <Field name="lastName" label="Last name" required />
          <Field name="email" label="Email" type="email" required className="sm:col-span-2" />
          <Field name="phone" label="Phone / WhatsApp" type="tel" required />
          <Field name="organisation" label="Organisation (optional)" />
        </div>

        <label className="mt-4 block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Anything we should know?</span>
          <textarea name="notes" rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none focus:border-violet" />
        </label>

        <button type="submit" className="mt-6 w-full rounded-full bg-violet px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-ink">
          {format === "in-person" ? `Reserve my seat — ${EVENT.price}` : "Register for online access"}
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

function BankingPanel({ firstName }: { firstName?: string } = {}) {
  const reference = firstName ? `RISE2026-${firstName.replace(/\s+/g, "")}` : BANKING.reference;
  const rows: [string, string][] = [
    ["Bank", BANKING.bankName],
    ["Account name", BANKING.accountName],
    ["Account type", BANKING.accountType],
    ["Account number", BANKING.accountNumber],
    ["Branch code", BANKING.branchCode],
    ["SWIFT / BIC", BANKING.swift],
    ["Reference", reference],
    ["Amount", `${EVENT.price} (in-person)`],
  ];
  return (
    <section className="overflow-hidden rounded-3xl border border-violet/20 bg-gradient-to-br from-violet/95 via-violet to-ink text-cream shadow-xl">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-cream/15 px-7 py-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange">Payment · EFT / Bank Transfer</p>
          <h2 className="mt-1 font-serif text-2xl">Banking details</h2>
        </div>
        <span className="rounded-full bg-cream/10 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/85">
          MoMo coming soon
        </span>
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
        Please use the reference above so we can match your payment to your seat. Email proof of payment to{" "}
        <a href={`mailto:${BANKING.email}`} className="font-semibold text-orange underline-offset-2 hover:underline">
          {BANKING.email}
        </a>{" "}
        and your confirmation will follow within 24 hours.
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
      className="group flex w-full items-baseline justify-between gap-4 px-7 py-3 text-left transition-colors hover:bg-cream/5"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-cream/60">{k}</span>
      <span className={`font-mono text-sm ${highlight ? "text-orange" : "text-cream"} group-hover:underline`}>
        {v}
      </span>
    </button>
  );
}

function Field({
  name, label, type = "text", required, className,
}: { name: string; label: string; type?: string; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none focus:border-violet"
      />
    </label>
  );
}