import { createFileRoute, Link } from "@tanstack/react-router";
import { BAROMETER_INFO } from "../lib/content";

export const Route = createFileRoute("/barometer")({
  component: BarometerPage,
  head: () => ({
    meta: [
      {
        title: "African Women's Future Skills Barometer — GWFSN Flagship Evidence Feature",
      },
      {
        name: "description",
        content:
          "Discover ISSUE ZERO of the GWFSN African Women's Future Skills Barometer: existing evidence and a proposed framework for future measurement.",
      },
      { property: "og:title", content: "GWFSN African Women's Future Skills Barometer" },
      { property: "og:url", content: "/barometer" },
    ],
    links: [{ rel: "canonical", href: "/barometer" }],
  }),
});

function BarometerPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
            Flagship Evidence Feature / Permanent Research Home
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            African Women’s <span className="text-[#9da7ff]">Future Skills Barometer.</span>
          </h1>
          <p className="mt-6 text-xl font-medium text-[#d9ddff] max-w-3xl">
            {BAROMETER_INFO.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/barometer/issue-zero"
              className="bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1"
            >
              Read ISSUE ZERO
            </Link>
            <a
              href="#framework"
              className="border-2 border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
            >
              How the Barometer works
            </a>
          </div>
        </div>
      </header>

      {/* Introducing ISSUE ZERO & Status */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="border-2 border-[#101010] bg-white p-8 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <span className="border border-[#101010] bg-[#f8f8f8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
                Evidence Review · ISSUE ZERO
              </span>
              <h2 className="text-4xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
                What will it take for African women to thrive in a changing world?
              </h2>
              <p className="text-base leading-relaxed text-[#545454] sm:text-lg">
                What does it mean to be ready for the future? For African women, the answer reaches
                beyond access to a device or completion of a course. It involves the ability to use
                skills, enter meaningful work, participate safely and influence decisions.
              </p>
              <p className="text-sm leading-relaxed text-[#545454]">
                The Barometer begins by asking what we can responsibly measure, what the available
                evidence tells us and where important gaps remain. ISSUE ZERO is its founding
                evidence review and a proposal for developing future GWFSN measurement.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/barometer/issue-zero"
                  className="bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 inline-block"
                >
                  Read full ISSUE ZERO publication
                </Link>
                <a
                  href="https://recastia.net/eaah/rerw/index.html#p=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 inline-block"
                >
                  Open in Flip Magazine ↗
                </a>
              </div>
            </div>

            <div className="border-2 border-[#293dff] bg-[#293dff]/5 p-8 lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#293dff]">
                Current status & transparency
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#17161c] font-medium">
                {BAROMETER_INFO.statusNote}
              </p>
              <p className="mt-4 border-t border-black/10 pt-4 text-xs leading-relaxed text-[#545454]">
                GWFSN is committed to statistical rigor: we do not display invented scores, rankings
                or decorative data charts that imply measured results before verified collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Guiding Framework (Original Split Grid) */}
      <section id="framework" className="border-t-2 border-[#101010] bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7836]">
              Rigour & Interpretation
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Questions guiding the proposed framework.
            </h2>
          </div>

          <div className="mt-12 grid border-2 border-white/20 sm:grid-cols-2">
            <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-white/20 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light text-[#293dff]">01</span>
                <h3 className="mt-6 text-2xl font-semibold uppercase tracking-[-0.02em]">
                  Why the evidence matters
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Good evidence can help educators identify learning needs, employers examine
                  barriers to progression and decision-makers ask whether opportunities reach the
                  people they are intended to serve. It can also help women locate their experiences
                  within wider patterns of change.
                </p>
              </div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9da7ff]">
                Purpose-driven research
              </p>
            </div>

            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light text-[#ff7836]">02</span>
                <h3 className="mt-6 text-2xl font-semibold uppercase tracking-[-0.02em]">
                  How to read the Barometer
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Read each finding alongside its source, publication date, population and scope. A
                  figure describing one country, age group or period should not be treated as a
                  measure of every African woman’s experience. Where evidence cannot support a
                  comparison, that limitation matters.
                </p>
              </div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff7836]">
                Methodological precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Strengthen the Evidence (Electric Blue Section) */}
      <section className="bg-[#293dff] px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              Research & Methodological Perspectives
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-none tracking-[-0.045em] sm:text-5xl">
              Help strengthen the evidence.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              We welcome relevant research, methodological perspectives and conversations about
              future collaboration. Share the source, context and purpose of your contribution so
              that it can be considered appropriately.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1 shrink-0"
          >
            Contact us about the Barometer
          </Link>
        </div>
      </section>
    </div>
  );
}
