import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "../assets/hero.jpg";
import { EVENT, HIGHLIGHTS, PROGRAMME, SPEAKERS } from "../lib/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rise, South African Woman 2026 — GWFSN Women's Day Conference" },
      {
        name: "description",
        content:
          "An elegant Women's Day conference on 8 August 2026 in Rosebank, celebrating confidence, leadership and future-fit skills. In-person R499 or hybrid online.",
      },
      { property: "og:title", content: "Rise, South African Woman 2026" },
      { property: "og:description", content: "Honour the Past · Own the Present · Shape the Future — 8 August 2026, Rosebank." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              GWFSN Women's Day Conference
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] text-ink md:text-7xl">
              Rise,<br />
              <span className="italic text-violet">South African</span><br />
              Woman <span className="text-orange">2026</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              {EVENT.tagline}. An extraordinary afternoon of confidence, leadership and future-fit skills — with respected voices from South Africa, Nigeria and the United Kingdom.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-ink">
              {EVENT.motto}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform hover:scale-[1.02]">
                Reserve your seat — {EVENT.price}
              </Link>
              <Link to="/programme" className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream">
                View programme
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Date</dt><dd className="mt-1 font-semibold text-ink">8 Aug 2026</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Time</dt><dd className="mt-1 font-semibold text-ink">2 – 7 PM</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Where</dt><dd className="mt-1 font-semibold text-ink">Rosebank + Online</dd></div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/20 via-orange/10 to-transparent blur-2xl" />
            <img
              src={heroImg}
              alt="Editorial artwork of women rising toward a golden sun"
              width={1600}
              height={1200}
              className="rounded-[1.5rem] shadow-2xl shadow-violet/20"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange">This Women's Day</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">We rise with purpose.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The story of women is a story of courage, sacrifice, reinvention and possibility. Rise, South African Woman 2026 honours the women who came before us, celebrates the women leading today and prepares a new generation to shape the future with confidence.
          </p>
          <Link to="/register" className="mt-8 inline-block rounded-full bg-violet px-6 py-3 text-sm font-semibold text-primary-foreground">
            Secure my place
          </Link>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet">An afternoon designed to move you forward</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Event highlights</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <article key={h.title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-violet/40 hover:shadow-lg">
              <div className="mb-4 font-serif text-3xl text-orange">0{i + 1}</div>
              <h3 className="font-serif text-xl text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROGRAMME PREVIEW */}
      <section className="bg-ink py-24 text-cream">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange">Programme journey</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Six movements. One rising.</h2>
            </div>
            <Link to="/programme" className="rounded-full border border-cream/30 px-5 py-2.5 text-sm font-semibold text-cream hover:bg-cream hover:text-ink">
              Full programme →
            </Link>
          </div>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMME.map((p, i) => (
              <li key={p.title} className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl text-orange">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-xl text-cream">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SPEAKERS PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet">Meet the voices</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">The line-up</h2>
          </div>
          <Link to="/speakers" className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-cream">
            All speakers →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.slice(0, 4).map((s) => (
            <SpeakerCard key={s.name} name={s.name} role={s.role} accent={s.accent} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet via-violet to-orange p-10 text-cream md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/50 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/80">Seats are limited</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
              Reserve your place at Rise 2026.
            </h2>
            <p className="mt-5 text-cream/85">
              {EVENT.date} · {EVENT.time} · {EVENT.venue}. Your R499 contribution is allocated entirely to food and refreshments at the venue restaurant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink hover:bg-orange hover:text-cream">
                Reserve in-person seat
              </Link>
              <Link to="/register" search={{}} className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream hover:bg-cream/10">
                Join online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SpeakerCard({ name, role, accent }: { name: string; role: string; accent: "violet" | "orange" }) {
  const initials = name.split(" ").filter(Boolean).map((n) => n[0]).slice(0, 2).join("");
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative flex aspect-square items-center justify-center ${accent === "violet" ? "bg-violet/10" : "bg-orange/10"}`}>
        <div className={`absolute right-4 top-4 h-4 w-4 rounded-full ${accent === "violet" ? "bg-orange" : "bg-violet"}`} />
        <div className={`absolute bottom-6 left-6 h-16 w-4 rounded-full ${accent === "violet" ? "bg-violet" : "bg-orange"}`} />
        <span className="font-serif text-6xl text-ink">{initials}</span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-ink">{name}</h3>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{role}</p>
      </div>
    </article>
  );
}
