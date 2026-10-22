import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import africanWomenHero from "../assets/african-women-future-skills.jpg";
import magazineCover from "../assets/magazine-cover.jpg";
import { BAROMETER_INFO, EVENT_2027, INSIGHTS_ARTICLES, MAGAZINE_INFO } from "../lib/content";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      {
        title: "GWFSN — Global Women's Future Skills Network",
      },
      {
        name: "description",
        content:
          "Explore GWFSN's work on women's future skills, leadership and opportunity, including the Barometer, RISE AFRICAN WOMAN and upcoming events.",
      },
      { property: "og:title", content: "Global Women's Future Skills Network" },
      {
        property: "og:description",
        content:
          "Skills create possibilities. Knowledge helps us act on them. Bringing women's learning, leadership and economic participation into focus.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const AREAS_OF_WORK = [
  {
    num: "01",
    title: "Future skills",
    body: "Exploring the capabilities women need as technology and work change.",
    accent: "#293dff",
  },
  {
    num: "02",
    title: "Leadership",
    body: "Opening conversations about influence, responsibility and progression.",
    accent: "#ff7836",
  },
  {
    num: "03",
    title: "Opportunity",
    body: "Connecting useful knowledge with pathways into work and enterprise.",
    accent: "#8548ff",
  },
  {
    num: "04",
    title: "Evidence and dialogue",
    body: "Asking better questions and bringing women’s experiences into view.",
    accent: "#293dff",
  },
];

const BAROMETER_TILES = [
  {
    num: "01",
    title: "Capabilities",
    summary: "Digital confidence & AI readiness",
    back: "Examining practical competencies, lifelong adaptability, and the confidence women need to navigate technology-driven transitions.",
    accent: "#293dff",
  },
  {
    num: "02",
    title: "Mobility",
    summary: "Pathways into work and enterprise",
    back: "Assessing wage dynamics, access to capital, business resilience, and sustainable entry points into high-value economic sectors.",
    accent: "#ff7836",
  },
  {
    num: "03",
    title: "Influence",
    summary: "Leadership & board representation",
    back: "Tracking women as decision-makers across corporate governance, civic institutions, and regional transformation initiatives.",
    accent: "#8548ff",
  },
  {
    num: "04",
    title: "Evidence",
    summary: "Methodological transparency & rigour",
    back: "Distinguishing validated benchmarks from aspirational claims. Every metric cited with period, sample scope, and limits.",
    accent: "#101010",
  },
];

