import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, italic, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal y={20}>
        <p className="eyebrow mb-4">{eyebrow}</p>
      </Reveal>
      <Reveal y={30} delay={0.05}>
        <h2 className="font-display text-4xl leading-tight text-[var(--color-bone)] md:text-5xl">
          {title} {italic && <span className="gold-gradient-text italic">{italic}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal y={20} delay={0.1}>
          <p className="mt-5 text-[var(--color-bone)]/65">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
