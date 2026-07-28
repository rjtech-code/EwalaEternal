import { Target, Eye, Gem } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const CARDS = [
  {
    icon: Target,
    title: "Mission",
    text: "Make exports simple, practical and accessible for every manufacturer in the E-Ston industry — starting with a single first order.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To build the world's largest E-Ston ecosystem by connecting every stakeholder through knowledge, manufacturing, innovation, trade and global business opportunities.",
  },
  {
    icon: Gem,
    title: "Core Values",
    text: "One partner, one ecosystem — global market intelligence, long-term partnership, and end-to-end support from documentation to delivery.",
  },
];

const TIMELINE = [
  { year: "Formation", text: "Ewala Eternal Pvt. Ltd. founded as an export-promotion partner for India's E-Ston industry." },
  { year: "E-Ston Ecosystem", text: "Manufacturers, suppliers, architects, exporters, banks and government brought onto one platform." },
  { year: "E For Me", text: "Campaign launched — Export for Me, Export for Everyone, Export Everywhere." },
  { year: "180-Day Mission", text: "The structured 6-phase export-readiness journey opens to the whole industry." },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative bg-[var(--color-navy)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Who We Are"
          title="One partner."
          italic="One ecosystem."
          description="Ewala Eternal Pvt. Ltd. is building business beyond borders — connecting India's E-Ston (natural stone) manufacturers to global markets through infrastructure, network, marketing and service."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="glass rounded-2xl p-8">
              <c.icon className="text-[var(--color-gold-bright)]" size={28} />
              <h3 className="mt-6 font-display text-xl text-[var(--color-bone)]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-bone)]/65">{c.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
          <Reveal>
            <h3 className="font-display text-2xl text-[var(--color-bone)]">Our journey, so far</h3>
            <p className="mt-3 text-sm text-[var(--color-bone)]/60">
              A single ecosystem, growing in stages — the same thread that runs through the 180-day
              program itself.
            </p>
          </Reveal>
          <div className="space-y-0">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08} className="flex gap-6 border-t border-[var(--color-line)] py-6 first:border-t-0 md:first:border-t">
                <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-wide text-[var(--color-gold)]">
                  {t.year}
                </span>
                <p className="text-sm text-[var(--color-bone)]/70">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
