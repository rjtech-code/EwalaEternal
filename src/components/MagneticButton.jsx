import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticButton({ children, variant = "solid", className = "", ...props }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.5, duration: 0.5, ease: "power3.out" });
  };

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-bright)] text-[var(--color-obsidian)] hover:shadow-[0_0_40px_-8px_rgba(201,162,75,0.7)]"
      : variant === "outline"
      ? "border border-[var(--color-gold)]/60 text-[var(--color-champagne)] hover:bg-[var(--color-gold)]/10"
      : "text-[var(--color-champagne)] hover:text-[var(--color-gold-bright)]";

  return (
    <button
      ref={ref}
      data-cursor-hover
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
