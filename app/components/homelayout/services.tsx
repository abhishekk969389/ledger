"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiArrowLongRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";

export default function Services({ gridMode = false }: { gridMode?: boolean }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const touchX = useRef<number | null>(null);

  const data = site.ourServices;

  // responsive cards per view
  useEffect(() => {
    if (gridMode) return;
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : w < 1280 ? 3 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [gridMode]);

  const maxIndex = data.services.length - perView;
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  return (
    <section className={`bg-white ${gridMode ? "" : "mt-8 sm:mt-10 md:mt-12 lg:mt-14"}`}>
      {/* Heading */}
      <div className={`mx-auto max-w-3xl px-6 text-center ${gridMode ? "mt-12 lg:mt-16" : ""}`}>
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
            {data.badge}
          </p>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0b3b34]">
          {data.titlePrefix}
          <span className="block text-[#b98a4a]">{data.titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          {data.description}
        </p>
      </div>

      <div className="relative mx-auto mt-6 max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {gridMode ? (
          /* GRID LAYOUT */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            {data.services.map(({ title, text, icon, img, slug }) => {
              const Icon = iconMap[icon];
              return (
                <article key={title} className="overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm transition hover:shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="h-[180px] w-full object-cover" />
                  <div className="relative px-6 pb-6">
                    <div className="-mt-9 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white bg-[#0b3b34] text-3xl text-[#e5b861]">
                      {Icon && <Icon />}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0b3b34]">{title}</h3>
                    <span className="mt-2 block h-[2px] w-8 bg-[#b98a4a]" />
                    <p className="mt-3 min-h-[72px] text-[15px] leading-relaxed text-gray-500">
                      {text}
                    </p>
                    <Link href={`/servicedetails?service=${slug}`} className="group mt-4 flex items-center justify-between text-sm font-semibold text-gray-900">
                      Read More
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b98a4a] text-lg text-[#b98a4a] transition group-hover:bg-[#b98a4a] group-hover:text-white">
                        <HiArrowLongRight />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* SLIDER LAYOUT */
          <>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-1 top-1/2 z-10 hidden h-9 w-9 md:left-2 md:h-10 md:w-10 -translate-y-1/2 md:flex items-center justify-center rounded-full bg-[#0b3b34] text-xl text-white shadow-md transition hover:bg-[#b98a4a]"
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-1 top-1/2 z-10 hidden h-9 w-9 md:right-2 md:h-10 md:w-10 -translate-y-1/2 md:flex items-center justify-center rounded-full bg-[#0b3b34] text-xl text-white shadow-md transition hover:bg-[#b98a4a]"
            >
              <HiChevronRight />
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
                {data.services.map(({ title, text, icon, img, slug }) => {
                  const Icon = iconMap[icon];
                  return (
                    <div
                      key={title}
                      className="shrink-0 px-3"
                      style={{ width: `${100 / perView}%` }}
                    >
                      <article className="overflow-hidden rounded-lg bg-white border border-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={title} className="h-[180px] w-full object-cover" />

                        <div className="relative px-6 pb-6">
                          <div className="-mt-9 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white bg-[#0b3b34] text-3xl text-[#e5b861]">
                            {Icon && <Icon />}
                          </div>

                          <h3 className="mt-4 text-xl font-semibold text-[#0b3b34]">{title}</h3>
                          <span className="mt-2 block h-[2px] w-8 bg-[#b98a4a]" />
                          <p className="mt-3 min-h-[72px] text-[15px] leading-relaxed text-gray-500">
                            {text}
                          </p>

                          <Link
                            href={`/servicedetails?service=${slug}`}
                            className="group mt-4 flex items-center justify-between text-sm font-semibold text-gray-900"
                          >
                            Read More
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b98a4a] text-lg text-[#b98a4a] transition group-hover:bg-[#b98a4a] group-hover:text-white">
                              <HiArrowLongRight />
                            </span>
                          </Link>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-4 hidden justify-center gap-3 md:flex">
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
          </>
        )}
      </div>
    </section>
  );
}
