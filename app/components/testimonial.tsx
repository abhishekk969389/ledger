"use client";

import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const face = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&h=200&q=80`;

const reviews = [
  {
    name: "Rahul Mehta",
    role: "Founder & CEO",
    company: "Mehta Traders",
    img: face("photo-1507003211169-0a1dd7228f2d"),
    text: "Excellent service and professional approach. They helped us streamline our accounting and made tax compliance so much easier. Highly recommended for any growing business.",
  },
  {
    name: "Priya Sharma",
    role: "Managing Director",
    company: "Sharma Enterprises",
    img: face("photo-1494790108377-be9c29b29330"),
    text: "Their team is knowledgeable, responsive and always available for guidance. They have been a valuable partner in our business growth journey. The level of support we receive is outstanding.",
  },
  {
    name: "Amit Verma",
    role: "Director",
    company: "Verma Solutions",
    img: face("photo-1500648767791-00dcc994a43e"),
    text: "Professional, reliable and extremely supportive. They simplified our bookkeeping, improved our financial planning and saved us valuable time. We truly appreciate their dedication and expertise.",
  },
  {
    name: "Neha Kapoor",
    role: "Co-Founder",
    company: "Kapoor Retail",
    img: face("photo-1438761681033-6461ffad8d80"),
    text: "Clear communication and accurate filings every single time. Our audits are now stress-free and our books are always up to date.",
  },
  {
    name: "Vikram Singh",
    role: "Owner",
    company: "Singh Logistics",
    img: face("photo-1472099645785-5658abf4ff4e"),
    text: "Their advisory helped us restructure our costs and plan taxes smartly. A dependable team that truly understands growing businesses.",
  },
  {
    name: "Anjali Rao",
    role: "CFO",
    company: "Rao Technologies",
    img: face("photo-1580489944761-15a19d654956"),
    text: "From payroll to compliance, everything is handled with care and precision. We trust them completely with our finances.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 768 ? 1 : w < 1100 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = reviews.length - perView;
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  const arrowCls =
    "absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b3b34] text-xl text-white shadow-md transition hover:bg-[#b98a4a] sm:h-10 sm:w-10";

  return (
    <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
            Client Reviews
          </p>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold  text-[#0b3b34]">
          What Our Clients Say
          <span className="block text-[#b98a4a]">About Our Services</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          Our clients’ success is our greatest achievement. Here’s what business
          owners and professionals say about working with us.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mx-auto mt-6 max-w-[1400px] px-8 sm:px-12">
        <button onClick={prev} aria-label="Previous" className={`${arrowCls} left-1 sm:left-2`}>
          <HiArrowLongLeft />
        </button>
        <button onClick={next} aria-label="Next" className={`${arrowCls} right-1 sm:right-2`}>
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
            {reviews.map((r) => (
              <div
                key={r.name}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="flex h-full flex-col rounded-xl bg-white p-7 border-1 border-gray-200">
                  <FaQuoteLeft className="text-4xl text-[#b98a4a]" />

                  <p className="mt-4 min-h-[130px] text-[17px] leading-relaxed text-gray-700">
                    {r.text}
                  </p>

                  <div className="mt-4 flex gap-1 text-[#e0951d]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
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
                    <FaQuoteRight className="ml-auto shrink-0 text-5xl text-gray-200" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-3">
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