import { Mountain, Gem, Layers, Building2, Sofa, Cog, Wheat, Beef, Pickaxe, Home } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const INDUSTRIES = [
  { icon: Mountain, label: "Stone" },
  { icon: Gem, label: "Granite" },
  { icon: Layers, label: "Marble" },
  { icon: Gem, label: "Quartz" },
  { icon: Building2, label: "Construction" },
  { icon: Sofa, label: "Furniture" },
  { icon: Cog, label: "Engineering" },
  { icon: Wheat, label: "Agriculture" },
  { icon: Beef, label: "Food" },
  { icon: Pickaxe, label: "Mining" },
  { icon: Home, label: "Home Decor" },
];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-[var(--color-obsidian)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for makers of"
          italic="every material."
          description="Rooted in the E-Ston industry, built to carry any Indian manufacturer that's ready for the world."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.label + i} delay={(i % 6) * 0.05} y={24}>
              <div
                data-cursor-hover
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-slab)]/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/60 hover:bg-[var(--color-slab)]"
              >
                <ind.icon
                  size={28}
                  className="text-[var(--color-bone)]/50 transition-colors duration-300 group-hover:text-[var(--color-gold-bright)]"
                />
                <span className="text-center text-xs uppercase tracking-wide text-[var(--color-bone)]/60 group-hover:text-[var(--color-bone)]">
                  {ind.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
