import { Link } from "@tanstack/react-router";
import { FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import gwfsnIcon from "../assets/gwfsn-icon-glow.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101010] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[#1a171f] shadow-[0_0_30px_rgba(133,72,255,0.22)] ring-1 ring-white/10">
              <img src={gwfsnIcon} alt="" className="h-[78%] w-[86%] object-contain" />
            </span>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold tracking-[-0.035em] text-white">GWFSN</span>
                <span className="text-sm font-medium text-white/55">Rise 2026</span>
              </div>
              <p className="mt-1 text-xs text-white/65">Women's Future Skills Network</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            An African-rooted, internationally relevant platform preparing women and girls for the
            changing world of work.
          </p>
          <div className="mt-6 flex items-center gap-3" aria-label="Social media profiles">
            <span
              role="img"
              aria-label="TikTok profile link will be added soon"
              title="TikTok profile link will be added soon"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition-colors hover:border-[#8548ff] hover:bg-[#8548ff]"
            >
              <FaTiktok />
            </span>
            <span
              role="img"
              aria-label="LinkedIn profile link will be added soon"
              title="LinkedIn profile link will be added soon"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white transition-colors hover:border-[#2977c9] hover:bg-[#2977c9]"
            >
              <FaLinkedinIn />
            </span>
            <p className="ml-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Follow the rise
            </p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9da7ff]">
            Explore
          </p>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <Link to="/programme" className="hover:text-white">
                Programme
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="hover:text-white">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/attend" className="hover:text-white">
                Attend
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9da7ff]">
            Event
          </p>
          <ul className="space-y-2 text-sm text-white/75">
            <li>Sat, 8 August 2026</li>
            <li>2:00 - 7:00 PM SAST</li>
            <li>The Royal Majestic Hotel</li>
            <li>Rosebank, Johannesburg</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>(c) 2026 Global Women's Future Skills Network. All rights reserved.</p>
          <p>Honour the Past - Own the Present - Shape the Future</p>
        </div>
      </div>
    </footer>
  );
}
