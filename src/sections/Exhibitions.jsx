import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Plane, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const PINS = [
  { id: "china", label: "China", x: 74, y: 36, event: "Build Guanxi 2026 (with ACETECH)", detail: "A 180-day India entry & expansion program connecting Chinese suppliers with India's fastest-growing construction market." },
  { id: "italy", label: "Italy", x: 49, y: 30, event: "Marmomac, Verona — 22–25 Sept 2026", detail: "The world's biggest stone + design + technology trade fair. Global exposure, product innovation and buyer networking." },
  { id: "usa", label: "USA", x: 19, y: 34, event: "North America Buyer Circuit", detail: "Direct connects with importers, distributors and design houses across the US surface and construction market." },
  { id: "russia", label: "Russia", x: 58, y: 20, event: "Eurasia Trade Corridor", detail: "Building long-term distribution partnerships across the Russian and CIS construction sector." },
  { id: "middle-east", label: "Middle East", x: 55, y: 42, event: "Gulf Infrastructure Program", detail: "Fast-tracking entry into one of the world's largest active construction and real-estate markets." },
  { id: "india", label: "India", x: 63, y: 46, event: "Build Guanxi & GIANT Pavilion", detail: "Home base — where the E-Ston ecosystem is manufactured, trained and made export-ready." },
];

export default function Exhibitions() {
  const [active, setActive] = useState(null);
  const pin = PINS.find((p) => p.id === active);

  return (
    <section id="exhibitions" className="relative bg-[var(--color-navy)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Global Exhibitions"
          title="We take your brand"
          italic="on the road."
          description="From Verona to the Gulf, Ewala Eternal leads business delegations to the exhibitions that matter — tap a region to see what's next."
        />

        <Reveal delay={0.1} className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-slab)]/40">
          <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full opacity-[0.14]" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M4 0H0V4" fill="none" stroke="#c9a24b" strokeWidth="0.15" />
              </pattern>
            </defs>
            <rect width="100" height="56" fill="url(#grid)" />
          </svg>

          {/* flight arcs from India to each region */}
          <svg viewBox="0 0 100 56" className="absolute inset-0 h-full w-full">
            {PINS.filter((p) => p.id !== "india").map((p) => {
              const india = PINS.find((x) => x.id === "india");
              const mx = (india.x + p.x) / 2;
              const my = Math.min(india.y, p.y) - 10;
              return (
                <path
                  key={p.id}
                  d={`M ${india.x} ${india.y} Q ${mx} ${my} ${p.x} ${p.y}`}
                  fill="none"
                  stroke={active === p.id ? "#e6c56e" : "rgba(201,162,75,0.35)"}
                  strokeWidth={active === p.id ? 0.5 : 0.25}
                  strokeDasharray="1.4 1.4"
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {PINS.map((p) => (
            <button
              key={p.id}
              data-cursor-hover
              onClick={() => setActive(active === p.id ? null : p.id)}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span className="relative flex items-center justify-center">
                <span
                  className={`absolute h-8 w-8 rounded-full bg-[var(--color-gold)]/30 ${
                    active === p.id ? "animate-ping" : ""
                  }`}
                />
                <MapPin
                  size={active === p.id ? 26 : 20}
                  className={`relative transition-all duration-300 ${
                    active === p.id ? "text-[var(--color-gold-bright)]" : "text-[var(--color-gold)]/70"
                  }`}
                  fill={active === p.id ? "#e6c56e" : "none"}
                />
              </span>
              <span className="mt-1 block whitespace-nowrap text-center text-[10px] uppercase tracking-wide text-[var(--color-bone)]/60">
                {p.label}
              </span>
            </button>
          ))}

          <AnimatePresence>
            {pin && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                className="glass absolute bottom-4 right-4 w-[min(90%,320px)] rounded-2xl p-5"
              >
                <button onClick={() => setActive(null)} className="absolute right-4 top-4 text-[var(--color-bone)]/50 hover:text-[var(--color-bone)]">
                  <X size={16} />
                </button>
                <div className="flex items-center gap-2 text-[var(--color-gold-bright)]">
                  <Plane size={16} />
                  <span className="text-xs uppercase tracking-wide">{pin.label}</span>
                </div>
                <p className="mt-2 font-display text-lg text-[var(--color-bone)]">{pin.event}</p>
                <p className="mt-2 text-sm text-[var(--color-bone)]/60">{pin.detail}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
