import { createFileRoute, Link } from "@tanstack/react-router";
import { PROGRAMME_CONCEPTS } from "../lib/content";

export const Route = createFileRoute("/our-work")({
  component: OurWorkPage,
  head: () => ({
    meta: [
      { title: "Our Work & Programme Concepts — GWFSN" },
      {
        name: "description",
        content:
          "Women’s futures are shaped by what they can learn, the decisions they can influence and the opportunities they can access.",
      },
      { property: "og:title", content: "Our Work — GWFSN" },
      { property: "og:url", content: "/our-work" },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
});

function OurWorkPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
            Our Work / Connecting Capability With Opportunity
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Shaping capability, dialogue <span className="text-[#9da7ff]">& opportunity.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Women’s futures are shaped by what they can learn, the decisions they can influence and
            the opportunities they can access. GWFSN brings these connections into focus through
            publishing, evidence and dialogue, while developing ideas for practical collaboration.
          </p>
        </div>
      </header>

      {/* 4 Pillars Strip */}
      <section className="border-b-2 border-[#101010] bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#101010]">
          <div className="p-8">
            <span className="text-3xl font-light text-[#293dff]">01</span>
            <h3 className="mt-4 text-xl font-bold uppercase tracking-[-0.02em]">Future Skills</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#545454]">
              Exploring the capabilities women need as technology and work change.
            </p>
          </div>
          <div className="p-8">
            <span className="text-3xl font-light text-[#ff7836]">02</span>
            <h3 className="mt-4 text-xl font-bold uppercase tracking-[-0.02em]">Leadership</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#545454]">
              Opening conversations about influence, responsibility and progression.
            </p>
          </div>
          <div className="p-8">
            <span className="text-3xl font-light text-[#8548ff]">03</span>
            <h3 className="mt-4 text-xl font-bold uppercase tracking-[-0.02em]">Opportunity</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#545454]">
              Connecting useful knowledge with pathways into work and enterprise.
            </p>
          </div>
          <div className="p-8">
            <span className="text-3xl font-light text-[#293dff]">04</span>
            <h3 className="mt-4 text-xl font-bold uppercase tracking-[-0.02em]">Evidence & Dialogue</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#545454]">
              Asking better questions and bringing women’s experiences into view.
            </p>
          </div>
        </div>
      </section>

      {/* Programme Concepts in Original Brutalist Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block border-2 border-[#101010] bg-[#293dff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Proposed activities · Delivery details will be announced when confirmed
          </div>
          <h2 className="mt-6 text-4xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-6xl">
            Programme development
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#545454]">
            The following concepts are in development. Dates, facilitators, eligibility and
            participation arrangements have not yet been announced. Expressions of interest help us
            understand potential demand; they do not constitute enrolment or an offer of a place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 border-2 border-[#101010] bg-[#101010] sm:grid-cols-2">
          {PROGRAMME_CONCEPTS.map((concept, index) => (
            <article
              key={concept.title}
              className="flex min-h-[300px] flex-col justify-between bg-white p-8 transition-colors hover:bg-[#fbfaf8]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light text-[#293dff]">
                    0{index + 1}
                  </span>
                  <span className="border border-[#101010] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#293dff]">
                    {concept.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold uppercase tracking-[-0.03em]">
                  {concept.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#545454]">
                  {concept.description}
                </p>
              </div>
              <div className="mt-8 border-t-2 border-[#101010] pt-4">
                <Link
                  to="/get-involved"
                  className="inline-flex border-b-2 border-[#293dff] pb-0.5 text-xs font-bold uppercase tracking-[0.18em] text-[#293dff] hover:border-black hover:text-black"
                >
                  Express Interest →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Development Priorities Notice */}
        <div className="mt-12 border-2 border-[#101010] bg-white p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff7836]">
            Internal development priorities
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#545454]">
            Start with one manageable pilot and one carefully maintained opportunity briefing.
            Expand only when an accountable owner, delivery capacity and a clear benefit to
            participants are established. We do not announce an academy, certification, grants,
            guaranteed mentoring or job placements without the necessary operational arrangements.
          </p>
        </div>
      </section>

      {/* Help Shape What Comes Next (Electric Blue) */}
      <section className="bg-[#293dff] px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              Partnership & Pilot Development
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-5xl">
              Help shape what comes next.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Would you like to contribute expertise, propose a pilot or discuss collaboration? Tell
              us which area interests you, who it could serve and what you could bring to it.
            </p>
          </div>
          <Link
            to="/get-involved"
            className="bg-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1 shrink-0"
          >
            Discuss a programme idea
          </Link>
        </div>
      </section>
    </div>
  );
}
