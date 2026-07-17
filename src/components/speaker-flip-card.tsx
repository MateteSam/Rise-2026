import spkSamoye from "../assets/speaker-sam-oye.jpg";
import spkYolanda from "../assets/speaker-yolanda.png";
import spkVeronica from "../assets/speaker-veronica.png";
import spkBess from "../assets/speaker-bess.png";
import spkNtombi from "../assets/speaker-ntombi.png";
import spkJoy from "../assets/speaker-joy.png";
import spkLauren from "../assets/speaker-lauren-hutfield.jpg";
import type { Speaker } from "../lib/content";

const IMAGES: Record<string, string> = {
  "spk-samoye": spkSamoye,
  "spk-yolanda": spkYolanda,
  "spk-veronica": spkVeronica,
  "spk-bess": spkBess,
  "spk-ntombi": spkNtombi,
  "spk-joy": spkJoy,
  "spk-lauren-hutfield": spkLauren,
};

export function SpeakerFlipCard({ speaker }: { speaker: Speaker }) {
  const img = speaker.image ? IMAGES[speaker.image] : undefined;
  const isViolet = speaker.accent === "violet";
  const initials = speaker.name
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group perspective-1000 h-[390px] w-full sm:h-[420px]">
      <div
        tabIndex={0}
        className="flip-inner relative h-full w-full preserve-3d outline-none transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:rotate-y-180 group-focus-within:rotate-y-180"
      >
        <div className="absolute inset-0 backface-hidden overflow-hidden border border-black/10 bg-white shadow-sm">
          {img ? (
            <img
              src={img}
              alt={speaker.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className={`absolute inset-0 flex items-center justify-center ${isViolet ? "bg-[#293dff]/10" : "bg-orange/10"}`}
            >
              <span className="text-7xl font-light text-[#293dff]">{initials}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <div className="mb-2 h-1 w-10 bg-[#9da7ff]" />
            <h3 className="text-2xl font-semibold uppercase leading-tight tracking-[-0.03em]">
              {speaker.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/75">{speaker.role}</p>
          </div>
        </div>
        <div
          className={`absolute inset-0 rotate-y-180 backface-hidden overflow-hidden p-6 text-white ${isViolet ? "bg-[#293dff]" : "bg-[#101010]"}`}
        >
          <div className="flex h-full flex-col">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
              {speaker.affiliation ?? speaker.role}
            </p>
            <h3 className="mt-2 text-xl font-semibold uppercase leading-tight">{speaker.name}</h3>
            <p className="mt-3 text-sm italic text-white/85">{speaker.session}</p>
            <p className="mt-3 line-clamp-6 text-xs leading-relaxed text-white/85">{speaker.bio}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {speaker.themes.slice(0, 4).map((theme) => (
                <li key={theme} className="border border-white/30 px-2 py-0.5 text-[10px]">
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
