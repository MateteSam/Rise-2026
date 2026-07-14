import { Link } from "@tanstack/react-router";
import logoAsset from "../assets/gwfsn-logo.jpeg.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/programme", label: "Programme" },
  { to: "/speakers", label: "Speakers" },
  { to: "/attend", label: "Attend" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Global Women's Future Skills Network" className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            GWFSN
            <span className="ml-2 font-normal text-muted-foreground">Rise 2026</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-ink" }}
              className="transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/register"
          className="inline-flex items-center rounded-full bg-violet px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Reserve seat
        </Link>
      </div>
    </header>
  );
}