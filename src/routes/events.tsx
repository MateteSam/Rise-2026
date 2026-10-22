import { createFileRoute, Link } from "@tanstack/react-router";
import heroVenue from "../assets/hero-venue.png";
import { EVENT_2027 } from "../lib/content";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      {
        title: "Events & Archive — RISE AFRICA WOMAN 2027 & Past Gatherings",
      },
      {
        name: "description",
        content:
          "Save the date: RISE AFRICA WOMAN, 8 August 2027, Royal Majestic Hotel, Rosebank. Official registration opens on 30 January 2027. Revisit the 2026 archive.",
      },
      { property: "og:title", content: "Events Hub — GWFSN" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
});

function EventsPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      {/* Header */}
      <header className="bg-[#101010] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9da7ff]">
            Events & The 2026 Archive
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Ideas gain depth when <span className="text-[#9da7ff]">people meet.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Explore GWFSN’s forthcoming gatherings and revisit the conversations that have shaped
            the RISE journey.
          </p>
        </div>
      </header>

      {/* RISE AFRICA WOMAN 2027 Forthcoming Section (Signature Graphic Block) */}
      <section id="rise-2027" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="border-2 border-[#101010] bg-white">
          <div className="grid lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#101010]">
            <div className="p-8 sm:p-14 lg:col-span-7">
              <span className="border border-[#101010] bg-[#f8f8f8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
                Forthcoming Gathering · Save The Date
              </span>
              <h2 className="mt-6 text-4xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-6xl text-[#101010]">
                {EVENT_2027.title}
              </h2>
              <p className="mt-3 text-lg font-medium text-[#293dff] uppercase tracking-[0.12em]">
                {EVENT_2027.subtitle}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#545454]">
                {EVENT_2027.tagline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#545454]">
                On <strong>8 August 2027</strong>, the RISE journey continues at the Royal Majestic
                Hotel in Rosebank, South Africa. GWFSN invites women and potential partners to mark
                the date and follow the announcements as plans develop.
              </p>

              {/* Event detail table */}
              <div className="mt-8 border-2 border-[#101010] overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="border-b-2 border-[#101010] bg-[#101010] text-white text-[10px] uppercase tracking-[0.2em]">
                    <tr>
                      <th className="px-5 py-3 font-bold">Event detail</th>
                      <th className="px-5 py-3 font-bold">Announcement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-[#101010] text-[#17161c]">
                    <tr>
                      <td className="px-5 py-3.5 font-bold uppercase text-xs">Date</td>
                      <td className="px-5 py-3.5 font-semibold text-[#293dff]">{EVENT_2027.date}</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-bold uppercase text-xs">Venue</td>
                      <td className="px-5 py-3.5">{EVENT_2027.venue}</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-bold uppercase text-xs">Registration opens</td>
                      <td className="px-5 py-3.5 font-semibold">{EVENT_2027.registrationOpens}</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-bold uppercase text-xs">Current status</td>
                      <td className="px-5 py-3.5 text-xs text-[#545454]">{EVENT_2027.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/get-involved"
                  className="bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1"
                >
                  Get event updates
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black hover:bg-black hover:text-white"
                >
                  Enquire about partnership
                </Link>
              </div>
            </div>

            <div className="bg-[#101010] text-white p-8 sm:p-14 lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9da7ff]">
                  Rosebank Host Venue
                </p>
                <h3 className="mt-4 text-3xl font-semibold uppercase tracking-[-0.03em]">
                  Royal Majestic Hotel
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wider text-white/60">
                  Rosebank, South Africa
                </p>
                <div className="mt-8 border-2 border-white/20">
                  <img
                    src={heroVenue}
                    alt="Royal Majestic Hotel"
                    className="w-full object-cover h-56"
                  />
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-4 text-xs text-white/70">
                Programme details, speakers and attendance arrangements will be announced through
                GWFSN’s official channels.
              </div>
            </div>
          </div>
        </div>

        {/* Event Questions / FAQ */}
        <div className="mt-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
            Key Answers
          </p>
          <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.03em]">
            Event questions
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="border-2 border-[#101010] bg-white p-6">
              <span className="text-xl font-light text-[#293dff]">01</span>
              <h4 className="mt-4 font-bold uppercase text-sm">Can I register now?</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                Official registration opens on <strong>30 January 2027</strong>. An update request
                is not a booking or confirmation of attendance.
              </p>
            </div>
            <div className="border-2 border-[#101010] bg-white p-6">
              <span className="text-xl font-light text-[#ff7836]">02</span>
              <h4 className="mt-4 font-bold uppercase text-sm">Where will the event take place?</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                At the Royal Majestic Hotel, Rosebank, South Africa. Further attendance information
                will be published with registration details.
              </p>
            </div>
            <div className="border-2 border-[#101010] bg-white p-6">
              <span className="text-xl font-light text-[#8548ff]">03</span>
              <h4 className="mt-4 font-bold uppercase text-sm">
                Have the programme and speakers been announced?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#545454]">
                This is the first announcement. Programme and speaker information will follow as
                confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RISE SA WOMAN 2026 Archive (Signature Dark Ink Block) */}
      <section id="archive" className="border-t-2 border-[#101010] bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9da7ff]">
                Past event · 8 August 2026 Archive
              </span>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                A chapter in the RISE journey.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Revisit RISE SA WOMAN 2026 through selected photographs, reflections and session
                records from the gathering. This archive records a past event and provides context
                for the wider African chapter ahead.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/programme"
                className="border-2 border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
              >
                2026 Programme
              </Link>
              <Link
                to="/speakers"
                className="border-2 border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black"
              >
                2026 Speakers
              </Link>
              <Link
                to="/attend"
                className="bg-[#293dff] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 transition-transform"
              >
                View 2026 Highlights
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-2 border-white/20 sm:grid-cols-3">
            <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-white/20 p-8 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light text-[#9da7ff]">01</span>
                <h3 className="mt-4 text-xl font-semibold uppercase">The Founding Symposium</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65">
                  Convened leaders, innovators and rising professionals in Rosebank to celebrate
                  women's legacy and future capabilities.
                </p>
              </div>
              <Link to="/attend" className="mt-6 text-xs font-bold text-[#9da7ff] hover:underline">
                Explore highlights →
              </Link>
            </div>

            <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-white/20 p-8 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light text-[#ff7836]">02</span>
                <h3 className="mt-4 text-xl font-semibold uppercase">Six Movements</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65">
                  A deliberate journey from reflection, through renewal, to readiness for the future.
                </p>
              </div>
              <Link to="/programme" className="mt-6 text-xs font-bold text-[#ff7836] hover:underline">
                View 2026 sessions →
              </Link>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-light text-[#8548ff]">03</span>
                <h3 className="mt-4 text-xl font-semibold uppercase">Speaker Directory</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65">
                  Explore bios and keynote themes from the 2026 intergenerational stage.
                </p>
              </div>
              <Link to="/speakers" className="mt-6 text-xs font-bold text-[#8548ff] hover:underline">
                Browse speaker records →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
