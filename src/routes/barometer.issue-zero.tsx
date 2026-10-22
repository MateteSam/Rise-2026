import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import magazineCover from "../assets/magazine-cover.jpg";
import { MAGAZINE_FLIPBOOK_URL } from "../lib/content";

export const Route = createFileRoute("/barometer/issue-zero")({
  component: BarometerIssueZeroPage,
  head: () => ({
    meta: [
      {
        title: "ISSUE ZERO — GWFSN African Women's Future Skills Barometer",
      },
      {
        name: "description",
        content:
          "Founding evidence review and proposed measurement framework for African women's future skills, economic participation, and leadership.",
      },
      { property: "og:title", content: "Barometer ISSUE ZERO — GWFSN" },
      { property: "og:url", content: "/barometer/issue-zero" },
    ],
    links: [{ rel: "canonical", href: "/barometer/issue-zero" }],
  }),
});

function BarometerIssueZeroPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Top Header */}
      <header className="border-b-2 border-[#101010] bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20 lg:px-12">
          <Link
            to="/barometer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9da7ff] hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Barometer Hub
          </Link>
          <div className="mt-8 max-w-4xl">
            <span className="inline-block border border-[#9da7ff] bg-[#9da7ff]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9da7ff]">
              Founding Evidence Review · ISSUE ZERO
            </span>
            <h1 className="mt-6 text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              A Framework for <span className="text-[#9da7ff]">Future Measurement.</span>
            </h1>
            <p className="mt-6 text-base font-medium text-[#d9ddff] sm:text-lg max-w-2xl">
              African Women’s Future Skills Barometer · Founding Evidence Review Published October 2026
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={MAGAZINE_FLIPBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <BookOpen size={15} />
                Open in Flip Magazine ↗
              </a>
              <Link
                to="/magazine"
                className="border-2 border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black inline-flex items-center gap-2"
              >
                View Magazine Page
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Editorial Text */}
          <main className="space-y-10 lg:col-span-8">
            <article className="border-2 border-[#101010] bg-white p-8 sm:p-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff7836]">
                Editorial Summary
              </span>
              <h2 className="mt-2 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-4xl text-[#101010]">
                Executive Scope & Objectives
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#545454] sm:text-lg">
                What does it mean to be ready for the future? For African women, the answer reaches
                beyond access to a device or completion of a course. It involves the ability to use
                skills, enter meaningful work, participate safely and influence decisions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#545454]">
                ISSUE ZERO brings existing research into focus and sets out a proposed framework for
                future measurement. It synthesises published data on workforce transition, STEM
                participation, digital infrastructure access, and women's representation across
                technology and enterprise sectors across key African economic corridors.
              </p>

              <div className="my-10 border-t-2 border-b-2 border-[#101010] bg-[#f8f8f8] p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#101010]">
                  <ShieldCheck size={16} className="text-[#293dff]" />
                  Source & Methodology Transparency
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#545454] sm:text-sm">
                  ISSUE ZERO synthesises secondary data from multilateral bodies including UNESCO,
                  ITU, World Economic Forum, and regional African labour surveys. It is an editorial
                  evidence review and a proposed framework for GWFSN's future research—not a ranking
                  index or an original pan-African survey.
                </p>
                <div className="mt-4 border-t border-black/10 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101010]">
                    Guidelines for Data Interpretation:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#545454]">
                    <li>• Read each finding alongside its citation, population sample, and date.</li>
                    <li>• Statistics from urban hubs must not be conflated with nationwide conditions.</li>
                    <li>• Where comparative cross-border data is unavailable, we explicitly state data limits.</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold uppercase tracking-[-0.03em] text-[#101010]">
                The Four Proposed Measurement Pillars
              </h3>
              <p className="mt-2 text-sm text-[#545454]">
                Designed to guide comprehensive future data collection across the continent:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border-2 border-[#101010] p-6 bg-[#f8f8f8]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#293dff]">Pillar 01</span>
                  <h4 className="mt-2 text-lg font-semibold uppercase tracking-[-0.02em] text-[#101010]">
                    Capabilities & Digital Fluency
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                    Confidence with AI tools, computational literacy, and foundational technical proficiency.
                  </p>
                </div>
                <div className="border-2 border-[#101010] p-6 bg-[#f8f8f8]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7836]">Pillar 02</span>
                  <h4 className="mt-2 text-lg font-semibold uppercase tracking-[-0.02em] text-[#101010]">
                    Work & Economic Mobility
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                    Entry into viable high-growth professions, wage parity, and entrepreneurial resilience.
                  </p>
                </div>
                <div className="border-2 border-[#101010] p-6 bg-[#f8f8f8]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8548ff]">Pillar 03</span>
                  <h4 className="mt-2 text-lg font-semibold uppercase tracking-[-0.02em] text-[#101010]">
                    Leadership & Influence
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                    Representation on governance boards, in civic bodies, and across technical architecture leadership.
                  </p>
                </div>
                <div className="border-2 border-[#101010] p-6 bg-[#f8f8f8]">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#293dff]">Pillar 04</span>
                  <h4 className="mt-2 text-lg font-semibold uppercase tracking-[-0.02em] text-[#101010]">
                    Enabling Ecosystems
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                    Affordable connectivity infrastructure, safe digital environments, and equitable policy protections.
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t-2 border-[#101010] pt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8548ff]">
                      Publication Channel
                    </span>
                    <h4 className="mt-1 text-xl font-semibold uppercase tracking-[-0.02em] text-[#101010]">
                      Read in RISE AFRICAN WOMAN Magazine
                    </h4>
                    <p className="mt-1 text-xs text-[#545454] max-w-md">
                      The complete ISSUE ZERO narrative, data charts, and leadership interviews are available in the inaugural flipbook edition.
                    </p>
                  </div>
                  <a
                    href={MAGAZINE_FLIPBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#293dff] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#1a2ae0] transition-colors inline-flex items-center gap-2 shrink-0"
                  >
                    Open Flip Magazine
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8 lg:col-span-4">
            {/* Magazine Feature Card */}
            <div className="border-2 border-[#101010] bg-white p-6 shadow-sm">
              <div className="relative overflow-hidden border border-black/10">
                <img
                  src={magazineCover}
                  alt="RISE AFRICAN WOMAN Inaugural Edition"
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#101010] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#9da7ff]">
                  Inaugural Issue
                </span>
              </div>
              <div className="mt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff7836]">
                  Full Publication
                </span>
                <h3 className="mt-2 text-xl font-semibold uppercase tracking-[-0.03em] text-[#101010]">
                  RISE AFRICAN WOMAN
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                  Contains the complete Barometer ISSUE ZERO narrative, editorial analysis, and perspectives from African women leaders.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={MAGAZINE_FLIPBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-[#293dff] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#1a2ae0] transition-colors"
                  >
                    <BookOpen size={14} />
                    Open Flip Magazine ↗
                  </a>
                  <Link
                    to="/magazine"
                    className="flex w-full items-center justify-center gap-2 border-2 border-[#101010] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#101010] hover:bg-[#101010] hover:text-white transition-colors"
                  >
                    Magazine Hub
                  </Link>
                </div>
              </div>
            </div>

            {/* Future Editions Archive Box */}
            <div className="border-2 border-[#101010] bg-[#101010] p-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9da7ff]">
                Research Pipeline
              </span>
              <h4 className="mt-2 text-lg font-semibold uppercase tracking-[-0.02em]">
                Future Editions Archive
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Subsequent editions of the Barometer will feature field surveys and verified regional
                indicators as GWFSN expands its measurement partnerships. Later issues will appear
                here upon verified publication.
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ff7836] hover:underline"
                >
                  Partner on future research →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
