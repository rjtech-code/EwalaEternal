import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import TradeNetworkCanvas from "../components/TradeNetworkCanvas";

export default function CTA() {
  return (
    <section id="contact" className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[var(--color-obsidian)] py-28">
      <TradeNetworkCanvas className="absolute inset-0 h-full w-full opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-transparent to-[var(--color-obsidian)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal y={20}>
          <p className="eyebrow mb-6">Let's Build The Future Together</p>
        </Reveal>
        <Reveal y={40} delay={0.08}>
          <h2 className="font-display text-4xl leading-tight text-[var(--color-bone)] md:text-6xl">
            One partner. One ecosystem.{" "}
            <span className="gold-gradient-text italic">Endless opportunities.</span>
          </h2>
        </Reveal>
        <Reveal y={20} delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-[var(--color-bone)]/65">
            Whatever stage your business is at — awareness, factory, brand or global buyer —
            there's a place for you in the E For Me campaign.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>Join Now</MagneticButton>
          <MagneticButton variant="outline">Book a Consultation</MagneticButton>
        </Reveal>

        <Reveal delay={0.32} className="mt-14 grid grid-cols-1 gap-4 border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-bone)]/60 sm:grid-cols-3">
          <span>+91 72111 68000</span>
          <span>export@ewalaeternal.com</span>
          <span>www.ewalaeternal.com</span>
        </Reveal>
      </div>
    </section>
  );
}
