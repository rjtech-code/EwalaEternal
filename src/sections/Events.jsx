import { Calendar, MapPin, Clock } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

const EVENTS = [
  {
    tag: "Phase 1 · Export Awareness",
    title: "E For Me — Export Awareness Workshop",
    date: "5 August 2026",
    time: "10:00 AM – 6:00 PM",
    venue: "Hotel Park Prime, C-Scheme, Jaipur",
    org: "Organized with FIEO (Federation of Indian Export Organisations)",
  },
  {
    tag: "Phase 2 · Industry Consolidation",
    title: "E-Ston Masterclass & Industry Consolidation",
    date: "21 August 2026",
    time: "Full Day",
    venue: "E-Ston Connect Program",
    org: "Consolidating every association and vertical of the E-Ston industry onto one platform.",
  },
  {
    tag: "Global Delegation",
    title: "Marmomac — Verona, Italy 2026",
    date: "22–25 September 2026",
    time: "Full Day",
    venue: "Verona Exhibition Centre, Italy",
    org: "The world's biggest stone + design + technology trade fair.",
  },
];

export default function Events() {
  return (
    <section className="relative bg-[var(--color-obsidian)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Event Calendar"
          title="Where we'll be,"
          italic="and where you should too."
          description="Workshops, masterclasses and global trade fairs — each one a checkpoint on the 180-day journey."
        />

        <div className="mt-16 space-y-5">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="glass flex flex-col gap-6 rounded-2xl p-7 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="eyebrow">{e.tag}</p>
                  <h3 className="mt-2 font-display text-xl text-[var(--color-bone)] md:text-2xl">{e.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-bone)]/55">{e.org}</p>
                </div>
                <div className="flex shrink-0 flex-col gap-2 border-t border-[var(--color-line)] pt-4 text-sm text-[var(--color-bone)]/70 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-[var(--color-gold)]" /> {e.date}</span>
                  <span className="flex items-center gap-2"><Clock size={14} className="text-[var(--color-gold)]" /> {e.time}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-[var(--color-gold)]" /> {e.venue}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <MagneticButton variant="outline">Register For an Event</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
