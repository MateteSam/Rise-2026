import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import gwfsnIcon from "../assets/gwfsn-icon-glow.png";
import { GWFSN_INFO, SOCIAL_LINKS } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101010] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:gap-8 lg:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3.5">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#1a171f] shadow-[0_0_30px_rgba(133,72,255,0.22)] ring-1 ring-white/10">
              <img src={gwfsnIcon} alt="" className="h-[78%] w-[86%] object-contain" />
            </span>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold tracking-[-0.035em] text-white">
                  GWFSN
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9da7ff]">
                  Global Network
                </span>
              </div>
              <p className="text-xs text-white/70">{GWFSN_INFO.name}</p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {GWFSN_INFO.tagline}
          </p>

          <p className="mt-3 text-xs font-semibold tracking-wider uppercase text-[#9da7ff]">
            Learn • Lead • Earn • Flourish
          </p>

          <div className="mt-6 space-y-2 text-xs text-white/60">
            <div>
              Email:{" "}
              <a href={`mailto:${GWFSN_INFO.email}`} className="text-white hover:underline">
                {GWFSN_INFO.email}
              </a>
            </div>
            <div>
              Telephone:{" "}
              <a
                href={`tel:${GWFSN_INFO.phone.replace(/\s+/g, "")}`}
                className="text-white hover:underline"
              >
                {GWFSN_INFO.phone}
              </a>
            </div>
            <div className="text-white/50">{GWFSN_INFO.address}</div>
          </div>

          <div className="mt-6 flex items-center gap-3" aria-label="Social media profiles">
            <a
              href={SOCIAL_LINKS.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={SOCIAL_LINKS.facebook.label}
              title={SOCIAL_LINKS.facebook.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base text-white transition-colors hover:border-[#1877f2] hover:bg-[#1877f2]"
            >
              <FaFacebookF />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={SOCIAL_LINKS.tiktok.label}
              title={SOCIAL_LINKS.tiktok.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base text-white transition-colors hover:border-[#e5b842] hover:bg-[#e5b842] hover:text-[#0d1527]"
            >
              <FaTiktok />
            </a>
            <span
              role="img"
              aria-label="LinkedIn profile link will be added soon"
              title="LinkedIn profile link will be added soon"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base text-white transition-colors hover:border-[#2977c9] hover:bg-[#2977c9]"
            >
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9da7ff]">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About GWFSN
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="transition-colors hover:text-white">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/barometer" className="transition-colors hover:text-white">
                Barometer
              </Link>
            </li>
            <li>
              <Link to="/magazine" className="transition-colors hover:text-white">
                RISE AFRICAN WOMAN Magazine
              </Link>
            </li>
            <li>
              <Link to="/events" className="transition-colors hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link to="/insights" className="transition-colors hover:text-white">
                Insights
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9da7ff]">
            Engagement & Archive
          </p>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/get-involved" className="font-semibold text-[#9da7ff] hover:underline">
                Get Involved →
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact GWFSN
              </Link>
            </li>
            <li>
              <Link to="/events" className="transition-colors hover:text-white">
                RISE AFRICA WOMAN 2027
              </Link>
            </li>
            <li className="pt-2 text-xs uppercase tracking-wider text-white/40">Past Events Archive</li>
            <li>
              <Link to="/programme" className="text-xs text-white/60 hover:text-white">
                2026 Programme Journey
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="text-xs text-white/60 hover:text-white">
                2026 Speakers Directory
              </Link>
            </li>
            <li>
              <Link to="/attend" className="text-xs text-white/60 hover:text-white">
                2026 Rosebank Symposium Highlights
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-white/45 md:flex-row md:items-center lg:px-8">
          <p>© 2026 Global Women's Future Skills Network. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-white/55">
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white">
              Privacy & Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
