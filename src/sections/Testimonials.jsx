import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    name: "Stone Manufacturer",
    role: "Kishangarh, Rajasthan",
    text: "We had world-class marble but no idea how to reach a global buyer. The 180-day program gave us the documentation, the brand and the first order — in that order.",
  },
  {
    name: "MSME Exporter",
    role: "Bidasar, Rajasthan",
    text: "Ewala Eternal didn't leave after the exhibition. They stayed until our dealer network was actually operating in three states.",
  },
  {
    name: "Architect & Buyer Partner",
    role: "Jaipur, Rajasthan",
    text: "The Ewala Ecosystem is the first time I've seen manufacturers, government and buyers on the same platform, speaking the same language.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[var(--color-navy)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="Voices from the"
          italic="ecosystem."
        />

        <Reveal delay={0.1} className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            centeredSlides
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="glass flex h-full flex-col justify-between rounded-2xl p-8">
                  <Quote className="text-[var(--color-gold)]/60" size={26} />
                  <p className="mt-5 text-[var(--color-bone)]/75">{t.text}</p>
                  <div className="mt-6 border-t border-[var(--color-line)] pt-4">
                    <p className="font-display text-[var(--color-bone)]">{t.name}</p>
                    <p className="text-xs uppercase tracking-wide text-[var(--color-bone)]/50">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