function IndexPage() {
  return (
    <div className="rise-home bg-[#f8f8f8] text-[#17161c]">
      {/* 1. Compact Save The Date Link Near Top */}
      <div className="border-b border-[#293dff]/30 bg-[#101010] px-4 py-2 text-center text-white">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/90 transition-colors hover:text-[#9da7ff] sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#9da7ff] animate-pulse" />
          <span className="text-[#9da7ff]">RISE AFRICA WOMAN 2027</span>
          <span>•</span>
          <span>8 August</span>
          <span>•</span>
          <span className="border-b border-white/50 pb-0.5 hover:border-[#9da7ff]">Save the date</span>
          <span className="text-xs">↗</span>
        </Link>
      </div>

      {/* 2. Opening Section / Organisational Introduction (Original Hero Architecture) */}
      <section className="relative isolate min-h-[640px] overflow-hidden bg-[#101010] text-[#f8f8f8] md:min-h-[720px]">
        <img
          src={africanWomenHero}
          alt="GWFSN African Women Shaping The Future"
          className="absolute inset-0 h-full w-full object-cover object-[55%_center] md:object-center brightness-95"
        />
        <div className="absolute inset-0 bg-[#120a32]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/95 via-[#101010]/70 to-[#101010]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-85" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-24 md:min-h-[680px] md:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#9da7ff]">
              Global Women’s Future Skills Network
            </p>
            <h1 className="max-w-4xl text-[2.8rem] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white min-[375px]:text-5xl sm:text-6xl md:text-8xl">
              African women
              <br />
              shaping the <span className="text-[#d9ddff]">future</span>
            </h1>
            <p className="mt-7 max-w-2xl text-sm font-medium leading-relaxed text-white/90 md:text-base">
              Skills create possibilities. Knowledge helps us act on them. The Global Women’s
              Future Skills Network brings women’s learning, leadership and economic participation
              into focus, with a vision of a future African women help to shape.
            </p>
            <p className="mt-3 max-w-2xl text-xs uppercase tracking-[0.16em] text-white/70">
              Explore our work, discover the stories in RISE AFRICAN WOMAN and examine the evidence
              behind the opportunities ahead.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Link
                to="/our-work"
                className="flex items-center justify-center bg-[#293dff] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 sm:px-8"
              >
                Explore our work
              </Link>
              <Link
                to="/magazine"
                className="flex items-center justify-center bg-black px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 sm:px-8"
              >
                Read the magazine
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Distinction Bar */}
      <section className="border-b border-[#e7e7e7] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 md:py-9">
          <p className="max-w-4xl text-sm font-semibold leading-relaxed tracking-[0.11em] text-[#293dff] md:text-base">
            Rooted in Africa and open to global collaboration, GWFSN places learning, leadership and
            economic participation at the centre of its purpose.
          </p>
          <div className="-mx-5 mt-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 text-sm text-[#313131] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
            <span className="min-w-[210px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              LEARN · Capability
            </span>
            <span className="min-w-[190px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              LEAD · Responsibility
            </span>
            <span className="min-w-[190px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              EARN · Opportunity
            </span>
            <span className="min-w-[210px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              FLOURISH · Agency
            </span>
          </div>
        </div>
      </section>

      {/* 3. Flagship Evidence Feature: Barometer (Split Sticky Layout with 3D Flip Tiles) */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#293dff]">
            Flagship evidence feature
          </p>
          <h2 className="mt-5 text-5xl font-light uppercase leading-[0.88] tracking-[-0.05em] text-[#293dff] sm:text-6xl md:text-7xl">
            The Barometer
          </h2>
          <div className="mt-4 inline-block border border-[#293dff] bg-[#293dff]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
            Evidence review · ISSUE ZERO
          </div>
          <h3 className="mt-6 text-2xl font-semibold uppercase leading-tight tracking-[-0.03em] text-[#17161c]">
            What will it take for African women to thrive in a changing world?
          </h3>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#525252]">
            The GWFSN African Women’s Future Skills Barometer asks how we understand and measure
            women’s preparedness for the future. Its founding instalment, ISSUE ZERO, brings
            existing research into focus and sets out a proposed framework for future measurement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/barometer"
              className="inline-flex border-b-2 border-[#293dff] pb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#293dff] hover:border-black hover:text-black"
            >
              Explore the Barometer →
            </Link>
            <span className="hidden text-black/30 sm:inline">|</span>
            <Link
              to="/barometer/issue-zero"
              className="inline-flex border-b-2 border-black/30 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#525252] hover:border-black hover:text-black"
            >
              Read ISSUE ZERO
            </Link>
          </div>
        </div>

        {/* 3D Flip Tiles for Barometer */}
        <div className="grid gap-4 sm:grid-cols-2">
          {BAROMETER_TILES.map((tile) => (
            <div key={tile.title} className="group perspective-1000 h-64 w-full">
              <div
                tabIndex={0}
                className="flip-inner relative h-full w-full preserve-3d outline-none transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-y-180 group-focus-within:rotate-y-180"
              >
                {/* Front */}
                <article className="absolute inset-0 backface-hidden border-2 border-[#101010] bg-white p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-light text-[#293dff]">{tile.num}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#17161c]/40">
                        Pillar
                      </span>
                    </div>
                    <h4 className="mt-6 text-2xl font-semibold uppercase leading-tight tracking-[-0.03em]">
                      {tile.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#525252]">{tile.summary}</p>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
                    Hover to inspect ↗
                  </p>
                </article>

                {/* Back */}
                <article
                  className="absolute inset-0 rotate-y-180 backface-hidden p-6 text-white flex flex-col justify-between"
                  style={{ backgroundColor: tile.accent }}
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
                      Pillar {tile.num} · Methodology
                    </p>
                    <h4 className="mt-3 text-2xl font-semibold uppercase leading-tight">
                      {tile.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">{tile.back}</p>
                  </div>
                  <span className="self-end text-2xl font-light text-white/70">↗</span>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Magazine Feature: RISE AFRICAN WOMAN (Editorial High-Fashion Layout) */}
      <section className="border-t-2 border-[#101010] bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Magazine Cover Column */}
            <div className="flex justify-center lg:col-span-5">
              <div className="group relative w-full max-w-sm border-2 border-[#101010] bg-[#101010] shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-2">
                <img
                  src={magazineCover}
                  alt="RISE AFRICAN WOMAN Magazine Inaugural Edition"
                  className="w-full object-cover"
                />
                <div className="border-t-2 border-[#101010] bg-[#293dff] p-4 text-center text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                    Inaugural Edition
                  </p>
                  <p className="mt-0.5 text-sm font-semibold uppercase">October–December 2026</p>
                </div>
              </div>
            </div>

            {/* Editorial Copy Column */}
            <div className="space-y-6 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff7836]">
                GWFSN’s editorial voice
              </p>
              <h2 className="text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-[#101010] sm:text-6xl md:text-7xl">
                The stories and ideas moving us forward
              </h2>
              <p className="text-base leading-relaxed text-[#525252] sm:text-lg">
                <strong>RISE AFRICAN WOMAN</strong> is GWFSN’s magazine and editorial voice. Discover
                perspectives on future skills, leadership and opportunity, alongside stories that
                reflect the breadth of women’s lives.
              </p>
              <p className="text-sm leading-relaxed text-[#525252]">
                From RISE South Africa to RISE Africa: this edition introduces ISSUE ZERO of the
                GWFSN African Women’s Future Skills Barometer, features The Founder’s File and
                Editor’s Desk, and adds thoughtful conversations in RISE Living.
              </p>

              {/* Departments Checklist in Original Brutalist Style */}
              <div className="grid gap-2 border-y-2 border-[#101010] py-4 text-xs font-semibold uppercase tracking-wider text-[#101010] sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#293dff]" />
                  <span>Future skills & technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#ff7836]" />
                  <span>Leadership & influence</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#8548ff]" />
                  <span>Work & enterprise</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#293dff]" />
                  <span>Evidence, insight & RISE Living</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={MAGAZINE_INFO.flipbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <span>Open Flip Magazine</span>
                  <span className="text-sm">↗</span>
                </a>
                <Link
                  to="/magazine"
                  className="border-2 border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black hover:bg-black hover:text-white"
                >
                  Magazine Hub
                </Link>
                <Link
                  to="/barometer"
                  className="border-2 border-[#101010]/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#525252] hover:border-black hover:text-black"
                >
                  Explore the Barometer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Areas of Work (Deep Void Ink Section in Signature Style) */}
      <section className="bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9da7ff]">
                Strategic Pillars
              </p>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Areas of work.
              </h2>
            </div>
            <Link
              to="/our-work"
              className="border border-white/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
            >
              Full programme concepts
            </Link>
          </div>

          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {AREAS_OF_WORK.map((area) => (
              <div
                key={area.title}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center border-2 border-white/15 p-6 transition-colors hover:border-[#293dff] md:w-auto md:max-w-none flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-light text-[#9da7ff]">{area.num}</span>
                  <h3 className="mt-6 text-2xl font-medium uppercase tracking-[-0.02em]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{area.body}</p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9da7ff]">
                    GWFSN Initiative →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Event Announcement: RISE AFRICA WOMAN 2027 (Original Electric Blue Section) */}
      <section className="bg-[#293dff] px-5 py-16 text-white md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Event announcement · 8 August 2027
            </p>
            <h2 className="mt-4 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl">
              RISE AFRICA
              <br />
              WOMAN 2027
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              Save the date for <strong>8 August 2027</strong> at the Royal Majestic Hotel,
              Rosebank, South Africa. Join the next chapter of the RISE journey. Official
              registration opens on <strong>30 January 2027</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/events"
              className="inline-flex shrink-0 items-center justify-center bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1"
            >
              View the announcement
            </Link>
            <Link
              to="/events#archive"
              className="inline-flex shrink-0 items-center justify-center border-2 border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
            >
              Revisit 2026 Archive
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Latest Insights (3D Interactive Flip Highlights) */}
      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#293dff]">
              Ideas for the futures women are building
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[#202020] sm:text-6xl">
              Latest insights.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#525252]">
              Explore perspectives on learning, leadership and economic participation, alongside
              news from GWFSN and selected stories from RISE AFRICAN WOMAN.
            </p>
          </div>

          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {INSIGHTS_ARTICLES.map((article, index) => (
              <div key={article.id} className="w-[82vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none">
                <div className="group perspective-1000 h-64 w-full">
                  <div
                    tabIndex={0}
                    className="flip-inner relative h-full w-full preserve-3d outline-none transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-y-180 group-focus-within:rotate-y-180"
                  >
                    {/* Front */}
                    <article className="absolute inset-0 backface-hidden border-2 border-[#101010] bg-[#f8f8f8] p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-light text-[#293dff]">
                            0{index + 1}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff7836]">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold uppercase leading-tight tracking-[-0.02em]">
                          {article.title}
                        </h3>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
                        Hover to read preview ↗
                      </p>
                    </article>

                    {/* Back */}
                    <article className="absolute inset-0 rotate-y-180 backface-hidden bg-[#293dff] p-6 text-white flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
                          {article.category} · Insight 0{index + 1}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold uppercase leading-tight">{article.title}</h3>
                        <p className="mt-3 text-xs leading-relaxed text-white/90">{article.excerpt}</p>
                      </div>
                      <Link
                        to={article.link}
                        className="self-start border-b border-white pb-0.5 text-xs font-bold uppercase tracking-wider text-white hover:text-black hover:border-black"
                      >
                        {article.linkLabel} →
                      </Link>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Closing Invitation: Bring your perspective */}
      <section className="border-t-2 border-[#101010] bg-[#f8f8f8] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="border-2 border-[#101010] bg-white p-8 md:p-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#293dff]">
                Closing invitation
              </p>
              <h2 className="mt-3 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
                Bring your perspective to the future we are building
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#525252]">
                Have an idea, a story or a potential collaboration? We welcome conversations with
                women, educators, employers, researchers and partners who share our commitment to
                widening opportunity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <Link
                to="/get-involved"
                className="bg-[#293dff] px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1"
              >
                Get involved
              </Link>
              <Link
                to="/contact"
                className="border-2 border-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-black hover:bg-black hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
