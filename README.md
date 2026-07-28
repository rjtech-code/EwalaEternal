# Ewala Eternal — "E For Me" Campaign Website

A cinematic, scroll-driven React site for Ewala Eternal Pvt. Ltd., built around the
brand's actual posters and campaign copy.

## Stack
React 19 · Vite · Tailwind CSS v4 · GSAP + ScrollTrigger · Framer Motion ·
Lenis smooth scroll · Swiper · lucide-react / react-icons

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## What's implemented

- **Hero** — canvas-rendered trade-route network (drifting nodes + globe rings) instead
  of a heavy 3D model, animated headline reveal, live stat counters.
- **Signature element** — a single continuous gold "vein" (`GoldVein.jsx`) drawn down the
  entire page with scroll, echoing marble veining and the "one ecosystem" idea.
- **Who We Are** — mission / vision / values + a mini company timeline.
- **180-Day Export Ecosystem** — pinned, horizontal-scrolling GSAP timeline of the six
  phases from the brief (Export Awareness → International Launch).
- **Services & Industries** — hover-glow interactive card grids.
- **Global Exhibitions** — clickable SVG world map (China / Italy / USA / Russia /
  Middle East / India) with flight-path arcs and a floating detail panel, built from
  the Build Guanxi 2026 and Marmomac Verona posters.
- **Ewala Ecosystem** — circular stakeholder diagram (manufacturers, banks, government,
  etc.) with slow ambient rotation.
- **Success Roadmap** — animated vertical path through the nine funnel stages.
- **Events** — real dates/venues pulled from the uploaded posters (5 Aug 2026 workshop,
  21 Aug 2026 masterclass, Marmomac Verona 22–25 Sept 2026).
- **Testimonials, CTA, Footer** — glass cards, marquee, social links.
- Custom cursor, magnetic buttons, scroll-progress bar, cinematic loader, reduced-motion
  support, and SEO meta tags in `index.html`.

## Notes / next steps

- Testimonials are written in the brand's voice but are illustrative — swap in real
  client quotes when available.
- The hero/CTA background uses a lightweight 2D canvas network rather than a full
  Three.js/R3F globe, for performance; a genuine 3D globe can be dropped into
  `TradeNetworkCanvas.jsx` if you want the heavier version later.
- `npm run build` currently reports one chunk over 500kB (mostly GSAP + Framer Motion +
  Swiper); fine for a marketing site, but consider route-based code-splitting if you
  add more pages.
- Social links in the footer point to `#` placeholders — wire up your real profile URLs.
