import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import gwfsnIcon from "../assets/gwfsn-icon-glow.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/programme", label: "Programme" },
  { to: "/speakers", label: "Speakers" },
  { to: "/attend", label: "Attend" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[60] border-b border-black/10 bg-[#f4f2f1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-5 md:gap-6 md:py-3">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Global Women's Future Skills Network home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#17151b] shadow-[0_0_24px_rgba(133,72,255,0.2)] ring-1 ring-black/10 transition-transform group-hover:rotate-3 group-hover:scale-105 md:h-12 md:w-12">
            <img src={gwfsnIcon} alt="" className="h-[78%] w-[86%] object-contain" />
          </span>
          <span className="flex items-baseline gap-2 whitespace-nowrap">
            <span className="text-sm font-extrabold tracking-[-0.035em] text-[#17161c] md:text-base">
              GWFSN
            </span>
            <span className="hidden text-sm font-medium text-[#696779] sm:inline">Rise 2026</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#626071] md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-[#17161c]" }}
              className="transition-colors hover:text-[#8548ff]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/register"
          className="hidden items-center rounded-full bg-[#8548ff] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(133,72,255,0.22)] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Reserve seat
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17161c] text-white shadow-lg md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full z-50 h-[calc(100dvh-61px)] overflow-y-auto bg-[#111015] px-5 pb-28 pt-8 text-white transition-all duration-300 md:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9da7ff]">
          Explore Rise 2026
        </p>
        <nav className="mt-6 divide-y divide-white/10">
          {nav.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em]"
            >
              <span>{item.label}</span>
              <span className="text-xs font-medium text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
        <div className="mt-8 rounded-3xl bg-[#293dff] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/65">
            Saturday, 8 August 2026
          </p>
          <p className="mt-2 text-lg font-semibold">Royal Majestic Hotel Rosebank</p>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#17161c]"
          >
            Reserve your seat
          </Link>
        </div>
      </div>
    </header>
  );
}
