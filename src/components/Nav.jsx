import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#who-we-are", label: "About" },
  { href: "#ecosystem-180", label: "180-Day Program" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#exhibitions", label: "Exhibitions" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -20 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--color-obsidian)]/80 backdrop-blur-md border-b border-[var(--color-line)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" onClick={(e) => { e.preventDefault(); go("#top"); }} className="flex items-center gap-2" data-cursor-hover>
          <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[var(--color-gold)] font-display text-lg text-[var(--color-gold-bright)]">E</span>
          <span className="font-display text-sm tracking-wide text-[var(--color-bone)]">
            Ewala Eternal
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                data-cursor-hover
                onClick={() => go(l.href)}
                className="text-xs uppercase tracking-[0.14em] text-[var(--color-bone)]/70 transition-colors hover:text-[var(--color-gold-bright)]"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          data-cursor-hover
          onClick={() => go("#contact")}
          className="hidden rounded-full border border-[var(--color-gold)]/60 px-5 py-2 text-xs uppercase tracking-[0.14em] text-[var(--color-champagne)] transition hover:bg-[var(--color-gold)]/10 lg:inline-flex"
        >
          Join Now
        </button>

        <button className="lg:hidden text-[var(--color-gold)]" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-[var(--color-obsidian)]/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="w-full py-3 text-left text-sm uppercase tracking-[0.14em] text-[var(--color-bone)]/80 border-b border-white/5"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
