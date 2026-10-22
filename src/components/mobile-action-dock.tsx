import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function MobileActionDock() {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#111015]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-white shadow-[0_-12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 px-1">
          <Sparkles size={18} className="shrink-0 text-[#9da7ff]" />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-[#9da7ff]">
              GWFSN Network
            </p>
            <p className="truncate text-xs font-semibold text-white/90">
              Shaping women's future skills
            </p>
          </div>
        </div>
        <Link
          to="/get-involved"
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#8548ff] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_22px_rgba(133,72,255,0.32)] transition-transform active:scale-95"
        >
          Get involved
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
