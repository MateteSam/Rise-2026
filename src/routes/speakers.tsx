import { createFileRoute } from "@tanstack/react-router";
import { SPEAKERS } from "../lib/content";

export const Route = createFileRoute("/speakers")({
  component: SpeakersPage,
  head: () => ({
    meta: [
      { title: "Speakers — Rise, South African Woman 2026" },
      { name: "description", content: "Meet the speakers of Rise 2026: Rev. Dr. Sam Oye, Yolanda Cuba, Veronica Motloutsi, Joy Ogeh-Hutfield, Bess Rhirando, Dr. Ntombi Mhangwani and Kagiso Malepe." },
      { property: "og:title", content: "Speakers — Rise 2026" },
      { property: "og:description", content: "Voices from South Africa, Nigeria and the UK on leadership, confidence, transformation and future skills." },
      { property: "og:url", content: "/speakers" },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
});

function SpeakersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <header className="mb-14 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">Meet the voices shaping the conversation</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">Speakers & contributors</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Distinguished voices whose work spans leadership, coaching, business, transformation, purpose, emotional intelligence and future skills — guiding participants through legacy, confidence, and readiness for what's next.
        </p>
      </header>

      <div className="space-y-6">
        {SPEAKERS.map((s) => {
          const initials = s.name.split(" ").filter(Boolean).map((n) => n[0]).slice(0, 2).join("");
          const isViolet = s.accent === "violet";
          return (
            <article key={s.name} className="grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[220px_1fr] md:p-8">
              <div className={`relative flex aspect-square items-center justify-center rounded-2xl ${isViolet ? "bg-violet/10" : "bg-orange/10"}`}>
                <div className={`absolute right-5 top-5 h-5 w-5 rounded-full ${isViolet ? "bg-orange" : "bg-violet"}`} />
                <div className={`absolute bottom-6 left-6 h-20 w-5 rounded-full ${isViolet ? "bg-violet" : "bg-orange"}`} />
                <span className="font-serif text-7xl text-ink">{initials}</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-violet">{s.role}{s.affiliation ? ` · ${s.affiliation}` : ""}</p>
                <h2 className="mt-2 font-serif text-3xl text-ink">{s.name}</h2>
                <p className="mt-1 font-serif text-lg italic text-orange">{s.session}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.themes.map((t) => (
                    <li key={t} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}