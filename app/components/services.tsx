"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaChartLine,
  FaShieldAlt,
  FaBalanceScale,
  FaUsers,
  FaBuilding,
  FaHandshake,
} from "react-icons/fa";
import { HiArrowLongRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const services = [
  {
    title: "Accounting & Bookkeeping",
    text: "Accurate and timely bookkeeping to keep your business finances organized and stress-free.",
    icon: FaCalculator,
    img: u("photo-1554224155-6726b3ff858f"),
  },
  {
    title: "Tax Planning & Compliance",
    text: "Strategic tax planning to minimize liabilities and ensure full compliance with evolving tax laws and regulations.",
    icon: FaFileInvoiceDollar,
    img: u("photo-1450101499163-c8848c66ca85"),
  },
  {
    title: "Business Advisory Management",
    text: "Expert guidance to help you make informed decisions, improve efficiency and achieve long-term growth.",
    icon: FaChartLine,
    img: u("photo-1460925895917-afdab827c52f"),
  },
  {
    title: "Regulatory & Compliance",
    text: "Stay compliant with applicable laws and regulations with our reliable compliance support service.",
    icon: FaShieldAlt,
    img: u("photo-1589829545856-d10d557cf95f"),
  },
  {
    title: "Audit & Assurance",
    text: "Independent audits that give stakeholders confidence in your financial statements.",
    icon: FaBalanceScale,
    img: u("photo-1554224154-26032ffc0d07"),
  },
  {
    title: "Payroll Services",
    text: "Hassle-free payroll processing, statutory deductions and timely salary compliance.",
    icon: FaUsers,
    img: u("photo-1507679799987-c73779587ccf"),
  },
  {
    title: "Company Registration",
    text: "End-to-end support to incorporate and register your business the right way.",
    icon: FaBuilding,
    img: u("photo-1556761175-5973dc0f32e7"),
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);
  const touchX = useRef<number | null>(null);

  // responsive cards per view
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : w < 1280 ? 3 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = services.length - perView;
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  return (
    <section className="bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Heading */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-[2px] w-10 bg-[#b98a4a]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
            Our Services
          </p>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0b3b34]">
          Professional Financial Solutions
          <span className="block text-[#b98a4a]">for Your Business</span>
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-500">
          We offer a full range of accounting, tax, advisory and compliance
          services to help your business stay organized, compliant and ready for
          future growth.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mx-auto mt-6 max-w-[1300px] px-8 lg:px-14">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-1 top-1/2 z-10 flex h-9 w-9 sm:left-2 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b3b34] text-xl text-white shadow-md transition hover:bg-[#b98a4a]"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-1 top-1/2 z-10 flex h-9 w-9 sm:right-2 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b3b34] text-xl text-white shadow-md transition hover:bg-[#b98a4a]"
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
            {services.map(({ title, text, icon: Icon, img }) => (
              <div
                key={title}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="overflow-hidden rounded-lg bg-white border-1 border-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} className="h-[180px] w-full object-cover" />

                  <div className="relative px-6 pb-6">
                    <div className="-mt-9 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white bg-[#0b3b34] text-3xl text-[#e5b861]">
                      <Icon />
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-[#0b3b34]">{title}</h3>
                    <span className="mt-2 block h-[2px] w-8 bg-[#b98a4a]" />
                    <p className="mt-3 min-h-[72px] text-[15px] leading-relaxed text-gray-500">
                      {text}
                    </p>

                    <a
                      href="#"
                      className="group mt-4 flex items-center justify-between text-sm font-semibold text-gray-900"
                    >
                      Read More
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b98a4a] text-lg text-[#b98a4a] transition group-hover:bg-[#b98a4a] group-hover:text-white">
                        <HiArrowLongRight />
                      </span>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-3">
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