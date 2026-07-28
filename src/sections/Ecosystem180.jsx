import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Megaphone, Handshake, BookOpen, Factory, BadgeCheck, Globe2 } from "lucide-react";
import Reveal from "../components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  {
    n: "01",
    icon: Megaphone,
    title: "Export Awareness",
    color: "#c9a24b",
    text: "Manufacturers learn why exporting matters, what global buyers expect, and where the E-Ston industry stands today.",
  },
  {
    n: "02",
    icon: Handshake,
    title: "Business Integration",
    color: "#b98a4e",
    text: "Manufacturers, suppliers, architects and exporters are brought onto one ecosystem — a single, connected network.",
  },
  {
    n: "03",
    icon: BookOpen,
    title: "Knowledge Development",
    color: "#a67a52",
    text: "Deep training on documentation, pricing, compliance, international payments and risk management.",
  },
  {
    n: "04",
    icon: Factory,
    title: "Factory Improvement",
    color: "#8f7a63",
    text: "Advanced machinery, R&D, quality testing and automation transform the factory into a world-class facility.",
  },
  {
    n: "05",
    icon: BadgeCheck,
    title: "Export Ready",
    color: "#7c8a7a",
    text: "Brand identity, digital presence and certification come together — the business is ready to be seen by the world.",
  },
  {
    n: "06",
    icon: Globe2,
    title: "International Launch",
    color: "#5f8fa0",
    text: "Buyer matchmaking, global exhibitions and long-term partnerships carry the brand from India to the world.",
  },
];

export default function Ecosystem180() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const scrollLength = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${scrollLength + window.innerHeight * 0.4}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray(".phase-panel").forEach((panel) => {
        gsap.fromTo(
          panel.querySelector(".panel-inner"),
          { opacity: 0.35, scale: 0.94 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 85%",
              end: "left 35%",
              scrub: true,
            },
          }
        );
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ecosystem-180" ref={wrapRef} className="relative overflow-hidden bg-[var(--color-obsidian)]">
      <div className="flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 pt-10 md:px-10">
          <Reveal>
            <p className="eyebrow mb-4">The 180-Day Export Ecosystem</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl text-[var(--color-bone)] md:text-5xl">
              From factory floor to <span className="gold-gradient-text italic">global brand.</span>
            </h2>
          </Reveal>
        </div>

        <div ref={trackRef} className="mt-10 flex w-max gap-6 px-6 will-change-transform md:mt-16 md:gap-10 md:px-10">
          {PHASES.map((p) => (
            <div key={p.n} className="phase-panel flex w-[85vw] shrink-0 items-center sm:w-[60vw] md:w-[38vw] lg:w-[30vw]">
              <div
                className="panel-inner glass relative flex h-[52vh] w-full flex-col justify-between rounded-3xl p-8 md:h-[56vh]"
                style={{ boxShadow: `0 0 60px -25px ${p.color}80` }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-5xl text-[var(--color-bone)]/10 md:text-6xl">{p.n}</span>
                  <p.icon size={30} style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[var(--color-bone)] md:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-bone)]/65">{p.text}</p>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: `${((PHASES.indexOf(p) + 1) / PHASES.length) * 100}%`, background: p.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
