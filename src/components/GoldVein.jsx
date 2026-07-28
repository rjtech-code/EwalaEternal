import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * A single continuous vein — the way a gold seam runs through cut marble —
 * traced down the entire page. It draws in with scroll progress, tying every
 * section together as one connected ecosystem instead of separate blocks.
 */
export default function GoldVein() {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const setHeight = () => {
      svgRef.current.setAttribute("height", document.documentElement.scrollHeight);
    };
    setHeight();
    window.addEventListener("resize", setHeight);

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        path.style.strokeDashoffset = length * (1 - self.progress);
      },
    });

    return () => {
      st.kill();
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none fixed left-0 top-0 -z-0 hidden w-full opacity-70 md:block"
      style={{ position: "absolute" }}
      viewBox="0 0 100 4000"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="veinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6c56e" />
          <stop offset="50%" stopColor="#c9a24b" />
          <stop offset="100%" stopColor="#8a6d2f" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="M 6 0 C 30 120, -10 260, 8 400 S 30 620, 10 800 S -8 1000, 12 1200 S 32 1420, 8 1600 S -10 1820, 10 2000 S 30 2220, 6 2400 S -8 2620, 12 2800 S 30 3020, 8 3200 S -10 3420, 10 3600 S 26 3820, 8 4000"
        fill="none"
        stroke="url(#veinGrad)"
        strokeWidth="0.35"
        strokeLinecap="round"
      />
    </svg>
  );
}
