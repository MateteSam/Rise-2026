import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "../lib/content";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Rise, South African Woman 2026" },
      { name: "description", content: "Answers about the event date, venue, hybrid access, the R499 contribution, dress code, group bookings and more." },
      { property: "og:title", content: "FAQ — Rise 2026" },
      { property: "og:description", content: "Everything you need to know about attending Rise, South African Woman 2026." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
});

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <header className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">Frequently asked questions</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">Good to know.</h1>
      </header>

      <div className="divide-y divide-border rounded-3xl border border-border bg-card">
        {FAQ.map((f) => (
          <details key={f.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg text-ink">
              {f.q}
              <span className="ml-2 text-2xl leading-none text-violet transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>

      <section className="mt-12 rounded-3xl border border-border bg-white p-8 shadow-xs">
        <h2 className="font-serif text-2xl text-ink">Need assistance?</h2>
        <p className="mt-2 text-sm text-muted-foreground">Reach the GWFSN team directly:</p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Email</dt>
            <dd className="mt-1 font-semibold text-ink">
              <a href="mailto:rise@gwfsn.org" className="hover:text-primary">
                rise@gwfsn.org
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">Telephone</dt>
            <dd className="mt-1 font-semibold text-ink">
              <a href="tel:+27832091905" className="hover:text-primary">
                +27 83 209 1905
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}