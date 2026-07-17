import { createFileRoute, Link } from "@tanstack/react-router";
import heroVenue from "../assets/hero-venue.png";
import { EVENT } from "../lib/content";

export const Route = createFileRoute("/attend")({
  component: AttendPage,
  head: () => ({
    meta: [
      { title: "Attend — Rise, South African Woman 2026" },
      {
        name: "description",
        content:
          "Attend in person at Royal Majestic Hotel Rosebank for R499. Your contribution covers food and refreshments at the venue.",
      },
      { property: "og:title", content: "Attend Rise 2026" },
      {
        property: "og:description",
        content:
          "Reserve your in-person place at Royal Majestic Hotel Rosebank.",
      },
      { property: "og:url", content: "/attend" },
    ],
    links: [{ rel: "canonical", href: "/attend" }],
  }),
});

const inPersonBenefits = [
  "Access to the complete conference programme",
  "Food and refreshments",
  "Meaningful networking",
  "Interactive confidence and reflection activities",
  "Access to selected post-event resources",
];

function AttendPage() {
  return (
    <div className="rise-support bg-[#f8f8f8] text-[#17161c]">
      <header className="bg-[#293dff] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex min-h-[500px] flex-col justify-between px-5 py-14 sm:px-8 md:min-h-[610px] md:py-20 lg:px-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/65">
              In-person experience / Johannesburg
            </p>
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Be in the room. <span className="text-[#c7ccff]">Step into the rise.</span>
              </h1>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                One shared programme, two ways to participate—designed for connection, confidence
                and practical momentum.
              </p>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden border-t-2 border-white lg:min-h-full lg:border-l-2 lg:border-t-0">
            <img
              src={heroVenue}
              alt="Royal Majestic Hotel ballroom"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#18104d]/60" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t-2 border-white bg-black/80 backdrop-blur-sm">
              <div className="border-r-2 border-white p-5 sm:p-7">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/55">
                  When
                </span>
                <p className="mt-3 text-sm font-semibold uppercase leading-relaxed">
                  08 August 2026
                  <br />
                  2:00–7:00 PM
                </p>
              </div>
              <div className="p-5 sm:p-7">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/55">
                  Where
                </span>
                <p className="mt-3 text-sm font-semibold uppercase leading-relaxed">
                  Royal Majestic Hotel
                  <br />
                  Rosebank
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#293dff]">
            Choose your experience
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl">
            The same energy.
            <br />
            Your way in.
          </h2>
        </div>

        <div className="max-w-2xl border-2 border-[#101010]">
          <AttendanceOption
            eyebrow="In person / 01"
            title="Your in-person experience"
            price="R499"
            suffix="per participant"
            body="Your contribution is allocated entirely to food and refreshments at the venue restaurant. The venue has been made available without a venue-hire charge, with conference guests dining through its restaurant."
            benefits={inPersonBenefits}
            cta="Reserve my in-person seat"
            dark
          />
        </div>
      </section>

      <section className="bg-[#101010] px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9da7ff]">
              Seats are limited
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] sm:text-6xl">
              A curated experience.
              <br />
              <span className="text-[#9da7ff]">A room worth entering.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65">
              Attendance is subject to venue capacity. {EVENT.date} · {EVENT.venue}. Programme
              begins at 2:00 PM.
            </p>
          </div>
          <Link
            to="/register"
            className="inline-flex bg-[#293dff] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-1"
          >
            Secure my seat for R499
          </Link>
        </div>
      </section>
    </div>
  );
}

function AttendanceOption({
  eyebrow,
  title,
  price,
  suffix,
  body,
  benefits,
  cta,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  price: string;
  suffix: string;
  body: string;
  benefits: string[];
  cta: string;
  dark?: boolean;
}) {
  return (
    <article
      className={`flex flex-col p-6 sm:p-9 lg:min-h-[700px] lg:p-12 ${dark ? "bg-[#101010] text-white" : "border-t-2 border-[#101010] bg-white text-[#17161c] lg:border-l-2 lg:border-t-0"}`}
    >
      <p
        className={`text-[10px] font-bold uppercase tracking-[0.28em] ${dark ? "text-[#ff7836]" : "text-[#293dff]"}`}
      >
        {eyebrow}
      </p>
      <h3 className="mt-5 max-w-xl text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.045em] sm:text-5xl">
        {title}
      </h3>
      <div className="mt-10 border-y border-current/20 py-6">
        <span
          className={`text-6xl font-light uppercase tracking-[-0.06em] sm:text-7xl ${dark ? "text-[#ff7836]" : "text-[#293dff]"}`}
        >
          {price}
        </span>
        <span
          className={`ml-3 text-xs uppercase tracking-[0.14em] ${dark ? "text-white/50" : "text-black/45"}`}
        >
          {suffix}
        </span>
      </div>
      <p className={`mt-7 text-sm leading-relaxed ${dark ? "text-white/68" : "text-black/60"}`}>
        {body}
      </p>
      <ol className="mt-8 border-t border-current/20">
        {benefits.map((benefit, index) => (
          <li
            key={benefit}
            className="grid grid-cols-[2rem_1fr] gap-3 border-b border-current/20 py-3 text-sm"
          >
            <span className={dark ? "text-[#ff7836]" : "text-[#293dff]"}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ol>
      <Link
        to="/register"
        className={`mt-9 inline-flex w-full justify-center px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.13em] transition-transform hover:-translate-y-1 sm:w-fit ${dark ? "bg-[#ff7836] text-black" : "bg-[#293dff] text-white"}`}
      >
        {cta}
      </Link>
    </article>
  );
}
