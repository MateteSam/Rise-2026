import { createFileRoute, Link } from "@tanstack/react-router";
import gwfsnIcon from "../assets/gwfsn-icon-glow.png";
import { GWFSN_INFO } from "../lib/content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About GWFSN — Global Women's Future Skills Network" },
      {
        name: "description",
        content:
          "The Global Women's Future Skills Network is dedicated to women and girls navigating a changing world of work. Rooted in Africa and open to global collaboration.",
      },
      { property: "og:title", content: "About the Global Women's Future Skills Network" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const pillars = [
  { word: "Learn", line: "Capability to navigate technological and workplace transformation." },
  { word: "Lead", line: "Opening conversations around influence, responsibility and progression." },
  { word: "Earn", line: "Connecting useful knowledge with pathways into work and enterprise." },
  { word: "Flourish", line: "The conditions for an empowered, resilient and fulfilling life." },
] as const;

const values = [
  {
    title: "Integrity",
    desc: "We communicate honestly and distinguish what is established from what is still being developed.",
    tag: "01",
  },
  {
    title: "Inclusion",
    desc: "We respect different experiences and seek to widen participation.",
    tag: "02",
  },
  {
    title: "Learning",
    desc: "We value curiosity, adaptability and continuous growth.",
    tag: "03",
  },
  {
    title: "Agency",
    desc: "We recognise women as decision-makers in their own lives.",
    tag: "04",
  },
  {
    title: "Collaboration",
    desc: "We build relationships around clear purpose and shared responsibility.",
    tag: "05",
  },
  {
    title: "Accountability",
    desc: "We ask what our activities achieve and how they can improve.",
    tag: "06",
  },
] as const;

function AboutPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Original Signature Split Header */}
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/our-work"
                className="bg-[#293dff] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1"
              >
                Explore our work
              </Link>
              <Link
                to="/magazine"
                className="border-2 border-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
              >
                Read RISE AFRICAN WOMAN
              </Link>
            </div>
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

      {/* Who We Are (Original Editorial Layout) */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
            Who we are
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.045em] sm:text-5xl">
            African-rooted.
            <br />
            Internationally relevant.
          </h2>
        </div>
        <div className="space-y-7 text-base leading-relaxed text-[#545454] sm:text-lg">
          <p>
            The <strong className="text-[#17161c]">Global Women’s Future Skills Network</strong> is
            dedicated to women and girls navigating a changing world of work. Rooted in Africa and
            open to global collaboration, GWFSN places learning, leadership and economic
            participation at the centre of its purpose.
          </p>
          <p>
            Our ambition is to help women make informed choices about their futures while
            contributing to the wider conversations that shape opportunity. We recognise that
            skills matter, and that access, working conditions, time, safety and representation also
            influence what women can achieve.
          </p>
          <p>
            Through publishing, evidence-led discussion and convening, we create space for women’s
            experiences and ideas. As our activities develop, we aim to connect these conversations
            with practical learning and meaningful partnerships.
          </p>
        </div>
      </section>

      {/* Mission & Vision Split Grid */}
      <section className="border-y-2 border-[#101010] bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#101010]">
          <div className="p-8 sm:p-12 md:p-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
              Our mission
            </span>
            <p className="mt-6 text-2xl font-semibold uppercase leading-tight tracking-[-0.03em] sm:text-3xl text-[#101010]">
              To advance women’s future skills, leadership and economic participation by connecting
              knowledge, evidence, dialogue and practical opportunities for growth.
            </p>
          </div>
          <div className="p-8 sm:p-12 md:p-16 bg-[#f8f8f8]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7836]">
              Our vision
            </span>
            <p className="mt-6 text-2xl font-semibold uppercase leading-tight tracking-[-0.03em] sm:text-3xl text-[#101010]">
              A future in which women and girls have the capability, agency and opportunity to shape
              their lives and contribute fully to their communities and economies.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Principles (Original Graphic Block Colors: Cobalt, White, Orange, Ink) */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
            Our guiding principles
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-6xl">
            Learn. Lead. Earn. Flourish.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-[#545454]">
            These commitments connect capability with influence, economic participation and the
            conditions for a fulfilling life.
          </p>
        </div>
        <div className="grid border-2 border-[#101010] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.word}
              className={`group flex min-h-64 flex-col justify-between border-b-2 border-[#101010] p-6 transition-transform duration-300 hover:-translate-y-2 sm:min-h-80 sm:border-r-2 ${
                index === 0
                  ? "bg-[#293dff] text-white"
                  : index === 1
                    ? "bg-white text-black"
                    : index === 2
                      ? "bg-[#ff7836] text-black"
                      : "bg-[#101010] text-white"
              } ${index === 1 ? "sm:border-r-0 lg:border-r-2" : ""} ${
                index >= 2 ? "sm:border-b-0" : "lg:border-b-0"
              } ${index === 3 ? "border-b-0 sm:border-r-0" : ""}`}
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.28em] ${
                  index === 0 || index === 3 ? "text-white/55" : "text-black/45"
                }`}
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="text-4xl font-semibold uppercase leading-none tracking-[-0.045em]">
                  {pillar.word}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    index === 0 || index === 3 ? "text-white/70" : "text-black/65"
                  }`}
                >
                  {pillar.line}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values Grid (Razor-sharp Brutalist 2px border grid) */}
      <section className="bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7836]">
              Our values
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Principles guiding every decision.
            </h2>
          </div>

          <div className="mt-12 grid border-2 border-white/20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val) => (
              <div
                key={val.title}
                className="border-b-2 border-r-2 border-white/20 p-8 transition-colors hover:border-[#293dff] hover:bg-white/5"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9da7ff]">
                  Value / {val.tag}
                </span>
                <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.02em]">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Editorial Voice (Split Tile Section) */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Board */}
          <div className="border-2 border-[#101010] bg-white p-8 sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
              GWFSN Management Board
            </p>
            <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.03em]">Leadership</h3>
            <ul className="mt-8 divide-y-2 divide-[#101010]">
              {GWFSN_INFO.board.map((member) => (
                <li key={member.name} className="flex items-center justify-between py-4">
                  <span className="text-lg font-semibold tracking-[-0.02em]">{member.name}</span>
                  <span className="border border-[#101010] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#293dff]">
                    {member.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Voice */}
          <div className="border-2 border-[#101010] bg-white p-8 sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7836]">
              Our Editorial Voice
            </p>
            <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.03em]">
              RISE AFRICAN WOMAN
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#545454]">
              RISE AFRICAN WOMAN magazine carries the organisation’s conversations into a quarterly
              publication focused on Future Skills, Leadership and Opportunity.
            </p>
            <ul className="mt-6 divide-y-2 divide-[#101010]">
              {GWFSN_INFO.editorial.map((leader) => (
                <li key={leader.name} className="flex items-center justify-between py-4">
                  <span className="text-lg font-semibold tracking-[-0.02em]">{leader.name}</span>
                  <span className="border border-[#101010] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff7836]">
                    {leader.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Action Section (Electric Cobalt Blue) */}
      <section className="bg-[#293dff] px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              Engage with GWFSN
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-5xl">
              Shape the future with us.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/our-work"
              className="bg-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1"
            >
              Explore our work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
