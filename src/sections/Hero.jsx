import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import TradeNetworkCanvas from "../components/TradeNetworkCanvas";
import MagneticButton from "../components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line span", {
        yPercent: 120,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
        delay: 1.65,
      });
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 2.3,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.to(".hero-parallax", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-[var(--color-obsidian)]">
      <TradeNetworkCanvas className="absolute inset-0 h-full w-full hero-parallax" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-obsidian)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-obsidian)] via-[var(--color-obsidian)]/60 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="hero-fade eyebrow mb-6 opacity-0">E For Me Campaign · Ewala Eternal Pvt. Ltd.</p>

        <h1 ref={headlineRef} className="max-w-4xl font-display text-[13vw] leading-[0.95] text-[var(--color-bone)] sm:text-[9vw] md:text-[6.4vw]">
          <span className="hero-line reveal-mask block"><span className="inline-block">Export</span></span>
          <span className="hero-line reveal-mask block"><span className="inline-block gold-gradient-text italic">for Everyone</span></span>
        </h1>

        <p className="hero-fade mt-8 max-w-xl text-lg text-[var(--color-bone)]/70 opacity-0 md:text-xl">
          India&rsquo;s complete export ecosystem for the E-Ston industry — from factory floor
          to global buyer, in one connected journey.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4 opacity-0">
          <MagneticButton onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Join Now
          </MagneticButton>
          <MagneticButton variant="outline" onClick={() => document.querySelector("#ecosystem-180")?.scrollIntoView({ behavior: "smooth" })}>
            Book Consultation
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => document.querySelector("#roadmap")?.scrollIntoView({ behavior: "smooth" })}>
            Watch the Journey ↓
          </MagneticButton>
        </div>

        <div className="hero-fade mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-6 opacity-0 font-mono">
          <div>
            <p className="text-2xl text-[var(--color-gold-bright)] md:text-3xl">100+</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--color-bone)]/50">Countries</p>
          </div>
          <div>
            <p className="text-2xl text-[var(--color-gold-bright)] md:text-3xl">1000+</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--color-bone)]/50">Global Buyers</p>
          </div>
          <div>
            <p className="text-2xl text-[var(--color-gold-bright)] md:text-3xl">500+</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--color-bone)]/50">Export-Ready Cos.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-[var(--color-gold)]/70">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
