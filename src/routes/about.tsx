import { createFileRoute, Link } from "@tanstack/react-router";
import gwfsnIcon from "../assets/gwfsn-icon-glow.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About GWFSN — Global Women's Future Skills Network" },
      {
        name: "description",
        content:
          "GWFSN is an African-rooted, internationally relevant platform preparing women and girls for the changing world of work.",
      },
      { property: "og:title", content: "About the Global Women's Future Skills Network" },
      {
        property: "og:description",
        content:
          "Substance over symbolism, preparation over performance, measurable progress over generic empowerment language.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const pillars = [
  { word: "Learn", line: "Build the capability to stay relevant." },
  { word: "Lead", line: "Turn confidence into visible influence." },
  { word: "Earn", line: "Create pathways into work and enterprise." },
  { word: "Flourish", line: "Grow with purpose, wellbeing and agency." },
] as const;

function AboutPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      <header className="bg-[#101010] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.25fr_0.75fr]">
          <div className="flex min-h-[520px] flex-col justify-between px-5 py-14 sm:px-8 md:min-h-[640px] md:py-20 lg:px-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
              About GWFSN / Built for what comes next
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Preparing women for the{" "}
              <span className="text-[#9da7ff]">changing world of work.</span>
            </h1>
          </div>
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-t-2 border-white bg-[#293dff] p-10 lg:min-h-full lg:border-l-2 lg:border-t-0">
            <div className="flex aspect-square w-full max-w-[330px] items-center justify-center rounded-full bg-[#17151b] shadow-[0_0_70px_rgba(255,255,255,0.12)] ring-1 ring-white/20">
              <img src={gwfsnIcon} alt="GWFSN icon" className="h-[64%] w-[72%] object-contain" />
            </div>
            <p className="absolute bottom-7 left-7 text-[9px] font-bold uppercase tracking-[0.26em] text-white/55">
              Learn · Lead · Earn · Flourish
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
            Why we exist
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.045em] sm:text-5xl">
            African-rooted.
            <br />
            Internationally relevant.
          </h2>
        </div>
        <div className="space-y-7 text-base leading-relaxed text-[#545454] sm:text-lg">
          <p>
            The <strong className="text-[#17161c]">Global Women's Future Skills Network</strong> is
            dedicated to preparing women and girls for a changing world of work.
          </p>
          <p>
            GWFSN equips women with future-ready skills, digital confidence, workforce readiness,
            leadership capability and pathways into employment, enterprise and influence.
          </p>
          <p>
            We work with women, employers, educational institutions, development partners and allies
            to strengthen individual capability and the systems that influence women's inclusion and
            progression.
          </p>
        </div>
      </section>

      <section className="bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7836]">
              What we stand for
            </p>
            <span className="mt-8 block text-7xl font-light tracking-[-0.08em] text-[#293dff] sm:text-9xl">
              “
            </span>
          </div>
          <blockquote>
            <p className="text-4xl font-semibold uppercase leading-[0.94] tracking-[-0.045em] sm:text-6xl">
              Substance over symbolism. Preparation over performance.{" "}
              <span className="text-[#9da7ff]">
                Measurable progress over generic empowerment language.
              </span>
            </p>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
            The promise in four words
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-6xl">
            Learn. Lead. Earn. Flourish.
          </h2>
        </div>
        <div className="grid border-2 border-[#101010] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.word}
              className={`group flex min-h-64 flex-col justify-between border-b-2 border-[#101010] p-6 transition-transform duration-300 hover:-translate-y-2 sm:min-h-80 sm:border-r-2 ${index === 0 ? "bg-[#293dff] text-white" : index === 1 ? "bg-white" : index === 2 ? "bg-[#ff7836] text-black" : "bg-[#101010] text-white"} ${index === 1 ? "sm:border-r-0 lg:border-r-2" : ""} ${index >= 2 ? "sm:border-b-0" : "lg:border-b-0"} ${index === 3 ? "border-b-0 sm:border-r-0" : ""}`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.28em] ${index === 0 || index === 3 ? "text-white/55" : "text-black/45"}`}
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="text-4xl font-semibold uppercase leading-none tracking-[-0.045em]">
                  {pillar.word}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${index === 0 || index === 3 ? "text-white/65" : "text-black/60"}`}
                >
                  {pillar.line}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#293dff] px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              See the network in action
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-5xl">
              Rise with us in 2026.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="bg-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1"
            >
              Attend Rise 2026
            </Link>
            <Link
              to="/speakers"
              className="border-2 border-white px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Meet the speakers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
