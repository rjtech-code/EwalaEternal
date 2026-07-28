import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  "Awareness", "Learning", "Planning", "Factory", "Brand", "Export Ready", "Buyer", "Orders", "Expansion",
];

export default function SuccessRoadmap() {
  const ref = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 0.6,
      onUpdate: (self) => {
        path.style.strokeDashoffset = length * (1 - self.progress);
      },
    });
    return () => st.kill();
  }, []);

  return (
    <section id="roadmap" ref={ref} className="relative bg-[var(--color-navy)] py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          align="center"
          eyebrow="Success Roadmap"
          title="Every export success"
          italic="follows this line."
          description="Nine stages, one continuous path — the same journey every export-ready manufacturer walks with us."
        />

        <div className="relative mt-20">
          <svg viewBox="0 0 20 900" className="absolute left-1/2 h-full w-6 -translate-x-1/2 md:w-10" preserveAspectRatio="none">
            <path d="M10 0 L10 900" stroke="rgba(255,255,255,0.06)" strokeWidth="1.4" />
            <path ref={pathRef} d="M10 0 L10 900" stroke="#c9a24b" strokeWidth="1.4" strokeLinecap="round" />
          </svg>

          <div className="relative flex flex-col gap-4 py-4">
            {STEPS.map((s, i) => (
              <Reveal key={s} delay={0} y={20} className={`relative flex w-full items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <span className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--color-gold-bright)] shadow-[0_0_12px_2px_rgba(230,197,110,0.6)]" />
                <div className={`w-[46%] ${i % 2 === 0 ? "text-right pr-6 md:pr-10" : "text-left pl-6 md:pl-10"}`}>
                  <span className="font-mono text-xs text-[var(--color-gold)]">0{i + 1}</span>
                  <h3 className="font-display text-xl text-[var(--color-bone)] md:text-2xl">{s}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
