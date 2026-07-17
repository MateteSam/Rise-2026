import { createFileRoute, Link } from "@tanstack/react-router";
import heroVenue from "../assets/hero-venue.png";
import speakerBess from "../assets/speaker-bess.png";
import speakerNtombi from "../assets/speaker-ntombi.png";
import speakerSam from "../assets/speaker-sam-oye.jpg";
import speakerVeronica from "../assets/speaker-veronica.png";
import speakerYolanda from "../assets/speaker-yolanda.png";
import speakerJoy from "../assets/speaker-joy.png";
import speakerLauren from "../assets/speaker-lauren-hutfield.jpg";
import { EVENT, HIGHLIGHTS, PROGRAMME, SPEAKERS } from "../lib/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rise, South African Woman 2026 - GWFSN Women's Day Conference" },
      {
        name: "description",
        content:
          "A premium Women's Day experience at Royal Majestic Hotel, Rosebank on 8 August 2026.",
      },
      { property: "og:title", content: "Rise, South African Woman 2026" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const FEATURED = [
  {
    name: "Yolanda Cuba (CA)",
    role: "Deputy CEO MTN SA",
    image: speakerYolanda,
    accent: "#293dff",
    panelLabel: "SPEAKER",
    labelColor: "#293dff",
    bio: "Courage, calling and the confidence to move forward.",
  },
  {
    name: "Veronica Motloutsi",
    role: "Group Executive for Digital Transformation and Innovation (SEDFA)",
    image: speakerVeronica,
    accent: "#d9aeb0",
    panelLabel: "SPEAKER",
    labelColor: "#d9aeb0",
    bio: "Future-fit capability, adaptability and professional visibility.",
  },
  {
    name: "Joy Ogeh-Hutfield",
    role: "Keynote Speaker & Confidence Coach",
    image: speakerJoy,
    accent: "#ff7836",
    panelLabel: "SPEAKER",
    labelColor: "#ff7836",
    bio: "Self-mastery, authentic confidence and intentional growth.",
  },
  {
    name: "Dr. Ntombi Mnisi M.",
    role: "Founder / CEO",
    image: speakerNtombi,
    accent: "#c6c8d4",
    panelLabel: "SPEAKER",
    labelColor: "#c6c8d4",
    bio: "Honouring legacy, leading now and shaping the future.",
  },
  {
    name: "Rev. Dr. Sam Oye",
    role: "Founder / Lead Pastor, The Transforming Church",
    image: speakerSam,
    accent: "#7d5a4a",
    panelLabel: "SPEAKER",
    labelColor: "#49a8ff",
    bio: "The power of renewal, resilience, faith and purpose.",
  },
  {
    name: "Prophetess Bess Rhirando",
    role: "General Manager and Regional Talent Leader, MTN Group",
    image: speakerBess,
    accent: "#4b211f",
    panelLabel: "HOST",
    labelColor: "#8a6856",
    bio: "Our host, guiding the Rise experience from welcome to closing charge.",
  },
  {
    name: "Lauren Hutfield",
    role: "Youth Speaker",
    image: speakerLauren,
    accent: "#293dff",
    panelLabel: "SPEAKER",
    labelColor: "#9da7ff",
    bio: "Shaping the future young, African and unstoppable.",
  },
] as const;

function Index() {
  return (
    <div className="rise-home bg-[#f8f8f8] text-ink">
      <section className="relative isolate min-h-[620px] overflow-hidden bg-ink text-cream md:min-h-[680px]">
        <img
          src={heroVenue}
          alt="Royal Majestic Hotel ballroom"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-[#211864]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171044]/70 via-transparent to-[#171044]/15" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-24 md:min-h-[680px] md:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
              GWFSN presents - Women's Day 2026
            </p>
            <h1 className="max-w-4xl text-[2.8rem] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white min-[375px]:text-5xl sm:text-6xl md:text-8xl">
              Rise,
              <br />
              South African Woman <span className="text-[#d9ddff]">2026</span>
            </h1>
            <p className="mt-7 max-w-2xl text-sm font-medium uppercase leading-relaxed tracking-[0.17em] text-white/90 md:text-lg">
              A premium Women's Day experience at the five-star
              <br className="hidden md:block" /> Royal Majestic Hotel, Rosebank
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Link
                to="/register"
                className="flex items-center justify-center bg-[#293dff] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-1 sm:px-7 sm:text-xs"
              >
                Register Now
              </Link>
              <Link
                to="/programme"
                className="flex items-center justify-center bg-black px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-1 sm:px-7 sm:text-xs"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e7e7e7] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7 md:py-9">
          <p className="max-w-4xl text-sm font-semibold leading-relaxed tracking-[0.11em] text-[#293dff] md:text-base">
            A distinguished Women's Day symposium bringing together powerful voices in leadership,
            confidence, personal transformation and future-fit skills.
          </p>
          <div className="-mx-5 mt-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 text-sm text-[#313131] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-[auto_auto_1fr] md:gap-8 md:overflow-visible md:px-0 md:pb-0">
            <span className="min-w-[210px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              {EVENT.date}
            </span>
            <span className="min-w-[190px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              {EVENT.time}
            </span>
            <span className="min-w-[280px] snap-start border-l-2 border-[#293dff] bg-[#f8f8f8] px-4 py-3 md:min-w-0 md:border-0 md:bg-transparent md:p-0">
              {EVENT.venue}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#293dff]">
            The women shaping the room
          </p>
          <h2 className="mt-5 text-6xl font-light uppercase leading-[0.88] tracking-[-0.05em] text-[#293dff] sm:text-7xl">
            Featuring
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-[#525252]">
            An intergenerational line-up of leaders, builders and change-makers gathered to help
            women honour the past, own the present and shape the future.
          </p>
          <Link
            to="/speakers"
            className="mt-8 inline-flex border-b-2 border-[#293dff] pb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#293dff] hover:border-black hover:text-black"
          >
            Meet every speaker
          </Link>
        </div>

        <div className="space-y-0">
          {FEATURED.map((speaker, index) => (
            <FeaturedTile key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#293dff]">
              A day with purpose
            </p>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[#202020] md:text-6xl">
              Make room to rise.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#525252]">
              Come for the voices. Leave with practical confidence, renewed purpose and a circle of
              women moving forward together.
            </p>
          </div>
          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {HIGHLIGHTS.slice(0, 6).map((highlight, index) => (
              <div
                key={highlight.title}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none"
              >
                <HighlightFlip index={index} title={highlight.title} body={highlight.body} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9da7ff]">
                Programme journey
              </p>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Six movements. One rising.
              </h2>
            </div>
            <Link
              to="/programme"
              className="border border-white/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
            >
              Full programme
            </Link>
          </div>
          <ol className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {PROGRAMME.map((item, index) => (
              <li
                key={item.title}
                className="w-[82vw] max-w-[320px] shrink-0 snap-center border border-white/15 p-6 transition-colors hover:border-[#293dff] md:w-auto md:max-w-none"
              >
                <span className="text-sm font-bold text-[#9da7ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-2xl font-medium uppercase tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#293dff] px-5 py-16 text-white md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Seats are limited
            </p>
            <h2 className="mt-4 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-8xl">
              Reserve your place.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
              {EVENT.date} - {EVENT.time}. Your {EVENT.price} contribution is allocated to food and
              refreshments at the venue restaurant.
            </p>
          </div>
          <Link
            to="/register"
            className="inline-flex shrink-0 bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-1"
          >
            Register now
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeaturedTile({ speaker, index }: { speaker: (typeof FEATURED)[number]; index: number }) {
  const guide = SPEAKERS.find((item) =>
    speaker.name.includes("Yolanda") ? item.name.startsWith("Yolanda") :
    speaker.name.includes("Veronica") ? item.name.startsWith("Veronica") :
    speaker.name.includes("Joy") ? item.name.startsWith("Joy") :
    speaker.name.includes("Ntombi") ? item.name.startsWith("Dr. Ntombi") :
    speaker.name.includes("Sam") ? item.name.startsWith("Rev Sam") :
    speaker.name.includes("Bess") ? item.name.startsWith("Bess") :
    item.name.startsWith("Lauren")
  );
  return (
    <div className="focus-within:z-10">
      <div className="grid grid-cols-2 border-b-2 border-white bg-white" aria-hidden="true">
        <div
          className={index === 0 ? "h-14 md:h-20" : "aspect-square"}
          style={{ backgroundColor: speaker.accent }}
        />
        <div className={index === 0 ? "h-14 bg-[#f8f8f8] md:h-20" : "aspect-square bg-[#f8f8f8]"} />
      </div>
      <div className="group perspective-1000 aspect-[1.18/1] w-full sm:aspect-[2/1]">
        <div
          tabIndex={0}
          className="flip-inner relative h-full w-full preserve-3d outline-none transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-y-180 group-focus-within:rotate-y-180"
        >
          <div className="absolute inset-0 grid grid-cols-2 backface-hidden overflow-hidden bg-black">
            <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
            <div className="relative flex flex-col items-center justify-center border-l-2 border-white p-4 text-center text-white sm:p-6 md:p-8">
              <div className="mt-2 md:mt-4">
                <h3 className="text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-xl md:text-2xl">
                  {speaker.name}
                </h3>
                <p
                  className="mx-auto mt-3 max-w-[17rem] text-xs font-semibold leading-snug sm:text-sm md:text-base"
                  style={{ color: speaker.labelColor }}
                >
                  {guide?.role ?? speaker.role}
                </p>
              </div>
              <span className="absolute bottom-3 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35 md:bottom-5 md:text-[9px]">
                <span className="sm:hidden">Tap to flip</span>
                <span className="hidden sm:inline">Hover to flip</span>
              </span>
            </div>
          </div>
          <div
            className="absolute inset-0 rotate-y-180 backface-hidden p-7 text-white md:p-9"
            style={{ backgroundColor: speaker.accent }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
              Rise 2026 / {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-5 max-w-lg text-3xl font-semibold uppercase leading-tight tracking-[-0.03em]">
              {speaker.name}
            </h3>
            <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-white/90">Session - {guide?.session}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{guide?.bio ?? speaker.bio}</p>
            <span className="absolute bottom-7 right-7 text-4xl font-light text-white/60">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HighlightFlip({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <div className="group perspective-1000 h-52 w-full">
      <div
        tabIndex={0}
        className="flip-inner relative h-full w-full preserve-3d outline-none transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-y-180 group-focus-within:rotate-y-180"
      >
        <article className="absolute inset-0 backface-hidden border border-[#dedede] bg-[#f8f8f8] p-6">
          <span className="text-3xl font-light text-[#293dff]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-8 max-w-xs text-xl font-semibold uppercase leading-tight tracking-[-0.02em]">
            {title}
          </h3>
          <p className="absolute bottom-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#293dff]">
            Hover to explore
          </p>
        </article>
        <article className="absolute inset-0 rotate-y-180 backface-hidden bg-[#293dff] p-6 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
            Highlight {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-5 text-xl font-semibold uppercase leading-tight">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/90">{body}</p>
        </article>
      </div>
    </div>
  );
}
