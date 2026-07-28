import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(barRef.current, { scaleX: self.progress });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent">
      <div ref={barRef} className="h-full w-full origin-left bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-bright)]" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}
