import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import magazineCover from "../assets/magazine-cover.jpg";
import { MAGAZINE_INFO } from "../lib/content";

export const Route = createFileRoute("/magazine")({
  component: MagazinePage,
  head: () => ({
    meta: [
      {
        title: "RISE AFRICAN WOMAN Magazine — Future Skills, Leadership, Opportunity",
      },
      {
        name: "description",
        content:
          "Read RISE AFRICAN WOMAN, GWFSN's magazine on future skills, leadership and opportunity. Explore the inaugural October–December 2026 edition.",
      },
      { property: "og:title", content: "RISE AFRICAN WOMAN Magazine — GWFSN" },
      { property: "og:url", content: "/magazine" },
    ],
    links: [{ rel: "canonical", href: "/magazine" }],
  }),
});

function MagazinePage() {
  const [readerOpen, setReaderOpen] = useState(false);

  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Editorial Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#ff7836]">
            GWFSN’s Editorial Voice / Quarterly Publication
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            RISE AFRICAN <span className="text-[#9da7ff]">WOMAN.</span>
          </h1>
          <p className="mt-4 text-xl font-medium uppercase tracking-[0.15em] text-[#ff7836]">
            {MAGAZINE_INFO.subtitle}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            {MAGAZINE_INFO.description} {MAGAZINE_INFO.livingNote}
          </p>
        </div>
      </header>

      {/* Inaugural Issue Feature Showcase */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="border-2 border-[#101010] bg-white p-8 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Magazine Cover */}
            <div className="flex justify-center lg:col-span-5">
              <div className="group relative w-full max-w-sm border-2 border-[#101010] bg-[#101010] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <img
                  src={magazineCover}
                  alt="RISE AFRICAN WOMAN Magazine Cover"
                  className="w-full object-cover"
                />
                <div className="border-t-2 border-[#101010] bg-[#293dff] p-4 text-center text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                    Current Edition
                  </p>
                  <p className="mt-0.5 text-sm font-semibold uppercase">October–December 2026</p>
                </div>
              </div>
            </div>

            {/* Content & Actions */}
            <div className="space-y-6 lg:col-span-7">
              <span className="border border-[#101010] bg-[#f8f8f8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
                Inaugural Edition
              </span>
              <h2 className="text-4xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
                From RISE South Africa to RISE Africa
              </h2>
              <p className="text-base leading-relaxed text-[#545454] sm:text-lg">
                Discover the vision behind a publication committed to women’s futures. This edition
                introduces <strong>ISSUE ZERO</strong> of the GWFSN African Women’s Future Skills
                Barometer and brings together voices and ideas on technology, enterprise, careers and
                leadership.
              </p>
              <p className="text-sm leading-relaxed text-[#545454]">
                Meet the purpose behind the publication through The Founder’s File and Editor’s Desk,
                explore the conversations emerging from the RISE platform and discover the everyday
                interests featured in RISE Living.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setReaderOpen(true)}
                  className="bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  Open the flip edition
                </button>
                <a
                  href={MAGAZINE_INFO.flipbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black hover:bg-black hover:text-white transition-colors"
                >
                  Read online (Full Window) ↗
                </a>
                <a
                  href="/rise-african-woman-inaugural.pdf"
                  download="RISE-AFRICAN-WOMAN-Inaugural-2026.pdf"
                  className="border border-[#101010]/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#545454] hover:border-black hover:text-black"
                >
                  Download PDF (14.2 MB)
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/barometer"
                  className="inline-flex border-b-2 border-[#293dff] pb-0.5 text-xs font-bold uppercase tracking-[0.18em] text-[#293dff] hover:border-black hover:text-black"
                >
                  Explore the Barometer inside this issue →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Flip Reader Modal (Interactive Iframe) */}
      {readerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 sm:p-4 md:p-6 backdrop-blur"
        >
          <div className="relative flex h-[94vh] w-full max-w-6xl flex-col border-2 border-white/20 bg-[#101010] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b-2 border-white/20 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#9da7ff] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9da7ff]">
                  RISE AFRICAN WOMAN · Interactive Flipbook
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={MAGAZINE_INFO.flipbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black hidden sm:inline-block"
                >
                  Open in new window ↗
                </a>
                <button
                  type="button"
                  onClick={() => setReaderOpen(false)}
                  className="border border-white/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black cursor-pointer"
                >
                  Close ✕
                </button>
              </div>
            </div>
            <div className="flex-1 w-full bg-[#1a171f] overflow-hidden">
              <iframe
                src={MAGAZINE_INFO.flipbookUrl}
                title="RISE AFRICAN WOMAN Interactive Flipbook"
                className="h-full w-full border-0"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}

      {/* Inside The Magazine (Original Brutalist 2px Border Grid) */}
      <section className="bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9da7ff]">
            Editorial Sections
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            Inside the magazine.
          </h2>

          <div className="mt-12 grid border-2 border-white/20 sm:grid-cols-2 lg:grid-cols-3">
            {MAGAZINE_INFO.sections.map((section, idx) => (
              <div
                key={section.title}
                className="border-b-2 border-r-2 border-white/20 p-8 transition-colors hover:border-[#293dff] hover:bg-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-light text-[#9da7ff]">0{idx + 1}</span>
                  <h3 className="mt-6 text-2xl font-semibold uppercase tracking-[-0.02em]">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story & Work With The Magazine */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Share your story */}
          <div className="border-2 border-[#101010] bg-white p-8 sm:p-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
              Contributor Submissions
            </span>
            <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.03em]">
              Share your story
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#545454]">
              Do you have a story, perspective or practical insight relevant to African women’s
              futures? Send a short outline explaining the idea, why it matters and the experience or
              evidence behind it.
            </p>
            <div className="mt-8 border-t-2 border-[#101010] pt-4">
              <a
                href="mailto:rise@gwfsn.org?subject=Story%20Outline%20for%20RISE%20AFRICAN%20WOMAN"
                className="inline-flex border-b-2 border-[#293dff] pb-0.5 text-xs font-bold uppercase tracking-[0.18em] text-[#293dff] hover:border-black hover:text-black"
              >
                Editorial enquiries: rise@gwfsn.org →
              </a>
            </div>
          </div>

          {/* Work with the magazine */}
          <div className="border-2 border-[#101010] bg-white p-8 sm:p-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7836]">
              Advertising & Publishing Partnerships
            </span>
            <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.03em]">
              Work with the magazine
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#545454]">
              For advertising, distribution and publishing partnerships, contact the editorial and
              production team to discuss the audience, purpose and format of your proposal.
            </p>
            <div className="mt-8 border-t-2 border-[#101010] pt-4">
              <Link
                to="/contact"
                className="bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-[#293dff] inline-block"
              >
                Make an editorial or advertising enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
