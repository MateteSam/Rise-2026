import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENT, PROGRAMME } from "../lib/content";

export const Route = createFileRoute("/programme")({
  component: ProgrammePage,
  head: () => ({
    meta: [
      { title: "Programme — Rise, South African Woman 2026" },
      {
        name: "description",
        content:
          "The full programme journey: Honour, Own, Renew, Lead, Shape the Future, and Rise.",
      },
      { property: "og:title", content: "Programme — Rise 2026" },
      {
        property: "og:description",
        content:
          "Six movements shaping an afternoon of confidence, transformation and future-fit skills.",
      },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
});

function ProgrammePage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      <header className="bg-[#101010] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.35fr_0.65fr]">
          <div className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
              Programme journey / 2026
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              An afternoon in <span className="text-[#9da7ff]">six movements.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              A deliberate journey from reflection, through renewal, to readiness for the future.
            </p>
          </div>
          <div className="grid min-h-64 grid-cols-2 border-t-2 border-white bg-[#293dff] text-white lg:min-h-full lg:grid-cols-1 lg:border-l-2 lg:border-t-0">
            <div className="flex flex-col justify-between border-r-2 border-white p-6 lg:border-b-2 lg:border-r-0 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                Date
              </span>
              <p className="mt-12 text-2xl font-semibold uppercase leading-none tracking-[-0.04em]">
                08 August
                <br />
                2026
              </p>
            </div>
            <div className="flex flex-col justify-between p-6 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                Time / Place
              </span>
              <p className="mt-12 text-sm font-semibold uppercase leading-relaxed">
                2:00–7:00 PM
                <br />
                Rosebank, Johannesburg
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-4 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
              The journey
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] md:text-6xl">
              Six movements.
              <br />
              One rising.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#5b5b5b]">
            {EVENT.date} · {EVENT.time} · {EVENT.venue}
          </p>
        </div>

        <ol>
          {PROGRAMME.map((item, index) => (
            <li
              key={item.title}
              className="group grid border-b border-black/15 transition-colors duration-300 hover:bg-[#101010] hover:text-white sm:grid-cols-[8rem_1fr]"
            >
              <div className="flex items-center justify-between border-b border-black/15 bg-[#293dff] px-5 py-5 text-white sm:min-h-44 sm:flex-col sm:items-start sm:justify-between sm:border-b-0 sm:border-r sm:border-white/20 sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
                  Movement
                </span>
                <span className="text-4xl font-light tracking-[-0.06em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col justify-center px-5 py-7 sm:min-h-44 sm:px-10">
                <h3 className="text-3xl font-semibold uppercase leading-none tracking-[-0.04em] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#666] transition-colors group-hover:text-white/65 sm:text-base">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#293dff] px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/65">
              Your place in the room
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-5xl">
              Ready to rise with us?
            </h2>
          </div>
          <Link
            to="/register"
            className="inline-flex bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1"
          >
            Reserve your seat — {EVENT.price}
          </Link>
        </div>
      </section>
    </div>
  );
}
