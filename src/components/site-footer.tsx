import { Link } from "@tanstack/react-router";
import logoAsset from "../assets/gwfsn-logo.jpeg.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="GWFSN" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-serif text-xl leading-tight">Global Women's Future Skills Network</p>
              <p className="text-sm text-cream/60 italic">Learn · Lead · Earn · Flourish</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            An African-rooted, internationally relevant platform preparing women and girls
            for the changing world of work.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange">Explore</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/programme" className="hover:text-orange">Programme</Link></li>
            <li><Link to="/speakers" className="hover:text-orange">Speakers</Link></li>
            <li><Link to="/attend" className="hover:text-orange">Attend</Link></li>
            <li><Link to="/register" className="hover:text-orange">Register</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange">Event</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Sat, 8 August 2026</li>
            <li>2:00 – 7:00 PM SAST</li>
            <li>The Royal Majestic Hotel</li>
            <li>Rosebank, Johannesburg</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© 2026 Global Women's Future Skills Network. All rights reserved.</p>
          <p>Honour the Past · Own the Present · Shape the Future</p>
        </div>
      </div>
    </footer>
  );
}