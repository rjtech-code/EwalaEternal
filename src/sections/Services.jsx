import { useRef } from "react";
import { Compass, Factory, Sparkles, FileText, Laptop2, Users2, Landmark, Truck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const SERVICES = [
  { icon: Compass, title: "Export Consulting", text: "Market research, entry strategy and a clear roadmap to your first order." },
  { icon: Factory, title: "Factory Development", text: "Machinery, automation and quality systems built to global standards." },
  { icon: Sparkles, title: "Branding", text: "A global brand identity that earns trust before the first meeting." },
  { icon: FileText, title: "Export Documentation", text: "Compliance, certification and paperwork handled end to end." },
  { icon: Laptop2, title: "Digital Export", text: "Website, digital presence and B2B lead generation that works while you sleep." },
  { icon: Users2, title: "Buyer Development", text: "Matchmaking with verified importers, distributors and global buyers." },
  { icon: Landmark, title: "Government Support", text: "Schemes, incentives and regulatory guidance, simplified." },
  { icon: Truck, title: "Logistics", text: "Shipping, customs clearance and supply chain, coordinated for you." },
];

function ServiceCard({ s, i }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={(i % 4) * 0.06} y={30}>
      <div
        ref={ref}
        onMouseMove={onMove}
        data-cursor-hover
        className="group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-slab)]/60 p-7 transition-colors duration-300 hover:border-[var(--color-gold)]/50"
        style={{
          backgroundImage:
            "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(201,162,75,0.14), transparent 70%)",
        }}
      >
        <s.icon className="text-[var(--color-gold-bright)] transition-transform duration-300 group-hover:-translate-y-1" size={26} />
        <h3 className="mt-5 font-display text-lg text-[var(--color-bone)]">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-bone)]/60">{s.text}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-navy)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Every step of export,"
          italic="under one roof."
          description="From the first market study to the first shipment on the water — we cover the whole chain, not just one link of it."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
