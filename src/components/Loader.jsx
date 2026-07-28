import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader({ onDone }) {
  const ref = useRef(null);
  const barRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
        onDone?.();
      },
    });
    tl.to(barRef.current, { width: "100%", duration: 1.1, ease: "power2.inOut" })
      .to(".loader-word", { yPercent: -100, stagger: 0.05, duration: 0.6, ease: "power3.inOut" }, "-=0.2")
      .to(ref.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.1");
  }, [onDone]);

  if (done) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-obsidian)]">
      <div className="reveal-mask">
        <p className="loader-word font-display text-2xl italic text-[var(--color-gold-bright)] md:text-3xl">
          E for Me
        </p>
      </div>
      <div className="mt-6 h-[1px] w-40 overflow-hidden bg-white/10">
        <div ref={barRef} className="h-full w-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-bright)]" />
      </div>
    </div>
  );
}
