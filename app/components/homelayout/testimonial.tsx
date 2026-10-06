"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const touchX = useRef<number | null>(null);

  const data = site.testimonialSec;
  const QuoteLeft = iconMap["FaQuoteLeft"];
  const QuoteRight = iconMap["FaQuoteRight"];
  const Star = iconMap["FaStar"];

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : w < 1100 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = data.reviews.length - perView;
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  const arrowCls =
    "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b3b34] text-xl text-white shadow-md transition hover:bg-[#b98a4a] sm:h-10 sm:w-10";

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
            {data.badge}
          </p>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold  text-[#0b3b34]">
          {data.titlePrefix}
          <span className="block text-[#b98a4a]">{data.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          {data.description}
        </p>
      </motion.div>

      {/* Slider */}
      <div className="relative mx-auto mt-6 max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <button onClick={prev} aria-label="Previous" className={`${arrowCls} hidden md:flex left-1 md:left-2`}>
          <HiArrowLongLeft />
        </button>
        <button onClick={next} aria-label="Next" className={`${arrowCls} hidden md:flex right-1 md:right-2`}>
          <HiArrowLongRight />
        </button>

        <div
          className="overflow-hidden py-4"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const diff = touchX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
            touchX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
          >
            {data.reviews.map((r, i) => (
              <div
                key={r.name}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex h-full flex-col rounded-xl bg-white p-7 border-1 border-gray-200"
                >
                  {QuoteLeft && <QuoteLeft className="text-4xl text-[#b98a4a]" />}

                  <p className="mt-4 min-h-[130px] text-[17px] leading-relaxed text-gray-700">
                    {r.text}
                  </p>

                  <div className="mt-4 flex gap-1 text-[#e0951d]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{Star && <Star />}</span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.img}
                      alt={r.name}
                      className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[#0b3b34]">{r.name}</h3>
                      <p className="mt-1 text-sm leading-snug text-gray-600">
                        {r.role}
                        <br />
                        {r.company}
                      </p>
                    </div>
                    {QuoteRight && <QuoteRight className="ml-auto shrink-0 text-5xl text-gray-200" />}
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 hidden justify-center gap-3 md:flex">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-[#b98a4a]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
