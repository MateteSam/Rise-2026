import spkSamoye from "../assets/spk-samoye.jpg.asset.json";
import spkYolanda from "../assets/spk-yolanda.jpg.asset.json";
import spkVeronica from "../assets/spk-veronica.jpg.asset.json";
import spkJoy from "../assets/spk-joy.jpg.asset.json";
import spkBess from "../assets/spk-bess.jpg.asset.json";
import spkNtombi from "../assets/spk-ntombi.jpg.asset.json";
import type { Speaker } from "../lib/content";

const IMAGES: Record<string, string> = {
  "spk-samoye": spkSamoye.url,
  "spk-yolanda": spkYolanda.url,
  "spk-veronica": spkVeronica.url,
  "spk-joy": spkJoy.url,
  "spk-bess": spkBess.url,
  "spk-ntombi": spkNtombi.url,
};

export function SpeakerFlipCard({ speaker }: { speaker: Speaker }) {
  const img = speaker.image ? IMAGES[speaker.image] : undefined;
  const isViolet = speaker.accent === "violet";
  const initials = speaker.name.split(" ").filter(Boolean).map((n) => n[0]).slice(0, 2).join("");

  return (
    <div className="group perspective-1000 h-[420px] w-full [&:hover_.flip-inner]:rotate-y-180 [&:focus-within_.flip-inner]:rotate-y-180">
      <div
        tabIndex={0}
        className="flip-inner relative h-full w-full preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] outline-none"
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {img ? (
            <img src={img} alt={speaker.name} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className={`absolute inset-0 flex items-center justify-center ${isViolet ? "bg-violet/10" : "bg-orange/10"}`}>
              <span className="font-serif text-8xl text-ink">{initials}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className={`mb-2 inline-block h-1 w-10 rounded-full ${isViolet ? "bg-orange" : "bg-violet"}`} />
            <h3 className="font-serif text-2xl leading-tight text-cream">{speaker.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-cream/80">{speaker.role}</p>
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink opacity-0 transition-opacity group-hover:opacity-100">
            Hover to flip
          </div>
        </div>

        {/* BACK */}
        <div className={`absolute inset-0 rotate-y-180 backface-hidden overflow-hidden rounded-2xl p-6 text-cream ${isViolet ? "bg-violet" : "bg-orange"}`}>
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cream/80">
              {speaker.affiliation ?? speaker.role}
            </p>
            <h3 className="mt-1 font-serif text-xl leading-tight">{speaker.name}</h3>
            <p className="mt-2 font-serif text-sm italic text-cream/90">{speaker.session}</p>
            <p className="mt-3 text-xs leading-relaxed text-cream/90 line-clamp-6">{speaker.bio}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {speaker.themes.slice(0, 4).map((t) => (
                <li key={t} className="rounded-full border border-cream/30 px-2 py-0.5 text-[10px] text-cream">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}