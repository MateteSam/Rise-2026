import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export function MobileActionDock() {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#111015]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-white shadow-[0_-12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 px-1">
          <CalendarDays size={18} className="shrink-0 text-[#9da7ff]" />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              Women's Day 2026
            </p>
            <p className="truncate text-xs font-semibold">08 Aug · Rosebank</p>
          </div>
        </div>
        <Link
          to="/register"
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#8548ff] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] shadow-[0_8px_22px_rgba(133,72,255,0.32)]"
        >
          Reserve
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
