"use client";

import { site } from "@/data/index";
import { iconMap } from "@/app/components/iconMap";
import AnimatedCounter from "@/app/components/ui/animated-counter";

export default function Achievements() {
  const data = site.achievements;

  return (
    <section className="relative overflow-hidden bg-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Diagonal-cut image (right side, desktop) */}
      <div className="absolute inset-y-0 right-0 hidden w-[48%] [clip-path:polygon(27%_0,100%_0,100%_100%,0_100%)] lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.bgImage} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Mobile / tablet: faded image background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15 lg:hidden"
      />

      {/* Beige diagonal stripes (left) */}
      <div className="pointer-events-none absolute -left-24 top-0 hidden h-[140%] w-28 origin-top-left -rotate-[28deg] bg-[#f3ebdc] lg:block" />
      <div className="pointer-events-none absolute -left-40 top-0 hidden h-[140%] w-20 origin-top-left -rotate-[28deg] bg-[#f8f3e8] lg:block" />
      {/* White diagonal stripe over image edge */}
      <div className="pointer-events-none absolute inset-y-0 left-[44%] hidden w-3 -skew-x-[18deg] bg-white/70 lg:block" />

      <div className="relative mx-auto grid max-w-[1320px] px-4 sm:px-6 lg:px-8 items-center gap-10 py-14 lg:grid-cols-[30%_1fr] lg:gap-8 xl:grid-cols-[28%_1fr]">
        {/* Text */}
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#b98a4a]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#0b3b34]">
              {data.badge}
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0b3b34] md:text-4xl">
            {data.titlePrefix}
            <span className="block text-[#b98a4a]">{data.titleHighlight}</span>
            {data.titleSuffix}
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500">
            {data.description}
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:ml-6 lg:max-w-[640px]">
          {data.stats.map(({ icon, number, suffix, label }) => {
            const Icon = iconMap[icon];
            return (
              <div
                key={label}
                className="flex flex-col items-center rounded-md bg-white px-3 pb-7 pt-6 text-center shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe1] text-2xl text-[#0b3b34] ring-1 ring-[#b98a4a]/20">
                  {Icon && <Icon />}
                </span>
                <p className="mt-4 text-4xl font-bold text-[#0b3b34]">
                  <AnimatedCounter endValue={number} />
                  <span className="text-[#b98a4a]">{suffix}</span>
                </p>
                <span className="my-3 h-[2px] w-8 bg-[#b98a4a]" />
                <p className="max-w-[90px] text-sm font-medium leading-snug text-gray-700">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
