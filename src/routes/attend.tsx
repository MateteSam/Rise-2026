import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENT } from "../lib/content";

export const Route = createFileRoute("/attend")({
  component: AttendPage,
  head: () => ({
    meta: [
      { title: "Attend — Rise, South African Woman 2026" },
      { name: "description", content: "Attend in person in Rosebank for R499 or join online. Your contribution covers food and refreshments at the venue." },
      { property: "og:title", content: "Attend Rise 2026" },
      { property: "og:description", content: "In-person or hybrid online — reserve your place at the Royal Majestic Hotel, Rosebank." },
      { property: "og:url", content: "/attend" },
    ],
    links: [{ rel: "canonical", href: "/attend" }],
  }),
});

function AttendPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <header className="mb-14 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">Hybrid participation</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-ink md:text-6xl">
          Join us from <span className="italic text-violet">wherever you are</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Rise, South African Woman 2026 is a hybrid gathering. Guests attending in Johannesburg experience the complete in-person programme, dining and networking. Registered online participants follow the main sessions and connect with a wider community.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-3xl bg-ink p-10 text-cream">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/40 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-widest text-orange">In-person</p>
          <h2 className="mt-2 font-serif text-4xl">Your in-person experience</h2>
          <p className="mt-4 font-serif text-5xl text-orange">R499<span className="text-lg text-cream/60"> / participant</span></p>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            Your R499 attendance contribution is allocated entirely to your food and refreshments at the venue restaurant. The venue has generously been made available without a venue-hire charge, with the understanding that conference guests will dine through its restaurant.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-cream/85">
            {["Access to the complete conference programme","Food and refreshments","Meaningful networking","Interactive confidence and reflection activities","Access to selected post-event resources"].map((b) => (
              <li key={b} className="flex gap-2"><span className="text-orange">◆</span>{b}</li>
            ))}
          </ul>
          <Link to="/register" className="mt-8 inline-block rounded-full bg-orange px-6 py-3 text-sm font-semibold text-cream">
            Reserve my in-person seat
          </Link>
        </article>

        <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet">Online</p>
          <h2 className="mt-2 font-serif text-4xl text-ink">Join online</h2>
          <p className="mt-4 font-serif text-5xl text-violet">Free registration</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Registered online participants follow the main sessions, engage through the event chat and connect with a wider community joining from different locations. Online access instructions will be issued to registered participants before the event.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink">
            {["Live-streamed keynotes and panels","Event chat participation","Access to selected post-event resources","Community connection across locations"].map((b) => (
              <li key={b} className="flex gap-2"><span className="text-violet">◆</span>{b}</li>
            ))}
          </ul>
          <Link to="/register" className="mt-8 inline-block rounded-full bg-violet px-6 py-3 text-sm font-semibold text-primary-foreground">
            Register for online access
          </Link>
        </article>
      </div>

      <section className="mt-14 rounded-3xl border-2 border-orange/40 bg-orange/5 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">Seats are limited</p>
        <h2 className="mt-3 font-serif text-4xl text-ink">This is a curated experience.</h2>
        <p className="mt-4 text-muted-foreground">
          Attendance is subject to the venue's capacity. Reserve your place early to avoid disappointment.
        </p>
        <p className="mt-6 font-serif text-lg text-ink">{EVENT.date} · {EVENT.venue}</p>
        <p className="text-sm text-muted-foreground">Programme begins at 2:00 PM</p>
        <Link to="/register" className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream">
          Secure my seat for R499
        </Link>
      </section>
    </div>
  );
}