import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENT, PROGRAMME } from "../lib/content";

export const Route = createFileRoute("/programme")({
  component: ProgrammePage,
  head: () => ({
    meta: [
      { title: "Programme — Rise, South African Woman 2026" },
      { name: "description", content: "The full programme journey: Honour, Own, Renew, Lead, Shape the Future, and Rise." },
      { property: "og:title", content: "Programme — Rise 2026" },
      { property: "og:description", content: "Six movements shaping an afternoon of confidence, transformation and future-fit skills." },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
});

function ProgrammePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <header className="mb-14 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet">Programme journey</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">
          An afternoon in <span className="italic text-violet">six movements</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {EVENT.date} · {EVENT.time} · {EVENT.venue}. The full experience is designed to move participants from reflection, through renewal, to readiness for the future.
        </p>
      </header>

      <ol className="relative border-l-2 border-violet/20 pl-8">
        {PROGRAMME.map((p, i) => (
          <li key={p.title} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] flex h-14 w-14 items-center justify-center rounded-full bg-cream ring-2 ring-violet/30 font-serif text-lg text-violet">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="font-serif text-3xl text-ink">{p.title}</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-3xl border border-border bg-secondary/40 p-8 text-center">
        <p className="font-serif text-2xl text-ink">Ready to rise with us?</p>
        <Link to="/register" className="mt-5 inline-block rounded-full bg-violet px-6 py-3 text-sm font-semibold text-primary-foreground">
          Reserve your seat — {EVENT.price}
        </Link>
      </div>
    </div>
  );
}