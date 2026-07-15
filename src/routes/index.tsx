import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import venueAsset from "../assets/venue-hero.jpg.asset.json";
import { EVENT, HIGHLIGHTS, PROGRAMME, SPEAKERS } from "../lib/content";
import { SpeakerFlipCard } from "../components/speaker-flip-card";

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
      {/* HERO — full-bleed venue with overlay text */}
      <section className="relative isolate overflow-hidden">
        <img
          src={venueAsset.url}
          alt="The Royal Majestic Hotel ballroom, Rosebank"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet/30 via-transparent to-ink/70 mix-blend-multiply" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            GWFSN · Women's Day 2026
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] text-cream md:text-7xl lg:text-[5.5rem]">
            RISE,<br />
            SOUTH AFRICAN<br />
            WOMAN <span className="text-orange">2026</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base uppercase tracking-[0.2em] text-cream/90 md:text-lg">
            A premium Women's Day experience at the five-star<br />
            Royal Majestic Hotel, Rosebank
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/register" className="rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-violet/40 transition-transform hover:scale-[1.03]">
              Register Now
            </Link>
            <Link to="/programme" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream ring-1 ring-cream/30 transition-colors hover:bg-cream hover:text-ink">
              Learn More
            </Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream/20 pt-6 text-sm text-cream">
            <div><dt className="text-[10px] uppercase tracking-widest text-cream/60">Date</dt><dd className="mt-1 font-semibold">8 Aug 2026</dd></div>
            <div><dt className="text-[10px] uppercase tracking-widest text-cream/60">Time</dt><dd className="mt-1 font-semibold">2 – 7 PM</dd></div>
            <div><dt className="text-[10px] uppercase tracking-widest text-cream/60">Where</dt><dd className="mt-1 font-semibold">Rosebank + Online</dd></div>
          </dl>
        </div>
      </section>

      {/* Distinguished symposium band */}
      <section className="bg-violet/5 border-y border-violet/15">
        <div className="mx-auto max-w-5xl px-5 py-8 text-center">
          <p className="font-serif text-lg leading-relaxed text-violet md:text-xl">
            A distinguished Women's Day symposium bringing together powerful voices in leadership, confidence, personal transformation and future-fit skills.
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink/70">
            {EVENT.date} · {EVENT.motto}
          </p>
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
          <p className="mt-3 text-sm text-muted-foreground">Hover each tile to reveal what awaits.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <HighlightFlip key={h.title} index={i} title={h.title} body={h.body} />
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
            <SpeakerFlipCard key={s.name} speaker={s} />
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

function HighlightFlip({ index, title, body }: { index: number; title: string; body: string }) {
  const accent = index % 2 === 0 ? "violet" : "orange";
  return (
    <div className="group perspective-1000 h-56 w-full [&:hover_.flip-inner]:rotate-y-180 [&:focus-within_.flip-inner]:rotate-y-180">
      <div tabIndex={0} className="flip-inner relative h-full w-full preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] outline-none">
        <article className="absolute inset-0 backface-hidden rounded-2xl border border-border bg-card p-7 shadow-sm">
          <div className={`mb-4 font-serif text-4xl ${accent === "violet" ? "text-violet" : "text-orange"}`}>
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-serif text-xl leading-tight text-ink">{title}</h3>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground">Hover to explore →</p>
        </article>
        <article className={`absolute inset-0 rotate-y-180 backface-hidden rounded-2xl p-7 text-cream shadow-lg ${accent === "violet" ? "bg-violet" : "bg-orange"}`}>
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/80">Highlight {String(index + 1).padStart(2, "0")}</div>
          <h3 className="font-serif text-lg leading-tight">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/95">{body}</p>
        </article>
      </div>
    </div>
  );
}
