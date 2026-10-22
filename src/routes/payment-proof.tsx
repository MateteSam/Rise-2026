import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";

export const Route = createFileRoute("/payment-proof")({
  component: PaymentProofPage,
  head: () => ({
    meta: [
      { title: "Upload proof of payment ? Rise 2026" },
      { name: "description", content: "Securely upload your Rise 2026 proof of payment." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

type Status = "idle" | "uploading" | "success" | "error";

function PaymentProofPage() {
  const [paymentReference, setPaymentReference] = useState("");
  const [paymentUploadToken, setPaymentUploadToken] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPaymentReference(params.get("ref") ?? "");
    setPaymentUploadToken(params.get("token") ?? "");
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!paymentReference || !paymentUploadToken) {
      setStatus("error");
      setMessage("This upload link is incomplete. Please use the link from your Rise 2026 email.");
      return;
    }
    if (!file) {
      setStatus("error");
      setMessage("Please choose your proof of payment first.");
      return;
    }

    setStatus("uploading");
    setMessage("");
    const form = new FormData();
    form.append("paymentReference", paymentReference);
    form.append("paymentUploadToken", paymentUploadToken);
    form.append("proof", file);

    try {
      const response = await fetch("/api/rise/payment-proof", { method: "POST", body: form });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "We could not upload that file");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not upload that file");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
        <div className="bg-gradient-to-br from-violet via-violet to-ink px-6 py-10 text-cream sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange">Rise 2026</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Send your proof with ease.</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80">
            Upload a screenshot, photo or PDF of your EFT confirmation. We?ll match it to your
            registration and take it from there.
          </p>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {status === "success" ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-900">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700">Received</p>
              <h2 className="mt-2 font-serif text-3xl">You?re all set for now.</h2>
              <p className="mt-3 leading-relaxed">
                Your proof of payment has been received. We?ll verify it and email you as soon as
                your Rise 2026 registration is confirmed.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="rounded-2xl border border-violet/15 bg-violet/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet">Payment reference</p>
                <p className="mt-2 break-all font-mono text-sm font-semibold text-ink">
                  {paymentReference || "Loading your secure reference?"}
                </p>
              </div>

              <label className="mt-7 block cursor-pointer rounded-2xl border-2 border-dashed border-violet/30 bg-background p-7 text-center transition hover:border-violet hover:bg-violet/5">
                <input
                  type="file"
                  name="proof"
                  accept="application/pdf,image/jpeg,image/png"
                  capture="environment"
                  className="sr-only"
                  onChange={(event) => {
                    const nextFile = event.target.files?.[0] ?? null;
                    setFile(nextFile);
                    setStatus("idle");
                    setMessage("");
                  }}
                />
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange/15 text-2xl text-orange">?</span>
                <span className="mt-4 block font-semibold text-ink">
                  {file ? file.name : "Choose a screenshot, photo or PDF"}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">JPG, PNG or PDF ? maximum 10 MB</span>
              </label>

              {status === "error" && (
                <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "uploading" || !paymentReference || !paymentUploadToken}
                className="mt-7 w-full rounded-full bg-orange px-6 py-4 text-sm font-semibold text-ink transition hover:bg-cream disabled:cursor-wait disabled:opacity-60"
              >
                {status === "uploading" ? "Uploading securely?" : "Send proof of payment"}
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                Your file is kept private and used only to verify your Rise 2026 payment. Need help?
                Reply to your registration email.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
