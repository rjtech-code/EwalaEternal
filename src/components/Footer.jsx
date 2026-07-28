import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const COLS = [
  {
    title: "Company",
    links: ["Who We Are", "E For Me Campaign", "180-Day Program", "Ewala Ecosystem"],
  },
  {
    title: "Explore",
    links: ["Services", "Industries", "Global Exhibitions", "Success Roadmap"],
  },
  {
    title: "Resources",
    links: ["Event Calendar", "Testimonials", "Government Schemes", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-navy)] pt-20">
      <div className="no-scrollbar overflow-hidden border-b border-[var(--color-line)] py-4">
        <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-10 whitespace-nowrap">
          {Array(2)
            .fill(0)
            .flatMap(() => [
              "EXPORT FOR ME", "EXPORT FOR EVERYONE", "EXPORT EVERYWHERE", "ONE PARTNER · ONE ECOSYSTEM",
            ])
            .map((t, i) => (
              <span key={i} className="font-display text-sm italic tracking-widest text-[var(--color-gold)]/50">
                {t}
              </span>
            ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--color-gold)] font-display text-lg text-[var(--color-gold-bright)]">E</span>
              <span className="font-display text-lg text-[var(--color-bone)]">Ewala Eternal</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-[var(--color-bone)]/55">
              Building business beyond borders — India&rsquo;s complete export ecosystem for the E-Ston industry.
            </p>
            <div className="mt-6 flex gap-4 text-[var(--color-bone)]/50">
              {[FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" data-cursor-hover className="transition-colors hover:text-[var(--color-gold-bright)]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[var(--color-bone)]/60 transition-colors hover:text-[var(--color-bone)]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-line)] pt-8 text-xs text-[var(--color-bone)]/40 md:flex-row">
          <p>© {new Date().getFullYear()} Ewala Eternal Pvt. Ltd. — One Partner. One Ecosystem. Endless Opportunities.</p>
          <p>+91 72111 68000 · export@ewalaeternal.com</p>
        </div>
      </div>
    </footer>
  );
}
