import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Factory, Truck, Compass, Building2, Ship, Landmark, PiggyBank, Cpu, Handshake, Users,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  { icon: Factory, label: "Manufacturers" },
  { icon: Truck, label: "Suppliers" },
  { icon: Compass, label: "Architects" },
  { icon: Building2, label: "Developers" },
  { icon: Ship, label: "Exporters" },
  { icon: Handshake, label: "Importers" },
  { icon: PiggyBank, label: "Banks" },
  { icon: Users, label: "Investors" },
  { icon: Landmark, label: "Government" },
  { icon: Cpu, label: "Technology" },
];

export default function EwalaEcosystemWheel() {
  const wheelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".wheel-lines", {
        rotate: 30,
        ease: "none",
        scrollTrigger: {
          trigger: wheelRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, wheelRef);
    return () => ctx.revert();
  }, []);

  const R = 42;
  const cx = 50;
  const cy = 50;

  return (
    <section className="relative overflow-hidden bg-[var(--color-obsidian)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          align="center"
          eyebrow="The Ewala Ecosystem"
          title="Everything connected."
          italic="Everyone included."
          description="One platform where every stakeholder in the export journey works from the same map."
        />

        <div ref={wheelRef} className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
          <svg viewBox="0 0 100 100" className="wheel-lines absolute inset-0 h-full w-full">
            {NODES.map((_, i) => {
              const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + R * Math.cos(angle);
              const y = cy + R * Math.sin(angle);
              return (
                <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(201,162,75,0.25)" strokeWidth="0.3" />
              );
            })}
            <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(201,162,75,0.2)" strokeWidth="0.3" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass flex h-28 w-28 flex-col items-center justify-center rounded-full text-center md:h-36 md:w-36">
              <span className="font-display text-lg italic text-[var(--color-gold-bright)] md:text-2xl">Ewala</span>
              <span className="text-[10px] uppercase tracking-wide text-[var(--color-bone)]/60">Eternal</span>
            </div>
          </div>

          <div className="wheel-nodes absolute inset-0">
            {NODES.map((n, i) => {
              const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const left = cx + R * Math.cos(angle);
              const top = cy + R * Math.sin(angle);
              return (
                <div
                  key={n.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <div className="glass flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16">
                    <n.icon size={20} className="text-[var(--color-gold-bright)]" />
                  </div>
                  <span className="whitespace-nowrap text-[10px] uppercase tracking-wide text-[var(--color-bone)]/60">
                    {n.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
