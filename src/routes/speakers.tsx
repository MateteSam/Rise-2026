import { createFileRoute } from "@tanstack/react-router";
import { SPEAKERS } from "../lib/content";
import { SpeakerFlipCard } from "../components/speaker-flip-card";

export const Route = createFileRoute("/speakers")({
  component: SpeakersPage,
  head: () => ({
    meta: [
      { title: "Speakers — Rise, South African Woman 2026" },
      {
        name: "description",
        content:
          "Meet the speakers of Rise 2026: Rev. Dr. Sam Oye, Yolanda Cuba, Veronica Motloutsi, Joy Ogeh-Hutfield, Bess Rhirando and Dr. Ntombi Mhangwani.",
      },
      { property: "og:title", content: "Speakers — Rise 2026" },
      {
        property: "og:description",
        content:
          "Voices from South Africa, Nigeria and the UK on leadership, confidence, transformation and future skills.",
      },
      { property: "og:url", content: "/speakers" },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
});

function SpeakersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <header className="mb-14 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-orange">
          Meet the voices shaping the conversation
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
          Speakers & contributors
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Distinguished voices whose work spans leadership, coaching, business, transformation,
          purpose, emotional intelligence and future skills — guiding participants through legacy,
          confidence, and readiness for what's next.
        </p>
      </header>

      <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
        Tap a tile to meet her · Hover on desktop
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SPEAKERS.map((s) => (
          <SpeakerFlipCard key={s.name} speaker={s} />
        ))}
      </div>
    </div>
  );
}
